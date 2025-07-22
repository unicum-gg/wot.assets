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
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => D,
                        pxToRem: () => A,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => y,
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
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
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
                    y = Promise.all([
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
                u.d(t, { B3: () => c, Gr: () => m, Z5: () => s, cy: () => o, B0: () => i, ry: () => b });
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
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    p = u(3138);
                const g = ['args'];
                function A(e, t, u, a, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                            A(r, a, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, a, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = (e, t) => {
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
                                })(t, g);
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
                    v = () => D(i.CLOSE),
                    B = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var C = u(7572);
                const h = n.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                _ = o.height,
                                d = {
                                    x: p.O.view.pxToRem(l) + s.x,
                                    y: p.O.view.pxToRem(c) + s.y,
                                    width: p.O.view.pxToRem(m),
                                    height: p.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
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
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, v);
                        },
                        handleViewEvent: D,
                        onBindingsReady: b,
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
                        ClickOutsideManager: h,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            9824: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => bt,
                        Bar: () => gt,
                        DefaultScroll: () => Ft,
                        Direction: () => st,
                        defaultSettings: () => ot,
                        useHorizontalScrollApi: () => lt,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => Pt, Bar: () => St, Default: () => Rt, useVerticalScrollApi: () => Dt }));
                var r = u(6179),
                    s = u.n(r);
                const o = (e, t, u) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e, t, u) {
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
                })(c || (c = {}));
                const _ = i.O.client.getSize('rem'),
                    d = _.width,
                    E = _.height,
                    p = Object.assign({ width: d, height: E }, m(d, E, l)),
                    g = (0, r.createContext)(p),
                    A = ['children'],
                    F = (e) => {
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
                        const a = (0, r.useContext)(g),
                            n = a.extraLarge,
                            s = a.large,
                            i = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            m = a.extraLargeWidth,
                            _ = a.largeWidth,
                            d = a.mediumWidth,
                            E = a.smallWidth,
                            p = a.extraSmallWidth,
                            F = a.extraLargeHeight,
                            b = a.largeHeight,
                            D = a.mediumHeight,
                            v = a.smallHeight,
                            B = a.extraSmallHeight,
                            C = { extraLarge: F, large: b, medium: D, small: v, extraSmall: B };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && n) return t;
                            if (u.large && s) return t;
                            if (u.medium && i) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && m) return o(t, u, C);
                            if (u.largeWidth && _) return o(t, u, C);
                            if (u.mediumWidth && d) return o(t, u, C);
                            if (u.smallWidth && E) return o(t, u, C);
                            if (u.extraSmallWidth && p) return o(t, u, C);
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
                                if (u.largeHeight && b) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && v) return t;
                                if (u.extraSmallHeight && B) return t;
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
                    (0, r.memo)(F));
                const b = (0, r.memo)(({ children: e }) => {
                    const t = (0, r.useContext)(g),
                        u = (0, r.useState)(t),
                        a = u[0],
                        n = u[1],
                        o = (0, r.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                a = i.O.view.pxToRem(t);
                            n(Object.assign({ width: u, height: a }, m(u, a, l)));
                        }, []);
                    (((e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(g.Provider, { value: c }, e);
                });
                var D = u(6483),
                    v = u.n(D),
                    B = u(926),
                    C = u.n(B);
                let h, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const y = () => {
                        const e = (0, r.useContext)(g),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
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
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    S = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const P = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL_WIDTH,
                        [f.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [f.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: C().SMALL_HEIGHT,
                        [w.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [w.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [h.ExtraSmall]: '',
                        [h.Small]: C().SMALL,
                        [h.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [h.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [h.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    M = (e) => {
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
                            })(e, S);
                        const n = y(),
                            r = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', T({ className: v()(u, P[r], N[o], x[i]) }, a), t);
                    },
                    L = ['children'],
                    k = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, L);
                        return s().createElement(b, null, s().createElement(M, u, t));
                    };
                var O = u(493),
                    I = u.n(O);
                let H, $, U, G, W, z, j;
                (!(function (e) {
                    ((e.BeforeProgression = 'beforeProgression'),
                        (e.Active = 'active'),
                        (e.PostProgression = 'postProgression'),
                        (e.Completed = 'completed'),
                        (e.Disabled = 'disabled'));
                })(H || (H = {})),
                    (function (e) {
                        ((e[(e.Disabled = 0)] = 'Disabled'), (e[(e.Active = 1)] = 'Active'));
                    })($ || ($ = {})),
                    (function (e) {
                        ((e[(e.EmptyRewards = 0)] = 'EmptyRewards'),
                            (e[(e.ReadyRewards = 1)] = 'ReadyRewards'),
                            (e[(e.AnimatedRewards = 2)] = 'AnimatedRewards'));
                    })(U || (U = {})),
                    (function (e) {
                        ((e[(e.Progress = 0)] = 'Progress'),
                            (e[(e.Quests = 1)] = 'Quests'),
                            (e[(e.Shop = 2)] = 'Shop'));
                    })(G || (G = {})),
                    (function (e) {
                        ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'));
                    })(W || (W = {})),
                    (function (e) {
                        ((e[(e.Tab = 0)] = 'Tab'),
                            (e[(e.Chapter = 1)] = 'Chapter'),
                            (e[(e.ShopInfo = 2)] = 'ShopInfo'));
                    })(z || (z = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'), (e[(e.Tokens = 1)] = 'Tokens'), (e[(e.Coins = 2)] = 'Coins'));
                    })(j || (j = {})));
                const Q = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                ((u = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                        }
                    );
                };
                var V = u(7030);
                const q = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    X = s().forwardRef(function ({ classNames: e, arrowRef: t, size: u = 'medium', className: a }, n) {
                        return s().createElement(
                            'div',
                            { className: v()(q.base, q[`base__${u}`], a), ref: n },
                            s().createElement('div', {
                                className: v()(
                                    q.border,
                                    q.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: v()(
                                    q.border,
                                    q.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', { className: v()(q.arrow, null == e ? void 0 : e.arrow), ref: t }),
                        );
                    });
                function Y(e) {
                    engine.call('PlaySound', e);
                }
                const K = {
                        playHighlight() {
                            Y('highlight');
                        },
                        playClick() {
                            Y('play');
                        },
                        playYes() {
                            Y('yes1');
                        },
                    },
                    Z = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    J = { mouseEnter: 'highlight', click: 'play' },
                    ee = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: u,
                            classNames: a,
                            sounds: n = J,
                            notification: r,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: m,
                            onMouseLeave: _,
                            WrapperElement: d,
                        },
                        E,
                    ) {
                        const p = (e, u) => {
                                !t && n[u] && Y(n[u]);
                            },
                            g = s().createElement(
                                'div',
                                {
                                    className: v()(
                                        Z.base,
                                        Z[`base__${i}`],
                                        t && v()(Z.base__active, null == a ? void 0 : a.activeTab),
                                        u,
                                    ),
                                    onClick: ((e) => () => {
                                        (p(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (p(0, 'mouseEnter'), null == m || m(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (p(0, 'mouseLeave'), null == _ || _(e));
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: v()(Z.highlight, null == a ? void 0 : a.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : s().createElement('div', {
                                          className: v()(Z.icon, Z[`icon__${i}`], null == a ? void 0 : a.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, isActive: t, size: i }),
                                r &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: v()(
                                                Z.notification,
                                                Z[`notification__${r.type}`],
                                                r.size ? Z[`notification__${r.size}`] : Z.notification__medium,
                                                null == a ? void 0 : a.notification,
                                            ),
                                        },
                                        'dot' !== r.type && r.value,
                                    ),
                            );
                        return d ? s().createElement(d, { key: e, id: e }, g) : g;
                    }),
                    te = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    ue = s().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: u,
                        className: a,
                        classNames: n,
                        size: o = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: m,
                        onMouseLeave: _,
                        WrapperElement: d,
                    }) {
                        const E = (0, r.useRef)(null),
                            p = (0, r.useRef)(null),
                            g = (0, r.useRef)(null),
                            A = (0, r.useRef)(null),
                            F = (0, V.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            b = (0, V.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            D = (0, V.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = p.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / i.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (F.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        b.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 50 },
                                        }));
                                },
                                onRest: () => {
                                    (F.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        b.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            B = (0, r.useCallback)((e) => {
                                null !== g.current &&
                                    null !== A.current &&
                                    e(g.current.getBoundingClientRect().top - A.current.getBoundingClientRect().top);
                            }, []);
                        var C, h;
                        return (
                            (0, r.useEffect)(() => {
                                B((e) => {
                                    D.start({ position: e, config: { duration: 200 } });
                                });
                            }, [D, e, B]),
                            (0, r.useEffect)(
                                () =>
                                    Q(() => {
                                        B((e) => {
                                            D.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [D, B, o],
                            ),
                            (C = () => {
                                B((e) => {
                                    D.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (h = [D, B]),
                            (0, r.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    (e(), (e = Q(C)));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        (e(), window.removeEventListener('resize', t));
                                    }
                                );
                            }, h),
                            s().createElement(
                                'div',
                                { className: v()(te.base, a), ref: A },
                                t.map(({ id: t, items: a, title: r, groupClassNames: i }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: v()(te.group, te[`group__${o}`], null == i ? void 0 : i.group),
                                        },
                                        r &&
                                            s().createElement(
                                                'div',
                                                { className: v()(te.title, null == i ? void 0 : i.title) },
                                                r,
                                            ),
                                        a.map(({ id: t, icon: a, notification: r }) =>
                                            s().createElement(ee, {
                                                key: t,
                                                id: t,
                                                icon: a,
                                                notification: r,
                                                ref: g,
                                                sounds: u,
                                                isActive: e === t,
                                                size: o,
                                                className: null == n ? void 0 : n.tab,
                                                classNames: n,
                                                additionContent: l,
                                                onMouseEnter: m,
                                                onMouseLeave: _,
                                                onClick: c,
                                                WrapperElement: d,
                                            }),
                                        ),
                                    ),
                                ),
                                s().createElement(X, {
                                    arrowRef: E,
                                    ref: p,
                                    size: o,
                                    className: null == n ? void 0 : n.frame,
                                    classNames: n,
                                }),
                            )
                        );
                    });
                let ae;
                function ne(e) {
                    return e.replace(/-/g, '_');
                }
                function re(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ae || (ae = {}));
                const se = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    oe = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    ie = (e, t, u = ae.left) => e.split(t).reduce(u === ae.left ? se : oe, []),
                    le = (() => {
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
                    ce = ['zh_cn', 'zh_sg', 'zh_tw'];
                var me = u(3403);
                let _e, de, Ee, pe, ge, Ae, Fe, be;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(_e || (_e = {})),
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
                            (e.LootBoxToken = 'lootBoxToken'));
                    })(de || (de = {})),
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
                    })(Ee || (Ee = {})),
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
                    })(pe || (pe = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ge || (ge = {})),
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
                    })(Ae || (Ae = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Fe || (Fe = {})),
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
                    })(be || (be = {})));
                var De = u(4179);
                class ve extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? De.B3.GOLD : De.B3.INTEGRAL;
                        const t = De.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                ve.defaultProps = { format: 'integral' };
                const Be = [
                        de.Items,
                        de.Equipment,
                        de.Xp,
                        de.XpFactor,
                        de.Blueprints,
                        de.BlueprintsAny,
                        de.Goodies,
                        de.Berths,
                        de.Slots,
                        de.Tokens,
                        de.CrewSkins,
                        de.CrewBooks,
                        de.Customizations,
                        de.CreditsFactor,
                        de.TankmenXp,
                        de.TankmenXpFactor,
                        de.FreeXpFactor,
                        de.BattleToken,
                        de.PremiumUniversal,
                        de.NaturalCover,
                        de.BpCoin,
                        de.BattlePassSelectToken,
                        de.BattlaPassFinalAchievement,
                        de.BattleBadge,
                        de.BonusX5,
                        de.CrewBonusX3,
                        de.NewYearFillers,
                        de.NewYearInvoice,
                        de.EpicSelectToken,
                        de.Comp7TokenWeeklyReward,
                        de.Comp7TokenCouponReward,
                        de.BattleBoosterGift,
                        de.CosmicLootboxCommon,
                        de.CosmicLootboxSilver,
                        de.SelectableBonus,
                    ],
                    Ce = [de.Gold, de.Credits, de.Crystal, de.FreeXp],
                    he = [de.BattlePassPoints],
                    fe = [de.PremiumPlus, de.Premium],
                    we = (e) =>
                        Be.includes(e)
                            ? ge.MULTI
                            : Ce.includes(e)
                              ? ge.CURRENCY
                              : he.includes(e)
                                ? ge.NUMBER
                                : fe.includes(e)
                                  ? ge.PREMIUM_PLUS
                                  : ge.STRING,
                    ye = ['engravings', 'backgrounds'],
                    Se = ['engraving', 'background'],
                    Te = (e, t = pe.Small) => {
                        const u = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case pe.S600x450:
                                        return 'c_600x450';
                                    case pe.S400x300:
                                        return 'c_400x300';
                                    case pe.S296x222:
                                        return 'c_296x222';
                                    case pe.S232x174:
                                        return 'c_232x174';
                                    case pe.Big:
                                        return 'c_80x80';
                                    case pe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case pe.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case pe.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const a = ye[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            r = n.$dyn(u);
                                        return r ? `${r}` : `${n.$dyn(Se[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    Re = (e, t, u) => {
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
                    };
                let Pe;
                function Ne(e) {
                    return e;
                }
                function xe() {
                    return !1;
                }
                (!(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(Pe || (Pe = {})),
                    console.log);
                var Me = u(9174);
                function Le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const ke = (e) => (0 === e ? window : window.subViews.get(e));
                const Oe = function (e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                };
                function Ie(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
                var He = u(3946);
                let $e, Ue;
                (!(function (e) {
                    ((e.Disabled = 'disabled'), (e.Active = 'active'), (e.Completed = 'completed'));
                })($e || ($e = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'),
                            (e[(e.Tokens = 1)] = 'Tokens'),
                            (e[(e.Coins = 2)] = 'Coins'),
                            (e[(e.Lock = 3)] = 'Lock'));
                    })(Ue || (Ue = {})),
                    $e.Active);
                const Ge = $e.Disabled,
                    We = $e.Completed,
                    ze = Pe.Done,
                    je = Pe.Locked,
                    Qe = (Pe.Active, U.EmptyRewards, U.ReadyRewards),
                    Ve =
                        (U.AnimatedRewards, (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1)),
                    qe = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: Ve },
                    },
                    Xe = {
                        from: { opacity: 0 },
                        enter: { opacity: 0.2 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: Ve },
                    },
                    Ye = { config: { duration: 450, easing: Ve } },
                    Ke = 'premium_universal',
                    Ze = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: o }) {
                                const l = (0, r.useRef)([]),
                                    c = (e, u, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ke,
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
                                                const s = (e) => {
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
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return (n.set(l, u), e && u(s(r)), l);
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
                                                                                    return Le(e, t);
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
                                                                                          ? Le(e, t)
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
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : s.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        levels: e.array('levels', []),
                                                        chapters: e.array('chapters', []),
                                                        quests: e.array('quests', []),
                                                        finalReward: e.object('finalReward'),
                                                    },
                                                    u = (0, He.Om)(
                                                        (e) =>
                                                            e
                                                                ? {
                                                                      name: e.name,
                                                                      image:
                                                                          e.name === Ke
                                                                              ? `R.images.gui.maps.icons.quests.bonuses.${pe.Small}.premium_plus_universal`
                                                                              : Te(e, pe.Small),
                                                                      special: e.overlayType,
                                                                      size: pe.Small,
                                                                      value: e.name === de.Vehicles ? e.label : e.value,
                                                                      valueType: we(e.name),
                                                                      tooltipArgs: Re(
                                                                          {
                                                                              tooltipId: e.tooltipId,
                                                                              tooltipType: 'mergedReward',
                                                                          },
                                                                          Number.parseInt(e.tooltipContentId),
                                                                      ),
                                                                  }
                                                                : {},
                                                        { equals: xe },
                                                    ),
                                                    a = (0, He.Om)(
                                                        () =>
                                                            Ie(t.levels.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    rewards: Ie(e.rewards, (e) => u(e)),
                                                                }),
                                                            ),
                                                        { equals: xe },
                                                    ),
                                                    n = (0, He.Om)(() => a().map((e) => e.rewards[0]), { equals: xe }),
                                                    r = (0, He.Om)(() => a().length),
                                                    s = (0, He.Om)(
                                                        () => Ie(t.chapters.get(), (e) => Object.assign({}, e)),
                                                        { equals: xe },
                                                    ),
                                                    o = (0, He.Om)((e) => s()[e], { equals: xe }),
                                                    i = (0, He.Om)(
                                                        () =>
                                                            Ie(t.quests.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    bonusCondition: Object.assign(
                                                                        {},
                                                                        e.bonusCondition,
                                                                        {
                                                                            items: Ie(e.bonusCondition.items, (e) =>
                                                                                Object.assign({}, e),
                                                                            ),
                                                                        },
                                                                    ),
                                                                    preBattleCondition: Object.assign(
                                                                        {},
                                                                        e.preBattleCondition,
                                                                        {
                                                                            items: Ie(e.preBattleCondition.items, (e) =>
                                                                                Object.assign({}, e),
                                                                            ),
                                                                        },
                                                                    ),
                                                                    postBattleCondition: Object.assign(
                                                                        {},
                                                                        e.postBattleCondition,
                                                                        {
                                                                            items: Ie(
                                                                                e.postBattleCondition.items,
                                                                                (e) => Object.assign({}, e),
                                                                            ),
                                                                        },
                                                                    ),
                                                                    bonuses: Ie(e.bonuses, (e) => Object.assign({}, e)),
                                                                    vehicleTypes: Ie(e.vehicleTypes, Ne),
                                                                    battleTypes: Ie(e.battleTypes, Ne),
                                                                    levels: Ie(e.levels, Ne),
                                                                }),
                                                            ),
                                                        { equals: xe },
                                                    ),
                                                    l = (0, He.Om)(
                                                        () =>
                                                            (function (e, t) {
                                                                for (let u = 0; u < e.length; u++)
                                                                    if (t(Oe(e, u), u, e)) return u;
                                                            })(s(), (e) => e.state !== We || 0) || 0,
                                                        { equals: xe },
                                                    ),
                                                    c = (0, He.Om)(
                                                        (e) =>
                                                            i()
                                                                .filter((t) => t.chapterId === o(e).id)
                                                                .sort((e, t) =>
                                                                    e.status === Pe.Done
                                                                        ? 1
                                                                        : t.status === Pe.Done
                                                                          ? -1
                                                                          : 1,
                                                                ),
                                                        { equals: xe },
                                                    ),
                                                    m = (0, He.Om)(
                                                        (e, t) =>
                                                            t
                                                                .filter((e) => e.label.length > 0 || e.value.length > 0)
                                                                .map((t) => ({
                                                                    name: t.item || t.name,
                                                                    image:
                                                                        t.item === Ke || t.name === Ke
                                                                            ? `R.images.gui.maps.icons.quests.bonuses.${pe.Big}.premium_plus_universal`
                                                                            : Te(t, pe.Big),
                                                                    value: t.value,
                                                                    special: t.overlayType,
                                                                    valueType: we(t.name),
                                                                    tooltipArgs: Re({ tooltipId: `${e}:${t.index}` }),
                                                                })),
                                                        { equals: xe },
                                                    ),
                                                    _ = (0, He.Om)(
                                                        (e) => e.filter((e) => !(e.label || e.value)).length,
                                                        { equals: xe },
                                                    );
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getLevels: a,
                                                        getLevelsLength: r,
                                                        getChapters: s,
                                                        getChapter: o,
                                                        getQuests: i,
                                                        getQuestRewards: m,
                                                        getQuestTokensCount: _,
                                                        getInitIndex: l,
                                                        getFilteredQuests: c,
                                                        getProgressRewards: n,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const a = null != u ? u : o(t),
                                                            n = Me.LO.box(a, { equals: xe });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Me.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const a = null != u ? u : o(t),
                                                            n = Me.LO.box(a, { equals: xe });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Me.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const a = o(u);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Me.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Me.aD)((e) => {
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
                                                                o = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Me.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Me.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                o[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    d = _[0],
                                    E = _[1],
                                    p = (0, r.useState)(() => c(e, a, o)),
                                    g = p[0],
                                    A = p[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? A(c(d, a, o)) : (m.current = !0);
                                    }, [o, d, a]),
                                    (0, r.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    s().createElement(u.Provider, { value: g }, n)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        tabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                        close: e.createCallback((e) => ({ escSource: e }), 'onClose'),
                        playAnimation: e.createCallbackNoArgs('onPlayAnimation'),
                        skipAnimation: e.createCallbackNoArgs('onSkipAnimation'),
                        aboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        collectReward: e.createCallbackNoArgs('onCollectReward'),
                        buyTokens: e.createCallbackNoArgs('onBuyTokens'),
                        startMoving: e.createCallbackNoArgs('onStartMoving'),
                        showVehiclePreview: e.createCallbackNoArgs('onShowVehiclePreview'),
                    })),
                    Je = Ze[0],
                    et = Ze[1],
                    tt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    ut = [];
                function at(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), ut)
                    );
                }
                function nt(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        n,
                    ];
                }
                function rt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                let st;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(st || (st = {}));
                const ot = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    it = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const a = t(e),
                                n = a[0],
                                r = a[1];
                            return tt(n, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? ot : c,
                                _ = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (
                                                var a,
                                                    n = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return rt(e, t);
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
                                                                              ? rt(e, t)
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
                                                    })(t(e).values());
                                                !(a = n()).done;

                                            )
                                                (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                p = (function (e, t, u) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, t, u, a) {
                                                let n,
                                                    r = !1,
                                                    s = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(l, i));
                                                    }
                                                    r ||
                                                        (a && !n && m(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (r = !0));
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, V.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), E.trigger('change', e), s && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                A = g[0],
                                F = g[1],
                                b = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = A.scrollPosition.get(),
                                            r = (null != (a = A.scrollPosition.goal) ? a : 0) - n;
                                        return o(e, t * u + r + n);
                                    },
                                    [A.scrollPosition],
                                ),
                                D = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            F.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: m.animationConfig,
                                                from: { scrollPosition: o(a, A.scrollPosition.get()) },
                                            });
                                    },
                                    [F, m.animationConfig, A.scrollPosition],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, m.step),
                                            r = b(t, e, a);
                                        D(r);
                                    },
                                    [D, b, m.step],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(a(e)),
                                            _.current && E.trigger('mouseWheel', e, A.scrollPosition, t(_.current)));
                                    },
                                    [A.scrollPosition, v, E],
                                ),
                                C = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Q(() => {
                                            const e = _.current;
                                            e &&
                                                (D(o(e, A.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [D, A.scrollPosition.goal],
                                ),
                                h = at(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && D(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', C),
                                        () => {
                                            window.removeEventListener('resize', C);
                                        }
                                    ),
                                    [C],
                                ),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                        getContainerSize: () => (_.current ? e(_.current) : void 0),
                                        getBounds: () =>
                                            _.current
                                                ? t(_.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: m.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: B,
                                        applyScroll: D,
                                        applyStepTo: v,
                                        contentRef: _,
                                        wrapperRef: d,
                                        scrollPosition: F,
                                        animationScroll: A,
                                        recalculateContent: h,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [A.scrollPosition, D, v, E.off, E.on, h, B, F, m.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    lt = it({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? st.Next : st.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ct = 'HorizontalBar_base__nonActive_82',
                    mt = 'disable',
                    _t = { pending: !1, offset: 0 },
                    dt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Et = () => {},
                    pt = (e, t) => Math.max(20, e.offsetWidth * t),
                    gt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = dt, onDrag: a = Et }) => {
                        const n = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(_t),
                            d = _[0],
                            E = _[1],
                            p = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            g = () => {
                                const t = l.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    m = tt(0, 1, r / (n - a)),
                                    _ = (t.offsetWidth - pt(t, s)) * m;
                                ((u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(mt),
                                                    void i.current.classList.remove(mt)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(mt),
                                                    void i.current.classList.add(mt)
                                                );
                                            var t, u;
                                            (o.current.classList.remove(mt), i.current.classList.remove(mt));
                                        }
                                    })(_));
                            },
                            A = at(() => {
                                ((() => {
                                    const t = c.current,
                                        u = l.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const s = Math.min(1, a / r);
                                    ((t.style.width = `${pt(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(ct) : n.current.classList.remove(ct)));
                                })(),
                                    g());
                            });
                        ((0, r.useEffect)(() => Q(A)),
                            (0, r.useEffect)(
                                () =>
                                    Q(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let u = Et;
                                        const a = () => {
                                            (u(), (u = Q(A)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', A),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', A),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        var u;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const r = l.current,
                                            s = c.current;
                                        if (!n || !r || !s) return;
                                        const o = t.screenX - d.offset - r.getBoundingClientRect().x,
                                            i = (o / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), p(_t));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, d.offset, d.pending, a, p]));
                        const F = nt((t) => e.applyStepTo(t), m, [e]),
                            b = F[0],
                            D = F[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const B = (e) => {
                            e.target.classList.contains(mt) || Y('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: v()('HorizontalBar_base_49', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: v()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(mt) || 0 !== e.button || (Y('play'), b(st.Next));
                                },
                                onMouseUp: D,
                                ref: o,
                                onMouseEnter: B,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: v()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        a &&
                                            0 === t.button &&
                                            (Y('play'),
                                            t.target === a
                                                ? p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = c.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? st.Prev : st.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: B,
                                },
                                s().createElement('div', { ref: c, className: v()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: v()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: v()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(mt) || 0 !== e.button || (Y('play'), b(st.Prev));
                                },
                                onMouseUp: D,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    At = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ft = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: v()(At.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: v()(At.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: v()(At.defaultScrollArea, n) },
                                s().createElement(bt, { className: i, api: _, classNames: o }, e),
                            ),
                            s().createElement(gt, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    bt = ({ api: e, className: t, classNames: u, children: a, style: n }) => (
                        (0, r.useEffect)(() => Q(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: v()(At.base, t), style: n },
                            s().createElement(
                                'div',
                                {
                                    className: v()(At.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: v()(At.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((bt.Bar = gt),
                    (bt.Default = Ft),
                    (bt.SeniorityAwards = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => Q(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: v()(At.base, t) },
                            s().createElement(
                                'div',
                                { className: v()(At.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: v()(At.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Dt = it({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? st.Next : st.Prev),
                    }),
                    vt = 'VerticalBar_base__nonActive_42',
                    Bt = 'disable',
                    Ct = () => {},
                    ht = { pending: !1, offset: 0 },
                    ft = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    wt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    yt = (e, t) => Math.max(20, e.offsetHeight * t),
                    St = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ft, onDrag: a = Ct }) => {
                        const n = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(ht),
                            d = _[0],
                            E = _[1],
                            p = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            g = at(() => {
                                const t = c.current,
                                    u = l.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${yt(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(vt) : n.current.classList.remove(vt)),
                                    s
                                );
                            }),
                            A = at(() => {
                                const t = l.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    m = tt(0, 1, r / (n - a)),
                                    _ = (t.offsetHeight - yt(t, s)) * m;
                                ((u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Bt),
                                                    void i.current.classList.remove(Bt)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Bt),
                                                    void i.current.classList.add(Bt)
                                                );
                                            var t, u;
                                            (o.current.classList.remove(Bt), i.current.classList.remove(Bt));
                                        }
                                    })(_));
                            }),
                            F = at(() => {
                                wt(e, () => {
                                    (g(), A());
                                });
                            });
                        ((0, r.useEffect)(() => Q(F)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    wt(e, () => {
                                        A();
                                    });
                                };
                                let u = Ct;
                                const a = () => {
                                    (u(), (u = Q(F)));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        wt(e, (u) => {
                                            const n = l.current,
                                                r = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const o = t.screenY - d.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), p(ht));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, d.offset, d.pending, a, p]));
                        const b = nt((t) => e.applyStepTo(t), m, [e]),
                            D = b[0],
                            B = b[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Bt) || Y('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: v()('VerticalBar_base_f3', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: v()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Bt) || 0 !== e.button || (Y('play'), D(st.Next));
                                },
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: v()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        var n;
                                        a &&
                                            0 === t.button &&
                                            (Y('play'),
                                            t.target === a
                                                ? p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((n = t.screenY > a.getBoundingClientRect().y ? st.Prev : st.Next),
                                                  c.current &&
                                                      wt(e, (t) => {
                                                          if (!t) return;
                                                          const a = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: v()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: v()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Bt) || 0 !== e.button || (Y('play'), D(st.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Tt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Rt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: v()(Tt.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: v()(Tt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: v()(Tt.area, n) },
                                s().createElement(Pt, { className: o, classNames: i, api: _ }, e),
                            ),
                            s().createElement(St, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Pt = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => Q(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: v()(Tt.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: v()(Tt.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                Pt.Default = Rt;
                const Nt = { Vertical: n, Horizontal: a },
                    xt = { type: 'idle' },
                    Mt = it({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = Math.round(t.value.scrollPosition);
                        },
                        getDirection: (e) => (e.deltaY > 1 ? st.Next : st.Prev),
                    }),
                    Lt = it({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${Math.round(t.value.scrollPosition)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? st.Next : st.Prev),
                    });
                let kt;
                !(function (e) {
                    ((e.OR = 'or'), (e.AND = 'and'));
                })(kt || (kt = {}));
                var Ot = u(9887),
                    It = u.n(Ot);
                const Ht = ['xl', 'lg', 'md', 'sm', 'xs'],
                    $t = (e) => e.includes('_') && ((e) => Ht.includes(e))(e.split('_').at(-1)),
                    Ut = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    Gt = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if ($t(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = Ut.indexOf(t),
                                    s = (-1 !== r ? Ht.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((u[n] = void 0 !== o ? o : e[n]), u);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => Ht.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = n),
                                u
                            );
                        }, {}),
                    Wt = (e, t = Gt) => {
                        const u = (
                            (e, t = Gt) =>
                            (u) => {
                                const a = y().mediaSize,
                                    n = (0, r.useMemo)(() => t(u, a), [u, a]);
                                return s().createElement(e, n);
                            }
                        )(e, t);
                        return s().memo((t) =>
                            Object.keys(t).some((e) => $t(e) && void 0 !== t[e])
                                ? s().createElement(u, t)
                                : s().createElement(e, t),
                        );
                    },
                    zt = {
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
                    jt = [
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
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                Object.keys(It());
                const Vt = {
                        XL: { mt: zt.mt__XL, mr: zt.mr__XL, mb: zt.mb__XL, ml: zt.ml__XL },
                        LG: { mt: zt.mt__LG, mr: zt.mr__LG, mb: zt.mb__LG, ml: zt.ml__LG },
                        MDp: { mt: zt.mt__MDp, mr: zt.mr__MDp, mb: zt.mb__MDp, ml: zt.ml__MDp },
                        MD: { mt: zt.mt__MD, mr: zt.mr__MD, mb: zt.mb__MD, ml: zt.ml__MD },
                        SMp: { mt: zt.mt__SMp, mr: zt.mr__SMp, mb: zt.mb__SMp, ml: zt.ml__SMp },
                        SM: { mt: zt.mt__SM, mr: zt.mr__SM, mb: zt.mb__SM, ml: zt.ml__SM },
                        XS: { mt: zt.mt__XS, mr: zt.mr__XS, mb: zt.mb__XS, ml: zt.ml__XS },
                    },
                    qt = (Object.keys(Vt), ['mt', 'mr', 'mb', 'ml']),
                    Xt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Yt = Wt((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            n = e.m,
                            o = e.mt,
                            i = void 0 === o ? n : o,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            m = e.mb,
                            _ = void 0 === m ? n : m,
                            d = e.ml,
                            E = void 0 === d ? n : d,
                            p = e.column,
                            g = e.row,
                            A = e.flexDirection,
                            F = void 0 === A ? (p ? 'column' : g && 'row') || void 0 : A,
                            b = e.flexStart,
                            D = e.center,
                            B = e.flexEnd,
                            C = e.spaceBetween,
                            h = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (b ? 'flex-start' : D && 'center') ||
                                      (B && 'flex-end') ||
                                      (C && 'space-between') ||
                                      (h && 'space-around') ||
                                      void 0
                                    : f,
                            y = e.alignItems,
                            S = void 0 === y ? (b ? 'flex-start' : D && 'center') || (B && 'flex-end') || void 0 : y,
                            T = e.alignSelf,
                            R = e.wrap,
                            P = e.flexWrap,
                            N = void 0 === P ? (R ? 'wrap' : void 0) : P,
                            x = e.grow,
                            M = e.shrink,
                            L = e.flex,
                            k = void 0 === L ? (x || M ? `${x ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : L,
                            O = e.style,
                            I = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, jt);
                        const $ = (0, r.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: _, ml: E },
                                    t = ((e) =>
                                        qt.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(Vt[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        qt.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[Xt[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: k,
                                        alignSelf: T,
                                        display: F || S ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, i, c, _, E, O, k, T, F, N, w, S]),
                            U = $.computedStyle,
                            G = $.computedClassNames;
                        return s().createElement('div', Qt({ className: v()(zt.base, ...G, t), style: U }, H), I);
                    }),
                    Kt = ({ binding: e, text: t = '', classMix: u, alignment: a = ae.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  r.Fragment,
                                  null,
                                  t.split('\n').map((t, n) =>
                                      s().createElement(
                                          'div',
                                          { className: v()('FormatText_base_d0', u), key: `${t}-${n}` },
                                          ((e, t, u) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  u && e in u
                                                      ? u[e]
                                                      : ((e, t = ae.left) => {
                                                            const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ce.includes(u)
                                                                ? le(e)
                                                                : ((e, t = ae.left) => {
                                                                      let u = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ie(n, /( )/, t).forEach(
                                                                              (e) => (u = u.concat(ie(e, a, ae.left))),
                                                                          ),
                                                                          u
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, a, e).map((e, t) =>
                                              s().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Zt = u(3532),
                    Jt = u.n(Zt);
                const eu = {
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
                    tu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                Object.keys(It());
                const au = Object.keys(Jt()),
                    nu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ru = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    su = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ou =
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
                            'heading-H56': nu,
                            'heading-H36': nu,
                            'heading-H28': ru,
                            'heading-H24': ru,
                            'heading-H24R': ru,
                            'heading-H22': ru,
                            'heading-H20R': ru,
                            'heading-H18': ru,
                            'heading-H15': su,
                            'heading-H14': su,
                            'paragraph-P24': ru,
                            'paragraph-P18': ru,
                            'paragraph-P16': ru,
                            'paragraph-P14': su,
                            'paragraph-P12': su,
                            'paragraph-P10': su,
                        }),
                    iu =
                        (Object.keys(ou),
                        (e) =>
                            e
                                ? ((e) => au.includes(e))(e)
                                    ? { colorClassName: eu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    lu = Wt((e) => {
                        let t = e.text,
                            u = e.variant,
                            a = e.className,
                            n = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            m = void 0 === c ? o : c,
                            _ = e.mb,
                            d = void 0 === _ ? o : _,
                            E = e.ml,
                            p = void 0 === E ? o : E,
                            g = e.style,
                            A = e.format,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, tu);
                        const b = (0, r.useMemo)(() => {
                                const e = iu(n),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, g, a), colorClassName: t };
                            }, [g, n]),
                            D = b.computedStyle,
                            B = b.colorClassName;
                        return s().createElement(
                            Yt,
                            uu(
                                {
                                    className: v()(eu.base, u && eu[u], B, a),
                                    style: D,
                                    mt: !0 === l ? ou[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? ou[u || 'paragraph-P16'].mr : m,
                                    mb: !0 === d ? ou[u || 'paragraph-P16'].mb : d,
                                    ml: !0 === p ? ou[u || 'paragraph-P16'].ml : p,
                                },
                                F,
                            ),
                            void 0 !== A ? s().createElement(Kt, uu({}, A, { text: t })) : t,
                        );
                    }),
                    cu = [
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
                function mu(e) {
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
                const _u = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: De.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    du = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            A = e.targetId,
                            F = void 0 === A ? 0 : A,
                            b = e.onShow,
                            D = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, cu);
                        const B = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(
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
                            h = (0, r.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (_u(u, E, { isMouseEvent: !0, on: !0, arguments: mu(a) }, C),
                                    b && b(),
                                    (B.current.isVisible = !0));
                            }, [u, E, a, C, b]),
                            f = (0, r.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        _u(u, E, { on: !1 }, C),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, E, C, D]),
                            w = (0, r.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && f();
                            }, [g, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            g
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          n && n(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (f(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === _ && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === _ && f(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : t
                        );
                        var y;
                    },
                    Eu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    pu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function gu(e) {
                    let t = '';
                    for (let u = pu.length - 1; u >= 0; u--) for (; e >= pu[u]; ) ((t += Eu[u]), (e -= pu[u]));
                    return t;
                }
                const Au = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Fu = (e) => (Au ? `${e}` : gu(e)),
                    bu = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Du, vu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Du || (Du = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(vu || (vu = {})));
                const Bu = ({ size: e = Du.Default, classMix: t }) =>
                        s().createElement('div', { className: v()(bu.background, bu[`background__${e}`], t) }),
                    Cu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    hu = ({ size: e }) => {
                        const t = v()(Cu.base, Cu[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    fu = {
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
                    wu = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const o = v()(
                                    fu.base,
                                    fu[`base__${e}`],
                                    u && fu.base__disabled,
                                    n && fu.base__finished,
                                    r && fu.base__withoutBounce,
                                ),
                                i = !u && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                s().createElement('div', { className: fu.pattern }),
                                s().createElement('div', { className: fu.gradient }),
                                i && s().createElement(hu, { size: e }),
                            );
                        },
                    ),
                    yu = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: n }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(wu, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: u })
                        );
                    },
                    Su = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    };
                let Tu, Ru;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Tu || (Tu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Ru || (Ru = {})));
                const Pu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                m = (0, r.useState)(Ru.Idle),
                                _ = m[0],
                                d = m[1],
                                E = _ === Ru.In,
                                p = _ === Ru.End,
                                g = _ === Ru.Idle,
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (g && !u)
                                    return Su(() => {
                                        A(Ru.In);
                                    }, t);
                            }, [A, u, g, t]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return Su(() => {
                                            (i && i(), A(Ru.End));
                                        }, e + t);
                                }, [A, E, i, t, e]));
                            const F = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return p
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      s().createElement(
                                          'div',
                                          { style: g ? F : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(hu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Nu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(wu, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(Pu, {
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
                    xu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Mu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Lu = (e) => ({ transitionDuration: `${e}ms` }),
                    ku = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < a,
                                _ = (0, r.useState)(Tu.Idle),
                                d = _[0],
                                E = _[1],
                                p = d === Tu.End,
                                g = d === Tu.Idle,
                                A = d === Tu.Grow,
                                F = d === Tu.Shrink,
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                D = (0, r.useCallback)(
                                    (e, t) =>
                                        Su(() => {
                                            b(e);
                                        }, t),
                                    [b],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return g
                                        ? D(Tu.Grow, t)
                                        : A
                                          ? D(Tu.Shrink, e)
                                          : F
                                            ? D(Tu.End, e)
                                            : void (p && i && i());
                            }, [D, u, p, A, g, F, i, t, e]);
                            const B = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Lu(e), xu(m)), [m, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Lu(e), xu(m)), [m, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Mu(m, a), Lu(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, Mu(m, a), Lu(e)),
                                    [a, m, o, e],
                                );
                            if (p) return null;
                            const w = v()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? h : f, className: w },
                                s().createElement(
                                    'div',
                                    { style: F ? C : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(hu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Ou = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                _ = (0, r.useState)(!1),
                                d = _[0],
                                E = _[1],
                                p = (0, r.useCallback)(
                                    (e) => {
                                        (e === Tu.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(wu, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? A : g,
                                }),
                                u >= 0 &&
                                    s().createElement(ku, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: p,
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
                    Iu = ['onComplete', 'onEndAnimation'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const $u = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Iu);
                        const n = (0, r.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && t && t(), u && u());
                            }, [o, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case vu.Simple:
                                return s().createElement(Nu, Hu({}, a, { onEndAnimation: l, isComplete: o }));
                            case vu.Growing:
                                return s().createElement(Ou, Hu({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Uu = ['onEndAnimation'];
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const Wu = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, Uu);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = o),
                        s().createElement($u, Gu({}, u, { onEndAnimation: n, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const ju = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: r,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === t)
                                return s().createElement(yu, {
                                    key: `${n}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return r.withStack
                                ? s().createElement(Wu, c)
                                : s().createElement($u, zu({ key: `${n}-${t}` }, c));
                        },
                    ),
                    Qu = (e) => ({
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
                    Vu = (e, t, u) => ('number' == typeof u ? (tt(0, t, u) / t) * 100 : e),
                    qu = {
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
                    Xu = {
                        freezed: !1,
                        withStack: !1,
                        type: vu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Yu = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = qu,
                            size: u = Du.Default,
                            animationSettings: a = Xu,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: _,
                            onEndAnimation: d,
                            onComplete: E,
                        }) => {
                            const p = ((e, t, u) =>
                                (0, r.useMemo)(() => {
                                    const a = (tt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Vu(a, t, u) };
                                }, [u, t, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: v()(bu.base, bu[`base__${u}`]), style: Qu(t) },
                                !o && s().createElement(Bu, { size: u, classMix: i }),
                                s().createElement(ju, {
                                    size: u,
                                    lineRef: m,
                                    disabled: n,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: _,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Ku = {
                        base: 'ChapterProgress_base_00',
                        label: 'ChapterProgress_label_f8',
                        base__disabled: 'ChapterProgress_base__disabled_24',
                        progress: 'ChapterProgress_progress_2a',
                        progress__total: 'ChapterProgress_progress__total_d2',
                        progressBar: 'ChapterProgress_progressBar_7f',
                    },
                    Zu = R.strings.armory_yard.mainView.chapter,
                    Ju = ({
                        state: e,
                        completedQuestsNew: t,
                        completedQuestsAll: u,
                        totalQuests: a,
                        className: n,
                        onEndAnimation: o,
                    }) => {
                        const i = (0, r.useCallback)(() => {
                            o && o();
                        }, [o]);
                        return s().createElement(
                            'div',
                            { className: v()(Ku.base, Ku[`base__${e}`], n) },
                            s().createElement(lu, { text: Zu.quests.label(), className: Ku.label }),
                            s().createElement(lu, {
                                text: Zu.quests.progress(),
                                className: Ku.progress,
                                format: {
                                    binding: {
                                        completed: String(u),
                                        total: s().createElement(lu, {
                                            className: Ku.progress__total,
                                            text: String(a),
                                        }),
                                    },
                                },
                            }),
                            s().createElement(
                                'div',
                                { className: Ku.progressBar },
                                s().createElement(Yu, {
                                    size: Du.Medium,
                                    maxValue: a,
                                    value: u,
                                    deltaFrom: t < u ? t : u,
                                    disabled: e === Ge,
                                    onEndAnimation: i,
                                }),
                            ),
                        );
                    },
                    ea = {
                        base: 'ChapterToken_base_d4',
                        icon: 'ChapterToken_icon_9a',
                        base__disabled: 'ChapterToken_base__disabled_70',
                        icon__freeToken: 'ChapterToken_icon__freeToken_7b',
                        progress: 'ChapterToken_progress_54',
                        progress__total: 'ChapterToken_progress__total_05',
                    },
                    ta = R.strings.armory_yard.mainView.chapter,
                    ua = ({ state: e, receivedTokens: t, totalTokens: u, className: a, isPostProgression: n }) => {
                        const r = e !== Ge && n;
                        return s().createElement(
                            'div',
                            { className: v()(ea.base, ea[`base__${e}`], a) },
                            s().createElement(
                                du,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                            'resId',
                                        ),
                                    isEnabled: e !== Ge,
                                    ignoreShowDelay: !0,
                                },
                                s().createElement('div', { className: v()(ea.icon, r && ea.icon__freeToken) }),
                            ),
                            s().createElement(lu, {
                                text: ta.tokens.progress(),
                                className: ea.progress,
                                format: {
                                    binding: {
                                        received: String(t),
                                        total: s().createElement(lu, {
                                            className: ea.progress__total,
                                            text: String(u),
                                        }),
                                    },
                                },
                            }),
                        );
                    },
                    aa = R.strings.armory_yard.mainView.quest,
                    na = (e) => {
                        switch (e) {
                            case h.ExtraSmall:
                            case h.Small:
                                return 'small';
                            default:
                                return 'big';
                        }
                    },
                    ra = {
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
                    sa = (e, t, u) =>
                        u
                            ? e.map((e) => gu(e)).join(aa.levelSeparator())
                            : e
                                  .map((e) => gu(e))
                                  .slice(0, t ? 2 : e.length)
                                  .join(aa.levelSeparator()),
                    oa = {
                        base: 'Chapter_base_4b',
                        base__extended: 'Chapter_base__extended_4b',
                        base__selected: 'Chapter_base__selected_bd',
                        art: 'Chapter_art_cd',
                        base__disabled: 'Chapter_base__disabled_80',
                        metalic: 'Chapter_metalic_41',
                        token: 'Chapter_token_38',
                        content: 'Chapter_content_eb',
                        base__showTokens: 'Chapter_base__showTokens_96',
                        title: 'Chapter_title_d4',
                        title__name: 'Chapter_title__name_8a',
                        progress: 'Chapter_progress_16',
                        stroke: 'Chapter_stroke_16',
                        selected: 'Chapter_selected_55',
                        hover: 'Chapter_hover_93',
                        base__active: 'Chapter_base__active_80',
                        base__completed: 'Chapter_base__completed_d0',
                    },
                    ia = R.strings.armory_yard.mainView.chapter,
                    la = R.images.armory_yard.gui.maps.icons.quests.chapter,
                    ca = ({
                        index: e,
                        id: t,
                        state: u,
                        completedQuestsNew: a,
                        completedQuestsAll: n,
                        tokenState: o,
                        totalQuests: i,
                        receivedTokens: l,
                        totalTokens: c,
                        type: m = 'standard',
                        isSelected: _ = !1,
                        onEndProgressAnimation: d,
                    }) => {
                        const E = y().mediaSize,
                            p = na(E),
                            g = la.$dyn(m).$dyn(p),
                            A = 'c_' + e + (u === Ge ? '_disabled' : ''),
                            F = la.standard.$dyn(p),
                            b = o !== Ue.Hidden,
                            D = b ? { backgroundImage: `url(${F.$dyn('glow_' + u)})` } : void 0,
                            B = (0, r.useCallback)(() => {
                                d && d();
                            }, [d]);
                        return s().createElement(
                            du,
                            {
                                contentId:
                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView('resId'),
                                args: { state: z.Chapter, id: t },
                                isEnabled: u === Ge,
                                ignoreShowDelay: !0,
                            },
                            s().createElement(
                                'div',
                                {
                                    className: v()(
                                        oa.base,
                                        oa[`base__${m}`],
                                        oa[`base__${u}`],
                                        _ && oa.base__selected,
                                        b && oa.base__showTokens,
                                    ),
                                    style: { backgroundImage: `url(${F.$dyn('bg_' + u)})` },
                                },
                                s().createElement('div', {
                                    className: oa.art,
                                    style: { backgroundImage: `url(${g.$dyn(A)})` },
                                }),
                                s().createElement('div', {
                                    className: oa.metalic,
                                    style: { backgroundImage: `url(${F.$dyn('metalic')})` },
                                }),
                                b &&
                                    s().createElement(ua, {
                                        state: u,
                                        receivedTokens: l,
                                        totalTokens: c,
                                        className: oa.token,
                                        isPostProgression: o === Ue.Coins,
                                    }),
                                s().createElement(
                                    'div',
                                    { className: oa.content, style: D },
                                    s().createElement(lu, {
                                        text: ia.title(),
                                        className: oa.title,
                                        format: {
                                            binding: {
                                                index: Fu(e),
                                                text: s().createElement(lu, {
                                                    className: oa.title__name,
                                                    text: ia.index.$num(e),
                                                }),
                                            },
                                        },
                                    }),
                                    s().createElement(Ju, {
                                        state: u,
                                        completedQuestsNew: a,
                                        completedQuestsAll: n,
                                        totalQuests: i,
                                        className: oa.progress,
                                        onEndAnimation: B,
                                    }),
                                ),
                                s().createElement('div', {
                                    className: oa.stroke,
                                    style: { borderImageSource: `url(${F.$dyn('stroke_' + u)})` },
                                }),
                                s().createElement('div', {
                                    className: oa.selected,
                                    style: { backgroundImage: `url(${F.$dyn('selected_' + u)})` },
                                }),
                                s().createElement('div', { className: oa.hover }),
                            ),
                        );
                    },
                    ma = ({ rewardsCount: e }) =>
                        s().createElement(
                            'div',
                            { className: 'QuestCompleted_base_85' },
                            s().createElement('div', { className: 'QuestCompleted_bg_90' }),
                            s().createElement('div', { className: 'QuestCompleted_stroke_f5' }),
                            s().createElement('div', { className: 'QuestCompleted_icon_5e' }),
                            s().createElement(Kt, {
                                text: R.strings.armory_yard.mainView.quest.currencyToken.rewardReceived(e - 1),
                                classMix: 'QuestCompleted_label_3b',
                            }),
                        ),
                    _a = R.images.armory_yard.gui.maps.icons.quests.quest.token,
                    da = ({ tokensCount: e = 0, isPostProgression: t = !1 }) => {
                        const u = y().mediaSize,
                            a = _a.$dyn(na(u)),
                            n = v()('QuestToken_icon_c0', t && 'QuestToken_icon__freeToken_81');
                        return s().createElement(
                            'div',
                            { className: 'QuestToken_base_e9' },
                            s().createElement('div', {
                                className: 'QuestToken_bg_74',
                                style: { backgroundImage: `url(${a.$dyn('bg')})` },
                            }),
                            s().createElement('div', { className: 'QuestToken_glow_main_a7' }),
                            s().createElement('div', {
                                className: 'QuestToken_glow_bottom_e3',
                                style: { backgroundImage: `url(${a.$dyn('glow_bottom')})` },
                            }),
                            s().createElement('div', {
                                className: 'QuestToken_glow_corner_d6',
                                style: { backgroundImage: `url(${a.$dyn('glow_corner')})` },
                            }),
                            s().createElement('div', {
                                className: 'QuestToken_strokes_fa',
                                style: { backgroundImage: `url(${a.$dyn('strokes')})` },
                            }),
                            s().createElement('div', {
                                className: 'QuestToken_pattern_a7',
                                style: { backgroundImage: `url(${a.$dyn('pattern')})` },
                            }),
                            s().createElement('div', {
                                className: 'QuestToken_corner_0b',
                                style: { backgroundImage: `url(${a.$dyn('corner')})` },
                            }),
                            s().createElement(
                                'div',
                                { className: 'QuestToken_label_28' },
                                R.strings.armory_yard.mainView.quest.currencyToken.label(),
                            ),
                            s().createElement('div', { className: 'QuestToken_tokensCount_a5' }, e),
                            s().createElement(
                                du,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                s().createElement('div', { className: n }),
                            ),
                        );
                    },
                    Ea = ['children'];
                function pa() {
                    return (
                        (pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        pa.apply(this, arguments)
                    );
                }
                const ga = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ea);
                        return s().createElement(
                            du,
                            pa(
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
                    Aa = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Fa() {
                    return (
                        (Fa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Fa.apply(this, arguments)
                    );
                }
                const ba = R.views.common.tooltip_window.simple_tooltip_content,
                    Da = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
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
                            })(e, Aa);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: a, note: n, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, a, n, i]);
                        return s().createElement(
                            du,
                            Fa(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? ba.SimpleTooltipHtmlContent('resId') : ba.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    };
                function va() {
                    return (
                        (va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        va.apply(this, arguments)
                    );
                }
                const Ba = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = s().createElement('div', { className: u }, e);
                        if (t.header || t.body) return s().createElement(Da, t, a);
                        const n = t.contentId,
                            r = t.args,
                            o = null == r ? void 0 : r.contentId;
                        return n || o
                            ? s().createElement(du, va({}, t, { contentId: n || o }), a)
                            : s().createElement(ga, t, a);
                    },
                    Ca = {
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
                    ha = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = pe.Big,
                        special: n,
                        value: r,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ae.BATTLE_BOOSTER:
                                    case Ae.BATTLE_BOOSTER_REPLACE:
                                        return Fe.BATTLE_BOOSTER;
                                }
                            })(n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ae.BATTLE_BOOSTER:
                                        return be.BATTLE_BOOSTER;
                                    case Ae.BATTLE_BOOSTER_REPLACE:
                                        return be.BATTLE_BOOSTER_REPLACE;
                                    case Ae.BUILT_IN_EQUIPMENT:
                                        return be.BUILT_IN_EQUIPMENT;
                                    case Ae.EQUIPMENT_PLUS:
                                        return be.EQUIPMENT_PLUS;
                                    case Ae.EQUIPMENT_TROPHY_BASIC:
                                        return be.EQUIPMENT_TROPHY_BASIC;
                                    case Ae.EQUIPMENT_TROPHY_UPGRADED:
                                        return be.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return be.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return be.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return be.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_1:
                                        return be.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_2:
                                        return be.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_3:
                                        return be.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_4:
                                        return be.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ge.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ge.CURRENCY:
                                    case ge.NUMBER:
                                        return s().createElement(ve, { format: 'integral', value: Number(e) });
                                    case ge.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return s().createElement(
                            'div',
                            { className: v()(Ca.base, Ca[`base__${a}`], l), style: i },
                            s().createElement(
                                Ba,
                                { tooltipArgs: m, className: Ca.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: v()(Ca.image, null == c ? void 0 : c.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: v()(Ca.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: v()(Ca.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: v()(Ca.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: v()(
                                                    Ca.info,
                                                    Ca[`info__${e}`],
                                                    o === ge.MULTI && Ca.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    Ba,
                                    { tooltipArgs: _ },
                                    s().createElement('div', {
                                        className: v()(Ca.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function fa() {
                    return (
                        (fa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        fa.apply(this, arguments)
                    );
                }
                const wa = ({ data: e, size: t = pe.Big }) =>
                        s().createElement(
                            'div',
                            { className: 'RewardsList_base_ef' },
                            e.map((e, u) =>
                                s().createElement(
                                    'div',
                                    { key: u, className: 'RewardsList_reward_54' },
                                    s().createElement(
                                        ha,
                                        fa({ size: t, classNames: { info: 'RewardsList_info_5e' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ya = {
                        base: 'QuestProgress_base_0b',
                        conditionSeparator: 'QuestProgress_conditionSeparator_ad',
                        condition: 'QuestProgress_condition_a1',
                        base__notAvailable: 'QuestProgress_base__notAvailable_01',
                        conditionText: 'QuestProgress_conditionText_2d',
                        progressTotal: 'QuestProgress_progressTotal_c3',
                        conditionIcon: 'QuestProgress_conditionIcon_49',
                        progressBar: 'QuestProgress_progressBar_0f',
                        progressBg: 'QuestProgress_progressBg_fb',
                    },
                    Sa = R.strings.armory_yard.mainView.quest,
                    Ta = s().memo(({ state: e, current: t, total: u, iconKey: a }) => {
                        const n = {
                            backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + a + '_90x90'}')`,
                        };
                        return s().createElement(
                            'div',
                            { className: v()(ya.base, ya[`base__${e}`]) },
                            s().createElement(
                                'div',
                                { className: ya.condition },
                                s().createElement('div', { className: ya.conditionIcon, style: n }),
                                s().createElement(lu, {
                                    text: Sa.progress(),
                                    className: ya.conditionText,
                                    format: {
                                        binding: {
                                            current: De.Z5.getRealFormat(t, De.Gr.WO_ZERO_DIGITS),
                                            total: s().createElement(lu, {
                                                className: ya.progressTotal,
                                                text: De.Z5.getRealFormat(u, De.Gr.WO_ZERO_DIGITS),
                                            }),
                                        },
                                    },
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: ya.progressBar },
                                s().createElement(Yu, {
                                    size: Du.Small,
                                    maxValue: u,
                                    value: t,
                                    disabled: e === je,
                                    theme: ra,
                                }),
                                s().createElement('div', { className: ya.progressBg }),
                            ),
                        );
                    }),
                    Ra = 'QuestSeparator_separatorLine_7f',
                    Pa = s().memo(({ conditionType: e }) => {
                        const t = e === kt.OR,
                            u = v()(
                                Ra,
                                t
                                    ? 'QuestSeparator_separatorLine__bottomOr_15'
                                    : 'QuestSeparator_separatorLine__bottom_17',
                            );
                        return s().createElement(
                            'div',
                            { className: v()('QuestSeparator_base_cd', t && 'QuestSeparator_base__or_69') },
                            s().createElement('div', { className: Ra }),
                            s().createElement('div', { className: v()('QuestSeparator_separatorText_cc') }),
                            s().createElement('div', { className: u }),
                        );
                    }),
                    Na = s().memo(
                        ({
                            state: e,
                            condition: t,
                            isOneCondition: u,
                            conditionType: a,
                            isFirst: n,
                            isMultiTypesConditions: r,
                        }) => {
                            const o = t.current,
                                i = t.total,
                                l = 0 !== i,
                                c = n || u || r;
                            return s().createElement(
                                'div',
                                { className: v()('QuestCondition_base_a5', c && 'QuestCondition_base__first_9f') },
                                s().createElement(
                                    'div',
                                    {
                                        className: v()(
                                            'QuestCondition_quest_4e',
                                            !u && 'QuestCondition_quest__multi_60',
                                        ),
                                    },
                                    s().createElement(lu, {
                                        className: 'QuestCondition_description_e8',
                                        text: t.descrData,
                                    }),
                                    l && s().createElement(Ta, { state: e, current: o, total: i, iconKey: t.iconKey }),
                                ),
                                n && !u && s().createElement(Pa, { conditionType: a }),
                            );
                        },
                    ),
                    xa = {
                        base: 'Quest_base_2d',
                        base__manyConditions: 'Quest_base__manyConditions_b5',
                        state: 'Quest_state_44',
                        content: 'Quest_content_93',
                        base__notAvailable: 'Quest_base__notAvailable_51',
                        quests: 'Quest_quests_39',
                        dotIcon: 'Quest_dotIcon_5d',
                        conditions: 'Quest_conditions_ca',
                        battleLabel: 'Quest_battleLabel_99',
                        battleType: 'Quest_battleType_d6',
                        battleType__vehicle: 'Quest_battleType__vehicle_11',
                        ellipsis: 'Quest_ellipsis_c4',
                        levelWrapper: 'Quest_levelWrapper_2d',
                        levelSeparator: 'Quest_levelSeparator_ea',
                        levelRoman: 'Quest_levelRoman_09',
                        vehicleSeparator: 'Quest_vehicleSeparator_8a',
                        vehicleType: 'Quest_vehicleType_e1',
                        vehicleTypeIcon: 'Quest_vehicleTypeIcon_ec',
                        battleTypeIcon: 'Quest_battleTypeIcon_24',
                        rewards: 'Quest_rewards_7a',
                        separator: 'Quest_separator_3a',
                        conditionAllWrapper: 'Quest_conditionAllWrapper_f4',
                        conditionAllWrapper__or: 'Quest_conditionAllWrapper__or_16',
                    },
                    Ma = R.strings.armory_yard.mainView.quest,
                    La = R.images.armory_yard.gui.maps.icons.quests.quest,
                    ka = s().memo(
                        ({
                            state: e,
                            rewards: t,
                            rewardsCount: u,
                            tokensCount: a,
                            postBatlleConditions: n,
                            bonusConditions: r,
                            vehicleTypes: o = [],
                            tokenState: i,
                            battleTypes: l = [],
                            levels: c,
                            showLevelsAsRange: m,
                            pBConditionType: _,
                            bonusConditionType: d,
                            allCurrent: E,
                            allTotal: p,
                            iconKey: g,
                            conditionType: A,
                        }) => {
                            const F = y().mediaSize,
                                b = F === h.ExtraLarge,
                                D = F >= h.Medium ? pe.Big : pe.Small,
                                B = b ? pe.S180x135 : D,
                                C = i !== Ue.Hidden && i !== Ue.Lock,
                                f = na(F),
                                w = l.slice(0, 5),
                                S = A || d || _,
                                T = A === kt.OR || d === kt.OR || _ === kt.OR,
                                P = La.$dyn(f),
                                N = { from: gu(c[0]), to: gu(c[c.length - 1]) },
                                x = 1 === c.length,
                                M = m && !x,
                                L = c.length > 2 && !M,
                                k = sa(c, L, !1),
                                O = n.length,
                                I = r.length,
                                H = O + I === 1,
                                $ = O > 0 && I > 0,
                                U = p > 0,
                                G = Boolean(n.find((e) => e.total > 0) || r.find((e) => e.total > 0)) && U,
                                W = M
                                    ? s().createElement(lu, {
                                          text: Ma.vehicleType.levelsRange(),
                                          className: xa.levelWrapper,
                                          format: {
                                              binding: {
                                                  from: s().createElement(lu, {
                                                      text: N.from,
                                                      className: xa.levelRoman,
                                                  }),
                                                  to: s().createElement(lu, { text: N.to, className: xa.levelRoman }),
                                                  separator: s().createElement('div', { className: xa.levelSeparator }),
                                              },
                                          },
                                      })
                                    : k,
                                z = M ? `${N.from}${Ma.levelRangeSeparator()}${N.to}` : sa(c, L, !0);
                            return s().createElement(
                                'div',
                                {
                                    className: v()(xa.base, xa[`base__${e}`], G && xa.base__manyConditions),
                                    style: { borderImageSource: `url(${P.$dyn('bg_' + e)})` },
                                },
                                s().createElement(
                                    'div',
                                    { className: xa.state },
                                    e === ze && s().createElement(ma, { rewardsCount: u }),
                                    C && s().createElement(da, { tokensCount: a, isPostProgression: i === Ue.Coins }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: xa.content },
                                    s().createElement(
                                        'div',
                                        { className: xa.quests },
                                        n.map((t, u) => {
                                            const a = u !== O - 1;
                                            return s().createElement(Na, {
                                                key: t.descrData,
                                                state: e,
                                                condition: t,
                                                isOneCondition: H,
                                                conditionType: _,
                                                isFirst: a,
                                                isMultiTypesConditions: $,
                                            });
                                        }),
                                        O > 0 && I > 0 && s().createElement(Pa, { conditionType: S }),
                                        r.map((t, u) => {
                                            const a = u !== I - 1;
                                            return s().createElement(Na, {
                                                key: t.descrData,
                                                state: e,
                                                condition: t,
                                                isOneCondition: H,
                                                conditionType: d,
                                                isFirst: a,
                                            });
                                        }),
                                    ),
                                    U &&
                                        s().createElement(
                                            'div',
                                            { className: v()(xa.conditionAllWrapper, T && xa.conditionAllWrapper__or) },
                                            s().createElement(Ta, { state: e, current: E, total: p, iconKey: g }),
                                        ),
                                    s().createElement(
                                        du,
                                        {
                                            contentId:
                                                R.views.armory_yard.lobby.feature.tooltips.TaskConditionTooltipView(
                                                    'resId',
                                                ),
                                            args: { vehicleLevels: z, vehicleTypes: o, battleTypes: l },
                                            ignoreShowDelay: !0,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: xa.conditions },
                                            s().createElement(
                                                'div',
                                                { className: xa.battleType },
                                                s().createElement('div', { className: xa.dotIcon }),
                                                s().createElement(lu, {
                                                    text: Ma.battleType.label(),
                                                    className: xa.battleLabel,
                                                }),
                                                w.map((e) =>
                                                    s().createElement(
                                                        'div',
                                                        { key: e, className: xa.battleType },
                                                        s().createElement('div', {
                                                            className: xa.battleTypeIcon,
                                                            style: {
                                                                backgroundImage: `url(${R.images.gui.maps.icons.quests.prebattleConditions.$num(e)})`,
                                                            },
                                                        }),
                                                    ),
                                                ),
                                                l.length > 5 &&
                                                    s().createElement(lu, {
                                                        className: xa.ellipsis,
                                                        text: Ma.battleType.ellipsis(),
                                                    }),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: v()(xa.battleType, xa.battleType__vehicle) },
                                                s().createElement('div', { className: xa.dotIcon }),
                                                s().createElement(lu, { text: Ma.vehicleType.label() }),
                                                s().createElement(
                                                    'div',
                                                    { className: v()(xa.battleType, xa.vehicleType) },
                                                    s().createElement(lu, {
                                                        text: x
                                                            ? Ma.vehicleType.level()
                                                            : Ma.vehicleType.levelsMultiple(),
                                                        className: xa.levelWrapper,
                                                        format: {
                                                            binding: {
                                                                from: s().createElement(lu, {
                                                                    text: W,
                                                                    className: xa.level,
                                                                }),
                                                            },
                                                        },
                                                    }),
                                                    o[0] &&
                                                        s().createElement(
                                                            s().Fragment,
                                                            null,
                                                            s().createElement('div', {
                                                                className: xa.vehicleSeparator,
                                                            }),
                                                            o.map((e) =>
                                                                s().createElement('div', {
                                                                    key: e,
                                                                    className: xa.vehicleTypeIcon,
                                                                    style: {
                                                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(ne(e))})`,
                                                                    },
                                                                }),
                                                            ),
                                                        ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: xa.rewards },
                                    s().createElement('div', { className: xa.separator }),
                                    s().createElement(wa, { size: B, data: t }),
                                ),
                            );
                        },
                    );
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                const Ia = R.images.armory_yard.gui.maps.icons.quests,
                    Ha = (e) => (e === kt.AND ? kt.AND : e === kt.OR ? kt.OR : void 0),
                    $a = (0, me.Pi)(() => {
                        const e = et().model,
                            t = e.computes.getChapters(),
                            u = e.computes.getChapter,
                            a = e.computes.getInitIndex(),
                            n = (0, r.useState)(a),
                            o = n[0],
                            i = n[1],
                            l = (0, r.useState)(!1),
                            c = l[0],
                            m = l[1],
                            _ = (0, r.useState)(!1),
                            d = _[0],
                            E = _[1],
                            p = Mt();
                        !(function (e, t) {
                            const u = e.contentRef,
                                a = e.wrapperRef,
                                n = e.scrollPosition,
                                s = e.clampPosition,
                                o = e.animationScroll,
                                i = e.events,
                                l = (0, r.useState)(xt),
                                c = l[0],
                                m = l[1];
                            ((0, r.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [u, c.type]),
                                (0, r.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = (e) => {
                                            const r = u.current,
                                                i = a.current;
                                            if (!r || !i) return;
                                            const l = c.positionFrom - e.screenY,
                                                m = c.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(r, m),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        },
                                        r = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', r),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', r));
                                        }
                                    );
                                }, [o.scrollPosition, s, u, c, n, a, t]),
                                (0, r.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        m(xt);
                                    };
                                    return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [o.scrollPosition, c.type, i]),
                                (0, r.useEffect)(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        0 === e.button &&
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [o.scrollPosition, u]));
                        })(p);
                        const g = y().mediaSize,
                            A = Ia.chapter.standard.$dyn(na(g)),
                            F = (0, r.useCallback)(
                                (e) => () => {
                                    (i(e), p.applyScroll(0, { immediate: !0 }), K.playClick());
                                },
                                [p],
                            ),
                            b = (0, r.useCallback)(() => {
                                K.playHighlight();
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = () => {
                                const e = p.animationScroll.scrollPosition.goal,
                                    t = p.getBounds()[1];
                                (m(e > 3), E(e < t - 3));
                            };
                            return (
                                p.events.on('recalculateContent', e),
                                p.events.on('change', e),
                                () => {
                                    (p.events.off('recalculateContent', e), p.events.off('change', e));
                                }
                            );
                        }, [p]);
                        const D = (0, r.useCallback)(() => {
                                const e = u(o);
                                e.completedQuestsNew = e.completedQuestsAll;
                            }, [o, u]),
                            B = e.computes.getFilteredQuests(o);
                        return s().createElement(
                            'div',
                            {
                                className: v()(
                                    'QuestsScreen_base_1a',
                                    c && 'QuestsScreen_base__hasTopLip_d9',
                                    d && 'QuestsScreen_base__hasBottomLip_ef',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'QuestsScreen_chapters_17' },
                                s().createElement('div', {
                                    className: 'QuestsScreen_chaptersBg_c3',
                                    style: { borderImageSource: `url(${A.$dyn('chapters_bg')})` },
                                }),
                                t.map((e, t) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: e.id,
                                            className: 'QuestsScreen_chapter_c3',
                                            onClick: F(t),
                                            onMouseEnter: b,
                                        },
                                        s().createElement(
                                            ca,
                                            Oa({}, e, { index: t + 1, isSelected: e.id === u(o).id }),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'QuestsScreen_mainContent_15' },
                                s().createElement(
                                    'div',
                                    { className: 'QuestsScreen_currentChapter_63' },
                                    s().createElement(
                                        ca,
                                        Oa({}, u(o), { index: o + 1, type: 'extended', onEndProgressAnimation: D }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'QuestsScreen_quests_d9' },
                                    s().createElement(
                                        Nt.Vertical.Area.Default,
                                        {
                                            api: p,
                                            barClassNames: {
                                                base: 'QuestsScreen_bar_2a',
                                                topButton: 'QuestsScreen_topButton_97',
                                                bottomButton: 'QuestsScreen_bottomButton_e1',
                                            },
                                        },
                                        B.map((t) => {
                                            const a = t.postBattleCondition.items,
                                                n = t.bonusCondition.items,
                                                r = u(o),
                                                i = t.bonuses.length,
                                                l =
                                                    r.receivedTokens < r.totalTokens
                                                        ? e.computes.getQuestTokensCount(t.bonuses)
                                                        : 0;
                                            return s().createElement(
                                                'div',
                                                { className: 'QuestsScreen_quest_3e', key: t.id },
                                                s().createElement(ka, {
                                                    state: t.status,
                                                    rewards: e.computes.getQuestRewards(t.id, t.bonuses),
                                                    rewardsCount: i,
                                                    tokensCount: l,
                                                    postBatlleConditions: a,
                                                    bonusConditions: n,
                                                    vehicleTypes: t.vehicleTypes,
                                                    tokenState: r.tokenState,
                                                    battleTypes: t.battleTypes,
                                                    levels: t.levels,
                                                    showLevelsAsRange: t.showLevelsAsRange,
                                                    pBConditionType: Ha(t.postBattleCondition.conditionType),
                                                    bonusConditionType: Ha(t.bonusCondition.conditionType),
                                                    allCurrent: t.current,
                                                    allTotal: t.total,
                                                    iconKey: t.iconKey,
                                                    conditionType: Ha(t.conditionType),
                                                }),
                                            );
                                        }),
                                    ),
                                    s().createElement('div', { className: 'QuestsScreen_topLip_db' }),
                                    s().createElement('div', { className: 'QuestsScreen_bottomLip_e6' }),
                                ),
                            ),
                        );
                    }),
                    Ua = { Progress: G.Progress, Quests: G.Quests, Shop: G.Shop },
                    Ga = R.images.armory_yard.gui.maps.icons.tabs,
                    Wa = R.strings.armory_yard.mainView,
                    za = {
                        [Ua.Progress]: s().createElement('div', null),
                        [Ua.Quests]: s().createElement($a, null),
                        [Ua.Shop]: s().createElement('div', null),
                    },
                    ja = {
                        [Ua.Progress]: Wa.progress.title(),
                        [Ua.Quests]: Wa.quests.title(),
                        [Ua.Shop]: Wa.shop.title(),
                    },
                    Qa = [
                        { id: Ua.Progress, icon: Ga.progress64() },
                        { id: Ua.Quests, icon: Ga.quests64() },
                    ],
                    Va = [{ id: 1, items: Qa, groupClassNames: { group: 'tabs_group_ad' } }],
                    qa = [Object.assign({}, Va[0], { items: [Qa[0], { id: Ua.Shop, icon: Ga.shop64() }] })],
                    Xa = [Object.assign({}, Va[0], { items: [...Qa, { id: Ua.Shop, icon: Ga.shop64() }] })],
                    Ya = R.strings.armory_yard.tabs,
                    Ka = s().memo(({ id: e, isActive: t }) =>
                        s().createElement(
                            'div',
                            { className: 'AdditionTabsContent_base_b4' },
                            s().createElement(lu, {
                                className: v()('AdditionTabsContent_tab_c7', t && 'AdditionTabsContent_tab__active_6a'),
                                text: String(Ya.label.$num(e)),
                            }),
                        ),
                    ),
                    Za = ({ children: e, id: t }) =>
                        s().createElement(
                            du,
                            {
                                contentId:
                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView('resId'),
                                args: { state: z.Tab, id: t },
                                ignoreShowDelay: !0,
                            },
                            e,
                        ),
                    Ja = {
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
                let en, tn;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(en || (en = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(tn || (tn = {})));
                const un = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: n,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: p,
                }) => {
                    const g = (0, r.useRef)(null),
                        A = (0, r.useState)(u),
                        F = A[0],
                        b = A[1],
                        D = (0, r.useState)(!1),
                        B = D[0],
                        C = D[1],
                        h = (0, r.useState)(!1),
                        f = h[0],
                        w = h[1],
                        y = (0, r.useCallback)(() => {
                            n || (g.current && (g.current.focus(), b(!0)));
                        }, [n]),
                        S = (0, r.useCallback)(
                            (e) => {
                                F && null !== g.current && !g.current.contains(e.target) && b(!1);
                            },
                            [F],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                n || (p && p(e));
                            },
                            [n, p],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                n || (null !== i && Y(i), c && c(e), w(!0));
                            },
                            [n, i, c],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                n || (d && d(e), C(!1));
                            },
                            [n, d],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                n || (null !== l && Y(l), _ && _(e), u && y(), C(!0));
                            },
                            [n, l, _, y, u],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                n || (E && E(e), C(!1));
                            },
                            [n, E],
                        ),
                        k = v()(
                            Ja.base,
                            Ja[`base__${a}`],
                            {
                                [Ja.base__disabled]: n,
                                [Ja[`base__${t}`]]: t,
                                [Ja.base__focus]: F,
                                [Ja.base__highlightActive]: B,
                                [Ja.base__firstHover]: f,
                            },
                            o,
                        ),
                        O = v()(Ja.state, Ja.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, r.useEffect)(() => {
                            b(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: k,
                                onMouseEnter: P,
                                onMouseMove: N,
                                onMouseUp: x,
                                onMouseDown: M,
                                onMouseLeave: L,
                                onClick: T,
                            },
                            a !== en.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ja.back }),
                                    s().createElement('span', { className: Ja.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: O },
                                s().createElement('span', { className: Ja.stateDisabled }),
                                s().createElement('span', { className: Ja.stateHighlightHover }),
                                s().createElement('span', { className: Ja.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Ja.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                un.defaultProps = { type: en.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const an = (0, r.memo)(un),
                    nn = {
                        base: 'Banner_base_c1',
                        defaultBannerBg: 'Banner_defaultBannerBg_9a',
                        defaultBannerStroke: 'Banner_defaultBannerStroke_47',
                        defaultBannerArt: 'Banner_defaultBannerArt_c3',
                        defaultBannerArt__freeToken: 'Banner_defaultBannerArt__freeToken_06',
                        hoverBannerGlow: 'Banner_hoverBannerGlow_2f',
                        hoverBannerBg: 'Banner_hoverBannerBg_55',
                        hoverBannerStroke: 'Banner_hoverBannerStroke_73',
                        hoverBannerArt: 'Banner_hoverBannerArt_db',
                        hoverBannerArt__freeToken: 'Banner_hoverBannerArt__freeToken_d2',
                        content: 'Banner_content_58',
                        title: 'Banner_title_fc',
                        description: 'Banner_description_cf',
                        button: 'Banner_button_37',
                        buttonMixClass: 'Banner_buttonMixClass_4c',
                    },
                    rn = R.strings.armory_yard.mainView.banner,
                    sn = ({ buyButtonState: e }) => {
                        const t = et().controls,
                            u = y().mediaSize,
                            a = e === j.Coins,
                            n = a ? rn.freeCoins : rn,
                            o = (0, r.useState)(!1),
                            i = o[0],
                            l = o[1],
                            c = (0, r.useCallback)(() => {
                                (K.playClick(), t.buyTokens());
                            }, [t]),
                            m = (0, V.useTransition)(i, Object.assign({ key: i }, qe)),
                            _ = v()(nn.defaultBannerArt, a && nn.defaultBannerArt__freeToken),
                            d = v()(nn.hoverBannerArt, a && nn.hoverBannerArt__freeToken);
                        return s().createElement(
                            Da,
                            { body: n.tooltip.body(), header: n.tooltip.header(), isEnabled: u < h.Medium },
                            s().createElement(
                                'div',
                                {
                                    className: v()(nn.base, i && nn.base__hover),
                                    onMouseEnter: () => {
                                        (l(!0), Y(R.sounds.buttons_hover()));
                                    },
                                    onMouseLeave: () => {
                                        l(!1);
                                    },
                                    onClick: c,
                                },
                                s().createElement('div', { className: nn.defaultBannerBg }),
                                s().createElement('div', { className: nn.defaultBannerStroke }),
                                m(
                                    (e, t) =>
                                        t &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(V.animated.div, {
                                                className: nn.hoverBannerGlow,
                                                style: e,
                                            }),
                                            s().createElement(V.animated.div, {
                                                className: nn.hoverBannerBg,
                                                style: e,
                                            }),
                                            s().createElement(V.animated.div, {
                                                className: nn.hoverBannerStroke,
                                                style: e,
                                            }),
                                        ),
                                ),
                                s().createElement('div', { className: _ }),
                                m((e, t) => t && s().createElement(V.animated.div, { className: d, style: e })),
                                s().createElement(
                                    'div',
                                    { className: nn.content },
                                    s().createElement('div', { className: nn.title }, n.title()),
                                    s().createElement('div', { className: nn.description }, n.description()),
                                    s().createElement(
                                        'div',
                                        { className: nn.button },
                                        s().createElement(
                                            an,
                                            {
                                                size: tn.small,
                                                type: en.main,
                                                mixClass: nn.buttonMixClass,
                                                soundClick: null,
                                            },
                                            n.button(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    on = {
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
                    ln = [
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
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                class mn extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Y(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Y(this.props.soundClick));
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
                            n = e.side,
                            r = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
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
                                })(e, ln)),
                            d = v()(on.base, on[`base__${r}`], on[`base__${n}`], null == o ? void 0 : o.base),
                            E = v()(on.icon, on[`icon__${r}`], on[`icon__${n}`], null == o ? void 0 : o.icon),
                            p = v()(on.glow, null == o ? void 0 : o.glow),
                            g = v()(on.caption, on[`caption__${r}`], null == o ? void 0 : o.caption),
                            A = v()(on.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            cn(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: on.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: p })),
                            s().createElement('div', { className: g }, t),
                            a && s().createElement('div', { className: A }, a),
                        );
                    }
                }
                mn.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var _n = u(5521);
                const dn = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function En(e = _n.n.NONE, t = dn, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _n.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                const pn = R.strings.armory_yard.mainView,
                    gn = () => {
                        const e = et().controls,
                            t = (0, r.useCallback)(() => {
                                e.close(W.Mouse);
                            }, [e]);
                        return (
                            (function ({
                                key: e = _n.n.ESCAPE,
                                callback: t = () => i.O.view.sendEvent.close(),
                                preventPropagation: u = !0,
                            } = {}) {
                                En(e, t, u);
                            })({ callback: () => e.close(W.Keyboard) }),
                            s().createElement(mn, { side: 'right', type: 'close', caption: pn.exit(), onClick: t })
                        );
                    };
                let An;
                var Fn;
                (((Fn = An || (An = {})).SHORT_DATE = 'short-date'),
                    (Fn.SHORT_TIME = 'short-time'),
                    (Fn.SHORT_DATE_TIME = 'short-date-time'),
                    (Fn.FULL_DATE = 'full-date'),
                    (Fn.FULL_DATE_TIME = 'full-date-time'),
                    (Fn.MONTH = 'month'),
                    (Fn.MONTH_DATE = 'month-date'),
                    (Fn.DATE_MONTH = 'date-month'),
                    (Fn.MONTH_YEAR = 'month-year'),
                    (Fn.WEEK_DAY = 'week-day'),
                    (Fn.WEEK_DAY_TIME = 'week-day-time'),
                    (Fn.YEAR = 'year'),
                    (Fn.DATE_YEAR = 'date-year'));
                const bn = 1e3;
                Date.now();
                const Dn = R.strings.armory_yard,
                    vn = R.strings.menu.dateTime.months,
                    Bn = s().memo(
                        ({
                            fromTimestamp: e,
                            toTimestamp: t,
                            title: u,
                            subtitle: a = '',
                            state: n,
                            isPlayedAnimation: r = !1,
                        }) => {
                            const o = De.cy.getTimeFormat('%I:%M', t, !0),
                                i = ((e, t) => {
                                    const u = new Date(e * bn),
                                        a = new Date(t * bn),
                                        n = String(vn.$num(u.getMonth() + 1)).toUpperCase(),
                                        r = String(vn.$num(a.getMonth() + 1)).toUpperCase();
                                    return { fromDate: u.getDate() + ' ' + n, toDate: a.getDate() + ' ' + r };
                                })(e, t),
                                l =
                                    n === H.PostProgression
                                        ? Dn.mainView.state.postProgression()
                                        : Dn.mainView.state.progression();
                            return s().createElement(
                                'div',
                                { className: 'Header_base_8a' },
                                s().createElement(
                                    'div',
                                    { className: 'Header_subtitle_e1' },
                                    s().createElement(lu, {
                                        className: 'Header_featureName_dc',
                                        text: r ? Dn.featureName() : l,
                                    }),
                                    s().createElement('div', { className: 'Header_separator_25' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Header_date_f0' },
                                        a.length > 0
                                            ? s().createElement(lu, { text: a })
                                            : s().createElement(lu, {
                                                  text: Dn.mainView.dateFormat(),
                                                  format: { binding: Object.assign({}, i, { toTime: o }) },
                                              }),
                                    ),
                                ),
                                s().createElement(lu, { className: 'Header_title_05', text: u }),
                            );
                        },
                    ),
                    Cn = { base: 'InfoLink_base_63' },
                    hn = R.strings.armory_yard.mainView.infoLink,
                    fn = (0, me.Pi)(() => {
                        const e = et().controls,
                            t = (0, r.useCallback)(() => {
                                e.aboutEvent();
                            }, [e]);
                        return s().createElement(
                            'div',
                            { className: Cn.base },
                            s().createElement(
                                'div',
                                { className: Cn.info },
                                s().createElement(mn, { caption: hn.info(), type: 'info', onClick: t }),
                            ),
                        );
                    }),
                    wn = {
                        from: { opacity: 0 },
                        enter: { opacity: 0.3 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 450,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    yn = ({ onAction: e, isStarted: t, isDisabled: u, buttonLabel: a }) => {
                        const n = (0, r.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, r.useCallback)(() => {
                                (u || K.playHighlight(), i(!0));
                            }, [u]),
                            c = (0, r.useCallback)(() => {
                                i(!1);
                            }, []),
                            m = (0, r.useCallback)(() => {
                                u || (K.playClick(), e());
                            }, [u, e]),
                            _ = (0, V.useTransition)(o, Object.assign({ key: o }, wn));
                        let d;
                        return (
                            (d = u
                                ? 'BuildingButton_base__disabled_cd'
                                : t
                                  ? 'BuildingButton_base__stop_3b'
                                  : 'BuildingButton_base__start_5e'),
                            s().createElement(
                                V.animated.div,
                                {
                                    className: v()(
                                        'BuildingButton_base_e7',
                                        d,
                                        !u && 'BuildingButton_base__enabled_54',
                                    ),
                                    onClick: m,
                                    onMouseEnter: l,
                                    onMouseLeave: c,
                                },
                                s().createElement(
                                    'div',
                                    { className: 'BuildingButton_mainButton_23' },
                                    s().createElement('div', { className: 'BuildingButton_image_65' }),
                                    s().createElement('div', { className: 'BuildingButton_animate_82' }, a),
                                ),
                                s().createElement('div', { className: 'BuildingButton_layer_1_82' }),
                                s().createElement('div', { className: 'BuildingButton_layer_2_a3' }),
                                s().createElement('div', { className: 'BuildingButton_layer_3_c3' }),
                                _(
                                    (e, t) =>
                                        t &&
                                        s().createElement(V.animated.div, {
                                            className: 'BuildingButton_hover_0f',
                                            style: e,
                                        }),
                                ),
                            )
                        );
                    },
                    Sn = R.strings.armory_yard.mainView.playerLink,
                    Tn = (0, me.Pi)(() => {
                        const e = et(),
                            t = e.model,
                            u = e.controls,
                            a = t.root.get(),
                            n = a.animationStatus,
                            o = a.currentLevel,
                            i = a.replay,
                            l = n === $.Active,
                            c = (0, r.useCallback)(() => {
                                l ? u.skipAnimation() : u.playAnimation();
                            }, [u, l]),
                            m = 0 === o || !i,
                            _ = l && !m ? Sn.animate.stop() : Sn.animate.start();
                        return s().createElement(
                            'div',
                            { className: 'PlayerLink_base_55' },
                            s().createElement(
                                Da,
                                { body: Sn.tooltip.body(), header: Sn.tooltip.header() },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(yn, { onAction: c, isStarted: l, isDisabled: m, buttonLabel: _ }),
                                ),
                            ),
                        );
                    }),
                    Rn = { type: 'idle' },
                    Pn = R.strings.armory_yard.mainView.takeRewards,
                    Nn = (0, me.Pi)(() => {
                        const e = et().controls,
                            t = (0, r.useState)(!1),
                            u = t[0],
                            a = t[1],
                            n = (0, r.useCallback)(() => {
                                (K.playHighlight(), a(!0));
                            }, []),
                            o = (0, r.useCallback)(() => {
                                a(!1);
                            }, []),
                            i = (0, r.useCallback)(() => {
                                (K.playClick(), e.collectReward());
                            }, [e]),
                            l = (0, V.useTransition)(u, Object.assign({ key: u }, Xe));
                        return s().createElement(
                            V.animated.div,
                            { className: 'TakeRewardsButton_base_35', onClick: i, onMouseEnter: n, onMouseLeave: o },
                            s().createElement(
                                Da,
                                { header: Pn.tooltip.header(), body: Pn.tooltip.body() },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement('div', { className: 'TakeRewardsButton_bg_74' }),
                                    s().createElement('div', { className: 'TakeRewardsButton_layer_1_3d' }),
                                    s().createElement('div', { className: 'TakeRewardsButton_layer_2_2b' }),
                                    s().createElement(
                                        'div',
                                        { className: 'TakeRewardsButton_mainButton_49' },
                                        s().createElement(
                                            'div',
                                            { className: 'TakeRewardsButton_animate_70' },
                                            Pn.animate(),
                                        ),
                                    ),
                                    l(
                                        (e, t) =>
                                            t &&
                                            s().createElement(V.animated.div, {
                                                className: 'TakeRewardsButton_hover_4d',
                                                style: e,
                                            }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xn = {
                        base: 'FinalReward_base_32',
                        sequence: 'FinalReward_sequence_e7',
                        sequence__scaledX2: 'FinalReward_sequence__scaledX2_5b',
                        info: 'FinalReward_info_a2',
                        icon: 'FinalReward_icon_34',
                        preview: 'FinalReward_preview_46',
                        ave: 'FinalReward_ave_ca',
                        aveLabel: 'FinalReward_aveLabel_17',
                        ave__completed: 'FinalReward_ave__completed_a2',
                        aveIcon: 'FinalReward_aveIcon_79',
                        rotation: 'FinalReward_rotation_cb',
                        reversedRotation: 'FinalReward_reversedRotation_b6',
                    },
                    Mn = {
                        base: 'Preview_base_33',
                        base__hovered: 'Preview_base__hovered_ec',
                        icon: 'Preview_icon_69',
                        icon__small: 'Preview_icon__small_59',
                        icon__normal: 'Preview_icon__normal_cd',
                        base__mouseDown: 'Preview_base__mouseDown_f2',
                        label: 'Preview_label_5a',
                        base__visibleLabel: 'Preview_base__visibleLabel_59',
                    },
                    Ln = [
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
                function kn() {
                    return (
                        (kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        kn.apply(this, arguments)
                    );
                }
                let On;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(On || (On = {}));
                const In = (0, r.memo)((e) => {
                        let t = e.label,
                            u = e.isVisibleLabel,
                            a = void 0 !== u && u,
                            n = e.autofocus,
                            o = void 0 !== n && n,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            m = void 0 === c ? 'play' : c,
                            _ = e.size,
                            d = void 0 === _ ? On.NORMAL : _,
                            E = e.onClick,
                            p = e.onMouseEnter,
                            g = e.onMouseLeave,
                            A = e.onMouseDown,
                            F = e.onMouseUp,
                            b = e.onFocus,
                            D = e.onBlur,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ln);
                        const C = (0, r.useState)(!1),
                            h = C[0],
                            f = C[1],
                            w = (0, r.useState)(!1),
                            y = w[0],
                            S = w[1],
                            T = (0, r.useState)(o),
                            R = T[0],
                            P = T[1],
                            N = (0, r.useRef)(null),
                            x = (0, r.useCallback)(() => {
                                N.current && (N.current.focus(), P(!0));
                            }, []),
                            M = (0, r.useCallback)(
                                (e) => {
                                    R && null !== N.current && !N.current.contains(e.target) && P(!1);
                                },
                                [R],
                            );
                        ((0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                            (0, r.useEffect)(() => {
                                P(o);
                            }, [o]));
                        const L = (0, r.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            k = (0, r.useCallback)(
                                (e) => {
                                    (f(!0), A && A(e), m && Y(m), o && x());
                                },
                                [o, A, x, m],
                            ),
                            O = (0, r.useCallback)(
                                (e) => {
                                    (f(!1), F && F(e));
                                },
                                [F],
                            ),
                            I = (0, r.useCallback)(
                                (e) => {
                                    (p && p(e), l && Y(l), S(!0));
                                },
                                [p, l],
                            ),
                            H = (0, r.useCallback)(
                                (e) => {
                                    (f(!1), S(!1), g && g(e));
                                },
                                [g],
                            ),
                            $ = (0, r.useCallback)(
                                (e) => {
                                    (P(!0), b && b(e));
                                },
                                [b],
                            ),
                            U = (0, r.useCallback)(
                                (e) => {
                                    (P(!1), D && D(e));
                                },
                                [D],
                            ),
                            G = v()(
                                Mn.base,
                                a && Mn.base__visibleLabel,
                                h && Mn.base__mouseDown,
                                y && Mn.base__hovered,
                                R && Mn.base__focused,
                            ),
                            W = v()(Mn.icon, Mn[`icon__${d}`]);
                        return s().createElement(
                            'div',
                            kn(
                                {
                                    ref: N,
                                    className: G,
                                    onClick: L,
                                    onMouseEnter: I,
                                    onMouseLeave: H,
                                    onMouseDown: k,
                                    onMouseUp: O,
                                    onFocus: $,
                                    onBlur: U,
                                },
                                B,
                            ),
                            s().createElement('div', { className: W }),
                            s().createElement('div', { className: Mn.label }, t),
                        );
                    }),
                    Hn = [
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
                const Un = (0, r.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            a = e.getImageSource,
                            n = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            _ = e.lastFrameIndex,
                            d = void 0 === _ ? n - 1 : _,
                            E = e.loop,
                            p = void 0 === E || E,
                            g = e.state,
                            A = void 0 === g ? 'play' : g,
                            F = e.onAnimationDone,
                            b = e.onAnimationComplete,
                            D = e.poster,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Hn);
                        const B = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (A) {
                                    case 'play':
                                        return (function () {
                                            const e = zn(m, d, a),
                                                t = Gn(m, d),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == o || o(a, r),
                                                          u(r),
                                                          a === d &&
                                                              (null == b || b(),
                                                              p || (null == F || F(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && D ? { path: D, x: 0, y: 0 } : a(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Wn(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, m, d, p, o, b, F, D, A]),
                            s().createElement('canvas', $n({}, v, { width: t, height: u, ref: B }))
                        );
                    }),
                    Gn = (e, t) => {
                        let u = e;
                        return () => {
                            const a = u;
                            return ((u += 1), u > t && (u = e), a);
                        };
                    },
                    Wn = (e, t) => Object.assign({}, e, { img: t }),
                    zn = (e, t, u) => {
                        const a = new Map(),
                            n = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = n[e.path];
                            if (t) a.set(r, Wn(e, t));
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
                                    a.set(r, Wn(e, t)));
                            }
                        }
                        return a;
                    };
                function jn(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const n = a % u,
                            r = (n % t.columns) * e.width,
                            s = Math.trunc(n / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: r, y: s };
                    };
                }
                const Qn = { base: 'SequencedBg_base_8f', image: 'SequencedBg_image_6e' },
                    Vn = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const qn = s().memo(() =>
                        s().createElement(
                            'div',
                            { className: Qn.base },
                            i.O.client.graphicsQuality.isLow()
                                ? s().createElement('div', { className: Qn.image })
                                : s().createElement(Un, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: Vn.width,
                                      height: Vn.height,
                                      frameCount: Vn.frameCount,
                                      className: Qn.seq,
                                      getImageSource: jn(Vn),
                                  }),
                        ),
                    ),
                    Xn = {
                        base: 'TankName_base_a3',
                        base__sizeMedium: 'TankName_base__sizeMedium_e8',
                        base__typeWhite: 'TankName_base__typeWhite_d6',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_da',
                        base__typeColored: 'TankName_base__typeColored_f4',
                        level: 'TankName_level_9d',
                        type: 'TankName_type_1b',
                        type__elite: 'TankName_type__elite_01',
                        name: 'TankName_name_39',
                    };
                let Yn, Kn;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'));
                })(Yn || (Yn = {})),
                    (function (e) {
                        ((e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish'));
                    })(Kn || (Kn = {})));
                const Zn = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleType: u,
                    vehicleLvl: a,
                    size: n = Yn.extraSmall,
                    type: o = Kn.colored,
                }) => {
                    const i = (0, r.useMemo)(() => {
                            const t = `${ne(u)}${e ? '_elite' : ''}`;
                            return { backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(t)})` };
                        }, [u, e]),
                        l = v()(Xn.base, Xn[`base__size${re(n)}`], Xn[`base__type${re(o)}`]),
                        c = v()(Xn.type, e && Xn.type__elite);
                    return s().createElement(
                        'div',
                        { className: l },
                        s().createElement('div', { className: Xn.level }, Fu(a)),
                        s().createElement('div', { className: c, style: i }),
                        s().createElement('div', { className: Xn.name }, t),
                    );
                };
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const er = R.strings.armory_yard.mainView.mainReward,
                    tr = (0, me.Pi)(({ isHighlighted: e, onShowVehiclePreview: t, scale: u }) => {
                        const a = et().model,
                            n = a.finalReward.get(),
                            r = a.computes.getLevelsLength;
                        return s().createElement(
                            'div',
                            { className: xn.base },
                            e &&
                                s().createElement(
                                    'div',
                                    { className: v()(xn.sequence, xn[`sequence__scaledX${u}`]) },
                                    s().createElement(qn, null),
                                ),
                            s().createElement(
                                Ba,
                                {
                                    tooltipArgs: Re(
                                        { tooltipId: n.tooltipId, tooltipType: 'finalReward' },
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ),
                                },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: xn.info },
                                        s().createElement(Zn, Jn({}, n, { type: Kn.colored })),
                                    ),
                                    s().createElement('div', { className: xn.icon }),
                                ),
                            ),
                            s().createElement(
                                Da,
                                { body: R.strings.armory_yard.buyView.vehiclePreview.tooltip() },
                                s().createElement(
                                    'div',
                                    { className: xn.preview },
                                    s().createElement(In, {
                                        label: R.strings.armory_yard.buyView.vehiclePreview.label(),
                                        onClick: t,
                                        isVisibleLabel: !0,
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: v()(xn.ave, e && xn.ave__completed) },
                                s().createElement(
                                    'div',
                                    { className: xn.aveIcon },
                                    s().createElement(lu, { text: String(r()) }),
                                ),
                                s().createElement(lu, { className: xn.aveLabel, text: er.completed() }),
                            ),
                        );
                    }),
                    ur = 'Progress_step_51',
                    ar = {
                        base: 'Step_base_fa',
                        progress: 'Step_progress_c9',
                        progress__first: 'Step_progress__first_82',
                        icon: 'Step_icon_b0',
                        reward: 'Step_reward_df',
                        line: 'Step_line_c5',
                    },
                    nr = {
                        base: 'StepLine_base_1a',
                        base__past: 'StepLine_base__past_3b',
                        base__present: 'StepLine_base__present_22',
                        base__future: 'StepLine_base__future_c9',
                    },
                    rr = s().memo(({ state: e }) =>
                        s().createElement('div', { className: v()(nr.base, nr[`base__${e}`]) }),
                    ),
                    sr = {
                        base: 'StepProgressBar_base_b3',
                        base__first: 'StepProgressBar_base__first_41',
                        base__last: 'StepProgressBar_base__last_95',
                        shadow: 'StepProgressBar_shadow_f3',
                        bg: 'StepProgressBar_bg_76',
                        progress: 'StepProgressBar_progress_11',
                        base__present: 'StepProgressBar_base__present_54',
                        pointer: 'StepProgressBar_pointer_a4',
                        pointerFlare1: 'StepProgressBar_pointerFlare1_37',
                        pointerFlare2: 'StepProgressBar_pointerFlare2_76',
                    },
                    or = s().memo(({ state: e = cr.Future, progress: t = 0, position: u = mr.Normal }) => {
                        const a = tt(0, 100, t),
                            n = a > 0 && a < 100,
                            r = { width: `${a}%` },
                            o = { left: `${a}%` };
                        return s().createElement(
                            'div',
                            { className: v()(sr.base, sr[`base__${u}`], sr[`base__${e}`]) },
                            s().createElement('div', { className: sr.shadow }),
                            s().createElement('div', { className: sr.bg }),
                            s().createElement('div', { className: sr.progress, style: r }),
                            n &&
                                s().createElement(
                                    'div',
                                    { className: sr.pointer, style: o },
                                    s().createElement('div', { className: sr.pointerFlare2 }),
                                    s().createElement('div', { className: sr.pointerFlare1 }),
                                ),
                        );
                    }),
                    ir = {
                        base: 'StepReward_base_67',
                        pastField: 'StepReward_pastField_f1',
                        futureField: 'StepReward_futureField_c0',
                        base__first: 'StepReward_base__first_2d',
                        base__last: 'StepReward_base__last_f7',
                        presentField: 'StepReward_presentField_b8',
                        hover: 'StepReward_hover_d3',
                        base__future: 'StepReward_base__future_43',
                        presentLight: 'StepReward_presentLight_ed',
                        reward: 'StepReward_reward_51',
                        base__past: 'StepReward_base__past_f6',
                    },
                    lr = s().memo(({ state: e, reward: t, position: u = mr.Normal }) => {
                        const a = (0, V.useSpring)({ opacity: e === cr.Past ? 1 : 0, HIDE_CONFIG: Ye }),
                            n = (0, V.useSpring)({ opacity: e === cr.Present ? 1 : 0, HIDE_CONFIG: Ye }),
                            o = (0, V.useSpring)({ opacity: e === cr.Future ? 1 : 0, HIDE_CONFIG: Ye }),
                            i = (0, r.useState)(!1),
                            l = i[0],
                            c = i[1],
                            m = (0, r.useCallback)(() => {
                                c(!0);
                            }, []),
                            _ = (0, r.useCallback)(() => {
                                c(!1);
                            }, []),
                            d = (0, V.useTransition)(l, Object.assign({ key: l }, qe));
                        return s().createElement(
                            'div',
                            {
                                className: v()(ir.base, ir[`base__${e}`], ir[`base__${u}`]),
                                onMouseEnter: m,
                                onMouseLeave: _,
                            },
                            s().createElement(
                                V.animated.div,
                                { style: a },
                                s().createElement('div', { className: ir.pastField }),
                            ),
                            d((e, t) => t && s().createElement(V.animated.div, { className: ir.hover, style: e })),
                            s().createElement(
                                V.animated.div,
                                { style: n },
                                s().createElement('div', { className: ir.presentField }),
                                s().createElement('div', { className: ir.presentLight }),
                            ),
                            s().createElement(
                                V.animated.div,
                                { style: o },
                                s().createElement('div', { className: ir.futureField }),
                            ),
                            t && s().createElement('div', { className: ir.reward }, s().createElement(ha, t)),
                        );
                    }),
                    cr = { Past: 'past', Present: 'present', Future: 'future' },
                    mr = { First: 'first', Normal: 'normal', Last: 'last' },
                    _r = R.strings.armory_yard.mainView.progress,
                    dr = {
                        [cr.Past]: { header: _r.past.tooltip.header(), body: _r.past.tooltip.body() },
                        [cr.Present]: { header: _r.present.tooltip.header(), body: _r.present.tooltip.body() },
                        [cr.Future]: { header: _r.future.tooltip.header(), body: _r.future.tooltip.body() },
                    },
                    Er =
                        (s().memo(({ step: e, state: t, reward: u, progress: a = 0, position: n = mr.Normal }) =>
                            s().createElement(
                                'div',
                                { className: ar.base },
                                n !== mr.Last &&
                                    s().createElement(
                                        'div',
                                        { className: ar.line },
                                        s().createElement(rr, { state: t }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: v()(ar.progress, ar[`progress__${n}`]) },
                                    s().createElement(or, { state: t, progress: a, position: n }),
                                ),
                                n !== mr.Last &&
                                    s().createElement(
                                        'div',
                                        { className: ar.icon },
                                        s().createElement(
                                            Da,
                                            dr[t],
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(pr, { step: e, state: t }),
                                            ),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: ar.reward },
                                    s().createElement(lr, { state: t, reward: u, position: n }),
                                ),
                            ),
                        ),
                        {
                            base: 'StepIcon_base_bb',
                            past: 'StepIcon_past_d0',
                            present: 'StepIcon_present_14',
                            future: 'StepIcon_future_71',
                            hover: 'StepIcon_hover_8b',
                            base__past: 'StepIcon_base__past_fc',
                            base__present: 'StepIcon_base__present_32',
                            step: 'StepIcon_step_6f',
                            base__future: 'StepIcon_base__future_9a',
                        }),
                    pr = s().memo(({ step: e, state: t = cr.Future }) => {
                        const u = (0, r.useState)(!1),
                            a = u[0],
                            n = u[1],
                            o = (0, V.useSpring)({ opacity: t === cr.Past ? 1 : 0, HIDE_CONFIG: Ye }),
                            i = (0, V.useSpring)({ opacity: t === cr.Present ? 1 : 0, HIDE_CONFIG: Ye }),
                            l = (0, V.useSpring)({ opacity: t === cr.Future ? 1 : 0, HIDE_CONFIG: Ye }),
                            c = (0, V.useTransition)(a, Object.assign({ key: a }, qe));
                        return s().createElement(
                            'div',
                            {
                                className: v()(Er.base, Er[`base__${t}`]),
                                onMouseEnter: () => {
                                    (K.playHighlight(), n(!0));
                                },
                                onMouseLeave: () => {
                                    n(!1);
                                },
                            },
                            s().createElement(V.animated.div, { className: Er.future, style: l }),
                            s().createElement(V.animated.div, { className: Er.past, style: o }),
                            s().createElement(V.animated.div, { className: Er.present, style: i }),
                            c((e, t) => t && s().createElement(V.animated.div, { className: Er.hover, style: e })),
                            s().createElement('div', { className: Er.step }, e),
                        );
                    }),
                    gr = {
                        base: 'StepProgressBarNoTimer_base_e6',
                        base__first: 'StepProgressBarNoTimer_base__first_8a',
                        base__last: 'StepProgressBarNoTimer_base__last_f1',
                        shadow: 'StepProgressBarNoTimer_shadow_ad',
                        bg: 'StepProgressBarNoTimer_bg_f8',
                        progress: 'StepProgressBarNoTimer_progress_15',
                        base__present: 'StepProgressBarNoTimer_base__present_7f',
                        pointer: 'StepProgressBarNoTimer_pointer_e4',
                        animatedProgress: 'StepProgressBarNoTimer_animatedProgress_10',
                        completeProgress: 'StepProgressBarNoTimer_completeProgress_05',
                        animatedProgressFirstPositon: 'StepProgressBarNoTimer_animatedProgressFirstPositon_88',
                        completeProgressFirstPositon: 'StepProgressBarNoTimer_completeProgressFirstPositon_11',
                        animatedPointer: 'StepProgressBarNoTimer_animatedPointer_a8',
                        completePointer: 'StepProgressBarNoTimer_completePointer_32',
                        animatedPointerFirstPositon: 'StepProgressBarNoTimer_animatedPointerFirstPositon_e9',
                        completePointerFirstPosition: 'StepProgressBarNoTimer_completePointerFirstPosition_b5',
                        pointerFlare1: 'StepProgressBarNoTimer_pointerFlare1_f3',
                        pointerFlare2: 'StepProgressBarNoTimer_pointerFlare2_ff',
                    },
                    Ar = s().memo(
                        ({
                            state: e = Fr.Future,
                            levelDuration: t,
                            isEmpty: u,
                            isRunning: a,
                            position: n = br.Normal,
                        }) => {
                            const o = (0, r.useState)({}),
                                i = o[0],
                                l = o[1],
                                c = (0, r.useState)({}),
                                m = c[0],
                                _ = c[1],
                                d = (0, r.useState)(''),
                                E = d[0],
                                p = d[1],
                                g = (0, r.useState)(''),
                                A = g[0],
                                F = g[1];
                            return (
                                (0, r.useEffect)(() => {
                                    (a
                                        ? n === br.First
                                            ? (p(gr.animatedProgressFirstPositon), F(gr.animatedPointerFirstPositon))
                                            : (p(gr.animatedProgress), F(gr.animatedPointer))
                                        : (p(''), F('')),
                                        u || a
                                            ? u && a && t > 0
                                                ? (l({ animationDuration: `${t}s` }), _({ animationDuration: `${t}s` }))
                                                : u &&
                                                  !a &&
                                                  (n === br.First
                                                      ? (l({ width: '20%' }), _({ left: '20%' }))
                                                      : (l({}), _({})))
                                            : (l({ width: '100%' }), _({ left: '100%' })));
                                }, [u, a, t, n]),
                                s().createElement(
                                    'div',
                                    { className: v()(gr.base, gr[`base__${n}`], gr[`base__${e}`]) },
                                    s().createElement('div', { className: gr.shadow }),
                                    s().createElement('div', { className: gr.bg }),
                                    s().createElement('div', { className: v()(gr.progress, E), style: i }),
                                    a ||
                                        (n === br.First &&
                                            s().createElement(
                                                'div',
                                                { className: v()(gr.pointer, A), style: m },
                                                s().createElement('div', { className: gr.pointerFlare2 }),
                                                s().createElement('div', { className: gr.pointerFlare1 }),
                                            )),
                                )
                            );
                        },
                    ),
                    Fr = { Past: 'past', Present: 'present', Future: 'future' },
                    br = { First: 'first', Normal: 'normal', Last: 'last' },
                    Dr = R.strings.armory_yard.mainView.progress,
                    vr = {
                        [Fr.Past]: { header: Dr.past.tooltip.header(), body: Dr.past.tooltip.body() },
                        [Fr.Present]: { header: Dr.present.tooltip.header(), body: Dr.present.tooltip.body() },
                        [Fr.Future]: { header: Dr.future.tooltip.header(), body: Dr.future.tooltip.body() },
                    },
                    Br = s().memo(
                        ({
                            step: e,
                            state: t,
                            reward: u,
                            levelDuration: a,
                            isEmpty: n,
                            isRunning: r,
                            position: o = br.Normal,
                        }) =>
                            s().createElement(
                                'div',
                                { className: ar.base },
                                o !== br.Last &&
                                    s().createElement(
                                        'div',
                                        { className: ar.line },
                                        s().createElement(rr, { state: t }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: v()(ar.progress, ar[`progress__${o}`]) },
                                    s().createElement(Ar, {
                                        state: t,
                                        position: o,
                                        levelDuration: a,
                                        isEmpty: n,
                                        isRunning: r,
                                    }),
                                ),
                                o !== br.Last &&
                                    s().createElement(
                                        'div',
                                        { className: ar.icon },
                                        s().createElement(
                                            Da,
                                            vr[t],
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(pr, { step: e, state: t }),
                                            ),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: ar.reward },
                                    s().createElement(lr, { state: t, reward: u, position: o }),
                                ),
                            ),
                    ),
                    Cr = ({
                        rewardStatus: e,
                        levelDuration: t,
                        animationLevel: u,
                        viewedLevel: a,
                        currentLevel: n,
                        animationStatus: o,
                        levels: l,
                        onShowVehiclePreview: c,
                        isReplay: m = !1,
                        rewards: _,
                    }) => {
                        const d = Lt();
                        !(function (e, t) {
                            const u = e.contentRef,
                                a = e.wrapperRef,
                                n = e.scrollPosition,
                                s = e.clampPosition,
                                o = e.animationScroll,
                                l = e.events,
                                c = (0, r.useState)(Rn),
                                m = c[0],
                                _ = c[1];
                            ((0, r.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === m.type ? 'move' : 'grab');
                            }, [u, m.type]),
                                (0, r.useEffect)(() => {
                                    if ('dragging' !== m.type) return;
                                    const e = i.O.client.events.mouse.move(([e, r]) => {
                                            const i = u.current,
                                                l = a.current;
                                            if (!i || !l) return;
                                            if ('inside' === r && e.clientX < 0) return;
                                            const c = 'inside' === r ? e.clientX : e.clientX - l.offsetLeft,
                                                _ = m.positionFrom - c,
                                                d = m.previousScrollPosition + _;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(i, d),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        }),
                                        r = i.O.client.events.mouse.up(function () {
                                            _({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        (e(), r());
                                    };
                                }, [o.scrollPosition, s, u, m, n, a, t]),
                                (0, r.useEffect)(() => {
                                    if ('scrollingToEnd' !== m.type) return;
                                    const e = () => {
                                        _(Rn);
                                    };
                                    return (o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                }, [o.scrollPosition, m.type, l]),
                                (0, r.useEffect)(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        _({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: o.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [o.scrollPosition, u]));
                        })(d);
                        const E = (() => {
                                const e = (0, r.useState)(i.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => {
                                            u(i.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            p = 138 * E,
                            g = (0, r.useState)(
                                l.map((e) =>
                                    e.level <= a
                                        ? { state: Fr.Past, isRunning: !1, isEmpty: !1 }
                                        : e.level <= n
                                          ? { state: Fr.Present, isRunning: !1, isEmpty: !1 }
                                          : { state: Fr.Future, isRunning: !1, isEmpty: !0 },
                                ),
                            ),
                            A = g[0],
                            F = g[1];
                        ((0, r.useEffect)(() => {
                            if (o === $.Active)
                                (F((e) =>
                                    e.map((e, t) =>
                                        t + 1 <= u ? e : { state: Fr.Future, isRunning: !1, isEmpty: !0 },
                                    ),
                                ),
                                    d.applyScroll(0));
                            else {
                                F(
                                    l.map((e) =>
                                        e.level <= a
                                            ? { state: Fr.Past, isRunning: !1, isEmpty: !1 }
                                            : e.level <= n
                                              ? { state: Fr.Present, isRunning: !1, isEmpty: !1 }
                                              : { state: Fr.Future, isRunning: !1, isEmpty: !0 },
                                    ),
                                );
                                const e = d.getWrapperSize() || 0;
                                d.applyScroll(Math.round(n * p - e / 2));
                            }
                        }, [o, n, u, a]),
                            (0, r.useEffect)(() => {
                                let e;
                                return u > 0 && t > 0 && o === $.Active
                                    ? (F((e) => {
                                          if (!e[u - 1]) return [...e];
                                          const t = [...e];
                                          return (
                                              (t[u - 1].isEmpty = !0),
                                              (t[u - 1].isRunning = !0),
                                              (t[u - 1].state = Fr.Future),
                                              t
                                          );
                                      }),
                                      (e = window.setTimeout(() => {
                                          F((e) => {
                                              if (!e[u - 1]) return [...e];
                                              const t = [...e];
                                              return (
                                                  (t[u - 1].isRunning = !1),
                                                  (t[u - 1].isEmpty = !1),
                                                  (t[u - 1].state = u <= a ? Fr.Past : Fr.Present),
                                                  t
                                              );
                                          });
                                      }, t * bn)),
                                      () => {
                                          (Y(R.sounds.ay_ui_stage_complete()),
                                              F((e) => {
                                                  if (!e[u - 1]) return [...e];
                                                  const t = [...e];
                                                  return (
                                                      (t[u - 1].state = u <= a ? Fr.Past : Fr.Present),
                                                      (t[u - 1].isRunning = !1),
                                                      (t[u - 1].isEmpty = !1),
                                                      t
                                                  );
                                              }),
                                              window.clearTimeout(e));
                                      })
                                    : () => window.clearTimeout(e);
                            }, [u, t, o, a]),
                            (0, r.useEffect)(
                                () =>
                                    Su(() => {
                                        if (o === $.Disabled) {
                                            const e = d.getWrapperSize() || 0;
                                            d.applyScroll(Math.round(n * p - e / 2));
                                        }
                                    }, 450),
                                [d, n, o, p],
                            ),
                            (0, r.useEffect)(() => {
                                if (u > 0) {
                                    const e = d.getWrapperSize() || 0;
                                    d.applyScroll(Math.round(u * p - e / 2));
                                }
                            }, [d, u, p]));
                        const b = (n >= l.length && o === $.Disabled) || (m && n >= l.length);
                        return s().createElement(
                            'div',
                            { className: 'Progress_base_b6' },
                            s().createElement(
                                Nt.Horizontal.Area,
                                {
                                    api: d,
                                    classNames: { content: 'Progress_horizontalContent_da' },
                                    className: 'Progress_scroll_17',
                                },
                                s().createElement(
                                    'div',
                                    { className: 'Progress_levels_91' },
                                    A[0] &&
                                        s().createElement(
                                            'div',
                                            { className: ur, key: 1 },
                                            s().createElement(Br, {
                                                step: 1,
                                                state: A[0].state,
                                                reward: _[0],
                                                position: br.First,
                                                isEmpty: A[0].isEmpty,
                                                isRunning: A[0].isRunning,
                                                levelDuration: t,
                                            }),
                                        ),
                                    l.length > 0 &&
                                        l.map((e, u) => {
                                            if (u !== l.length - 1 && 0 !== u)
                                                return A[e.level - 1]
                                                    ? s().createElement(
                                                          'div',
                                                          { className: ur, key: e.level },
                                                          s().createElement(Br, {
                                                              step: e.level,
                                                              state: A[e.level - 1].state,
                                                              reward: _[e.level - 1],
                                                              isEmpty: A[e.level - 1].isEmpty,
                                                              isRunning: A[e.level - 1].isRunning,
                                                              levelDuration: t,
                                                          }),
                                                      )
                                                    : null;
                                        }),
                                    A[l.length - 1] &&
                                        s().createElement(
                                            'div',
                                            { className: ur, key: l.length },
                                            s().createElement(Br, {
                                                step: l.length,
                                                state: A[l.length - 1].state,
                                                position: br.Last,
                                                isEmpty: A[l.length - 1].isEmpty,
                                                isRunning: A[l.length - 1].isRunning,
                                                levelDuration: t,
                                            }),
                                        ),
                                ),
                            ),
                            e === Qe &&
                                s().createElement(
                                    'div',
                                    { className: 'Progress_button_31' },
                                    s().createElement(Nn, null),
                                ),
                            s().createElement(
                                'div',
                                { className: 'Progress_finalReward_c4' },
                                s().createElement(tr, { scale: E, isHighlighted: b, onShowVehiclePreview: c }),
                            ),
                        );
                    },
                    hr = ({ children: e, moveSpace: t, isDisabled: u = !1, onStartMoving: a, onEndMoving: n }) => {
                        const o = (0, r.useState)(!1),
                            i = o[0],
                            l = o[1],
                            c = (0, r.useState)({ x: 0, y: 0 }),
                            m = c[0],
                            _ = c[1],
                            d = (0, r.useRef)(null),
                            E = (0, r.useCallback)(() => {
                                (l(!1), null == n || n());
                            }, [n]);
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('mouseup', E),
                                () => window.removeEventListener('mouseup', E)
                            ),
                            [E],
                        );
                        const p = (e) => {
                            if (!d.current) return;
                            const t = d.current.getBoundingClientRect(),
                                u = t.width,
                                a = t.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= u - 1 || e.clientY >= a - 1);
                        };
                        return s().createElement(
                            'div',
                            {
                                ref: d,
                                className: v()(
                                    'SceneWrapper_base_a2',
                                    i && 'SceneWrapper_base__down_76',
                                    u && 'SceneWrapper_base__moveSpaceDisabled_bd',
                                ),
                                onMouseDown: u
                                    ? void 0
                                    : (e) => {
                                          (e.preventDefault(),
                                              0 === e.button && p(e) && (l(!0), _({ x: e.clientX, y: e.clientY })));
                                      },
                                onMouseMove: u
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), i)) {
                                              if (!p(e)) return;
                                              const u = e.clientX !== m.x ? e.clientX - m.x : 0,
                                                  n = e.clientY !== m.y ? e.clientY - m.y : 0;
                                              ((0 === u && 0 === n) || null == a || a(),
                                                  _({ x: e.clientX, y: e.clientY }),
                                                  t({ dx: u, dy: n, dz: 0 }));
                                          }
                                      },
                                onMouseUp: u
                                    ? void 0
                                    : () => {
                                          (l(!1), null == n || n());
                                      },
                                onWheel: u
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), !p(e))) return;
                                          const u = e.deltaY < 0;
                                          t({ dx: 0, dy: 0, dz: u ? -600 : 600 });
                                      },
                            },
                            e,
                        );
                    },
                    fr = () =>
                        s().createElement(
                            'div',
                            { className: 'Vignette_base_22' },
                            s().createElement('div', { className: 'Vignette_vignette_d7' }),
                        ),
                    wr = {
                        base: 'App_base_d0',
                        bg: 'App_bg_4a',
                        bg__quests: 'App_bg__quests_6d',
                        vingette: 'App_vingette_72',
                        vingette__active: 'App_vingette__active_26',
                        banner: 'App_banner_0b',
                        base__moving: 'App_base__moving_3f',
                        tabs: 'App_tabs_6c',
                        content: 'App_content_e8',
                        info: 'App_info_9b',
                        player: 'App_player_1a',
                        player__active: 'App_player__active_e6',
                        close: 'App_close_79',
                        header: 'App_header_b2',
                        progress: 'App_progress_74',
                        verticalTabs: 'App_verticalTabs_40',
                        verticalTabs__big: 'App_verticalTabs__big_3f',
                        tab: 'App_tab_00',
                        tab__big: 'App_tab__big_c9',
                        icon: 'App_icon_48',
                        icon__big: 'App_icon__big_04',
                        highlight: 'App_highlight_56',
                        frame: 'App_frame_57',
                        frame__big: 'App_frame__big_48',
                        border: 'App_border_f4',
                        border__big: 'App_border__big_16',
                        borderBottom: 'App_borderBottom_76',
                        arrow: 'App_arrow_2f',
                        additionTabs: 'App_additionTabs_fd',
                    };
                function yr() {
                    return (
                        (yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yr.apply(this, arguments)
                    );
                }
                viewEnv.clearInternalCacheAfterFinalize();
                const Sr = ({ id: e, isActive: t }) =>
                        s().createElement(
                            'div',
                            { className: wr.additionTabs, key: e },
                            s().createElement(Ka, { id: e, isActive: t }),
                        ),
                    Tr = (0, me.Pi)(() => {
                        var e;
                        const t = et(),
                            u = t.model,
                            a = t.controls,
                            n = u.root.get(),
                            o = n.currentLevel,
                            i = n.animationLevel,
                            l = n.animationStatus,
                            c = n.fromTimestamp,
                            m = n.toTimestamp,
                            _ = n.rewardStatus,
                            d = n.levelDuration,
                            E = n.viewedLevel,
                            p = n.tabId,
                            g = n.state,
                            A = n.replay,
                            F = n.shopButtonVisible,
                            b = n.buyButtonState,
                            D = y().mediaSize,
                            B = u.computes.getLevels(),
                            C = u.computes.getProgressRewards(),
                            f = p === Ua.Quests,
                            w = l === $.Active,
                            S = (0, r.useCallback)(
                                (e) => {
                                    a.tabChange(e);
                                },
                                [a],
                            ),
                            T = (0, r.useCallback)(
                                (e) => {
                                    a.moveSpace(e);
                                },
                                [a],
                            ),
                            P = (0, r.useState)(!1),
                            N = P[0],
                            x = P[1],
                            M = (0, r.useState)(!1),
                            L = M[0],
                            k = M[1],
                            O = { onMouseEnter: () => k(!0), onMouseLeave: () => k(!1) },
                            I = (0, r.useCallback)(() => {
                                (a.startMoving(), x(!0));
                            }, [a]),
                            U = (0, r.useCallback)(() => {
                                x(!1);
                            }, []),
                            G = w ? i : o,
                            W =
                                w || o !== B.length
                                    ? null == (e = R.strings.armory_yard.mainView.title.step.$num(G))
                                        ? void 0
                                        : e.toString()
                                    : R.strings.armory_yard.mainView.title.step.final(),
                            z = f ? ja[Ua.Quests] : W,
                            Q = w
                                ? ((V = R.strings.armory_yard.mainView.subtitle()),
                                  (q = { step: i }),
                                  V.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                      const t = 0 === e.indexOf('%') ? 2 : 1;
                                      return String(q[e.slice(t, -t)]);
                                  }))
                                : '';
                        var V, q;
                        const X = g !== H.PostProgression ? Xa : qa,
                            Y = F ? X : Va;
                        return s().createElement(
                            hr,
                            { moveSpace: T, isDisabled: f || L, onStartMoving: I, onEndMoving: U },
                            s().createElement(
                                'div',
                                { className: v()(wr.base, N && wr.base__moving) },
                                s().createElement('div', { className: v()(wr.bg, f && wr.bg__quests) }),
                                s().createElement(
                                    'div',
                                    { className: v()(wr.vignette, !f && wr.vignette__active) },
                                    s().createElement(fr, null),
                                ),
                                s().createElement('div', { className: wr.content }, za[p]),
                                !f &&
                                    b !== j.Hidden &&
                                    s().createElement(
                                        'div',
                                        yr({ className: wr.banner }, O),
                                        s().createElement(sn, { buyButtonState: b }),
                                    ),
                                (g !== H.PostProgression || F) &&
                                    s().createElement(
                                        'div',
                                        yr({ className: wr.tabs }, O),
                                        s().createElement(ue, {
                                            tabs: Y,
                                            active: p,
                                            onClick: S,
                                            additionContent: Sr,
                                            WrapperElement: Za,
                                            className: v()(wr.verticalTabs, D > h.ExtraSmall && wr.verticalTabs__big),
                                            classNames: {
                                                tab: v()(wr.tab, D > h.ExtraSmall && wr.tab__big),
                                                icon: v()(wr.icon, D > h.ExtraSmall && wr.icon__big),
                                                highlight: wr.highlight,
                                                frame: v()(wr.frame, D > h.ExtraSmall && wr.frame__big),
                                                border: v()(wr.border, D > h.ExtraSmall && wr.border__big),
                                                borderBottom: wr.borderBottom,
                                                arrow: wr.arrow,
                                            },
                                        }),
                                    ),
                                s().createElement('div', yr({ className: wr.info }, O), s().createElement(fn, null)),
                                !f &&
                                    s().createElement(
                                        'div',
                                        yr({ className: v()(wr.player, w && wr.player__active) }, O),
                                        s().createElement(Tn, null),
                                    ),
                                s().createElement('div', yr({ className: wr.close }, O), s().createElement(gn, null)),
                                s().createElement(
                                    'div',
                                    { className: wr.header },
                                    s().createElement(Bn, {
                                        fromTimestamp: c,
                                        toTimestamp: m,
                                        title: z || '',
                                        subtitle: Q,
                                        state: g,
                                        isPlayedAnimation: w,
                                    }),
                                ),
                                B.length > 0 &&
                                    !f &&
                                    s().createElement(
                                        'div',
                                        yr({ className: wr.progress }, O),
                                        s().createElement(Cr, {
                                            rewardStatus: _,
                                            levelDuration: d,
                                            animationLevel: i,
                                            viewedLevel: E,
                                            currentLevel: o,
                                            animationStatus: l,
                                            levels: B,
                                            onShowVehiclePreview: a.showVehiclePreview,
                                            isReplay: A,
                                            rewards: C,
                                        }),
                                    ),
                            ),
                        );
                    });
                let Rr;
                !(function (e) {
                    ((e.BeforeProgression = 'beforeProgression'),
                        (e.Active = 'active'),
                        (e.PostProgression = 'postProgression'),
                        (e.Completed = 'completed'),
                        (e.Disabled = 'disabled'));
                })(Rr || (Rr = {}));
                const Pr = (function* () {
                        let e = 100;
                        for (;;)
                            (yield {
                                id: e,
                                chapterId: Math.trunc(4 * Math.random()) + 1,
                                title: ['123', '234', '345', '456', '567', '678', '789'][Math.trunc(7 * Math.random())],
                                target: Math.trunc(1e3 * Math.random()) + 4e3,
                                current: Math.trunc(2e3 * Math.random()) + 2e3,
                                rewards: [
                                    {
                                        name: Ee.Credits,
                                        value: 1e5,
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.credits',
                                    },
                                    {
                                        name: Ee.Crystal,
                                        value: '100',
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.crystal',
                                    },
                                    {
                                        name: Ee.Vehicles,
                                        value: 'Object 703-II',
                                        valueType: we(de.PremiumPlus),
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.vehicles',
                                    },
                                ],
                                icon: 'star',
                            },
                                e++);
                    })(),
                    Nr = {
                        tabId: 2,
                        chapterId: 1,
                        fromTimestamp: 1e7,
                        toTimestamp: 1e9,
                        title: 'Mocked title',
                        subtitle: 'dfdfdf',
                        state: Rr.Completed,
                        current: 12,
                        viewed: 4,
                        chapters: [
                            { id: 1, title: 'Глава 1', isAvailable: !0 },
                            { id: 2, title: 'Глава 2', isAvailable: !0 },
                            { id: 3, title: 'Глава 3', isAvailable: !1 },
                            { id: 4, title: 'Глава 4', isAvailable: !1 },
                        ],
                        quests: [
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                            Pr.next().value,
                        ],
                        levels: [
                            { level: 1, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 2, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 3,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 4, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 5, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 6, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 7,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 8, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 9, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 10, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 11,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 12, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 13, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 14, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 15,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 16, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 17, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 18, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 19,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 20, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 21, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 22, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 23,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 24, reward: { name: Ee.Credits, value: 1e5 } },
                            { level: 25, reward: { name: Ee.Crystal, value: '100' } },
                            { level: 26, reward: { name: Ee.Gold, value: '250000' } },
                            {
                                level: 27,
                                reward: { name: Ee.Vehicles, value: 'Object 703-II', valueType: we(de.PremiumPlus) },
                            },
                            { level: 28, reward: { name: Ee.Credits, value: 1e5 } },
                        ],
                    },
                    xr = {
                        getter: ((Mr = Nr), (e) => (e ? e.split('.').reduce((e, t) => e[t], Mr) : Mr)),
                        controls: ({ model: { title: e, tabId: t, chapterId: u } }) =>
                            (function (e) {
                                const t = {};
                                for (const u in e)
                                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                                        const a = e[u];
                                        t[u] = (0, Me.aD)(a);
                                    }
                                return t;
                            })({
                                updateTitle: (t) => {
                                    (e.set(t), console.log('Call updateTitle() with', t));
                                },
                                close: () => {
                                    console.log('Call exit()');
                                },
                                moveSpace: (e) => {
                                    console.log('Move space', e.dx, e.dy, e.dz);
                                },
                                setTabId: (e) => {
                                    t.set(e);
                                },
                                setChapterId: (e) => {
                                    u.set(e);
                                },
                            }),
                    };
                var Mr;
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(
                            Je,
                            { mocks: xr, mode: 'real' },
                            s().createElement(k, null, s().createElement(Tr, null)),
                        ),
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
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
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
        (__webpack_require__.j = 541),
        (() => {
            var e = { 541: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9824));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
