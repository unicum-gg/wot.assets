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
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
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
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    }));
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
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => w,
                    }));
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
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
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
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                    w = Promise.all([
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
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
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
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
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
                t.d(u, { B3: () => c, Z5: () => o, B0: () => l, ry: () => B });
                class r {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                (((s = l || (l = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
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
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
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
                    p = () => C(l.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const f = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => C(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                s = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                m = {
                                    x: A.O.view.pxToRem(s) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            C(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
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
                        ClickOutsideManager: f,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = b;
            },
            304: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => st,
                        Bar: () => ot,
                        DefaultScroll: () => lt,
                        Direction: () => qu,
                        defaultSettings: () => Zu,
                        useHorizontalScrollApi: () => Ju,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => pt, Bar: () => gt, Default: () => Ct, useVerticalScrollApi: () => ct }));
                var a = t(6179),
                    o = t.n(a),
                    i = t(493),
                    l = t.n(i),
                    s = t(6483),
                    c = t.n(s),
                    E = t(926),
                    d = t.n(E);
                const m = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var _ = t(3138);
                const A = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var F;
                function D(e, u, t) {
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
                })(F || (F = {}));
                const g = _.O.client.getSize('rem'),
                    B = g.width,
                    C = g.height,
                    p = Object.assign({ width: B, height: C }, D(B, C, A)),
                    h = (0, a.createContext)(p),
                    v = ['children'],
                    f = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, v);
                        const r = (0, a.useContext)(h),
                            n = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            s = r.extraSmall,
                            c = r.extraLargeWidth,
                            E = r.largeWidth,
                            d = r.mediumWidth,
                            _ = r.smallWidth,
                            A = r.extraSmallWidth,
                            F = r.extraLargeHeight,
                            D = r.largeHeight,
                            g = r.mediumHeight,
                            B = r.smallHeight,
                            C = r.extraSmallHeight,
                            p = { extraLarge: F, large: D, medium: g, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && s) return u;
                        } else {
                            if (t.extraLargeWidth && c) return m(u, t, p);
                            if (t.largeWidth && E) return m(u, t, p);
                            if (t.mediumWidth && d) return m(u, t, p);
                            if (t.smallWidth && _) return m(u, t, p);
                            if (t.extraSmallWidth && A) return m(u, t, p);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && F) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && C) return u;
                            }
                        }
                        return null;
                    };
                ((f.defaultProps = {
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
                    (0, a.memo)(f));
                const b = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
                let S, w, x;
                ((0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(h),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        i = (0, a.useCallback)((e, u) => {
                            const t = _.O.view.pxToRem(e),
                                r = _.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, D(t, r, A)));
                        }, []);
                    (b(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]));
                    const l = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(h.Provider, { value: l }, e);
                }),
                    (function (e) {
                        ((e[(e.ExtraSmall = A.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = A.small.width)] = 'Small'),
                            (e[(e.Medium = A.medium.width)] = 'Medium'),
                            (e[(e.Large = A.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = A.extraLarge.width)] = 'ExtraLarge'));
                    })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = A.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = A.small.width)] = 'Small'),
                            (e[(e.Medium = A.medium.width)] = 'Medium'),
                            (e[(e.Large = A.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = A.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = A.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = A.small.height)] = 'Small'),
                            (e[(e.Medium = A.medium.height)] = 'Medium'),
                            (e[(e.Large = A.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = A.extraLarge.height)] = 'ExtraLarge'));
                    })(x || (x = {})));
                const L = () => {
                        const e = (0, a.useContext)(h),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return S.ExtraLarge;
                                    case e.large:
                                        return S.Large;
                                    case e.medium:
                                        return S.Medium;
                                    case e.small:
                                        return S.Small;
                                    case e.extraSmall:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: d().SMALL_WIDTH,
                        [w.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [w.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [x.ExtraSmall]: '',
                        [x.Small]: d().SMALL_HEIGHT,
                        [x.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [x.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [S.ExtraSmall]: '',
                        [S.Small]: d().SMALL,
                        [S.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [S.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [S.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, y);
                        const n = L(),
                            a = n.mediaWidth,
                            i = n.mediaHeight,
                            l = n.mediaSize;
                        return o().createElement('div', T({ className: c()(t, M[a], N[i], O[l]) }, r), u);
                    },
                    P = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(h),
                            t = (0, a.useState)(u),
                            r = t[0],
                            n = t[1],
                            i = (0, a.useState)(1),
                            l = i[0],
                            s = i[1],
                            c = (0, a.useState)(() => ({
                                width: 'undefined' != typeof window ? window.innerWidth : 0,
                                height: 'undefined' != typeof window ? window.innerHeight : 0,
                            })),
                            E = c[0],
                            d = c[1],
                            m = (0, a.useCallback)((e, u) => {
                                const t = _.O.view.pxToRem(e),
                                    r = _.O.view.pxToRem(u);
                                return Object.assign({ width: t, height: r }, D(t, r, A));
                            }, []),
                            F = (0, a.useCallback)((e, u) => {
                                d({ width: e, height: u });
                            }, []),
                            g = (0, a.useCallback)((e) => {
                                s(e);
                            }, []);
                        (b(() => {
                            (engine.on('clientResized', F), engine.on('self.onScaleUpdated', g));
                        }),
                            (0, a.useEffect)(() => {
                                n(m(E.width, E.height));
                            }, [E, l, m]),
                            (0, a.useEffect)(
                                () => () => {
                                    (engine.off('clientResized', F), engine.off('self.onScaleUpdated', g));
                                },
                                [F, g],
                            ));
                        const B = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return o().createElement(h.Provider, { value: B }, e);
                    }),
                    I = ['children'],
                    H = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, I);
                        return o().createElement(P, null, o().createElement(k, t, u));
                    };
                var U = t(4179);
                class W extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? U.B3.GOLD : U.B3.INTEGRAL;
                        const u = U.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                W.defaultProps = { format: 'integral' };
                var G = t(9887),
                    j = t.n(G);
                const z = ['xl', 'lg', 'md', 'sm', 'xs'],
                    V = (e) => e.includes('_') && ((e) => z.includes(e))(e.split('_').at(-1)),
                    $ = [S.ExtraLarge, S.Large, S.Medium, S.Small, S.ExtraSmall],
                    K = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (V(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = $.indexOf(u),
                                    o = (-1 !== a ? z.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== i ? i : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => z.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    X = (e, u = K) => {
                        const t = (
                            (e, u = K) =>
                            (t) => {
                                const r = L().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => V(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    Y = {
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
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                Object.keys(j());
                const Q = {
                        XL: { mt: Y.mt__XL, mr: Y.mr__XL, mb: Y.mb__XL, ml: Y.ml__XL },
                        LG: { mt: Y.mt__LG, mr: Y.mr__LG, mb: Y.mb__LG, ml: Y.ml__LG },
                        MDp: { mt: Y.mt__MDp, mr: Y.mr__MDp, mb: Y.mb__MDp, ml: Y.ml__MDp },
                        MD: { mt: Y.mt__MD, mr: Y.mr__MD, mb: Y.mb__MD, ml: Y.ml__MD },
                        SMp: { mt: Y.mt__SMp, mr: Y.mr__SMp, mb: Y.mb__SMp, ml: Y.ml__SMp },
                        SM: { mt: Y.mt__SM, mr: Y.mr__SM, mb: Y.mb__SM, ml: Y.ml__SM },
                        XS: { mt: Y.mt__XS, mr: Y.mr__XS, mb: Y.mb__XS, ml: Y.ml__XS },
                    },
                    J = (Object.keys(Q), ['mt', 'mr', 'mb', 'ml']),
                    ee = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ue = X((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            i = e.mt,
                            l = void 0 === i ? n : i,
                            s = e.mr,
                            E = void 0 === s ? n : s,
                            d = e.mb,
                            m = void 0 === d ? n : d,
                            _ = e.ml,
                            A = void 0 === _ ? n : _,
                            F = e.column,
                            D = e.row,
                            g = e.flexDirection,
                            B = void 0 === g ? (F ? 'column' : D && 'row') || void 0 : g,
                            C = e.flexStart,
                            p = e.center,
                            h = e.flexEnd,
                            v = e.spaceBetween,
                            f = e.spaceAround,
                            b = e.justifyContent,
                            S =
                                void 0 === b
                                    ? (C ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : b,
                            w = e.alignItems,
                            x = void 0 === w ? (C ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : w,
                            L = e.alignSelf,
                            y = e.wrap,
                            T = e.flexWrap,
                            M = void 0 === T ? (y ? 'wrap' : void 0) : T,
                            N = e.grow,
                            R = e.shrink,
                            O = e.flex,
                            k = void 0 === O ? (N || R ? `${N ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : O,
                            P = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, q);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: l, mr: E, mb: m, ml: A },
                                    u = ((e) =>
                                        J.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Q[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        J.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[ee[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: k,
                                        alignSelf: L,
                                        display: B || x ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: S,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, l, E, m, A, P, k, L, B, M, S, x]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return o().createElement('div', Z({ className: c()(Y.base, ...G, u), style: W }, H), I);
                    });
                let te;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(te || (te = {}));
                const re = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ne = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ae = (e, u, t = te.left) => e.split(u).reduce(t === te.left ? re : ne, []),
                    oe = (() => {
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
                    ie = ['zh_cn', 'zh_sg', 'zh_tw'],
                    le = ({ binding: e, text: u = '', classMix: t, alignment: r = te.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: c()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = te.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ie.includes(t)
                                                                ? oe(e)
                                                                : ((e, u = te.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ae(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(ae(e, r, te.left))),
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
                var se = t(3532),
                    ce = t.n(se);
                const Ee = {
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
                    de = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                Object.keys(j());
                const _e = Object.keys(ce()),
                    Ae = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Fe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    De = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ge =
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
                            'heading-H56': Ae,
                            'heading-H36': Ae,
                            'heading-H28': Fe,
                            'heading-H24': Fe,
                            'heading-H24R': Fe,
                            'heading-H22': Fe,
                            'heading-H20R': Fe,
                            'heading-H18': Fe,
                            'heading-H15': De,
                            'heading-H14': De,
                            'paragraph-P24': Fe,
                            'paragraph-P18': Fe,
                            'paragraph-P16': Fe,
                            'paragraph-P14': De,
                            'paragraph-P12': De,
                            'paragraph-P10': De,
                        }),
                    Be =
                        (Object.keys(ge),
                        (e) =>
                            e
                                ? ((e) => _e.includes(e))(e)
                                    ? { colorClassName: Ee[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ce = X((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            i = e.m,
                            l = e.mt,
                            s = void 0 === l ? i : l,
                            E = e.mr,
                            d = void 0 === E ? i : E,
                            m = e.mb,
                            _ = void 0 === m ? i : m,
                            A = e.ml,
                            F = void 0 === A ? i : A,
                            D = e.style,
                            g = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, de);
                        const C = (0, a.useMemo)(() => {
                                const e = Be(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, r), colorClassName: u };
                            }, [D, n]),
                            p = C.computedStyle,
                            h = C.colorClassName;
                        return o().createElement(
                            ue,
                            me(
                                {
                                    className: c()(Ee.base, t && Ee[t], h, r),
                                    style: p,
                                    mt: !0 === s ? ge[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === d ? ge[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? ge[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === F ? ge[t || 'paragraph-P16'].ml : F,
                                },
                                B,
                            ),
                            void 0 !== g ? o().createElement(le, me({}, g, { text: u })) : u,
                        );
                    }),
                    pe = [
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
                function he(e) {
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
                const ve = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    fe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, pe);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    g ||
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
                                [g],
                            ),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ve(t, _, { isMouseEvent: !0, on: !0, arguments: he(r) }, v),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, _, r, v, B]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ve(t, _, { on: !1 }, v),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, v, C]),
                            S = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && b(), null == l || l(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && b(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const we = R.views.common.tooltip_window.simple_tooltip_content,
                    xe = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            i = e.alert,
                            l = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, be);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: r, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, n, l]);
                        return o().createElement(
                            fe,
                            Se(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? we.SimpleTooltipHtmlContent('resId') : we.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var E;
                    };
                var Le = t(5521);
                const ye = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Te(e = Le.n.NONE, u = ye, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Le.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (_.O.view.isEventHandled()) return;
                                (_.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Me = t(3282);
                let Ne, Re, Oe, ke;
                function Pe(e) {
                    engine.call('PlaySound', e);
                }
                (!(function (e) {
                    ((e.LOCKED = 'locked'),
                        (e.AVAILABLE = 'available'),
                        (e.NOT_ENOUGH_POINTS = 'notEnoughPoints'),
                        (e.LEARNED = 'learned'),
                        (e.NEED_TO_LEARN = 'needToLearn'),
                        (e.SKIPPED = 'skipped'));
                })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.Gun = 'vehicleGun'),
                            (e.Engine = 'vehicleEngine'),
                            (e.Turret = 'vehicleTurret'),
                            (e.Hull = 'vehicleChassis'),
                            (e.DamageBonus = 'damageBonus'),
                            (e.KDBonus = 'kdBonus'),
                            (e.SmallMobilityBonus = 'smallMobilityBonus'),
                            (e.SmallKDBonus = 'smallKDBonus'),
                            (e.None = 'none'));
                    })(Re || (Re = {})),
                    (function (e) {
                        ((e.DamageGun = 'damageGun'),
                            (e.QuickfireGun = 'quickfireGun'),
                            (e.DrumGun = 'drumGun'),
                            (e.DualGun = 'dualGun'),
                            (e.MagazineReloadingGun = 'magazineReloadingGun'),
                            (e.FastHull = 'fastHull'),
                            (e.HPHull = 'hpHull'),
                            (e.ArmoredHull = 'armoredHull'),
                            (e.FastTurret = 'fastTurret'),
                            (e.HPTurret = 'hpTurret'),
                            (e.FastEngine = 'fastEngine'),
                            (e.PowerEngine = 'powerEngine'),
                            (e.None = 'none'));
                    })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.Module = 'module'), (e.VehicleModifier = 'vehicleModifier'), (e.Ability = 'ability'));
                    })(ke || (ke = {})));
                const Ie = {
                        playHighlight() {
                            Pe('highlight');
                        },
                        playClick() {
                            Pe('play');
                        },
                        playYes() {
                            Pe('yes1');
                        },
                    },
                    He = '!-_\\/[]{}—=+*^?#________',
                    Ue = ({
                        mainText: e,
                        hoverText: u,
                        classMix: t,
                        classText: r,
                        animationDuration: n = 150,
                        onClick: i,
                        isHover: l,
                    }) => {
                        const s = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = (0, a.useRef)(!1),
                            m = (0, a.useState)(!1),
                            _ = m[0],
                            A = m[1],
                            F = void 0 !== l ? l : _,
                            D = (0, a.useCallback)(() => He[Math.floor(Math.random() * He.length)], []),
                            g = (0, a.useCallback)(
                                (e) => {
                                    if (!s.current) return Promise.resolve();
                                    (E.current && cancelAnimationFrame(E.current), (d.current = !1));
                                    const u = s.current.textContent || '',
                                        t = Math.max(u.length, e.length),
                                        r = performance.now();
                                    return new Promise((a) => {
                                        const o = () => {
                                            if (!s.current) return;
                                            const i = performance.now() - r;
                                            let l = '',
                                                c = 0;
                                            for (let r = 0; r < t; r++) {
                                                const t = Math.random() * n;
                                                i >= t + (n + Math.random() * n)
                                                    ? ((l += e[r] || ''), c++)
                                                    : (l +=
                                                          i >= t
                                                              ? `<span class="ScrambleText_randomChar_d4">${D()}</span>`
                                                              : u[r] || '');
                                            }
                                            ((s.current.innerHTML = l),
                                                c === t
                                                    ? ((d.current = !1), a())
                                                    : (E.current = requestAnimationFrame(o)));
                                        };
                                        ((d.current = !0), (E.current = requestAnimationFrame(o)));
                                    });
                                },
                                [n, D],
                            );
                        return (
                            (0, a.useEffect)(
                                () => (
                                    s.current && (s.current.textContent = e),
                                    () => {
                                        E.current && cancelAnimationFrame(E.current);
                                    }
                                ),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                g(F ? u : e);
                            }, [F, u, e, g]),
                            o().createElement(
                                'div',
                                {
                                    className: c()('ScrambleText_base_cd', t),
                                    onMouseEnter: () => {
                                        void 0 === l && A(!0);
                                    },
                                    onMouseLeave: () => {
                                        void 0 === l && A(!1);
                                    },
                                    onClick: i,
                                },
                                o().createElement('div', {
                                    ref: s,
                                    className: c()('ScrambleText_text_63', { ScrambleText_text__hover_d1: F }, r),
                                }),
                            )
                        );
                    },
                    We = ({ onClick: e, hoverText: u, mainText: t, classes: r }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            l = n[1],
                            s = (0, a.useCallback)(() => {
                                (Ie.playClick(), e());
                            }, [e]),
                            E = (0, a.useCallback)(() => {
                                (Ie.playHighlight(), l(!0));
                            }, []),
                            d = (0, a.useCallback)(() => {
                                l(!1);
                            }, []);
                        return o().createElement(
                            'div',
                            { onClick: s, onMouseEnter: E, onMouseLeave: d, className: 'CloseButton_base_fb' },
                            o().createElement(Ue, {
                                mainText: t,
                                hoverText: u || t,
                                isHover: i,
                                classText: null == r ? void 0 : r.text,
                                classMix: c()('CloseButton_text_7b', null == r ? void 0 : r.scrambleBase),
                            }),
                            o().createElement('div', {
                                className: c()(
                                    'CloseButton_icon_9a',
                                    i ? 'CloseButton_icon__hover_79' : 'CloseButton_icon__default_bc',
                                ),
                            }),
                        );
                    },
                    Ge = ({ children: e, moveSpace: u, isDisabled: t = !1, onStartMoving: r, onEndMoving: n }) => {
                        const i = (0, a.useState)(!1),
                            l = i[0],
                            s = i[1],
                            E = (0, a.useState)({ x: 0, y: 0 }),
                            d = E[0],
                            m = E[1],
                            _ = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                (s(!1), null == n || n());
                            }, [n]);
                        (0, a.useEffect)(
                            () => (
                                window.addEventListener('mouseup', A),
                                () => window.removeEventListener('mouseup', A)
                            ),
                            [A],
                        );
                        const F = (e) => {
                            if (!_.current) return;
                            const u = _.current.getBoundingClientRect(),
                                t = u.width,
                                r = u.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= r - 1);
                        };
                        return (
                            document.addEventListener('mouseout', (e) => {
                                const u = e.relatedTarget;
                                (u && 'HTML' !== (null == u ? void 0 : u.nodeName)) || s(!1);
                            }),
                            o().createElement(
                                'div',
                                {
                                    ref: _,
                                    className: c()(
                                        'SceneWrapper_base_36',
                                        l && 'SceneWrapper_base__down_ab',
                                        t && 'SceneWrapper_base__moveSpaceDisabled_03',
                                    ),
                                    onMouseDown: t
                                        ? void 0
                                        : (e) => {
                                              (e.preventDefault(),
                                                  0 === e.button && F(e) && (s(!0), m({ x: e.clientX, y: e.clientY })));
                                          },
                                    onMouseMove: t
                                        ? void 0
                                        : (e) => {
                                              if ((e.preventDefault(), l)) {
                                                  if (!F(e)) return;
                                                  const t = e.clientX !== d.x ? e.clientX - d.x : 0,
                                                      n = e.clientY !== d.y ? e.clientY - d.y : 0;
                                                  ((0 === t && 0 === n) || null == r || r(),
                                                      m({ x: e.clientX, y: e.clientY }),
                                                      u({ dx: t, dy: n, dz: 0 }));
                                              }
                                          },
                                    onMouseUp: t
                                        ? void 0
                                        : () => {
                                              (s(!1), null == n || n());
                                          },
                                    onWheel: t
                                        ? void 0
                                        : (e) => {
                                              if ((e.preventDefault(), !F(e))) return;
                                              const t = e.deltaY < 0;
                                              u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                          },
                                },
                                e,
                            )
                        );
                    },
                    je = {
                        base: 'InfoButton_base_a9',
                        icon: 'InfoButton_icon_96',
                        icon__default: 'InfoButton_icon__default_4b',
                        text: 'InfoButton_text_91',
                    },
                    ze = (0, a.memo)(({ defaultText: e, hoverText: u, onClick: t, isTooltipEnabled: r = !0 }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            l = n[1],
                            s = (0, a.useCallback)(() => {
                                (Ie.playClick(), t());
                            }, [t]),
                            E = (0, a.useCallback)(() => {
                                (Ie.playHighlight(), l(!0));
                            }, []),
                            d = (0, a.useCallback)(() => {
                                l(!1);
                            }, []),
                            m = c()(je.icon, { [je.icon__hover]: i, [je.icon__default]: !i });
                        return o().createElement(
                            xe,
                            { body: R.strings.portal_lobby.infoButton.tooltip(), isEnabled: r },
                            o().createElement(
                                'div',
                                { className: je.base, onMouseEnter: E, onMouseLeave: d, onClick: s },
                                o().createElement('div', { className: m }),
                                o().createElement(Ue, { mainText: e, hoverText: u, classText: je.text, isHover: i }),
                            ),
                        );
                    });
                function Ve() {
                    return !1;
                }
                console.log;
                var $e = t(3915);
                function Ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Xe = (e) => (0 === e ? window : window.subViews.get(e)),
                    Ye = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? Ye(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, r) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Ye(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Ye(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    qe = (e) => Ye(e);
                var Ze = t(6517);
                const Qe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Je = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function eu(e) {
                    let u = '';
                    for (let t = Je.length - 1; t >= 0; t--) for (; e >= Je[t];) ((u += Qe[t]), (e -= Je[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var uu = t(8552);
                const tu = {
                    SLOT_SIZE: '84rem',
                    SLOT_SIZE_M: '116rem',
                    SLOT_SIZE_L: '152rem',
                    base: 'UpgradeSlot_base_db',
                    base__skipped: 'UpgradeSlot_base__skipped_bf',
                    base__top: 'UpgradeSlot_base__top_59',
                    base__bottom: 'UpgradeSlot_base__bottom_b9',
                    base__nonInteractive: 'UpgradeSlot_base__nonInteractive_6b',
                    colorBg: 'UpgradeSlot_colorBg_aa',
                    statusBg: 'UpgradeSlot_statusBg_d6',
                    base__learned: 'UpgradeSlot_base__learned_45',
                    base__ability: 'UpgradeSlot_base__ability_3c',
                    mask: 'UpgradeSlot_mask_ab',
                    base__solo: 'UpgradeSlot_base__solo_e5',
                    mask__learned: 'UpgradeSlot_mask__learned_55',
                    mask__animated: 'UpgradeSlot_mask__animated_3e',
                    runHeight: 'UpgradeSlot_runHeight_b2',
                    runHeightMedium: 'UpgradeSlot_runHeightMedium_be',
                    runHeightLarge: 'UpgradeSlot_runHeightLarge_fc',
                    runWidth: 'UpgradeSlot_runWidth_af',
                    runWidthMedium: 'UpgradeSlot_runWidthMedium_61',
                    runWidthLarge: 'UpgradeSlot_runWidthLarge_94',
                    borderLearned: 'UpgradeSlot_borderLearned_3e',
                    nodeImg: 'UpgradeSlot_nodeImg_6c',
                    base__locked: 'UpgradeSlot_base__locked_59',
                    base__needToLearn: 'UpgradeSlot_base__needToLearn_2d',
                    base__clicked: 'UpgradeSlot_base__clicked_d9',
                    content: 'UpgradeSlot_content_96',
                    base__available: 'UpgradeSlot_base__available_66',
                    base__notEnoughPoints: 'UpgradeSlot_base__notEnoughPoints_23',
                    resetGlow: 'UpgradeSlot_resetGlow_72',
                    resetPulse: 'UpgradeSlot_resetPulse_df',
                    border: 'UpgradeSlot_border_31',
                    base__viewed: 'UpgradeSlot_base__viewed_40',
                    viewedBlink: 'UpgradeSlot_viewedBlink_db',
                    modifierIcon: 'UpgradeSlot_modifierIcon_2c',
                    lines: 'UpgradeSlot_lines_50',
                    buttonDecorator: 'UpgradeSlot_buttonDecorator_b2',
                    leftLines: 'UpgradeSlot_leftLines_3f',
                    rightLines: 'UpgradeSlot_rightLines_1f',
                    pointsWrapper: 'UpgradeSlot_pointsWrapper_91',
                    points: 'UpgradeSlot_points_72',
                    tokenImg: 'UpgradeSlot_tokenImg_c0',
                    upgradeProgressLine: 'UpgradeSlot_upgradeProgressLine_49',
                    bg: 'UpgradeSlot_bg_3d',
                    glow: 'UpgradeSlot_glow_37',
                    upgradeProgressText: 'UpgradeSlot_upgradeProgressText_3d',
                    slideLeftIn: 'UpgradeSlot_slideLeftIn_fc',
                    slideRightIn: 'UpgradeSlot_slideRightIn_f2',
                    slideUp: 'UpgradeSlot_slideUp_80',
                    slideDown: 'UpgradeSlot_slideDown_60',
                    fadeIn: 'UpgradeSlot_fadeIn_83',
                    fadeOut: 'UpgradeSlot_fadeOut_b2',
                    rotating: 'UpgradeSlot_rotating_1f',
                };
                let ru;
                !(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
                })(ru || (ru = {}));
                const nu = { [ru.Small]: 6, [ru.Medium]: 8, [ru.Large]: 10 },
                    au = [tu.SLOT_SIZE, tu.SLOT_SIZE_M, tu.SLOT_SIZE_L].map((e) => parseFloat(e)),
                    ou = ({ maxValue: e, value: u, size: t = ru.Large, isInitialized: r = !0, isResizing: n = !1 }) => {
                        const a = { duration: au.includes(u) ? 500 : 1e3 },
                            i = (0, uu.useSpring)({
                                from: { width: r ? '0rem' : `${u}rem` },
                                to: { width: `${u}rem` },
                                config: a,
                                immediate: !r || n,
                            });
                        return o().createElement(
                            'div',
                            { className: 'ProgressBar_base_06', style: { width: `${e}rem`, height: `${nu[t]}rem` } },
                            o().createElement(
                                uu.animated.div,
                                { className: 'ProgressBar_fillCutter_69', style: i },
                                o().createElement('div', {
                                    className: 'ProgressBar_fill_ff',
                                    style: { width: `${e}rem` },
                                }),
                            ),
                        );
                    };
                const iu = {
                    base: 'Button_base_8d',
                    base__extraSmall: 'Button_base__extraSmall_b6',
                    base__small: 'Button_base__small_93',
                    base__large: 'Button_base__large_f6',
                    base__extraLarge: 'Button_base__extraLarge_9e',
                    base__primary: 'Button_base__primary_61',
                    animated: 'Button_animated_7a',
                    ripplePulseButtonBorder: 'Button_ripplePulseButtonBorder_68',
                    base__active: 'Button_base__active_ca',
                    base__disabled: 'Button_base__disabled_9b',
                    base__secondary: 'Button_base__secondary_1c',
                    base__ghost: 'Button_base__ghost_ca',
                    base__hover: 'Button_base__hover_41',
                    bgOverlay: 'Button_bgOverlay_f5',
                    bgImage: 'Button_bgImage_ca',
                    bgLines: 'Button_bgLines_4f',
                    bgLines__primary: 'Button_bgLines__primary_65',
                    bgLines__disabled: 'Button_bgLines__disabled_13',
                    bgImage__primary: 'Button_bgImage__primary_25',
                    bgImage__hover: 'Button_bgImage__hover_82',
                    bgImage__active: 'Button_bgImage__active_9b',
                    bgImage__secondary: 'Button_bgImage__secondary_d0',
                    bgOverlay__primary: 'Button_bgOverlay__primary_a0',
                    bgOverlay__secondary: 'Button_bgOverlay__secondary_ac',
                    bgOverlay__hover: 'Button_bgOverlay__hover_66',
                    bgOverlay__active: 'Button_bgOverlay__active_26',
                    bgOverlay__disabled: 'Button_bgOverlay__disabled_b1',
                    bgOverlay__ghost: 'Button_bgOverlay__ghost_85',
                    content: 'Button_content_f2',
                    content__primary: 'Button_content__primary_3f',
                    content__secondary: 'Button_content__secondary_a2',
                    content__ghost: 'Button_content__ghost_f1',
                    btnIcon: 'Button_btnIcon_77',
                    btnIcon__right: 'Button_btnIcon__right_95',
                    btnIcon__left: 'Button_btnIcon__left_08',
                    pulseAnimatedBoxOne: 'Button_pulseAnimatedBoxOne_ce',
                    pulseAnimatedBoxTwo: 'Button_pulseAnimatedBoxTwo_80',
                    pulseAnimatedBoxThree: 'Button_pulseAnimatedBoxThree_bc',
                    ripplePulseOne: 'Button_ripplePulseOne_f5',
                    ripplePulseTwo: 'Button_ripplePulseTwo_48',
                    ripplePulseThree: 'Button_ripplePulseThree_45',
                };
                let lu, su;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(lu || (lu = {})),
                    (function (e) {
                        ((e.Primary = 'primary'), (e.Secondary = 'secondary'), (e.Ghost = 'ghost'));
                    })(su || (su = {})));
                const cu = (0, a.memo)(
                        ({
                            title: e,
                            disabled: u,
                            onClick: t,
                            className: r,
                            iconRight: n,
                            isAnimate: i = !1,
                            iconLeft: l,
                            size: s = 'extraLarge',
                            type: E = 'primary',
                            classes: d,
                        }) => {
                            const m = (0, a.useState)(!1),
                                _ = m[0],
                                A = m[1],
                                F = (0, a.useState)(!1),
                                D = F[0],
                                g = F[1],
                                B = c()(
                                    iu.base,
                                    iu[`base__${E}`],
                                    {
                                        [iu.base__disabled]: u,
                                        [iu[`base__${s}`]]: s,
                                        [iu.base__active]: _,
                                        [iu.base__hover]: D,
                                        [iu.animated]: i,
                                    },
                                    null == d ? void 0 : d.base,
                                ),
                                C = c()(iu.bgOverlay, iu[`bgOverlay__${E}`], {
                                    [iu.bgOverlay__hover]: D,
                                    [iu.bgOverlay__active]: _,
                                    [iu.bgOverlay__disabled]: u,
                                }),
                                p = c()(iu.bgImage, iu[`bgImage__${E}`], {
                                    [iu.bgImage__hover]: D,
                                    [iu.bgImage__active]: _,
                                    [iu.bgImage__disabled]: u,
                                }),
                                h = c()(iu.content, iu[`content__${E}`], null == d ? void 0 : d.content),
                                v = c()(iu.bgLines, iu[`bgLines__${E}`], { [iu.bgLines__disabled]: u });
                            return o().createElement(
                                'div',
                                { className: r },
                                o().createElement(
                                    'div',
                                    {
                                        className: B,
                                        onMouseEnter: () => {
                                            u || (Ie.playHighlight(), g(!0));
                                        },
                                        onMouseUp: () => {
                                            u || A(!1);
                                        },
                                        onMouseDown: () => {
                                            u || A(!0);
                                        },
                                        onMouseLeave: () => {
                                            u || (A(!1), g(!1));
                                        },
                                        onClick: (e) => {
                                            u || (t && t(e), Ie.playClick());
                                        },
                                    },
                                    o().createElement('div', { className: C }),
                                    o().createElement('div', { className: v }),
                                    o().createElement('div', { className: p }),
                                    i &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('div', { className: iu.pulseAnimatedBoxOne }),
                                            o().createElement('div', { className: iu.pulseAnimatedBoxTwo }),
                                            o().createElement('div', { className: iu.pulseAnimatedBoxThree }),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: h },
                                        l &&
                                            o().createElement('div', {
                                                className: c()(iu.btnIcon, iu.btnIcon__left),
                                                style: { backgroundImage: `url(${l})` },
                                            }),
                                        o().createElement(Ce, { text: e }),
                                        n &&
                                            o().createElement('div', {
                                                className: c()(iu.btnIcon, iu.btnIcon__right),
                                                style: { backgroundImage: `url(${n})` },
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Eu = R.strings.portal_upgrade.upgrade.popover,
                    du = (0, a.memo)(({ onClose: e }) =>
                        o().createElement(
                            'div',
                            { className: 'PopoverHint_base_10' },
                            o().createElement(
                                'div',
                                { className: 'PopoverHint_popoverInnerWrap_ca' },
                                o().createElement('div', { className: 'PopoverHint_close_7d', onClick: e }),
                                o().createElement(
                                    'div',
                                    { className: 'PopoverHint_popoverContent_98' },
                                    o().createElement('div', { className: 'PopoverHint_img_18' }),
                                    o().createElement(Ce, { className: 'PopoverHint_text_6c', text: Eu.text() }),
                                    o().createElement(cu, {
                                        className: 'PopoverHint_button_4b',
                                        title: Eu.clearButton(),
                                        classes: { content: 'PopoverHint_buttonText_21' },
                                        size: lu.Medium,
                                        onClick: e,
                                    }),
                                    o().createElement('div', { className: 'PopoverHint_popoverArrow_13' }),
                                ),
                            ),
                        ),
                    ),
                    mu = R.views.portal.lobby.tooltips,
                    _u = R.strings.portal_upgrade.upgrade,
                    Au = R.images.portal.gui.maps.icons.upgrade.node,
                    Fu = (0, a.memo)(
                        ({
                            nodeStatus: e,
                            nodeType: u,
                            itemType: t,
                            itemModifier: r,
                            classMix: n,
                            pointsToOpen: i,
                            isClicked: l,
                            id: s,
                            name: E,
                            isViewed: d,
                            onClick: m,
                            onUpgrade: _,
                            onMouseEnter: A,
                            nodeVariant: F,
                            playResetAnimation: D,
                            shouldPlayUnlockAnimation: g = !1,
                            isComponentInitialized: B = !0,
                            isHolding: C = !1,
                            isOptimisticallyLearned: p = !1,
                            onHoldStart: h,
                            onHoldEnd: v,
                        }) => {
                            const f = L().mediaSize,
                                b = u === ke.Ability,
                                w = u === ke.Module,
                                x = e === Ne.LEARNED || p,
                                y = e === Ne.NEED_TO_LEARN,
                                T = e === Ne.SKIPPED,
                                M = e === Ne.LOCKED,
                                N = e === Ne.AVAILABLE && !p,
                                R = e === Ne.NOT_ENOUGH_POINTS,
                                O =
                                    e === Ne.LEARNED ||
                                    e === Ne.SKIPPED ||
                                    p ||
                                    (u === ke.Ability && e !== Ne.AVAILABLE),
                                k = (0, a.useRef)(x || T);
                            ((0, a.useEffect)(() => {
                                (x || T) && (k.current = !0);
                            }, [x, T]),
                                (0, a.useEffect)(() => {
                                    if (D) {
                                        const e = setTimeout(() => {
                                            M && (k.current = !1);
                                        }, 350);
                                        return () => clearTimeout(e);
                                    }
                                }, [D, M]));
                            const P = c()(
                                    tu.base,
                                    M && tu.base__locked,
                                    N && tu.base__available,
                                    R && tu.base__notEnoughPoints,
                                    x && tu.base__learned,
                                    y && tu.base__needToLearn,
                                    T && tu.base__skipped,
                                    b && tu.base__ability,
                                    w && tu.base__module,
                                    l && tu.base__clicked,
                                    O && tu.base__nonInteractive,
                                    !d && tu.base__viewed,
                                    D && tu.base__reset,
                                    F && tu[`base__${F}`],
                                    n,
                                ),
                                I = e !== Ne.LEARNED && e !== Ne.SKIPPED && !p,
                                H = N || R,
                                U = M || H || y,
                                G = (0, a.useState)(!1),
                                j = G[0],
                                z = G[1],
                                V = (0, a.useRef)(null),
                                $ = (0, uu.useSpring)({
                                    width: C ? '100%' : '0%',
                                    config: C ? { duration: Bu } : { duration: 1 },
                                    immediate: j && !C,
                                    onRest: () => {
                                        !C && j && z(!1);
                                    },
                                }),
                                K = (e) => {
                                    switch (!0) {
                                        case e >= S.ExtraLarge:
                                            return '132x132';
                                        case e >= S.Medium:
                                            return '100x100';
                                        default:
                                            return '72x72';
                                    }
                                },
                                X = (0, uu.useSpring)({
                                    to: { opacity: U ? 1 : 0, transform: U ? 'translateY(0rem)' : 'translateY(20rem)' },
                                    config: uu.config.stiff,
                                });
                            return o().createElement(
                                fe,
                                {
                                    contentId: b ? mu.AbilitiesTooltip('resId') : mu.ModulesTooltip('resId'),
                                    args: b ? { name: E } : { itemId: s },
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: P,
                                        onClick: m,
                                        onMouseDown: (u) => {
                                            e === Ne.AVAILABLE &&
                                                0 === u.button &&
                                                (Pe('ev_portal_gui_hangar_upgrade_learn'),
                                                null == h || h(),
                                                z(!1),
                                                V.current && clearTimeout(V.current),
                                                (V.current = Number(
                                                    setTimeout(() => {
                                                        (null == v || v(),
                                                            z(!0),
                                                            _(s),
                                                            Pe('ev_portal_gui_hangar_upgrade_learned'));
                                                    }, Bu),
                                                )));
                                        },
                                        onMouseUp: () => {
                                            (C && Pe('ev_portal_gui_hangar_upgrade_learn_stop'),
                                                null == v || v(),
                                                z(!0),
                                                V.current && clearTimeout(V.current));
                                        },
                                        onMouseEnter: A,
                                        onMouseLeave: () => {
                                            (null == v || v(), z(!0), V.current && clearTimeout(V.current));
                                        },
                                    },
                                    x &&
                                        o().createElement(
                                            'div',
                                            { className: c()(tu.mask, g && B ? tu.mask__animated : tu.mask__learned) },
                                            o().createElement('div', { className: tu.borderLearned }),
                                        ),
                                    o().createElement('div', { className: tu.colorBg }),
                                    o().createElement('div', { className: tu.statusBg }),
                                    o().createElement(
                                        'div',
                                        { className: tu.content },
                                        D && k.current && o().createElement('div', { className: tu.resetGlow }),
                                        o().createElement('div', {
                                            className: tu.nodeImg,
                                            style: b
                                                ? { backgroundImage: `url(${Au.ability.$dyn(E)})` }
                                                : u === ke.VehicleModifier
                                                  ? {
                                                        backgroundImage: `url(${Au.vehicleModifier.$dyn(`${t}_${K(f)}`)})`,
                                                    }
                                                  : {
                                                        backgroundImage: `url(${Au.itemType.$dyn(`${t}_${K(f)}` || Re.None)})`,
                                                    },
                                        }),
                                        o().createElement('div', { className: tu.border }),
                                        r &&
                                            o().createElement('div', {
                                                className: tu.modifierIcon,
                                                style: Object.assign(
                                                    {},
                                                    r !== Oe.None && {
                                                        backgroundImage: `url(${Au.itemModifier.$dyn(r)})`,
                                                    },
                                                ),
                                            }),
                                        I &&
                                            o().createElement(
                                                uu.animated.div,
                                                {
                                                    className: tu.pointsWrapper,
                                                    style: X,
                                                    onMouseEnter: () => {
                                                        Ie.playHighlight();
                                                    },
                                                },
                                                C &&
                                                    o().createElement(
                                                        uu.animated.div,
                                                        { className: tu.upgradeProgressLine, style: $ },
                                                        o().createElement('div', { className: tu.glow }),
                                                        o().createElement('div', { className: tu.bg }),
                                                    ),
                                                H &&
                                                    o().createElement(
                                                        o().Fragment,
                                                        null,
                                                        o().createElement('div', {
                                                            className: c()(tu.lines, tu.leftLines),
                                                        }),
                                                        o().createElement('div', {
                                                            className: c()(tu.lines, tu.rightLines),
                                                        }),
                                                        o().createElement('div', { className: tu.buttonDecorator }),
                                                    ),
                                                C
                                                    ? o().createElement(Ce, {
                                                          className: tu.upgradeProgressText,
                                                          text: _u.upgrading(),
                                                      })
                                                    : o().createElement(
                                                          o().Fragment,
                                                          null,
                                                          o().createElement(
                                                              'div',
                                                              { className: tu.points },
                                                              o().createElement(W, { value: i }),
                                                          ),
                                                          o().createElement('div', { className: tu.tokenImg }),
                                                      ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    );
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                function gu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Bu = 1400;
                let Cu;
                !(function (e) {
                    ((e.SoloNode = 'solo'), (e.TopNode = 'top'), (e.BottomNode = 'bottom'));
                })(Cu || (Cu = {}));
                const pu = (0, a.memo)(
                        ({
                            researchTree: e,
                            onNodeSelect: u,
                            onNodeUpgrade: t,
                            onStageHovered: r,
                            onNodeReset: n,
                            isFirstEnter: i,
                            resetNodeSelect: l,
                            playResetAnimation: s,
                            showLevelUp: E,
                            vehicleLvl: d,
                            optimisticallyLearnedNodes: m = new Set(),
                            onOptimisticNodeUpgrade: _,
                        }) => {
                            const A = L().mediaSize,
                                F = (function (e, u) {
                                    const t = ((e) => ({
                                            blockWidth: e >= S.ExtraLarge ? 152 : e >= S.Medium ? 116 : 84,
                                            blockMargin:
                                                e >= S.ExtraLarge
                                                    ? 90
                                                    : e >= S.Large
                                                      ? 64
                                                      : e >= S.Medium
                                                        ? 40
                                                        : e >= S.Small
                                                          ? 48
                                                          : 16,
                                        }))(u),
                                        r = t.blockWidth,
                                        n = t.blockMargin;
                                    let a = 0,
                                        o = 0;
                                    e.forEach((e, u) => {
                                        (u > 0 && ((o += n), e.isUnlocked && (a += n)),
                                            (o += r),
                                            e.isUnlocked && (a += r));
                                    });
                                    const i = e.reduce((e, u, t) => (u.isUnlocked ? t : e), -1);
                                    let l = 0;
                                    return (
                                        e.forEach((e, u) => {
                                            (u > 0 && u < i + 1 && (l += n), u < i + 1 && (l += r));
                                        }),
                                        { filledWidth: a, maxWidth: o, deltaFromWidth: l }
                                    );
                                })(e, A),
                                D = F.filledWidth,
                                g = F.maxWidth,
                                B = F.deltaFromWidth,
                                C = ((e) => {
                                    switch (e) {
                                        case S.ExtraLarge:
                                            return ru.Large;
                                        case S.Large:
                                        case S.Medium:
                                            return ru.Medium;
                                        default:
                                            return ru.Small;
                                    }
                                })(A),
                                p = (0, a.useState)(null),
                                h = p[0],
                                v = p[1],
                                f = (0, a.useState)(i),
                                b = f[0],
                                w = f[1],
                                x = (0, a.useState)(B),
                                y = x[0],
                                T = x[1],
                                M = (0, a.useState)(new Set()),
                                N = M[0],
                                R = M[1],
                                O = (0, a.useState)(!1),
                                k = O[0],
                                P = O[1],
                                I = (0, a.useState)(null),
                                H = I[0],
                                U = I[1],
                                W = (0, a.useState)(!1),
                                G = W[0],
                                j = W[1],
                                z = (0, a.useRef)(null),
                                V = (0, a.useRef)(new Map());
                            ((0, a.useEffect)(
                                () => (
                                    y !== B &&
                                        (z.current && clearTimeout(z.current),
                                        (z.current = Number(
                                            setTimeout(() => {
                                                T(B);
                                            }, Bu),
                                        ))),
                                    () => {
                                        z.current && clearTimeout(z.current);
                                    }
                                ),
                                [B, y],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = () => {
                                        (j(!0), T(0), setTimeout(() => j(!1), 100));
                                    };
                                    return (
                                        engine.on('clientResized', e),
                                        () => {
                                            engine.off('clientResized', e);
                                        }
                                    );
                                }, [B, D]),
                                (0, a.useEffect)(() => {
                                    v(null);
                                }, [l]),
                                (0, a.useEffect)(() => {
                                    w(i);
                                }, [i]),
                                (0, a.useEffect)(() => {
                                    const e = () => {
                                        null !== H && U(null);
                                    };
                                    return (
                                        document.addEventListener('mouseup', e),
                                        () => {
                                            document.removeEventListener('mouseup', e);
                                        }
                                    );
                                }, [H]),
                                (0, a.useEffect)(() => {
                                    const u = new Map(),
                                        t = [],
                                        r = V.current;
                                    let n = !1;
                                    for (
                                        var a,
                                            o = (function (e, u) {
                                                var t =
                                                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                    e['@@iterator'];
                                                if (t) return (t = t.call(e)).next.bind(t);
                                                if (
                                                    Array.isArray(e) ||
                                                    (t = (function (e, u) {
                                                        if (e) {
                                                            if ('string' == typeof e) return gu(e, u);
                                                            var t = Object.prototype.toString.call(e).slice(8, -1);
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
                                                                      ? gu(e, u)
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
                                            })(e);
                                        !(a = o()).done;
                                    ) {
                                        const e = a.value,
                                            o = e.stageNumber,
                                            i = e.isUnlocked,
                                            l = r.get(o);
                                        (u.set(o, i), k && !1 === l && i && (t.push(o), (n = !0)));
                                    }
                                    if (((V.current = u), k)) {
                                        if (n) {
                                            R(new Set(t));
                                            const e = setTimeout(() => R(new Set()), 2e3);
                                            return () => clearTimeout(e);
                                        }
                                    } else requestAnimationFrame(() => P(!0));
                                }, [e, k]));
                            const $ = (0, a.useCallback)(
                                    (e, t, r) => {
                                        if (t !== Ne.LEARNED && t !== Ne.SKIPPED && r !== ke.Ability) {
                                            if (h === e) return (v(null), void (null == n || n()));
                                            (u(e), v(e));
                                        }
                                    },
                                    [u, n, h],
                                ),
                                K = (0, a.useCallback)(
                                    (e) => {
                                        (null == _ || _(e), t(e), v(null));
                                    },
                                    [t, _],
                                ),
                                X = (0, a.useCallback)(() => {
                                    w((e) => !e);
                                }, []),
                                Y = (0, a.useCallback)(
                                    (e, u) => {
                                        u === Ne.AVAILABLE && r(e);
                                    },
                                    [r],
                                ),
                                q = (0, a.useCallback)(
                                    (e, u) => (1 === e ? Cu.SoloNode : 0 === u ? Cu.TopNode : Cu.BottomNode),
                                    [],
                                ),
                                Z = (0, a.useCallback)((e) => {
                                    U(e);
                                }, []),
                                Q = (0, a.useCallback)(() => {
                                    U(null);
                                }, []);
                            return o().createElement(
                                'div',
                                { className: c()('UpgradeTree_base_8a') },
                                o().createElement(
                                    'div',
                                    { className: 'UpgradeTree_slotContainer_d0' },
                                    o().createElement(
                                        'div',
                                        { className: 'UpgradeTree_progressBarContainer_f6' },
                                        o().createElement(ou, {
                                            maxValue: g,
                                            value: D,
                                            size: C,
                                            isInitialized: k,
                                            isResizing: G,
                                        }),
                                    ),
                                    e.map((e) =>
                                        o().createElement(
                                            'div',
                                            { className: 'UpgradeTree_slotElements_21', key: e.stageNumber },
                                            0 === e.stageNumber &&
                                                b &&
                                                o().createElement(
                                                    'div',
                                                    { className: 'UpgradeTree_popoverContainer_a0' },
                                                    o().createElement(du, { onClose: X }),
                                                ),
                                            e.stageNodes.map((u, t) =>
                                                o().createElement(
                                                    Fu,
                                                    Du(
                                                        {
                                                            key: u.id,
                                                            classMix: 'UpgradeTree_slot_54',
                                                            isClicked: h === u.id,
                                                            onClick: () => $(u.id, u.nodeStatus, u.nodeType),
                                                            onUpgrade: K,
                                                            isViewed: e.isViewed,
                                                            onMouseEnter: () => Y(e.stageNumber, u.nodeStatus),
                                                            nodeVariant: q(e.stageNodes.length, t),
                                                            playResetAnimation: s,
                                                            shouldPlayUnlockAnimation: N.has(e.stageNumber),
                                                            isComponentInitialized: k,
                                                            isHolding: H === u.id,
                                                            onHoldStart: () => Z(u.id),
                                                            onHoldEnd: Q,
                                                            isOptimisticallyLearned: m.has(u.id),
                                                        },
                                                        u,
                                                    ),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: 'UpgradeTree_lvlBlock_99' },
                                                o().createElement(Ce, {
                                                    text: eu(e.stageNumber + 2),
                                                    className: c()(
                                                        'UpgradeTree_lvlText_28',
                                                        !e.isUnlocked && 'UpgradeTree_lvlText__locked_7d',
                                                        E &&
                                                            d - 2 === e.stageNumber &&
                                                            'UpgradeTree_lvlText__animate_ff',
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    hu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    s = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Xe,
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
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = _.O.view.addModelObserver(i, u, !0);
                                                        return (n.set(l, t), e && t(o(a)), l);
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
                                                                                    return Ke(e, u);
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
                                                                                          ? Ke(e, u)
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
                                            i = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            s = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = Object.assign(
                                                        {},
                                                        e.primitives([
                                                            'upgradeAvailable',
                                                            'isFirstEnter',
                                                            'isMaxLevelAchieved',
                                                            'isFirstEnter',
                                                        ]),
                                                        {
                                                            root: e.object(),
                                                            ttx: e.array('ttx'),
                                                            researchTree: e.array('researchTree'),
                                                            incompatibleModules: e.array('incompatibleModules', []),
                                                            vehicleAbilities: e.array('currentVehicle.abilities'),
                                                            currentVehicle: e.object('currentVehicle'),
                                                        },
                                                    ),
                                                    t = (0, Ze.computedFn)(() => qe(u.ttx.get()), { equals: Ve }),
                                                    r = (0, Ze.computedFn)(() => qe(u.incompatibleModules.get()), {
                                                        equals: Ve,
                                                    }),
                                                    n = (0, Ze.computedFn)(() => qe(u.vehicleAbilities.get()), {
                                                        equals: Ve,
                                                    }),
                                                    a = (0, Ze.computedFn)(
                                                        () => {
                                                            const e = qe(u.researchTree.get());
                                                            return [
                                                                {
                                                                    stageNodes: [
                                                                        {
                                                                            id: -1,
                                                                            name: n()[0].name,
                                                                            nodeStatus: Ne.LEARNED,
                                                                            nodeType: ke.Ability,
                                                                            nodeVariant: Cu.SoloNode,
                                                                            pointsToOpen: 0,
                                                                            isViewed: !0,
                                                                            itemType: Re.None,
                                                                            itemModifier: Oe.None,
                                                                        },
                                                                    ],
                                                                    isViewed: !0,
                                                                    isUnlocked: !0,
                                                                    stageNumber: -1,
                                                                },
                                                                ...e,
                                                            ];
                                                        },
                                                        { equals: Ve },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getTtx: t,
                                                        getVehicleAbilities: n,
                                                        getIncompatibleModules: r,
                                                        getResearchTree: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = $e.observable.box(r, { equals: Ve });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, $e.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = $e.observable.box(r, { equals: Ve });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, $e.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = $e.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, $e.action)((e) => {
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
                                                                i = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = $e.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, $e.action)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            E = { mode: e, model: c, externalModel: o, cleanup: s };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(E) : u(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    d = E[0],
                                    m = E[1],
                                    A = (0, a.useState)(() => s(e, r, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? D(s(d, r, i)) : (c.current = !0);
                                    }, [i, d, r]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    o().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onClose: e.createCallbackNoArgs('onClose'),
                        aboutUpgrade: e.createCallbackNoArgs('onAboutImprovements'),
                        resetClick: e.createCallbackNoArgs('onReset'),
                        onNextVehicleClick: e.createCallbackNoArgs('onNextVehicleClick'),
                        onPrevVehicleClick: e.createCallbackNoArgs('onPrevVehicleClick'),
                        moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        startMoving: e.createCallbackNoArgs('onStartMoving'),
                        onNodeReset: e.createCallbackNoArgs('onNodeReset'),
                        onNodeSelect: e.createCallback((e) => ({ id: e }), 'onNodeSelect'),
                        onNodeUpgrade: e.createCallback((e) => ({ id: e }), 'onNodeUpgrade'),
                        onStageHovered: e.createCallback((e) => ({ id: e }), 'onStageHovered'),
                    })),
                    vu = hu[0],
                    fu = hu[1],
                    bu = R.images.portal.gui.maps.icons.upgrade;
                let Su;
                !(function (e) {
                    ((e.INIT = 'INIT'),
                        (e.UNLOCK_START = 'UNLOCK_START'),
                        (e.UNLOCK_HIDE_LOCK = 'UNLOCK_HIDE_LOCK'),
                        (e.UNLOCK_COMPLETE = 'UNLOCK_COMPLETE'),
                        (e.LOCK = 'LOCK'));
                })(Su || (Su = {}));
                const wu = (e, u) => {
                        switch (u.type) {
                            case Su.INIT:
                                return {
                                    showLock: !u.isReceived,
                                    showImg: u.isReceived,
                                    showLockedBorder: !u.isReceived,
                                    showUnlockedBorder: u.isReceived,
                                    showBg: u.isReceived,
                                };
                            case Su.UNLOCK_START:
                                return {
                                    showLock: !0,
                                    showImg: !1,
                                    showLockedBorder: !0,
                                    showUnlockedBorder: !1,
                                    showBg: !1,
                                };
                            case Su.UNLOCK_HIDE_LOCK:
                                return {
                                    showLock: !1,
                                    showImg: !1,
                                    showLockedBorder: !1,
                                    showUnlockedBorder: !1,
                                    showBg: !1,
                                };
                            case Su.UNLOCK_COMPLETE:
                                return {
                                    showLock: !1,
                                    showImg: !0,
                                    showLockedBorder: !1,
                                    showUnlockedBorder: !0,
                                    showBg: !0,
                                };
                            case Su.LOCK:
                                return {
                                    showLock: !0,
                                    showImg: !1,
                                    showLockedBorder: !0,
                                    showUnlockedBorder: !1,
                                    showBg: !1,
                                };
                            default:
                                return e;
                        }
                    },
                    xu = {
                        lock: {
                            from: { opacity: 0, transform: 'scale(2)' },
                            enter: { opacity: 0.6, transform: 'scale(1)' },
                            leave: { opacity: 0, transform: 'scale(2)' },
                            config: uu.config.gentle,
                        },
                        img: {
                            from: { opacity: 0, transform: 'translateY(-20rem)' },
                            enter: { opacity: 1, transform: 'translateY(0rem)' },
                            leave: { opacity: 0 },
                            config: uu.config.slow,
                        },
                        border: {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: uu.config.slow,
                        },
                        bg: {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: uu.config.slow,
                        },
                    },
                    Lu = (0, a.memo)(({ classMix: e, name: u, isReceived: t }) => {
                        const r = c()('AbilitySlot_base_b6', e),
                            n = ((e) => {
                                const u = (0, a.useReducer)(wu, { isReceived: null != e && e }, (e) =>
                                        wu({}, { type: Su.INIT, isReceived: e.isReceived }),
                                    ),
                                    t = u[0],
                                    r = u[1],
                                    n = (0, a.useRef)(e),
                                    o = (0, a.useRef)([]),
                                    i = (0, a.useCallback)(() => {
                                        (o.current.forEach(clearTimeout), (o.current = []));
                                    }, []);
                                return (
                                    (0, a.useEffect)(() => {
                                        if (
                                            (n.current && !e && Pe('ev_portal_gui_hangar_upgrade_reset_ability'),
                                            !n.current && e)
                                        ) {
                                            (i(),
                                                r({ type: Su.UNLOCK_START }),
                                                Pe('ev_portal_gui_hangar_upgrade_new_ability'));
                                            const e = setTimeout(() => {
                                                r({ type: Su.UNLOCK_HIDE_LOCK });
                                                const e = setTimeout(() => {
                                                    r({ type: Su.UNLOCK_COMPLETE });
                                                }, 600);
                                                o.current.push(Number(e));
                                            }, 50);
                                            o.current.push(Number(e));
                                        } else if (!e) {
                                            i();
                                            const e = setTimeout(() => {
                                                r({ type: Su.LOCK });
                                            }, 600);
                                            o.current.push(Number(e));
                                        }
                                        n.current = e;
                                    }, [e, i]),
                                    (0, a.useEffect)(() => i, [i]),
                                    t
                                );
                            })(t),
                            i = (0, a.useMemo)(() => `url(${bu.node.ability.$dyn(u)})`, [u]),
                            l = (0, uu.useTransition)(n.showLock, xu.lock),
                            s = (0, uu.useTransition)(n.showImg, xu.img),
                            E = (0, uu.useTransition)(n.showLockedBorder, xu.border),
                            d = (0, uu.useTransition)(n.showUnlockedBorder, xu.border),
                            m = (0, uu.useTransition)(n.showBg, xu.bg);
                        return o().createElement(
                            'div',
                            { className: r },
                            m(
                                (e, u) =>
                                    u &&
                                    o().createElement(uu.animated.div, { className: 'AbilitySlot_bg_c6', style: e }),
                            ),
                            E(
                                (e, u) =>
                                    u &&
                                    o().createElement(uu.animated.div, {
                                        className: 'AbilitySlot_borderLocked_a2',
                                        style: e,
                                    }),
                            ),
                            d(
                                (e, u) =>
                                    u &&
                                    o().createElement(uu.animated.div, {
                                        className: 'AbilitySlot_borderUnlocked_48',
                                        style: e,
                                    }),
                            ),
                            l(
                                (e, u) =>
                                    u &&
                                    o().createElement(uu.animated.div, { className: 'AbilitySlot_lock_d4', style: e }),
                            ),
                            s(
                                (e, u) =>
                                    u &&
                                    o().createElement(uu.animated.div, {
                                        className: 'AbilitySlot_img_bc',
                                        style: Object.assign({}, e, { backgroundImage: i }),
                                    }),
                            ),
                        );
                    }),
                    yu = (0, a.memo)(({ abilities: e }) =>
                        o().createElement(
                            'div',
                            { className: 'AbilitiesList_base_09' },
                            e.map(({ name: e, isReceived: u }, t) =>
                                o().createElement(
                                    fe,
                                    {
                                        contentId: R.views.portal.lobby.tooltips.AbilitiesTooltip('resId'),
                                        key: `${e}_${t}`,
                                        args: { name: e, learned: !0 },
                                        isEnabled: u,
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'AbilitiesList_slot_69' },
                                        o().createElement(Lu, { name: e, isReceived: u }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Tu = 'App_blockInfo_c2',
                    Mu = 'App_title_6b',
                    Nu = 'App_divider_33',
                    Ru = 'App_commonMsg_20',
                    Ou = R.strings.portal_upgrade.upgrade.tooltip,
                    ku = R.images.portal.gui.maps.icons.upgrade.arrow,
                    Pu = { tension: 300, friction: 30 };
                var Iu;
                !(function (e) {
                    ((e.Default = 'arrow'), (e.Hover = 'arrow_hover'), (e.Click = 'arrow_click'));
                })(Iu || (Iu = {}));
                const Hu = (0, a.memo)(({ onClick: e, isRightArrow: u = !1, isDisabled: t }) => {
                        const r = (0, a.useState)(Iu.Default),
                            n = r[0],
                            i = r[1],
                            l = u ? Ou.nextVehicle() : Ou.prevVehicle(),
                            s = (0, uu.useSpring)({ opacity: 1, from: { opacity: 0 }, reset: !0, config: Pu }),
                            E = c()(
                                'ArrowButton_base_d2',
                                t && 'ArrowButton_base__disabled_98',
                                u && 'ArrowButton_base__right_a9',
                            );
                        return o().createElement(
                            xe,
                            { body: l },
                            o().createElement(
                                'div',
                                {
                                    className: E,
                                    onClick: (u) => {
                                        t ? u.stopPropagation() : (Pe(R.sounds.tank_selection()), e());
                                    },
                                    onMouseEnter: () => {
                                        t || (i(Iu.Hover), Pe(R.sounds.carousel()));
                                    },
                                    onMouseLeave: () => {
                                        i(Iu.Default);
                                    },
                                    onMouseDown: () => {
                                        t || i(Iu.Click);
                                    },
                                    onMouseUp: () => {
                                        i((e) => (e === Iu.Click ? Iu.Hover : e));
                                    },
                                },
                                o().createElement(uu.animated.img, {
                                    src: ku.$dyn(n),
                                    className: 'ArrowButton_arrowImg_ce',
                                    style: Object.assign({}, s),
                                }),
                            ),
                        );
                    }),
                    Uu = {
                        titleContainer: ['titleContainer-In', 'titleContainer-Out'],
                        ttxPanelContainer: ['ttxPanelContainer-In', 'ttxPanelContainer-Out'],
                        vehicleAbilitiesContainer: ['vehicleAbilitiesContainer-In', 'vehicleAbilitiesContainer-Out'],
                        resetContainer: ['resetContainer-In', 'resetContainer-Out'],
                        upgradeTree: ['upgradeTree-In', 'upgradeTree-Out'],
                    },
                    Wu = 'ResetButton_decorator_f6',
                    Gu = R.strings.portal_upgrade.upgrade,
                    ju = (0, a.memo)(({ onClick: e, isDisabled: u }) => {
                        const t = (0, a.useCallback)(() => {
                            Ie.playHighlight();
                        }, []);
                        return o().createElement(
                            xe,
                            { body: Gu.tooltip.reset.title() },
                            o().createElement(
                                'div',
                                {
                                    className: c()('ResetButton_base_3c', u && 'ResetButton_base__disabled_79'),
                                    onClick: (t) => {
                                        u ? t.stopPropagation() : (Ie.playClick(), e());
                                    },
                                    onMouseEnter: t,
                                },
                                o().createElement('div', { className: Wu }),
                                o().createElement('div', { className: c()(Wu, 'ResetButton_decorator__right_c4') }),
                                o().createElement('div', { className: 'ResetButton_icon_7c' }),
                                o().createElement(Ce, { text: Gu.reset(), className: 'ResetButton_title_42' }),
                            ),
                        );
                    }),
                    zu = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (u = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    Vu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    $u = [];
                function Ku(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), $u)
                    );
                }
                function Xu(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        n,
                    ];
                }
                function Yu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                let qu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(qu || (qu = {}));
                const Zu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Qu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return Vu(n, a, t);
                        };
                        return (l = {}) => {
                            const s = l.settings,
                                c = void 0 === s ? Zu : s,
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
                                                                    if ('string' == typeof e) return Yu(e, u);
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
                                                                              ? Yu(e, u)
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
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function l(...l) {
                                                    const s = this,
                                                        c = Date.now() - o;
                                                    function E() {
                                                        ((o = Date.now()), t.apply(s, l));
                                                    }
                                                    a ||
                                                        (r && !n && E(),
                                                        i(),
                                                        void 0 === r && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (l.cancel = function () {
                                                        (i(), (a = !0));
                                                    }),
                                                    l
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        _.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, uu.useSpring)(() => ({
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
                                g = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            g.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [g, c.animationConfig, D.scrollPosition],
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
                                            })(t, c.step),
                                            a = B(u, e, r);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(r(e)),
                                            E.current && m.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
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
                                        zu(() => {
                                            const e = E.current;
                                            e &&
                                                (C(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                f = Ku(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            const b = (0, a.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: g,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    handleIsThumbDragging: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, C, p, b, m.off, m.on, f, h, g, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ju = Qu({
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
                        getDirection: (e) => (e.deltaY > 1 ? qu.Next : qu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    et = 'HorizontalBar_base__nonActive_82',
                    ut = 'disable',
                    tt = { pending: !1, offset: 0 },
                    rt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    nt = () => {},
                    at = (e, u) => Math.max(20, e.offsetWidth * u),
                    ot = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = rt, onDrag: r = nt }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(tt),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            D = () => {
                                const u = s.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    c = Vu(0, 1, a / (n - r)),
                                    d = (u.offsetWidth - at(u, o)) * c;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && l.current && s.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(ut),
                                                    void l.current.classList.remove(ut)
                                                );
                                            if (
                                                ((u = s.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(ut),
                                                    void l.current.classList.add(ut)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(ut), l.current.classList.remove(ut));
                                        }
                                    })(d));
                            },
                            g = Ku(() => {
                                ((() => {
                                    const u = E.current,
                                        t = s.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${at(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(et) : n.current.classList.remove(et)));
                                })(),
                                    D());
                            });
                        ((0, a.useEffect)(() => zu(g)),
                            (0, a.useEffect)(
                                () =>
                                    zu(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = nt;
                                        const r = () => {
                                            (t(), (t = zu(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = s.current,
                                            o = E.current;
                                        if (!n || !a || !o) return;
                                        const i = u.screenX - _.offset - a.getBoundingClientRect().x,
                                            l = (i / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: l }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), F(tt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, F]));
                        const B = Xu((u) => e.applyStepTo(u), d, [e]),
                            C = B[0],
                            p = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ut) || Pe('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ut) || 0 !== e.button || (Pe('play'), C(qu.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        r &&
                                            0 === u.button &&
                                            (Pe('play'),
                                            u.target === r
                                                ? F({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = E.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? qu.Prev : qu.Next));
                                    },
                                    ref: s,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: E, className: c()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: c()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ut) || 0 !== e.button || (Pe('play'), C(qu.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    it = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    lt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: l,
                        getStepByRailClick: s,
                        onDrag: E,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: c()(it.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(it.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(it.defaultScrollArea, n) },
                                o().createElement(st, { className: l, api: m, classNames: i }, e),
                            ),
                            o().createElement(ot, { getStepByRailClick: s, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    st = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => zu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(it.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: c()(it.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(it.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((st.Bar = ot),
                    (st.Default = lt),
                    (st.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => zu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(it.base, u) },
                            o().createElement(
                                'div',
                                { className: c()(it.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: c()(it.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const ct = Qu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? qu.Next : qu.Prev),
                    }),
                    Et = 'VerticalBar_base__nonActive_42',
                    dt = 'disable',
                    mt = () => {},
                    _t = { pending: !1, offset: 0 },
                    At = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ft = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Dt = (e, u) => Math.max(20, e.offsetHeight * u),
                    gt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = At, onDrag: r = mt }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(_t),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            D = Ku(() => {
                                const u = E.current,
                                    t = s.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Dt(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(Et) : n.current.classList.remove(Et)),
                                    o
                                );
                            }),
                            g = Ku(() => {
                                const u = s.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    c = Vu(0, 1, a / (n - r)),
                                    d = (u.offsetHeight - Dt(u, o)) * c;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && l.current && s.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(dt),
                                                    void l.current.classList.remove(dt)
                                                );
                                            if (
                                                ((u = s.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(dt),
                                                    void l.current.classList.add(dt)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(dt), l.current.classList.remove(dt));
                                        }
                                    })(d));
                            }),
                            B = Ku(() => {
                                Ft(e, () => {
                                    (D(), g());
                                });
                            });
                        ((0, a.useEffect)(() => zu(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Ft(e, () => {
                                        g();
                                    });
                                };
                                let t = mt;
                                const r = () => {
                                    (t(), (t = zu(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        Ft(e, (t) => {
                                            const n = s.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const i = u.screenY - _.offset - n.getBoundingClientRect().y,
                                                l = (i / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: l }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            F(_t));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, F]));
                        const C = Xu((u) => e.applyStepTo(u), d, [e]),
                            p = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(dt) || Pe('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(dt) || 0 !== e.button || (Pe('play'), p(qu.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (Pe('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  F({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? qu.Prev : qu.Next),
                                                  E.current &&
                                                      Ft(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: s,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: u.thumb }),
                                o().createElement('div', { className: c()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(dt) || 0 !== e.button || (Pe('play'), p(qu.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Bt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ct = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: l,
                        getStepByRailClick: s,
                        onDrag: E,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: c()(Bt.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(Bt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Bt.area, n) },
                                o().createElement(pt, { className: i, classNames: l, api: m }, e),
                            ),
                            o().createElement(gt, { getStepByRailClick: s, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    pt = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => zu(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Bt.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Bt.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                pt.Default = Ct;
                const ht = { Vertical: n, Horizontal: r };
                let vt;
                !(function (e) {
                    ((e.INCREASE = 'increase'), (e.DECREASE = 'decrease'), (e.DEFAULT = 'default'));
                })(vt || (vt = {}));
                const ft = R.strings.menu.tank_params,
                    bt = (0, a.memo)(({ classMix: e, name: u, params: t, isLast: r = !1, isPenultimate: n = !1 }) => {
                        const a = c()(
                                'TtxSlot_base_fd',
                                r && 'TtxSlot_base__last_39',
                                n && 'TtxSlot_base__penultimate_65',
                                e,
                            ),
                            i = L().mediaSize >= S.ExtraLarge ? '32' : '24';
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(
                                'div',
                                { className: 'TtxSlot_leftSide_25' },
                                o().createElement('div', {
                                    className: 'TtxSlot_icon_c5',
                                    style: {
                                        backgroundImage: `url(${R.images.portal.gui.maps.icons.upgrade.tth.$dyn(`${u}_${i}`)})`,
                                    },
                                }),
                                o().createElement(Ce, { text: ft.$dyn(u), className: 'TtxSlot_slotTitle_5e' }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'TtxSlot_valueList_70' },
                                t.map(({ id: e, status: u, value: r }, n) => {
                                    const a = c()(
                                        'TtxSlot_slotValue_d9',
                                        u === vt.INCREASE && 'TtxSlot_slotValue__increase_97',
                                        u === vt.DECREASE && 'TtxSlot_slotValue__decrease_61',
                                    );
                                    return o().createElement(
                                        o().Fragment,
                                        { key: e },
                                        o().createElement(Ce, { text: r.toString(), key: `${e}_${r}`, className: a }),
                                        n < t.length - 1 &&
                                            o().createElement('span', { className: 'TtxSlot_valueDivider_ae' }, '/'),
                                    );
                                }),
                            ),
                            o().createElement('div', { className: 'TtxSlot_separator_fc' }),
                        );
                    });
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const wt = (0, a.memo)(({ parameters: e }) => {
                    const u = ct(),
                        t = L().mediaSize <= S.Small;
                    return o().createElement(
                        'div',
                        { className: 'TtxList_base_44' },
                        t && o().createElement(ht.Vertical.Bar, { api: u, classNames: { base: 'TtxList_bar_af' } }),
                        o().createElement(
                            ht.Vertical.Area,
                            { api: u, classNames: { content: 'TtxList_slotsContainer_1d' } },
                            e.map((u, t) => {
                                const r = t === e.length - 2,
                                    n = t === e.length - 1;
                                return o().createElement(
                                    fe,
                                    {
                                        contentId: R.views.portal.lobby.tooltips.ParamsTooltip('resId'),
                                        key: u.name,
                                        args: { name: u.name },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'TtxList_slot_2a' },
                                        o().createElement(bt, St({}, u, { isPenultimate: r, isLast: n })),
                                    ),
                                );
                            }),
                        ),
                    );
                });
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                function Lt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return yt(e, u);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? yt(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function yt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Tt = R.strings.portal_upgrade.upgrade,
                    Mt = R.strings.portal_event,
                    Nt = R.images.portal.gui.maps.icons.upgrade,
                    Rt = (0, Me.observer)(() => {
                        const e = fu(),
                            u = e.controls,
                            t = e.model,
                            r = t.isFirstEnter.get(),
                            n = t.upgradeAvailable.get(),
                            i = t.isMaxLevelAchieved.get(),
                            l = t.computes.getResearchTree(),
                            s = t.computes.getTtx(),
                            E = t.computes.getIncompatibleModules(),
                            d = t.computes.getVehicleAbilities(),
                            m = t.currentVehicle.get(),
                            A = L().mediaSize,
                            F = (() => {
                                const e = (0, a.useState)(_.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(_.O.view.getScale());
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
                            D = 1.75 === F && A === S.ExtraSmall,
                            g = (0, a.useState)(!1),
                            B = g[0],
                            C = g[1],
                            p = (0, a.useState)(!1),
                            h = p[0],
                            v = p[1],
                            f = (0, a.useState)(!1),
                            b = f[0],
                            w = f[1],
                            x = (0, a.useState)(!1),
                            y = x[0],
                            T = x[1],
                            M = (0, a.useState)(!1),
                            N = M[0],
                            O = M[1],
                            k = (0, a.useState)(m.points),
                            P = k[0],
                            I = k[1],
                            H = (0, a.useState)(!1),
                            U = H[0],
                            G = H[1],
                            j = (0, a.useState)(new Set()),
                            z = j[0],
                            V = j[1],
                            $ = (0, a.useRef)(m.points),
                            K = (0, a.useRef)([]),
                            X = (0, a.useRef)(null);
                        (Te(Le.n.ESCAPE, () => {
                            U ? Q() : u.onClose();
                        }),
                            (0, a.useEffect)(() => {
                                const e = m.points,
                                    u = $.current;
                                u !== e &&
                                    (u < e && void 0 !== u
                                        ? (X.current && clearTimeout(X.current),
                                          (X.current = Number(
                                              setTimeout(() => {
                                                  (I(e), T(!0));
                                                  const u = setTimeout(() => T(!1), 300);
                                                  return () => clearTimeout(u);
                                              }, 400),
                                          )))
                                        : I(e),
                                    ($.current = e));
                            }, [m.points]));
                        const Y = (0, a.useMemo)(() => ({ onMouseEnter: () => O(!0), onMouseLeave: () => O(!1) }), []),
                            q = (0, a.useCallback)(
                                (e) => {
                                    ('left' === e ? u.onPrevVehicleClick() : u.onNextVehicleClick(),
                                        K.current.forEach((e) => clearTimeout(e)),
                                        C((e) => !e),
                                        v((e) => !e),
                                        G(!1));
                                },
                                [u],
                            ),
                            Z = (0, a.useCallback)(
                                (e) => {
                                    (u.onNodeSelect(e), G(!0));
                                },
                                [u],
                            ),
                            Q = (0, a.useCallback)(() => {
                                (C((e) => !e), G(!1), null == u.onNodeReset || u.onNodeReset());
                            }, [u]),
                            J = (0, a.useCallback)((e) => {
                                V((u) => new Set([...u, e]));
                            }, []),
                            ee = (0, a.useCallback)(
                                (e) => {
                                    (u.onNodeUpgrade(e),
                                        K.current.forEach((e) => clearTimeout(e)),
                                        (K.current = []),
                                        b && w(!1));
                                    const t = setTimeout(() => {
                                        (w(!0),
                                            K.current.push(
                                                Number(
                                                    setTimeout(() => {
                                                        w(!1);
                                                    }, 1200),
                                                ),
                                            ));
                                    }, 200);
                                    K.current.push(Number(t));
                                },
                                [u, b],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                const e = new Set();
                                for (var u, t = Lt(l); !(u = t()).done;)
                                    for (var r, n = Lt(u.value.stageNodes); !(r = n()).done;) {
                                        const u = r.value;
                                        u.nodeStatus === Ne.LEARNED && e.add(u.id);
                                    }
                                V((u) => {
                                    const t = new Set(u);
                                    let r = !1;
                                    for (var n, a = Lt(u); !(n = a()).done;) {
                                        const u = n.value;
                                        e.has(u) && (t.delete(u), (r = !0));
                                    }
                                    return r ? t : u;
                                });
                            }, [l]),
                            (0, a.useEffect)(
                                () => () => {
                                    (K.current.forEach((e) => clearTimeout(e)),
                                        (K.current = []),
                                        X.current && (clearTimeout(X.current), (X.current = null)));
                                },
                                [],
                            ),
                            o().createElement(
                                Ge,
                                { moveSpace: u.moveSpace, isDisabled: N, onStartMoving: u.startMoving },
                                o().createElement(
                                    'div',
                                    { className: c()('App_base_d8', { App_leftBlock__extraSmallHeight_43: D }) },
                                    o().createElement('div', { className: 'App_vignette_33' }),
                                    o().createElement(
                                        'div',
                                        xt({ className: c()('App_leftBlock_45') }, Y),
                                        o().createElement(
                                            'div',
                                            { className: 'App_headWrapper_59' },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'App_titleContainer_d4',
                                                    key: Uu.titleContainer[Number(!h)],
                                                },
                                                o().createElement(
                                                    xe,
                                                    { header: Tt.tooltip.level.title(), body: Tt.tooltip.level.desc() },
                                                    o().createElement('div', {
                                                        className: 'App_level_3c',
                                                        style: {
                                                            backgroundImage: `url(${Nt.levels.$dyn(`c_${m.lvl}`)})`,
                                                        },
                                                    }),
                                                ),
                                                o().createElement(Ce, { text: m.name, className: 'App_tankName_3c' }),
                                                o().createElement(
                                                    'div',
                                                    { className: 'App_tokenContainer_dd' },
                                                    o().createElement(
                                                        fe,
                                                        {
                                                            contentId:
                                                                R.views.portal.lobby.tooltips.ProgressTokenTooltip(
                                                                    'resId',
                                                                ),
                                                            args: { stageNumber: m.lvl, isTokenTooltip: !1 },
                                                        },
                                                        o().createElement('div', { className: 'App_tokenImg_2b' }),
                                                    ),
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: c()(
                                                                'App_pointsValue_2c',
                                                                y && 'App_pointsValue__animate_f6',
                                                            ),
                                                        },
                                                        o().createElement(W, { value: P }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'App_ttxPanelContainer_1b',
                                                    key: Uu.ttxPanelContainer[Number(!h)],
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: c()(Tu, 'App_ttxInfo_8f') },
                                                    o().createElement(Ce, { className: Mu, text: Tt.params() }),
                                                    o().createElement('div', { className: Nu }),
                                                ),
                                                o().createElement(wt, { parameters: s }),
                                            ),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: D ? 'App_vehicleAbilitiesWrapper_b3' : void 0 },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'App_vehicleAbilitiesContainer_92',
                                                    key: Uu.vehicleAbilitiesContainer[Number(!h)],
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: Tu },
                                                    o().createElement(Ce, { className: Mu, text: Tt.abilities() }),
                                                    o().createElement('div', { className: Nu }),
                                                ),
                                                o().createElement(yu, { abilities: d }),
                                            ),
                                            m.lvl > 1 &&
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: 'App_resetContainer_95',
                                                        key: Uu.resetContainer[Number(!h)],
                                                    },
                                                    o().createElement(ju, { onClick: u.resetClick }),
                                                ),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        xt({ className: 'App_actionsBlock_57' }, Y),
                                        o().createElement(
                                            'div',
                                            { className: 'App_infoButton_c6' },
                                            o().createElement(ze, {
                                                defaultText: Tt.about(),
                                                hoverText: Tt.aboutHover(),
                                                onClick: u.aboutUpgrade,
                                                isTooltipEnabled: !1,
                                            }),
                                        ),
                                        o().createElement(We, {
                                            onClick: u.onClose,
                                            mainText: Mt.closeButton(),
                                            hoverText: Mt.closeButtonHover(),
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: 'App_arrowLeft_88' },
                                        o().createElement(Hu, { onClick: () => q('left') }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: 'App_arrowRight_bc' },
                                        o().createElement(Hu, { onClick: () => q('right'), isRightArrow: !0 }),
                                    ),
                                    o().createElement(
                                        'div',
                                        xt({ className: 'App_upgradeTreeContainer_ae' }, Y),
                                        o().createElement(
                                            'div',
                                            { className: 'App_messageContainer_7e' },
                                            n &&
                                                o().createElement(
                                                    'div',
                                                    { className: 'App_info_71' },
                                                    o().createElement(Ce, {
                                                        className: 'App_infoLabel_c6',
                                                        text: Tt.readyForUpgrade(),
                                                    }),
                                                    o().createElement(
                                                        fe,
                                                        {
                                                            contentId:
                                                                R.views.portal.lobby.tooltips.UpgradeInfoTooltip(
                                                                    'resId',
                                                                ),
                                                        },
                                                        o().createElement('div', { className: 'App_infoIcon_7c' }),
                                                    ),
                                                ),
                                            i && o().createElement(Ce, { className: Ru, text: Tt.clue.maxLvl() }),
                                            E.length > 0 &&
                                                o().createElement(Ce, {
                                                    className: Ru,
                                                    text: Tt.incompatibleModules(),
                                                    format: {
                                                        binding: {
                                                            icon: o().createElement('div', {
                                                                className: 'App_alertIcon_75',
                                                            }),
                                                            modules: E.join(' / '),
                                                        },
                                                    },
                                                }),
                                        ),
                                        o().createElement(pu, {
                                            isFirstEnter: r,
                                            researchTree: l,
                                            onNodeSelect: Z,
                                            onNodeUpgrade: ee,
                                            onStageHovered: u.onStageHovered,
                                            onNodeReset: Q,
                                            resetNodeSelect: B,
                                            playResetAnimation: y,
                                            key: Uu.upgradeTree[Number(!h)],
                                            showLevelUp: b,
                                            vehicleLvl: m.lvl,
                                            optimisticallyLearnedNodes: z,
                                            onOptimisticNodeUpgrade: J,
                                        }),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        o().createElement(vu, null, o().createElement(H, null, o().createElement(Rt, null))),
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
        (__webpack_require__.j = 681),
        (() => {
            var e = { 681: 0 };
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
                        ((n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(304));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
