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
                (t.r(u), t.d(u, { mouse: () => l, onResize: () => i }));
                var a = t(2472),
                    r = t(1176);
                const i = (0, a.E)('clientResized'),
                    n = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    l = (function () {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${u}`,
                                            l = n[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                r &&
                                                    (l(),
                                                    window.removeEventListener(i, s),
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
                        return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => n,
                    }));
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => c,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    n = t(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function d() {
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
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => i });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    i = {
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
                t.d(u, { Z: () => i });
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
                        const i = a.O.view.addModelObserver(e, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
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
                t.d(u, { B0: () => s, ry: () => C });
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
                var i = t(1358);
                const n = {
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
                let s;
                var o;
                (((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(e, u, t, a, r, i, n) {
                    try {
                        var l = e[i](n),
                            s = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(s) : Promise.resolve(s).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var i = e.apply(u, t);
                                        function n(e) {
                                            D(i, a, r, n, l, 'next', e);
                                        }
                                        function l(e) {
                                            D(i, a, r, n, l, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    h = () => g(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(7572);
                const v = r.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), i) => {
                            const n = d.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                o = l.x,
                                E = l.y,
                                _ = l.width,
                                c = l.height,
                                A = {
                                    x: d.O.view.pxToRem(o) + n.x,
                                    y: d.O.view.pxToRem(E) + n.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(c),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, h);
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
                        SystemLocale: n,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = f;
            },
            6576: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
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
                var n = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function o(e, u, t) {
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                })(s || (s = {}));
                const E = n.O.client.getSize('rem'),
                    _ = E.width,
                    c = E.height,
                    A = Object.assign({ width: _, height: c }, o(_, c, l)),
                    m = (0, a.createContext)(A),
                    d = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, d);
                        const r = (0, a.useContext)(m),
                            n = r.extraLarge,
                            l = r.large,
                            s = r.medium,
                            o = r.small,
                            E = r.extraSmall,
                            _ = r.extraLargeWidth,
                            c = r.largeWidth,
                            A = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            C = r.largeHeight,
                            g = r.mediumHeight,
                            h = r.smallHeight,
                            b = r.extraSmallHeight,
                            p = { extraLarge: B, large: C, medium: g, small: h, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && l) return u;
                            if (t.medium && s) return u;
                            if (t.small && o) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && _) return i(u, t, p);
                            if (t.largeWidth && c) return i(u, t, p);
                            if (t.mediumWidth && A) return i(u, t, p);
                            if (t.smallWidth && F) return i(u, t, p);
                            if (t.extraSmallWidth && D) return i(u, t, p);
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
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && b) return u;
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
                    (0, a.memo)(F));
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(m),
                        t = (0, a.useState)(u),
                        i = t[0],
                        s = t[1],
                        E = (0, a.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(u);
                            s(Object.assign({ width: t, height: a }, o(t, a, l)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(m.Provider, { value: _ }, e);
                });
                var B = t(6483),
                    C = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let b, p, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const f = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: n, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const w = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL_WIDTH,
                        [p.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [p.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, y);
                        const i = f(),
                            n = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return r().createElement('div', S({ className: C()(t, w[n], x[l], M[s]) }, a), u);
                    },
                    k = ['children'],
                    T = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, k);
                        return r().createElement(D, null, r().createElement(L, t, u));
                    };
                var N = t(493),
                    P = t.n(N);
                const O = {
                    base: 'AbilityPanel_base_32',
                    ability: 'AbilityPanel_ability_9e',
                    ability_effect: 'AbilityPanel_ability_effect_80',
                    ability__teleport: 'AbilityPanel_ability__teleport_d8',
                    ability__power_shot: 'AbilityPanel_ability__power_shot_04',
                    ability__overcharge: 'AbilityPanel_ability__overcharge_02',
                    ability__black_hole: 'AbilityPanel_ability__black_hole_2f',
                    ability__shell: 'AbilityPanel_ability__shell_e8',
                    ability__ready: 'AbilityPanel_ability__ready_fd',
                    ability__wave: 'AbilityPanel_ability__wave_d6',
                    ability__stun_shot: 'AbilityPanel_ability__stun_shot_ef',
                    ability__repulsion_mine: 'AbilityPanel_ability__repulsion_mine_ae',
                    ability__acceleration: 'AbilityPanel_ability__acceleration_62',
                    ability__shield: 'AbilityPanel_ability__shield_39',
                    ability__rapid_shelling: 'AbilityPanel_ability__rapid_shelling_6d',
                    flash: 'AbilityPanel_flash_a1',
                    ability__active: 'AbilityPanel_ability__active_4b',
                    ability_icon: 'AbilityPanel_ability_icon_f2',
                    ability_reloadMask_icon: 'AbilityPanel_ability_reloadMask_icon_31',
                    'teleport-animation': 'AbilityPanel_teleport-animation_6d',
                    ability_reloadMask_background: 'AbilityPanel_ability_reloadMask_background_29',
                    ability_keyBind: 'AbilityPanel_ability_keyBind_40',
                    teleport_effect: 'AbilityPanel_teleport_effect_be',
                    'border-animation': 'AbilityPanel_border-animation_08',
                    ability_overlay: 'AbilityPanel_ability_overlay_1b',
                    ability_disabledOverlay: 'AbilityPanel_ability_disabledOverlay_41',
                    ability__disabled: 'AbilityPanel_ability__disabled_81',
                    ability_border: 'AbilityPanel_ability_border_40',
                    ability__none: 'AbilityPanel_ability__none_50',
                    ability_icon_ready: 'AbilityPanel_ability_icon_ready_cb',
                    ability_reloadMask: 'AbilityPanel_ability_reloadMask_3a',
                    ability_reloadMask_border: 'AbilityPanel_ability_reloadMask_border_20',
                    chargeReset: 'AbilityPanel_chargeReset_c5',
                    ability_reloading: 'AbilityPanel_ability_reloading_af',
                    teleport_border: 'AbilityPanel_teleport_border_4d',
                    pulse: 'AbilityPanel_pulse_bc',
                    chargeUp: 'AbilityPanel_chargeUp_3d',
                    chargeUp2: 'AbilityPanel_chargeUp2_eb',
                };
                var H = t(3282);
                function I(e) {
                    return e;
                }
                function W() {
                    return !1;
                }
                console.log;
                var U = t(3915);
                function G(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const j = (e) => (0 === e ? window : window.subViews.get(e));
                function V(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                const $ = (e) =>
                    null !== e && 'object' == typeof e
                        ? 'CoherentArrayProxy' === e.constructor.name
                            ? V(e, (e) => ('object' == typeof e ? $(e) : e))
                            : Array.isArray(e)
                              ? e.map((e) => ('object' == typeof e ? $(e) : e))
                              : Object.fromEntries(
                                    Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? $(u) : u]),
                                )
                        : e;
                var X = t(6517);
                const K = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: u, children: i, mocks: l }) {
                                const s = (0, a.useRef)([]),
                                    o = (e, u, t) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = j,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, u = 0) {
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
                                                const l = (e) => {
                                                    const r = t(u),
                                                        i = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            o = n.O.view.addModelObserver(s, u, !0);
                                                        return (r.set(o, t), e && t(l(i)), o);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, u) => {
                                                        const t = l(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = l(e);
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
                                                                                    return G(e, u);
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
                                                                                          ? G(e, u)
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
                                                            i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(u),
                                            i =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == t ? void 0 : t.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === e ? (null == t ? void 0 : t.getter(u)) : i.readByPath(u),
                                            o = (e) => s.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = Object.assign(
                                                        {
                                                            root: e.object(),
                                                            reloadTimes: e.primitives(['reloadTimeLeft', 'reloadTime']),
                                                        },
                                                        e.primitives(['selectedVehicleID']),
                                                        {
                                                            abilities: e.array('abilities', []),
                                                            messages: e.array('messages', []),
                                                            aim: e.object('aim'),
                                                        },
                                                    ),
                                                    t = (0, X.computedFn)(() => {
                                                        return ((e = u.abilities.get()), $(e));
                                                        var e;
                                                    }),
                                                    a = (0, X.computedFn)(
                                                        (e) =>
                                                            (function (e, u) {
                                                                var t;
                                                                if (!(u >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[u]
                                                                        : null == (t = e[u])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(t(), e),
                                                        { equals: W },
                                                    ),
                                                    r = (0, X.computedFn)(() => V(u.messages.get(), I)),
                                                    i = (0, X.computedFn)(() => u.aim.get().killStreak);
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getAbilities: t,
                                                        getAbility: a,
                                                        getMessages: r,
                                                        getKillStreak: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : l(u),
                                                            r = U.observable.box(a, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : l(u),
                                                            r = U.observable.box(a, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = l(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = U.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, U.action)((e) => {
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
                                                                l = n.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = U.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, U.action)((e) => {
                                                                            n.forEach(([u, t]) => {
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
                                                cleanup: o,
                                            }),
                                            _ = { mode: e, model: E, externalModel: i, cleanup: o };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && t ? t.controls(_) : {},
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    c = _[0],
                                    A = _[1],
                                    m = (0, a.useState)(() => o(e, u, l)),
                                    d = m[0],
                                    F = m[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? F(o(c, u, l)) : (E.current = !0);
                                    }, [l, c, u]),
                                    (0, a.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (d.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [d],
                                    ),
                                    r().createElement(t.Provider, { value: d }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(),
                    q = K[0],
                    z = K[1];
                var Y = t(4179);
                const Z = [
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
                function Q(e) {
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
                const J = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ee = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            n = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            o = e.ignoreShowDelay,
                            E = void 0 !== o && o,
                            _ = e.ignoreMouseClick,
                            c = void 0 !== _ && _,
                            A = e.decoratorId,
                            m = void 0 === A ? 0 : A,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Z);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, a.useMemo)(
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
                            v = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (J(t, m, { isMouseEvent: !0, on: !0, arguments: Q(r) }, p),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, m, r, p, C]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        J(t, m, { on: !1 }, p),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, m, p, g]),
                            y = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                          i && i(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == n || n(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === c && f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === c && f(), null == l || l(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    };
                let ue;
                !(function (e) {
                    ((e.NONE = 'none'),
                        (e.SHELL = 'shell'),
                        (e.ACCELERATION = 'acceleration'),
                        (e.TELEPORT = 'teleport'),
                        (e.SHIELD = 'shield'),
                        (e.BLACK_HOLE = 'black_hole'),
                        (e.OVERCHARGE = 'overcharge'),
                        (e.RAPID_SHELLING = 'rapid_shelling'),
                        (e.POWER_SHOT = 'power_shot'),
                        (e.WAVE = 'wave'),
                        (e.STUN_SHOT = 'stun_shot'),
                        (e.REPULSION_MINE = 'repulsion_mine'));
                })(ue || (ue = {}));
                const te = ue.NONE,
                    ae = ue.SHELL,
                    re = (ue.ACCELERATION, ue.SHIELD, ue.BLACK_HOLE, ue.OVERCHARGE),
                    ie = ue.RAPID_SHELLING,
                    ne = ue.POWER_SHOT,
                    le = ue.STUN_SHOT,
                    se = ue.TELEPORT;
                let oe, Ee;
                (!(function (e) {
                    ((e[(e.First = 1)] = 'First'), (e[(e.Second = 2)] = 'Second'));
                })(oe || (oe = {})),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(Ee || (Ee = {})));
                const _e = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ce = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ae = (e, u, t = Ee.left) => e.split(u).reduce(t === Ee.left ? _e : ce, []),
                    me = (() => {
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
                    de = ['zh_cn', 'zh_sg', 'zh_tw'];
                let Fe;
                var De;
                (((De = Fe || (Fe = {})).SHORT_DATE = 'short-date'),
                    (De.SHORT_TIME = 'short-time'),
                    (De.SHORT_DATE_TIME = 'short-date-time'),
                    (De.FULL_DATE = 'full-date'),
                    (De.FULL_DATE_TIME = 'full-date-time'),
                    (De.MONTH = 'month'),
                    (De.MONTH_DATE = 'month-date'),
                    (De.DATE_MONTH = 'date-month'),
                    (De.MONTH_YEAR = 'month-year'),
                    (De.WEEK_DAY = 'week-day'),
                    (De.WEEK_DAY_TIME = 'week-day-time'),
                    (De.YEAR = 'year'),
                    (De.DATE_YEAR = 'date-year'),
                    Date.now());
                const Be = (0, H.observer)(({ abilityIndex: e }) => {
                        const u = z().model.computes.getAbility(e),
                            t = null == u ? void 0 : u.reloadTime,
                            i = (null == u ? void 0 : u.reloadTimeLeft) || 0,
                            n = (0, a.useState)(i),
                            l = n[0],
                            s = n[1];
                        if (
                            ((0, a.useEffect)(() => {
                                s(Math.ceil(10 * i) / 10);
                                const e = Date.now(),
                                    u = setInterval(() => {
                                        const t = Date.now() - e,
                                            a = i - t / 1e3;
                                        return a <= 0 ? (clearInterval(u), s(0)) : s(Math.ceil(10 * a) / 10);
                                    }, 100);
                                return () => clearInterval(u);
                            }, [i]),
                            0 === l)
                        )
                            return null;
                        const o = l > 0 ? l : t;
                        return r().createElement('div', { className: O.ability_reloading }, o, 's');
                    }),
                    Ce = r().memo(
                        ({
                            isActive: e,
                            isTargeting: u,
                            keyBind: t,
                            reloadTime: i,
                            reloadTimeLeft: n,
                            ability: l,
                            abilityIndex: s,
                            vehicleOverturned: o,
                        }) => {
                            const E = 0 === n,
                                _ = (0, a.useRef)(O.chargeUp),
                                c = (l === ae || l === ie) && o;
                            E || (_.current = _.current === O.chargeUp ? O.chargeUp2 : O.chargeUp);
                            const A = _.current,
                                m =
                                    l === se
                                        ? { height: '100%', animationDuration: '0s' }
                                        : E
                                          ? {}
                                          : { animation: A + ' ' + i + 's linear', animationDelay: -(i - n) + 's' };
                            return r().createElement(
                                ee,
                                {
                                    contentId: R.views.cosmic_event.battle.cosmic_hud.tooltips.AbilityTooltip('resId'),
                                    args: { ability: l },
                                    isEnabled: l !== te,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            O.ability,
                                            O[`ability__${l}`],
                                            (e || u) && O.ability__active,
                                            c && O.ability__disabled,
                                            E && O.ability__ready,
                                        ),
                                    },
                                    l !== ae && r().createElement(Be, { abilityIndex: s }),
                                    r().createElement('div', { className: O.ability_effect }),
                                    l === se &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: O.teleport_border }),
                                            r().createElement('div', { className: O.teleport_effect }),
                                        ),
                                    r().createElement('div', { className: O.ability_keyBind }, t),
                                    r().createElement('div', { className: O.ability_icon }),
                                    r().createElement('div', { className: O.ability_border }),
                                    r().createElement(
                                        'div',
                                        { className: O.ability_reloadMask, style: m },
                                        r().createElement('div', { className: O.ability_reloadMask_background }),
                                        r().createElement('div', { className: O.ability_reloadMask_icon }),
                                        r().createElement('div', { className: O.ability_reloadMask_border }),
                                    ),
                                    r().createElement('div', { className: O.ability_overlay }),
                                    r().createElement('div', { className: O.ability_disabledOverlay }),
                                ),
                            );
                        },
                    );
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
                const he = (0, H.observer)(({ abilityIndex: e, AbilitySlotComponent: u = Ce }) => {
                        const t = z().model,
                            a = t.computes.getAbility(e),
                            i = t.root.get().vehicleOverturned;
                        return void 0 !== a && null != a && a.ability
                            ? r().createElement(
                                  u,
                                  ge({}, a, { ability: a.ability, abilityIndex: e, vehicleOverturned: i }),
                              )
                            : null;
                    }),
                    be = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: C()(O.base, e) },
                            r().createElement(he, { abilityIndex: 0 }),
                            r().createElement(he, { abilityIndex: 1 }),
                            r().createElement(he, { abilityIndex: 2 }),
                            r().createElement(he, { abilityIndex: 3 }),
                        );
                let pe, ve, fe;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.AwaitingPlayers = 'awaiting_players'),
                        (e.Custom = 'custom'),
                        (e.PreBattle = 'pre_battle'),
                        (e.StartBattle = 'start_battle'),
                        (e.Pickups = 'pickups'),
                        (e.Respawn = 'respawn'),
                        (e.PrepareToScan = 'prepare_to_scan'),
                        (e.ScanAvailable = 'scan_available'),
                        (e.PrepareToScanFinal = 'prepare_to_scan_final'),
                        (e.FinalScanAvailable = 'final_scan_available'),
                        (e.Scanning = 'scanning'),
                        (e.MissionCompleted = 'mission_completed'),
                        (e.PrepareToLootPickup = 'prepare_to_loot_pickup'));
                })(pe || (pe = {})),
                    (function (e) {
                        ((e.PreBattle = 'pre_battle'), (e.Phase1 = 'phase_1'), (e.Phase2 = 'phase_2'));
                    })(ve || (ve = {})),
                    (function (e) {
                        ((e.Coral = 'coral'), (e.Artifact_Zone = 'artifactZone'));
                    })(fe || (fe = {})));
                const ye = 'ProgressionBar_progressBar_text_73',
                    Se = () =>
                        r().createElement(
                            'div',
                            {
                                className: 'ProgressionBar_base_00',
                                'data-bind-class-toggle': `ProgressionBar_base__show_4b: {{progression.value.totalTime}} > 0;ProgressionBar_base__coral_65: {{progression.value.barType}} === "${fe.Coral}"`,
                                'data-bind-for': 'index, progression: {{model.progressBars}}',
                            },
                            r().createElement(
                                'div',
                                { className: 'ProgressionBar_progressBar_68' },
                                r().createElement('div', {
                                    className: 'ProgressionBar_progressBar_progress_ae',
                                    'data-bind-style-width':
                                        "0+Math.floor({{progression.value.totalTime}} > 0 && {{progression.value.timeLeft}}/{{progression.value.totalTime}}*100)+'%'",
                                }),
                                r().createElement(
                                    'div',
                                    {
                                        className: ye,
                                        'data-bind-if': `{{progression.value.barType}} === "${fe.Artifact_Zone}"`,
                                    },
                                    R.strings.cosmicEvent.battle.announcement.scanning.time_left(),
                                    r().createElement('span', {
                                        'data-bind-value':
                                            "String(Math.floor({{progression.value.timeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{progression.value.timeLeft}}%60)).padStart(2, '0')",
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: ye,
                                        'data-bind-if': `{{progression.value.barType}} === "${fe.Coral}"`,
                                    },
                                    R.strings.cosmicEvent.battle.announcement.lootScanning.time_left(),
                                    r().createElement('span', {
                                        'data-bind-value':
                                            "String(Math.floor({{progression.value.timeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{progression.value.timeLeft}}%60)).padStart(2, '0')",
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: 'ProgressionBar_label_f8',
                                    'data-bind-if': `{{progression.value.barType}} === "${fe.Artifact_Zone}"`,
                                },
                                R.strings.cosmicEvent.battle.announcement.scanning.players_scanning(),
                                r().createElement('span', { 'data-bind-value': '{{progression.value.activePlayers}}' }),
                            ),
                        );
                var we = t(9887),
                    xe = t.n(we);
                const Me = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Le = (e) => e.includes('_') && ((e) => Me.includes(e))(e.split('_').at(-1)),
                    ke = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    Te = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Le(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const i = ke.indexOf(u),
                                    n = (-1 !== i ? Me.slice(i) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = n ? e[n] : void 0;
                                return ((t[r] = void 0 !== l ? l : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => Me.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    Ne = (e, u = Te) => {
                        const t = (
                            (e, u = Te) =>
                            (t) => {
                                const i = f().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, i), [t, i]);
                                return r().createElement(e, n);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => Le(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    Pe = {
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
                    Re = [
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
                Object.keys(xe());
                const He = {
                        XL: { mt: Pe.mt__XL, mr: Pe.mr__XL, mb: Pe.mb__XL, ml: Pe.ml__XL },
                        LG: { mt: Pe.mt__LG, mr: Pe.mr__LG, mb: Pe.mb__LG, ml: Pe.ml__LG },
                        MDp: { mt: Pe.mt__MDp, mr: Pe.mr__MDp, mb: Pe.mb__MDp, ml: Pe.ml__MDp },
                        MD: { mt: Pe.mt__MD, mr: Pe.mr__MD, mb: Pe.mb__MD, ml: Pe.ml__MD },
                        SMp: { mt: Pe.mt__SMp, mr: Pe.mr__SMp, mb: Pe.mb__SMp, ml: Pe.ml__SMp },
                        SM: { mt: Pe.mt__SM, mr: Pe.mr__SM, mb: Pe.mb__SM, ml: Pe.ml__SM },
                        XS: { mt: Pe.mt__XS, mr: Pe.mr__XS, mb: Pe.mb__XS, ml: Pe.ml__XS },
                    },
                    Ie = (Object.keys(He), ['mt', 'mr', 'mb', 'ml']),
                    We = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Ue = Ne((e) => {
                        let u = e.className,
                            t = e.width,
                            i = e.height,
                            n = e.m,
                            l = e.mt,
                            s = void 0 === l ? n : l,
                            o = e.mr,
                            E = void 0 === o ? n : o,
                            _ = e.mb,
                            c = void 0 === _ ? n : _,
                            A = e.ml,
                            m = void 0 === A ? n : A,
                            d = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (d ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            h = e.center,
                            b = e.flexEnd,
                            p = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            y =
                                void 0 === f
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (b && 'flex-end') ||
                                      (p && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            w = void 0 === S ? (g ? 'flex-start' : h && 'center') || (b && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            M = e.wrap,
                            L = e.flexWrap,
                            k = void 0 === L ? (M ? 'wrap' : void 0) : L,
                            T = e.grow,
                            N = e.shrink,
                            P = e.flex,
                            R = void 0 === P ? (T || N ? `${T ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : P,
                            O = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Re);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: E, mb: c, ml: m },
                                    u = ((e) =>
                                        Ie.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(He[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        Ie.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[We[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== i && 'number' == typeof i ? i + 'rem' : i,
                                        flex: R,
                                        alignSelf: x,
                                        display: B || w ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: k,
                                        justifyContent: y,
                                        alignItems: w,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, i, s, E, c, m, O, R, x, B, k, y, w]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return r().createElement('div', Oe({ className: C()(Pe.base, ...G, u), style: U }, I), H);
                    }),
                    Ge = ({ binding: e, text: u = '', classMix: t, alignment: i = Ee.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      r().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Ee.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return de.includes(t)
                                                                ? me(e)
                                                                : ((e, u = Ee.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ae(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Ae(e, a, Ee.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, i, e).map((e, u) =>
                                              r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var je = t(3532),
                    Ve = t.n(je);
                const $e = {
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
                    Xe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                Object.keys(xe());
                const qe = Object.keys(Ve()),
                    ze = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ye = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ze = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qe =
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
                            'heading-H56': ze,
                            'heading-H36': ze,
                            'heading-H28': Ye,
                            'heading-H24': Ye,
                            'heading-H24R': Ye,
                            'heading-H22': Ye,
                            'heading-H20R': Ye,
                            'heading-H18': Ye,
                            'heading-H15': Ze,
                            'heading-H14': Ze,
                            'paragraph-P24': Ye,
                            'paragraph-P18': Ye,
                            'paragraph-P16': Ye,
                            'paragraph-P14': Ze,
                            'paragraph-P12': Ze,
                            'paragraph-P10': Ze,
                        }),
                    Je =
                        (Object.keys(Qe),
                        (e) =>
                            e
                                ? ((e) => qe.includes(e))(e)
                                    ? { colorClassName: $e[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    eu = Ne((e) => {
                        let u = e.text,
                            t = e.variant,
                            i = e.className,
                            n = e.color,
                            l = e.m,
                            s = e.mt,
                            o = void 0 === s ? l : s,
                            E = e.mr,
                            _ = void 0 === E ? l : E,
                            c = e.mb,
                            A = void 0 === c ? l : c,
                            m = e.ml,
                            d = void 0 === m ? l : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Xe);
                        const g = (0, a.useMemo)(() => {
                                const e = Je(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, n]),
                            h = g.computedStyle,
                            b = g.colorClassName;
                        return r().createElement(
                            Ue,
                            Ke(
                                {
                                    className: C()($e.base, t && $e[t], b, i),
                                    style: h,
                                    mt: !0 === o ? Qe[t || 'paragraph-P16'].mt : o,
                                    mr: !0 === _ ? Qe[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === A ? Qe[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === d ? Qe[t || 'paragraph-P16'].ml : d,
                                },
                                B,
                            ),
                            void 0 !== D ? r().createElement(Ge, Ke({}, D, { text: u })) : u,
                        );
                    }),
                    uu = (0, H.observer)(() => {
                        const e = z().model.computes.getAbility(3);
                        if (void 0 === e || (e.ability !== se && e.ability !== re)) return null;
                        const u = C()(
                            'AbilityHint_base_3e',
                            e.isActive && 'AbilityHint_base__visible_a9',
                            e.ability === se && 'AbilityHint_base__animation_delay_23',
                        );
                        return r().createElement(
                            'div',
                            { className: u },
                            r().createElement(eu, {
                                className: 'AbilityHint_text_48',
                                text: R.strings.cosmicEvent.battle.abilityHint.$dyn(e.ability),
                                format: {
                                    binding: {
                                        seconds: r().createElement('span', {
                                            className: 'AbilityHint_seconds_41',
                                            'data-bind-value': '{{model.abilityDuration}}',
                                        }),
                                    },
                                },
                            }),
                        );
                    }),
                    tu = 'Announcement_announcement_7c',
                    au = 'Announcement_announcement_countdown_decoration_9c',
                    ru = 'Announcement_announcement_title_60',
                    iu = 'Announcement_announcement_subtitle_81',
                    nu = R.strings.cosmicEvent.battle.announcement,
                    lu = r().memo(() =>
                        r().createElement(
                            'div',
                            {
                                className: 'Announcement_base_93',
                                'data-bind-class-toggle': `Announcement_base__show_cf: {{model.announcementType}} !== "${pe.None}"`,
                            },
                            r().createElement(Se, null),
                            r().createElement(
                                'div',
                                { className: tu, 'data-bind-if': `{{model.announcementType}} === "${pe.Custom}"` },
                                r().createElement('div', {
                                    className: ru,
                                    'data-bind-value': '{{model.announcementCustomTitle}}',
                                    'data-bind-if': "{{model.announcementCustomTitle}} !== ''",
                                }),
                                r().createElement('div', {
                                    className: iu,
                                    'data-bind-value': '{{model.announcementCustomSubtitle}}',
                                    'data-bind-if': "{{model.announcementCustomSubtitle}} !== ''",
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: tu,
                                    'data-bind-if': `{{model.announcementType}} === "${pe.AwaitingPlayers}"`,
                                },
                                r().createElement('div', { className: ru }, nu.awaiting_players.title()),
                            ),
                            r().createElement(
                                'div',
                                { className: tu, 'data-bind-if': `{{model.announcementType}} === "${pe.PreBattle}"` },
                                r().createElement('div', { className: ru }, nu.pre_battle.title()),
                            ),
                            r().createElement(
                                'div',
                                { className: tu, 'data-bind-if': `{{model.announcementType}} === "${pe.StartBattle}"` },
                                r().createElement('div', { className: ru }, nu.start_battle.title()),
                                r().createElement('div', { className: iu }, nu.start_battle.subtitle()),
                            ),
                            r().createElement(
                                'div',
                                { className: tu, 'data-bind-if': `{{model.announcementType}} === "${pe.Pickups}"` },
                                r().createElement('div', { className: ru }, nu.pickups.title()),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: tu,
                                    'data-bind-if': `{{model.announcementType}} === "${pe.PrepareToLootPickup}"`,
                                },
                                r().createElement('div', { className: ru }, nu.prepare_to_loot_pickup.title()),
                            ),
                            r().createElement(
                                'div',
                                { className: tu, 'data-bind-if': `{{model.announcementType}} === "${pe.Respawn}"` },
                                r().createElement('div', { className: ru }, nu.respawn.title()),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: tu,
                                    'data-bind-if': `{{model.announcementType}} === "${pe.PrepareToScan}"`,
                                },
                                r().createElement('div', { className: ru }, nu.prepare_to_scan.title()),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: tu,
                                    'data-bind-if': `{{model.announcementType}} === "${pe.PrepareToScanFinal}"`,
                                },
                                r().createElement('div', { className: ru }, nu.prepare_to_scan_final.title()),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: tu,
                                    'data-bind-if': `{{model.announcementType}} === "${pe.MissionCompleted}"`,
                                },
                                r().createElement('div', { className: ru }, nu.mission_completed.title()),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: 'Announcement_announcement_countdown_ef',
                                    'data-bind-if': '{{model.announcementSecondsToEvent}} > 0',
                                },
                                r().createElement('div', {
                                    className: C()(au, 'Announcement_announcement_countdown_decoration__left_21'),
                                }),
                                r().createElement('div', {
                                    'data-bind-value': '{{model.announcementSecondsToEvent}}',
                                    className: 'Announcement_announcement_countdown_value_fe',
                                }),
                                r().createElement('div', {
                                    className: C()(au, 'Announcement_announcement_countdown_decoration__right_19'),
                                }),
                            ),
                            r().createElement(uu, null),
                        ),
                    ),
                    su = () =>
                        r().createElement(
                            'div',
                            {
                                className: 'ArenaTimer_base_4c',
                                'data-bind-if': '{{model.arenaTimeLeft}} >= 0',
                                'data-bind-class-toggle': `ArenaTimer_base__phase1_b7: {{model.arenaPhase}} === "${ve.Phase1}";ArenaTimer_base__phase2_0b: {{model.arenaPhase}} === "${ve.Phase2}"`,
                            },
                            r().createElement('div', {
                                className: 'ArenaTimer_value_6a',
                                'data-bind-value':
                                    "String(Math.floor({{model.arenaTimeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{model.arenaTimeLeft}}%60)).padStart(2, '0')",
                            }),
                        ),
                    ou = 'InfoPlate_command_11',
                    Eu = 'InfoPlate_command_border_54',
                    _u = 'InfoPlate_relative_container_83',
                    cu = (0, H.observer)(({ className: e }) => {
                        const u = z().model.root.get().isRespawning;
                        return r().createElement(
                            'div',
                            { className: C()('InfoPlate_base_b3', e, !u && 'InfoPlate_notDisplayed_6b') },
                            r().createElement(Ge, {
                                text: R.strings.cosmicEvent.battle.announcement.infoPlate.title(),
                                classMix: 'InfoPlate_base_text_15',
                                binding: {
                                    command: r().createElement(
                                        'span',
                                        { className: _u },
                                        r().createElement(
                                            'div',
                                            { className: C()(Eu, 'InfoPlate_scaling_container_4f') },
                                            r().createElement(
                                                'div',
                                                { className: ou },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: C()(Eu, _u) },
                                            r().createElement(
                                                'div',
                                                { className: ou },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    });
                let Au;
                !(function (e) {
                    ((e.Scan = 'scan'),
                        (e.Research = 'research'),
                        (e.Kill = 'kill'),
                        (e.Pickup = 'pickup'),
                        (e.Ram = 'ram'),
                        (e.Shot = 'shot'),
                        (e.AbilityHit = 'abilityHit'),
                        (e.Assist = 'assist'),
                        (e.FirstBlood = 'firstBlood'),
                        (e.KillStreak = 'killStreak'),
                        (e.LootResearching = 'lootResearching'),
                        (e.LootResearchingDone = 'lootResearchingDone'),
                        (e.LootResearchablePickUp = 'lootResearchablePickUp'));
                })(Au || (Au = {}));
                const mu = 'MessageLog_Message_dot_65';
                let du, Fu;
                (!(function (e) {
                    ((e.Waiting = 'Waiting'), (e.Displayed = 'Displayed'), (e.Hidden = 'Hidden'));
                })(du || (du = {})),
                    (function (e) {
                        ((e.Add = 'Add'), (e.Update = 'Update'));
                    })(Fu || (Fu = {})));
                const Du = { messages: [], isPolling: !1, scrollIndex: -4 },
                    Bu = [du.Displayed, du.Hidden],
                    Cu = (e) => {
                        const u =
                                e.messages.length -
                                1 -
                                [...e.messages].reverse().findIndex((e) => Bu.includes(e.state)),
                            t = -1 === u ? 0 : u;
                        return Object.assign({}, e, { scrollIndex: -5 + t + 1 });
                    },
                    gu = (e) => {
                        const u = Date.now();
                        let t = !1,
                            a = 0,
                            r = 0;
                        const i = e.messages.map((e) => {
                            if (e.state === du.Displayed)
                                return e.timeOfDisplay && u - e.timeOfDisplay > 2600
                                    ? Object.assign({}, e, { state: du.Hidden, timeOfLeave: u })
                                    : (a++, e);
                            if (e.state === du.Waiting) {
                                if (a < 4)
                                    return (
                                        a++,
                                        r++,
                                        Object.assign({}, e, {
                                            state: du.Displayed,
                                            timeOfDisplay: u,
                                            displayStaggerAmount: r - 1,
                                        })
                                    );
                                t = !0;
                            }
                            return e;
                        });
                        return Object.assign({}, e, { isPolling: t, messages: i });
                    },
                    hu = (e, u) =>
                        u.type === Fu.Add
                            ? Cu(
                                  gu(
                                      Object.assign({}, e, {
                                          messages: [
                                              ...e.messages,
                                              ...u.messages
                                                  .slice(e.messages.length)
                                                  .map((e) => Object.assign({}, e, { state: du.Waiting })),
                                          ],
                                      }),
                                  ),
                              )
                            : u.type === Fu.Update
                              ? Cu(gu(e))
                              : e;
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const pu = {
                        [du.Waiting]: 'MessageLog_Message__waiting_b9',
                        [du.Displayed]: 'MessageLog_Message__displayed_ff',
                        [du.Hidden]: 'MessageLog_Message__hidden_15',
                    },
                    vu = R.images.cosmic_event.gui.maps.icons.battle.messages.icons,
                    fu = R.strings.cosmicEvent.artefact.actionList,
                    yu = ({ type: e, state: u, marsPoints: t, displayStaggerAmount: a }) => {
                        const i = pu[u],
                            n =
                                u === du.Displayed && void 0 !== a
                                    ? { animationDelay: 200 + 50 * (null != a ? a : 0) + 'ms' }
                                    : void 0;
                        return r().createElement(
                            'div',
                            {
                                className: C()(
                                    'MessageLog_Message_b4',
                                    i,
                                    e === Au.Kill && 'MessageLog_Message__kill_9d',
                                    e === Au.KillStreak && 'MessageLog_Message__killStreak_50',
                                    e === Au.FirstBlood && 'MessageLog_Message__firstBlood_4a',
                                    e === Au.LootResearching && 'MessageLog_Message__lootResearching_ac',
                                    e === Au.LootResearchablePickUp && 'MessageLog_Message__lootResearchablePickUp_1d',
                                    e === Au.LootResearchingDone && 'MessageLog_Message__lootResearchingDone_fa',
                                ),
                                style: n,
                            },
                            r().createElement('div', { className: mu }),
                            r().createElement('div', { className: 'MessageLog_Message_marsPoints_8a' }, t),
                            r().createElement('img', { className: 'MessageLog_Message_icon_35', src: vu[e]() }),
                            r().createElement('div', { className: 'MessageLog_Message_type_14' }, fu[e]()),
                            r().createElement('div', { className: mu }),
                            r().createElement('div', { className: 'MessageLog_Message_effect_f5', style: n }),
                        );
                    },
                    Su = (0, H.observer)(({ className: e }) => {
                        const u = z().model.computes.getMessages,
                            t = (0, a.useReducer)(hu, Du),
                            i = t[0],
                            n = i.messages,
                            l = i.isPolling,
                            s = i.scrollIndex,
                            o = t[1],
                            E = u();
                        return (
                            (0, a.useEffect)(() => {
                                o({ type: Fu.Add, messages: E });
                            }, [E.length]),
                            (0, a.useEffect)(() => {
                                let e;
                                return (
                                    l &&
                                        (e = setInterval(() => {
                                            o({ type: Fu.Update });
                                        }, 100)),
                                    () => clearInterval(e)
                                );
                            }, [l]),
                            r().createElement(
                                'div',
                                { className: C()('MessageLog_base_2f', e), style: { height: '165rem' } },
                                r().createElement(
                                    'div',
                                    { className: 'MessageLog_messages_43', style: { bottom: 32 * -s + 5 + 'rem' } },
                                    n.map((e, u) => r().createElement(yu, bu({ key: u }, e))),
                                ),
                            )
                        );
                    }),
                    wu = {
                        base: 'PickupNotificationSlot_base_2e',
                        base__black_hole: 'PickupNotificationSlot_base__black_hole_6b',
                        base__rapid_shelling: 'PickupNotificationSlot_base__rapid_shelling_fb',
                        base__teleport: 'PickupNotificationSlot_base__teleport_14',
                        base__power_shot: 'PickupNotificationSlot_base__power_shot_41',
                        base__overcharge: 'PickupNotificationSlot_base__overcharge_a5',
                        blink: 'PickupNotificationSlot_blink_3c',
                        effect: 'PickupNotificationSlot_effect_e4',
                        flash: 'PickupNotificationSlot_flash_03',
                        icon: 'PickupNotificationSlot_icon_49',
                    },
                    xu = ({ ability: e }) =>
                        r().createElement(
                            'div',
                            { className: C()(wu.base, wu[`base__${e}`]) },
                            r().createElement('div', { className: wu.icon }),
                            r().createElement('div', { className: wu.effect }),
                        ),
                    Mu = (0, H.observer)(() => {
                        const e = z().model.computes.getAbility(3);
                        return void 0 === e || (null == e ? void 0 : e.ability) === te
                            ? null
                            : r().createElement(xu, { ability: e.ability });
                    }),
                    Lu = {
                        base: 'PlayerList_base_97',
                        players: 'PlayerList_players_e3',
                        corner: 'PlayerList_corner_a9',
                        corner__top_left: 'PlayerList_corner__top_left_cc',
                        corner__top_right: 'PlayerList_corner__top_right_c0',
                        corner__bottom_right: 'PlayerList_corner__bottom_right_38',
                        corner__bottom_left: 'PlayerList_corner__bottom_left_5a',
                        playerEntry: 'PlayerList_playerEntry_ac',
                        playerEntrySelected: 'PlayerList_playerEntrySelected_37',
                        playerRank: 'PlayerList_playerRank_66',
                        playerContainer: 'PlayerList_playerContainer_65',
                        playerVehicle: 'PlayerList_playerVehicle_1a',
                        playerVehicleNew: 'PlayerList_playerVehicleNew_e3',
                        playerName: 'PlayerList_playerName_a7',
                        playerClan: 'PlayerList_playerClan_d6',
                        playerScore: 'PlayerList_playerScore_d6',
                        lootResearching: 'PlayerList_lootResearching_9c',
                        playerList: 'PlayerList_playerList_c6',
                    },
                    ku = () =>
                        r().createElement(
                            'div',
                            { className: Lu.base },
                            r().createElement(
                                'div',
                                { className: Lu.players },
                                r().createElement(
                                    'div',
                                    {
                                        className: Lu.playerEntry,
                                        'data-bind-class-toggle':
                                            Lu.playerEntrySelected + ': {{player.value.name}} === model.playerName',
                                        'data-bind-for': 'index, player: {{model.playerList}}',
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: Lu.playerRank,
                                            'data-bind-class-toggle':
                                                Lu.playerRankSelected + ': {{player.value.name}} === model.playerName',
                                            'data-bind-value': '{{index}} + 1',
                                        },
                                        '1',
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Lu.playerContainer },
                                        r().createElement('div', {
                                            className: Lu.playerVehicle,
                                            'data-bind-class-toggle':
                                                Lu.playerVehicleNew + ': {{player.value.vehicle}} === 2',
                                        }),
                                        r().createElement('div', {
                                            className: Lu.playerName,
                                            'data-bind-value': '{{player.value.name}}',
                                        }),
                                        r().createElement('div', {
                                            className: Lu.playerClan,
                                            'data-bind-value':
                                                "{{player.value.clanAbbrev}} && ('[' + {{player.value.clanAbbrev}} +']')",
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Lu.playerScore, 'data-bind-value': '{{player.value.score}}' },
                                        '0',
                                    ),
                                    r().createElement('div', {
                                        className: Lu.lootResearching,
                                        'data-bind-if': '{{player.value.lootResearching}}',
                                    }),
                                ),
                            ),
                            r().createElement('div', { className: C()(Lu.corner, Lu.corner__top_left) }),
                            r().createElement('div', { className: C()(Lu.corner, Lu.corner__top_right) }),
                            r().createElement('div', { className: C()(Lu.corner, Lu.corner__bottom_left) }),
                            r().createElement('div', { className: C()(Lu.corner, Lu.corner__bottom_right) }),
                        );
                let Tu;
                !(function (e) {
                    ((e.Coral = 'coral'), (e.Artifact_Zone = 'artifactZone'));
                })(Tu || (Tu = {}));
                const Nu = ({ className: e }) => {
                        const u = 'Math.max(Math.min(1/{{marker.value.distance}}*100,1), 0.5)';
                        return r().createElement(
                            'div',
                            {
                                className: C()('PoiMarker_base_ee', e),
                                'data-bind-style-left': "parseFloat({{marker.value.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{marker.value.posy}})+'rem'",
                                'data-bind-class-toggle': `PoiMarker_base__onScreen_c5: {{marker.value.isVisible}};PoiMarker_base__visible_52: {{marker.value.markerVisibility}} && !{{model.isRespawning}};PoiMarker_base__tooClose_c6: {{marker.value.distance}} < 100;PoiMarker_base__coral_7c: {{marker.value.markerType}} === "${Tu.Coral}"`,
                                'data-bind-for': 'index, marker: {{model.poiMarkers}}',
                            },
                            r().createElement('div', {
                                className: 'PoiMarker_icon_1b',
                                'data-bind-style-transform2d': `${u}+', 0, 0,'+${u}+',0,0'`,
                            }),
                            r().createElement('div', {
                                className: 'PoiMarker_timer_14',
                                'data-bind-if': '{{marker.value.markerTimer}} > 0',
                                'data-bind-value':
                                    "String(Math.floor({{marker.value.markerTimer}}/60)).padStart(2, '0')+':'+String(Math.floor({{marker.value.markerTimer}}%60)).padStart(2, '0')",
                            }),
                            r().createElement('div', {
                                className: 'PoiMarker_direction_2b',
                                'data-bind-style-transform-rotate': 'Math.round({{marker.value.angle}})',
                            }),
                            r().createElement('div', {
                                className: 'PoiMarker_distance_f5',
                                'data-bind-if': '{{marker.value.markerTimer}} === 0',
                                'data-bind-value': `String({{marker.value.distance}})+"${R.strings.cosmicEvent.battle.distanceUnit()}"`,
                            }),
                        );
                    },
                    Pu = () =>
                        r().createElement(
                            'div',
                            { className: 'VehicleMarkers_base_62' },
                            r().createElement(
                                'div',
                                {
                                    className: 'VehicleMarkers_vehicleMarker_26',
                                    'data-bind-style-left': "{{marker.value.posx}}+'rem'",
                                    'data-bind-style-top': "{{marker.value.posy}}+'rem'",
                                    'data-bind-style-transform2d':
                                        "{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0,'+{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0'",
                                    'data-bind-for': 'index, marker: {{model.vehicleMarkers}}',
                                },
                                r().createElement(
                                    'div',
                                    { className: 'VehicleMarkers_wrapper_84' },
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'VehicleMarkers_lootContainer_ad',
                                            'data-bind-if': '{{marker.value.isLootResearching}}',
                                        },
                                        r().createElement('div', { className: 'VehicleMarkers_icon_2c' }),
                                        r().createElement('div', {
                                            className: 'VehicleMarkers_timer_7b',
                                            'data-bind-value':
                                                "String(Math.floor({{marker.value.lootTimer}}/60)).padStart(2, '0')+':'+String(Math.floor({{marker.value.lootTimer}}%60)).padStart(2, '0')",
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'VehicleMarkers_vehicleMarker_text_df',
                                            'data-bind-value': '{{marker.value.playerName}}',
                                            'data-bind-class-toggle':
                                                'VehicleMarkers_vehicleMarker__visible_17: {{marker.value.isVisible}};VehicleMarkers_vehicleMarker__lootResearching_88: {{marker.value.isLootResearching}};',
                                        },
                                        ' ',
                                    ),
                                ),
                            ),
                        ),
                    Ru = 'Crosshair_reloading_cb',
                    Ou = 'Crosshair_reloading_bar_9d',
                    Hu = 'Crosshair_reloading_effect_b8',
                    Iu = 'Crosshair_corner_66',
                    Wu = (0, H.observer)(() => {
                        const e = z().model,
                            u = e.reloadTimes.reloadTime.get(),
                            t = e.reloadTimes.reloadTimeLeft.get(),
                            i = (0, a.useState)(t),
                            n = i[0],
                            l = i[1],
                            s = 0 === t,
                            o = e.computes.getAbility(3),
                            E = e.computes.getAbility(2),
                            _ = null == o ? void 0 : o.isActive,
                            c = null == E ? void 0 : E.isActive,
                            A = e.selectedVehicleID,
                            m = Number(A) === oe.Second;
                        (0, a.useEffect)(() => {
                            l(t);
                            const e = Date.now(),
                                u = setInterval(() => {
                                    const a = Date.now() - e,
                                        r = t - a / 1e3;
                                    return r <= 0 ? (clearInterval(u), l(0)) : l(Math.ceil(10 * r) / 10);
                                }, 100);
                            return () => clearInterval(u);
                        }, [t]);
                        const d = (u - n) / u,
                            F = 10 * Math.floor(10 * d) + '%',
                            D = (n > 0 ? n : u).toFixed(1);
                        return r().createElement(
                            'div',
                            {
                                className: C()(
                                    s && 'Crosshair_reloading__ready_9d',
                                    m && 'Crosshair_reloading__second_6d',
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: C()(Ru, 'Crosshair_reloading__left_9d') },
                                r().createElement('div', { className: Ou, style: { height: F } }),
                                r().createElement('div', { className: Hu }),
                            ),
                            r().createElement(
                                'div',
                                { className: C()(Ru, 'Crosshair_reloading__right_d9') },
                                r().createElement('div', { className: Ou, style: { height: F } }),
                                r().createElement('div', { className: Hu }),
                            ),
                            m &&
                                r().createElement(
                                    'div',
                                    { className: C()(Ru, 'Crosshair_reloading__bottom_6a') },
                                    r().createElement('div', { className: Ou, style: { height: F } }),
                                    r().createElement('div', { className: Hu }),
                                ),
                            r().createElement(
                                'div',
                                {
                                    className: C()(
                                        'Crosshair_reloading_timeLeft_85',
                                        _ &&
                                            (null == o ? void 0 : o.ability) === ie &&
                                            'Crosshair_reloading_timeLeft__rapidShelling_4a',
                                        _ &&
                                            (null == o ? void 0 : o.ability) === ne &&
                                            'Crosshair_reloading_timeLeft__powerShot_9a',
                                        c &&
                                            (null == E ? void 0 : E.ability) === le &&
                                            'Crosshair_reloading_timeLeft__stunShot_a9',
                                    ),
                                },
                                D,
                            ),
                        );
                    }),
                    Uu = {
                        base: 'Aim_base_d6',
                        base__secondVehicle: 'Aim_base__secondVehicle_6f',
                        centralDot: 'Aim_centralDot_44',
                        base__ready: 'Aim_base__ready_38',
                        corner: 'Aim_corner_9c',
                        corner__top_left: 'Aim_corner__top_left_46',
                        corner__top_right: 'Aim_corner__top_right_37',
                        corner__top_center: 'Aim_corner__top_center_37',
                        corner__bottom_right: 'Aim_corner__bottom_right_a2',
                        corner__bottom_left: 'Aim_corner__bottom_left_d9',
                        killStreakHint: 'Aim_killStreakHint_1e',
                        killStreakHint_text: 'Aim_killStreakHint_text_b5',
                        killStreakHint_text__animStart: 'Aim_killStreakHint_text__animStart_9b',
                        killStreakHint_text__animEnd: 'Aim_killStreakHint_text__animEnd_04',
                        hideFrames: 'Aim_hideFrames_8e',
                        leftFrames: 'Aim_leftFrames_50',
                        killStreakHint_arrow: 'Aim_killStreakHint_arrow_23',
                        killStreakHint_arrow__right: 'Aim_killStreakHint_arrow__right_48',
                        killStreakHint_arrow__animStart: 'Aim_killStreakHint_arrow__animStart_22',
                        killStreakHint_arrow__animEnd: 'Aim_killStreakHint_arrow__animEnd_27',
                        killStreak: 'Aim_killStreak_ec',
                        killStreak_icon: 'Aim_killStreak_icon_f2',
                        killStreak_text: 'Aim_killStreak_text_37',
                        killStreak_text_anim: 'Aim_killStreak_text_anim_9a',
                        killStreak_text_anim__animStart: 'Aim_killStreak_text_anim__animStart_ca',
                        killStreak_text_anim__animEnd: 'Aim_killStreak_text_anim__animEnd_ec',
                    },
                    Gu = (0, H.observer)(({ className: e }) => {
                        const u = z().model,
                            t = u.computes,
                            i = Number(u.selectedVehicleID) === oe.First,
                            n = (0, a.useState)(0),
                            l = n[0],
                            s = n[1],
                            o = t.getKillStreak(),
                            E = (e) => C()(Uu[e], o !== l && Uu[`${e}__animStart`], o === l && Uu[`${e}__animEnd`]),
                            _ = E('killStreak_text_anim'),
                            c = E('killStreakHint_text'),
                            A = E('killStreakHint_arrow'),
                            m = C()(A, Uu.killStreakHint_arrow__right);
                        return (
                            (0, a.useEffect)(() => {
                                o >= 2 &&
                                    ((e) => {
                                        let u,
                                            t = null;
                                        t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null), (u = void s(o)));
                                            });
                                        });
                                    })();
                            }, [o]),
                            r().createElement(
                                'div',
                                {
                                    className: C()(Uu.base, !i && Uu.base__secondVehicle, e),
                                    'data-bind-style-left': '{{model.aim.posx}}',
                                    'data-bind-style-top': '{{model.aim.posy}}',
                                    'data-bind-class-toggle': Uu.base__ready + ': {{model.reloadTimeLeft}} === 0',
                                },
                                r().createElement('div', { className: Uu.centralDot }),
                                r().createElement(Wu, null),
                                i
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: C()(Uu.corner, Uu.corner__top_left) }),
                                          r().createElement('div', { className: C()(Uu.corner, Uu.corner__top_right) }),
                                      )
                                    : r().createElement('div', { className: C()(Uu.corner, Uu.corner__top_center) }),
                                r().createElement('div', { className: C()(Uu.corner, Uu.corner__bottom_left) }),
                                r().createElement('div', { className: C()(Uu.corner, Uu.corner__bottom_right) }),
                                o >= 2 &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(
                                            'div',
                                            { className: Uu.killStreakHint },
                                            r().createElement('div', { className: A }),
                                            r().createElement(Ge, {
                                                text: R.strings.cosmicEvent.battle.crosshair.killStreak(),
                                                classMix: c,
                                                binding: { count: o },
                                            }),
                                            r().createElement('div', { className: m }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: Uu.killStreak },
                                            r().createElement('div', { className: Uu.killStreak_icon }),
                                            r().createElement(
                                                'div',
                                                { className: Uu.killStreak_text },
                                                'x',
                                                r().createElement('div', { className: _ }, o),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    }),
                    ju = (0, H.observer)(({ className: e }) => {
                        const u = z().model.selectedVehicleID,
                            t = Number(u) === oe.First;
                        return r().createElement(
                            'div',
                            {
                                className: C()('Crosshair_base_64', !t && 'Crosshair_base__secondVehicle_b6', e),
                                'data-bind-style-left': "parseFloat({{model.crosshair.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{model.crosshair.posy}})+'rem'",
                            },
                            r().createElement('div', { className: 'Crosshair_centralDot_16' }),
                            t
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: C()(Iu, 'Crosshair_corner__top_left_86') }),
                                      r().createElement('div', {
                                          className: C()(Iu, 'Crosshair_corner__top_right_04'),
                                      }),
                                  )
                                : r().createElement('div', { className: C()(Iu, 'Crosshair_corner__top_center_31') }),
                            r().createElement('div', { className: C()(Iu, 'Crosshair_corner__bottom_left_e3') }),
                            r().createElement('div', { className: C()(Iu, 'Crosshair_corner__bottom_right_99') }),
                        );
                    });
                function Vu(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (a) => {
                        const r = a % t,
                            i = (r % u.columns) * e.width,
                            n = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / t)), x: i, y: n };
                    };
                }
                const $u = [
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
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Ku = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            i = e.getImageSource,
                            n = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            o = void 0 === s ? 33 : s,
                            E = e.initialFrameIndex,
                            _ = void 0 === E ? 0 : E,
                            c = e.lastFrameIndex,
                            A = void 0 === c ? n - 1 : c,
                            m = e.loop,
                            d = void 0 === m || m,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            B = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            g = e.poster,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, $u);
                        const b = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Yu(_, A, i),
                                                u = qu(_, A),
                                                a = window.setInterval(() => {
                                                    const r = u(),
                                                        i = e.get(r);
                                                    i
                                                        ? (null == l || l(r, i),
                                                          t(i),
                                                          r === A &&
                                                              (null == C || C(),
                                                              d || (null == B || B(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && g ? { path: g, x: 0, y: 0 } : i(_),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(zu(e, u));
                                            return (
                                                u.addEventListener('load', a),
                                                () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, i, _, A, d, l, C, B, g, D]),
                            r().createElement('canvas', Xu({}, h, { width: u, height: t, ref: b }))
                        );
                    }),
                    qu = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return ((t += 1), t > u && (t = e), a);
                        };
                    },
                    zu = (e, u) => Object.assign({}, e, { img: u }),
                    Yu = (e, u, t) => {
                        const a = new Map(),
                            r = {};
                        for (let i = e; i <= u; i++) {
                            const e = t(i),
                                u = r[e.path];
                            if (u) a.set(i, zu(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(i, zu(e, u)));
                            }
                        }
                        return a;
                    },
                    Zu = {
                        width: 240,
                        height: 240,
                        frameCount: 72,
                        chunk: { count: 3, columns: 6, rows: 4 },
                        getChunkPath:
                            ('R.images.cosmic_event.gui.maps.icons.battle.sequence.sprite_',
                            (e) => `R.images.cosmic_event.gui.maps.icons.battle.sequence.sprite_${e}`),
                    };
                const Qu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            {
                                className: C()('LootWidget_base_8d', e),
                                'data-bind-class-toggle':
                                    'LootWidget_base__visible_d1: {{model.superLootScanning.isVisible}}',
                            },
                            r().createElement(Ku, {
                                width: Zu.width,
                                height: Zu.height,
                                frameCount: Zu.frameCount,
                                getImageSource: Vu(Zu),
                                frameTime: 50,
                                className: 'LootWidget_lootSequence_0a',
                            }),
                            r().createElement('div', {
                                className: 'LootWidget_timer_39',
                                'data-bind-value':
                                    "String(Math.floor({{model.superLootScanning.timeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{model.superLootScanning.timeLeft}}%60)).padStart(2, '0')",
                            }),
                        ),
                    Ju = 'CosmicReactHudApp_hideWhenRespawning_7f',
                    et = 'CosmicReactHudApp_hideWhenTargeting_45',
                    ut = () =>
                        r().createElement(
                            'div',
                            {
                                className: 'CosmicReactHudApp_base_c3',
                                'data-bind-class-toggle':
                                    'CosmicReactHudApp_base__respawning_50: {{model.isRespawning}} === true;CosmicReactHudApp_base__targeting_03: {{model.isTargeting}} === true;',
                            },
                            r().createElement(Nu, { className: Ju }),
                            r().createElement(Gu, { className: C()(Ju, et) }),
                            r().createElement(Pu, null),
                            r().createElement(ju, { className: C()(Ju, et) }),
                            r().createElement(ku, null),
                            r().createElement(su, null),
                            r().createElement(lu, null),
                            r().createElement(Su, null),
                            r().createElement(Mu, null),
                            r().createElement(be, { className: Ju }),
                            r().createElement(cu, null),
                            r().createElement(Qu, null),
                        );
                engine.whenReady.then(() => {
                    (document.documentElement.setAttribute('keep-esc-propagation', ''),
                        P().render(
                            r().createElement(T, null, r().createElement(q, null, r().createElement(ut, null))),
                            document.getElementById('root'),
                        ));
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
                    for (var [u, t, a] = deferred[s], i = !0, n = 0; n < u.length; n++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[n]))
                            ? u.splice(n--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(s--, 1);
                        var l = t();
                        void 0 !== l && (e = l);
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
        (() => {
            var e = { 775: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [i, n, l] = t,
                        s = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (u && u(t); s < i.length; s++)
                        ((r = i[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6576));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
