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
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => a }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
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
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
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
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = a),
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
                    a = {
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
                let n, r;
                (t.d(u, { n: () => n }),
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
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(u, {
                    B3: () => c,
                    Z5: () => s,
                    B0: () => i,
                    wU: () => w,
                    ry: () => B,
                    Eu: () => C,
                    SW: () => b,
                    P3: () => v,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const r = n;
                var a = t(1358);
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
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            D(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
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
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    h = () => p(i.CLOSE),
                    b = () => p(i.POP_OVER, { on: !1 }),
                    v = (e, u, t, n, r = R.invalid('resId'), a) => {
                        const s = A.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            E = o.width,
                            m = o.height,
                            _ = {
                                x: A.O.view.pxToRem(l) + s.x,
                                y: A.O.view.pxToRem(c) + s.y,
                                width: A.O.view.pxToRem(E),
                                height: A.O.view.pxToRem(m),
                            };
                        p(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: u,
                            bbox: g(_),
                            on: !0,
                            args: a,
                        });
                    },
                    w = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    f = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var S = t(7572);
                const x = r.instance,
                    T = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: b,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, h);
                        },
                        handleViewEvent: p,
                        onBindingsReady: B,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: w,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = T;
            },
            9047: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (e, u, t) =>
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
                    const n = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
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
                    E = c.width,
                    m = c.height,
                    _ = Object.assign({ width: E, height: m }, l(E, m, o)),
                    d = (0, n.createContext)(_),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const r = (0, n.useContext)(d),
                            s = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            g = r.extraLargeHeight,
                            B = r.largeHeight,
                            C = r.mediumHeight,
                            p = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: g, large: B, medium: C, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return a(u, t, b);
                            if (t.largeWidth && m) return a(u, t, b);
                            if (t.mediumWidth && _) return a(u, t, b);
                            if (t.smallWidth && F) return a(u, t, b);
                            if (t.extraSmallWidth && D) return a(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && h) return u;
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
                    const u = (0, n.useContext)(d),
                        t = (0, n.useState)(u),
                        a = t[0],
                        i = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                n = s.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: n }, l(t, n, o)));
                        }, []);
                    (((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const E = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return r().createElement(d.Provider, { value: E }, e);
                });
                var g = t(6483),
                    B = t.n(g),
                    C = t(926),
                    p = t.n(C);
                let h, b, v;
                var w;
                (((w = h || (h = {}))[(w.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                    (w[(w.Small = o.small.width)] = 'Small'),
                    (w[(w.Medium = o.medium.width)] = 'Medium'),
                    (w[(w.Large = o.large.width)] = 'Large'),
                    (w[(w.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const f = () => {
                        const e = (0, n.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
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
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_WIDTH,
                        [b.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [b.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL,
                        [h.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [h.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [h.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, S);
                        const a = f(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return r().createElement('div', x({ className: B()(t, T[s], y[o], L[i]) }, n), u);
                    },
                    P = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, P);
                        return r().createElement(D, null, r().createElement(M, t, u));
                    };
                var k = t(493),
                    N = t.n(k),
                    I = t(9887),
                    H = t.n(I);
                const G = ['xl', 'lg', 'md', 'sm', 'xs'],
                    U = (e) => e.includes('_') && ((e) => G.includes(e))(e.split('_').at(-1)),
                    $ = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    W = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (U(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = $.indexOf(u),
                                    s = (-1 !== a ? G.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => G.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    j = (e, u = W) => {
                        const t = (
                            (e, u = W) =>
                            (t) => {
                                const a = f().mediaSize,
                                    s = (0, n.useMemo)(() => u(t, a), [t, a]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => U(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    z = {
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
                    X = [
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                Object.keys(H());
                const Y = {
                        XL: { mt: z.mt__XL, mr: z.mr__XL, mb: z.mb__XL, ml: z.ml__XL },
                        LG: { mt: z.mt__LG, mr: z.mr__LG, mb: z.mb__LG, ml: z.ml__LG },
                        MDp: { mt: z.mt__MDp, mr: z.mr__MDp, mb: z.mb__MDp, ml: z.ml__MDp },
                        MD: { mt: z.mt__MD, mr: z.mr__MD, mb: z.mb__MD, ml: z.ml__MD },
                        SMp: { mt: z.mt__SMp, mr: z.mr__SMp, mb: z.mb__SMp, ml: z.ml__SMp },
                        SM: { mt: z.mt__SM, mr: z.mr__SM, mb: z.mb__SM, ml: z.ml__SM },
                        XS: { mt: z.mt__XS, mr: z.mr__XS, mb: z.mb__XS, ml: z.ml__XS },
                    },
                    q = (Object.keys(Y), ['mt', 'mr', 'mb', 'ml']),
                    K = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Q = j((e) => {
                        let u = e.className,
                            t = e.width,
                            a = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            E = e.mb,
                            m = void 0 === E ? s : E,
                            _ = e.ml,
                            d = void 0 === _ ? s : _,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            g = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            C = e.flexStart,
                            p = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            v = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (C ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            S = e.alignItems,
                            R = void 0 === S ? (C ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            T = e.wrap,
                            y = e.flexWrap,
                            L = void 0 === y ? (T ? 'wrap' : void 0) : y,
                            M = e.grow,
                            P = e.shrink,
                            O = e.flex,
                            k = void 0 === O ? (M || P ? `${M ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : O,
                            N = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, X);
                        const G = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: m, ml: d },
                                    u = ((e) =>
                                        q.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Y[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        q.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[K[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, N, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: k,
                                        alignSelf: x,
                                        display: g || R ? 'flex' : void 0,
                                        flexDirection: g,
                                        flexWrap: L,
                                        justifyContent: f,
                                        alignItems: R,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, a, i, c, m, d, N, k, x, g, L, f, R]),
                            U = G.computedStyle,
                            $ = G.computedClassNames;
                        return r().createElement('div', V({ className: B()(z.base, ...$, u), style: U }, H), I);
                    });
                let Z;
                function J(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Z || (Z = {}));
                const ee = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ue = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    te = (e, u, t = Z.left) => e.split(u).reduce(t === Z.left ? ee : ue, []),
                    ne = (() => {
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
                    re = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ae = ({ binding: e, text: u = '', classMix: t, alignment: a = Z.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Z.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return re.includes(t)
                                                                ? ne(e)
                                                                : ((e, u = Z.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          te(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(te(e, n, Z.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, a, e).map((e, u) =>
                                              r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var se = t(3532),
                    oe = t.n(se);
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                Object.keys(H());
                const Ee = Object.keys(oe()),
                    me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    _e = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    de = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H28': _e,
                            'heading-H24': _e,
                            'heading-H24R': _e,
                            'heading-H22': _e,
                            'heading-H20R': _e,
                            'heading-H18': _e,
                            'heading-H15': de,
                            'heading-H14': de,
                            'paragraph-P24': _e,
                            'paragraph-P18': _e,
                            'paragraph-P16': _e,
                            'paragraph-P14': de,
                            'paragraph-P12': de,
                            'paragraph-P10': de,
                        }),
                    Fe =
                        (Object.keys(Ae),
                        (e) =>
                            e
                                ? ((e) => Ee.includes(e))(e)
                                    ? { colorClassName: ie[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    De = j((e) => {
                        let u = e.text,
                            t = e.variant,
                            a = e.className,
                            s = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            E = void 0 === c ? o : c,
                            m = e.mb,
                            _ = void 0 === m ? o : m,
                            d = e.ml,
                            A = void 0 === d ? o : d,
                            F = e.style,
                            D = e.format,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, le);
                        const C = (0, n.useMemo)(() => {
                                const e = Fe(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, s]),
                            p = C.computedStyle,
                            h = C.colorClassName;
                        return r().createElement(
                            Q,
                            ce(
                                {
                                    className: B()(ie.base, t && ie[t], h, a),
                                    style: p,
                                    mt: !0 === l ? Ae[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? Ae[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? Ae[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? Ae[t || 'paragraph-P16'].ml : A,
                                },
                                g,
                            ),
                            void 0 !== D ? r().createElement(ae, ce({}, D, { text: u })) : u,
                        );
                    });
                function ge(e) {
                    engine.call('PlaySound', e);
                }
                const Be = {
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
                    Ce = {
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
                    pe = [
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
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                class be extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ge(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ge(this.props.soundClick));
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
                            n = e.goto,
                            a = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, pe)),
                            _ = B()(Ce.base, Ce[`base__${s}`], Ce[`base__${a}`], null == o ? void 0 : o.base),
                            d = B()(Ce.icon, Ce[`icon__${s}`], Ce[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = B()(Ce.glow, null == o ? void 0 : o.glow),
                            F = B()(Ce.caption, Ce[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = B()(Ce.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            he(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== s && r().createElement('div', { className: Ce.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                be.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ve = t(5521),
                    we = t(4179);
                const fe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Se(e = ve.n.NONE, u = fe, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ve.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Re = t(3282);
                function xe() {
                    return !1;
                }
                console.log;
                var Te = t(3915);
                function ye(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Le = (e) => (0 === e ? window : window.subViews.get(e)),
                    Me = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? Me(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, n) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Me(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Me(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    Pe = (e) => Me(e);
                var Oe = t(5647);
                const ke = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: o, mocks: i }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Le,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
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
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(o(a)), l);
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
                                                                                    return ye(e, u);
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
                                                                                          ? ye(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                                })(r.keys());
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
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        progressionLevels: e.array('progressionLevels'),
                                                        levelsRewardRenderers: e.array(
                                                            'levelsRewards.rewardRenderers.items',
                                                        ),
                                                    },
                                                    t = (0, Oe.O)(() => Pe(u.progressionLevels.get()), { equals: xe }),
                                                    n = (0, Oe.O)(() => Pe(u.levelsRewardRenderers.get()), {
                                                        equals: xe,
                                                    }),
                                                    r = (0, Oe.O)(() => n().find((e) => e.isCurrentLevel), {
                                                        equals: xe,
                                                    }),
                                                    a = (0, Oe.O)(
                                                        (e) => {
                                                            const u = n()[e];
                                                            if (u) return u.rewardsGroup.items;
                                                        },
                                                        { equals: xe },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getProgressionLevels: t,
                                                        levelsRewardRenderers: n,
                                                        getCurrentLevel: r,
                                                        getLevelRewardsGroup: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = Te.observable.box(n, { equals: xe });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Te.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = Te.observable.box(n, { equals: xe });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Te.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Te.observable.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Te.action)((e) => {
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
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = Te.observable.box(n[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Te.action)((e) => {
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
                                            m = { mode: e, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(m) : u(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    _ = m[0],
                                    d = m[1],
                                    A = (0, n.useState)(() => c(e, a, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(_, a, i)) : (E.current = !0);
                                    }, [i, _, a]),
                                    (0, n.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onClose: e.createCallbackNoArgs('onClose'),
                        onGotoStore: e.createCallbackNoArgs('onGotoStore'),
                        onSelectVehicleDiscount: e.createCallbackNoArgs('onSelectVehicleDiscount'),
                    })),
                    Ne = ke[0],
                    Ie = ke[1],
                    He = [
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
                function Ge(e) {
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
                const Ue = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: we.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    $e = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            _ = e.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, He);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [g],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ue(t, d, { isMouseEvent: !0, on: !0, arguments: Ge(r) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, d, r, b, B]),
                            w = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ue(t, d, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, b, C]),
                            f = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          a && a(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (w(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && w(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && w(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    We = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const ze = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, We);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: a, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, s, i]);
                        return r().createElement(
                            $e,
                            je(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? ze.SimpleTooltipHtmlContent('resId') : ze.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Ve = {
                        base: 'LevelsRewards_base_99',
                        header: 'LevelsRewards_header_fe',
                        columnHeader: 'LevelsRewards_columnHeader_b0',
                        columnHeader__completed: 'LevelsRewards_columnHeader__completed_f8',
                        columnHeader__current: 'LevelsRewards_columnHeader__current_c1',
                        levelColumn: 'LevelsRewards_levelColumn_d8',
                        levelColumn__disabled: 'LevelsRewards_levelColumn__disabled_ae',
                    };
                let Ye;
                !(function (e) {
                    ((e[(e.c5 = 5)] = 'c5'),
                        (e[(e.c6 = 6)] = 'c6'),
                        (e[(e.c7 = 7)] = 'c7'),
                        (e[(e.c8 = 8)] = 'c8'),
                        (e[(e.c9 = 9)] = 'c9'),
                        (e[(e.c10 = 10)] = 'c10'),
                        (e[(e.c11 = 11)] = 'c11'));
                })(Ye || (Ye = {}));
                const qe = 'RewardsColumn_columnShadow_64',
                    Ke = 'RewardsColumn_columnShadow__selected_e1',
                    Qe = {
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
                let Ze, Je;
                var eu, uu;
                (((uu = Ze || (Ze = {})).main = 'main'),
                    (uu.primary = 'primary'),
                    (uu.primaryGreen = 'primaryGreen'),
                    (uu.primaryRed = 'primaryRed'),
                    (uu.secondary = 'secondary'),
                    (uu.ghost = 'ghost'),
                    ((eu = Je || (Je = {})).extraSmall = 'extraSmall'),
                    (eu.small = 'small'),
                    (eu.medium = 'medium'));
                const tu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        g = D[0],
                        C = D[1],
                        p = (0, n.useState)(!1),
                        h = p[0],
                        b = p[1],
                        v = (0, n.useState)(!1),
                        w = v[0],
                        f = v[1],
                        S = (0, n.useCallback)(() => {
                            s || (F.current && (F.current.focus(), C(!0)));
                        }, [s]),
                        x = (0, n.useCallback)(
                            (e) => {
                                g && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [g],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                s || (null !== i && ge(i), c && c(e), f(!0));
                            },
                            [s, i, c],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                s || (_ && _(e), b(!1));
                            },
                            [s, _],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                s || (null !== l && ge(l), m && m(e), t && S(), b(!0));
                            },
                            [s, l, m, S, t],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                s || (d && d(e), b(!1));
                            },
                            [s, d],
                        ),
                        k = B()(
                            Qe.base,
                            Qe[`base__${a}`],
                            {
                                [Qe.base__disabled]: s,
                                [Qe[`base__${u}`]]: u,
                                [Qe.base__focus]: g,
                                [Qe.base__highlightActive]: h,
                                [Qe.base__firstHover]: w,
                            },
                            o,
                        ),
                        N = B()(Qe.state, Qe.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, n.useEffect)(() => {
                            C(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: k,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            a !== Ze.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Qe.back }),
                                    r().createElement('span', { className: Qe.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: Qe.stateDisabled }),
                                r().createElement('span', { className: Qe.stateHighlightHover }),
                                r().createElement('span', { className: Qe.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Qe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                tu.defaultProps = { type: Ze.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const nu = (0, n.memo)(tu);
                let ru, au, su, ou, iu, lu, cu;
                var Eu, mu;
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
                })(ru || (ru = {})),
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
                    })(au || (au = {})),
                    ((mu = su || (su = {})).Big = 'big'),
                    (mu.Small = 'small'),
                    (mu.Mini = 'mini'),
                    (mu.S600x450 = 's600x450'),
                    (mu.S400x300 = 's400x300'),
                    (mu.S296x222 = 's296x222'),
                    (mu.S232x174 = 's232x174'),
                    (mu.S180x135 = 's180x135'),
                    (mu.S128x100 = 's128x100'),
                    (mu.S80x80 = 's80x80'),
                    (mu.S48x48 = 's48x48'),
                    ((Eu = ou || (ou = {})).MULTI = 'multi'),
                    (Eu.CURRENCY = 'currency'),
                    (Eu.PREMIUM_PLUS = 'premium_plus'),
                    (Eu.NUMBER = 'number'),
                    (Eu.STRING = 'string'),
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
                    })(iu || (iu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(lu || (lu = {})),
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
                    })(cu || (cu = {})));
                class _u extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? we.B3.GOLD : we.B3.INTEGRAL;
                        const u = we.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                _u.defaultProps = { format: 'integral' };
                const du = [
                        ru.Items,
                        ru.Equipment,
                        ru.Xp,
                        ru.XpFactor,
                        ru.Blueprints,
                        ru.BlueprintsAny,
                        ru.Goodies,
                        ru.Berths,
                        ru.Slots,
                        ru.Tokens,
                        ru.CrewSkins,
                        ru.CrewBooks,
                        ru.Customizations,
                        ru.CreditsFactor,
                        ru.TankmenXp,
                        ru.TankmenXpFactor,
                        ru.FreeXpFactor,
                        ru.BattleToken,
                        ru.Entitlements,
                        ru.PremiumUniversal,
                        ru.NaturalCover,
                        ru.BpCoin,
                        ru.BattlePassSelectToken,
                        ru.BattlaPassFinalAchievement,
                        ru.BattleBadge,
                        ru.BonusX5,
                        ru.CrewBonusX3,
                        ru.NewYearFillers,
                        ru.NewYearInvoice,
                        ru.EpicSelectToken,
                        ru.Comp7TokenWeeklyReward,
                        ru.Comp7TokenCouponReward,
                        ru.BattleBoosterGift,
                        ru.NewYearFillers,
                        ru.NewYearInvoice,
                        ru.LootBoxToken,
                        ru.CosmicLootboxCommon,
                        ru.CosmicLootboxSilver,
                        ru.SelectableBonus,
                        ru.GoldenTicket,
                        ru.PostStamp,
                        ru.BlankPersonalMissions_1,
                        ru.BlankPersonalMissions_2,
                        ru.SACoin,
                        ru.PremiumPlusUniversal,
                        ru.NyPetGoodies,
                        ru.HiddenVehicle,
                    ],
                    Au = [ru.Gold, ru.Credits, ru.Crystal, ru.FreeXp, ru.NewYearToyFragments],
                    Fu = [ru.BattlePassPoints],
                    Du = [ru.PremiumPlus, ru.Premium];
                let gu;
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
                })(gu || (gu = {}));
                const Bu = (e) =>
                        du.includes(e)
                            ? ou.MULTI
                            : Au.includes(e)
                              ? ou.CURRENCY
                              : Fu.includes(e)
                                ? ou.NUMBER
                                : Du.includes(e)
                                  ? ou.PREMIUM_PLUS
                                  : ou.STRING,
                    Cu = ['engravings', 'backgrounds'],
                    pu = ['engraving', 'background'],
                    hu = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    bu = ['children'];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const wu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, bu);
                    return r().createElement(
                        $e,
                        vu(
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
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const Su = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Xe, u, n);
                        const a = u.contentId,
                            s = u.args,
                            o = null == s ? void 0 : s.contentId;
                        return a || o
                            ? r().createElement($e, fu({}, u, { contentId: a || o }), n)
                            : r().createElement(wu, u, n);
                    },
                    Ru = {
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
                    xu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = su.Big,
                        special: a,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case iu.BATTLE_BOOSTER:
                                    case iu.BATTLE_BOOSTER_REPLACE:
                                        return lu.BATTLE_BOOSTER;
                                }
                            })(a),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case iu.BATTLE_BOOSTER:
                                        return cu.BATTLE_BOOSTER;
                                    case iu.BATTLE_BOOSTER_REPLACE:
                                        return cu.BATTLE_BOOSTER_REPLACE;
                                    case iu.BUILT_IN_EQUIPMENT:
                                        return cu.BUILT_IN_EQUIPMENT;
                                    case iu.EQUIPMENT_PLUS:
                                        return cu.EQUIPMENT_PLUS;
                                    case iu.EQUIPMENT_TROPHY_BASIC:
                                        return cu.EQUIPMENT_TROPHY_BASIC;
                                    case iu.EQUIPMENT_TROPHY_UPGRADED:
                                        return cu.EQUIPMENT_TROPHY_UPGRADED;
                                    case iu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return cu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case iu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return cu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case iu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return cu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case iu.PROGRESSION_STYLE_UPGRADED_1:
                                        return cu.PROGRESSION_STYLE_UPGRADED_1;
                                    case iu.PROGRESSION_STYLE_UPGRADED_2:
                                        return cu.PROGRESSION_STYLE_UPGRADED_2;
                                    case iu.PROGRESSION_STYLE_UPGRADED_3:
                                        return cu.PROGRESSION_STYLE_UPGRADED_3;
                                    case iu.PROGRESSION_STYLE_UPGRADED_4:
                                        return cu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case ou.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case ou.CURRENCY:
                                    case ou.NUMBER:
                                        return r().createElement(_u, { format: 'integral', value: Number(e) });
                                    case ou.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: B()(Ru.base, Ru[`base__${n}`], l), style: i },
                            r().createElement(
                                Su,
                                { tooltipArgs: E, className: Ru.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: B()(Ru.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            r().createElement('div', {
                                                className: B()(Ru.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: B()(Ru.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: B()(Ru.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    Ru.info,
                                                    Ru[`info__${e}`],
                                                    o === ou.MULTI && Ru.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Su,
                                    { tooltipArgs: m },
                                    r().createElement('div', {
                                        className: B()(Ru.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Tu = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    yu = {
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
                var Lu;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Lu || (Lu = {}));
                const Mu = ['__left', '__right', '__top', '__bottom'],
                    Pu =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: a = {} }, o) => {
                                const i = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    E = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    m = E[0],
                                    _ = E[1],
                                    d = (0, n.useCallback)(() => {
                                        (Be.playClick(), s.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        Be.playHighlight();
                                    }, []),
                                    F = B()(yu.arrow, yu[`arrow${Mu[m]}`]);
                                Tu(
                                    () => (
                                        s.O.client.events.mouse.enableOutside(),
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, n.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = s.O.client.getMouseGlobalPosition(),
                                                    u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < n.boundX ||
                                                        e.x > n.boundX + n.boundWidth ||
                                                        e.y > n.boundY + n.boundHeight ||
                                                        e.y < n.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : s.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, t],
                                    ),
                                    g = (0, n.useCallback)(
                                        () => (
                                            s.O.view.freezeTextureBeforeResize(),
                                            ((e) => {
                                                let u,
                                                    t = null;
                                                return (
                                                    (t = requestAnimationFrame(() => {
                                                        t = requestAnimationFrame(() => {
                                                            ((t = null),
                                                                (u = (() => {
                                                                    if (l.current) {
                                                                        const e = l.current.scrollWidth,
                                                                            u = l.current.scrollHeight;
                                                                        (s.O.view.resize(e, u),
                                                                            _(window.decorator.directionType));
                                                                    }
                                                                })()));
                                                        });
                                                    })),
                                                    () => {
                                                        ('function' == typeof u && u(),
                                                            null !== t && cancelAnimationFrame(t));
                                                    }
                                                );
                                            })()
                                        ),
                                        [],
                                    );
                                return (
                                    (0, n.useImperativeHandle)(o, () => ({ updateSize: g })),
                                    Tu(() => {
                                        s.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, we.Eu)());
                                        return (
                                            !u && e.promise.then(() => g()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [g, D, u]),
                                    r().createElement(
                                        'div',
                                        { className: yu.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: yu.decorator },
                                            r().createElement(
                                                'div',
                                                { className: yu.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        Xe,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: yu.closeBtn,
                                                            onClick: d,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: F, style: a.arrow }),
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
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const ku = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            a = e.direction,
                            s = void 0 === a ? Lu.Top : a,
                            o = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            E = e.isEnabled,
                            m = void 0 === E || E,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Pu);
                        const d = (0, n.useRef)(null),
                            A = (0, n.useCallback)(() => {
                                if ((0, we.wU)()) return (0, we.SW)();
                                d.current && (0, we.P3)(u, s, d.current, t, o, i);
                            }, [u, s, i, t, o]);
                        return r().createElement(
                            'div',
                            Ou(
                                {
                                    ref: d,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            m && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var F;
                    },
                    Nu = ['children'];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Hu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Nu);
                        return r().createElement(
                            ku,
                            Iu(
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
                    Gu = (e) => e.name === ju.MarketplaceUnlock;
                let Uu, $u, Wu, ju;
                var zu, Xu;
                (((Xu = Uu || (Uu = {})).Small = 'small'),
                    (Xu.Medium = 'medium'),
                    (Xu.Big = 'big'),
                    (Xu.ExtraBig = 'extraBig'),
                    (Xu.Huge = 'huge'),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })($u || ($u = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(Wu || (Wu = {})),
                    ((zu = ju || (ju = {})).ExtraSlot = 'ny22:extraSlot'),
                    (zu.ToyFragments = 'ny22ToyFragments'),
                    (zu.Tman = 'tmanToken'),
                    (zu.AchievementReward = 'dossier_achievement'),
                    (zu.Customizations = 'customizations'),
                    (zu.VariadicDiscount = 'variadicDiscount'),
                    (zu.MarketplaceUnlock = 'ny26_marketplace_unlock'),
                    (zu.LootBoxToken = 'lootBoxToken'));
                const Vu = ['ko', 'no'],
                    Yu = R.strings.settings.LANGUAGE_CODE(),
                    qu = {
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
                    Ku = R.images.gui.maps.icons.vehicle,
                    Qu = R.images.gui.maps.shop.vehicles.c_360x270,
                    Zu = R.strings.quests.bonuses.variadicDiscount.buttonLabel(),
                    Ju = R.strings.roman_numerals,
                    et = (0, n.memo)(
                        ({ bonus: e, options: u, size: t = Uu.Medium, hasTooltip: a = !1, onSelectReward: s }) => {
                            const o = e.level,
                                i = e.discount,
                                l = e.selectedVehicle,
                                c = e.variadicID,
                                E = u || {},
                                m = E.animation,
                                _ = E.disabled,
                                d = E.iconType,
                                A = E.isBrightOnHover,
                                F = E.isButtonHidden,
                                D = E.isLevelHidden,
                                g = void 0 !== D && D,
                                C = E.useCoverIconWhenSelected,
                                p = (0, n.useRef)(null),
                                h = `${((e, u) => {
                                    const t = 'R.images.gui.maps.icons';
                                    return `${t}.${e !== ju.AchievementReward || (u !== Uu.Small && u !== Uu.Medium) ? 'quests.bonuses' : `${t}.achievement.big`}.${(() => {
                                        switch (u) {
                                            case Uu.Small:
                                            case Uu.Medium:
                                                return 'big';
                                            case Uu.Big:
                                                return 's180x135';
                                            case Uu.ExtraBig:
                                                return 's232x174';
                                            case Uu.Huge:
                                                return 's296x222';
                                        }
                                    })()}`;
                                })(ju.VariadicDiscount, t)}.${ju.VariadicDiscount}`,
                                b = d === Wu.Big,
                                v = b ? Qu : Ku,
                                w = (0, n.useMemo)(() => (l && b ? l.split(':')[1] : l), [b, l]),
                                f = w && !C ? v.$dyn(J(w)) : h,
                                S = Vu.includes(Yu) ? o : Ju.$dyn(`n_${o}`),
                                x = (0, n.useState)(!1),
                                T = x[0],
                                y = x[1],
                                L = m !== $u.None,
                                M = { variadicID: c, discount: i },
                                P = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: c },
                                O = { backgroundImage: `url('${f}')` };
                            var k, N;
                            ((0, n.useEffect)(() => {
                                !L && T && y(!1);
                            }, [L, T]),
                                (k = () => {
                                    !p.current ||
                                        l ||
                                        _ ||
                                        m === $u.OnlyText ||
                                        m === $u.None ||
                                        (p.current.style.backgroundImage =
                                            "url('swf://gui/flash/animations/newYear/godRaysSmall.swf')");
                                }),
                                (N = [m, _, l]),
                                (0, n.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                ((e = null), k());
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, N));
                            const I = B()(
                                    qu.base,
                                    qu[`base__${t}`],
                                    _ && qu.base__disabled,
                                    A && qu.base__bright,
                                    l && qu.base__applied,
                                ),
                                H = i > 0 ? `-${i}` : '',
                                G = r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        $e,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyDiscountRewardTooltip(
                                                    'resId',
                                                ),
                                            args: M,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: qu.discountReward, style: O },
                                            r().createElement(
                                                'div',
                                                { className: B()(qu.vehicleLevel, !g && qu.vehicleLevel__visible) },
                                                S,
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: qu.discountWrapper },
                                                r().createElement(
                                                    'div',
                                                    { className: qu.discountAmount },
                                                    r().createElement('div', { className: qu.discountAmountIcon }, '%'),
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            className: B()(
                                                                qu.discountAmountValue,
                                                                !g && qu.discountAmountValue__visible,
                                                            ),
                                                        },
                                                        H,
                                                    ),
                                                ),
                                            ),
                                            r().createElement('div', { className: qu.shine, ref: p }),
                                            r().createElement('div', { className: qu.discountApplied }),
                                        ),
                                    ),
                                    !F &&
                                        r().createElement(
                                            'div',
                                            { className: qu.buttonContainer },
                                            r().createElement(
                                                'div',
                                                { className: qu.buttonWrapper },
                                                r().createElement(
                                                    'div',
                                                    null,
                                                    r().createElement(
                                                        nu,
                                                        {
                                                            size: Je.small,
                                                            type: Ze.main,
                                                            mixClass: qu.button,
                                                            onClick: s,
                                                        },
                                                        r().createElement('div', { className: qu.button__label }, Zu),
                                                    ),
                                                ),
                                            ),
                                        ),
                                );
                            return r().createElement(
                                'div',
                                {
                                    className: I,
                                    onMouseEnter: () => {
                                        L && y(!0);
                                    },
                                    onMouseLeave: () => {
                                        T && y(!1);
                                    },
                                },
                                (!_ && !l) || a ? r().createElement(Hu, { args: P }, G) : G,
                            );
                        },
                    );
                let ut, tt;
                (!(function (e) {
                    ((e[(e.CITY = 0)] = 'CITY'),
                        (e[(e.PET = 1)] = 'PET'),
                        (e[(e.LEADERS = 2)] = 'LEADERS'),
                        (e[(e.MACHINE = 3)] = 'MACHINE'),
                        (e[(e.INFO = 4)] = 'INFO'));
                })(ut || (ut = {})),
                    (function (e) {
                        ((e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.TO_GLADE_WITH_INTRO = 2)] = 'TO_GLADE_WITH_INTRO'),
                            (e[(e.WITH_SWITCHING_OBJS = 3)] = 'WITH_SWITCHING_OBJS'));
                    })(tt || (tt = {})));
                const nt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    rt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    at = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let st;
                !(function (e) {
                    ((e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple'));
                })(st || (st = {}));
                const ot =
                        (R.strings.ny.levelUpView.rewards,
                        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI']),
                    it =
                        (ut.CITY,
                        ut.PET,
                        ut.MACHINE,
                        (e, u = su.Small, t) => {
                            const n = J(e.vehicleName || '');
                            if (e.name === ru.Vehicles)
                                switch (u) {
                                    case su.Mini:
                                    case su.Small:
                                    case su.S48x48:
                                        return e.isRent
                                            ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                            : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                    case su.Big:
                                    case su.S80x80:
                                        return e.isRent
                                            ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                            : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                    case su.S128x100:
                                    case su.S180x135:
                                        return `R.images.gui.maps.shop.vehicles.c_180x135.${n}`;
                                    case su.S232x174:
                                    case su.S296x222:
                                        return `R.images.gui.maps.shop.vehicles.c_360x270.${n}`;
                                    case su.S400x300:
                                    case su.S600x450:
                                        return `R.images.gui.maps.shop.vehicles.c_600x450.${n}`;
                                    default:
                                        return (
                                            console.error('Unknown vehicle image size', u, e.vehicleName),
                                            'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                        );
                                }
                            if (e.name === ru.TmanToken)
                                switch (u) {
                                    case su.Mini:
                                    case su.Small:
                                    case su.S48x48:
                                    case su.Big:
                                    case su.S80x80:
                                        return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                    case su.S128x100:
                                    case su.S180x135:
                                    case su.S232x174:
                                        return `R.images.gui.maps.icons.tankmen.icons.s232x174.ny_${e.icon}`;
                                    case su.S296x222:
                                        return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                    case su.S400x300:
                                        return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                    case su.S600x450:
                                        return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                    default:
                                        return (
                                            console.error('Unknown image size', u),
                                            'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                        );
                                }
                            return ((e, u = su.Small, t) => {
                                const n = e.name,
                                    r = e.type,
                                    a = e.value,
                                    s = e.icon,
                                    o = e.item,
                                    i = e.dogTagType,
                                    l = ((e) => {
                                        switch (e) {
                                            case su.S600x450:
                                                return 'c_600x450';
                                            case su.S400x300:
                                                return 'c_400x300';
                                            case su.S296x222:
                                                return 'c_296x222';
                                            case su.S232x174:
                                                return 'c_232x174';
                                            case su.Big:
                                                return 'c_80x80';
                                            case su.Small:
                                                return 'c_48x48';
                                            default:
                                                return e;
                                        }
                                    })(u);
                                switch (n) {
                                    case 'basic':
                                    case 'plus':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${a}`;
                                    case 'premium':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_plus_${a}`;
                                    case 'premium_plus':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                                    case 'items':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                                    case 'blueprints':
                                    case 'blueprintsAny':
                                    case 'finalBlueprints':
                                        return `R.images.gui.maps.icons.blueprints.fragment.${u}.${s}`;
                                    case 'tokens':
                                    case 'battleToken':
                                        return ((e, u) => {
                                            switch (u) {
                                                case su.Big:
                                                    return e.iconBig.replace('..', 'img://gui');
                                                case su.Small:
                                                    return e.iconSmall.replace('..', 'img://gui');
                                                default:
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                            }
                                        })(e, u);
                                    case 'entitlements':
                                        return 'big' === u
                                            ? e.iconBig.replace('..', 'img://gui')
                                            : e.iconSmall.replace('..', 'img://gui');
                                    case 'crewBooks':
                                        return `R.images.gui.maps.icons.crewBooks.books.${u}.${s}`;
                                    case 'dogTagComponents':
                                        return ((e, u, t) => {
                                            const n = Cu[e];
                                            if (n) {
                                                const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                                    a = r.$dyn(t);
                                                return a ? `${a}` : `${r.$dyn(pu[e])}`;
                                            }
                                            return (
                                                console.error(
                                                    'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                ),
                                                ''
                                            );
                                        })(i, u, s);
                                    case 'dossier_badge':
                                        return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                                    case 'dossier_achievement':
                                        return `R.images.gui.maps.icons.achievement.${((e) => {
                                            switch (e) {
                                                case su.S600x450:
                                                    return 'c_600x450';
                                                case su.S400x300:
                                                    return 'c_400x300';
                                                case su.S296x222:
                                                    return 'c_296x222';
                                                case su.S232x174:
                                                    return 'c_232x174';
                                                case su.S180x135:
                                                    return 'big';
                                                case su.Big:
                                                case su.S80x80:
                                                    return 'c_80x80';
                                                case su.Small:
                                                case su.S48x48:
                                                    return 'c_48x48';
                                                default:
                                                    return e;
                                            }
                                        })(u)}.${s}`;
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
                                    case 'styleProgress':
                                    case 'crewSkins':
                                    case 'goodies':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                                    case 'nyPetGoodies':
                                        return `R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.${u}.${s}`;
                                    case 'premiumTank':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                    case 'styleProgressToken':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                    case 'collectionItem':
                                        return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                                    case 'premium_universal':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                                    case 'armory_coin':
                                        return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                            switch (e) {
                                                case su.Mini:
                                                    return gu.s32;
                                                case su.Small:
                                                case su.S48x48:
                                                    return gu.s48;
                                                case su.S80x80:
                                                case su.Big:
                                                    return gu.s80;
                                                case su.S128x100:
                                                    return gu.s116;
                                                case su.S180x135:
                                                case su.S232x174:
                                                case su.S296x222:
                                                    return gu.s296;
                                                case su.S400x300:
                                                    return gu.s400;
                                                case su.S600x450:
                                                    return gu.s600;
                                            }
                                        })(u)}`;
                                    case 'newYearAlbumsAccess':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.albumsAccess`;
                                    case 'nyFillers':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.fillers`;
                                    case 'nyToyFragments':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.shards`;
                                    case 'newYearSlot':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.slot`;
                                    case 'hidden_vehicle':
                                        return 'R.images.new_year.gui.maps.icons.newYear.common.rewards.vehicles.hidden_vehicle';
                                    case 'nyStaticDogTag':
                                        return `R.images.new_year.gui.maps.icons.newYear.common.rewards.dogtags.${u}.dogtag_${t}`;
                                    default:
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                                }
                            })(e, u, t);
                        }),
                    lt = 'RewardsList_reward__disabled_06';
                var ct;
                !(function (e) {
                    ((e.PremiumTank = 'premiumTank'), (e.More = 'more'));
                })(ct || (ct = {}));
                const Et = {
                        animation: $u.None,
                        disabled: !1,
                        iconType: Wu.Big,
                        animationType: $u.None,
                        isButtonHidden: !1,
                        isPopoverOpened: !1,
                        useCoverIconWhenSelected: !0,
                    },
                    mt = r().memo(
                        ({
                            rewardsData: e,
                            columnIndex: u,
                            levelText: t,
                            isLevelAchieved: a,
                            isCurrentLevel: s,
                            onGotoStore: o,
                            onSelectVehicleDiscount: i,
                            isVertical: l = !1,
                            count: c = 0,
                            classMix: E,
                            rewardItemClassMix: m,
                            boxRewardTooltip: _,
                            boxRewardValue: d,
                        }) => {
                            const A = f().mediaSize,
                                F = A >= h.Large ? su.Big : su.Small,
                                D = A >= h.Large ? Uu.Medium : Uu.Small,
                                g = (null == e ? void 0 : e.length) || 0,
                                C = c && c < g ? `R.images.gui.maps.icons.quests.bonuses.${F}.default` : '',
                                p = a && !s,
                                b = t === (ot[10] || ''),
                                v = a && b,
                                w =
                                    d ||
                                    ((S = R.strings.ny.levelsRewards.more()),
                                    (x = { count: g - (c || 0) }),
                                    S.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(x[e.slice(u, -u)]);
                                    }));
                            var S, x;
                            const T = B()('RewardsList_base_e4', l && 'RewardsList_base__vertical_44', E),
                                y = B()('RewardsList_reward_8a', l && 'RewardsList_reward__vertical_eb', m),
                                L = (e) => {
                                    const t = v && Gu(e);
                                    if ('variadicDiscount' === e.name) {
                                        const u = e,
                                            t = !u.selectedVehicle && (a || v);
                                        return r().createElement(
                                            'div',
                                            { className: B()(y, 'RewardsList_discount_f1', u.selectedVehicle && lt) },
                                            t &&
                                                r().createElement('div', {
                                                    className: 'RewardsList_discount__highlight_e2',
                                                }),
                                            r().createElement(et, {
                                                bonus: u,
                                                options: Object.assign({}, Et, { isButtonHidden: !t, disabled: !t }),
                                                size: D,
                                                onSelectReward: i,
                                            }),
                                        );
                                    }
                                    return e.name === ru.Vehicles
                                        ? r().createElement(
                                              'div',
                                              { className: B()(y, p && lt) },
                                              r().createElement(xu, {
                                                  size: F,
                                                  name: ct.PremiumTank,
                                                  image: it(e, F),
                                                  special: e.overlayType,
                                                  value: e.label,
                                                  valueType: Bu(e.name),
                                                  tooltipArgs: hu(
                                                      { tooltipId: e.tooltipId, idx: u },
                                                      Number(e.tooltipContentId),
                                                  ),
                                              }),
                                          )
                                        : r().createElement(
                                              'div',
                                              { className: B()(y, p && !t && lt) },
                                              r().createElement(xu, {
                                                  size: F,
                                                  name: e.name,
                                                  image: it(e, F),
                                                  special: e.overlayType,
                                                  value: e.value,
                                                  valueType: Bu(e.name),
                                                  tooltipArgs: hu(
                                                      { tooltipId: e.tooltipId, idx: u },
                                                      Number(e.tooltipContentId),
                                                  ),
                                              }),
                                              Gu(e) &&
                                                  v &&
                                                  r().createElement(
                                                      nu,
                                                      {
                                                          mixClass: 'RewardsList_storeButton_cb',
                                                          type: Ze.primaryGreen,
                                                          size: A >= h.Large ? Je.small : Je.extraSmall,
                                                          onClick: o,
                                                      },
                                                      R.strings.ny.levelsRewards.gotoStoreBtn(),
                                                  ),
                                          );
                                };
                            return r().createElement(
                                'div',
                                { className: T },
                                C
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          null == e
                                              ? void 0
                                              : e
                                                    .slice(0, c)
                                                    .map((e, u) =>
                                                        r().createElement(n.Fragment, { key: `reward_${u}` }, L(e)),
                                                    ),
                                          r().createElement(
                                              'div',
                                              { className: B()(y, p && lt) },
                                              r().createElement(xu, {
                                                  name: ct.More,
                                                  image: C,
                                                  size: F,
                                                  value: w,
                                                  tooltipArgs: _,
                                              }),
                                          ),
                                      )
                                    : null == e
                                      ? void 0
                                      : e.map((e, u) => r().createElement(n.Fragment, { key: `reward_${u}` }, L(e))),
                            );
                        },
                    ),
                    _t = (e) => (e === h.ExtraLarge ? Ye.c7 : e === h.Medium ? Ye.c6 : Ye.c5),
                    dt = (0, n.memo)(
                        ({
                            idx: e,
                            levelText: u,
                            isLevelAchieved: t,
                            isCurrentLevel: n,
                            rewardsGroup: a,
                            isLastLevelCompleted: s,
                            onGotoStore: o,
                            onSelectVehicleDiscount: i,
                            isFirst: l,
                            isLast: c,
                        }) => {
                            const E = f().mediaSize,
                                m = (null == a ? void 0 : a.length) || 0,
                                _ = m > _t(E) + 1 ? _t(E) : m,
                                d = {
                                    contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                    args: { showedCount: _, idx: e },
                                },
                                A = B()(
                                    'RewardsColumn_base_40',
                                    !t && !n && 'RewardsColumn_base__notAchieved_6c',
                                    n && !s && 'RewardsColumn_base__current_cb',
                                ),
                                F = B()(
                                    'RewardsColumn_particlesLine_36',
                                    n && 'RewardsColumn_particlesLine__current_6d',
                                ),
                                D = B()(F, 'RewardsColumn_particlesLine__right_ba'),
                                g = B()(F, 'RewardsColumn_particlesLine__left_72');
                            return r().createElement(
                                'div',
                                { className: A },
                                r().createElement(
                                    'div',
                                    { className: 'RewardsColumn_particles_e2' },
                                    r().createElement('div', { className: 'RewardsColumn_particlesPattern_23' }),
                                    n &&
                                        !s &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: D }),
                                            r().createElement('div', { className: g }),
                                        ),
                                    r().createElement('div', {
                                        className: B()(qe, !l && 'RewardsColumn_columnShadow__left_dc', n && !s && Ke),
                                    }),
                                    r().createElement('div', {
                                        className: B()(qe, !c && 'RewardsColumn_columnShadow__right_37', n && !s && Ke),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'RewardsColumn_rewards_5c' },
                                    r().createElement(mt, {
                                        onGotoStore: o,
                                        onSelectVehicleDiscount: i,
                                        rewardsData: a,
                                        columnIndex: e,
                                        count: _,
                                        boxRewardTooltip: d,
                                        rewardItemClassMix: 'RewardsColumn_rewardItem_84',
                                        levelText: u,
                                        isLevelAchieved: t,
                                        isCurrentLevel: n,
                                        isVertical: !0,
                                    }),
                                ),
                            );
                        },
                    );
                function At() {
                    return (
                        (At =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        At.apply(this, arguments)
                    );
                }
                const Ft = R.strings.ny.rewardsView;
                let Dt;
                !(function (e) {
                    ((e.Completed = 'completed'), (e.Current = 'current'), (e.NotSelected = 'notSelected'));
                })(Dt || (Dt = {}));
                const gt = (0, Re.observer)(() => {
                        const e = Ie(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.levelsRewardRenderers(),
                            a = u.computes.getCurrentLevel(),
                            s = n.length;
                        return r().createElement(
                            'div',
                            { className: Ve.base },
                            n.map((e, o) => {
                                const i = e.isLevelAchieved && e.isCurrentLevel && o === s - 1,
                                    l = o === (null == a ? void 0 : a.idx) || !1,
                                    c = ((e, u, t) =>
                                        (e && !u) || t ? Dt.Completed : !e && u ? Dt.Current : Dt.NotSelected)(
                                        e.isLevelAchieved,
                                        l,
                                        i,
                                    );
                                return r().createElement(
                                    'div',
                                    { key: o, className: B()(Ve.levelColumn) },
                                    r().createElement(
                                        'div',
                                        { className: Ve.header },
                                        r().createElement(
                                            Xe,
                                            {
                                                header:
                                                    c === Dt.Completed
                                                        ? Ft.tooltip.completedLevel.header()
                                                        : Ft.tooltip.nextLevel.header(),
                                                body:
                                                    c === Dt.Completed
                                                        ? Ft.tooltip.completedLevel.body()
                                                        : Ft.tooltip.nextLevel.body(),
                                                isEnabled: c !== Dt.Current,
                                            },
                                            r().createElement('div', {
                                                className: B()(Ve.columnHeader, Ve[`columnHeader__${c}`]),
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ve.column },
                                        r().createElement(
                                            dt,
                                            At({}, e, {
                                                isFirst: 0 === o,
                                                isLast: o === n.length - 1,
                                                isCurrentLevel: l,
                                                rewardsGroup: u.computes.getLevelRewardsGroup(o),
                                                onGotoStore: t.onGotoStore,
                                                isLastLevelCompleted: i,
                                                onSelectVehicleDiscount: t.onSelectVehicleDiscount,
                                            }),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Bt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Ct = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let pt, ht;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(pt || (pt = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ht || (ht = {})));
                const bt = ({ size: e = pt.Default, classMix: u }) =>
                        r().createElement('div', { className: B()(Ct.background, Ct[`background__${e}`], u) }),
                    vt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    wt = ({ size: e }) => {
                        const u = B()(vt.base, vt[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    ft = {
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
                    St = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: s }) => {
                            const o = B()(
                                    ft.base,
                                    ft[`base__${e}`],
                                    t && ft.base__disabled,
                                    a && ft.base__finished,
                                    s && ft.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return r().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                r().createElement('div', { className: ft.pattern }),
                                r().createElement('div', { className: ft.gradient }),
                                i && r().createElement(wt, { size: e }),
                            );
                        },
                    ),
                    Rt = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let xt, Tt;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(xt || (xt = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Tt || (Tt = {})));
                const yt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Lt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Mt = (e) => ({ transitionDuration: `${e}ms` }),
                    Pt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = o < a,
                                m = (0, n.useState)(xt.Idle),
                                _ = m[0],
                                d = m[1],
                                A = _ === xt.End,
                                F = _ === xt.Idle,
                                D = _ === xt.Grow,
                                g = _ === xt.Shrink,
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                ),
                                p = (0, n.useCallback)(
                                    (e, u) =>
                                        Rt(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(xt.Grow, u)
                                        : D
                                          ? p(xt.Shrink, e)
                                          : g
                                            ? p(xt.End, e)
                                            : void (A && i && i());
                            }, [p, t, A, D, F, g, i, u, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Mt(e), yt(E)), [E, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Mt(e), yt(E)), [E, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Lt(E, a), Mt(e)), [a, E, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, Lt(E, a), Mt(e)),
                                    [a, E, o, e],
                                );
                            if (A) return null;
                            const f = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: F ? v : w, className: f },
                                r().createElement(
                                    'div',
                                    { style: g ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(wt, { size: s }),
                                ),
                            );
                        },
                    ),
                    Ot = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                d = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (e === xt.Shrink && d(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(St, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: _ ? D : F,
                                }),
                                t >= 0 &&
                                    r().createElement(Pt, {
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
                    kt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                E = (0, n.useState)(Tt.Idle),
                                m = E[0],
                                _ = E[1],
                                d = m === Tt.In,
                                A = m === Tt.End,
                                F = m === Tt.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (F && !t)
                                    return Rt(() => {
                                        D(Tt.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (d)
                                        return Rt(() => {
                                            (i && i(), D(Tt.End));
                                        }, e + u);
                                }, [D, d, i, u, e]));
                            const g = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      r().createElement(
                                          'div',
                                          { style: F ? g : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(wt, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Nt = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, n.useMemo)(
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
                                r().createElement(St, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    r().createElement(kt, {
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
                    It = ['onComplete', 'onEndAnimation'];
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const Gt = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, It);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case ht.Simple:
                                return r().createElement(Nt, Ht({}, a, { onEndAnimation: l, isComplete: o }));
                            case ht.Growing:
                                return r().createElement(Ot, Ht({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Ut = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(St, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    $t = ['onEndAnimation'];
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const jt = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, $t);
                    const a = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = o),
                        r().createElement(Gt, Wt({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Xt = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return r().createElement(Ut, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(jt, c)
                                : r().createElement(Gt, zt({ key: `${a}-${u}` }, c));
                        },
                    ),
                    Vt = (e) => ({
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
                    Yt = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
                        delta: {
                            color: '#c2ffff',
                            shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
                        },
                    },
                    qt = (e, u, t) => ('number' == typeof t ? (Bt(0, u, t) / u) * 100 : e),
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
                    Qt = {
                        freezed: !1,
                        withStack: !1,
                        type: ht.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Zt = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Kt,
                            size: t = pt.Default,
                            animationSettings: a = Qt,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: E,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: d,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Bt(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: qt(n, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return r().createElement(
                                'div',
                                { className: B()(Ct.base, Ct[`base__${t}`]), style: Vt(u) },
                                !o && r().createElement(bt, { size: t, classMix: i }),
                                r().createElement(Xt, {
                                    size: t,
                                    lineRef: E,
                                    disabled: s,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    Jt = ['api', 'value', 'maxValue', 'theme'];
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const un = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    tn = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            s = void 0 === a ? 100 : a,
                            o = e.theme,
                            i = void 0 === o ? Kt : o,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Jt);
                        const c = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            _ = Bt(0, t, s) / s,
                            d = (0, n.useCallback)(
                                (e) => {
                                    (m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, n) => {
                                            const r = t.offsetWidth - n.offsetWidth,
                                                a = e - un(t, u),
                                                s = Bt(0, r, a);
                                            n.style.left = `${s}px`;
                                        })(e, c.current, m.current),
                                        E.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: n, line: r },
                                            ) => {
                                                const a = Math.max(0, Math.floor(n.offsetWidth * t) - 8e3),
                                                    s = e - un(n, u),
                                                    o = Bt(0, a, s);
                                                r.style.left = `${o}px`;
                                            })(e, _, { line: E.current, container: c.current }));
                                },
                                [_],
                            ),
                            A = (0, n.useMemo)(() => Vt(i), [i]);
                        return (
                            (u.current.update = d),
                            r().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                r().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    r().createElement(
                                        'div',
                                        {
                                            style: A,
                                            className: B()(
                                                'OptimizedProgressBar_background_ce',
                                                l.progressBarBackgroundClassMix,
                                            ),
                                            ref: m,
                                        },
                                        r().createElement(bt, {
                                            size: l.size,
                                            classMix: l.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    r().createElement(
                                        Zt,
                                        en({}, l, {
                                            lineRef: E,
                                            value: t,
                                            theme: i,
                                            maxValue: s,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    nn = Object.assign({}, Qt, {
                        withStack: !0,
                        type: ht.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    rn = {
                        [h.ExtraSmall]: { columnWidth: 84, columnMargin: 2 },
                        [h.Small]: { columnWidth: 100, columnMargin: 2 },
                        [h.Medium]: { columnWidth: 130, columnMargin: 2 },
                        [h.Large]: { columnWidth: 158, columnMargin: 2 },
                        [h.ExtraLarge]: { columnWidth: 170, columnMargin: 2 },
                    },
                    an = (e, u) => (u < 0 ? 0 : e[u].maxPoints),
                    sn = 'Progression_numberContainer_23',
                    on = 'Progression_line_b8',
                    ln = R.strings.ny.rewardsView.tooltip,
                    cn = (0, n.memo)(({ currentLevel: e, levels: u, points: t }) => {
                        const a = f().mediaSize,
                            s = (0, n.useRef)({ update: () => {} }),
                            o = u[u.length - 1].maxPoints,
                            i = o === t,
                            l = rn[a],
                            c = l.columnWidth / 2 + l.columnMargin,
                            E = l.columnWidth * u.length + l.columnMargin * u.length,
                            m = ((e, u, t) => {
                                let n = 0;
                                const r = an(t, u - 2),
                                    a = an(t, t.length - 1) / t.length;
                                return (
                                    t.forEach(({ maxPoints: t }, s) => {
                                        s < u &&
                                            (n += ((e, u, t, n) => (e >= u ? n : (n / (u - t)) * (e - t)))(e, t, r, a));
                                    }),
                                    n
                                );
                            })(t, e, u),
                            _ = (E * m) / o - 25;
                        return r().createElement(
                            'div',
                            { className: 'Progression_base_88' },
                            r().createElement(
                                'div',
                                { className: 'Progression_container_85' },
                                r().createElement(
                                    'div',
                                    {
                                        className: 'Progression_progressLineContainer_29',
                                        style: { transform: `translateX(-${c}rem)` },
                                    },
                                    u.map((u, t) => {
                                        return r().createElement(
                                            'div',
                                            {
                                                key: u.number,
                                                className: B()(
                                                    'Progression_point_44',
                                                    u.number + 1 === e && 'Progression_point__current_1f',
                                                ),
                                                style: {
                                                    transform: `translateX(${(t + 1) * (l.columnWidth + l.columnMargin)}rem)`,
                                                },
                                            },
                                            r().createElement(
                                                Xe,
                                                {
                                                    header: ln.nextLevel.header(),
                                                    body: ln.nextLevel.body(),
                                                    isEnabled: u.number + 1 >= e,
                                                },
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: B()(
                                                            sn,
                                                            u.number + 1 > e &&
                                                                'Progression_numberContainer__disabled_46',
                                                        ),
                                                    },
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            className: B()(
                                                                'Progression_numberBg_07',
                                                                u.number + 1 === e &&
                                                                    'Progression_numberBg__current_e3',
                                                            ),
                                                        },
                                                        u.number + 1 === e &&
                                                            r().createElement('div', {
                                                                className: 'Progression_currentNumberShadow_ea',
                                                            }),
                                                    ),
                                                    r().createElement(De, {
                                                        className: 'Progression_number_00',
                                                        text: String(
                                                            ((n = u.number + 1),
                                                            at
                                                                ? `${n}`
                                                                : (function (e) {
                                                                      let u = '';
                                                                      for (let t = rt.length - 1; t >= 0; t--)
                                                                          for (; e >= rt[t]; )
                                                                              ((u += nt[t]), (e -= rt[t]));
                                                                      return u;
                                                                  })(n)),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                            r().createElement('div', {
                                                className: B()(on, 'Progression_line__top_8e'),
                                            }),
                                            r().createElement('div', {
                                                className: B()(on, 'Progression_line__bottom_c0'),
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: B()(sn, 'Progression_numberContainer__bottom_f0') },
                                                r().createElement(De, { text: String(u.maxPoints) }),
                                            ),
                                        );
                                        var n;
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'Progression_barWrapper_58' },
                                        !i &&
                                            r().createElement(
                                                'div',
                                                {
                                                    className: B()(sn, 'Progression_currentValue_37'),
                                                    style: { transform: `translateX(${_}rem)` },
                                                },
                                                r().createElement(De, { text: String(t) }),
                                            ),
                                        r().createElement(tn, {
                                            theme: Yt,
                                            animationSettings: nn,
                                            value: m,
                                            maxValue: o,
                                            api: s,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    En = R.strings.ny.progressView,
                    mn = (0, Re.observer)(() => {
                        const e = Ie(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            a = n.progressionPoints,
                            s = n.progressionLevel,
                            o = u.computes.getProgressionLevels(),
                            i = f().mediaSize,
                            l = rn[i],
                            c = l.columnWidth * o.length + l.columnMargin * o.length;
                        return (
                            Se(ve.n.ESCAPE, () => t.onClose()),
                            r().createElement(
                                'div',
                                { className: 'App_base_39' },
                                r().createElement('div', { className: 'App_bg_dd' }),
                                r().createElement(
                                    'div',
                                    { className: 'App_contentWrapper_e2' },
                                    r().createElement(
                                        'div',
                                        { className: 'App_content_83' },
                                        r().createElement(
                                            'div',
                                            { className: 'App_titleWrapper_d9' },
                                            r().createElement(De, { className: 'App_titleText_4b', text: En.title() }),
                                            r().createElement(De, {
                                                className: 'App_subTitleText_78',
                                                text: En.subtitle(),
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'App_progressionWrapper_76' },
                                            r().createElement(
                                                'div',
                                                {
                                                    className: 'App_progressionContainer_8b',
                                                    style: { width: `${c}rem` },
                                                },
                                                r().createElement(cn, { currentLevel: s + 1, points: a, levels: o }),
                                            ),
                                        ),
                                        r().createElement(gt, null),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'App_closeBtnWrapper_ea' },
                                    r().createElement(be, {
                                        caption: En.closeBtn(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.onClose,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(Ne, null, r().createElement(O, null, r().createElement(mn, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 1585),
        (() => {
            var e = { 1585: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(9047));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
