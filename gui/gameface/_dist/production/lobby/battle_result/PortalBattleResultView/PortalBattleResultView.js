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
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => n }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            o = i[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, s),
                                            a(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(n, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    }));
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
                const r = {
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
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
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
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
                const f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    n = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
                t.d(u, { B3: () => c, Z5: () => i, B0: () => s, c9: () => C, ry: () => g });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const r = a;
                var n = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, a, r, n, i) {
                    try {
                        var o = e[n](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function i(e) {
                                            D(n, a, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(n, a, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => C(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var b = t(7572);
                const v = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                _ = o.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(_),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(d),
                                on: !0,
                                args: n,
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
                        onBindingsReady: g,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            9367: (e, u, t) => {
                'use strict';
                var a = {};
                (t.r(a),
                    t.d(a, {
                        Area: () => Ru,
                        Bar: () => Tu,
                        DefaultScroll: () => Mu,
                        Direction: () => Cu,
                        defaultSettings: () => pu,
                        useHorizontalScrollApi: () => bu,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => $u, Bar: () => Gu, Default: () => ju, useVerticalScrollApi: () => Nu }));
                var n = t(6179),
                    i = t.n(n);
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
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const a = (function (e, u) {
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
                        r = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                const _ = s.O.client.getSize('rem'),
                    d = _.width,
                    m = _.height,
                    A = Object.assign({ width: d, height: m }, E(d, m, l)),
                    F = (0, n.createContext)(A),
                    D = ['children'],
                    B = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, D);
                        const a = (0, n.useContext)(F),
                            r = a.extraLarge,
                            i = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            E = a.extraLargeWidth,
                            _ = a.largeWidth,
                            d = a.mediumWidth,
                            m = a.smallWidth,
                            A = a.extraSmallWidth,
                            B = a.extraLargeHeight,
                            g = a.largeHeight,
                            C = a.mediumHeight,
                            p = a.smallHeight,
                            h = a.extraSmallHeight,
                            b = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, b);
                            if (t.largeWidth && _) return o(u, t, b);
                            if (t.mediumWidth && d) return o(u, t, b);
                            if (t.smallWidth && m) return o(u, t, b);
                            if (t.extraSmallWidth && A) return o(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
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
                    (0, n.memo)(B));
                const g = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(F),
                        t = (0, n.useState)(u),
                        a = t[0],
                        r = t[1],
                        o = (0, n.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: a }, E(t, a, l)));
                        }, []);
                    (((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return i().createElement(F.Provider, { value: c }, e);
                });
                var C = t(6483),
                    p = t.n(C),
                    h = t(926),
                    b = t.n(h);
                let v, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const x = () => {
                        const e = (0, n.useContext)(F),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_WIDTH,
                        [f.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [f.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL,
                        [v.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [v.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [v.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, y);
                        const r = x(),
                            n = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return i().createElement('div', L({ className: p()(t, T[n], S[o], M[s]) }, a), u);
                    },
                    O = ['children'],
                    I = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, O);
                        return i().createElement(g, null, i().createElement(N, t, u));
                    };
                var k = t(493),
                    P = t.n(k);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
                        playHighlight() {
                            H('highlight');
                        },
                        playClick() {
                            H('play');
                        },
                        playYes() {
                            H('yes1');
                        },
                    },
                    z = i().memo,
                    G = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    U = { mouseEnter: 'highlight', click: 'play' },
                    j = (e, { active: u, enableInteractiveActiveTab: t = !1 }) => !!t || e !== u,
                    $ = z(function (e) {
                        const u = e.active,
                            t = e.tabs,
                            a = e.onClick,
                            r = e.onMouseEnter,
                            n = e.onMouseLeave,
                            o = e.className,
                            s = e.classNames,
                            l = e.sounds,
                            c = void 0 === l ? U : l,
                            E = (u) => () => {
                                j(u, e) && (c.click && H(c.click), null == a || a(u));
                            },
                            _ = (u) => () => {
                                j(u, e) && (c.mouseEnter && H(c.mouseEnter), null == r || r(u));
                            },
                            d = (u) => () => {
                                j(u, e) && (c.mouseLeave && H(c.mouseLeave), null == n || n(u));
                            };
                        return i().createElement(
                            'div',
                            { className: p()(G.base, o) },
                            t.map(({ id: a, title: r, notification: n }, o) => {
                                var l;
                                return i().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            G.tab,
                                            a === u && p()(G.tab__active, null == s ? void 0 : s.activeTab),
                                            !j(a, e) && G.tab__nonInteractive,
                                            null == s ? void 0 : s.tab,
                                        ),
                                        key: a,
                                        onClick: E(a),
                                        onMouseEnter: _(a),
                                        onMouseLeave: d(a),
                                    },
                                    ((e, u) => !((e, u) => e.length - 1 === u)(e, u))(t, o) &&
                                        i().createElement('div', {
                                            className: p()(G.divider, null == s ? void 0 : s.divider),
                                        }),
                                    i().createElement(
                                        'div',
                                        { className: p()(G.state, null == s ? void 0 : s.state) },
                                        i().createElement('div', {
                                            className: p()(G.highlight, null == s ? void 0 : s.highlight),
                                        }),
                                        i().createElement('div', {
                                            className: p()(
                                                G.border,
                                                G.border__left,
                                                null == s ? void 0 : s.border,
                                                null == s ? void 0 : s.borderLeft,
                                            ),
                                        }),
                                        i().createElement('div', {
                                            className: p()(
                                                G.border,
                                                G.border__right,
                                                null == s ? void 0 : s.border,
                                                null == s ? void 0 : s.borderRight,
                                            ),
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: p()(G.title, null == s ? void 0 : s.title) },
                                        r,
                                    ),
                                    void 0 !== n &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    G.notification,
                                                    G[`notification__${n.type}`],
                                                    G[`notification__${null != (l = n.size) ? l : 'medium'}`],
                                                    null == s ? void 0 : s.notification,
                                                ),
                                            },
                                            'dot' !== n.type && n.value,
                                        ),
                                );
                            }),
                        );
                    }),
                    V = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    X = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const Y = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        n = e.hide,
                        o = e.maximumNumber,
                        s = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, X);
                    const c = a ? null : t,
                        E = 'string' == typeof c;
                    if ((c && !E && c < 0) || 0 === c) return null;
                    const _ = c && !E && c > o,
                        d = p()(
                            V.base,
                            V[`base__${u}`],
                            r && V.base__animated,
                            n && V.base__hidden,
                            !c && V.base__pattern,
                            a && V.base__empty,
                            s,
                        );
                    return i().createElement(
                        'div',
                        q({ className: d }, l),
                        i().createElement('div', { className: V.bg }),
                        i().createElement('div', { className: V.pattern }),
                        i().createElement(
                            'div',
                            { className: p()(V.value, E && V.value__text) },
                            _ ? o : c,
                            _ && i().createElement('span', { className: V.plus }, '+'),
                        ),
                    );
                };
                Y.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const K = ({ children: e, component: u, props: t = {} }) =>
                        u ? i().createElement(u, t, e) : e || null,
                    Z = 'Tab_stateBorder_64',
                    Q = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                (0, n.memo)((e) => {
                    let u = e.isActive,
                        t = void 0 !== u && u,
                        a = e.isFirst,
                        r = void 0 !== a && a,
                        n = e.isLast,
                        o = void 0 !== n && n,
                        s = e.isMedium,
                        l = void 0 !== s && s,
                        c = e.isNotified,
                        E = void 0 !== c && c,
                        _ = e.children,
                        d = void 0 === _ ? 'Tab' : _,
                        m = e.wrapper,
                        A = void 0 === m ? {} : m,
                        F = e.counter,
                        D = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Q);
                    return i().createElement(
                        K,
                        A,
                        i().createElement(
                            'div',
                            J(
                                {
                                    className: p()(
                                        'Tab_base_dd',
                                        { Tab_base__active_5d: t },
                                        { Tab_base__first_4a: r },
                                        { Tab_base__last_96: o },
                                        { Tab_base__medium_ec: l },
                                    ),
                                },
                                D,
                            ),
                            i().createElement(
                                'span',
                                { className: 'Tab_state_6c' },
                                i().createElement('span', { className: 'Tab_stateHighlight_1e' }),
                                i().createElement('span', { className: p()(Z, 'Tab_stateBorder__positionLeft_e7') }),
                                i().createElement('span', { className: p()(Z, 'Tab_stateBorder__positionRight_db') }),
                            ),
                            d,
                            !o &&
                                !t &&
                                i().createElement('span', { className: p()('Tab_divider_ca', 'Tab_divider__show_62') }),
                            (Boolean(F) || E) &&
                                i().createElement(
                                    'div',
                                    { className: 'Tab_counter_e1' },
                                    i().createElement(Y, { value: F, isEmpty: E }),
                                ),
                        ),
                    );
                });
                const ee = {
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
                    ue = [
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
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                class ae extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick));
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
                            a = e.goto,
                            r = e.side,
                            n = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, ue)),
                            d = p()(ee.base, ee[`base__${n}`], ee[`base__${r}`], null == o ? void 0 : o.base),
                            m = p()(ee.icon, ee[`icon__${n}`], ee[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = p()(ee.glow, null == o ? void 0 : o.glow),
                            F = p()(ee.caption, ee[`caption__${n}`], null == o ? void 0 : o.caption),
                            D = p()(ee.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            te(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== n && i().createElement('div', { className: ee.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: F }, u),
                            a && i().createElement('div', { className: D }, a),
                        );
                    }
                }
                ae.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var re = t(5521),
                    ne = t(4179);
                const ie = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function oe(e = re.n.NONE, u = ie, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== re.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var se = t(3282);
                const le = {
                    base: 'App_base_a8',
                    leaderBoardVignette: 'App_leaderBoardVignette_97',
                    leaderBoardBg: 'App_leaderBoardBg_60',
                    leaderBoardBg__active: 'App_leaderBoardBg__active_bb',
                    vignnet: 'App_vignnet_33',
                    glowRed: 'App_glowRed_26',
                    glowBlue: 'App_glowBlue_a4',
                    horizontalTabs: 'App_horizontalTabs_8c',
                    tab: 'App_tab_84',
                    tabContent: 'App_tabContent_3d',
                    closeButton: 'App_closeButton_b0',
                };
                var ce = t(9887),
                    Ee = t.n(ce);
                const _e = ['xl', 'lg', 'md', 'sm', 'xs'],
                    de = (e) => e.includes('_') && ((e) => _e.includes(e))(e.split('_').at(-1)),
                    me = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    Ae = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (de(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const n = me.indexOf(u),
                                    i = (-1 !== n ? _e.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = i ? e[i] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => _e.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    Fe = (e, u = Ae) => {
                        const t = (
                            (e, u = Ae) =>
                            (t) => {
                                const a = x().mediaSize,
                                    r = (0, n.useMemo)(() => u(t, a), [t, a]);
                                return i().createElement(e, r);
                            }
                        )(e, u);
                        return i().memo((u) =>
                            Object.keys(u).some((e) => de(e) && void 0 !== u[e])
                                ? i().createElement(t, u)
                                : i().createElement(e, u),
                        );
                    },
                    De = {
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
                    Be = [
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
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                Object.keys(Ee());
                const Ce = {
                        XL: { mt: De.mt__XL, mr: De.mr__XL, mb: De.mb__XL, ml: De.ml__XL },
                        LG: { mt: De.mt__LG, mr: De.mr__LG, mb: De.mb__LG, ml: De.ml__LG },
                        MDp: { mt: De.mt__MDp, mr: De.mr__MDp, mb: De.mb__MDp, ml: De.ml__MDp },
                        MD: { mt: De.mt__MD, mr: De.mr__MD, mb: De.mb__MD, ml: De.ml__MD },
                        SMp: { mt: De.mt__SMp, mr: De.mr__SMp, mb: De.mb__SMp, ml: De.ml__SMp },
                        SM: { mt: De.mt__SM, mr: De.mr__SM, mb: De.mb__SM, ml: De.ml__SM },
                        XS: { mt: De.mt__XS, mr: De.mr__XS, mb: De.mb__XS, ml: De.ml__XS },
                    },
                    pe = (Object.keys(Ce), ['mt', 'mr', 'mb', 'ml']),
                    he = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    be = Fe((e) => {
                        let u = e.className,
                            t = e.width,
                            a = e.height,
                            r = e.m,
                            o = e.mt,
                            s = void 0 === o ? r : o,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            E = e.mb,
                            _ = void 0 === E ? r : E,
                            d = e.ml,
                            m = void 0 === d ? r : d,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            C = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            x = e.alignItems,
                            y = void 0 === x ? (g ? 'flex-start' : C && 'center') || (h && 'flex-end') || void 0 : x,
                            L = e.alignSelf,
                            T = e.wrap,
                            S = e.flexWrap,
                            M = void 0 === S ? (T ? 'wrap' : void 0) : S,
                            R = e.grow,
                            N = e.shrink,
                            O = e.flex,
                            I = void 0 === O ? (R || N ? `${R ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
                            k = e.style,
                            P = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Be);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: _, ml: m },
                                    u = ((e) =>
                                        pe.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(Ce[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        pe.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[he[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: I,
                                        alignSelf: L,
                                        display: B || y ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, a, s, c, _, m, k, I, L, B, M, w, y]),
                            z = W.computedStyle,
                            G = W.computedClassNames;
                        return i().createElement('div', ge({ className: p()(De.base, ...G, u), style: z }, H), P);
                    });
                let ve;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ve || (ve = {}));
                const fe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    we = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    xe = (e, u, t = ve.left) => e.split(u).reduce(t === ve.left ? fe : we, []),
                    ye = (() => {
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
                    Le = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Te = ({ binding: e, text: u = '', classMix: t, alignment: a = ve.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      i().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ve.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Le.includes(t)
                                                                ? ye(e)
                                                                : ((e, u = ve.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          xe(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(xe(e, a, ve.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, a, e).map((e, u) =>
                                              i().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Se = t(3532),
                    Me = t.n(Se);
                const Re = {
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
                    Ne = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                Object.keys(Ee());
                const Ie = Object.keys(Me()),
                    ke = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Pe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    He = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    We =
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
                            'heading-H56': ke,
                            'heading-H36': ke,
                            'heading-H28': Pe,
                            'heading-H24': Pe,
                            'heading-H24R': Pe,
                            'heading-H22': Pe,
                            'heading-H20R': Pe,
                            'heading-H18': Pe,
                            'heading-H15': He,
                            'heading-H14': He,
                            'paragraph-P24': Pe,
                            'paragraph-P18': Pe,
                            'paragraph-P16': Pe,
                            'paragraph-P14': He,
                            'paragraph-P12': He,
                            'paragraph-P10': He,
                        }),
                    ze =
                        (Object.keys(We),
                        (e) =>
                            e
                                ? ((e) => Ie.includes(e))(e)
                                    ? { colorClassName: Re[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ge = Fe((e) => {
                        let u = e.text,
                            t = e.variant,
                            a = e.className,
                            r = e.color,
                            o = e.m,
                            s = e.mt,
                            l = void 0 === s ? o : s,
                            c = e.mr,
                            E = void 0 === c ? o : c,
                            _ = e.mb,
                            d = void 0 === _ ? o : _,
                            m = e.ml,
                            A = void 0 === m ? o : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ne);
                        const g = (0, n.useMemo)(() => {
                                const e = ze(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, r]),
                            C = g.computedStyle,
                            h = g.colorClassName;
                        return i().createElement(
                            be,
                            Oe(
                                {
                                    className: p()(Re.base, t && Re[t], h, a),
                                    style: C,
                                    mt: !0 === l ? We[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? We[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === d ? We[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? We[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? i().createElement(Te, Oe({}, D, { text: u })) : u,
                        );
                    }),
                    Ue = 'Footer_time_38',
                    je = 'Footer_title_c7',
                    $e = 'Footer_button_2e',
                    Ve = {
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
                let Xe, qe;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(Xe || (Xe = {})),
                    (function (e) {
                        ((e.Primary = 'primary'), (e.Secondary = 'secondary'), (e.Ghost = 'ghost'));
                    })(qe || (qe = {})));
                const Ye = (0, n.memo)(
                    ({
                        title: e,
                        disabled: u,
                        onClick: t,
                        className: a,
                        iconRight: r,
                        isAnimate: o = !1,
                        iconLeft: s,
                        size: l = 'extraLarge',
                        type: c = 'primary',
                        classes: E,
                    }) => {
                        const _ = (0, n.useState)(!1),
                            d = _[0],
                            m = _[1],
                            A = (0, n.useState)(!1),
                            F = A[0],
                            D = A[1],
                            B = p()(
                                Ve.base,
                                Ve[`base__${c}`],
                                {
                                    [Ve.base__disabled]: u,
                                    [Ve[`base__${l}`]]: l,
                                    [Ve.base__active]: d,
                                    [Ve.base__hover]: F,
                                    [Ve.animated]: o,
                                },
                                null == E ? void 0 : E.base,
                            ),
                            g = p()(Ve.bgOverlay, Ve[`bgOverlay__${c}`], {
                                [Ve.bgOverlay__hover]: F,
                                [Ve.bgOverlay__active]: d,
                                [Ve.bgOverlay__disabled]: u,
                            }),
                            C = p()(Ve.bgImage, Ve[`bgImage__${c}`], {
                                [Ve.bgImage__hover]: F,
                                [Ve.bgImage__active]: d,
                                [Ve.bgImage__disabled]: u,
                            }),
                            h = p()(Ve.content, Ve[`content__${c}`], null == E ? void 0 : E.content),
                            b = p()(Ve.bgLines, Ve[`bgLines__${c}`], { [Ve.bgLines__disabled]: u });
                        return i().createElement(
                            'div',
                            { className: a },
                            i().createElement(
                                'div',
                                {
                                    className: B,
                                    onMouseEnter: () => {
                                        u || (W.playHighlight(), D(!0));
                                    },
                                    onMouseUp: () => {
                                        u || m(!1);
                                    },
                                    onMouseDown: () => {
                                        u || m(!0);
                                    },
                                    onMouseLeave: () => {
                                        u || (m(!1), D(!1));
                                    },
                                    onClick: (e) => {
                                        u || (t && t(e), W.playClick());
                                    },
                                },
                                i().createElement('div', { className: g }),
                                i().createElement('div', { className: b }),
                                i().createElement('div', { className: C }),
                                o &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: Ve.pulseAnimatedBoxOne }),
                                        i().createElement('div', { className: Ve.pulseAnimatedBoxTwo }),
                                        i().createElement('div', { className: Ve.pulseAnimatedBoxThree }),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: h },
                                    s &&
                                        i().createElement('div', {
                                            className: p()(Ve.btnIcon, Ve.btnIcon__left),
                                            style: { backgroundImage: `url(${s})` },
                                        }),
                                    i().createElement(Ge, { text: e }),
                                    r &&
                                        i().createElement('div', {
                                            className: p()(Ve.btnIcon, Ve.btnIcon__right),
                                            style: { backgroundImage: `url(${r})` },
                                        }),
                                ),
                            ),
                        );
                    },
                );
                var Ke = t(8552);
                const Ze = R.strings.portal_battle_result,
                    Qe = R.strings.portal_lobby,
                    Je = ({
                        arenaStartDateTime: e,
                        battleDuration: u,
                        battleDifficulty: t,
                        playerVehicleName: a,
                        playerName: r,
                        clanAbbrev: o,
                        handleClose: s,
                    }) => {
                        const l = x().mediaSize,
                            c = l >= v.ExtraLarge,
                            E = ((e) => (e === v.Large ? Xe.Large : Xe.Medium))(l),
                            _ = (0, Ke.useSpring)({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                                config: { tension: 170, friction: 26 },
                                delay: 1700,
                            }),
                            d = (0, Ke.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { tension: 210, friction: 20 },
                                delay: 1700,
                            });
                        (0, n.useEffect)(() => {
                            const e = setTimeout(() => {
                                H('ev_portal_gui_hangar_postbattle_slide');
                            }, 2e3);
                            return () => clearTimeout(e);
                        }, []);
                        const m = o ? `${r}[${o}]` : r;
                        return i().createElement(
                            Ke.animated.div,
                            { className: 'Footer_base_63', style: d },
                            i().createElement(
                                'div',
                                { className: 'Footer_footerWrap_72' },
                                i().createElement(
                                    'div',
                                    { className: 'Footer_mapTimeWrap_58' },
                                    i().createElement(
                                        'div',
                                        { className: je },
                                        i().createElement(Ge, {
                                            text: Ze.result.footer.eventTitle(),
                                            format: {
                                                binding: {
                                                    event: i().createElement(Ge, {
                                                        className: je,
                                                        text: Ze.result.footer.event(),
                                                    }),
                                                    level: i().createElement(Ge, {
                                                        className: je,
                                                        text: Qe.complexity.level.$dyn(`c_${t}`),
                                                    }),
                                                },
                                            },
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Ue },
                                        i().createElement(Ge, {
                                            text: Ze.result.footer.eventTime(),
                                            format: {
                                                binding: {
                                                    date: i().createElement(Ge, { className: Ue, text: e }),
                                                    time: i().createElement(Ge, { className: Ue, text: u }),
                                                },
                                            },
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    Ke.animated.div,
                                    { className: $e, style: _ },
                                    i().createElement(Ye, {
                                        className: $e,
                                        title: Ze.result.continueButton(),
                                        classes: {
                                            content: c ? 'Footer_extraLargeButton_c6' : void 0,
                                            base: 'Footer_buttonWrapper_18',
                                        },
                                        size: E,
                                        onClick: s,
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: 'Footer_nickWrap_d1' },
                                    i().createElement(
                                        'div',
                                        { className: 'Footer_nick_cc' },
                                        i().createElement(Ge, { text: m }),
                                    ),
                                    i().createElement(Ge, { className: 'Footer_vehicleName_b7', text: a }),
                                ),
                            ),
                        );
                    };
                let eu;
                !(function (e) {
                    ((e.default_win = 'default_win'),
                        (e.super_boss_win = 'super_boss_win'),
                        (e.time_out_defeat = 'timeout_defeat'),
                        (e.player_base_captured_defeat = 'player_base_captured_defeat'),
                        (e.technical_defeat = 'technical_defeat'));
                })(eu || (eu = {}));
                const uu = 'glowBlue',
                    tu = new Set([eu.technical_defeat, eu.time_out_defeat, eu.player_base_captured_defeat]),
                    au = (e, u, t = !1) => {
                        let a, r, n;
                        switch (
                            (u === eu.super_boss_win
                                ? ((a = 'winBoss'), (r = uu))
                                : tu.has(u)
                                  ? ((a = 'lose'), (r = 'glowRed'))
                                  : ((a = 'win'), (r = uu)),
                            e)
                        ) {
                            case v.Small:
                            case v.Medium:
                                n = 'middle';
                                break;
                            case v.Large:
                                n = 'large';
                                break;
                            case v.ExtraLarge:
                                n = 'extraLarge';
                                break;
                            default:
                                n = 'large';
                        }
                        const i = R.images.portal.gui.maps.icons.battle_result.mainBg.$dyn(a);
                        return { imageURL: t ? i.$dyn(`${n}_blured`) : i.$dyn(n), glow: r };
                    };
                function ru() {
                    return !1;
                }
                console.log;
                var nu = t(3915);
                function iu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ou = (e) => (0 === e ? window : window.subViews.get(e)),
                    su = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? su(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, a) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? su(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? su(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    lu = (e) => su(e);
                var cu = t(6517);
                const Eu = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: r, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ou,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (r.set(l, t), e && t(i(n)), l);
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
                                                                                    return iu(e, u);
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
                                                                                          ? iu(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            i =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : i.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        statsList: e.array('playerResultsModel.statsList'),
                                                        battleRewardsList: e.array(
                                                            'playerResultsModel.battleRewardsList',
                                                        ),
                                                        placesList: e.array('leaderboardModel.placesList'),
                                                    },
                                                    t = (0, cu.computedFn)(() => lu(u.statsList.get()), { equals: ru }),
                                                    a = (0, cu.computedFn)(() => lu(u.battleRewardsList.get()), {
                                                        equals: ru,
                                                    }),
                                                    r = (0, cu.computedFn)(() => lu(u.placesList.get()), {
                                                        equals: ru,
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getPlacesList: r,
                                                        getStatsList: t,
                                                        getBattleRewardsList: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = nu.observable.box(a, { equals: ru });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, nu.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = nu.observable.box(a, { equals: ru });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, nu.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = nu.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, nu.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                o = n.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = nu.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, nu.action)((e) => {
                                                                            n.forEach(([u, t]) => {
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
                                            controls: 'mocks' === e && a ? a.controls(_) : u(_),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(e),
                                    d = _[0],
                                    m = _[1],
                                    A = (0, n.useState)(() => c(e, a, o)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(d, a, o)) : (E.current = !0);
                                    }, [o, d, a]),
                                    (0, n.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    i().createElement(t.Provider, { value: F }, r)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({ onClose: e.createCallbackNoArgs('onClose') })),
                    _u = Eu[0],
                    du = Eu[1],
                    mu = (e) => {
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
                    Au = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Fu = [];
                function Du(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), Fu)
                    );
                }
                function Bu(e, u, t = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, n.useEffect)(() => r, [r]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, i),
                        r,
                    ];
                }
                function gu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                let Cu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Cu || (Cu = {}));
                const pu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    hu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, t) => {
                            const a = u(e),
                                r = a[0],
                                n = a[1];
                            return Au(r, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? pu : c,
                                _ = (0, n.useRef)(null),
                                d = (0, n.useRef)(null),
                                m = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var a,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return gu(e, u);
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
                                                                              ? gu(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var a = 0;
                                                            return function () {
                                                                return a >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[a++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(a = r()).done;

                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const a = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let r,
                                                    n = !1,
                                                    i = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function E() {
                                                        ((i = Date.now()), t.apply(l, s));
                                                    }
                                                    n ||
                                                        (a && !r && E(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        (o(), (n = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Ke.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), m.trigger('change', e), i && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                g = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const r = D.scrollPosition.get(),
                                            n = (null != (a = D.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, u * t + n + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            B.start({
                                                scrollPosition: o(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(a, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            n = g(u, e, a);
                                        C(n);
                                    },
                                    [C, g, E.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(a(e)),
                                            _.current && m.trigger('mouseWheel', e, D.scrollPosition, u(_.current)));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        mu(() => {
                                            const e = _.current;
                                            e &&
                                                (C(o(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                v = Du(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = o(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const f = (0, n.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    handleIsThumbDragging: f,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, C, p, f, m.off, m.on, v, h, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    bu = hu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Cu.Next : Cu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    vu = 'HorizontalBar_base__nonActive_82',
                    fu = 'disable',
                    wu = { pending: !1, offset: 0 },
                    xu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    yu = () => {},
                    Lu = (e, u) => Math.max(20, e.offsetWidth * u),
                    Tu = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = xu, onDrag: a = yu }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, n.useState)(wu),
                            d = _[0],
                            m = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (m(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    E = Au(0, 1, n / (r - a)),
                                    _ = (u.offsetWidth - Lu(u, i)) * E;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(fu),
                                                    void s.current.classList.remove(fu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(fu),
                                                    void s.current.classList.add(fu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(fu), s.current.classList.remove(fu));
                                        }
                                    })(_));
                            },
                            D = Du(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && a && t)) return;
                                    const i = Math.min(1, a / n);
                                    ((u.style.width = `${Lu(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(vu) : r.current.classList.remove(vu)));
                                })(),
                                    F());
                            });
                        ((0, n.useEffect)(() => mu(D)),
                            (0, n.useEffect)(
                                () =>
                                    mu(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = yu;
                                        const a = () => {
                                            (t(), (t = mu(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const n = l.current,
                                            i = c.current;
                                        if (!r || !n || !i) return;
                                        const o = u.screenX - d.offset - n.getBoundingClientRect().x,
                                            s = (o / n.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: s }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(wu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, a, A]));
                        const B = Bu((u) => e.applyStepTo(u), E, [e]),
                            g = B[0],
                            C = B[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(fu) || H('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fu) || 0 !== e.button || (H('play'), g(Cu.Next));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = c.current;
                                        a &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = c.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? Cu.Prev : Cu.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: c, className: p()('HorizontalBar_thumb_fd', u.thumb) }),
                                i().createElement('div', { className: p()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fu) || 0 !== e.button || (H('play'), g(Cu.Prev));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Su = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Mu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: p()(Su.base, e.base) });
                            }, [a]),
                            _ = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(Su.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Su.defaultScrollArea, r) },
                                i().createElement(Ru, { className: s, api: _, classNames: o }, e),
                            ),
                            i().createElement(Tu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Ru = ({ api: e, className: u, classNames: t, children: a, style: r }) => (
                        (0, n.useEffect)(() => mu(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Su.base, u), style: r },
                            i().createElement(
                                'div',
                                {
                                    className: p()(Su.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(Su.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Ru.Bar = Tu),
                    (Ru.Default = Mu),
                    (Ru.SeniorityAwards = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => mu(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Su.base, u) },
                            i().createElement(
                                'div',
                                { className: p()(Su.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: p()(Su.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Nu = hu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Cu.Next : Cu.Prev),
                    }),
                    Ou = 'VerticalBar_base__nonActive_42',
                    Iu = 'disable',
                    ku = () => {},
                    Pu = { pending: !1, offset: 0 },
                    Hu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Wu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    zu = (e, u) => Math.max(20, e.offsetHeight * u),
                    Gu = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Hu, onDrag: a = ku }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, n.useState)(Pu),
                            d = _[0],
                            m = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (m(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            F = Du(() => {
                                const u = c.current,
                                    t = l.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && u && t)) return;
                                const i = Math.min(1, a / n);
                                return (
                                    (u.style.height = `${zu(t, i)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(Ou) : r.current.classList.remove(Ou)),
                                    i
                                );
                            }),
                            D = Du(() => {
                                const u = l.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    E = Au(0, 1, n / (r - a)),
                                    _ = (u.offsetHeight - zu(u, i)) * E;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Iu),
                                                    void s.current.classList.remove(Iu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Iu),
                                                    void s.current.classList.add(Iu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Iu), s.current.classList.remove(Iu));
                                        }
                                    })(_));
                            }),
                            B = Du(() => {
                                Wu(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, n.useEffect)(() => mu(B)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    Wu(e, () => {
                                        D();
                                    });
                                };
                                let t = ku;
                                const a = () => {
                                    (t(), (t = mu(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        Wu(e, (t) => {
                                            const r = l.current,
                                                n = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !n || !i) return;
                                            const o = u.screenY - d.offset - r.getBoundingClientRect().y,
                                                s = (o / r.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: s }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(Pu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, a, A]));
                        const g = Bu((u) => e.applyStepTo(u), E, [e]),
                            C = g[0],
                            h = g[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Iu) || H('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Iu) || 0 !== e.button || (H('play'), C(Cu.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = c.current;
                                        var r;
                                        a &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === a
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y }))
                                                : ((r = u.screenY > a.getBoundingClientRect().y ? Cu.Prev : Cu.Next),
                                                  c.current &&
                                                      Wu(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + a * r);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                i().createElement('div', { ref: c, className: u.thumb }),
                                i().createElement('div', { className: p()('VerticalBar_rail_43', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Iu) || 0 !== e.button || (H('play'), C(Cu.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Uu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ju = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: p()(Uu.base, e.base) });
                            }, [a]),
                            _ = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(Uu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Uu.area, r) },
                                i().createElement($u, { className: o, classNames: s, api: _ }, e),
                            ),
                            i().createElement(Gu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    $u = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, n.useEffect)(() => mu(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Uu.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Uu.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                $u.Default = ju;
                const Vu = { Vertical: r, Horizontal: a };
                let Xu;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Xu || (Xu = {}));
                const qu = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, n.useCallback)(() => {
                                ((0, ne.c9)(ne.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    W.playYes());
                            }, [r, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, ne.c9)(ne.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === Xu.RIGHT)(e) && s());
                                },
                                [o, s],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Yu = ['children'];
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Zu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Yu);
                    return i().createElement(
                        qu,
                        Ku({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                class Qu extends i().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? ne.B3.GOLD : ne.B3.INTEGRAL;
                        const u = ne.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Qu.defaultProps = { format: 'integral' };
                const Ju = [
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
                function et(e) {
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
                const ut = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    tt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ju);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [B],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ut(t, m, { isMouseEvent: !0, on: !0, arguments: et(a) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, m, a, b, g]),
                            f = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ut(t, m, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, m, b, C]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    at = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const nt = R.views.common.tooltip_window.simple_tooltip_content,
                    it = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, at);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: a, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, r, s]);
                        return i().createElement(
                            tt,
                            rt(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? nt.SimpleTooltipHtmlContent('resId') : nt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    ot = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            a = (0, n.useState)(!0),
                            r = a[0],
                            o = a[1];
                        return (
                            (0, n.useEffect)(() =>
                                mu(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && o(!1);
                                }),
                            ),
                            i().createElement(
                                it,
                                { isEnabled: r, body: e },
                                i().createElement('div', { ref: t, className: p()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    st = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    lt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const ct = {
                    base: 'Content_base_59',
                    base__leader: 'Content_base__leader_e6',
                    base__leaver: 'Content_base__leaver_ae',
                    base__personal: 'Content_base__personal_4a',
                    base__platoon: 'Content_base__platoon_35',
                    vehicleName: 'Content_vehicleName_15',
                    level: 'Content_level_93',
                    kills: 'Content_kills_43',
                    damage: 'Content_damage_b9',
                    place: 'Content_place_14',
                    placeValue: 'Content_placeValue_1e',
                    squadIndexVisible: 'Content_squadIndexVisible_53',
                    name: 'Content_name_90',
                    userName: 'Content_userName_55',
                    userNameWithClan: 'Content_userNameWithClan_c4',
                    squadIndex: 'Content_squadIndex_ef',
                    squadIndex__visible: 'Content_squadIndex__visible_3b',
                    clanTag: 'Content_clanTag_c0',
                    divider: 'Content_divider_10',
                    base__firstPlace: 'Content_base__firstPlace_8e',
                    placeImage: 'Content_placeImage_e9',
                    vehicle: 'Content_vehicle_e7',
                    vehicleTypeIcon: 'Content_vehicleTypeIcon_d6',
                    damageBlocked: 'Content_damageBlocked_19',
                };
                var Et;
                !(function (e) {
                    ((e.RED = 'red'), (e.DEFAULT = 'default'));
                })(Et || (Et = {}));
                const _t = i().memo(
                        ({
                            isPersonal: e,
                            squadIndex: u,
                            isSquadMode: t,
                            user: a,
                            place: r,
                            rating: o,
                            playerSquadIndex: s,
                            isLeaver: l,
                            maxValues: c,
                        }) => {
                            const E = a.userName,
                                _ = a.clanAbbrev,
                                d = a.vehicleName,
                                m = a.vehicleType,
                                A = a.damageBlocked,
                                F = a.vehicleLevel,
                                D = a.damage,
                                B = a.kills,
                                g = a.databaseID,
                                C = a.hiddenUserName,
                                h = x().mediaSize,
                                b = t && s === u,
                                f = p()(
                                    ct.base,
                                    0 === o && ct.base__firstPlace,
                                    e && ct.base__personal,
                                    b && ct.base__platoon,
                                    l && !e && ct.base__leaver,
                                ),
                                w = b || e ? Et.RED : Et.DEFAULT,
                                y = (0, n.useMemo)(
                                    () =>
                                        ((e, u) => {
                                            const t = e === v.Large ? 'big' : 'small';
                                            if (u < 4) {
                                                const e = ['gold', 'silver', 'bronze'][u - 1];
                                                return {
                                                    backgroundImage: `url(${R.images.portal.gui.maps.icons.battle_result.leaderboard.places.$dyn(t).$dyn(e)})`,
                                                };
                                            }
                                        })(h, r),
                                    [h, r],
                                ),
                                L = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.portal.gui.maps.icons.battle_result.vehicleTypes.$dyn(w).$dyn(m)})`,
                                    }),
                                    [m, w],
                                ),
                                T = _ ? `[${_}]` : null,
                                S = (0, n.useMemo)(
                                    () => ({ userName: E, databaseID: g, hiddenUserName: C }),
                                    [E, g, C],
                                ),
                                M = p()(ct.kills, (null == c ? void 0 : c.kills) === B && 0 !== B && ct.base__leader),
                                N = p()(
                                    ct.damageBlocked,
                                    (null == c ? void 0 : c.damageBlocked) === A && 0 !== A && ct.leader,
                                ),
                                O = (function (e) {
                                    let u = '';
                                    for (let t = lt.length - 1; t >= 0; t--)
                                        for (; e >= lt[t]; ) ((u += st[t]), (e -= lt[t]));
                                    return u;
                                })(F),
                                I = p()(ct.squadIndex, Boolean(u) && ct.squadIndex__visible);
                            return i().createElement(
                                'div',
                                { className: f },
                                i().createElement('div', { className: I }, u),
                                i().createElement(
                                    'div',
                                    { className: ct.name },
                                    E &&
                                        i().createElement(
                                            Zu,
                                            { args: S },
                                            i().createElement(
                                                'div',
                                                { className: p()(ct.userName, T && ct.userNameWithClan) },
                                                i().createElement(ot, { content: E }),
                                            ),
                                        ),
                                    T && i().createElement(Ge, { className: ct.clanTag, text: T }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ct.vehicle },
                                    i().createElement(Ge, { className: ct.level, text: O }),
                                    i().createElement('div', { className: ct.vehicleTypeIcon, style: L }),
                                    i().createElement(Ge, { className: ct.vehicleName, text: d }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ct.place },
                                    i().createElement(
                                        'div',
                                        { className: ct.placeImage, style: y },
                                        i().createElement(Ge, { className: ct.placeValue, text: `${r}` }),
                                    ),
                                ),
                                i().createElement(
                                    'span',
                                    { className: ct.damage },
                                    i().createElement(Qu, { value: D, format: 'integral' }),
                                ),
                                i().createElement(Ge, { className: M, text: `${B}` }),
                                i().createElement(Ge, { className: N, text: `${A}` }),
                            );
                        },
                    ),
                    dt = i().memo(
                        ({
                            place: e,
                            isSquadMode: u,
                            isPersonal: t,
                            squadIndex: a,
                            user: r,
                            index: n,
                            playerSquadIndex: o,
                            isLeaver: s,
                            maxValues: l,
                        }) =>
                            i().createElement(
                                'div',
                                { className: 'LeaderboardRow_base_a7' },
                                i().createElement(
                                    'div',
                                    { className: 'LeaderboardRow_players_aa' },
                                    i().createElement(_t, {
                                        key: n,
                                        user: r,
                                        rating: n,
                                        maxValues: l,
                                        place: e,
                                        isLeaver: s,
                                        isSquadMode: u,
                                        playerSquadIndex: o,
                                        isPersonal: t,
                                        squadIndex: a,
                                    }),
                                ),
                                i().createElement('div', { className: 'LeaderboardRow_divider_52' }),
                            ),
                    ),
                    mt = (e, u, t) => {
                        const a = t === It.Results ? t : It.Leaderboard,
                            r = `c_${u}`,
                            n = (function () {
                                if (a === It.Results)
                                    switch (e) {
                                        case v.Medium:
                                            return 'c_258x258';
                                        case v.ExtraLarge:
                                            return 'c_344x344';
                                        default:
                                            return 'c_180x135';
                                    }
                                else
                                    switch (e) {
                                        case v.ExtraLarge:
                                            return 'c_232x174';
                                        case v.Medium:
                                        case v.Large:
                                            return 'c_180x135';
                                        default:
                                            return 'c_124x93';
                                    }
                            })();
                        return R.images.portal.gui.maps.icons.battle_result.complexity.$dyn(a).$dyn(n).$dyn(r);
                    },
                    At = (e) => {
                        switch (e) {
                            case eu.technical_defeat:
                            case eu.time_out_defeat:
                            case eu.player_base_captured_defeat:
                                return !1;
                            case eu.default_win:
                            case eu.super_boss_win:
                                return !0;
                        }
                    },
                    Ft = i().memo(
                        ({ finishResultTitle: e, battleDifficulty: u, finishResultDescr: t, finishResultType: a }) => {
                            const r = x().mediaSize,
                                o = (0, n.useMemo)(() => mt(r, u, It.Leaderboard), [r, u]),
                                s = (0, n.useMemo)(() => At(a), [a]);
                            return i().createElement(
                                'div',
                                { className: 'LeaderBoardTitle_base_2e' },
                                i().createElement('div', {
                                    className: 'LeaderBoardTitle_complexityLevel_9a',
                                    style: { backgroundImage: `url(${o})` },
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'LeaderBoardTitle_titleWrapper_a5' },
                                    i().createElement(Ge, {
                                        className: p()(
                                            'LeaderBoardTitle_titleText_e9',
                                            s
                                                ? 'LeaderBoardTitle_titleText__winnerText_60'
                                                : 'LeaderBoardTitle_titleText__loserText_79',
                                        ),
                                        text: e,
                                    }),
                                    i().createElement(Ge, {
                                        className: p()(
                                            'LeaderBoardTitle_subTitle_40',
                                            s
                                                ? 'LeaderBoardTitle_subTitle__winnerText_94'
                                                : 'LeaderBoardTitle_subTitle__loserText_75',
                                        ),
                                        text: t,
                                    }),
                                ),
                            );
                        },
                    ),
                    Dt = {
                        base: 'LegendRow_base_92',
                        wrap: 'LegendRow_wrap_3f',
                        divider: 'LegendRow_divider_6d',
                        damageDealt: 'LegendRow_damageDealt_c0',
                        kills: 'LegendRow_kills_62',
                        place: 'LegendRow_place_42',
                        squad: 'LegendRow_squad_d0',
                        ally: 'LegendRow_ally_e1',
                        vehicle: 'LegendRow_vehicle_f0',
                        damageBlockedByArmor: 'LegendRow_damageBlockedByArmor_20',
                    },
                    Bt = R.strings.portal_battle_result;
                var gt;
                !(function (e) {
                    ((e.SQUAD = 'squad'),
                        (e.ALLY = 'ally'),
                        (e.VEHICLE = 'vehicle'),
                        (e.PLACE = 'place'),
                        (e.DAMAGE = 'damageDealt'),
                        (e.KILLS = 'kills'),
                        (e.DAMAGE_BLOCKED = 'damageBlockedByArmor'));
                })(gt || (gt = {}));
                const Ct = [
                        { itemType: gt.SQUAD, showDivider: !1 },
                        { itemType: gt.ALLY, text: Bt.result.leaderBoard.ally(), showDivider: !0 },
                        { itemType: gt.VEHICLE, showDivider: !0 },
                        { itemType: gt.PLACE, isShowTooltip: !0, showDivider: !0 },
                        { itemType: gt.DAMAGE, isShowTooltip: !0, showDivider: !0 },
                        { itemType: gt.KILLS, isShowTooltip: !0, showDivider: !0 },
                        { itemType: gt.DAMAGE_BLOCKED, isShowTooltip: !0, showDivider: !0 },
                    ],
                    pt = i().memo(() =>
                        i().createElement(
                            'div',
                            { className: Dt.base },
                            Ct.map(({ itemType: e, text: u = '', isShowTooltip: t, showDivider: a = !1 }) =>
                                i().createElement(
                                    i().Fragment,
                                    { key: e },
                                    t
                                        ? i().createElement(
                                              tt,
                                              {
                                                  contentId:
                                                      R.views.portal.lobby.tooltips.BattleResultStatTooltip('resId'),
                                                  key: e,
                                                  args: { name: e },
                                              },
                                              i().createElement(
                                                  'div',
                                                  { className: Dt.wrap },
                                                  i().createElement(Ge, { className: Dt[e], text: u }),
                                                  a && i().createElement('div', { className: Dt.divider }),
                                              ),
                                          )
                                        : i().createElement(
                                              'div',
                                              { className: Dt[e] },
                                              i().createElement(Ge, { text: u }),
                                              a && i().createElement('div', { className: Dt.divider }),
                                          ),
                                ),
                            ),
                        ),
                    );
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                const bt = (0, se.observer)(() => {
                        const e = du().model,
                            u = e.computes.getPlacesList(),
                            t = e.root.get(),
                            a = t.finishResultTitle,
                            r = t.battleDifficulty,
                            o = t.finishResultDescr,
                            s = t.finishResultType,
                            l = (0, n.useMemo)(() => {
                                const e = u.find(({ isPersonal: e }) => e);
                                return null == e ? void 0 : e.squadIndex;
                            }, [u]),
                            c = {
                                kills: Math.max(...u.map((e) => e.user.kills)),
                                damageBlocked: Math.max(...u.map((e) => e.user.damageBlocked)),
                            },
                            E = Nu(),
                            _ = u.length > 5;
                        return i().createElement(
                            'div',
                            { className: 'Leaderboard_base_60' },
                            i().createElement(Ft, {
                                finishResultTitle: a,
                                battleDifficulty: r,
                                finishResultDescr: o,
                                finishResultType: s,
                            }),
                            i().createElement(
                                'div',
                                { className: 'Leaderboard_middle_44' },
                                u.length &&
                                    i().createElement(
                                        'div',
                                        { className: 'Leaderboard_content_ee' },
                                        i().createElement(pt, null),
                                        i().createElement(
                                            'div',
                                            { className: 'Leaderboard_scrollContent_27' },
                                            _ &&
                                                i().createElement(Vu.Vertical.Bar, {
                                                    api: E,
                                                    classNames: { base: 'Leaderboard_bar_7b' },
                                                }),
                                            i().createElement(
                                                Vu.Vertical.Area,
                                                { api: E },
                                                u.map((e, u) =>
                                                    i().createElement(
                                                        dt,
                                                        ht({ maxValues: c, key: u, index: u, playerSquadIndex: l }, e),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    vt = {
                        base: 'StatItem_base_9e',
                        wreathImage: 'StatItem_wreathImage_84',
                        statImage: 'StatItem_statImage_1d',
                        statItem: 'StatItem_statItem_ff',
                        statText: 'StatItem_statText_af',
                        titleText: 'StatItem_titleText_46',
                    },
                    ft = R.strings.portal_battle_result,
                    wt = [
                        { id: 1, delay: 600 },
                        { id: 2, delay: 800 },
                        { id: 3, delay: 1e3 },
                        { id: 4, delay: 1200 },
                    ],
                    xt = i().memo(({ statItem: e, index: u, shouldAnimate: t }) => {
                        const a = x().mediaSize,
                            r = e.value,
                            o = e.wreathImage,
                            s = e.description,
                            l = ne.Z5.getNumberFormat(r, ne.B3.INTEGRAL),
                            c = ((e) => {
                                switch (e) {
                                    case v.Medium:
                                    case v.Large:
                                        return { width: '88rem', height: '76rem' };
                                    case v.ExtraLarge:
                                        return { width: '110rem', height: '95rem' };
                                    default:
                                        return { height: '62rem', width: '62rem' };
                                }
                            })(a),
                            E = Object.assign({ backgroundImage: `url(${o})` }, c),
                            _ = {
                                backgroundImage: `url(${R.images.portal.gui.maps.icons.battle_result.stat_list.$dyn(s)})`,
                            },
                            d = (0, Ke.useSprings)(wt.length, () => ({ scale: 1, opacity: 1 })),
                            m = d[0],
                            A = d[1],
                            F = (0, n.useRef)([]);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    t &&
                                        wt.forEach(({ delay: e }) => {
                                            const u = setTimeout(() => {
                                                H('ev_portal_gui_hangar_postbattle_effectivity');
                                            }, e - 50);
                                            F.current.push(u);
                                        }),
                                    () => {
                                        (F.current.forEach((e) => clearTimeout(e)), (F.current = []));
                                    }
                                ),
                                [t],
                            ),
                            (0, n.useEffect)(() => {
                                t
                                    ? A.start((e) => {
                                          var u;
                                          return {
                                              from: { scale: 1.5, opacity: 0 },
                                              to: { scale: 1, opacity: 1 },
                                              delay: (null == (u = wt[e]) ? void 0 : u.delay) || 0,
                                              config: { tension: 150, friction: 20 },
                                          };
                                      })
                                    : A.start({ scale: 1, opacity: 1, immediate: !0 });
                            }, [t, A]),
                            i().createElement(
                                tt,
                                {
                                    contentId: R.views.portal.lobby.tooltips.BattleResultStatTooltip('resId'),
                                    key: s,
                                    args: { name: s },
                                },
                                i().createElement(
                                    Ke.animated.div,
                                    { className: vt.statItem, style: m[u] },
                                    i().createElement('div', { className: vt.wreathImage, style: E }),
                                    i().createElement('div', { className: vt.statImage, style: _ }),
                                    i().createElement(
                                        'div',
                                        { className: vt.statText },
                                        i().createElement(Ge, { className: vt.currentValue, text: l }),
                                    ),
                                    i().createElement(Ge, { className: vt.titleText, text: ft.result.stats.$dyn(s) }),
                                ),
                            )
                        );
                    }),
                    yt = i().memo(({ statsList: e, shouldAnimate: u }) => {
                        const t = [...e];
                        var a = [t[2], t[1]];
                        return (
                            (t[1] = a[0]),
                            (t[2] = a[1]),
                            i().createElement(
                                'div',
                                { className: 'StatsList_base_2d' },
                                i().createElement(
                                    'div',
                                    { className: 'StatsList_wrapper_7b' },
                                    t.map((e, t) =>
                                        i().createElement(xt, { statItem: e, key: t, index: t, shouldAnimate: u }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Lt = {
                        base: 'Title_base_8d',
                        complexityLevel: 'Title_complexityLevel_31',
                        titleText: 'Title_titleText_70',
                        titleText__winnerText: 'Title_titleText__winnerText_58',
                        titleText__loserText: 'Title_titleText__loserText_ed',
                        subTitle: 'Title_subTitle_f5',
                        subTitle__winnerText: 'Title_subTitle__winnerText_fd',
                        subTitle__loserText: 'Title_subTitle__loserText_c5',
                    },
                    Tt = i().memo(
                        ({
                            finishResultTitle: e,
                            battleDifficulty: u,
                            finishResultDescr: t,
                            finishResultType: a,
                            shouldAnimate: r,
                        }) => {
                            const o = (0, Ke.useSpring)(() => ({ opacity: 1, display: 'block' })),
                                s = o[0],
                                l = o[1],
                                c = (0, Ke.useSpring)(() => ({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                    display: 'block',
                                })),
                                E = c[0],
                                _ = c[1],
                                d = (0, Ke.useSpring)(() => ({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                    display: 'block',
                                })),
                                m = d[0],
                                A = d[1];
                            (0, n.useEffect)(() => {
                                r &&
                                    (l.start({
                                        from: { opacity: 0 },
                                        to: { opacity: 1 },
                                        config: { tension: 50, friction: 10 },
                                        delay: 100,
                                    }),
                                    _.start({
                                        from: { opacity: 0, transform: 'translateY(-20px)' },
                                        to: { opacity: 1, transform: 'translateY(0)' },
                                        config: { tension: 50, friction: 10 },
                                        delay: 400,
                                    }),
                                    A.start({
                                        from: { opacity: 0, transform: 'translateY(50px)' },
                                        to: { opacity: 1, transform: 'translateY(0)' },
                                        config: { tension: 40, friction: 14 },
                                        delay: 500,
                                    }));
                            }, [r, l, _, A]);
                            const F = x().mediaSize,
                                D = (0, n.useMemo)(() => mt(F, u, It.Results), [F, u]),
                                B = (0, n.useMemo)(() => At(a), [a]);
                            return i().createElement(
                                'div',
                                { className: Lt.base },
                                i().createElement(
                                    Ke.animated.div,
                                    { style: m },
                                    i().createElement('div', {
                                        className: Lt.complexityLevel,
                                        style: { backgroundImage: `url(${D})` },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Lt.titleWrapper },
                                    i().createElement(
                                        Ke.animated.div,
                                        { className: Lt.titleWrap, style: s },
                                        i().createElement(Ge, {
                                            className: p()(
                                                Lt.titleText,
                                                B ? Lt.titleText__winnerText : Lt.titleText__loserText,
                                            ),
                                            text: e,
                                        }),
                                    ),
                                    i().createElement(
                                        Ke.animated.div,
                                        { style: E },
                                        i().createElement(Ge, {
                                            className: p()(
                                                Lt.subTitle,
                                                B ? Lt.subTitle__winnerText : Lt.subTitle__loserText,
                                            ),
                                            text: t,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    St = (e, u) => {
                        const t = `${u}`;
                        let a = 'c_48x48',
                            r = '48rem',
                            n = '48rem';
                        switch (e) {
                            case v.Medium:
                            case v.Large:
                                ((a = 'c_80x80'), (r = '80rem'), (n = '80rem'));
                                break;
                            case v.ExtraLarge:
                                ((a = 'c_100x100'), (r = '100rem'), (n = '100rem'));
                        }
                        return {
                            backgroundImage: `url(${R.images.portal.gui.maps.icons.battle_result.currency.$dyn(a).$dyn(t)})`,
                            height: r,
                            width: n,
                        };
                    },
                    Mt = i().memo(({ battleRewardsList: e, shouldAnimate: u }) => {
                        const t = x().mediaSize,
                            a = (0, Ke.useSpring)(() => ({ opacity: 1, transform: 'translateY(0)' })),
                            r = a[0],
                            o = a[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u) {
                                    o.start({
                                        from: { opacity: 0, transform: 'translateY(-30rem)' },
                                        to: { opacity: 1, transform: 'translateY(0)' },
                                        config: { tension: 170, friction: 26 },
                                        delay: 1300,
                                    });
                                    const e = setTimeout(() => {
                                        H('ev_portal_gui_hangar_postbattle_main_points');
                                    }, 1460);
                                    return () => clearTimeout(e);
                                }
                            }, [u, o]),
                            i().createElement(
                                'div',
                                { className: 'Ribbon_base_4f' },
                                e.map(({ value: e, type: u }) =>
                                    i().createElement(
                                        Ke.animated.div,
                                        { key: u, className: 'Ribbon_rewardAnimated_dd', style: r },
                                        i().createElement(
                                            tt,
                                            {
                                                contentId: R.views.portal.lobby.tooltips.ProgressTokenTooltip('resId'),
                                                args: { isTokenTooltip: 'progressionTokens' === u, isCompleted: !1 },
                                            },
                                            i().createElement(
                                                'div',
                                                { className: 'Ribbon_rewardItem_b2' },
                                                i().createElement('div', {
                                                    className: 'Ribbon_rewardIcon_ef',
                                                    style: St(t, u),
                                                }),
                                                i().createElement(Ge, {
                                                    className: 'Ribbon_rewardText_5b',
                                                    text: e.toString(),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Rt = (0, se.observer)(({ shouldAnimate: e }) => {
                        const u = du().model,
                            t = x(),
                            a = t.mediaSize,
                            r = t.remScreenWidth,
                            o = u.root.get(),
                            l = o.finishResultTitle,
                            c = o.battleDifficulty,
                            E = o.finishResultDescr,
                            _ = o.finishResultType,
                            d = u.computes.getStatsList(),
                            m = u.computes.getBattleRewardsList(),
                            A = (() => {
                                const e = (0, n.useState)(s.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            t(s.O.view.getScale());
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
                            F = (0, n.useMemo)(() => 1 === A && r > v.ExtraLarge, [r, A]),
                            D = (0, n.useMemo)(() => {
                                const e = ((e, u) => {
                                    let t,
                                        a = 'win';
                                    switch (u) {
                                        case eu.default_win:
                                        case eu.super_boss_win:
                                            a = 'win';
                                            break;
                                        case eu.technical_defeat:
                                        case eu.time_out_defeat:
                                        case eu.player_base_captured_defeat:
                                            a = 'lose';
                                    }
                                    switch (e) {
                                        case v.Small:
                                            t = 'small';
                                            break;
                                        case v.Medium:
                                            t = 'middle';
                                            break;
                                        case v.Large:
                                        default:
                                            t = 'large';
                                    }
                                    return R.images.portal.gui.maps.icons.battle_result.ribbon.$dyn(a).$dyn(t);
                                })(a, _);
                                return { backgroundImage: `url(${e})` };
                            }, [_, a]),
                            B = (0, Ke.useSpring)(() => ({ opacity: 1, transform: 'translateY(0)' })),
                            g = B[0],
                            C = B[1];
                        return (
                            (0, n.useEffect)(() => {
                                e &&
                                    C.start({
                                        from: { opacity: 0, transform: 'translateY(20rem)' },
                                        to: { opacity: 1, transform: 'translateY(0)' },
                                        config: { tension: 170, friction: 26 },
                                        delay: 1e3,
                                    });
                            }, [e, C]),
                            i().createElement(
                                'div',
                                { className: p()('Result_base_69', { Result_base__is4kScreenSize_97: F }) },
                                i().createElement(
                                    'div',
                                    { className: 'Result_title_02' },
                                    i().createElement(Tt, {
                                        finishResultTitle: l,
                                        battleDifficulty: c,
                                        finishResultDescr: E,
                                        finishResultType: _,
                                        shouldAnimate: e,
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: 'Result_content_f7' },
                                    i().createElement(yt, { statsList: d, shouldAnimate: e }),
                                    i().createElement(
                                        'div',
                                        { className: 'Result_ribbon_b0' },
                                        i().createElement(
                                            'div',
                                            { className: 'Result_ribbonComponent_c5' },
                                            i().createElement(
                                                Ke.animated.div,
                                                { style: g },
                                                i().createElement(
                                                    'div',
                                                    { className: 'Result_ribbonBg_4d', style: D },
                                                    i().createElement(Mt, { shouldAnimate: e, battleRewardsList: m }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Nt = 'TabContent_base_8c',
                    Ot = i().memo(({ currentTabId: e, shouldAnimate: u }) => {
                        switch (e) {
                            case It.Results:
                                return i().createElement(
                                    'div',
                                    { className: p()(Nt) },
                                    i().createElement(Rt, { shouldAnimate: u }),
                                );
                            case It.Leaderboard:
                                return i().createElement('div', { className: p()(Nt) }, i().createElement(bt, null));
                            default:
                                return null;
                        }
                    });
                let It;
                !(function (e) {
                    ((e.Results = 'results'), (e.Leaderboard = 'leaderboard'));
                })(It || (It = {}));
                const kt = [
                        { id: It.Results, title: R.strings.portal_battle_result.tab.result() },
                        { id: It.Leaderboard, title: R.strings.portal_battle_result.tab.leaderboard() },
                    ],
                    Pt = (0, se.observer)(() => {
                        const e = du(),
                            u = e.model,
                            t = e.controls,
                            a = x().mediaSize,
                            r = u.root.get(),
                            o = r.arenaStartDateTime,
                            l = r.battleDuration,
                            c = r.battleDifficulty,
                            E = r.playerVehicleName,
                            _ = r.finishResultType,
                            d = r.playerName,
                            m = r.clanAbbrev,
                            A = (0, n.useState)(!1),
                            F = A[0],
                            D = A[1];
                        (0, n.useEffect)(
                            () => (
                                D(!0),
                                H('STATE_hangar_filtered_on'),
                                () => {
                                    (D(!1), H('STATE_hangar_filtered_off'));
                                }
                            ),
                            [],
                        );
                        const B = (0, n.useCallback)(() => {
                            t.onClose();
                        }, [t]);
                        !(function ({
                            key: e = re.n.ESCAPE,
                            callback: u = () => s.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            oe(e, u, t);
                        })({ callback: B });
                        const g = (0, n.useState)(It.Results),
                            C = g[0],
                            h = g[1],
                            b = (0, n.useCallback)((e) => {
                                (h(e), D(!1));
                            }, []),
                            v = C === It.Leaderboard,
                            f = (0, n.useMemo)(() => au(a, _), [_, a]);
                        return i().createElement(
                            'div',
                            { className: le.base, style: { backgroundImage: `url(${f.imageURL})` } },
                            i().createElement('div', {
                                className: p()(le.leaderBoardBg, v && le.leaderBoardBg__active),
                                style: { backgroundImage: `url(${au(a, _, !0).imageURL})` },
                            }),
                            i().createElement('div', { className: le[f.glow] }),
                            !v && i().createElement('div', { className: le.vignnet }),
                            v && i().createElement('div', { className: p()(v && le.leaderBoardVignette) }),
                            i().createElement(Ot, { currentTabId: C, shouldAnimate: F }),
                            i().createElement($, {
                                classNames: { tab: le.tab },
                                className: le.horizontalTabs,
                                tabs: kt,
                                active: C,
                                onClick: b,
                            }),
                            i().createElement(
                                'div',
                                { className: le.closeButton },
                                i().createElement(ae, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: B,
                                }),
                            ),
                            i().createElement(Je, {
                                playerName: d,
                                clanAbbrev: m,
                                handleClose: B,
                                arenaStartDateTime: o,
                                battleDuration: l,
                                battleDifficulty: c,
                                playerVehicleName: E,
                            }),
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        i().createElement(_u, null, i().createElement(I, null, i().createElement(Pt, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], n = !0, i = 0; i < u.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
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
        (__webpack_require__.j = 577),
        (() => {
            var e = { 577: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, i, o] = t,
                        s = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < n.length; s++)
                        ((r = n[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9367));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
