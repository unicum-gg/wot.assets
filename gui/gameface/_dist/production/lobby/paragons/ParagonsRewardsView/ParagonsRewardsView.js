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
                (t.r(e), t.d(e, { mouse: () => i, onResize: () => n }));
                var r = t(2472),
                    a = t(1176);
                const n = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const i = (function () {
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
                                        i = s[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(n, o),
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
                        graphicsQuality: () => s,
                    }));
                var r = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => n.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => d,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    }));
                var r = t(3722),
                    a = t(6112),
                    n = t(6538),
                    s = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
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
                function _(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
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
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    x = {
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
                    s = 32,
                    i = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                s = (function (u, e) {
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
                                      Object.assign({ __Type: t, type: u }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    l = {
                        close(u) {
                            o('popover' === u ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(u) {
                            o(n, { isMouseEvent: !0, on: u });
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
                t.d(e, { B3: () => l, Z5: () => s, B0: () => o, ry: () => B });
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
                const s = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const F = ['args'];
                function D(u, e, t, r, a, n, s) {
                    try {
                        var i = u[n](s),
                            o = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(o) : Promise.resolve(o).then(r, a);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                        function s(u) {
                                            D(n, r, a, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            D(n, r, a, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
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
                                })(e, F);
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
                    g = () => C(o.CLOSE),
                    h = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var p = t(7572);
                const b = a.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, a = R.invalid('resId'), n) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                E = i.y,
                                c = i.width,
                                A = i.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(E) + s.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: d(_),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            327: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    a = t.n(r),
                    n = t(493),
                    s = t.n(n),
                    i = t(6483),
                    o = t.n(i);
                function l(u) {
                    engine.call('PlaySound', u);
                }
                const E = {
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
                    c = [
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
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                class _ extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && l(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && l(this.props.soundClick));
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
                            r = u.goto,
                            n = u.side,
                            s = u.type,
                            i = u.classNames,
                            l = u.onMouseEnter,
                            _ = u.onMouseLeave,
                            m = u.onMouseDown,
                            F = u.onMouseUp,
                            D =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(u, c)),
                            d = o()(E.base, E[`base__${s}`], E[`base__${n}`], null == i ? void 0 : i.base),
                            B = o()(E.icon, E[`icon__${s}`], E[`icon__${n}`], null == i ? void 0 : i.icon),
                            C = o()(E.glow, null == i ? void 0 : i.glow),
                            g = o()(E.caption, E[`caption__${s}`], null == i ? void 0 : i.caption),
                            h = o()(E.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            A(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(F),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                D,
                            ),
                            'info' !== s && a().createElement('div', { className: E.shine }),
                            a().createElement('div', { className: B }, a().createElement('div', { className: C })),
                            a().createElement('div', { className: g }, e),
                            r && a().createElement('div', { className: h }, r),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var m = t(3138),
                    F = t(5521),
                    D = t(4179);
                const d = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function B(u = F.n.NONE, e = d, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== F.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (m.O.view.isEventHandled()) return;
                                (m.O.view.setEventHandled(), e(r), t && r.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                var C = t(3403),
                    g = t(7030);
                const h = (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    p = 400;
                function b() {
                    return !1;
                }
                console.log;
                var v = t(9174);
                function w(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return x(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return x(u, e);
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
                function x(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const S = (u) => (0 === u ? window : window.subViews.get(u));
                function f(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                var T = t(3946);
                let M, y, L, P, O, k, N;
                (!(function (u) {
                    ((u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Currency = 'currency'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.Entitlements = 'entitlements'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.SelectableBonus = 'selectableBonus'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.CollectionItem = 'collectionItem'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.CosmicLootboxSilver = 'lootBoxToken'),
                        (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (u.Branch = 'branch'),
                        (u.VehicleSelect = 'vehicleSelect'),
                        (u.StyleProgress = 'styleProgress'),
                        (u.ParagonsUnlocks = 'paragonsUnlocks'),
                        (u.LootBoxToken = 'lootBoxToken'),
                        (u.GoldenTicket = 'birthday2025_golden_ticket'),
                        (u.PostStamp = 'giftsystem_4_stamp'),
                        (u.Quests = 'quests'),
                        (u.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (u.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (u.SACoin = 'sacoin'),
                        (u.ArmoryCoin = 'armory_coin'),
                        (u.PremiumPlusUniversal = 'premium_plus_universal'),
                        (u.DogTagType = 'dogTagComponents'),
                        (u.NyPetGoodies = 'nyPetGoodies'),
                        (u.HiddenVehicle = 'hidden_vehicle'),
                        (u.NyStaticDogTag = 'nyStaticDogTag'),
                        (u.Ny26Toys = 'ny26Toys'));
                })(M || (M = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'));
                    })(y || (y = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48'));
                    })(L || (L = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(P || (P = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(O || (O = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(k || (k = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(N || (N = {})));
                class I extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = D.B3.GOLD;
                        else u = D.B3.INTEGRAL;
                        const e = D.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                I.defaultProps = { format: 'integral' };
                const H = [
                        M.Items,
                        M.Equipment,
                        M.Xp,
                        M.XpFactor,
                        M.Blueprints,
                        M.BlueprintsAny,
                        M.Goodies,
                        M.Berths,
                        M.Slots,
                        M.Tokens,
                        M.CrewSkins,
                        M.CrewBooks,
                        M.Customizations,
                        M.CreditsFactor,
                        M.TankmenXp,
                        M.TankmenXpFactor,
                        M.FreeXpFactor,
                        M.BattleToken,
                        M.Entitlements,
                        M.PremiumUniversal,
                        M.NaturalCover,
                        M.BpCoin,
                        M.BattlePassSelectToken,
                        M.BattlaPassFinalAchievement,
                        M.BattleBadge,
                        M.BonusX5,
                        M.CrewBonusX3,
                        M.NewYearFillers,
                        M.NewYearInvoice,
                        M.EpicSelectToken,
                        M.Comp7TokenWeeklyReward,
                        M.Comp7TokenCouponReward,
                        M.BattleBoosterGift,
                        M.NewYearFillers,
                        M.NewYearInvoice,
                        M.LootBoxToken,
                        M.CosmicLootboxCommon,
                        M.CosmicLootboxSilver,
                        M.SelectableBonus,
                        M.GoldenTicket,
                        M.PostStamp,
                        M.BlankPersonalMissions_1,
                        M.BlankPersonalMissions_2,
                        M.SACoin,
                        M.PremiumPlusUniversal,
                        M.NyPetGoodies,
                        M.HiddenVehicle,
                    ],
                    U = [M.Gold, M.Credits, M.Crystal, M.FreeXp, M.NewYearToyFragments],
                    G = [M.BattlePassPoints],
                    $ = [M.PremiumPlus, M.Premium];
                let W;
                !(function (u) {
                    ((u.s16 = '16'),
                        (u.s32 = '32'),
                        (u.s48 = '48'),
                        (u.s66 = '66'),
                        (u.s80 = '80'),
                        (u.s116 = '116'),
                        (u.s296 = '296'),
                        (u.s360 = '360'),
                        (u.s400 = '400'),
                        (u.s600 = '600'));
                })(W || (W = {}));
                const X = ['engravings', 'backgrounds'],
                    q = ['engraving', 'background'],
                    V = (u, e = L.Small, t) => {
                        const r = u.name,
                            a = u.type,
                            n = u.value,
                            s = u.icon,
                            i = u.item,
                            o = u.dogTagType,
                            l = ((u) => {
                                switch (u) {
                                    case L.S600x450:
                                        return 'c_600x450';
                                    case L.S400x300:
                                        return 'c_400x300';
                                    case L.S296x222:
                                        return 'c_296x222';
                                    case L.S232x174:
                                        return 'c_232x174';
                                    case L.Big:
                                        return 'c_80x80';
                                    case L.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((u, e) => {
                                    switch (e) {
                                        case L.Big:
                                            return u.iconBig.replace('..', 'img://gui');
                                        case L.Small:
                                            return u.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                    }
                                })(u, e);
                            case 'entitlements':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${s}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const r = X[u];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(r),
                                            n = a.$dyn(t);
                                        return n ? `${n}` : `${a.$dyn(q[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, e, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((u) => {
                                    switch (u) {
                                        case L.S600x450:
                                            return 'c_600x450';
                                        case L.S400x300:
                                            return 'c_400x300';
                                        case L.S296x222:
                                            return 'c_296x222';
                                        case L.S232x174:
                                            return 'c_232x174';
                                        case L.S180x135:
                                            return 'big';
                                        case L.Big:
                                        case L.S80x80:
                                            return 'c_80x80';
                                        case L.Small:
                                        case L.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return u;
                                    }
                                })(e)}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'nyPetGoodies':
                                return `R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.${e}.${s}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((u) => {
                                    switch (u) {
                                        case L.Mini:
                                            return W.s32;
                                        case L.Small:
                                        case L.S48x48:
                                            return W.s48;
                                        case L.S80x80:
                                        case L.Big:
                                            return W.s80;
                                        case L.S128x100:
                                            return W.s116;
                                        case L.S180x135:
                                        case L.S232x174:
                                        case L.S296x222:
                                            return W.s296;
                                        case L.S400x300:
                                            return W.s400;
                                        case L.S600x450:
                                            return W.s600;
                                    }
                                })(e)}`;
                            case 'newYearAlbumsAccess':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${e}.albumsAccess`;
                            case 'nyFillers':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${e}.fillers`;
                            case 'nyToyFragments':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${e}.shards`;
                            case 'newYearSlot':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${e}.slot`;
                            case 'hidden_vehicle':
                                return 'R.images.new_year.gui.maps.icons.newYear.common.rewards.vehicles.hidden_vehicle';
                            case 'nyStaticDogTag':
                                return `R.images.new_year.gui.maps.icons.newYear.common.rewards.dogtags.${e}.dogtag_${t}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                        }
                    },
                    j = (u, e, t) => {
                        const r = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            r,
                            t,
                        );
                    };
                let Y;
                function z(u) {
                    return u.replace(/-/g, '_');
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Y || (Y = {}));
                const K = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Q = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Z = (u, e, t = Y.left) => u.split(e).reduce(t === Y.left ? K : Q, []),
                    J = (() => {
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
                    uu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    eu = (u, e = Y.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return uu.includes(t)
                            ? J(u)
                            : ((u, e = Y.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = u.replace(/&nbsp;/g, ' ');
                                  return (Z(a, /( )/, e).forEach((u) => (t = t.concat(Z(u, r, Y.left)))), t);
                              })(u, e);
                    },
                    tu = [M.Branch, M.VehicleSelect, M.ParagonsUnlocks, M.StyleProgress],
                    ru = (u) => {
                        return {
                            name: u.name,
                            image: (e) =>
                                ((u, e = L.Small) => {
                                    const t = z(u.vehicleName || '');
                                    if (u.name === M.Vehicles)
                                        switch (e) {
                                            case L.Mini:
                                            case L.Small:
                                            case L.S48x48:
                                                return u.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                            case L.Big:
                                            case L.S80x80:
                                                return u.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                            case L.S128x100:
                                            case L.S180x135:
                                                return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                            case L.S232x174:
                                            case L.S296x222:
                                                return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                            case L.S400x300:
                                            case L.S600x450:
                                                return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                            default:
                                                return (
                                                    console.error('Unknown vehicle image size', e, u.vehicleName),
                                                    'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                );
                                        }
                                    if (u.name === M.TmanToken)
                                        switch (e) {
                                            case L.Mini:
                                            case L.Small:
                                            case L.S48x48:
                                            case L.Big:
                                            case L.S80x80:
                                                return `R.images.gui.maps.icons.tankmen.icons.s80x80.${u.icon}`;
                                            case L.S128x100:
                                            case L.S180x135:
                                            case L.S232x174:
                                                return `R.images.gui.maps.icons.tankmen.icons.s232x174.${u.icon}`;
                                            case L.S296x222:
                                                return `R.images.gui.maps.icons.tankmen.icons.s296x222.${u.icon}`;
                                            case L.S400x300:
                                                return `R.images.gui.maps.icons.tankmen.icons.s400x300.${u.icon}`;
                                            case L.S600x450:
                                                return `R.images.gui.maps.icons.tankmen.icons.s600x450.${u.icon}`;
                                            default:
                                                return (
                                                    console.error('Unknown image size', e),
                                                    'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                );
                                        }
                                    if (u.name === M.CollectionItem)
                                        switch (e) {
                                            case L.Mini:
                                            case L.Small:
                                            case L.S48x48:
                                                return `R.images.gui.maps.icons.collectionItems.c_48x48.${u.icon}`;
                                            case L.Big:
                                            case L.S80x80:
                                                return `R.images.gui.maps.icons.collectionItems.c_80x80.${u.icon}`;
                                            case L.S128x100:
                                            case L.S180x135:
                                            case L.S232x174:
                                                return `R.images.gui.maps.icons.collectionItems.c_232x174.${u.icon}`;
                                            case L.S296x222:
                                                return `R.images.gui.maps.icons.collectionItems.c_296x222.${u.icon}`;
                                            case L.S400x300:
                                                return `R.images.gui.maps.icons.collectionItems.c_400x300.${u.icon}`;
                                            case L.S600x450:
                                                return `R.images.gui.maps.icons.collectionItems.c_600x450.${u.icon}`;
                                            default:
                                                console.error('Unknown image size', e);
                                        }
                                    if (u.name === M.StyleProgress)
                                        switch (e) {
                                            case L.Small:
                                            case L.Big:
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.progressionStyle`;
                                            default:
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                        }
                                    if (tu.includes(u.name))
                                        switch (u.name) {
                                            case 'branch':
                                            case 'vehicleSelect':
                                            case 'paragonsUnlocks':
                                                return `R.images.gui.maps.icons.paragons.allRewards.${e}.${u.icon}`;
                                            default:
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                        }
                                    return V(u, e);
                                })(u, e),
                            value: u.value,
                            valueType:
                                ((e = u.name),
                                H.includes(e)
                                    ? P.MULTI
                                    : U.includes(e)
                                      ? P.CURRENCY
                                      : G.includes(e)
                                        ? P.NUMBER
                                        : $.includes(e)
                                          ? P.PREMIUM_PLUS
                                          : P.STRING),
                            label: u.label,
                            tooltipArgs: j({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                            type: u.type,
                            vehicleNation: u.nationTag,
                            vehicleLvl: u.level,
                            vehicleName: u.vehicleName,
                            vehicleCD: u.vehicleCD,
                            isElite: u.isElite,
                            isRent: u.isRent,
                            rentBattles: u.rentBattles,
                            rentDays: u.rentDays,
                            isCompensation: u.isCompensation,
                            compensatedBonus: u.compensatedBonus,
                            icon: u.icon,
                            styleID: u.styleID,
                            banchID: u.branchID,
                            styleProgressLevel: u.progressLevel,
                        };
                        var e;
                    },
                    au = (u) => u === M.Vehicles || u === M.VehicleSelect,
                    nu = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: s, children: i, mocks: o }) {
                                const l = (0, r.useRef)([]),
                                    E = (t, r, a) => {
                                        var n;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = S,
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
                                                const s = (u) => {
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
                                                        const i = 'string' == typeof n ? `${r}.${n}` : r,
                                                            o = m.O.view.addModelObserver(i, e, !0);
                                                        return (a.set(o, t), u && t(s(n)), o);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (u, e) => {
                                                        const t = s(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = s(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = w(a.keys()); !(u = t()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : i.readByPath(u),
                                            E = (u) => l.current.push(u),
                                            c = u({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : o(u),
                                                            a = v.LO.box(r, { equals: b });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, v.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : o(u),
                                                            a = v.LO.box(r, { equals: b });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, v.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = o(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = v.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, v.aD)((e) => {
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
                                                                s = n.reduce(
                                                                    (u, [e, t]) => ((u[t] = v.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, v.aD)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: t, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === t && a ? a.controls(A) : e(A),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    A = (0, r.useState)(n),
                                    _ = A[0],
                                    F = A[1],
                                    D = (0, r.useState)(() => E(n, s, o)),
                                    d = D[0],
                                    B = D[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? B(E(_, s, o)) : (c.current = !0);
                                    }, [o, _, s]),
                                    (0, r.useEffect)(() => {
                                        F(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (d.externalModel.dispose(), l.current.forEach((u) => u()));
                                        },
                                        [d],
                                    ),
                                    a().createElement(t.Provider, { value: d }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    mainRewards: u.array('mainRewards', []),
                                    rewards: u.array('rewards', []),
                                },
                                t = (0, T.Om)(() => f(e.mainRewards.get(), (u) => ru(u)), { equals: b }),
                                r = (0, T.Om)(() => Boolean(t().filter((u) => u.name === M.Vehicles).length)),
                                a = (0, T.Om)(() => Boolean(t().filter((u) => au(u.name)).length)),
                                n = (0, T.Om)(() => f(e.rewards.get(), (u) => ru(u)), { equals: b }),
                                s = (0, T.Om)(() => Boolean(t().length), { equals: b }),
                                i = (0, T.Om)(() => Boolean(n().length), { equals: b }),
                                o = (0, T.Om)(() => i() && !s(), { equals: b }),
                                l = (0, T.Om)(() => (o() ? 0 : 200 * t().length + p), { equals: b }),
                                E = (0, T.Om)(() => Math.min(n().length, 10), { equals: b }),
                                c = (0, T.Om)(
                                    () => {
                                        const u = E() > 0 ? p : 0;
                                        return l() + 200 * E() + u;
                                    },
                                    { equals: b },
                                );
                            return Object.assign({}, e, {
                                computes: {
                                    getIsVehicleInRewards: r,
                                    getIsVehicleAndSelectInRewards: a,
                                    getMainRewards: t,
                                    getRegularRewards: n,
                                    hasMainRewards: s,
                                    hasRegularRewards: i,
                                    hasRegularRewardsOnly: o,
                                    getRewardsShowDelay: l,
                                    getFooterShowDelay: c,
                                },
                            });
                        },
                        ({ externalModel: u }) => ({
                            close: u.createCallbackNoArgs('onClose'),
                            showVehicleInHangar: u.createCallbackNoArgs('onShowVehicleInHangar'),
                            selectVehicleAsReward: u.createCallback((u) => ({ entCode: u }), 'onSelectVehicleAsReward'),
                        }),
                    ),
                    su = nu[0],
                    iu = nu[1],
                    ou = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    lu = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Eu;
                function cu(u, e, t) {
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
                })(Eu || (Eu = {}));
                const Au = m.O.client.getSize('rem'),
                    _u = Au.width,
                    mu = Au.height,
                    Fu = Object.assign({ width: _u, height: mu }, cu(_u, mu, lu)),
                    Du = (0, r.createContext)(Fu),
                    du = ['children'];
                const Bu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, du);
                    const a = (0, r.useContext)(Du),
                        n = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        o = a.small,
                        l = a.extraSmall,
                        E = a.extraLargeWidth,
                        c = a.largeWidth,
                        A = a.mediumWidth,
                        _ = a.smallWidth,
                        m = a.extraSmallWidth,
                        F = a.extraLargeHeight,
                        D = a.largeHeight,
                        d = a.mediumHeight,
                        B = a.smallHeight,
                        C = a.extraSmallHeight,
                        g = { extraLarge: F, large: D, medium: d, small: B, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && s) return e;
                        if (t.medium && i) return e;
                        if (t.small && o) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && E) return ou(e, t, g);
                        if (t.largeWidth && c) return ou(e, t, g);
                        if (t.mediumWidth && A) return ou(e, t, g);
                        if (t.smallWidth && _) return ou(e, t, g);
                        if (t.extraSmallWidth && m) return ou(e, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return e;
                            if (t.largeHeight && D) return e;
                            if (t.mediumHeight && d) return e;
                            if (t.smallHeight && B) return e;
                            if (t.extraSmallHeight && C) return e;
                        }
                    }
                    return null;
                };
                Bu.defaultProps = {
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
                (0, r.memo)(Bu);
                const Cu = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    gu = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(Du),
                            t = (0, r.useState)(e),
                            n = t[0],
                            s = t[1],
                            i = (0, r.useCallback)((u, e) => {
                                const t = m.O.view.pxToRem(u),
                                    r = m.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: r }, cu(t, r, lu)));
                            }, []);
                        (Cu(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', i), [i]));
                        const o = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(Du.Provider, { value: o }, u);
                    });
                let hu, pu, bu;
                (!(function (u) {
                    ((u[(u.ExtraSmall = lu.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = lu.small.width)] = 'Small'),
                        (u[(u.Medium = lu.medium.width)] = 'Medium'),
                        (u[(u.Large = lu.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = lu.extraLarge.width)] = 'ExtraLarge'));
                })(hu || (hu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = lu.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = lu.small.width)] = 'Small'),
                            (u[(u.Medium = lu.medium.width)] = 'Medium'),
                            (u[(u.Large = lu.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = lu.extraLarge.width)] = 'ExtraLarge'));
                    })(pu || (pu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = lu.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = lu.small.height)] = 'Small'),
                            (u[(u.Medium = lu.medium.height)] = 'Medium'),
                            (u[(u.Large = lu.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = lu.extraLarge.height)] = 'ExtraLarge'));
                    })(bu || (bu = {})));
                const vu = () => {
                        const u = (0, r.useContext)(Du),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return hu.ExtraLarge;
                                    case u.large:
                                        return hu.Large;
                                    case u.medium:
                                        return hu.Medium;
                                    case u.small:
                                        return hu.Small;
                                    case u.extraSmall:
                                        return hu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), hu.ExtraSmall);
                                }
                            })(u),
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return pu.ExtraLarge;
                                    case u.largeWidth:
                                        return pu.Large;
                                    case u.mediumWidth:
                                        return pu.Medium;
                                    case u.smallWidth:
                                        return pu.Small;
                                    case u.extraSmallWidth:
                                        return pu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), pu.ExtraSmall);
                                }
                            })(u),
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return bu.ExtraLarge;
                                    case u.largeHeight:
                                        return bu.Large;
                                    case u.mediumHeight:
                                        return bu.Medium;
                                    case u.smallHeight:
                                        return bu.Small;
                                    case u.extraSmallHeight:
                                        return bu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), bu.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                    },
                    wu = 'Content_base_2b',
                    xu = 'Content_ribbon_cc',
                    Su = 'Content_ribbon__onlyRegular_e5',
                    fu = 'Content_ribbon__elite_ff',
                    Ru = 'Content_mainRewards_de',
                    Tu = 'Content_glow_43',
                    Mu = 'Content_glow2_86',
                    yu = 'Content_regularRewards_c2',
                    Lu = 'Content_regularRewards__onlyRegular_46',
                    Pu = [
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
                function Ou(u) {
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
                const ku = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: D.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Nu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            n = u.onMouseEnter,
                            s = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            _ = u.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            d = u.targetId,
                            B = void 0 === d ? 0 : d,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Pu);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            v = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ku(t, m, { isMouseEvent: !0, on: !0, arguments: Ou(a) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, a, b, C]),
                            w = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        ku(t, m, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            x = (0, r.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return D
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                      n && n(u),
                                                      S && S(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (w(), null == s || s(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === A && w(), null == o || o(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === A && w(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var S;
                    },
                    Iu = ['children'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Uu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Iu);
                        return a().createElement(
                            Nu,
                            Hu(
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
                    Gu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Wu = R.views.common.tooltip_window.simple_tooltip_content,
                    Xu = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            s = u.note,
                            i = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Gu);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, n, s, o]);
                        return a().createElement(
                            Nu,
                            $u(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Wu.SimpleTooltipHtmlContent('resId') : Wu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Vu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const r = a().createElement('div', { className: t }, u);
                        if (e.header || e.body) return a().createElement(Xu, e, r);
                        const n = e.contentId,
                            s = e.args,
                            i = null == s ? void 0 : s.contentId;
                        return n || i
                            ? a().createElement(Nu, qu({}, e, { contentId: n || i }), r)
                            : a().createElement(Uu, e, r);
                    },
                    ju = {
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
                    Yu = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: r = L.Big,
                        special: n,
                        value: s,
                        valueType: i,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case O.BATTLE_BOOSTER:
                                    case O.BATTLE_BOOSTER_REPLACE:
                                        return k.BATTLE_BOOSTER;
                                }
                            })(n),
                            F = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case O.BATTLE_BOOSTER:
                                        return N.BATTLE_BOOSTER;
                                    case O.BATTLE_BOOSTER_REPLACE:
                                        return N.BATTLE_BOOSTER_REPLACE;
                                    case O.BUILT_IN_EQUIPMENT:
                                        return N.BUILT_IN_EQUIPMENT;
                                    case O.EQUIPMENT_PLUS:
                                        return N.EQUIPMENT_PLUS;
                                    case O.EQUIPMENT_TROPHY_BASIC:
                                        return N.EQUIPMENT_TROPHY_BASIC;
                                    case O.EQUIPMENT_TROPHY_UPGRADED:
                                        return N.EQUIPMENT_TROPHY_UPGRADED;
                                    case O.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return N.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case O.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return N.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case O.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return N.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case O.PROGRESSION_STYLE_UPGRADED_1:
                                        return N.PROGRESSION_STYLE_UPGRADED_1;
                                    case O.PROGRESSION_STYLE_UPGRADED_2:
                                        return N.PROGRESSION_STYLE_UPGRADED_2;
                                    case O.PROGRESSION_STYLE_UPGRADED_3:
                                        return N.PROGRESSION_STYLE_UPGRADED_3;
                                    case O.PROGRESSION_STYLE_UPGRADED_4:
                                        return N.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            D = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case P.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case P.CURRENCY:
                                    case P.NUMBER:
                                        return a().createElement(I, { format: 'integral', value: Number(u) });
                                    case P.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, i);
                        return a().createElement(
                            'div',
                            { className: o()(ju.base, ju[`base__${r}`], E), style: l },
                            a().createElement(
                                Vu,
                                { tooltipArgs: A, className: ju.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: o()(ju.image, null == c ? void 0 : c.image) },
                                        m &&
                                            a().createElement('div', {
                                                className: o()(ju.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${m}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            a().createElement('div', {
                                                className: o()(ju.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        F &&
                                            a().createElement('div', {
                                                className: o()(ju.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: o()(
                                                    ju.info,
                                                    ju[`info__${u}`],
                                                    i === P.MULTI && ju.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            D,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    Vu,
                                    { tooltipArgs: _ },
                                    a().createElement('div', {
                                        className: o()(ju.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var zu = t(9887),
                    Ku = t.n(zu);
                const Qu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Zu = (u) => u.includes('_') && ((u) => Qu.includes(u))(u.split('_').at(-1)),
                    Ju = [hu.ExtraLarge, hu.Large, hu.Medium, hu.Small, hu.ExtraSmall],
                    ue = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (Zu(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = Ju.indexOf(e),
                                    s = (-1 !== n ? Qu.slice(n) : [])
                                        .map((u) => a + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = s ? u[s] : void 0;
                                return ((t[a] = void 0 !== i ? i : u[a]), t);
                            }
                            const a = u[r];
                            return (
                                void 0 === a ||
                                    ((u, e) => Qu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    ee = (u, e = ue) => {
                        const t = (
                            (u, e = ue) =>
                            (t) => {
                                const n = vu().mediaSize,
                                    s = (0, r.useMemo)(() => e(t, n), [t, n]);
                                return a().createElement(u, s);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => Zu(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    },
                    te = {
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
                Object.keys(Ku());
                const ne = {
                        XL: { mt: te.mt__XL, mr: te.mr__XL, mb: te.mb__XL, ml: te.ml__XL },
                        LG: { mt: te.mt__LG, mr: te.mr__LG, mb: te.mb__LG, ml: te.ml__LG },
                        MDp: { mt: te.mt__MDp, mr: te.mr__MDp, mb: te.mb__MDp, ml: te.ml__MDp },
                        MD: { mt: te.mt__MD, mr: te.mr__MD, mb: te.mb__MD, ml: te.ml__MD },
                        SMp: { mt: te.mt__SMp, mr: te.mr__SMp, mb: te.mb__SMp, ml: te.ml__SMp },
                        SM: { mt: te.mt__SM, mr: te.mr__SM, mb: te.mb__SM, ml: te.ml__SM },
                        XS: { mt: te.mt__XS, mr: te.mr__XS, mb: te.mb__XS, ml: te.ml__XS },
                    },
                    se = (Object.keys(ne), ['mt', 'mr', 'mb', 'ml']),
                    ie = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    oe = ee((u) => {
                        let e = u.className,
                            t = u.width,
                            n = u.height,
                            s = u.m,
                            i = u.mt,
                            l = void 0 === i ? s : i,
                            E = u.mr,
                            c = void 0 === E ? s : E,
                            A = u.mb,
                            _ = void 0 === A ? s : A,
                            m = u.ml,
                            F = void 0 === m ? s : m,
                            D = u.column,
                            d = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (D ? 'column' : d && 'row') || void 0 : B,
                            g = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            b = u.spaceBetween,
                            v = u.spaceAround,
                            w = u.justifyContent,
                            x =
                                void 0 === w
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            S = u.alignItems,
                            f = void 0 === S ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : S,
                            R = u.alignSelf,
                            T = u.wrap,
                            M = u.flexWrap,
                            y = void 0 === M ? (T ? 'wrap' : void 0) : M,
                            L = u.grow,
                            P = u.shrink,
                            O = u.flex,
                            k = void 0 === O ? (L || P ? `${L ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : O,
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
                            })(u, re);
                        const U = (0, r.useMemo)(() => {
                                const u = { mt: l, mr: c, mb: _, ml: F },
                                    e = ((u) =>
                                        se.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(ne[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        se.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[ie[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, N, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: R,
                                        display: C || f ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: y,
                                        justifyContent: x,
                                        alignItems: f,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, n, l, c, _, F, N, k, R, C, y, x, f]),
                            G = U.computedStyle,
                            $ = U.computedClassNames;
                        return a().createElement('div', ae({ className: o()(te.base, ...$, e), style: G }, H), I);
                    }),
                    le = 'FormatText_base_d0',
                    Ee = ({ binding: u, text: e = '', classMix: t, alignment: n = Y.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, s) =>
                                      a().createElement(
                                          'div',
                                          { className: o()(le, t), key: `${e}-${s}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : eu(u, e))))(e, n, u).map((u, e) =>
                                              a().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var ce = t(3532),
                    Ae = t.n(ce);
                const _e = {
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
                    me = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                Object.keys(Ku());
                const De = Object.keys(Ae()),
                    de = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Be = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ce = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ge = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    he =
                        (Object.keys(ge),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': de,
                            'heading-H36': de,
                            'heading-H28': Be,
                            'heading-H24': Be,
                            'heading-H24R': Be,
                            'heading-H22': Be,
                            'heading-H20R': Be,
                            'heading-H18': Be,
                            'heading-H15': Ce,
                            'heading-H14': Ce,
                            'paragraph-P24': Be,
                            'paragraph-P18': Be,
                            'paragraph-P16': Be,
                            'paragraph-P14': Ce,
                            'paragraph-P12': Ce,
                            'paragraph-P10': Ce,
                        }),
                    pe =
                        (Object.keys(he),
                        (u) =>
                            u
                                ? ((u) => De.includes(u))(u)
                                    ? { colorClassName: _e[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    be = ee((u) => {
                        let e = u.text,
                            t = u.variant,
                            n = u.className,
                            s = u.color,
                            i = u.m,
                            l = u.mt,
                            E = void 0 === l ? i : l,
                            c = u.mr,
                            A = void 0 === c ? i : c,
                            _ = u.mb,
                            m = void 0 === _ ? i : _,
                            F = u.ml,
                            D = void 0 === F ? i : F,
                            d = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, me);
                        const g = (0, r.useMemo)(() => {
                                const u = pe(s),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, d, r), colorClassName: e };
                            }, [d, s]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return a().createElement(
                            oe,
                            Fe(
                                {
                                    className: o()(_e.base, t && _e[t], p, n),
                                    style: h,
                                    mt: !0 === E ? he[t || 'paragraph-P16'].mt : E,
                                    mr: !0 === A ? he[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === m ? he[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === D ? he[t || 'paragraph-P16'].ml : D,
                                },
                                C,
                            ),
                            void 0 !== B ? a().createElement(Ee, Fe({}, B, { text: e })) : e,
                        );
                    }),
                    ve = ({ index: u, delay: e = 0, children: t }) => {
                        const r = (0, g.useSpring)({
                            from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                            to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                            delay: e + 900 + 200 * u,
                            config: { duration: p, easing: h },
                            onStart: () => {
                                l(R.sounds.gui_random_reward_appear());
                            },
                        });
                        return a().createElement(g.animated.div, { style: r }, t);
                    },
                    we = 'MainReward_reward_b3',
                    xe = 'MainReward_info_b2',
                    Se = 'MainReward_label_3e',
                    fe = 'MainReward_label__large_5c';
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Te = ({ reward: u, index: e, size: t }) => {
                        const r = u.image(t);
                        return a().createElement(
                            ve,
                            { index: e },
                            a().createElement(
                                Yu,
                                Re({}, u, { image: r, size: t, className: we, classNames: { info: xe } }),
                            ),
                            a().createElement(be, { className: o()(Se, t === L.S600x450 && fe), text: u.label }),
                        );
                    },
                    Me = 'RewardList_base_73',
                    ye = 'RewardList_reward_4c';
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Pe = ({ data: u, maxRewards: e, showDelay: t }) => {
                        const n = vu().mediaSize < hu.Medium ? L.Small : L.Big,
                            s = e < u.length,
                            i = s ? u.slice(0, e) : u,
                            o = `R.images.gui.maps.icons.quests.bonuses.${n}.default`,
                            l = (0, r.useMemo)(() => {
                                return (
                                    (t = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (r = { count: u.length - e }),
                                    t.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(r[u.slice(e, -e)]);
                                    })
                                );
                                var t, r;
                            }, [u.length, e]),
                            E = (0, r.useMemo)(
                                () => j({}, R.views.lobby.tooltips.AdditionalRewardsTooltip('resId')),
                                [],
                            );
                        return a().createElement(
                            'div',
                            { className: Me },
                            i.map((u, e) =>
                                a().createElement(
                                    ve,
                                    { key: e, index: e, delay: t },
                                    a().createElement(Yu, Le({}, u, { image: u.image(n), size: n, className: ye })),
                                ),
                            ),
                            s &&
                                a().createElement(
                                    ve,
                                    { index: e, delay: t },
                                    a().createElement(Yu, {
                                        name: 'more',
                                        image: o,
                                        size: n,
                                        value: l,
                                        tooltipArgs: E,
                                        className: ye,
                                    }),
                                ),
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
                let ke, Ne;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(ke || (ke = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(Ne || (Ne = {})));
                const Ie = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: i,
                    soundHover: E,
                    soundClick: c,
                    onMouseEnter: A,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: F,
                    onMouseLeave: D,
                    onClick: d,
                }) => {
                    const B = (0, r.useRef)(null),
                        C = (0, r.useState)(t),
                        g = C[0],
                        h = C[1],
                        p = (0, r.useState)(!1),
                        b = p[0],
                        v = p[1],
                        w = (0, r.useState)(!1),
                        x = w[0],
                        S = w[1],
                        f = (0, r.useCallback)(() => {
                            s || (B.current && (B.current.focus(), h(!0)));
                        }, [s]),
                        T = (0, r.useCallback)(
                            (u) => {
                                g && null !== B.current && !B.current.contains(u.target) && h(!1);
                            },
                            [g],
                        ),
                        M = (0, r.useCallback)(
                            (u) => {
                                s || (d && d(u));
                            },
                            [s, d],
                        ),
                        y = (0, r.useCallback)(
                            (u) => {
                                s || (null !== E && l(E), A && A(u), S(!0));
                            },
                            [s, E, A],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                _ && _(u);
                            },
                            [_],
                        ),
                        P = (0, r.useCallback)(
                            (u) => {
                                s || (F && F(u), v(!1));
                            },
                            [s, F],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                s || (null !== c && l(c), m && m(u), t && f(), v(!0));
                            },
                            [s, c, m, f, t],
                        ),
                        k = (0, r.useCallback)(
                            (u) => {
                                s || (D && D(u), v(!1));
                            },
                            [s, D],
                        ),
                        N = o()(
                            Oe.base,
                            Oe[`base__${n}`],
                            {
                                [Oe.base__disabled]: s,
                                [Oe[`base__${e}`]]: e,
                                [Oe.base__focus]: g,
                                [Oe.base__highlightActive]: b,
                                [Oe.base__firstHover]: x,
                            },
                            i,
                        ),
                        I = o()(Oe.state, Oe.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, r.useEffect)(() => {
                            h(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: B,
                                className: N,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: P,
                                onMouseDown: O,
                                onMouseLeave: k,
                                onClick: M,
                            },
                            n !== ke.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Oe.back }),
                                    a().createElement('span', { className: Oe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: I },
                                a().createElement('span', { className: Oe.stateDisabled }),
                                a().createElement('span', { className: Oe.stateHighlightHover }),
                                a().createElement('span', { className: Oe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Ie.defaultProps = { type: ke.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const He = (0, r.memo)(Ie),
                    Ue = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ge = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function $e(u) {
                    let e = '';
                    for (let t = Ge.length - 1; t >= 0; t--) for (; u >= Ge[t]; ) ((e += Ue[t]), (u -= Ge[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const We = 'VehicleReward_base_c5',
                    Xe = 'VehicleReward_container_25',
                    qe = 'VehicleReward_image_86',
                    Ve = 'VehicleReward_image__select_96',
                    je = 'VehicleReward_rewardsSelect_0b',
                    Ye = 'VehicleReward_label_3b',
                    ze = 'VehicleReward_claimButton_2d',
                    Ke = 'VehicleReward_vehicleInfo_27',
                    Qe = 'VehicleReward_text_1c',
                    Ze = 'VehicleReward_vehicleType_c4',
                    Je = 'VehicleReward_vehicleType__elite_5e',
                    ut = R.strings.paragons.rewardsView.selectReward,
                    et = 'R.images.gui.maps',
                    tt = (0, r.memo)(
                        ({
                            label: u,
                            vehicleLvl: e,
                            type: t,
                            isElite: n,
                            claim: s,
                            icon: i,
                            name: l,
                            vehicleName: E,
                            index: c,
                            tooltipArgs: A,
                        }) => {
                            const _ = vu().mediaSize,
                                m = l === M.VehicleSelect,
                                F = (0, r.useMemo)(
                                    () =>
                                        m
                                            ? `${et}.icons.paragons.allRewards.${_ < hu.Large ? L.S400x300 : L.S600x450}.${z(i)}`
                                            : `${et}.shop.vehicles.c_${_ < hu.Medium ? '360x270' : '600x450'}.${z(E)}`,
                                    [i, m, _, E],
                                );
                            return a().createElement(
                                'div',
                                { className: We },
                                a().createElement(
                                    ve,
                                    { index: c },
                                    a().createElement(
                                        Vu,
                                        { tooltipArgs: A },
                                        a().createElement(
                                            'div',
                                            { className: Xe },
                                            a().createElement('div', {
                                                className: o()(qe, m && Ve),
                                                style: { backgroundImage: `url('${F}')` },
                                            }),
                                            m
                                                ? a().createElement(
                                                      'div',
                                                      { className: je },
                                                      a().createElement(be, { className: Ye, text: ut.label() }),
                                                      a().createElement(
                                                          He,
                                                          { mixClass: ze, onClick: s, type: ke.main },
                                                          a().createElement(be, { text: ut.button() }),
                                                      ),
                                                  )
                                                : a().createElement(
                                                      'div',
                                                      { className: Ke },
                                                      a().createElement(be, { className: Qe, text: $e(e) }),
                                                      a().createElement('div', {
                                                          style: {
                                                              backgroundImage: `url(${et}.icons.vehicleTypes.c_60x54.${z(t)}${n && '_elite'})`,
                                                          },
                                                          className: o()(Ze, n && Je),
                                                      }),
                                                      a().createElement(be, { className: Qe, text: u }),
                                                  ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const at = {
                        1: {
                            [hu.ExtraSmall]: [L.S296x222],
                            [hu.Small]: [L.S400x300],
                            [hu.Medium]: [L.S400x300],
                            [hu.Large]: [L.S600x450],
                            [hu.ExtraLarge]: [L.S600x450],
                        },
                        2: {
                            [hu.ExtraSmall]: [L.S296x222, L.S296x222],
                            [hu.Small]: [L.S296x222, L.S296x222],
                            [hu.Medium]: [L.S296x222, L.S296x222],
                            [hu.Large]: [L.S400x300, L.S400x300],
                            [hu.ExtraLarge]: [L.S400x300, L.S400x300],
                        },
                        3: {
                            [hu.ExtraSmall]: [L.S296x222, L.S296x222, L.S296x222],
                            [hu.Small]: [L.S296x222, L.S400x300, L.S296x222],
                            [hu.Medium]: [L.S296x222, L.S400x300, L.S296x222],
                            [hu.Large]: [L.S400x300, L.S600x450, L.S400x300],
                            [hu.ExtraLarge]: [L.S400x300, L.S600x450, L.S400x300],
                        },
                    },
                    nt = (0, C.Pi)(() => {
                        const u = vu().mediaSize,
                            e = iu(),
                            t = e.model,
                            r = e.controls,
                            n = t.computes.getMainRewards(),
                            s = t.computes.getRegularRewards(),
                            i = t.computes.hasMainRewards(),
                            l = t.computes.hasRegularRewards(),
                            E = t.computes.hasRegularRewardsOnly(),
                            c = t.computes.getIsVehicleAndSelectInRewards(),
                            A = t.computes.getRewardsShowDelay(),
                            _ = o()(xu, E && Su, c && fu),
                            m = o()(yu, E && Lu),
                            F = Boolean(n.length % 2);
                        return a().createElement(
                            'div',
                            { className: wu },
                            a().createElement('div', { className: _ }),
                            c &&
                                F &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Tu }),
                                    a().createElement('div', { className: Mu }),
                                ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: Ru },
                                    n.map((e, t) =>
                                        au(e.name)
                                            ? a().createElement(
                                                  tt,
                                                  rt({ key: e.name, index: t }, e, {
                                                      claim: () => r.selectVehicleAsReward(e.value),
                                                  }),
                                              )
                                            : a().createElement(Te, {
                                                  key: e.name,
                                                  reward: e,
                                                  index: t,
                                                  size: at[n.length][u][t],
                                              }),
                                    ),
                                ),
                            l &&
                                a().createElement(
                                    'div',
                                    { className: m },
                                    a().createElement(Pe, { data: s, maxRewards: 10, showDelay: A }),
                                ),
                        );
                    }),
                    st = 'Footer_base_ea',
                    it = 'Footer_button_20',
                    ot = 'Footer_button__withMargin_d3',
                    lt = R.strings.paragons.rewardsView.footer,
                    Et = (0, C.Pi)(() => {
                        const u = iu(),
                            e = u.model,
                            t = u.controls,
                            r = e.computes.getIsVehicleInRewards();
                        return a().createElement(
                            'div',
                            { className: st },
                            a().createElement(
                                He,
                                { mixClass: o()(it, r && ot), type: ke.primary, size: Ne.medium, onClick: t.close },
                                a().createElement(be, { text: lt.buttonText() }),
                            ),
                            r &&
                                a().createElement(
                                    He,
                                    {
                                        mixClass: it,
                                        type: ke.secondary,
                                        size: Ne.medium,
                                        onClick: t.showVehicleInHangar,
                                    },
                                    a().createElement(be, { text: lt.previewButtonText() }),
                                ),
                        );
                    }),
                    ct = 'Header_base_4a',
                    At = 'Header_title_c0',
                    _t = 'Header_subTitle_8f',
                    mt = R.strings.paragons.rewardsView.header,
                    Ft = (0, r.memo)(({ level: u, isSelectedReward: e }) =>
                        a().createElement(
                            'div',
                            { className: ct },
                            a().createElement(be, { className: At, text: mt.title() }),
                            !e &&
                                a().createElement(be, {
                                    className: _t,
                                    text: mt.subTitle(),
                                    format: { binding: { level: u } },
                                }),
                        ),
                    ),
                    Dt = 'App_base_9c',
                    dt = 'App_vignette_91',
                    Bt = 'App_header_0d',
                    Ct = 'App_content_50',
                    gt = 'App_close_9a',
                    ht = 'App_footer_3e',
                    pt = (0, C.Pi)(() => {
                        const u = iu(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            s = n.chapterLevel,
                            i = n.selectedVehicle,
                            o = e.computes.getFooterShowDelay();
                        var E;
                        ((E = t.close), B(F.n.ESCAPE, E));
                        const c = (0, g.useSpring)({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                            delay: o + 900,
                            config: { duration: p, easing: h },
                        });
                        return (
                            (0, r.useEffect)(() => {
                                l(R.sounds.gui_reward_screen_general());
                            }, []),
                            a().createElement(
                                'div',
                                { className: Dt },
                                a().createElement('div', { className: dt }),
                                a().createElement(
                                    'div',
                                    { className: Bt },
                                    a().createElement(Ft, { isSelectedReward: i, level: s }),
                                ),
                                a().createElement('div', { className: Ct }, a().createElement(nt, null)),
                                a().createElement(_, {
                                    caption: R.strings.early_access.rewardsView.header.closeButtonText(),
                                    type: 'close',
                                    side: 'right',
                                    classNames: { base: gt },
                                    onClick: t.close,
                                }),
                                a().createElement(
                                    g.animated.div,
                                    { className: ht, style: c },
                                    a().createElement(Et, null),
                                ),
                            )
                        );
                    });
                var bt = t(926),
                    vt = t.n(bt);
                const wt = ['children', 'className'];
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const St = {
                        [pu.ExtraSmall]: '',
                        [pu.Small]: vt().SMALL_WIDTH,
                        [pu.Medium]: `${vt().SMALL_WIDTH} ${vt().MEDIUM_WIDTH}`,
                        [pu.Large]: `${vt().SMALL_WIDTH} ${vt().MEDIUM_WIDTH} ${vt().LARGE_WIDTH}`,
                        [pu.ExtraLarge]: `${vt().SMALL_WIDTH} ${vt().MEDIUM_WIDTH} ${vt().LARGE_WIDTH} ${vt().EXTRA_LARGE_WIDTH}`,
                    },
                    ft = {
                        [bu.ExtraSmall]: '',
                        [bu.Small]: vt().SMALL_HEIGHT,
                        [bu.Medium]: `${vt().SMALL_HEIGHT} ${vt().MEDIUM_HEIGHT}`,
                        [bu.Large]: `${vt().SMALL_HEIGHT} ${vt().MEDIUM_HEIGHT} ${vt().LARGE_HEIGHT}`,
                        [bu.ExtraLarge]: `${vt().SMALL_HEIGHT} ${vt().MEDIUM_HEIGHT} ${vt().LARGE_HEIGHT} ${vt().EXTRA_LARGE_HEIGHT}`,
                    },
                    Rt = {
                        [hu.ExtraSmall]: '',
                        [hu.Small]: vt().SMALL,
                        [hu.Medium]: `${vt().SMALL} ${vt().MEDIUM}`,
                        [hu.Large]: `${vt().SMALL} ${vt().MEDIUM} ${vt().LARGE}`,
                        [hu.ExtraLarge]: `${vt().SMALL} ${vt().MEDIUM} ${vt().LARGE} ${vt().EXTRA_LARGE}`,
                    },
                    Tt = (u) => {
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
                            })(u, wt);
                        const n = vu(),
                            s = n.mediaWidth,
                            i = n.mediaHeight,
                            l = n.mediaSize;
                        return a().createElement('div', xt({ className: o()(t, St[s], ft[i], Rt[l]) }, r), e);
                    },
                    Mt = ['children'];
                const yt = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) ((t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, Mt);
                    return a().createElement(gu, null, a().createElement(Tt, t, e));
                };
                engine.whenReady.then(() => {
                    s().render(
                        a().createElement(su, null, a().createElement(yt, null, a().createElement(pt, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, r] = deferred[o], n = !0, s = 0; s < e.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, r];
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
        (__webpack_require__.j = 755),
        (() => {
            var u = { 755: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        a,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); o < n.length; o++)
                        ((a = n[o]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [454], () => __webpack_require__(327));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
