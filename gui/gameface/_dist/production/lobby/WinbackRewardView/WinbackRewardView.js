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
            532: (e) => {
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
            887: (e) => {
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
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => n }));
                var r = t(472),
                    a = t(176);
                const n = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
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
                                            i = s[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            r(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(n, o),
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    }));
                var r = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(959);
                const a = { view: t(641), client: r };
            },
            722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var r = t(472);
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
            641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => R,
                        events: () => n.U,
                        extraSize: () => v,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => x,
                    }));
                var r = t(722),
                    a = t(112),
                    n = t(538),
                    s = t(566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
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
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    v = {
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
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const r = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
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
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(138);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => E, Z5: () => s, B0: () => o, ry: () => C });
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
                var n = t(358);
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
                var l;
                (((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
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
                var m = t(521),
                    d = t(138);
                const F = ['args'];
                function D(e, u, t, r, a, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, a);
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
                                    return new Promise(function (r, a) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            D(n, r, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(n, r, a, s, i, 'throw', e);
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
                    h = () => g(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var b = t(572);
                const w = a.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, a = R.invalid('resId'), n) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                E = i.y,
                                c = i.width,
                                _ = i.height,
                                A = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(E) + s.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(_),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: B(A),
                                on: !0,
                                args: n,
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
                            p(e, h);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: w,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            147: (e, u, t) => {
                'use strict';
                var r = t(179),
                    a = t.n(r);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, u, t) {
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
                })(o || (o = {}));
                const E = s.O.client.getSize('rem'),
                    c = E.width,
                    _ = E.height,
                    A = Object.assign({ width: c, height: _ }, l(c, _, i)),
                    m = (0, r.createContext)(A),
                    d = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, d);
                        const a = (0, r.useContext)(m),
                            s = a.extraLarge,
                            i = a.large,
                            o = a.medium,
                            l = a.small,
                            E = a.extraSmall,
                            c = a.extraLargeWidth,
                            _ = a.largeWidth,
                            A = a.mediumWidth,
                            F = a.smallWidth,
                            D = a.extraSmallWidth,
                            B = a.extraLargeHeight,
                            C = a.largeHeight,
                            g = a.mediumHeight,
                            h = a.smallHeight,
                            p = a.extraSmallHeight,
                            b = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && i) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && c) return n(u, t, b);
                            if (t.largeWidth && _) return n(u, t, b);
                            if (t.mediumWidth && A) return n(u, t, b);
                            if (t.smallWidth && F) return n(u, t, b);
                            if (t.extraSmallWidth && D) return n(u, t, b);
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
                                if (t.extraSmallHeight && p) return u;
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
                    (0, r.memo)(F));
                const D = (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(m),
                        t = (0, r.useState)(u),
                        n = t[0],
                        o = t[1],
                        E = (0, r.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                r = s.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: r }, l(t, r, i)));
                        }, []);
                    (((e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const c = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return a().createElement(m.Provider, { value: c }, e);
                });
                var B = t(483),
                    C = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let p, b, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const v = () => {
                        const e = (0, r.useContext)(m),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
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
                            s = ((e) => {
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
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
                const T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_WIDTH,
                        [b.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [b.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL_HEIGHT,
                        [w.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [w.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL,
                        [p.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [p.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [p.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    M = (e) => {
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
                            })(e, x);
                        const n = v(),
                            s = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return a().createElement('div', S({ className: C()(t, T[s], f[i], L[o]) }, r), u);
                    },
                    y = ['children'],
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
                            })(e, y);
                        return a().createElement(D, null, a().createElement(M, t, u));
                    };
                var P = t(493),
                    N = t.n(P);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const k = {
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
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                            n = e.side,
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            E = e.onMouseDown,
                            c = e.onMouseUp,
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
                                })(e, H)),
                            A = C()(k.base, k[`base__${s}`], k[`base__${n}`], null == i ? void 0 : i.base),
                            m = C()(k.icon, k[`icon__${s}`], k[`icon__${n}`], null == i ? void 0 : i.icon),
                            d = C()(k.glow, null == i ? void 0 : i.glow),
                            F = C()(k.caption, k[`caption__${s}`], null == i ? void 0 : i.caption),
                            D = C()(k.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            U(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== s && a().createElement('div', { className: k.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: d })),
                            a().createElement('div', { className: F }, u),
                            r && a().createElement('div', { className: D }, r),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var W = t(521),
                    $ = t(364);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = W.n.NONE, u = V, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var z = t(515);
                const j = 'tooltipId';
                let Y, q;
                function K() {}
                function Q() {
                    return !1;
                }
                (!(function (e) {
                    ((e.WELCOME = 'welcome'),
                        (e.PROGRESSION_STEP = 'progressionStep'),
                        (e.SELECTED_REWARDS = 'selectedRewards'),
                        (e.PROGRESSION_COMPLETED = 'progressionCompleted'));
                })(Y || (Y = {})),
                    (function (e) {
                        ((e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'));
                    })(q || (q = {})),
                    console.log);
                var Z = t(174);
                function J(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ee = (e) => (0 === e ? window : window.subViews.get(e));
                function ue(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var r;
                        const n = null == (r = e[a]) ? void 0 : r.value;
                        u(n, a, e) && t.push(n);
                    }
                    return t;
                }
                function te(e, u) {
                    for (let a = 0; a < e.length; a++) {
                        const n =
                            ((t = e[a]),
                            (r = void 0),
                            t && 'value' in t && null != (r = t.constructor) && r.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(n, a, e)) return n;
                    }
                    var t, r;
                }
                var re = t(946);
                const ae = [q.SELECTABLE_VEHICLE_FOR_GIFT, q.SELECTABLE_VEHICLE_DISCOUNT],
                    ne = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: i, mocks: o }) {
                                const l = (0, r.useRef)([]),
                                    E = (e, t, r) => {
                                        var a;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ee,
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
                                                const i = (e) => {
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
                                                        const o = 'string' == typeof n ? `${r}.${n}` : r,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (a.set(l, t), e && t(i(n)), l);
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
                                                                                    return J(e, u);
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
                                                                                          ? J(e, u)
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
                                            i =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : i.readByPath(u),
                                            E = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        primitives: e.primitives([
                                                            'state',
                                                            'isFirstProgressionStep',
                                                            'stageNumber',
                                                            'progressionName',
                                                        ]),
                                                        rewards: e.array('rewards'),
                                                        firstRowMaxRewardsCount: Z.LO.box(),
                                                    },
                                                    t = (0, re.Om)(() =>
                                                        te(u.rewards.get(), (e) => ae.includes(e.name))
                                                            ? a()
                                                            : ue(
                                                                  u.rewards.get(),
                                                                  (e, t) => t < u.firstRowMaxRewardsCount.get(),
                                                              ),
                                                    ),
                                                    r = (0, re.Om)(() =>
                                                        te(u.rewards.get(), (e) => ae.includes(e.name)) ? n() : [],
                                                    ),
                                                    a = (0, re.Om)(() =>
                                                        ue(u.rewards.get(), (e) => ae.includes(e.name)),
                                                    ),
                                                    n = (0, re.Om)(() =>
                                                        ue(u.rewards.get(), (e) => !ae.includes(e.name)),
                                                    ),
                                                    s = (0, re.Om)(() => {
                                                        var e;
                                                        const t = u.rewards.get();
                                                        return (
                                                            1 === t.length &&
                                                            (null ==
                                                            (e = (function (e, u) {
                                                                var t;
                                                                if (!(u >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[u]
                                                                        : null == (t = e[u])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(t, 0))
                                                                ? void 0
                                                                : e.name) === q.VEHICLE_FOR_GIFT
                                                        );
                                                    }),
                                                    i = (0, re.Om)(() => {
                                                        const e = [
                                                            q.VEHICLE_FOR_GIFT,
                                                            q.VEHICLE_FOR_RENT,
                                                            q.VEHICLE_DISCOUNT,
                                                        ];
                                                        return Boolean(
                                                            ue(u.rewards.get(), (u) => e.includes(u.name)).length,
                                                        );
                                                    }),
                                                    o = (0, re.Om)(() => Boolean(a().length));
                                                return Object.assign({}, u.primitives, u, {
                                                    computes: {
                                                        getFirstRowRewards: t,
                                                        getSecondRowRewards: r,
                                                        hasSelectableRewards: o,
                                                        hasVehicleRewards: i,
                                                        hasOnlyVehicleForGiftReward: s,
                                                        isRibbonGold: (0, re.Om)(() =>
                                                            [Y.SELECTED_REWARDS].includes(u.primitives.state.get()),
                                                        ),
                                                        isGlowVisible: (0, re.Om)(() =>
                                                            [Y.SELECTED_REWARDS].includes(u.primitives.state.get()),
                                                        ),
                                                        isLinesVisible: (0, re.Om)(
                                                            () =>
                                                                ![Y.PROGRESSION_STEP].includes(
                                                                    u.primitives.state.get(),
                                                                ),
                                                        ),
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            a = Z.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Z.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            a = Z.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Z.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = Z.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Z.aD)((e) => {
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
                                                                    (e, [u, t]) => ((e[t] = Z.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Z.aD)((e) => {
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
                                                cleanup: E,
                                            }),
                                            _ = { mode: e, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(_) : u(_),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    A = _[0],
                                    m = _[1],
                                    d = (0, r.useState)(() => E(e, n, o)),
                                    F = d[0],
                                    D = d[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? D(E(A, n, o)) : (c.current = !0);
                                    }, [o, A, n]),
                                    (0, r.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        selectReward: e.createCallbackNoArgs('onSelectReward'),
                        showVehicle: e.createCallbackNoArgs('showInHangar'),
                        showQuests: e.createCallbackNoArgs('showQuests'),
                        setFirstRowMaxRewardsCount: (0, Z.aD)((e) => u.firstRowMaxRewardsCount.set(e)),
                    })),
                    se = ne[0],
                    ie = ne[1],
                    oe = {
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
                let le, Ee;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(le || (le = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Ee || (Ee = {})));
                const ce = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: _,
                    onMouseUp: A,
                    onMouseLeave: m,
                    onClick: d,
                }) => {
                    const F = (0, r.useRef)(null),
                        D = (0, r.useState)(t),
                        B = D[0],
                        g = D[1],
                        h = (0, r.useState)(!1),
                        p = h[0],
                        b = h[1],
                        w = (0, r.useState)(!1),
                        v = w[0],
                        x = w[1],
                        S = (0, r.useCallback)(() => {
                            s || (F.current && (F.current.focus(), g(!0)));
                        }, [s]),
                        T = (0, r.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [B],
                        ),
                        f = (0, r.useCallback)(
                            (e) => {
                                s || (d && d(e));
                            },
                            [s, d],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                s || (null !== o && I(o), E && E(e), x(!0));
                            },
                            [s, o, E],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                c && c(e);
                            },
                            [c],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                s || (A && A(e), b(!1));
                            },
                            [s, A],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                s || (null !== l && I(l), _ && _(e), t && S(), b(!0));
                            },
                            [s, l, _, S, t],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                s || (m && m(e), b(!1));
                            },
                            [s, m],
                        ),
                        N = C()(
                            oe.base,
                            oe[`base__${n}`],
                            {
                                [oe.base__disabled]: s,
                                [oe[`base__${u}`]]: u,
                                [oe.base__focus]: B,
                                [oe.base__highlightActive]: p,
                                [oe.base__firstHover]: v,
                            },
                            i,
                        ),
                        k = C()(oe.state, oe.state__default);
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
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: L,
                                onMouseMove: M,
                                onMouseUp: y,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: f,
                            },
                            n !== le.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: oe.back }),
                                    a().createElement('span', { className: oe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: k },
                                a().createElement('span', { className: oe.stateDisabled }),
                                a().createElement('span', { className: oe.stateHighlightHover }),
                                a().createElement('span', { className: oe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ce.defaultProps = { type: le.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _e = (0, r.memo)(ce),
                    Ae = 'Actions_base_09',
                    me = 'Actions_base__row_9c',
                    de = (e) => {
                        const u = (0, r.useRef)(null),
                            t = (0, r.useRef)(K),
                            a = (0, r.useCallback)(() => {
                                t.current = ((t) => {
                                    let r,
                                        a = null;
                                    return (
                                        (a = requestAnimationFrame(() => {
                                            a = requestAnimationFrame(() => {
                                                ((a = null),
                                                    (r = (() => {
                                                        const t = u.current;
                                                        if (!t) return;
                                                        const r = Array.from(t.querySelectorAll(e)),
                                                            a = r.reduce((e, u) => Math.max(e, u.scrollWidth), 0);
                                                        r.forEach(
                                                            (e) => (e.style.minWidth = `${s.O.view.pxToRem(a)}rem`),
                                                        );
                                                    })()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof r && r(), null !== a && cancelAnimationFrame(a));
                                        }
                                    );
                                })();
                            }, [e]);
                        return (
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', a),
                                    a(),
                                    () => {
                                        (window.removeEventListener('resize', a), t.current());
                                    }
                                ),
                                [t, a],
                            ),
                            [u, a]
                        );
                    };
                var Fe = t(887),
                    De = t.n(Fe);
                const Be = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ce = (e) => e.includes('_') && ((e) => Be.includes(e))(e.split('_').at(-1)),
                    ge = [p.ExtraLarge, p.Large, p.Medium, p.Small, p.ExtraSmall],
                    he = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (Ce(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = ge.indexOf(u),
                                    s = (-1 !== n ? Be.slice(n) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = s ? e[s] : void 0;
                                return ((t[a] = void 0 !== i ? i : e[a]), t);
                            }
                            const a = e[r];
                            return (
                                void 0 === a ||
                                    ((e, u) => Be.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    pe = (e, u = he) => {
                        const t = (
                            (e, u = he) =>
                            (t) => {
                                const n = v().mediaSize,
                                    s = (0, r.useMemo)(() => u(t, n), [t, n]);
                                return a().createElement(e, s);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => Ce(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    be = {
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
                    we = [
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
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                Object.keys(De());
                const ve = {
                        XL: { mt: be.mt__XL, mr: be.mr__XL, mb: be.mb__XL, ml: be.ml__XL },
                        LG: { mt: be.mt__LG, mr: be.mr__LG, mb: be.mb__LG, ml: be.ml__LG },
                        MDp: { mt: be.mt__MDp, mr: be.mr__MDp, mb: be.mb__MDp, ml: be.ml__MDp },
                        MD: { mt: be.mt__MD, mr: be.mr__MD, mb: be.mb__MD, ml: be.ml__MD },
                        SMp: { mt: be.mt__SMp, mr: be.mr__SMp, mb: be.mb__SMp, ml: be.ml__SMp },
                        SM: { mt: be.mt__SM, mr: be.mr__SM, mb: be.mb__SM, ml: be.ml__SM },
                        XS: { mt: be.mt__XS, mr: be.mr__XS, mb: be.mb__XS, ml: be.ml__XS },
                    },
                    xe = (Object.keys(ve), ['mt', 'mr', 'mb', 'ml']),
                    Se = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Te = pe((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            s = e.m,
                            i = e.mt,
                            o = void 0 === i ? s : i,
                            l = e.mr,
                            E = void 0 === l ? s : l,
                            c = e.mb,
                            _ = void 0 === c ? s : c,
                            A = e.ml,
                            m = void 0 === A ? s : A,
                            d = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (d ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            h = e.center,
                            p = e.flexEnd,
                            b = e.spaceBetween,
                            w = e.spaceAround,
                            R = e.justifyContent,
                            v =
                                void 0 === R
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (w && 'space-around') ||
                                      void 0
                                    : R,
                            x = e.alignItems,
                            S = void 0 === x ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : x,
                            T = e.alignSelf,
                            f = e.wrap,
                            L = e.flexWrap,
                            M = void 0 === L ? (f ? 'wrap' : void 0) : L,
                            y = e.grow,
                            O = e.shrink,
                            P = e.flex,
                            N = void 0 === P ? (y || O ? `${y ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : P,
                            I = e.style,
                            k = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, we);
                        const U = (0, r.useMemo)(() => {
                                const e = { mt: o, mr: E, mb: _, ml: m },
                                    u = ((e) =>
                                        xe.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(ve[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        xe.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[Se[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: N,
                                        alignSelf: T,
                                        display: B || S ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: v,
                                        alignItems: S,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, o, E, _, m, I, N, T, B, M, v, S]),
                            G = U.computedStyle,
                            W = U.computedClassNames;
                        return a().createElement('div', Re({ className: C()(be.base, ...W, u), style: G }, H), k);
                    });
                let fe;
                function Le(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(fe || (fe = {}));
                const Me = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ye = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Oe = (e, u, t = fe.left) => e.split(u).reduce(t === fe.left ? Me : ye, []),
                    Pe = (() => {
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
                    Ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ie = ({ binding: e, text: u = '', classMix: t, alignment: n = fe.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  r.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = fe.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Ne.includes(t)
                                                                ? Pe(e)
                                                                : ((e, u = fe.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Oe(a, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Oe(e, r, fe.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              a().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ke = t(532),
                    He = t.n(ke);
                const Ue = {
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
                    Ge = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                Object.keys(De());
                const $e = Object.keys(He()),
                    Ve = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Xe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ze = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    je =
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
                            'heading-H56': Ve,
                            'heading-H36': Ve,
                            'heading-H28': Xe,
                            'heading-H24': Xe,
                            'heading-H24R': Xe,
                            'heading-H22': Xe,
                            'heading-H20R': Xe,
                            'heading-H18': Xe,
                            'heading-H15': ze,
                            'heading-H14': ze,
                            'paragraph-P24': Xe,
                            'paragraph-P18': Xe,
                            'paragraph-P16': Xe,
                            'paragraph-P14': ze,
                            'paragraph-P12': ze,
                            'paragraph-P10': ze,
                        }),
                    Ye =
                        (Object.keys(je),
                        (e) =>
                            e
                                ? ((e) => $e.includes(e))(e)
                                    ? { colorClassName: Ue[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    qe = pe((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
                            E = e.mr,
                            c = void 0 === E ? i : E,
                            _ = e.mb,
                            A = void 0 === _ ? i : _,
                            m = e.ml,
                            d = void 0 === m ? i : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ge);
                        const g = (0, r.useMemo)(() => {
                                const e = Ye(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, s]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return a().createElement(
                            Te,
                            We(
                                {
                                    className: C()(Ue.base, t && Ue[t], p, n),
                                    style: h,
                                    mt: !0 === l ? je[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === c ? je[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === A ? je[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === d ? je[t || 'paragraph-P16'].ml : d,
                                },
                                B,
                            ),
                            void 0 !== D ? a().createElement(Ie, We({}, D, { text: u })) : u,
                        );
                    });
                let Ke, Qe, Ze, Je, eu, uu, tu;
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
                        (e.Entitlements = 'entitlements'),
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
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (e.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (e.SACoin = 'sacoin'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.NyPetGoodies = 'nyPetGoodies'),
                        (e.HiddenVehicle = 'hidden_vehicle'),
                        (e.NyStaticDogTag = 'nyStaticDogTag'),
                        (e.Ny26Toys = 'ny26Toys'));
                })(Ke || (Ke = {})),
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
                    })(Qe || (Qe = {})),
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
                    })(Ze || (Ze = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Je || (Je = {})),
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
                    })(eu || (eu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(uu || (uu = {})),
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
                    })(tu || (tu = {})));
                class ru extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? $.B3.GOLD : $.B3.INTEGRAL;
                        const u = $.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ru.defaultProps = { format: 'integral' };
                const au = [
                        Ke.Items,
                        Ke.Equipment,
                        Ke.Xp,
                        Ke.XpFactor,
                        Ke.Blueprints,
                        Ke.BlueprintsAny,
                        Ke.Goodies,
                        Ke.Berths,
                        Ke.Slots,
                        Ke.Tokens,
                        Ke.CrewSkins,
                        Ke.CrewBooks,
                        Ke.Customizations,
                        Ke.CreditsFactor,
                        Ke.TankmenXp,
                        Ke.TankmenXpFactor,
                        Ke.FreeXpFactor,
                        Ke.BattleToken,
                        Ke.Entitlements,
                        Ke.PremiumUniversal,
                        Ke.NaturalCover,
                        Ke.BpCoin,
                        Ke.BattlePassSelectToken,
                        Ke.BattlaPassFinalAchievement,
                        Ke.BattleBadge,
                        Ke.BonusX5,
                        Ke.CrewBonusX3,
                        Ke.NewYearFillers,
                        Ke.NewYearInvoice,
                        Ke.EpicSelectToken,
                        Ke.Comp7TokenWeeklyReward,
                        Ke.Comp7TokenCouponReward,
                        Ke.BattleBoosterGift,
                        Ke.NewYearFillers,
                        Ke.NewYearInvoice,
                        Ke.LootBoxToken,
                        Ke.CosmicLootboxCommon,
                        Ke.CosmicLootboxSilver,
                        Ke.SelectableBonus,
                        Ke.GoldenTicket,
                        Ke.PostStamp,
                        Ke.BlankPersonalMissions_1,
                        Ke.BlankPersonalMissions_2,
                        Ke.SACoin,
                        Ke.PremiumPlusUniversal,
                        Ke.NyPetGoodies,
                        Ke.HiddenVehicle,
                    ],
                    nu = [Ke.Gold, Ke.Credits, Ke.Crystal, Ke.FreeXp, Ke.NewYearToyFragments],
                    su = [Ke.BattlePassPoints],
                    iu = [Ke.PremiumPlus, Ke.Premium];
                let ou;
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
                })(ou || (ou = {}));
                const lu = ['engravings', 'backgrounds'],
                    Eu = ['engraving', 'background'],
                    cu = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    _u = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case eu.BATTLE_BOOSTER:
                                return tu.BATTLE_BOOSTER;
                            case eu.BATTLE_BOOSTER_REPLACE:
                                return tu.BATTLE_BOOSTER_REPLACE;
                            case eu.BUILT_IN_EQUIPMENT:
                                return tu.BUILT_IN_EQUIPMENT;
                            case eu.EQUIPMENT_PLUS:
                                return tu.EQUIPMENT_PLUS;
                            case eu.EQUIPMENT_TROPHY_BASIC:
                                return tu.EQUIPMENT_TROPHY_BASIC;
                            case eu.EQUIPMENT_TROPHY_UPGRADED:
                                return tu.EQUIPMENT_TROPHY_UPGRADED;
                            case eu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return tu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case eu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return tu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case eu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return tu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case eu.PROGRESSION_STYLE_UPGRADED_1:
                                return tu.PROGRESSION_STYLE_UPGRADED_1;
                            case eu.PROGRESSION_STYLE_UPGRADED_2:
                                return tu.PROGRESSION_STYLE_UPGRADED_2;
                            case eu.PROGRESSION_STYLE_UPGRADED_3:
                                return tu.PROGRESSION_STYLE_UPGRADED_3;
                            case eu.PROGRESSION_STYLE_UPGRADED_4:
                                return tu.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    Au = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Je.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Je.CURRENCY:
                            case Je.NUMBER:
                                return a().createElement(ru, { format: 'integral', value: Number(e) });
                            case Je.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    mu = (e, u, t) => {
                        var r;
                        const a = e.$dyn(u);
                        return null != (r = null == a ? void 0 : a.$dyn(t)) ? r : null;
                    },
                    du = 'R.images.winback.gui.maps.icons';
                let Fu;
                !(function (e) {
                    ((e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                        (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'));
                })(Fu || (Fu = {}));
                const Du = (e, u = Ze.Small) => {
                    const t = e.name;
                    if (e.isCompensation && t === Ke.Credits) return `${du}.quests.bonuses.${u}.${t}`;
                    switch (t) {
                        case Fu.SELECTABLE_VEHICLE_FOR_GIFT:
                            return `${du}.progression.tank_reward`;
                        case Fu.SELECTABLE_VEHICLE_DISCOUNT:
                            return `${du}.progression.tank_discount`;
                        default:
                            return ((e, u = Ze.Small, t) => {
                                const r = e.name,
                                    a = e.type,
                                    n = e.value,
                                    s = e.icon,
                                    i = e.item,
                                    o = e.dogTagType,
                                    l = ((e) => {
                                        switch (e) {
                                            case Ze.S600x450:
                                                return 'c_600x450';
                                            case Ze.S400x300:
                                                return 'c_400x300';
                                            case Ze.S296x222:
                                                return 'c_296x222';
                                            case Ze.S232x174:
                                                return 'c_232x174';
                                            case Ze.Big:
                                                return 'c_80x80';
                                            case Ze.Small:
                                                return 'c_48x48';
                                            default:
                                                return e;
                                        }
                                    })(u);
                                switch (r) {
                                    case 'basic':
                                    case 'plus':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                                    case 'premium':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_plus_${n}`;
                                    case 'premium_plus':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                                    case 'items':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                                    case 'blueprints':
                                    case 'blueprintsAny':
                                    case 'finalBlueprints':
                                        return `R.images.gui.maps.icons.blueprints.fragment.${u}.${s}`;
                                    case 'tokens':
                                    case 'battleToken':
                                        return ((e, u) => {
                                            switch (u) {
                                                case Ze.Big:
                                                    return e.iconBig.replace('..', 'img://gui');
                                                case Ze.Small:
                                                    return e.iconSmall.replace('..', 'img://gui');
                                                default:
                                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                            }
                                        })(e, u);
                                    case 'entitlements':
                                        return 'big' === u
                                            ? e.iconBig.replace('..', 'img://gui')
                                            : e.iconSmall.replace('..', 'img://gui');
                                    case 'crewBooks':
                                        return `R.images.gui.maps.icons.crewBooks.books.${u}.${s}`;
                                    case 'dogTagComponents':
                                        return ((e, u, t) => {
                                            const r = lu[e];
                                            if (r) {
                                                const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                                    n = a.$dyn(t);
                                                return n ? `${n}` : `${a.$dyn(Eu[e])}`;
                                            }
                                            return (
                                                console.error(
                                                    'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                ),
                                                ''
                                            );
                                        })(o, u, s);
                                    case 'dossier_badge':
                                        return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                                    case 'dossier_achievement':
                                        return `R.images.gui.maps.icons.achievement.${((e) => {
                                            switch (e) {
                                                case Ze.S600x450:
                                                    return 'c_600x450';
                                                case Ze.S400x300:
                                                    return 'c_400x300';
                                                case Ze.S296x222:
                                                    return 'c_296x222';
                                                case Ze.S232x174:
                                                    return 'c_232x174';
                                                case Ze.S180x135:
                                                    return 'big';
                                                case Ze.Big:
                                                case Ze.S80x80:
                                                    return 'c_80x80';
                                                case Ze.Small:
                                                case Ze.S48x48:
                                                    return 'c_48x48';
                                                default:
                                                    return e;
                                            }
                                        })(u)}.${s}`;
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
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                                    case 'nyPetGoodies':
                                        return `R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.${u}.${s}`;
                                    case 'premiumTank':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                    case 'styleProgressToken':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                    case 'collectionItem':
                                        return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                                    case 'premium_universal':
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                                    case 'armory_coin':
                                        return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                            switch (e) {
                                                case Ze.Mini:
                                                    return ou.s32;
                                                case Ze.Small:
                                                case Ze.S48x48:
                                                    return ou.s48;
                                                case Ze.S80x80:
                                                case Ze.Big:
                                                    return ou.s80;
                                                case Ze.S128x100:
                                                    return ou.s116;
                                                case Ze.S180x135:
                                                case Ze.S232x174:
                                                case Ze.S296x222:
                                                    return ou.s296;
                                                case Ze.S400x300:
                                                    return ou.s400;
                                                case Ze.S600x450:
                                                    return ou.s600;
                                            }
                                        })(u)}`;
                                    case 'newYearAlbumsAccess':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.albumsAccess`;
                                    case 'nyFillers':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.fillers`;
                                    case 'nyToyFragments':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.shards`;
                                    case 'newYearSlot':
                                        return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.slot`;
                                    case 'hidden_vehicle':
                                        return 'R.images.new_year.gui.maps.icons.newYear.common.rewards.vehicles.hidden_vehicle';
                                    case 'nyStaticDogTag':
                                        return `R.images.new_year.gui.maps.icons.newYear.common.rewards.dogtags.${u}.dogtag_${t}`;
                                    default:
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                                }
                            })(e, u);
                    }
                };
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const Cu = R.strings.winback.winbackRewardView,
                    gu = (0, z.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            n = (0, r.useContext)(ht).secondRowRewardsShowed,
                            s = de(`.${oe.base}`)[0],
                            i = u.progressionName.get(),
                            o = u.computes.hasSelectableRewards(),
                            l = u.state.get(),
                            E = { size: Ee.medium, mixClass: 'Actions_button_0c', disabled: !n };
                        return u.isFirstProgressionStep.get()
                            ? a().createElement(
                                  'div',
                                  { className: Ae, ref: s },
                                  a().createElement(
                                      _e,
                                      Bu({ onClick: t.showQuests, type: le.primary }, E),
                                      Cu.buttons.showQuests(),
                                  ),
                              )
                            : o
                              ? a().createElement(
                                    'div',
                                    { className: C()(Ae, me), ref: s },
                                    a().createElement(
                                        _e,
                                        Bu({ onClick: t.selectReward, type: le.primary }, E),
                                        Cu.buttons.selectReward(),
                                    ),
                                    a().createElement(
                                        _e,
                                        Bu({ onClick: t.close, type: le.secondary }, E),
                                        Cu.buttons.confirm(),
                                    ),
                                )
                              : u.computes.hasOnlyVehicleForGiftReward()
                                ? a().createElement(
                                      'div',
                                      {
                                          className: C()(Ae, (o || u.computes.hasOnlyVehicleForGiftReward()) && me),
                                          ref: s,
                                      },
                                      a().createElement(
                                          _e,
                                          Bu({ onClick: t.showVehicle, type: le.primary }, E),
                                          Cu.buttons.showVehicle(),
                                      ),
                                      a().createElement(
                                          _e,
                                          Bu({ onClick: t.close, type: le.secondary }, E),
                                          Cu.buttons.confirm(),
                                      ),
                                  )
                                : a().createElement(
                                      'div',
                                      { className: Ae, ref: s },
                                      l !== Y.PROGRESSION_STEP &&
                                          a().createElement(qe, {
                                              className: 'Actions_text_5c',
                                              text: mu(Cu.finalStage, i, 'complete'),
                                          }),
                                      a().createElement(
                                          _e,
                                          Bu({ type: le.primary, onClick: t.close }, E),
                                          Cu.buttons.confirm(),
                                      ),
                                  );
                    }),
                    hu = {
                        base: 'Header_base_5a',
                        subTitle: 'Header_subTitle_a0',
                        subTitle__top: 'Header_subTitle__top_86',
                        subTitle__bottom: 'Header_subTitle__bottom_ac',
                        title: 'Header_title_a3',
                        title__welcome: 'Header_title__welcome_b2',
                    },
                    pu = R.strings.winback.winbackRewardView,
                    bu = [Y.SELECTED_REWARDS, Y.PROGRESSION_STEP],
                    wu = (0, z.Pi)(() => {
                        const e = ie().model,
                            u = e.state.get(),
                            t = e.stageNumber.get(),
                            r = e.progressionName.get();
                        return a().createElement(
                            'div',
                            { className: hu.base },
                            bu.includes(u) &&
                                a().createElement(qe, {
                                    className: C()(hu.subTitle, hu.subTitle__top),
                                    text: mu(pu.title, r, 'inProgress'),
                                }),
                            u === Y.PROGRESSION_STEP &&
                                a().createElement(Ie, {
                                    text: mu(pu.subtitle, r, 'inProgress'),
                                    classMix: C()(hu.title, hu[`title__${u}`]),
                                    binding: { level: t },
                                }),
                            u === Y.SELECTED_REWARDS &&
                                a().createElement(qe, {
                                    className: C()(hu.title, hu[`title__${u}`]),
                                    text: pu.title.$dyn(u),
                                }),
                            u === Y.PROGRESSION_COMPLETED &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(qe, {
                                        className: C()(hu.subTitle, hu.subTitle__top),
                                        text: mu(pu.subtitle, r, 'complete'),
                                    }),
                                    a().createElement(qe, {
                                        className: C()(hu.title, hu[`title__${u}`]),
                                        text: pu.title.winback.complete(),
                                    }),
                                ),
                        );
                    });
                var Ru = t(30);
                const vu = (e, u) => {
                        return {
                            name: e.name,
                            image: Du(e, u),
                            value: e.value,
                            valueType:
                                ((t = e.name),
                                au.includes(t)
                                    ? Je.MULTI
                                    : nu.includes(t)
                                      ? Je.CURRENCY
                                      : su.includes(t)
                                        ? Je.NUMBER
                                        : iu.includes(t)
                                          ? Je.PREMIUM_PLUS
                                          : Je.STRING),
                            special: e.overlayType,
                            tooltipArgs: cu({ [j]: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 }),
                        };
                        var t;
                    },
                    xu = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    Su = ({ index: e = 0, delay: u = 0, onEnd: t, children: r }) => {
                        const n = (0, Ru.useSpring)({
                            from: { transform: 'translateY(20rem)', opacity: 0 },
                            to: { transform: 'translateY(0rem)', opacity: 1 },
                            delay: u + 100 * e,
                            config: { duration: 400, easing: xu },
                            onStart: () => {
                                I('gui_random_reward_appear');
                            },
                            onRest: t,
                        });
                        return a().createElement(Ru.animated.div, { className: 'AnimatedReward_base_6f', style: n }, r);
                    },
                    Tu = {
                        reward__offset180: 'FirstRowRewardsResolver_reward__offset180_c4',
                        reward__offset360: 'FirstRowRewardsResolver_reward__offset360_c0',
                        reward__offset600: 'FirstRowRewardsResolver_reward__offset600_47',
                    },
                    fu = [
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
                function Lu(e) {
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
                const Mu = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    yu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = e.ignoreMouseClick,
                            _ = void 0 !== c && c,
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
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, fu);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            w = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Mu(t, m, { isMouseEvent: !0, on: !0, arguments: Lu(a) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, a, b, C]),
                            v = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Mu(t, m, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            x = (0, r.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e));
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
                            ),
                            F
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Ou = ['children'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ou);
                        return a().createElement(
                            yu,
                            Pu(
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
                    Iu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Hu = R.views.common.tooltip_window.simple_tooltip_content,
                    Uu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Iu);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, s, o]);
                        return a().createElement(
                            yu,
                            ku(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Hu.SimpleTooltipHtmlContent('resId') : Hu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            u,
                        );
                        var c;
                    };
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const Wu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Uu, u, r);
                        const n = u.contentId,
                            s = u.args,
                            i = null == s ? void 0 : s.contentId;
                        return n || i
                            ? a().createElement(yu, Gu({}, u, { contentId: n || i }), r)
                            : a().createElement(Nu, u, r);
                    },
                    $u = {
                        base: 'RegularReward_base_c3',
                        base__size180: 'RegularReward_base__size180_c4',
                        base__size232: 'RegularReward_base__size232_1f',
                        base__size296: 'RegularReward_base__size296_b6',
                        base__size360: 'RegularReward_base__size360_a2',
                        base__size400: 'RegularReward_base__size400_87',
                        base__size600: 'RegularReward_base__size600_eb',
                        image: 'RegularReward_image_55',
                        overlay: 'RegularReward_overlay_42',
                        value: 'RegularReward_value_38',
                        value__multi: 'RegularReward_value__multi_70',
                        value__crystal: 'RegularReward_value__crystal_db',
                        value__premium_plus: 'RegularReward_value__premium_plus_9b',
                        premiumPlusText: 'RegularReward_premiumPlusText_da',
                    },
                    Vu = {
                        180: Ze.S180x135,
                        232: Ze.S232x174,
                        296: Ze.S296x222,
                        360: Ze.S400x300,
                        400: Ze.S400x300,
                        600: Ze.S600x450,
                    },
                    Xu = ({ size: e, bonus: u, className: t }) => {
                        const r = Vu[e],
                            n = vu(u, r),
                            s = n.name,
                            i = n.image,
                            o = n.value,
                            l = n.valueType,
                            E = n.special,
                            c = n.tooltipArgs,
                            _ = Au(o, l),
                            A = _u(E);
                        return a().createElement(
                            Wu,
                            { tooltipArgs: c },
                            a().createElement(
                                'div',
                                { className: C()($u.base, $u[`base__size${e}`], t) },
                                a().createElement('div', {
                                    className: $u.image,
                                    style: { backgroundImage: `url(${i})` },
                                }),
                                Boolean(A) &&
                                    a().createElement('div', {
                                        className: $u.overlay,
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_overlay)`,
                                        },
                                    }),
                                a().createElement(
                                    'div',
                                    { className: C()($u.value, $u[`value__${s}`], $u[`value__${l}`]) },
                                    _,
                                    s === Qe.PremiumPlus &&
                                        '14' === o &&
                                        a().createElement(Ie, {
                                            text: R.strings.winback.winbackRewardView.premiumPlus(),
                                            classMix: $u.premiumPlusText,
                                        }),
                                ),
                            ),
                        );
                    },
                    zu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ju = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Yu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    qu = (e) =>
                        Yu
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = ju.length - 1; t >= 0; t--)
                                      for (; e >= ju[t]; ) ((u += zu[t]), (e -= ju[t]));
                                  return u;
                              })(e),
                    Ku = {
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
                    Qu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Zu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ju = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    et = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, r.useMemo)(() => u || {}, [u]);
                        let i = Qu.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                r = Zu.exec(t),
                                E = Ju.exec(t),
                                c = i[1];
                            if (r && E) {
                                const e = r[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (s[i] = Ku[e]
                                        ? a().createElement(
                                              'span',
                                              { className: Ku[e] },
                                              a().createElement(Ie, { text: c, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: n(e) },
                                              a().createElement(Ie, { text: c, binding: u }),
                                          )));
                            }
                            i = Qu.exec(e);
                        }
                        return a().createElement(Ie, { text: o, classMix: t, binding: s });
                    }),
                    ut = {
                        base: 'SelectableReward_base_82',
                        base__size180: 'SelectableReward_base__size180_3c',
                        base__size360: 'SelectableReward_base__size360_7c',
                        base__size600: 'SelectableReward_base__size600_b0',
                        image: 'SelectableReward_image_dd',
                        levelMark: 'SelectableReward_levelMark_ba',
                        discountMark: 'SelectableReward_discountMark_36',
                        title: 'SelectableReward_title_4a',
                        title__bold: 'SelectableReward_title__bold_9f',
                    },
                    tt = R.strings.winback.winbackRewardView.selectableReward,
                    rt = ({
                        tooltipId: e,
                        tooltipContentId: u,
                        vehicleLvl: t,
                        name: r,
                        size: n,
                        className: s,
                        priceDiscount: i,
                        expDiscount: o,
                    }) => {
                        const l = r === q.SELECTABLE_VEHICLE_DISCOUNT,
                            E = qu(t);
                        return a().createElement(
                            Wu,
                            { tooltipArgs: cu({ [j]: e }, Number(u), { ignoreShowDelay: !0 }) },
                            a().createElement(
                                'div',
                                { className: C()(ut.base, ut[`base__size${n}`], s) },
                                a().createElement(
                                    'div',
                                    { className: ut.image },
                                    a().createElement('div', { className: ut.levelMark }, E),
                                    l && a().createElement('div', { className: ut.discountMark }),
                                ),
                                l && 0 !== o && 0 !== i
                                    ? a().createElement(Ie, {
                                          text: tt.discount(),
                                          binding: {
                                              level: E,
                                              expDiscount: a().createElement(et, {
                                                  text: tt.expDiscount(),
                                                  binding: { expDiscount: o },
                                                  classMix: ut.title__bold,
                                              }),
                                              priceDiscount: a().createElement(et, {
                                                  text: tt.priceDiscount(),
                                                  binding: { priceDiscount: i },
                                                  classMix: ut.title__bold,
                                              }),
                                          },
                                          classMix: ut.title,
                                      })
                                    : a().createElement(Ie, {
                                          text: l ? tt.reserveDiscount() : tt.gift(),
                                          binding: { level: E },
                                          classMix: ut.title,
                                      }),
                            ),
                        );
                    },
                    at = {
                        base: 'VehicleReward_base_0d',
                        base__size180: 'VehicleReward_base__size180_c8',
                        base__size360: 'VehicleReward_base__size360_53',
                        base__size600: 'VehicleReward_base__size600_af',
                        content: 'VehicleReward_content_15',
                        image: 'VehicleReward_image_a1',
                        rentImage: 'VehicleReward_rentImage_04',
                        discountMark: 'VehicleReward_discountMark_a7',
                        title: 'VehicleReward_title_17',
                        nation: 'VehicleReward_nation_d5',
                        typeContainer: 'VehicleReward_typeContainer_c4',
                        type: 'VehicleReward_type_4d',
                        description: 'VehicleReward_description_b5',
                        rent: 'VehicleReward_rent_9a',
                        rentIcon: 'VehicleReward_rentIcon_7e',
                        discountText: 'VehicleReward_discountText_e8',
                        discountText__bold: 'VehicleReward_discountText__bold_b0',
                        discountText__reserveDiscount: 'VehicleReward_discountText__reserveDiscount_04',
                    },
                    nt = { 180: '180x135', 360: '360x270', 600: '600x450' },
                    st = R.strings.winback.winbackRewardView.vehicleReward,
                    it = ({
                        name: e,
                        tooltipId: u,
                        tooltipContentId: t,
                        isElite: r,
                        vehicleName: n,
                        vehicleLvl: s,
                        vehicleType: i,
                        userName: o,
                        nation: l,
                        size: E,
                        rentDuration: c,
                        className: _,
                        priceDiscount: A,
                        expDiscount: m,
                    }) => {
                        const d = e === q.VEHICLE_FOR_RENT,
                            F = e === q.VEHICLE_DISCOUNT,
                            D = `R.images.gui.maps.shop.vehicles.c_${nt[E]}.${Le(n)}`,
                            B = `R.images.gui.maps.icons.filters.nations.${l}`,
                            g = Le(i),
                            h =
                                'R.images.gui.maps.icons.vehicleTypes.' +
                                (r
                                    ? 180 === E
                                        ? `elite.${g}`
                                        : `big.${g}_elite`
                                    : 180 === E
                                      ? `c_24x24.${g}`
                                      : `big.${g}`),
                            p = 0 !== m && 0 === A,
                            b = 0 === m && 0 !== A,
                            w = 0 !== m && 0 !== A;
                        return a().createElement(
                            Wu,
                            { tooltipArgs: cu({ [j]: u }, Number(t), { ignoreShowDelay: !0 }) },
                            a().createElement(
                                'div',
                                { className: C()(at.base, at[`base__size${E}`], _) },
                                a().createElement(
                                    'div',
                                    { className: at.content },
                                    a().createElement('div', {
                                        className: at.image,
                                        style: { backgroundImage: `url('${D}')` },
                                    }),
                                    d && a().createElement('div', { className: at.rentImage }),
                                    F && a().createElement('div', { className: at.discountMark }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: at.title },
                                    a().createElement('div', {
                                        className: at.nation,
                                        style: { backgroundImage: `url('${B}')` },
                                    }),
                                    qu(s),
                                    a().createElement(
                                        'div',
                                        { className: at.typeContainer },
                                        a().createElement('div', {
                                            className: at.type,
                                            style: { backgroundImage: `url('${h}')` },
                                        }),
                                    ),
                                    o,
                                ),
                                a().createElement(
                                    'div',
                                    { className: at.description },
                                    d &&
                                        a().createElement(
                                            'div',
                                            { className: at.rent },
                                            a().createElement('div', { className: at.rentIcon }),
                                            a().createElement(Ie, { text: st.rent(), binding: { days: c } }),
                                        ),
                                    F &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            w &&
                                                a().createElement(Ie, {
                                                    text: st.discount(),
                                                    binding: {
                                                        expDiscount: a().createElement(et, {
                                                            text: st.expDiscount(),
                                                            binding: { expDiscount: m },
                                                            classMix: at.discountText__bold,
                                                        }),
                                                        priceDiscount: a().createElement(et, {
                                                            text: st.priceDiscount(),
                                                            binding: { priceDiscount: A },
                                                            classMix: at.discountText__bold,
                                                        }),
                                                    },
                                                    classMix: at.discountText,
                                                }),
                                            p &&
                                                a().createElement(Ie, {
                                                    text: st.exp.discount(),
                                                    binding: {
                                                        expDiscount: a().createElement(et, {
                                                            text: st.expDiscount(),
                                                            binding: { expDiscount: m },
                                                            classMix: at.discountText__bold,
                                                        }),
                                                    },
                                                    classMix: at.discountText,
                                                }),
                                            b &&
                                                a().createElement(Ie, {
                                                    text: st.price.discount(),
                                                    binding: {
                                                        priceDiscount: a().createElement(et, {
                                                            text: st.priceDiscount(),
                                                            binding: { priceDiscount: A },
                                                            classMix: at.discountText__bold,
                                                        }),
                                                    },
                                                    classMix: at.discountText,
                                                }),
                                        ),
                                ),
                            ),
                        );
                    };
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const lt = {
                        [p.ExtraSmall]: [400, 400, 296, 232],
                        [p.Small]: [400, 400, 296, 296],
                        [p.Medium]: [400, 400, 400, 296],
                        [p.Large]: [600, 600, 400, 400, 400, 400],
                        [p.ExtraLarge]: [600, 600, 600, 400, 400],
                    },
                    Et = {
                        [p.ExtraSmall]: [360, 360, 180, 180, 180],
                        [p.Small]: [360, 360, 360, 180, 180],
                        [p.Medium]: [360, 360, 360, 360, 180],
                        [p.Large]: [600, 600, 360, 360, 360, 360, 360],
                        [p.ExtraLarge]: [600, 600, 600, 360, 360, 360],
                    },
                    ct = (0, z.Pi)(({ reward: e }) => {
                        const u = ie().model,
                            t = v().mediaSize,
                            r = u.computes.getFirstRowRewards().length - 1,
                            n = u.computes.hasVehicleRewards() || u.computes.hasSelectableRewards(),
                            s = Et[t][r],
                            i = n ? s : lt[t][r];
                        switch (e.name) {
                            case q.VEHICLE_FOR_GIFT:
                            case q.VEHICLE_DISCOUNT:
                            case q.VEHICLE_FOR_RENT:
                                return a().createElement(it, ot({}, e, { size: s }));
                            case q.SELECTABLE_VEHICLE_FOR_GIFT:
                            case q.SELECTABLE_VEHICLE_DISCOUNT:
                                return a().createElement(rt, ot({}, e, { size: s }));
                            default:
                                return a().createElement(Xu, {
                                    bonus: e,
                                    size: i,
                                    className: C()(Tu.reward, n && Tu[`reward__offset${i}`]),
                                });
                        }
                    }),
                    _t = {
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
                    At = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Ze.Big,
                        special: n,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: E,
                        tooltipArgs: c,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case eu.BATTLE_BOOSTER:
                                    case eu.BATTLE_BOOSTER_REPLACE:
                                        return uu.BATTLE_BOOSTER;
                                }
                            })(n),
                            m = _u(n),
                            d = Au(s, i);
                        return a().createElement(
                            'div',
                            { className: C()(_t.base, _t[`base__${r}`], l), style: o },
                            a().createElement(
                                Wu,
                                { tooltipArgs: c, className: _t.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: C()(_t.image, null == E ? void 0 : E.image) },
                                        A &&
                                            a().createElement('div', {
                                                className: C()(_t.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            a().createElement('div', {
                                                className: C()(_t.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            a().createElement('div', {
                                                className: C()(_t.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    _t.info,
                                                    _t[`info__${e}`],
                                                    i === Je.MULTI && _t.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    Wu,
                                    { tooltipArgs: _ },
                                    a().createElement('div', {
                                        className: C()(_t.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    mt = 'SecondRowRewardsResolver_reward_2c',
                    dt = {
                        base: 'VehicleReward_base_f3',
                        base__big: 'VehicleReward_base__big_46',
                        imageWrapper: 'VehicleReward_imageWrapper_b9',
                        image: 'VehicleReward_image_e3',
                        levelMark: 'VehicleReward_levelMark_21',
                        discountIcon: 'VehicleReward_discountIcon_d9',
                        name: 'VehicleReward_name_c7',
                    },
                    Ft = ({
                        name: e,
                        vehicleName: u,
                        tooltipId: t,
                        tooltipContentId: r,
                        vehicleLvl: n,
                        userName: s,
                        size: i,
                        className: o,
                    }) => {
                        const l = e === q.VEHICLE_DISCOUNT,
                            E = Le(u).toLowerCase();
                        return a().createElement(
                            Wu,
                            { tooltipArgs: cu({ [j]: t }, Number(r), { ignoreShowDelay: !0 }) },
                            a().createElement(
                                'div',
                                { className: C()(dt.base, dt[`base__${i}`], o) },
                                a().createElement(
                                    'div',
                                    { className: dt.imageWrapper },
                                    a().createElement('div', {
                                        className: dt.image,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehicle.c_420x307.${E}')`,
                                        },
                                    }),
                                    l && a().createElement('div', { className: dt.discountIcon }),
                                    a().createElement('div', { className: dt.levelMark }, qu(n)),
                                ),
                                a().createElement('div', { className: dt.name }, s),
                            ),
                        );
                    };
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const Bt = ({ reward: e }) => {
                        const u = v().mediaSize >= p.Medium ? Ze.Big : Ze.Small;
                        switch (e.name) {
                            case q.SELECTABLE_VEHICLE_DISCOUNT:
                            case q.SELECTABLE_VEHICLE_FOR_GIFT:
                                return null;
                            case q.VEHICLE_FOR_RENT:
                            case q.VEHICLE_FOR_GIFT:
                            case q.VEHICLE_DISCOUNT:
                                return a().createElement(Ft, Dt({}, e, { size: u, className: mt }));
                            default:
                                return a().createElement(At, Dt({}, vu(e, u), { size: u, className: mt }));
                        }
                    },
                    Ct = {
                        base: 'Rewards_base_5f',
                        firstRow: 'Rewards_firstRow_52',
                        lines: 'Rewards_lines_97',
                        fadeInUp: 'Rewards_fadeInUp_dc',
                        rotate: 'Rewards_rotate_03',
                        glow: 'Rewards_glow_9d',
                        fadeIn: 'Rewards_fadeIn_88',
                        ribbonWrapper: 'Rewards_ribbonWrapper_d2',
                        ribbon: 'Rewards_ribbon_49',
                        ribbon__gold: 'Rewards_ribbon__gold_47',
                        secondRow: 'Rewards_secondRow_67',
                        secondRowTitle: 'Rewards_secondRowTitle_fc',
                        secondRowRewards: 'Rewards_secondRowRewards_26',
                    },
                    gt = (0, z.Pi)(() => {
                        const e = ie().model,
                            u = e.computes.isRibbonGold() || e.computes.hasSelectableRewards(),
                            t = e.computes.isLinesVisible(),
                            n = e.computes.isGlowVisible(),
                            i = e.computes.getFirstRowRewards(),
                            o = e.computes.getSecondRowRewards(),
                            l = (0, r.useContext)(ht),
                            E = l.firstRowRewardsShowed,
                            c = l.setFirstRowRewardsShowed,
                            _ = l.setSecondRowRewardsShowed,
                            A = s.O.client.graphicsQuality.isLow(),
                            m = (0, r.useCallback)(() => {
                                c(!0);
                            }, [c]),
                            d = (0, r.useCallback)(() => {
                                _(!0);
                            }, [_]);
                        return (
                            (0, r.useEffect)(() => {
                                0 === o.length && E && _(!0);
                            }, [E, o, _]),
                            a().createElement(
                                'div',
                                { className: C()(Ct.base, o.length && Ct.base__withSecondRow) },
                                a().createElement(
                                    'div',
                                    { className: Ct.firstRow },
                                    n && !A && a().createElement('div', { className: Ct.glow }),
                                    a().createElement(
                                        'div',
                                        { className: Ct.ribbonWrapper },
                                        a().createElement('div', { className: C()(Ct.ribbon, u && Ct.ribbon__gold) }),
                                    ),
                                    t && !A && a().createElement('div', { className: Ct.lines }),
                                    i.map((e, u) =>
                                        a().createElement(
                                            Su,
                                            {
                                                key: e.index,
                                                index: u,
                                                delay: 900,
                                                onEnd: u === i.length - 1 ? m : void 0,
                                            },
                                            a().createElement(ct, { reward: e }),
                                        ),
                                    ),
                                ),
                                Boolean(o.length) &&
                                    E &&
                                    a().createElement(
                                        'div',
                                        { className: Ct.secondRow },
                                        a().createElement(
                                            'div',
                                            { className: Ct.secondRowTitle },
                                            R.strings.winback.winbackRewardView.secondRowTitle(),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: Ct.secondRowRewards },
                                            o.map((e, u) =>
                                                a().createElement(
                                                    Su,
                                                    {
                                                        key: e.index,
                                                        index: u,
                                                        delay: 200,
                                                        onEnd: u === o.length - 1 ? d : void 0,
                                                    },
                                                    a().createElement(Bt, { reward: e }),
                                                ),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    }),
                    ht = (0, r.createContext)({}),
                    pt = (0, z.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            n = v().remScreenWidth,
                            i = s.O.client.graphicsQuality.isLow(),
                            o = (0, r.useState)(!1),
                            l = o[0],
                            E = o[1],
                            c = (0, r.useState)(!1),
                            _ = c[0],
                            A = c[1],
                            m = (0, r.useMemo)(
                                () => ({
                                    firstRowRewardsShowed: l,
                                    secondRowRewardsShowed: _,
                                    setFirstRowRewardsShowed: E,
                                    setSecondRowRewardsShowed: A,
                                }),
                                [l, _],
                            );
                        var d;
                        (a().useLayoutEffect(() => {
                            t.setFirstRowMaxRewardsCount(n < 2048 ? 5 : 6);
                        }, [t, n]),
                            (d = t.close),
                            X(W.n.ESCAPE, d));
                        const F = Boolean(u.computes.getSecondRowRewards().length),
                            D = `R.images.winback.gui.maps.icons.rewardsView.bg_${u.progressionName.get()}${i ? '_dds' : ''}`;
                        return a().createElement(
                            ht.Provider,
                            { value: m },
                            a().createElement(
                                'div',
                                { className: 'App_base_ed', style: { backgroundImage: `url(${D})` } },
                                a().createElement(
                                    'div',
                                    { className: 'App_closeButton_cc' },
                                    a().createElement(G, {
                                        caption: R.strings.winback.winbackRewardView.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                a().createElement('div', { className: 'App_header_a0' }, a().createElement(wu, null)),
                                a().createElement(
                                    'div',
                                    { className: C()('App_rewards_95', F && 'App_rewards__twoRows_41') },
                                    a().createElement(gt, null),
                                ),
                                a().createElement(
                                    'div',
                                    { className: C()('App_actions_95', _ && 'App_actions__appear_6b') },
                                    a().createElement(gu, null),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(se, null, a().createElement(O, null, a().createElement(pt, null))),
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
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
        (__webpack_require__.j = 907),
        (() => {
            var e = { 907: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        a,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((a = n[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(147));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
