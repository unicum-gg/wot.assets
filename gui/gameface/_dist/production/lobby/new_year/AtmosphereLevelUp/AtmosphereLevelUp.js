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
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => a }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
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
                                            i = o[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
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
                        graphicsQuality: () => o,
                    }));
                var n = t(527);
                function r(e = 'px') {
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
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
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
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
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
                                o = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
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
                    Sw: () => a.Z,
                    B3: () => c,
                    Z5: () => o,
                    B0: () => s,
                    wU: () => w,
                    ry: () => C,
                    Eu: () => g,
                    SW: () => v,
                    P3: () => b,
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
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        function o(e) {
                                            D(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(a, n, r, o, i, 'throw', e);
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
                    h = (e, u) => {
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
                    p = () => h(s.CLOSE),
                    v = () => h(s.POP_OVER, { on: !1 }),
                    b = (e, u, t, n, r = R.invalid('resId'), a) => {
                        const o = A.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            E = i.width,
                            _ = i.height,
                            m = {
                                x: A.O.view.pxToRem(l) + o.x,
                                y: A.O.view.pxToRem(c) + o.y,
                                width: A.O.view.pxToRem(E),
                                height: A.O.view.pxToRem(_),
                            };
                        h(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: u,
                            bbox: B(m),
                            on: !0,
                            args: a,
                        });
                    },
                    w = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    f = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var S = t(7572);
                const T = r.instance,
                    x = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
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
                        ClickOutsideManager: T,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = x;
            },
            65: (e, u, t) => {
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
                var o = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
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
                })(s || (s = {}));
                const c = o.O.client.getSize('rem'),
                    E = c.width,
                    _ = c.height,
                    m = Object.assign({ width: E, height: _ }, l(E, _, i)),
                    d = (0, n.createContext)(m),
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
                            o = r.extraLarge,
                            i = r.large,
                            s = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            C = r.largeHeight,
                            g = r.mediumHeight,
                            h = r.smallHeight,
                            p = r.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return a(u, t, v);
                            if (t.largeWidth && _) return a(u, t, v);
                            if (t.mediumWidth && m) return a(u, t, v);
                            if (t.smallWidth && F) return a(u, t, v);
                            if (t.extraSmallWidth && D) return a(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && p) return u;
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
                        s = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(u);
                            s(Object.assign({ width: t, height: n }, l(t, n, i)));
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
                var B = t(6483),
                    C = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let p, v, b;
                var w;
                (((w = p || (p = {}))[(w.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                    (w[(w.Small = i.small.width)] = 'Small'),
                    (w[(w.Medium = i.medium.width)] = 'Medium'),
                    (w[(w.Large = i.large.width)] = 'Large'),
                    (w[(w.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(b || (b = {})));
                const f = () => {
                        const e = (0, n.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                            a = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL,
                        [p.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [p.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [p.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
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
                            o = a.mediaWidth,
                            i = a.mediaHeight,
                            s = a.mediaSize;
                        return r().createElement('div', T({ className: C()(t, x[o], y[i], L[s]) }, n), u);
                    },
                    O = ['children'],
                    N = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, O);
                        return r().createElement(D, null, r().createElement(M, t, u));
                    };
                var P = t(493),
                    I = t.n(P),
                    k = t(3403);
                const H = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
                let U;
                function G(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(U || (U = {}));
                const W = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    $ = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    X = (e, u, t = U.left) => e.split(u).reduce(t === U.left ? W : $, []),
                    j = (() => {
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
                    Y = ['zh_cn', 'zh_sg', 'zh_tw'];
                let V;
                var q;
                (((q = V || (V = {})).SHORT_DATE = 'short-date'),
                    (q.SHORT_TIME = 'short-time'),
                    (q.SHORT_DATE_TIME = 'short-date-time'),
                    (q.FULL_DATE = 'full-date'),
                    (q.FULL_DATE_TIME = 'full-date-time'),
                    (q.MONTH = 'month'),
                    (q.MONTH_DATE = 'month-date'),
                    (q.DATE_MONTH = 'date-month'),
                    (q.MONTH_YEAR = 'month-year'),
                    (q.WEEK_DAY = 'week-day'),
                    (q.WEEK_DAY_TIME = 'week-day-time'),
                    (q.YEAR = 'year'),
                    (q.DATE_YEAR = 'date-year'));
                var z = t(4179);
                let K;
                (Date.now(),
                    z.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(K || (K = {})),
                    z.Sw.instance);
                const Q = (e) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            u.current = e;
                        }, [e]),
                        u.current
                    );
                };
                var Z = t(5521);
                const J = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ee(e = Z.n.NONE, u = J, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                function ue(e) {
                    engine.call('PlaySound', e);
                }
                const te = {
                        playHighlight() {
                            ue('highlight');
                        },
                        playClick() {
                            ue('play');
                        },
                        playYes() {
                            ue('yes1');
                        },
                    },
                    ne = {
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
                let re, ae;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(re || (re = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(ae || (ae = {})));
                const oe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        B = D[0],
                        g = D[1],
                        h = (0, n.useState)(!1),
                        p = h[0],
                        v = h[1],
                        b = (0, n.useState)(!1),
                        w = b[0],
                        f = b[1],
                        S = (0, n.useCallback)(() => {
                            o || (F.current && (F.current.focus(), g(!0)));
                        }, [o]),
                        T = (0, n.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [B],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                o || (null !== s && ue(s), c && c(e), f(!0));
                            },
                            [o, s, c],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (m && m(e), v(!1));
                            },
                            [o, m],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                o || (null !== l && ue(l), _ && _(e), t && S(), v(!0));
                            },
                            [o, l, _, S, t],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                o || (d && d(e), v(!1));
                            },
                            [o, d],
                        ),
                        P = C()(
                            ne.base,
                            ne[`base__${a}`],
                            {
                                [ne.base__disabled]: o,
                                [ne[`base__${u}`]]: u,
                                [ne.base__focus]: B,
                                [ne.base__highlightActive]: p,
                                [ne.base__firstHover]: w,
                            },
                            i,
                        ),
                        I = C()(ne.state, ne.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: P,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            a !== re.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ne.back }),
                                    r().createElement('span', { className: ne.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: I },
                                r().createElement('span', { className: ne.stateDisabled }),
                                r().createElement('span', { className: ne.stateHighlightHover }),
                                r().createElement('span', { className: ne.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ne.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                oe.defaultProps = { type: re.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ie = (0, n.memo)(oe),
                    se = {
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
                    le = [
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
                class Ee extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ue(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ue(this.props.soundClick));
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
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
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
                                })(e, le)),
                            m = C()(se.base, se[`base__${o}`], se[`base__${a}`], null == i ? void 0 : i.base),
                            d = C()(se.icon, se[`icon__${o}`], se[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = C()(se.glow, null == i ? void 0 : i.glow),
                            F = C()(se.caption, se[`caption__${o}`], null == i ? void 0 : i.caption),
                            D = C()(se.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            ce(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== o && r().createElement('div', { className: se.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                Ee.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var _e = t(9887),
                    me = t.n(_e);
                const de = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ae = (e) => e.includes('_') && ((e) => de.includes(e))(e.split('_').at(-1)),
                    Fe = [p.ExtraLarge, p.Large, p.Medium, p.Small, p.ExtraSmall],
                    De = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (Ae(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = Fe.indexOf(u),
                                    o = (-1 !== a ? de.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return ((t[r] = void 0 !== i ? i : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => de.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    Be = (e, u = De) => {
                        const t = (
                            (e, u = De) =>
                            (t) => {
                                const a = f().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, a), [t, a]);
                                return r().createElement(e, o);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => Ae(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    Ce = {
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
                Object.keys(me());
                const pe = {
                        XL: { mt: Ce.mt__XL, mr: Ce.mr__XL, mb: Ce.mb__XL, ml: Ce.ml__XL },
                        LG: { mt: Ce.mt__LG, mr: Ce.mr__LG, mb: Ce.mb__LG, ml: Ce.ml__LG },
                        MDp: { mt: Ce.mt__MDp, mr: Ce.mr__MDp, mb: Ce.mb__MDp, ml: Ce.ml__MDp },
                        MD: { mt: Ce.mt__MD, mr: Ce.mr__MD, mb: Ce.mb__MD, ml: Ce.ml__MD },
                        SMp: { mt: Ce.mt__SMp, mr: Ce.mr__SMp, mb: Ce.mb__SMp, ml: Ce.ml__SMp },
                        SM: { mt: Ce.mt__SM, mr: Ce.mr__SM, mb: Ce.mb__SM, ml: Ce.ml__SM },
                        XS: { mt: Ce.mt__XS, mr: Ce.mr__XS, mb: Ce.mb__XS, ml: Ce.ml__XS },
                    },
                    ve = (Object.keys(pe), ['mt', 'mr', 'mb', 'ml']),
                    be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    we = Be((e) => {
                        let u = e.className,
                            t = e.width,
                            a = e.height,
                            o = e.m,
                            i = e.mt,
                            s = void 0 === i ? o : i,
                            l = e.mr,
                            c = void 0 === l ? o : l,
                            E = e.mb,
                            _ = void 0 === E ? o : E,
                            m = e.ml,
                            d = void 0 === m ? o : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            h = e.center,
                            p = e.flexEnd,
                            v = e.spaceBetween,
                            b = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : w,
                            S = e.alignItems,
                            R = void 0 === S ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : S,
                            T = e.alignSelf,
                            x = e.wrap,
                            y = e.flexWrap,
                            L = void 0 === y ? (x ? 'wrap' : void 0) : y,
                            M = e.grow,
                            O = e.shrink,
                            N = e.flex,
                            P = void 0 === N ? (M || O ? `${M ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : N,
                            I = e.style,
                            k = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ge);
                        const U = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        ve.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(pe[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ve.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[be[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: P,
                                        alignSelf: T,
                                        display: B || R ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: L,
                                        justifyContent: f,
                                        alignItems: R,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, a, s, c, _, d, I, P, T, B, L, f, R]),
                            G = U.computedStyle,
                            W = U.computedClassNames;
                        return r().createElement('div', he({ className: C()(Ce.base, ...W, u), style: G }, H), k);
                    }),
                    fe = ({ binding: e, text: u = '', classMix: t, alignment: a = U.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      r().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = U.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Y.includes(t)
                                                                ? j(e)
                                                                : ((e, u = U.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          X(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(X(e, n, U.left))),
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
                var Se = t(3532),
                    Re = t.n(Se);
                const Te = {
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
                    xe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                Object.keys(me());
                const Le = Object.keys(Re()),
                    Me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Oe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ne = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Pe =
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
                            'heading-H28': Oe,
                            'heading-H24': Oe,
                            'heading-H24R': Oe,
                            'heading-H22': Oe,
                            'heading-H20R': Oe,
                            'heading-H18': Oe,
                            'heading-H15': Ne,
                            'heading-H14': Ne,
                            'paragraph-P24': Oe,
                            'paragraph-P18': Oe,
                            'paragraph-P16': Oe,
                            'paragraph-P14': Ne,
                            'paragraph-P12': Ne,
                            'paragraph-P10': Ne,
                        }),
                    Ie =
                        (Object.keys(Pe),
                        (e) =>
                            e
                                ? ((e) => Le.includes(e))(e)
                                    ? { colorClassName: Te[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ke = Be((e) => {
                        let u = e.text,
                            t = e.variant,
                            a = e.className,
                            o = e.color,
                            i = e.m,
                            s = e.mt,
                            l = void 0 === s ? i : s,
                            c = e.mr,
                            E = void 0 === c ? i : c,
                            _ = e.mb,
                            m = void 0 === _ ? i : _,
                            d = e.ml,
                            A = void 0 === d ? i : d,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, xe);
                        const g = (0, n.useMemo)(() => {
                                const e = Ie(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, o]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return r().createElement(
                            we,
                            ye(
                                {
                                    className: C()(Te.base, t && Te[t], p, a),
                                    style: h,
                                    mt: !0 === l ? Pe[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? Pe[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? Pe[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? Pe[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? r().createElement(fe, ye({}, D, { text: u })) : u,
                        );
                    }),
                    He = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Ge(e) {
                    let u = '';
                    for (let t = Ue.length - 1; t >= 0; t--) for (; e >= Ue[t]; ) ((u += He[t]), (e -= Ue[t]));
                    return u;
                }
                const We = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let $e, Xe, je, Ye, Ve, qe, ze;
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
                        (e.LootBoxToken = 'lootBoxToken'));
                })($e || ($e = {})),
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
                    })(Xe || (Xe = {})),
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
                    })(je || (je = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Ye || (Ye = {})),
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
                    })(Ve || (Ve = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(qe || (qe = {})),
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
                    })(ze || (ze = {})));
                const Ke = [
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
                function Qe(e) {
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
                const Ze = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Je = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ke);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Ze(t, d, { isMouseEvent: !0, on: !0, arguments: Qe(r) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, d, r, v, C]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Ze(t, d, { on: !1 }, v),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, v, g]),
                            f = (0, n.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current.hideTimerId;
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
                                                          ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          a && a(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (w(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && w(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && w(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    eu = ['children'];
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const tu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, eu);
                        return r().createElement(
                            Je,
                            uu(
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
                    nu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const au = R.views.common.tooltip_window.simple_tooltip_content,
                    ou = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            o = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, nu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: a, note: o, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, o, s]);
                        return r().createElement(
                            Je,
                            ru(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? au.SimpleTooltipHtmlContent('resId') : au.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const su = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(ou, u, n);
                    const a = u.contentId,
                        o = u.args,
                        i = null == o ? void 0 : o.contentId;
                    return a || i
                        ? r().createElement(Je, iu({}, u, { contentId: a || i }), n)
                        : r().createElement(tu, u, n);
                };
                class lu extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? z.B3.GOLD : z.B3.INTEGRAL;
                        const u = z.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                lu.defaultProps = { format: 'integral' };
                const cu = [
                        $e.Items,
                        $e.Equipment,
                        $e.Xp,
                        $e.XpFactor,
                        $e.Blueprints,
                        $e.BlueprintsAny,
                        $e.Goodies,
                        $e.Berths,
                        $e.Slots,
                        $e.Tokens,
                        $e.CrewSkins,
                        $e.CrewBooks,
                        $e.Customizations,
                        $e.CreditsFactor,
                        $e.TankmenXp,
                        $e.TankmenXpFactor,
                        $e.FreeXpFactor,
                        $e.BattleToken,
                        $e.Entitlements,
                        $e.PremiumUniversal,
                        $e.NaturalCover,
                        $e.BpCoin,
                        $e.BattlePassSelectToken,
                        $e.BattlaPassFinalAchievement,
                        $e.BattleBadge,
                        $e.BonusX5,
                        $e.CrewBonusX3,
                        $e.NewYearFillers,
                        $e.NewYearInvoice,
                        $e.EpicSelectToken,
                        $e.Comp7TokenWeeklyReward,
                        $e.Comp7TokenCouponReward,
                        $e.BattleBoosterGift,
                        $e.NewYearFillers,
                        $e.NewYearInvoice,
                        $e.LootBoxToken,
                        $e.SelectableBonus,
                    ],
                    Eu = [$e.Gold, $e.Credits, $e.Crystal, $e.FreeXp, $e.NewYearToyFragments],
                    _u = [$e.BattlePassPoints],
                    mu = [$e.PremiumPlus, $e.Premium],
                    du = (e) =>
                        cu.includes(e)
                            ? Ye.MULTI
                            : Eu.includes(e)
                              ? Ye.CURRENCY
                              : _u.includes(e)
                                ? Ye.NUMBER
                                : mu.includes(e)
                                  ? Ye.PREMIUM_PLUS
                                  : Ye.STRING,
                    Au = ['engravings', 'backgrounds'],
                    Fu = ['engraving', 'background'],
                    Du = (e, u = je.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            s = ((e) => {
                                switch (e) {
                                    case je.S600x450:
                                        return 'c_600x450';
                                    case je.S400x300:
                                        return 'c_400x300';
                                    case je.S296x222:
                                        return 'c_296x222';
                                    case je.S232x174:
                                        return 'c_232x174';
                                    case je.Big:
                                        return 'c_80x80';
                                    case je.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case je.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case je.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'entitlements':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'lootBoxToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Au[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(Fu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${s}.${a}`;
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
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${s}.${a}`;
                            case 'newYearAlbumsAccess':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.albumsAccess`;
                            case 'nyFillers':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.fillers`;
                            case 'nyToyFragments':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.shards`;
                            case 'newYearSlot':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Bu = (e, u, t) => {
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
                    Cu = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Ye.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Ye.CURRENCY:
                            case Ye.NUMBER:
                                return r().createElement(lu, { format: 'integral', value: Number(e) });
                            case Ye.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
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
                    hu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = je.Big,
                        special: a,
                        value: o,
                        valueType: i,
                        style: s,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ve.BATTLE_BOOSTER:
                                    case Ve.BATTLE_BOOSTER_REPLACE:
                                        return qe.BATTLE_BOOSTER;
                                }
                            })(a),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ve.BATTLE_BOOSTER:
                                        return ze.BATTLE_BOOSTER;
                                    case Ve.BATTLE_BOOSTER_REPLACE:
                                        return ze.BATTLE_BOOSTER_REPLACE;
                                    case Ve.BUILT_IN_EQUIPMENT:
                                        return ze.BUILT_IN_EQUIPMENT;
                                    case Ve.EQUIPMENT_PLUS:
                                        return ze.EQUIPMENT_PLUS;
                                    case Ve.EQUIPMENT_TROPHY_BASIC:
                                        return ze.EQUIPMENT_TROPHY_BASIC;
                                    case Ve.EQUIPMENT_TROPHY_UPGRADED:
                                        return ze.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ze.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ze.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ze.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_1:
                                        return ze.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_2:
                                        return ze.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_3:
                                        return ze.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_4:
                                        return ze.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = Cu(o, i);
                        return r().createElement(
                            'div',
                            { className: C()(gu.base, gu[`base__${n}`], l), style: s },
                            r().createElement(
                                su,
                                { tooltipArgs: E, className: gu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: C()(gu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: C()(gu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: C()(gu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: C()(gu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    gu.info,
                                                    gu[`info__${e}`],
                                                    i === Ye.MULTI && gu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    su,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: C()(gu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let pu, vu, bu, wu, fu;
                (!(function (e) {
                    ((e[(e.CITY = 0)] = 'CITY'),
                        (e[(e.TASKS = 1)] = 'TASKS'),
                        (e[(e.MACHINE = 2)] = 'MACHINE'),
                        (e[(e.REWARDS = 3)] = 'REWARDS'),
                        (e[(e.PET = 4)] = 'PET'),
                        (e[(e.INFO = 5)] = 'INFO'));
                })(pu || (pu = {})),
                    (function (e) {
                        ((e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.TO_GLADE_WITH_INTRO = 2)] = 'TO_GLADE_WITH_INTRO'),
                            (e[(e.WITH_SWITCHING_OBJS = 3)] = 'WITH_SWITCHING_OBJS'));
                    })(vu || (vu = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge'));
                    })(bu || (bu = {})),
                    (function (e) {
                        ((e.Big = 'big'), (e.Small = 'small'));
                    })(wu || (wu = {})),
                    (function (e) {
                        ((e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB'));
                    })(fu || (fu = {})));
                const Su = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'],
                    Ru = (e) => Su[e] || '',
                    Tu = () => {},
                    xu =
                        (pu.CITY,
                        pu.PET,
                        pu.MACHINE,
                        pu.TASKS,
                        (e) =>
                            `R.images.gui.maps.icons.sequence.sun_shine_big.godrays_${e.toString().padStart(5, '0')}.png`),
                    yu = 'AnimationRewards_reward_5a';
                let Lu;
                !(function (e) {
                    ((e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(Lu || (Lu = {}));
                let Mu;
                !(function (e) {
                    ((e.Small = 'extraSmall'), (e.Medium = 'medium'), (e.Large = 'large'));
                })(Mu || (Mu = {}));
                const Ou = (e) => 'variadicDiscount' === e.name,
                    Nu = (e) => 'vehicles' === e.name;
                let Pu, Iu, ku, Hu;
                function Uu() {
                    return (
                        (Uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Uu.apply(this, arguments)
                    );
                }
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Big = 'big'),
                        (e.ExtraBig = 'extraBig'),
                        (e.Huge = 'huge'));
                })(Pu || (Pu = {})),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })(Iu || (Iu = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(ku || (ku = {})),
                    (function (e) {
                        ((e.ExtraSlot = 'ny22:extraSlot'),
                            (e.ToyFragments = 'ny22ToyFragments'),
                            (e.Tman = 'tmanToken'),
                            (e.AchievementReward = 'dossier_achievement'),
                            (e.Customizations = 'customizations'),
                            (e.VariadicDiscount = 'variadicDiscount'),
                            (e.MarketplaceUnlock = 'ny25_marketplace_unlock'),
                            (e.LootBoxToken = 'lootBoxToken'));
                    })(Hu || (Hu = {})));
                const Gu = 150,
                    Wu = ({ items: e, animationDelayStart: u = 0, maxLength: t = 0, hasSounds: a = !1 }) => {
                        const o = (() => {
                                const e = (0, n.useContext)(d);
                                switch (!0) {
                                    case e.extraSmall:
                                        return Lu.Tiny;
                                    case e.small:
                                        return Lu.Small;
                                    case e.medium:
                                        return Lu.Medium;
                                    case e.large:
                                        return Lu.Large;
                                    case e.extraLarge:
                                        return Lu.Huge;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Lu.Tiny);
                                }
                            })(),
                            i =
                                e.length > t
                                    ? ((e, u) => {
                                          const t = [...e],
                                              n = t.splice(u);
                                          return [t, n];
                                      })(e, t - 1)
                                    : [e, []],
                            s = i[0],
                            l = i[1],
                            c = s.length + Number(Boolean(l.length)),
                            E = {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { showedCount: t - 1 },
                            },
                            _ = o === Lu.Tiny || o === Lu.Small ? Pu.Small : Pu.Big;
                        return (
                            (0, n.useEffect)(() => {
                                if (!a) return;
                                let e = 0;
                                const t = setTimeout(() => {
                                    let u = 0;
                                    e = window.setInterval(() => {
                                        (ue(R.sounds.gui_gift_system_newyear_reward_appear_small()),
                                            u++,
                                            u >= c && clearTimeout(e));
                                    }, Gu);
                                }, u - 300);
                                return () => {
                                    (clearTimeout(t), clearInterval(e));
                                };
                            }, [c, u, a]),
                            r().createElement(
                                'div',
                                { className: 'AnimationRewards_base_c3' },
                                s.map((e, t) =>
                                    r().createElement(
                                        'div',
                                        { className: yu, key: t, style: { animationDelay: `${u + Gu * t}ms` } },
                                        r().createElement(hu, Uu({ size: _ }, e)),
                                    ),
                                ),
                                l.length > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: yu, style: { animationDelay: `${u + Gu * s.length}ms` } },
                                        r().createElement(hu, {
                                            name: 'more',
                                            image: `R.images.gui.maps.icons.quests.bonuses.${_}.default`,
                                            size: _,
                                            value: G(R.strings.tooltips.quests.awards.additional.bottom(), {
                                                count: l.length,
                                            }),
                                            tooltipArgs: E,
                                        }),
                                    ),
                            )
                        );
                    },
                    $u = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                    ];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const ju = (0, n.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            a = e.getSrcByFrame,
                            o = e.frameCount,
                            i = e.onAnimate,
                            s = void 0 === i ? Tu : i,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = e.initialFrameIndex,
                            _ = void 0 === E ? 0 : E,
                            m = e.loop,
                            d = void 0 === m || m,
                            A = e.state,
                            F = void 0 === A ? 'play' : A,
                            D = e.onAnimationComplete,
                            B = void 0 === D ? Tu : D,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, $u);
                        const g = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = g.current;
                                if (!e) return;
                                const n = o - 1,
                                    r = e.getContext('2d'),
                                    i = (n) => {
                                        (r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, u, t));
                                    };
                                if ('stop' === F) {
                                    const e = a(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => i(u);
                                    return (u.addEventListener('load', t), () => u.removeEventListener('load', t));
                                }
                                const l = ((e, u) => {
                                        const t = [];
                                        for (let n = 0; n < e; n++) {
                                            const e = new Image();
                                            ((e.src = u(n)), t.push(e));
                                        }
                                        return t;
                                    })(o, a),
                                    E = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return ((t += 1), t > e && (t = 0), u);
                                        };
                                    })(n, _),
                                    m = setInterval(() => {
                                        const e = E(),
                                            u = l[e];
                                        (i(l[e]), s(e, u), e === n && (B(), d || clearInterval(m)));
                                    }, c);
                                return () => clearInterval(m);
                            }, [o, c, a, t, _, d, s, B, F, u]),
                            r().createElement('canvas', Xu({}, C, { width: u, height: t, ref: g }))
                        );
                    }),
                    Yu = {
                        base: 'AtmosphereRewardScreen_base_63',
                        close: 'AtmosphereRewardScreen_close_e6',
                        fadeIn: 'AtmosphereRewardScreen_fadeIn_64',
                        header: 'AtmosphereRewardScreen_header_fc',
                        title: 'AtmosphereRewardScreen_title_67',
                        slideUp: 'AtmosphereRewardScreen_slideUp_f8',
                        subtitle: 'AtmosphereRewardScreen_subtitle_62',
                        showSubTitle: 'AtmosphereRewardScreen_showSubTitle_d6',
                        tapeContent: 'AtmosphereRewardScreen_tapeContent_e1',
                        slideBack: 'AtmosphereRewardScreen_slideBack_d2',
                        ribbon: 'AtmosphereRewardScreen_ribbon_4e',
                        ribbon__gold: 'AtmosphereRewardScreen_ribbon__gold_9e',
                        sunShineCanvas: 'AtmosphereRewardScreen_sunShineCanvas_cf',
                        sunRays: 'AtmosphereRewardScreen_sunRays_b1',
                        rotation: 'AtmosphereRewardScreen_rotation_e5',
                        fadeInSunRays: 'AtmosphereRewardScreen_fadeInSunRays_07',
                        hugeRewards: 'AtmosphereRewardScreen_hugeRewards_b3',
                        restRewardsTitle: 'AtmosphereRewardScreen_restRewardsTitle_2d',
                        rewards: 'AtmosphereRewardScreen_rewards_6e',
                        rewards__up: 'AtmosphereRewardScreen_rewards__up_37',
                        confirm: 'AtmosphereRewardScreen_confirm_7a',
                        confirm__visible: 'AtmosphereRewardScreen_confirm__visible_97',
                        banner: 'AtmosphereRewardScreen_banner_69',
                        bannerImage: 'AtmosphereRewardScreen_bannerImage_fe',
                        maxLevel: 'AtmosphereRewardScreen_maxLevel_c4',
                        bannerDescription: 'AtmosphereRewardScreen_bannerDescription_80',
                        bannerTitle: 'AtmosphereRewardScreen_bannerTitle_aa',
                        bannerText: 'AtmosphereRewardScreen_bannerText_b4',
                        buttons: 'AtmosphereRewardScreen_buttons_10',
                        confirmButton: 'AtmosphereRewardScreen_confirmButton_7a',
                        bump: 'AtmosphereRewardScreen_bump_83',
                        slideLeft: 'AtmosphereRewardScreen_slideLeft_3c',
                        slideRight: 'AtmosphereRewardScreen_slideRight_09',
                    },
                    Vu = ['children', 'tooltipType', 'wrap'],
                    qu = ['contentId'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                function Ku(e, u) {
                    if (null == e) return {};
                    var t,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                    return r;
                }
                let Qu;
                !(function (e) {
                    ((e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple'));
                })(Qu || (Qu = {}));
                const Zu = (e) => {
                        let u = e.children,
                            t = e.tooltipType,
                            n = e.wrap,
                            a = void 0 !== n && n,
                            o = Ku(e, Vu);
                        if (!o) return u;
                        const i = a && (o.isEnabled || void 0 === o.isEnabled) ? r().createElement('div', null, u) : u,
                            s = o.contentId,
                            l = Ku(o, qu);
                        switch (t) {
                            case Qu.Base:
                                return (
                                    !s && console.error('`contentId` field is required for a base Tooltip'),
                                    s ? r().createElement(Je, zu({}, l, { contentId: s }), i) : i
                                );
                            case Qu.Simple:
                                return r().createElement(ou, l, i);
                            case Qu.Backport:
                                return r().createElement(tu, l, i);
                            default:
                                return r().createElement(su, { tooltipArgs: o }, i);
                        }
                    },
                    Ju = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    et = {
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
                var ut;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(ut || (ut = {}));
                const tt = ['__left', '__right', '__top', '__bottom'],
                    nt =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: a = {} }, i) => {
                                const s = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    E = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    _ = E[0],
                                    m = E[1],
                                    d = (0, n.useCallback)(() => {
                                        (te.playClick(), o.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        te.playHighlight();
                                    }, []),
                                    F = C()(et.arrow, et[`arrow${tt[_]}`]);
                                Ju(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, n.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === s.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
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
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [s, c, t],
                                    ),
                                    B = (0, n.useCallback)(
                                        () => (
                                            o.O.view.freezeTextureBeforeResize(),
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
                                                                        (o.O.view.resize(e, u),
                                                                            m(window.decorator.directionType));
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
                                    (0, n.useImperativeHandle)(i, () => ({ updateSize: B })),
                                    Ju(() => {
                                        o.O.view.setInputPaddingsRem(58);
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
                                        })((0, z.Eu)());
                                        return (
                                            !u && e.promise.then(() => B()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [B, D, u]),
                                    r().createElement(
                                        'div',
                                        { className: et.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: et.decorator },
                                            r().createElement(
                                                'div',
                                                { className: et.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        ou,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: et.closeBtn,
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
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const at = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            a = e.direction,
                            o = void 0 === a ? ut.Top : a,
                            i = e.targetId,
                            s = e.args,
                            l = e.onClick,
                            c = e.children,
                            E = e.isEnabled,
                            _ = void 0 === E || E,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, nt);
                        const d = (0, n.useRef)(null),
                            A = (0, n.useCallback)(() => {
                                if ((0, z.wU)()) return (0, z.SW)();
                                d.current && (0, z.P3)(u, o, d.current, t, i, s);
                            }, [u, o, s, t, i]);
                        return r().createElement(
                            'div',
                            rt(
                                {
                                    ref: d,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            _ && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    ot = ['children'];
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const st = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ot);
                        return r().createElement(
                            at,
                            it(
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
                    lt = {
                        base: 'DiscountReward_base_34',
                        base__main: 'DiscountReward_base__main_75',
                        base__applied: 'DiscountReward_base__applied_01',
                        vehicleLevel: 'DiscountReward_vehicleLevel_d7',
                        vehicleLevel__main: 'DiscountReward_vehicleLevel__main_81',
                        discount: 'DiscountReward_discount_e8',
                        discount__main: 'DiscountReward_discount__main_e8',
                        applyButton: 'DiscountReward_applyButton_c3',
                        applyButton__main: 'DiscountReward_applyButton__main_dd',
                        applied: 'DiscountReward_applied_17',
                    },
                    ct = ({ reward: e, image: u, position: t, className: n, onSelectReward: a }) => {
                        const o = e.variadicID,
                            i = e.level,
                            s = e.discount,
                            l = e.selectedVehicle,
                            c = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: o },
                            E = R.strings.roman_numerals.$dyn(`n_${i}`),
                            _ = s > 0 ? `-${s}%` : '%';
                        return r().createElement(
                            st,
                            { args: c, isEnabled: !l },
                            r().createElement(
                                'div',
                                { className: C()(lt.base, l && lt.base__applied, lt[`base__${t}`]) },
                                r().createElement(
                                    'div',
                                    { className: C()(lt.vehicleLevel, lt[`vehicleLevel__${t}`]) },
                                    E,
                                ),
                                r().createElement('div', { className: C()(lt.discount, lt[`discount__${t}`]) }, _),
                                r().createElement('div', {
                                    className: n.image,
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                r().createElement(fe, {
                                    text: R.strings.ny.levelUpView.rewards.variadicDiscountTitle(),
                                    binding: { vehicleLevel: Ru(i) },
                                    classMix: n.label,
                                }),
                                r().createElement('div', { className: C()(lt.applied, lt[`applied__${t}`]) }),
                                r().createElement(
                                    ie,
                                    {
                                        mixClass: C()(lt.applyButton, lt[`applyButton__${t}`]),
                                        size: ae.small,
                                        type: re.main,
                                        onClick: a,
                                    },
                                    R.strings.ny.levelUpView.choseBtn.label(),
                                ),
                            ),
                        );
                    },
                    Et = ({ level: e, name: u, type: t, nation: n, isElite: a, className: o }) => {
                        const i = R.images.gui.maps.icons.vehicleTypes.big.$dyn(
                            `${((s = t), s.replace(/-/g, '_'))}${a ? '_elite' : ''}`,
                        );
                        var s;
                        const l = R.images.gui.maps.icons.seniorityAwards.rewards.vehicles.nations.$dyn(n);
                        return r().createElement(
                            'div',
                            { className: C()('VehicleInfo_base_e1', o) },
                            r().createElement('div', {
                                className: 'VehicleInfo_nation_79',
                                style: { backgroundImage: `url(${l})` },
                            }),
                            Ge(e),
                            r().createElement(
                                'div',
                                { className: 'VehicleInfo_type_53', lang: R.strings.settings.LANGUAGE_CODE() },
                                r().createElement('div', {
                                    className: 'VehicleInfo_ico_17',
                                    style: { backgroundImage: `url(${i})` },
                                }),
                            ),
                            u,
                        );
                    },
                    _t = {
                        base: 'HugeReward_base_f5',
                        bump: 'HugeReward_bump_b4',
                        base__main: 'HugeReward_base__main_39',
                        base__left: 'HugeReward_base__left_db',
                        slideLeft: 'HugeReward_slideLeft_17',
                        base__right: 'HugeReward_base__right_33',
                        slideRight: 'HugeReward_slideRight_c0',
                        hugeRewardImage: 'HugeReward_hugeRewardImage_c2',
                        hugeRewardText: 'HugeReward_hugeRewardText_54',
                        fadeIn: 'HugeReward_fadeIn_ff',
                        hugeRewardCount: 'HugeReward_hugeRewardCount_84',
                        slideBack: 'HugeReward_slideBack_21',
                        slideUp: 'HugeReward_slideUp_00',
                        showSubTitle: 'HugeReward_showSubTitle_f3',
                        fadeInSunRays: 'HugeReward_fadeInSunRays_31',
                        rotation: 'HugeReward_rotation_7a',
                    },
                    mt = 'main',
                    dt = 'main_small',
                    At = 'large',
                    Ft = (e, u, t) => {
                        let n;
                        const r = t === mt;
                        switch (e) {
                            case p.ExtraLarge:
                                n = r ? 'main_large' : dt;
                                break;
                            case p.Large:
                            case p.Medium:
                                n = r ? dt : At;
                                break;
                            default:
                                n = r ? At : 'small';
                        }
                        return `R.images.new_year.gui.maps.icons.newYear.huge_rewards.${n}.${u}`;
                    },
                    Dt = ({ reward: e, position: u, mediaSize: t, onSelectVehicleDiscount: n }) => {
                        const a = Bu(
                            ((e) => {
                                const u = { tooltipId: e.tooltipId };
                                if (Ou(e)) {
                                    const t = e;
                                    return Object.assign({}, u, { variadicID: t.variadicID, discount: t.discount });
                                }
                                return u;
                            })(e),
                            Number(e.tooltipContentId),
                        );
                        return r().createElement(
                            Zu,
                            a,
                            r().createElement(
                                'div',
                                {
                                    className: C()(_t.base, _t[`base__${u}`]),
                                    style: { animationDelay: (u === mt ? 500 : 1e3) + 'ms' },
                                },
                                ((e, u, t, n) => {
                                    const a = Ft(t, e.name, u);
                                    if (Ou(e)) {
                                        const t = e;
                                        return r().createElement(ct, {
                                            reward: t,
                                            image: a,
                                            position: u,
                                            className: { image: _t.hugeRewardImage, label: _t.hugeRewardText },
                                            onSelectReward: n,
                                        });
                                    }
                                    if (Nu(e)) {
                                        const u = e,
                                            t = u.level,
                                            n = u.label,
                                            o = u.type,
                                            i = u.nationTag;
                                        return r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', {
                                                className: _t.hugeRewardImage,
                                                style: { backgroundImage: `url(${a})` },
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: _t.hugeRewardText },
                                                r().createElement(Et, {
                                                    level: t,
                                                    name: n,
                                                    type: o,
                                                    nation: i,
                                                    isElite: !0,
                                                }),
                                            ),
                                        );
                                    }
                                    {
                                        const n = e,
                                            a = n.name,
                                            o = n.label,
                                            i = n.userName,
                                            s = n.value,
                                            l = a === Hu.Tman ? i : o,
                                            c =
                                                a === Hu.Tman
                                                    ? Ft(
                                                          t,
                                                          ((e) => {
                                                              switch (e.name) {
                                                                  case Hu.Tman:
                                                                      return e.bigIcon;
                                                                  case Hu.Customizations:
                                                                  case Hu.LootBoxToken:
                                                                      return e.icon;
                                                                  default:
                                                                      return e.name;
                                                              }
                                                          })(n),
                                                          u,
                                                      )
                                                    : Du(n, je.S600x450),
                                            E = Cu(s, du(a));
                                        return r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(
                                                'div',
                                                {
                                                    className: _t.hugeRewardImage,
                                                    style: { backgroundImage: `url(${c})` },
                                                },
                                                E && r().createElement('div', { className: _t.hugeRewardCount }, E),
                                            ),
                                            r().createElement('div', { className: _t.hugeRewardText }, l),
                                        );
                                    }
                                })(e, u, t, n),
                            ),
                        );
                    },
                    Bt =
                        (R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                        { stiffness: 317, friction: 8, mass: 1, damping: 10.91 }),
                    Ct = {
                        idle: { state: 'idle', nextState: 'bump', timeout: 1e3 },
                        bump: { state: 'bump', nextState: 'opening', timeout: 600 },
                        opening: { state: 'opening', nextState: 'opened', timeout: 600 },
                        opened: { state: 'opened', nextState: 'out', timeout: 1400 },
                        out: { state: 'out', nextState: 'hide', timeout: 600 },
                        hide: { state: 'hide', stop: !0 },
                    },
                    gt = ['main', 'left', 'right'],
                    ht = R.strings.ny.levelUpView,
                    pt = ht.rewards,
                    vt = ({
                        rewards: e,
                        level: u,
                        collection: t,
                        hugeRewards: a,
                        onClose: o,
                        onGotoStore: i,
                        onGotoQuests: s,
                        onSelectVehicleDiscount: l,
                    }) => {
                        const c = (0, n.useState)(!1),
                            E = c[0],
                            _ = c[1],
                            m = (0, n.useState)(''),
                            d = m[0],
                            A = m[1],
                            F = f().mediaSize,
                            D = (B = F) === bu.ExtraSmall ? 10 : B === bu.Small ? 12 : 14;
                        var B;
                        const g = ((e) => {
                                const u =
                                    ((t = e),
                                    (n = (u, t) => ({ hugeReward: u, position: 2 === e.length ? gt[t + 1] : gt[t] })),
                                    Array.isArray(t) ? t.map(n) : t.map(({ value: e }, u, t) => n(e, u)));
                                var t, n;
                                return (3 === e.length && u.splice(0, 2, u[1], u[0]), u);
                            })(a),
                            h = 1 === u ? pt.firstTitle() : pt.otherTitle(),
                            p =
                                10 === u
                                    ? pt.finishSubtitle()
                                    : G(pt.subtitle(), { level: ((v = u), We ? `${v}` : Ge(v)) });
                        var v;
                        const b = 1 === u || 10 === u,
                            w = e.length > 0,
                            S = 2100 + Gu * e.length;
                        ((0, n.useEffect)(() => {
                            ue(R.sounds.gui_random_reward_red_ribbon_appear());
                        }, []),
                            (0, n.useEffect)(() => {
                                A(t ? R.strings.ny.collectionsReward.header.$dyn(t) : p);
                            }, [p, t]),
                            (0, n.useEffect)(
                                () =>
                                    H(() => {
                                        (ue(R.sounds.gui_random_reward_end()), _(!0));
                                    }, S),
                                [S],
                            ),
                            (0, n.useEffect)(() => {
                                if (g.length > 0)
                                    return H(() => {
                                        ue(R.sounds.gui_gift_system_newyear_reward_appear_main());
                                    }, 500);
                            }, [g.length]));
                        const T = (e, u, t, n) =>
                                e
                                    ? r().createElement(
                                          'div',
                                          { className: Yu.banner },
                                          r().createElement('div', { className: C()(Yu.bannerImage, n && Yu[n]) }),
                                          r().createElement(
                                              'div',
                                              { className: Yu.bannerDescription },
                                              r().createElement(ke, { text: u, className: Yu.bannerTitle }),
                                              r().createElement(ke, { text: t, className: Yu.bannerText }),
                                          ),
                                      )
                                    : null,
                            x = (e, u, t) =>
                                e
                                    ? r().createElement(
                                          ie,
                                          {
                                              mixClass: Yu.confirmButton,
                                              size: ae.medium,
                                              type: re.secondary,
                                              onClick: t,
                                          },
                                          r().createElement(ke, { text: u }),
                                      )
                                    : null,
                            y = g.find((e) => Nu(e.hugeReward));
                        return r().createElement(
                            'div',
                            { className: Yu.base },
                            r().createElement(
                                'div',
                                { className: Yu.close },
                                r().createElement(Ee, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    side: 'right',
                                    type: 'close',
                                    onClick: o,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Yu.header },
                                r().createElement(ke, { text: h, className: Yu.title }),
                                r().createElement(ke, { text: d, className: Yu.subtitle }),
                            ),
                            r().createElement(
                                'div',
                                { className: Yu.tapeContent, style: { animationDuration: '500ms' } },
                                r().createElement('div', { className: C()(Yu.ribbon, y && Yu.ribbon__gold) }),
                                g.length > 0 &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        y &&
                                            r().createElement(ju, {
                                                width: 400,
                                                height: 400,
                                                frameCount: 50,
                                                getSrcByFrame: xu,
                                                className: Yu.sunShineCanvas,
                                            }),
                                        r().createElement('div', { className: Yu.sunRays }),
                                        r().createElement(
                                            'div',
                                            { className: C()(Yu.hugeRewards, w && Yu.hugeRewards__hasRewards) },
                                            g.map(({ hugeReward: e, position: u }) =>
                                                r().createElement(Dt, {
                                                    key: e.variadicID,
                                                    reward: e,
                                                    position: u,
                                                    mediaSize: F,
                                                    onSelectVehicleDiscount: l,
                                                }),
                                            ),
                                        ),
                                    ),
                                w &&
                                    r().createElement(
                                        'div',
                                        { className: C()(Yu.rewards, b && Yu.rewards__up) },
                                        r().createElement(Wu, {
                                            items: e,
                                            animationDelayStart: 1800,
                                            maxLength: D,
                                            hasSounds: !0,
                                        }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: C()(Yu.confirm, E && Yu.confirm__visible) },
                                    T(1 === u, ht.banner.title(), ht.banner.text()),
                                    T(10 === u, ht.finishBanner.title(), ht.finishBanner.text(), 'maxLevel'),
                                    r().createElement(
                                        'div',
                                        { className: Yu.buttons },
                                        r().createElement(
                                            ie,
                                            { mixClass: Yu.confirmButton, size: ae.medium, onClick: o },
                                            r().createElement(ke, { text: ht.okBtn.label() }),
                                        ),
                                        x(1 === u, ht.gotoQuestsBtn.label(), s),
                                        x(10 === u, ht.gotoStoreBtn.label(), i),
                                    ),
                                ),
                            ),
                        );
                    };
                var bt = t(7030);
                const wt = 'LevelSnowflake_snowflake_35',
                    ft = 'LevelSnowflake_snowflake__hidden_96',
                    St = 'LevelSnowflake_level_fe',
                    Rt = R.images.new_year.gui.maps.icons.newYear.level_up.levels,
                    Tt = 2e3,
                    xt = (0, n.memo)(({ level: e = 10, className: u }) => {
                        const t = (0, n.useState)(!0),
                            a = t[0],
                            o = t[1],
                            i = Rt.$dyn('c_' + (e - 1)),
                            s = Rt.$dyn(`c_${e}`),
                            l = 10 === e,
                            c = (0, bt.useSpring)({
                                from: { transform: 'rotate(0deg)' },
                                to: { transform: 'rotate(60deg)' },
                                delay: Tt,
                                config: Bt,
                            }),
                            E = (0, bt.useSpring)({
                                from: { transform: 'translateY(0rem)' },
                                to: { transform: 'translateY(170rem)' },
                                delay: Tt,
                                config: Bt,
                            });
                        return (
                            (0, n.useEffect)(
                                () =>
                                    H(() => {
                                        l && o(!1);
                                    }, Tt),
                                [l],
                            ),
                            r().createElement(
                                'div',
                                { className: C()('LevelSnowflake_base_12', u) },
                                r().createElement(bt.animated.div, { className: C()(wt, !a && ft), style: c }),
                                l &&
                                    r().createElement(bt.animated.div, {
                                        className: C()(wt, 'LevelSnowflake_snowflake__max_18', a && ft),
                                        style: c,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: 'LevelSnowflake_lvlContainter_df' },
                                    r().createElement(bt.animated.div, {
                                        className: C()(St, 'LevelSnowflake_level__prev_fd'),
                                        style: Object.assign({}, E, { backgroundImage: `url('${s}')` }),
                                    }),
                                    r().createElement(bt.animated.div, {
                                        className: St,
                                        style: Object.assign({}, E, { backgroundImage: `url('${i}')` }),
                                    }),
                                ),
                            )
                        );
                    }),
                    yt = {
                        base: 'Level_base_79',
                        base__idle: 'Level_base__idle_8f',
                        levelSnowflake: 'Level_levelSnowflake_b6',
                        base__bump: 'Level_base__bump_ea',
                        bump: 'Level_bump_47',
                        base__hide: 'Level_base__hide_2c',
                        base__out: 'Level_base__out_41',
                        out: 'Level_out_c4',
                        confettiContainer: 'Level_confettiContainer_10',
                        confettiContainer__backward: 'Level_confettiContainer__backward_c9',
                        splashContainer: 'Level_splashContainer_3c',
                        base__opening: 'Level_base__opening_d0',
                        splashZoom: 'Level_splashZoom_90',
                        base__opened: 'Level_base__opened_5c',
                        splash: 'Level_splash_5f',
                        confetti: 'Level_confetti_9d',
                        confetti__backward: 'Level_confetti__backward_a5',
                        dragonBreath: 'Level_dragonBreath_e0',
                        textBlinkContainer: 'Level_textBlinkContainer_6e',
                        textBlink: 'Level_textBlink_87',
                        text: 'Level_text_1a',
                        bumpText: 'Level_bumpText_9c',
                        fadeOut: 'Level_fadeOut_bc',
                    },
                    Lt = (0, n.memo)(
                        ({
                            level: e = 10,
                            initAnimation: u = 'idle',
                            animationSettings: t = Ct,
                            onAnimationChanged: a,
                        }) => {
                            const o = (0, n.useState)(t[u]),
                                i = o[0],
                                s = o[1];
                            return (
                                (0, n.useEffect)(() => {
                                    if (!i.stop)
                                        return H(() => {
                                            s(t[i.nextState]);
                                        }, i.timeout);
                                }, [i, t]),
                                (0, n.useEffect)(() => {
                                    a &&
                                        (a(i.state),
                                        i.state === t.bump.state && ue(R.sounds.hangar_newyear_level_up_overlay()));
                                }, [i, t, a]),
                                r().createElement(
                                    'div',
                                    { className: C()(yt.base, yt[`base__${i.state}`]) },
                                    r().createElement(
                                        'div',
                                        { className: C()(yt.confettiContainer, yt.confettiContainer__backward) },
                                        r().createElement('div', {
                                            className: C()(yt.confetti, yt.confetti__backward),
                                        }),
                                    ),
                                    r().createElement(xt, { level: e, className: yt.levelSnowflake }),
                                    r().createElement(
                                        'div',
                                        { className: yt.confettiContainer },
                                        r().createElement('div', { className: yt.confetti }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: yt.splashContainer },
                                        r().createElement('div', { className: yt.splash }),
                                    ),
                                    r().createElement('div', { className: yt.bump }),
                                    r().createElement(
                                        'div',
                                        { className: yt.text },
                                        r().createElement(ke, { text: R.strings.ny.levelUpView.congrats() }),
                                        r().createElement(
                                            'div',
                                            { className: yt.textBlinkContainer },
                                            r().createElement('div', { className: yt.textBlink }),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Mt = {
                        base: 'SnowFall_base_47',
                        forward: 'SnowFall_forward_6f',
                        backward: 'SnowFall_backward_a3',
                        content: 'SnowFall_content_1a',
                        snowState: 'SnowFall_snowState_87',
                        base__hide: 'SnowFall_base__hide_de',
                        base__out: 'SnowFall_base__out_52',
                        snow: 'SnowFall_snow_88',
                        snow__top: 'SnowFall_snow__top_59',
                        fallTop: 'SnowFall_fallTop_1e',
                        snow__bottom: 'SnowFall_snow__bottom_a7',
                        fallBottom: 'SnowFall_fallBottom_72',
                    };
                let Ot;
                !(function (e) {
                    ((e.Fall = 'fall'), (e.Hide = 'hide'), (e.Out = 'out'));
                })(Ot || (Ot = {}));
                const Nt = (0, n.memo)(
                        ({ children: e, className: u, contentClassName: t, animationState: n = Ot.Fall }) =>
                            r().createElement(
                                'div',
                                { className: C()(Mt.base, Mt[`base__${n}`], u) },
                                r().createElement(
                                    'div',
                                    { className: Mt.backward },
                                    r().createElement(
                                        'div',
                                        { className: C()(Mt.snowState) },
                                        r().createElement('div', { className: C()(Mt.snow, Mt.snow__top) }),
                                        r().createElement('div', { className: C()(Mt.snow, Mt.snow__bottom) }),
                                    ),
                                ),
                                r().createElement('div', { className: C()(Mt.content, t) }, e),
                                r().createElement(
                                    'div',
                                    { className: Mt.forward },
                                    r().createElement(
                                        'div',
                                        { className: C()(Mt.snowState) },
                                        r().createElement('div', { className: C()(Mt.snow, Mt.snow__top) }),
                                        r().createElement('div', { className: C()(Mt.snow, Mt.snow__bottom) }),
                                    ),
                                ),
                            ),
                    ),
                    Pt = ({
                        level: e,
                        collection: u,
                        rewards: t,
                        hugeRewards: a,
                        onClose: o,
                        onGotoStore: i,
                        onGotoQuests: s,
                        onSelectVehicleDiscount: l,
                    }) => {
                        var c;
                        const E = null != (c = Q(e)) ? c : e,
                            _ = (0, n.useState)(!1),
                            m = _[0],
                            d = _[1],
                            A = (0, n.useRef)(null),
                            F = (0, n.useState)(Ot.Hide),
                            D = F[0],
                            B = F[1];
                        var g;
                        ((g = A.current),
                            (0, n.useEffect)(() => {
                                if (!g) return;
                                let e = 0;
                                const u = () => {
                                    (cancelAnimationFrame(e),
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                ((e) => {
                                                    ((e.style.width =
                                                        document.body.offsetWidth % 2 == 1
                                                            ? `${document.body.offsetWidth + 1}px`
                                                            : `${document.body.offsetWidth}px`),
                                                        (e.style.height =
                                                            document.body.offsetHeight % 2 == 1
                                                                ? `${document.body.offsetHeight + 1}px`
                                                                : `${document.body.offsetHeight}px`));
                                                })(g);
                                            });
                                        })));
                                };
                                return (
                                    window.addEventListener('resize', u),
                                    u(),
                                    () => {
                                        (window.removeEventListener('resize', u), cancelAnimationFrame(e));
                                    }
                                );
                            }, [g]),
                            (0, n.useEffect)(() => {
                                E !== e && (d(!1), B(Ot.Hide));
                            }, [e, E]));
                        var h;
                        ((h = (0, n.useCallback)(() => {
                            m ? o() : (d(!0), B(Ot.Out));
                        }, [m, o])),
                            ee(Z.n.ESCAPE, h));
                        const p = ((e, u = []) => {
                            const t = (0, n.useRef)(),
                                r = (0, n.useCallback)((...u) => {
                                    (t.current && t.current(), (t.current = e(...u)));
                                }, u);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [r],
                                ),
                                r
                            );
                        })(
                            (e) =>
                                'opened' === e
                                    ? H(() => {
                                          B(Ot.Fall);
                                      }, 200)
                                    : 'hide' === e
                                      ? (B(Ot.Out),
                                        H(() => {
                                            d(!0);
                                        }, 250))
                                      : void 0,
                            [],
                        );
                        return r().createElement(
                            'div',
                            { className: C()('AtmosphereLevelUp_base_a3', 'AtmosphereLevelUp_base__firstLevel_00') },
                            r().createElement(
                                'div',
                                { className: 'AtmosphereLevelUp_fixBlurContainerRef_34', ref: A },
                                r().createElement(
                                    Nt,
                                    { animationState: D },
                                    m || u
                                        ? r().createElement(
                                              'div',
                                              { className: 'AtmosphereLevelUp_rewardScreen_ee' },
                                              r().createElement(vt, {
                                                  rewards: t,
                                                  level: e,
                                                  collection: u,
                                                  hugeRewards: a,
                                                  onClose: o,
                                                  onGotoStore: i,
                                                  onGotoQuests: s,
                                                  onSelectVehicleDiscount: l,
                                              }),
                                          )
                                        : r().createElement(
                                              'div',
                                              { className: 'AtmosphereLevelUp_level_2e' },
                                              r().createElement(Lt, { level: e, onAnimationChanged: p }),
                                          ),
                                ),
                            ),
                        );
                    };
                function It(e) {
                    return e;
                }
                function kt() {
                    return !1;
                }
                console.log;
                var Ht = t(9174);
                function Ut(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Gt = (e) => (0 === e ? window : window.subViews.get(e));
                function Wt(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var $t = t(3946);
                const Xt = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Gt,
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
                                                const i = (e) => {
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
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return (r.set(l, t), e && t(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
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
                                                                                    return Ut(e, u);
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
                                                                                          ? Ut(e, u)
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
                                            i =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        rewards: e.array('rewards.items', []),
                                                        hugeRewards: e.array('hugeRewards.items', []),
                                                    },
                                                    t = (0, $t.Om)(() => Wt(u.hugeRewards.get(), It), { equals: kt }),
                                                    n = (0, $t.Om)(
                                                        () =>
                                                            Wt(u.rewards.get(), (e) => ({
                                                                name: e.name,
                                                                image: Du(e, je.Big),
                                                                special: e.overlayType,
                                                                value: e.value,
                                                                valueType: du(e.name),
                                                                tooltipArgs: Bu(
                                                                    { tooltipId: e.tooltipId },
                                                                    Number(e.tooltipContentId),
                                                                ),
                                                            })),
                                                        { equals: kt },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: { getRewards: n, getHugeRewards: t },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = Ht.LO.box(n, { equals: kt });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Ht.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = Ht.LO.box(n, { equals: kt });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Ht.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Ht.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Ht.aD)((e) => {
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
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ht.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Ht.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(_) : u(_),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(e),
                                    m = _[0],
                                    d = _[1],
                                    A = (0, n.useState)(() => c(e, a, s)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(m, a, s)) : (E.current = !0);
                                    }, [s, m, a]),
                                    (0, n.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        gotoStore: e.createCallbackNoArgs('onGotoStore'),
                        gotoQuests: e.createCallbackNoArgs('onGotoQuests'),
                        onSelectVehicleDiscount: e.createCallbackNoArgs('onSelectVehicleDiscount'),
                    })),
                    jt = Xt[0],
                    Yt = Xt[1],
                    Vt = (0, k.Pi)(() => {
                        const e = Yt(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            a = n.isViewReady,
                            o = n.level,
                            i = n.collection,
                            s = u.computes.getRewards();
                        return a
                            ? r().createElement(
                                  'div',
                                  { className: C()('App_base_2e', 1 !== o && 'App_base__bg_7b') },
                                  r().createElement(Pt, {
                                      level: o,
                                      collection: i,
                                      rewards: s,
                                      hugeRewards: u.hugeRewards.get(),
                                      onClose: t.close,
                                      onGotoStore: t.gotoStore,
                                      onGotoQuests: t.gotoQuests,
                                      onSelectVehicleDiscount: t.onSelectVehicleDiscount,
                                  }),
                              )
                            : null;
                    });
                engine.whenReady.then(() => {
                    I().render(
                        r().createElement(
                            jt,
                            { mode: 'real' },
                            r().createElement(N, null, r().createElement(Vt, null)),
                        ),
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
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 346),
        (() => {
            var e = { 346: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(65));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
