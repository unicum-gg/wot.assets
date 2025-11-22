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
                (t.r(e), t.d(e, { mouse: () => o, onResize: () => n }));
                var r = t(2472),
                    a = t(1176);
                const n = (0, r.E)('clientResized'),
                    i = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const o = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${e}`,
                                        o = i[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(n, s),
                                                (u.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((u.enabled = !1), r());
                        },
                        enable() {
                            ((u.enabled = !0), r());
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    }));
                var r = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(u = 'px') {
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
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var r = t(5959);
                const a = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
                var r = t(2472);
                const a = {
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => A,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    }));
                var r = t(3722),
                    a = t(6112),
                    n = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
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
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function B(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
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
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : n.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const r = ['args'];
                const a = 2,
                    n = 16,
                    i = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(n, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, a;
                (t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(a || (a = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(u, t, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", u),
                            n
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const n = a;
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
                t.d(e, { Sw: () => n.Z, B0: () => s, ry: () => C });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                const a = r;
                var n = t(1358);
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
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    _ = t(3138);
                const m = ['args'];
                function F(u, e, t, r, a, n, i) {
                    try {
                        var o = u[n](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, a);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (r, a) {
                                        var n = u.apply(e, t);
                                        function i(u) {
                                            F(n, r, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            F(n, r, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => B(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var h = t(7572);
                const b = a.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, a = R.invalid('resId'), n) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                d = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(E) + i.y,
                                    width: _.O.view.pxToRem(c),
                                    height: _.O.view.pxToRem(A),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: D(d),
                                on: !0,
                                args: n,
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
                        handleViewEvent: B,
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
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const a = Object.prototype.toString.call(e[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < a.length; e++) t[r].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            6280: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    a = t.n(r);
                const n = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(u, e, t) {
                    const r = (function (u, e) {
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
                        a = (function (u, e) {
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
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(s || (s = {}));
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    A = E.height,
                    d = Object.assign({ width: c, height: A }, l(c, A, o)),
                    _ = (0, r.createContext)(d),
                    m = ['children'];
                const F = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, m);
                    const a = (0, r.useContext)(_),
                        i = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        E = a.extraSmall,
                        c = a.extraLargeWidth,
                        A = a.largeWidth,
                        d = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        B = a.largeHeight,
                        g = a.mediumHeight,
                        p = a.smallHeight,
                        h = a.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return n(e, t, b);
                        if (t.largeWidth && A) return n(e, t, b);
                        if (t.mediumWidth && d) return n(e, t, b);
                        if (t.smallWidth && F) return n(e, t, b);
                        if (t.extraSmallWidth && D) return n(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                };
                (0, r.memo)(F);
                const D = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(_),
                            t = (0, r.useState)(e),
                            n = t[0],
                            s = t[1],
                            E = (0, r.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    r = i.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: r }, l(t, r, o)));
                            }, []);
                        (D(() => {
                            engine.on('clientResized', E);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', E), [E]));
                        const c = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(_.Provider, { value: c }, u);
                    });
                var B = t(6483),
                    g = t.n(B),
                    p = t(926),
                    h = t.n(p);
                let b, f, v;
                (!(function (u) {
                    ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const w = () => {
                        const u = (0, r.useContext)(_),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
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
                            n = ((u) => {
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
                                        return v.ExtraLarge;
                                    case u.largeHeight:
                                        return v.Large;
                                    case u.mediumHeight:
                                        return v.Medium;
                                    case u.smallHeight:
                                        return v.Small;
                                    case u.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, S);
                        const n = w(),
                            i = n.mediaWidth,
                            o = n.mediaHeight,
                            s = n.mediaSize;
                        return a().createElement('div', y({ className: g()(t, x[i], M[o], k[s]) }, r), e);
                    },
                    P = ['children'];
                const T = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, P);
                    return a().createElement(C, null, a().createElement(L, t, e));
                };
                var O = t(493),
                    N = t.n(O);
                let I;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(I || (I = {}));
                const H = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    W = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    G = (u, e, t = I.left) => u.split(e).reduce(t === I.left ? H : W, []),
                    U = (() => {
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
                    j = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Q = (u, e = I.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return j.includes(t)
                            ? U(u)
                            : ((u, e = I.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = u.replace(/&nbsp;/g, ' ');
                                  return (G(a, /( )/, e).forEach((u) => (t = t.concat(G(u, r, I.left)))), t);
                              })(u, e);
                    };
                let $;
                !(function (u) {
                    ((u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year'));
                })($ || ($ = {}));
                var z = t(4179);
                Date.now();
                const X = () => {
                    const u = i.O.view.getSize('rem'),
                        e = (0, r.useState)({ height: u.height, width: u.width }),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, r.useEffect)(() => {
                            const u = (u) => {
                                a(u);
                            };
                            return (
                                engine.on('screenResized', u),
                                () => {
                                    engine.off('screenResized', u);
                                }
                            );
                        }, []),
                        t
                    );
                };
                z.Sw.instance;
                let q;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(q || (q = {}));
                z.Sw.instance;
                function V(u) {
                    engine.call('PlaySound', u);
                }
                const K = {
                    playHighlight() {
                        V('highlight');
                    },
                    playClick() {
                        V('play');
                    },
                    playYes() {
                        V('yes1');
                    },
                };
                var Y = t(3403);
                let Z;
                !(function (u) {
                    ((u[(u.NonSet = 0)] = 'NonSet'),
                        (u[(u.Debug = 10)] = 'Debug'),
                        (u[(u.Info = 20)] = 'Info'),
                        (u[(u.Warning = 30)] = 'Warning'));
                })(Z || (Z = {}));
                let J;
                !(function (u) {
                    ((u.Click = 'click'), (u.KeyDown = 'keydown'));
                })(J || (J = {}));
                const uu = 'metrics',
                    eu = ({ partnerID: u, item: e, parentScreen: t, itemState: r, info: a }) => ({
                        item: e,
                        partnerID: u || null,
                        parent_screen: t || null,
                        item_state: r || null,
                        additional_info: a || null,
                    }),
                    tu = (u, e) => {
                        const t = (0, r.useCallback)(
                            (t, r = Z.Info, a) => {
                                (a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: u,
                                            group: e,
                                            action: t,
                                            logLevel: r,
                                            params: JSON.stringify(a),
                                        }));
                            },
                            [u, e],
                        );
                        return (u, e, r) => t(u, e, r);
                    },
                    ru = (u, e) => {
                        const t = tu(u, e),
                            a = (0, r.useRef)([]),
                            n = (0, r.useCallback)(
                                (u, e, r) => {
                                    u && !a.current.includes(u) && (a.current.push(u), t(u, e, r));
                                },
                                [a, t],
                            );
                        return [
                            (u, e, t) => n(u, e, t),
                            () => {
                                a.current = [];
                            },
                        ];
                    };
                let au, nu, iu, ou, su, lu, Eu, cu;
                (!(function (u) {
                    ((u.Hangar = 'hangar'), (u.DailyQuestsView = 'dailyQuestsView'));
                })(au || (au = {})),
                    (function (u) {
                        ((u.PlayStreakWidget = 'play_streak_widget'), (u.PlayStreakTab = 'play_streak_tab'));
                    })(nu || (nu = {})),
                    (function (u) {
                        u.Click = 'click';
                    })(iu || (iu = {})),
                    (function (u) {
                        ((u.Init = 'init'),
                            (u.Appear = 'appear'),
                            (u.Progress = 'progress'),
                            (u.ForceComplete = 'force-complete'),
                            (u.Complete = 'complete'),
                            (u.CompleteEnd = 'complete-end'),
                            (u.ChangeIcon = 'change-icon'),
                            (u.ChangePremiumState = 'change-premium-state'),
                            (u.ForceDisappear = 'force-disappear'),
                            (u.Disappear = 'disappear'));
                    })(ou || (ou = {})),
                    (function (u) {
                        ((u.Micro = 'micro'), (u.Mini = 'mini'), (u.Normal = 'normal'));
                    })(su || (su = {})),
                    (function (u) {
                        ((u[(u.Micro = 215)] = 'Micro'),
                            (u[(u.Mini = 260)] = 'Mini'),
                            (u[(u.Normal = 340)] = 'Normal'));
                    })(lu || (lu = {})),
                    (function (u) {
                        ((u[(u.Mini = 65)] = 'Mini'), (u[(u.Normal = 186)] = 'Normal'));
                    })(Eu || (Eu = {})),
                    (function (u) {
                        ((u[(u.None = 0)] = 'None'), (u[(u.List = 1)] = 'List'));
                    })(cu || (cu = {})));
                const Au = (u, e, t) =>
                        t
                            ? { backgroundImage: "url('R.images.gui.maps.icons.daily.widget.lock')" }
                            : e
                              ? { backgroundImage: "url('R.images.gui.maps.icons.daily.widget.completed_icon')" }
                              : { backgroundImage: `url(${R.images.gui.maps.icons.daily.icons.$dyn(`c_32_${u}`)})` },
                    du = (u) => u.map((u) => u.currentProgress).join('-');
                function _u() {
                    return !1;
                }
                console.log;
                var mu = t(9174);
                function Fu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return Du(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Du(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Du(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Cu = (u) => (0 === u ? window : window.subViews.get(u));
                function Bu(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                var gu = t(3946);
                const pu = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: o, children: s, mocks: l }) {
                                const E = (0, r.useRef)([]),
                                    c = (t, r, a) => {
                                        var n;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Cu,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? a.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = a.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const a = t(e),
                                                        n = r.split('.').reduce((u, e) => u[e], a);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const s = 'string' == typeof n ? `${r}.${n}` : r,
                                                            l = i.O.view.addModelObserver(s, e, !0);
                                                        return (a.set(l, t), u && t(o(n)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = Fu(a.keys()); !(u = t()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (u) => E.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : l(u),
                                                            a = mu.LO.box(r, { equals: _u });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, mu.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : l(u),
                                                            a = mu.LO.box(r, { equals: _u });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, mu.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = l(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = mu.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, mu.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                n = Object.entries(a),
                                                                i = n.reduce(
                                                                    (u, [e, t]) => ((u[t] = mu.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, mu.aD)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: A, externalModel: s, cleanup: c };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && a ? a.controls(d) : e(d),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    A = (0, r.useRef)(!1),
                                    d = (0, r.useState)(n),
                                    _ = d[0],
                                    m = d[1],
                                    F = (0, r.useState)(() => c(n, o, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        A.current ? C(c(_, o, l)) : (A.current = !0);
                                    }, [l, _, o]),
                                    (0, r.useEffect)(() => {
                                        m(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), E.current.forEach((u) => u()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    quests: u.array('quests', []),
                                    premiumQuests: u.array('premiumQuests', []),
                                    indicateCompleteQuests: u.array('indicateCompleteQuests', []),
                                    playStreak: u.object('playStreak'),
                                },
                                t = (0, gu.Om)(() => Bu(e.indicateCompleteQuests.get(), (u) => u)),
                                r = (0, gu.Om)(() => Bu(e.quests.get(), (u) => Object.assign({}, u, { groupID: 0 }))),
                                a = (0, gu.Om)(() =>
                                    Bu(e.premiumQuests.get(), (u) => Object.assign({}, u, { groupID: 1 })),
                                ),
                                n = (0, gu.Om)(() => [r(), a()]);
                            return Object.assign({}, e, {
                                computes: {
                                    getDailyQuests: r,
                                    getPremiumQuests: a,
                                    getAllQuests: n,
                                    getIndicateCompleteQuests: t,
                                },
                            });
                        },
                        ({ externalModel: u }) => ({
                            onQuest: u.createCallback((u) => ({ tabIdx: u }), 'onQuestClick'),
                            onPlayStreakClick: u.createCallbackNoArgs('onPlayStreakClick'),
                            onNyQuestsClick: u.createCallbackNoArgs('onNyQuestsClick'),
                            onDisappear: u.createCallbackNoArgs('onDisappear'),
                        }),
                    ),
                    hu = pu[0],
                    bu = pu[1];
                var fu = t(9887),
                    vu = t.n(fu);
                const wu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Su = (u) => u.includes('_') && ((u) => wu.includes(u))(u.split('_').at(-1)),
                    yu = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    xu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (Su(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = yu.indexOf(e),
                                    i = (-1 !== n ? wu.slice(n) : [])
                                        .map((u) => a + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[a] = void 0 !== o ? o : u[a]), t);
                            }
                            const a = u[r];
                            return (
                                void 0 === a ||
                                    ((u, e) => wu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    Mu = (u, e = xu) => {
                        const t = (
                            (u, e = xu) =>
                            (t) => {
                                const n = w().mediaSize,
                                    i = (0, r.useMemo)(() => e(t, n), [t, n]);
                                return a().createElement(u, i);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => Su(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    },
                    ku = {
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
                    Lu = [
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
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                Object.keys(vu());
                const Pu = {
                        XL: { mt: ku.mt__XL, mr: ku.mr__XL, mb: ku.mb__XL, ml: ku.ml__XL },
                        LG: { mt: ku.mt__LG, mr: ku.mr__LG, mb: ku.mb__LG, ml: ku.ml__LG },
                        MDp: { mt: ku.mt__MDp, mr: ku.mr__MDp, mb: ku.mb__MDp, ml: ku.ml__MDp },
                        MD: { mt: ku.mt__MD, mr: ku.mr__MD, mb: ku.mb__MD, ml: ku.ml__MD },
                        SMp: { mt: ku.mt__SMp, mr: ku.mr__SMp, mb: ku.mb__SMp, ml: ku.ml__SMp },
                        SM: { mt: ku.mt__SM, mr: ku.mr__SM, mb: ku.mb__SM, ml: ku.ml__SM },
                        XS: { mt: ku.mt__XS, mr: ku.mr__XS, mb: ku.mb__XS, ml: ku.ml__XS },
                    },
                    Tu = (Object.keys(Pu), ['mt', 'mr', 'mb', 'ml']),
                    Ou = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Nu = Mu((u) => {
                        let e = u.className,
                            t = u.width,
                            n = u.height,
                            i = u.m,
                            o = u.mt,
                            s = void 0 === o ? i : o,
                            l = u.mr,
                            E = void 0 === l ? i : l,
                            c = u.mb,
                            A = void 0 === c ? i : c,
                            d = u.ml,
                            _ = void 0 === d ? i : d,
                            m = u.column,
                            F = u.row,
                            D = u.flexDirection,
                            C = void 0 === D ? (m ? 'column' : F && 'row') || void 0 : D,
                            B = u.flexStart,
                            p = u.center,
                            h = u.flexEnd,
                            b = u.spaceBetween,
                            f = u.spaceAround,
                            v = u.justifyContent,
                            w =
                                void 0 === v
                                    ? (B ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            S = u.alignItems,
                            y = void 0 === S ? (B ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : S,
                            x = u.alignSelf,
                            M = u.wrap,
                            k = u.flexWrap,
                            L = void 0 === k ? (M ? 'wrap' : void 0) : k,
                            R = u.grow,
                            P = u.shrink,
                            T = u.flex,
                            O = void 0 === T ? (R || P ? `${R ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : T,
                            N = u.style,
                            I = u.children,
                            H = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Lu);
                        const W = (0, r.useMemo)(() => {
                                const u = { mt: s, mr: E, mb: A, ml: _ },
                                    e = ((u) =>
                                        Tu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(Pu[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        Tu.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[Ou[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, N, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: O,
                                        alignSelf: x,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, n, s, E, A, _, N, O, x, C, L, w, y]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return a().createElement('div', Ru({ className: g()(ku.base, ...U, e), style: G }, H), I);
                    }),
                    Iu = 'FormatText_base_d0',
                    Hu = ({ binding: u, text: e = '', classMix: t, alignment: n = I.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      a().createElement(
                                          'div',
                                          { className: g()(Iu, t), key: `${e}-${i}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : Q(u, e))))(e, n, u).map((u, e) =>
                                              a().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Wu = t(3532),
                    Gu = t.n(Wu);
                const Uu = {
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
                    ju = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                Object.keys(vu());
                const $u = Object.keys(Gu()),
                    zu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Xu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    qu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Vu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Ku =
                        (Object.keys(Vu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': zu,
                            'heading-H36': zu,
                            'heading-H28': Xu,
                            'heading-H24': Xu,
                            'heading-H24R': Xu,
                            'heading-H22': Xu,
                            'heading-H20R': Xu,
                            'heading-H18': Xu,
                            'heading-H15': qu,
                            'heading-H14': qu,
                            'paragraph-P24': Xu,
                            'paragraph-P18': Xu,
                            'paragraph-P16': Xu,
                            'paragraph-P14': qu,
                            'paragraph-P12': qu,
                            'paragraph-P10': qu,
                        }),
                    Yu =
                        (Object.keys(Ku),
                        (u) =>
                            u
                                ? ((u) => $u.includes(u))(u)
                                    ? { colorClassName: Uu[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Zu = Mu((u) => {
                        let e = u.text,
                            t = u.variant,
                            n = u.className,
                            i = u.color,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            E = u.mr,
                            c = void 0 === E ? o : E,
                            A = u.mb,
                            d = void 0 === A ? o : A,
                            _ = u.ml,
                            m = void 0 === _ ? o : _,
                            F = u.style,
                            D = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, ju);
                        const B = (0, r.useMemo)(() => {
                                const u = Yu(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: e };
                            }, [F, i]),
                            p = B.computedStyle,
                            h = B.colorClassName;
                        return a().createElement(
                            Nu,
                            Qu(
                                {
                                    className: g()(Uu.base, t && Uu[t], h, n),
                                    style: p,
                                    mt: !0 === l ? Ku[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === c ? Ku[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === d ? Ku[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === m ? Ku[t || 'paragraph-P16'].ml : m,
                                },
                                C,
                            ),
                            void 0 !== D ? a().createElement(Hu, Qu({}, D, { text: e })) : e,
                        );
                    }),
                    Ju = [
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
                function ue(u) {
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
                const ee = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    te = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            n = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            d = u.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            m = u.isEnabled,
                            F = void 0 === m || m,
                            D = u.targetId,
                            C = void 0 === D ? 0 : D,
                            B = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Ju);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
                                () =>
                                    C ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: r }
                                        );
                                    })().resId,
                                [C],
                            ),
                            f = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ee(t, _, { isMouseEvent: !0, on: !0, arguments: ue(a) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, _, a, b, B]),
                            v = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        ee(t, _, { on: !1 }, b),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, b, g]),
                            w = (0, r.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return F
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, E ? 100 : 400)),
                                                      n && n(u),
                                                      S && S(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (v(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === A && v(), null == s || s(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === A && v(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var S;
                    },
                    re = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const ne = R.views.common.tooltip_window.simple_tooltip_content,
                    ie = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, re);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, i, s]);
                        return a().createElement(
                            te,
                            ae(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? ne.SimpleTooltipHtmlContent('resId') : ne.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    oe = {
                        base: 'NyQuestsCard_base_11',
                        base__mini: 'NyQuestsCard_base__mini_e0',
                        base__micro: 'NyQuestsCard_base__micro_12',
                        base__complete: 'NyQuestsCard_base__complete_16',
                        base__disabled: 'NyQuestsCard_base__disabled_af',
                        border: 'NyQuestsCard_border_87',
                        background: 'NyQuestsCard_background_ae',
                        background__decoratorMicro: 'NyQuestsCard_background__decoratorMicro_4d',
                        background__decoratorNormal: 'NyQuestsCard_background__decoratorNormal_80',
                        hoverBg: 'NyQuestsCard_hoverBg_d2',
                        contentWrapper: 'NyQuestsCard_contentWrapper_f0',
                        content: 'NyQuestsCard_content_53',
                        iconWrapper: 'NyQuestsCard_iconWrapper_25',
                        icon: 'NyQuestsCard_icon_ac',
                        icon__complete: 'NyQuestsCard_icon__complete_b3',
                        divider: 'NyQuestsCard_divider_38',
                        description: 'NyQuestsCard_description_ef',
                        missionProgress: 'NyQuestsCard_missionProgress_27',
                    },
                    se = R.strings.quests.dailyWidget.nyCard,
                    le = R.images.gui.maps.icons.daily.newYear.dailyWidget,
                    Ee = (0, r.memo)(
                        ({
                            cardType: u,
                            isShowBlocked: e = !1,
                            isShowComplete: t = !1,
                            handleQuestSelect: r,
                            onMouseEnter: n,
                        }) => {
                            const i = u === su.Micro,
                                o = u === su.Normal,
                                s = g()(oe.base, oe[`base__${u}`], t && oe.base__complete, e && oe.base__disabled),
                                l = t ? se.tooltip.body.done() : se.tooltip.body.default(),
                                E = e ? se.tooltip.body.disabled() : l;
                            return a().createElement(
                                ie,
                                { header: se.tooltip.header(), body: E },
                                a().createElement(
                                    'div',
                                    { className: s, onClick: r, onMouseEnter: n },
                                    a().createElement('div', { className: oe.background }),
                                    a().createElement('div', {
                                        className: g()(
                                            oe.background,
                                            i && oe.background__decoratorMicro,
                                            o && oe.background__decoratorNormal,
                                        ),
                                    }),
                                    a().createElement('div', { className: oe.hoverBg }),
                                    a().createElement(
                                        'div',
                                        { className: oe.iconWrapper },
                                        t
                                            ? a().createElement('div', { className: g()(oe.icon, oe.icon__complete) })
                                            : a().createElement('div', {
                                                  className: g()(oe.icon, oe.icon__default),
                                                  style: { backgroundImage: `url(${le.icon()})` },
                                              }),
                                    ),
                                    o &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('div', { className: oe.divider }),
                                            a().createElement(
                                                'div',
                                                { className: oe.contentWrapper },
                                                a().createElement(
                                                    'div',
                                                    { className: oe.content },
                                                    a().createElement(Zu, {
                                                        className: oe.description,
                                                        text: se.title(),
                                                    }),
                                                ),
                                            ),
                                        ),
                                ),
                            );
                        },
                    ),
                    ce = 'Progress_base_1a',
                    Ae = 'Progress_base__completed_99',
                    de = 'Progress_base__disabled_94',
                    _e = 'Progress_currentProgress_a5',
                    me = 'Progress_maxProgress_27',
                    Fe = (0, r.memo)(
                        ({ current: u, max: e, completed: t, disabled: r = !1, classNames: n, className: i }) =>
                            a().createElement(Zu, {
                                text: R.strings.quests.dailyWidget.progress(),
                                className: g()(ce, t && Ae, r && de, i),
                                format: {
                                    binding: {
                                        currentProgress: a().createElement(Zu, {
                                            text: String(u),
                                            className: g()(_e, null == n ? void 0 : n.currentProgress),
                                        }),
                                        maxProgress: a().createElement(Zu, {
                                            text: String(e),
                                            className: g()(me, null == n ? void 0 : n.maxProgress),
                                        }),
                                    },
                                },
                            }),
                    ),
                    De = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ce, Be;
                (!(function (u) {
                    ((u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'), (u.Default = 'big'));
                })(Ce || (Ce = {})),
                    (function (u) {
                        ((u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing'));
                    })(Be || (Be = {})));
                const ge = ({ size: u = Ce.Default, classMix: e }) =>
                        a().createElement('div', { className: g()(De.background, De[`background__${u}`], e) }),
                    pe = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    he = ({ size: u }) => {
                        const e = g()(pe.base, pe[`base__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    be = {
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
                    fe = (0, r.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: r, isComplete: n, withoutBounce: i }) => {
                            const o = g()(
                                    be.base,
                                    be[`base__${u}`],
                                    t && be.base__disabled,
                                    n && be.base__finished,
                                    i && be.base__withoutBounce,
                                ),
                                s = !t && !n;
                            return a().createElement(
                                'div',
                                { className: o, style: r, ref: e },
                                a().createElement('div', { className: be.pattern }),
                                a().createElement('div', { className: be.gradient }),
                                s && a().createElement(he, { size: u }),
                            );
                        },
                    ),
                    ve = (u, e) => {
                        let t;
                        const r = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                let we, Se;
                (!(function (u) {
                    ((u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End'));
                })(we || (we = {})),
                    (function (u) {
                        ((u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End'));
                    })(Se || (Se = {})));
                const ye = 'ProgressBarDeltaGrow_base_7e',
                    xe = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Me = 'ProgressBarDeltaGrow_glow_68',
                    ke = (u) => (u ? { left: 0 } : { right: 0 }),
                    Le = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    Re = (u) => ({ transitionDuration: `${u}ms` }),
                    Pe = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: E,
                        }) => {
                            const c = o < n,
                                A = (0, r.useState)(we.Idle),
                                d = A[0],
                                _ = A[1],
                                m = d === we.End,
                                F = d === we.Idle,
                                D = d === we.Grow,
                                C = d === we.Shrink,
                                B = (0, r.useCallback)(
                                    (u) => {
                                        (_(u), l && l(u));
                                    },
                                    [l],
                                ),
                                p = (0, r.useCallback)(
                                    (u, e) =>
                                        ve(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(we.Grow, e)
                                        : D
                                          ? p(we.Shrink, u)
                                          : C
                                            ? p(we.End, u)
                                            : void (m && s && s());
                            }, [p, t, m, D, F, C, s, e, u]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Re(u), ke(c)), [c, u]),
                                b = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Re(u), ke(c)), [c, u]),
                                f = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Le(c, n), Re(u)), [n, c, u]),
                                v = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, Le(c, n), Re(u)),
                                    [n, c, o, u],
                                );
                            if (m) return null;
                            const w = g()(ye, E, c && 0 === o && xe);
                            return a().createElement(
                                'div',
                                { style: F ? f : v, className: w },
                                a().createElement(
                                    'div',
                                    { style: C ? b : h, className: Me },
                                    a().createElement(he, { size: i }),
                                ),
                            );
                        },
                    ),
                    Te = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: E,
                        }) => {
                            const c = u < t,
                                A = (0, r.useState)(!1),
                                d = A[0],
                                _ = A[1],
                                m = (0, r.useCallback)(
                                    (u) => {
                                        (u === we.Shrink && _(!0), E && E(u));
                                    },
                                    [E],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(fe, {
                                    size: e,
                                    lineRef: n,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: c && 0 === u,
                                    baseStyles: d ? D : F,
                                }),
                                t >= 0 &&
                                    a().createElement(Pe, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: m,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    Oe = 'ProgressBarDeltaSimple_base_6c',
                    Ne = 'ProgressBarDeltaSimple_delta_99',
                    Ie = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const E = o < n,
                                c = (0, r.useState)(Se.Idle),
                                A = c[0],
                                d = c[1],
                                _ = A === Se.In,
                                m = A === Se.End,
                                F = A === Se.Idle,
                                D = (0, r.useCallback)(
                                    (u) => {
                                        (d(u), l && l(u));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (F && !t) {
                                    return ve(() => {
                                        D(Se.In);
                                    }, e);
                                }
                            }, [D, t, F, e]),
                                (0, r.useEffect)(() => {
                                    if (_) {
                                        return ve(() => {
                                            (s && s(), D(Se.End));
                                        }, u + e);
                                    }
                                }, [D, _, s, e, u]));
                            const C = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${E ? o : n}%` }),
                                    [n, E, o],
                                );
                            return m
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Oe, style: g },
                                      a().createElement(
                                          'div',
                                          { style: F ? C : B, className: Ne },
                                          a().createElement(he, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    He = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: E,
                        }) => {
                            const c = (0, r.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(fe, {
                                    size: e,
                                    lineRef: n,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    a().createElement(Ie, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: l,
                                        onEndAnimation: E,
                                    }),
                            );
                        },
                    ),
                    We = ['onComplete', 'onEndAnimation'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ue = (0, r.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, We);
                        const i = (0, r.useState)(!1),
                            o = i[0],
                            s = i[1],
                            l = (0, r.useCallback)(() => {
                                const u = 100 === n.to;
                                (u !== o && s(u), u && e && e(), t && t());
                            }, [o, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case Be.Simple:
                                return a().createElement(He, Ge({}, n, { onEndAnimation: l, isComplete: o }));
                            case Be.Growing:
                                return a().createElement(Te, Ge({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    je = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: i }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, r.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(fe, { size: u, disabled: n, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    Qe = ['onEndAnimation'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const ze = (0, r.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, Qe);
                    const n = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            ((n.current.from = void 0), e && e());
                        }, [e]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        a().createElement(Ue, $e({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                const qe = (0, r.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (n === e)
                                return a().createElement(je, {
                                    key: `${n}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const E = {
                                from: n,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: r,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? a().createElement(ze, E)
                                : a().createElement(Ue, Xe({ key: `${n}-${e}` }, E));
                        },
                    ),
                    Ve = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    Ke = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Ye = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (Ke(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    Ze = {
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
                    Je = {
                        freezed: !1,
                        withStack: !1,
                        type: Be.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ut = (0, r.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Ze,
                            size: t = Ce.Default,
                            animationSettings: n = Je,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: s,
                            value: l,
                            deltaFrom: E,
                            lineRef: c,
                            onChangeAnimationState: A,
                            onEndAnimation: d,
                            onComplete: _,
                        }) => {
                            const m = ((u, e, t) =>
                                (0, r.useMemo)(() => {
                                    const r = (Ke(0, e, u) / e) * 100;
                                    return { value: r, deltaFrom: Ye(r, e, t) };
                                }, [t, e, u]))(l, u, E);
                            return a().createElement(
                                'div',
                                { className: g()(De.base, De[`base__${t}`]), style: Ve(e) },
                                !o && a().createElement(ge, { size: t, classMix: s }),
                                a().createElement(qe, {
                                    size: t,
                                    lineRef: c,
                                    disabled: i,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: d,
                                    onChangeAnimationState: A,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    et = 500,
                    tt =
                        (Object.assign({}, Je, {
                            line: Object.assign({}, Je.line, { delay: et }),
                            delta: Object.assign({}, Je.delta, { delay: et }),
                        }),
                        {
                            APPEAR_DURATION: { [su.Normal]: et, [su.Mini]: 250 },
                            PROGRESS_BAR_DURATION: { [su.Normal]: et, [su.Mini]: 250 },
                        }),
                    rt = 1e3,
                    at = 2e3,
                    nt = 2200,
                    it = 300,
                    ot = {
                        base: 'PlayStreakCard_base_c4',
                        base__mini: 'PlayStreakCard_base__mini_b1',
                        base__micro: 'PlayStreakCard_base__micro_a1',
                        base__complete: 'PlayStreakCard_base__complete_3d',
                        base__appearEnd: 'PlayStreakCard_base__appearEnd_cf',
                        base__disappearEnd: 'PlayStreakCard_base__disappearEnd_0d',
                        border: 'PlayStreakCard_border_01',
                        background: 'PlayStreakCard_background_25',
                        showAnim: 'PlayStreakCard_showAnim_26',
                        background__blinkComplete: 'PlayStreakCard_background__blinkComplete_25',
                        backgroundBlinkComplete: 'PlayStreakCard_backgroundBlinkComplete_9d',
                        background__blinkReady: 'PlayStreakCard_background__blinkReady_83',
                        backgroundBlinkReady: 'PlayStreakCard_backgroundBlinkReady_c5',
                        hoverBg: 'PlayStreakCard_hoverBg_99',
                        contentWrapper: 'PlayStreakCard_contentWrapper_4a',
                        content: 'PlayStreakCard_content_0f',
                        base__progress: 'PlayStreakCard_base__progress_6e',
                        iconWrapper: 'PlayStreakCard_iconWrapper_e3',
                        iconWrapper__center: 'PlayStreakCard_iconWrapper__center_43',
                        iconWrapper__toggleIcon: 'PlayStreakCard_iconWrapper__toggleIcon_b4',
                        icon__default: 'PlayStreakCard_icon__default_4d',
                        hideIcon: 'PlayStreakCard_hideIcon_f5',
                        missionProgress: 'PlayStreakCard_missionProgress_b0',
                        icon__complete: 'PlayStreakCard_icon__complete_05',
                        showIcon: 'PlayStreakCard_showIcon_10',
                        iconWrapper__completeEnd: 'PlayStreakCard_iconWrapper__completeEnd_cb',
                        showIconOpacity: 'PlayStreakCard_showIconOpacity_16',
                        hideCompleteIcon: 'PlayStreakCard_hideCompleteIcon_a1',
                        icon: 'PlayStreakCard_icon_d1',
                        total: 'PlayStreakCard_total_ee',
                        divider: 'PlayStreakCard_divider_77',
                        description: 'PlayStreakCard_description_16',
                        base__disabled: 'PlayStreakCard_base__disabled_85',
                        toggleText: 'PlayStreakCard_toggleText_c0',
                    },
                    st = R.strings.play_streak,
                    lt = R.images.gui.maps.icons.daily,
                    Et = (0, r.memo)(
                        ({
                            quest: u,
                            cardType: e,
                            isAnimationAppear: t = !0,
                            isAnimationProgress: r = !1,
                            isAnimationComplete: n = !1,
                            isAnimationDisappear: i = !1,
                            isAnimationBackgroundBlink: o = !1,
                            isShowBlocked: s = !1,
                            handleQuestSelect: l,
                            onMouseEnter: E,
                        }) => {
                            const c = u.dailyWin,
                                A = u.streakLength,
                                d = u.isFirstAppearance,
                                _ = u.isFirstAppearanceRedemptionDay,
                                m = u.isLastDayRedemption,
                                F = u.redemptionDayCount,
                                D = u.redemptionMaxDayCount,
                                C = _ || d || m,
                                B = c ? A : A + 1,
                                p = c ? D - F : D - F + 1,
                                h = s ? st.widget.content.tooltip.blocked.head() : st.widget.content.tooltip.head(),
                                b = s
                                    ? ((f = st.widget.content.tooltip.blocked.body()),
                                      (v = { redemptionMaxDayCount: D }),
                                      f.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                          const e = 0 === u.indexOf('%') ? 2 : 1;
                                          return String(v[u.slice(e, -e)]);
                                      }))
                                    : st.widget.content.tooltip.body();
                            var f, v;
                            const w = e === su.Normal,
                                S = g()(
                                    ot.base,
                                    ot[`base__${e}`],
                                    C && ot.showAnim,
                                    n && ot.base__complete,
                                    t && ot.base__appearEnd,
                                    i && ot.base__disappearEnd,
                                    r && ot.base__progress,
                                ),
                                y = g()(
                                    ot.iconWrapper,
                                    ot.iconWrapper__center,
                                    r && ot.iconWrapper__toggleIcon,
                                    !r && n && ot.iconWrapper__completeEnd,
                                ),
                                x = lt.icons.$dyn('c_32_' + (s ? 'play_streak__disable' : 'play_streak'));
                            return a().createElement(
                                ie,
                                { header: h, body: String(b) },
                                a().createElement(
                                    'div',
                                    { className: S, onClick: l, onMouseEnter: E },
                                    a().createElement('div', {
                                        className: g()(
                                            ot.background,
                                            o && ot.background__blinkReady,
                                            n && ot.background__blinkComplete,
                                        ),
                                    }),
                                    a().createElement('div', { className: ot.hoverBg }),
                                    a().createElement(
                                        'div',
                                        { className: y },
                                        a().createElement(
                                            'div',
                                            {
                                                className: g()(ot.icon, ot.icon__default),
                                                style: { backgroundImage: `url(${x})` },
                                            },
                                            !s && a().createElement('div', { className: ot.total }, B),
                                        ),
                                        a().createElement('div', { className: g()(ot.icon, ot.icon__complete) }),
                                        s &&
                                            a().createElement(Fe, {
                                                current: p,
                                                max: D,
                                                completed: !1,
                                                disabled: !1,
                                                className: ot.missionProgress,
                                            }),
                                    ),
                                    w &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('div', { className: ot.divider }),
                                            a().createElement(
                                                'div',
                                                { className: ot.contentWrapper },
                                                a().createElement(
                                                    'div',
                                                    { className: ot.content },
                                                    a().createElement(Zu, {
                                                        className: ot.description,
                                                        text:
                                                            (c && !C) || (c && C && n)
                                                                ? st.window.playStreakRewards.tab.content.complete()
                                                                : st.widget.content.quest(),
                                                        format: {
                                                            binding: {
                                                                br: a().createElement('div', {
                                                                    style: { width: '100%' },
                                                                }),
                                                            },
                                                        },
                                                    }),
                                                ),
                                            ),
                                        ),
                                ),
                            );
                        },
                    );
                function ct() {
                    const u = (0, r.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.clearTimeout(u.current);
                        }),
                        (0, r.useEffect)(() => e, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (e, t) => {
                                    (window.clearTimeout(u.current),
                                        (u.current = window.setTimeout(() => {
                                            (e(), (u.current = 0));
                                        }, t)));
                                },
                                clear: () => {
                                    (window.clearTimeout(u.current), (u.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const At = (0, r.memo)(({ quest: u, cardType: e, handleQuestSelect: t, onMouseEnter: n }) => {
                    const i = u.dailyWin,
                        o = u.isFirstAppearance,
                        s = u.isFirstAppearanceRedemptionDay,
                        l = u.isLastDayRedemption,
                        E = u.isBlocked,
                        c = u.redemptionDayCount,
                        A = u.redemptionMaxDayCount,
                        d = s || o || l,
                        _ = l || E,
                        m = i ? A - c : A - c + 1,
                        F = (0, r.useState)(!1),
                        D = F[0],
                        C = F[1],
                        B = (0, r.useState)(!1),
                        g = B[0],
                        p = B[1],
                        h = (0, r.useState)(!1),
                        b = h[0],
                        f = h[1],
                        v = (0, r.useState)(!1),
                        w = v[0],
                        S = v[1],
                        y = (0, r.useState)(!1),
                        x = y[0],
                        M = y[1],
                        k = (0, r.useState)(_),
                        L = k[0],
                        R = k[1],
                        P = ct(),
                        T = ct(),
                        O = e === su.Micro ? su.Mini : e;
                    ((0, r.useEffect)(() => (H(ou.Init), () => I()), []),
                        (0, r.useEffect)(() => {
                            i && !d && N(ou.Progress, tt.PROGRESS_BAR_DURATION[O]);
                        }, [i]),
                        (0, r.useEffect)(() => {
                            if (x)
                                return ve(() => {
                                    M(!1);
                                }, nt);
                        }, [x]));
                    const N = (u, e) => {
                            T.run(() => {
                                H(u);
                            }, e);
                        },
                        I = () => {
                            (P.isRunning && P.clear(), T.isRunning && T.clear());
                        },
                        H = (u) => {
                            I();
                            const e = it;
                            switch (u) {
                                case ou.Init:
                                    return (
                                        P.run(() => {
                                            (S(!1), C(!0));
                                        }, e),
                                        void N(ou.Appear, 2 * it)
                                    );
                                case ou.Appear:
                                    return (C(!0), void (i && N(ou.Progress, tt.PROGRESS_BAR_DURATION[O])));
                                case ou.Progress:
                                    return (p(!0), void (i && N(ou.Complete, rt)));
                                case ou.Complete:
                                    return (
                                        f(!0),
                                        C(!0),
                                        void (i && _ && m === A ? N(ou.ChangeIcon, rt) : N(ou.CompleteEnd, at))
                                    );
                                case ou.CompleteEnd:
                                    return void p(!1);
                                case ou.ChangeIcon:
                                    return (R(!1), void N(ou.CompleteEnd, at));
                            }
                        };
                    return a().createElement(Et, {
                        quest: u,
                        cardType: e,
                        isAnimationProgress: g,
                        isAnimationAppear: D,
                        isAnimationBackgroundBlink: x,
                        isAnimationComplete: b,
                        isAnimationDisappear: w,
                        isShowBlocked: L,
                        handleQuestSelect: t,
                        onMouseEnter: n,
                    });
                });
                function dt() {
                    const u = (0, r.useRef)(!0);
                    var e;
                    return (
                        (e = () => {
                            u.current = !1;
                        }),
                        (0, r.useEffect)(e, []),
                        u.current
                    );
                }
                const _t = {
                        PROGRESS_BAR_DURATION: {
                            [su.Normal]: Je.line.delay + Je.line.duration + Je.delta.delay + Je.delta.duration,
                            [su.Mini]: 0,
                        },
                    },
                    mt = 800,
                    Ft = 2e3,
                    Dt = 750,
                    Ct = 1e3,
                    Bt = 2200,
                    gt = 150,
                    pt = {
                        base: 'QuestCard_base_73',
                        base__mini: 'QuestCard_base__mini_f5',
                        base__micro: 'QuestCard_base__micro_3a',
                        base__complete: 'QuestCard_base__complete_12',
                        base__disabled: 'QuestCard_base__disabled_5c',
                        base__appearEnd: 'QuestCard_base__appearEnd_56',
                        base__disappearEnd: 'QuestCard_base__disappearEnd_c0',
                        border: 'QuestCard_border_b3',
                        background: 'QuestCard_background_cf',
                        background__blinkComplete: 'QuestCard_background__blinkComplete_9f',
                        backgroundBlinkComplete: 'QuestCard_backgroundBlinkComplete_40',
                        background__blinkReady: 'QuestCard_background__blinkReady_44',
                        backgroundBlinkReady: 'QuestCard_backgroundBlinkReady_8c',
                        hoverBg: 'QuestCard_hoverBg_41',
                        contentWrapper: 'QuestCard_contentWrapper_03',
                        divider: 'QuestCard_divider_ea',
                        content: 'QuestCard_content_5a',
                        iconWrapper: 'QuestCard_iconWrapper_ca',
                        iconWrapper__center: 'QuestCard_iconWrapper__center_22',
                        iconWrapper__completeStart: 'QuestCard_iconWrapper__completeStart_69',
                        hideIcon: 'QuestCard_hideIcon_ec',
                        iconWrapper__completeEnd: 'QuestCard_iconWrapper__completeEnd_46',
                        showIcon: 'QuestCard_showIcon_80',
                        premium: 'QuestCard_premium_80',
                        missionProgress: 'QuestCard_missionProgress_ec',
                        icon: 'QuestCard_icon_bf',
                        description: 'QuestCard_description_a7',
                        progressBar: 'QuestCard_progressBar_23',
                    },
                    ht = (0, r.memo)(
                        ({
                            quest: u,
                            cardType: e,
                            missionProgress: t,
                            isDisabledProgressbarDelta: n,
                            isMissionCompleted: i,
                            isAnimationAppear: o,
                            isAnimationProgress: s,
                            isAnimationComplete: l,
                            isAnimationDisappear: E,
                            isAnimationChangePremium: c,
                            isAnimationBackgroundBlink: A,
                            handleQuestSelect: d,
                            onMouseEnter: _,
                        }) => {
                            const m = u.description,
                                F = u.currentProgress,
                                D = u.earned,
                                C = u.hasPremium,
                                B = u.icon,
                                p = u.completed,
                                h = u.totalProgress,
                                b = u.groupID,
                                f = t[0],
                                v = t[1],
                                w = (l && p) || i,
                                S = 1 === Number(b),
                                y = (S && !C && !c && !i) || (c && C),
                                x = (0, r.useMemo)(() => {
                                    return (
                                        (e = h ? 35 : 70),
                                        (u = m).length > e ? u.slice(0, e).split(' ').slice(0, -1).join(' ') + '…' : u
                                    );
                                    var u, e;
                                }, [m, h]),
                                M = h > 0,
                                k = e === su.Normal,
                                L = Boolean(v && !w && !y),
                                P = (0, r.useCallback)(() => {
                                    d(Number(b));
                                }, [d, b]);
                            return a().createElement(
                                te,
                                {
                                    contentId: R.views.lobby.daily.tooltips.DailyQuestTooltip('resId'),
                                    args: { groupID: b },
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            pt.base,
                                            pt[`base__${e}`],
                                            y && pt.base__disabled,
                                            w && !y && pt.base__complete,
                                            o && pt.base__appearEnd,
                                            E && pt.base__disappearEnd,
                                        ),
                                        onClick: P,
                                        onMouseEnter: _,
                                    },
                                    a().createElement('div', {
                                        className: g()(
                                            pt.background,
                                            !y && A && pt.background__blinkReady,
                                            l && pt.background__blinkComplete,
                                        ),
                                    }),
                                    a().createElement('div', { className: pt.hoverBg }),
                                    a().createElement(
                                        'div',
                                        {
                                            className: g()(
                                                pt.iconWrapper,
                                                !L && pt.iconWrapper__center,
                                                (s || c) && pt.iconWrapper__completeStart,
                                                (l || A) && pt.iconWrapper__completeEnd,
                                            ),
                                        },
                                        S && a().createElement('div', { className: pt.premium }),
                                        a().createElement('div', { className: pt.icon, style: Au(B, w, y) }),
                                        L &&
                                            a().createElement(Fe, {
                                                current: f,
                                                max: v,
                                                completed: w,
                                                disabled: y,
                                                className: pt.missionProgress,
                                            }),
                                    ),
                                    k && a().createElement('div', { className: pt.divider }),
                                    k &&
                                        a().createElement(
                                            'div',
                                            { className: pt.contentWrapper },
                                            a().createElement(
                                                'div',
                                                { className: pt.content },
                                                a().createElement(Zu, { className: pt.description, text: x }),
                                                M &&
                                                    a().createElement(
                                                        a().Fragment,
                                                        null,
                                                        a().createElement(
                                                            'div',
                                                            { className: pt.progressBar },
                                                            a().createElement(ut, {
                                                                disabled: y,
                                                                size: Ce.Small,
                                                                value: o ? F : 0,
                                                                deltaFrom: n ? void 0 : F - D,
                                                                maxValue: h,
                                                            }),
                                                        ),
                                                        h &&
                                                            a().createElement(Fe, {
                                                                current: F,
                                                                max: h,
                                                                completed: s || E || w,
                                                                disabled: y,
                                                            }),
                                                    ),
                                            ),
                                        ),
                                ),
                            );
                        },
                    ),
                    bt = (0, r.memo)(
                        ({
                            position: u,
                            cardCount: e,
                            quests: t,
                            indicateCompleteQuests: n,
                            cardType: i,
                            handleQuestSelect: o,
                            onMouseEnter: s,
                        }) => {
                            const l = ((u, e) => {
                                    if (u.length <= 1) return 0;
                                    const t = u[0].isPremium ? e.slice(5) : e.slice(0, 4),
                                        r = u.findIndex((u, e) => !u.completed || t[e]);
                                    return r >= 0 ? r : u.length - 1;
                                })(t, n),
                                E = (0, r.useState)(l),
                                c = E[0],
                                A = E[1],
                                d = (0, r.useState)(!1),
                                _ = d[0],
                                m = d[1],
                                F = (0, r.useState)(!1),
                                D = F[0],
                                C = F[1],
                                B = (0, r.useState)(!1),
                                g = B[0],
                                p = B[1],
                                h = (0, r.useState)(!1),
                                b = h[0],
                                f = h[1],
                                v = (0, r.useState)(!1),
                                w = v[0],
                                S = v[1],
                                y = (0, r.useState)(!1),
                                x = y[0],
                                M = y[1],
                                k = (0, r.useState)(!1),
                                L = k[0],
                                P = k[1],
                                T = ct(),
                                O = ct(),
                                N = dt(),
                                I = (0, r.useRef)(!1),
                                H = (0, r.useRef)(t[c]),
                                W = (0, r.useRef)(''),
                                G = H.current.completed,
                                U = (0, r.useMemo)(
                                    () => ((u, e) => (u.length <= 1 ? [0, 0] : [e, u.length]))(t, c),
                                    [t, c],
                                ),
                                j = t[c].groupID && t[c].hasPremium,
                                Q = i === su.Micro ? su.Mini : i;
                            ((0, r.useEffect)(() => {
                                ((I.current = c + 1 >= t.length), (H.current = t[c]));
                            }, [t, c]),
                                (0, r.useEffect)(() => (X(ou.Init), () => z()), []),
                                (0, r.useEffect)(() => {
                                    G &&
                                        !N &&
                                        (V(R.sounds.dq_screen_quest_complete()),
                                        $(ou.Progress, _t.PROGRESS_BAR_DURATION[Q]));
                                }, [G]),
                                (0, r.useEffect)(() => {
                                    if (!N && !L)
                                        return (
                                            M(!0),
                                            ve(() => {
                                                (M(!1), S(!0));
                                            }, Ct)
                                        );
                                }, [j]),
                                (0, r.useEffect)(() => {
                                    if (w)
                                        return ve(() => {
                                            S(!1);
                                        }, Bt);
                                }, [w]),
                                (0, r.useEffect)(() => {
                                    x && j && V(R.sounds.dq_screen_quest_complete());
                                }, [x, j]));
                            const $ = (u, e) => {
                                    O.run(() => {
                                        X(u);
                                    }, e);
                                },
                                z = () => {
                                    (T.isRunning && T.clear(), O.isRunning && O.clear());
                                },
                                X = (r) => {
                                    z();
                                    const a = u * gt;
                                    switch (r) {
                                        case ou.Init:
                                            return (
                                                T.run(() => {
                                                    (m(!0), f(!1), (W.current = du(t)));
                                                }, a),
                                                H.current.completed && I.current
                                                    ? void P(!0)
                                                    : void $(ou.Appear, gt * e)
                                            );
                                        case ou.Appear:
                                            return H.current.completed && I.current
                                                ? void P(!0)
                                                : (m(!0),
                                                  f(!1),
                                                  void (
                                                      H.current.completed &&
                                                      (V(R.sounds.dq_screen_quest_complete()),
                                                      $(ou.Progress, _t.PROGRESS_BAR_DURATION[Q]))
                                                  ));
                                        case ou.Progress:
                                            return (C(!0), void (H.current.completed && $(ou.Complete, mt)));
                                        case ou.Complete:
                                            return (p(!0), m(!0), void (!I.current && $(ou.ChangeIcon, Ft)));
                                        case ou.ChangeIcon:
                                            if (I.current) return;
                                            return (f(!0), C(!1), void $(ou.Disappear, Dt));
                                        case ou.Disappear:
                                            return (m(!1), p(!1), A((u) => u + 1), void X(ou.Appear));
                                    }
                                };
                            return a().createElement(ht, {
                                quest: H.current,
                                cardType: i,
                                missionProgress: U,
                                isMissionCompleted: L,
                                isDisabledProgressbarDelta: W.current === du(t),
                                isAnimationAppear: _,
                                isAnimationProgress: D,
                                isAnimationBackgroundBlink: w,
                                isAnimationComplete: g,
                                isAnimationDisappear: b,
                                isAnimationChangePremium: x,
                                handleQuestSelect: o,
                                onMouseEnter: s,
                            });
                        },
                    ),
                    ft = 'QuestList_base_50',
                    vt = 'QuestList_base__horizontal_26',
                    wt = (0, r.memo)(
                        ({
                            allQuests: u,
                            indicateCompleteQuests: e,
                            cardType: t,
                            handleQuestSelect: r,
                            onMouseEnter: n,
                        }) => {
                            const i = t === su.Micro || t === su.Mini;
                            return a().createElement(
                                'div',
                                { className: g()(ft, i && vt) },
                                u.map((i, o) =>
                                    i.length
                                        ? a().createElement(bt, {
                                              position: o + 1,
                                              cardCount: u.length,
                                              key: i[0].id,
                                              quests: i,
                                              indicateCompleteQuests: e,
                                              handleQuestSelect: r,
                                              onMouseEnter: n,
                                              cardType: t,
                                          })
                                        : null,
                                ),
                            );
                        },
                    ),
                    St = 'App_base_6a',
                    yt = 'App_base__horizontal_b2',
                    xt = 'App_playStreakWrapper_f1',
                    Mt = 'App_nyWrapper_3b',
                    kt = 'App_nyWrapper__micro_3d',
                    Lt = (0, Y.Pi)(() => {
                        const u = bu(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            i = n.visible,
                            o = n.isNyEnabled,
                            s = n.isAllNyQuestsComplete,
                            l = X().width,
                            E = ((u) => {
                                const e = ru(u, uu),
                                    t = e[0],
                                    a = e[1],
                                    n = (0, r.useCallback)(
                                        (u) => {
                                            const e = u.action,
                                                r = u.logLevel;
                                            t(e, r, eu(u));
                                        },
                                        [t],
                                    );
                                return [(u) => n(u), () => a()];
                            })('play_streak')[0],
                            c = e.computes.getAllQuests(),
                            A = e.computes.getIndicateCompleteQuests(),
                            d = e.playStreak.get(),
                            _ = ((u) =>
                                u <= lu.Micro
                                    ? su.Micro
                                    : u <= lu.Mini
                                      ? su.Mini
                                      : u <= lu.Normal
                                        ? su.Normal
                                        : su.Micro)(l),
                            m = _ === su.Micro || _ === su.Mini,
                            F = (0, r.useCallback)(
                                (u) => {
                                    (K.playYes(), t.onQuest(u));
                                },
                                [t],
                            ),
                            D = (0, r.useCallback)(() => {
                                (K.playYes(),
                                    E({ item: nu.PlayStreakWidget, action: iu.Click, parentScreen: au.Hangar }),
                                    t.onPlayStreakClick());
                            }, [t, E]),
                            C = (0, r.useCallback)(() => {
                                (K.playYes(), t.onNyQuestsClick());
                            }, [t]),
                            B = (0, r.useCallback)(() => {
                                K.playHighlight();
                            }, []);
                        return i
                            ? a().createElement(
                                  'div',
                                  { className: g()(St, m && yt) },
                                  a().createElement(
                                      'div',
                                      { className: g()(Mt, _ === su.Micro && kt) },
                                      a().createElement(Ee, {
                                          cardType: _,
                                          isShowBlocked: !o,
                                          isShowComplete: s,
                                          handleQuestSelect: C,
                                          onMouseEnter: B,
                                      }),
                                  ),
                                  d.isEnabled &&
                                      !d.isPaused &&
                                      a().createElement(
                                          'div',
                                          { className: xt },
                                          d.isFirstAppearance ||
                                              d.isFirstAppearanceRedemptionDay ||
                                              d.isLastDayRedemption
                                              ? a().createElement(At, {
                                                    quest: d,
                                                    handleQuestSelect: D,
                                                    onMouseEnter: B,
                                                    cardType: _,
                                                })
                                              : a().createElement(Et, {
                                                    quest: d,
                                                    cardType: _,
                                                    isAnimationComplete: d.dailyWin,
                                                    isShowBlocked: d.isBlocked,
                                                    handleQuestSelect: D,
                                                    onMouseEnter: B,
                                                }),
                                      ),
                                  a().createElement(wt, {
                                      allQuests: c,
                                      indicateCompleteQuests: A,
                                      cardType: _,
                                      handleQuestSelect: F,
                                      onMouseEnter: B,
                                  }),
                              )
                            : null;
                    });
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(hu, null, a().createElement(T, null, a().createElement(Lt, null))),
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
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], n = !0, i = 0; i < e.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (__webpack_require__.j = 567),
        (() => {
            var u = { 567: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        a,
                        [n, i, o] = t,
                        s = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < n.length; s++)
                        ((a = n[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [272], () => __webpack_require__(6280));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
