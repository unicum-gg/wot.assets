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
                (t.r(e), t.d(e, { mouse: () => o, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    i = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${e}`,
                                            o = i[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((u.enabled = !1), r());
                            },
                            enable() {
                                ((u.enabled = !0), r());
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
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    }));
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
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
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => d,
                        getSize: () => A,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => w,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
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
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function m(u) {
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
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
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
                    w = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => a });
                const r = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = a),
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
                    a = {
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
                let r, n;
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
                    })(n || (n = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(3138);
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
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                t.d(e, { ry: () => C });
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
                const n = r;
                var a = t(1358);
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
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    D = t(3138);
                const d = ['args'];
                function m(u, e, t, r, n, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            m(a, r, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            m(a, r, n, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    h = () => g(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var f = t(7572);
                const v = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = D.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + i.x,
                                    y: D.O.view.pxToRem(E) + i.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(A),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: a,
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
                            p(u, h);
                        },
                        handleViewEvent: g,
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
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            164: (u, e, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => Au,
                        Bar: () => lu,
                        DefaultScroll: () => cu,
                        Direction: () => J,
                        defaultSettings: () => uu,
                        useHorizontalScrollApi: () => tu,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => vu, Bar: () => hu, Default: () => fu, useVerticalScrollApi: () => Fu }));
                var a = t(6179),
                    i = t.n(a);
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
                const A = s.O.client.getSize('rem'),
                    F = A.width,
                    _ = A.height,
                    D = Object.assign({ width: F, height: _ }, c(F, _, l)),
                    d = (0, a.createContext)(D),
                    m = ['children'],
                    B = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, m);
                        const r = (0, a.useContext)(d),
                            n = r.extraLarge,
                            i = r.large,
                            s = r.medium,
                            l = r.small,
                            E = r.extraSmall,
                            c = r.extraLargeWidth,
                            A = r.largeWidth,
                            F = r.mediumWidth,
                            _ = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            C = r.largeHeight,
                            g = r.mediumHeight,
                            h = r.smallHeight,
                            p = r.extraSmallHeight,
                            f = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && c) return o(e, t, f);
                            if (t.largeWidth && A) return o(e, t, f);
                            if (t.mediumWidth && F) return o(e, t, f);
                            if (t.smallWidth && _) return o(e, t, f);
                            if (t.extraSmallWidth && D) return o(e, t, f);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && h) return e;
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
                const C = (0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(d),
                        t = (0, a.useState)(e),
                        r = t[0],
                        n = t[1],
                        o = (0, a.useCallback)((u, e) => {
                            const t = s.O.view.pxToRem(u),
                                r = s.O.view.pxToRem(e);
                            n(Object.assign({ width: t, height: r }, c(t, r, l)));
                        }, []);
                    (((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return i().createElement(d.Provider, { value: E }, u);
                });
                var g = t(6483),
                    h = t.n(g),
                    p = t(926),
                    f = t.n(p);
                let v, b, x;
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
                    })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(x || (x = {})));
                const w = () => {
                        const u = (0, a.useContext)(d),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
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
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case u.largeWidth:
                                        return b.Large;
                                    case u.mediumWidth:
                                        return b.Medium;
                                    case u.smallWidth:
                                        return b.Small;
                                    case u.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [x.ExtraSmall]: '',
                        [x.Small]: f().SMALL_HEIGHT,
                        [x.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [x.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    N = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, S);
                        const n = w(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            s = n.mediaSize;
                        return i().createElement('div', M({ className: h()(t, L[a], y[o], T[s]) }, r), e);
                    },
                    O = ['children'],
                    H = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, O);
                        return i().createElement(C, null, i().createElement(N, t, e));
                    };
                var P = t(493),
                    k = t.n(P);
                function W(u) {
                    engine.call('PlaySound', u);
                }
                const I = {
                        playHighlight() {
                            W('highlight');
                        },
                        playClick() {
                            W('play');
                        },
                        playYes() {
                            W('yes1');
                        },
                    },
                    G = {
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
                let U, z;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(U || (U = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(z || (z = {})));
                const j = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: _,
                    onClick: D,
                }) => {
                    const d = (0, a.useRef)(null),
                        m = (0, a.useState)(t),
                        B = m[0],
                        C = m[1],
                        g = (0, a.useState)(!1),
                        p = g[0],
                        f = g[1],
                        v = (0, a.useState)(!1),
                        b = v[0],
                        x = v[1],
                        w = (0, a.useCallback)(() => {
                            n || (d.current && (d.current.focus(), C(!0)));
                        }, [n]),
                        S = (0, a.useCallback)(
                            (u) => {
                                B && null !== d.current && !d.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                n || (D && D(u));
                            },
                            [n, D],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                n || (null !== s && W(s), E && E(u), x(!0));
                            },
                            [n, s, E],
                        ),
                        y = (0, a.useCallback)(
                            (u) => {
                                c && c(u);
                            },
                            [c],
                        ),
                        T = (0, a.useCallback)(
                            (u) => {
                                n || (F && F(u), f(!1));
                            },
                            [n, F],
                        ),
                        N = (0, a.useCallback)(
                            (u) => {
                                n || (null !== l && W(l), A && A(u), t && w(), f(!0));
                            },
                            [n, l, A, w, t],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                n || (_ && _(u), f(!1));
                            },
                            [n, _],
                        ),
                        H = h()(
                            G.base,
                            G[`base__${r}`],
                            {
                                [G.base__disabled]: n,
                                [G[`base__${e}`]]: e,
                                [G.base__focus]: B,
                                [G.base__highlightActive]: p,
                                [G.base__firstHover]: b,
                            },
                            o,
                        ),
                        P = h()(G.state, G.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: d,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: y,
                                onMouseUp: T,
                                onMouseDown: N,
                                onMouseLeave: O,
                                onClick: M,
                            },
                            r !== U.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: G.back }),
                                    i().createElement('span', { className: G.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: P },
                                i().createElement('span', { className: G.stateDisabled }),
                                i().createElement('span', { className: G.stateHighlightHover }),
                                i().createElement('span', { className: G.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: G.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                j.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = (0, a.memo)(j),
                    X = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (e = u()));
                                });
                            })),
                            () => {
                                ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    V = (u, e, t) => (t < u ? u : t > e ? e : t),
                    K = [];
                function Y(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), K)
                    );
                }
                function q(u, e, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([e]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => u(t, !0), e)), u(t, !1));
                        }, i),
                        n,
                    ];
                }
                function Z(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                var Q = t(8552);
                let J;
                !(function (u) {
                    ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'));
                })(J || (J = {}));
                const uu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    eu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return V(n, a, t);
                        };
                        return (l = {}) => {
                            const E = l.settings,
                                c = void 0 === E ? uu : E,
                                A = (0, a.useRef)(null),
                                F = (0, a.useRef)(null),
                                _ = (() => {
                                    const u = (0, a.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        n = (u, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (u, e) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && u[Symbol.iterator]) ||
                                                            u['@@iterator'];
                                                        if (t) return (t = t.call(u)).next.bind(t);
                                                        if (
                                                            Array.isArray(u) ||
                                                            (t = (function (u, e) {
                                                                if (u) {
                                                                    if ('string' == typeof u) return Z(u, e);
                                                                    var t = Object.prototype.toString
                                                                        .call(u)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            u.constructor &&
                                                                            (t = u.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(u)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? Z(u, e)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(u)) ||
                                                            (e && u && 'number' == typeof u.length)
                                                        ) {
                                                            t && (u = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= u.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: u[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(e(u).values());
                                                !(r = n()).done;
                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                D = (function (u, e, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (u, e, t, r) {
                                                let n,
                                                    a = !1,
                                                    i = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        E = Date.now() - i;
                                                    function c() {
                                                        ((i = Date.now()), t.apply(l, s));
                                                    }
                                                    a ||
                                                        (r && !n && c(),
                                                        o(),
                                                        void 0 === r && E > u
                                                            ? c()
                                                            : !0 !== e &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : c,
                                                                  void 0 === r ? u - E : u,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                                    (s.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, u),
                                        e,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                d = (0, Q.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), _.trigger('change', u), i && D());
                                    },
                                    onRest: (u) => _.trigger('rest', u),
                                    onStart: (u) => _.trigger('start', u),
                                    onPause: (u) => _.trigger('pause', u),
                                })),
                                m = d[0],
                                B = d[1],
                                C = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = m.scrollPosition.get(),
                                            a = (null != (r = m.scrollPosition.goal) ? r : 0) - n;
                                        return o(u, e * t + a + n);
                                    },
                                    [m.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = A.current;
                                        r &&
                                            B.start({
                                                scrollPosition: o(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(r, m.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, m.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (u) => {
                                        const e = A.current,
                                            t = F.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, c.step),
                                            a = C(e, u, r);
                                        g(a);
                                    },
                                    [g, C, c.step],
                                ),
                                p = (0, a.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && h(r(u)),
                                            A.current && _.trigger('mouseWheel', u, m.scrollPosition, e(A.current)));
                                    },
                                    [m.scrollPosition, h, _],
                                ),
                                f = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...e) => {
                                            (t.current && t.current(), (t.current = u(...e)));
                                        }, e);
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
                                        X(() => {
                                            const u = A.current;
                                            u &&
                                                (g(o(u, m.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [g, m.scrollPosition.goal],
                                ),
                                v = Y(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = o(u, m.scrollPosition.goal);
                                    (e !== m.scrollPosition.goal && g(e, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            const b = (0, a.useCallback)((u) => _.trigger('isThumbDraggingChanged', u), [_]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? n(F.current) : void 0),
                                    getContainerSize: () => (A.current ? u(A.current) : void 0),
                                    getBounds: () =>
                                        A.current
                                            ? e(A.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: h,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: B,
                                    animationScroll: m,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [m.scrollPosition, g, h, b, _.off, _.on, v, p, B, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    tu = eu({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? J.Next : J.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ru = 'HorizontalBar_base__nonActive_82',
                    nu = 'disable',
                    au = { pending: !1, offset: 0 },
                    iu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    ou = () => {},
                    su = (u, e) => Math.max(20, u.offsetWidth * e),
                    lu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = iu, onDrag: r = ou }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            c = u.stepTimeout || 100,
                            A = (0, a.useState)(au),
                            F = A[0],
                            _ = A[1],
                            D = (0, a.useCallback)(
                                (u) => {
                                    (_(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            d = () => {
                                const e = l.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    c = V(0, 1, a / (n - r)),
                                    A = (e.offsetWidth - su(e, i)) * c;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && s.current && l.current && E.current) {
                                            if (0 === u)
                                                return (
                                                    o.current.classList.add(nu),
                                                    void s.current.classList.remove(nu)
                                                );
                                            if (
                                                ((e = l.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(nu),
                                                    void s.current.classList.add(nu)
                                                );
                                            var e, t;
                                            (o.current.classList.remove(nu), s.current.classList.remove(nu));
                                        }
                                    })(A));
                            },
                            m = Y(() => {
                                ((() => {
                                    const e = E.current,
                                        t = l.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    ((e.style.width = `${su(t, i)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add(ru) : n.current.classList.remove(ru)));
                                })(),
                                    d());
                            });
                        ((0, a.useEffect)(() => X(m)),
                            (0, a.useEffect)(
                                () =>
                                    X(() => {
                                        const e = () => {
                                            d();
                                        };
                                        let t = ou;
                                        const r = () => {
                                            (t(), (t = X(m)));
                                        };
                                        return (
                                            u.events.on('recalculateContent', m),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    u.events.off('recalculateContent', m),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, a.useEffect)(() => {
                                if (!F.pending) return;
                                const e = (e) => {
                                        var t;
                                        const n = u.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            i = E.current;
                                        if (!n || !a || !i) return;
                                        const o = e.screenX - F.offset - a.getBoundingClientRect().x,
                                            s = (o / a.offsetWidth) * (null != (t = u.getContainerSize()) ? t : 0);
                                        (u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(n, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: s }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', e), D(au));
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [u, F.offset, F.pending, r, D]));
                        const B = q((e) => u.applyStepTo(e), c, [u]),
                            C = B[0],
                            g = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const p = (u) => {
                            u.target.classList.contains(nu) || W('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()('HorizontalBar_base_49', e.base), ref: n, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: h()('HorizontalBar_leftButton_5f', e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(nu) || 0 !== u.button || (W('play'), C(J.Next));
                                },
                                onMouseUp: g,
                                ref: o,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()('HorizontalBar_track_0d', e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        r &&
                                            0 === e.button &&
                                            (W('play'),
                                            e.target === r
                                                ? D({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x })
                                                : ((e) => {
                                                      const r = E.current,
                                                          n = u.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(u);
                                                      u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                  })(e.screenX > r.getBoundingClientRect().x ? J.Prev : J.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: E, className: h()('HorizontalBar_thumb_fd', e.thumb) }),
                                i().createElement('div', { className: h()('HorizontalBar_rail_32', e.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()('HorizontalBar_rightButton_03', e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(nu) || 0 !== u.button || (W('play'), C(J.Prev));
                                },
                                onMouseUp: g,
                                ref: s,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Eu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    cu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const c = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: h()(Eu.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: h()(Eu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(Eu.defaultScrollArea, n) },
                                i().createElement(Au, { className: s, api: A, classNames: o }, u),
                            ),
                            i().createElement(lu, { getStepByRailClick: l, api: e, onDrag: E, classNames: c }),
                        );
                    },
                    Au = ({ api: u, className: e, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => X(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Eu.base, e), style: n },
                            i().createElement(
                                'div',
                                {
                                    className: h()(Eu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: h()(Eu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Au.Bar = lu),
                    (Au.Default = cu),
                    (Au.SeniorityAwards = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => X(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Eu.base, e) },
                            i().createElement(
                                'div',
                                { className: h()(Eu.wrapper, null == t ? void 0 : t.wrapper), ref: u.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: h()(Eu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const Fu = eu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? J.Next : J.Prev),
                    }),
                    _u = 'VerticalBar_base__nonActive_42',
                    Du = 'disable',
                    du = () => {},
                    mu = { pending: !1, offset: 0 },
                    Bu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Cu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    gu = (u, e) => Math.max(20, u.offsetHeight * e),
                    hu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Bu, onDrag: r = du }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            c = u.stepTimeout || 100,
                            A = (0, a.useState)(mu),
                            F = A[0],
                            _ = A[1],
                            D = (0, a.useCallback)(
                                (u) => {
                                    (_(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            d = Y(() => {
                                const e = E.current,
                                    t = l.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${gu(t, i)}px`),
                                    e.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(_u) : n.current.classList.remove(_u)),
                                    i
                                );
                            }),
                            m = Y(() => {
                                const e = l.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    c = V(0, 1, a / (n - r)),
                                    A = (e.offsetHeight - gu(e, i)) * c;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && s.current && l.current && E.current) {
                                            if (0 === u)
                                                return (
                                                    o.current.classList.add(Du),
                                                    void s.current.classList.remove(Du)
                                                );
                                            if (
                                                ((e = l.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Du),
                                                    void s.current.classList.add(Du)
                                                );
                                            var e, t;
                                            (o.current.classList.remove(Du), s.current.classList.remove(Du));
                                        }
                                    })(A));
                            }),
                            B = Y(() => {
                                Cu(u, () => {
                                    (d(), m());
                                });
                            });
                        ((0, a.useEffect)(() => X(B)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    Cu(u, () => {
                                        m();
                                    });
                                };
                                let t = du;
                                const r = () => {
                                    (t(), (t = X(B)));
                                };
                                return (
                                    u.events.on('recalculateContent', B),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', B),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r));
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!F.pending) return;
                                const e = (e) => {
                                        Cu(u, (t) => {
                                            const n = l.current,
                                                a = E.current,
                                                i = u.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const o = e.screenY - F.offset - n.getBoundingClientRect().y,
                                                s = (o / n.offsetHeight) * i;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', e),
                                            u.handleIsThumbDragging(!1),
                                            D(mu));
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [u, F.offset, F.pending, r, D]));
                        const C = q((e) => u.applyStepTo(e), c, [u]),
                            g = C[0],
                            p = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (u) => {
                            u.target.classList.contains(Du) || W('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', e.base), ref: n, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Du) || 0 !== u.button || (W('play'), g(J.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        var n;
                                        r &&
                                            0 === e.button &&
                                            (W('play'),
                                            e.target === r
                                                ? (u.handleIsThumbDragging(!0),
                                                  D({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y }))
                                                : ((n = e.screenY > r.getBoundingClientRect().y ? J.Prev : J.Next),
                                                  E.current &&
                                                      Cu(u, (e) => {
                                                          if (!e) return;
                                                          const r = t(u),
                                                              a = u.clampPosition(e, e.scrollTop + r * n);
                                                          u.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: E, className: e.thumb }),
                                i().createElement('div', { className: h()('VerticalBar_rail_43', e.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Du) || 0 !== u.button || (W('play'), g(J.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    pu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    fu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const c = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: h()(pu.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: h()(pu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(pu.area, n) },
                                i().createElement(vu, { className: o, classNames: s, api: A }, u),
                            ),
                            i().createElement(hu, { getStepByRailClick: l, api: e, onDrag: E, classNames: c }),
                        );
                    },
                    vu = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => X(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(pu.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(pu.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                vu.Default = fu;
                const bu = { Vertical: n, Horizontal: r };
                var xu = t(9887),
                    wu = t.n(xu);
                const Su = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Mu = (u) => u.includes('_') && ((u) => Su.includes(u))(u.split('_').at(-1)),
                    Lu = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    yu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (Mu(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Lu.indexOf(e),
                                    i = (-1 !== a ? Su.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : u[n]), t);
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => Su.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Tu = (u, e = yu) => {
                        const t = (
                            (u, e = yu) =>
                            (t) => {
                                const r = w().mediaSize,
                                    n = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return i().createElement(u, n);
                            }
                        )(u, e);
                        return i().memo((e) =>
                            Object.keys(e).some((u) => Mu(u) && void 0 !== e[u])
                                ? i().createElement(t, e)
                                : i().createElement(u, e),
                        );
                    },
                    Ru = {
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
                    Nu = [
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
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                Object.keys(wu());
                const Hu = {
                        XL: { mt: Ru.mt__XL, mr: Ru.mr__XL, mb: Ru.mb__XL, ml: Ru.ml__XL },
                        LG: { mt: Ru.mt__LG, mr: Ru.mr__LG, mb: Ru.mb__LG, ml: Ru.ml__LG },
                        MDp: { mt: Ru.mt__MDp, mr: Ru.mr__MDp, mb: Ru.mb__MDp, ml: Ru.ml__MDp },
                        MD: { mt: Ru.mt__MD, mr: Ru.mr__MD, mb: Ru.mb__MD, ml: Ru.ml__MD },
                        SMp: { mt: Ru.mt__SMp, mr: Ru.mr__SMp, mb: Ru.mb__SMp, ml: Ru.ml__SMp },
                        SM: { mt: Ru.mt__SM, mr: Ru.mr__SM, mb: Ru.mb__SM, ml: Ru.ml__SM },
                        XS: { mt: Ru.mt__XS, mr: Ru.mr__XS, mb: Ru.mb__XS, ml: Ru.ml__XS },
                    },
                    Pu = (Object.keys(Hu), ['mt', 'mr', 'mb', 'ml']),
                    ku = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Wu = Tu((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            n = u.m,
                            o = u.mt,
                            s = void 0 === o ? n : o,
                            l = u.mr,
                            E = void 0 === l ? n : l,
                            c = u.mb,
                            A = void 0 === c ? n : c,
                            F = u.ml,
                            _ = void 0 === F ? n : F,
                            D = u.column,
                            d = u.row,
                            m = u.flexDirection,
                            B = void 0 === m ? (D ? 'column' : d && 'row') || void 0 : m,
                            C = u.flexStart,
                            g = u.center,
                            p = u.flexEnd,
                            f = u.spaceBetween,
                            v = u.spaceAround,
                            b = u.justifyContent,
                            x =
                                void 0 === b
                                    ? (C ? 'flex-start' : g && 'center') ||
                                      (p && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            w = u.alignItems,
                            S = void 0 === w ? (C ? 'flex-start' : g && 'center') || (p && 'flex-end') || void 0 : w,
                            M = u.alignSelf,
                            L = u.wrap,
                            y = u.flexWrap,
                            T = void 0 === y ? (L ? 'wrap' : void 0) : y,
                            R = u.grow,
                            N = u.shrink,
                            O = u.flex,
                            H = void 0 === O ? (R || N ? `${R ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
                            P = u.style,
                            k = u.children,
                            W = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Nu);
                        const I = (0, a.useMemo)(() => {
                                const u = { mt: s, mr: E, mb: A, ml: _ },
                                    e = ((u) =>
                                        Pu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(Hu[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        Pu.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[ku[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: H,
                                        alignSelf: M,
                                        display: B || S ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: T,
                                        justifyContent: x,
                                        alignItems: S,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, s, E, A, _, P, H, M, B, T, x, S]),
                            G = I.computedStyle,
                            U = I.computedClassNames;
                        return i().createElement('div', Ou({ className: h()(Ru.base, ...U, e), style: G }, W), k);
                    });
                let Iu;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Iu || (Iu = {}));
                const Gu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Uu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    zu = (u, e, t = Iu.left) => u.split(e).reduce(t === Iu.left ? Gu : Uu, []),
                    ju = (() => {
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
                    $u = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Xu = ({ binding: u, text: e = '', classMix: t, alignment: r = Iu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, n) =>
                                      i().createElement(
                                          'div',
                                          { className: h()('FormatText_base_d0', t), key: `${e}-${n}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = Iu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return $u.includes(t)
                                                                ? ju(u)
                                                                : ((u, e = Iu.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          zu(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(zu(u, r, Iu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              i().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Vu = t(3532),
                    Ku = t.n(Vu);
                const Yu = {
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
                    qu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                Object.keys(wu());
                const Qu = Object.keys(Ku()),
                    Ju = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ue = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ee = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    te =
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
                            'heading-H56': Ju,
                            'heading-H36': Ju,
                            'heading-H28': ue,
                            'heading-H24': ue,
                            'heading-H24R': ue,
                            'heading-H22': ue,
                            'heading-H20R': ue,
                            'heading-H18': ue,
                            'heading-H15': ee,
                            'heading-H14': ee,
                            'paragraph-P24': ue,
                            'paragraph-P18': ue,
                            'paragraph-P16': ue,
                            'paragraph-P14': ee,
                            'paragraph-P12': ee,
                            'paragraph-P10': ee,
                        }),
                    re =
                        (Object.keys(te),
                        (u) =>
                            u
                                ? ((u) => Qu.includes(u))(u)
                                    ? { colorClassName: Yu[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    ne = Tu((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            n = u.color,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            E = u.mr,
                            c = void 0 === E ? o : E,
                            A = u.mb,
                            F = void 0 === A ? o : A,
                            _ = u.ml,
                            D = void 0 === _ ? o : _,
                            d = u.style,
                            m = u.format,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, qu);
                        const C = (0, a.useMemo)(() => {
                                const u = re(n),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, d, r), colorClassName: e };
                            }, [d, n]),
                            g = C.computedStyle,
                            p = C.colorClassName;
                        return i().createElement(
                            Wu,
                            Zu(
                                {
                                    className: h()(Yu.base, t && Yu[t], p, r),
                                    style: g,
                                    mt: !0 === l ? te[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === c ? te[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === F ? te[t || 'paragraph-P16'].mb : F,
                                    ml: !0 === D ? te[t || 'paragraph-P16'].ml : D,
                                },
                                B,
                            ),
                            void 0 !== m ? i().createElement(Xu, Zu({}, m, { text: e })) : e,
                        );
                    }),
                    ae = {
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
                    ie = [
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
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                class se extends i().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick));
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
                            a = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, ie)),
                            F = h()(ae.base, ae[`base__${a}`], ae[`base__${n}`], null == o ? void 0 : o.base),
                            _ = h()(ae.icon, ae[`icon__${a}`], ae[`icon__${n}`], null == o ? void 0 : o.icon),
                            D = h()(ae.glow, null == o ? void 0 : o.glow),
                            d = h()(ae.caption, ae[`caption__${a}`], null == o ? void 0 : o.caption),
                            m = h()(ae.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            oe(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && i().createElement('div', { className: ae.shine }),
                            i().createElement('div', { className: _ }, i().createElement('div', { className: D })),
                            i().createElement('div', { className: d }, e),
                            r && i().createElement('div', { className: m }, r),
                        );
                    }
                }
                se.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var le = t(5521);
                t(4179);
                const Ee = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ce(u = le.n.NONE, e = Ee, t = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== le.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), e(r), t && r.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                function Ae() {
                    const u = (0, a.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.clearTimeout(u.current);
                        }),
                        (0, a.useEffect)(() => e, []),
                        (0, a.useMemo)(
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
                var Fe = t(3282);
                function _e() {
                    return !1;
                }
                console.log;
                var De = t(3915);
                function de(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const me = (u) => (0 === u ? window : window.subViews.get(u)),
                    Be = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: n, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    E = (u, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = me,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = s.O.view.addModelObserver(o, e, !0);
                                                        return (n.set(l, t), u && t(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return de(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? de(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;
                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            E = (u) => l.current.push(u),
                                            c = (({ observableModel: u }) => {
                                                const e = { root: u.object() };
                                                return Object.assign({}, e, { computes: {} });
                                            })({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            n = De.observable.box(r, { equals: _e });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, De.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            n = De.observable.box(r, { equals: _e });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, De.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = De.observable.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, De.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = De.observable.box(r[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, De.action)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && r ? r.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    A = (0, a.useState)(u),
                                    F = A[0],
                                    _ = A[1],
                                    D = (0, a.useState)(() => E(u, r, o)),
                                    d = D[0],
                                    m = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? m(E(F, r, o)) : (c.current = !0);
                                    }, [o, F, r]),
                                    (0, a.useEffect)(() => {
                                        _(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (d.externalModel.dispose(), l.current.forEach((u) => u()));
                                        },
                                        [d],
                                    ),
                                    i().createElement(t.Provider, { value: d }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({
                        onClose: u.createCallbackNoArgs('onClose'),
                        onCardInteract: u.createCallback((u, e) => ({ enable: u, isVideoCard: e }), 'onCardInteract'),
                    })),
                    Ce = Be[0],
                    ge = Be[1],
                    he = {
                        base: 'App_base_e9',
                        fadeIn: 'App_fadeIn_97',
                        base__hide: 'App_base__hide_3b',
                        fadeOut: 'App_fadeOut_28',
                        backTextButton: 'App_backTextButton_92',
                        header: 'App_header_fd',
                        header__visible: 'App_header__visible_ec',
                        title: 'App_title_a9',
                        description: 'App_description_c4',
                        content: 'App_content_d3',
                        wrapper: 'App_wrapper_c0',
                        card: 'App_card_62',
                        card__selected: 'App_card__selected_84',
                        card__notActive: 'App_card__notActive_15',
                        card__closed: 'App_card__closed_52',
                        cardHover: 'App_cardHover_fb',
                        cardHover__visible: 'App_cardHover__visible_54',
                        cardImage: 'App_cardImage_e1',
                        cardText: 'App_cardText_f9',
                        cardNetWithPinContainer: 'App_cardNetWithPinContainer_56',
                        cardNetWithPinContainer__notActive: 'App_cardNetWithPinContainer__notActive_5e',
                        net: 'App_net_66',
                        cardNetWithPinContainer__1: 'App_cardNetWithPinContainer__1_e5',
                        cardNetWithPinContainer__2: 'App_cardNetWithPinContainer__2_3f',
                        cardNetWithPinContainer__3: 'App_cardNetWithPinContainer__3_be',
                        cardNetWithPinContainer__4: 'App_cardNetWithPinContainer__4_53',
                        cardNetWithPinContainer__5: 'App_cardNetWithPinContainer__5_02',
                        cardNetWithPinContainer__6: 'App_cardNetWithPinContainer__6_ae',
                        pin: 'App_pin_ea',
                        cardNetWithPinContainer__7: 'App_cardNetWithPinContainer__7_db',
                        largeCardText: 'App_largeCardText_58',
                        largeCardTextTitle: 'App_largeCardTextTitle_14',
                        largeCardTextDescription: 'App_largeCardTextDescription_e3',
                        scrollBarHolder: 'App_scrollBarHolder_be',
                        scrollBarHolder__visible: 'App_scrollBarHolder__visible_36',
                        scrollBar: 'App_scrollBar_95',
                        backFromCardButton: 'App_backFromCardButton_a6',
                        backFromCardButton__visible: 'App_backFromCardButton__visible_ff',
                    },
                    pe = R.strings.ny.petStory,
                    fe = [1, 2, 3, 4, 5, 6, 7],
                    ve = 100,
                    be = {
                        1: { x: 80, y: -50, r: -3 },
                        2: { x: 320, y: -80, r: 4.46 },
                        3: { x: 564, y: -20, r: -1.46 },
                        4: { x: 794, y: -45, r: 8.66 },
                        5: { x: 1040, y: -80, r: -6.12 },
                        6: { x: 1297, y: -60, r: 4.04 },
                        7: { x: 1537, y: -30, r: -3.3 },
                    },
                    xe = {},
                    we = (0, Fe.observer)(() => {
                        const u = ge(),
                            e = u.controls,
                            t = u.model.root.get(),
                            r = t.currentStep,
                            n = t.isVideoCardClosed,
                            o = (0, a.useState)(!1),
                            l = o[0],
                            E = o[1],
                            c = (0, a.useState)(null),
                            A = c[0],
                            F = c[1],
                            _ = (0, a.useState)(null),
                            D = _[0],
                            d = _[1],
                            m = (0, a.useState)(null),
                            B = m[0],
                            C = m[1],
                            g = (0, a.useState)(0),
                            p = g[0],
                            f = g[1],
                            v = (0, a.useState)(!0),
                            b = v[0],
                            x = v[1],
                            w = Ae(),
                            S = Ae(),
                            M = bu.Horizontal.useHorizontalScrollApi(),
                            L = (0, a.useMemo)(
                                () =>
                                    Object.assign({}, M, {
                                        handleMouseWheel: (u) => {
                                            D || M.handleMouseWheel(u);
                                        },
                                    }),
                                [D, M],
                            );
                        (0, a.useEffect)(() => {
                            const u = () => {
                                const u = L.animationScroll.scrollPosition.goal;
                                f(u);
                            };
                            return (
                                L.events.on('change', u),
                                L.events.on('recalculateContent', u),
                                L.events.on('resizeHandled', u),
                                () => {
                                    (L.events.off('change', u),
                                        L.events.off('recalculateContent', u),
                                        L.events.off('resizeHandled', u));
                                }
                            );
                        }, [L]);
                        const y = (0, a.useCallback)(() => {
                                (W(R.sounds.hangar_newyear_woosh_screen()),
                                    E(!0),
                                    S.run(() => {
                                        e.onClose();
                                    }, 300));
                            }, [S, e]),
                            T = (0, a.useCallback)(() => {
                                (d(null),
                                    e.onCardInteract(!1, !1),
                                    w.run(() => {
                                        (x(!0), C(null));
                                    }, 600));
                            }, [e, w]);
                        (!(function ({
                            key: u = le.n.ESCAPE,
                            callback: e = () => s.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            ce(u, e, t);
                        })({ callback: null === D ? y : T }),
                            (0, a.useEffect)(() => {
                                D === ve && n && T();
                            }, [D, n, T]));
                        const N = () => {
                                F(null);
                            },
                            O = (0, a.useCallback)(
                                (u) =>
                                    `translateX(${D === u ? (s.O.view.getSize('rem').width > 1920 ? 960 : s.O.view.getSize('rem').width / 2) - 475 + s.O.view.pxToRem(p) : be[String(u)].x}rem) translateY(${D === u ? -60 : be[String(u)].y}%) rotate(${D === u ? 0 : be[String(u)].r}deg)`,
                                [D, p],
                            );
                        return i().createElement(
                            'div',
                            { className: h()(he.base, l && he.base__hide) },
                            i().createElement(se, {
                                classNames: { base: he.backTextButton },
                                type: 'back',
                                caption: pe.backButtonLabel(),
                                goto: null === D ? pe.backButtonGoToLabel() : pe.backButtonGoToLabelStories(),
                                onClick: null === D ? y : T,
                            }),
                            i().createElement(
                                'div',
                                { className: h()(he.header, !D && he.header__visible) },
                                i().createElement(ne, { className: he.title, text: pe.title() }),
                                i().createElement(ne, { className: he.description, text: pe.description() }),
                            ),
                            i().createElement(
                                bu.Horizontal.Area,
                                { api: L, classNames: { content: h()(he.content, D && he.content__active) } },
                                i().createElement(
                                    'div',
                                    { className: he.content },
                                    i().createElement(
                                        'div',
                                        { className: h()(he.wrapper, D && he.wrapper__active) },
                                        fe.map((u) =>
                                            i().createElement(
                                                'div',
                                                {
                                                    key: u,
                                                    className: h()(
                                                        he.card,
                                                        r < u && he.card__closed,
                                                        D === u && he.card__selected,
                                                        null !== D && D !== u && he.card__notActive,
                                                    ),
                                                    onClick: () =>
                                                        ((u) => {
                                                            if (null === D && r >= u) {
                                                                (w.isRunning && w.clear(),
                                                                    F(null),
                                                                    I.playClick(),
                                                                    W(R.sounds.hangar_newyear_cards_info()),
                                                                    x(!1));
                                                                const t = 1 === u;
                                                                (e.onCardInteract(!0, t), t ? d(ve) : (d(u), C(u)));
                                                            }
                                                        })(u),
                                                    onMouseEnter: () => {
                                                        var e;
                                                        r >= (e = u) &&
                                                            null === D &&
                                                            (W(R.sounds.gui_hangar_hover()), F(e));
                                                    },
                                                    onMouseLeave: N,
                                                    style: { transform: O(u) },
                                                },
                                                r >= u &&
                                                    i().createElement(
                                                        i().Fragment,
                                                        null,
                                                        i().createElement('div', {
                                                            className: he.cardImage,
                                                            style: {
                                                                backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.petStoryView.cardImages.$dyn(`c_${u}`)})`,
                                                            },
                                                        }),
                                                        i().createElement('div', {
                                                            className: h()(
                                                                he.cardHover,
                                                                u === A && he.cardHover__visible,
                                                            ),
                                                        }),
                                                        i().createElement(ne, {
                                                            className: he.cardText,
                                                            text: pe.cardSmallText.$dyn(`c_${u}`),
                                                        }),
                                                    ),
                                            ),
                                        ),
                                        fe.map((u) =>
                                            i().createElement(
                                                'div',
                                                {
                                                    key: u,
                                                    className: h()(
                                                        he.cardNetWithPinContainer,
                                                        he[`cardNetWithPinContainer__${u}`],
                                                        D === u && he.cardNetWithPinContainer__active,
                                                        D && D !== u && he.cardNetWithPinContainer__notActive,
                                                    ),
                                                    style: { transform: O(u) },
                                                },
                                                r >= u &&
                                                    i().createElement(
                                                        i().Fragment,
                                                        null,
                                                        b &&
                                                            u !== fe.length &&
                                                            r > u &&
                                                            i().createElement('div', { className: he.net }),
                                                        (b || B === u) &&
                                                            i().createElement('div', { className: he.pin }),
                                                    ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: h()(he.scrollBarHolder, !D && he.scrollBarHolder__visible) },
                                i().createElement(bu.Horizontal.Bar, { api: L, classNames: { base: he.scrollBar } }),
                            ),
                            D &&
                                D !== ve &&
                                i().createElement(
                                    'div',
                                    { className: he.largeCardText },
                                    i().createElement(ne, {
                                        className: he.largeCardTextTitle,
                                        text: pe.cardLargeText.title.$dyn(`c_${D}`),
                                    }),
                                    i().createElement(ne, {
                                        className: he.largeCardTextDescription,
                                        text: pe.cardLargeText.description.$dyn(`c_${D}`),
                                        format: xe,
                                    }),
                                ),
                            i().createElement(
                                $,
                                {
                                    size: z.medium,
                                    type: U.primary,
                                    mixClass: h()(
                                        he.backFromCardButton,
                                        D && D !== ve && he.backFromCardButton__visible,
                                    ),
                                    onClick: T,
                                },
                                i().createElement(ne, { text: pe.backButton() }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        i().createElement(Ce, null, i().createElement(H, null, i().createElement(we, null))),
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
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
        (__webpack_require__.j = 5574),
        (() => {
            var u = { 5574: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(164));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
