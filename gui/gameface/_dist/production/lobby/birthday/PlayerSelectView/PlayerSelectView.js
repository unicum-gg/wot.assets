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
                (t.r(u), t.d(u, { mouse: () => s, onResize: () => n }));
                var r = t(2472),
                    a = t(1176);
                const n = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function r() {
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
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const n = `mouse${u}`,
                                            s = o[u]((e) => t([e, 'outside']));
                                        function l(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, l),
                                            r(),
                                            () => {
                                                a &&
                                                    (s(),
                                                    window.removeEventListener(n, l),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (a = !1));
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
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
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
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    }));
                var r = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
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
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(5959);
                const a = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => i,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    a = t(6112),
                    n = t(6538),
                    o = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function i(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
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
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                const r = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((a = n),
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
                    n = {
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
                let r, a;
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
                t.d(u, { Z: () => n });
                var r = t(3138);
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
                        const n = r.O.view.addModelObserver(e, t, a);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
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
                t.d(u, { B0: () => l, ry: () => B });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                var i;
                (((i = l || (l = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, r, a, n, o) {
                    try {
                        var s = e[n](o),
                            l = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(l) : Promise.resolve(l).then(r, a);
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
                                    return new Promise(function (r, a) {
                                        var n = e.apply(u, t);
                                        function o(e) {
                                            D(n, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(n, r, a, o, s, 'throw', e);
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
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    p = () => g(l.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => g(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, a = R.invalid('resId'), n) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                i = s.x,
                                c = s.y,
                                E = s.width,
                                _ = s.height,
                                m = {
                                    x: A.O.view.pxToRem(i) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(_),
                                };
                            g(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: C(m),
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const a = Object.prototype.toString.call(u[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < a.length; u++) t[r].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            2333: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => tt,
                        Bar: () => Ju,
                        DefaultScroll: () => ut,
                        Direction: () => Uu,
                        defaultSettings: () => ju,
                        useHorizontalScrollApi: () => Vu,
                    }));
                var a = {};
                (t.r(a), t.d(a, { Area: () => dt, Bar: () => Et, Default: () => mt, useVerticalScrollApi: () => rt }));
                var n = t(6179),
                    o = t.n(n);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var l = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const r = (function (e, u) {
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
                const _ = l.O.client.getSize('rem'),
                    m = _.width,
                    d = _.height,
                    A = Object.assign({ width: m, height: d }, E(m, d, i)),
                    F = (0, n.createContext)(A),
                    D = ['children'],
                    C = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, D);
                        const r = (0, n.useContext)(F),
                            a = r.extraLarge,
                            o = r.large,
                            l = r.medium,
                            i = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            d = r.smallWidth,
                            A = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            B = r.largeHeight,
                            g = r.mediumHeight,
                            p = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && o) return u;
                            if (t.medium && l) return u;
                            if (t.small && i) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return s(u, t, b);
                            if (t.largeWidth && _) return s(u, t, b);
                            if (t.mediumWidth && m) return s(u, t, b);
                            if (t.smallWidth && d) return s(u, t, b);
                            if (t.extraSmallWidth && A) return s(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((C.defaultProps = {
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
                    (0, n.memo)(C));
                const B = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(F),
                        t = (0, n.useState)(u),
                        r = t[0],
                        a = t[1],
                        s = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: r }, E(t, r, i)));
                        }, []);
                    (((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(F.Provider, { value: c }, e);
                });
                var g = t(6483),
                    p = t.n(g),
                    h = t(926),
                    b = t.n(h);
                let f, v, y;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(y || (y = {})));
                const x = () => {
                        const e = (0, n.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [y.ExtraSmall]: '',
                        [y.Small]: b().SMALL_HEIGHT,
                        [y.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [y.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, w);
                        const a = x(),
                            n = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return o().createElement('div', S({ className: p()(t, M[n], T[s], L[l]) }, r), u);
                    },
                    P = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, P);
                        return o().createElement(B, null, o().createElement(N, t, u));
                    };
                var k = t(493),
                    H = t.n(k);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    z = o().memo,
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
                            r = e.onClick,
                            a = e.onMouseEnter,
                            n = e.onMouseLeave,
                            s = e.className,
                            l = e.classNames,
                            i = e.sounds,
                            c = void 0 === i ? U : i,
                            E = (u) => () => {
                                j(u, e) && (c.click && I(c.click), null == r || r(u));
                            },
                            _ = (u) => () => {
                                j(u, e) && (c.mouseEnter && I(c.mouseEnter), null == a || a(u));
                            },
                            m = (u) => () => {
                                j(u, e) && (c.mouseLeave && I(c.mouseLeave), null == n || n(u));
                            };
                        return o().createElement(
                            'div',
                            { className: p()(G.base, s) },
                            t.map(({ id: r, title: a, notification: n }, s) => {
                                var i;
                                return o().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            G.tab,
                                            r === u && p()(G.tab__active, null == l ? void 0 : l.activeTab),
                                            !j(r, e) && G.tab__nonInteractive,
                                            null == l ? void 0 : l.tab,
                                        ),
                                        key: r,
                                        onClick: E(r),
                                        onMouseEnter: _(r),
                                        onMouseLeave: m(r),
                                    },
                                    ((e, u) => !((e, u) => e.length - 1 === u)(e, u))(t, s) &&
                                        o().createElement('div', {
                                            className: p()(G.divider, null == l ? void 0 : l.divider),
                                        }),
                                    o().createElement(
                                        'div',
                                        { className: p()(G.state, null == l ? void 0 : l.state) },
                                        o().createElement('div', {
                                            className: p()(G.highlight, null == l ? void 0 : l.highlight),
                                        }),
                                        o().createElement('div', {
                                            className: p()(
                                                G.border,
                                                G.border__left,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderLeft,
                                            ),
                                        }),
                                        o().createElement('div', {
                                            className: p()(
                                                G.border,
                                                G.border__right,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderRight,
                                            ),
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: p()(G.title, null == l ? void 0 : l.title) },
                                        a,
                                    ),
                                    void 0 !== n &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    G.notification,
                                                    G[`notification__${n.type}`],
                                                    G[`notification__${null != (i = n.size) ? i : 'medium'}`],
                                                    null == l ? void 0 : l.notification,
                                                ),
                                            },
                                            'dot' !== n.type && n.value,
                                        ),
                                );
                            }),
                        );
                    });
                var V = t(9887),
                    X = t.n(V);
                const K = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Y = (e) => e.includes('_') && ((e) => K.includes(e))(e.split('_').at(-1)),
                    q = [f.ExtraLarge, f.Large, f.Medium, f.Small, f.ExtraSmall],
                    Z = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (Y(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = q.indexOf(u),
                                    o = (-1 !== n ? K.slice(n) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return ((t[a] = void 0 !== s ? s : e[a]), t);
                            }
                            const a = e[r];
                            return (
                                void 0 === a ||
                                    ((e, u) => K.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    Q = (e, u = Z) => {
                        const t = (
                            (e, u = Z) =>
                            (t) => {
                                const r = x().mediaSize,
                                    a = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, a);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => Y(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    J = {
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
                    ee = [
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
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                Object.keys(X());
                const te = {
                        XL: { mt: J.mt__XL, mr: J.mr__XL, mb: J.mb__XL, ml: J.ml__XL },
                        LG: { mt: J.mt__LG, mr: J.mr__LG, mb: J.mb__LG, ml: J.ml__LG },
                        MDp: { mt: J.mt__MDp, mr: J.mr__MDp, mb: J.mb__MDp, ml: J.ml__MDp },
                        MD: { mt: J.mt__MD, mr: J.mr__MD, mb: J.mb__MD, ml: J.ml__MD },
                        SMp: { mt: J.mt__SMp, mr: J.mr__SMp, mb: J.mb__SMp, ml: J.ml__SMp },
                        SM: { mt: J.mt__SM, mr: J.mr__SM, mb: J.mb__SM, ml: J.ml__SM },
                        XS: { mt: J.mt__XS, mr: J.mr__XS, mb: J.mb__XS, ml: J.ml__XS },
                    },
                    re = (Object.keys(te), ['mt', 'mr', 'mb', 'ml']),
                    ae = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ne = Q((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            s = e.mt,
                            l = void 0 === s ? a : s,
                            i = e.mr,
                            c = void 0 === i ? a : i,
                            E = e.mb,
                            _ = void 0 === E ? a : E,
                            m = e.ml,
                            d = void 0 === m ? a : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            B = e.flexStart,
                            g = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            y =
                                void 0 === v
                                    ? (B ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            x = e.alignItems,
                            w = void 0 === x ? (B ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : x,
                            S = e.alignSelf,
                            M = e.wrap,
                            T = e.flexWrap,
                            L = void 0 === T ? (M ? 'wrap' : void 0) : T,
                            N = e.grow,
                            P = e.shrink,
                            O = e.flex,
                            R = void 0 === O ? (N || P ? `${N ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : O,
                            k = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ee);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        re.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(te[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        re.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[ae[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: S,
                                        display: C || w ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: y,
                                        alignItems: w,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, l, c, _, d, k, R, S, C, L, y, w]),
                            z = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', ue({ className: p()(J.base, ...G, u), style: z }, I), H);
                    });
                let oe;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(oe || (oe = {}));
                const se = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    le = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ie = (e, u, t = oe.left) => e.split(u).reduce(t === oe.left ? se : le, []),
                    ce = (() => {
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
                    Ee = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _e = ({ binding: e, text: u = '', classMix: t, alignment: r = oe.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      o().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${u}-${a}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = oe.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Ee.includes(t)
                                                                ? ce(e)
                                                                : ((e, u = oe.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ie(a, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(ie(e, r, oe.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              o().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var me = t(3532),
                    de = t.n(me);
                const Ae = {
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
                    Fe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                Object.keys(X());
                const Ce = Object.keys(de()),
                    Be = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ge = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    pe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    he =
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
                            'heading-H56': Be,
                            'heading-H36': Be,
                            'heading-H28': ge,
                            'heading-H24': ge,
                            'heading-H24R': ge,
                            'heading-H22': ge,
                            'heading-H20R': ge,
                            'heading-H18': ge,
                            'heading-H15': pe,
                            'heading-H14': pe,
                            'paragraph-P24': ge,
                            'paragraph-P18': ge,
                            'paragraph-P16': ge,
                            'paragraph-P14': pe,
                            'paragraph-P12': pe,
                            'paragraph-P10': pe,
                        }),
                    be =
                        (Object.keys(he),
                        (e) =>
                            e
                                ? ((e) => Ce.includes(e))(e)
                                    ? { colorClassName: Ae[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    fe = Q((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            a = e.color,
                            s = e.m,
                            l = e.mt,
                            i = void 0 === l ? s : l,
                            c = e.mr,
                            E = void 0 === c ? s : c,
                            _ = e.mb,
                            m = void 0 === _ ? s : _,
                            d = e.ml,
                            A = void 0 === d ? s : d,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Fe);
                        const B = (0, n.useMemo)(() => {
                                const e = be(a),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, a]),
                            g = B.computedStyle,
                            h = B.colorClassName;
                        return o().createElement(
                            ne,
                            De(
                                {
                                    className: p()(Ae.base, t && Ae[t], h, r),
                                    style: g,
                                    mt: !0 === i ? he[t || 'paragraph-P16'].mt : i,
                                    mr: !0 === E ? he[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? he[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? he[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? o().createElement(_e, De({}, D, { text: u })) : u,
                        );
                    }),
                    ve = {
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
                    ye = [
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
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                class we extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick));
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
                            r = e.goto,
                            a = e.side,
                            n = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            i = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, ye)),
                            m = p()(ve.base, ve[`base__${n}`], ve[`base__${a}`], null == s ? void 0 : s.base),
                            d = p()(ve.icon, ve[`icon__${n}`], ve[`icon__${a}`], null == s ? void 0 : s.icon),
                            A = p()(ve.glow, null == s ? void 0 : s.glow),
                            F = p()(ve.caption, ve[`caption__${n}`], null == s ? void 0 : s.caption),
                            D = p()(ve.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            xe(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(i),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== n && o().createElement('div', { className: ve.shine }),
                            o().createElement('div', { className: d }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: F }, u),
                            r && o().createElement('div', { className: D }, r),
                        );
                    }
                }
                we.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Se = t(5521),
                    Me = t(4179);
                const Te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Le(e = Se.n.NONE, u = Te, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Se.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Ne = t(3403);
                let Pe;
                !(function (e) {
                    ((e.Friends = 'friends'), (e.Clanmates = 'clanmates'), (e.LastFights = 'lastFights'));
                })(Pe || (Pe = {}));
                const Oe = { lastFights: 1, friends: 4, clanmates: 2 },
                    Re = Object.keys(Pe);
                function ke() {
                    return !1;
                }
                console.log;
                var He = t(9174);
                function Ie(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const We = (e) => (0 === e ? window : window.subViews.get(e));
                function ze(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                const Ge = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ze(e, (e) => ('object' == typeof e ? Ge(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Ge(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Ge(u) : u]),
                                    )
                            : e,
                    Ue = (e) => Ge(e);
                var je = t(3946);
                const $e = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: a, mocks: s }) {
                                const i = (0, n.useRef)([]),
                                    c = (e, t, r) => {
                                        var a;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = We,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(e, u = 0) {
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
                                                        n = r.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const s = 'string' == typeof n ? `${r}.${n}` : r,
                                                            i = l.O.view.addModelObserver(s, u, !0);
                                                        return (a.set(i, t), e && t(o(n)), i);
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
                                                                                    return Ie(e, u);
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
                                                                                          ? Ie(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            c = (e) => i.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        previouslySelectedPlayers: e.array('previouslySelectedPlayers'),
                                                        lastFightsPlayers: e.array('lastFights.playersToSelect'),
                                                        friendsPlayers: e.array('friends.playersToSelect'),
                                                        clanmatesPlayers: e.array('clanmates.playersToSelect'),
                                                        currentTab: He.LO.box(Pe.Friends),
                                                    },
                                                    t = (0, je.Om)(
                                                        () => ze(u.previouslySelectedPlayers.get(), (e) => e),
                                                        { equals: ke },
                                                    ),
                                                    r = (0, je.Om)(() => u.currentTab.get()),
                                                    a = (0, je.Om)(
                                                        () => {
                                                            switch (r()) {
                                                                case Pe.Friends:
                                                                    return Ue(u.friendsPlayers.get());
                                                                case Pe.Clanmates:
                                                                    return Ue(u.clanmatesPlayers.get());
                                                                case Pe.LastFights:
                                                                    return Ue(u.lastFightsPlayers.get());
                                                                default:
                                                                    return [];
                                                            }
                                                        },
                                                        { equals: ke },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getPreviouslySelectedPlayers: t,
                                                        getCurrentTabIndex: r,
                                                        getCurrentTabPlayers: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            a = He.LO.box(r, { equals: ke });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, He.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            a = He.LO.box(r, { equals: ke });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, He.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = He.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, He.aD)((e) => {
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
                                                                n = Object.entries(a),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = He.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, He.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && r ? r.controls(_) : u(_),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(e),
                                    m = _[0],
                                    d = _[1],
                                    A = (0, n.useState)(() => c(e, r, s)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(m, r, s)) : (E.current = !0);
                                    }, [s, m, r]),
                                    (0, n.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    o().createElement(t.Provider, { value: F }, a)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ model: e, externalModel: u }) =>
                        Object.assign(
                            {
                                onClose: u.createCallbackNoArgs('onClose'),
                                onConfirm: u.createCallback((e) => ({ selectedPlayers: e }), 'onConfirm'),
                            },
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const r = e[t];
                                        u[t] = (0, He.aD)(r);
                                    }
                                return u;
                            })({ setCurrentTab: (u) => e.currentTab.set(u) }),
                        ),
                    ),
                    Ve = $e[0],
                    Xe = $e[1],
                    Ke = {
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
                let Ye, qe;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ye || (Ye = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(qe || (qe = {})));
                const Ze = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: a,
                    mixClass: s,
                    soundHover: l,
                    soundClick: i,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        B = D[1],
                        g = (0, n.useState)(!1),
                        h = g[0],
                        b = g[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        y = f[1],
                        x = (0, n.useCallback)(() => {
                            a || (F.current && (F.current.focus(), B(!0)));
                        }, [a]),
                        w = (0, n.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                a || (A && A(e));
                            },
                            [a, A],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                a || (null !== l && I(l), c && c(e), y(!0));
                            },
                            [a, l, c],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                a || (m && m(e), b(!1));
                            },
                            [a, m],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                a || (null !== i && I(i), _ && _(e), t && x(), b(!0));
                            },
                            [a, i, _, x, t],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                a || (d && d(e), b(!1));
                            },
                            [a, d],
                        ),
                        O = p()(
                            Ke.base,
                            Ke[`base__${r}`],
                            {
                                [Ke.base__disabled]: a,
                                [Ke[`base__${u}`]]: u,
                                [Ke.base__focus]: C,
                                [Ke.base__highlightActive]: h,
                                [Ke.base__firstHover]: v,
                            },
                            s,
                        ),
                        k = p()(Ke.state, Ke.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', w),
                                () => {
                                    document.removeEventListener('mousedown', w);
                                }
                            ),
                            [w],
                        ),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: M,
                                onMouseMove: T,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: P,
                                onClick: S,
                            },
                            r !== Ye.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Ke.back }),
                                    o().createElement('span', { className: Ke.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: k },
                                o().createElement('span', { className: Ke.stateDisabled }),
                                o().createElement('span', { className: Ke.stateHighlightHover }),
                                o().createElement('span', { className: Ke.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Ke.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ze.defaultProps = { type: Ye.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Qe = (0, n.memo)(Ze),
                    Je = R.strings.mt_birthday.playerSelect.error,
                    eu = (0, n.memo)(({ onClose: e }) =>
                        o().createElement(
                            'div',
                            { className: 'ErrorScreen_base_88' },
                            o().createElement('div', { className: 'ErrorScreen_image_02' }),
                            o().createElement(fe, { className: 'ErrorScreen_title_39', text: Je.header() }),
                            o().createElement(fe, {
                                text: Je.description(),
                                className: 'ErrorScreen_description_1b',
                                format: { text: Je.description() },
                            }),
                            o().createElement(
                                'div',
                                { className: 'ErrorScreen_footer_24' },
                                o().createElement(
                                    Qe,
                                    {
                                        mixClass: 'ErrorScreen_button_a5',
                                        type: Ye.primary,
                                        size: qe.medium,
                                        onClick: e,
                                    },
                                    o().createElement(fe, { text: Je.confirm() }),
                                ),
                            ),
                        ),
                    ),
                    uu = [
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
                function tu(e) {
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
                const ru = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Me.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    au = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            i = e.ignoreShowDelay,
                            c = void 0 !== i && i,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, uu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [C],
                            ),
                            f = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ru(t, d, { isMouseEvent: !0, on: !0, arguments: tu(r) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, d, r, b, B]),
                            v = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ru(t, d, { on: !1 }, b),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, b, g]),
                            y = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
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
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          a && a(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && v(), null == l || l(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    nu = 'Footer_button_3f',
                    ou = R.strings.mt_birthday.playerSelect,
                    su = (0, n.memo)(({ stampCount: e, isConfirmButtonDisabled: u, onConfirm: t, onClose: r }) =>
                        o().createElement(
                            'div',
                            { className: 'Footer_base_15' },
                            o().createElement(
                                'div',
                                { className: 'Footer_stamp_ce' },
                                o().createElement(fe, {
                                    text: ou.footer.stamp(),
                                    format: {
                                        classMix: 'Footer_stampText_04',
                                        binding: {
                                            stampCount: o().createElement(fe, {
                                                text: String(e),
                                                className: 'Footer_stampCount_75',
                                            }),
                                        },
                                    },
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'Footer_iconWrapper_13' },
                                    o().createElement(
                                        au,
                                        { contentId: R.views.mt_birthday.lobby.tooltips.PostStampTooltip('resId') },
                                        o().createElement('div', { className: 'Footer_stampIcon_c4' }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: 'Footer_buttonsWrapper_f3' },
                                o().createElement(
                                    Qe,
                                    { type: Ye.primary, size: qe.medium, mixClass: nu, disabled: u, onClick: t },
                                    o().createElement(fe, { text: ou.buttons.confirm() }),
                                ),
                                o().createElement(
                                    Qe,
                                    { type: Ye.secondary, size: qe.medium, mixClass: nu, onClick: r },
                                    o().createElement(fe, { text: ou.buttons.cancel() }),
                                ),
                            ),
                        ),
                    ),
                    lu = ['children'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const cu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, lu);
                        return o().createElement(
                            au,
                            iu(
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
                    Eu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const mu = R.views.common.tooltip_window.simple_tooltip_content,
                    du = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            a = e.note,
                            s = e.alert,
                            l = e.args,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Eu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: r, note: a, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, a, l]);
                        return o().createElement(
                            au,
                            _u(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? mu.SimpleTooltipHtmlContent('resId') : mu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                i,
                            ),
                            u,
                        );
                        var E;
                    };
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Fu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(du, u, r);
                        const a = u.contentId,
                            n = u.args,
                            s = null == n ? void 0 : n.contentId;
                        return a || s
                            ? o().createElement(au, Au({}, u, { contentId: a || s }), r)
                            : o().createElement(cu, u, r);
                    },
                    Du = 'default',
                    Cu = 'search',
                    Bu = 'email',
                    gu = 'password',
                    pu = 'normal',
                    hu = 'medium',
                    bu = {
                        [Du]: '',
                        [Bu]: R.strings.common.input.placeholder.email(),
                        [Cu]: R.strings.common.input.placeholder.search(),
                        [gu]: R.strings.common.input.placeholder.password(),
                    },
                    fu = { [Du]: 'text', [Bu]: 'text', [Cu]: 'text', [gu]: 'password' },
                    vu = { [Du]: '', [Bu]: 'Invalid email', [Cu]: '', [gu]: '' },
                    yu = R.images.gui.maps.icons.components.input;
                const xu = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    wu = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = 'default',
                            size: r = 'medium',
                            variant: a = 'normal',
                            placeholder: s = '',
                            highlighted: l,
                            withClear: i,
                            selectOnFocus: c = !0,
                            maxLength: E,
                            iconSource: _,
                            classMix: m,
                            onMouseEnter: d,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: D,
                            onClick: C,
                            onChange: B,
                            onClear: g,
                            onFocus: h,
                            onBlur: b,
                        }) => {
                            const f = (0, n.useState)(!1),
                                v = f[0],
                                y = f[1],
                                x = (0, n.useRef)(null),
                                w = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = 'disabled' !== a,
                                M = (0, n.useCallback)(
                                    (e) => {
                                        S && (y(!0), h && h(e));
                                    },
                                    [S, h],
                                ),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        S && !w.current.mouseOver && (y(!1), b && b(e));
                                    },
                                    [S, b],
                                );
                            (0, n.useEffect)(() => {
                                S && v && c && x.current && x.current.select();
                            }, [c, v, S]);
                            const L = (0, n.useCallback)(
                                    (e) => {
                                        S && B && B(e.target.value);
                                    },
                                    [S, B],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        S && ((w.current.mouseOver = !0), d && d(e));
                                    },
                                    [S, d],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            x.current &&
                                            (w.current.mouseDown && x.current.focus(),
                                            (w.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [S, A],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        S && ((w.current.mouseDown = !0), F && F(e));
                                    },
                                    [S, F],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        S && ((w.current.mouseDown = !1), D && D(e));
                                    },
                                    [S, D],
                                ),
                                k = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            x.current &&
                                            ((!v || (v && e.target !== x.current)) && x.current.focus(), C && C(e));
                                    },
                                    [v, S, C],
                                ),
                                H = s || bu[t],
                                I = Boolean(_),
                                z = p()(
                                    xu.base,
                                    xu[`base__${r}`],
                                    l && xu[`base__${a}`],
                                    v && xu.base__focused,
                                    I && xu.base__withIcon,
                                    m,
                                ),
                                G = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                U = p()(xu.input, xu[`input__${t}`]),
                                j = p()(xu.icon, xu[`icon__${t}`]),
                                $ = p()(xu.placeholder, xu[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: z,
                                    onMouseEnter: N,
                                    onMouseDown: O,
                                    onMouseUp: R,
                                    onMouseLeave: P,
                                    onClick: k,
                                },
                                !S && o().createElement('div', { className: xu.disabled }),
                                G && o().createElement('div', { style: G, className: j }),
                                o().createElement('input', {
                                    ref: x,
                                    className: U,
                                    type: fu[t],
                                    value: u,
                                    onChange: L,
                                    disabled: !S,
                                    onFocus: M,
                                    onBlur: T,
                                    maxLength: E,
                                }),
                                H && !u && !v && o().createElement('div', { className: $ }, H),
                                i &&
                                    o().createElement('div', {
                                        className: xu.clear,
                                        onClick: (e) => {
                                            (W.playClick(), g && g(e));
                                        },
                                        onMouseEnter: W.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Su = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Mu = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: a }) => {
                        const s = (0, n.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            l = p()(Su.base, u && Su.base__shown),
                            i = p()(Su.message, Su[`message__${e}`], a);
                        return o().createElement(
                            'div',
                            { className: l },
                            s && o().createElement('div', { className: Su.icon, style: s }),
                            o().createElement('div', { className: i }, t),
                        );
                    },
                    Tu = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Lu = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const Pu = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Ou = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? Du : t,
                            a = e.variant,
                            s = void 0 === a ? pu : a,
                            l = e.size,
                            i = void 0 === l ? hu : l,
                            c = e.value,
                            E = e.tooltipArgs,
                            _ = e.helperText,
                            m = void 0 === _ ? '' : _,
                            d = e.isValidated,
                            A = void 0 === d || d,
                            F = e.showHelper,
                            D = void 0 === F || F,
                            C = e.error,
                            B = e.options,
                            g = e.onFocus,
                            h = e.onMouseEnter,
                            b = e.onMouseLeave,
                            f = e.onMouseUp,
                            v = e.onMouseDown,
                            y = e.onChange,
                            x = e.classMix,
                            w = e.controlClassMix,
                            S = e.helperClassMix,
                            M = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Lu);
                        const T = (0, n.useState)(c),
                            L = T[0],
                            N = T[1],
                            P = (0, n.useState)(A),
                            O = P[0],
                            R = P[1],
                            k = (0, n.useMemo)(() => Object.assign({}, Pu, B), [B]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            I = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), N(e));
                            }, []),
                            W = (0, n.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (k.performChangeValidation &&
                                        (u = k.changesValidator
                                            ? k.changesValidator(e)
                                            : (function (e, u) {
                                                  return (
                                                      u !== Bu ||
                                                      (function (e) {
                                                          const u = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(u);
                                                      })(e)
                                                  );
                                              })(e, H.current.type)),
                                        y && y(e, u));
                                },
                                [y, k],
                            ),
                            z = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            G = (0, n.useCallback)(() => I(''), [I]);
                        (0, n.useEffect)(() => () => z(), [z]);
                        const U = (0, n.useCallback)(
                            (e) => {
                                (z(),
                                    k.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, k.debounceTime))
                                        : W(e));
                            },
                            [W, z, k.debounceTime],
                        );
                        ((0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== L ||
                                (U(H.current.value), (H.current.isChangeHandled = !0));
                        }, [L, U]),
                            (0, n.useEffect)(() => {
                                (H.current.isChangeHandled && c !== H.current.value && ((H.current.value = c), N(c)),
                                    (H.current.type = r));
                            }, [c, r]),
                            (0, n.useEffect)(() => {
                                R(A);
                            }, [A, s]));
                        const j = (0, n.useCallback)((e) => h && h(e), [h]),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    (k.disableHighlightOnFocus && O && R(!1), g && g(e));
                                },
                                [O, g, k.disableHighlightOnFocus],
                            ),
                            V = (0, n.useCallback)((e) => f && f(e), [f]),
                            X = (0, n.useCallback)((e) => v && v(e), [v]),
                            K = (0, n.useCallback)((e) => b && b(e), [b]),
                            Y = (0, n.useMemo)(
                                () =>
                                    k.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Cu ? yu.$dyn(`search_${u}`) : '';
                                          })(r, i)
                                        : '',
                                [r, i, k.withTypeIcon],
                            ),
                            q = m || vu[r],
                            Z = Boolean(L),
                            Q = C ? 'error' : s,
                            J = Boolean(C) || O,
                            ee = (0, n.useMemo)(
                                () => ('boolean' == typeof k.withClear ? Z && k.withClear : Z && r === Cu),
                                [r, Z, k],
                            ),
                            ue = p()(Tu.base, Tu[`base__${i}`], Tu[`base__${s}`], x);
                        return o().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: j, onMouseDown: X, onMouseUp: V, onMouseLeave: K },
                            o().createElement(
                                Fu,
                                { tooltipArgs: E },
                                o().createElement(
                                    wu,
                                    Nu(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: i,
                                            type: r,
                                            variant: Q,
                                            value: L,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: k.selectOnFocus,
                                            maxLength: k.maxLength,
                                            classMix: w,
                                            onFocus: $,
                                            onChange: I,
                                            onClear: G,
                                        },
                                        M,
                                    ),
                                ),
                            ),
                            q &&
                                o().createElement(
                                    'div',
                                    { className: Tu.helper },
                                    o().createElement(Mu, {
                                        variant: Q,
                                        show: D && (k.isPermanentHelper || J),
                                        helperText: C || q,
                                        helperIcon: k.helperIconSource,
                                        classMix: S,
                                    }),
                                ),
                        );
                    },
                    Ru = (e) => {
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
                    ku = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Hu = [];
                function Iu(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), Hu)
                    );
                }
                function Wu(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        a,
                    ];
                }
                function zu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var Gu = t(7030);
                let Uu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Uu || (Uu = {}));
                const ju = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    $u = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                n = r[1];
                            return ku(a, n, t);
                        };
                        return (i = {}) => {
                            const c = i.settings,
                                E = void 0 === c ? ju : c,
                                _ = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                d = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (
                                                var r,
                                                    a = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return zu(e, u);
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
                                                                              ? zu(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = a()).done;
                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: a }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let a,
                                                    n = !1,
                                                    o = 0;
                                                function s() {
                                                    a && clearTimeout(a);
                                                }
                                                function l(...l) {
                                                    const i = this,
                                                        c = Date.now() - o;
                                                    function E() {
                                                        ((o = Date.now()), t.apply(i, l));
                                                    }
                                                    n ||
                                                        (r && !a && E(),
                                                        s(),
                                                        void 0 === r && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (a = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (l.cancel = function () {
                                                        (s(), (n = !0));
                                                    }),
                                                    l
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Gu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const a = D.scrollPosition.get(),
                                            n = (null != (r = D.scrollPosition.goal) ? r : 0) - a;
                                        return s(e, u * t + n + a);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = _.current;
                                        r &&
                                            C.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            n = B(u, e, r);
                                        g(n);
                                    },
                                    [g, B, E.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(r(e)),
                                            _.current && d.trigger('mouseWheel', e, D.scrollPosition, u(_.current)));
                                    },
                                    [D.scrollPosition, p, d],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Ru(() => {
                                            const e = _.current;
                                            e &&
                                                (g(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                f = Iu(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
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
                            const v = (0, n.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    handleIsThumbDragging: v,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, g, p, v, d.off, d.on, f, h, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Vu = $u({
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
                        getDirection: (e) => (e.deltaY > 1 ? Uu.Next : Uu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Xu = 'HorizontalBar_base__nonActive_82',
                    Ku = 'disable',
                    Yu = { pending: !1, offset: 0 },
                    qu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Zu = () => {},
                    Qu = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ju = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = qu, onDrag: r = Zu }) => {
                        const a = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, n.useState)(Yu),
                            m = _[0],
                            d = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = () => {
                                const u = i.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / a),
                                    E = ku(0, 1, n / (a - r)),
                                    _ = (u.offsetWidth - Qu(u, o)) * E;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Ku),
                                                    void l.current.classList.remove(Ku)
                                                );
                                            if (
                                                ((u = i.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Ku),
                                                    void l.current.classList.add(Ku)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(Ku), l.current.classList.remove(Ku));
                                        }
                                    })(_));
                            },
                            D = Iu(() => {
                                ((() => {
                                    const u = c.current,
                                        t = i.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const o = Math.min(1, r / n);
                                    ((u.style.width = `${Qu(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(Xu) : a.current.classList.remove(Xu)));
                                })(),
                                    F());
                            });
                        ((0, n.useEffect)(() => Ru(D)),
                            (0, n.useEffect)(
                                () =>
                                    Ru(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Zu;
                                        const r = () => {
                                            (t(), (t = Ru(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const n = i.current,
                                            o = c.current;
                                        if (!a || !n || !o) return;
                                        const s = u.screenX - m.offset - n.getBoundingClientRect().x,
                                            l = (s / n.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: l }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(Yu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]));
                        const C = Wu((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            g = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Ku) || I('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()('HorizontalBar_base_49', u.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ku) || 0 !== e.button || (I('play'), B(Uu.Next));
                                },
                                onMouseUp: g,
                                ref: s,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (I('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          a = e.contentRef.current;
                                                      if (!r || !a) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? Uu.Prev : Uu.Next));
                                    },
                                    ref: i,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: c, className: p()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: p()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ku) || 0 !== e.button || (I('play'), B(Uu.Prev));
                                },
                                onMouseUp: g,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    et = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ut = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: s,
                        scrollClassName: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(et.base, e.base) });
                            }, [r]),
                            _ = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(et.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(et.defaultScrollArea, a) },
                                o().createElement(tt, { className: l, api: _, classNames: s }, e),
                            ),
                            o().createElement(Ju, { getStepByRailClick: i, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    tt = ({ api: e, className: u, classNames: t, children: r, style: a }) => (
                        (0, n.useEffect)(() => Ru(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(et.base, u), style: a },
                            o().createElement(
                                'div',
                                {
                                    className: p()(et.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: p()(et.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((tt.Bar = Ju),
                    (tt.Default = ut),
                    (tt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => Ru(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(et.base, u) },
                            o().createElement(
                                'div',
                                { className: p()(et.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: p()(et.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const rt = $u({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Uu.Next : Uu.Prev),
                    }),
                    at = 'VerticalBar_base__nonActive_42',
                    nt = 'disable',
                    ot = () => {},
                    st = { pending: !1, offset: 0 },
                    lt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    it = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ct = (e, u) => Math.max(20, e.offsetHeight * u),
                    Et = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = lt, onDrag: r = ot }) => {
                        const a = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, n.useState)(st),
                            m = _[0],
                            d = _[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = Iu(() => {
                                const u = c.current,
                                    t = i.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const o = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${ct(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(at) : a.current.classList.remove(at)),
                                    o
                                );
                            }),
                            D = Iu(() => {
                                const u = i.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / a),
                                    E = ku(0, 1, n / (a - r)),
                                    _ = (u.offsetHeight - ct(u, o)) * E;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(nt),
                                                    void l.current.classList.remove(nt)
                                                );
                                            if (
                                                ((u = i.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(nt),
                                                    void l.current.classList.add(nt)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(nt), l.current.classList.remove(nt));
                                        }
                                    })(_));
                            }),
                            C = Iu(() => {
                                it(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, n.useEffect)(() => Ru(C)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    it(e, () => {
                                        D();
                                    });
                                };
                                let t = ot;
                                const r = () => {
                                    (t(), (t = Ru(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        it(e, (t) => {
                                            const a = i.current,
                                                n = c.current,
                                                o = e.getContainerSize();
                                            if (!a || !n || !o) return;
                                            const s = u.screenY - m.offset - a.getBoundingClientRect().y,
                                                l = (s / a.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: s, contentOffset: l }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(st));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]));
                        const B = Wu((u) => e.applyStepTo(u), E, [e]),
                            g = B[0],
                            h = B[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(nt) || I('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()('VerticalBar_base_f3', u.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nt) || 0 !== e.button || (I('play'), g(Uu.Next));
                                },
                                ref: s,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var a;
                                        r &&
                                            0 === u.button &&
                                            (I('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((a = u.screenY > r.getBoundingClientRect().y ? Uu.Prev : Uu.Next),
                                                  c.current &&
                                                      it(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + r * a);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: i,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: p()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nt) || 0 !== e.button || (I('play'), g(Uu.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    _t = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    mt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: s,
                        scrollClassNames: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(_t.base, e.base) });
                            }, [r]),
                            _ = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(_t.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(_t.area, a) },
                                o().createElement(dt, { className: s, classNames: l, api: _ }, e),
                            ),
                            o().createElement(Et, { getStepByRailClick: i, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    dt = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, n.useEffect)(() => Ru(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(_t.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(_t.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                dt.Default = mt;
                const At = { Vertical: a, Horizontal: r },
                    Ft = {
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
                    Dt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ct = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Bt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    gt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, n.useMemo)(() => u || {}, [u]);
                        let s = Dt.exec(e),
                            l = e,
                            i = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = Ct.exec(t),
                                c = Bt.exec(t),
                                E = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + i++ + e;
                                ((l = l.replace(t, `%(${s})`)),
                                    (a[s] = Ft[e]
                                        ? o().createElement(
                                              'span',
                                              { className: Ft[e] },
                                              o().createElement(_e, { text: E, binding: u }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: r(e) },
                                              o().createElement(_e, { text: E, binding: u }),
                                          )));
                            }
                            s = Dt.exec(e);
                        }
                        return o().createElement(_e, { text: l, classMix: t, binding: a });
                    }),
                    pt = {
                        base: 'Divider_base_54',
                        base__horizontal: 'Divider_base__horizontal_72',
                        base__vertical: 'Divider_base__vertical_57',
                    };
                let ht;
                !(function (e) {
                    ((e.Vertical = 'vertical'), (e.Horizontal = 'horizontal'));
                })(ht || (ht = {}));
                const bt = (0, n.memo)(({ type: e = ht.Horizontal, className: u }) =>
                        o().createElement('div', { className: p()(pt.base, pt[`base__${e}`], u) }),
                    ),
                    ft = 'EmptyListContent_base_59',
                    vt = 'EmptyListContent_wrapper_2f',
                    yt = R.strings.mt_birthday.playerSelect,
                    xt = (0, n.memo)(({ currentTab: e, isFiltering: u }) => {
                        const t = (0, n.useMemo)(() => yt.$dyn(e).$dyn('emptyList'), [e]),
                            r = (0, n.useMemo)(() => t.$dyn('subheader'), [t]),
                            a = (0, n.useMemo)(() => ((e) => new Array(Oe[e]).fill(0).map((e, u) => u + 1))(e), [e]);
                        return u
                            ? o().createElement(
                                  'div',
                                  { className: ft },
                                  o().createElement(
                                      'div',
                                      { className: vt },
                                      o().createElement('div', { className: 'EmptyListContent_warning_0e' }),
                                      o().createElement(fe, {
                                          text: yt.emptyList.filter(),
                                          className: 'EmptyListContent_notFound_67',
                                      }),
                                  ),
                              )
                            : o().createElement(
                                  'div',
                                  { className: ft },
                                  o().createElement(
                                      'div',
                                      { className: vt },
                                      o().createElement(
                                          'div',
                                          { className: 'EmptyListContent_content_df' },
                                          o().createElement(fe, {
                                              text: t.$dyn('header'),
                                              className: p()(
                                                  'EmptyListContent_header_3d',
                                                  r && 'EmptyListContent_header__withSubtitle_59',
                                              ),
                                          }),
                                          o().createElement(
                                              'div',
                                              null,
                                              r &&
                                                  o().createElement(fe, {
                                                      text: r,
                                                      className: 'EmptyListContent_subheader_86',
                                                  }),
                                              o().createElement(
                                                  'div',
                                                  { className: 'EmptyListContent_tipsWrapper_f9' },
                                                  a.map((u) =>
                                                      o().createElement(
                                                          'div',
                                                          { className: 'EmptyListContent_tip_66', key: u },
                                                          o().createElement('div', {
                                                              className: 'EmptyListContent_icon_17',
                                                              style: {
                                                                  backgroundImage: `url(R.images.mt_birthday.gui.maps.icons.playerSelect.tip.${e}_block${u})`,
                                                              },
                                                          }),
                                                          o().createElement(
                                                              'div',
                                                              null,
                                                              o().createElement(gt, {
                                                                  text: t.$dyn(`tip${u}`),
                                                                  classMix: 'EmptyListContent_tipText_3e',
                                                              }),
                                                          ),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    });
                let wt;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(wt || (wt = {}));
                const St = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            r = (0, n.useState)(!0),
                            a = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() =>
                                Ru(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            o().createElement(
                                du,
                                { isEnabled: a, body: e },
                                o().createElement('div', { ref: t, className: p()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    Mt = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Tt = { [wt.default]: 'c_24x24', [wt.x48]: 'c_48x48', [wt.x80]: 'c_80x80', [wt.x220]: 'c_220x220' },
                    Lt = ({ badgeID: e, size: u = wt.default, className: t }) => {
                        const r = R.images.gui.maps.icons.library.badges.$dyn(Tt[u]);
                        return o().createElement('div', {
                            className: p()(Mt.base, Mt[`base__${u}`], t),
                            style: { backgroundImage: `url(${r.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Nt = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Pt = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, n.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return o().createElement(
                            du,
                            { header: u, body: t },
                            o().createElement('div', { className: Nt.anonymizedIcon }),
                        );
                    });
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Rt = { [wt.default]: 'c_64x24', [wt.x48]: 'c_68x28' },
                    kt = { [wt.default]: 'c_48x48', [wt.x48]: 'c_48x48' },
                    Ht = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: r = { badgeID: '' },
                        suffixBadge: a = { badgeID: '' },
                        isInverted: s = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: i = !1,
                        hiddenUserName: c = '',
                        size: E = wt.default,
                        userNameClassName: _ = '',
                        clanTagClassName: m = '',
                    }) => {
                        const d = R.images.gui.maps.icons.library.badges.strips.$dyn(Rt[E]),
                            A = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${d.$dyn(`strip_${a.badgeID}`)})` }),
                                [a, d],
                            ),
                            F = R.images.gui.maps.icons.library.badges.$dyn(kt[E]),
                            D = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${F.$dyn(`badge_${a.badgeID}`)})` }),
                                [a, F],
                            ),
                            C = u ? `[${u}]` : '',
                            B = p()(Nt.base, Nt[`base__${E}`], s && Nt.base__inverted),
                            g = p()(Nt.userName, _),
                            h = p()(Nt.clanTag, m),
                            b = e !== c,
                            f = l ? `${c}${C}` : c,
                            v = Boolean(r.badgeID) && o().createElement(Lt, Ot({ size: E }, r, { key: 'badge' })),
                            y = Date.now(),
                            x = [
                                v,
                                [
                                    o().createElement(
                                        'div',
                                        { className: g, key: 'userName' },
                                        o().createElement(St, { content: e, key: y }),
                                    ),
                                    !l && Boolean(C) && o().createElement('div', { className: h, key: 'clanTag' }, C),
                                ],
                                0 !== t && o().createElement('div', { className: Nt.igrIcon, key: 'igrType' }),
                                Boolean(a.badgeID) &&
                                    o().createElement(
                                        'div',
                                        { className: Nt.suffixBadgeWrapper, key: 'suffixBadge' },
                                        o().createElement('div', { className: Nt.suffixBadgeStripe, style: A }),
                                        o().createElement('div', { className: Nt.suffixBadge, style: D }),
                                    ),
                                i && b && o().createElement(Pt, { tooltipHeaderName: f, key: 'anonymizer' }),
                            ];
                        return o().createElement('div', { className: B }, s ? x.reverse() : x);
                    };
                var It = t(6893);
                const Wt = (0, n.memo)(
                        ({ player: e, className: u, isSelected: t = !1, isMaxCountSelected: r, handleCard: a }) => {
                            const s = e.name,
                                l = e.clanAbbrev,
                                i = e.locked,
                                c = e.isNameLoading,
                                E = (0, n.useState)(!1),
                                _ = E[0],
                                m = E[1],
                                d = !i && (!r || t),
                                A = (0, n.useCallback)(() => {
                                    d && (W.playClick(), a(e));
                                }, [e, d, a]),
                                F = (0, n.useMemo)(
                                    () =>
                                        p()(
                                            'PlayerCard_base_de',
                                            c && 'PlayerCard_base__loading_d2',
                                            _ && d && 'PlayerCard_base__hover_a7',
                                            t && 'PlayerCard_base__selected_f0',
                                            (r || i) && !t && 'PlayerCard_base__disabled_a2',
                                            u,
                                        ),
                                    [u, _, r, c, t, i, d],
                                );
                            return o().createElement(
                                au,
                                {
                                    isEnabled: i,
                                    contentId: R.views.mt_birthday.lobby.tooltips.DisablePlayerTooltip('resId'),
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: F,
                                        onMouseEnter: () => {
                                            d && (W.playHighlight(), m(!0));
                                        },
                                        onMouseLeave: () => {
                                            m(!1);
                                        },
                                        onClick: A,
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'PlayerCard_playerContainer_9b' },
                                        c
                                            ? o().createElement(It.$, null)
                                            : o().createElement(Ht, { userName: s, clanAbbrev: l }),
                                    ),
                                    i && o().createElement('div', { className: 'PlayerCard_lock_9d' }),
                                ),
                            );
                        },
                    ),
                    zt = 'Progress_base_af',
                    Gt = 'Progress_progress_01',
                    Ut = 'Progress_currentCount_9c',
                    jt = R.strings.mt_birthday.playerSelect,
                    $t = (0, n.memo)(
                        ({
                            isSelectedProgress: e,
                            selectedPlayersLength: u,
                            maxSendCount: t,
                            playerListLength: r,
                            currentTabInput: a,
                            visiblePlayersLength: n,
                            handleClear: s,
                        }) =>
                            a || e
                                ? o().createElement(
                                      'div',
                                      { className: zt },
                                      o().createElement(fe, {
                                          text: jt.progress(),
                                          className: Gt,
                                          format: {
                                              binding: {
                                                  current: o().createElement(
                                                      o().Fragment,
                                                      null,
                                                      o().createElement(fe, {
                                                          text: String(a ? n : u),
                                                          className: p()(
                                                              Ut,
                                                              a && !n && 'Progress_currentCount__notFound_68',
                                                          ),
                                                      }),
                                                      Boolean(u || a) &&
                                                          o().createElement(
                                                              du,
                                                              a
                                                                  ? {
                                                                        header: jt.tooltips.resetFilter.header(),
                                                                        body: jt.tooltips.resetFilter.body(),
                                                                    }
                                                                  : {
                                                                        header: jt.tooltips.resetPlayers.header(),
                                                                        body: jt.tooltips.resetPlayers.body(),
                                                                    },
                                                              o().createElement('div', {
                                                                  className: 'Progress_clearSelect_a9',
                                                                  onClick: s,
                                                              }),
                                                          ),
                                                      Boolean(a || u) &&
                                                          o().createElement('div', { className: 'Progress_glow_22' }),
                                                  ),
                                                  max: o().createElement(fe, {
                                                      text: String(a ? r : t),
                                                      className: 'Progress_maxCount_fe',
                                                  }),
                                              },
                                          },
                                      }),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: zt },
                                      o().createElement(
                                          'div',
                                          { className: Gt },
                                          o().createElement(fe, { text: String(n), className: Ut }),
                                      ),
                                  ),
                    ),
                    Vt = 'PlayerSelect_selectedCount_be',
                    Xt = 'PlayerSelect_selectedText_2f',
                    Kt = 'PlayerSelect_list_93',
                    Yt = 'PlayerSelect_playerCard_01',
                    qt = 'PlayerSelect_scrollWrapper_32',
                    Zt = 'PlayerSelect_lip_92',
                    Qt = 'PlayerSelect_lipDivider_7e',
                    Jt = 'PlayerSelect_lip__hidden_e8',
                    er = 'PlayerSelect_lipDivider__hidden_28',
                    ur = R.strings.mt_birthday.playerSelect,
                    tr = (0, n.memo)(
                        ({
                            playersList: e,
                            currentTab: u,
                            maxSelectedPlayers: t,
                            stampCount: r,
                            selectedPlayers: a,
                            filterValue: s,
                            setFilterValue: l,
                            setSelectedPlayers: i,
                        }) => {
                            const c = (0, n.useState)([]),
                                E = c[0],
                                _ = c[1],
                                m = (0, n.useState)(!1),
                                d = m[0],
                                A = m[1],
                                F = (0, n.useState)(!1),
                                D = F[0],
                                C = F[1],
                                B = (0, n.useState)(!1),
                                g = B[0],
                                h = B[1],
                                b = rt(),
                                f = s[u],
                                v = a.length,
                                y = v > 0,
                                x = r < t ? r : t,
                                w = v >= x;
                            ((0, n.useEffect)(() => {
                                const e = () => {
                                    const e = b.animationScroll.scrollPosition.goal,
                                        u = b.getBounds()[1],
                                        t = b.getContainerSize() || 0,
                                        r = b.getWrapperSize() || 0;
                                    (A(e > 3), C(e < u - 3), h(t > r));
                                };
                                return (
                                    b.events.on('recalculateContent', e),
                                    b.events.on('change', e),
                                    b.events.on('resizeHandled', e),
                                    () => {
                                        (b.events.off('recalculateContent', e),
                                            b.events.off('change', e),
                                            b.events.off('resizeHandled', e));
                                    }
                                );
                            }, [b]),
                                (0, n.useEffect)(() => {
                                    i((u) => [...u.map((u) => e.find((e) => u.spaID === e.spaID) || u)]);
                                }, [e, i]),
                                (0, n.useEffect)(() => {
                                    if (!f) return _(e);
                                    _(e.filter((e) => e.name.toLowerCase().includes(f.toLowerCase())));
                                }, [e, f]));
                            const S = (0, n.useCallback)(
                                    (e) => {
                                        const u = a.map(({ spaID: e }) => e).includes(null == e ? void 0 : e.spaID);
                                        (w && !u) ||
                                            i(u ? (u) => u.filter((u) => u.spaID !== e.spaID) : (u) => [...u, e]);
                                    },
                                    [w, a, i],
                                ),
                                M = (0, n.useCallback)(() => {
                                    i([]);
                                }, [i]),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        l((t) => Object.assign({}, t, { [u]: e }));
                                    },
                                    [u, l],
                                ),
                                L = (0, n.useCallback)(() => {
                                    l((e) => Object.assign({}, e, { [u]: '' }));
                                }, [u, l]),
                                N = (0, n.useCallback)(
                                    () =>
                                        0 === E.length
                                            ? o().createElement(xt, { currentTab: u, isFiltering: Boolean(f) })
                                            : o().createElement(
                                                  'div',
                                                  { className: Kt },
                                                  E.map((e) => {
                                                      const u = a
                                                          .map(({ spaID: e }) => e)
                                                          .includes(null == e ? void 0 : e.spaID);
                                                      return o().createElement(Wt, {
                                                          player: e,
                                                          className: Yt,
                                                          key: e.spaID,
                                                          isSelected: u,
                                                          handleCard: S,
                                                          isMaxCountSelected: w,
                                                      });
                                                  }),
                                              ),
                                    [u, S, f, w, E, a],
                                );
                            return (
                                (0, n.useEffect)(() => {
                                    b.applyScroll(0);
                                }, [u, b]),
                                o().createElement(
                                    'div',
                                    { className: 'PlayerSelect_base_ad' },
                                    o().createElement(
                                        'div',
                                        { className: 'PlayerSelect_selectedPlayers_f9' },
                                        o().createElement(bt, null),
                                        o().createElement(
                                            'div',
                                            { className: p()(Vt) },
                                            o().createElement(
                                                'div',
                                                { className: 'PlayerSelect_textWrapper_03' },
                                                o().createElement(fe, {
                                                    text: ur.selectedPlayers.header(),
                                                    className: Xt,
                                                    format: {
                                                        binding: {
                                                            progress: o().createElement($t, {
                                                                isSelectedProgress: !0,
                                                                selectedPlayersLength: v,
                                                                maxSendCount: x,
                                                                handleClear: M,
                                                            }),
                                                        },
                                                    },
                                                }),
                                            ),
                                        ),
                                        o().createElement(bt, null),
                                        o().createElement(
                                            'div',
                                            { className: qt },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: p()(
                                                        Kt,
                                                        'PlayerSelect_list__selected_96',
                                                        !y && 'PlayerSelect_list__empty_fb',
                                                    ),
                                                },
                                                y
                                                    ? a.map((e) =>
                                                          o().createElement(Wt, {
                                                              isSelected: !0,
                                                              player: e,
                                                              className: p()(
                                                                  Yt,
                                                                  'PlayerSelect_playerCard__selected_f0',
                                                              ),
                                                              handleCard: S,
                                                              key: e.spaID,
                                                          }),
                                                      )
                                                    : o().createElement(
                                                          'div',
                                                          { className: 'PlayerSelect_emptyContainer_ea' },
                                                          o().createElement(gt, {
                                                              text: ur.selectedPlayers.empty(),
                                                              classMix: 'PlayerSelect_emptySelectedPlayers_91',
                                                          }),
                                                      ),
                                            ),
                                        ),
                                    ),
                                    o().createElement(bt, { type: ht.Vertical }),
                                    o().createElement(
                                        'div',
                                        { className: 'PlayerSelect_playerList_7e' },
                                        o().createElement(
                                            'div',
                                            { className: 'PlayerSelect_playerListHeader_5b' },
                                            o().createElement(bt, null),
                                            o().createElement(
                                                'div',
                                                { className: p()(Vt, 'PlayerSelect_selectedCount__small_a7') },
                                                o().createElement(fe, {
                                                    text: ur.visiblePlayers(),
                                                    className: Xt,
                                                    format: {
                                                        binding: {
                                                            count: o().createElement($t, {
                                                                visiblePlayersLength: E.length,
                                                                playerListLength: e.length,
                                                                currentTabInput: f,
                                                                handleClear: L,
                                                            }),
                                                        },
                                                    },
                                                }),
                                                o().createElement(
                                                    'div',
                                                    { className: 'PlayerSelect_inputWrapper_24' },
                                                    o().createElement(Ou, {
                                                        type: Cu,
                                                        placeholder: ur.filter.placeholder(),
                                                        value: f,
                                                        onChange: T,
                                                        controlClassMix: 'PlayerSelect_input_4b',
                                                    }),
                                                    Boolean(f) &&
                                                        o().createElement(
                                                            du,
                                                            {
                                                                header: ur.tooltips.resetFilter.header(),
                                                                body: ur.tooltips.resetFilter.body(),
                                                            },
                                                            o().createElement('div', {
                                                                className: 'PlayerSelect_clearTooltip_fd',
                                                                onClick: L,
                                                            }),
                                                        ),
                                                ),
                                            ),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: qt },
                                            o().createElement('div', {
                                                className: p()(Zt, 'PlayerSelect_lip__top_31', !d && Jt),
                                            }),
                                            o().createElement(bt, {
                                                className: p()(Qt, 'PlayerSelect_lipDivider__top_fb', d && er),
                                            }),
                                            o().createElement(At.Vertical.Area, { api: b, className: qt }, N()),
                                            o().createElement(At.Vertical.Bar, {
                                                api: b,
                                                classNames: {
                                                    base: 'PlayerSelect_scrollBar_33',
                                                    thumb: 'PlayerSelect_barThumb_a4',
                                                    rail: 'PlayerSelect_barRail_72',
                                                },
                                            }),
                                            g &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('div', { className: p()(Zt, !D && Jt) }),
                                                    o().createElement(bt, { className: p()(Qt, D && er) }),
                                                ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    rr = R.strings.mt_birthday.playerSelect,
                    ar = (0, Ne.Pi)(() => {
                        viewEnv.clearInternalCacheAfterFinalize();
                        const e = Xe(),
                            u = e.controls,
                            t = e.model,
                            r = t.root.get(),
                            a = r.maxSelectedPlayers,
                            s = r.stampCount,
                            i = r.isError,
                            c = t.computes.getCurrentTabIndex(),
                            E = t.computes.getCurrentTabPlayers(),
                            _ = t.computes.getPreviouslySelectedPlayers(),
                            m = (0, n.useState)([]),
                            d = m[0],
                            A = m[1],
                            F = (0, n.useState)(Re.reduce((e, u) => ((e[Pe[u]] = ''), e), {})),
                            D = F[0],
                            C = F[1],
                            B = (0, n.useCallback)(
                                (e) => {
                                    u.setCurrentTab(e);
                                },
                                [u],
                            ),
                            g = (0, n.useCallback)(() => {
                                const e = d.map((e) => e.spaID).join(',');
                                u.onConfirm(e);
                            }, [d, u]);
                        return (
                            (function ({
                                key: e = Se.n.ESCAPE,
                                callback: u = () => l.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                Le(e, u, t);
                            })({ callback: u.onClose }),
                            (0, n.useEffect)(() => {
                                A(_);
                            }, [_]),
                            o().createElement(
                                'div',
                                { className: p()('App_base_6e', i && 'App_base__error_f3') },
                                o().createElement(
                                    'div',
                                    { className: 'App_closeBtn_2f' },
                                    o().createElement(we, {
                                        caption: rr.buttons.close(),
                                        side: 'right',
                                        type: 'close',
                                        onClick: u.onClose,
                                    }),
                                ),
                                i
                                    ? o().createElement(eu, { onClose: u.onClose })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: 'App_header_ab' },
                                              o().createElement(fe, {
                                                  className: 'App_headerTitle_d7',
                                                  text: rr.header(),
                                              }),
                                              o().createElement(fe, {
                                                  className: 'App_headerDescription_c6',
                                                  text: rr.description(),
                                              }),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: 'App_tabsWrapper_f2' },
                                              o().createElement($, {
                                                  tabs: Re.map((e) => ({
                                                      id: Pe[e],
                                                      title: R.strings.mt_birthday.playerSelect.tab.$dyn(Pe[e]),
                                                  })),
                                                  active: c,
                                                  onClick: B,
                                                  classNames: {
                                                      tab: 'App_tab_c7',
                                                      title: 'App_tabTitle_3f',
                                                      activeTab: 'App_activeTab_89',
                                                  },
                                              }),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: 'App_playerSelect_d1' },
                                              o().createElement(tr, {
                                                  playersList: E,
                                                  currentTab: c,
                                                  stampCount: s,
                                                  maxSelectedPlayers: a,
                                                  selectedPlayers: d,
                                                  filterValue: D,
                                                  setFilterValue: C,
                                                  setSelectedPlayers: A,
                                              }),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: 'App_footer_4c' },
                                              o().createElement(su, {
                                                  stampCount: s,
                                                  isConfirmButtonDisabled: !d.length,
                                                  onConfirm: g,
                                                  onClose: u.onClose,
                                              }),
                                          ),
                                      ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(Ve, null, o().createElement(O, null, o().createElement(ar, null))),
                        document.getElementById('root'),
                    );
                });
            },
            6893: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => n });
                var r = t(6179),
                    a = t.n(r);
                const n = (0, r.memo)(() =>
                    a().createElement(
                        'div',
                        { className: 'Spinner_base_aa' },
                        a().createElement('div', { className: 'Spinner_spinner_e7' }),
                    ),
                );
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, r] = deferred[l], n = !0, o = 0; o < u.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, r];
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
        (__webpack_require__.j = 883),
        (() => {
            var e = { 883: 0, 140: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        a,
                        [n, o, s] = t,
                        l = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var i = s(__webpack_require__);
                    }
                    for (u && u(t); l < n.length; l++)
                        ((a = n[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(i);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2333));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
