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
                (t.r(u), t.d(u, { mouse: () => r, onResize: () => o }));
                var n = t(2472),
                    a = t(1176);
                const o = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    r = (function () {
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
                        const o = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const o = `mouse${u}`,
                                            r = i[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (r(),
                                                    window.removeEventListener(o, s),
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
                        return Object.assign({}, o, {
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    }));
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                        addPreloadTexture: () => r,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => x,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isClientAccessible: () => g,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => f,
                    }));
                var n = t(3722),
                    a = t(6112),
                    o = t(6538),
                    i = t(8566);
                function r(e) {
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
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
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.isClientAccessible();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
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
                    f = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    o = {
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
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
                t.d(u, { Z: () => o });
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
                        const o = n.O.view.addModelObserver(e, t, a);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = a;
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
                t.d(u, { B3: () => c, Z5: () => i, B0: () => s, ry: () => B, Sy: () => g });
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
                var o = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, a, o, i) {
                    try {
                        var r = e[o](i),
                            s = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(s) : Promise.resolve(s).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var o = e.apply(u, t);
                                        function i(e) {
                                            D(o, n, a, i, r, 'next', e);
                                        }
                                        function r(e) {
                                            D(o, n, a, i, r, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var b = t(7572);
                const S = a.instance,
                    x = {
                        DataTracker: o.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), o) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                r = t.getBoundingClientRect(),
                                l = r.x,
                                c = r.y,
                                E = r.width,
                                m = r.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(m),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: C(_),
                                on: !0,
                                args: o,
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
                            h(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: S,
                        SystemLocale: i,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = x;
            },
            4048: (e, u, t) => {
                'use strict';
                var n = t(6179),
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
                        : e;
                var i = t(3138);
                const r = {
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
                        o = Math.min(n, a);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                })(s || (s = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    m = c.height,
                    _ = Object.assign({ width: E, height: m }, l(E, m, r)),
                    d = (0, n.createContext)(_),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, A);
                        const a = (0, n.useContext)(d),
                            i = a.extraLarge,
                            r = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            E = a.extraLargeWidth,
                            m = a.largeWidth,
                            _ = a.mediumWidth,
                            F = a.smallWidth,
                            D = a.extraSmallWidth,
                            C = a.extraLargeHeight,
                            B = a.largeHeight,
                            p = a.mediumHeight,
                            g = a.smallHeight,
                            h = a.extraSmallHeight,
                            b = { extraLarge: C, large: B, medium: p, small: g, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && r) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, b);
                            if (t.largeWidth && m) return o(u, t, b);
                            if (t.mediumWidth && _) return o(u, t, b);
                            if (t.smallWidth && F) return o(u, t, b);
                            if (t.extraSmallWidth && D) return o(u, t, b);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && h) return u;
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
                        o = t[0],
                        s = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            s(Object.assign({ width: t, height: n }, l(t, n, r)));
                        }, []);
                    (((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const E = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                    return a().createElement(d.Provider, { value: E }, e);
                });
                var C = t(6483),
                    B = t.n(C),
                    p = t(926),
                    g = t.n(p);
                let h, b, S;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.small.width)] = 'Small'),
                        (e[(e.Medium = r.medium.width)] = 'Medium'),
                        (e[(e.Large = r.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.small.width)] = 'Small'),
                            (e[(e.Medium = r.medium.width)] = 'Medium'),
                            (e[(e.Large = r.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.small.height)] = 'Small'),
                            (e[(e.Medium = r.medium.height)] = 'Medium'),
                            (e[(e.Large = r.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const x = () => {
                        const e = (0, n.useContext)(d),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
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
                        return { mediaSize: a, mediaWidth: o, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    v = ['children', 'className'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const f = {
                        [b.ExtraSmall]: '',
                        [b.Small]: g().SMALL_WIDTH,
                        [b.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [b.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [S.ExtraSmall]: '',
                        [S.Small]: g().SMALL_HEIGHT,
                        [S.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [S.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [h.ExtraSmall]: '',
                        [h.Small]: g().SMALL,
                        [h.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [h.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [h.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, v);
                        const o = x(),
                            i = o.mediaWidth,
                            r = o.mediaHeight,
                            s = o.mediaSize;
                        return a().createElement('div', w({ className: B()(t, f[i], T[r], y[s]) }, n), u);
                    },
                    O = ['children'],
                    M = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, O);
                        return a().createElement(D, null, a().createElement(L, t, u));
                    };
                var I = t(493),
                    N = t.n(I);
                function k(e) {
                    engine.call('PlaySound', e);
                }
                const P = {
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
                    H = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class G extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && k(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && k(this.props.soundClick));
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
                            o = e.side,
                            i = e.type,
                            r = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, H)),
                            _ = B()(P.base, P[`base__${i}`], P[`base__${o}`], null == r ? void 0 : r.base),
                            d = B()(P.icon, P[`icon__${i}`], P[`icon__${o}`], null == r ? void 0 : r.icon),
                            A = B()(P.glow, null == r ? void 0 : r.glow),
                            F = B()(P.caption, P[`caption__${i}`], null == r ? void 0 : r.caption),
                            D = B()(P.goto, null == r ? void 0 : r.goto);
                        return a().createElement(
                            'div',
                            U(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== i && a().createElement('div', { className: P.shine }),
                            a().createElement('div', { className: d }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var W = t(5521),
                    V = t(4179);
                const $ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = W.n.NONE, u = $, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var j = t(3282),
                    q = t(8552);
                let z, Y, K, Q;
                (!(function (e) {
                    ((e.STORAGE_VIEWING = 'STORAGE_VIEWING'),
                        (e.REQUEST_TO_OPEN = 'REQUEST_TO_OPEN'),
                        (e.OPENING = 'OPENING'),
                        (e.LOSE_OPENING = 'LOSE_OPENING'),
                        (e.OPENING_ERROR = 'OPENING_ERROR'),
                        (e.UNIQUE_REWARDING = 'UNIQUE_REWARDING'),
                        (e.REWARDING = 'REWARDING'));
                })(z || (z = {})),
                    (function (e) {
                        ((e[(e.TO_HANGAR = 0)] = 'TO_HANGAR'),
                            (e[(e.TO_SHOP = 1)] = 'TO_SHOP'),
                            (e[(e.TO_NY_CUSTOMIZATION = 2)] = 'TO_NY_CUSTOMIZATION'),
                            (e[(e.TO_SHARDS = 3)] = 'TO_SHARDS'),
                            (e[(e.TO_REFERRAL = 4)] = 'TO_REFERRAL'),
                            (e[(e.TO_FIR = 5)] = 'TO_FIR'),
                            (e[(e.TO_LIGHTS = 6)] = 'TO_LIGHTS'),
                            (e[(e.TO_INSTALLATIONS = 7)] = 'TO_INSTALLATIONS'),
                            (e[(e.TO_FAIR = 8)] = 'TO_FAIR'),
                            (e[(e.TO_SKATING = 9)] = 'TO_SKATING'),
                            (e[(e.TO_ATTRACTION = 10)] = 'TO_ATTRACTION'),
                            (e[(e.TO_PET = 11)] = 'TO_PET'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e.DEFAULT = 'DEFAULT'), (e.UNIQUE = 'UNIQUE'));
                    })(K || (K = {})),
                    z.STORAGE_VIEWING,
                    z.REQUEST_TO_OPEN,
                    z.OPENING,
                    z.OPENING_ERROR,
                    z.UNIQUE_REWARDING,
                    z.REWARDING,
                    z.LOSE_OPENING,
                    (function (e) {
                        ((e[(e.Key = 0)] = 'Key'), (e[(e.Lockpick = 1)] = 'Lockpick'));
                    })(Q || (Q = {})));
                let Z;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(Z || (Z = {}));
                const J = 'tooltip_watched';
                let ee;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(ee || (ee = {}));
                const ue = ['action', 'timeLimit'],
                    te = 'metrics',
                    ne = () => Date.now(),
                    ae = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    oe = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Z.Info, a) => {
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
                    },
                    ie = (e) => {
                        const u = ((e, u) => {
                                const t = oe(e, u),
                                    a = (0, n.useRef)(new Map()),
                                    o = (0, n.useRef)(new Map()),
                                    i = (0, n.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = a.current.get(e);
                                            (void 0 !== u && u > 0) || a.current.set(e, ne());
                                        },
                                        [a],
                                    ),
                                    r = (0, n.useCallback)(() => {
                                        (a.current.clear(), o.current.clear());
                                    }, [a, o]),
                                    s = (0, n.useCallback)(
                                        (e) => {
                                            e &&
                                                void 0 !== a.current.get(e) &&
                                                void 0 === o.current.get(e) &&
                                                o.current.set(e, ne());
                                        },
                                        [a, o],
                                    ),
                                    l = (0, n.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = a.current.get(e);
                                            if (void 0 === u) return;
                                            const t = o.current.get(e);
                                            if (void 0 === t) return;
                                            o.current.delete(e);
                                            const n = ne() - t;
                                            a.current.set(e, u + n);
                                        },
                                        [a, o],
                                    ),
                                    c = (0, n.useCallback)(
                                        (e, u = 0, n, i) => {
                                            const r = a.current.get(e);
                                            if (void 0 === r) return;
                                            (void 0 !== o.current.get(e) && l(e), a.current.delete(e));
                                            const s = (ne() - r) / 1e3;
                                            s <= u ||
                                                ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(
                                                    i,
                                                    s,
                                                )),
                                                t(e, n, i));
                                        },
                                        [a, o, t, l],
                                    );
                                return [
                                    (e) => i(e),
                                    (e, u, t, n) => c(e, u, t, n),
                                    () => r(),
                                    (e) => s(e),
                                    (e) => l(e),
                                ];
                            })(e, te),
                            t = u[0],
                            a = u[1],
                            o = u[2],
                            i = u[3],
                            r = u[4],
                            s = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, ae(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => s(e), () => o(), (e) => i(e), (e) => r(e)];
                    },
                    re = (e, u) => {
                        const t = ie(e),
                            a = t[0],
                            o = t[1],
                            i = u.action,
                            r = u.timeLimit,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(u, ue);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => a(i || J),
                                onHide: () => o(Object.assign({ action: i || J, timeLimit: r || 2 }, s)),
                            }),
                            [i, r, s, a, o],
                        );
                    };
                let se, le, ce, Ee;
                (!(function (e) {
                    e.Lootbox = 'lootbox';
                })(se || (se = {})),
                    (function (e) {
                        ((e.TooltipWatched = 'tooltip_watched'),
                            (e.Click = 'click'),
                            (e.VideoStarted = 'video_started'),
                            (e.Show = 'show'));
                    })(le || (le = {})),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Probability = 'probability'),
                            (e.Rewards = 'rewards'),
                            (e.LoseRewards = 'lose_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.Welcome = 'welcome'),
                            (e.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (e.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(ce || (ce = {})),
                    (function (e) {
                        ((e.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (e.CarouselLootbox = 'carousel_lootbox'),
                            (e.InfoIcon = 'info_icon'),
                            (e.ESCButton = 'esc_button'),
                            (e.BackButton = 'back_button'),
                            (e.ProbabilityPercent = 'probability_percent'),
                            (e.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (e.ProbabilityReward = 'probability_reward'),
                            (e.MinorRewards = 'minor_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.RewardToopltip = 'reward_tooltip'),
                            (e.RewardRotationToopltip = 'reward_totation_tooltip'),
                            (e.ContinueButton = 'continue_button'),
                            (e.OpenOneMoreButton = 'open_one_more_button'),
                            (e.OpenMultiButton = 'open_multi_button'),
                            (e.OpenInHangarButton = 'open_in_hangar_button'),
                            (e.OKButton = 'ok_button'),
                            (e.CloseButton = 'close_button'),
                            (e.StatisticButton = 'statistic_button'),
                            (e.StatisticESCButton = 'statistic_esc_button'),
                            (e.statisticOutsideClick = 'statistic_outside_click'),
                            (e.DeadlineWidget = 'deadline_widget'),
                            (e.LootBoxesShortStatsTabs = 'lootboxes_short_stats_tabs'),
                            (e.LootBoxesShortStatsGroup = 'lootboxes_short_stats_group'),
                            (e.LootBoxesFullStatsSidebar = 'lootboxes_full_stats_sidebar'),
                            (e.lootBoxesFullStatsSelectAll = 'lootboxes_full_stats_select_all'),
                            (e.lootBoxesFullStatsSelect = 'lootboxes_full_stats_select'),
                            (e.lootBoxesFullStatsReward = 'lootboxes_full_stats_reward'));
                    })(Ee || (Ee = {})));
                const me = (e) => {
                    const u = ((e) => {
                            const u = oe(e, te),
                                t = (0, n.useCallback)(
                                    (e) => {
                                        u(e.action, e.logLevel, ae(e));
                                    },
                                    [u],
                                );
                            return (e) => t(e);
                        })(se.Lootbox),
                        t = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.RewardToopltip,
                            parentScreen: ce.Probability,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        a = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.InfoIcon,
                            parentScreen: ce.Storage,
                            timeLimit: 1,
                        }),
                        o = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.ProbabilityPercent,
                            parentScreen: ce.Probability,
                            timeLimit: 1,
                        }),
                        i = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.ProbabilityPercentWithGarant,
                            parentScreen: ce.Probability,
                            timeLimit: 1,
                        }),
                        r = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.RewardToopltip,
                            parentScreen: ce.Probability,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        s = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.MinorRewards,
                            parentScreen: ce.Rewards,
                            timeLimit: 1,
                        }),
                        l = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.RewardToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        c = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.IconPossibleRewardGroup,
                            parentScreen: ce.Storage,
                            timeLimit: 1,
                        }),
                        E = re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.RewardRotationToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        });
                    return {
                        rewardToopltipWatched: t,
                        infoIconToopltipWatched: a,
                        probabilityPercentToopltipWatched: o,
                        probabilityPercentWithGarantToopltipWatched: i,
                        rewardVehicleToopltipWatched: r,
                        minorRewardsToopltipWatched: s,
                        rewardSharedToopltipWatched: l,
                        iconPossibleRewardGroupToopltipWatched: c,
                        carouselLootboxToopltipWatched: re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.CarouselLootbox,
                            parentScreen: ce.Storage,
                            timeLimit: 2,
                        }),
                        rewardToopltipWatchedWithRotation: E,
                        statisticButtonToopltipWatched: re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.StatisticButton,
                            parentScreen: ce.LootBoxesShortStats,
                            timeLimit: 1,
                        }),
                        deadlineWidgetToopltipWatched: re(se.Lootbox, {
                            action: le.TooltipWatched,
                            item: Ee.DeadlineWidget,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                        }),
                        probabilityPercentWithGarantClick: () => {
                            u({
                                action: le.Click,
                                parentScreen: ce.Probability,
                                item: Ee.ProbabilityPercentWithGarant,
                            });
                        },
                        probabilityPercentClick: () => {
                            u({ action: le.Click, parentScreen: ce.Probability, item: Ee.ProbabilityPercent });
                        },
                        showLoseRewardsViewButton: (e, t) => {
                            u({
                                action: le.Show,
                                parentScreen: ce.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        loseRewardsViewButtonClick: (e, t) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        showLoseRewardsViewCloseButton: (e) => {
                            u({
                                action: le.Show,
                                parentScreen: ce.LoseRewards,
                                item: Ee.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewCloseButtonClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LoseRewards,
                                item: Ee.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewESCButtonClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LoseRewards,
                                item: Ee.ESCButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        showRewardsViewCloseButton: (e) => {
                            u({
                                action: le.Show,
                                parentScreen: ce.Rewards,
                                item: Ee.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewCloseButtonClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.Rewards,
                                item: Ee.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewESCButtonClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.Rewards,
                                item: Ee.ESCButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewMinorRewardsShow: () => {
                            u({ action: le.Show, parentScreen: ce.Rewards, item: Ee.MinorRewards });
                        },
                        showRewardsViewButton: (e, t) => {
                            u({
                                action: le.Show,
                                parentScreen: ce.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsViewButtonClick: (e, t) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsVideoCloseClick: (e, t, n, a) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.RewardVideo,
                                item: Ee.CloseButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: n, reward: a }),
                            });
                        },
                        rewardsVideoESCClick: (e, t, n, a) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.RewardVideo,
                                item: Ee.ESCButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: n, reward: a }),
                            });
                        },
                        rewardsVideoStarted: (e, t, n) => {
                            u({
                                action: le.VideoStarted,
                                parentScreen: ce.RewardVideo,
                                item: Ee.RewardVideo,
                                info: JSON.stringify({ lootboxID: t, lootboxType: e, reward: n }),
                            });
                        },
                        storageViewESCButtonClick: () => {
                            u({ action: le.Click, parentScreen: ce.Storage, item: Ee.ESCButton });
                        },
                        iconPossibleRewardGroupClick: () => {
                            u({ action: le.Click, parentScreen: ce.Storage, item: Ee.IconPossibleRewardGroup });
                        },
                        lootBoxesShortStatsViewESCButtonClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesShortStats,
                                item: Ee.StatisticESCButton,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsOutsideClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesShortStats,
                                item: Ee.statisticOutsideClick,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsTabsClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesShortStats,
                                item: Ee.LootBoxesShortStatsTabs,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsGroupClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesShortStats,
                                item: Ee.LootBoxesShortStatsGroup,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSidebarClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesFullStats,
                                item: Ee.LootBoxesFullStatsSidebar,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSelectAllClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesFullStats,
                                item: Ee.lootBoxesFullStatsSelectAll,
                                info: JSON.stringify({ isButtonActive: e }),
                            });
                        },
                        lootBoxesFullStatsSelectLootboxClick: (e, t) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesFullStats,
                                item: Ee.lootBoxesFullStatsSelect,
                                info: JSON.stringify({ lootboxID: e, isButtonActive: t }),
                            });
                        },
                        lootBoxesFullStatsRewardClick: (e) => {
                            u({
                                action: le.Click,
                                parentScreen: ce.LootBoxesFullStats,
                                item: Ee.lootBoxesFullStatsReward,
                                info: JSON.stringify({ rewardType: e }),
                            });
                        },
                        storageViewBackButtonClick: () => {
                            u({ action: le.Click, parentScreen: ce.Storage, item: Ee.BackButton });
                        },
                    };
                };
                let _e, de, Ae, Fe, De, Ce, Be, pe, ge;
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
                        (e.PostStamp = 'giftsystem_5_stamp'),
                        (e.Quests = 'quests'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.GoldenTicket = 'goldenticket'),
                        (e.LbStyleProgress = 'lbStyleProgress'),
                        (e.RewardsSlots = 'rewardsSlots'));
                })(_e || (_e = {})),
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
                    })(de || (de = {})),
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
                    })(Ae || (Ae = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Fe || (Fe = {})),
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
                    })(De || (De = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ce || (Ce = {})),
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
                    })(Be || (Be = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(pe || (pe = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(ge || (ge = {})));
                const he = 900,
                    be = 400,
                    Se = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    xe = [_e.Vehicles, _e.TmanToken, _e.CollectionItem];
                class ve extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? V.B3.GOLD : V.B3.INTEGRAL;
                        const u = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ve.defaultProps = { format: 'integral' };
                const we = [
                        _e.Items,
                        _e.Equipment,
                        _e.Xp,
                        _e.XpFactor,
                        _e.Blueprints,
                        _e.BlueprintsAny,
                        _e.Goodies,
                        _e.Berths,
                        _e.Slots,
                        _e.Tokens,
                        _e.CrewSkins,
                        _e.CrewBooks,
                        _e.Customizations,
                        _e.CreditsFactor,
                        _e.TankmenXp,
                        _e.TankmenXpFactor,
                        _e.FreeXpFactor,
                        _e.BattleToken,
                        _e.PremiumUniversal,
                        _e.NaturalCover,
                        _e.BpCoin,
                        _e.BattlePassSelectToken,
                        _e.BattlaPassFinalAchievement,
                        _e.BattleBadge,
                        _e.BonusX5,
                        _e.CrewBonusX3,
                        _e.NewYearFillers,
                        _e.NewYearInvoice,
                        _e.EpicSelectToken,
                        _e.Comp7TokenWeeklyReward,
                        _e.Comp7TokenCouponReward,
                        _e.BattleBoosterGift,
                        _e.CosmicLootboxCommon,
                        _e.CosmicLootboxSilver,
                        _e.SelectableBonus,
                        _e.PostStamp,
                        _e.PremiumPlusUniversal,
                        _e.GoldenTicket,
                        _e.RewardsSlots,
                    ],
                    fe = [_e.Gold, _e.Credits, _e.Crystal, _e.FreeXp],
                    Te = [_e.BattlePassPoints],
                    Re = [_e.PremiumPlus, _e.Premium];
                let ye;
                !(function (e) {
                    ((e.s16 = '16'),
                        (e.s32 = '32'),
                        (e.s48 = '48'),
                        (e.s66 = '66'),
                        (e.s80 = '80'),
                        (e.s116 = '116'),
                        (e.s296 = '296'),
                        (e.s360 = '360'),
                        (e.s400 = '400'),
                        (e.s600 = '600'));
                })(ye || (ye = {}));
                const Le = ['engravings', 'backgrounds'],
                    Oe = ['engraving', 'background'],
                    Me = (e, u, t) => {
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
                    Ie = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Fe.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Fe.CURRENCY:
                            case Fe.NUMBER:
                                return a().createElement(ve, { format: 'integral', value: Number(e) });
                            case Fe.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    Ne = (e, u, t) => {
                        const n = R.images.gui.maps.icons.quests.bonuses.$dyn(u),
                            a = n.$dyn(e);
                        return String(null != a ? a : n.$dyn(t));
                    };
                function ke() {
                    return !1;
                }
                let Pe;
                (console.log,
                    (function (e) {
                        ((e.DEFAULT = 'DEFAULT'), (e.UNIQUE = 'UNIQUE'));
                    })(Pe || (Pe = {})));
                var He = t(3915);
                function Ue(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Ge = (e) => (0 === e ? window : window.subViews.get(e));
                function We(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var Ve = t(6517);
                let $e;
                function Xe(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })($e || ($e = {}));
                const je = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    qe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ze = (e, u, t = $e.left) => e.split(u).reduce(t === $e.left ? je : qe, []),
                    Ye = (() => {
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
                    Ke = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Qe = (e) => he + 200 * e,
                    Ze = (e) => {
                        return {
                            name: e.name,
                            image: (u) =>
                                ((e, u = Ae.Small) => {
                                    const t = Xe(e.vehicleName || '');
                                    if (e.name === _e.Vehicles)
                                        switch (u) {
                                            case Ae.Mini:
                                            case Ae.Small:
                                            case Ae.S48x48:
                                                return e.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                            case Ae.Big:
                                            case Ae.S80x80:
                                                return e.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                            case Ae.S128x100:
                                            case Ae.S180x135:
                                                return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                            case Ae.S232x174:
                                            case Ae.S296x222:
                                                return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                            case Ae.S400x300:
                                            case Ae.S600x450:
                                                return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                            default:
                                                return (
                                                    console.error('Unknown vehicle image size', u, e.vehicleName),
                                                    'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                );
                                        }
                                    if (e.name === _e.TmanToken)
                                        switch (u) {
                                            case Ae.Mini:
                                            case Ae.Small:
                                            case Ae.S48x48:
                                            case Ae.Big:
                                            case Ae.S80x80:
                                                return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                            case Ae.S128x100:
                                            case Ae.S180x135:
                                            case Ae.S232x174:
                                                return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                            case Ae.S296x222:
                                                return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                            case Ae.S400x300:
                                                return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                            case Ae.S600x450:
                                                return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                            default:
                                                return (
                                                    console.error('Unknown image size', u),
                                                    'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                );
                                        }
                                    if (e.name === _e.CollectionItem)
                                        switch (u) {
                                            case Ae.Mini:
                                            case Ae.Small:
                                            case Ae.S48x48:
                                                return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                            case Ae.Big:
                                            case Ae.S80x80:
                                                return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                            case Ae.S128x100:
                                            case Ae.S180x135:
                                            case Ae.S232x174:
                                                return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                            case Ae.S296x222:
                                                return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                            case Ae.S400x300:
                                                return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                            case Ae.S600x450:
                                                return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                            default:
                                                console.error('Unknown image size', u);
                                        }
                                    return (
                                        e.name === _e.DogTagType && u === Ae.S180x135 && (u = Ae.S232x174),
                                        ((e, u = Ae.Small) => {
                                            const t = e.name,
                                                n = e.type,
                                                a = e.value,
                                                o = e.icon,
                                                i = e.item,
                                                r = e.dogTagType,
                                                s = ((e) => {
                                                    switch (e) {
                                                        case Ae.S600x450:
                                                            return 'c_600x450';
                                                        case Ae.S400x300:
                                                            return 'c_400x300';
                                                        case Ae.S296x222:
                                                            return 'c_296x222';
                                                        case Ae.S232x174:
                                                            return 'c_232x174';
                                                        case Ae.Big:
                                                            return 'c_80x80';
                                                        case Ae.Small:
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
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                                                case 'blueprints':
                                                case 'blueprintsAny':
                                                case 'finalBlueprints':
                                                    return `R.images.gui.maps.icons.blueprints.fragment.${u}.${o}`;
                                                case 'tokens':
                                                case 'battleToken':
                                                    return ((e, u) => {
                                                        switch (u) {
                                                            case Ae.Big:
                                                                return e.iconBig.replace('..', 'img://gui');
                                                            case Ae.Small:
                                                                return e.iconSmall.replace('..', 'img://gui');
                                                            default:
                                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                                        }
                                                    })(e, u);
                                                case 'crewBooks':
                                                    return `R.images.gui.maps.icons.crewBooks.books.${u}.${o}`;
                                                case 'dogTagComponents':
                                                    return ((e, u, t) => {
                                                        const n = Le[e];
                                                        if (n) {
                                                            const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                                                o = a.$dyn(t);
                                                            return o ? `${o}` : `${a.$dyn(Oe[e])}`;
                                                        }
                                                        return (
                                                            console.error(
                                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                            ),
                                                            ''
                                                        );
                                                    })(r, u, o);
                                                case 'dossier_badge':
                                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${o}`;
                                                case 'dossier_achievement':
                                                    return `R.images.gui.maps.icons.achievement.${((e) => {
                                                        switch (e) {
                                                            case Ae.S600x450:
                                                                return 'c_600x450';
                                                            case Ae.S400x300:
                                                                return 'c_400x300';
                                                            case Ae.S296x222:
                                                                return 'c_296x222';
                                                            case Ae.S232x174:
                                                                return 'c_232x174';
                                                            case Ae.S180x135:
                                                                return 'big';
                                                            case Ae.Big:
                                                            case Ae.S80x80:
                                                                return 'c_80x80';
                                                            case Ae.Small:
                                                            case Ae.S48x48:
                                                                return 'c_48x48';
                                                            default:
                                                                return e;
                                                        }
                                                    })(u)}.${o}`;
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
                                                case 'crewSkins':
                                                case 'goodies':
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                                                case 'premiumTank':
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                                case 'styleProgressToken':
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                                case 'collectionItem':
                                                    return `R.images.gui.maps.icons.collectionItems.${s}.${o}`;
                                                case 'premium_universal':
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                                                case 'armory_coin':
                                                    return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                                        switch (e) {
                                                            case Ae.Mini:
                                                                return ye.s32;
                                                            case Ae.Small:
                                                            case Ae.S48x48:
                                                                return ye.s48;
                                                            case Ae.S80x80:
                                                            case Ae.Big:
                                                                return ye.s80;
                                                            case Ae.S128x100:
                                                                return ye.s116;
                                                            case Ae.S180x135:
                                                            case Ae.S232x174:
                                                            case Ae.S296x222:
                                                                return ye.s296;
                                                            case Ae.S400x300:
                                                                return ye.s400;
                                                            case Ae.S600x450:
                                                                return ye.s600;
                                                        }
                                                    })(u)}`;
                                                case _e.StyleProgress:
                                                case _e.LbStyleProgress:
                                                    return Ne(o, u, ge.ProgressionStyle);
                                                default:
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                                            }
                                        })(e, u)
                                    );
                                })(e, u),
                            value: e.value,
                            valueType:
                                ((u = e.name),
                                we.includes(u)
                                    ? Fe.MULTI
                                    : fe.includes(u)
                                      ? Fe.CURRENCY
                                      : Te.includes(u)
                                        ? Fe.NUMBER
                                        : Re.includes(u)
                                          ? Fe.PREMIUM_PLUS
                                          : Fe.STRING),
                            label: e.label,
                            special: e.overlayType,
                            tooltipArgs: Me({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            type: e.type,
                            vehicleNation: e.nationTag,
                            vehicleLvl: e.level,
                            vehicleName: e.label,
                            isElite: e.isElite,
                            isRent: e.isRent,
                            rentBattles: e.rentBattles,
                            rentDays: e.rentDays,
                            isCompensation: e.isCompensation,
                            compensatedBonus: e.compensatedBonus,
                            toyID: e.toyID,
                            rankValue: e.rankValue,
                            icon: e.icon,
                            isNew: e.isNew,
                        };
                        var u;
                    },
                    Je = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: o, children: r, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ge,
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
                                                const r = (e) => {
                                                    const a = t(u),
                                                        o = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const s = 'string' == typeof o ? `${n}.${o}` : n,
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return (a.set(l, t), e && t(r(o)), l);
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, u) => {
                                                        const t = r(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = r(e);
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
                                                                                    return Ue(e, u);
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
                                                                                          ? Ue(e, u)
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
                                                            o(e.value, u);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(t),
                                            r =
                                                'real' === e
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : r.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        mainRewards: e.array('mainRewards'),
                                                        rewards: e.array('rewards'),
                                                        lootboxKey: e.object('lootboxKey'),
                                                    },
                                                    t = (0, Ve.computedFn)(
                                                        () => We(u.mainRewards.get(), (e) => Ze(e)),
                                                        { equals: ke },
                                                    ),
                                                    n = (0, Ve.computedFn)(() => We(u.rewards.get(), (e) => Ze(e)), {
                                                        equals: ke,
                                                    }),
                                                    a = (0, Ve.computedFn)(() => Boolean(t().length % 2), {
                                                        equals: ke,
                                                    }),
                                                    o = (0, Ve.computedFn)(() => Boolean(t().length), { equals: ke }),
                                                    i = (0, Ve.computedFn)(() => Boolean(n().length), { equals: ke }),
                                                    r = (0, Ve.computedFn)(() => t().some((e) => xe.includes(e.name)), {
                                                        equals: ke,
                                                    }),
                                                    s = (0, Ve.computedFn)(
                                                        () => t().some((e) => e.name === _e.Vehicles),
                                                        { equals: ke },
                                                    ),
                                                    l = (0, Ve.computedFn)(() => Math.min(n().length, 9), {
                                                        equals: ke,
                                                    }),
                                                    c = (0, Ve.computedFn)(() => 200 * t().length + be, { equals: ke }),
                                                    E = (0, Ve.computedFn)(
                                                        () => {
                                                            const e = l() > 0 ? be : 0;
                                                            return c() + 200 * l() + e;
                                                        },
                                                        { equals: ke },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getMainRewards: t,
                                                        getRegularRewards: n,
                                                        isCountMainRewardsOdd: a,
                                                        hasMainRewards: o,
                                                        hasRegularRewards: i,
                                                        hasGoldMainRewards: r,
                                                        getVisibleRewardsLength: l,
                                                        getRewardsShowDelay: c,
                                                        getFooterShowDelay: E,
                                                        hasVehicleReward: s,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            a = He.observable.box(n, { equals: ke });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, He.action)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            a = He.observable.box(n, { equals: ke });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, He.action)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = He.observable.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, He.action)((e) => {
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
                                                                o = Object.entries(a),
                                                                i = o.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = He.observable.box(n[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, He.action)((e) => {
                                                                            o.forEach(([u, t]) => {
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
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: E, externalModel: r, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(m) : u(m),
                                            externalModel: r,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    _ = m[0],
                                    d = m[1],
                                    A = (0, n.useState)(() => c(e, o, s)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(_, o, s)) : (E.current = !0);
                                    }, [s, _, o]),
                                    (0, n.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, r)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        showVehicleInHangar: e.createCallbackNoArgs('showVehicleInHangar'),
                        onRepeatOpen: e.createCallback(
                            (e, u, t) => ({ lootBoxID: e, count: u, keyID: t }),
                            'onRepeatOpen',
                        ),
                    })),
                    eu = Je[0],
                    uu = Je[1];
                function tu(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const a = n % t,
                            o = (a % u.columns) * e.width,
                            i = Math.trunc(a / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: o, y: i };
                    };
                }
                const nu = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const ou = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            o = e.getImageSource,
                            i = e.frameCount,
                            r = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? 33 : s,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? i - 1 : m,
                            d = e.loop,
                            A = void 0 === d || d,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            C = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            p = e.poster,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, nu);
                        const h = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = su(E, _, o),
                                                u = iu(E, _),
                                                n = window.setInterval(() => {
                                                    const a = u(),
                                                        o = e.get(a);
                                                    o
                                                        ? (null == r || r(a, o),
                                                          t(o),
                                                          a === _ &&
                                                              (null == B || B(),
                                                              A || (null == C || C(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && p ? { path: p, x: 0, y: 0 } : o(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(ru(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, o, E, _, A, r, B, C, p, D]),
                            a().createElement('canvas', au({}, g, { width: u, height: t, ref: h }))
                        );
                    }),
                    iu = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    ru = (e, u) => Object.assign({}, e, { img: u }),
                    su = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let o = e; o <= u; o++) {
                            const e = t(o),
                                u = a[e.path];
                            if (u) n.set(o, ru(e, u));
                            else {
                                const u = new Image();
                                ((a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${o})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(o, ru(e, u)));
                            }
                        }
                        return n;
                    },
                    lu = [
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
                function cu(e) {
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
                const Eu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    mu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            o = e.onMouseEnter,
                            i = e.onMouseLeave,
                            r = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            _ = e.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            p = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, lu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            S = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Eu(t, d, { isMouseEvent: !0, on: !0, arguments: cu(a) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, d, a, b, B]),
                            x = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Eu(t, d, { on: !1 }, b),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, b, p]),
                            v = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', v, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', v, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && x();
                            }, [F, x]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(S, c ? 100 : 400)),
                                                          o && o(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (x(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && x(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && x(), null == r || r(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    _u = ['children'];
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Au = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, _u);
                        return a().createElement(
                            mu,
                            du(
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
                    Fu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const Cu = R.views.common.tooltip_window.simple_tooltip_content,
                    Bu = (e) => {
                        let u = e.children,
                            t = e.body,
                            o = e.header,
                            i = e.note,
                            r = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Fu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: o, note: i, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, o, i, s]);
                        return a().createElement(
                            mu,
                            Du(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Cu.SimpleTooltipHtmlContent('resId') : Cu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const gu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Bu, u, n);
                        const o = u.contentId,
                            i = u.args,
                            r = null == i ? void 0 : i.contentId;
                        return o || r
                            ? a().createElement(mu, pu({}, u, { contentId: o || r }), n)
                            : a().createElement(Au, u, n);
                    },
                    hu = {
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
                    bu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = Ae.Big,
                        special: o,
                        value: i,
                        valueType: r,
                        style: s,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case De.BATTLE_BOOSTER:
                                    case De.BATTLE_BOOSTER_REPLACE:
                                        return Ce.BATTLE_BOOSTER;
                                }
                            })(o),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case De.BATTLE_BOOSTER:
                                        return Be.BATTLE_BOOSTER;
                                    case De.BATTLE_BOOSTER_REPLACE:
                                        return Be.BATTLE_BOOSTER_REPLACE;
                                    case De.BUILT_IN_EQUIPMENT:
                                        return Be.BUILT_IN_EQUIPMENT;
                                    case De.EQUIPMENT_PLUS:
                                        return Be.EQUIPMENT_PLUS;
                                    case De.EQUIPMENT_TROPHY_BASIC:
                                        return Be.EQUIPMENT_TROPHY_BASIC;
                                    case De.EQUIPMENT_TROPHY_UPGRADED:
                                        return Be.EQUIPMENT_TROPHY_UPGRADED;
                                    case De.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Be.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case De.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Be.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case De.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Be.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case De.PROGRESSION_STYLE_UPGRADED_1:
                                        return Be.PROGRESSION_STYLE_UPGRADED_1;
                                    case De.PROGRESSION_STYLE_UPGRADED_2:
                                        return Be.PROGRESSION_STYLE_UPGRADED_2;
                                    case De.PROGRESSION_STYLE_UPGRADED_3:
                                        return Be.PROGRESSION_STYLE_UPGRADED_3;
                                    case De.PROGRESSION_STYLE_UPGRADED_4:
                                        return Be.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(o),
                            A = Ie(i, r);
                        return a().createElement(
                            'div',
                            { className: B()(hu.base, hu[`base__${n}`], l), style: s },
                            a().createElement(
                                gu,
                                { tooltipArgs: E, className: hu.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: B()(hu.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            a().createElement('div', {
                                                className: B()(hu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            a().createElement('div', {
                                                className: B()(hu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            a().createElement('div', {
                                                className: B()(hu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    hu.info,
                                                    hu[`info__${e}`],
                                                    r === Fe.MULTI && hu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    gu,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: B()(hu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Su = ({ index: e = 0, delay: u = 0, children: t }) => {
                        const n = (0, q.useSpring)({
                            from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                            to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                            delay: u + Qe(e),
                            config: { duration: be, easing: Se },
                            onStart: () => {
                                k(R.sounds.gui_random_reward_appear());
                            },
                        });
                        return a().createElement(q.animated.div, { className: 'AnimatedReward_base_58', style: n }, t);
                    },
                    xu = {
                        base: 'CompensationLabel_base_96',
                        icon: 'CompensationLabel_icon_2b',
                        icon__vehicles: 'CompensationLabel_icon__vehicles_be',
                        value: 'CompensationLabel_value_e1',
                        value__credits: 'CompensationLabel_value__credits_d5',
                    },
                    vu = ({ compensatedBonusType: e, compensatedItem: u, value: t, valueType: n }) => {
                        const o = Ie(t, n);
                        return a().createElement(
                            'div',
                            { className: xu.base },
                            a().createElement('div', { className: B()(xu.icon, xu[`icon__${u}`]) }),
                            a().createElement('div', { className: B()(xu.value, xu[`value__${e}`]) }, o),
                        );
                    },
                    wu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    fu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Tu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ru = {
                        base: 'VehicleName_base_ed',
                        base__white: 'VehicleName_base__white_03',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_60',
                        nation: 'VehicleName_nation_74',
                        nation__china: 'VehicleName_nation__china_3c',
                        nation__czech: 'VehicleName_nation__czech_15',
                        nation__france: 'VehicleName_nation__france_b5',
                        nation__germany: 'VehicleName_nation__germany_e6',
                        nation__italy: 'VehicleName_nation__italy_05',
                        nation__japan: 'VehicleName_nation__japan_23',
                        nation__poland: 'VehicleName_nation__poland_82',
                        nation__sweden: 'VehicleName_nation__sweden_7a',
                        nation__uk: 'VehicleName_nation__uk_f2',
                        nation__usa: 'VehicleName_nation__usa_99',
                        nation__ussr: 'VehicleName_nation__ussr_87',
                        base__colored: 'VehicleName_base__colored_33',
                        level: 'VehicleName_level_b7',
                        type: 'VehicleName_type_fe',
                        type__AT_SPG: 'VehicleName_type__AT_SPG_35',
                        type__elite: 'VehicleName_type__elite_98',
                        type__heavyTank: 'VehicleName_type__heavyTank_cd',
                        type__lightTank: 'VehicleName_type__lightTank_c1',
                        type__mediumTank: 'VehicleName_type__mediumTank_67',
                        type__SPG: 'VehicleName_type__SPG_c9',
                        base__medium: 'VehicleName_base__medium_56',
                        name: 'VehicleName_name_b4',
                    },
                    yu = { Small: 'small', Medium: 'medium' },
                    Lu = { Colored: 'colored', White: 'white', WhiteSpanish: 'whiteSpanish' },
                    Ou = a().memo(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleShortName: t = u,
                            vehicleNation: n,
                            vehicleType: o,
                            vehicleLvl: i,
                            size: r = yu.extraSmall,
                            type: s = Lu.colored,
                        }) => {
                            const l = B()(Ru.base, Ru[`base__${r}`], Ru[`base__${s}`]),
                                c = B()(Ru.nation, Ru[`nation__${n}`]),
                                E = B()(Ru.type, e && Ru.type__elite, Ru[`type__${Xe(o)}`]);
                            return a().createElement(
                                'div',
                                { className: l },
                                a().createElement('div', { className: c }),
                                a().createElement(
                                    'div',
                                    { className: Ru.level },
                                    ((m = i),
                                    Tu
                                        ? `${m}`
                                        : (function (e) {
                                              let u = '';
                                              for (let t = fu.length - 1; t >= 0; t--)
                                                  for (; e >= fu[t];) ((u += wu[t]), (e -= fu[t]));
                                              return u;
                                          })(m)),
                                ),
                                a().createElement('div', { className: E }),
                                a().createElement('div', { className: Ru.name }, t),
                            );
                            var m;
                        },
                    ),
                    Mu = ({ binding: e, text: u = '', classMix: t, alignment: o = $e.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, i) =>
                                      a().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${i}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = $e.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Ke.includes(t)
                                                                ? Ye(e)
                                                                : ((e, u = $e.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ze(a, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(ze(e, n, $e.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, o, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Iu = R.strings.gui_lootboxes.rewards.rent,
                    Nu = ({ rentBattles: e = 0, rentDays: u = 0 }) => {
                        const t =
                            e > 0
                                ? { text: Iu.battles(e), binding: { battles: e } }
                                : { text: Iu.days(u), binding: { days: u } };
                        return a().createElement(
                            'div',
                            { className: 'VehicleRentTip_base_28' },
                            a().createElement('div', { className: 'VehicleRentTip_icon_f7' }),
                            a().createElement(
                                'div',
                                { className: 'VehicleRentTip_label_71' },
                                a().createElement(Mu, t),
                            ),
                        );
                    };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Pu = ({ reward: e, index: u = 0, size: t = Ae.S296x222 }) => {
                        const o = (0, n.useState)(!0),
                            i = o[0],
                            r = o[1],
                            s = Object.assign({}, e.tooltipArgs, { ignoreShowDelay: !0 });
                        (0, n.useEffect)(() => {
                            setTimeout(() => r(!1), Qe(u) - 200);
                        }, []);
                        const l =
                            ('vehicles' === e.name &&
                                a().createElement(Ou, {
                                    isElite: e.isElite,
                                    vehicleName: e.vehicleName,
                                    vehicleNation: e.vehicleNation,
                                    vehicleType: e.type,
                                    vehicleLvl: e.vehicleLvl,
                                })) ||
                            (e.isCompensation &&
                                a().createElement(
                                    gu,
                                    { tooltipArgs: s },
                                    a().createElement(vu, {
                                        value: e.value,
                                        valueType: e.valueType,
                                        compensatedBonusType: e.name,
                                        compensatedItem: e.compensatedBonus,
                                    }),
                                )) ||
                            a().createElement('div', { className: 'MainReward_labelText_92' }, e.label);
                        return a().createElement(
                            'div',
                            { className: B()('MainReward_base_40', i && 'MainReward_base__disabled_f6') },
                            a().createElement(
                                Su,
                                { index: u },
                                e.isRent && a().createElement('div', { className: 'MainReward_rentReward_63' }),
                                a().createElement(
                                    bu,
                                    ku({}, e, {
                                        image: e.image(t),
                                        size: t,
                                        classNames: { info: 'MainReward_info_29' },
                                        tooltipArgs: s,
                                        value: e.isCompensation ? void 0 : e.value,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'MainReward_labelCont_8d' },
                                    a().createElement('div', { className: 'MainReward_label_d7' }, l),
                                    e.isRent &&
                                        a().createElement(
                                            'div',
                                            { className: 'MainReward_tip_22' },
                                            a().createElement(Nu, { rentDays: e.rentDays, rentBattles: e.rentBattles }),
                                        ),
                                ),
                            ),
                        );
                    },
                    Hu = 'RewardList_reward_9d';
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
                const Gu = ({
                        index: e,
                        delay: u,
                        size: t,
                        name: o,
                        tooltipArgs: i,
                        className: r,
                        customImage: s,
                        value: l,
                        reward: c,
                    }) => {
                        const E = (0, n.useState)(!0),
                            m = E[0],
                            _ = E[1];
                        return (
                            (0, n.useEffect)(() => {
                                setTimeout(() => _(!1), Qe(e) + 400);
                            }, []),
                            a().createElement(
                                'div',
                                { className: B()('SmallReward_base_67', m && 'SmallReward_base__disabled_e4') },
                                a().createElement(
                                    Su,
                                    { index: e, delay: u },
                                    c
                                        ? a().createElement(
                                              bu,
                                              Uu({}, c, {
                                                  name: o,
                                                  image: c.image(t),
                                                  size: t,
                                                  className: r,
                                                  tooltipArgs: i,
                                              }),
                                          )
                                        : a().createElement(bu, {
                                              name: o,
                                              image: s,
                                              size: t,
                                              value: l,
                                              tooltipArgs: i,
                                              className: r,
                                          }),
                                ),
                            )
                        );
                    },
                    Wu = ({ data: e, maxRewards: u = 0, showDelay: t = 0 }) => {
                        const o = x().mediaSize < h.Medium ? Ae.Small : Ae.Big,
                            i = me(),
                            r = i.minorRewardsToopltipWatched,
                            s = i.rewardsViewMinorRewardsShow,
                            l = Boolean(u) && u < e.length,
                            c = l ? e.slice(0, u - 1) : e,
                            E = (0, n.useMemo)(
                                () => (l ? `R.images.gui.maps.icons.quests.bonuses.${o}.default` : ''),
                                [o, l],
                            ),
                            m = l
                                ? ((_ = R.strings.tooltips.quests.awards.additional.bottom()),
                                  (d = { count: e.length - (u - 1) }),
                                  _.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                      const u = 0 === e.indexOf('%') ? 2 : 1;
                                      return String(d[e.slice(u, -u)]);
                                  }))
                                : '';
                        var _, d;
                        const A = (0, n.useMemo)(
                            () =>
                                l
                                    ? Me(
                                          { inBoxCount: e.length - (u - 1) },
                                          R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                      )
                                    : void 0,
                            [u, e.length, l],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                l && s();
                            }, [l, s]),
                            a().createElement(
                                'div',
                                { className: 'RewardList_base_50' },
                                c.map((e, u) =>
                                    a().createElement(Gu, {
                                        key: u,
                                        index: u,
                                        delay: t,
                                        name: e.name,
                                        size: o,
                                        tooltipArgs: Object.assign({}, e.tooltipArgs, { ignoreShowDelay: !0 }),
                                        reward: e,
                                        className: Hu,
                                    }),
                                ),
                                l &&
                                    a().createElement(Gu, {
                                        name: 'more',
                                        customImage: E,
                                        size: o,
                                        value: m,
                                        tooltipArgs: Object.assign({}, A, { ignoreShowDelay: !0 }, r),
                                        className: Hu,
                                        index: u - 1,
                                        delay: t,
                                    }),
                            )
                        );
                    },
                    Vu = {
                        width: 200,
                        height: 200,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.gui_lootboxes.gui.maps.openBox.sprite_',
                            (e) => `R.images.gui_lootboxes.gui.maps.openBox.sprite_${e}`),
                    };
                const $u = {
                        1: {
                            [h.ExtraSmall]: [Ae.S296x222],
                            [h.Small]: [Ae.S400x300],
                            [h.Medium]: [Ae.S400x300],
                            [h.Large]: [Ae.S600x450],
                            [h.ExtraLarge]: [Ae.S600x450],
                        },
                        2: {
                            [h.ExtraSmall]: [Ae.S296x222, Ae.S296x222],
                            [h.Small]: [Ae.S296x222, Ae.S296x222],
                            [h.Medium]: [Ae.S296x222, Ae.S296x222],
                            [h.Large]: [Ae.S400x300, Ae.S400x300],
                            [h.ExtraLarge]: [Ae.S400x300, Ae.S400x300],
                        },
                        3: {
                            [h.ExtraSmall]: [Ae.S296x222, Ae.S296x222, Ae.S296x222],
                            [h.Small]: [Ae.S296x222, Ae.S400x300, Ae.S296x222],
                            [h.Medium]: [Ae.S296x222, Ae.S400x300, Ae.S296x222],
                            [h.Large]: [Ae.S400x300, Ae.S600x450, Ae.S400x300],
                            [h.ExtraLarge]: [Ae.S400x300, Ae.S600x450, Ae.S400x300],
                        },
                    },
                    Xu = (0, j.observer)(() => {
                        const e = uu().model,
                            u = e.computes.getMainRewards(),
                            t = e.computes.getRegularRewards(),
                            n = e.computes.isCountMainRewardsOdd(),
                            o = e.computes.hasMainRewards(),
                            i = e.computes.hasRegularRewards(),
                            r = e.computes.getRewardsShowDelay(),
                            s = e.computes.hasGoldMainRewards(),
                            l = x().mediaSize,
                            c = $u[u.length][l],
                            E = (0, q.useSpring)({
                                from: { scale: 1.2, opacity: 0, transform: 'translateY(0)' },
                                to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                                delay: he,
                                config: { duration: be, easing: Se },
                            });
                        return a().createElement(
                            'div',
                            { className: 'Content_base_81' },
                            n &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: 'Content_sunShine_30' },
                                        a().createElement(ou, {
                                            width: Vu.width,
                                            height: Vu.height,
                                            frameCount: Vu.frameCount,
                                            getImageSource: tu(Vu),
                                            frameTime: 50,
                                            className: 'Content_sunShineCanvas_7b',
                                        }),
                                    ),
                                    a().createElement(
                                        q.animated.div,
                                        { className: 'Content_starsAnimation_a6', style: E },
                                        a().createElement('div', { className: 'Content_stars_45' }),
                                    ),
                                ),
                            a().createElement('div', {
                                className: B()('Content_ribbon_f6', s && 'Content_ribbon__gold_1b'),
                            }),
                            a().createElement('div', { className: 'Content_rays_bd' }),
                            o &&
                                a().createElement(
                                    'div',
                                    { className: 'Content_mainRewards_73' },
                                    u.map((e, u) => a().createElement(Pu, { key: u, reward: e, index: u, size: c[u] })),
                                ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: 'Content_regularRewards_1d' },
                                    a().createElement(Wu, { data: t, maxRewards: 9, showDelay: r }),
                                ),
                        );
                    }),
                    ju = {
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
                let qu, zu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(qu || (qu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(zu || (zu = {})));
                const Yu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: o,
                    disabled: i,
                    mixClass: r,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        p = D[1],
                        g = (0, n.useState)(!1),
                        h = g[0],
                        b = g[1],
                        S = (0, n.useState)(!1),
                        x = S[0],
                        v = S[1],
                        w = (0, n.useCallback)(() => {
                            i || (F.current && (F.current.focus(), p(!0)));
                        }, [i]),
                        f = (0, n.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && p(!1);
                            },
                            [C],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && k(s), c && c(e), v(!0));
                            },
                            [i, s, c],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e), b(!1));
                            },
                            [i, _],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                i || (null !== l && k(l), m && m(e), t && w(), b(!0));
                            },
                            [i, l, m, w, t],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                i || (d && d(e), b(!1));
                            },
                            [i, d],
                        ),
                        N = B()(
                            ju.base,
                            ju[`base__${o}`],
                            {
                                [ju.base__disabled]: i,
                                [ju[`base__${u}`]]: u,
                                [ju.base__focus]: C,
                                [ju.base__highlightActive]: h,
                                [ju.base__firstHover]: x,
                            },
                            r,
                        ),
                        P = B()(ju.state, ju.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', f),
                                () => {
                                    document.removeEventListener('mousedown', f);
                                }
                            ),
                            [f],
                        ),
                        (0, n.useEffect)(() => {
                            p(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: O,
                                onMouseDown: M,
                                onMouseLeave: I,
                                onClick: T,
                            },
                            o !== qu.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ju.back }),
                                    a().createElement('span', { className: ju.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: P },
                                a().createElement('span', { className: ju.stateDisabled }),
                                a().createElement('span', { className: ju.stateHighlightHover }),
                                a().createElement('span', { className: ju.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: ju.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Yu.defaultProps = { type: qu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ku = (0, n.memo)(Yu),
                    Qu = 'Footer_button_eb';
                let Zu;
                (_e.Vehicles,
                    _e.TmanToken,
                    _e.CollectionItem,
                    (function (e) {
                        ((e.Simple = 'simpleKey'), (e.Lockpick = 'lockpick'));
                    })(Zu || (Zu = {})));
                const Ju = R.strings.gui_lootboxes,
                    et = (0, j.observer)(
                        ({
                            animationDuration: e,
                            lootboxCount: u,
                            lockpickCount: t,
                            lootboxId: o,
                            keyId: i,
                            lootBoxMaxOpenCount: r,
                            keyType: s,
                        }) => {
                            const l = me(),
                                c = l.showRewardsViewButton,
                                E = l.rewardsViewButtonClick,
                                m = uu(),
                                _ = m.model,
                                d = m.controls,
                                A = (0, n.useState)(!0),
                                F = A[0],
                                D = A[1],
                                C = (0, n.useState)(0),
                                p = C[0],
                                g = C[1],
                                h = s === Zu.Lockpick,
                                b = r || 10,
                                S = _.computes.hasVehicleReward(),
                                x = u > 1;
                            ((0, n.useEffect)(() => {
                                g(Math.min(b, u));
                            }, [g, u, b]),
                                (0, n.useEffect)(() => {
                                    (c(Ee.OKButton, u),
                                        u > 0 && !S && c(Ee.OpenOneMoreButton, u),
                                        x && !S && c(Ee.OpenMultiButton, u),
                                        S && c(Ee.OpenInHangarButton, u));
                                }, [S, x, u]));
                            const v = (0, n.useMemo)(
                                () => ({ count: t, icon: a().createElement('div', { className: 'Footer_icon_b3' }) }),
                                [t],
                            );
                            return (
                                setTimeout(() => {
                                    D(!1);
                                }, e),
                                a().createElement(
                                    'div',
                                    { className: 'Footer_base_ff' },
                                    a().createElement(
                                        'div',
                                        {
                                            className: B()(
                                                'Footer_buttonsWrapper_99',
                                                !u && 'Footer_buttonsWrapper__center_f1',
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Qu },
                                            a().createElement(
                                                Ku,
                                                {
                                                    type: qu.primary,
                                                    size: zu.medium,
                                                    onClick: () => {
                                                        (E(Ee.OKButton, u), d.close());
                                                    },
                                                    disabled: F,
                                                },
                                                Ju.rewards.controls.ok(),
                                            ),
                                        ),
                                        u > 0 &&
                                            !S &&
                                            a().createElement(
                                                'div',
                                                { className: Qu },
                                                a().createElement(
                                                    Ku,
                                                    {
                                                        type: qu.secondary,
                                                        size: zu.medium,
                                                        onClick: () => {
                                                            (E(Ee.OpenOneMoreButton, u), d.onRepeatOpen(o, 1, i));
                                                        },
                                                        disabled: F,
                                                    },
                                                    1 === u
                                                        ? Ju.lootboxesWithKeys.openLast()
                                                        : Ju.lootboxesWithKeys.openOne(),
                                                ),
                                            ),
                                        x &&
                                            !S &&
                                            a().createElement(
                                                'div',
                                                { className: B()(Qu, 'Footer_button__wide_a6') },
                                                a().createElement(
                                                    Ku,
                                                    {
                                                        type: qu.secondary,
                                                        size: zu.medium,
                                                        onClick: () => {
                                                            (E(Ee.OpenMultiButton, u), d.onRepeatOpen(o, p, i));
                                                        },
                                                        disabled: F,
                                                    },
                                                    u <= b
                                                        ? Ju.lootboxesWithKeys.openAll()
                                                        : a().createElement(Mu, {
                                                              text: Ju.lootboxesWithKeys.openMore(),
                                                              binding: { count: p },
                                                          }),
                                                ),
                                            ),
                                        S &&
                                            a().createElement(
                                                'div',
                                                { className: Qu },
                                                a().createElement(
                                                    Ku,
                                                    {
                                                        type: qu.secondary,
                                                        size: zu.medium,
                                                        onClick: () => {
                                                            (E(Ee.OpenInHangarButton, u), d.showVehicleInHangar());
                                                        },
                                                        disabled: F,
                                                    },
                                                    Ju.rewards.controls.showVehicle(),
                                                ),
                                            ),
                                    ),
                                    h &&
                                        a().createElement(
                                            'div',
                                            { className: 'Footer_lockpicksContainer_03' },
                                            a().createElement(Mu, {
                                                text: Ju.lootboxesWithKeys.availableLockpicks(),
                                                binding: v,
                                            }),
                                        ),
                                )
                            );
                        },
                    );
                var ut = t(9887),
                    tt = t.n(ut);
                const nt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    at = (e) => e.includes('_') && ((e) => nt.includes(e))(e.split('_').at(-1)),
                    ot = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    it = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (at(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const o = ot.indexOf(u),
                                    i = (-1 !== o ? nt.slice(o) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    r = i ? e[i] : void 0;
                                return ((t[a] = void 0 !== r ? r : e[a]), t);
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => nt.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    rt = (e, u = it) => {
                        const t = (
                            (e, u = it) =>
                            (t) => {
                                const o = x().mediaSize,
                                    i = (0, n.useMemo)(() => u(t, o), [t, o]);
                                return a().createElement(e, i);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => at(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    st = {
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
                    lt = [
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
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                Object.keys(tt());
                const Et = {
                        XL: { mt: st.mt__XL, mr: st.mr__XL, mb: st.mb__XL, ml: st.ml__XL },
                        LG: { mt: st.mt__LG, mr: st.mr__LG, mb: st.mb__LG, ml: st.ml__LG },
                        MDp: { mt: st.mt__MDp, mr: st.mr__MDp, mb: st.mb__MDp, ml: st.ml__MDp },
                        MD: { mt: st.mt__MD, mr: st.mr__MD, mb: st.mb__MD, ml: st.ml__MD },
                        SMp: { mt: st.mt__SMp, mr: st.mr__SMp, mb: st.mb__SMp, ml: st.ml__SMp },
                        SM: { mt: st.mt__SM, mr: st.mr__SM, mb: st.mb__SM, ml: st.ml__SM },
                        XS: { mt: st.mt__XS, mr: st.mr__XS, mb: st.mb__XS, ml: st.ml__XS },
                    },
                    mt = (Object.keys(Et), ['mt', 'mr', 'mb', 'ml']),
                    _t = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    dt = rt((e) => {
                        let u = e.className,
                            t = e.width,
                            o = e.height,
                            i = e.m,
                            r = e.mt,
                            s = void 0 === r ? i : r,
                            l = e.mr,
                            c = void 0 === l ? i : l,
                            E = e.mb,
                            m = void 0 === E ? i : E,
                            _ = e.ml,
                            d = void 0 === _ ? i : _,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            p = e.flexStart,
                            g = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            S = e.spaceAround,
                            x = e.justifyContent,
                            v =
                                void 0 === x
                                    ? (p ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (S && 'space-around') ||
                                      void 0
                                    : x,
                            w = e.alignItems,
                            f = void 0 === w ? (p ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : w,
                            T = e.alignSelf,
                            R = e.wrap,
                            y = e.flexWrap,
                            L = void 0 === y ? (R ? 'wrap' : void 0) : y,
                            O = e.grow,
                            M = e.shrink,
                            I = e.flex,
                            N = void 0 === I ? (O || M ? `${O ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : I,
                            k = e.style,
                            P = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, lt);
                        const U = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: m, ml: d },
                                    u = ((e) =>
                                        mt.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Et[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        mt.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[_t[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== o && 'number' == typeof o ? o + 'rem' : o,
                                        flex: N,
                                        alignSelf: T,
                                        display: C || f ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: v,
                                        alignItems: f,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, o, s, c, m, d, k, N, T, C, L, v, f]),
                            G = U.computedStyle,
                            W = U.computedClassNames;
                        return a().createElement('div', ct({ className: B()(st.base, ...W, u), style: G }, H), P);
                    });
                var At = t(3532),
                    Ft = t.n(At);
                const Dt = {
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
                    Ct = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                Object.keys(tt());
                const pt = Object.keys(Ft()),
                    gt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ht = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    bt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    St =
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
                            'heading-H56': gt,
                            'heading-H36': gt,
                            'heading-H28': ht,
                            'heading-H24': ht,
                            'heading-H24R': ht,
                            'heading-H22': ht,
                            'heading-H20R': ht,
                            'heading-H18': ht,
                            'heading-H15': bt,
                            'heading-H14': bt,
                            'paragraph-P24': ht,
                            'paragraph-P18': ht,
                            'paragraph-P16': ht,
                            'paragraph-P14': bt,
                            'paragraph-P12': bt,
                            'paragraph-P10': bt,
                        }),
                    xt =
                        (Object.keys(St),
                        (e) =>
                            e
                                ? ((e) => pt.includes(e))(e)
                                    ? { colorClassName: Dt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    vt = rt((e) => {
                        let u = e.text,
                            t = e.variant,
                            o = e.className,
                            i = e.color,
                            r = e.m,
                            s = e.mt,
                            l = void 0 === s ? r : s,
                            c = e.mr,
                            E = void 0 === c ? r : c,
                            m = e.mb,
                            _ = void 0 === m ? r : m,
                            d = e.ml,
                            A = void 0 === d ? r : d,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ct);
                        const p = (0, n.useMemo)(() => {
                                const e = xt(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, i]),
                            g = p.computedStyle,
                            h = p.colorClassName;
                        return a().createElement(
                            dt,
                            Bt(
                                {
                                    className: B()(Dt.base, t && Dt[t], h, o),
                                    style: g,
                                    mt: !0 === l ? St[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? St[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? St[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? St[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? a().createElement(Mu, Bt({}, D, { text: u })) : u,
                        );
                    }),
                    wt = {
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
                    ft = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Tt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Rt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    yt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const o = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let r = ft.exec(e),
                            s = e,
                            l = 0;
                        for (; r;) {
                            const t = r[0],
                                n = Tt.exec(t),
                                c = Rt.exec(t),
                                E = r[1];
                            if (n && c) {
                                const e = n[0],
                                    r = e + l++ + e;
                                ((s = s.replace(t, `%(${r})`)),
                                    (i[r] = wt[e]
                                        ? a().createElement(
                                              'span',
                                              { className: wt[e] },
                                              a().createElement(Mu, { text: E, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: o(e) },
                                              a().createElement(Mu, { text: E, binding: u }),
                                          )));
                            }
                            r = ft.exec(e);
                        }
                        return a().createElement(Mu, { text: s, classMix: t, binding: i });
                    }),
                    Lt = (0, n.memo)(() =>
                        a().createElement(
                            'div',
                            { className: 'Spinner_base_2a' },
                            a().createElement('div', { className: 'Spinner_spinner_00' }),
                        ),
                    ),
                    Ot = 'Header_title_3a',
                    Mt = 'Header_subTitle_1e',
                    It = R.strings.gui_lootboxes,
                    Nt = (0, n.memo)(
                        ({
                            lootboxName: e,
                            lootBoxOpenCount: u,
                            isNameLoading: t,
                            moreSendersCount: n,
                            senderName: o,
                            phraseRes: i,
                            keyType: r,
                        }) => {
                            const s = r === Zu.Lockpick;
                            return a().createElement(
                                'div',
                                { className: 'Header_base_f3' },
                                a().createElement(
                                    'div',
                                    { className: 'Header_blinkAnimate1_cf' },
                                    a().createElement('div', { className: 'Header_blinkAnimate2_7d' }),
                                ),
                                o || t
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              'div',
                                              { className: B()(Mt, 'Header_subTitle__withPhrase_e3') },
                                              a().createElement(yt, {
                                                  text: n
                                                      ? It.rewards.gift.header.subTitle.moreSenders()
                                                      : It.rewards.gift.header.subTitle.single(),
                                                  binding: {
                                                      senderName: t ? a().createElement(Lt, null) : o,
                                                      moreSendersCount: n,
                                                      moreSenders:
                                                          Boolean(n) &&
                                                          a().createElement(
                                                              gu,
                                                              {
                                                                  tooltipArgs: {
                                                                      contentId:
                                                                          R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.PlayersListTooltip(
                                                                              'resId',
                                                                          ),
                                                                  },
                                                              },
                                                              a().createElement(vt, {
                                                                  text: It.rewards.gift.header.moreSenders(n),
                                                                  format: { binding: { moreSendersCount: n } },
                                                              }),
                                                          ),
                                                  },
                                              }),
                                          ),
                                          i &&
                                              a().createElement(vt, {
                                                  className: B()(Ot, 'Header_title__withPhrase_94'),
                                                  text: i,
                                              }),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement('div', { className: Ot }, It.rewards.header.title()),
                                          a().createElement(
                                              'div',
                                              { className: Mt },
                                              a().createElement(yt, {
                                                  text: It.rewards.header.subTitle(),
                                                  binding: { lootboxName: e },
                                              }),
                                          ),
                                      ),
                                a().createElement(
                                    'div',
                                    { className: 'Header_glowYellowAnimate1_7c' },
                                    a().createElement('div', { className: 'Header_glowYellowAnimate2_57' }),
                                ),
                                s &&
                                    a().createElement(yt, {
                                        classMix: 'Header_count_98',
                                        text: It.lootboxesWithKeys.lbOpenCount(u),
                                        binding: { count: u },
                                    }),
                            );
                        },
                    ),
                    kt = R.strings.gui_lootboxes.rewards,
                    Pt = (0, j.observer)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            o = me(),
                            r = o.showRewardsViewCloseButton,
                            s = o.rewardsViewCloseButtonClick,
                            l = o.rewardsViewESCButtonClick,
                            c = u.computes.getFooterShowDelay(),
                            E = u.root.get(),
                            m = E.lootBoxName,
                            _ = E.lootBoxIconName,
                            d = E.lootBoxOpenCount,
                            A = E.keyType,
                            F = E.senderName,
                            D = E.moreSendersCount,
                            C = E.isNameLoading,
                            B = E.phraseRes,
                            p = E.lootboxID,
                            g = E.lootBoxCount,
                            h = E.lootBoxMaxOpenCount,
                            b = E.isHiddenCount,
                            S = E.glowType,
                            x = u.lootboxKey.get(),
                            v = x.keyID,
                            w = x.count,
                            f = (0, q.useSpring)({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                                delay: c + he,
                                config: { duration: be, easing: Se },
                            });
                        ((0, n.useEffect)(() => {
                            (r(g), k(R.sounds.gui_reward_screen_general()));
                        }, [g, r]),
                            (function ({
                                key: e = W.n.ESCAPE,
                                callback: u = () => i.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                X(e, u, t);
                            })({
                                callback: () => {
                                    (l(g), t.close());
                                },
                            }));
                        const T =
                            'UNIQUE' === S
                                ? `R.images.gui_lootboxes.gui.maps.storage.boxes.${_}_open_unique`
                                : `R.images.gui_lootboxes.gui.maps.storage.boxes.${_}_open`;
                        return a().createElement(
                            'div',
                            { className: 'App_base_43' },
                            a().createElement('div', {
                                className: 'App_bgBox_80',
                                style: { backgroundImage: `url(${T})` },
                            }),
                            a().createElement('div', { className: 'App_bg_5d' }),
                            a().createElement(
                                'div',
                                { className: 'App_header_4f' },
                                a().createElement(Nt, {
                                    lootboxName: m || '',
                                    lootBoxOpenCount: d,
                                    keyType: A.value,
                                    isNameLoading: C,
                                    senderName: F,
                                    moreSendersCount: D,
                                    phraseRes: B,
                                }),
                            ),
                            a().createElement('div', { className: 'App_content_76' }, a().createElement(Xu, null)),
                            a().createElement(
                                'div',
                                { className: 'App_close_c2' },
                                a().createElement(G, {
                                    caption: kt.controls.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: () => {
                                        (s(g), t.close());
                                    },
                                }),
                            ),
                            a().createElement(
                                q.animated.div,
                                { className: 'App_footer_46', style: f },
                                a().createElement(et, {
                                    animationDuration: c + he,
                                    lootboxCount: w >= 0 && A.value ? (b ? w : Math.min(g, w)) : g,
                                    lootboxId: p,
                                    keyId: v,
                                    lockpickCount: w,
                                    lootBoxMaxOpenCount: h,
                                    keyType: A.value,
                                }),
                            ),
                        );
                    }),
                    Ht = [
                        {
                            index: 0,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: 'Горыныч',
                            item: '',
                            overlayType: '',
                            customizationID: 31013,
                            item: 'style_3d',
                            icon: 'style_3d_31013',
                        },
                        {
                            index: 1,
                            name: 'dogTagComponents',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '25',
                            tooltipContentId: '25',
                            label: 'Очки престижа',
                            icon: 'engraving_600_0',
                        },
                        {
                            index: 1,
                            name: 'gold',
                            value: '9000',
                            isCompensation: !0,
                            tooltipId: '1',
                            tooltipContentId: '520',
                            label: 'Золото',
                            item: '',
                            overlayType: '',
                            compensatedBonus: 'vehicles',
                        },
                        {
                            index: 1,
                            name: 'vehicles',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '2',
                            tooltipContentId: '25',
                            label: 'BZ-176',
                            item: '',
                            overlayType: '',
                            vehicleName: 'Ch47_BZ_176',
                            type: 'heavyTank',
                            level: 8,
                            nationTag: 'china',
                            isElite: !0,
                            isRent: !1,
                            rentDays: 0,
                            rentBattles: 0,
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '3',
                            tooltipContentId: '25',
                            label: 'Живая сталь',
                            item: '',
                            overlayType: '',
                            customizationID: 434,
                            item: 'style_3d',
                            icon: 'style',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '4',
                            tooltipContentId: '25',
                            label: 'Система управления огнём Т2',
                            item: 'modernizedAimDrivesAimingStabilizer',
                            overlayType: 'equipmentModernized_2',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '5',
                            tooltipContentId: '25',
                            label: 'Экспериментальная система заряжания',
                            item: 'rammer',
                            overlayType: 'equipmentPlus',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '6',
                            tooltipContentId: '25',
                            label: 'Трофейная вентиляция',
                            item: 'improvedVentilation',
                            overlayType: 'equipmentTrophyBasic',
                        },
                        {
                            index: 1,
                            name: 'crystal',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '7',
                            tooltipContentId: '25',
                            label: 'Боны',
                        },
                        {
                            index: 1,
                            name: 'gold',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '8',
                            tooltipContentId: '25',
                            label: 'Золото',
                        },
                        {
                            index: 1,
                            name: 'premium_plus',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '9',
                            tooltipContentId: '25',
                            label: 'Дни Танкового премиум аккаунта',
                        },
                        {
                            index: 1,
                            name: 'tmanToken',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '10',
                            tooltipContentId: '25',
                            label: 'Новобранец ',
                            icon: 'tankman',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '11',
                            tooltipContentId: '25',
                            label: 'Советская школа',
                            item: '',
                            overlayType: '',
                            customizationID: 62,
                            item: '',
                            icon: 'style',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '3',
                            isCompensation: !1,
                            tooltipId: '12',
                            tooltipContentId: '25',
                            label: 'Дополнительный опыт за бой',
                            icon: 'booster_xp_premium',
                        },
                        {
                            index: 1,
                            name: 'crewBooks',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '13',
                            tooltipContentId: '25',
                            label: 'Учебная брошюра (Швеция)',
                            icon: 'brochure_sweden',
                        },
                        {
                            index: 1,
                            name: 'crewBooks',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '14',
                            tooltipContentId: '25',
                            label: 'Персональное учебное пособие',
                            icon: 'personalBook',
                        },
                        {
                            index: 1,
                            name: 'credits',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '15',
                            tooltipContentId: '25',
                            label: 'Серебро',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '16',
                            tooltipContentId: '25',
                            label: 'Средний противоосколочный подбой',
                            item: 'antifragmentationLining',
                            overlayType: '',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '10',
                            isCompensation: !1,
                            tooltipId: '17',
                            tooltipContentId: '25',
                            label: 'Бортовой огнетушитель',
                            item: 'autoExtinguishers',
                            overlayType: '',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '18',
                            tooltipContentId: '25',
                            label: 'Смазка стабилизаторов',
                            item: 'aimingStabilizer',
                            overlayType: 'battleBooster',
                        },
                        {
                            index: 1,
                            name: 'crewSkins',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '19',
                            tooltipContentId: '25',
                            label: 'Павел Рыбалко',
                            icon: 'crewSkin2',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '20',
                            tooltipContentId: '25',
                            label: 'Тигр 1',
                            item: '',
                            overlayType: '',
                            customizationID: 15574,
                            item: '',
                            icon: 'emblem',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '21',
                            tooltipContentId: '25',
                            label: 'Советский базовый',
                            item: '',
                            overlayType: '',
                            customizationID: 128,
                            item: '',
                            icon: 'paint',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '22',
                            tooltipContentId: '25',
                            label: 'Пощады не будет',
                            item: '',
                            overlayType: '',
                            customizationID: 564,
                            item: '',
                            icon: 'projectionDecal',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '23',
                            tooltipContentId: '25',
                            label: 'Богатыри',
                            item: '',
                            overlayType: '',
                            customizationID: 14580,
                            item: '',
                            icon: 'inscription',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '24',
                            tooltipContentId: '25',
                            label: 'Ранний двухцветный',
                            item: '',
                            overlayType: '',
                            customizationID: 15400,
                            item: '',
                            icon: 'camouflage',
                        },
                        {
                            index: 1,
                            name: 'dogTagComponents',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '25',
                            tooltipContentId: '25',
                            label: 'Очки престижа',
                            icon: 'engraving_600_0',
                        },
                        {
                            index: 1,
                            name: 'dossier_badge',
                            value: '0',
                            isCompensation: !1,
                            tooltipId: '26',
                            tooltipContentId: '25',
                            label: 'Линия фронта 2021: на передовой',
                            icon: 'badge_105',
                        },
                        {
                            index: 1,
                            name: 'slots',
                            value: '5',
                            isCompensation: !1,
                            tooltipId: '27',
                            tooltipContentId: '25',
                            label: 'Слотов в Ангаре',
                        },
                        {
                            index: 1,
                            name: 'blueprints',
                            value: '10',
                            isCompensation: !1,
                            tooltipId: '28',
                            tooltipContentId: '25',
                            label: '',
                            icon: 'intelligence',
                            type: 'BlueprintUniversalFragmentCongrats',
                        },
                        {
                            index: 1,
                            name: 'freeXP',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '29',
                            tooltipContentId: '25',
                            label: 'Свободный опыт',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '5',
                            isCompensation: !1,
                            tooltipId: '30',
                            tooltipContentId: '25',
                            label: 'Демонтажный набор',
                            icon: 'common',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '31',
                            tooltipContentId: '25',
                            label: 'Бланк переподготовки',
                            icon: 'recertificationForm',
                        },
                        {
                            index: 1,
                            name: 'battle_bonus_x5',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '32',
                            tooltipContentId: '25',
                            label: '',
                            userName: '',
                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/bonus_battle_task.png',
                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/bonus_battle_task.png',
                        },
                    ],
                    Ut = {
                        lootboxName: 'tanks_birthday_2023_VI',
                        isGreat: !1,
                        mainRewards: Ht.slice(0, 3),
                        rewards: Ht.slice(0, 99),
                    },
                    Gt = {
                        getter: ((Wt = Ut), (e) => (e ? e.split('.').reduce((e, u) => e[u], Wt) : Wt)),
                        computes: { getMainRewards: () => Ut.mainRewards, getRegularRewards: () => Ut.rewards },
                        controls: () =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const n = e[t];
                                        u[t] = (0, He.action)(n);
                                    }
                                return u;
                            })({
                                close: () => {
                                    (console.log('Call onClose()'), (0, V.Sy)());
                                },
                                showVehicleInHangar: () => {
                                    console.log('Call showVehicleInHangar()');
                                },
                            }),
                    };
                var Wt;
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(
                            eu,
                            { mode: 'real', mocks: Gt },
                            a().createElement(M, null, a().createElement(Pt, null)),
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
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], o = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((o = !1), n < a && (a = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
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
        (__webpack_require__.j = 809),
        (() => {
            var e = { 809: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [o, i, r] = t,
                        s = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); s < o.length; s++)
                        ((a = o[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4048));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
