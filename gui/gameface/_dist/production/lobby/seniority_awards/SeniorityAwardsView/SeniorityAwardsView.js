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
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => r }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
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
                                        i = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
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
                        graphicsQuality: () => s,
                    }));
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function g(e, u) {
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
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
                t.d(u, { B3: () => l, Z5: () => s, B0: () => o, ry: () => B, Sy: () => C });
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
                const s = {
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
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            F(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
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
                                })(u, A);
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
                    C = () => g(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var h = t(7572);
                const b = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                _ = i.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(_),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            2464: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => cn,
                        Bar: () => sn,
                        DefaultScroll: () => ln,
                        Direction: () => $t,
                        defaultSettings: () => zt,
                        useHorizontalScrollApi: () => jt,
                    }));
                var a = {};
                (t.r(a), t.d(a, { Area: () => xn, Bar: () => fn, Default: () => Sn, useVerticalScrollApi: () => En }));
                var r = t(6179),
                    s = t.n(r);
                const i = (e, u, t) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                })(c || (c = {}));
                const _ = o.O.client.getSize('rem'),
                    m = _.width,
                    d = _.height,
                    A = Object.assign({ width: m, height: d }, E(m, d, l)),
                    F = (0, r.createContext)(A),
                    D = ['children'];
                const B = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, D);
                    const n = (0, r.useContext)(F),
                        a = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        d = n.smallWidth,
                        A = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return i(u, t, b);
                        if (t.largeWidth && _) return i(u, t, b);
                        if (t.mediumWidth && m) return i(u, t, b);
                        if (t.smallWidth && d) return i(u, t, b);
                        if (t.extraSmallWidth && A) return i(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                B.defaultProps = {
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
                (0, r.memo)(B);
                const g = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = (0, r.memo)(({ children: e }) => {
                        const u = (0, r.useContext)(F),
                            t = (0, r.useState)(u),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []);
                        (g(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', i), [i]));
                        const c = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(F.Provider, { value: c }, e);
                    });
                var p = t(6483),
                    h = t.n(p),
                    b = t(926),
                    v = t.n(b);
                let f, w, S;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const x = () => {
                        const e = (0, r.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
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
                const M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_HEIGHT,
                        [S.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [S.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL,
                        [f.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [f.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [f.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    P = (e) => {
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
                            })(e, y);
                        const a = x(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', T({ className: h()(t, M[r], L[i], N[o]) }, n), u);
                    },
                    O = ['children'];
                const k = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, O);
                    return s().createElement(C, null, s().createElement(P, t, u));
                };
                var I = t(493),
                    H = t.n(I),
                    W = t(9459);
                function U(e) {
                    engine.call('PlaySound', e);
                }
                const G = {
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
                    V = [
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick));
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
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
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
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, V)),
                            m = h()(G.base, G[`base__${r}`], G[`base__${a}`], null == i ? void 0 : i.base),
                            d = h()(G.icon, G[`icon__${r}`], G[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = h()(G.glow, null == i ? void 0 : i.glow),
                            F = h()(G.caption, G[`caption__${r}`], null == i ? void 0 : i.caption),
                            D = h()(G.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            $(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: d }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            n && s().createElement('div', { className: D }, n),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const X = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
                var j = t(5521),
                    Y = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = j.n.NONE, u = q, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== j.n.NONE)
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
                let Q;
                !(function (e) {
                    ((e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z'));
                })(Q || (Q = {}));
                const Z = (e = {}) => {
                    (0, r.useEffect)(() => {
                        const u = (u) => {
                            if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                const t = e[u.keyCode];
                                'function' == typeof t && t(u);
                            }
                        };
                        return (
                            window.addEventListener('keyup', u),
                            () => {
                                window.removeEventListener('keyup', u);
                            }
                        );
                    }, [e]);
                };
                var J = t(8515);
                let ee;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(ee || (ee = {}));
                let ue;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(ue || (ue = {}));
                const te = 'metrics',
                    ne = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    ae = (e, u) => {
                        const t = (0, r.useCallback)(
                            (t, n = ee.Info, a) => {
                                (a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        }));
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    };
                let re, se, ie, oe, le, ce, Ee, _e, me;
                (!(function (e) {
                    e.RewardsScreen = 'sa_rewards_screen';
                })(re || (re = {})),
                    (function (e) {
                        ((e.GoToShopButton = 'goto_shop_button'),
                            (e.ConfirmButton = 'confirm_button'),
                            (e.CloseButton = 'close_button'));
                    })(se || (se = {})),
                    (function (e) {
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
                            (e.PortalEventDiscount25 = 'portalEventDiscountToken'),
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
                            (e.SACoin = 'sacoin'));
                    })(ie || (ie = {})),
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
                    })(oe || (oe = {})),
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
                    })(le || (le = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ce || (ce = {})),
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
                    })(Ee || (Ee = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_e || (_e = {})),
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
                    })(me || (me = {})));
                class de extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Y.B3.GOLD;
                        else e = Y.B3.INTEGRAL;
                        const u = Y.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                de.defaultProps = { format: 'integral' };
                const Ae = [
                        ie.Items,
                        ie.Equipment,
                        ie.Xp,
                        ie.XpFactor,
                        ie.Blueprints,
                        ie.BlueprintsAny,
                        ie.Goodies,
                        ie.Berths,
                        ie.Slots,
                        ie.Tokens,
                        ie.CrewSkins,
                        ie.CrewBooks,
                        ie.Customizations,
                        ie.CreditsFactor,
                        ie.TankmenXp,
                        ie.TankmenXpFactor,
                        ie.FreeXpFactor,
                        ie.BattleToken,
                        ie.PremiumUniversal,
                        ie.NaturalCover,
                        ie.BpCoin,
                        ie.BattlePassSelectToken,
                        ie.BattlaPassFinalAchievement,
                        ie.BattleBadge,
                        ie.BonusX5,
                        ie.CrewBonusX3,
                        ie.NewYearFillers,
                        ie.NewYearInvoice,
                        ie.EpicSelectToken,
                        ie.Comp7TokenWeeklyReward,
                        ie.Comp7TokenCouponReward,
                        ie.BattleBoosterGift,
                        ie.CosmicLootboxCommon,
                        ie.CosmicLootboxSilver,
                        ie.SelectableBonus,
                        ie.GoldenTicket,
                        ie.PostStamp,
                        ie.BlankPersonalMissions_1,
                        ie.BlankPersonalMissions_2,
                        ie.SACoin,
                    ],
                    Fe = [ie.Gold, ie.Credits, ie.Crystal, ie.FreeXp],
                    De = [ie.BattlePassPoints],
                    Be = [ie.PremiumPlus, ie.Premium],
                    ge = (e) =>
                        Ae.includes(e)
                            ? ce.MULTI
                            : Fe.includes(e)
                              ? ce.CURRENCY
                              : De.includes(e)
                                ? ce.NUMBER
                                : Be.includes(e)
                                  ? ce.PREMIUM_PLUS
                                  : ce.STRING,
                    Ce = ['engravings', 'backgrounds'],
                    pe = ['engraving', 'background'],
                    he = (e, u = le.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case le.S600x450:
                                        return 'c_600x450';
                                    case le.S400x300:
                                        return 'c_400x300';
                                    case le.S296x222:
                                        return 'c_296x222';
                                    case le.S232x174:
                                        return 'c_232x174';
                                    case le.Big:
                                        return 'c_80x80';
                                    case le.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case le.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case le.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Ce[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(pe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case le.S600x450:
                                            return 'c_600x450';
                                        case le.S400x300:
                                            return 'c_400x300';
                                        case le.S296x222:
                                            return 'c_296x222';
                                        case le.S232x174:
                                            return 'c_232x174';
                                        case le.S180x135:
                                            return 'big';
                                        case le.Big:
                                        case le.S80x80:
                                            return 'c_80x80';
                                        case le.Small:
                                        case le.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            case 'portal':
                                return `R.images.gui.maps.icons.rewards.${u}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    be = (e, u, t) => {
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
                    ve = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case ce.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case ce.CURRENCY:
                            case ce.NUMBER:
                                return s().createElement(de, { format: 'integral', value: Number(e) });
                            case ce.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
                function fe() {}
                function we() {
                    return !1;
                }
                console.log;
                var Se = t(9174);
                function xe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Re(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Re(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ye = (e) => (0 === e ? window : window.subViews.get(e));
                const Te = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? Te(e) : e)),
                                  Array.isArray(u)
                                      ? u.map(t)
                                      : u.map((e, u, n) => t(null == e ? void 0 : e.value, u, n)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Te(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Te(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    Me = (e) => Te(e);
                var Le = t(3946);
                const Ne = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ye,
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
                                                const s = (e) => {
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
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return (a.set(l, t), e && t(s(r)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = xe(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            _ = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Se.LO.box(n, { equals: we });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Se.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Se.LO.box(n, { equals: we });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Se.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Se.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Se.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Se.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Se.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: _, externalModel: i, cleanup: E };
                                        return {
                                            model: _,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    m = (0, r.useState)(n),
                                    d = m[0],
                                    A = m[1],
                                    F = (0, r.useState)(() => E(n, a, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? B(E(d, a, l)) : (_.current = !0);
                                    }, [l, d, a]),
                                    (0, r.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    s().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    vehicles: e.array('vehicles', []),
                                    bonuses: e.array('bonuses', []),
                                    mainRewards: e.array('mainRewards', []),
                                },
                                t = (0, Le.Om)(() => Me(u.bonuses.get())),
                                n = (0, Le.Om)(() => Me(u.vehicles.get())),
                                a = (0, Le.Om)(() =>
                                    Me(u.mainRewards.get()).map((e) =>
                                        ((e) =>
                                            Object.assign({}, e, {
                                                special: e.overlayType,
                                                value: e.name === ie.Vehicles ? e.label : e.value,
                                                valueType: ge(e.name),
                                                tooltipArgs: be(
                                                    { tooltipId: e.tooltipId },
                                                    Number.parseInt(e.tooltipContentId),
                                                ),
                                            }))(e),
                                    ),
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getBonuses: t,
                                    getHasVehicles: (0, Le.Om)(() => u.vehicles.get().length > 0),
                                    getVehicles: n,
                                    getBonusesLength: (0, Le.Om)(() => u.bonuses.get().length),
                                    getIsShopAvailable: (0, Le.Om)(() => !u.root.get().isShopOnOpenLocked),
                                    getCoinsCount: (0, Le.Om)(() => u.root.get().specialCurrencyCount),
                                    getHasCoins: (0, Le.Om)(() => u.root.get().specialCurrencyCount > 0),
                                    getMainRewards: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onOpenShop: e.createCallbackNoArgs('onOpenShop'),
                            onSelectVehicle: e.createCallback((e) => ({ rewardIndex: e }), 'onSelectVehicle'),
                        }),
                    ),
                    Pe = Ne[0],
                    Oe = Ne[1];
                var ke = t(9762),
                    Ie = t(4734);
                let He, We;
                (!(function (e) {
                    ((e.Vehicles = 'vehicles'), (e.Ribbon = 'ribbon'));
                })(He || (He = {})),
                    (function (e) {
                        ((e.ShowMoreRewards = 'showMoreRewards'), (e.ToVehicles = 'toVehicles'));
                    })(We || (We = {})));
                var Ue = t(7030);
                const Ge = (e) => --e * e * e + 1,
                    Ve = 'AnimatedReward_base_64',
                    $e = 'AnimatedReward_base__withCoins_53',
                    ze = (0, J.Pi)(({ children: e, delay: u, duration: t, onRest: n }) => {
                        const a = Oe().model.computes.getHasCoins(),
                            r = (0, Ue.useSpring)({
                                from: { opacity: 0, transform: a ? 'translateY(30rem)' : 'scale(0.5)' },
                                to: { opacity: 1, transform: a ? 'translateY(0)' : 'scale(1)' },
                                delay: u,
                                config: { duration: t, easing: Ge },
                                onStart: () => U(R.sounds.gui_random_reward_icon()),
                                onRest: n,
                            });
                        return s().createElement(Ue.animated.div, { style: r, className: h()(Ve, a && $e) }, e);
                    }),
                    Xe = [
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
                function je(e) {
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
                const Ye = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    qe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
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
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Xe);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
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
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ye(t, d, { isMouseEvent: !0, on: !0, arguments: je(n) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, d, n, b, g]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ye(t, d, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, b, C]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
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
                            ));
                        return F
                            ? (0, r.cloneElement)(
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
                                              (f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === _ && f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === _ && f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    Ke = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Ze = R.views.common.tooltip_window.simple_tooltip_content,
                    Je = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ke);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: a, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, a, o]);
                        return s().createElement(
                            qe,
                            Qe(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? Ze.SimpleTooltipHtmlContent('resId') : Ze.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                let eu;
                function uu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(eu || (eu = {}));
                const tu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    nu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    au = (e, u, t = eu.left) => e.split(u).reduce(t === eu.left ? tu : nu, []),
                    ru = (() => {
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
                    su = ['zh_cn', 'zh_sg', 'zh_tw'],
                    iu = (e, u = eu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return su.includes(t)
                            ? ru(e)
                            : ((e, u = eu.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return (au(a, /( )/, u).forEach((e) => (t = t.concat(au(e, n, eu.left)))), t);
                              })(e, u);
                    },
                    ou = {
                        base: 'SeniorityAwardCoin_base_cf',
                        base__s48x48: 'SeniorityAwardCoin_base__s48x48_4c',
                        base__small: 'SeniorityAwardCoin_base__small_af',
                        base__s80x80: 'SeniorityAwardCoin_base__s80x80_3a',
                        base__big: 'SeniorityAwardCoin_base__big_a3',
                        base__s128x100: 'SeniorityAwardCoin_base__s128x100_67',
                        base__s180x135: 'SeniorityAwardCoin_base__s180x135_47',
                        base__s232x174: 'SeniorityAwardCoin_base__s232x174_cc',
                        base__s296x222: 'SeniorityAwardCoin_base__s296x222_43',
                        base__s400x300: 'SeniorityAwardCoin_base__s400x300_c2',
                        base__s600x450: 'SeniorityAwardCoin_base__s600x450_b5',
                    },
                    lu = R.strings.seniority_awards.specialItem,
                    cu = ({ size: e, count: u, isTooltipEnabled: t = !0 }) => {
                        const n =
                            ((a = lu.header()),
                            (r = { count: u }),
                            a.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                return String(r[e.slice(u, -u)]);
                            }));
                        var a, r;
                        return s().createElement(
                            Je,
                            { header: n, body: lu.body(), isEnabled: t },
                            s().createElement('div', {
                                className: h()(ou.base, ou[`base__${e}`]),
                                style: { backgroundImage: `url(${he({ name: 'sacoin' }, e)})` },
                            }),
                        );
                    },
                    Eu = 'FormatText_base_d0',
                    _u = ({ binding: e, text: u = '', classMix: t, alignment: n = eu.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  r.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      s().createElement(
                                          'div',
                                          { className: h()(Eu, t), key: `${u}-${a}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : iu(e, u))))(u, n, e).map((e, u) =>
                                              s().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    mu = 'AnimatedCount_base_7e',
                    du = 'AnimatedCount_value_72',
                    Au = ({ goalValue: e, onAnimationEnd: u }) => {
                        const t = (0, r.useState)(1),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useState)(!1),
                            o = i[0],
                            l = i[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (o && n < e)
                                    return X(() => {
                                        (a((e) => e + 1), U(R.sounds.gui_hangar_main_icon_counter()));
                                    }, 100);
                            }, [e, o, n]),
                            (0, r.useEffect)(() => {
                                u && n === e && u();
                            }, [e, u, n]),
                            s().createElement(
                                'div',
                                { className: mu, onAnimationEnd: () => l(!0) },
                                s().createElement(_u, {
                                    text: R.strings.seniority_awards.rewardsView.sacoin.counter(),
                                    binding: { count: n },
                                    classMix: du,
                                }),
                            )
                        );
                    },
                    Fu = 'AwardCoin_base_a3',
                    Du = 'AwardCoin_coin_30',
                    Bu = 'AwardCoin_count_2f',
                    gu = ({ count: e, size: u, onAnimationEnd: t }) => {
                        const n = (0, r.useState)(!1),
                            a = n[0],
                            i = n[1];
                        return (
                            (0, r.useEffect)(() => U(R.sounds.gui_hangar_reward_main_icon()), []),
                            s().createElement(
                                'div',
                                { className: Fu },
                                s().createElement(
                                    'div',
                                    { className: Du, onAnimationEnd: () => i(!0) },
                                    s().createElement(cu, { size: u, count: e }),
                                ),
                                a &&
                                    s().createElement(
                                        'div',
                                        { className: Bu },
                                        s().createElement(Au, { goalValue: e, onAnimationEnd: t }),
                                    ),
                            )
                        );
                    },
                    Cu = (0, r.createContext)({ rewards: [] }),
                    pu = 'RewardsAnimatedText_base_c4',
                    hu = ({ animatedText: e, duration: u }) => {
                        const t = (0, Ue.useSpring)({
                            from: { opacity: 0, transform: 'translateY(30rem)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                            config: { duration: u, easing: Ge },
                        });
                        return s().createElement(Ue.animated.div, { style: t, className: pu }, e);
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
                const fu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, bu);
                    return s().createElement(
                        qe,
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
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Su = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Je, u, n);
                        const a = u.contentId,
                            r = u.args,
                            i = null == r ? void 0 : r.contentId;
                        return a || i
                            ? s().createElement(qe, wu({}, u, { contentId: a || i }), n)
                            : s().createElement(fu, u, n);
                    },
                    xu = {
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
                    Ru = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = le.Big,
                        special: a,
                        value: r,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ee.BATTLE_BOOSTER:
                                    case Ee.BATTLE_BOOSTER_REPLACE:
                                        return _e.BATTLE_BOOSTER;
                                }
                            })(a),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ee.BATTLE_BOOSTER:
                                        return me.BATTLE_BOOSTER;
                                    case Ee.BATTLE_BOOSTER_REPLACE:
                                        return me.BATTLE_BOOSTER_REPLACE;
                                    case Ee.BUILT_IN_EQUIPMENT:
                                        return me.BUILT_IN_EQUIPMENT;
                                    case Ee.EQUIPMENT_PLUS:
                                        return me.EQUIPMENT_PLUS;
                                    case Ee.EQUIPMENT_TROPHY_BASIC:
                                        return me.EQUIPMENT_TROPHY_BASIC;
                                    case Ee.EQUIPMENT_TROPHY_UPGRADED:
                                        return me.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ee.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ee.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ee.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ee.PROGRESSION_STYLE_UPGRADED_1:
                                        return me.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ee.PROGRESSION_STYLE_UPGRADED_2:
                                        return me.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ee.PROGRESSION_STYLE_UPGRADED_3:
                                        return me.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ee.PROGRESSION_STYLE_UPGRADED_4:
                                        return me.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = ve(r, i);
                        return s().createElement(
                            'div',
                            { className: h()(xu.base, xu[`base__${n}`], l), style: o },
                            s().createElement(
                                Su,
                                { tooltipArgs: E, className: xu.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: h()(xu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: h()(xu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: h()(xu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            s().createElement('div', {
                                                className: h()(xu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    xu.info,
                                                    xu[`info__${e}`],
                                                    i === ce.MULTI && xu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Su,
                                    { tooltipArgs: _ },
                                    s().createElement('div', {
                                        className: h()(xu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    yu = {
                        base: 'SeniorityReward_base_e4',
                        base__withCoins: 'SeniorityReward_base__withCoins_ea',
                        compensationIcon: 'SeniorityReward_compensationIcon_39',
                    };
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Mu = /^\d/,
                    Lu = {
                        [f.ExtraSmall]: le.S232x174,
                        [f.Small]: le.S232x174,
                        [f.Medium]: le.S296x222,
                        [f.Large]: le.S296x222,
                        [f.ExtraLarge]: le.S400x300,
                    },
                    Nu = ({ value: e, hasCoins: u }) => {
                        var t;
                        const n = x().mediaSize,
                            a = null != (t = e.icon) && t.match(Mu) ? `c_${e.icon}` : e.icon,
                            r = u ? le.Big : Lu[n];
                        return s().createElement(
                            Su,
                            { tooltipArgs: be({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)) },
                            s().createElement(
                                'div',
                                { className: h()(yu.base, yu[`base__${e.name}`], u && yu.base__withCoins) },
                                e.isCompensation && s().createElement('div', { className: yu.compensationIcon }),
                                s().createElement(
                                    Ru,
                                    Tu({}, e, {
                                        image: he(Object.assign({}, e, { icon: a }), r),
                                        size: r,
                                        valueType: ge(e.name),
                                    }),
                                ),
                            ),
                        );
                    },
                    Pu = 'Rewards_base_e7',
                    Ou = 'Rewards_rewards_c5',
                    ku = 'Rewards_rewardsContainer_bc',
                    Iu = (0, J.Pi)(({ onAnimationEnd: e }) => {
                        const u = Oe().model.computes.getHasCoins(),
                            t = (0, r.useContext)(Cu).rewards,
                            n = R.strings.seniority_awards.rewardsView.subTitle.otherRewards();
                        return s().createElement(
                            'div',
                            { className: Pu },
                            s().createElement(
                                'div',
                                { className: Ou },
                                u && s().createElement(hu, { duration: 150, animatedText: n }),
                                s().createElement(
                                    'div',
                                    { className: ku },
                                    t &&
                                        t.map((n, a) =>
                                            s().createElement(
                                                ze,
                                                {
                                                    key: n.index,
                                                    delay: 150 * (a + 1),
                                                    duration: 150,
                                                    onRest: a === t.length - 1 ? e : void 0,
                                                },
                                                s().createElement(Nu, { value: n, hasCoins: u }),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Hu = {
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
                let Wu, Uu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Wu || (Wu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Uu || (Uu = {})));
                const Gu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: a,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, r.useRef)(null),
                        D = (0, r.useState)(t),
                        B = D[0],
                        g = D[1],
                        C = (0, r.useState)(!1),
                        p = C[0],
                        b = C[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, r.useCallback)(() => {
                            a || (F.current && (F.current.focus(), g(!0)));
                        }, [a]),
                        x = (0, r.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [B],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                a || (A && A(e));
                            },
                            [a, A],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                a || (null !== o && U(o), c && c(e), w(!0));
                            },
                            [a, o, c],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                a || (m && m(e), b(!1));
                            },
                            [a, m],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                a || (null !== l && U(l), _ && _(e), t && S(), b(!0));
                            },
                            [a, l, _, S, t],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                a || (d && d(e), b(!1));
                            },
                            [a, d],
                        ),
                        O = h()(
                            Hu.base,
                            Hu[`base__${n}`],
                            {
                                [Hu.base__disabled]: a,
                                [Hu[`base__${u}`]]: u,
                                [Hu.base__focus]: B,
                                [Hu.base__highlightActive]: p,
                                [Hu.base__firstHover]: f,
                            },
                            i,
                        ),
                        k = h()(Hu.state, Hu.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: P,
                                onClick: y,
                            },
                            n !== Wu.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Hu.back }),
                                    s().createElement('span', { className: Hu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: k },
                                s().createElement('span', { className: Hu.stateDisabled }),
                                s().createElement('span', { className: Hu.stateHighlightHover }),
                                s().createElement('span', { className: Hu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Hu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Gu.defaultProps = { type: Wu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Vu = (0, r.memo)(Gu);
                var $u = t(9887),
                    zu = t.n($u);
                const Xu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ju = (e) => e.includes('_') && ((e) => Xu.includes(e))(e.split('_').at(-1)),
                    Yu = [f.ExtraLarge, f.Large, f.Medium, f.Small, f.ExtraSmall],
                    qu = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (ju(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = Yu.indexOf(u),
                                    s = (-1 !== r ? Xu.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = s ? e[s] : void 0;
                                return ((t[a] = void 0 !== i ? i : e[a]), t);
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => Xu.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    Ku = (e, u = qu) => {
                        const t = (
                            (e, u = qu) =>
                            (t) => {
                                const n = x().mediaSize,
                                    a = (0, r.useMemo)(() => u(t, n), [t, n]);
                                return s().createElement(e, a);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => ju(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    Qu = {
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
                    Zu = [
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
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                Object.keys(zu());
                const et = {
                        XL: { mt: Qu.mt__XL, mr: Qu.mr__XL, mb: Qu.mb__XL, ml: Qu.ml__XL },
                        LG: { mt: Qu.mt__LG, mr: Qu.mr__LG, mb: Qu.mb__LG, ml: Qu.ml__LG },
                        MDp: { mt: Qu.mt__MDp, mr: Qu.mr__MDp, mb: Qu.mb__MDp, ml: Qu.ml__MDp },
                        MD: { mt: Qu.mt__MD, mr: Qu.mr__MD, mb: Qu.mb__MD, ml: Qu.ml__MD },
                        SMp: { mt: Qu.mt__SMp, mr: Qu.mr__SMp, mb: Qu.mb__SMp, ml: Qu.ml__SMp },
                        SM: { mt: Qu.mt__SM, mr: Qu.mr__SM, mb: Qu.mb__SM, ml: Qu.ml__SM },
                        XS: { mt: Qu.mt__XS, mr: Qu.mr__XS, mb: Qu.mb__XS, ml: Qu.ml__XS },
                    },
                    ut = (Object.keys(et), ['mt', 'mr', 'mb', 'ml']),
                    tt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    nt = Ku((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            a = e.m,
                            i = e.mt,
                            o = void 0 === i ? a : i,
                            l = e.mr,
                            c = void 0 === l ? a : l,
                            E = e.mb,
                            _ = void 0 === E ? a : E,
                            m = e.ml,
                            d = void 0 === m ? a : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            C = e.center,
                            p = e.flexEnd,
                            b = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            x = void 0 === S ? (g ? 'flex-start' : C && 'center') || (p && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            y = e.wrap,
                            T = e.flexWrap,
                            M = void 0 === T ? (y ? 'wrap' : void 0) : T,
                            L = e.grow,
                            N = e.shrink,
                            P = e.flex,
                            O = void 0 === P ? (L || N ? `${L ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : P,
                            k = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Zu);
                        const W = (0, r.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        ut.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(et[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        ut.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[tt[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: O,
                                        alignSelf: R,
                                        display: B || x ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, o, c, _, d, k, O, R, B, M, w, x]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return s().createElement('div', Ju({ className: h()(Qu.base, ...G, u), style: U }, H), I);
                    });
                var at = t(3532),
                    rt = t.n(at);
                const st = {
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
                    it = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                Object.keys(zu());
                const lt = Object.keys(rt()),
                    ct = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Et = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    _t = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    mt = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    dt =
                        (Object.keys(mt),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': ct,
                            'heading-H36': ct,
                            'heading-H28': Et,
                            'heading-H24': Et,
                            'heading-H24R': Et,
                            'heading-H22': Et,
                            'heading-H20R': Et,
                            'heading-H18': Et,
                            'heading-H15': _t,
                            'heading-H14': _t,
                            'paragraph-P24': Et,
                            'paragraph-P18': Et,
                            'paragraph-P16': Et,
                            'paragraph-P14': _t,
                            'paragraph-P12': _t,
                            'paragraph-P10': _t,
                        }),
                    At =
                        (Object.keys(dt),
                        (e) =>
                            e
                                ? ((e) => lt.includes(e))(e)
                                    ? { colorClassName: st[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ft = Ku((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            a = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
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
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, it);
                        const g = (0, r.useMemo)(() => {
                                const e = At(a),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, a]),
                            C = g.computedStyle,
                            p = g.colorClassName;
                        return s().createElement(
                            nt,
                            ot(
                                {
                                    className: h()(st.base, t && st[t], p, n),
                                    style: C,
                                    mt: !0 === l ? dt[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? dt[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? dt[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? dt[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? s().createElement(_u, ot({}, D, { text: u })) : u,
                        );
                    }),
                    Dt = {
                        base: 'CompensationLabel_base_8b',
                        icon: 'CompensationLabel_icon_8e',
                        icon__vehicles: 'CompensationLabel_icon__vehicles_12',
                        value: 'CompensationLabel_value_a8',
                        value__credits: 'CompensationLabel_value__credits_c1',
                    },
                    Bt = ({ compensatedBonusType: e, compensatedItem: u, value: t, valueType: n }) => {
                        const a = ve(t, n);
                        return s().createElement(
                            'div',
                            { className: Dt.base },
                            s().createElement('div', { className: h()(Dt.icon, Dt[`icon__${u}`]) }),
                            s().createElement(Ft, { className: h()(Dt.value, Dt[`value__${e}`]), text: a }),
                        );
                    },
                    gt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ct = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function pt(e) {
                    let u = '';
                    for (let t = Ct.length - 1; t >= 0; t--) for (; e >= Ct[t]; ) ((u += gt[t]), (e -= Ct[t]));
                    return u;
                }
                const ht = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let bt, vt;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(bt || (bt = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(vt || (vt = {})));
                const ft = {
                        base: 'VehicleName_base_c7',
                        base__white: 'VehicleName_base__white_c9',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_13',
                        nation: 'VehicleName_nation_b9',
                        base__colored: 'VehicleName_base__colored_e3',
                        level: 'VehicleName_level_a7',
                        type: 'VehicleName_type_d7',
                        type__elite: 'VehicleName_type__elite_0b',
                        base__medium: 'VehicleName_base__medium_4f',
                        name: 'VehicleName_name_80',
                    },
                    wt = (0, r.memo)(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleShortName: t = u,
                            vehicleNation: n,
                            vehicleType: a,
                            vehicleLvl: r,
                            size: i = bt.Small,
                            type: o = vt.WhiteSpanish,
                            classNames: l,
                        }) => {
                            const c = h()(ft.base, ft[`base__${i}`], ft[`base__${o}`], l),
                                E = h()(ft.type, e && ft.type__elite);
                            return s().createElement(
                                'div',
                                { className: c },
                                s().createElement('div', {
                                    className: ft.nation,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_25x17.${n})` },
                                }),
                                s().createElement(Ft, { className: ft.level, text: ((_ = r), ht ? `${_}` : pt(_)) }),
                                s().createElement('div', {
                                    className: E,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.c_60x54.${uu(a || '')}${e ? '_elite' : ''})`,
                                    },
                                }),
                                s().createElement(Ft, { className: ft.name, text: t }),
                            );
                            var _;
                        },
                    );
                let St;
                !(function (e) {
                    ((e.Heavy = 'heavyTank'),
                        (e.Medium = 'mediumTank'),
                        (e.Light = 'lightTank'),
                        (e.Spg = 'SPG'),
                        (e.AtSpg = 'AT-SPG'));
                })(St || (St = {}));
                const xt = (e, u = le.Small) => {
                        const t = uu(e.vehicleName || '');
                        if (e.name === ie.Vehicles)
                            switch (u) {
                                case le.Mini:
                                case le.Small:
                                case le.S48x48:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                case le.Big:
                                case le.S80x80:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                case le.S128x100:
                                case le.S180x135:
                                    return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                case le.S232x174:
                                case le.S296x222:
                                    return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                case le.S400x300:
                                case le.S600x450:
                                    return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                default:
                                    return (
                                        console.error('Unknown vehicle image size', u, e.vehicleName),
                                        'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                    );
                            }
                        return he(e, u);
                    },
                    Rt = {
                        base: 'MainReward_base_9e',
                        base__disabled: 'MainReward_base__disabled_a5',
                        info: 'MainReward_info_6c',
                        labelCont: 'MainReward_labelCont_19',
                        label: 'MainReward_label_c0',
                        labelText: 'MainReward_labelText_91',
                        vehicleNameLabel: 'MainReward_vehicleNameLabel_03',
                        selectableBonusContainer: 'MainReward_selectableBonusContainer_ef',
                        selectButton: 'MainReward_selectButton_7c',
                        selectLabel: 'MainReward_selectLabel_d4',
                        rewardImage: 'MainReward_rewardImage_8f',
                    };
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const Tt = R.strings.seniority_awards,
                    Mt = (0, r.memo)(({ reward: e, rewardIndex: u, onSelectVehicle: t, size: n = le.S296x222 }) => {
                        const a = Object.assign({}, e.tooltipArgs, { ignoreShowDelay: !0 });
                        return s().createElement(
                            'div',
                            { className: h()(Rt.base, Rt[`base__${n}`]) },
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    Ru,
                                    yt({}, e, {
                                        image: xt(e, n),
                                        size: n,
                                        classNames: { info: Rt.info, image: Rt.rewardImage },
                                        tooltipArgs: a,
                                        value: e.isCompensation || e.name === ie.Vehicles ? void 0 : e.value,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Rt.labelCont },
                                    s().createElement(
                                        'div',
                                        { className: Rt.label },
                                        e.name === ie.SelectableBonus &&
                                            s().createElement(
                                                'div',
                                                { className: Rt.selectableBonusContainer },
                                                s().createElement(Ft, { text: e.label, className: Rt.selectLabel }),
                                                s().createElement(
                                                    Vu,
                                                    {
                                                        type: Wu.main,
                                                        mixClass: Rt.selectButton,
                                                        onClick: () => {
                                                            t(u);
                                                        },
                                                    },
                                                    s().createElement(Ft, { text: Tt.buttons.selectReward() }),
                                                ),
                                            ),
                                        e.name === ie.Vehicles &&
                                            s().createElement(wt, {
                                                isElite: e.isElite,
                                                vehicleName: e.value,
                                                vehicleNation: e.nationTag,
                                                vehicleType: e.type,
                                                vehicleLvl: e.level,
                                                classNames: Rt.vehicleNameLabel,
                                            }),
                                        e.isCompensation &&
                                            s().createElement(
                                                Su,
                                                { tooltipArgs: a },
                                                s().createElement(Bt, {
                                                    value: e.value,
                                                    valueType: e.valueType,
                                                    compensatedBonusType: e.name,
                                                    compensatedItem: e.compensatedBonus,
                                                }),
                                            ),
                                        e.name !== ie.Vehicles &&
                                            e.name !== ie.SelectableBonus &&
                                            !e.isCompensation &&
                                            s().createElement(Ft, { text: e.label, className: Rt.labelText }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Lt = {
                        base: 'Ribbon_base_0f',
                        slideUp: 'Ribbon_slideUp_de',
                        ribbon: 'Ribbon_ribbon_33',
                        base__withCoins: 'Ribbon_base__withCoins_66',
                        mainRewards: 'Ribbon_mainRewards_54',
                        rewards: 'Ribbon_rewards_4b',
                        awardCoin: 'Ribbon_awardCoin_1e',
                        radialLines: 'Ribbon_radialLines_e5',
                        rotate: 'Ribbon_rotate_50',
                        linesWrapper: 'Ribbon_linesWrapper_ca',
                        glow: 'Ribbon_glow_05',
                        fadeOut: 'Ribbon_fadeOut_6b',
                        fadeIn: 'Ribbon_fadeIn_d9',
                        raysAppearance: 'Ribbon_raysAppearance_9a',
                        fadeInWithScale: 'Ribbon_fadeInWithScale_2f',
                        scale: 'Ribbon_scale_50',
                    },
                    Nt = 400,
                    Pt = (0, J.Pi)(({ onAnimationEnd: e }) => {
                        const u = Oe(),
                            t = u.model,
                            n = u.controls,
                            a = x().mediaSize,
                            i = t.computes.getCoinsCount(),
                            o = t.computes.getHasCoins(),
                            l = t.computes.getMainRewards(),
                            c = Boolean(l.length),
                            E = (0, r.useState)(!1),
                            _ = E[0],
                            m = E[1],
                            d = (0, r.useState)(!1),
                            A = d[0],
                            F = d[1],
                            D = (0, r.useState)(!1),
                            B = D[0],
                            g = D[1],
                            C = {
                                [f.ExtraSmall]: [le.S296x222, le.S296x222, le.S296x222],
                                [f.Small]: [le.S296x222, le.S400x300, le.S296x222],
                                [f.Medium]: [le.S296x222, le.S400x300, le.S296x222],
                                [f.Large]: [le.S400x300, le.S600x450, le.S400x300],
                                [f.ExtraLarge]: [le.S400x300, le.S600x450, le.S400x300],
                            }[a],
                            p = C[0],
                            b = C[1];
                        return s().createElement(
                            'div',
                            {
                                className: h()(Lt.base, o && Lt.base__withCoins),
                                onAnimationEnd: () => {
                                    o ? m(!0) : g(!0);
                                },
                            },
                            s().createElement(
                                'div',
                                { className: Lt.ribbon },
                                _ &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Lt.linesWrapper },
                                            s().createElement('div', { className: Lt.radialLines }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Lt.mainRewards },
                                            A &&
                                                c &&
                                                s().createElement(
                                                    'div',
                                                    { className: Lt.mainReward },
                                                    s().createElement(
                                                        ze,
                                                        { delay: Nt, duration: Nt },
                                                        s().createElement(Mt, {
                                                            reward: l[0],
                                                            size: p,
                                                            onSelectVehicle: n.onSelectVehicle,
                                                            rewardIndex: 0,
                                                        }),
                                                    ),
                                                ),
                                            s().createElement(
                                                'div',
                                                { className: Lt.awardCoin },
                                                s().createElement('div', { className: Lt.glow }),
                                                s().createElement(gu, {
                                                    size: b,
                                                    count: i,
                                                    onAnimationEnd: () => (c ? F(!0) : g(!0)),
                                                }),
                                            ),
                                            A &&
                                                c &&
                                                s().createElement(
                                                    'div',
                                                    { className: Lt.mainReward },
                                                    s().createElement(
                                                        ze,
                                                        { delay: 800, duration: Nt, onRest: () => g(!0) },
                                                        s().createElement(Mt, {
                                                            reward: l[1],
                                                            size: p,
                                                            onSelectVehicle: n.onSelectVehicle,
                                                            rewardIndex: 1,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Lt.rewards },
                                    B && s().createElement(Iu, { onAnimationEnd: e }),
                                ),
                            ),
                        );
                    }),
                    Ot = (e) => {
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
                    kt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    It = [];
                function Ht(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), It)
                    );
                }
                function Wt(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
                function Ut(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Gt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Gt(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Gt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Vt(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        ((s = Date.now()), t.apply(l, o));
                                    }
                                    r ||
                                        (n && !a && E(),
                                        i(),
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
                                    (o.cancel = function () {
                                        (i(), (r = !0));
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                }
                let $t;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })($t || ($t = {}));
                const zt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Xt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return kt(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? zt : c,
                                _ = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
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
                                            for (var n, a = Ut(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = Vt(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Ue.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                g = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = D.scrollPosition.get(),
                                            r = (null != (n = D.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            B.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            r = g(u, e, n);
                                        C(r);
                                    },
                                    [C, g, E.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(n(e)),
                                            _.current && d.trigger('mouseWheel', e, D.scrollPosition, u(_.current)));
                                    },
                                    [D.scrollPosition, p, d],
                                ),
                                b = ((e, u = []) => {
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
                                        Ot(() => {
                                            const e = _.current;
                                            e &&
                                                (C(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                v = Ht(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const f = (0, r.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    handleIsThumbDragging: f,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, C, p, f, d.off, d.on, v, h, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    jt = Xt({
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
                        getDirection: (e) => (e.deltaY > 1 ? $t.Next : $t.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Yt = 'HorizontalBar_base_49',
                    qt = 'HorizontalBar_base__nonActive_82',
                    Kt = 'HorizontalBar_leftButton_5f',
                    Qt = 'HorizontalBar_rightButton_03',
                    Zt = 'HorizontalBar_track_0d',
                    Jt = 'HorizontalBar_thumb_fd',
                    en = 'HorizontalBar_rail_32',
                    un = 'disable',
                    tn = { pending: !1, offset: 0 },
                    nn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    an = () => {},
                    rn = (e, u) => Math.max(20, e.offsetWidth * u),
                    sn = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = nn, onDrag: n = an }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, r.useState)(tn),
                            m = _[0],
                            d = _[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    E = kt(0, 1, r / (a - n)),
                                    _ = (u.offsetWidth - rn(u, s)) * E;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(un),
                                                    void o.current.classList.remove(un)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(un),
                                                    void o.current.classList.add(un)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(un), o.current.classList.remove(un));
                                        }
                                    })(_));
                            },
                            D = Ht(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    ((u.style.width = `${rn(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(qt) : a.current.classList.remove(qt)));
                                })(),
                                    F());
                            });
                        ((0, r.useEffect)(() => Ot(D)),
                            (0, r.useEffect)(
                                () =>
                                    Ot(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = an;
                                        const n = () => {
                                            (t(), (t = Ot(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            s = c.current;
                                        if (!a || !r || !s) return;
                                        const i = u.screenX - m.offset - r.getBoundingClientRect().x,
                                            o = (i / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(tn));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]));
                        const B = Wt((u) => e.applyStepTo(u), E, [e]),
                            g = B[0],
                            C = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const p = (e) => {
                            e.target.classList.contains(un) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Yt, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(Kt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(un) || 0 !== e.button || (U('play'), g($t.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: p,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Zt, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((U('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? $t.Prev : $t.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                s().createElement('div', { ref: c, className: h()(Jt, u.thumb) }),
                                s().createElement('div', { className: h()(en, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Qt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(un) || 0 !== e.button || (U('play'), g($t.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    on = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ln = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(on.base, e.base) });
                            }, [n]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(on.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(on.defaultScrollArea, a) },
                                s().createElement(cn, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(sn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    cn = ({ api: e, className: u, classNames: t, children: n, style: a }) => (
                        (0, r.useEffect)(() => Ot(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(on.base, u), style: a },
                            s().createElement(
                                'div',
                                {
                                    className: h()(on.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(on.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((cn.Bar = sn),
                    (cn.Default = ln),
                    (cn.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => Ot(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(on.base, u) },
                            s().createElement(
                                'div',
                                { className: h()(on.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: h()(on.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const En = Xt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $t.Next : $t.Prev),
                    }),
                    _n = 'VerticalBar_base_f3',
                    mn = 'VerticalBar_base__nonActive_42',
                    dn = 'VerticalBar_topButton_d7',
                    An = 'VerticalBar_bottomButton_06',
                    Fn = 'VerticalBar_track_df',
                    Dn = 'VerticalBar_thumb_32',
                    Bn = 'VerticalBar_rail_43',
                    gn = 'disable',
                    Cn = () => {},
                    pn = { pending: !1, offset: 0 },
                    hn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    bn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    vn = (e, u) => Math.max(20, e.offsetHeight * u),
                    fn = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = hn, onDrag: n = Cn }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, r.useState)(pn),
                            m = _[0],
                            d = _[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            F = Ht(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${vn(t, s)}px`),
                                    u.classList.add(Dn),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(mn) : a.current.classList.remove(mn)),
                                    s
                                );
                            }),
                            D = Ht(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    E = kt(0, 1, r / (a - n)),
                                    _ = (u.offsetHeight - vn(u, s)) * E;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(gn),
                                                    void o.current.classList.remove(gn)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(gn),
                                                    void o.current.classList.add(gn)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(gn), o.current.classList.remove(gn));
                                        }
                                    })(_));
                            }),
                            B = Ht(() => {
                                bn(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, r.useEffect)(() => Ot(B)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    bn(e, () => {
                                        D();
                                    });
                                };
                                let t = Cn;
                                const n = () => {
                                    (t(), (t = Ot(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        bn(e, (t) => {
                                            const a = l.current,
                                                r = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = u.screenY - m.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(pn));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]));
                        const g = Wt((u) => e.applyStepTo(u), E, [e]),
                            C = g[0],
                            p = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const b = (e) => {
                            e.target.classList.contains(gn) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(_n, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(dn, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (U('play'), C($t.Next));
                                },
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Fn, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((U('play'), u.target === n))
                                                (e.handleIsThumbDragging(!0),
                                                    A({
                                                        pending: !0,
                                                        offset: u.screenY - n.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        bn(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? $t.Prev : $t.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: h()(Bn, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(An, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (U('play'), C($t.Prev));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    wn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Sn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(wn.base, e.base) });
                            }, [n]),
                            _ = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(wn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(wn.area, a) },
                                s().createElement(xn, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(fn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    xn = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => Ot(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(wn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(wn.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                xn.Default = Sn;
                const Rn = { Vertical: a, Horizontal: n },
                    yn = { areaWidth: 0, contentWidth: 0, setAreaWidth: () => fe, setContentWidth: () => fe },
                    Tn = (0, r.createContext)(yn),
                    Mn = 'Vehicle_base_62',
                    Ln = 'Vehicle_hoverArea_25',
                    Nn = 'Vehicle_base__big_8c',
                    Pn = 'Vehicle_image_80',
                    On = 'Vehicle_vehicleName_a1',
                    kn = 'Vehicle_nation_88',
                    In = 'Vehicle_type_14',
                    Hn = ({
                        index: e,
                        name: u,
                        techName: t,
                        type: n,
                        tier: a,
                        isPremium: r,
                        nation: i,
                        vehicleCD: o,
                        onRestAnimation: l,
                        isBig: c = !1,
                        isEnabledSound: E = !0,
                    }) => {
                        const _ = {
                                backgroundImage: `url(R.images.gui.maps.icons.seniorityAwards.rewards.vehicles.${t})`,
                            },
                            m = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40..${i})` },
                            d = {
                                backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.c_60x54..${uu(n)}${r ? '_elite' : ''})`,
                            },
                            A = { tooltipId: 'TOOLTIP_VEHICLE_REWARD', vehicleCD: o },
                            F = (0, Ue.useSpring)({
                                from: { opacity: 0, transform: 'translateX(30rem)' },
                                to: { opacity: 1, transform: 'translateX(0%)' },
                                delay: 1e3 * e,
                                config: { duration: 1e3, easing: Ge },
                                onStart: () => E && U(R.sounds.wdr_award_tank()),
                                onRest: () => {
                                    l(e);
                                },
                            }),
                            D = (0, Ue.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: 1e3 * e + 500,
                                config: { duration: 500, easing: Ge },
                            });
                        return s().createElement(
                            fu,
                            { args: A },
                            s().createElement(
                                'div',
                                { className: h()(Mn, c && Nn) },
                                s().createElement('div', { className: Ln }),
                                s().createElement(
                                    Ue.animated.div,
                                    { style: F },
                                    s().createElement('div', { className: Pn, style: _ }),
                                ),
                                s().createElement(
                                    Ue.animated.div,
                                    { style: D, className: On },
                                    s().createElement('div', { className: kn, style: m }),
                                    pt(a),
                                    s().createElement('div', { className: In, style: d }),
                                    u,
                                ),
                            ),
                        );
                    },
                    Wn = 'Vehicles_base_1d',
                    Un = 'Vehicles_container_d2',
                    Gn = 'Vehicles_scrollWrapper_b0',
                    Vn = 'Vehicles_scrollContent_a4',
                    $n = 'Vehicles_scrollList_ed',
                    zn = 'Vehicles_scrollList__disabled_7b',
                    Xn = 'Vehicles_scrollLeftButton_28',
                    jn = 'Vehicles_scrollRightButton_4d',
                    Yn = 'Vehicles_scrollTrack_bd',
                    qn = 'Vehicles_item_16',
                    Kn = 'Vehicles_item__offset_ab',
                    Qn = 'Vehicles_item__big_85',
                    Zn = 'Vehicles_bar_5d',
                    Jn = 'Vehicles_bar__visible_8b';
                function ea() {
                    return (
                        (ea =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ea.apply(this, arguments)
                    );
                }
                let ua;
                !(function (e) {
                    ((e.Active = 'active'),
                        (e.Pause = 'pause'),
                        (e.ActiveWithoutScroll = 'activeWithoutScroll'),
                        (e.End = 'end'));
                })(ua || (ua = {}));
                const ta = (0, J.Pi)(
                        ({
                            isVisible: e,
                            isStoppedScrolling: u,
                            onScrollChange: t,
                            onAnimationEnd: n,
                            setMaxScrollPosition: a,
                        }) => {
                            var i, o;
                            const l = Oe().model,
                                c = (0, r.useContext)(Tn),
                                E = c.setAreaWidth,
                                _ = c.areaWidth,
                                m = c.contentWidth,
                                d = c.setContentWidth,
                                A = l.computes.getVehicles(),
                                F = 1 === A.length,
                                D = jt(),
                                B = (0, r.useRef)([]),
                                g = (0, r.useRef)(null),
                                C = (null == (i = g.current) ? void 0 : i.offsetWidth) || 0;
                            E(C);
                            const p = (null == (o = D.contentRef.current) ? void 0 : o.offsetWidth) || 0;
                            a(p);
                            const b = (0, r.useState)(ua.Active),
                                v = b[0],
                                f = b[1],
                                w = v === ua.Active;
                            (0, r.useEffect)(() => {
                                u && f(ua.ActiveWithoutScroll);
                            }, [u]);
                            const S = e && v === ua.End,
                                x = (0, r.useCallback)(() => {
                                    const e = D.animationScroll.scrollPosition.get();
                                    t(e);
                                }, [t, D.animationScroll.scrollPosition]),
                                R = (0, r.useCallback)(
                                    (e) => {
                                        S && D.handleMouseWheel(e);
                                    },
                                    [D, S],
                                ),
                                y = (0, r.useCallback)(() => {
                                    (p !== m && d(p), C !== _ && E(C));
                                }, [_, p, m, C, E, d]);
                            (0, r.useEffect)(
                                () => (
                                    D.events.on('change', x),
                                    D.events.on('resizeHandled', y),
                                    window.addEventListener('resize', x),
                                    window.addEventListener('wheel', R),
                                    () => {
                                        (D.events.off('change', x),
                                            D.events.off('resizeHandled', y),
                                            window.removeEventListener('resize', x),
                                            window.removeEventListener('wheel', R));
                                    }
                                ),
                                [D.events, x, R, y],
                            );
                            const T = (0, r.useCallback)(
                                    (e, u) => {
                                        const t = g.current;
                                        (t ? Math.round(t.getBoundingClientRect().right) : 0) < e &&
                                            (f(ua.Pause),
                                            D.applyScroll(D.animationScroll.scrollPosition.goal + u),
                                            f(ua.Active));
                                    },
                                    [D],
                                ),
                                M = (0, r.useCallback)(
                                    (e) => {
                                        if (e + 1 === A.length) f(ua.End);
                                        else if (w) {
                                            const u = B.current[e],
                                                t = B.current[e + 1];
                                            T(Math.round(t.getBoundingClientRect().right), u.offsetWidth);
                                        }
                                    },
                                    [w, T, A.length],
                                );
                            return (
                                (0, r.useEffect)(() => {
                                    S && (null == n || n());
                                }, [n, S]),
                                s().createElement(
                                    'div',
                                    { className: Wn },
                                    s().createElement(
                                        'div',
                                        { className: Un, ref: g },
                                        s().createElement(
                                            'div',
                                            { className: h()($n, v !== ua.End && zn) },
                                            s().createElement(
                                                Rn.Horizontal.Area.SeniorityAwards,
                                                { classNames: { content: Vn, wrapper: Gn }, api: D },
                                                s().createElement(
                                                    Ue.SpringContext,
                                                    { pause: v === ua.Pause },
                                                    A.map((e, u) =>
                                                        s().createElement(
                                                            'div',
                                                            {
                                                                key: e.vehicleCD,
                                                                ref: (e) => (B.current[u] = e),
                                                                className: h()(qn, Kn, F && Qn),
                                                            },
                                                            s().createElement(
                                                                Hn,
                                                                ea({}, e, {
                                                                    index: u,
                                                                    onRestAnimation: M,
                                                                    isBig: F,
                                                                    isEnabledSound: w,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: h()(Zn, v === ua.End && Jn) },
                                                s().createElement(Rn.Horizontal.Bar, {
                                                    api: D,
                                                    classNames: { leftButton: Xn, rightButton: jn, track: Yn },
                                                }),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    na = 'Content_base_0b',
                    aa = 'Content_vehicles_a7',
                    ra = 'Content_vehicles__hidden_f1',
                    sa = 'Content_ribbon_90',
                    ia = 'Content_ribbon__hidden_90',
                    oa = (0, J.Pi)(
                        ({
                            machineState: e,
                            isFirstEnter: u,
                            isStoppedScrolling: t,
                            onScrollChange: n,
                            onAnimationEnd: a,
                            setMaxScrollPosition: i,
                        }) => {
                            const o = Oe().model.computes.getHasVehicles(),
                                l = e === He.Vehicles && !u,
                                c = e === He.Ribbon && !u;
                            return (
                                (0, r.useEffect)(() => {
                                    c && a();
                                }, [c, a]),
                                s().createElement(
                                    'div',
                                    { className: na },
                                    o &&
                                        s().createElement(
                                            'div',
                                            { className: h()(aa, e !== He.Vehicles && ra) },
                                            s().createElement(ta, {
                                                isVisible: e === He.Vehicles,
                                                isStoppedScrolling: t,
                                                onScrollChange: n,
                                                onAnimationEnd: a,
                                                setMaxScrollPosition: i,
                                            }),
                                        ),
                                    (e === He.Ribbon || !u) &&
                                        s().createElement(
                                            'div',
                                            { className: h()(sa, l && ia) },
                                            s().createElement(Pt, { onAnimationEnd: a }),
                                        ),
                                )
                            );
                        },
                    ),
                    la = 'Footer_base_0b',
                    ca = 'Footer_description_ac',
                    Ea = 'Footer_buttonHolder_0e',
                    _a = 'Footer_button_d2',
                    ma = 'Footer_buttonText_0b',
                    da = R.strings.seniority_awards.rewardsView,
                    Aa = R.strings.seniority_awards.buttons,
                    Fa = R.sounds.yes1(),
                    Da = (0, J.Pi)(({ hasMoreRewards: e, onShowMoreClick: u, onAcceptClick: t }) => {
                        const n = Oe().model.computes.getIsShopAvailable(),
                            a = n ? da.gotoRewardsBtn() : Aa.applyButton();
                        return s().createElement(
                            'div',
                            { className: la },
                            e
                                ? s().createElement(
                                      'div',
                                      { className: Ea },
                                      s().createElement(
                                          Vu,
                                          { size: Uu.medium, onClick: u, soundClick: Fa, mixClass: _a },
                                          s().createElement('div', { className: ma }, da.moreRewardsBtn()),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      n && s().createElement('div', { className: ca }, da.exchangeCoins()),
                                      s().createElement(
                                          'div',
                                          { className: Ea },
                                          s().createElement(
                                              Vu,
                                              {
                                                  size: Uu.medium,
                                                  type: n ? Wu.primaryGreen : Wu.primary,
                                                  onClick: t,
                                                  soundClick: Fa,
                                                  mixClass: _a,
                                                  isFocused: !0,
                                              },
                                              s().createElement('div', { className: ma }, a),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    Ba = 'FormatGradientText_gradientBox_86',
                    ga = 'FormatGradientText_gradientText_a6',
                    Ca = 'FormatGradientText_gradientText__copied_52',
                    pa = (0, r.memo)(({ text: e, binding: u, className: t, classNames: n }) => {
                        const a = ((e, u, t) => {
                                const n =
                                        /(?:%\(|{)\w*(?:_[Gg]radient|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Gg]radient|End)(?:\)s|})?/g,
                                    a = /(?<=(?:_[Gg]radient|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                    r = u ? Object.assign({}, u) : {};
                                let i = e,
                                    o = n.exec(e);
                                for (; o; ) {
                                    const u = o[0],
                                        l = a.exec(u),
                                        c = o[1];
                                    if (l) {
                                        const e = l[0].replaceAll(')', '');
                                        ((i = i.replace(u, `%(${e})`)),
                                            (r[e] = s().createElement(
                                                'div',
                                                { className: Ba },
                                                s().createElement(
                                                    'div',
                                                    { className: h()(ga, null == t ? void 0 : t.text) },
                                                    c,
                                                ),
                                                s().createElement(
                                                    'div',
                                                    { className: h()(ga, Ca, null == t ? void 0 : t.copiedText) },
                                                    c,
                                                ),
                                            )));
                                    }
                                    o = n.exec(e);
                                }
                                return [i, r];
                            })(e, u, n),
                            r = a[0],
                            i = a[1];
                        return s().createElement(_u, { classMix: t, text: r, binding: i });
                    }),
                    ha = 'Header_base_eb',
                    ba = 'Header_titleBox_72',
                    va = 'Header_light_f6',
                    fa = 'Header_line_25',
                    wa = 'Header_line__inverted_ab',
                    Sa = 'Header_title_4c',
                    xa = 'Header_gradientText_37',
                    Ra = 'Header_gradientText__copied_d8',
                    ya = 'Header_subTitleBox_01',
                    Ta = 'Header_subTitle_e7',
                    Ma = R.strings.seniority_awards.rewardsView,
                    La = (0, J.Pi)(() => {
                        const e = Oe().model.root.get().category;
                        return s().createElement(
                            'div',
                            { className: ha },
                            s().createElement(
                                'div',
                                { className: ba },
                                s().createElement('div', { className: va }),
                                s().createElement('div', { className: fa }),
                                s().createElement(
                                    'div',
                                    { className: Sa },
                                    s().createElement(Ft, { text: Ma.title(), className: xa }),
                                    s().createElement(Ft, { text: Ma.title(), className: h()(xa, Ra) }),
                                ),
                                s().createElement('div', { className: h()(fa, wa) }),
                            ),
                            s().createElement(
                                'div',
                                { className: ya },
                                s().createElement(pa, { className: Ta, text: Ma.subTitle.$dyn(e) }),
                            ),
                        );
                    }),
                    Na = {
                        base: 'App_base_0f',
                        bgWrapper: 'App_bgWrapper_99',
                        background: 'App_background_1f',
                        foreground: 'App_foreground_dd',
                        vignette: 'App_vignette_db',
                        vignette__mid: 'App_vignette__mid_69',
                        vignette__left: 'App_vignette__left_28',
                        vignette__right: 'App_vignette__right_fe',
                        shadow: 'App_shadow_03',
                        base__ribbon: 'App_base__ribbon_86',
                        blackout: 'App_blackout_57',
                        gradient: 'App_gradient_00',
                        textButton: 'App_textButton_51',
                        fadeIn: 'App_fadeIn_c0',
                        textButton__back: 'App_textButton__back_92',
                        textButton__close: 'App_textButton__close_26',
                        goto: 'App_goto_32',
                        header: 'App_header_de',
                        slideUp: 'App_slideUp_a5',
                        footer: 'App_footer_72',
                        fadeOut: 'App_fadeOut_a4',
                        raysAppearance: 'App_raysAppearance_fe',
                        rotate: 'App_rotate_66',
                        fadeInWithScale: 'App_fadeInWithScale_c6',
                        scale: 'App_scale_47',
                    },
                    Pa = R.strings.seniority_awards.rewardsView;
                let Oa;
                !(function (e) {
                    ((e.ShowHeader = 'showHeader'),
                        (e.ShowContent = 'showContent'),
                        (e.ShowFooter = 'showFooter'),
                        (e.Finished = 'finished'));
                })(Oa || (Oa = {}));
                const ka = (0, J.Pi)(() => {
                    const e = Oe(),
                        u = e.model,
                        t = e.controls,
                        n = u.computes,
                        a = ((e) => {
                            const u = ae(e, te),
                                t = (0, r.useCallback)(
                                    (e) => {
                                        u(e.action, e.logLevel, ne(e));
                                    },
                                    [u],
                                );
                            return (e) => t(e);
                        })('seniority_awards_22'),
                        i = (0, r.useState)(0),
                        l = i[0],
                        c = i[1],
                        E = (0, r.useState)(Oa.ShowHeader),
                        _ = E[0],
                        m = E[1],
                        d = (0, r.useState)(!1),
                        A = d[0],
                        D = d[1],
                        B = (0, r.useState)(!1),
                        g = B[0],
                        C = B[1],
                        p = (0, r.useState)(0),
                        b = p[0],
                        v = p[1],
                        f = (0, r.useState)(0),
                        w = f[0],
                        S = f[1],
                        x = (0, r.useState)(0),
                        y = x[0],
                        T = x[1],
                        M = n.getHasVehicles(),
                        L = n.getBonuses(),
                        N = n.getHasCoins(),
                        P = (0, r.useContext)(F),
                        O = (0, r.useMemo)(
                            () =>
                                ((e, u, t) => {
                                    const n = t ? 10 : 5;
                                    return (0, ke.C)({
                                        id: 'seniority-awards',
                                        initial: e,
                                        context: {
                                            visibleRewards: u.slice(0, n),
                                            rewardWatchedCount: n,
                                            isFirstEnter: !0,
                                        },
                                        states: {
                                            [He.Vehicles]: { on: { [We.ShowMoreRewards]: { target: He.Ribbon } } },
                                            [He.Ribbon]: {
                                                exit: (0, Ie.f0)((e) => ({
                                                    visibleRewards: e.visibleRewards,
                                                    rewardWatchedCount: e.rewardWatchedCount,
                                                    isFirstEnter: !1,
                                                })),
                                                on: {
                                                    [We.ToVehicles]: {
                                                        target: He.Vehicles,
                                                        actions: (0, Ie.f0)((e) => ({
                                                            visibleRewards: u.slice(0, n),
                                                            rewardWatchedCount: n,
                                                            isRibbonVisited: e.isFirstEnter,
                                                        })),
                                                    },
                                                    [We.ShowMoreRewards]: {
                                                        target: He.Ribbon,
                                                        internal: !0,
                                                        actions: (0, Ie.f0)((e) => {
                                                            const t = e.rewardWatchedCount + n;
                                                            return {
                                                                visibleRewards: u.slice(e.rewardWatchedCount, t),
                                                                rewardWatchedCount: t,
                                                                isRibbonVisited: e.isFirstEnter,
                                                            };
                                                        }),
                                                        cond: (e) => e.rewardWatchedCount < u.length,
                                                    },
                                                },
                                            },
                                        },
                                    });
                                })(M ? He.Vehicles : He.Ribbon, L, N),
                            [L, M, N],
                        ),
                        k = (0, W.eO)(O),
                        I = k[0],
                        H = k[1],
                        G = n.getBonusesLength(),
                        V = P.extraLarge ? 5 : 4,
                        $ = n.getVehicles().length > V,
                        q = I.value === He.Vehicles || I.context.rewardWatchedCount < G,
                        Q = (0, r.useMemo)(() => ({ rewards: I.context.visibleRewards }), [I.context.visibleRewards]),
                        J = (0, r.useCallback)(
                            (e = !1) => {
                                (a({
                                    action: e ? ue.KeyDown : ue.Click,
                                    item: se.CloseButton,
                                    parentScreen: re.RewardsScreen,
                                }),
                                    (0, Y.Sy)(),
                                    U(R.sounds.wdr_award_2025_stop()));
                            },
                            [a],
                        ),
                        ee = (0, r.useCallback)(() => {
                            (m(Oa.ShowContent), H(We.ShowMoreRewards));
                        }, [H]),
                        ie = (0, r.useCallback)(() => {
                            (_ !== Oa.Finished && (C(!0), I.value === He.Ribbon)) || ee();
                        }, [_, ee, I.value]),
                        oe = (0, r.useCallback)(
                            (e = !1) => {
                                (a({
                                    action: e ? ue.KeyDown : ue.Click,
                                    item: n.getIsShopAvailable() ? se.GoToShopButton : se.ConfirmButton,
                                    parentScreen: re.RewardsScreen,
                                }),
                                    U(R.sounds.wdr_award_2025_stop()),
                                    t.onOpenShop());
                            },
                            [t, n, a],
                        ),
                        le = (0, r.useCallback)(() => {
                            q ? ie() : J(true);
                        }, [q, ie, J]);
                    var ce;
                    ((ce = le), K(j.n.ESCAPE, ce));
                    const Ee = (0, r.useCallback)(() => {
                        q ? ie() : oe(true);
                    }, [q, ie, oe]);
                    Z({ [j.n.ENTER]: Ee, [j.n.SPACE]: Ee });
                    ((0, r.useEffect)(() => {
                        U(R.sounds.wdr_award_2025_start());
                    }, []),
                        (0, r.useEffect)(() => {
                            switch (_) {
                                case Oa.ShowHeader:
                                    return X(() => m(Oa.ShowContent), 1e3);
                                case Oa.ShowFooter:
                                    return X(() => m(Oa.Finished), 800);
                                default:
                                    return;
                            }
                        }, [_]));
                    const _e = 0 !== y && $ ? `${o.O.view.pxToRem(2 * y)}rem` : '';
                    return s().createElement(
                        'div',
                        { className: h()(Na.base, Na[`base__${I.value}`]) },
                        s().createElement(
                            'div',
                            { className: Na.bgWrapper },
                            s().createElement('div', {
                                className: Na.background,
                                style: { width: _e, transform: `translateX(-${o.O.view.pxToRem(l / 5)}rem)` },
                            }),
                            s().createElement('div', {
                                className: Na.foreground,
                                style: { width: _e, transform: `translateX(-${o.O.view.pxToRem(l)}rem)` },
                            }),
                            s().createElement('div', {
                                className: h()(Na.vignette, Na.vignette__left),
                                style: { transform: `translateX(-${o.O.view.pxToRem(l)}rem)` },
                            }),
                            $ &&
                                0 !== y &&
                                s().createElement('div', {
                                    className: h()(Na.vignette, Na.vignette__right),
                                    style: { transform: `translateX(${o.O.view.pxToRem(y - b - l)}rem)` },
                                }),
                            !$ && s().createElement('div', { className: h()(Na.vignette, Na.vignette__right) }),
                            s().createElement('div', { className: Na.vignette_mid }),
                        ),
                        s().createElement('div', { className: Na.shadow }),
                        s().createElement('div', { className: Na.blackout }),
                        s().createElement('div', { className: Na.gradient }),
                        A &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: h()(Na.textButton, Na.textButton__close) },
                                    s().createElement(z, {
                                        caption: Pa.textButton.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => J(),
                                    }),
                                ),
                                M &&
                                    s().createElement(
                                        'div',
                                        { className: h()(Na.textButton, Na.textButton__back) },
                                        s().createElement(z, {
                                            caption: Pa.textButton.back(),
                                            goto: Pa.textButton.goto(),
                                            type: 'back',
                                            side: 'left',
                                            onClick: () => H(We.ToVehicles),
                                            classNames: { goto: Na.goto },
                                        }),
                                    ),
                            ),
                        s().createElement('div', { className: Na.header }, s().createElement(La, null)),
                        _ !== Oa.ShowHeader &&
                            s().createElement(
                                Cu.Provider,
                                { value: Q },
                                s().createElement(
                                    Tn.Provider,
                                    { value: { areaWidth: b, setAreaWidth: v, contentWidth: w, setContentWidth: S } },
                                    s().createElement(oa, {
                                        machineState: I.value,
                                        isFirstEnter: I.context.isFirstEnter,
                                        isStoppedScrolling: g,
                                        onScrollChange: (e) => c(e),
                                        onAnimationEnd: () => {
                                            (m(Oa.ShowFooter), D(I.value === He.Ribbon));
                                        },
                                        setMaxScrollPosition: (e) => T(e),
                                    }),
                                ),
                            ),
                        (_ === Oa.ShowFooter || _ === Oa.Finished) &&
                            s().createElement(
                                'div',
                                { className: Na.footer },
                                s().createElement(Da, { hasMoreRewards: q, onShowMoreClick: ee, onAcceptClick: oe }),
                            ),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(k, null, s().createElement(Pe, null, s().createElement(ka, null))),
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
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 300),
        (() => {
            var e = { 300: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [851], () => __webpack_require__(2464));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
