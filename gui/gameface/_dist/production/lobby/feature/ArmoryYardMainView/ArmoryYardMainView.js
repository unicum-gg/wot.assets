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
                (u.r(t), u.d(t, { mouse: () => o, onResize: () => n }));
                var a = u(2472),
                    r = u(1176);
                const n = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${t}`,
                                            o = s[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
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
                                })(u)),
                                t
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = u(527);
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
                u.d(t, { O: () => r });
                var a = u(5959);
                const r = { view: u(7641), client: a };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var a = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => v,
                        pxToRem: () => A,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var a = u(3722),
                    r = u(6112),
                    n = u(6538),
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
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => n });
                const a = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
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
            5521: (e, t, u) => {
                'use strict';
                let a, r;
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                var a = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, u, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(n) : (this._views[u] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => n.Z, B3: () => c, Gr: () => m, Z5: () => s, lf: () => d, B0: () => i, ry: () => D });
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
                const r = a;
                var n = u(1358);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    g = u(3138);
                const p = ['args'];
                function A(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(t, u);
                                        function s(e) {
                                            A(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, p);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    b = () => v(i.CLOSE),
                    C = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var h = u(7572);
                const B = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => v(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, r = R.invalid('resId'), n) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                d = o.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + s.x,
                                    y: g.O.view.pxToRem(c) + s.y,
                                    width: g.O.view.pxToRem(m),
                                    height: g.O.view.pxToRem(d),
                                };
                            v(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: F(_),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, b);
                        },
                        handleViewEvent: v,
                        onBindingsReady: D,
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
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < r.length; t++) u[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            7612: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => Zu,
                        Bar: () => Xu,
                        DefaultScroll: () => Ku,
                        Direction: () => Hu,
                        defaultSettings: () => $u,
                        useHorizontalScrollApi: () => Gu,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => ca, Bar: () => oa, Default: () => la, useVerticalScrollApi: () => Ju }));
                var n = u(6179),
                    s = u.n(n);
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
                        })(t, u),
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === u.extraLarge.weight,
                        large: n === u.large.weight,
                        medium: n === u.medium.weight,
                        small: n === u.small.weight,
                        extraSmall: n === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
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
                const d = i.O.client.getSize('rem'),
                    _ = d.width,
                    E = d.height,
                    g = Object.assign({ width: _, height: E }, m(_, E, l)),
                    p = (0, n.createContext)(g),
                    A = ['children'],
                    F = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, A);
                        const a = (0, n.useContext)(p),
                            r = a.extraLarge,
                            s = a.large,
                            i = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            m = a.extraLargeWidth,
                            d = a.largeWidth,
                            _ = a.mediumWidth,
                            E = a.smallWidth,
                            g = a.extraSmallWidth,
                            F = a.extraLargeHeight,
                            D = a.largeHeight,
                            v = a.mediumHeight,
                            b = a.smallHeight,
                            C = a.extraSmallHeight,
                            h = { extraLarge: F, large: D, medium: v, small: b, extraSmall: C };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && r) return t;
                            if (u.large && s) return t;
                            if (u.medium && i) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && m) return o(t, u, h);
                            if (u.largeWidth && d) return o(t, u, h);
                            if (u.mediumWidth && _) return o(t, u, h);
                            if (u.smallWidth && E) return o(t, u, h);
                            if (u.extraSmallWidth && g) return o(t, u, h);
                            if (!(
                                u.extraLargeWidth ||
                                u.largeWidth ||
                                u.mediumWidth ||
                                u.smallWidth ||
                                u.extraSmallWidth
                            )) {
                                if (u.extraLargeHeight && F) return t;
                                if (u.largeHeight && D) return t;
                                if (u.mediumHeight && v) return t;
                                if (u.smallHeight && b) return t;
                                if (u.extraSmallHeight && C) return t;
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
                    (0, n.memo)(F));
                const D = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(p),
                        u = (0, n.useState)(t),
                        a = u[0],
                        r = u[1],
                        o = (0, n.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                a = i.O.view.pxToRem(t);
                            r(Object.assign({ width: u, height: a }, m(u, a, l)));
                        }, []);
                    (((e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(p.Provider, { value: c }, e);
                });
                var v = u(6483),
                    b = u.n(v),
                    C = u(926),
                    h = u.n(C);
                let B, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
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
                const S = () => {
                        const e = (0, n.useContext)(p),
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
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    y = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL_HEIGHT,
                        [w.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [w.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [B.ExtraSmall]: '',
                        [B.Small]: h().SMALL,
                        [B.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [B.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [B.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, y);
                        const r = S(),
                            n = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', P({ className: b()(u, T[n], x[o], N[i]) }, a), t);
                    },
                    L = ['children'],
                    k = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, L);
                        return s().createElement(D, null, s().createElement(M, u, t));
                    };
                var I = u(493),
                    O = u.n(I);
                let H, $, U, G, W, Q, z;
                (!(function (e) {
                    ((e.BeforeProgression = 'beforeProgression'),
                        (e.Active = 'active'),
                        (e.PurchaseStage = 'purchaseStage'),
                        (e.Completed = 'completed'),
                        (e.Disabled = 'disabled'),
                        (e.Intro = 'intro'));
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
                            (e[(e.ShopInfo = 2)] = 'ShopInfo'),
                            (e[(e.Step = 3)] = 'Step'));
                    })(Q || (Q = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'), (e[(e.Tokens = 1)] = 'Tokens'), (e[(e.Coins = 2)] = 'Coins'));
                    })(z || (z = {})));
                const q = (e) => {
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
                var V = u(8552);
                const j = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    X = s().forwardRef(function ({ classNames: e, arrowRef: t, size: u = 'medium', className: a }, r) {
                        return s().createElement(
                            'div',
                            { className: b()(j.base, j[`base__${u}`], a), ref: r },
                            s().createElement('div', {
                                className: b()(
                                    j.border,
                                    j.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: b()(
                                    j.border,
                                    j.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', { className: b()(j.arrow, null == e ? void 0 : e.arrow), ref: t }),
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
                            sounds: r = J,
                            notification: n,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: m,
                            onMouseLeave: d,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const g = (e, u) => {
                                !t && r[u] && Y(r[u]);
                            },
                            p = s().createElement(
                                'div',
                                {
                                    className: b()(
                                        Z.base,
                                        Z[`base__${i}`],
                                        t && b()(Z.base__active, null == a ? void 0 : a.activeTab),
                                        u,
                                    ),
                                    onClick: ((e) => () => {
                                        (g(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (g(0, 'mouseEnter'), null == m || m(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (g(0, 'mouseLeave'), null == d || d(e));
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: b()(Z.highlight, null == a ? void 0 : a.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : s().createElement('div', {
                                          className: b()(Z.icon, Z[`icon__${i}`], null == a ? void 0 : a.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, isActive: t, size: i }),
                                n &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                Z.notification,
                                                Z[`notification__${n.type}`],
                                                n.size ? Z[`notification__${n.size}`] : Z.notification__medium,
                                                null == a ? void 0 : a.notification,
                                            ),
                                        },
                                        'dot' !== n.type && n.value,
                                    ),
                            );
                        return _ ? s().createElement(_, { key: e, id: e }, p) : p;
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
                        classNames: r,
                        size: o = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: m,
                        onMouseLeave: d,
                        WrapperElement: _,
                    }) {
                        const E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            A = (0, n.useRef)(null),
                            F = (0, V.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            D = (0, V.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            v = (0, V.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / i.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (F.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        D.start({
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
                                        D.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            C = (0, n.useCallback)((e) => {
                                null !== p.current &&
                                    null !== A.current &&
                                    e(p.current.getBoundingClientRect().top - A.current.getBoundingClientRect().top);
                            }, []);
                        var h, B;
                        return (
                            (0, n.useEffect)(() => {
                                C((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }, [v, e, C]),
                            (0, n.useEffect)(
                                () =>
                                    q(() => {
                                        C((e) => {
                                            v.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [v, C, o],
                            ),
                            (h = () => {
                                C((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (B = [v, C]),
                            (0, n.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    (e(), (e = q(h)));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        (e(), window.removeEventListener('resize', t));
                                    }
                                );
                            }, B),
                            s().createElement(
                                'div',
                                { className: b()(te.base, a), ref: A },
                                t.map(({ id: t, items: a, title: n, groupClassNames: i }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(te.group, te[`group__${o}`], null == i ? void 0 : i.group),
                                        },
                                        n &&
                                            s().createElement(
                                                'div',
                                                { className: b()(te.title, null == i ? void 0 : i.title) },
                                                n,
                                            ),
                                        a.map(({ id: t, icon: a, notification: n }) =>
                                            s().createElement(ee, {
                                                key: t,
                                                id: t,
                                                icon: a,
                                                notification: n,
                                                ref: p,
                                                sounds: u,
                                                isActive: e === t,
                                                size: o,
                                                className: null == r ? void 0 : r.tab,
                                                classNames: r,
                                                additionContent: l,
                                                onMouseEnter: m,
                                                onMouseLeave: d,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                s().createElement(X, {
                                    arrowRef: E,
                                    ref: g,
                                    size: o,
                                    className: null == r ? void 0 : r.frame,
                                    classNames: r,
                                }),
                            )
                        );
                    });
                let ae;
                function re(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function ne(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function se(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ae || (ae = {}));
                const oe = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    ie = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    le = (e, t, u = ae.left) => e.split(t).reduce(u === ae.left ? oe : ie, []),
                    ce = (() => {
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
                    me = ['zh_cn', 'zh_sg', 'zh_tw'];
                var de = u(3282),
                    _e = u(9887),
                    Ee = u.n(_e);
                const ge = ['xl', 'lg', 'md', 'sm', 'xs'],
                    pe = (e) => e.includes('_') && ((e) => ge.includes(e))(e.split('_').at(-1)),
                    Ae = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    Fe = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (pe(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const n = Ae.indexOf(t),
                                    s = (-1 !== n ? ge.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((u[r] = void 0 !== o ? o : e[r]), u);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, t) => ge.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = r),
                                u
                            );
                        }, {}),
                    De = (e, t = Fe) => {
                        const u = (
                            (e, t = Fe) =>
                            (u) => {
                                const a = S().mediaSize,
                                    r = (0, n.useMemo)(() => t(u, a), [u, a]);
                                return s().createElement(e, r);
                            }
                        )(e, t);
                        return s().memo((t) =>
                            Object.keys(t).some((e) => pe(e) && void 0 !== t[e])
                                ? s().createElement(u, t)
                                : s().createElement(e, t),
                        );
                    },
                    ve = {
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
                    be = [
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
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                Object.keys(Ee());
                const he = {
                        XL: { mt: ve.mt__XL, mr: ve.mr__XL, mb: ve.mb__XL, ml: ve.ml__XL },
                        LG: { mt: ve.mt__LG, mr: ve.mr__LG, mb: ve.mb__LG, ml: ve.ml__LG },
                        MDp: { mt: ve.mt__MDp, mr: ve.mr__MDp, mb: ve.mb__MDp, ml: ve.ml__MDp },
                        MD: { mt: ve.mt__MD, mr: ve.mr__MD, mb: ve.mb__MD, ml: ve.ml__MD },
                        SMp: { mt: ve.mt__SMp, mr: ve.mr__SMp, mb: ve.mb__SMp, ml: ve.ml__SMp },
                        SM: { mt: ve.mt__SM, mr: ve.mr__SM, mb: ve.mb__SM, ml: ve.ml__SM },
                        XS: { mt: ve.mt__XS, mr: ve.mr__XS, mb: ve.mb__XS, ml: ve.ml__XS },
                    },
                    Be = (Object.keys(he), ['mt', 'mr', 'mb', 'ml']),
                    fe = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    we = De((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            r = e.m,
                            o = e.mt,
                            i = void 0 === o ? r : o,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            m = e.mb,
                            d = void 0 === m ? r : m,
                            _ = e.ml,
                            E = void 0 === _ ? r : _,
                            g = e.column,
                            p = e.row,
                            A = e.flexDirection,
                            F = void 0 === A ? (g ? 'column' : p && 'row') || void 0 : A,
                            D = e.flexStart,
                            v = e.center,
                            C = e.flexEnd,
                            h = e.spaceBetween,
                            B = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (D ? 'flex-start' : v && 'center') ||
                                      (C && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (B && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            y = void 0 === S ? (D ? 'flex-start' : v && 'center') || (C && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            P = e.wrap,
                            T = e.flexWrap,
                            x = void 0 === T ? (P ? 'wrap' : void 0) : T,
                            N = e.grow,
                            M = e.shrink,
                            L = e.flex,
                            k = void 0 === L ? (N || M ? `${N ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : L,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, be);
                        const $ = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        Be.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(he[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        Be.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[fe[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: k,
                                        alignSelf: R,
                                        display: F || y ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: x,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, i, c, d, E, I, k, R, F, x, w, y]),
                            U = $.computedStyle,
                            G = $.computedClassNames;
                        return s().createElement('div', Ce({ className: b()(ve.base, ...G, t), style: U }, H), O);
                    }),
                    Se = ({ binding: e, text: t = '', classMix: u, alignment: a = ae.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  n.Fragment,
                                  null,
                                  t.split('\n').map((t, r) =>
                                      s().createElement(
                                          'div',
                                          { className: b()('FormatText_base_d0', u), key: `${t}-${r}` },
                                          ((e, t, u) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  u && e in u
                                                      ? u[e]
                                                      : ((e, t = ae.left) => {
                                                            const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return me.includes(u)
                                                                ? ce(e)
                                                                : ((e, t = ae.left) => {
                                                                      let u = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          le(r, /( )/, t).forEach(
                                                                              (e) => (u = u.concat(le(e, a, ae.left))),
                                                                          ),
                                                                          u
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, a, e).map((e, t) =>
                                              s().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ye = u(3532),
                    Re = u.n(ye);
                const Pe = {
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
                    Te = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                Object.keys(Ee());
                const Ne = Object.keys(Re()),
                    Me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Le = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ke = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ie =
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
                            'heading-H56': Me,
                            'heading-H36': Me,
                            'heading-H28': Le,
                            'heading-H24': Le,
                            'heading-H24R': Le,
                            'heading-H22': Le,
                            'heading-H20R': Le,
                            'heading-H18': Le,
                            'heading-H15': ke,
                            'heading-H14': ke,
                            'paragraph-P24': Le,
                            'paragraph-P18': Le,
                            'paragraph-P16': Le,
                            'paragraph-P14': ke,
                            'paragraph-P12': ke,
                            'paragraph-P10': ke,
                        }),
                    Oe =
                        (Object.keys(Ie),
                        (e) =>
                            e
                                ? ((e) => Ne.includes(e))(e)
                                    ? { colorClassName: Pe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    He = De((e) => {
                        let t = e.text,
                            u = e.variant,
                            a = e.className,
                            r = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            m = void 0 === c ? o : c,
                            d = e.mb,
                            _ = void 0 === d ? o : d,
                            E = e.ml,
                            g = void 0 === E ? o : E,
                            p = e.style,
                            A = e.format,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Te);
                        const D = (0, n.useMemo)(() => {
                                const e = Oe(r),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, p, a), colorClassName: t };
                            }, [p, r]),
                            v = D.computedStyle,
                            C = D.colorClassName;
                        return s().createElement(
                            we,
                            xe(
                                {
                                    className: b()(Pe.base, u && Pe[u], C, a),
                                    style: v,
                                    mt: !0 === l ? Ie[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Ie[u || 'paragraph-P16'].mr : m,
                                    mb: !0 === _ ? Ie[u || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Ie[u || 'paragraph-P16'].ml : g,
                                },
                                F,
                            ),
                            void 0 !== A ? s().createElement(Se, xe({}, A, { text: t })) : t,
                        );
                    });
                let $e;
                var Ue;
                (((Ue = $e || ($e = {})).SHORT_DATE = 'short-date'),
                    (Ue.SHORT_TIME = 'short-time'),
                    (Ue.SHORT_DATE_TIME = 'short-date-time'),
                    (Ue.FULL_DATE = 'full-date'),
                    (Ue.FULL_DATE_TIME = 'full-date-time'),
                    (Ue.MONTH = 'month'),
                    (Ue.MONTH_DATE = 'month-date'),
                    (Ue.DATE_MONTH = 'date-month'),
                    (Ue.MONTH_YEAR = 'month-year'),
                    (Ue.WEEK_DAY = 'week-day'),
                    (Ue.WEEK_DAY_TIME = 'week-day-time'),
                    (Ue.YEAR = 'year'),
                    (Ue.DATE_YEAR = 'date-year'));
                var Ge = u(4179);
                const We = 1e3;
                Date.now();
                const Qe = R.strings.armory_yard,
                    ze = R.strings.menu.dateTime.months,
                    qe = (e) =>
                        e === H.PurchaseStage ? Qe.mainView.state.purchaseStage() : Qe.mainView.state.progression(),
                    Ve = (0, n.memo)(
                        ({ fromTimestamp: e, toTimestamp: t, title: u, subtitle: a = '', state: r = H.Active }) => {
                            const n = Ge.Z5.getTimeFormat(t, Ge.lf.SHORT_FORMAT),
                                o = ((e, t) => {
                                    const u = new Date(e * We),
                                        a = new Date(t * We),
                                        r = String(ze.$num(u.getMonth() + 1)).toUpperCase(),
                                        n = String(ze.$num(a.getMonth() + 1)).toUpperCase();
                                    return { fromDate: u.getDate() + ' ' + r, toDate: a.getDate() + ' ' + n };
                                })(e, t);
                            return s().createElement(
                                'div',
                                { className: 'Header_base_2a' },
                                s().createElement(
                                    'div',
                                    { className: 'Header_subtitle_b0' },
                                    s().createElement(He, { className: 'Header_featureName_c8', text: qe(r) }),
                                    s().createElement('div', { className: 'Header_separator_0b' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Header_date_d0' },
                                        a.length > 0
                                            ? s().createElement(He, { text: a })
                                            : s().createElement(He, {
                                                  text: Qe.mainView.dateFormat(),
                                                  format: { binding: Object.assign({}, o, { toTime: n }) },
                                              }),
                                    ),
                                ),
                                s().createElement(He, { className: 'Header_title_3e', text: u }),
                            );
                        },
                    ),
                    je = 'mergedReward';
                let Xe, Ye, Ke, Ze;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(Xe || (Xe = {})),
                    (function (e) {
                        ((e.Disabled = 'disabled'), (e.Active = 'active'), (e.Completed = 'completed'));
                    })(Ye || (Ye = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'),
                            (e[(e.Tokens = 1)] = 'Tokens'),
                            (e[(e.Coins = 2)] = 'Coins'),
                            (e[(e.Lock = 3)] = 'Lock'));
                    })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.Common = 'common'),
                            (e.Progression = 'progression'),
                            (e.PostProgression = 'postProgression'));
                    })(Ze || (Ze = {})));
                const Je = [
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
                function et(e) {
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
                const tt = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ge.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    ut = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            A = e.targetId,
                            F = void 0 === A ? 0 : A,
                            D = e.onShow,
                            v = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Je);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, n.useMemo)(
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
                            B = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (tt(u, E, { isMouseEvent: !0, on: !0, arguments: et(a) }, h),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [u, E, a, h, D]),
                            f = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        tt(u, E, { on: !1 }, h),
                                        C.current.isVisible && v && v(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, E, h, v]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && f();
                            }, [p, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            p
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (f(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === d && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === d && f(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    };
                let at, rt, nt, st, ot, it, lt, ct;
                var mt, dt;
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
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'));
                })(at || (at = {})),
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
                    })(rt || (rt = {})),
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
                    })(nt || (nt = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(st || (st = {})),
                    ((dt = ot || (ot = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (dt.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (dt.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (dt.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (dt.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (dt.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (dt.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (dt.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (dt.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (dt.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (dt.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (dt.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (dt.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((it || (it = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((mt = lt || (lt = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (mt.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (mt.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (mt.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (mt.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (mt.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (mt.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (mt.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (mt.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (mt.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (mt.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (mt.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (mt.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(ct || (ct = {})));
                class _t extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? Ge.B3.GOLD : Ge.B3.INTEGRAL;
                        const t = Ge.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                _t.defaultProps = { format: 'integral' };
                const Et = [
                        at.Items,
                        at.Equipment,
                        at.Xp,
                        at.XpFactor,
                        at.Blueprints,
                        at.BlueprintsAny,
                        at.Goodies,
                        at.Berths,
                        at.Slots,
                        at.Tokens,
                        at.CrewSkins,
                        at.CrewBooks,
                        at.Customizations,
                        at.CreditsFactor,
                        at.TankmenXp,
                        at.TankmenXpFactor,
                        at.FreeXpFactor,
                        at.BattleToken,
                        at.PremiumUniversal,
                        at.NaturalCover,
                        at.BpCoin,
                        at.BattlePassSelectToken,
                        at.BattlaPassFinalAchievement,
                        at.BattleBadge,
                        at.BonusX5,
                        at.CrewBonusX3,
                        at.NewYearFillers,
                        at.NewYearInvoice,
                        at.EpicSelectToken,
                        at.Comp7TokenWeeklyReward,
                        at.Comp7TokenCouponReward,
                        at.BattleBoosterGift,
                        at.CosmicLootboxCommon,
                        at.CosmicLootboxSilver,
                        at.SelectableBonus,
                        at.GoldenTicket,
                        at.PostStamp,
                        at.PremiumPlusUniversal,
                    ],
                    gt = [at.Gold, at.Credits, at.Crystal, at.FreeXp],
                    pt = [at.BattlePassPoints],
                    At = [at.PremiumPlus, at.Premium];
                let Ft;
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
                })(Ft || (Ft = {}));
                const Dt = (e) =>
                        Et.includes(e)
                            ? st.MULTI
                            : gt.includes(e)
                              ? st.CURRENCY
                              : pt.includes(e)
                                ? st.NUMBER
                                : At.includes(e)
                                  ? st.PREMIUM_PLUS
                                  : st.STRING,
                    vt = ['engravings', 'backgrounds'],
                    bt = ['engraving', 'background'],
                    Ct = (e, t = nt.Small) => {
                        const u = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case nt.S600x450:
                                        return 'c_600x450';
                                    case nt.S400x300:
                                        return 'c_400x300';
                                    case nt.S296x222:
                                        return 'c_296x222';
                                    case nt.S232x174:
                                        return 'c_232x174';
                                    case nt.Big:
                                        return 'c_80x80';
                                    case nt.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case nt.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case nt.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const a = vt[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            n = r.$dyn(u);
                                        return n ? `${n}` : `${r.$dyn(bt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case nt.S600x450:
                                            return 'c_600x450';
                                        case nt.S400x300:
                                            return 'c_400x300';
                                        case nt.S296x222:
                                            return 'c_296x222';
                                        case nt.S232x174:
                                            return 'c_232x174';
                                        case nt.S180x135:
                                            return 'big';
                                        case nt.Big:
                                        case nt.S80x80:
                                            return 'c_80x80';
                                        case nt.Small:
                                        case nt.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${n}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case nt.Mini:
                                            return Ft.s32;
                                        case nt.Small:
                                        case nt.S48x48:
                                            return Ft.s48;
                                        case nt.S80x80:
                                        case nt.Big:
                                            return Ft.s80;
                                        case nt.S128x100:
                                            return Ft.s116;
                                        case nt.S180x135:
                                        case nt.S232x174:
                                        case nt.S296x222:
                                            return Ft.s296;
                                        case nt.S400x300:
                                            return Ft.s400;
                                        case nt.S600x450:
                                            return Ft.s600;
                                    }
                                })(t)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    ht = (e, t, u) => {
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
                    Bt = ['children'];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const wt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Bt);
                        return s().createElement(
                            ut,
                            ft(
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
                    St = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const Rt = R.views.common.tooltip_window.simple_tooltip_content,
                    Pt = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            r = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, St);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: a, note: r, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, a, r, i]);
                        return s().createElement(
                            ut,
                            yt(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? Rt.SimpleTooltipHtmlContent('resId') : Rt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    };
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const xt = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = s().createElement('div', { className: u }, e);
                        if (t.header || t.body) return s().createElement(Pt, t, a);
                        const r = t.contentId,
                            n = t.args,
                            o = null == n ? void 0 : n.contentId;
                        return r || o
                            ? s().createElement(ut, Tt({}, t, { contentId: r || o }), a)
                            : s().createElement(wt, t, a);
                    },
                    Nt = (U.EmptyRewards, U.ReadyRewards),
                    Mt =
                        (U.AnimatedRewards, (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1)),
                    Lt = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: Mt },
                    },
                    kt = {
                        from: { opacity: 0 },
                        enter: { opacity: 0.2 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: Mt },
                    },
                    It = { config: { duration: 450, easing: Mt } },
                    Ot = {
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
                    Ht = (0, n.memo)(({ step: e, state: t = Du.Future, playStageSound: u }) => {
                        const a = (0, n.useState)(!1),
                            r = a[0],
                            o = a[1],
                            i = (0, n.useCallback)(() => {
                                u && u(e);
                            }, [u, e]),
                            l = (0, V.useSpring)({ opacity: t === Du.Past ? 1 : 0, HIDE_CONFIG: It }),
                            c = (0, V.useSpring)({ opacity: t === Du.Present ? 1 : 0, HIDE_CONFIG: It }),
                            m = (0, V.useSpring)({ opacity: t === Du.Future ? 1 : 0, HIDE_CONFIG: It }),
                            d = (0, V.useTransition)(r, Object.assign({ key: r }, Lt));
                        return s().createElement(
                            'div',
                            {
                                className: b()(Ot.base, Ot[`base__${t}`]),
                                onMouseEnter: () => {
                                    (K.playHighlight(), o(!0));
                                },
                                onMouseLeave: () => {
                                    o(!1);
                                },
                                onClick: i,
                            },
                            s().createElement(V.animated.div, { className: Ot.future, style: m }),
                            s().createElement(V.animated.div, { className: Ot.past, style: l }),
                            s().createElement(V.animated.div, { className: Ot.present, style: c }),
                            d((e, t) => t && s().createElement(V.animated.div, { className: Ot.hover, style: e })),
                            s().createElement(He, { text: String(e), className: Ot.step }),
                        );
                    }),
                    $t = {
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
                    Ut = {
                        base: 'Preview_base_00',
                        base__hovered: 'Preview_base__hovered_df',
                        icon: 'Preview_icon_81',
                        icon__small: 'Preview_icon__small_5c',
                        icon__normal: 'Preview_icon__normal_93',
                        base__mouseDown: 'Preview_base__mouseDown_78',
                        label: 'Preview_label_44',
                        base__visibleLabel: 'Preview_base__visibleLabel_4d',
                    },
                    Gt = [
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
                let Qt;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(Qt || (Qt = {}));
                const zt = (0, n.memo)((e) => {
                        let t = e.label,
                            u = e.isVisibleLabel,
                            a = void 0 !== u && u,
                            r = e.autofocus,
                            o = void 0 !== r && r,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            m = void 0 === c ? 'play' : c,
                            d = e.size,
                            _ = void 0 === d ? Qt.NORMAL : d,
                            E = e.onClick,
                            g = e.onMouseEnter,
                            p = e.onMouseLeave,
                            A = e.onMouseDown,
                            F = e.onMouseUp,
                            D = e.onFocus,
                            v = e.onBlur,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Gt);
                        const h = (0, n.useState)(!1),
                            B = h[0],
                            f = h[1],
                            w = (0, n.useState)(!1),
                            S = w[0],
                            y = w[1],
                            R = (0, n.useState)(o),
                            P = R[0],
                            T = R[1],
                            x = (0, n.useRef)(null),
                            N = (0, n.useCallback)(() => {
                                x.current && (x.current.focus(), T(!0));
                            }, []),
                            M = (0, n.useCallback)(
                                (e) => {
                                    P && null !== x.current && !x.current.contains(e.target) && T(!1);
                                },
                                [P],
                            );
                        ((0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                            (0, n.useEffect)(() => {
                                T(o);
                            }, [o]));
                        const L = (0, n.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            k = (0, n.useCallback)(
                                (e) => {
                                    (f(!0), A && A(e), m && Y(m), o && N());
                                },
                                [o, A, N, m],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    (f(!1), F && F(e));
                                },
                                [F],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    (g && g(e), l && Y(l), y(!0));
                                },
                                [g, l],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    (f(!1), y(!1), p && p(e));
                                },
                                [p],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    (T(!0), D && D(e));
                                },
                                [D],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    (T(!1), v && v(e));
                                },
                                [v],
                            ),
                            G = b()(
                                Ut.base,
                                a && Ut.base__visibleLabel,
                                B && Ut.base__mouseDown,
                                S && Ut.base__hovered,
                                P && Ut.base__focused,
                            ),
                            W = b()(Ut.icon, Ut[`icon__${_}`]);
                        return s().createElement(
                            'div',
                            Wt(
                                {
                                    ref: x,
                                    className: G,
                                    onClick: L,
                                    onMouseEnter: O,
                                    onMouseLeave: H,
                                    onMouseDown: k,
                                    onMouseUp: I,
                                    onFocus: $,
                                    onBlur: U,
                                },
                                C,
                            ),
                            s().createElement('div', { className: W }),
                            s().createElement('div', { className: Ut.label }, t),
                        );
                    }),
                    qt = [
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
                const jt = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            a = e.getImageSource,
                            r = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? r - 1 : d,
                            E = e.loop,
                            g = void 0 === E || E,
                            p = e.state,
                            A = void 0 === p ? 'play' : p,
                            F = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            v = e.poster,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, qt);
                        const C = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (A) {
                                    case 'play':
                                        return (function () {
                                            const e = Kt(m, _, a),
                                                t = Xt(m, _),
                                                r = window.setInterval(() => {
                                                    const a = t(),
                                                        n = e.get(a);
                                                    n
                                                        ? (null == o || o(a, n),
                                                          u(n),
                                                          a === _ &&
                                                              (null == D || D(),
                                                              g || (null == F || F(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && v ? { path: v, x: 0, y: 0 } : a(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const r = () => u(Yt(e, t));
                                            return (
                                                t.addEventListener('load', r),
                                                () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, m, _, g, o, D, F, v, A]),
                            s().createElement('canvas', Vt({}, b, { width: t, height: u, ref: C }))
                        );
                    }),
                    Xt = (e, t) => {
                        let u = e;
                        return () => {
                            const a = u;
                            return ((u += 1), u > t && (u = e), a);
                        };
                    },
                    Yt = (e, t) => Object.assign({}, e, { img: t }),
                    Kt = (e, t, u) => {
                        const a = new Map(),
                            r = {};
                        for (let n = e; n <= t; n++) {
                            const e = u(n),
                                t = r[e.path];
                            if (t) a.set(n, Yt(e, t));
                            else {
                                const t = new Image();
                                ((r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${n})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(n, Yt(e, t)));
                            }
                        }
                        return a;
                    };
                function Zt(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const r = a % u,
                            n = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: n, y: s };
                    };
                }
                const Jt = { base: 'SequencedBg_base_9b', image: 'SequencedBg_image_31' },
                    eu = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const tu = s().memo(() =>
                        s().createElement(
                            'div',
                            { className: Jt.base },
                            i.O.client.graphicsQuality.isLow()
                                ? s().createElement('div', { className: Jt.image })
                                : s().createElement(jt, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: eu.width,
                                      height: eu.height,
                                      frameCount: eu.frameCount,
                                      className: Jt.seq,
                                      getImageSource: Zt(eu),
                                  }),
                        ),
                    ),
                    uu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    au = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function ru(e) {
                    let t = '';
                    for (let u = au.length - 1; u >= 0; u--) for (; e >= au[u];) ((t += uu[u]), (e -= au[u]));
                    return t;
                }
                const nu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    su = (e) => (nu ? `${e}` : ru(e)),
                    ou = (0, n.memo)(({ isElite: e, vehicleName: t, type: u, level: a }) =>
                        s().createElement(
                            'div',
                            { className: 'TankName_base_24' },
                            s().createElement(He, { text: su(a) }),
                            s().createElement('div', {
                                className: b()('TankName_type_aa', e && 'TankName_type__elite_ee'),
                                style: (() => {
                                    const t = `${se(u)}${e ? '_elite' : ''}`;
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(t)})`,
                                    };
                                })(),
                            }),
                            s().createElement(He, { text: t, className: 'TankName_name_20' }),
                        ),
                    ),
                    iu = R.strings.armory_yard.mainView.mainReward,
                    lu = (0, n.memo)(
                        ({ isHighlighted: e, onPreview: t, scale: u = 0, step: a, reward: r, isFinalReward: n = !1 }) =>
                            s().createElement(
                                'div',
                                { className: $t.base },
                                Boolean(e && u) &&
                                    s().createElement(
                                        'div',
                                        { className: $t.sequence, style: { '--scale': `${u}` } },
                                        s().createElement(tu, null),
                                    ),
                                s().createElement(
                                    xt,
                                    {
                                        tooltipArgs: ht(
                                            { tooltipId: r.tooltipId, tooltipType: je },
                                            Number.parseInt(r.tooltipContentId),
                                        ),
                                        className: $t.tooltipWrapper,
                                    },
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        r.name === at.Vehicles &&
                                            s().createElement('div', { className: $t.info }, s().createElement(ou, r)),
                                        s().createElement('div', { className: b()($t.icon, n && $t.icon__main) }),
                                    ),
                                ),
                                s().createElement(
                                    Pt,
                                    {
                                        body: n
                                            ? R.strings.armory_yard.buyView.stylePreview.tooltip()
                                            : R.strings.armory_yard.buyView.vehiclePreview.tooltip(),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: $t.preview },
                                        s().createElement(zt, {
                                            label: R.strings.armory_yard.buyView.vehiclePreview.label(),
                                            onClick: t,
                                            isVisibleLabel: !0,
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: b()($t.step, n && $t.step__ave, e && $t.step__completed) },
                                    n
                                        ? s().createElement(Ht, { step: a, state: e ? Du.Present : Du.Future })
                                        : s().createElement(
                                              'div',
                                              { className: $t.stepIcon },
                                              s().createElement(He, { text: String(a) }),
                                          ),
                                    s().createElement(He, { className: $t.stepLabel, text: iu.completed() }),
                                ),
                            ),
                    ),
                    cu = {
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
                    mu = {
                        base: 'StepLine_base_1a',
                        base__past: 'StepLine_base__past_3b',
                        base__present: 'StepLine_base__present_22',
                        base__future: 'StepLine_base__future_c9',
                    },
                    du = s().memo(({ state: e }) =>
                        s().createElement('div', { className: b()(mu.base, mu[`base__${e}`]) }),
                    ),
                    _u = {
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
                    Eu = (0, n.memo)(
                        ({
                            state: e = Du.Future,
                            levelDuration: t,
                            isEmpty: u,
                            isRunning: a,
                            position: r = vu.Normal,
                        }) => {
                            const o = (0, n.useState)({}),
                                i = o[0],
                                l = o[1],
                                c = (0, n.useState)({}),
                                m = c[0],
                                d = c[1],
                                _ = (0, n.useState)(''),
                                E = _[0],
                                g = _[1],
                                p = (0, n.useState)(''),
                                A = p[0],
                                F = p[1];
                            return (
                                (0, n.useEffect)(() => {
                                    (a
                                        ? r === vu.First
                                            ? (g(_u.animatedProgressFirstPositon), F(_u.animatedPointerFirstPositon))
                                            : (g(_u.animatedProgress), F(_u.animatedPointer))
                                        : (g(''), F('')),
                                        u || a
                                            ? u && a && t
                                                ? (l({ animationDuration: `${t}s` }), d({ animationDuration: `${t}s` }))
                                                : u &&
                                                  !a &&
                                                  (r === vu.First
                                                      ? (l({ width: '20%' }), d({ left: '20%' }))
                                                      : (l({}), d({})))
                                            : (l({ width: '100%' }), d({ left: '100%' })));
                                }, [u, a, t, r]),
                                s().createElement(
                                    'div',
                                    { className: b()(_u.base, _u[`base__${r}`], _u[`base__${e}`]) },
                                    s().createElement('div', { className: _u.shadow }),
                                    s().createElement('div', { className: _u.bg }),
                                    s().createElement('div', { className: b()(_u.progress, E), style: i }),
                                    a ||
                                        (r === vu.First &&
                                            s().createElement(
                                                'div',
                                                { className: b()(_u.pointer, A), style: m },
                                                s().createElement('div', { className: _u.pointerFlare2 }),
                                                s().createElement('div', { className: _u.pointerFlare1 }),
                                            )),
                                )
                            );
                        },
                    ),
                    gu = {
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
                    pu = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = nt.Big,
                        special: r,
                        value: n,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ot.BATTLE_BOOSTER:
                                    case ot.BATTLE_BOOSTER_REPLACE:
                                        return it.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ot.BATTLE_BOOSTER:
                                        return lt.BATTLE_BOOSTER;
                                    case ot.BATTLE_BOOSTER_REPLACE:
                                        return lt.BATTLE_BOOSTER_REPLACE;
                                    case ot.BUILT_IN_EQUIPMENT:
                                        return lt.BUILT_IN_EQUIPMENT;
                                    case ot.EQUIPMENT_PLUS:
                                        return lt.EQUIPMENT_PLUS;
                                    case ot.EQUIPMENT_TROPHY_BASIC:
                                        return lt.EQUIPMENT_TROPHY_BASIC;
                                    case ot.EQUIPMENT_TROPHY_UPGRADED:
                                        return lt.EQUIPMENT_TROPHY_UPGRADED;
                                    case ot.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return lt.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ot.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return lt.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ot.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return lt.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ot.PROGRESSION_STYLE_UPGRADED_1:
                                        return lt.PROGRESSION_STYLE_UPGRADED_1;
                                    case ot.PROGRESSION_STYLE_UPGRADED_2:
                                        return lt.PROGRESSION_STYLE_UPGRADED_2;
                                    case ot.PROGRESSION_STYLE_UPGRADED_3:
                                        return lt.PROGRESSION_STYLE_UPGRADED_3;
                                    case ot.PROGRESSION_STYLE_UPGRADED_4:
                                        return lt.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case st.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case st.CURRENCY:
                                    case st.NUMBER:
                                        return s().createElement(_t, { format: 'integral', value: Number(e) });
                                    case st.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, o);
                        return s().createElement(
                            'div',
                            { className: b()(gu.base, gu[`base__${a}`], l), style: i },
                            s().createElement(
                                xt,
                                { tooltipArgs: m, className: gu.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: b()(gu.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: b()(gu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: b()(gu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: b()(gu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    gu.info,
                                                    gu[`info__${e}`],
                                                    o === st.MULTI && gu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    xt,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: b()(gu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Au = {
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
                    Fu = s().memo(({ state: e, reward: t, position: u = vu.Normal }) => {
                        const a = t && u !== vu.Left && u !== vu.Last,
                            r = (0, V.useSpring)({ opacity: e === Du.Past ? 1 : 0, HIDE_CONFIG: It }),
                            o = (0, V.useSpring)({ opacity: e === Du.Present ? 1 : 0, HIDE_CONFIG: It }),
                            i = (0, V.useSpring)({ opacity: e === Du.Future ? 1 : 0, HIDE_CONFIG: It }),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = (0, n.useCallback)(() => {
                                m(!0);
                            }, []),
                            _ = (0, n.useCallback)(() => {
                                m(!1);
                            }, []),
                            E = (0, V.useTransition)(c, Object.assign({ key: c }, Lt));
                        return s().createElement(
                            'div',
                            {
                                className: b()(Au.base, Au[`base__${e}`], Au[`base__${u}`]),
                                onMouseEnter: d,
                                onMouseLeave: _,
                            },
                            s().createElement(
                                V.animated.div,
                                { style: r },
                                s().createElement('div', { className: Au.pastField }),
                            ),
                            E((e, t) => t && s().createElement(V.animated.div, { className: Au.hover, style: e })),
                            s().createElement(
                                V.animated.div,
                                { style: o },
                                s().createElement('div', { className: Au.presentField }),
                                s().createElement('div', { className: Au.presentLight }),
                            ),
                            s().createElement(
                                V.animated.div,
                                { style: i },
                                s().createElement('div', { className: Au.futureField }),
                            ),
                            a && s().createElement('div', { className: Au.reward }, s().createElement(pu, t)),
                        );
                    });
                let Du, vu;
                (!(function (e) {
                    ((e.Past = 'past'), (e.Present = 'present'), (e.Future = 'future'));
                })(Du || (Du = {})),
                    (function (e) {
                        ((e.First = 'first'),
                            (e.Last = 'last'),
                            (e.Normal = 'normal'),
                            (e.Left = 'left'),
                            (e.Right = 'right'));
                    })(vu || (vu = {})));
                const bu = (0, n.memo)(
                    ({
                        step: e,
                        state: t,
                        reward: u,
                        levelDuration: a,
                        isEmpty: r,
                        isRunning: n,
                        position: o = vu.Normal,
                        isMainReward: i = !1,
                        playStageSound: l,
                        onPreview: c,
                    }) => {
                        const m = o !== vu.Last && !i;
                        return s().createElement(
                            'div',
                            { className: cu.base },
                            m && s().createElement('div', { className: cu.line }, s().createElement(du, { state: t })),
                            s().createElement(
                                'div',
                                { className: b()(cu.progress, cu[`progress__${o}`]) },
                                s().createElement(Eu, {
                                    state: t,
                                    position: o,
                                    levelDuration: a,
                                    isEmpty: r,
                                    isRunning: n,
                                }),
                            ),
                            m &&
                                s().createElement(
                                    'div',
                                    { className: cu.icon },
                                    s().createElement(
                                        ut,
                                        {
                                            contentId:
                                                R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView(
                                                    'resId',
                                                ),
                                            args: { state: Q.Step, step: e },
                                            ignoreShowDelay: !0,
                                        },
                                        s().createElement(
                                            'div',
                                            null,
                                            s().createElement(Ht, { step: e, state: t, playStageSound: l }),
                                        ),
                                    ),
                                ),
                            i &&
                                s().createElement(
                                    'div',
                                    { className: cu.mainReward },
                                    s().createElement(lu, {
                                        step: e,
                                        reward: u,
                                        isHighlighted: t === Du.Past || t === Du.Present,
                                        onPreview: c,
                                    }),
                                ),
                            s().createElement(
                                'div',
                                { className: cu.reward },
                                s().createElement(Fu, { state: t, reward: u, position: o }),
                            ),
                        );
                    },
                );
                let Cu;
                function hu() {
                    return !1;
                }
                (!(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(Cu || (Cu = {})),
                    console.log);
                var Bu = u(3915);
                function fu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const wu = (e) => (0 === e ? window : window.subViews.get(e)),
                    Su = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((t = e),
                                  (u = (e) => ('object' == typeof e ? Su(e) : e)),
                                  Array.isArray(t) ? t.map(u) : t.map((e, t, a) => u(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Su(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? Su(t) : t]),
                                    )
                            : e;
                        var t, u;
                    },
                    yu = (e) => Su(e);
                var Ru = u(6517);
                const Pu = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: r, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, u, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = wu,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = u(t),
                                                        n = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (u, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return (r.set(l, u), e && u(s(n)), l);
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
                                                                                    return fu(e, t);
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
                                                                                          ? fu(e, t)
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
                                                                })(r.keys());
                                                            !(e = u()).done;
                                                        )
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(u),
                                            s =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
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
                                                        primitives: e.primitives(['viewedLevel', 'currentLevel']),
                                                    },
                                                    u = (0, Ru.computedFn)(
                                                        (e) =>
                                                            Object.assign({}, e, {
                                                                name: e.name,
                                                                image: Ct(e, nt.Small),
                                                                special: e.overlayType,
                                                                size: nt.Small,
                                                                value: e.name === at.Vehicles ? e.label : e.value,
                                                                valueType: Dt(e.name),
                                                                tooltipArgs: ht(
                                                                    { tooltipId: e.tooltipId, tooltipType: je },
                                                                    Number.parseInt(e.tooltipContentId),
                                                                ),
                                                            }),
                                                        { equals: hu },
                                                    ),
                                                    a = (0, Ru.computedFn)(
                                                        () =>
                                                            yu(t.levels.get()).map((e) =>
                                                                Object.assign({}, e, {
                                                                    rewards: e.rewards.map((e) => u(e)),
                                                                }),
                                                            ),
                                                        { equals: hu },
                                                    ),
                                                    r = (0, Ru.computedFn)(
                                                        () => {
                                                            var e;
                                                            return null !=
                                                                (e = a().find((e) => e.rewardType === Ze.Progression))
                                                                ? e
                                                                : null;
                                                        },
                                                        { equals: hu },
                                                    ),
                                                    n = (0, Ru.computedFn)(
                                                        () => {
                                                            var e;
                                                            return null !=
                                                                (e = a().find(
                                                                    (e) => e.rewardType === Ze.PostProgression,
                                                                ))
                                                                ? e
                                                                : null;
                                                        },
                                                        { equals: hu },
                                                    ),
                                                    s = (0, Ru.computedFn)(() => a().length),
                                                    o = (0, Ru.computedFn)(() => yu(t.chapters.get()), { equals: hu }),
                                                    i = (0, Ru.computedFn)((e) => o()[e], { equals: hu }),
                                                    l = (0, Ru.computedFn)(() => yu(t.quests.get()), { equals: hu }),
                                                    c = (0, Ru.computedFn)(
                                                        () => {
                                                            const e = o().findIndex(
                                                                (e) =>
                                                                    !0 === (null == e ? void 0 : e.isPostProgression) &&
                                                                    (null == e ? void 0 : e.state) === Ye.Active,
                                                            );
                                                            if (-1 !== e) return e;
                                                            const t = o().findIndex(
                                                                (e) =>
                                                                    (null == e ? void 0 : e.state) !== Ye.Completed ||
                                                                    0,
                                                            );
                                                            return t >= 0 ? t : 0;
                                                        },
                                                        { equals: hu },
                                                    ),
                                                    m = (0, Ru.computedFn)(
                                                        (e) => {
                                                            const t = l().filter(
                                                                    (t) =>
                                                                        t.quests.length &&
                                                                        t.quests[0].chapterId === i(e).id,
                                                                ),
                                                                u = [Cu.Active, Cu.Locked, Cu.Done];
                                                            return t.sort(
                                                                (e, t) => u.indexOf(e.status) - u.indexOf(t.status),
                                                            );
                                                        },
                                                        { equals: hu },
                                                    ),
                                                    d = (0, Ru.computedFn)(
                                                        (e) => e.filter((e) => !(e.label || e.value)).length,
                                                        { equals: hu },
                                                    ),
                                                    _ = (0, Ru.computedFn)(
                                                        () =>
                                                            a().map(({ level: e }) =>
                                                                e <= t.primitives.viewedLevel.get()
                                                                    ? { state: Du.Past, isRunning: !1, isEmpty: !1 }
                                                                    : e <= t.primitives.currentLevel.get()
                                                                      ? {
                                                                            state: Du.Present,
                                                                            isRunning: !1,
                                                                            isEmpty: !1,
                                                                        }
                                                                      : {
                                                                            state: Du.Future,
                                                                            isRunning: !1,
                                                                            isEmpty: !0,
                                                                        },
                                                            ),
                                                        { equals: hu },
                                                    );
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getLevels: a,
                                                        getLevelsLength: s,
                                                        getChapters: o,
                                                        getChapter: i,
                                                        getQuests: l,
                                                        getQuestTokensCount: d,
                                                        getInitIndex: c,
                                                        getFilteredAndSortedQuests: m,
                                                        getMainLevel: r,
                                                        getFinalLevel: n,
                                                        getInitialAnimationProgress: _,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const a = null != u ? u : o(t),
                                                            r = Bu.observable.box(a, { equals: hu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Bu.action)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const a = null != u ? u : o(t),
                                                            r = Bu.observable.box(a, { equals: hu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Bu.action)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const a = o(u);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = Bu.observable.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Bu.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                n = Object.entries(r),
                                                                o = n.reduce(
                                                                    (e, [t, u]) => (
                                                                        (e[u] = Bu.observable.box(a[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Bu.action)((e) => {
                                                                            n.forEach(([t, u]) => {
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
                                            d = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    d = (0, n.useState)(e),
                                    _ = d[0],
                                    E = d[1],
                                    g = (0, n.useState)(() => c(e, a, o)),
                                    p = g[0],
                                    A = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? A(c(_, a, o)) : (m.current = !0);
                                    }, [o, _, a]),
                                    (0, n.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    s().createElement(u.Provider, { value: p }, r)
                                );
                            },
                            () => (0, n.useContext)(u),
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
                        onShowStylePreview: e.createCallbackNoArgs('onShowStylePreview'),
                        playStageSound: e.createCallback((e) => ({ stageId: e }), 'onPlayStageSound'),
                        onQuestReroll: e.createCallback((e) => ({ questId: e }), 'onQuestReroll'),
                        onChapterSelect: e.createCallback((e) => ({ chapterId: e }), 'onChapterSelect'),
                    })),
                    Tu = Pu[0],
                    xu = Pu[1];
                let Nu;
                !(function (e) {
                    ((e.ArmoryCoin = 'armory_coin'), (e.ProgressionToken = 'progression_token'));
                })(Nu || (Nu = {}));
                const Mu = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Lu = [];
                function ku(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), Lu)
                    );
                }
                function Iu(e, t, u = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        r,
                    ];
                }
                function Ou(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                let Hu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Hu || (Hu = {}));
                const $u = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Uu = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const a = t(e),
                                r = a[0],
                                n = a[1];
                            return Mu(r, n, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? $u : c,
                                d = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (
                                                var a,
                                                    r = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Ou(e, t);
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
                                                                              ? Ou(e, t)
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
                                                !(a = r()).done;
                                            )
                                                (0, a.value)(...u);
                                        };
                                    return (0, n.useMemo)(() => ({ on: u, off: a, trigger: r }), []);
                                })(),
                                g = (function (e, t, u) {
                                    const a = (0, n.useMemo)(
                                        () =>
                                            (function (e, t, u, a) {
                                                let r,
                                                    n = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(l, i));
                                                    }
                                                    n ||
                                                        (a && !r && m(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (n = !0));
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, V.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                A = p[0],
                                F = p[1],
                                D = (0, n.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const r = A.scrollPosition.get(),
                                            n = (null != (a = A.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * u + n + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                v = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = d.current;
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
                                b = (0, n.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, m.step),
                                            n = D(t, e, a);
                                        v(n);
                                    },
                                    [v, D, m.step],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(a(e)),
                                            d.current && E.trigger('mouseWheel', e, A.scrollPosition, t(d.current)));
                                    },
                                    [A.scrollPosition, b, E],
                                ),
                                h = ((e, t = []) => {
                                    const u = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        q(() => {
                                            const e = d.current;
                                            e &&
                                                (v(o(e, A.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, A.scrollPosition.goal],
                                ),
                                B = ku(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            const f = (0, n.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: v,
                                    applyStepTo: b,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: F,
                                    animationScroll: A,
                                    recalculateContent: B,
                                    handleIsThumbDragging: f,
                                    events: { on: E.on, off: E.off },
                                }),
                                [A.scrollPosition, v, b, f, E.off, E.on, B, C, F, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Gu = Uu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Wu = 'HorizontalBar_base__nonActive_82',
                    Qu = 'disable',
                    zu = { pending: !1, offset: 0 },
                    qu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Vu = () => {},
                    ju = (e, t) => Math.max(20, e.offsetWidth * t),
                    Xu = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = qu, onDrag: a = Vu }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, n.useState)(zu),
                            _ = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            p = () => {
                                const t = l.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    m = Mu(0, 1, n / (r - a)),
                                    d = (t.offsetWidth - ju(t, s)) * m;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Qu),
                                                    void i.current.classList.remove(Qu)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Qu),
                                                    void i.current.classList.add(Qu)
                                                );
                                            var t, u;
                                            (o.current.classList.remove(Qu), i.current.classList.remove(Qu));
                                        }
                                    })(d));
                            },
                            A = ku(() => {
                                ((() => {
                                    const t = c.current,
                                        u = l.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && a && u)) return;
                                    const s = Math.min(1, a / n);
                                    ((t.style.width = `${ju(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Wu) : r.current.classList.remove(Wu)));
                                })(),
                                    p());
                            });
                        ((0, n.useEffect)(() => q(A)),
                            (0, n.useEffect)(
                                () =>
                                    q(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = Vu;
                                        const a = () => {
                                            (u(), (u = q(A)));
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
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const n = l.current,
                                            s = c.current;
                                        if (!r || !n || !s) return;
                                        const o = t.screenX - _.offset - n.getBoundingClientRect().x,
                                            i = (o / n.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), g(zu));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, _.offset, _.pending, a, g]));
                        const F = Iu((t) => e.applyStepTo(t), m, [e]),
                            D = F[0],
                            v = F[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Qu) || Y('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qu) || 0 !== e.button || (Y('play'), D(Hu.Next));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        a &&
                                            0 === t.button &&
                                            (Y('play'),
                                            t.target === a
                                                ? g({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = c.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const n = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? Hu.Prev : Hu.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: b()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: b()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qu) || 0 !== e.button || (Y('play'), D(Hu.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Yu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ku = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(Yu.base, e.base) });
                            }, [a]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: b()(Yu.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(Yu.defaultScrollArea, r) },
                                s().createElement(Zu, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(Xu, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Zu = ({ api: e, className: t, classNames: u, children: a, style: r }) => (
                        (0, n.useEffect)(() => q(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Yu.base, t), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: b()(Yu.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(Yu.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Zu.Bar = Xu),
                    (Zu.Default = Ku),
                    (Zu.SeniorityAwards = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, n.useEffect)(() => q(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Yu.base, t) },
                            s().createElement(
                                'div',
                                { className: b()(Yu.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: b()(Yu.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Ju = Uu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                    }),
                    ea = 'VerticalBar_base__nonActive_42',
                    ta = 'disable',
                    ua = () => {},
                    aa = { pending: !1, offset: 0 },
                    ra = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    na = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    sa = (e, t) => Math.max(20, e.offsetHeight * t),
                    oa = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ra, onDrag: a = ua }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, n.useState)(aa),
                            _ = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            p = ku(() => {
                                const t = c.current,
                                    u = l.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && t && u)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (t.style.height = `${sa(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(ea) : r.current.classList.remove(ea)),
                                    s
                                );
                            }),
                            A = ku(() => {
                                const t = l.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    m = Mu(0, 1, n / (r - a)),
                                    d = (t.offsetHeight - sa(t, s)) * m;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(ta),
                                                    void i.current.classList.remove(ta)
                                                );
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(ta),
                                                    void i.current.classList.add(ta)
                                                );
                                            var t, u;
                                            (o.current.classList.remove(ta), i.current.classList.remove(ta));
                                        }
                                    })(d));
                            }),
                            F = ku(() => {
                                na(e, () => {
                                    (p(), A());
                                });
                            });
                        ((0, n.useEffect)(() => q(F)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    na(e, () => {
                                        A();
                                    });
                                };
                                let u = ua;
                                const a = () => {
                                    (u(), (u = q(F)));
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
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        na(e, (u) => {
                                            const r = l.current,
                                                n = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const o = t.screenY - _.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            g(aa));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, _.offset, _.pending, a, g]));
                        const D = Iu((t) => e.applyStepTo(t), m, [e]),
                            v = D[0],
                            C = D[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ta) || Y('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ta) || 0 !== e.button || (Y('play'), v(Hu.Next));
                                },
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        var r;
                                        a &&
                                            0 === t.button &&
                                            (Y('play'),
                                            t.target === a
                                                ? (e.handleIsThumbDragging(!0),
                                                  g({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y }))
                                                : ((r = t.screenY > a.getBoundingClientRect().y ? Hu.Prev : Hu.Next),
                                                  c.current &&
                                                      na(e, (t) => {
                                                          if (!t) return;
                                                          const a = u(e),
                                                              n = e.clampPosition(t, t.scrollTop + a * r);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: b()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ta) || 0 !== e.button || (Y('play'), v(Hu.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    ia = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    la = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(ia.base, e.base) });
                            }, [a]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: b()(ia.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(ia.area, r) },
                                s().createElement(ca, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(oa, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    ca = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, n.useEffect)(() => q(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(ia.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(ia.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                ca.Default = la;
                const ma = { Vertical: r, Horizontal: a };
                let da, _a, Ea, ga;
                (!(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Disabled = 'disabled'),
                        (e.Active = ''));
                })(da || (da = {})),
                    (function (e) {
                        e.C_360x270 = 'c_360x270';
                    })(_a || (_a = {})),
                    (function (e) {
                        ((e.OR = 'or'), (e.AND = 'and'));
                    })(Ea || (Ea = {})),
                    (function (e) {
                        ((e.Progression = 'progression'),
                            (e.PostProgression = 'postProgression'),
                            (e.Completed = 'completed'));
                    })(ga || (ga = {})));
                const pa = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let Aa, Fa;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Aa || (Aa = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Fa || (Fa = {})));
                const Da = ({ size: e = Aa.Default, classMix: t }) =>
                        s().createElement('div', { className: b()(pa.background, pa[`background__${e}`], t) }),
                    va = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    ba = ({ size: e }) => {
                        const t = b()(va.base, va[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    Ca = {
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
                    ha = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: n }) => {
                            const o = b()(
                                    Ca.base,
                                    Ca[`base__${e}`],
                                    u && Ca.base__disabled,
                                    r && Ca.base__finished,
                                    n && Ca.base__withoutBounce,
                                ),
                                i = !u && !r;
                            return s().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                s().createElement('div', { className: Ca.pattern }),
                                s().createElement('div', { className: Ca.gradient }),
                                i && s().createElement(ba, { size: e }),
                            );
                        },
                    ),
                    Ba = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: r }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            s().createElement(ha, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: u })
                        );
                    },
                    fa = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    };
                let wa, Sa;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(wa || (wa = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Sa || (Sa = {})));
                const ya = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                m = (0, n.useState)(Sa.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === Sa.In,
                                g = d === Sa.End,
                                p = d === Sa.Idle,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (p && !u)
                                    return fa(() => {
                                        A(Sa.In);
                                    }, t);
                            }, [A, u, p, t]),
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return fa(() => {
                                            (i && i(), A(Sa.End));
                                        }, e + t);
                                }, [A, E, i, t, e]));
                            const F = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: v },
                                      s().createElement(
                                          'div',
                                          { style: p ? F : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(ba, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Ra = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
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
                                s().createElement(ha, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(ya, {
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
                    Pa = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ta = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    xa = (e) => ({ transitionDuration: `${e}ms` }),
                    Na = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < a,
                                d = (0, n.useState)(wa.Idle),
                                _ = d[0],
                                E = d[1],
                                g = _ === wa.End,
                                p = _ === wa.Idle,
                                A = _ === wa.Grow,
                                F = _ === wa.Shrink,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                v = (0, n.useCallback)(
                                    (e, t) =>
                                        fa(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return p
                                        ? v(wa.Grow, t)
                                        : A
                                          ? v(wa.Shrink, e)
                                          : F
                                            ? v(wa.End, e)
                                            : void (g && i && i());
                            }, [v, u, g, A, p, F, i, t, e]);
                            const C = (0, n.useMemo)(() => Object.assign({ width: '100%' }, xa(e), Pa(m)), [m, e]),
                                h = (0, n.useMemo)(() => Object.assign({ width: '0%' }, xa(e), Pa(m)), [m, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ta(m, a), xa(e)), [a, m, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, Ta(m, a), xa(e)),
                                    [a, m, o, e],
                                );
                            if (g) return null;
                            const w = b()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: p ? B : f, className: w },
                                s().createElement(
                                    'div',
                                    { style: F ? h : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(ba, { size: r }),
                                ),
                            );
                        },
                    ),
                    Ma = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, n.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === wa.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(ha, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? A : p,
                                }),
                                u >= 0 &&
                                    s().createElement(Na, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
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
                    La = ['onComplete', 'onEndAnimation'];
                function ka() {
                    return (
                        (ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ka.apply(this, arguments)
                    );
                }
                const Ia = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, La);
                        const r = (0, n.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && t && t(), u && u());
                            }, [o, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case Fa.Simple:
                                return s().createElement(Ra, ka({}, a, { onEndAnimation: l, isComplete: o }));
                            case Fa.Growing:
                                return s().createElement(Ma, ka({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Oa = ['onEndAnimation'];
                function Ha() {
                    return (
                        (Ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ha.apply(this, arguments)
                    );
                }
                const $a = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Oa);
                    const a = (0, n.useRef)({}),
                        r = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = o),
                        s().createElement(Ia, Ha({}, u, { onEndAnimation: r, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function Ua() {
                    return (
                        (Ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ua.apply(this, arguments)
                    );
                }
                const Ga = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return s().createElement(Ba, {
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
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return n.withStack
                                ? s().createElement($a, c)
                                : s().createElement(Ia, Ua({ key: `${r}-${t}` }, c));
                        },
                    ),
                    Wa = (e) => ({
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
                    Qa = (e, t, u) => ('number' == typeof u ? (Mu(0, t, u) / t) * 100 : e),
                    za = {
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
                    qa = {
                        freezed: !1,
                        withStack: !1,
                        type: Fa.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Va = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = za,
                            size: u = Aa.Default,
                            animationSettings: a = qa,
                            disabled: r = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: d,
                            onEndAnimation: _,
                            onComplete: E,
                        }) => {
                            const g = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const a = (Mu(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Qa(a, t, u) };
                                }, [u, t, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: b()(pa.base, pa[`base__${u}`]), style: Wa(t) },
                                !o && s().createElement(Da, { size: u, classMix: i }),
                                s().createElement(Ga, {
                                    size: u,
                                    lineRef: m,
                                    disabled: r,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                let ja, Xa, Ya, Ka, Za;
                (!(function (e) {
                    ((e.ProgressBarComplete = 'progressBarComplete'),
                        (e.SuggestedQuestsHide = 'suggestedQuestsHide'),
                        (e.CurrentQuestToMiddle = 'currentQuestToMiddle'),
                        (e.FooterShow = 'footerShow'));
                })(ja || (ja = {})),
                    (function (e) {
                        ((e.HideRerollConditions = 'hideRerollConditions'), (e.QuestShow = 'questShow'), (e.IDLE = ''));
                    })(Xa || (Xa = {})),
                    (function (e) {
                        ((e.ShowSuggestedQuests = 'showSuggestedQuests'), (e.IDLE = 'idle'));
                    })(Ya || (Ya = {})),
                    (function (e) {
                        ((e.HideSuggestedQuests = 'hideSuggestedQuests'), (e.IDLE = ''));
                    })(Ka || (Ka = {})),
                    (function (e) {
                        ((e.DisableAllQuests = 'disableAllQuests'),
                            (e.HideAllContent = 'hideAllContent'),
                            (e.ShowEndPhase = 'showEndPhase'),
                            (e.ShowEndPhaseFooter = 'showEndPhaseFooter'));
                    })(Za || (Za = {})));
                const Ja = {
                        COMPLETE_ANIMATION: {
                            [ja.ProgressBarComplete]:
                                qa.line.delay + qa.line.duration + qa.delta.delay + qa.delta.duration,
                            [ja.SuggestedQuestsHide]: 400,
                            [ja.CurrentQuestToMiddle]: 400,
                            [ja.FooterShow]: 400,
                        },
                        SHOW_SUGGESTED_QUESTS_STEPS: {
                            [Xa.HideRerollConditions]: 400,
                            [Xa.QuestShow]: 400,
                            [Xa.IDLE]: 0,
                        },
                        SIMPLE_SHOW_SUGGESTED_QUESTS_STEPS: { [Ya.ShowSuggestedQuests]: 400, [Ya.IDLE]: 0 },
                        HIDE_SUGGESTED_QUESTS_STEPS: { [Ka.HideSuggestedQuests]: 500, [Ka.IDLE]: 0 },
                        ACTIVE_PHASE_END_STEPS: {
                            [Za.DisableAllQuests]: 500,
                            [Za.HideAllContent]: 400,
                            [Za.ShowEndPhase]: 400,
                            [Za.ShowEndPhaseFooter]: 400,
                        },
                    },
                    er = (e, t, u) =>
                        1 === e
                            ? vu.First
                            : e === t
                              ? vu.Last
                              : u && e === u
                                ? vu.Left
                                : u && e === u + 1
                                  ? vu.Right
                                  : vu.Normal,
                    tr = R.strings.armory_yard.mainView.quest,
                    ur = (e) => {
                        switch (e) {
                            case B.ExtraSmall:
                            case B.Small:
                                return 'small';
                            default:
                                return 'big';
                        }
                    },
                    ar = {
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
                    rr = (e, t, u) =>
                        u
                            ? e.map((e) => ru(e)).join(tr.levelSeparator())
                            : e
                                  .map((e) => ru(e))
                                  .slice(0, t ? 3 : e.length)
                                  .join(tr.levelSeparator()),
                    nr = (0, n.memo)(({ text: e }) =>
                        s().createElement(
                            'div',
                            { className: 'Hint_base_73' },
                            s().createElement('div', { className: 'Hint_border_2f' }),
                            s().createElement(
                                'div',
                                { className: 'Hint_hint_dc' },
                                s().createElement('div', { className: 'Hint_hintSubstrate_cd' }),
                                s().createElement('div', { className: 'Hint_hintArrow_23' }),
                                s().createElement(He, { text: e, className: 'Hint_hintText_fa' }),
                            ),
                        ),
                    ),
                    sr = {
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
                let or, ir;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'), (e.ExtraLarge = 'extraLarge'));
                })(or || (or = {})),
                    (function (e) {
                        ((e.Left = 'left'), (e.Right = 'right'));
                    })(ir || (ir = {})));
                const lr = R.strings.armory_yard.mainView.quest.rerollButton,
                    cr = (0, de.observer)(
                        ({
                            onReroll: e,
                            text: t = '',
                            className: u,
                            disabled: a = !1,
                            size: r = or.Medium,
                            textPosition: n = ir.Right,
                            hasTrigger: o = !1,
                        }) => {
                            const i = n === ir.Left && Boolean(t),
                                l = n === ir.Right && Boolean(t);
                            return s().createElement(
                                'div',
                                {
                                    className: b()(sr.base, u, a && sr.base__disabled, sr[`base__${r}`]),
                                    onClick: () => {
                                        a || (Y(R.sounds.play()), e());
                                    },
                                    onMouseEnter: () => {
                                        !a && Y(R.sounds.highlight());
                                    },
                                },
                                i && s().createElement(He, { className: sr.text, text: t || '' }),
                                s().createElement(
                                    'div',
                                    { className: sr.iconWrapper },
                                    a
                                        ? s().createElement('div', { className: sr.iconDisabled })
                                        : s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement('div', { className: sr.icon }),
                                              s().createElement('div', { className: sr.iconHover }),
                                              s().createElement('div', { className: sr.shine }),
                                              o && s().createElement(nr, { text: lr.hint() }),
                                          ),
                                ),
                                l && s().createElement(He, { className: sr.text, text: t || '' }),
                            );
                        },
                    ),
                    mr = ({ rewardsCount: e }) =>
                        s().createElement(
                            'div',
                            { className: 'QuestCompleted_base_56' },
                            s().createElement('div', { className: 'QuestCompleted_bg_fc' }),
                            s().createElement('div', { className: 'QuestCompleted_stroke_86' }),
                            s().createElement('div', { className: 'QuestCompleted_icon_8d' }),
                            s().createElement(Se, {
                                text: R.strings.armory_yard.mainView.quest.progressionToken.rewardReceived(e - 1),
                                classMix: 'QuestCompleted_label_5a',
                            }),
                        ),
                    dr = 'VehicleDescirption_levelWrapper_0c',
                    _r = 'VehicleDescirption_level_fe',
                    Er = 'VehicleDescirption_conditionSeparator_6e',
                    gr = R.strings.armory_yard.mainView.quest,
                    pr = R.images.gui.maps.icons,
                    Ar = (0, n.memo)(
                        ({
                            vehicleTypes: e = [],
                            battleTypes: t = [],
                            levels: u,
                            showLevelsAsRange: a,
                            vehicleNations: r,
                        }) => {
                            const n = S().mediaSize,
                                o = 1 === u.length,
                                i = a && !o,
                                l = u.length > 3 && !i,
                                c = rr(u, l, !1),
                                m = t.slice(0, 4),
                                d = { from: ru(u[0]), to: ru(u[u.length - 1]) },
                                _ = ((e) => {
                                    const t = R.images.gui.maps.icons.vehicleTypes;
                                    return e >= B.Medium ? t.$dyn('c_24x24') : t;
                                })(n),
                                E = i ? `${d.from}${gr.levelRangeSeparator()}${d.to}` : rr(u, l, !0);
                            return s().createElement(
                                ut,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.TaskConditionTooltipView('resId'),
                                    args: { vehicleLevels: E, vehicleTypes: e, battleTypes: t, vehicleNations: r },
                                    ignoreShowDelay: !0,
                                },
                                s().createElement(
                                    'div',
                                    { className: 'VehicleDescirption_base_c2' },
                                    s().createElement(
                                        'div',
                                        { className: 'VehicleDescirption_conditions_e4' },
                                        m.map((e, t) =>
                                            s().createElement('div', {
                                                className: b()(
                                                    'VehicleDescirption_battleTypeIcon_d6',
                                                    t === m.length - 1 && 'VehicleDescirption_battleTypeIcon__last_90',
                                                ),
                                                key: e,
                                                style: {
                                                    backgroundImage: `url(${pr.quests.prebattleConditions.$num(e)})`,
                                                },
                                            }),
                                        ),
                                        t.length > 4 &&
                                            s().createElement(He, {
                                                className: 'VehicleDescirption_ellipsis_ae',
                                                text: gr.battleType.ellipsis(),
                                            }),
                                        r &&
                                            r.length > 0 &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: Er }),
                                                r.map((e, t) =>
                                                    s().createElement('div', {
                                                        className: b()(
                                                            'VehicleDescirption_nation_7e',
                                                            t === r.length - 1 && 'VehicleDescirption_nation__last_7d',
                                                        ),
                                                        key: e,
                                                        style: {
                                                            backgroundImage: `url(${pr.filters.nations.$dyn(e)})`,
                                                        },
                                                    }),
                                                ),
                                            ),
                                        s().createElement('div', { className: Er }),
                                        i
                                            ? s().createElement(He, {
                                                  text: gr.vehicleType.levelsRange(),
                                                  className: b()(dr, _r),
                                                  format: {
                                                      binding: {
                                                          from: d.from,
                                                          to: s().createElement(He, { text: d.to }),
                                                          separator: s().createElement('div', {
                                                              className: 'VehicleDescirption_levelSeparator_ef',
                                                          }),
                                                      },
                                                      classMix: dr,
                                                  },
                                              })
                                            : s().createElement(He, { text: c, className: _r }),
                                        e[0] &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', {
                                                    className: b()(
                                                        Er,
                                                        'VehicleDescirption_conditionSeparator__onlyLeft_40',
                                                    ),
                                                }),
                                                s().createElement(
                                                    'div',
                                                    { className: 'VehicleDescirption_vehicleTypes_e6' },
                                                    e.map((e) =>
                                                        s().createElement('div', {
                                                            key: e,
                                                            className: 'VehicleDescirption_vehicleTypeIcon_37',
                                                            style: { backgroundImage: `url(${_.$dyn(se(e))})` },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Fr = {
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
                    Dr = R.strings.armory_yard.mainView.quest,
                    vr = (0, n.memo)(({ state: e, current: t, total: u, earned: a, iconKey: r }) => {
                        const n = {
                            backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + r + '_90x90'}')`,
                        };
                        return s().createElement(
                            'div',
                            { className: b()(Fr.base, Fr[`base__${e}`]) },
                            s().createElement(
                                'div',
                                { className: Fr.condition },
                                s().createElement('div', { className: Fr.conditionIcon, style: n }),
                                s().createElement(He, {
                                    text: Dr.progress(),
                                    className: Fr.conditionText,
                                    format: {
                                        binding: {
                                            current: Ge.Z5.getRealFormat(t, Ge.Gr.WO_ZERO_DIGITS),
                                            total: s().createElement(He, {
                                                className: Fr.progressTotal,
                                                text: Ge.Z5.getRealFormat(u, Ge.Gr.WO_ZERO_DIGITS),
                                            }),
                                        },
                                    },
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Fr.progressBar },
                                s().createElement(Va, {
                                    size: Aa.Small,
                                    maxValue: u,
                                    value: t,
                                    disabled: e === da.Locked,
                                    theme: ar,
                                    deltaFrom: t - a,
                                }),
                                s().createElement('div', { className: Fr.progressBg }),
                            ),
                        );
                    }),
                    br = 'QuestSeparator_separatorLine_8f',
                    Cr = 'QuestSeparator_separatorLine__hideRewards_bc',
                    hr = (0, n.memo)(({ conditionType: e, isShowReward: t = !0 }) => {
                        const u = e === Ea.OR,
                            a = b()(
                                br,
                                u
                                    ? 'QuestSeparator_separatorLine__bottomOr_8a'
                                    : 'QuestSeparator_separatorLine__bottom_20',
                                !t && Cr,
                            );
                        return s().createElement(
                            'div',
                            { className: b()('QuestSeparator_base_64', u && 'QuestSeparator_base__or_45') },
                            s().createElement('div', { className: b()(br, !t && Cr) }),
                            s().createElement('div', { className: b()('QuestSeparator_separatorText_00') }),
                            s().createElement('div', { className: a }),
                        );
                    }),
                    Br = {
                        base: 'QuestCondition_base_25',
                        quest: 'QuestCondition_quest_16',
                        quest__multi: 'QuestCondition_quest__multi_4f',
                        base__hideRewards: 'QuestCondition_base__hideRewards_a6',
                        description: 'QuestCondition_description_1d',
                        progressContainer: 'QuestCondition_progressContainer_63',
                        questProgress: 'QuestCondition_questProgress_1a',
                    },
                    fr = (0, n.memo)(
                        ({
                            state: e,
                            condition: t,
                            isOneCondition: u,
                            conditionType: a,
                            isFirst: r,
                            isMultiTypesConditions: n,
                            isShowReward: o = !0,
                            levels: i,
                            showLevelsAsRange: l,
                            vehicleTypes: c,
                            battleTypes: m,
                            description: d,
                            vehicleNations: _,
                        }) => {
                            const E = t.current,
                                g = t.total,
                                p = t.earned,
                                A = r || u || n,
                                F = d || t.descrData;
                            return s().createElement(
                                'div',
                                { className: b()(Br.base, A && Br.base__first, !o && Br.base__hideRewards) },
                                s().createElement(
                                    'div',
                                    { className: b()(Br.quest, !u && Br.quest__multi) },
                                    s().createElement(He, { className: Br.description, text: F }),
                                    s().createElement(
                                        'div',
                                        { className: Br.progressContainer },
                                        s().createElement(
                                            'div',
                                            { className: Br.questProgress },
                                            s().createElement(vr, {
                                                state: e,
                                                current: E,
                                                total: g,
                                                iconKey: t.iconKey,
                                                earned: p,
                                            }),
                                        ),
                                        s().createElement(Ar, {
                                            levels: i,
                                            showLevelsAsRange: l,
                                            vehicleTypes: c,
                                            battleTypes: m,
                                            vehicleNations: _,
                                        }),
                                    ),
                                ),
                                r && !u && s().createElement(hr, { conditionType: a, isShowReward: o }),
                            );
                        },
                    ),
                    wr = R.strings.armory_yard.tooltip.mainView.postProgressionToken,
                    Sr = (0, n.memo)(({ tokensCount: e = 0, isMainView: t = !0, isPostProgression: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: b()('QuestToken_base_45', t && 'QuestToken_base__main_7a') },
                            t && s().createElement('div', { className: 'QuestToken_glow_73' }),
                            s().createElement(
                                Pt,
                                { header: wr.header(), body: wr.body(), ignoreShowDelay: !0, isEnabled: u },
                                s().createElement(
                                    'div',
                                    { className: 'QuestToken_token_5a' },
                                    s().createElement(He, {
                                        text: u
                                            ? R.strings.armory_yard.mainView.quest.postProgressionToken.label()
                                            : R.strings.armory_yard.mainView.quest.progressionToken.label(),
                                        className: 'QuestToken_label_10',
                                    }),
                                    !u &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: 'QuestToken_tokensCount_c1' }, e),
                                            s().createElement(
                                                ut,
                                                {
                                                    contentId:
                                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                                            'resId',
                                                        ),
                                                    args: { currency: Nu.ProgressionToken },
                                                    ignoreShowDelay: !0,
                                                },
                                                s().createElement('div', { className: 'QuestToken_icon_c7' }),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                    );
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
                const Rr = (0, n.memo)(({ data: e, size: t = nt.Small }) =>
                        s().createElement(
                            'div',
                            { className: 'RewardsList_base_87' },
                            e.map((e, u) =>
                                s().createElement(
                                    'div',
                                    { key: u, className: 'RewardsList_reward_64' },
                                    s().createElement(
                                        pu,
                                        yr({ size: t, classNames: { info: 'RewardsList_info_69' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Pr = {
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
                        questCard__disabled: 'Quest_questCard__disabled_57',
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
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const xr = R.strings.armory_yard.mainView.quests,
                    Nr = R.images.armory_yard.gui.maps.icons.quests.quest,
                    Mr = (0, n.memo)(
                        ({
                            tokensCount: e,
                            chapterState: t,
                            quests: u,
                            status: a,
                            progressionState: r,
                            isShowReward: o = !0,
                            isSelected: i = !1,
                            isRerollEnabled: l = !1,
                            hasRerollTrigger: c = !1,
                            isPostProgression: m = !1,
                            animationState: d,
                            onReroll: _,
                        }) => {
                            const E = (0, n.useState)(null),
                                g = E[0],
                                p = E[1],
                                A = (0, n.useState)(a),
                                F = A[0],
                                D = A[1],
                                v = (0, n.useState)(!1),
                                C = v[0],
                                h = v[1],
                                f = S().mediaSize,
                                w = ur(f),
                                y = f >= B.Medium ? nt.Big : nt.Small,
                                P = f < B.Medium ? or.Small : or.Large,
                                T = Nr.$dyn(w),
                                x = m && a === da.Locked,
                                N = Boolean(
                                    a !== da.Locked &&
                                    a !== da.Done &&
                                    t !== Ye.Disabled &&
                                    o &&
                                    (e || (m && r !== ga.Completed)),
                                ),
                                M = ((e) => {
                                    if (e && e.length)
                                        return e.length > 1
                                            ? Ea.OR
                                            : e[0].bonusCondition.items.length > 1
                                              ? Ea.AND
                                              : void 0;
                                })(u),
                                L = a === da.Active && _ && l,
                                k = (0, n.useMemo)(
                                    () =>
                                        u[0].bonuses
                                            .filter((e) => e.label.length > 0 || e.value.length > 0)
                                            .map((e) =>
                                                ((e) => ({
                                                    name: e.name,
                                                    image: Ct(e, nt.Big),
                                                    value: e.value,
                                                    valueType: Dt(e.name),
                                                    bonusType: Dt(e.name),
                                                    special: e.overlayType,
                                                    tooltipArgs: ht(
                                                        { tooltipId: e.tooltipId, tooltipType: je },
                                                        Number.parseInt(e.tooltipContentId),
                                                    ),
                                                }))(e),
                                            ),
                                    [u],
                                );
                            return (
                                (0, n.useEffect)(() => {
                                    if (a !== F)
                                        return (
                                            p(F),
                                            D(a),
                                            fa(() => {
                                                p(null);
                                            }, Ja.ACTIVE_PHASE_END_STEPS[Za.DisableAllQuests])
                                        );
                                }, [F, a]),
                                s().createElement(
                                    'div',
                                    { className: Pr.base },
                                    g &&
                                        s().createElement('div', {
                                            className: b()(Pr.borderLayer, Pr.fadeOut),
                                            style: { borderImageSource: `url(${T.$dyn('bg_' + g)})` },
                                        }),
                                    s().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                Pr.questCard,
                                                Pr[`questCard__${a}`],
                                                !o && Pr.questCard__hideRewards,
                                                i && Pr.questCard__selected,
                                                Pr.borderLayer,
                                                Pr.fadeIn,
                                                Pr[`questCard__${d}`],
                                            ),
                                            style: { borderImageSource: `url(${T.$dyn('bg_' + a)})` },
                                        },
                                        x &&
                                            s().createElement(
                                                Pt,
                                                {
                                                    header: xr.disabledQuest.tooltip.header(),
                                                    body: xr.disabledQuest.tooltip.body(),
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Pr.postprogressionDisabledQuest },
                                                    s().createElement(He, { text: xr.disabledQuest.title() }),
                                                ),
                                            ),
                                        s().createElement('div', { className: Pr.background }),
                                        s().createElement('div', { className: Pr.borderSelected }),
                                        s().createElement(
                                            'div',
                                            { className: Pr.state },
                                            a === da.Done &&
                                                o &&
                                                s().createElement(mr, { rewardsCount: u[0].bonuses.length }),
                                            N &&
                                                s().createElement(Sr, {
                                                    tokensCount: null != e ? e : 0,
                                                    isPostProgression: m,
                                                }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Pr.content },
                                            s().createElement(
                                                'div',
                                                { className: b()(Pr.quests, M === Ea.OR && Pr.quests__orCondition) },
                                                u.map((e, t) => {
                                                    const u = ((e, t) => {
                                                        const u = e.bonusCondition.items.length
                                                                ? e.bonusCondition.items[0]
                                                                : null,
                                                            a = e.postBattleCondition.items.length
                                                                ? e.postBattleCondition.items[0]
                                                                : null;
                                                        return (t !== Ea.AND && t) || !u
                                                            ? [u, a]
                                                            : [...e.bonusCondition.items];
                                                    })(e, M).filter((e) => e);
                                                    return u.map((u, r) =>
                                                        s().createElement(
                                                            fr,
                                                            Tr(
                                                                {
                                                                    key: u.descrData,
                                                                    state: a,
                                                                    condition: u,
                                                                    isOneCondition: Boolean(!M),
                                                                    conditionType: M,
                                                                    isFirst: 0 === r && 0 === t,
                                                                    isMultiTypesConditions: Boolean(M),
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
                                            k &&
                                            s().createElement(
                                                'div',
                                                { className: Pr.rewards },
                                                s().createElement('div', { className: Pr.separator }),
                                                L &&
                                                    _ &&
                                                    s().createElement(
                                                        'div',
                                                        { className: Pr.rerollButtonContainer },
                                                        !c &&
                                                            s().createElement(He, {
                                                                className: b()(
                                                                    Pr.rerollButtonText,
                                                                    C && Pr.rerollButtonText__active,
                                                                ),
                                                                text: xr.rerollButtonText(),
                                                            }),
                                                        s().createElement(
                                                            ut,
                                                            {
                                                                contentId:
                                                                    R.views.armory_yard.lobby.feature.tooltips.RerollButtonTooltip(
                                                                        'resId',
                                                                    ),
                                                            },
                                                            s().createElement(
                                                                'div',
                                                                {
                                                                    onMouseEnter: () => h(!0),
                                                                    onMouseLeave: () => h(!1),
                                                                    className: Pr.rerollButton,
                                                                },
                                                                s().createElement(cr, {
                                                                    onReroll: _,
                                                                    size: P,
                                                                    hasTrigger: c,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                s().createElement(Rr, { size: y, data: k }),
                                            ),
                                        i &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: Pr.glow }),
                                                s().createElement('div', { className: Pr.checkIcon }),
                                            ),
                                    ),
                                )
                            );
                        },
                    ),
                    Lr = { type: 'idle' },
                    kr = Uu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = Math.round(t.value.scrollPosition);
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                    }),
                    Ir = Uu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                    }),
                    Or = {
                        base: 'ChapterProgress_base_00',
                        label: 'ChapterProgress_label_f8',
                        base__disabled: 'ChapterProgress_base__disabled_24',
                        progress: 'ChapterProgress_progress_2a',
                        progress__total: 'ChapterProgress_progress__total_d2',
                        progressBar: 'ChapterProgress_progressBar_7f',
                    },
                    Hr = R.strings.armory_yard.mainView.chapter,
                    $r = ({
                        state: e,
                        completedQuestsNew: t,
                        completedQuestsAll: u,
                        totalQuests: a,
                        className: r,
                        onEndAnimation: o,
                    }) => {
                        const i = (0, n.useCallback)(() => {
                            o && o();
                        }, [o]);
                        return s().createElement(
                            'div',
                            { className: b()(Or.base, Or[`base__${e}`], r) },
                            s().createElement(He, { text: Hr.quests.label(), className: Or.label }),
                            s().createElement(He, {
                                text: Hr.quests.progress(),
                                className: Or.progress,
                                format: {
                                    binding: {
                                        completed: String(u),
                                        total: s().createElement(He, {
                                            className: Or.progress__total,
                                            text: String(a),
                                        }),
                                    },
                                },
                            }),
                            s().createElement(
                                'div',
                                { className: Or.progressBar },
                                s().createElement(Va, {
                                    size: Aa.Medium,
                                    maxValue: a,
                                    value: u,
                                    deltaFrom: t < u ? t : u,
                                    disabled: e === Ye.Disabled,
                                    onEndAnimation: i,
                                }),
                            ),
                        );
                    },
                    Ur = {
                        base: 'ChapterToken_base_d4',
                        icon: 'ChapterToken_icon_9a',
                        base__disabled: 'ChapterToken_base__disabled_70',
                        progress: 'ChapterToken_progress_54',
                        progress__total: 'ChapterToken_progress__total_05',
                    },
                    Gr = R.strings.armory_yard.mainView.chapter,
                    Wr = ({ state: e, receivedTokens: t, totalTokens: u, className: a }) =>
                        s().createElement(
                            'div',
                            { className: b()(Ur.base, Ur[`base__${e}`], a) },
                            s().createElement(
                                ut,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                            'resId',
                                        ),
                                    isEnabled: e !== Ye.Disabled,
                                    args: { currency: Nu.ProgressionToken },
                                    ignoreShowDelay: !0,
                                },
                                s().createElement('div', { className: Ur.icon }),
                            ),
                            s().createElement(He, {
                                text: Gr.tokens.progress(),
                                className: Ur.progress,
                                format: {
                                    binding: {
                                        received: String(t),
                                        total: s().createElement(He, {
                                            className: Ur.progress__total,
                                            text: String(u),
                                        }),
                                    },
                                },
                            }),
                        ),
                    Qr = {
                        base: 'Chapter_base_4b',
                        base__extended: 'Chapter_base__extended_4b',
                        base__selected: 'Chapter_base__selected_bd',
                        tooltipContainer: 'Chapter_tooltipContainer_91',
                        art: 'Chapter_art_cd',
                        base__disabled: 'Chapter_base__disabled_80',
                        metalic: 'Chapter_metalic_41',
                        token: 'Chapter_token_38',
                        content: 'Chapter_content_eb',
                        titleContainer: 'Chapter_titleContainer_6a',
                        title: 'Chapter_title_d4',
                        titleName: 'Chapter_titleName_2a',
                        titleName__overflow: 'Chapter_titleName__overflow_35',
                        progress: 'Chapter_progress_16',
                        stroke: 'Chapter_stroke_16',
                        selected: 'Chapter_selected_55',
                        hover: 'Chapter_hover_93',
                        base__active: 'Chapter_base__active_80',
                        base__completed: 'Chapter_base__completed_d0',
                    },
                    zr = R.strings.armory_yard.mainView.chapter,
                    qr = R.images.armory_yard.gui.maps.icons.quests.chapter,
                    Vr = ({
                        index: e,
                        state: t,
                        completedQuestsNew: u,
                        completedQuestsAll: a,
                        tokenState: r,
                        totalQuests: o,
                        receivedTokens: i,
                        totalTokens: l,
                        isPostProgression: c,
                        type: m = 'standard',
                        isSelected: d = !1,
                        onEndProgressAnimation: _,
                    }) => {
                        const E = S().mediaSize,
                            g = ur(E),
                            p = (0, n.useRef)(null),
                            A = (0, n.useState)(!1),
                            F = A[0],
                            D = A[1],
                            v = (0, n.useState)(!1),
                            C = v[0],
                            h = v[1],
                            B = qr.$dyn(m).$dyn(g),
                            f = 'c_' + e + (t === Ye.Disabled ? '_disabled' : ''),
                            w = qr.standard.$dyn(g),
                            y = r !== Ke.Hidden,
                            R = y ? { backgroundImage: `url(${w.$dyn('glow_' + t)})` } : void 0,
                            P = (0, n.useCallback)(() => {
                                _ && _();
                            }, [_]),
                            T = (0, n.useMemo)(() => ne(zr.title(), { index: su(e), text: zr.index.$num(e) }), [e]),
                            x = (0, n.useCallback)(() => {
                                (h(!0), D(!1));
                            }, []);
                        var N, M;
                        return (
                            (0, n.useEffect)(() => {
                                (h(!1),
                                    q(() => {
                                        const e = p.current;
                                        e && e.offsetWidth < e.scrollWidth && D(!0);
                                    }));
                            }, [C]),
                            (N = x),
                            (M = []),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => window.removeEventListener('resize', N)
                                ),
                                M,
                            ),
                            s().createElement(
                                'div',
                                {
                                    className: b()(Qr.base, Qr[`base__${m}`], Qr[`base__${t}`], d && Qr.base__selected),
                                    style: { backgroundImage: `url(${w.$dyn('bg_' + t)})` },
                                },
                                s().createElement('div', {
                                    className: Qr.art,
                                    style: { backgroundImage: `url(${B.$dyn(f)})` },
                                }),
                                s().createElement('div', {
                                    className: Qr.metalic,
                                    style: { backgroundImage: `url(${w.$dyn('metalic')})` },
                                }),
                                y &&
                                    s().createElement(Wr, {
                                        state: t,
                                        receivedTokens: i,
                                        totalTokens: l,
                                        className: Qr.token,
                                    }),
                                s().createElement(
                                    'div',
                                    { className: Qr.content, style: R },
                                    s().createElement(
                                        Pt,
                                        { header: T, isEnabled: F, ignoreShowDelay: !0 },
                                        s().createElement(
                                            'div',
                                            { ref: p, className: Qr.titleContainer },
                                            s().createElement(He, {
                                                text: c ? zr.additional.title() : zr.title(),
                                                format: {
                                                    binding: {
                                                        index: su(e),
                                                        text: s().createElement(He, {
                                                            className: b()(Qr.titleName, F && Qr.titleName__overflow),
                                                            text: zr.index.$num(e),
                                                        }),
                                                    },
                                                    classMix: Qr.title,
                                                },
                                            }),
                                        ),
                                    ),
                                    s().createElement($r, {
                                        state: t,
                                        completedQuestsNew: u,
                                        completedQuestsAll: a,
                                        totalQuests: o,
                                        className: Qr.progress,
                                        onEndAnimation: P,
                                    }),
                                ),
                                s().createElement('div', {
                                    className: Qr.stroke,
                                    style: { borderImageSource: `url(${w.$dyn('stroke_' + t)})` },
                                }),
                                s().createElement('div', {
                                    className: Qr.selected,
                                    style: { backgroundImage: `url(${w.$dyn('selected_' + t)})` },
                                }),
                                s().createElement('div', { className: Qr.hover }),
                            )
                        );
                    };
                let jr, Xr;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(jr || (jr = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(Xr || (Xr = {})));
                const Yr = () => {};
                let Kr;
                (Ge.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Kr || (Kr = {})),
                    Ge.Sw.instance);
                const Zr = (e = 0, t, u = 0, a = Yr) => {
                        const r = (0, n.useState)(e),
                            s = r[0],
                            o = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const r = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - r) / We);
                                                null !== u && t <= u ? (o(u), a && a(), clearInterval(n)) : o(t);
                                            },
                                            (t || (e > 120 ? 60 : 1)) * We,
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                                o(0);
                            }, [e, t, u, a]),
                            s
                        );
                    },
                    Jr = () => {
                        const e = (0, n.useState)(i.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, n.useEffect)(() => {
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
                    },
                    en = 'Countdown_description_8d',
                    tn = (e) => e.toString().padStart(2, '0'),
                    un = R.images.gui.maps.icons.components.countdown,
                    an = (e, t) => {
                        const u = 2 === t ? un.big : un;
                        switch (e) {
                            case jr.Timer:
                                return u.clock();
                            case jr.Countdown:
                                return u.hourglass();
                            case jr.Cooldown:
                                return u.lock();
                        }
                    },
                    rn = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = jr.Timer,
                            style: u = Xr.Description,
                            onTimeReached: a,
                            className: r = '',
                            classNames: n = {},
                            labelFormat: o = '',
                        }) => {
                            const i = u !== Xr.Description ? 1 : void 0,
                                l = Zr(e, i),
                                c = Jr();
                            a && a[l] && a[l]();
                            const m = ((e, t) => {
                                switch (t) {
                                    case Xr.Description:
                                        return ((e, t = !0) =>
                                            e.days > 7 && t
                                                ? re(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? re(R.strings.common.duration.days(), { days: e.days })
                                                      : `${re(R.strings.common.duration.days(), { days: e.days })} ${re(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? re(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${re(R.strings.common.duration.hours(), { hours: e.hours })} ${re(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : re(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Xr.Short:
                                        return `${tn(e.minutes)}:${tn(e.seconds)}`;
                                    case Xr.Long:
                                        return `${tn(e.hours)}:${tn(e.minutes)}:${tn(e.seconds)}`;
                                    case Xr.Extended:
                                        return `${re(R.strings.common.duration.days(), { days: e.days })} | ${tn(e.hours)}:${tn(e.minutes)}:${tn(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / 86400);
                                    t -= 86400 * u;
                                    const a = Math.trunc(t / 3600);
                                    t -= 3600 * a;
                                    const r = Math.trunc(t / 60);
                                    return ((t -= 60 * r), { days: u, hours: a, minutes: r, seconds: t });
                                })(l),
                                u,
                            );
                            return s().createElement(
                                'div',
                                { className: b()('Countdown_base_fe', r) },
                                t !== jr.None &&
                                    s().createElement('div', {
                                        className: b()('Countdown_icon_8b', n.icon),
                                        style: { backgroundImage: `url('${an(t, c)}')` },
                                    }),
                                o
                                    ? s().createElement(
                                          'div',
                                          { className: b()(en, n.text) },
                                          s().createElement(Se, { text: o, binding: { timerText: m } }),
                                      )
                                    : s().createElement('div', { className: b()(en, n.text) }, m),
                            );
                        },
                    ),
                    nn = R.strings.armory_yard.mainView.quests.rerollInfo,
                    sn = (0, n.memo)(({ hasBottomLip: e, hasFreeReroll: t, rerollCountDown: u, freeRerollCount: a }) =>
                        s().createElement(
                            'div',
                            { className: 'RerollInfoPanel_base_e9' },
                            s().createElement('div', {
                                className: b()('RerollInfoPanel_lip_32', !e && 'RerollInfoPanel_lip__hidden_0d'),
                            }),
                            s().createElement('div', {
                                className: b()(
                                    'RerollInfoPanel_lipDivider_3b',
                                    e && 'RerollInfoPanel_lipDivider__hidden_78',
                                ),
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()(
                                        'RerollInfoPanel_rerollContainer_32',
                                        !t && 'RerollInfoPanel_disabledReroll_24',
                                    ),
                                },
                                s().createElement('div', { className: 'RerollInfoPanel_rerollIcon_97' }),
                                s().createElement(He, {
                                    text: nn.rerollCount(),
                                    format: { binding: { freeRerollCount: a } },
                                }),
                            ),
                            !t &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: 'RerollInfoPanel_rerollSeparator_79' }),
                                    s().createElement(He, {
                                        text: nn.timer(),
                                        className: 'RerollInfoPanel_rerollCounDownText_f3',
                                    }),
                                    s().createElement(rn, {
                                        duration: u,
                                        className: 'RerollInfoPanel_countdownText_55',
                                    }),
                                ),
                        ),
                    );
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const ln = R.images.armory_yard.gui.maps.icons.quests,
                    cn = (0, de.observer)(() => {
                        const e = xu(),
                            t = e.model,
                            u = e.controls,
                            a = t.root.get(),
                            r = a.freeRerollCount,
                            o = a.rerollCountDown,
                            i = a.isRerollEnabled,
                            l = a.isRerollButtonTriggerEnabled,
                            c = a.currentLevel,
                            m = a.isPostProgression,
                            d = a.receivedTokensCount,
                            _ = a.totalTokensCount,
                            E = a.maxNumberOfSteps,
                            g = Boolean(r),
                            p = t.computes.getChapters(),
                            A = t.computes.getChapter,
                            F = ((e, t, u) => (e >= t ? ga.Completed : u ? ga.PostProgression : ga.Progression))(
                                c,
                                E,
                                m,
                            ),
                            D = t.computes.getInitIndex(),
                            v = (0, n.useState)(D),
                            C = v[0],
                            h = v[1],
                            B = (0, n.useState)(!1),
                            f = B[0],
                            w = B[1],
                            y = (0, n.useState)(!1),
                            P = y[0],
                            T = y[1],
                            x = kr();
                        !(function (e, t) {
                            const u = e.contentRef,
                                a = e.wrapperRef,
                                r = e.scrollPosition,
                                s = e.clampPosition,
                                o = e.animationScroll,
                                i = e.events,
                                l = (0, n.useState)(Lr),
                                c = l[0],
                                m = l[1];
                            ((0, n.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [u, c.type]),
                                (0, n.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = (e) => {
                                            const n = u.current,
                                                i = a.current;
                                            if (!n || !i) return;
                                            const l = c.positionFrom - e.screenY,
                                                m = c.previousScrollPosition + l;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(n, m),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        },
                                        n = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', n),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', n));
                                        }
                                    );
                                }, [o.scrollPosition, s, u, c, r, a, t]),
                                (0, n.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        m(Lr);
                                    };
                                    return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [o.scrollPosition, c.type, i]),
                                (0, n.useEffect)(() => {
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
                        })(x);
                        const N = S().mediaSize,
                            M = ln.chapter.standard.$dyn(ur(N)),
                            L = i && A(C).state === Ye.Active,
                            k = (0, n.useCallback)(
                                (e, t) => () => {
                                    (h(e), u.onChapterSelect(t), x.applyScroll(0, { immediate: !0 }), K.playClick());
                                },
                                [u, x],
                            ),
                            I = (0, n.useCallback)(() => {
                                K.playHighlight();
                            }, []);
                        ((0, n.useEffect)(() => {
                            var e;
                            const t = null == (e = A(D)) ? void 0 : e.id;
                            u.onChapterSelect(t);
                        }, []),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    const e = x.animationScroll.scrollPosition.goal,
                                        t = x.getBounds()[1];
                                    (w(e > 3), T(e < t - 3));
                                };
                                return (
                                    x.events.on('recalculateContent', e),
                                    x.events.on('change', e),
                                    () => {
                                        (x.events.off('recalculateContent', e), x.events.off('change', e));
                                    }
                                );
                            }, [x]));
                        const O = (0, n.useCallback)(() => {
                                const e = A(C);
                                e.completedQuestsNew = e.completedQuestsAll;
                            }, [C, A]),
                            H = t.computes.getFilteredAndSortedQuests(C),
                            $ = (0, n.useCallback)(
                                (e) => () => {
                                    u.onQuestReroll(e);
                                },
                                [u],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: b()(
                                    'QuestsScreen_base_1a',
                                    f && 'QuestsScreen_base__hasTopLip_d9',
                                    P && 'QuestsScreen_base__hasBottomLip_ef',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'QuestsScreen_tokensInfoContainer_ac' },
                                s().createElement(He, {
                                    text: String(R.strings.armory_yard.mainView.completedStages.$dyn(F)),
                                    format: {
                                        binding: {
                                            receivedTokens: s().createElement(He, {
                                                text: String(d),
                                                className: 'QuestsScreen_receivedTokensCount_93',
                                            }),
                                            totalTokens: _,
                                        },
                                    },
                                }),
                                F === ga.Progression &&
                                    s().createElement(
                                        ut,
                                        {
                                            contentId:
                                                R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                                    'resId',
                                                ),
                                            args: { currency: Nu.ProgressionToken },
                                            ignoreShowDelay: !0,
                                        },
                                        s().createElement('div', { className: 'QuestsScreen_tokenIcon_38' }),
                                    ),
                                s().createElement('div', { className: 'QuestsScreen_line_52' }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'QuestsScreen_tasksContainer_c8' },
                                s().createElement(
                                    'div',
                                    { className: 'QuestsScreen_chapters_17' },
                                    s().createElement('div', {
                                        className: 'QuestsScreen_chaptersBg_c3',
                                        style: { borderImageSource: `url(${M.$dyn('chapters_bg')})` },
                                    }),
                                    p.map((e, t) =>
                                        s().createElement(
                                            ut,
                                            {
                                                key: e.id,
                                                contentId:
                                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView(
                                                        'resId',
                                                    ),
                                                args: { state: Q.Chapter, id: e.id },
                                                isEnabled: e.state === Ye.Disabled,
                                                ignoreShowDelay: !0,
                                            },
                                            s().createElement(
                                                'div',
                                                {
                                                    className: 'QuestsScreen_chapter_c3',
                                                    onClick: k(t, e.id),
                                                    onMouseEnter: I,
                                                },
                                                s().createElement(
                                                    Vr,
                                                    on({}, e, { index: t + 1, isSelected: e.id === A(C).id }),
                                                ),
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
                                            Vr,
                                            on({}, A(C), { index: C + 1, type: 'extended', onEndProgressAnimation: O }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'QuestsScreen_quests_d9' },
                                        s().createElement(
                                            ma.Vertical.Area.Default,
                                            {
                                                api: x,
                                                barClassNames: {
                                                    base: 'QuestsScreen_bar_2a',
                                                    topButton: 'QuestsScreen_topButton_97',
                                                    bottomButton: 'QuestsScreen_bottomButton_e1',
                                                },
                                            },
                                            H.map((e, u) => {
                                                const a = e.quests[0],
                                                    r = A(C),
                                                    n =
                                                        r.receivedTokens < r.totalTokens
                                                            ? t.computes.getQuestTokensCount(a.bonuses)
                                                            : 0;
                                                return s().createElement(
                                                    'div',
                                                    { className: 'QuestsScreen_quest_3e', key: a.id },
                                                    s().createElement(Mr, {
                                                        tokensCount: n,
                                                        chapterState: r.state,
                                                        quests: e.quests,
                                                        status: e.status,
                                                        isRerollEnabled: i,
                                                        progressionState: F,
                                                        hasRerollTrigger: l && 1 === u,
                                                        isPostProgression: r.isPostProgression,
                                                        onReroll: $(a.id),
                                                    }),
                                                );
                                            }),
                                        ),
                                        s().createElement('div', { className: 'QuestsScreen_topLip_db' }),
                                        s().createElement('div', { className: 'QuestsScreen_bottomLip_e6' }),
                                    ),
                                    L &&
                                        s().createElement(
                                            ut,
                                            {
                                                contentId:
                                                    R.views.armory_yard.lobby.feature.tooltips.RerollInfoContainerTooltip(
                                                        'resId',
                                                    ),
                                            },
                                            s().createElement(
                                                'div',
                                                { className: 'QuestsScreen_rerollInfo_4d' },
                                                s().createElement(sn, {
                                                    hasBottomLip: P,
                                                    hasFreeReroll: g,
                                                    rerollCountDown: o,
                                                    freeRerollCount: r,
                                                }),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    }),
                    mn = { Progress: G.Progress, Quests: G.Quests, Shop: G.Shop },
                    dn = R.images.armory_yard.gui.maps.icons.tabs,
                    _n = R.strings.armory_yard.mainView,
                    En = {
                        [mn.Progress]: s().createElement('div', null),
                        [mn.Quests]: s().createElement(cn, null),
                        [mn.Shop]: s().createElement('div', null),
                    },
                    gn = {
                        [mn.Progress]: _n.progress.title(),
                        [mn.Quests]: _n.quests.title(),
                        [mn.Shop]: _n.shop.title(),
                    },
                    pn = [
                        { id: mn.Progress, icon: dn.progress64() },
                        { id: mn.Quests, icon: dn.quests64() },
                    ],
                    An = [{ id: 1, items: pn, groupClassNames: { group: 'tabs_group_ad' } }],
                    Fn = [Object.assign({}, An[0], { items: [pn[0], { id: mn.Shop, icon: dn.shop64() }] })],
                    Dn = [Object.assign({}, An[0], { items: [...pn, { id: mn.Shop, icon: dn.shop64() }] })],
                    vn = R.strings.armory_yard.tabs,
                    bn = s().memo(({ id: e, isActive: t }) =>
                        s().createElement(
                            'div',
                            { className: 'AdditionTabsContent_base_b4' },
                            s().createElement(He, {
                                className: b()('AdditionTabsContent_tab_c7', t && 'AdditionTabsContent_tab__active_6a'),
                                text: String(vn.label.$num(e)),
                            }),
                        ),
                    ),
                    Cn = ({ children: e, id: t }) =>
                        s().createElement(
                            ut,
                            {
                                contentId:
                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView('resId'),
                                args: { state: Q.Tab, id: t },
                                ignoreShowDelay: !0,
                            },
                            e,
                        ),
                    hn = {
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
                let Bn, fn;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Bn || (Bn = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(fn || (fn = {})));
                const wn = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, n.useRef)(null),
                        A = (0, n.useState)(u),
                        F = A[0],
                        D = A[1],
                        v = (0, n.useState)(!1),
                        C = v[0],
                        h = v[1],
                        B = (0, n.useState)(!1),
                        f = B[0],
                        w = B[1],
                        S = (0, n.useCallback)(() => {
                            r || (p.current && (p.current.focus(), D(!0)));
                        }, [r]),
                        y = (0, n.useCallback)(
                            (e) => {
                                F && null !== p.current && !p.current.contains(e.target) && D(!1);
                            },
                            [F],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                r || (g && g(e));
                            },
                            [r, g],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                r || (null !== i && Y(i), c && c(e), w(!0));
                            },
                            [r, i, c],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                r || (_ && _(e), h(!1));
                            },
                            [r, _],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                r || (null !== l && Y(l), d && d(e), u && S(), h(!0));
                            },
                            [r, l, d, S, u],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                r || (E && E(e), h(!1));
                            },
                            [r, E],
                        ),
                        k = b()(
                            hn.base,
                            hn[`base__${a}`],
                            {
                                [hn.base__disabled]: r,
                                [hn[`base__${t}`]]: t,
                                [hn.base__focus]: F,
                                [hn.base__highlightActive]: C,
                                [hn.base__firstHover]: f,
                            },
                            o,
                        ),
                        I = b()(hn.state, hn.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            D(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: k,
                                onMouseEnter: T,
                                onMouseMove: x,
                                onMouseUp: N,
                                onMouseDown: M,
                                onMouseLeave: L,
                                onClick: P,
                            },
                            a !== Bn.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: hn.back }),
                                    s().createElement('span', { className: hn.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: hn.stateDisabled }),
                                s().createElement('span', { className: hn.stateHighlightHover }),
                                s().createElement('span', { className: hn.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: hn.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                wn.defaultProps = { type: Bn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Sn = (0, n.memo)(wn),
                    yn = {
                        base: 'Banner_base_c1',
                        defaultBannerBg: 'Banner_defaultBannerBg_9a',
                        defaultBannerStroke: 'Banner_defaultBannerStroke_47',
                        defaultBannerArt: 'Banner_defaultBannerArt_c3',
                        defaultBannerArt__ayCoin: 'Banner_defaultBannerArt__ayCoin_a6',
                        hoverBannerGlow: 'Banner_hoverBannerGlow_2f',
                        hoverBannerBg: 'Banner_hoverBannerBg_55',
                        hoverBannerStroke: 'Banner_hoverBannerStroke_73',
                        hoverBannerArt: 'Banner_hoverBannerArt_db',
                        hoverBannerArt__ayCoin: 'Banner_hoverBannerArt__ayCoin_36',
                        content: 'Banner_content_58',
                        title: 'Banner_title_fc',
                        description: 'Banner_description_cf',
                        button: 'Banner_button_37',
                        buttonMixClass: 'Banner_buttonMixClass_4c',
                    },
                    Rn = R.strings.armory_yard.mainView.banner,
                    Pn = ({ isPostProgression: e }) => {
                        const t = xu().controls,
                            u = e ? Rn.freeCoins : Rn,
                            a = (0, n.useState)(!1),
                            r = a[0],
                            o = a[1],
                            i = (0, n.useCallback)(() => {
                                (K.playClick(), t.buyTokens());
                            }, [t]),
                            l = (0, V.useTransition)(r, Object.assign({ key: r }, Lt)),
                            c = b()(yn.defaultBannerArt, e && yn.defaultBannerArt__ayCoin),
                            m = b()(yn.hoverBannerArt, e && yn.hoverBannerArt__ayCoin);
                        return s().createElement(
                            Pt,
                            { body: u.tooltip.body(), header: u.tooltip.header() },
                            s().createElement(
                                'div',
                                {
                                    className: b()(yn.base, r && yn.base__hover),
                                    onMouseEnter: () => {
                                        (o(!0), Y(R.sounds.buttons_hover()));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: i,
                                },
                                s().createElement('div', { className: yn.defaultBannerBg }),
                                s().createElement('div', { className: yn.defaultBannerStroke }),
                                l(
                                    (e, t) =>
                                        t &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(V.animated.div, {
                                                className: yn.hoverBannerGlow,
                                                style: e,
                                            }),
                                            s().createElement(V.animated.div, {
                                                className: yn.hoverBannerBg,
                                                style: e,
                                            }),
                                            s().createElement(V.animated.div, {
                                                className: yn.hoverBannerStroke,
                                                style: e,
                                            }),
                                        ),
                                ),
                                s().createElement('div', { className: c }),
                                l((e, t) => t && s().createElement(V.animated.div, { className: m, style: e })),
                                s().createElement(
                                    'div',
                                    { className: yn.content },
                                    s().createElement('div', { className: yn.title }, u.title()),
                                    s().createElement('div', { className: yn.description }, u.description()),
                                    s().createElement(
                                        'div',
                                        { className: yn.button },
                                        s().createElement(
                                            Sn,
                                            {
                                                size: fn.small,
                                                type: Bn.main,
                                                mixClass: yn.buttonMixClass,
                                                soundClick: null,
                                            },
                                            u.button(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Tn = {
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
                    xn = [
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
                function Nn() {
                    return (
                        (Nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Nn.apply(this, arguments)
                    );
                }
                class Mn extends s().PureComponent {
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
                            r = e.side,
                            n = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(e, xn)),
                            _ = b()(Tn.base, Tn[`base__${n}`], Tn[`base__${r}`], null == o ? void 0 : o.base),
                            E = b()(Tn.icon, Tn[`icon__${n}`], Tn[`icon__${r}`], null == o ? void 0 : o.icon),
                            g = b()(Tn.glow, null == o ? void 0 : o.glow),
                            p = b()(Tn.caption, Tn[`caption__${n}`], null == o ? void 0 : o.caption),
                            A = b()(Tn.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Nn(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== n && s().createElement('div', { className: Tn.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: p }, t),
                            a && s().createElement('div', { className: A }, a),
                        );
                    }
                }
                Mn.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Ln = u(5521);
                const kn = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function In(e = Ln.n.NONE, t = kn, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Ln.n.NONE)
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
                const On = R.strings.armory_yard.mainView,
                    Hn = () => {
                        const e = xu().controls,
                            t = (0, n.useCallback)(() => {
                                e.close(W.Mouse);
                            }, [e]);
                        return (
                            (function ({
                                key: e = Ln.n.ESCAPE,
                                callback: t = () => i.O.view.sendEvent.close(),
                                preventPropagation: u = !0,
                            } = {}) {
                                In(e, t, u);
                            })({ callback: () => e.close(W.Keyboard) }),
                            s().createElement(Mn, { side: 'right', type: 'close', caption: On.exit(), onClick: t })
                        );
                    },
                    $n = { base: 'InfoLink_base_63' },
                    Un = R.strings.armory_yard.mainView.infoLink,
                    Gn = (0, de.observer)(() => {
                        const e = xu().controls,
                            t = (0, n.useCallback)(() => {
                                e.aboutEvent();
                            }, [e]);
                        return s().createElement(
                            'div',
                            { className: $n.base },
                            s().createElement(
                                'div',
                                { className: $n.info },
                                s().createElement(Mn, { caption: Un.info(), type: 'info', onClick: t }),
                            ),
                        );
                    }),
                    Wn = {
                        from: { opacity: 0 },
                        enter: { opacity: 0.3 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 450,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    Qn = ({ onAction: e, isStarted: t, isDisabled: u, buttonLabel: a }) => {
                        const r = (0, n.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = (0, n.useCallback)(() => {
                                (u || K.playHighlight(), i(!0));
                            }, [u]),
                            c = (0, n.useCallback)(() => {
                                i(!1);
                            }, []),
                            m = (0, n.useCallback)(() => {
                                u || (K.playClick(), e());
                            }, [u, e]),
                            d = (0, V.useTransition)(o, Object.assign({ key: o }, Wn));
                        let _;
                        return (
                            (_ = u
                                ? 'BuildingButton_base__disabled_cd'
                                : t
                                  ? 'BuildingButton_base__stop_3b'
                                  : 'BuildingButton_base__start_5e'),
                            s().createElement(
                                V.animated.div,
                                {
                                    className: b()(
                                        'BuildingButton_base_e7',
                                        _,
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
                                d(
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
                    zn = R.strings.armory_yard.mainView.playerLink,
                    qn = (0, de.observer)(() => {
                        const e = xu(),
                            t = e.model,
                            u = e.controls,
                            a = t.root.get(),
                            r = a.animationStatus,
                            o = a.currentLevel,
                            i = a.replay,
                            l = r === $.Active,
                            c = (0, n.useCallback)(() => {
                                l ? u.skipAnimation() : u.playAnimation();
                            }, [u, l]),
                            m = 0 === o || !i,
                            d = l && !m ? zn.animate.stop() : zn.animate.start();
                        return s().createElement(
                            'div',
                            { className: 'PlayerLink_base_55' },
                            s().createElement(
                                Pt,
                                { body: zn.tooltip.body(), header: zn.tooltip.header() },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(Qn, { onAction: c, isStarted: l, isDisabled: m, buttonLabel: d }),
                                ),
                            ),
                        );
                    }),
                    Vn = { type: 'idle' },
                    jn = R.strings.armory_yard.mainView.takeRewards,
                    Xn = (0, de.observer)(() => {
                        const e = xu().controls,
                            t = (0, n.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, n.useCallback)(() => {
                                (K.playHighlight(), a(!0));
                            }, []),
                            o = (0, n.useCallback)(() => {
                                a(!1);
                            }, []),
                            i = (0, n.useCallback)(() => {
                                (K.playClick(), e.collectReward());
                            }, [e]),
                            l = (0, V.useTransition)(u, Object.assign({ key: u }, kt));
                        return s().createElement(
                            V.animated.div,
                            { className: 'TakeRewardsButton_base_35', onClick: i, onMouseEnter: r, onMouseLeave: o },
                            s().createElement(
                                Pt,
                                { header: jn.tooltip.header(), body: jn.tooltip.body() },
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
                                            jn.animate(),
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
                    Yn = (0, n.memo)(
                        ({
                            rewardStatus: e,
                            levelDuration: t,
                            animationLevel: u,
                            viewedLevel: a,
                            currentLevel: r,
                            animationStatus: o,
                            levels: l,
                            mainLevel: c,
                            finalLevel: m,
                            initialAnimationProgress: d,
                            isReplay: _ = !1,
                            playStageSound: E,
                            onShowVehiclePreview: g,
                            onShowStylePreview: p,
                        }) => {
                            const A = Ir();
                            !(function (e, t, u) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    s = e.scrollPosition,
                                    o = e.clampPosition,
                                    l = e.animationScroll,
                                    c = e.events,
                                    m = (0, n.useState)(Vn),
                                    d = m[0],
                                    _ = m[1];
                                ((0, n.useEffect)(() => {
                                    const e = a.current;
                                    e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                }, [a, d.type]),
                                    (0, n.useEffect)(() => {
                                        if ('dragging' !== d.type) return;
                                        const e = i.O.client.events.mouse.move(([e, u]) => {
                                                const n = a.current,
                                                    i = r.current;
                                                if (!n || !i) return;
                                                if ('inside' === u && e.clientX < 0) return;
                                                const c = 'inside' === u ? e.clientX : e.clientX - i.offsetLeft,
                                                    m = d.positionFrom - c,
                                                    _ = d.previousScrollPosition + m;
                                                s.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: o(n, _),
                                                            from: { scrollPosition: l.scrollPosition.get() },
                                                        },
                                                        t,
                                                    ),
                                                );
                                            }),
                                            u = i.O.client.events.mouse.up(function () {
                                                _({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), u());
                                        };
                                    }, [l.scrollPosition, o, a, d, s, r, t]),
                                    (0, n.useEffect)(() => {
                                        if ('scrollingToEnd' !== d.type) return;
                                        const e = () => {
                                            _(Vn);
                                        };
                                        return (l.scrollPosition.idle && e(), c.on('rest', e), () => c.off('rest', e));
                                    }, [l.scrollPosition, d.type, c]),
                                    (0, n.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            _({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: l.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [l.scrollPosition, a, u]));
                            })(A);
                            const F = S(),
                                D = Jr(),
                                v = 138 * D,
                                C = (0, n.useState)(!0),
                                h = C[0],
                                B = C[1],
                                f = (0, n.useState)(d),
                                w = f[0],
                                y = f[1];
                            ((0, n.useEffect)(() => {
                                if (o === $.Active)
                                    (y((e) =>
                                        e.map((e, t) =>
                                            t + 1 <= u ? e : { state: Du.Future, isRunning: !1, isEmpty: !0 },
                                        ),
                                    ),
                                        A.applyScroll(0));
                                else {
                                    y(
                                        l.map((e) =>
                                            e.level <= a
                                                ? { state: Du.Past, isRunning: !1, isEmpty: !1 }
                                                : e.level <= r
                                                  ? { state: Du.Present, isRunning: !1, isEmpty: !1 }
                                                  : { state: Du.Future, isRunning: !1, isEmpty: !0 },
                                        ),
                                    );
                                    const e = A.getWrapperSize() || 0;
                                    A.applyScroll(Math.round(r * v - e / 2));
                                }
                            }, [o, r, u, a, A, l, v]),
                                (0, n.useEffect)(() => {
                                    let e;
                                    return u > 0 && t > 0 && o === $.Active
                                        ? (y((e) => {
                                              if (!e[u - 1]) return [...e];
                                              const t = [...e];
                                              return (
                                                  (t[u - 1].isEmpty = !0),
                                                  (t[u - 1].isRunning = !0),
                                                  (t[u - 1].state = Du.Future),
                                                  t
                                              );
                                          }),
                                          (e = window.setTimeout(() => {
                                              y((e) => {
                                                  if (!e[u - 1]) return [...e];
                                                  const t = [...e];
                                                  return (
                                                      (t[u - 1].isRunning = !1),
                                                      (t[u - 1].isEmpty = !1),
                                                      (t[u - 1].state = u <= a ? Du.Past : Du.Present),
                                                      t
                                                  );
                                              });
                                          }, t * We)),
                                          () => {
                                              (Y(R.sounds.ay_ui_stage_complete()),
                                                  y((e) => {
                                                      if (!e[u - 1]) return [...e];
                                                      const t = [...e];
                                                      return (
                                                          (t[u - 1].state = u <= a ? Du.Past : Du.Present),
                                                          (t[u - 1].isRunning = !1),
                                                          (t[u - 1].isEmpty = !1),
                                                          t
                                                      );
                                                  }),
                                                  window.clearTimeout(e));
                                          })
                                        : () => window.clearTimeout(e);
                                }, [u, t, o, a]),
                                (0, n.useEffect)(
                                    () =>
                                        q(() => {
                                            if (o === $.Disabled) {
                                                const e = A.getWrapperSize() || 0;
                                                A.applyScroll(Math.round(r * v - e / 2));
                                            }
                                        }),
                                    [A, r, o, v],
                                ),
                                (0, n.useEffect)(() => {
                                    if (u > 0) {
                                        const e = A.getWrapperSize() || 0;
                                        A.applyScroll(Math.round(u * v - e / 2));
                                    }
                                }, [A, u, v]));
                            const P = o === $.Disabled || _;
                            return (
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        var e, t;
                                        const u =
                                            null !=
                                            (e =
                                                null == (t = A.animationScroll.scrollPosition.animation.values[0])
                                                    ? void 0
                                                    : t.getValue())
                                                ? e
                                                : 0;
                                        B(u / D <= 3935 - F.remScreenWidth);
                                    };
                                    return (
                                        A.events.on('recalculateContent', e),
                                        A.events.on('change', e),
                                        () => {
                                            (A.events.off('recalculateContent', e), A.events.off('change', e));
                                        }
                                    );
                                }, [A, F.remScreenWidth, D]),
                                s().createElement(
                                    'div',
                                    { className: 'Progress_base_b6' },
                                    s().createElement(
                                        ma.Horizontal.Area,
                                        {
                                            api: A,
                                            classNames: { content: 'Progress_horizontalContent_da' },
                                            className: 'Progress_scroll_17',
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'Progress_levels_91' },
                                            l.length > 0 &&
                                                l.map(({ rewardType: e, level: u, rewards: a }) => {
                                                    const r = u - 1;
                                                    if (!w[r]) return null;
                                                    const n = e === Ze.Progression;
                                                    return s().createElement(
                                                        'div',
                                                        {
                                                            className: b()(
                                                                'Progress_step_51',
                                                                n && 'Progress_step__mainReward_ac',
                                                            ),
                                                            key: u,
                                                        },
                                                        s().createElement(bu, {
                                                            step: u,
                                                            state: w[r].state,
                                                            reward: a[0],
                                                            position: er(u, l.length, null == c ? void 0 : c.level),
                                                            isEmpty: w[r].isEmpty,
                                                            isRunning: w[r].isRunning,
                                                            levelDuration: t,
                                                            isMainReward: n,
                                                            isMainRewardVisible: h,
                                                            onPreview: g,
                                                            playStageSound: E,
                                                        }),
                                                    );
                                                }),
                                        ),
                                    ),
                                    e === Nt &&
                                        s().createElement(
                                            'div',
                                            { className: 'Progress_button_31' },
                                            s().createElement(Xn, null),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: 'Progress_mainRewardsContainer_8f' },
                                        h &&
                                            c &&
                                            s().createElement(lu, {
                                                scale: D,
                                                isHighlighted: P && c.level <= r,
                                                onPreview: g,
                                                reward: c.rewards[0],
                                                key: `main-reward-${c.level}`,
                                                step: c.level,
                                            }),
                                        m &&
                                            s().createElement(
                                                'div',
                                                { className: b()(h && c && 'Progress_mainReward_83') },
                                                s().createElement(lu, {
                                                    scale: D,
                                                    isHighlighted: P && m.level <= r,
                                                    onPreview: p,
                                                    reward: m.rewards[0],
                                                    step: m.level,
                                                    isFinalReward: !0,
                                                }),
                                            ),
                                    ),
                                )
                            );
                        },
                    ),
                    Kn = ({ children: e, moveSpace: t, isDisabled: u = !1, onStartMoving: a, onEndMoving: r }) => {
                        const o = (0, n.useState)(!1),
                            i = o[0],
                            l = o[1],
                            c = (0, n.useState)({ x: 0, y: 0 }),
                            m = c[0],
                            d = c[1],
                            _ = (0, n.useRef)(null),
                            E = (0, n.useCallback)(() => {
                                (l(!1), null == r || r());
                            }, [r]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', E),
                                () => window.removeEventListener('mouseup', E)
                            ),
                            [E],
                        );
                        const g = (e) => {
                            if (!_.current) return;
                            const t = _.current.getBoundingClientRect(),
                                u = t.width,
                                a = t.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= u - 1 || e.clientY >= a - 1);
                        };
                        return s().createElement(
                            'div',
                            {
                                ref: _,
                                className: b()(
                                    'SceneWrapper_base_a2',
                                    i && 'SceneWrapper_base__down_76',
                                    u && 'SceneWrapper_base__moveSpaceDisabled_bd',
                                ),
                                onMouseDown: u
                                    ? void 0
                                    : (e) => {
                                          (e.preventDefault(),
                                              0 === e.button && g(e) && (l(!0), d({ x: e.clientX, y: e.clientY })));
                                      },
                                onMouseMove: u
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), i)) {
                                              if (!g(e)) return;
                                              const u = e.clientX !== m.x ? e.clientX - m.x : 0,
                                                  r = e.clientY !== m.y ? e.clientY - m.y : 0;
                                              ((0 === u && 0 === r) || null == a || a(),
                                                  d({ x: e.clientX, y: e.clientY }),
                                                  t({ dx: u, dy: r, dz: 0 }));
                                          }
                                      },
                                onMouseUp: u
                                    ? void 0
                                    : () => {
                                          (l(!1), null == r || r());
                                      },
                                onWheel: u
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), !g(e))) return;
                                          const u = e.deltaY < 0;
                                          t({ dx: 0, dy: 0, dz: u ? -600 : 600 });
                                      },
                            },
                            e,
                        );
                    },
                    Zn = (0, n.memo)(() =>
                        s().createElement(
                            'div',
                            { className: 'Vignette_base_22' },
                            s().createElement('div', { className: 'Vignette_layer1_3c' }),
                        ),
                    );
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
                const es = R.strings.armory_yard.mainView;
                viewEnv.clearInternalCacheAfterFinalize();
                const ts = ({ id: e, isActive: t }) =>
                        s().createElement(
                            'div',
                            { className: 'App_additionTabs_fd', key: e },
                            s().createElement(bn, { id: e, isActive: t }),
                        ),
                    us = (0, de.observer)(() => {
                        var e;
                        viewEnv.clearInternalCacheAfterFinalize();
                        const t = xu(),
                            u = t.model,
                            a = t.controls,
                            r = u.root.get(),
                            o = r.currentLevel,
                            i = r.animationLevel,
                            l = r.animationStatus,
                            c = r.fromTimestamp,
                            m = r.toTimestamp,
                            d = r.rewardStatus,
                            _ = r.levelDuration,
                            E = r.viewedLevel,
                            g = r.tabId,
                            p = r.state,
                            A = r.replay,
                            F = r.shopButtonVisible,
                            D = r.buyButtonState,
                            v = r.isPostProgression,
                            C = r.startStepOfPostProgression,
                            h = S().mediaSize,
                            f = u.computes.getLevels(),
                            w = u.computes.getMainLevel(),
                            y = u.computes.getFinalLevel(),
                            R = u.computes.getInitialAnimationProgress(),
                            P = g === mn.Quests,
                            T = l === $.Active,
                            x = (0, n.useCallback)(
                                (e) => {
                                    a.tabChange(e);
                                },
                                [a],
                            ),
                            N = (0, n.useCallback)(
                                (e) => {
                                    a.moveSpace(e);
                                },
                                [a],
                            ),
                            M = (0, n.useCallback)(
                                (e) => {
                                    a.playStageSound(e);
                                },
                                [a],
                            ),
                            L = (0, n.useState)(!1),
                            k = L[0],
                            I = L[1],
                            O = (0, n.useState)(!1),
                            U = O[0],
                            G = O[1],
                            W = { onMouseEnter: () => G(!0), onMouseLeave: () => G(!1) },
                            Q = (0, n.useCallback)(() => {
                                (a.startMoving(), I(!0));
                            }, [a]),
                            q = (0, n.useCallback)(() => {
                                I(!1);
                            }, []),
                            V = i > C,
                            j = T ? i : o,
                            X =
                                T || o !== f.length
                                    ? null == (e = es.title.step.$num(v && !T ? j + 1 : j))
                                        ? void 0
                                        : e.toString()
                                    : es.title.step.final(),
                            Y = P ? gn[mn.Quests] : X,
                            K =
                                T && i !== f.length
                                    ? ne(v && V ? es.subtitlePostProgression() : es.subtitle(), { step: V ? i - C : i })
                                    : '',
                            Z = p !== H.PurchaseStage ? Dn : Fn,
                            J = F ? Z : An;
                        return s().createElement(
                            Kn,
                            { moveSpace: N, isDisabled: P || U, onStartMoving: Q, onEndMoving: q },
                            s().createElement(
                                'div',
                                { className: b()('App_base_d0', k && 'App_base__moving_3f') },
                                s().createElement('div', { className: b()('App_bg_4a', P && 'App_bg__quests_6d') }),
                                s().createElement(Zn, null),
                                s().createElement('div', { className: 'App_content_e8' }, En[g]),
                                !P &&
                                    D !== z.Hidden &&
                                    s().createElement(
                                        'div',
                                        Jn({ className: 'App_banner_0b' }, W),
                                        s().createElement(Pn, { isPostProgression: v }),
                                    ),
                                (p !== H.PurchaseStage || F) &&
                                    s().createElement(
                                        'div',
                                        Jn({ className: 'App_tabs_6c' }, W),
                                        s().createElement(ue, {
                                            tabs: J,
                                            active: g,
                                            onClick: x,
                                            additionContent: ts,
                                            WrapperElement: Cn,
                                            className: b()(
                                                'App_verticalTabs_40',
                                                h > B.ExtraSmall && 'App_verticalTabs__big_3f',
                                            ),
                                            classNames: {
                                                tab: b()('App_tab_00', h > B.ExtraSmall && 'App_tab__big_c9'),
                                                icon: b()('App_icon_48', h > B.ExtraSmall && 'App_icon__big_04'),
                                                highlight: 'App_highlight_56',
                                                frame: b()('App_frame_57', h > B.ExtraSmall && 'App_frame__big_48'),
                                                border: b()('App_border_f4', h > B.ExtraSmall && 'App_border__big_16'),
                                                borderBottom: 'App_borderBottom_76',
                                                arrow: 'App_arrow_2f',
                                            },
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    Jn({ className: 'App_info_9b' }, W),
                                    s().createElement(Gn, null),
                                ),
                                !P &&
                                    s().createElement(
                                        'div',
                                        Jn({ className: b()('App_player_1a', T && 'App_player__active_e6') }, W),
                                        s().createElement(qn, null),
                                    ),
                                s().createElement(
                                    'div',
                                    Jn({ className: 'App_close_79' }, W),
                                    s().createElement(Hn, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'App_header_b2' },
                                    s().createElement(Ve, {
                                        fromTimestamp: c,
                                        toTimestamp: m,
                                        title: null != Y ? Y : es.title.step.universal(),
                                        subtitle: K,
                                        state: p,
                                        displayFeatureName: T,
                                    }),
                                ),
                                f.length > 0 &&
                                    !P &&
                                    s().createElement(
                                        'div',
                                        Jn({ className: 'App_progress_74' }, W),
                                        s().createElement(Yn, {
                                            rewardStatus: d,
                                            levelDuration: _,
                                            animationLevel: i,
                                            viewedLevel: E,
                                            currentLevel: o,
                                            animationStatus: l,
                                            levels: f,
                                            mainLevel: w,
                                            finalLevel: y,
                                            onShowVehiclePreview: a.showVehiclePreview,
                                            onShowStylePreview: a.onShowStylePreview,
                                            playStageSound: M,
                                            isReplay: A,
                                            initialAnimationProgress: R,
                                        }),
                                    ),
                            ),
                        );
                    });
                let as;
                !(function (e) {
                    ((e.BeforeProgression = 'beforeProgression'),
                        (e.Active = 'active'),
                        (e.PurchaseStage = 'purchaseStage'),
                        (e.Completed = 'completed'),
                        (e.Disabled = 'disabled'));
                })(as || (as = {}));
                const rs = (function* () {
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
                                        name: rt.Credits,
                                        value: 1e5,
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.credits',
                                    },
                                    {
                                        name: rt.Crystal,
                                        value: '100',
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.crystal',
                                    },
                                    {
                                        name: rt.Vehicles,
                                        value: 'Object 703-II',
                                        valueType: Dt(at.PremiumPlus),
                                        image: 'R.images.gui.maps.icons.quests.bonuses.big.vehicles',
                                    },
                                ],
                                icon: 'star',
                            },
                                e++);
                    })(),
                    ns = {
                        tabId: 2,
                        chapterId: 1,
                        fromTimestamp: 1e7,
                        toTimestamp: 1e9,
                        title: 'Mocked title',
                        subtitle: 'dfdfdf',
                        state: as.Completed,
                        current: 12,
                        viewed: 4,
                        chapters: [
                            { id: 1, title: 'Глава 1', isAvailable: !0 },
                            { id: 2, title: 'Глава 2', isAvailable: !0 },
                            { id: 3, title: 'Глава 3', isAvailable: !1 },
                            { id: 4, title: 'Глава 4', isAvailable: !1 },
                        ],
                        quests: [
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                            rs.next().value,
                        ],
                        levels: [
                            { level: 1, reward: { name: rt.Crystal, value: '100' } },
                            { level: 2, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 3,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 4, reward: { name: rt.Credits, value: '100000' } },
                            { level: 5, reward: { name: rt.Crystal, value: '100' } },
                            { level: 6, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 7,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 8, reward: { name: rt.Credits, value: '100000' } },
                            { level: 9, reward: { name: rt.Crystal, value: '100' } },
                            { level: 10, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 11,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 12, reward: { name: rt.Credits, value: '100000' } },
                            { level: 13, reward: { name: rt.Crystal, value: '100' } },
                            { level: 14, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 15,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 16, reward: { name: rt.Credits, value: '100000' } },
                            { level: 17, reward: { name: rt.Crystal, value: '100' } },
                            { level: 18, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 19,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 20, reward: { name: rt.Credits, value: '100000' } },
                            { level: 21, reward: { name: rt.Crystal, value: '100' } },
                            { level: 22, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 23,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 24, reward: { name: rt.Credits, value: '100000' } },
                            { level: 25, reward: { name: rt.Crystal, value: '100' } },
                            { level: 26, reward: { name: rt.Gold, value: '250000' } },
                            {
                                level: 27,
                                reward: { name: rt.Vehicles, value: 'Object 703-II', valueType: Dt(at.PremiumPlus) },
                            },
                            { level: 28, reward: { name: rt.Credits, value: '100000' } },
                        ],
                    },
                    ss = {
                        getter: ((os = ns), (e) => (e ? e.split('.').reduce((e, t) => e[t], os) : os)),
                        controls: () =>
                            (function (e) {
                                const t = {};
                                for (const u in e)
                                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                                        const a = e[u];
                                        t[u] = (0, Bu.action)(a);
                                    }
                                return t;
                            })({
                                close: () => {
                                    console.log('Call exit()');
                                },
                                moveSpace: (e) => {
                                    console.log('Move space', e.dx, e.dy, e.dz);
                                },
                                startMoving: () => {},
                                tabChange: () => {},
                                playAnimation: () => {},
                                skipAnimation: () => {},
                                aboutEvent: () => {},
                                collectReward: () => {},
                                buyTokens: () => {},
                                showVehiclePreview: () => {},
                                onShowStylePreview: () => {},
                                playStageSound: () => {},
                                onQuestReroll: () => {},
                                onChapterSelect: () => {},
                            }),
                    };
                var os;
                engine.whenReady.then(() => {
                    O().render(
                        s().createElement(
                            Tu,
                            { mocks: ss, mode: 'real' },
                            s().createElement(k, null, s().createElement(us, null)),
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
        return (__webpack_modules__[e].call(u.exports, u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, a] = deferred[i], n = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
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
                        r,
                        [n, s, o] = u,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7612));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
