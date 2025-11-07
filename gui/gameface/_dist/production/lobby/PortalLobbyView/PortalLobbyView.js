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
                (t.r(u), t.d(u, { mouse: () => l, onResize: () => r }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
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
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            l = o[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            n(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    }));
                var n = t(527);
                function a(e = 'px') {
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
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => v,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    o = t(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, n = 1) {
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
                function p() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    r = {
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
            5521: (e, u, t) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
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
                t.d(u, { B0: () => i, ry: () => C });
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
                const a = n;
                var r = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var s;
                (((s = i || (i = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, a, r, o) {
                    try {
                        var l = e[r](o),
                            i = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(i) : Promise.resolve(i).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            D(r, n, a, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            D(r, n, a, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => g(i.CLOSE),
                    v = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const b = a.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                E = l.width,
                                m = l.height,
                                _ = {
                                    x: A.O.view.pxToRem(s) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(m),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: B(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = f;
            },
            7998: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => xu,
                        Bar: () => bu,
                        DefaultScroll: () => wu,
                        Direction: () => du,
                        defaultSettings: () => Au,
                        useHorizontalScrollApi: () => Du,
                    }));
                var a = {};
                (t.r(a), t.d(a, { Area: () => Hu, Bar: () => Pu, Default: () => Iu, useVerticalScrollApi: () => Su }));
                var r = t(6179),
                    o = t.n(r),
                    l = t(493),
                    i = t.n(l),
                    s = t(6483),
                    c = t.n(s),
                    E = t(3138),
                    m = t(5521),
                    _ = t(4179);
                const d = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function A(e = m.n.NONE, u = d, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== m.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (E.O.view.isEventHandled()) return;
                                (E.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                function F(e) {
                    engine.call('PlaySound', e);
                }
                const D = {
                    playHighlight() {
                        F('highlight');
                    },
                    playClick() {
                        F('play');
                    },
                    playYes() {
                        F('yes1');
                    },
                };
                var B = t(3282);
                const C = '!-_\\/[]{}—=+*^?#________',
                    g = ({
                        mainText: e,
                        hoverText: u,
                        classMix: t,
                        classText: n,
                        animationDuration: a = 150,
                        onClick: l,
                        isHover: i,
                    }) => {
                        const s = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            m = (0, r.useRef)(!1),
                            _ = (0, r.useState)(!1),
                            d = _[0],
                            A = _[1],
                            F = void 0 !== i ? i : d,
                            D = (0, r.useCallback)(() => C[Math.floor(Math.random() * C.length)], []),
                            B = (0, r.useCallback)(
                                (e) => {
                                    if (!s.current) return Promise.resolve();
                                    (E.current && cancelAnimationFrame(E.current), (m.current = !1));
                                    const u = s.current.textContent || '',
                                        t = Math.max(u.length, e.length),
                                        n = performance.now();
                                    return new Promise((r) => {
                                        const o = () => {
                                            if (!s.current) return;
                                            const l = performance.now() - n;
                                            let i = '',
                                                c = 0;
                                            for (let n = 0; n < t; n++) {
                                                const t = Math.random() * a;
                                                l >= t + (a + Math.random() * a)
                                                    ? ((i += e[n] || ''), c++)
                                                    : (i +=
                                                          l >= t
                                                              ? `<span class="ScrambleText_randomChar_d4">${D()}</span>`
                                                              : u[n] || '');
                                            }
                                            ((s.current.innerHTML = i),
                                                c === t
                                                    ? ((m.current = !1), r())
                                                    : (E.current = requestAnimationFrame(o)));
                                        };
                                        ((m.current = !0), (E.current = requestAnimationFrame(o)));
                                    });
                                },
                                [a, D],
                            );
                        return (
                            (0, r.useEffect)(
                                () => (
                                    s.current && (s.current.textContent = e),
                                    () => {
                                        E.current && cancelAnimationFrame(E.current);
                                    }
                                ),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                B(F ? u : e);
                            }, [F, u, e, B]),
                            o().createElement(
                                'div',
                                {
                                    className: c()('ScrambleText_base_cd', t),
                                    onMouseEnter: () => {
                                        void 0 === i && A(!0);
                                    },
                                    onMouseLeave: () => {
                                        void 0 === i && A(!1);
                                    },
                                    onClick: l,
                                },
                                o().createElement('div', {
                                    ref: s,
                                    className: c()('ScrambleText_text_63', { ScrambleText_text__hover_d1: F }, n),
                                }),
                            )
                        );
                    },
                    p = ({ onClick: e, hoverText: u, mainText: t, classes: n }) => {
                        const a = (0, r.useState)(!1),
                            l = a[0],
                            i = a[1],
                            s = (0, r.useCallback)(() => {
                                (D.playClick(), e());
                            }, [e]),
                            E = (0, r.useCallback)(() => {
                                (D.playHighlight(), i(!0));
                            }, []),
                            m = (0, r.useCallback)(() => {
                                i(!1);
                            }, []);
                        return o().createElement(
                            'div',
                            { onClick: s, onMouseEnter: E, onMouseLeave: m, className: 'CloseButton_base_fb' },
                            o().createElement(g, {
                                mainText: t,
                                hoverText: u || t,
                                isHover: l,
                                classText: null == n ? void 0 : n.text,
                                classMix: c()('CloseButton_text_7b', null == n ? void 0 : n.scrambleBase),
                            }),
                            o().createElement('div', {
                                className: c()(
                                    'CloseButton_icon_9a',
                                    l ? 'CloseButton_icon__hover_79' : 'CloseButton_icon__default_bc',
                                ),
                            }),
                        );
                    },
                    v = ({ children: e, moveSpace: u, isDisabled: t = !1, onStartMoving: n, onEndMoving: a }) => {
                        const l = (0, r.useState)(!1),
                            i = l[0],
                            s = l[1],
                            E = (0, r.useState)({ x: 0, y: 0 }),
                            m = E[0],
                            _ = E[1],
                            d = (0, r.useRef)(null),
                            A = (0, r.useCallback)(() => {
                                (s(!1), null == a || a());
                            }, [a]);
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('mouseup', A),
                                () => window.removeEventListener('mouseup', A)
                            ),
                            [A],
                        );
                        const F = (e) => {
                            if (!d.current) return;
                            const u = d.current.getBoundingClientRect(),
                                t = u.width,
                                n = u.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= n - 1);
                        };
                        return (
                            document.addEventListener('mouseout', (e) => {
                                const u = e.relatedTarget;
                                (u && 'HTML' !== (null == u ? void 0 : u.nodeName)) || s(!1);
                            }),
                            o().createElement(
                                'div',
                                {
                                    ref: d,
                                    className: c()(
                                        'SceneWrapper_base_36',
                                        i && 'SceneWrapper_base__down_ab',
                                        t && 'SceneWrapper_base__moveSpaceDisabled_03',
                                    ),
                                    onMouseDown: t
                                        ? void 0
                                        : (e) => {
                                              (e.preventDefault(),
                                                  0 === e.button && F(e) && (s(!0), _({ x: e.clientX, y: e.clientY })));
                                          },
                                    onMouseMove: t
                                        ? void 0
                                        : (e) => {
                                              if ((e.preventDefault(), i)) {
                                                  if (!F(e)) return;
                                                  const t = e.clientX !== m.x ? e.clientX - m.x : 0,
                                                      a = e.clientY !== m.y ? e.clientY - m.y : 0;
                                                  ((0 === t && 0 === a) || null == n || n(),
                                                      _({ x: e.clientX, y: e.clientY }),
                                                      u({ dx: t, dy: a, dz: 0 }));
                                              }
                                          },
                                    onMouseUp: t
                                        ? void 0
                                        : () => {
                                              (s(!1), null == a || a());
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
                    };
                function h() {
                    return !1;
                }
                console.log;
                var b = t(3915);
                function f(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const w = (e) => (0 === e ? window : window.subViews.get(e)),
                    x = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? x(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, n) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? x(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? x(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    S = (e) => x(e);
                var y = t(6517);
                let L;
                !(function (e) {
                    ((e.SELECTED = 'selected'),
                        (e.DEFAULT = 'default'),
                        (e.LOCKED = 'locked'),
                        (e.LOCKED_BY_SQUAD = 'lockedBySquad'));
                })(L || (L = {}));
                const M = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: a, mocks: l }) {
                                const i = (0, r.useRef)([]),
                                    s = (e, t, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = w,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
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
                                                const o = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const l = 'string' == typeof r ? `${n}.${r}` : n,
                                                            i = E.O.view.addModelObserver(l, u, !0);
                                                        return (a.set(i, t), e && t(o(r)), i);
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
                                                                                    return f(e, u);
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
                                                                                          ? f(e, u)
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
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            s = (e) => i.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        ammunitionPanel: e.array('portalAmmunitionPanel'),
                                                        portalQuestWidget: e.object('portalQuestWidget'),
                                                        complexityLevels: e.array('complexityLevelWidget.levels.items'),
                                                        tanks: e.array('tanks.items'),
                                                    },
                                                    t = (0, y.computedFn)(() => u.portalQuestWidget.get(), {
                                                        equals: h,
                                                    }),
                                                    n = (0, y.computedFn)(() => S(u.complexityLevels.get()), {
                                                        equals: h,
                                                    }),
                                                    a = (0, y.computedFn)(
                                                        () => {
                                                            const e = S(u.complexityLevels.get());
                                                            return Boolean(
                                                                e.find(
                                                                    (u) =>
                                                                        u.status === L.SELECTED &&
                                                                        u.level === e[e.length - 1].level,
                                                                ),
                                                            );
                                                        },
                                                        { equals: h },
                                                    ),
                                                    r = (0, y.computedFn)(() => S(u.ammunitionPanel.get()), {
                                                        equals: h,
                                                    }),
                                                    o = (0, y.computedFn)(() => S(u.tanks.get()), { equals: h }),
                                                    l = (0, y.computedFn)(
                                                        () => S(u.tanks.get()).find((e) => e.selected),
                                                        { equals: h },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getAmmunitionPanel: r,
                                                        getComplexityLevels: n,
                                                        getTanks: o,
                                                        getQuestWidget: t,
                                                        getSelectedTank: l,
                                                        getIsLastLevelOfComplexity: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : l(u),
                                                            a = b.observable.box(n, { equals: h });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, b.action)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : l(u),
                                                            a = b.observable.box(n, { equals: h });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, b.action)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = b.observable.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, b.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                l = r.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = b.observable.box(n[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, b.action)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                l[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            m = { mode: e, model: c, externalModel: o, cleanup: s };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(m) : u(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    m = (0, r.useState)(e),
                                    _ = m[0],
                                    d = m[1],
                                    A = (0, r.useState)(() => s(e, n, l)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? D(s(_, n, l)) : (c.current = !0);
                                    }, [l, _, n]),
                                    (0, r.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    o().createElement(t.Provider, { value: F }, a)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onClose: e.createCallbackNoArgs('onClose'),
                        onShowSettings: e.createCallbackNoArgs('onShowSettings'),
                        onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        onShopClick: e.createCallbackNoArgs('onShopClicked'),
                        onProgressionClicked: e.createCallbackNoArgs('onProgressionClicked'),
                        onComplexityChange: e.createCallback((e) => ({ intCD: e }), 'onComplexityChange'),
                        onVehicleSelect: e.createCallback((e) => ({ id: e }), 'onVehicleSelect'),
                        moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        startMoving: e.createCallbackNoArgs('onStartMoving'),
                        upgradeVehicle: e.createCallbackNoArgs('onUpgradeVehicle'),
                    })),
                    T = M[0],
                    k = M[1];
                var N = t(9887),
                    P = t.n(N);
                const O = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    I = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var H;
                function W(e, u, t) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(H || (H = {}));
                const U = E.O.client.getSize('rem'),
                    G = U.width,
                    j = U.height,
                    z = Object.assign({ width: G, height: j }, W(G, j, I)),
                    V = (0, r.createContext)(z),
                    X = ['children'],
                    $ = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, X);
                        const n = (0, r.useContext)(V),
                            a = n.extraLarge,
                            o = n.large,
                            l = n.medium,
                            i = n.small,
                            s = n.extraSmall,
                            c = n.extraLargeWidth,
                            E = n.largeWidth,
                            m = n.mediumWidth,
                            _ = n.smallWidth,
                            d = n.extraSmallWidth,
                            A = n.extraLargeHeight,
                            F = n.largeHeight,
                            D = n.mediumHeight,
                            B = n.smallHeight,
                            C = n.extraSmallHeight,
                            g = { extraLarge: A, large: F, medium: D, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && o) return u;
                            if (t.medium && l) return u;
                            if (t.small && i) return u;
                            if (t.extraSmall && s) return u;
                        } else {
                            if (t.extraLargeWidth && c) return O(u, t, g);
                            if (t.largeWidth && E) return O(u, t, g);
                            if (t.mediumWidth && m) return O(u, t, g);
                            if (t.smallWidth && _) return O(u, t, g);
                            if (t.extraSmallWidth && d) return O(u, t, g);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && A) return u;
                                if (t.largeHeight && F) return u;
                                if (t.mediumHeight && D) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && C) return u;
                            }
                        }
                        return null;
                    };
                (($.defaultProps = {
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
                    (0, r.memo)($));
                const q = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
                let K, Y, Q;
                ((0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(V),
                        t = (0, r.useState)(u),
                        n = t[0],
                        a = t[1],
                        l = (0, r.useCallback)((e, u) => {
                            const t = E.O.view.pxToRem(e),
                                n = E.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: n }, W(t, n, I)));
                        }, []);
                    (q(() => {
                        engine.on('clientResized', l);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', l), [l]));
                    const i = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return o().createElement(V.Provider, { value: i }, e);
                }),
                    (function (e) {
                        ((e[(e.ExtraSmall = I.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = I.small.width)] = 'Small'),
                            (e[(e.Medium = I.medium.width)] = 'Medium'),
                            (e[(e.Large = I.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge'));
                    })(K || (K = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = I.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = I.small.width)] = 'Small'),
                            (e[(e.Medium = I.medium.width)] = 'Medium'),
                            (e[(e.Large = I.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = I.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = I.small.height)] = 'Small'),
                            (e[(e.Medium = I.medium.height)] = 'Medium'),
                            (e[(e.Large = I.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = I.extraLarge.height)] = 'ExtraLarge'));
                    })(Q || (Q = {})));
                const Z = () => {
                        const e = (0, r.useContext)(V),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return K.ExtraLarge;
                                    case e.large:
                                        return K.Large;
                                    case e.medium:
                                        return K.Medium;
                                    case e.small:
                                        return K.Small;
                                    case e.extraSmall:
                                        return K.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), K.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Y.ExtraLarge;
                                    case e.largeWidth:
                                        return Y.Large;
                                    case e.mediumWidth:
                                        return Y.Medium;
                                    case e.smallWidth:
                                        return Y.Small;
                                    case e.extraSmallWidth:
                                        return Y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Y.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Q.ExtraLarge;
                                    case e.largeHeight:
                                        return Q.Large;
                                    case e.mediumHeight:
                                        return Q.Medium;
                                    case e.smallHeight:
                                        return Q.Small;
                                    case e.extraSmallHeight:
                                        return Q.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Q.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    J = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ee = (e) => e.includes('_') && ((e) => J.includes(e))(e.split('_').at(-1)),
                    ue = [K.ExtraLarge, K.Large, K.Medium, K.Small, K.ExtraSmall],
                    te = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (ee(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = ue.indexOf(u),
                                    o = (-1 !== r ? J.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = o ? e[o] : void 0;
                                return ((t[a] = void 0 !== l ? l : e[a]), t);
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => J.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    ne = (e, u = te) => {
                        const t = (
                            (e, u = te) =>
                            (t) => {
                                const n = Z().mediaSize,
                                    a = (0, r.useMemo)(() => u(t, n), [t, n]);
                                return o().createElement(e, a);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => ee(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    ae = {
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
                    re = [
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
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                Object.keys(P());
                const le = {
                        XL: { mt: ae.mt__XL, mr: ae.mr__XL, mb: ae.mb__XL, ml: ae.ml__XL },
                        LG: { mt: ae.mt__LG, mr: ae.mr__LG, mb: ae.mb__LG, ml: ae.ml__LG },
                        MDp: { mt: ae.mt__MDp, mr: ae.mr__MDp, mb: ae.mb__MDp, ml: ae.ml__MDp },
                        MD: { mt: ae.mt__MD, mr: ae.mr__MD, mb: ae.mb__MD, ml: ae.ml__MD },
                        SMp: { mt: ae.mt__SMp, mr: ae.mr__SMp, mb: ae.mb__SMp, ml: ae.ml__SMp },
                        SM: { mt: ae.mt__SM, mr: ae.mr__SM, mb: ae.mb__SM, ml: ae.ml__SM },
                        XS: { mt: ae.mt__XS, mr: ae.mr__XS, mb: ae.mb__XS, ml: ae.ml__XS },
                    },
                    ie = (Object.keys(le), ['mt', 'mr', 'mb', 'ml']),
                    se = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ce = ne((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            a = e.m,
                            l = e.mt,
                            i = void 0 === l ? a : l,
                            s = e.mr,
                            E = void 0 === s ? a : s,
                            m = e.mb,
                            _ = void 0 === m ? a : m,
                            d = e.ml,
                            A = void 0 === d ? a : d,
                            F = e.column,
                            D = e.row,
                            B = e.flexDirection,
                            C = void 0 === B ? (F ? 'column' : D && 'row') || void 0 : B,
                            g = e.flexStart,
                            p = e.center,
                            v = e.flexEnd,
                            h = e.spaceBetween,
                            b = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : p && 'center') ||
                                      (v && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : f,
                            x = e.alignItems,
                            S = void 0 === x ? (g ? 'flex-start' : p && 'center') || (v && 'flex-end') || void 0 : x,
                            y = e.alignSelf,
                            L = e.wrap,
                            M = e.flexWrap,
                            T = void 0 === M ? (L ? 'wrap' : void 0) : M,
                            k = e.grow,
                            N = e.shrink,
                            R = e.flex,
                            P = void 0 === R ? (k || N ? `${k ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : R,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, re);
                        const W = (0, r.useMemo)(() => {
                                const e = { mt: i, mr: E, mb: _, ml: A },
                                    u = ((e) =>
                                        ie.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(le[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        ie.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[se[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: P,
                                        alignSelf: y,
                                        display: C || S ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, i, E, _, A, O, P, y, C, T, w, S]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', oe({ className: c()(ae.base, ...G, u), style: U }, H), I);
                    });
                let Ee;
                function me(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ee || (Ee = {}));
                const _e = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    de = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ae = (e, u, t = Ee.left) => e.split(u).reduce(t === Ee.left ? _e : de, []),
                    Fe = (() => {
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
                    De = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Be = ({ binding: e, text: u = '', classMix: t, alignment: n = Ee.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  r.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      o().createElement(
                                          'div',
                                          { className: c()('FormatText_base_d0', t), key: `${u}-${a}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Ee.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return De.includes(t)
                                                                ? Fe(e)
                                                                : ((e, u = Ee.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ae(a, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Ae(e, n, Ee.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              o().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ce = t(3532),
                    ge = t.n(Ce);
                const pe = {
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
                Object.keys(P());
                const be = Object.keys(ge()),
                    fe = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    we = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H56': fe,
                            'heading-H36': fe,
                            'heading-H28': we,
                            'heading-H24': we,
                            'heading-H24R': we,
                            'heading-H22': we,
                            'heading-H20R': we,
                            'heading-H18': we,
                            'heading-H15': xe,
                            'heading-H14': xe,
                            'paragraph-P24': we,
                            'paragraph-P18': we,
                            'paragraph-P16': we,
                            'paragraph-P14': xe,
                            'paragraph-P12': xe,
                            'paragraph-P10': xe,
                        }),
                    ye =
                        (Object.keys(Se),
                        (e) =>
                            e
                                ? ((e) => be.includes(e))(e)
                                    ? { colorClassName: pe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Le = ne((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            a = e.color,
                            l = e.m,
                            i = e.mt,
                            s = void 0 === i ? l : i,
                            E = e.mr,
                            m = void 0 === E ? l : E,
                            _ = e.mb,
                            d = void 0 === _ ? l : _,
                            A = e.ml,
                            F = void 0 === A ? l : A,
                            D = e.style,
                            B = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ve);
                        const g = (0, r.useMemo)(() => {
                                const e = ye(a),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, a]),
                            p = g.computedStyle,
                            v = g.colorClassName;
                        return o().createElement(
                            ce,
                            he(
                                {
                                    className: c()(pe.base, t && pe[t], v, n),
                                    style: p,
                                    mt: !0 === s ? Se[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === m ? Se[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === d ? Se[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === F ? Se[t || 'paragraph-P16'].ml : F,
                                },
                                C,
                            ),
                            void 0 !== B ? o().createElement(Be, he({}, B, { text: u })) : u,
                        );
                    }),
                    Me = [
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
                const ke = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ne = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            i = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            _ = e.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Me);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, r.useMemo)(
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
                            b = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (ke(t, d, { isMouseEvent: !0, on: !0, arguments: Te(n) }, h),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [t, d, n, h, C]),
                            f = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        ke(t, d, { on: !1 }, h),
                                        v.current.isVisible && g && g(),
                                        (v.current.isVisible = !1));
                                }
                            }, [t, d, h, g]),
                            w = (0, r.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = v.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((v.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          a && a(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && f(), null == l || l(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    Re = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Pe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Oe(e) {
                    let u = '';
                    for (let t = Pe.length - 1; t >= 0; t--) for (; e >= Pe[t]; ) ((u += Re[t]), (e -= Pe[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const Ie = {
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
                let He, We;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(He || (He = {})),
                    (function (e) {
                        ((e.Primary = 'primary'), (e.Secondary = 'secondary'), (e.Ghost = 'ghost'));
                    })(We || (We = {})));
                const Ue = (0, r.memo)(
                        ({
                            title: e,
                            disabled: u,
                            onClick: t,
                            className: n,
                            iconRight: a,
                            isAnimate: l = !1,
                            iconLeft: i,
                            size: s = 'extraLarge',
                            type: E = 'primary',
                            classes: m,
                        }) => {
                            const _ = (0, r.useState)(!1),
                                d = _[0],
                                A = _[1],
                                F = (0, r.useState)(!1),
                                B = F[0],
                                C = F[1],
                                g = c()(
                                    Ie.base,
                                    Ie[`base__${E}`],
                                    {
                                        [Ie.base__disabled]: u,
                                        [Ie[`base__${s}`]]: s,
                                        [Ie.base__active]: d,
                                        [Ie.base__hover]: B,
                                        [Ie.animated]: l,
                                    },
                                    null == m ? void 0 : m.base,
                                ),
                                p = c()(Ie.bgOverlay, Ie[`bgOverlay__${E}`], {
                                    [Ie.bgOverlay__hover]: B,
                                    [Ie.bgOverlay__active]: d,
                                    [Ie.bgOverlay__disabled]: u,
                                }),
                                v = c()(Ie.bgImage, Ie[`bgImage__${E}`], {
                                    [Ie.bgImage__hover]: B,
                                    [Ie.bgImage__active]: d,
                                    [Ie.bgImage__disabled]: u,
                                }),
                                h = c()(Ie.content, Ie[`content__${E}`], null == m ? void 0 : m.content),
                                b = c()(Ie.bgLines, Ie[`bgLines__${E}`], { [Ie.bgLines__disabled]: u });
                            return o().createElement(
                                'div',
                                { className: n },
                                o().createElement(
                                    'div',
                                    {
                                        className: g,
                                        onMouseEnter: () => {
                                            u || (D.playHighlight(), C(!0));
                                        },
                                        onMouseUp: () => {
                                            u || A(!1);
                                        },
                                        onMouseDown: () => {
                                            u || A(!0);
                                        },
                                        onMouseLeave: () => {
                                            u || (A(!1), C(!1));
                                        },
                                        onClick: (e) => {
                                            u || (t && t(e), D.playClick());
                                        },
                                    },
                                    o().createElement('div', { className: p }),
                                    o().createElement('div', { className: b }),
                                    o().createElement('div', { className: v }),
                                    l &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('div', { className: Ie.pulseAnimatedBoxOne }),
                                            o().createElement('div', { className: Ie.pulseAnimatedBoxTwo }),
                                            o().createElement('div', { className: Ie.pulseAnimatedBoxThree }),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: h },
                                        i &&
                                            o().createElement('div', {
                                                className: c()(Ie.btnIcon, Ie.btnIcon__left),
                                                style: { backgroundImage: `url(${i})` },
                                            }),
                                        o().createElement(Le, { text: e }),
                                        a &&
                                            o().createElement('div', {
                                                className: c()(Ie.btnIcon, Ie.btnIcon__right),
                                                style: { backgroundImage: `url(${a})` },
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ge = 'AmmunitionPanel_slotLargeMargin_05',
                    je = 'AmmunitionPanel_slotContent_e8',
                    ze = (0, r.memo)(({ className: e, children: u }) =>
                        o().createElement('div', { className: c()('Slot_base_f6', e) }, u),
                    ),
                    Ve = (0, r.memo)(
                        ({ abilities: e, selectedTank: u, shellType: t, onUpgrade: n, hasNewUpgrade: a }) => {
                            const r = R.images.portal.gui.maps.icons.hangar.ammunitionPanel.shells.$dyn(
                                    t || 'ARMOR_PIERCING',
                                ),
                                l = u.level,
                                i = u.vehicleType,
                                s = u.title,
                                E = u.inBattle,
                                m = u.inPlatoon,
                                _ = u.hasUpdate;
                            return o().createElement(
                                'div',
                                { className: 'AmmunitionPanel_base_72' },
                                o().createElement(
                                    'div',
                                    { className: 'AmmunitionPanel_vehicleInfo_7d' },
                                    o().createElement(Le, { className: 'AmmunitionPanel_level_d0', text: Oe(l) }),
                                    o().createElement('div', {
                                        className: c()(
                                            'AmmunitionPanel_vehicleType_da',
                                            'lightTank' === i && 'AmmunitionPanel_vehicleType__lightTank_c7',
                                        ),
                                        style: {
                                            backgroundImage: `url(${R.images.portal.gui.maps.icons.hangar.ammunitionPanel.vehicleTypes.$dyn(me(i))})`,
                                        },
                                    }),
                                    o().createElement(Le, { className: 'AmmunitionPanel_name_e7', text: s }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'AmmunitionPanel_slotsWithButton_a1' },
                                    e.map((e) =>
                                        o().createElement(
                                            Ne,
                                            {
                                                contentId: R.views.portal.lobby.tooltips.AbilitiesTooltip('resId'),
                                                key: e,
                                                args: { name: e },
                                            },
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement(
                                                    ze,
                                                    { className: 'AmmunitionPanel_slotMargin_46' },
                                                    o().createElement('div', {
                                                        className: je,
                                                        style: {
                                                            backgroundImage: `url(${R.images.portal.gui.maps.icons.hangar.ammunitionPanel.abilities.$dyn(e)})`,
                                                        },
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    o().createElement('div', { className: 'AmmunitionPanel_divider_29' }),
                                    o().createElement(
                                        Ne,
                                        { contentId: R.views.portal.lobby.tooltips.RepairKitTooltip('resId') },
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                ze,
                                                { className: Ge },
                                                o().createElement('div', { className: 'AmmunitionPanel_repairkit_f6' }),
                                            ),
                                        ),
                                    ),
                                    o().createElement(
                                        Ne,
                                        { contentId: R.views.portal.lobby.tooltips.ShellTooltip('resId') },
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                ze,
                                                { className: Ge },
                                                o().createElement('div', {
                                                    className: je,
                                                    style: { backgroundImage: `url(${r})` },
                                                }),
                                                o().createElement('div', {
                                                    className: 'AmmunitionPanel_infinityIcon_4f',
                                                }),
                                            ),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                'AmmunitionPanel_button_70',
                                                !E && !m && 'AmmunitionPanel_button__withMask_0c',
                                            ),
                                        },
                                        o().createElement(Ue, {
                                            iconLeft: _
                                                ? 'R.images.portal.gui.maps.icons.hangar.carousel.card.levelUp'
                                                : void 0,
                                            disabled: E || m,
                                            isAnimate: a,
                                            classes: { content: c()(_ && 'AmmunitionPanel_buttonContent_0e') },
                                            title: R.strings.portal_lobby.ammunitionPanel.updateButton(),
                                            size: He.Large,
                                            onClick: n,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Xe = 'R.images.portal.gui.maps.icons.hangar.complexityLevelSelector',
                    $e = (0, r.memo)(({ level: e, status: u, onClick: t, isEnabled: n }) => {
                        const a = (0, r.useState)(!1),
                            l = a[0],
                            i = a[1],
                            s = (0, r.useState)(!1),
                            E = s[0],
                            m = s[1],
                            _ = u === L.SELECTED,
                            d = u === L.LOCKED || u === L.LOCKED_BY_SQUAD || !n,
                            A = c()(
                                'ComplexityLevel_base_f1',
                                _ && 'ComplexityLevel_base__selected_13',
                                d && 'ComplexityLevel_base__locked_5b',
                                l && 'ComplexityLevel_base__pressed_fc',
                                E && 'ComplexityLevel_base__hovered_3e',
                            );
                        return o().createElement(
                            'div',
                            {
                                className: A,
                                onMouseEnter: () => {
                                    d || (D.playHighlight(), m(!0));
                                },
                                onMouseDown: () => {
                                    d || _ || i(!0);
                                },
                                onMouseLeave: () => {
                                    d || (i(!1), m(!1));
                                },
                                onClick: () => {
                                    d || _ || (D.playClick(), t());
                                },
                            },
                            o().createElement('div', {
                                className: 'ComplexityLevel_defaultImage_98',
                                style: { backgroundImage: `url(${Xe}.default_state.level_${e})` },
                            }),
                            o().createElement('div', {
                                className: 'ComplexityLevel_hoverImage_57',
                                style: { backgroundImage: `url(${Xe}.hovered_state.level_${e})` },
                            }),
                            o().createElement('div', {
                                className: 'ComplexityLevel_selectImage_ea',
                                style: { backgroundImage: `url(${Xe}.selected_state.level_${e})` },
                            }),
                            o().createElement('div', {
                                className: 'ComplexityLevel_pressedImage_6d',
                                style: { backgroundImage: `url(${Xe}.pressed_state.level_${e})` },
                            }),
                            d &&
                                u !== L.SELECTED &&
                                o().createElement('div', {
                                    className:
                                        u === L.LOCKED
                                            ? 'ComplexityLevel_lockIcon_ed'
                                            : 'ComplexityLevel_lockSquadIcon_29',
                                }),
                            o().createElement(Le, {
                                text: R.strings.portal_lobby.complexity.level.$dyn(`c_${e}`),
                                className: 'ComplexityLevel_description_59',
                            }),
                        );
                    }),
                    qe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                const Ye = R.views.common.tooltip_window.simple_tooltip_content,
                    Qe = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            l = e.alert,
                            i = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, qe);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: a, alert: l });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [l, t, n, a, i]);
                        return o().createElement(
                            Ne,
                            Ke(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Ye.SimpleTooltipHtmlContent('resId') : Ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var E;
                    },
                    Ze = ({ status: e, level: u, children: t, isEnabled: n }) =>
                        e !== L.LOCKED_BY_SQUAD && n
                            ? o().createElement(
                                  Ne,
                                  {
                                      contentId: R.views.portal.lobby.tooltips.ComplexityTooltip('resId'),
                                      args: { level: u },
                                  },
                                  t,
                              )
                            : o().createElement(
                                  Qe,
                                  {
                                      header: n
                                          ? R.strings.portal_tooltips.squad.complexity.squadLocked.title()
                                          : R.strings.portal_tooltips.squad.complexity.squadLockedByCap.title(),
                                      body: n
                                          ? R.strings.portal_tooltips.squad.complexity.squadLocked.description()
                                          : R.strings.portal_tooltips.squad.complexity.squadLockedByCap.description(),
                                  },
                                  t,
                              ),
                    Je = (0, r.memo)(({ complexityLevels: e, onLevelChange: u, isEnabled: t }) => {
                        const n = (0, r.useCallback)(
                            (e) => () => {
                                u(e);
                            },
                            [u],
                        );
                        return o().createElement(
                            'div',
                            { className: 'ComplexitySelector_base_37' },
                            e.map(({ level: e, status: u }) =>
                                o().createElement(
                                    r.Fragment,
                                    { key: e },
                                    o().createElement(
                                        Ze,
                                        { status: u, level: e, isEnabled: t },
                                        o().createElement(
                                            'div',
                                            { className: 'ComplexitySelector_level_56' },
                                            o().createElement($e, { level: e, status: u, onClick: n(e), isEnabled: t }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    eu = {
                        base: 'InfoButton_base_a9',
                        icon: 'InfoButton_icon_96',
                        icon__default: 'InfoButton_icon__default_4b',
                        text: 'InfoButton_text_91',
                    },
                    uu = (0, r.memo)(({ defaultText: e, hoverText: u, onClick: t, isTooltipEnabled: n = !0 }) => {
                        const a = (0, r.useState)(!1),
                            l = a[0],
                            i = a[1],
                            s = (0, r.useCallback)(() => {
                                (D.playClick(), t());
                            }, [t]),
                            E = (0, r.useCallback)(() => {
                                (D.playHighlight(), i(!0));
                            }, []),
                            m = (0, r.useCallback)(() => {
                                i(!1);
                            }, []),
                            _ = c()(eu.icon, { [eu.icon__hover]: l, [eu.icon__default]: !l });
                        return o().createElement(
                            Qe,
                            { body: R.strings.portal_lobby.infoButton.tooltip(), isEnabled: n },
                            o().createElement(
                                'div',
                                { className: eu.base, onMouseEnter: E, onMouseLeave: m, onClick: s },
                                o().createElement('div', { className: _ }),
                                o().createElement(g, { mainText: e, hoverText: u, classText: eu.text, isHover: l }),
                            ),
                        );
                    }),
                    tu = R.strings.portal_lobby.questsWidget,
                    nu = R.strings.portal_lobby.questsWidget.tooltip,
                    au = (0, r.memo)(({ current: e, max: u, onClick: t }) => {
                        const n = (0, r.useState)(!1),
                            a = n[0],
                            l = n[1],
                            i = u === e;
                        return o().createElement(
                            Qe,
                            { header: nu.header(), body: nu.body(), ignoreShowDelay: !0 },
                            o().createElement(
                                'div',
                                {
                                    className: c()('QuestsWidget_base_58', a && 'QuestsWidget_base__hovered_93'),
                                    onClick: t,
                                    onMouseEnter: () => {
                                        l(!0);
                                    },
                                    onMouseLeave: () => {
                                        l(!1);
                                    },
                                },
                                o().createElement('div', { className: 'QuestsWidget_mainImage_db' }),
                                o().createElement('div', { className: 'QuestsWidget_smoke_5c' }),
                                o().createElement('div', { className: 'QuestsWidget_smokeHovered_42' }),
                                o().createElement('div', { className: 'QuestsWidget_hoverImage_ea' }),
                                o().createElement('div', { className: 'QuestsWidget_bottomImage_2f' }),
                                o().createElement('div', { className: 'QuestsWidget_bottomImageHovered_8b' }),
                                o().createElement('div', { className: 'QuestsWidget_secondaryImage_fc' }),
                                o().createElement(
                                    'div',
                                    { className: 'QuestsWidget_texts_c6' },
                                    !i &&
                                        o().createElement(Le, {
                                            className: 'QuestsWidget_progress_e7',
                                            text: tu.progress(),
                                            format: { binding: { current: e, goal: u } },
                                        }),
                                    o().createElement(Le, {
                                        className: 'QuestsWidget_description_0a',
                                        text: tu.text(),
                                    }),
                                    i &&
                                        o().createElement(
                                            'div',
                                            { className: 'QuestsWidget_completed_21' },
                                            o().createElement('div', { className: 'QuestsWidget_completedIcon_16' }),
                                            o().createElement(Le, {
                                                className: 'QuestsWidget_completedText_aa',
                                                text: tu.complete(),
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    ru = R.strings.portal_lobby.shopWidget.tooltip,
                    ou = (0, r.memo)(({ onClick: e }) => {
                        const u = (0, r.useState)(!1),
                            t = u[0],
                            n = u[1];
                        return o().createElement(
                            Qe,
                            { header: ru.header(), body: ru.body(), ignoreShowDelay: !0 },
                            o().createElement(
                                'div',
                                {
                                    className: c()('ShopWidget_base_d1', t && 'ShopWidget_base__hovered_e3'),
                                    onClick: e,
                                    onMouseEnter: () => {
                                        n(!0);
                                    },
                                    onMouseLeave: () => {
                                        n(!1);
                                    },
                                },
                                o().createElement('div', { className: 'ShopWidget_mainImage_d6' }),
                                o().createElement('div', { className: 'ShopWidget_smoke_ee' }),
                                o().createElement('div', { className: 'ShopWidget_smokeHovered_72' }),
                                o().createElement('div', { className: 'ShopWidget_hoverImage_e2' }),
                                o().createElement('div', { className: 'ShopWidget_bottomImage_e4' }),
                                o().createElement('div', { className: 'ShopWidget_bottomImageHovered_d1' }),
                                o().createElement('div', { className: 'ShopWidget_secondaryImage_e0' }),
                                o().createElement(Le, {
                                    className: 'ShopWidget_text_38',
                                    text: R.strings.portal_lobby.shopWidget.text(),
                                }),
                            ),
                        );
                    }),
                    lu = (e) => {
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
                    iu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    su = [];
                function cu(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), su)
                    );
                }
                function Eu(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        a,
                    ];
                }
                function mu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var _u = t(8552);
                let du;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(du || (du = {}));
                const Au = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Fu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const l = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return iu(a, r, t);
                        };
                        return (i = {}) => {
                            const s = i.settings,
                                c = void 0 === s ? Au : s,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                d = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (
                                                var n,
                                                    a = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return mu(e, u);
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
                                                                              ? mu(e, u)
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
                                                    })(u(e).values());
                                                !(n = a()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, r.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let a,
                                                    r = !1,
                                                    o = 0;
                                                function l() {
                                                    a && clearTimeout(a);
                                                }
                                                function i(...i) {
                                                    const s = this,
                                                        c = Date.now() - o;
                                                    function E() {
                                                        ((o = Date.now()), t.apply(s, i));
                                                    }
                                                    r ||
                                                        (n && !a && E(),
                                                        l(),
                                                        void 0 === n && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (a = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        (l(), (r = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        E.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, _u.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                C = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = D.scrollPosition.get(),
                                            r = (null != (n = D.scrollPosition.goal) ? n : 0) - a;
                                        return l(e, u * t + r + a);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            B.start({
                                                scrollPosition: l(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: l(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, D.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = C(u, e, n);
                                        g(r);
                                    },
                                    [g, C, c.step],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(n(e)),
                                            m.current && d.trigger('mouseWheel', e, D.scrollPosition, u(m.current)));
                                    },
                                    [D.scrollPosition, p, d],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        lu(() => {
                                            const e = m.current;
                                            e &&
                                                (g(l(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                b = cu(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = l(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            const f = (0, r.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: l,
                                    handleMouseWheel: v,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    handleIsThumbDragging: f,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, g, p, f, d.off, d.on, b, v, B, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Du = Fu({
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
                        getDirection: (e) => (e.deltaY > 1 ? du.Next : du.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Bu = 'HorizontalBar_base__nonActive_82',
                    Cu = 'disable',
                    gu = { pending: !1, offset: 0 },
                    pu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    vu = () => {},
                    hu = (e, u) => Math.max(20, e.offsetWidth * u),
                    bu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = pu, onDrag: n = vu }) => {
                        const a = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(gu),
                            d = _[0],
                            A = _[1],
                            D = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = () => {
                                const u = s.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    c = iu(0, 1, r / (a - n)),
                                    m = (u.offsetWidth - hu(u, o)) * c;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (l.current && i.current && s.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    l.current.classList.add(Cu),
                                                    void i.current.classList.remove(Cu)
                                                );
                                            if (
                                                ((u = s.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    l.current.classList.remove(Cu),
                                                    void i.current.classList.add(Cu)
                                                );
                                            var u, t;
                                            (l.current.classList.remove(Cu), i.current.classList.remove(Cu));
                                        }
                                    })(m));
                            },
                            C = cu(() => {
                                ((() => {
                                    const u = E.current,
                                        t = s.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const o = Math.min(1, n / r);
                                    ((u.style.width = `${hu(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(Bu) : a.current.classList.remove(Bu)));
                                })(),
                                    B());
                            });
                        ((0, r.useEffect)(() => lu(C)),
                            (0, r.useEffect)(
                                () =>
                                    lu(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = vu;
                                        const n = () => {
                                            (t(), (t = lu(C)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = s.current,
                                            o = E.current;
                                        if (!a || !r || !o) return;
                                        const l = u.screenX - d.offset - r.getBoundingClientRect().x,
                                            i = (l / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), D(gu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, n, D]));
                        const g = Eu((u) => e.applyStepTo(u), m, [e]),
                            p = g[0],
                            v = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Cu) || F('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('HorizontalBar_base_49', u.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Cu) || 0 !== e.button || (F('play'), p(du.Next));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        n &&
                                            0 === u.button &&
                                            (F('play'),
                                            u.target === n
                                                ? D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = E.current,
                                                          a = e.contentRef.current;
                                                      if (!n || !a) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? du.Prev : du.Next));
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
                                    e.target.classList.contains(Cu) || 0 !== e.button || (F('play'), p(du.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    fu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    wu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: l,
                        scrollClassName: i,
                        getStepByRailClick: s,
                        onDrag: E,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(fu.base, e.base) });
                            }, [n]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(fu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fu.defaultScrollArea, a) },
                                o().createElement(xu, { className: i, api: _, classNames: l }, e),
                            ),
                            o().createElement(bu, { getStepByRailClick: s, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    xu = ({ api: e, className: u, classNames: t, children: n, style: a }) => (
                        (0, r.useEffect)(() => lu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fu.base, u), style: a },
                            o().createElement(
                                'div',
                                {
                                    className: c()(fu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(fu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((xu.Bar = bu),
                    (xu.Default = wu),
                    (xu.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => lu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fu.base, u) },
                            o().createElement(
                                'div',
                                { className: c()(fu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: c()(fu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const Su = Fu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? du.Next : du.Prev),
                    }),
                    yu = 'VerticalBar_base__nonActive_42',
                    Lu = 'disable',
                    Mu = () => {},
                    Tu = { pending: !1, offset: 0 },
                    ku = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Nu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Ru = (e, u) => Math.max(20, e.offsetHeight * u),
                    Pu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ku, onDrag: n = Mu }) => {
                        const a = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(Tu),
                            d = _[0],
                            A = _[1],
                            D = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = cu(() => {
                                const u = E.current,
                                    t = s.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const o = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${Ru(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(yu) : a.current.classList.remove(yu)),
                                    o
                                );
                            }),
                            C = cu(() => {
                                const u = s.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    c = iu(0, 1, r / (a - n)),
                                    m = (u.offsetHeight - Ru(u, o)) * c;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (l.current && i.current && s.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    l.current.classList.add(Lu),
                                                    void i.current.classList.remove(Lu)
                                                );
                                            if (
                                                ((u = s.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    l.current.classList.remove(Lu),
                                                    void i.current.classList.add(Lu)
                                                );
                                            var u, t;
                                            (l.current.classList.remove(Lu), i.current.classList.remove(Lu));
                                        }
                                    })(m));
                            }),
                            g = cu(() => {
                                Nu(e, () => {
                                    (B(), C());
                                });
                            });
                        ((0, r.useEffect)(() => lu(g)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Nu(e, () => {
                                        C();
                                    });
                                };
                                let t = Mu;
                                const n = () => {
                                    (t(), (t = lu(g)));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        Nu(e, (t) => {
                                            const a = s.current,
                                                r = E.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const l = u.screenY - d.offset - a.getBoundingClientRect().y,
                                                i = (l / a.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            D(Tu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, n, D]));
                        const p = Eu((u) => e.applyStepTo(u), m, [e]),
                            v = p[0],
                            h = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Lu) || F('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('VerticalBar_base_f3', u.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lu) || 0 !== e.button || (F('play'), v(du.Next));
                                },
                                ref: l,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        var a;
                                        n &&
                                            0 === u.button &&
                                            (F('play'),
                                            u.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  D({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y }))
                                                : ((a = u.screenY > n.getBoundingClientRect().y ? du.Prev : du.Next),
                                                  E.current &&
                                                      Nu(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + n * a);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: s,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: E, className: u.thumb }),
                                o().createElement('div', { className: c()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lu) || 0 !== e.button || (F('play'), v(du.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Ou = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Iu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: l,
                        scrollClassNames: i,
                        getStepByRailClick: s,
                        onDrag: E,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Ou.base, e.base) });
                            }, [n]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(Ou.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Ou.area, a) },
                                o().createElement(Hu, { className: l, classNames: i, api: _ }, e),
                            ),
                            o().createElement(Pu, { getStepByRailClick: s, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    Hu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => lu(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Ou.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Ou.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Hu.Default = Iu;
                const Wu = { Vertical: a, Horizontal: n },
                    Uu = { type: 'idle' },
                    Gu = {
                        base: 'TankCard_base_05',
                        base__hovered: 'TankCard_base__hovered_c2',
                        base__disabled: 'TankCard_base__disabled_84',
                        hoverBg: 'TankCard_hoverBg_e7',
                        vehicleData: 'TankCard_vehicleData_42',
                        base__selected: 'TankCard_base__selected_b0',
                        typeWithName: 'TankCard_typeWithName_bc',
                        vehicleType: 'TankCard_vehicleType_6e',
                        vehicleName: 'TankCard_vehicleName_10',
                        level: 'TankCard_level_3f',
                        tankImage: 'TankCard_tankImage_3b',
                        tankImage__withEffects: 'TankCard_tankImage__withEffects_0c',
                        border: 'TankCard_border_1e',
                        hoverBg__visible: 'TankCard_hoverBg__visible_c8',
                        selectBg: 'TankCard_selectBg_26',
                        selectBg__visible: 'TankCard_selectBg__visible_5d',
                        selectAdditionalBg: 'TankCard_selectAdditionalBg_e6',
                        selectAdditionalBg__visible: 'TankCard_selectAdditionalBg__visible_2f',
                        battleStatus: 'TankCard_battleStatus_1e',
                        battleStatusImage: 'TankCard_battleStatusImage_81',
                        battleStatusImage__inBattle: 'TankCard_battleStatusImage__inBattle_c6',
                        battleStatusImage__inPlatoon: 'TankCard_battleStatusImage__inPlatoon_42',
                        battleStatusText: 'TankCard_battleStatusText_90',
                        update: 'TankCard_update_df',
                        updateImage: 'TankCard_updateImage_c7',
                        updateText: 'TankCard_updateText_8e',
                    },
                    ju = R.images.portal.gui.maps.icons.vehicle.carousel.large,
                    zu = R.images.portal.gui.maps.icons.hangar.carousel.card,
                    Vu = R.strings.portal_lobby.carousel,
                    Xu = (0, r.memo)(
                        ({
                            title: e,
                            level: u,
                            vehicleType: t,
                            selected: n,
                            icon: a,
                            inPlatoon: l,
                            inBattle: i,
                            hasUpdate: s,
                            isDragging: E,
                            isSomeInPlatoon: m,
                        }) => {
                            const _ = (0, r.useState)(!1),
                                d = _[0],
                                A = _[1],
                                D = c()(
                                    Gu.base,
                                    m && Gu.base__disabled,
                                    n && Gu.base__selected,
                                    d && !E && !m && Gu.base__hovered,
                                    i && Gu.base__inBattle,
                                    l && Gu.base__inPlatoon,
                                ),
                                B = (0, r.useMemo)(() => ({ backgroundImage: `url(${ju.$dyn(a)})` }), [a]);
                            return o().createElement(
                                'div',
                                {
                                    className: D,
                                    onMouseEnter: () => {
                                        (A(!0), F(R.sounds.carousel()));
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                },
                                o().createElement(
                                    'div',
                                    { className: Gu.vehicleData },
                                    o().createElement(
                                        'div',
                                        { className: Gu.typeWithName },
                                        o().createElement('div', {
                                            className: Gu.vehicleType,
                                            style: { backgroundImage: `url(${zu.vehicleTypes.$dyn(me(t))})` },
                                        }),
                                        o().createElement(Le, { className: Gu.vehicleName, text: e }),
                                    ),
                                ),
                                o().createElement('div', {
                                    className: Gu.level,
                                    style: { backgroundImage: `url(${zu.levels.$dyn(`level_${u}`)})` },
                                }),
                                o().createElement('div', {
                                    className: c()(Gu.tankImage, (i || l) && Gu.tankImage__withEffects),
                                    style: B,
                                }),
                                o().createElement('div', { className: Gu.border }),
                                o().createElement('div', { className: c()(Gu.hoverBg, d && Gu.hoverBg__visible) }),
                                o().createElement('div', { className: c()(Gu.selectBg, n && Gu.selectBg__visible) }),
                                o().createElement('div', {
                                    className: c()(Gu.selectAdditionalBg, n && Gu.selectAdditionalBg__visible),
                                }),
                                s &&
                                    o().createElement(
                                        'div',
                                        { className: Gu.update },
                                        o().createElement('div', { className: Gu.updateImage }),
                                        o().createElement(Le, { className: Gu.updateText, text: Vu.hasUpdate() }),
                                    ),
                                (i || l) &&
                                    o().createElement(
                                        'div',
                                        { className: Gu.battleStatus },
                                        o().createElement('div', {
                                            className: c()(
                                                Gu.battleStatusImage,
                                                i && Gu.battleStatusImage__inBattle,
                                                l && !i && Gu.battleStatusImage__inPlatoon,
                                            ),
                                        }),
                                        o().createElement(Le, {
                                            className: Gu.battleStatusText,
                                            text: i ? Vu.inBattle() : Vu.inPlatoon(),
                                        }),
                                    ),
                            );
                        },
                    ),
                    $u = 'TankCarousel_arrow_14',
                    qu = 'TankCarousel_arrow__enabled_12',
                    Ku = 'TankCarousel_arrow__disabled_8e',
                    Yu = 'TankCarousel_arrow__hidden_d0',
                    Qu = 'TankCarousel_arrowContainer_ca';
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Ju = 'leftArrow',
                    et = 'rightArrow',
                    ut = ({ tanks: e, onSelect: u }) => {
                        const t = Du(),
                            n = (0, r.useState)(null),
                            a = n[0],
                            l = n[1],
                            i = (0, r.useState)(null),
                            s = i[0],
                            m = i[1],
                            _ = (0, r.useState)(0),
                            d = _[0],
                            A = _[1],
                            D = (0, r.useState)(!1),
                            B = D[0],
                            C = D[1],
                            g = (0, r.useState)([0, 0]),
                            p = g[0],
                            v = g[1],
                            h = { left: p[0], right: p[1] },
                            b = (0, r.useState)(!1),
                            f = b[0],
                            w = b[1],
                            x = (function (e, u) {
                                const t = e.contentRef,
                                    n = e.wrapperRef,
                                    a = e.scrollPosition,
                                    o = e.clampPosition,
                                    l = e.animationScroll,
                                    i = e.events,
                                    s = (0, r.useState)(Uu),
                                    c = s[0],
                                    m = s[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = t.current;
                                        e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                                    }, [t, c.type]),
                                    (0, r.useEffect)(() => {
                                        if ('dragging' !== c.type) return;
                                        const e = E.O.client.events.mouse.move(([e, r]) => {
                                                const i = t.current,
                                                    s = n.current;
                                                if (!i || !s) return;
                                                if ('inside' === r && e.clientX < 0) return;
                                                const E = 'inside' === r ? e.clientX : e.clientX - s.offsetLeft,
                                                    m = c.positionFrom - E,
                                                    _ = c.previousScrollPosition + m;
                                                a.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: o(i, _),
                                                            from: { scrollPosition: l.scrollPosition.get() },
                                                        },
                                                        u,
                                                    ),
                                                );
                                            }),
                                            r = E.O.client.events.mouse.up(function () {
                                                m({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), r());
                                        };
                                    }, [l.scrollPosition, o, t, c, a, n, u]),
                                    (0, r.useEffect)(() => {
                                        if ('scrollingToEnd' !== c.type) return;
                                        const e = () => {
                                            m(Uu);
                                        };
                                        return (l.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                    }, [l.scrollPosition, c.type, i]),
                                    (0, r.useEffect)(() => {
                                        const e = t.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: l.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [l.scrollPosition, t]),
                                    c
                                );
                            })(t),
                            S = x.type,
                            y = d === h.left,
                            L = d === h.right,
                            M = y && L;
                        ((0, r.useEffect)(() => {
                            (y && a === Ju && l(null), L && a === et && l(null));
                        }, [y, L, a]),
                            (0, r.useEffect)(() => {
                                let e;
                                return (
                                    'dragging' === S
                                        ? (e = setTimeout(() => {
                                              w(!0);
                                          }, 300))
                                        : w(!1),
                                    () => clearTimeout(e)
                                );
                            }, [S, y, L]));
                        const T = (0, r.useState)(() => e.findIndex((e) => e.selected)),
                            k = T[0],
                            N = T[1];
                        (0, r.useEffect)(() => {
                            const e = () => {
                                const e = t.animationScroll.scrollPosition.goal;
                                A(e);
                                const u = t.getBounds(),
                                    n = u[0],
                                    a = u[1];
                                (n === h.left && a === h.right) || v([n, a]);
                            };
                            return (
                                t.events.on('change', e),
                                t.events.on('recalculateContent', e),
                                t.events.on('resizeHandled', e),
                                () => {
                                    (t.events.off('change', e),
                                        t.events.off('recalculateContent', e),
                                        t.events.off('resizeHandled', e));
                                }
                            );
                        }, [t, h.left, h.right]);
                        const P = c()($u, 'TankCarousel_arrow__left_54', y ? Ku : qu, h.right <= 0 && Yu),
                            O = c()($u, 'TankCarousel_arrow__right_40', L ? Ku : qu, h.right <= 0 && Yu),
                            I = e.some((e) => e.inPlatoon);
                        (0, r.useEffect)(() => {
                            t.applyScroll(201 * (k - 1) + 100.5);
                        }, [t, k]);
                        const H = () => {
                                l(null);
                            },
                            W = () => {
                                m(null);
                            };
                        return o().createElement(
                            'div',
                            { className: 'TankCarousel_base_27' },
                            o().createElement(
                                'div',
                                {
                                    className: P,
                                    onClick: () => {
                                        y || t.applyStepTo(du.Next);
                                    },
                                    onMouseEnter: () => {
                                        y || (F(R.sounds.highlight()), l(Ju));
                                    },
                                    onMouseLeave: H,
                                    onMouseDown: () => {
                                        y || (F(R.sounds.play()), m(Ju));
                                    },
                                    onMouseUp: W,
                                },
                                o().createElement(
                                    'div',
                                    { className: Qu },
                                    o().createElement('div', {
                                        className: c()(
                                            'TankCarousel_leftArrowHovered_36',
                                            a === Ju && s !== Ju && 'TankCarousel_leftArrowHovered__visible_9b',
                                        ),
                                    }),
                                    o().createElement('div', {
                                        className: c()(
                                            'TankCarousel_leftArrowPressed_c5',
                                            s === Ju && 'TankCarousel_leftArrowPressed__visible_c2',
                                        ),
                                    }),
                                ),
                            ),
                            o().createElement(
                                Wu.Horizontal.Area,
                                {
                                    api: t,
                                    className: 'TankCarousel_scroll_67',
                                    classNames: { wrapper: 'TankCarousel_scrollWrapper_b7' },
                                },
                                o().createElement(
                                    'div',
                                    {
                                        onMouseDown: () => {
                                            C(!0);
                                        },
                                        onMouseUp: () => {
                                            C(!1);
                                        },
                                        className: c()(
                                            'TankCarousel_cardWrapper_71',
                                            B && M && 'TankCarousel_cardWrapper__noDraggin_c8',
                                        ),
                                    },
                                    e.map((e, t) =>
                                        o().createElement(
                                            Ne,
                                            {
                                                contentId: R.views.portal.lobby.tooltips.VehicleTooltip('resId'),
                                                args: { vehicleId: e.id },
                                                key: e.id,
                                            },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: 'TankCarousel_tank_b5',
                                                    onClick: () =>
                                                        ((e, t) => {
                                                            I || (F(R.sounds.tank_selection()), N(t), u(e));
                                                        })(e.id, t),
                                                },
                                                !f,
                                                o().createElement(Xu, Zu({}, e, { isDragging: f, isSomeInPlatoon: I })),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                {
                                    className: O,
                                    onClick: () => {
                                        L || t.applyStepTo(du.Prev);
                                    },
                                    onMouseEnter: () => {
                                        L || (F(R.sounds.highlight()), l(et));
                                    },
                                    onMouseLeave: H,
                                    onMouseDown: () => {
                                        L || (F(R.sounds.play()), m(et));
                                    },
                                    onMouseUp: W,
                                },
                                o().createElement(
                                    'div',
                                    { className: Qu },
                                    o().createElement('div', {
                                        className: c()(
                                            'TankCarousel_rightArrowHovered_1e',
                                            a === et && 'TankCarousel_rightArrowHovered__visible_5c',
                                        ),
                                    }),
                                    o().createElement('div', {
                                        className: c()(
                                            'TankCarousel_rightArrowPressed_49',
                                            s === et && 'TankCarousel_rightArrowPressed__visible_ae',
                                        ),
                                    }),
                                ),
                            ),
                        );
                    };
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const nt = R.strings.portal_lobby,
                    at = (0, B.observer)(() => {
                        const e = k(),
                            u = e.model,
                            t = e.controls,
                            n = (0, r.useState)(!1),
                            a = n[0],
                            l = n[1],
                            i = u.root.get().complexityLevelWidget,
                            s = u.computes.getAmmunitionPanel(),
                            _ = u.computes.getComplexityLevels(),
                            d = u.computes.getTanks(),
                            B = u.computes.getQuestWidget(),
                            C = u.computes.getSelectedTank(),
                            g = u.computes.getIsLastLevelOfComplexity(),
                            h = (0, r.useState)(!1),
                            b = h[0],
                            f = h[1];
                        !(function ({
                            key: e = m.n.ESCAPE,
                            callback: u = () => E.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            A(e, u, t);
                        })({ key: m.n.ESCAPE, callback: t.onShowSettings });
                        const w = (0, r.useMemo)(() => ({ onMouseEnter: () => f(!0), onMouseLeave: () => f(!1) }), []),
                            x = () => {
                                l(!a);
                            },
                            S = () => {
                                F('ev_portal_gui_hangar_rollover');
                            },
                            y = () => {
                                F('ev_portal_gui_hangar_rollout');
                            },
                            L = (0, r.useCallback)(
                                (e) => {
                                    t.onComplexityChange(e);
                                },
                                [t],
                            ),
                            M = (0, r.useCallback)(
                                (e) => {
                                    t.moveSpace(e);
                                },
                                [t],
                            ),
                            T = (0, r.useCallback)(() => {
                                t.onClose();
                            }, [t]),
                            N = (0, r.useCallback)(() => {
                                t.onAboutEvent();
                            }, [t]),
                            P = (0, r.useCallback)(
                                (e) => {
                                    t.onVehicleSelect(e);
                                },
                                [t],
                            );
                        return o().createElement(
                            v,
                            { moveSpace: M, isDisabled: b, onStartMoving: t.startMoving },
                            o().createElement(
                                'div',
                                { className: 'PortalLobbyViewApp_base_93' },
                                o().createElement('div', {
                                    className: c()(
                                        'PortalLobbyViewApp_vignette_de',
                                        g && 'PortalLobbyViewApp_vignette__visible_53',
                                    ),
                                }),
                                o().createElement(
                                    'div',
                                    tt({ className: 'PortalLobbyViewApp_closeButton_89' }, w, {
                                        onClick: T,
                                        onMouseEnter: x,
                                        onMouseLeave: x,
                                    }),
                                    o().createElement(p, {
                                        onClick: T,
                                        mainText: nt.closeButton.default(),
                                        hoverText: nt.closeButton.hovered(),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    tt({ className: 'PortalLobbyViewApp_questsWidget_5d' }, w, {
                                        onMouseEnter: S,
                                        onMouseLeave: y,
                                    }),
                                    o().createElement(au, {
                                        current: B.current,
                                        max: B.max,
                                        onClick: () => {
                                            (t.onProgressionClicked(), D.playClick());
                                        },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    tt({ className: 'PortalLobbyViewApp_shopWidget_91' }, w, {
                                        onMouseEnter: S,
                                        onMouseLeave: y,
                                    }),
                                    o().createElement(ou, {
                                        onClick: () => {
                                            (t.onShopClick(), D.playClick());
                                        },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    tt({ className: 'PortalLobbyViewApp_infoButton_cf' }, w),
                                    o().createElement(uu, {
                                        defaultText: R.strings.portal_lobby.infoButton.default(),
                                        hoverText: R.strings.portal_lobby.infoButton.hovered(),
                                        onClick: N,
                                    }),
                                ),
                                Boolean(_.length) &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            tt({ className: 'PortalLobbyViewApp_complexity_ba' }, w),
                                            o().createElement(Je, {
                                                complexityLevels: _,
                                                onLevelChange: L,
                                                isEnabled: i.isEnabled,
                                            }),
                                        ),
                                        o().createElement('div', { className: 'PortalLobbyViewApp_complexity__bg_11' }),
                                    ),
                                C &&
                                    o().createElement(
                                        'div',
                                        tt({ className: 'PortalLobbyViewApp_ammunitionPanel_e3' }, w),
                                        o().createElement(
                                            Ve,
                                            tt({ selectedTank: C }, s, { onUpgrade: t.upgradeVehicle }),
                                        ),
                                    ),
                                Boolean(d.length) &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: 'PortalLobbyViewApp_shadow_5c' }),
                                        o().createElement(
                                            'div',
                                            tt({ className: 'PortalLobbyViewApp_carousel_d0' }, w),
                                            o().createElement(ut, { tanks: d, onSelect: P }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var rt = t(926),
                    ot = t.n(rt);
                const lt = ['children', 'className'];
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
                const st = {
                        [Y.ExtraSmall]: '',
                        [Y.Small]: ot().SMALL_WIDTH,
                        [Y.Medium]: `${ot().SMALL_WIDTH} ${ot().MEDIUM_WIDTH}`,
                        [Y.Large]: `${ot().SMALL_WIDTH} ${ot().MEDIUM_WIDTH} ${ot().LARGE_WIDTH}`,
                        [Y.ExtraLarge]: `${ot().SMALL_WIDTH} ${ot().MEDIUM_WIDTH} ${ot().LARGE_WIDTH} ${ot().EXTRA_LARGE_WIDTH}`,
                    },
                    ct = {
                        [Q.ExtraSmall]: '',
                        [Q.Small]: ot().SMALL_HEIGHT,
                        [Q.Medium]: `${ot().SMALL_HEIGHT} ${ot().MEDIUM_HEIGHT}`,
                        [Q.Large]: `${ot().SMALL_HEIGHT} ${ot().MEDIUM_HEIGHT} ${ot().LARGE_HEIGHT}`,
                        [Q.ExtraLarge]: `${ot().SMALL_HEIGHT} ${ot().MEDIUM_HEIGHT} ${ot().LARGE_HEIGHT} ${ot().EXTRA_LARGE_HEIGHT}`,
                    },
                    Et = {
                        [K.ExtraSmall]: '',
                        [K.Small]: ot().SMALL,
                        [K.Medium]: `${ot().SMALL} ${ot().MEDIUM}`,
                        [K.Large]: `${ot().SMALL} ${ot().MEDIUM} ${ot().LARGE}`,
                        [K.ExtraLarge]: `${ot().SMALL} ${ot().MEDIUM} ${ot().LARGE} ${ot().EXTRA_LARGE}`,
                    },
                    mt = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, lt);
                        const a = Z(),
                            r = a.mediaWidth,
                            l = a.mediaHeight,
                            i = a.mediaSize;
                        return o().createElement('div', it({ className: c()(t, st[r], ct[l], Et[i]) }, n), u);
                    },
                    _t = (0, r.memo)(({ children: e }) => {
                        const u = (0, r.useContext)(V),
                            t = (0, r.useState)(u),
                            n = t[0],
                            a = t[1],
                            l = (0, r.useState)(1),
                            i = l[0],
                            s = l[1],
                            c = (0, r.useState)(() => ({
                                width: 'undefined' != typeof window ? window.innerWidth : 0,
                                height: 'undefined' != typeof window ? window.innerHeight : 0,
                            })),
                            m = c[0],
                            _ = c[1],
                            d = (0, r.useCallback)((e, u) => {
                                const t = E.O.view.pxToRem(e),
                                    n = E.O.view.pxToRem(u);
                                return Object.assign({ width: t, height: n }, W(t, n, I));
                            }, []),
                            A = (0, r.useCallback)((e, u) => {
                                _({ width: e, height: u });
                            }, []),
                            F = (0, r.useCallback)((e) => {
                                s(e);
                            }, []);
                        (q(() => {
                            (engine.on('clientResized', A), engine.on('self.onScaleUpdated', F));
                        }),
                            (0, r.useEffect)(() => {
                                a(d(m.width, m.height));
                            }, [m, i, d]),
                            (0, r.useEffect)(
                                () => () => {
                                    (engine.off('clientResized', A), engine.off('self.onScaleUpdated', F));
                                },
                                [A, F],
                            ));
                        const D = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(V.Provider, { value: D }, e);
                    }),
                    dt = ['children'],
                    At = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, dt);
                        return o().createElement(_t, null, o().createElement(mt, t, u));
                    };
                engine.whenReady.then(() => {
                    i().render(
                        o().createElement(T, null, o().createElement(At, null, o().createElement(at, null))),
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
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var l = t();
                        void 0 !== l && (e = l);
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
        (__webpack_require__.j = 108),
        (() => {
            var e = { 108: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, l] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7998));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
