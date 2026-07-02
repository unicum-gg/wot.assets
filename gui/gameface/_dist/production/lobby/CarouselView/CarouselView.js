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
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => m,
                        getSize: () => F,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => d,
                        remToPx: () => B,
                        resize: () => c,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
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
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function d(u) {
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
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
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
                    x = Promise.all([
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
                t.d(e, { Sw: () => r.Z, B0: () => s, ry: () => C });
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
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    D = t(3138);
                const m = ['args'];
                function d(u, e, t, a, n, r, i) {
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
                                            d(r, a, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            d(r, a, n, i, o, 'throw', u);
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
                                })(e, m);
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
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var b = t(7572);
                const w = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: A,
                        TimeFormatType: F,
                        DateFormatType: c,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = D.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                A = o.width,
                                F = o.height,
                                c = {
                                    x: D.O.view.pxToRem(l) + i.x,
                                    y: D.O.view.pxToRem(E) + i.y,
                                    width: D.O.view.pxToRem(A),
                                    height: D.O.view.pxToRem(F),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(c),
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
                window.ViewEnvHelper = v;
            },
            7856: (u, e, t) => {
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
                function A(u, e, t) {
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
                const F = s.O.client.getSize('rem'),
                    c = F.width,
                    _ = F.height,
                    D = Object.assign({ width: c, height: _ }, A(c, _, l)),
                    m = (0, a.createContext)(D),
                    d = ['children'],
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
                            })(u, d);
                        const n = (0, a.useContext)(m),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            A = n.extraLargeWidth,
                            F = n.largeWidth,
                            c = n.mediumWidth,
                            _ = n.smallWidth,
                            D = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            h = n.mediumHeight,
                            g = n.smallHeight,
                            p = n.extraSmallHeight,
                            b = { extraLarge: B, large: C, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && A) return o(e, t, b);
                            if (t.largeWidth && F) return o(e, t, b);
                            if (t.mediumWidth && c) return o(e, t, b);
                            if (t.smallWidth && _) return o(e, t, b);
                            if (t.extraSmallWidth && D) return o(e, t, b);
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
                        const e = (0, a.useContext)(m),
                            t = (0, a.useState)(e),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    a = s.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: a }, A(t, a, l)));
                            }, []);
                        (C(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(m.Provider, { value: E }, u);
                    });
                var g = t(6483),
                    p = t.n(g),
                    b = t(926),
                    w = t.n(b);
                let v, f, x;
                (!(function (u) {
                    ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
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
                    })(x || (x = {})));
                const T = () => {
                        const u = (0, a.useContext)(m),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
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
                                        return x.ExtraLarge;
                                    case u.largeHeight:
                                        return x.Large;
                                    case u.mediumHeight:
                                        return x.Medium;
                                    case u.smallHeight:
                                        return x.Small;
                                    case u.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    L = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: w().SMALL_WIDTH,
                        [f.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [f.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [x.ExtraSmall]: '',
                        [x.Small]: w().SMALL_HEIGHT,
                        [x.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [x.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: w().SMALL,
                        [v.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [v.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [v.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
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
                            })(u, L);
                        const r = T(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', S({ className: p()(t, M[i], y[o], k[s]) }, a), e);
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
                    },
                    H = (u = 1) => {
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
                    I = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                var W = t(4179);
                const G = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    U = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    j = W.Sw.instance;
                let V;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(V || (V = {}));
                const $ = (u = 'model', e = V.Deep) => {
                    const t = (0, a.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, a.useMemo)(() => H(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, a.useState)(() =>
                            ((u) => {
                                const e = I(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return G(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = I(`${u}.${e}`, window);
                                            return G(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(s),
                            ),
                        ),
                        E = l[0],
                        A = l[1],
                        F = (0, a.useRef)(-1);
                    return (
                        C(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? V.Deep : V.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== V.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === V.Deep
                                            ? (u === E && n((u) => u + 1), A(u))
                                            : A(Object.assign([], u));
                                    },
                                    a = ((u) => {
                                        const e = ((u) => {
                                                const e = H(),
                                                    t = e.caller,
                                                    a = e.resId,
                                                    n =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: U(n, ''), resId: a };
                                            })(),
                                            t = e.modelPrefix,
                                            a = u.split('.');
                                        if (a.length > 0) {
                                            const u = [a[0]];
                                            return (
                                                a.reduce((e, a) => {
                                                    const n = I(U(t, `${e}.${a}`), window);
                                                    return G(n)
                                                        ? (u.push(n.id), `${e}.${a}.value`)
                                                        : (u.push(a), `${e}.${a}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                F.current = j.addCallback(a, t, o, e === V.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (e !== V.None)
                                return () => {
                                    j.removeCallback(F.current, o);
                                };
                        }, [o, e]),
                        E
                    );
                };
                let X, z;
                (!(function (u) {
                    ((u.UNDEFINED = 'undefined'),
                        (u.BOSS = 'boss'),
                        (u.BOSS_2025 = 'boss2025'),
                        (u.BOSS_SPECIAL = 'bossSpecial'),
                        (u.HUNTER = 'hunter'));
                })(X || (X = {})),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(z || (z = {})));
                const K = (u) => u.replace(/&nbsp;/g, ' '),
                    q = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Y = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Z = (u, e, t = z.left) => u.split(e).reduce(t === z.left ? q : Y, []),
                    Q = (() => {
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
                    J = ['zh_cn', 'zh_sg', 'zh_tw'];
                let uu, eu, tu;
                (!(function (u) {
                    ((u[(u.Small = 266)] = 'Small'), (u[(u.Large = 360)] = 'Large'));
                })(uu || (uu = {})),
                    (function (u) {
                        ((u.Hunter = 'Hunter'), (u.CommonBoss = 'CommonBoss'), (u.SpecialBoss = 'specialBoss'));
                    })(eu || (eu = {})),
                    (function (u) {
                        ((u.InPlatoon = 'inPlatoon'),
                            (u.InBattle = 'inBattle'),
                            (u.Unsuitable = 'unsuitable'),
                            (u.NoBattlesLeft = 'noBattlesLeft'));
                    })(tu || (tu = {})));
                const au = (u, e) => (u ? eu.Hunter : e ? eu.SpecialBoss : eu.CommonBoss),
                    nu = (u, e) => {
                        if (u > 0) {
                            const n = u > e ? `${e}+` : u;
                            return (
                                (t = R.strings.event.award.value()),
                                (a = { count: n }),
                                t.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                    const e = 0 === u.indexOf('%') ? 2 : 1;
                                    return String(a[u.slice(e, -e)]);
                                })
                            );
                        }
                        return '0';
                        var t, a;
                    };
                function ru(u) {
                    engine.call('PlaySound', u);
                }
                const iu = [
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
                function ou(u) {
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
                const su = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    lu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            A = u.ignoreMouseClick,
                            F = void 0 !== A && A,
                            c = u.decoratorId,
                            _ = void 0 === c ? 0 : c,
                            D = u.isEnabled,
                            m = void 0 === D || D,
                            d = u.targetId,
                            B = void 0 === d ? 0 : d,
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
                            })(u, iu);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => B || H().resId, [B]),
                            w = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (su(t, _, { isMouseEvent: !0, on: !0, arguments: ou(n) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, _, n, b, C]),
                            v = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        su(t, _, { on: !1 }, b),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, _, b, h]),
                            f = (0, a.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && v();
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
                                !1 === m && v();
                            }, [m, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            m
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          r && r(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (v(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === F && v(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === F && v(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : e
                        );
                        var x;
                    },
                    Eu = ['children'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Fu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Eu);
                        return n().createElement(
                            lu,
                            Au(
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
                    cu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const Du = R.views.common.tooltip_window.simple_tooltip_content,
                    mu = (u) => {
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
                            })(u, cu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return n().createElement(
                            lu,
                            _u(
                                {
                                    contentId:
                                        ((A = null == s ? void 0 : s.hasHtmlContent),
                                        A ? Du.SimpleTooltipHtmlContent('resId') : Du.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var A;
                    };
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Bu = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const a = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(mu, e, a);
                    const r = e.contentId,
                        i = e.args,
                        o = null == i ? void 0 : i.contentId;
                    return r || o
                        ? n().createElement(lu, du({}, e, { contentId: r || o }), a)
                        : n().createElement(Fu, e, a);
                };
                var Cu = t(9050),
                    hu = t.n(Cu);
                let gu, pu, bu;
                (!(function (u) {
                    ((u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding'));
                })(gu || (gu = {})),
                    (function (u) {
                        ((u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end'));
                    })(pu || (pu = {})),
                    (function (u) {
                        ((u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n'));
                    })(bu || (bu = {})));
                const wu = { [bu.NBSP]: gu.NoBreakSymbol, [bu.ZWNBSP]: gu.NoBreakSymbol, [bu.NEW_LINE]: gu.LineBreak },
                    vu = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    fu = (u) => ({ color: `#${u}` }),
                    xu = ({ elementList: u, textBlock: e, key: t }) => {
                        const a = e.colorTag;
                        return a
                            ? vu[a]
                                ? n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: vu[a] },
                                      u,
                                  )
                                : n().createElement('span', { key: t, 'data-block-type': e.blockType, style: fu(a) }, u)
                            : n().createElement('span', { key: t, 'data-block-type': e.blockType }, u);
                    },
                    Tu = {
                        [gu.Word]: xu,
                        [gu.NoBreakSymbol]: xu,
                        [gu.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            n().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => n().createElement(n().Fragment, { key: t }, u)),
                            ),
                        [gu.LineBreak]: ({ key: u }) =>
                            n().createElement('span', {
                                key: u,
                                'data-block-type': gu.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [gu.NewLine]: ({ elementList: u, key: e }) =>
                            n().createElement(
                                'span',
                                { key: e, 'data-block-type': gu.NewLine, className: 'renderers_newLine_bd' },
                                u,
                            ),
                        [gu.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            n().createElement(
                                'span',
                                {
                                    key: e,
                                    'data-block-type': gu.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                u,
                            ),
                    },
                    Lu = (u, e, t) => {
                        const a = [];
                        return (
                            u.childList.forEach((n, r) => {
                                const i = `${t}_${r}`;
                                if (((u) => void 0 !== u.childList)(n)) {
                                    const u = n,
                                        e = u.blockType,
                                        t = Lu(u, Tu[e], i);
                                    a.push(...t);
                                } else a.push(e({ elementList: [n], textBlock: u, key: i }));
                            }),
                            a
                        );
                    },
                    Su = (u, e, t, a) => {
                        let n = e.exec(u),
                            r = 0;
                        for (; n;) (r !== n.index && t(u.slice(r, n.index)), a(n), (r = e.lastIndex), (n = e.exec(u)));
                        r !== u.length && t(u.slice(r));
                    },
                    Mu = (u) => {
                        const e = /[\s\u002d]/g;
                        let t = e.exec(u);
                        if (!t) return [u];
                        const a = [];
                        let n = 0;
                        for (; t;) (a.push(u.slice(n, e.lastIndex)), (n = e.lastIndex), (t = e.exec(u)));
                        return (n !== u.length && a.push(u.slice(n)), a);
                    },
                    yu = (u, e = '') => {
                        const t = [];
                        return (
                            Su(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: gu.Word, colorTag: e, childList: Mu(u) });
                                },
                                (u) => {
                                    const a = u[0],
                                        n = wu[a.charAt(0)];
                                    n === gu.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: gu.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: gu.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(a),
                                          )
                                        : t.push({ blockType: n, colorTag: e, childList: [a] });
                                },
                            ),
                            t
                        );
                    },
                    ku = (u, e, t = '') => {
                        const a = [];
                        return (
                            Su(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    a.push(...yu(u, t));
                                },
                                (u) => {
                                    const n = u[1],
                                        r = void 0 === e[n] ? u[0] : e[n];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...yu(String(r), t))
                                        : a.push({ blockType: gu.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    Ou = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            a = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === gu.NoBreakWrapper) (u.childList.push(a), t.push(u));
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            (u.childList.length > 0 && t.push(u),
                                t.push({ blockType: gu.NoBreakWrapper, colorTag: '', childList: [e, a] }));
                        }
                        return (e.childList.length > 0 && t.push(e), t);
                    },
                    Ru = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === gu.NoBreakSymbol
                                        ? ((t = !0), e.push(...Ou(e.pop(), u)))
                                        : (t ? e.push(...Ou(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    Su(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...ku(u, e));
                                        },
                                        (u) => {
                                            t.push(...ku(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })(K(u).replace(/&zwnbsp;/g, '\ufeff'), e),
                        );
                        return ((u) => {
                            const e = [];
                            return (
                                u.forEach((u, t) => {
                                    e.push(
                                        ...((u, e) => {
                                            const t = [],
                                                a = u.blockType,
                                                n = Tu[a],
                                                r = Lu(u, n, e);
                                            return (
                                                a === gu.NoBreakWrapper
                                                    ? t.push(n({ elementList: r, textBlock: u, key: `${e}` }))
                                                    : t.push(...r),
                                                t
                                            );
                                        })(u, t),
                                    );
                                }),
                                e
                            );
                        })(t);
                    },
                    Nu = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    Pu = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    Hu = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const a = Pu(u, e),
                            n = u.textContent.length,
                            r = u.offsetWidth / n,
                            i = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((e - u.offsetLeft) / r);
                            return a >= t ? [!0, t + i] : [!1, a];
                        }
                        const o = Math.max(t + i, 0);
                        return n < o ? [!1, 0] : [!0, o];
                    },
                    Iu = (u, e, t, a, r, i) => {
                        let o = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = u[l],
                                E = Number(u[l].getAttribute('data-block-type'));
                            if (E === gu.LineBreak || E === gu.NewLine || E === gu.Binding) continue;
                            const A = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = Hu(t, a, r),
                                    E = u[0],
                                    F = u[1];
                                if (!E) {
                                    F > 0 && (r -= F);
                                    continue;
                                }
                                const c = A.slice(0, A.length - F) + i,
                                    _ = e[l];
                                ((s = n().cloneElement(_, _.props, c)), (o = l));
                                break;
                            }
                            {
                                const u = t.children,
                                    E = e[l],
                                    F = E.props.children,
                                    c = Iu(u, F, u.length - 1, a, r, i),
                                    _ = c[0],
                                    D = c[1];
                                if (!(_ < 0)) {
                                    const u = F.slice(0, _);
                                    ((s = n().cloneElement(E, E.props, u, D)), (o = l));
                                    break;
                                }
                                r -= A.length;
                            }
                        }
                        return [o, s];
                    },
                    Wu = n().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            targetId: s,
                            justifyContent: l = pu.FlexStart,
                            alignContent: E = pu.FlexStart,
                            truncateIdentify: A = '...',
                        }) => {
                            const F = (0, a.useRef)(null),
                                c = (0, a.useRef)({ height: 0, width: 0 }),
                                _ = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                D = _[0],
                                m = _[1],
                                d = (0, a.useMemo)(() => Ru(u, r), [r, u]),
                                B = (0, a.useMemo)(() => {
                                    if (i && D.isTruncated)
                                        return {
                                            args: { text: u, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [r, i, s, u, D.isTruncated]),
                                C = (0, a.useCallback)(
                                    (u) => {
                                        ((c.current.width = u.contentRect.width),
                                            (c.current.height = u.contentRect.height));
                                        const e = ((u, e, t, a = '...') => {
                                                const n = [...e],
                                                    r = u.current;
                                                if (!r) return [n, !1];
                                                const i = t.height,
                                                    o = t.width,
                                                    s = r.lastElementChild;
                                                if (!Nu(s, i) && Pu(s, o) <= 0) return [n, !1];
                                                const l = r.children,
                                                    E = ((u, e) => {
                                                        let t = 0,
                                                            a = u.length - 1;
                                                        for (; a - t >= 0;) {
                                                            const n = t + Math.ceil(0.5 * (a - t));
                                                            Nu(u[n], e) ? (a = n - 1) : (t = n + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (E < 0) return [n, !1];
                                                const A = Iu(l, n, E, o, a.length, a),
                                                    F = A[0],
                                                    c = A[1];
                                                return (c && (n.splice(F, 1, c), n.splice(F + 1)), [n, !0]);
                                            })(F, d, c.current, A),
                                            a = e[0],
                                            n = e[1];
                                        (m({ elementList: a, isTruncated: n, isTruncateFinished: !0 }), t && t(n));
                                    },
                                    [t, A, d],
                                ),
                                h = (0, a.useMemo)(() => ({ justifyContent: l, alignContent: E }), [E, l]);
                            return (
                                ((u, e, t = !0) => {
                                    const n = (0, a.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new (hu())((u) => n(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [n, t, u]);
                                })(F, C, o),
                                n().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            'ExtendedText_base_71',
                                            e,
                                            'ExtendedText_base__zeroPadding_25',
                                            o && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: h,
                                    },
                                    n().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: F }, d),
                                    n().createElement(
                                        Bu,
                                        { tooltipArgs: B },
                                        n().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    'ExtendedText_truncated_97',
                                                    !D.isTruncateFinished && o && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: h,
                                            },
                                            D.isTruncateFinished && o ? D.elementList : d,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Gu = t(9887),
                    Uu = t.n(Gu);
                const ju = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Vu = (u) => u.includes('_') && ((u) => ju.includes(u))(u.split('_').at(-1)),
                    $u = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    Xu = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (Vu(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = $u.indexOf(e),
                                    i = (-1 !== r ? ju.slice(r) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : u[n]), t);
                            }
                            const n = u[a];
                            return (
                                void 0 === n ||
                                    ((u, e) => ju.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    zu = (u, e = Xu) => {
                        const t = (
                            (u, e = Xu) =>
                            (t) => {
                                const r = T().mediaSize,
                                    i = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return n().createElement(u, i);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => Vu(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    Ku = {
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
                    qu = [
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
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                Object.keys(Uu());
                const Zu = {
                        XL: { mt: Ku.mt__XL, mr: Ku.mr__XL, mb: Ku.mb__XL, ml: Ku.ml__XL },
                        LG: { mt: Ku.mt__LG, mr: Ku.mr__LG, mb: Ku.mb__LG, ml: Ku.ml__LG },
                        MDp: { mt: Ku.mt__MDp, mr: Ku.mr__MDp, mb: Ku.mb__MDp, ml: Ku.ml__MDp },
                        MD: { mt: Ku.mt__MD, mr: Ku.mr__MD, mb: Ku.mb__MD, ml: Ku.ml__MD },
                        SMp: { mt: Ku.mt__SMp, mr: Ku.mr__SMp, mb: Ku.mb__SMp, ml: Ku.ml__SMp },
                        SM: { mt: Ku.mt__SM, mr: Ku.mr__SM, mb: Ku.mb__SM, ml: Ku.ml__SM },
                        XS: { mt: Ku.mt__XS, mr: Ku.mr__XS, mb: Ku.mb__XS, ml: Ku.ml__XS },
                    },
                    Qu = (Object.keys(Zu), ['mt', 'mr', 'mb', 'ml']),
                    Ju = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ue = zu((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            i = u.m,
                            o = u.mt,
                            s = void 0 === o ? i : o,
                            l = u.mr,
                            E = void 0 === l ? i : l,
                            A = u.mb,
                            F = void 0 === A ? i : A,
                            c = u.ml,
                            _ = void 0 === c ? i : c,
                            D = u.column,
                            m = u.row,
                            d = u.flexDirection,
                            B = void 0 === d ? (D ? 'column' : m && 'row') || void 0 : d,
                            C = u.flexStart,
                            h = u.center,
                            g = u.flexEnd,
                            b = u.spaceBetween,
                            w = u.spaceAround,
                            v = u.justifyContent,
                            f =
                                void 0 === v
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (g && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (w && 'space-around') ||
                                      void 0
                                    : v,
                            x = u.alignItems,
                            T = void 0 === x ? (C ? 'flex-start' : h && 'center') || (g && 'flex-end') || void 0 : x,
                            L = u.alignSelf,
                            S = u.wrap,
                            M = u.flexWrap,
                            y = void 0 === M ? (S ? 'wrap' : void 0) : M,
                            k = u.grow,
                            O = u.shrink,
                            R = u.flex,
                            N = void 0 === R ? (k || O ? `${k ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : R,
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
                            })(u, qu);
                        const W = (0, a.useMemo)(() => {
                                const u = { mt: s, mr: E, mb: F, ml: _ },
                                    e = ((u) =>
                                        Qu.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(Zu[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        Qu.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[Ju[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: L,
                                        display: B || T ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: y,
                                        justifyContent: f,
                                        alignItems: T,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, s, E, F, _, P, N, L, B, y, f, T]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return n().createElement('div', Yu({ className: p()(Ku.base, ...U, e), style: G }, I), H);
                    }),
                    ee = ({ binding: u, text: e = '', classMix: t, alignment: r = z.left }) =>
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
                                                      : ((u, e = z.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return J.includes(t)
                                                                ? Q(u)
                                                                : ((u, e = z.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = K(u);
                                                                      return (
                                                                          Z(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Z(u, a, z.left))),
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
                var te = t(3532),
                    ae = t.n(te);
                const ne = {
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
                    re = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                Object.keys(Uu());
                const oe = Object.keys(ae()),
                    se = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    le = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H56': se,
                            'heading-H36': se,
                            'heading-H28': le,
                            'heading-H24': le,
                            'heading-H24R': le,
                            'heading-H22': le,
                            'heading-H20R': le,
                            'heading-H18': le,
                            'heading-H15': Ee,
                            'heading-H14': Ee,
                            'paragraph-P24': le,
                            'paragraph-P18': le,
                            'paragraph-P16': le,
                            'paragraph-P14': Ee,
                            'paragraph-P12': Ee,
                            'paragraph-P10': Ee,
                        }),
                    Fe =
                        (Object.keys(Ae),
                        (u) =>
                            u
                                ? ((u) => oe.includes(u))(u)
                                    ? { colorClassName: ne[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    ce = zu((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            i = u.color,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            E = u.mr,
                            A = void 0 === E ? o : E,
                            F = u.mb,
                            c = void 0 === F ? o : F,
                            _ = u.ml,
                            D = void 0 === _ ? o : _,
                            m = u.style,
                            d = u.format,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, re);
                        const C = (0, a.useMemo)(() => {
                                const u = Fe(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, m, a), colorClassName: e };
                            }, [m, i]),
                            h = C.computedStyle,
                            g = C.colorClassName;
                        return n().createElement(
                            ue,
                            ie(
                                {
                                    className: p()(ne.base, t && ne[t], g, r),
                                    style: h,
                                    mt: !0 === l ? Ae[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === A ? Ae[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === c ? Ae[t || 'paragraph-P16'].mb : c,
                                    ml: !0 === D ? Ae[t || 'paragraph-P16'].ml : D,
                                },
                                B,
                            ),
                            void 0 !== d ? n().createElement(ee, ie({}, d, { text: e })) : e,
                        );
                    }),
                    _e = 1.6;
                let De, me, de, Be;
                var Ce;
                (!(function (u) {
                    ((u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'));
                })(De || (De = {})),
                    (function (u) {
                        ((u.Hunter = 'wt_hunter'), (u.Boss = 'wt_boss'));
                    })(me || (me = {})),
                    (function (u) {
                        ((u.x16 = '16'), (u.x48 = '48'), (u.x80 = '80'), (u.x124 = '124'));
                    })(de || (de = {})),
                    ((Ce = Be || (Be = {})).SHORT_DATE = 'short-date'),
                    (Ce.SHORT_TIME = 'short-time'),
                    (Ce.SHORT_DATE_TIME = 'short-date-time'),
                    (Ce.FULL_DATE = 'full-date'),
                    (Ce.FULL_DATE_TIME = 'full-date-time'),
                    (Ce.MONTH = 'month'),
                    (Ce.MONTH_DATE = 'month-date'),
                    (Ce.DATE_MONTH = 'date-month'),
                    (Ce.MONTH_YEAR = 'month-year'),
                    (Ce.WEEK_DAY = 'week-day'),
                    (Ce.WEEK_DAY_TIME = 'week-day-time'),
                    (Ce.YEAR = 'year'),
                    (Ce.DATE_YEAR = 'date-year'),
                    Date.now());
                const he = (u) => (e, t) =>
                        e / t >= 2.4000000000000004
                            ? u(viewEnv.remToPx(t) * _e, viewEnv.remToPx(t), e, t)
                            : u(viewEnv.remToPx(e), 0.625 * viewEnv.remToPx(e), e, t),
                    ge =
                        (he((u, e, t, a) => {
                            const n = { width: viewEnv.remToPx(900) * _e, height: viewEnv.remToPx(900) },
                                r = { width: viewEnv.remToPx(1200) * _e, height: viewEnv.remToPx(1200) };
                            return u < n.width
                                ? n
                                : t > l.medium.width && a > l.medium.height && u < r.width
                                  ? r
                                  : { width: u, height: e };
                        }),
                        he((u, e) => {
                            const t = { width: viewEnv.remToPx(700) * _e, height: viewEnv.remToPx(700) };
                            return u < t.width ? t : { width: u, height: e };
                        }),
                        (u, e) => {
                            const t = u === X.BOSS_2025 ? 'ticket2025' : 'ticket';
                            return {
                                backgroundImage: `url(${R.images.white_tiger.gui.maps.icons.tickets.$dyn(t + '_' + e)})`,
                            };
                        }),
                    pe = {
                        base: 'TankCard_base_c3',
                        base__disabled: 'TankCard_base__disabled_b0',
                        specialLabel: 'TankCard_specialLabel_21',
                        labelWrapper: 'TankCard_labelWrapper_3a',
                        label: 'TankCard_label_fb',
                        base__bossSpecial: 'TankCard_base__bossSpecial_d6',
                        labelIcon: 'TankCard_labelIcon_ac',
                        base__hunter: 'TankCard_base__hunter_7e',
                        image: 'TankCard_image_ea',
                        effect: 'TankCard_effect_e1',
                        base__boss2025: 'TankCard_base__boss2025_6c',
                        base__selected: 'TankCard_base__selected_46',
                        quantityWrapper: 'TankCard_quantityWrapper_ac',
                        quantity: 'TankCard_quantity_87',
                        quantityIcon: 'TankCard_quantityIcon_81',
                        messageWrapper: 'TankCard_messageWrapper_ea',
                        message: 'TankCard_message_c9',
                        message__ticket: 'TankCard_message__ticket_6a',
                        message__unsuitable: 'TankCard_message__unsuitable_39',
                        icon: 'TankCard_icon_d2',
                        icon__inBattle: 'TankCard_icon__inBattle_f6',
                        icon__inPlatoon: 'TankCard_icon__inPlatoon_5f',
                        icon__unsuitable: 'TankCard_icon__unsuitable_a6',
                        icon__noBattlesLeft: 'TankCard_icon__noBattlesLeft_0c',
                        shadow: 'TankCard_shadow_d1',
                        shadow__inBattle: 'TankCard_shadow__inBattle_70',
                        shadow__ticket: 'TankCard_shadow__ticket_61',
                        shadow__inPlatoon: 'TankCard_shadow__inPlatoon_46',
                        shadow__unsuitable: 'TankCard_shadow__unsuitable_45',
                        border: 'TankCard_border_0b',
                    },
                    be = R.strings.event.WTEventsCarouselView,
                    we = (0, a.memo)(
                        ({
                            title: u,
                            id: e,
                            quantity: t = 0,
                            selected: r = !1,
                            inPlatoon: i = !1,
                            inBattle: o = !1,
                            unsuitable: s = !1,
                            remainingBattles: l,
                            icon: E = '',
                            wtVehicleType: A = X.UNDEFINED,
                        }) => {
                            const F = $('model'),
                                c = F.onClick,
                                _ = F.isDisableAll,
                                D = T().mediaSize,
                                m = D === v.Large || D === v.ExtraLarge,
                                d = A === X.BOSS_SPECIAL,
                                B = A === X.BOSS || A === X.BOSS_2025,
                                C = (0, a.useMemo)(
                                    () =>
                                        (({
                                            inPlatoon: u,
                                            inBattle: e,
                                            unsuitable: t,
                                            remainingBattles: a,
                                            isSpecial: n,
                                        }) =>
                                            t
                                                ? tu.Unsuitable
                                                : u
                                                  ? tu.InPlatoon
                                                  : e
                                                    ? tu.InBattle
                                                    : 0 === a && n
                                                      ? tu.NoBattlesLeft
                                                      : void 0)({
                                            inPlatoon: i,
                                            inBattle: o,
                                            unsuitable: s,
                                            remainingBattles: l,
                                            isSpecial: d,
                                        }),
                                    [i, o, s, d, l],
                                ),
                                h = !C && B && 0 === t,
                                g = C === tu.Unsuitable,
                                b = p()(pe.base, pe[`base__${A}`], r && pe.base__selected, _ && pe.base__disabled),
                                w = (0, a.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${m ? R.images.white_tiger.gui.maps.icons.vehicle.c_216x110.$dyn(E) : R.images.gui.maps.icons.vehicle.$dyn(E)})`,
                                    }),
                                    [m, E],
                                ),
                                f = p()(pe.message, g && pe.message__unsuitable, h && pe.message__ticket),
                                x = p()(
                                    pe.shadow,
                                    C === tu.InBattle && pe.shadow__inBattle,
                                    (C === tu.InPlatoon || _) && pe.shadow__inPlatoon,
                                    g && pe.shadow__unsuitable,
                                    h && pe.shadow__ticket,
                                ),
                                L = p()(
                                    pe.icon,
                                    C === tu.InBattle && pe.icon__inBattle,
                                    C === tu.InPlatoon && pe.icon__inPlatoon,
                                    g && pe.icon__unsuitable,
                                    C === tu.NoBattlesLeft && pe.icon__noBattlesLeft,
                                ),
                                S = (0, a.useCallback)(() => {
                                    (ru(R.sounds.tank_selection()), c({ id: e }));
                                }, [e, c]),
                                M = (0, a.useCallback)(() => {
                                    ru(R.sounds.carousel());
                                }, []),
                                y = (0, a.useMemo)(() => ({ id: e }), [e]);
                            return n().createElement(
                                'div',
                                { className: b, onMouseEnter: M, onClick: S },
                                n().createElement('div', { className: pe.effect }),
                                n().createElement('div', { className: pe.image, style: w }),
                                n().createElement('div', { className: x }),
                                d &&
                                    Boolean(l) &&
                                    n().createElement(Wu, {
                                        text: be.specialBattlesLeft(),
                                        binding: { count: l },
                                        classMix: pe.specialLabel,
                                    }),
                                n().createElement(
                                    'div',
                                    { className: pe.labelWrapper },
                                    n().createElement('div', { className: pe.labelIcon }),
                                    n().createElement(ce, { className: pe.label, text: u }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: pe.messageWrapper },
                                    n().createElement('div', { className: L }),
                                    C === tu.InBattle &&
                                        n().createElement(ce, { className: f, text: be.inBattleText() }),
                                    C === tu.InPlatoon &&
                                        n().createElement(ce, { className: f, text: be.inPlatoonText() }),
                                    C === tu.Unsuitable &&
                                        n().createElement(ce, { className: f, text: be.unsuitableText() }),
                                    C === tu.NoBattlesLeft &&
                                        n().createElement(ce, { className: f, text: be.noBattlesLeft() }),
                                    h && n().createElement(ce, { className: f, text: be.ticketNeededText() }),
                                ),
                                n().createElement(
                                    lu,
                                    {
                                        contentId:
                                            R.views.white_tiger.lobby.tooltips.CarouselVehicleTooltipView('resId'),
                                        args: y,
                                    },
                                    n().createElement('div', { className: pe.border }),
                                ),
                                B &&
                                    n().createElement(
                                        lu,
                                        {
                                            contentId: R.views.white_tiger.lobby.tooltips.TicketTooltipView('resId'),
                                            args: { wtVehicleType: A },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: pe.quantityWrapper },
                                            n().createElement('div', {
                                                className: pe.quantityIcon,
                                                style: ge(A, de.x16),
                                            }),
                                            n().createElement(ce, { className: pe.quantity, text: nu(t, 999) }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ve = (0, a.memo)(({ items: u = [] }) => {
                        const e = T().mediaSize,
                            t = e === v.ExtraLarge || e === v.Large,
                            a = p()('CarouselList_cardWrapper_7f', t && 'CarouselList_cardWrapper__large_2a');
                        return n().createElement(
                            'div',
                            { className: 'CarouselList_base_df' },
                            u.map(({ value: u }, e) =>
                                n().createElement('div', { className: a, key: `tank_${e}` }, n().createElement(we, u)),
                            ),
                        );
                    }),
                    fe = 'Content_arrow_19',
                    xe = 'Content_arrow__disabled_cd',
                    Te = 'Content_arrowBorder_36',
                    Le = {
                        [v.ExtraSmall]: -188,
                        [v.Small]: -188,
                        [v.Medium]: -188,
                        [v.Large]: -228,
                        [v.ExtraLarge]: -228,
                    },
                    Se = { [v.ExtraSmall]: 4, [v.Small]: 5, [v.Medium]: 5, [v.Large]: 6, [v.ExtraLarge]: 7 },
                    Me = () => ({ transform: 'none' }),
                    ye = () => {
                        const u = $('model.tanks.items'),
                            e = T().mediaSize,
                            t = (0, a.useState)(!1),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useState)(Me),
                            s = o[0],
                            l = o[1],
                            E = u.filter((u) => u.value.wtVehicleType !== X.HUNTER),
                            A = u.filter((u) => u.value.wtVehicleType === X.HUNTER),
                            F = (0, a.useCallback)(() => {
                                (ru(R.sounds.tank_selection()), i((u) => !u));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = r
                                ? { transform: `translateX(${(E.length + A.length - Se[e]) * Le[e]}rem)` }
                                : { transform: 'none' };
                            l(u);
                        }, [r, E.length, A.length, e]);
                        const c = (0, a.useCallback)(() => {
                                ru(R.sounds.carousel());
                            }, []),
                            _ = p()(fe, 'Content_arrow__left_5a', !r && xe),
                            D = p()(fe, 'Content_arrow__right_13', r && xe),
                            m =
                                e === v.ExtraSmall ||
                                (e === v.Small && E.length >= 1) ||
                                (e === v.Medium && E.length >= 1) ||
                                (e === v.Large && E.length > 2);
                        return n().createElement(
                            'div',
                            { className: 'Content_base_aa' },
                            n().createElement(
                                'div',
                                { className: 'Content_wrapper_43' },
                                m &&
                                    n().createElement(
                                        'div',
                                        { className: _, onClick: F, onMouseEnter: c },
                                        n().createElement('div', { className: Te }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: 'Content_carouselBodyWrapper_5c' },
                                    n().createElement(
                                        'div',
                                        { className: 'Content_carouselBody_b0', style: s },
                                        n().createElement(ve, { items: E }),
                                        n().createElement(
                                            'div',
                                            { className: 'Content_devider_e5' },
                                            n().createElement('div', { className: 'Content_deviderContent_c5' }),
                                        ),
                                        n().createElement(ve, { items: A }),
                                    ),
                                ),
                                m &&
                                    n().createElement(
                                        'div',
                                        { className: D, onClick: F, onMouseEnter: c },
                                        n().createElement('div', { className: Te }),
                                    ),
                            ),
                        );
                    },
                    ke = () => {
                        const u = $('model.status'),
                            e = u.icon,
                            t = u.title,
                            r = (0, a.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]);
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement('div', { className: 'VehicleName_titleIcon_ff', style: r }),
                            n().createElement('div', { className: 'VehicleName_title_52' }, t),
                        );
                    },
                    Oe = {
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
                let Re, Ne;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Re || (Re = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(Ne || (Ne = {})));
                const Pe = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: c,
                    onMouseLeave: _,
                    onClick: D,
                }) => {
                    const m = (0, a.useRef)(null),
                        d = (0, a.useState)(t),
                        B = d[0],
                        C = d[1],
                        h = (0, a.useState)(!1),
                        g = h[0],
                        b = h[1],
                        w = (0, a.useState)(!1),
                        v = w[0],
                        f = w[1],
                        x = (0, a.useCallback)(() => {
                            i || (m.current && (m.current.focus(), C(!0)));
                        }, [i]),
                        T = (0, a.useCallback)(
                            (u) => {
                                B && null !== m.current && !m.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                i || (D && D(u));
                            },
                            [i, D],
                        ),
                        S = (0, a.useCallback)(
                            (u) => {
                                i || (null !== s && ru(s), E && E(u), f(!0));
                            },
                            [i, s, E],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        y = (0, a.useCallback)(
                            (u) => {
                                i || (c && c(u), b(!1));
                            },
                            [i, c],
                        ),
                        k = (0, a.useCallback)(
                            (u) => {
                                i || (null !== l && ru(l), F && F(u), t && x(), b(!0));
                            },
                            [i, l, F, x, t],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                i || (_ && _(u), b(!1));
                            },
                            [i, _],
                        ),
                        N = p()(
                            Oe.base,
                            Oe[`base__${r}`],
                            {
                                [Oe.base__disabled]: i,
                                [Oe[`base__${e}`]]: e,
                                [Oe.base__focus]: B,
                                [Oe.base__highlightActive]: g,
                                [Oe.base__firstHover]: v,
                            },
                            o,
                        ),
                        P = p()(Oe.state, Oe.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: m,
                                className: N,
                                onMouseEnter: S,
                                onMouseMove: M,
                                onMouseUp: y,
                                onMouseDown: k,
                                onMouseLeave: O,
                                onClick: L,
                            },
                            r !== Re.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Oe.back }),
                                    n().createElement('span', { className: Oe.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: P },
                                n().createElement('span', { className: Oe.stateDisabled }),
                                n().createElement('span', { className: Oe.stateHighlightHover }),
                                n().createElement('span', { className: Oe.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Pe.defaultProps = { type: Re.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const He = (0, a.memo)(Pe),
                    Ie = 'ChangeVehiclePanel_button_b6',
                    We = R.strings.event.WTEventsTicketMessageView,
                    Ge = (0, a.memo)(({ wtVehicleType: u, onBuyTicket: e, onOpenTasks: t }) => {
                        const r = T().mediaSize,
                            i = (0, a.useCallback)(() => {
                                e();
                            }, [e]),
                            o = (0, a.useCallback)(() => {
                                t();
                            }, [t]),
                            s = r === v.Large || r === v.ExtraLarge ? de.x80 : de.x48,
                            l = R.strings.white_tiger.bossNameAlt.capital.$dyn(u);
                        return n().createElement(
                            'div',
                            { className: 'ChangeVehiclePanel_base_a6' },
                            n().createElement(
                                'div',
                                { className: 'ChangeVehiclePanel_titleWrapper_27' },
                                n().createElement(ke, null),
                            ),
                            n().createElement(
                                'div',
                                { className: 'ChangeVehiclePanel_descriptionWrapper_34' },
                                n().createElement(
                                    lu,
                                    {
                                        contentId: R.views.white_tiger.lobby.tooltips.TicketTooltipView('resId'),
                                        args: { wtVehicleType: u },
                                    },
                                    n().createElement('div', {
                                        className: 'ChangeVehiclePanel_descriptionIcon_d2',
                                        style: ge(u, s),
                                    }),
                                ),
                                n().createElement(ce, {
                                    className: 'ChangeVehiclePanel_description_a3',
                                    text: We.boss.description(),
                                    format: { binding: { boss: l } },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'ChangeVehiclePanel_buttonHolder_43' },
                                n().createElement(
                                    He,
                                    { type: Re.primary, size: Ne.small, onClick: o, mixClass: Ie },
                                    We.taskText(),
                                ),
                                n().createElement(
                                    He,
                                    { type: Re.main, size: Ne.small, onClick: i, mixClass: Ie },
                                    We.buyText(),
                                ),
                            ),
                        );
                    }),
                    Ue = (0, a.memo)(({ icon: u, id: e, tooltipId: t, infiniteIcon: r }) => {
                        const i = (0, a.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            o = (0, a.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]),
                            s = (0, a.useMemo)(() => {
                                const u = { id: e, tooltipId: t };
                                return '' === t
                                    ? {
                                          args: u,
                                          contentId: R.views.white_tiger.lobby.tooltips.AmmunitionTooltipView('resId'),
                                      }
                                    : { args: u };
                            }, [e, t]);
                        return n().createElement(
                            'div',
                            { className: 'AmmunitionIcon_base_04' },
                            n().createElement(
                                Bu,
                                { tooltipArgs: s },
                                n().createElement('div', { className: 'AmmunitionIcon_icon_ae', style: i }),
                            ),
                            r && n().createElement('div', { className: 'AmmunitionIcon_infinity_45', style: o }),
                        );
                    });
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ve = () => {
                        const u = $('model.equipment');
                        return n().createElement(
                            'div',
                            { className: 'AmmunitionPanel_base_73' },
                            u.items.map(
                                (u, e) =>
                                    n().createElement(
                                        'div',
                                        { className: 'AmmunitionPanel_group_51', key: e },
                                        u.value.group.items.map((u) =>
                                            n().createElement(Ue, je({}, u.value, { key: u.value.id })),
                                        ),
                                    ),
                                [],
                            ),
                        );
                    },
                    $e = () => {
                        const u = $('model.status'),
                            e = u.onBuyTicket,
                            t = u.onOpenTasks,
                            a = u.isHunter,
                            r = u.isSpecial,
                            i = u.quantity,
                            o = u.wtVehicleType,
                            s = au(a, r);
                        return -1 === i && s === eu.CommonBoss
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: 'Status_base_94' },
                                  0 === i && s === eu.CommonBoss
                                      ? n().createElement(Ge, { wtVehicleType: o, onBuyTicket: e, onOpenTasks: t })
                                      : n().createElement(
                                            'div',
                                            { className: 'Status_titleWrapper_7b' },
                                            n().createElement(
                                                'div',
                                                { className: 'Status_vehicleNameWrapper_29' },
                                                n().createElement(ke, null),
                                            ),
                                            n().createElement(Ve, null),
                                        ),
                              );
                    },
                    Xe = () => {
                        const u = $('model.tanks.items'),
                            e = $('model.status').wtVehicleType,
                            t = e === X.HUNTER,
                            r = e === X.BOSS_SPECIAL,
                            i = T().mediaSize,
                            o = u.length,
                            l = au(t, r),
                            E = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(
                                () =>
                                    ((u) => {
                                        let e,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    ((t = null),
                                                        (e = (() => {
                                                            if (E.current) {
                                                                const u = E.current.getBoundingClientRect(),
                                                                    e = i >= v.Large,
                                                                    t = i === v.ExtraSmall,
                                                                    a = s.O.view.remToPx(e ? uu.Large : uu.Small),
                                                                    n = s.O.view.pxToRem(a - u.height);
                                                                s.O.view.setSidePaddingsRem({
                                                                    left: 0,
                                                                    right: t ? 140 : 0,
                                                                    top: n,
                                                                    bottom: 0,
                                                                });
                                                            }
                                                        })()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                                            }
                                        );
                                    })(),
                                [o, l, i],
                            ),
                            n().createElement(
                                'div',
                                { ref: E, className: 'App_base_e4' },
                                n().createElement($e, null),
                                n().createElement(ye, null),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(P, null, n().createElement(Xe, null)),
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
            var u = { 91: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7856));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
