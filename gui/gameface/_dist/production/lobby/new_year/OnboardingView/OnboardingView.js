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
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
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
                                            i = o[u]((e) => t([e, 'outside']));
                                        function l(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, l),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, l),
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
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
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
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function d() {
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
                function v() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                t.d(u, { Sw: () => a.Z, B3: () => c, Z5: () => o, B0: () => l, ry: () => B, Eu: () => g });
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
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                var s;
                ((s = l || (l = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(e, u, t, r, n, a, o) {
                    try {
                        var i = e[a](o),
                            l = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(l) : Promise.resolve(l).then(r, n);
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
                                            D(a, r, n, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(a, r, n, o, i, 'throw', e);
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
                    v = (e, u) => {
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
                    p = () => v(l.CLOSE),
                    h = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var b = t(7572);
                const w = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                s = i.x,
                                c = i.y,
                                E = i.width,
                                _ = i.height,
                                m = {
                                    x: d.O.view.pxToRem(s) + o.x,
                                    y: d.O.view.pxToRem(c) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(_),
                                };
                            v(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: C(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: v,
                        onBindingsReady: B,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: w,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            3063: (e, u, t) => {
                'use strict';
                var r = t(3138),
                    n = t(6179),
                    a = t.n(n);
                const o = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    i = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var l;
                function s(e, u, t) {
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
                })(l || (l = {}));
                const c = r.O.client.getSize('rem'),
                    E = c.width,
                    _ = c.height,
                    m = Object.assign({ width: E, height: _ }, s(E, _, i)),
                    A = (0, n.createContext)(m),
                    d = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, d);
                        const r = (0, n.useContext)(A),
                            a = r.extraLarge,
                            i = r.large,
                            l = r.medium,
                            s = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            B = r.largeHeight,
                            g = r.mediumHeight,
                            v = r.smallHeight,
                            p = r.extraSmallHeight,
                            h = { extraLarge: C, large: B, medium: g, small: v, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && i) return u;
                            if (t.medium && l) return u;
                            if (t.small && s) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, h);
                            if (t.largeWidth && _) return o(u, t, h);
                            if (t.mediumWidth && m) return o(u, t, h);
                            if (t.smallWidth && F) return o(u, t, h);
                            if (t.extraSmallWidth && D) return o(u, t, h);
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
                                if (t.smallHeight && v) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, n.memo)(F);
                const D = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(A),
                        t = (0, n.useState)(u),
                        o = t[0],
                        l = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = r.O.view.pxToRem(e),
                                n = r.O.view.pxToRem(u);
                            l(Object.assign({ width: t, height: n }, s(t, n, i)));
                        }, []);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                    const E = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                    return a().createElement(A.Provider, { value: E }, e);
                });
                var C = t(6483),
                    B = t.n(C),
                    g = t(926),
                    v = t.n(g);
                let p, h, b;
                var w;
                ((w = p || (p = {}))[(w.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                    (w[(w.Small = i.small.width)] = 'Small'),
                    (w[(w.Medium = i.medium.width)] = 'Medium'),
                    (w[(w.Large = i.large.width)] = 'Large'),
                    (w[(w.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(h || (h = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const f = () => {
                        const e = (0, n.useContext)(A),
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
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), h.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
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
                const x = {
                        [h.ExtraSmall]: '',
                        [h.Small]: v().SMALL_WIDTH,
                        [h.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [h.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL_HEIGHT,
                        [b.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [b.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [p.ExtraSmall]: '',
                        [p.Small]: v().SMALL,
                        [p.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [p.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [p.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                        const n = f(),
                            o = n.mediaWidth,
                            i = n.mediaHeight,
                            l = n.mediaSize;
                        return a().createElement('div', y({ className: B()(t, x[o], T[i], M[l]) }, r), u);
                    },
                    k = ['children'],
                    N = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, k);
                        return a().createElement(D, null, a().createElement(L, t, u));
                    };
                var O = t(493),
                    P = t.n(O);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
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
                    W = [
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class z extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            o = e.type,
                            i = e.classNames,
                            l = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
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
                                })(e, W)),
                            m = B()(U.base, U[`base__${o}`], U[`base__${n}`], null == i ? void 0 : i.base),
                            A = B()(U.icon, U[`icon__${o}`], U[`icon__${n}`], null == i ? void 0 : i.icon),
                            d = B()(U.glow, null == i ? void 0 : i.glow),
                            F = B()(U.caption, U[`caption__${o}`], null == i ? void 0 : i.caption),
                            D = B()(U.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            G(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: U.shine }),
                            a().createElement('div', { className: A }, a().createElement('div', { className: d })),
                            a().createElement('div', { className: F }, u),
                            r && a().createElement('div', { className: D }, r),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const X = (e, u) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(r);
                    };
                };
                var j = t(5521),
                    Y = t(4179);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = j.n.NONE, u = V, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var q = t(3403),
                    K = t(9887),
                    Z = t.n(K);
                const Q = ['xl', 'lg', 'md', 'sm', 'xs'],
                    J = (e) => e.includes('_') && ((e) => Q.includes(e))(e.split('_').at(-1)),
                    ee = [p.ExtraLarge, p.Large, p.Medium, p.Small, p.ExtraSmall],
                    ue = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (J(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = ee.indexOf(u),
                                    o = (-1 !== a ? Q.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return (t[n] = void 0 !== i ? i : e[n]), t;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => Q.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    te = (e, u = ue) => {
                        const t = (
                            (e, u = ue) =>
                            (t) => {
                                const r = f().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return a().createElement(e, o);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => J(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    re = {
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
                    ne = [
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
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                Object.keys(Z());
                const oe = {
                        XL: { mt: re.mt__XL, mr: re.mr__XL, mb: re.mb__XL, ml: re.ml__XL },
                        LG: { mt: re.mt__LG, mr: re.mr__LG, mb: re.mb__LG, ml: re.ml__LG },
                        MDp: { mt: re.mt__MDp, mr: re.mr__MDp, mb: re.mb__MDp, ml: re.ml__MDp },
                        MD: { mt: re.mt__MD, mr: re.mr__MD, mb: re.mb__MD, ml: re.ml__MD },
                        SMp: { mt: re.mt__SMp, mr: re.mr__SMp, mb: re.mb__SMp, ml: re.ml__SMp },
                        SM: { mt: re.mt__SM, mr: re.mr__SM, mb: re.mb__SM, ml: re.ml__SM },
                        XS: { mt: re.mt__XS, mr: re.mr__XS, mb: re.mb__XS, ml: re.ml__XS },
                    },
                    ie = (Object.keys(oe), ['mt', 'mr', 'mb', 'ml']),
                    le = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    se = te((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            s = e.mr,
                            c = void 0 === s ? o : s,
                            E = e.mb,
                            _ = void 0 === E ? o : E,
                            m = e.ml,
                            A = void 0 === m ? o : m,
                            d = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (d ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            v = e.center,
                            p = e.flexEnd,
                            h = e.spaceBetween,
                            b = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (g ? 'flex-start' : v && 'center') ||
                                      (p && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : w,
                            S = e.alignItems,
                            y = void 0 === S ? (g ? 'flex-start' : v && 'center') || (p && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            T = e.wrap,
                            M = e.flexWrap,
                            L = void 0 === M ? (T ? 'wrap' : void 0) : M,
                            k = e.grow,
                            N = e.shrink,
                            O = e.flex,
                            R = void 0 === O ? (k || N ? `${k ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
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
                            })(e, ne);
                        const U = (0, n.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: _, ml: A },
                                    u = ((e) =>
                                        ie.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(oe[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ie.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[le[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: x,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: f,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, l, c, _, A, P, R, x, C, L, f, y]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return a().createElement('div', ae({ className: B()(re.base, ...G, u), style: W }, H), I);
                    });
                let ce;
                function Ee(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ce || (ce = {}));
                const _e = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    me = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ae = (e, u, t = ce.left) => e.split(u).reduce(t === ce.left ? _e : me, []),
                    de = (() => {
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
                    Fe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    De = ({ binding: e, text: u = '', classMix: t, alignment: r = ce.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      a().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ce.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Fe.includes(t)
                                                                ? de(e)
                                                                : ((e, u = ce.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ae(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Ae(e, r, ce.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ce = t(3532),
                    Be = t.n(Ce);
                const ge = {
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
                    ve = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
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
                Object.keys(Z());
                const he = Object.keys(Be()),
                    be = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    we = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    fe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Se =
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
                            'heading-H56': be,
                            'heading-H36': be,
                            'heading-H28': we,
                            'heading-H24': we,
                            'heading-H24R': we,
                            'heading-H22': we,
                            'heading-H20R': we,
                            'heading-H18': we,
                            'heading-H15': fe,
                            'heading-H14': fe,
                            'paragraph-P24': we,
                            'paragraph-P18': we,
                            'paragraph-P16': we,
                            'paragraph-P14': fe,
                            'paragraph-P12': fe,
                            'paragraph-P10': fe,
                        }),
                    ye =
                        (Object.keys(Se),
                        (e) =>
                            e
                                ? ((e) => he.includes(e))(e)
                                    ? { colorClassName: ge[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    xe = te((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            s = void 0 === l ? i : l,
                            c = e.mr,
                            E = void 0 === c ? i : c,
                            _ = e.mb,
                            m = void 0 === _ ? i : _,
                            A = e.ml,
                            d = void 0 === A ? i : A,
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
                            })(e, ve);
                        const g = (0, n.useMemo)(() => {
                                const e = ye(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, o]),
                            v = g.computedStyle,
                            p = g.colorClassName;
                        return a().createElement(
                            se,
                            pe(
                                {
                                    className: B()(ge.base, t && ge[t], p, r),
                                    style: v,
                                    mt: !0 === s ? Se[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === E ? Se[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? Se[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === d ? Se[t || 'paragraph-P16'].ml : d,
                                },
                                C,
                            ),
                            void 0 !== D ? a().createElement(De, pe({}, D, { text: u })) : u,
                        );
                    }),
                    Te = (e, u) => {
                        const t = (0, n.useRef)();
                        (0, n.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                            (0, n.useEffect)(() => {
                                if (null !== u) {
                                    const e = setInterval(() => {
                                        t.current();
                                    }, u);
                                    return () => clearInterval(e);
                                }
                            }, [u]);
                    },
                    Me = (0, n.memo)(({ number: e, classNames: u }) => {
                        const t = (0, n.useState)(800),
                            r = t[0],
                            o = t[1],
                            i = (0, n.useState)(0),
                            l = i[0],
                            s = i[1],
                            c = (0, n.useState)(!0),
                            E = c[0],
                            _ = c[1],
                            m = B()('AnimatedNumberCounter_base_2c', null == u ? void 0 : u.base);
                        return (
                            Te(
                                () => {
                                    s(l <= e - 12 ? l + 2 : l + 1);
                                },
                                E ? r : null,
                            ),
                            Te(
                                () => {
                                    l < e - 12 && r > 30 && o(r / 2),
                                        l >= e - 12 && l < e - 6 && o(60),
                                        l >= e - 6 && l < e - 3 && o(120),
                                        l >= e - 3 && l < e - 1 && o(180),
                                        l >= e - 1 && o(400),
                                        l === e && _(!1);
                                },
                                E ? 70 : null,
                            ),
                            a().createElement(
                                'div',
                                { className: m },
                                a().createElement(xe, {
                                    text: l <= e ? l : e,
                                    className: B()('AnimatedNumberCounter_counter_0a', null == u ? void 0 : u.counter),
                                }),
                            )
                        );
                    });
                class Le extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? Y.B3.GOLD : Y.B3.INTEGRAL;
                        const u = Y.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Le.defaultProps = { format: 'integral' };
                const ke = (e = 1) => {
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
                    },
                    Ne = [
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
                function Oe(e) {
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
                const Re = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Pe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ne);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, n.useMemo)(() => C || ke().resId, [C]),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Re(t, A, { isMouseEvent: !0, on: !0, arguments: Oe(r) }, h),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, A, r, h, B]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Re(t, A, { on: !1 }, h),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, A, h, g]),
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
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e);
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
                                        window.removeEventListener('mouseleave', w), w();
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
                                                  w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && w(), null == l || l(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && w(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Ie = ['children'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ie);
                        return a().createElement(
                            Pe,
                            He(
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
                    We = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const ze = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            i = e.alert,
                            l = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, We);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: r, note: o, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, o, l]);
                        return a().createElement(
                            Pe,
                            Ge(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? ze.SimpleTooltipHtmlContent('resId') : ze.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var E;
                    };
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ye = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Xe, u, r);
                        const n = u.contentId,
                            o = u.args,
                            i = null == o ? void 0 : o.contentId;
                        return n || i
                            ? a().createElement(Pe, je({}, u, { contentId: n || i }), r)
                            : a().createElement(Ue, u, r);
                    },
                    Ve = ['children', 'tooltipType', 'wrap'],
                    $e = ['contentId'];
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                function Ke(e, u) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let Ze;
                !(function (e) {
                    (e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple');
                })(Ze || (Ze = {}));
                const Qe = (e) => {
                    let u = e.children,
                        t = e.tooltipType,
                        r = e.wrap,
                        n = void 0 !== r && r,
                        o = Ke(e, Ve);
                    if (!o) return u;
                    const i = n && (o.isEnabled || void 0 === o.isEnabled) ? a().createElement('div', null, u) : u,
                        l = o.contentId,
                        s = Ke(o, $e);
                    switch (t) {
                        case Ze.Base:
                            return (
                                !l && console.error('`contentId` field is required for a base Tooltip'),
                                l ? a().createElement(Pe, qe({}, s, { contentId: l }), i) : i
                            );
                        case Ze.Simple:
                            return a().createElement(Xe, s, i);
                        case Ze.Backport:
                            return a().createElement(Ue, s, i);
                        default:
                            return a().createElement(Ye, { tooltipArgs: o }, i);
                    }
                };
                let Je;
                !(function (e) {
                    (e.Mandarin = 'ny25_mandarin'), (e.NyGiftMachineToken = 'ny25Token'), (e.Gold = 'gold');
                })(Je || (Je = {}));
                const eu = {
                        base: 'NyCurrency_base_30',
                        container: 'NyCurrency_container_b9',
                        icon: 'NyCurrency_icon_1d',
                        icon__left: 'NyCurrency_icon__left_79',
                        icon__right: 'NyCurrency_icon__right_6f',
                        icon__medium: 'NyCurrency_icon__medium_63',
                        icon__c_48x48: 'NyCurrency_icon__c_48x48_74',
                        icon__c_64x64: 'NyCurrency_icon__c_64x64_60',
                        value: 'NyCurrency_value_e4',
                        value__medium: 'NyCurrency_value__medium_61',
                        value__c_48x48: 'NyCurrency_value__c_48x48_5c',
                        value__c_64x64: 'NyCurrency_value__c_64x64_71',
                        value__ny25_mandarin: 'NyCurrency_value__ny25_mandarin_81',
                        value__ny25Token: 'NyCurrency_value__ny25Token_94',
                        value__freeXP: 'NyCurrency_value__freeXP_43',
                        value__credits: 'NyCurrency_value__credits_d7',
                        value__gold: 'NyCurrency_value__gold_07',
                        value__xp: 'NyCurrency_value__xp_d0',
                        value__crystal: 'NyCurrency_value__crystal_ba',
                        value__equipCoin: 'NyCurrency_value__equipCoin_f1',
                        value__notAvailable__small: 'NyCurrency_value__notAvailable__small_51',
                        value__notAvailable__medium: 'NyCurrency_value__notAvailable__medium_9d',
                        value__notAvailable__c_48x48: 'NyCurrency_value__notAvailable__c_48x48_3c',
                        value__notAvailable__c_64x64: 'NyCurrency_value__notAvailable__c_64x64_b3',
                    },
                    uu = R.strings.ny.currencyPanel;
                let tu, ru;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'c_48x48'), (e.ExtraLarge = 'c_64x64');
                })(tu || (tu = {})),
                    (function (e) {
                        (e.Left = 'left'), (e.Right = 'right');
                    })(ru || (ru = {}));
                const nu = (0, n.memo)(
                        ({
                            value: e,
                            iconPosition: u = ru.Left,
                            size: t = tu.Small,
                            type: r = Je.Mandarin,
                            enableClickSound: n = !0,
                            enableHoverSound: o = !0,
                            onClick: i,
                            onHover: l,
                            classNames: s,
                            tooltipConfig: c,
                            isCurrencyAvailable: E = !0,
                        }) => {
                            const _ = {
                                    backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.common.currency.${t}.${r})`,
                                },
                                m = B()(
                                    eu.value,
                                    eu[`value__${t}`],
                                    eu[`value__${r}`],
                                    !E && eu[`value__notAvailable__${t}`],
                                    null == s ? void 0 : s.value,
                                ),
                                A = {
                                    [ru.Left]: a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', {
                                            className: B()(
                                                eu.icon,
                                                eu[`icon__${t}`],
                                                eu.icon__left,
                                                null == s ? void 0 : s.icon,
                                            ),
                                            style: _,
                                        }),
                                        a().createElement(xe, {
                                            text: E
                                                ? a().createElement(Le, { format: 'integral', value: Number(e) })
                                                : uu.currency.notAvailable(),
                                            className: m,
                                        }),
                                    ),
                                    [ru.Right]: a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(xe, {
                                            text: E
                                                ? a().createElement(Le, { format: 'integral', value: Number(e) })
                                                : uu.currency.notAvailable(),
                                            className: m,
                                        }),
                                        a().createElement('div', {
                                            className: B()(
                                                eu.icon,
                                                eu[`icon__${t}`],
                                                eu.icon__right,
                                                null == s ? void 0 : s.icon,
                                            ),
                                            style: _,
                                        }),
                                    ),
                                };
                            return a().createElement(
                                Qe,
                                c,
                                a().createElement(
                                    'div',
                                    {
                                        className: B()(eu.base, null == s ? void 0 : s.base),
                                        onClick: () => {
                                            n && H.playClick(), i && i();
                                        },
                                        onMouseEnter: () => {
                                            o && H.playHighlight(), l && l();
                                        },
                                    },
                                    a().createElement(
                                        'div',
                                        { className: B()(eu.container, null == s ? void 0 : s.container) },
                                        A[u],
                                    ),
                                ),
                            );
                        },
                    ),
                    au = R.views.new_year.lobby.new_year.tooltips,
                    ou = (e, u) => ({
                        contentId: au.NyCurrencyTooltip('resId'),
                        args: { currency: e, isCurrencyAvailable: u },
                    }),
                    iu = (0, n.memo)(({ currencyItems: e, onCurrencyItemClick: u, classNames: t }) => {
                        const r = f().mediaSize >= p.Medium ? tu.Medium : tu.Small,
                            o = B()('CurrencyContainer_base_c5', null == t ? void 0 : t.base),
                            i = (0, n.useCallback)(
                                (e) => () => {
                                    null == u || u({ currency: e });
                                },
                                [u],
                            );
                        return a().createElement(
                            'div',
                            { className: o },
                            e.map((e) =>
                                a().createElement(
                                    'div',
                                    { className: 'CurrencyContainer_currency_da', key: e.currency.value },
                                    e.allowClick &&
                                        a().createElement('div', { className: 'CurrencyContainer_currencyBlink_72' }),
                                    a().createElement(nu, {
                                        value: e.amount,
                                        type: e.currency.value,
                                        size: r,
                                        classNames: {
                                            base: B()(
                                                'CurrencyContainer_currencyBlock_b8',
                                                e.allowClick && 'CurrencyContainer_currencyBlock__allowClick_80',
                                            ),
                                        },
                                        tooltipConfig: ou(e.currency.value, e.isCurrencyAvailable),
                                        onClick: e.allowClick ? i(e.currency.value) : void 0,
                                        isCurrencyAvailable: e.isCurrencyAvailable,
                                    }),
                                ),
                            ),
                        );
                    }),
                    lu = ({
                        children: e,
                        moveSpace: u,
                        isDisabled: t,
                        onMouseOver3dScene: r,
                        isMouseDown: o,
                        setMouseDown: i,
                        isPointerCursor: l = !1,
                    }) => {
                        const s = (0, n.useState)(!1),
                            c = s[0],
                            E = s[1],
                            _ = (0, n.useState)({ x: 0, y: 0 }),
                            m = _[0],
                            A = _[1],
                            d = (0, n.useMemo)(() => (i ? [o, i] : [c, E]), [i, o, c, E]),
                            F = d[0],
                            D = d[1],
                            C = (0, n.createRef)(),
                            g = (0, n.useCallback)(() => D(!1), [D]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', g), () => window.removeEventListener('mouseup', g)
                            ),
                            [g],
                        );
                        const v = (0, n.useCallback)(
                                (e) => {
                                    if (!C.current) return;
                                    const u = C.current.getBoundingClientRect(),
                                        t = u.width,
                                        r = u.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= t - 1 ||
                                        e.clientY >= r - 1
                                    );
                                },
                                [C],
                            ),
                            p = (0, n.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button && v(e) && (D(!0), A({ x: e.clientX, y: e.clientY }));
                                },
                                [v, D],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), F)) {
                                        if (!v(e)) return;
                                        const t = e.clientX !== m.x ? e.clientX - m.x : 0,
                                            r = e.clientY !== m.y ? e.clientY - m.y : 0;
                                        A({ x: e.clientX, y: e.clientY }), u({ dx: t, dy: r, dz: 0 });
                                    }
                                },
                                [v, F, m.x, m.y, u],
                            ),
                            b = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !v(e))) return;
                                    const t = e.deltaY < 0;
                                    u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                },
                                [v, u],
                            ),
                            w = (0, n.useCallback)(() => {
                                D(!1);
                            }, [D]),
                            f = (0, n.useCallback)(() => {
                                r({ isOver3dScene: !0 });
                            }, [r]),
                            S = (0, n.useCallback)(() => {
                                r({ isOver3dScene: !1 });
                            }, [r]),
                            y = B()(
                                'SceneWrapper_base_17',
                                F && 'SceneWrapper_base__down_ad',
                                l && 'SceneWrapper_base__pointer_b0',
                            );
                        return a().createElement(
                            'div',
                            {
                                ref: C,
                                className: y,
                                onMouseDown: t ? void 0 : p,
                                onMouseMove: t ? void 0 : h,
                                onMouseUp: t ? void 0 : w,
                                onWheel: t ? void 0 : b,
                                onMouseOver: f,
                                onMouseOut: S,
                            },
                            e,
                        );
                    };
                function su(e) {
                    return e;
                }
                function cu() {
                    return !1;
                }
                console.log;
                var Eu = t(9174);
                function _u(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const mu = (e) => (0 === e ? window : window.subViews.get(e));
                var Au = t(3946);
                let du, Fu;
                !(function (e) {
                    (e[(e.CITY = 0)] = 'CITY'),
                        (e[(e.TASKS = 1)] = 'TASKS'),
                        (e[(e.MACHINE = 2)] = 'MACHINE'),
                        (e[(e.REWARDS = 3)] = 'REWARDS'),
                        (e[(e.PET = 4)] = 'PET'),
                        (e[(e.INFO = 5)] = 'INFO');
                })(du || (du = {})),
                    (function (e) {
                        (e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.TO_GLADE_WITH_INTRO = 2)] = 'TO_GLADE_WITH_INTRO'),
                            (e[(e.WITH_SWITCHING_OBJS = 3)] = 'WITH_SWITCHING_OBJS');
                    })(Fu || (Fu = {}));
                const Du = {
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
                let Cu, Bu;
                var gu, vu;
                ((vu = Cu || (Cu = {})).main = 'main'),
                    (vu.primary = 'primary'),
                    (vu.primaryGreen = 'primaryGreen'),
                    (vu.primaryRed = 'primaryRed'),
                    (vu.secondary = 'secondary'),
                    (vu.ghost = 'ghost'),
                    ((gu = Bu || (Bu = {})).extraSmall = 'extraSmall'),
                    (gu.small = 'small'),
                    (gu.medium = 'medium');
                const pu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: i,
                    soundHover: l,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: d,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        g = D[1],
                        v = (0, n.useState)(!1),
                        p = v[0],
                        h = v[1],
                        b = (0, n.useState)(!1),
                        w = b[0],
                        f = b[1],
                        S = (0, n.useCallback)(() => {
                            o || (F.current && (F.current.focus(), g(!0)));
                        }, [o]),
                        y = (0, n.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [C],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                o || (d && d(e));
                            },
                            [o, d],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), c && c(e), f(!0));
                            },
                            [o, l, c],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                o || (m && m(e), h(!1));
                            },
                            [o, m],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                o || (null !== s && I(s), _ && _(e), t && S(), h(!0));
                            },
                            [o, s, _, S, t],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e), h(!1));
                            },
                            [o, A],
                        ),
                        O = B()(
                            Du.base,
                            Du[`base__${r}`],
                            {
                                [Du.base__disabled]: o,
                                [Du[`base__${u}`]]: u,
                                [Du.base__focus]: C,
                                [Du.base__highlightActive]: p,
                                [Du.base__firstHover]: w,
                            },
                            i,
                        ),
                        P = B()(Du.state, Du.state__default);
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
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: k,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            r !== Cu.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Du.back }),
                                    a().createElement('span', { className: Du.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: P },
                                a().createElement('span', { className: Du.stateDisabled }),
                                a().createElement('span', { className: Du.stateHighlightHover }),
                                a().createElement('span', { className: Du.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Du.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                let hu, bu, wu, fu, Su, yu, xu;
                var Tu, Mu, Lu, ku;
                let Nu;
                var Ou;
                let Ru, Pu, Iu, Hu, Uu;
                var Wu, Gu;
                (pu.defaultProps = { type: Cu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' }),
                    (0, n.memo)(pu),
                    ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    (function (e) {
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
                    })(hu || (hu = {})),
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
                    })(bu || (bu = {})),
                    ((ku = wu || (wu = {})).Big = 'big'),
                    (ku.Small = 'small'),
                    (ku.Mini = 'mini'),
                    (ku.S600x450 = 's600x450'),
                    (ku.S400x300 = 's400x300'),
                    (ku.S296x222 = 's296x222'),
                    (ku.S232x174 = 's232x174'),
                    (ku.S180x135 = 's180x135'),
                    (ku.S128x100 = 's128x100'),
                    (ku.S80x80 = 's80x80'),
                    (ku.S48x48 = 's48x48'),
                    ((Lu = fu || (fu = {})).MULTI = 'multi'),
                    (Lu.CURRENCY = 'currency'),
                    (Lu.PREMIUM_PLUS = 'premium_plus'),
                    (Lu.NUMBER = 'number'),
                    (Lu.STRING = 'string'),
                    ((Mu = Su || (Su = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Mu.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Mu.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Mu.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Mu.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Mu.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Mu.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Mu.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Mu.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Mu.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Mu.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Mu.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Mu.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((yu || (yu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Tu = xu || (xu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Tu.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Tu.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Tu.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Tu.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Tu.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Tu.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Tu.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Tu.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Tu.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Tu.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Tu.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Tu.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    hu.Items,
                    hu.Equipment,
                    hu.Xp,
                    hu.XpFactor,
                    hu.Blueprints,
                    hu.BlueprintsAny,
                    hu.Goodies,
                    hu.Berths,
                    hu.Slots,
                    hu.Tokens,
                    hu.CrewSkins,
                    hu.CrewBooks,
                    hu.Customizations,
                    hu.CreditsFactor,
                    hu.TankmenXp,
                    hu.TankmenXpFactor,
                    hu.FreeXpFactor,
                    hu.BattleToken,
                    hu.Entitlements,
                    hu.PremiumUniversal,
                    hu.NaturalCover,
                    hu.BpCoin,
                    hu.BattlePassSelectToken,
                    hu.BattlaPassFinalAchievement,
                    hu.BattleBadge,
                    hu.BonusX5,
                    hu.CrewBonusX3,
                    hu.NewYearFillers,
                    hu.NewYearInvoice,
                    hu.EpicSelectToken,
                    hu.Comp7TokenWeeklyReward,
                    hu.Comp7TokenCouponReward,
                    hu.BattleBoosterGift,
                    hu.NewYearFillers,
                    hu.NewYearInvoice,
                    hu.LootBoxToken,
                    hu.SelectableBonus,
                    hu.Gold,
                    hu.Credits,
                    hu.Crystal,
                    hu.FreeXp,
                    hu.NewYearToyFragments,
                    hu.BattlePassPoints,
                    hu.PremiumPlus,
                    hu.Premium,
                    ((Ou = Nu || (Nu = {})).Tiny = 'tiny'),
                    (Ou.Small = 'small'),
                    (Ou.Medium = 'medium'),
                    (Ou.Large = 'large'),
                    (Ou.Huge = 'huge'),
                    (function (e) {
                        (e.Small = 'extraSmall'), (e.Medium = 'medium'), (e.Large = 'large');
                    })(Ru || (Ru = {})),
                    ((Gu = Pu || (Pu = {})).Small = 'small'),
                    (Gu.Medium = 'medium'),
                    (Gu.Big = 'big'),
                    (Gu.ExtraBig = 'extraBig'),
                    (Gu.Huge = 'huge'),
                    (function (e) {
                        (e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation');
                    })(Iu || (Iu = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Big = 'Big');
                    })(Hu || (Hu = {})),
                    ((Wu = Uu || (Uu = {})).ExtraSlot = 'ny22:extraSlot'),
                    (Wu.ToyFragments = 'ny22ToyFragments'),
                    (Wu.Tman = 'tmanToken'),
                    (Wu.AchievementReward = 'dossier_achievement'),
                    (Wu.Customizations = 'customizations'),
                    (Wu.VariadicDiscount = 'variadicDiscount'),
                    (Wu.MarketplaceUnlock = 'ny25_marketplace_unlock'),
                    (Wu.LootBoxToken = 'lootBoxToken');
                const zu = [
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
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const ju = (0, n.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            o = e.frameCount,
                            i = e.onAnimate,
                            l = void 0 === i ? et : i,
                            s = e.frameTime,
                            c = void 0 === s ? 33 : s,
                            E = e.initialFrameIndex,
                            _ = void 0 === E ? 0 : E,
                            m = e.loop,
                            A = void 0 === m || m,
                            d = e.state,
                            F = void 0 === d ? 'play' : d,
                            D = e.onAnimationComplete,
                            C = void 0 === D ? et : D,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, zu);
                        const g = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = g.current;
                                if (!e) return;
                                const n = o - 1,
                                    a = e.getContext('2d'),
                                    i = (r) => {
                                        a.clearRect(0, 0, e.width, e.height), a.drawImage(r, 0, 0, u, t);
                                    };
                                if ('stop' === F) {
                                    const e = r(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => i(u);
                                    return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                }
                                const s = ((e, u) => {
                                        const t = [];
                                        for (let r = 0; r < e; r++) {
                                            const e = new Image();
                                            (e.src = u(r)), t.push(e);
                                        }
                                        return t;
                                    })(o, r),
                                    E = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return (t += 1), t > e && (t = 0), u;
                                        };
                                    })(n, _),
                                    m = setInterval(() => {
                                        const e = E(),
                                            u = s[e];
                                        i(s[e]), l(e, u), e === n && (C(), A || clearInterval(m));
                                    }, c);
                                return () => clearInterval(m);
                            }, [o, c, r, t, _, A, l, C, F, u]),
                            a().createElement('canvas', Xu({}, B, { width: u, height: t, ref: g }))
                        );
                    }),
                    Yu = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Vu = {
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
                var $u, qu;
                ((qu = $u || ($u = {}))[(qu.Left = 0)] = 'Left'),
                    (qu[(qu.Right = 1)] = 'Right'),
                    (qu[(qu.Top = 2)] = 'Top'),
                    (qu[(qu.Bottom = 3)] = 'Bottom');
                const Ku = ['__left', '__right', '__top', '__bottom'];
                (0, n.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: o = {} }, i) => {
                        const l = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = (0, n.useState)(window.decorator && window.decorator.directionType),
                            _ = E[0],
                            m = E[1],
                            A = (0, n.useCallback)(() => {
                                H.playClick(), r.O.view.sendEvent.close();
                            }, []),
                            d = (0, n.useCallback)(() => {
                                H.playHighlight();
                            }, []),
                            F = B()(Vu.arrow, Vu[`arrow${Ku[_]}`]);
                        Yu(
                            () => (
                                r.O.client.events.mouse.enableOutside(),
                                r.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : r.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const D = (0, n.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === l.current || u === c.current) return;
                                        u = u.parentNode;
                                    } while (u);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = r.O.client.getMouseGlobalPosition(),
                                            u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            t =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (u && !t) return;
                                    }
                                    t ? t() : r.O.view.sendEvent.close('popover');
                                },
                                [l, c, t],
                            ),
                            C = (0, n.useCallback)(
                                () => (
                                    r.O.view.freezeTextureBeforeResize(),
                                    ((e) => {
                                        let u,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null),
                                                        (u = (() => {
                                                            if (s.current) {
                                                                const e = s.current.scrollWidth,
                                                                    u = s.current.scrollHeight;
                                                                r.O.view.resize(e, u),
                                                                    m(window.decorator.directionType);
                                                            }
                                                        })());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })()
                                ),
                                [],
                            );
                        return (
                            (0, n.useImperativeHandle)(i, () => ({ updateSize: C })),
                            Yu(() => {
                                r.O.view.setInputPaddingsRem(58);
                            }),
                            (0, n.useEffect)(() => {
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
                                })((0, Y.Eu)());
                                return (
                                    !u && e.promise.then(() => C()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', D);
                                    }
                                );
                            }, [C, D, u]),
                            a().createElement(
                                'div',
                                { className: Vu.base, ref: s },
                                a().createElement(
                                    'div',
                                    { className: Vu.decorator },
                                    a().createElement(
                                        'div',
                                        { className: Vu.content, ref: l },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            a().createElement(
                                                Xe,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                a().createElement('div', {
                                                    className: Vu.closeBtn,
                                                    onClick: A,
                                                    onMouseEnter: d,
                                                    ref: c,
                                                }),
                                            ),
                                    ),
                                    a().createElement('div', { className: F, style: o.arrow }),
                                ),
                            )
                        );
                    },
                ),
                    R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                let Zu, Qu, Ju;
                R.strings.ny.levelUpView.rewards,
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge');
                    })(Zu || (Zu = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Small = 'small');
                    })(Qu || (Qu = {})),
                    (function (e) {
                        (e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB');
                    })(Ju || (Ju = {}));
                const et = () => {},
                    ut =
                        (du.CITY,
                        du.PET,
                        du.MACHINE,
                        du.TASKS,
                        ((e, u) => {
                            const t = (0, n.createContext)({});
                            return [
                                function ({ mode: e = 'real', options: o, children: i, mocks: l }) {
                                    const s = (0, n.useRef)([]),
                                        c = (e, t, n) => {
                                            var a;
                                            const o = (function ({
                                                    initializer: e = !0,
                                                    rootId: u = 0,
                                                    getRoot: t = mu,
                                                    context: n = 'model',
                                                } = {}) {
                                                    const a = new Map();
                                                    function o(e, u = 0) {
                                                        viewEnv.removeDataChangedCallback(e, u)
                                                            ? a.delete(e)
                                                            : console.error("Can't remove callback by id:", e);
                                                    }
                                                    engine.whenReady.then(() => {
                                                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                            t.forEach((u) => {
                                                                const t = a.get(u);
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
                                                        subscribe: (t, o) => {
                                                            const l = 'string' == typeof o ? `${n}.${o}` : n,
                                                                s = r.O.view.addModelObserver(l, u, !0);
                                                            return a.set(s, t), e && t(i(o)), s;
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
                                                                                        return _u(e, u);
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
                                                                                              ? _u(e, u)
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
                                                                    })(a.keys());
                                                                !(e = t()).done;

                                                            )
                                                                o(e.value, u);
                                                        },
                                                        unsubscribe: o,
                                                    };
                                                })(t),
                                                i =
                                                    'real' === e
                                                        ? o
                                                        : Object.assign({}, o, {
                                                              readByPath:
                                                                  null != (a = null == n ? void 0 : n.getter)
                                                                      ? a
                                                                      : () => {},
                                                          }),
                                                l = (u) =>
                                                    'mocks' === e
                                                        ? null == n
                                                            ? void 0
                                                            : n.getter(u)
                                                        : i.readByPath(u),
                                                c = (e) => s.current.push(e),
                                                E = (({ observableModel: e }) => {
                                                    const u = Object.assign({}, e.primitives(['animationCurrency']), {
                                                            root: e.object(),
                                                            cameraState: e.object('cameraState'),
                                                            currentState: e.object('currentState'),
                                                            firMarker: e.object('firMarker'),
                                                            currencyPanelItems: e.array('currencyPanel.items'),
                                                        }),
                                                        t = (e) =>
                                                            (function (e, u) {
                                                                return Array.isArray(e)
                                                                    ? e.map(u)
                                                                    : e.map(({ value: e }, t, r) => u(e, t, r));
                                                            })(e, su),
                                                        r = (0, Au.Om)(() => t(u.currencyPanelItems.get()), {
                                                            equals: cu,
                                                        });
                                                    return Object.assign({}, u, { computes: { getCurrencyItems: r } });
                                                })({
                                                    mode: e,
                                                    readByPath: l,
                                                    externalModel: i,
                                                    observableModel: {
                                                        array: (u, t) => {
                                                            const r = null != t ? t : l(u),
                                                                n = Eu.LO.box(r, { equals: cu });
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Eu.aD)((e) => n.set(e)),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        },
                                                        object: (u, t) => {
                                                            const r = null != t ? t : l(u),
                                                                n = Eu.LO.box(r, { equals: cu });
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Eu.aD)((e) => n.set(e)),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        },
                                                        primitives: (u, t) => {
                                                            const r = l(t);
                                                            if (Array.isArray(u)) {
                                                                const n = u.reduce(
                                                                    (e, u) => ((e[u] = Eu.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                                return (
                                                                    'real' === e &&
                                                                        i.subscribe(
                                                                            (0, Eu.aD)((e) => {
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
                                                                    o = a.reduce(
                                                                        (e, [u, t]) => (
                                                                            (e[t] = Eu.LO.box(r[u], {})), e
                                                                        ),
                                                                        {},
                                                                    );
                                                                return (
                                                                    'real' === e &&
                                                                        i.subscribe(
                                                                            (0, Eu.aD)((e) => {
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
                                        A = _[1],
                                        d = (0, n.useState)(() => c(e, o, l)),
                                        F = d[0],
                                        D = d[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            E.current ? D(c(m, o, l)) : (E.current = !0);
                                        }, [l, m, o]),
                                        (0, n.useEffect)(() => {
                                            A(e);
                                        }, [e]),
                                        (0, n.useEffect)(
                                            () => () => {
                                                F.externalModel.dispose(), s.current.forEach((e) => e());
                                            },
                                            [F],
                                        ),
                                        a().createElement(t.Provider, { value: F }, i)
                                    );
                                },
                                () => (0, n.useContext)(t),
                            ];
                        })(0, ({ externalModel: e }) => ({
                            moveSpace: e.createCallback(
                                ({ dx: e, dy: u, dz: t }) => ({ dx: e, dy: u, dz: t }),
                                'onMoveSpace',
                            ),
                            mouseOver3dScene: e.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'onMouseOver3dScene',
                            ),
                            onHoverMarker: e.createCallback(
                                ({ markerName: e }) => ({ markerName: e }),
                                'onHoverMarker',
                            ),
                            onHoverOutMarker: e.createCallback(
                                ({ markerName: e }) => ({ markerName: e }),
                                'onHoverOutMarker',
                            ),
                            onLevelUp: e.createCallbackNoArgs('onLevelUp'),
                            close: e.createCallbackNoArgs('onClose'),
                        }))),
                    tt = ut[0],
                    rt = ut[1];
                let nt, at, ot;
                !(function (e) {
                    (e[(e.NOT_EXIST = -1)] = 'NOT_EXIST'),
                        (e[(e.NOT_INSTALLED = 0)] = 'NOT_INSTALLED'),
                        (e[(e.INSTALLED = 1)] = 'INSTALLED'),
                        (e[(e.IN_TRANSITION = 2)] = 'IN_TRANSITION');
                })(nt || (nt = {})),
                    (function (e) {
                        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.FIR = 1)] = 'FIR'), (e[(e.PANORAMA = 2)] = 'PANORAMA');
                    })(at || (at = {})),
                    (function (e) {
                        (e.Mandarin = 'ny25_mandarin'), (e.NyGiftMachineToken = 'ny25Token'), (e.Gold = 'gold');
                    })(ot || (ot = {}));
                let it;
                var lt;
                let st;
                ((lt = it || (it = {})).SHORT_DATE = 'short-date'),
                    (lt.SHORT_TIME = 'short-time'),
                    (lt.SHORT_DATE_TIME = 'short-date-time'),
                    (lt.FULL_DATE = 'full-date'),
                    (lt.FULL_DATE_TIME = 'full-date-time'),
                    (lt.MONTH = 'month'),
                    (lt.MONTH_DATE = 'month-date'),
                    (lt.DATE_MONTH = 'date-month'),
                    (lt.MONTH_YEAR = 'month-year'),
                    (lt.WEEK_DAY = 'week-day'),
                    (lt.WEEK_DAY_TIME = 'week-day-time'),
                    (lt.YEAR = 'year'),
                    (lt.DATE_YEAR = 'date-year'),
                    Date.now(),
                    Y.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(st || (st = {})),
                    Y.Sw.instance;
                const ct = (e) => {
                        const u = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                u.current = e;
                            }, [e]),
                            u.current
                        );
                    },
                    Et = {
                        base: 'AnimatedLevelUpArrow_base_c4',
                        base__small: 'AnimatedLevelUpArrow_base__small_b3',
                        base__medium: 'AnimatedLevelUpArrow_base__medium_37',
                        base__large: 'AnimatedLevelUpArrow_base__large_65',
                        base__extraLarge: 'AnimatedLevelUpArrow_base__extraLarge_bc',
                        arrow: 'AnimatedLevelUpArrow_arrow_d3',
                        arrowUpSmall: 'AnimatedLevelUpArrow_arrowUpSmall_b9',
                        arrow__1: 'AnimatedLevelUpArrow_arrow__1_8c',
                        arrow__2: 'AnimatedLevelUpArrow_arrow__2_10',
                        arrow__3: 'AnimatedLevelUpArrow_arrow__3_e9',
                        arrowUpMedium: 'AnimatedLevelUpArrow_arrowUpMedium_31',
                        arrowUpLarge: 'AnimatedLevelUpArrow_arrowUpLarge_e7',
                        arrowUpExtraLarge: 'AnimatedLevelUpArrow_arrowUpExtraLarge_5d',
                    };
                let _t;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'), (e.ExtraLarge = 'extraLarge');
                })(_t || (_t = {}));
                const mt = (0, n.memo)(({ size: e = _t.Small }) =>
                        a().createElement(
                            'div',
                            { className: B()(Et.base, Et[`base__${e}`]) },
                            a().createElement('div', { className: B()(Et.arrow, Et.arrow__1) }),
                            a().createElement('div', { className: B()(Et.arrow, Et.arrow__2) }),
                            a().createElement('div', { className: B()(Et.arrow, Et.arrow__3) }),
                        ),
                    ),
                    At = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseOver',
                        'onMouseOut',
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
                function dt(e) {
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
                const Ft = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Dt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseOver,
                            o = e.onMouseOut,
                            i = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, At);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, n.useMemo)(() => C || ke().resId, [C]),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Ft(t, A, { isMouseEvent: !0, on: !0, arguments: dt(r) }, h),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, A, r, h, B]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Ft(t, A, { on: !1 }, h),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, A, h, g]),
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
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseout', w),
                                    () => {
                                        window.removeEventListener('mouseout', w), w();
                                    }
                                ),
                                [w],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseOver:
                                                  ((S = u.props.onMouseOver),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          a && a(e),
                                                          S && S(e),
                                                          e.stopPropagation());
                                                  }),
                                              onMouseOut: ((e) => (u) => {
                                                  w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseOut),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && w(), null == l || l(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && w(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Ct = {
                        base: 'Marker_base_37',
                        content: 'Marker_content_84',
                        textShadow: 'Marker_textShadow_6c',
                        markerArrow: 'Marker_markerArrow_9f',
                        lvlUpArrow: 'Marker_lvlUpArrow_d7',
                        zoneName: 'Marker_zoneName_97',
                        zoneLevel: 'Marker_zoneLevel_18',
                        arrowAnimation: 'Marker_arrowAnimation_cc',
                        levelBlock: 'Marker_levelBlock_fb',
                        button: 'Marker_button_aa',
                        currency: 'Marker_currency_9f',
                        arrowWrapper: 'Marker_arrowWrapper_1f',
                        arrowAnimation__small: 'Marker_arrowAnimation__small_e3',
                        arrowAnimation__medium: 'Marker_arrowAnimation__medium_f3',
                        arrowAnimation__large: 'Marker_arrowAnimation__large_4d',
                        arrowAnimation__extraLarge: 'Marker_arrowAnimation__extraLarge_17',
                        arrowAnimation__animation: 'Marker_arrowAnimation__animation_6a',
                        arrowUp: 'Marker_arrowUp_8c',
                        base__onboarding: 'Marker_base__onboarding_f5',
                        zoneNameHeaer: 'Marker_zoneNameHeaer_0b',
                        zoneName__big: 'Marker_zoneName__big_e1',
                        base__hovered: 'Marker_base__hovered_3f',
                        zoneNameShadow: 'Marker_zoneNameShadow_7b',
                        zoneLevelShadow: 'Marker_zoneLevelShadow_fa',
                        zoneNameShadow__big: 'Marker_zoneNameShadow__big_b9',
                        zoneLevel__big: 'Marker_zoneLevel__big_7d',
                        textShine: 'Marker_textShine_13',
                        fadeIn: 'Marker_fadeIn_93',
                        textShine__big: 'Marker_textShine__big_9c',
                        button__hover: 'Marker_button__hover_c1',
                        button__big: 'Marker_button__big_aa',
                        buttonText: 'Marker_buttonText_f1',
                        currencyValue: 'Marker_currencyValue_14',
                        currencyIcon: 'Marker_currencyIcon_24',
                        currencyValue__big: 'Marker_currencyValue__big_88',
                        bgEllipse1: 'Marker_bgEllipse1_0f',
                        bgEllipse2: 'Marker_bgEllipse2_f1',
                        bgEllipse3: 'Marker_bgEllipse3_98',
                        currencyEllipse: 'Marker_currencyEllipse_ff',
                        bgEllipse1__big: 'Marker_bgEllipse1__big_f7',
                        bgEllipse2__big: 'Marker_bgEllipse2__big_91',
                        bgEllipse3__big: 'Marker_bgEllipse3__big_ca',
                        shineBlock: 'Marker_shineBlock_2f',
                        interactiveZone: 'Marker_interactiveZone_10',
                        interactiveZone__horizontal: 'Marker_interactiveZone__horizontal_9a',
                        particlesCanvas: 'Marker_particlesCanvas_8c',
                        particlesCanvas__visible: 'Marker_particlesCanvas__visible_60',
                    },
                    Bt = R.strings.ny;
                let gt;
                !(function (e) {
                    (e.PLAY = 'play'), (e.STOP = 'stop');
                })(gt || (gt = {}));
                const vt = (e) =>
                        `R.images.new_year.gui.maps.icons.newYear.markers.arrow_particles.ObjectLevelUpParticles_${(e + 34).toString().padStart(5, '0')}`,
                    pt = (0, n.memo)(
                        ({
                            currentLevel: e,
                            zone: u,
                            currencyCount: t,
                            levelUpCurrencyNeed: r,
                            onLevelUp: o,
                            onClick: i,
                            isHovered: l = !1,
                            isPanelHovered: s = !1,
                            isOnboarding: c = !1,
                            isAnimation: E = !1,
                        }) => {
                            var _;
                            const m = null != (_ = ct(e)) ? _ : e,
                                A = (0, n.useState)(!1),
                                d = A[0],
                                F = A[1],
                                D = f().mediaSize,
                                C = (0, n.useState)(gt.STOP),
                                g = C[0],
                                v = C[1],
                                h = (0, n.useState)(!1),
                                b = h[0],
                                w = h[1],
                                S = (0, n.useState)(!1),
                                y = S[0],
                                x = S[1],
                                T = c ? E : m !== e,
                                M = g === gt.PLAY || T,
                                L = D >= p.Medium ? Qu.Big : Qu.Small,
                                k = L === Qu.Big ? _t.Large : _t.Medium,
                                N = ((e < 5 && t >= r) || M) && !b,
                                O = l && N && !M,
                                P = l || s,
                                H = (0, n.useCallback)(() => {
                                    F(!0);
                                }, []),
                                U = (0, n.useCallback)(() => F(!1), []),
                                W = (0, n.useCallback)(() => {
                                    o({ customizationZone: u }), I(R.sounds.tabb());
                                }, [u, o]);
                            (0, n.useEffect)(() => {
                                O && I(R.sounds.highlight());
                            }, [O]),
                                (0, n.useEffect)(() => {
                                    if (T)
                                        return (
                                            x(!0),
                                            v(gt.PLAY),
                                            X(() => {
                                                x(!1);
                                            }, 1300)
                                        );
                                }, [T]);
                            const G = (0, n.useCallback)(() => {
                                v(gt.STOP), w(!0);
                            }, []);
                            return (
                                (0, n.useEffect)(() => {
                                    b && w(!1);
                                }, [b]),
                                a().createElement(
                                    'div',
                                    { className: B()(Ct.base, P && Ct.base__hovered, c && Ct.base__onboarding) },
                                    a().createElement(
                                        'div',
                                        { className: Ct.arrowWrapper },
                                        a().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    Ct.arrowAnimation,
                                                    Ct[`arrowAnimation__${k}`],
                                                    M && Ct.arrowAnimation__animation,
                                                ),
                                            },
                                            N && a().createElement(mt, { size: k }),
                                        ),
                                    ),
                                    a().createElement(ju, {
                                        width: 114,
                                        height: 140,
                                        state: g,
                                        frameTime: 60,
                                        className: B()(Ct.particlesCanvas, y && M && Ct.particlesCanvas__visible),
                                        frameCount: 25,
                                        onAnimationComplete: G,
                                        getSrcByFrame: vt,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: Ct.content },
                                        a().createElement(
                                            'div',
                                            { className: Ct.zoneNameHeaer },
                                            a().createElement(xe, {
                                                text: Bt.customizationZones.name.$dyn(u),
                                                className: B()(Ct.zoneName, Ct[`zoneName__${L}`]),
                                            }),
                                            a().createElement('div', {
                                                className: B()(Ct.zoneNameShadow, Ct[`zoneNameShadow__${L}`]),
                                            }),
                                        ),
                                        P &&
                                            a().createElement('div', {
                                                className: B()(Ct.textShine, Ct[`textShine__${L}`]),
                                            }),
                                        a().createElement('div', { className: Ct.interactiveZone, onClick: i }),
                                        a().createElement('div', {
                                            className: B()(Ct.interactiveZone, Ct.interactiveZone__horizontal),
                                            onClick: i,
                                        }),
                                        O
                                            ? a().createElement(
                                                  a().Fragment,
                                                  null,
                                                  a().createElement(
                                                      Dt,
                                                      {
                                                          contentId:
                                                              R.views.new_year.lobby.new_year.tooltips.LevelUpWidgetTooltip(
                                                                  'resId',
                                                              ),
                                                          args: { customizationZone: u },
                                                      },
                                                      a().createElement(
                                                          'div',
                                                          {
                                                              className: B()(
                                                                  Ct.button,
                                                                  Ct[`button__${L}`],
                                                                  d && Ct.button__hover,
                                                              ),
                                                              onMouseEnter: H,
                                                              onMouseLeave: U,
                                                              onClick: W,
                                                          },
                                                          a().createElement(xe, {
                                                              text: Bt.customizationZones.markerLevelUp(),
                                                              className: Ct.buttonText,
                                                              format: { binding: { level: e + 1 } },
                                                          }),
                                                      ),
                                                  ),
                                                  a().createElement(
                                                      'div',
                                                      { className: Ct.currency },
                                                      a().createElement(nu, {
                                                          value: r,
                                                          classNames: {
                                                              value: B()(Ct.currencyValue, Ct[`currencyValue__${L}`]),
                                                              icon: Ct.currencyIcon,
                                                          },
                                                          size: tu.Small,
                                                          iconPosition: ru.Right,
                                                      }),
                                                      a().createElement('div', { className: Ct.currencyEllipse }),
                                                  ),
                                              )
                                            : a().createElement(
                                                  'div',
                                                  { className: Ct.levelBlock },
                                                  a().createElement(xe, {
                                                      text:
                                                          ((z = e),
                                                          0 === z
                                                              ? Bt.customizationZones.minLevel()
                                                              : 5 === z
                                                                ? Bt.customizationZones.maxLevel()
                                                                : Bt.customizationZones.markerLevel()),
                                                      className: B()(Ct.zoneLevel, Ct[`zoneLevel__${L}`]),
                                                      format: { binding: { level: e } },
                                                  }),
                                                  a().createElement('div', {
                                                      className: B()(Ct.zoneLevelShadow, Ct[`zoneLevelShadow__${L}`]),
                                                  }),
                                              ),
                                    ),
                                    O
                                        ? a().createElement(
                                              'div',
                                              { className: Ct.shineBlock },
                                              a().createElement('div', {
                                                  className: B()(Ct.bgEllipse1, Ct[`bgEllipse1__${L}`]),
                                              }),
                                              a().createElement('div', {
                                                  className: B()(Ct.bgEllipse2, Ct[`bgEllipse2__${L}`]),
                                              }),
                                          )
                                        : a().createElement('div', { className: Ct.markerArrow }),
                                )
                            );
                            var z;
                        },
                    ),
                    ht = 'Marker',
                    bt = 'firMarker',
                    wt = R.strings.ny.onboardingView,
                    ft = (0, q.Pi)(() => {
                        const e = rt(),
                            u = e.model,
                            t = e.controls,
                            r = (0, n.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = (0, n.useState)(''),
                            s = l[0],
                            c = l[1],
                            E = u.firMarker.get(),
                            _ = E.posx,
                            m = E.posy,
                            A = E.currentLevel,
                            d = E.customizationZone,
                            F = E.currencyCount,
                            D = E.levelUpCurrencyNeed,
                            C = E.isZoneHovered,
                            B = (0, n.useCallback)(() => {
                                t.onHoverOutMarker({ markerName: d.value }),
                                    t.onLevelUp(),
                                    i(!0),
                                    I(R.sounds.hangar_newyear_level_up());
                            }, [t, d]),
                            g = (0, n.useCallback)(
                                (e) => () => {
                                    c(e);
                                    const u = Ee(e.split(ht)[0]);
                                    t.onHoverMarker({ markerName: u }), t.mouseOver3dScene({ isOver3dScene: !0 });
                                },
                                [t],
                            ),
                            v = (0, n.useCallback)(
                                (e) => () => {
                                    c('');
                                    const u = Ee(e.split(ht)[0]);
                                    t.onHoverOutMarker({ markerName: u }), t.mouseOver3dScene({ isOver3dScene: !1 });
                                },
                                [t],
                            );
                        return a().createElement(
                            'div',
                            { className: 'DefaultViewContent_base_bb' },
                            a().createElement(xe, {
                                text: wt.atmosphereTitle(),
                                className: 'DefaultViewContent_title_04',
                            }),
                            a().createElement(
                                'div',
                                {
                                    style: { left: `${_}rem`, top: `${m}rem` },
                                    className: 'DefaultViewContent_marker_5b',
                                    onMouseEnter: g(bt),
                                    onMouseLeave: v(bt),
                                },
                                a().createElement(pt, {
                                    currentLevel: A,
                                    zone: d.value,
                                    currencyCount: F,
                                    levelUpCurrencyNeed: D,
                                    isHovered: bt === s || C,
                                    isPanelHovered: !1,
                                    onLevelUp: B,
                                    isOnboarding: !0,
                                    isAnimation: o,
                                }),
                            ),
                        );
                    }),
                    St = {
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
                    yt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    xt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Tt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Mt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => u || {}, [u]);
                        let i = yt.exec(e),
                            l = e,
                            s = 0;
                        for (; i; ) {
                            const t = i[0],
                                n = xt.exec(t),
                                c = Tt.exec(t),
                                E = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + s++ + e;
                                (l = l.replace(t, `%(${i})`)),
                                    (o[i] = St[e]
                                        ? a().createElement(
                                              'span',
                                              { className: St[e] },
                                              a().createElement(De, { text: E, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(De, { text: E, binding: u }),
                                          ));
                            }
                            i = yt.exec(e);
                        }
                        return a().createElement(De, { text: l, classMix: t, binding: o });
                    }),
                    Lt = R.strings.ny.customizationZones,
                    kt = (e, u) => (0 === e ? Lt.minLevel() : e === u ? Lt.maxLevel() : Lt.level()),
                    Nt = (0, n.memo)(({ title: e, level: u, maxLevel: t }) =>
                        a().createElement(
                            Pe,
                            {
                                contentId: R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip('resId'),
                                args: { customizationZone: e },
                            },
                            a().createElement(
                                'div',
                                { className: 'CustomizationZoneHeader_base_65' },
                                a().createElement(
                                    'div',
                                    { className: 'CustomizationZoneHeader_container_40' },
                                    a().createElement(xe, {
                                        text: Lt.name.$dyn(e),
                                        className: 'CustomizationZoneHeader_title_7e',
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: 'CustomizationZoneHeader_levelHolder_50' },
                                        a().createElement(Mt, {
                                            text: kt(u, t),
                                            classMix: 'CustomizationZoneHeader_level_ec',
                                            binding: { level: u },
                                        }),
                                        a().createElement('div', { className: 'CustomizationZoneHeader_icon_15' }),
                                    ),
                                ),
                            ),
                        ),
                    );
                const Ot = 'LevelUpWidget_container_f9',
                    Rt = 'LevelUpWidget_divider_32',
                    Pt = 'LevelUpWidget_currencyValue_2c',
                    It = 'LevelUpWidget_currencyIcon_f0',
                    Ht = R.strings.ny.levelUpWidget;
                let Ut;
                !(function (e) {
                    (e.LevelUp = 'levelUp'), (e.NotEnough = 'notEnough');
                })(Ut || (Ut = {}));
                const Wt = (0, n.memo)(
                        ({
                            zoneName: e,
                            currentLevel: u,
                            currencyCount: t,
                            levelUpCurrencyNeed: r,
                            currencyType: o = Je.Mandarin,
                            isOnboarding: i = !1,
                            onLevelUp: l,
                        }) => {
                            const s = t >= r,
                                c = (0, n.useState)(() => (s ? Ut.LevelUp : Ut.NotEnough)),
                                E = c[0],
                                _ = c[1],
                                m = (0, n.useState)(!1),
                                A = m[0],
                                d = m[1],
                                F = (0, n.useState)(!1),
                                D = F[0],
                                C = F[1],
                                g = (0, n.useState)(() => u),
                                v = g[0],
                                h = g[1],
                                b = (0, n.useState)(() => e),
                                w = b[0],
                                S = b[1],
                                y = (0, n.useState)(() => r),
                                x = y[0],
                                T = y[1],
                                M = (function () {
                                    const e = (0, n.useRef)(0);
                                    var u;
                                    return (
                                        (u = () => {
                                            window.clearTimeout(e.current);
                                        }),
                                        (0, n.useEffect)(() => u, []),
                                        (0, n.useMemo)(
                                            () => ({
                                                run: (u, t) => {
                                                    window.clearTimeout(e.current),
                                                        (e.current = window.setTimeout(() => {
                                                            u(), (e.current = 0);
                                                        }, t));
                                                },
                                                clear: () => {
                                                    window.clearTimeout(e.current), (e.current = 0);
                                                },
                                                get isRunning() {
                                                    return 0 !== e.current;
                                                },
                                            }),
                                            [],
                                        )
                                    );
                                })(),
                                L = M.run,
                                k = M.clear,
                                N = v + 1,
                                O = f().mediaSize >= p.Medium ? _t.ExtraLarge : _t.Large;
                            (0, n.useEffect)(
                                () => (
                                    D && w === e
                                        ? (d(!0),
                                          !i &&
                                              L(() => {
                                                  _(s ? Ut.LevelUp : Ut.NotEnough), d(!1), h(u), T(r), k();
                                              }, 2400))
                                        : (_(s ? Ut.LevelUp : Ut.NotEnough), h(u), T(r), S(e)),
                                    () => C(!1)
                                ),
                                [k, u, t, s, r, e, L, i && D],
                            );
                            const P = {
                                [Ut.LevelUp]: a().createElement(
                                    'div',
                                    { className: B()(Ot, 'LevelUpWidget_container__normal_65') },
                                    a().createElement('div', { className: 'LevelUpWidget_bgEllipseDark_48' }),
                                    a().createElement('div', { className: 'LevelUpWidget_bgEllipseLight_b3' }),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'LevelUpWidget_content_46',
                                            onClick: A
                                                ? void 0
                                                : () => {
                                                      H.playClick(), l({ customizationZone: e }), C(!0);
                                                  },
                                            onMouseEnter: () => {
                                                H.playHighlight();
                                            },
                                        },
                                        a().createElement('div', { className: 'LevelUpWidget_bgRays_a0' }),
                                        a().createElement(
                                            'div',
                                            { className: 'LevelUpWidget_arrow_12' },
                                            a().createElement(mt, { size: O }),
                                        ),
                                        a().createElement('div', { className: 'LevelUpWidget_textEllipse_68' }),
                                        a().createElement(xe, {
                                            text: Ht.title(),
                                            className: 'LevelUpWidget_text_a8',
                                            format: {
                                                binding: {
                                                    level: a().createElement(xe, {
                                                        text: N,
                                                        className: 'LevelUpWidget_text__level_19',
                                                    }),
                                                },
                                            },
                                        }),
                                        a().createElement('div', { className: Rt }),
                                        a().createElement('div', { className: 'LevelUpWidget_dividerShadow_85' }),
                                        a().createElement(
                                            'div',
                                            { className: 'LevelUpWidget_button_a8' },
                                            a().createElement(xe, {
                                                text: Ht.button.up(),
                                                className: 'LevelUpWidget_buttonText_12',
                                                format: {
                                                    binding: {
                                                        currency: a().createElement(nu, {
                                                            value: x,
                                                            type: o,
                                                            classNames: {
                                                                container: 'LevelUpWidget_currencyContainer_c3',
                                                                value: Pt,
                                                                icon: It,
                                                            },
                                                            size: tu.Small,
                                                        }),
                                                    },
                                                },
                                            }),
                                        ),
                                    ),
                                ),
                                [Ut.NotEnough]: a().createElement(
                                    'div',
                                    { className: B()(Ot, 'LevelUpWidget_container__notEnough_92') },
                                    a().createElement('div', { className: 'LevelUpWidget_maskDark_b4' }),
                                    a().createElement(xe, {
                                        text: Ht.upCondition(),
                                        className: 'LevelUpWidget_upConditionText_7a',
                                        format: {
                                            binding: {
                                                currency: a().createElement(nu, {
                                                    value: x,
                                                    type: o,
                                                    classNames: {
                                                        container: 'LevelUpWidget_currencyContainerNotEnough_37',
                                                        value: Pt,
                                                        icon: It,
                                                    },
                                                    size: tu.Small,
                                                    iconPosition: ru.Right,
                                                }),
                                            },
                                        },
                                    }),
                                    a().createElement('div', { className: B()(Rt, 'LevelUpWidget_divider__large_34') }),
                                ),
                            };
                            return a().createElement(
                                Pe,
                                { contentId: R.views.new_year.lobby.new_year.tooltips.LevelUpWidgetTooltip('resId') },
                                a().createElement(
                                    'div',
                                    { className: B()('LevelUpWidget_base_e4', A && 'LevelUpWidget_base__animate_99') },
                                    P[E],
                                ),
                            );
                        },
                    ),
                    Gt = (0, q.Pi)(() => {
                        const e = rt(),
                            u = e.model,
                            t = e.controls,
                            r = u.firMarker.get(),
                            o = r.currentLevel,
                            i = r.customizationZone,
                            l = r.currencyCount,
                            s = r.levelUpCurrencyNeed,
                            c = (0, n.useMemo)(() => ({ title: i.value, level: o }), [o, i.value]),
                            E = (0, n.useMemo)(
                                () => ({
                                    zoneName: i.value,
                                    currentLevel: o,
                                    currencyCount: l,
                                    levelUpCurrencyNeed: s,
                                    currencyType: ot.Mandarin,
                                    isMaximumZoneLevel: !1,
                                    isOnboarding: !0,
                                    onLevelUp: t.onLevelUp,
                                }),
                                [t.onLevelUp, l, o, i.value, s],
                            );
                        return a().createElement(
                            'div',
                            { className: 'FirViewContent_base_07' },
                            a().createElement(
                                'div',
                                { className: 'FirViewContent_headerWrapper_e0' },
                                a().createElement(Nt, c),
                            ),
                            a().createElement(
                                'div',
                                { className: 'FirViewContent_widgetWrapper_6b' },
                                a().createElement(Wt, E),
                            ),
                        );
                    }),
                    zt = R.strings.ny.onboardingView,
                    Xt = (0, q.Pi)(() => {
                        const e = rt(),
                            u = e.controls,
                            t = e.model,
                            r = t.root.get(),
                            o = r.cameraState,
                            i = r.currentState,
                            l = t.computes.getCurrencyItems(),
                            s = t.animationCurrency.get(),
                            c = i === at.DEFAULT,
                            E = i === at.FIR,
                            _ = o === nt.INSTALLED,
                            m = (0, n.useState)(s > 0),
                            A = m[0],
                            d = m[1],
                            F = (0, n.useState)(!1),
                            D = F[0],
                            C = F[1],
                            g = (0, n.useState)(!1),
                            v = g[0],
                            p = g[1],
                            h = (0, n.useState)(!1),
                            b = h[0],
                            w = h[1],
                            f = (0, n.useMemo)(() => (c ? [zt.close(), u.close] : [zt.back(), u.close]), [c, u.close]),
                            S = f[0],
                            y = f[1],
                            x = !v && _ && i !== at.PANORAMA;
                        var T;
                        (T = () => {
                            v || y();
                        }),
                            $(j.n.ESCAPE, T),
                            (0, n.useEffect)(() => {
                                if (o === nt.INSTALLED && A)
                                    return (
                                        p(!0),
                                        X(
                                            () => (
                                                C(!0),
                                                I(R.sounds.hangar_newyear_add_resource()),
                                                X(
                                                    () => (
                                                        w(!0),
                                                        I(R.sounds.hangar_newyear_resources_flight()),
                                                        X(() => {
                                                            p(!1), d(!1);
                                                        }, 500)
                                                    ),
                                                    5200,
                                                )
                                            ),
                                            600,
                                        )
                                    );
                            }, [o, A]);
                        const M = B()('App_base_62', v && 'App_base__animation_36');
                        return a().createElement(
                            lu,
                            { moveSpace: u.moveSpace, onMouseOver3dScene: u.mouseOver3dScene, isDisabled: !_ || c },
                            a().createElement(
                                'div',
                                { className: M },
                                x &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(iu, {
                                            currencyItems: l,
                                            classNames: { base: 'App_currencyContainer_ac' },
                                        }),
                                        c && a().createElement(ft, null),
                                        E && a().createElement(Gt, null),
                                        a().createElement(
                                            'div',
                                            { className: 'App_close_3d' },
                                            a().createElement(z, {
                                                caption: S,
                                                type: 'close',
                                                side: 'right',
                                                onClick: y,
                                            }),
                                        ),
                                    ),
                                v &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    'App_animationCounterContainer_02',
                                                    b && 'App_animationCounterContainer__animation_1b',
                                                ),
                                            },
                                            a().createElement(
                                                'div',
                                                { className: 'App_counterContainer_05' },
                                                a().createElement(
                                                    'div',
                                                    { className: 'App_counterBlock_62' },
                                                    D &&
                                                        a().createElement(Me, {
                                                            number: s,
                                                            classNames: {
                                                                base: 'App_counterBase_7a',
                                                                counter: 'App_counterNumber_4a',
                                                            },
                                                        }),
                                                ),
                                                a().createElement('div', { className: 'App_currencyIcon_d6' }),
                                            ),
                                        ),
                                        a().createElement('div', { className: 'App_counterShadow_40' }),
                                    ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    r.O.view.extraSize.set(0, 60),
                        P().render(
                            a().createElement(
                                tt,
                                null,
                                a().createElement(
                                    N,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: 'OnboardingView_base_e0' },
                                        a().createElement(Xt, null),
                                    ),
                                ),
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, r] = deferred[l], a = !0, o = 0; o < u.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, r];
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
        (__webpack_require__.j = 2308),
        (() => {
            var e = { 2308: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        l = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (u && u(t); l < a.length; l++)
                        (n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(3063));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
