(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            3532: (u) => {
                u.exports = {
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
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => o, onResize: () => r }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${e}`,
                                            o = i[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((u.enabled = !1), a());
                            },
                            enable() {
                                ((u.enabled = !0), a());
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    }));
                var a = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var a = t(2472);
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => y,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const a = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    r = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, n;
                (t.d(e, { n: () => a }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD'));
                    })(a || (a = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(n || (n = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => r.Z, B3: () => E, Z5: () => i, B0: () => s, ry: () => C });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                var r = t(1358);
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const F = ['args'];
                function D(u, e, t, a, n, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(a, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, a, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(r, a, n, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    g = () => h(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var v = t(7572);
                const w = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                _ = o.height,
                                A = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(E) + i.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(A),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            3217: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r);
                const o = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function c(u, e, t) {
                    const a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                !(function (u) {
                    ((u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight'));
                })(E || (E = {}));
                const _ = s.O.client.getSize('rem'),
                    A = _.width,
                    d = _.height,
                    m = Object.assign({ width: A, height: d }, c(A, d, l)),
                    F = (0, a.createContext)(m),
                    D = ['children'],
                    B = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, D);
                        const n = (0, a.useContext)(F),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            c = n.extraLargeWidth,
                            _ = n.largeWidth,
                            A = n.mediumWidth,
                            d = n.smallWidth,
                            m = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            h = n.mediumHeight,
                            g = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && c) return o(e, t, v);
                            if (t.largeWidth && _) return o(e, t, v);
                            if (t.mediumWidth && A) return o(e, t, v);
                            if (t.smallWidth && d) return o(e, t, v);
                            if (t.extraSmallWidth && m) return o(e, t, v);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && h) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                ((B.defaultProps = {
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
                    (0, a.memo)(B));
                const C = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    h = (0, a.memo)(({ children: u }) => {
                        const e = (0, a.useContext)(F),
                            t = (0, a.useState)(e),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    a = s.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: a }, c(t, a, l)));
                            }, []);
                        (C(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: E }, u);
                    });
                var g = t(6483),
                    p = t.n(g),
                    v = t(926),
                    w = t.n(v);
                let b, f, y;
                (!(function (u) {
                    ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.width)] = 'Small'),
                            (u[(u.Medium = l.medium.width)] = 'Medium'),
                            (u[(u.Large = l.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(y || (y = {})));
                const x = () => {
                        const u = (0, a.useContext)(F),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case u.largeHeight:
                                        return y.Large;
                                    case u.mediumHeight:
                                        return y.Medium;
                                    case u.smallHeight:
                                        return y.Small;
                                    case u.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: w().SMALL_WIDTH,
                        [f.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [f.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [y.ExtraSmall]: '',
                        [y.Small]: w().SMALL_HEIGHT,
                        [y.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [y.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: w().SMALL,
                        [b.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [b.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [b.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
                    },
                    O = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, S);
                        const r = x(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', M({ className: p()(t, L[i], T[o], k[s]) }, a), e);
                    },
                    N = ['children'],
                    P = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, N);
                        return n().createElement(h, null, n().createElement(O, t, e));
                    };
                let H;
                function I(u) {
                    return u.replace(/-/g, '_');
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(H || (H = {}));
                const W = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    G = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    U = (u, e, t = H.left) => u.split(e).reduce(t === H.left ? W : G, []),
                    V = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    j = ['zh_cn', 'zh_sg', 'zh_tw'];
                let $;
                var X;
                (((X = $ || ($ = {})).SHORT_DATE = 'short-date'),
                    (X.SHORT_TIME = 'short-time'),
                    (X.SHORT_DATE_TIME = 'short-date-time'),
                    (X.FULL_DATE = 'full-date'),
                    (X.FULL_DATE_TIME = 'full-date-time'),
                    (X.MONTH = 'month'),
                    (X.MONTH_DATE = 'month-date'),
                    (X.DATE_MONTH = 'date-month'),
                    (X.MONTH_YEAR = 'month-year'),
                    (X.WEEK_DAY = 'week-day'),
                    (X.WEEK_DAY_TIME = 'week-day-time'),
                    (X.YEAR = 'year'),
                    (X.DATE_YEAR = 'date-year'));
                var z = t(4179);
                Date.now();
                const K = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: e, resId: a }
                        );
                    },
                    q = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    Y = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    Z = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    Q = z.Sw.instance;
                let J;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(J || (J = {}));
                const uu = (u = 'model', e = J.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => K(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                                [i, u],
                            ),
                            l = (0, a.useState)(() =>
                                ((u) => {
                                    const e = q(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return Y(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = q(`${u}.${e}`, window);
                                                return Y(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            E = l[0],
                            c = l[1],
                            _ = (0, a.useRef)(-1);
                        return (
                            C(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? J.Deep : J.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== J.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === J.Deep
                                                ? (u === E && n((u) => u + 1), c(u))
                                                : c(Object.assign([], u));
                                        },
                                        a = ((u) => {
                                            const e = ((u) => {
                                                    const e = K(),
                                                        t = e.caller,
                                                        a = e.resId,
                                                        n =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: n, modelPath: Z(n, ''), resId: a };
                                                })(),
                                                t = e.modelPrefix,
                                                a = u.split('.');
                                            if (a.length > 0) {
                                                const u = [a[0]];
                                                return (
                                                    a.reduce((e, a) => {
                                                        const n = q(Z(t, `${e}.${a}`), window);
                                                        return Y(n)
                                                            ? (u.push(n.id), `${e}.${a}.value`)
                                                            : (u.push(a), `${e}.${a}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    _.current = Q.addCallback(a, t, o, e === J.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (e !== J.None)
                                    return () => {
                                        Q.removeCallback(_.current, o);
                                    };
                            }, [o, e]),
                            E
                        );
                    },
                    eu = (z.Sw.instance, 1.6),
                    tu = 100;
                var au = t(5521);
                const nu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ru(u = au.n.NONE, e = nu, t = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== au.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), e(a), t && a.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                const iu = ({ animationDelayStepsCount: u = 1, children: e }) =>
                    n().createElement(
                        'div',
                        { className: 'DelayedAnimationWrapper_base_af', style: { animationDelay: u * tu + 'ms' } },
                        e,
                    );
                function ou(u) {
                    engine.call('PlaySound', u);
                }
                const su = {
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
                    lu = [
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
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                class cu extends n().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ou(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ou(this.props.soundClick));
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                (u && u(e), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            a = u.goto,
                            r = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            _ =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, lu)),
                            A = p()(su.base, su[`base__${i}`], su[`base__${r}`], null == o ? void 0 : o.base),
                            d = p()(su.icon, su[`icon__${i}`], su[`icon__${r}`], null == o ? void 0 : o.icon),
                            m = p()(su.glow, null == o ? void 0 : o.glow),
                            F = p()(su.caption, su[`caption__${i}`], null == o ? void 0 : o.caption),
                            D = p()(su.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            Eu(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== i && n().createElement('div', { className: su.shine }),
                            n().createElement('div', { className: d }, n().createElement('div', { className: m })),
                            n().createElement('div', { className: F }, e),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                cu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const _u = ({ onClose: u }) =>
                        n().createElement(
                            'div',
                            { className: 'CloseButton_base_1c' },
                            n().createElement(cu, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: u,
                            }),
                        ),
                    Au = ({ onClick: u, goto: e }) =>
                        n().createElement(
                            'div',
                            { className: 'BackButton_base_2f' },
                            n().createElement(cu, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: u,
                                goto: e,
                            }),
                        ),
                    du = [
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
                function mu(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const Fu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Du = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            _ = void 0 !== c && c,
                            A = u.decoratorId,
                            d = void 0 === A ? 0 : A,
                            m = u.isEnabled,
                            F = void 0 === m || m,
                            D = u.targetId,
                            B = void 0 === D ? 0 : D,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, du);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => B || K().resId, [B]),
                            w = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Fu(t, d, { isMouseEvent: !0, on: !0, arguments: mu(n) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, d, n, v, C]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        Fu(t, d, { on: !1 }, v),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, v, h]),
                            f = (0, a.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u));
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
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          r && r(u),
                                                          y && y(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (b(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === _ && b(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === _ && b(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : e
                        );
                        var y;
                    },
                    Bu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const hu = R.views.common.tooltip_window.simple_tooltip_content,
                    gu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Bu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return n().createElement(
                            Du,
                            Cu(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? hu.SimpleTooltipHtmlContent('resId') : hu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    pu = ['children'];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const wu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, pu);
                        return n().createElement(
                            Du,
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
                            e,
                        );
                    },
                    bu = ['tooltipType'],
                    fu = ['children', 'wrap'];
                function yu(u, e) {
                    if (null == u) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(u);
                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                    return n;
                }
                let xu;
                !(function (u) {
                    ((u.Simple = 'simple'), (u.Backport = 'backport'), (u.Base = 'base'));
                })(xu || (xu = {}));
                const Su = (u) => (u.tooltipType, yu(u, bu)),
                    Mu = (u) => {
                        let e = u.children,
                            t = u.wrap,
                            a = yu(u, fu);
                        const r = t ? n().createElement('div', null, e) : e;
                        return a.tooltipType === xu.Simple
                            ? n().createElement(gu, Su(a), r)
                            : a.tooltipType === xu.Backport
                              ? n().createElement(wu, Su(a), r)
                              : ((u) => u.tooltipType === xu.Base)(a)
                                ? n().createElement(Du, Su(a), r)
                                : e;
                    },
                    Lu = R.strings.event.WtEventPortals,
                    Ru = ({ onBuyButtonClick: u }) => {
                        const e = (0, a.useState)(0),
                            t = e[0],
                            r = e[1],
                            i = x().mediaSize >= b.Medium,
                            o = (0, a.useCallback)(() => {
                                (u(), ou('play'));
                            }, [u]),
                            s = (0, a.useCallback)(() => {
                                ou('highlight');
                            }, []),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            c = () => {
                                const u = [l, E].sort(
                                    (u, e) =>
                                        (e.current ? e.current.offsetWidth : 0) -
                                        (u.current ? u.current.offsetWidth : 0),
                                )[0];
                                window.requestAnimationFrame(() => {
                                    u.current && r(u.current.offsetWidth);
                                });
                            };
                        (0, a.useEffect)(
                            () => (
                                c(),
                                window.addEventListener('resize', c),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [],
                        );
                        const _ = { tooltipType: xu.Simple, body: Lu.buyButtonTooltip() },
                            A = (0, a.useMemo)(() => ({ width: `${t}px` }), [t]);
                        return n().createElement(
                            Mu,
                            _,
                            n().createElement(
                                'div',
                                { className: 'BuyButton_base_33', style: A, onMouseEnter: s, onClick: o },
                                n().createElement('div', { className: 'BuyButton_image_9e', ref: l }),
                                n().createElement('div', { className: 'BuyButton_imageClickArea_81' }),
                                n().createElement('div', { className: 'BuyButton_text_da', ref: E }, Lu.buyButton()),
                                n().createElement(
                                    'div',
                                    {
                                        className: 'BuyButton_flareWrapper_58',
                                        style: {
                                            maskImage: `url('R.images.white_tiger.gui.maps.icons.portals.buy_key_button${i ? '_large' : ''}')`,
                                        },
                                    },
                                    n().createElement('div', { className: 'BuyButton_flare_ed' }),
                                ),
                            ),
                        );
                    },
                    Tu = (u, e) => {
                        let t;
                        const a = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let ku;
                var Ou;
                (((Ou = ku || (ku = {})).UNDEFINED = 'undefined'),
                    (Ou.BOSS = 'boss'),
                    (Ou.BOSS_2025 = 'boss2025'),
                    (Ou.BOSS_SPECIAL = 'bossSpecial'),
                    (Ou.HUNTER = 'hunter'));
                const Nu = (u, e = 150, t = 400, a = 1e3) => ({ appear: t + (e * u + 1), enter: a }),
                    Pu = (u) => (e, t) =>
                        e / t >= 2.4000000000000004
                            ? u(viewEnv.remToPx(t) * eu, viewEnv.remToPx(t), e, t)
                            : u(viewEnv.remToPx(e), 0.625 * viewEnv.remToPx(e), e, t),
                    Hu = Pu((u, e, t, a) => {
                        const n = { width: viewEnv.remToPx(900) * eu, height: viewEnv.remToPx(900) },
                            r = { width: viewEnv.remToPx(1200) * eu, height: viewEnv.remToPx(1200) };
                        return u < n.width
                            ? n
                            : t > l.medium.width && a > l.medium.height && u < r.width
                              ? r
                              : { width: u, height: e };
                    }),
                    Iu =
                        (Pu((u, e) => {
                            const t = { width: viewEnv.remToPx(700) * eu, height: viewEnv.remToPx(700) };
                            return u < t.width ? t : { width: u, height: e };
                        }),
                        (u, e, ...t) => {
                            const a = JSON.stringify({ command: e, data: t });
                            swfPlayer.gotoAndPlayLabel(u, a);
                        }),
                    Wu = 'clientMinimized',
                    Gu = 'swf://gui/flash/animations/wt_event/usm_video_player.swf?name=',
                    Uu = 'playVideo',
                    Vu = 'stopVideo',
                    ju = 'loadVideo',
                    $u = 'autoPlay',
                    Xu = 'onPlaybackReady',
                    zu = 'onPlaybackComplete',
                    Ku = 'viewEnv.onSwfEvent',
                    qu = {
                        base: 'SwfAwardVideo_base_18',
                        wrapper: 'SwfAwardVideo_wrapper_eb',
                        video__hidden: 'SwfAwardVideo_video__hidden_6b',
                    },
                    Yu = 'wt_tank_idle_swf',
                    Zu = 'wt_tank_show_swf',
                    Qu = '{}',
                    Ju = '../../videos/wt_event/{}.usm',
                    ue = { [Yu]: '', [Zu]: '' },
                    ee = ({
                        showVideoName: u,
                        idleVideoName: e,
                        onVideoReady: t,
                        onVideoComplete: r,
                        isContentVisible: i,
                        isVideoReady: o,
                        shouldApplyRewardDelay: s,
                        skipTankVideo: l = !1,
                    }) => {
                        const E = x(),
                            c = E.remScreenWidth,
                            _ = E.remScreenHeight,
                            A = uu('model'),
                            d = A.onVideoStarted,
                            m = A.onPortalRewardsStarted,
                            F = A.isWindowAccessible,
                            D = (0, a.useState)(!0),
                            B = D[0],
                            C = D[1],
                            h = (0, a.useState)(!1),
                            g = h[0],
                            v = h[1],
                            w = (0, a.useRef)(),
                            b = (0, a.useRef)(),
                            f = (0, a.useRef)(),
                            y = (0, a.useCallback)(() => {
                                f.current ||
                                    (f.current = window.setTimeout(
                                        () => {
                                            (r(), (f.current = void 0));
                                        },
                                        s ? 1e3 : 0,
                                    ));
                            }, [r, s]);
                        ((0, a.useEffect)(
                            () =>
                                Tu(() => {
                                    (t(), r());
                                }, 14e3),
                            [t, r],
                        ),
                            (0, a.useEffect)(
                                () => () => {
                                    o && !i && y();
                                },
                                [i, o, y],
                            ),
                            (0, a.useEffect)(
                                () => () => {
                                    f.current && clearTimeout(f.current);
                                },
                                [],
                            ));
                        const S = (0, a.useCallback)(
                            (u) => {
                                switch (u) {
                                    case Xu:
                                        t();
                                        break;
                                    case zu:
                                        (C(!1), r(), g || (m(), v(!0)));
                                }
                            },
                            [t, r, m, g],
                        );
                        ((0, a.useEffect)(() => {
                            l && S(zu);
                        }, [l, S]),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    (w.current && (swfPlayer.removeEventListener(Yu, w.current), (w.current = void 0)),
                                        b.current &&
                                            (swfPlayer.removeEventListener(Zu, b.current), (b.current = void 0)));
                                };
                                t();
                                const a = ((t) => {
                                    let a,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                ((n = null),
                                                    Iu(Yu, Vu),
                                                    Iu(Yu, Uu),
                                                    ue.wt_tank_idle_swf !== e &&
                                                        ((ue.wt_tank_idle_swf = e), Iu(Yu, ju, Ju.replace(Qu, e))),
                                                    (w.current = swfPlayer.addEventListener(Yu, Xu, !1, 1)),
                                                    Iu(Zu, Uu),
                                                    ue.wt_tank_show_swf !== u &&
                                                        ((ue.wt_tank_show_swf = u),
                                                        Iu(Zu, $u, !0),
                                                        Iu(Zu, ju, Ju.replace(Qu, u)),
                                                        d()),
                                                    (a = void (b.current = swfPlayer.addEventListener(Zu, zu, !1, 1))));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof a && a(), null !== n && cancelAnimationFrame(n));
                                        }
                                    );
                                })();
                                return (
                                    engine.on(Ku, S),
                                    () => {
                                        (a(), t(), engine.off(Ku, S));
                                    }
                                );
                            }, [u, e, S, d]),
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const t = e ? 'pauseVideo' : Uu;
                                    (Iu(Yu, t), ue.wt_tank_show_swf === u && Iu(Zu, t));
                                };
                                return (
                                    engine.on(Wu, e),
                                    e(!F),
                                    () => {
                                        engine.off(Wu, e);
                                    }
                                );
                            }, [F, u]));
                        const M = (0, a.useMemo)(() => Hu(c, _), [c, _]),
                            L = p()(qu.video, B && qu.video__hidden);
                        return n().createElement(
                            'div',
                            { className: qu.base },
                            n().createElement(
                                'div',
                                { className: qu.wrapper },
                                n().createElement('img', {
                                    alt: 'Tank Idle Video',
                                    className: L,
                                    style: M,
                                    src: `${Gu}wt_tank_idle_swf`,
                                }),
                                B &&
                                    n().createElement('img', {
                                        alt: 'Tank Appearance Video',
                                        className: qu.video,
                                        style: M,
                                        src: `${Gu}wt_tank_show_swf`,
                                    }),
                            ),
                        );
                    },
                    te = (0, a.memo)(
                        ({
                            title: u,
                            children: e,
                            isBoxesEnabled: t,
                            lootBoxesAnimationDelayCount: r,
                            showVideoName: i,
                            idleVideoName: o,
                            onBuy: s,
                            onBackToPortal: l,
                            onClose: E,
                            availableLootBoxesPurchase: c,
                            showFinalAnimation: _ = !0,
                            isAnimated: A = !0,
                        }) => {
                            const d = (0, a.useState)(!1),
                                m = d[0],
                                D = d[1],
                                B = (0, a.useState)(!1),
                                C = B[0],
                                h = B[1],
                                g = (0, a.useState)(!1),
                                v = g[0],
                                w = g[1],
                                b = (0, a.useRef)();
                            var f;
                            ((f = () => {
                                _ ? E() : w(!0);
                            }),
                                ru(au.n.ESCAPE, f));
                            const y = (0, a.useCallback)(() => {
                                    D(!0);
                                }, []),
                                x = (0, a.useCallback)(() => {
                                    b.current ||
                                        (b.current = window.setTimeout(
                                            () => {
                                                h(!0);
                                            },
                                            v ? 0 : 11e3,
                                        ));
                                }, [v]);
                            (0, a.useEffect)(
                                () => () => {
                                    b.current && clearTimeout(b.current);
                                },
                                [],
                            );
                            const S = (0, a.useCallback)(() => {
                                    l();
                                }, [l]),
                                M = r + 1,
                                L = (() => {
                                    const u = (() => {
                                            const u = (0, a.useContext)(F),
                                                e = u.small,
                                                t = u.medium,
                                                n = u.large,
                                                r = u.extraLarge,
                                                i = r || n,
                                                o = i || t;
                                            return {
                                                isMediaSmall: o || e,
                                                isMediaMedium: o,
                                                isMediaLarge: i,
                                                isMediaExtraLarge: r,
                                            };
                                        })(),
                                        e = u.isMediaSmall,
                                        t = u.isMediaMedium,
                                        n = u.isMediaLarge,
                                        r = u.isMediaExtraLarge;
                                    return p()(
                                        e && 'mediaSmall',
                                        t && 'mediaMedium',
                                        n && 'mediaLarge',
                                        r && 'mediaExtraLarge',
                                    );
                                })(),
                                T = p()('AwardWrapper_base_34', !m && 'AwardWrapper_base__hidden_71', L);
                            return n().createElement(
                                'div',
                                { className: T },
                                n().createElement(ee, {
                                    showVideoName: i,
                                    idleVideoName: o,
                                    onVideoReady: y,
                                    onVideoComplete: x,
                                    isContentVisible: C,
                                    isVideoReady: m,
                                    shouldApplyRewardDelay: A,
                                    skipTankVideo: v,
                                }),
                                C &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: 'AwardWrapper_title_3d' }, u),
                                        n().createElement('div', { className: 'AwardWrapper_content_60' }, e),
                                    ),
                                _ &&
                                    n().createElement(
                                        iu,
                                        { animationDelayStepsCount: M },
                                        n().createElement(
                                            'div',
                                            { className: 'AwardWrapper_headerButtonWrapper_48' },
                                            n().createElement(_u, { onClose: E }),
                                            n().createElement(Au, {
                                                onClick: S,
                                                goto: R.strings.event.portalAward.backTo(),
                                            }),
                                        ),
                                        t &&
                                            n().createElement(Ru, {
                                                onBuyButtonClick: s,
                                                availableLootBoxesPurchase: c,
                                            }),
                                    ),
                            );
                        },
                    ),
                    ae = {
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
                let ne, re;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(ne || (ne = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(re || (re = {})));
                const ie = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: _,
                    onMouseUp: A,
                    onMouseLeave: d,
                    onClick: m,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        C = D[1],
                        h = (0, a.useState)(!1),
                        g = h[0],
                        v = h[1],
                        w = (0, a.useState)(!1),
                        b = w[0],
                        f = w[1],
                        y = (0, a.useCallback)(() => {
                            i || (F.current && (F.current.focus(), C(!0)));
                        }, [i]),
                        x = (0, a.useCallback)(
                            (u) => {
                                B && null !== F.current && !F.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        S = (0, a.useCallback)(
                            (u) => {
                                i || (m && m(u));
                            },
                            [i, m],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                i || (null !== s && ou(s), E && E(u), f(!0));
                            },
                            [i, s, E],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                c && c(u);
                            },
                            [c],
                        ),
                        T = (0, a.useCallback)(
                            (u) => {
                                i || (A && A(u), v(!1));
                            },
                            [i, A],
                        ),
                        k = (0, a.useCallback)(
                            (u) => {
                                i || (null !== l && ou(l), _ && _(u), t && y(), v(!0));
                            },
                            [i, l, _, y, t],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                i || (d && d(u), v(!1));
                            },
                            [i, d],
                        ),
                        N = p()(
                            ae.base,
                            ae[`base__${r}`],
                            {
                                [ae.base__disabled]: i,
                                [ae[`base__${e}`]]: e,
                                [ae.base__focus]: B,
                                [ae.base__highlightActive]: g,
                                [ae.base__firstHover]: b,
                            },
                            o,
                        ),
                        P = p()(ae.state, ae.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: O,
                                onClick: S,
                            },
                            r !== ne.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: ae.back }),
                                    n().createElement('span', { className: ae.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: P },
                                n().createElement('span', { className: ae.stateDisabled }),
                                n().createElement('span', { className: ae.stateHighlightHover }),
                                n().createElement('span', { className: ae.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: ae.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                ie.defaultProps = { type: ne.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const oe = (0, a.memo)(ie),
                    se = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    le = [
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
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                let ce;
                !(function (u) {
                    ((u.SMALL = 'small'), (u.NORMAL = 'normal'));
                })(ce || (ce = {}));
                const _e = (0, a.memo)((u) => {
                        let e = u.label,
                            t = u.isVisibleLabel,
                            r = void 0 !== t && t,
                            i = u.autofocus,
                            o = void 0 !== i && i,
                            s = u.soundHover,
                            l = void 0 === s ? 'highlight' : s,
                            E = u.soundClick,
                            c = void 0 === E ? 'play' : E,
                            _ = u.size,
                            A = void 0 === _ ? ce.NORMAL : _,
                            d = u.classNames,
                            m = u.onClick,
                            F = u.onMouseEnter,
                            D = u.onMouseLeave,
                            B = u.onMouseDown,
                            C = u.onMouseUp,
                            h = u.onFocus,
                            g = u.onBlur,
                            v = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, le);
                        const w = (0, a.useState)(!1),
                            b = w[0],
                            f = w[1],
                            y = (0, a.useState)(!1),
                            x = y[0],
                            S = y[1],
                            M = (0, a.useState)(o),
                            L = M[0],
                            R = M[1],
                            T = (0, a.useRef)(null),
                            k = (0, a.useCallback)(() => {
                                T.current && (T.current.focus(), R(!0));
                            }, []),
                            O = (0, a.useCallback)(
                                (u) => {
                                    L && null !== T.current && !T.current.contains(u.target) && R(!1);
                                },
                                [L],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', O),
                                () => {
                                    document.removeEventListener('mousedown', O);
                                }
                            ),
                            [O],
                        ),
                            (0, a.useEffect)(() => {
                                R(o);
                            }, [o]));
                        const N = (0, a.useCallback)(
                                (u) => {
                                    m && m(u);
                                },
                                [m],
                            ),
                            P = (0, a.useCallback)(
                                (u) => {
                                    (f(!0), B && B(u), c && ou(c), o && k());
                                },
                                [o, B, k, c],
                            ),
                            H = (0, a.useCallback)(
                                (u) => {
                                    (f(!1), C && C(u));
                                },
                                [C],
                            ),
                            I = (0, a.useCallback)(
                                (u) => {
                                    (F && F(u), l && ou(l), S(!0));
                                },
                                [F, l],
                            ),
                            W = (0, a.useCallback)(
                                (u) => {
                                    (f(!1), S(!1), D && D(u));
                                },
                                [D],
                            ),
                            G = (0, a.useCallback)(
                                (u) => {
                                    (R(!0), h && h(u));
                                },
                                [h],
                            ),
                            U = (0, a.useCallback)(
                                (u) => {
                                    (R(!1), g && g(u));
                                },
                                [g],
                            ),
                            V = p()(
                                se.base,
                                r && se.base__visibleLabel,
                                b && se.base__mouseDown,
                                x && se.base__hovered,
                                L && se.base__focused,
                                null == d ? void 0 : d.base,
                            ),
                            j = p()(se.icon, se[`icon__${A}`], null == d ? void 0 : d.icon),
                            $ = p()(se.label, null == d ? void 0 : d.label);
                        return n().createElement(
                            'div',
                            Ee(
                                {
                                    ref: T,
                                    className: V,
                                    onClick: N,
                                    onMouseEnter: I,
                                    onMouseLeave: W,
                                    onMouseDown: P,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: U,
                                },
                                v,
                            ),
                            n().createElement('div', { className: j }),
                            n().createElement('div', { className: $ }, e),
                        );
                    }),
                    Ae = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    de = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    me = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Fe = (u) =>
                        me
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = de.length - 1; t >= 0; t--)
                                      for (; u >= de[t];) ((e += Ae[t]), (u -= de[t]));
                                  return e;
                              })(u);
                let De;
                !(function (u) {
                    ((u.Primary = 'primary'), (u.Secondary = 'secondary'));
                })(De || (De = {}));
                const Be = ({
                    level: u,
                    type: e,
                    name: t,
                    isLarge: r,
                    isSingle: i,
                    animationDelayStepsCount: o,
                    nation: s,
                    color: l = De.Primary,
                }) => {
                    const E = (0, a.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${I(e)}_elite')`,
                            }),
                            [e],
                        ),
                        c = p()(
                            'Vehicle_base_95',
                            l === De.Primary ? 'Vehicle_base__primary_47' : 'Vehicle_base__secondary_0e',
                            r && 'Vehicle_base__large_e9',
                            i && 'Vehicle_base__single_eb',
                            void 0 !== o && 'Vehicle_base__hasAnimation_56',
                        ),
                        _ = (0, a.useMemo)(() => (void 0 !== o ? { animationDelay: o * tu + 'ms' } : void 0), [o]);
                    return n().createElement(
                        'span',
                        { className: c, style: _ },
                        s &&
                            n().createElement('span', {
                                className: 'Vehicle_flag_f9',
                                style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40.${s})` },
                            }),
                        n().createElement('span', { className: 'Vehicle_level_df' }, Fe(u)),
                        n().createElement('span', { className: 'Vehicle_type_11', style: E }),
                        n().createElement('span', { className: 'Vehicle_name_63' }, t),
                    );
                };
                let Ce, he, ge;
                (!(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge'));
                })(Ce || (Ce = {})),
                    (function (u) {
                        ((u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin'));
                    })(he || (he = {})),
                    (function (u) {
                        ((u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG'));
                    })(ge || (ge = {})));
                const pe = (u, e = 'integral') => {
                        let t;
                        return (
                            (t = 'gold' === e ? z.B3.GOLD : z.B3.INTEGRAL),
                            void 0 === u ? '' : z.Z5.getNumberFormat(u, t)
                        );
                    },
                    ve = ({ format: u, value: e }) => {
                        const t = pe(e, u);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    we = ({ count: u, quantity: e, isCurrency: t, isMultiple: a }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            t && n().createElement(ve, { value: Number(u) }),
                            a && !t && e,
                        ),
                    be = {
                        currency: 'Currency_currency_ef',
                        currency__credits: 'Currency_currency__credits_e2',
                        currency__gold: 'Currency_currency__gold_41',
                        currency__crystal: 'Currency_currency__crystal_90',
                        currency__additionalReward: 'Currency_currency__additionalReward_55',
                        currency__singleReward: 'Currency_currency__singleReward_8b',
                        currency__multiply: 'Currency_currency__multiply_ee',
                        count: 'Currency_count_92',
                        count__confirmReward: 'Currency_count__confirmReward_e5',
                        count__singleReward: 'Currency_count__singleReward_62',
                        count__additionalReward: 'Currency_count__additionalReward_e7',
                        count__multiply: 'Currency_count__multiply_22',
                    },
                    fe = ({
                        count: u,
                        currency: e,
                        isConfirmReward: t = !1,
                        isSingleReward: a = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: i = !1,
                    }) => {
                        const o = e in he,
                            s = u > 1,
                            l = p()(
                                be.count,
                                t && be.count__confirmReward,
                                a && be.count__singleReward,
                                r && be.count__additionalReward,
                                i && be.count__multiply,
                            ),
                            E = p()(
                                be.currency,
                                be[`currency__${e}`],
                                r && be.currency__additionalReward,
                                a && be.currency__singleReward,
                                i && be.currency__multiply,
                            ),
                            c =
                                ((_ = R.strings.event.award.value()),
                                (A = { count: u }),
                                _.replace(/\{\w+\}/g, (u) => String(A[u.slice(1, -1)])));
                        var _, A;
                        return n().createElement(
                            'span',
                            { className: o ? E : l },
                            n().createElement(we, { isCurrency: o, count: u, quantity: c, isMultiple: s }),
                        );
                    },
                    ye = () => {},
                    xe = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Me = () => {},
                    Le = (0, a.memo)((u) => {
                        let e = u.width,
                            t = u.height,
                            r = u.getSrcByFrame,
                            i = u.frameCount,
                            o = u.onAnimate,
                            s = void 0 === o ? Me : o,
                            l = u.frameTime,
                            E = void 0 === l ? 33 : l,
                            c = u.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, xe);
                        const d = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const u = d.current;
                                if (!u) return;
                                const a = u.getContext('2d'),
                                    n = ((u, e) => {
                                        const t = [];
                                        for (let a = 0; a <= u; a++) {
                                            const u = new Image();
                                            ((u.src = e(a)), t.push(u));
                                        }
                                        return t;
                                    })(i, r),
                                    o = ((u, e = 0) => {
                                        let t = e;
                                        return () => {
                                            const e = t;
                                            return ((t += 1), t > u && (t = 0), e);
                                        };
                                    })(i - 1, _),
                                    l = setInterval(() => {
                                        const r = o();
                                        a.clearRect(0, 0, u.width, u.height);
                                        const i = n[r];
                                        (a.drawImage(i, 0, 0, e, t), s(r, i));
                                    }, E);
                                return () => clearInterval(l);
                            }, [i, E, r, t, _, s, e]),
                            n().createElement('canvas', Se({}, A, { width: e, height: t, ref: d }))
                        );
                    }),
                    Re = {
                        base: 'Convertation_base_24',
                        bumpStars: 'Convertation_bumpStars_ba',
                        bumpParticles: 'Convertation_bumpParticles_5f',
                        particlesCanvas: 'Convertation_particlesCanvas_f5',
                        bump: 'Convertation_bump_f7',
                        bumpRays: 'Convertation_bumpRays_42',
                        twirlyCanvas: 'Convertation_twirlyCanvas_9a',
                        base__start: 'Convertation_base__start_e8',
                        base__bump: 'Convertation_base__bump_d8',
                        base__end: 'Convertation_base__end_69',
                        reward: 'Convertation_reward_49',
                        rewardFrom: 'Convertation_rewardFrom_6c',
                        rewardTo: 'Convertation_rewardTo_62',
                        star: 'Convertation_star_7b',
                        star__one: 'Convertation_star__one_ae',
                        star__second: 'Convertation_star__second_9f',
                        star__third: 'Convertation_star__third_a2',
                    },
                    Te = ['children'],
                    ke = ['children'];
                function Oe(u, e) {
                    if (null == u) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(u);
                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                    return n;
                }
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Pe = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    He = { width: 250, height: 250 },
                    Ie = () => {},
                    We = (u) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${u.toString().padStart(5, '0')}`,
                    Ge = (u) => ({ width: `${u.width}rem`, height: `${u.height}rem` }),
                    Ue = (0, a.memo)(
                        ({
                            children: [u, e],
                            className: t,
                            classNames: r = {},
                            onAnimate: i = Ie,
                            animationSettings: o = Pe,
                            getSrcByFrameTwirly: s = We,
                            size: l = He,
                        }) => {
                            const E = ((u, e) => {
                                const t = (0, a.useState)(u.idle),
                                    n = t[0],
                                    r = t[1],
                                    i = (0, a.useRef)(ye),
                                    o = (0, a.useCallback)(() => {
                                        n.stop ||
                                            (i.current(),
                                            (i.current = Tu(() => {
                                                r(u[n.nextState]);
                                            }, n.timeout)));
                                    }, [n, u]);
                                return (
                                    (0, a.useEffect)(() => (o(), () => i.current()), [o]),
                                    {
                                        step: n,
                                        setStep: (0, a.useCallback)(
                                            (e) => {
                                                r(u[e]);
                                            },
                                            [u],
                                        ),
                                        next: o,
                                    }
                                );
                            })(o).step.state;
                            return (
                                (0, a.useEffect)(() => {
                                    i(E);
                                }, [E, i]),
                                (0, a.useEffect)(() => {
                                    'start' === E && ou('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [E]),
                                n().createElement(
                                    'div',
                                    { className: p()(Re.base, Re[`base__${E}`], t), style: Ge(l) },
                                    n().createElement(
                                        'div',
                                        { className: p()(Re.bumpStars, r.bumpStars) },
                                        n().createElement('div', { className: p()(Re.star, Re.star__one, r.star) }),
                                        n().createElement('div', { className: p()(Re.star, Re.star__second, r.star) }),
                                        n().createElement('div', { className: p()(Re.star, Re.star__third, r.star) }),
                                    ),
                                    n().createElement('div', { className: p()(Re.bump, r.bump) }),
                                    n().createElement('div', { className: p()(Re.bumpRays, r.bumpRays) }),
                                    n().createElement(
                                        'div',
                                        { className: p()(Re.reward, r.reward) },
                                        ('idle' === E || 'start' === E) &&
                                            n().createElement(
                                                'div',
                                                { className: p()(Re.rewardFrom, r.rewardFrom) },
                                                u,
                                            ),
                                        ('end' === E || 'bump' === E) &&
                                            n().createElement('div', { className: p()(Re.rewardTo, r.rewardTo) }, e),
                                    ),
                                    ('start' === E || 'bump' === E) &&
                                        n().createElement(
                                            Le,
                                            Ne({}, l, {
                                                className: p()(Re.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    n().createElement('div', { className: p()(Re.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (u, e) => {
                            u.children;
                            const t = Oe(u, Te),
                                a = (e.children, Oe(e, ke));
                            return (
                                (n = t),
                                (r = a),
                                Object.keys(n).length === Object.keys(r).length &&
                                    Object.keys(n).every(
                                        (u) => Object.prototype.hasOwnProperty.call(r, u) && n[u] === r[u],
                                    )
                            );
                            var n, r;
                        },
                    ),
                    Ve = {
                        base: 'Compensation_base_8b',
                        tank: 'Compensation_tank_d8',
                        base__single: 'Compensation_base__single_e1',
                        base__multiply: 'Compensation_base__multiply_2e',
                        gold: 'Compensation_gold_64',
                        base__additionalReward: 'Compensation_base__additionalReward_ba',
                        particlesCanvas: 'Compensation_particlesCanvas_59',
                        convertIcon: 'Compensation_convertIcon_03',
                        vehicleName: 'Compensation_vehicleName_af',
                        value: 'Compensation_value_b8',
                        blue: 'Compensation_blue_86',
                    },
                    je = (u) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_particles.items_idle_${u.toString().padStart(5, '0')}`,
                    $e = Object.assign({}, Pe, { idle: Object.assign({}, Pe.idle, { timeout: 1800 }) });
                let Xe;
                !(function (u) {
                    ((u.Single = 'single'), (u.Multiply = 'multiply'), (u.Base = 'base'));
                })(Xe || (Xe = {}));
                const ze = { width: 100, height: 100 },
                    Ke = { width: 450, height: 450 },
                    qe = { width: 500, height: 500 },
                    Ye = (u) => (u.extraSmall || u.small ? Ke : qe),
                    Ze = ({ isSingle: u, isMultiply: e, value: t, vehicleName: r, isAdditionalReward: i }) => {
                        const o = (0, a.useContext)(F),
                            s = (0, a.useMemo)(() => (u ? Xe.Single : e ? Xe.Multiply : Xe.Base), [e, u]),
                            l = p()(Ve.base, Ve[`base__${s}`], i && Ve.base__additionalReward);
                        return n().createElement(
                            'div',
                            { className: l },
                            n().createElement(Le, {
                                width: e ? ze.width : Ye(o).width,
                                height: e ? ze.height : Ye(o).height,
                                className: p()(Ve.particlesCanvas, Ve.blue),
                                frameCount: 60,
                                getSrcByFrame: je,
                            }),
                            n().createElement(
                                Ue,
                                { size: e ? ze : Ye(o), animationSettings: $e, className: Ve.nyAnimation },
                                [
                                    n().createElement(
                                        'div',
                                        { key: 1, className: Ve.tank },
                                        n().createElement('div', { className: Ve.convertIcon }),
                                        n().createElement('div', { className: Ve.vehicleName }, r),
                                    ),
                                    n().createElement(
                                        'div',
                                        { key: 2, className: Ve.gold },
                                        n().createElement('div', { className: Ve.convertIcon }),
                                        n().createElement(
                                            'div',
                                            { className: Ve.value },
                                            n().createElement(we, { isCurrency: !0, count: t, isMultiple: e }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    Qe = {
                        base: 'Reward_base_7f',
                        base__singleReward: 'Reward_base__singleReward_8f',
                        base__additional: 'Reward_base__additional_3e',
                        base__vehicleReward: 'Reward_base__vehicleReward_99',
                        base__multiply: 'Reward_base__multiply_a9',
                        rewardImage: 'Reward_rewardImage_8a',
                        compensation: 'Reward_compensation_d4',
                        tankSpecName: 'Reward_tankSpecName_27',
                        tankName: 'Reward_tankName_1d',
                        preview: 'Reward_preview_73',
                        description: 'Reward_description_e2',
                        description__single: 'Reward_description__single_67',
                        vehicle: 'Reward_vehicle_d7',
                        vehicle__single: 'Reward_vehicle__single_bf',
                    };
                let Je, ut;
                (!(function (u) {
                    ((u.Big = 'big'), (u.Large = 's600x450'));
                })(Je || (Je = {})),
                    (function (u) {
                        ((u.Default = 'default'), (u.Additional = 'additional'), (u.Multiply = 'multiply'));
                    })(ut || (ut = {})));
                const et = R.views.common.tooltip_window,
                    tt = (u, e) => ({ backgroundImage: `url('R.images.gui.maps.icons.quests.bonuses.${e}.${u}')` }),
                    at = (u) => ({ backgroundImage: `url('${u}')` }),
                    nt = ['credits', 'gold', 'crystal', 'freeXP'],
                    rt = R.strings.event.awardView.previewBtnText(),
                    it = (0, a.memo)(
                        ({
                            tooltipId: u,
                            name: e,
                            label: t,
                            value: r,
                            icon: i,
                            specName: o,
                            specialId: s,
                            compensationSource: l = '',
                            isCompensation: E = !1,
                            isConfirmReward: c = !1,
                            isSingleReward: _ = !1,
                            isMultiplyReward: A = !1,
                            theme: d = ut.Default,
                            size: m,
                        }) => {
                            const F = uu('model'),
                                D = F.vehicle,
                                B = F.onPreview,
                                C = nt.includes(e),
                                h = 'premium_plus' === e,
                                g = 'vehicles' === e,
                                v = d === ut.Additional,
                                w = g || ('customizations' === e && i && i.includes('style3d')),
                                b = (g || 'gold' === e) && E,
                                f = t && d === ut.Default && !C && !g,
                                y = d === ut.Default ? Je.Large : Je.Big,
                                x = (0, a.useMemo)(() => {
                                    switch (e) {
                                        case 'premium_plus':
                                            return tt(`${e}_${r}`, y);
                                        case 'crewBooks':
                                            return ((u, e) => ({
                                                backgroundImage: `url('R.images.gui.maps.icons.crewBooks.books.${e}.${u}')`,
                                            }))(String(i), y);
                                        case 'goodies':
                                            return tt(String(i), y);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return d === ut.Default
                                                ? tt(`collection.${i}`, y)
                                                : tt(s ? 'style_3d' : `${i}`, y);
                                        case 'gold':
                                            return E ? at('') : tt(e, y);
                                        case 'vehicles':
                                            return o
                                                ? at(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(I(o)))
                                                : D.specName
                                                  ? at(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(I(D.specName)))
                                                  : tt('vehicles', y);
                                        default:
                                            return tt(e, y);
                                    }
                                }, [s, e, r, y, i, d, E, D, o]),
                                S = (0, a.useMemo)(() => ({ value: r, tooltipId: u }), [u, r]),
                                M = (0, a.useMemo)(
                                    () => et.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                L = (0, a.useCallback)(() => {
                                    (g && D.intCD && B({ intCD: D.intCD }), s && B({ intCD: s }));
                                }, [g, D, B, s]),
                                T = p()(Qe.rewardImage, b && Qe.rewardImage__compensation),
                                k = p()(
                                    Qe.base,
                                    A && Qe.base__multiply,
                                    c && Qe.base__confirmReward,
                                    _ && Qe.base__singleReward,
                                    g && Qe.base__vehicleReward,
                                    Qe[`base__${m}`],
                                    d !== ut.Default && Qe[`base__${d}`],
                                );
                            return n().createElement(
                                Du,
                                { ignoreShowDelay: !0, contentId: M, args: S },
                                n().createElement(
                                    'div',
                                    { className: k },
                                    b
                                        ? n().createElement(Ze, {
                                              isSingle: _,
                                              isMultiply: A,
                                              value: r,
                                              vehicleName: l,
                                              isAdditionalReward: v,
                                          })
                                        : n().createElement(
                                              'div',
                                              { className: T, style: x },
                                              w &&
                                                  !b &&
                                                  !A &&
                                                  !g &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Qe.preview },
                                                      n().createElement(_e, {
                                                          onClick: L,
                                                          label: rt,
                                                          isVisibleLabel: !0,
                                                      }),
                                                  ),
                                          ),
                                    b || !g || D.specName
                                        ? null
                                        : n().createElement('div', { className: Qe.tankName }, t),
                                    !h &&
                                        !b &&
                                        n().createElement(fe, {
                                            count: r,
                                            currency: e,
                                            isConfirmReward: c,
                                            isSingleReward: _,
                                            isAdditionalReward: v,
                                            isMultiplyReward: A,
                                        }),
                                    f &&
                                        n().createElement(
                                            'div',
                                            { className: p()(Qe.description, _ && Qe.description__single) },
                                            t,
                                        ),
                                    g &&
                                        !A &&
                                        (v
                                            ? n().createElement('span', { className: Qe.tankSpecName }, t)
                                            : n().createElement(
                                                  'span',
                                                  { className: p()(Qe.vehicle, _ && Qe.vehicle__single) },
                                                  n().createElement(Be, {
                                                      level: D.level,
                                                      type: D.type,
                                                      name: D.name,
                                                      isSingle: _,
                                                  }),
                                              )),
                                ),
                            );
                        },
                    );
                var ot = t(5659);
                const st = { base: 'AnimationItem_base_cd', entered: 'AnimationItem_entered_01' },
                    lt = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const ct = (u) => {
                    let e = u.index,
                        t = u.isSingleReward,
                        r = void 0 !== t && t,
                        i = u.theme,
                        o = void 0 === i ? ut.Default : i,
                        s = u.delay,
                        l = u.onEntered,
                        E = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, lt);
                    const c = (0, a.useCallback)(() => {
                        (ou('ev_white_tiger_hangar_lootbox_item'), l && l());
                    }, [l]);
                    return n().createElement(
                        ot.uT,
                        { in: !0, appear: !0, timeout: Nu(e, 150, s), onEntered: c },
                        (u) => {
                            const e = p()(st.base, st[u]);
                            return n().createElement(
                                'div',
                                { className: e },
                                n().createElement(it, Et({}, E, { isSingleReward: r, theme: o })),
                            );
                        },
                    );
                };
                var _t = t(9887),
                    At = t.n(_t);
                const dt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    mt = (u) => u.includes('_') && ((u) => dt.includes(u))(u.split('_').at(-1)),
                    Ft = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    Dt = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (mt(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = Ft.indexOf(e),
                                    i = (-1 !== r ? dt.slice(r) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : u[n]), t);
                            }
                            const n = u[a];
                            return (
                                void 0 === n ||
                                    ((u, e) => dt.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    Bt = (u, e = Dt) => {
                        const t = (
                            (u, e = Dt) =>
                            (t) => {
                                const r = x().mediaSize,
                                    i = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return n().createElement(u, i);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => mt(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    Ct = {
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
                    ht = [
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
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                Object.keys(At());
                const pt = {
                        XL: { mt: Ct.mt__XL, mr: Ct.mr__XL, mb: Ct.mb__XL, ml: Ct.ml__XL },
                        LG: { mt: Ct.mt__LG, mr: Ct.mr__LG, mb: Ct.mb__LG, ml: Ct.ml__LG },
                        MDp: { mt: Ct.mt__MDp, mr: Ct.mr__MDp, mb: Ct.mb__MDp, ml: Ct.ml__MDp },
                        MD: { mt: Ct.mt__MD, mr: Ct.mr__MD, mb: Ct.mb__MD, ml: Ct.ml__MD },
                        SMp: { mt: Ct.mt__SMp, mr: Ct.mr__SMp, mb: Ct.mb__SMp, ml: Ct.ml__SMp },
                        SM: { mt: Ct.mt__SM, mr: Ct.mr__SM, mb: Ct.mb__SM, ml: Ct.ml__SM },
                        XS: { mt: Ct.mt__XS, mr: Ct.mr__XS, mb: Ct.mb__XS, ml: Ct.ml__XS },
                    },
                    vt = (Object.keys(pt), ['mt', 'mr', 'mb', 'ml']),
                    wt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    bt = Bt((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            i = u.m,
                            o = u.mt,
                            s = void 0 === o ? i : o,
                            l = u.mr,
                            E = void 0 === l ? i : l,
                            c = u.mb,
                            _ = void 0 === c ? i : c,
                            A = u.ml,
                            d = void 0 === A ? i : A,
                            m = u.column,
                            F = u.row,
                            D = u.flexDirection,
                            B = void 0 === D ? (m ? 'column' : F && 'row') || void 0 : D,
                            C = u.flexStart,
                            h = u.center,
                            g = u.flexEnd,
                            v = u.spaceBetween,
                            w = u.spaceAround,
                            b = u.justifyContent,
                            f =
                                void 0 === b
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (g && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (w && 'space-around') ||
                                      void 0
                                    : b,
                            y = u.alignItems,
                            x = void 0 === y ? (C ? 'flex-start' : h && 'center') || (g && 'flex-end') || void 0 : y,
                            S = u.alignSelf,
                            M = u.wrap,
                            L = u.flexWrap,
                            R = void 0 === L ? (M ? 'wrap' : void 0) : L,
                            T = u.grow,
                            k = u.shrink,
                            O = u.flex,
                            N = void 0 === O ? (T || k ? `${T ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : O,
                            P = u.style,
                            H = u.children,
                            I = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, ht);
                        const W = (0, a.useMemo)(() => {
                                const u = { mt: s, mr: E, mb: _, ml: d },
                                    e = ((u) =>
                                        vt.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(pt[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        vt.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[wt[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: S,
                                        display: B || x ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: R,
                                        justifyContent: f,
                                        alignItems: x,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, s, E, _, d, P, N, S, B, R, f, x]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return n().createElement('div', gt({ className: p()(Ct.base, ...U, e), style: G }, I), H);
                    }),
                    ft = ({ binding: u, text: e = '', classMix: t, alignment: r = H.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      n().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${e}-${i}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = H.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return j.includes(t)
                                                                ? V(u)
                                                                : ((u, e = H.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          U(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(U(u, a, H.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              n().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var yt = t(3532),
                    xt = t.n(yt);
                const St = {
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
                    Mt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                Object.keys(At());
                const Rt = Object.keys(xt()),
                    Tt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    kt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ot = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Nt =
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
                            'heading-H56': Tt,
                            'heading-H36': Tt,
                            'heading-H28': kt,
                            'heading-H24': kt,
                            'heading-H24R': kt,
                            'heading-H22': kt,
                            'heading-H20R': kt,
                            'heading-H18': kt,
                            'heading-H15': Ot,
                            'heading-H14': Ot,
                            'paragraph-P24': kt,
                            'paragraph-P18': kt,
                            'paragraph-P16': kt,
                            'paragraph-P14': Ot,
                            'paragraph-P12': Ot,
                            'paragraph-P10': Ot,
                        }),
                    Pt =
                        (Object.keys(Nt),
                        (u) =>
                            u
                                ? ((u) => Rt.includes(u))(u)
                                    ? { colorClassName: St[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Ht = Bt((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            i = u.color,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            E = u.mr,
                            c = void 0 === E ? o : E,
                            _ = u.mb,
                            A = void 0 === _ ? o : _,
                            d = u.ml,
                            m = void 0 === d ? o : d,
                            F = u.style,
                            D = u.format,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Mt);
                        const C = (0, a.useMemo)(() => {
                                const u = Pt(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: e };
                            }, [F, i]),
                            h = C.computedStyle,
                            g = C.colorClassName;
                        return n().createElement(
                            bt,
                            Lt(
                                {
                                    className: p()(St.base, t && St[t], g, r),
                                    style: h,
                                    mt: !0 === l ? Nt[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === c ? Nt[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === A ? Nt[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === m ? Nt[t || 'paragraph-P16'].ml : m,
                                },
                                B,
                            ),
                            void 0 !== D ? n().createElement(ft, Lt({}, D, { text: e })) : e,
                        );
                    }),
                    It = ({ level: u, type: e, name: t, animationDelayStepsCount: a, classMix: r }) => {
                        const i = { backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${I(e)}_elite')` },
                            o = p()('Vehicle_base_52', void 0 !== a && 'Vehicle_base__hasAnimation_6a', r);
                        return n().createElement(
                            'div',
                            { className: o, style: void 0 !== a ? { animationDelay: a * tu + 'ms' } : void 0 },
                            n().createElement(Ht, { className: 'Vehicle_level_37', text: Fe(u) }),
                            n().createElement('div', { className: 'Vehicle_type_33', style: i }),
                            n().createElement(Ht, { className: 'Vehicle_name_63', text: t }),
                        );
                    },
                    Wt = R.strings.event.WtEventPortals.inside.firstLaunch,
                    Gt = R.strings.tooltips.awardItem.gold,
                    Ut = ({ value: u, classMix: e }) => {
                        const t = { header: Gt.header(), body: Gt.body() },
                            a = { header: Wt.tooltip.header(), body: Wt.tooltip.body() };
                        return n().createElement(
                            'div',
                            { className: p()('FirstLaunchReward_base_64', e) },
                            n().createElement(Ht, { text: R.strings.event.portalAward.firstLaunchRewardTitle() }),
                            n().createElement(
                                gu,
                                t,
                                n().createElement(
                                    'div',
                                    { className: 'FirstLaunchReward_gold_40' },
                                    n().createElement(Ht, { text: pe(u, 'gold') }),
                                    n().createElement('div', { className: 'FirstLaunchReward_goldIcon_05' }),
                                ),
                            ),
                            n().createElement(
                                gu,
                                a,
                                n().createElement('div', { className: 'FirstLaunchReward_infoIcon_7b' }),
                            ),
                        );
                    },
                    Vt = 'Content_btnHolder_44';
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const $t = { animationDelay: '700ms' },
                    Xt = ({
                        additionalRewards: u,
                        vehicle: e,
                        tankReward: t,
                        footerAnimationDelayCount: r,
                        onPreview: i,
                        onBackToPortal: o,
                        firstLaunchReward: s,
                        isFirstLaunch: l,
                    }) => {
                        const E = (0, a.useMemo)(() => ({ animationDelay: r * tu + 'ms' }), [r]),
                            c = (0, a.useContext)(zt),
                            _ = (0, a.useCallback)(() => {
                                e.intCD && i({ intCD: e.intCD });
                            }, [e, i]),
                            A = (0, a.useCallback)(() => {
                                o();
                            }, [o]),
                            d = { tooltipId: null == t ? void 0 : t.tooltipId };
                        return n().createElement(
                            'div',
                            { className: 'Content_base_a4' },
                            l &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(Ut, { value: s, classMix: 'Content_firstLaunchReward_d0' }),
                                    n().createElement('div', { className: 'Content_vehicleBg_17' }),
                                ),
                            n().createElement(It, {
                                level: e.level,
                                type: e.type,
                                name: e.name,
                                animationDelayStepsCount: 6,
                                classMix: 'Content_vehicle_3e',
                            }),
                            n().createElement(
                                Du,
                                {
                                    ignoreShowDelay: !0,
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    args: d,
                                },
                                n().createElement('div', { className: 'Content_toolTipArea_5a' }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Content_wrapper_e6' },
                                Boolean(u.items.length) &&
                                    n().createElement(
                                        'div',
                                        { className: 'Content_additional_aa', style: $t },
                                        n().createElement('div', { className: 'Content_additionalBackground_60' }),
                                        n().createElement(
                                            'div',
                                            { className: 'Content_additionalTitle_ea' },
                                            R.strings.event.portalAward.additionalTitle(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: 'Content_additionalWrapper_87' },
                                            u.items.map(({ value: e }, t) => {
                                                const a = t === u.items.length - 1 && c ? c : void 0;
                                                return n().createElement(
                                                    ct,
                                                    jt({ key: t }, e, {
                                                        index: t,
                                                        theme: ut.Additional,
                                                        delay: 700,
                                                        onEntered: a,
                                                    }),
                                                );
                                            }),
                                        ),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: 'Content_controls_67', style: E },
                                    n().createElement(
                                        'div',
                                        { className: Vt },
                                        n().createElement(
                                            oe,
                                            { size: re.medium, type: ne.main, onClick: _ },
                                            R.strings.event.vehiclePortal.openGarageButton(),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Vt },
                                        n().createElement(
                                            oe,
                                            { size: re.medium, type: ne.primary, onClick: A },
                                            R.strings.event.vehiclePortal.backToPortalButton(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    zt = (0, a.createContext)(null),
                    Kt = R.strings.event.portalVehicleAward,
                    qt = () => {
                        var u;
                        const e = uu('model'),
                            t = e.isBoxesEnabled,
                            r = e.onBackToPortal,
                            i = e.onClose,
                            o = e.onPreview,
                            s = e.onBuy,
                            l = e.rewards,
                            E = e.additionalRewards,
                            c = e.vehicle,
                            _ = e.availableLootBoxesPurchase,
                            A = e.showVideoName,
                            d = e.idleVideoName,
                            m = e.firstLaunchReward,
                            F = e.isFirstLaunch,
                            D = (0, a.useState)(!1),
                            B = D[0],
                            C = D[1];
                        (0, a.useEffect)(() => C(!1), []);
                        const h = (0, a.useCallback)(() => C(!0), []),
                            g = 7 + 1.5 * E.items.length,
                            p = (0, a.useCallback)(() => {
                                null == i || i();
                            }, [i]),
                            v = null == (u = l.items[0]) ? void 0 : u.value,
                            w = g + 1;
                        return n().createElement(
                            zt.Provider,
                            { value: h },
                            n().createElement(
                                te,
                                {
                                    title: Kt.title(),
                                    isBoxesEnabled: t,
                                    onBuy: s,
                                    onBackToPortal: r,
                                    onClose: p,
                                    availableLootBoxesPurchase: _,
                                    lootBoxesAnimationDelayCount: w,
                                    showFinalAnimation: B,
                                    showVideoName: A,
                                    idleVideoName: d,
                                },
                                n().createElement(Xt, {
                                    additionalRewards: E,
                                    onPreview: o,
                                    vehicle: c,
                                    tankReward: v,
                                    footerAnimationDelayCount: w,
                                    onBackToPortal: r,
                                    firstLaunchReward: m,
                                    isFirstLaunch: F,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(P, null, n().createElement(qt, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, a] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, a];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (() => {
            var u = { 749: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3217));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
