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
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => g,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function C() {
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
                const v = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
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
                    })(n || (n = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                t.d(u, { B3: () => c, Gr: () => m, Z5: () => s, B0: () => i, ry: () => p, Sy: () => C });
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
                const n = r;
                var a = t(1358);
                const s = {
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
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const g = ['args'];
                function F(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    C = () => B(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                E = o.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(d),
                                on: !0,
                                args: a,
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
                            h(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            3588: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => qr,
                        Bar: () => Gr,
                        DefaultScroll: () => Wr,
                        Direction: () => Tr,
                        defaultSettings: () => xr,
                        useHorizontalScrollApi: () => Lr,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => tn, Bar: () => Jr, Default: () => un, useVerticalScrollApi: () => zr }));
                var a = t(6179),
                    s = t.n(a);
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e, u, t) {
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
                        n = (function (e, u) {
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
                const E = i.O.client.getSize('rem'),
                    d = E.width,
                    _ = E.height,
                    A = Object.assign({ width: d, height: _ }, m(d, _, l)),
                    g = (0, a.createContext)(A),
                    F = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, F);
                        const r = (0, a.useContext)(g),
                            n = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            m = r.extraLargeWidth,
                            E = r.largeWidth,
                            d = r.mediumWidth,
                            _ = r.smallWidth,
                            A = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            p = r.largeHeight,
                            B = r.mediumHeight,
                            C = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: D, large: p, medium: B, small: C, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && m) return o(u, t, b);
                            if (t.largeWidth && E) return o(u, t, b);
                            if (t.mediumWidth && d) return o(u, t, b);
                            if (t.smallWidth && _) return o(u, t, b);
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
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((D.defaultProps = {
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
                    (0, a.memo)(D));
                const p = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(g),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        o = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, m(t, r, l)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(g.Provider, { value: c }, e);
                });
                var B = t(6483),
                    C = t.n(B),
                    h = t(926),
                    b = t.n(h);
                let f, v, w;
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
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const S = () => {
                        const e = (0, a.useContext)(g),
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
                            n = ((e) => {
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, y);
                        const n = S(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', P({ className: C()(t, T[a], x[o], M[i]) }, r), u);
                    },
                    N = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, N);
                        return s().createElement(p, null, s().createElement(L, t, u));
                    };
                var I = t(493),
                    k = t.n(I);
                let H, U;
                (!(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(H || (H = {})),
                    (function (e) {
                        ((e.Disabled = 'disabled'), (e.Active = 'active'), (e.Completed = 'completed'));
                    })(U || (U = {})),
                    U.Active);
                const G = U.Disabled;
                let $, W, q;
                (U.Completed,
                    (function (e) {
                        e.C_360x270 = 'c_360x270';
                    })($ || ($ = {})),
                    (function (e) {
                        ((e.OR = 'or'), (e.AND = 'and'));
                    })(W || (W = {})),
                    (function (e) {
                        ((e.Progression = 'progression'),
                            (e.PostProgression = 'postProgression'),
                            (e.Completed = 'completed'));
                    })(q || (q = {})));
                const z = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let Q, j;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Q || (Q = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(j || (j = {})));
                const V = ({ size: e = Q.Default, classMix: u }) =>
                        s().createElement('div', { className: C()(z.background, z[`background__${e}`], u) }),
                    X = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Y = ({ size: e }) => {
                        const u = C()(X.base, X[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    K = {
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
                    Z = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const o = C()(
                                    K.base,
                                    K[`base__${e}`],
                                    t && K.base__disabled,
                                    n && K.base__finished,
                                    a && K.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: K.pattern }),
                                s().createElement('div', { className: K.gradient }),
                                i && s().createElement(Y, { size: e }),
                            );
                        },
                    ),
                    J = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                let ee, ue;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(ee || (ee = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ue || (ue = {})));
                const te = (e) => (e ? { left: 0 } : { right: 0 }),
                    re = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ne = (e) => ({ transitionDuration: `${e}ms` }),
                    ae = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < r,
                                E = (0, a.useState)(ee.Idle),
                                d = E[0],
                                _ = E[1],
                                A = d === ee.End,
                                g = d === ee.Idle,
                                F = d === ee.Grow,
                                D = d === ee.Shrink,
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        J(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(ee.Grow, u)
                                        : F
                                          ? B(ee.Shrink, e)
                                          : D
                                            ? B(ee.End, e)
                                            : void (A && i && i());
                            }, [B, t, A, F, g, D, i, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, ne(e), te(m)), [m, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, ne(e), te(m)), [m, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, re(m, r), ne(e)), [r, m, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, re(m, r), ne(e)),
                                    [r, m, o, e],
                                );
                            if (A) return null;
                            const w = C()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? f : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Y, { size: n }),
                                ),
                            );
                        },
                    ),
                    se = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                E = (0, a.useState)(!1),
                                d = E[0],
                                _ = E[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === ee.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Z, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(ae, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    oe = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                m = (0, a.useState)(ue.Idle),
                                E = m[0],
                                d = m[1],
                                _ = E === ue.In,
                                A = E === ue.End,
                                g = E === ue.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (g && !t)
                                    return J(() => {
                                        F(ue.In);
                                    }, u);
                            }, [F, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (_)
                                        return J(() => {
                                            (i && i(), F(ue.End));
                                        }, e + u);
                                }, [F, _, i, u, e]));
                            const D = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: B },
                                      s().createElement(
                                          'div',
                                          { style: g ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Y, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    ie = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Z, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    s().createElement(oe, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    le = ['onComplete', 'onEndAnimation'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const me = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, le);
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case j.Simple:
                                return s().createElement(ie, ce({}, r, { onEndAnimation: l, isComplete: o }));
                            case j.Growing:
                                return s().createElement(se, ce({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Ee = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(Z, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    de = ['onEndAnimation'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const Ae = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, de);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(me, _e({}, t, { onEndAnimation: n, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const Fe = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(Ee, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? s().createElement(Ae, c)
                                : s().createElement(me, ge({ key: `${n}-${u}` }, c));
                        },
                    ),
                    De = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    pe = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Be = (e, u, t) => ('number' == typeof t ? (pe(0, u, t) / u) * 100 : e),
                    Ce = {
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
                    he = {
                        freezed: !1,
                        withStack: !1,
                        type: j.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    be = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Ce,
                            size: t = Q.Default,
                            animationSettings: r = he,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: _,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (pe(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Be(r, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: C()(z.base, z[`base__${t}`]), style: De(u) },
                                !o && s().createElement(V, { size: t, classMix: i }),
                                s().createElement(Fe, {
                                    size: t,
                                    lineRef: m,
                                    disabled: n,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                let fe, ve, we, Se, ye;
                (!(function (e) {
                    ((e.ProgressBarComplete = 'progressBarComplete'),
                        (e.SuggestedQuestsHide = 'suggestedQuestsHide'),
                        (e.CurrentQuestToMiddle = 'currentQuestToMiddle'),
                        (e.FooterShow = 'footerShow'));
                })(fe || (fe = {})),
                    (function (e) {
                        ((e.HideRerollConditions = 'hideRerollConditions'), (e.QuestShow = 'questShow'), (e.IDLE = ''));
                    })(ve || (ve = {})),
                    (function (e) {
                        ((e.ShowSuggestedQuests = 'showSuggestedQuests'), (e.IDLE = 'idle'));
                    })(we || (we = {})),
                    (function (e) {
                        ((e.HideSuggestedQuests = 'hideSuggestedQuests'), (e.IDLE = ''));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e.DisableAllQuests = 'disableAllQuests'),
                            (e.HideAllContent = 'hideAllContent'),
                            (e.ShowEndPhase = 'showEndPhase'),
                            (e.ShowEndPhaseFooter = 'showEndPhaseFooter'));
                    })(ye || (ye = {})));
                const Re = {
                        COMPLETE_ANIMATION: {
                            [fe.ProgressBarComplete]:
                                he.line.delay + he.line.duration + he.delta.delay + he.delta.duration,
                            [fe.SuggestedQuestsHide]: 400,
                            [fe.CurrentQuestToMiddle]: 400,
                            [fe.FooterShow]: 400,
                        },
                        SHOW_SUGGESTED_QUESTS_STEPS: {
                            [ve.HideRerollConditions]: 400,
                            [ve.QuestShow]: 400,
                            [ve.IDLE]: 0,
                        },
                        SIMPLE_SHOW_SUGGESTED_QUESTS_STEPS: { [we.ShowSuggestedQuests]: 400, [we.IDLE]: 0 },
                        HIDE_SUGGESTED_QUESTS_STEPS: { [Se.HideSuggestedQuests]: 500, [Se.IDLE]: 0 },
                        ACTIVE_PHASE_END_STEPS: {
                            [ye.DisableAllQuests]: 500,
                            [ye.HideAllContent]: 400,
                            [ye.ShowEndPhase]: 400,
                            [ye.ShowEndPhaseFooter]: 400,
                        },
                    },
                    Pe = 'mergedReward';
                let Te, xe, Me, Le, Ne, Oe, Ie, ke;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(Te || (Te = {})),
                    (function (e) {
                        ((e.BeforeProgression = 'beforeProgression'),
                            (e.Active = 'active'),
                            (e.PurchaseStage = 'purchaseStage'),
                            (e.Completed = 'completed'),
                            (e.Disabled = 'disabled'),
                            (e.Intro = 'intro'));
                    })(xe || (xe = {})),
                    (function (e) {
                        ((e[(e.Disabled = 0)] = 'Disabled'), (e[(e.Active = 1)] = 'Active'));
                    })(Me || (Me = {})),
                    (function (e) {
                        ((e[(e.EmptyRewards = 0)] = 'EmptyRewards'),
                            (e[(e.ReadyRewards = 1)] = 'ReadyRewards'),
                            (e[(e.AnimatedRewards = 2)] = 'AnimatedRewards'));
                    })(Le || (Le = {})),
                    (function (e) {
                        ((e[(e.Progress = 0)] = 'Progress'),
                            (e[(e.Quests = 1)] = 'Quests'),
                            (e[(e.Shop = 2)] = 'Shop'));
                    })(Ne || (Ne = {})),
                    (function (e) {
                        ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'));
                    })(Oe || (Oe = {})),
                    (function (e) {
                        ((e[(e.Tab = 0)] = 'Tab'),
                            (e[(e.Chapter = 1)] = 'Chapter'),
                            (e[(e.ShopInfo = 2)] = 'ShopInfo'),
                            (e[(e.Step = 3)] = 'Step'));
                    })(Ie || (Ie = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'), (e[(e.Tokens = 1)] = 'Tokens'), (e[(e.Coins = 2)] = 'Coins'));
                    })(ke || (ke = {})));
                var He = t(4179);
                const Ue = [
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
                function Ge(e) {
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
                const $e = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: He.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    We = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            E = void 0 !== m && m,
                            d = e.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            B = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ue);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    ($e(t, _, { isMouseEvent: !0, on: !0, arguments: Ge(r) }, b),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, _, r, b, p]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        $e(t, _, { on: !1 }, b),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, b, B]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            g
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    };
                let qe, ze, Qe, je, Ve, Xe, Ye;
                var Ke, Ze;
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
                })(qe || (qe = {})),
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
                    })(ze || (ze = {})),
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
                    })(Qe || (Qe = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(je || (je = {})),
                    ((Ze = Ve || (Ve = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Ze.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Ze.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Ze.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Ze.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Ze.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Ze.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Ze.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Ze.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Ze.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Ze.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Ze.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Ze.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((Xe || (Xe = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Ke = Ye || (Ye = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Ke.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Ke.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Ke.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Ke.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Ke.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Ke.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Ke.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Ke.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Ke.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Ke.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Ke.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Ke.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                class Je extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? He.B3.GOLD : He.B3.INTEGRAL;
                        const u = He.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Je.defaultProps = { format: 'integral' };
                const eu = [
                        qe.Items,
                        qe.Equipment,
                        qe.Xp,
                        qe.XpFactor,
                        qe.Blueprints,
                        qe.BlueprintsAny,
                        qe.Goodies,
                        qe.Berths,
                        qe.Slots,
                        qe.Tokens,
                        qe.CrewSkins,
                        qe.CrewBooks,
                        qe.Customizations,
                        qe.CreditsFactor,
                        qe.TankmenXp,
                        qe.TankmenXpFactor,
                        qe.FreeXpFactor,
                        qe.BattleToken,
                        qe.Entitlements,
                        qe.PremiumUniversal,
                        qe.NaturalCover,
                        qe.BpCoin,
                        qe.BattlePassSelectToken,
                        qe.BattlaPassFinalAchievement,
                        qe.BattleBadge,
                        qe.BonusX5,
                        qe.CrewBonusX3,
                        qe.NewYearFillers,
                        qe.NewYearInvoice,
                        qe.EpicSelectToken,
                        qe.Comp7TokenWeeklyReward,
                        qe.Comp7TokenCouponReward,
                        qe.BattleBoosterGift,
                        qe.NewYearFillers,
                        qe.NewYearInvoice,
                        qe.LootBoxToken,
                        qe.CosmicLootboxCommon,
                        qe.CosmicLootboxSilver,
                        qe.SelectableBonus,
                        qe.GoldenTicket,
                        qe.PostStamp,
                        qe.BlankPersonalMissions_1,
                        qe.BlankPersonalMissions_2,
                        qe.SACoin,
                        qe.PremiumPlusUniversal,
                        qe.NyPetGoodies,
                        qe.HiddenVehicle,
                    ],
                    uu = [qe.Gold, qe.Credits, qe.Crystal, qe.FreeXp, qe.NewYearToyFragments],
                    tu = [qe.BattlePassPoints],
                    ru = [qe.PremiumPlus, qe.Premium];
                let nu;
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
                })(nu || (nu = {}));
                const au = (e) =>
                        eu.includes(e)
                            ? je.MULTI
                            : uu.includes(e)
                              ? je.CURRENCY
                              : tu.includes(e)
                                ? je.NUMBER
                                : ru.includes(e)
                                  ? je.PREMIUM_PLUS
                                  : je.STRING,
                    su = ['engravings', 'backgrounds'],
                    ou = ['engraving', 'background'],
                    iu = (e, u = Qe.Small, t) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            s = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case Qe.S600x450:
                                        return 'c_600x450';
                                    case Qe.S400x300:
                                        return 'c_400x300';
                                    case Qe.S296x222:
                                        return 'c_296x222';
                                    case Qe.S232x174:
                                        return 'c_232x174';
                                    case Qe.Big:
                                        return 'c_80x80';
                                    case Qe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Qe.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Qe.Small:
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
                                    const r = su[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(ou[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case Qe.S600x450:
                                            return 'c_600x450';
                                        case Qe.S400x300:
                                            return 'c_400x300';
                                        case Qe.S296x222:
                                            return 'c_296x222';
                                        case Qe.S232x174:
                                            return 'c_232x174';
                                        case Qe.S180x135:
                                            return 'big';
                                        case Qe.Big:
                                        case Qe.S80x80:
                                            return 'c_80x80';
                                        case Qe.Small:
                                        case Qe.S48x48:
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
                                        case Qe.Mini:
                                            return nu.s32;
                                        case Qe.Small:
                                        case Qe.S48x48:
                                            return nu.s48;
                                        case Qe.S80x80:
                                        case Qe.Big:
                                            return nu.s80;
                                        case Qe.S128x100:
                                            return nu.s116;
                                        case Qe.S180x135:
                                        case Qe.S232x174:
                                        case Qe.S296x222:
                                            return nu.s296;
                                        case Qe.S400x300:
                                            return nu.s400;
                                        case Qe.S600x450:
                                            return nu.s600;
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
                    },
                    lu = (e, u, t) => {
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
                    };
                var cu = t(9887),
                    mu = t.n(cu);
                const Eu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    du = (e) => e.includes('_') && ((e) => Eu.includes(e))(e.split('_').at(-1)),
                    _u = [f.ExtraLarge, f.Large, f.Medium, f.Small, f.ExtraSmall],
                    Au = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (du(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = _u.indexOf(u),
                                    s = (-1 !== a ? Eu.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[n] = void 0 !== o ? o : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => Eu.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    gu = (e, u = Au) => {
                        const t = (
                            (e, u = Au) =>
                            (t) => {
                                const r = S().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return s().createElement(e, n);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => du(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    Fu = {
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
                    Du = [
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
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                Object.keys(mu());
                const Bu = {
                        XL: { mt: Fu.mt__XL, mr: Fu.mr__XL, mb: Fu.mb__XL, ml: Fu.ml__XL },
                        LG: { mt: Fu.mt__LG, mr: Fu.mr__LG, mb: Fu.mb__LG, ml: Fu.ml__LG },
                        MDp: { mt: Fu.mt__MDp, mr: Fu.mr__MDp, mb: Fu.mb__MDp, ml: Fu.ml__MDp },
                        MD: { mt: Fu.mt__MD, mr: Fu.mr__MD, mb: Fu.mb__MD, ml: Fu.ml__MD },
                        SMp: { mt: Fu.mt__SMp, mr: Fu.mr__SMp, mb: Fu.mb__SMp, ml: Fu.ml__SMp },
                        SM: { mt: Fu.mt__SM, mr: Fu.mr__SM, mb: Fu.mb__SM, ml: Fu.ml__SM },
                        XS: { mt: Fu.mt__XS, mr: Fu.mr__XS, mb: Fu.mb__XS, ml: Fu.ml__XS },
                    },
                    Cu = (Object.keys(Bu), ['mt', 'mr', 'mb', 'ml']),
                    hu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    bu = gu((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            o = e.mt,
                            i = void 0 === o ? n : o,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            m = e.mb,
                            E = void 0 === m ? n : m,
                            d = e.ml,
                            _ = void 0 === d ? n : d,
                            A = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            D = void 0 === F ? (A ? 'column' : g && 'row') || void 0 : F,
                            p = e.flexStart,
                            B = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (p ? 'flex-start' : B && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            S = e.alignItems,
                            y = void 0 === S ? (p ? 'flex-start' : B && 'center') || (h && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            P = e.wrap,
                            T = e.flexWrap,
                            x = void 0 === T ? (P ? 'wrap' : void 0) : T,
                            M = e.grow,
                            L = e.shrink,
                            N = e.flex,
                            O = void 0 === N ? (M || L ? `${M ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : N,
                            I = e.style,
                            k = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Du);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: E, ml: _ },
                                    u = ((e) =>
                                        Cu.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Bu[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Cu.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[hu[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: O,
                                        alignSelf: R,
                                        display: D || y ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: x,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, E, _, I, O, R, D, x, w, y]),
                            G = U.computedStyle,
                            $ = U.computedClassNames;
                        return s().createElement('div', pu({ className: C()(Fu.base, ...$, u), style: G }, H), k);
                    });
                let fu;
                function vu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(fu || (fu = {}));
                const wu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Su = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    yu = (e, u, t = fu.left) => e.split(u).reduce(t === fu.left ? wu : Su, []),
                    Ru = (() => {
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
                    Pu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Tu = ({ binding: e, text: u = '', classMix: t, alignment: r = fu.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      s().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = fu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Pu.includes(t)
                                                                ? Ru(e)
                                                                : ((e, u = fu.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          yu(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(yu(e, r, fu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var xu = t(3532),
                    Mu = t.n(xu);
                const Lu = {
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
                    Nu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                Object.keys(mu());
                const Iu = Object.keys(Mu()),
                    ku = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Hu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Uu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Gu =
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
                            'heading-H56': ku,
                            'heading-H36': ku,
                            'heading-H28': Hu,
                            'heading-H24': Hu,
                            'heading-H24R': Hu,
                            'heading-H22': Hu,
                            'heading-H20R': Hu,
                            'heading-H18': Hu,
                            'heading-H15': Uu,
                            'heading-H14': Uu,
                            'paragraph-P24': Hu,
                            'paragraph-P18': Hu,
                            'paragraph-P16': Hu,
                            'paragraph-P14': Uu,
                            'paragraph-P12': Uu,
                            'paragraph-P10': Uu,
                        }),
                    $u =
                        (Object.keys(Gu),
                        (e) =>
                            e
                                ? ((e) => Iu.includes(e))(e)
                                    ? { colorClassName: Lu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Wu = gu((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            m = void 0 === c ? o : c,
                            E = e.mb,
                            d = void 0 === E ? o : E,
                            _ = e.ml,
                            A = void 0 === _ ? o : _,
                            g = e.style,
                            F = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Nu);
                        const p = (0, a.useMemo)(() => {
                                const e = $u(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: u };
                            }, [g, n]),
                            B = p.computedStyle,
                            h = p.colorClassName;
                        return s().createElement(
                            bu,
                            Ou(
                                {
                                    className: C()(Lu.base, t && Lu[t], h, r),
                                    style: B,
                                    mt: !0 === l ? Gu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Gu[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === d ? Gu[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? Gu[t || 'paragraph-P16'].ml : A,
                                },
                                D,
                            ),
                            void 0 !== F ? s().createElement(Tu, Ou({}, F, { text: u })) : u,
                        );
                    }),
                    qu = ['children'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const Qu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, qu);
                        return s().createElement(
                            We,
                            zu(
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
                    ju = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const Xu = R.views.common.tooltip_window.simple_tooltip_content,
                    Yu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ju);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, i]);
                        return s().createElement(
                            We,
                            Vu(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? Xu.SimpleTooltipHtmlContent('resId') : Xu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    };
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Zu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(Yu, u, r);
                    const n = u.contentId,
                        a = u.args,
                        o = null == a ? void 0 : a.contentId;
                    return n || o
                        ? s().createElement(We, Ku({}, u, { contentId: n || o }), r)
                        : s().createElement(Qu, u, r);
                };
                function Ju(e) {
                    engine.call('PlaySound', e);
                }
                const et = {
                    playHighlight() {
                        Ju('highlight');
                    },
                    playClick() {
                        Ju('play');
                    },
                    playYes() {
                        Ju('yes1');
                    },
                };
                var ut = t(8552);
                const tt = H.Done,
                    rt = H.Locked,
                    nt = H.Active,
                    at =
                        (Le.EmptyRewards,
                        Le.ReadyRewards,
                        Le.AnimatedRewards,
                        (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1)),
                    st = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: at },
                    },
                    ot = { config: { duration: 450, easing: at } },
                    it = {
                        base: 'StepIcon_base_7b',
                        past: 'StepIcon_past_75',
                        present: 'StepIcon_present_b5',
                        future: 'StepIcon_future_5c',
                        hover: 'StepIcon_hover_44',
                        base__past: 'StepIcon_base__past_79',
                        base__present: 'StepIcon_base__present_ab',
                        step: 'StepIcon_step_24',
                        base__future: 'StepIcon_base__future_26',
                    },
                    lt = (0, a.memo)(({ step: e, state: u = $t.Future, playStageSound: t }) => {
                        const r = (0, a.useState)(!1),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useCallback)(() => {
                                t && t(e);
                            }, [t, e]),
                            l = (0, ut.useSpring)({ opacity: u === $t.Past ? 1 : 0, HIDE_CONFIG: ot }),
                            c = (0, ut.useSpring)({ opacity: u === $t.Present ? 1 : 0, HIDE_CONFIG: ot }),
                            m = (0, ut.useSpring)({ opacity: u === $t.Future ? 1 : 0, HIDE_CONFIG: ot }),
                            E = (0, ut.useTransition)(n, Object.assign({ key: n }, st));
                        return s().createElement(
                            'div',
                            {
                                className: C()(it.base, it[`base__${u}`]),
                                onMouseEnter: () => {
                                    (et.playHighlight(), o(!0));
                                },
                                onMouseLeave: () => {
                                    o(!1);
                                },
                                onClick: i,
                            },
                            s().createElement(ut.animated.div, { className: it.future, style: m }),
                            s().createElement(ut.animated.div, { className: it.past, style: l }),
                            s().createElement(ut.animated.div, { className: it.present, style: c }),
                            E((e, u) => u && s().createElement(ut.animated.div, { className: it.hover, style: e })),
                            s().createElement(Wu, { text: String(e), className: it.step }),
                        );
                    }),
                    ct = {
                        base: 'MainReward_base_02',
                        sequence: 'MainReward_sequence_fa',
                        info: 'MainReward_info_ab',
                        icon: 'MainReward_icon_14',
                        icon__main: 'MainReward_icon__main_af',
                        preview: 'MainReward_preview_af',
                        step: 'MainReward_step_4f',
                        step__ave: 'MainReward_step__ave_13',
                        stepLabel: 'MainReward_stepLabel_53',
                        step__completed: 'MainReward_step__completed_66',
                        stepIcon: 'MainReward_stepIcon_fa',
                        rotation: 'MainReward_rotation_37',
                        reversedRotation: 'MainReward_reversedRotation_97',
                    },
                    mt = {
                        base: 'Preview_base_00',
                        base__hovered: 'Preview_base__hovered_df',
                        icon: 'Preview_icon_81',
                        icon__small: 'Preview_icon__small_5c',
                        icon__normal: 'Preview_icon__normal_93',
                        base__mouseDown: 'Preview_base__mouseDown_78',
                        label: 'Preview_label_44',
                        base__visibleLabel: 'Preview_base__visibleLabel_4d',
                    },
                    Et = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                let _t;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(_t || (_t = {}));
                const At = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            r = void 0 !== t && t,
                            n = e.autofocus,
                            o = void 0 !== n && n,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            m = void 0 === c ? 'play' : c,
                            E = e.size,
                            d = void 0 === E ? _t.NORMAL : E,
                            _ = e.onClick,
                            A = e.onMouseEnter,
                            g = e.onMouseLeave,
                            F = e.onMouseDown,
                            D = e.onMouseUp,
                            p = e.onFocus,
                            B = e.onBlur,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Et);
                        const b = (0, a.useState)(!1),
                            f = b[0],
                            v = b[1],
                            w = (0, a.useState)(!1),
                            S = w[0],
                            y = w[1],
                            R = (0, a.useState)(o),
                            P = R[0],
                            T = R[1],
                            x = (0, a.useRef)(null),
                            M = (0, a.useCallback)(() => {
                                x.current && (x.current.focus(), T(!0));
                            }, []),
                            L = (0, a.useCallback)(
                                (e) => {
                                    P && null !== x.current && !x.current.contains(e.target) && T(!1);
                                },
                                [P],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                            (0, a.useEffect)(() => {
                                T(o);
                            }, [o]));
                        const N = (0, a.useCallback)(
                                (e) => {
                                    _ && _(e);
                                },
                                [_],
                            ),
                            O = (0, a.useCallback)(
                                (e) => {
                                    (v(!0), F && F(e), m && Ju(m), o && M());
                                },
                                [o, F, M, m],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    (v(!1), D && D(e));
                                },
                                [D],
                            ),
                            k = (0, a.useCallback)(
                                (e) => {
                                    (A && A(e), l && Ju(l), y(!0));
                                },
                                [A, l],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    (v(!1), y(!1), g && g(e));
                                },
                                [g],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    (T(!0), p && p(e));
                                },
                                [p],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    (T(!1), B && B(e));
                                },
                                [B],
                            ),
                            $ = C()(
                                mt.base,
                                r && mt.base__visibleLabel,
                                f && mt.base__mouseDown,
                                S && mt.base__hovered,
                                P && mt.base__focused,
                            ),
                            W = C()(mt.icon, mt[`icon__${d}`]);
                        return s().createElement(
                            'div',
                            dt(
                                {
                                    ref: x,
                                    className: $,
                                    onClick: N,
                                    onMouseEnter: k,
                                    onMouseLeave: H,
                                    onMouseDown: O,
                                    onMouseUp: I,
                                    onFocus: U,
                                    onBlur: G,
                                },
                                h,
                            ),
                            s().createElement('div', { className: W }),
                            s().createElement('div', { className: mt.label }, u),
                        );
                    }),
                    gt = [
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
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Dt = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            n = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            d = void 0 === E ? n - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ || _,
                            g = e.state,
                            F = void 0 === g ? 'play' : g,
                            D = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            B = e.poster,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, gt);
                        const h = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (F) {
                                    case 'play':
                                        return (function () {
                                            const e = Ct(m, d, r),
                                                u = pt(m, d),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == o || o(r, a),
                                                          t(a),
                                                          r === d &&
                                                              (null == p || p(),
                                                              A || (null == D || D(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && B ? { path: B, x: 0, y: 0 } : r(m),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(Bt(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, d, A, o, p, D, B, F]),
                            s().createElement('canvas', Ft({}, C, { width: u, height: t, ref: h }))
                        );
                    }),
                    pt = (e, u) => {
                        let t = e;
                        return () => {
                            const r = t;
                            return ((t += 1), t > u && (t = e), r);
                        };
                    },
                    Bt = (e, u) => Object.assign({}, e, { img: u }),
                    Ct = (e, u, t) => {
                        const r = new Map(),
                            n = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = n[e.path];
                            if (u) r.set(a, Bt(e, u));
                            else {
                                const u = new Image();
                                ((n[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    r.set(a, Bt(e, u)));
                            }
                        }
                        return r;
                    };
                function ht(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (r) => {
                        const n = r % t,
                            a = (n % u.columns) * e.width,
                            s = Math.trunc(n / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(r / t)), x: a, y: s };
                    };
                }
                const bt = { base: 'SequencedBg_base_9b', image: 'SequencedBg_image_31' },
                    ft = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const vt = s().memo(() =>
                        s().createElement(
                            'div',
                            { className: bt.base },
                            i.O.client.graphicsQuality.isLow()
                                ? s().createElement('div', { className: bt.image })
                                : s().createElement(Dt, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: ft.width,
                                      height: ft.height,
                                      frameCount: ft.frameCount,
                                      className: bt.seq,
                                      getImageSource: ht(ft),
                                  }),
                        ),
                    ),
                    wt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    St = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function yt(e) {
                    let u = '';
                    for (let t = St.length - 1; t >= 0; t--) for (; e >= St[t]; ) ((u += wt[t]), (e -= St[t]));
                    return u;
                }
                const Rt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Pt = (0, a.memo)(({ isElite: e, vehicleName: u, type: t, level: r }) => {
                        return s().createElement(
                            'div',
                            { className: 'TankName_base_24' },
                            s().createElement(Wu, { text: ((n = r), Rt ? `${n}` : yt(n)) }),
                            s().createElement('div', {
                                className: C()('TankName_type_aa', e && 'TankName_type__elite_ee'),
                                style: (() => {
                                    const u = `${vu(t)}${e ? '_elite' : ''}`;
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(u)})`,
                                    };
                                })(),
                            }),
                            s().createElement(Wu, { text: u, className: 'TankName_name_20' }),
                        );
                        var n;
                    }),
                    Tt = R.strings.armory_yard.mainView.mainReward,
                    xt = (0, a.memo)(
                        ({ isHighlighted: e, onPreview: u, scale: t = 0, step: r, reward: n, isFinalReward: a = !1 }) =>
                            s().createElement(
                                'div',
                                { className: ct.base },
                                Boolean(e && t) &&
                                    s().createElement(
                                        'div',
                                        { className: ct.sequence, style: { '--scale': `${t}` } },
                                        s().createElement(vt, null),
                                    ),
                                s().createElement(
                                    Zu,
                                    {
                                        tooltipArgs: lu(
                                            { tooltipId: n.tooltipId, tooltipType: Pe },
                                            Number.parseInt(n.tooltipContentId),
                                        ),
                                        className: ct.tooltipWrapper,
                                    },
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        n.name === qe.Vehicles &&
                                            s().createElement('div', { className: ct.info }, s().createElement(Pt, n)),
                                        s().createElement('div', { className: C()(ct.icon, a && ct.icon__main) }),
                                    ),
                                ),
                                s().createElement(
                                    Yu,
                                    {
                                        body: a
                                            ? R.strings.armory_yard.buyView.stylePreview.tooltip()
                                            : R.strings.armory_yard.buyView.vehiclePreview.tooltip(),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: ct.preview },
                                        s().createElement(At, {
                                            label: R.strings.armory_yard.buyView.vehiclePreview.label(),
                                            onClick: u,
                                            isVisibleLabel: !0,
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: C()(ct.step, a && ct.step__ave, e && ct.step__completed) },
                                    a
                                        ? s().createElement(lt, { step: r, state: e ? $t.Present : $t.Future })
                                        : s().createElement(
                                              'div',
                                              { className: ct.stepIcon },
                                              s().createElement(Wu, { text: String(r) }),
                                          ),
                                    s().createElement(Wu, { className: ct.stepLabel, text: Tt.completed() }),
                                ),
                            ),
                    ),
                    Mt = {
                        base: 'Step_base_fa',
                        progress: 'Step_progress_c9',
                        progress__first: 'Step_progress__first_82',
                        progress__right: 'Step_progress__right_57',
                        progress__left: 'Step_progress__left_30',
                        icon: 'Step_icon_b0',
                        reward: 'Step_reward_df',
                        line: 'Step_line_c5',
                        mainReward: 'Step_mainReward_b6',
                    },
                    Lt = {
                        base: 'StepLine_base_1a',
                        base__past: 'StepLine_base__past_3b',
                        base__present: 'StepLine_base__present_22',
                        base__future: 'StepLine_base__future_c9',
                    },
                    Nt = s().memo(({ state: e }) =>
                        s().createElement('div', { className: C()(Lt.base, Lt[`base__${e}`]) }),
                    ),
                    Ot = {
                        base: 'StepProgressBar_base_b3',
                        base__first: 'StepProgressBar_base__first_41',
                        base__last: 'StepProgressBar_base__last_95',
                        base__left: 'StepProgressBar_base__left_47',
                        base__right: 'StepProgressBar_base__right_ae',
                        shadow: 'StepProgressBar_shadow_f3',
                        bg: 'StepProgressBar_bg_76',
                        progress: 'StepProgressBar_progress_11',
                        base__present: 'StepProgressBar_base__present_54',
                        pointer: 'StepProgressBar_pointer_a4',
                        animatedProgress: 'StepProgressBar_animatedProgress_8a',
                        completeProgress: 'StepProgressBar_completeProgress_0a',
                        animatedProgressFirstPositon: 'StepProgressBar_animatedProgressFirstPositon_d1',
                        completeProgressFirstPositon: 'StepProgressBar_completeProgressFirstPositon_77',
                        animatedPointer: 'StepProgressBar_animatedPointer_74',
                        completePointer: 'StepProgressBar_completePointer_a5',
                        animatedPointerFirstPositon: 'StepProgressBar_animatedPointerFirstPositon_cb',
                        completePointerFirstPosition: 'StepProgressBar_completePointerFirstPosition_7d',
                        pointerFlare1: 'StepProgressBar_pointerFlare1_37',
                        pointerFlare2: 'StepProgressBar_pointerFlare2_76',
                    },
                    It = (0, a.memo)(
                        ({
                            state: e = $t.Future,
                            levelDuration: u,
                            isEmpty: t,
                            isRunning: r,
                            position: n = Wt.Normal,
                        }) => {
                            const o = (0, a.useState)({}),
                                i = o[0],
                                l = o[1],
                                c = (0, a.useState)({}),
                                m = c[0],
                                E = c[1],
                                d = (0, a.useState)(''),
                                _ = d[0],
                                A = d[1],
                                g = (0, a.useState)(''),
                                F = g[0],
                                D = g[1];
                            return (
                                (0, a.useEffect)(() => {
                                    (r
                                        ? n === Wt.First
                                            ? (A(Ot.animatedProgressFirstPositon), D(Ot.animatedPointerFirstPositon))
                                            : (A(Ot.animatedProgress), D(Ot.animatedPointer))
                                        : (A(''), D('')),
                                        t || r
                                            ? t && r && u
                                                ? (l({ animationDuration: `${u}s` }), E({ animationDuration: `${u}s` }))
                                                : t &&
                                                  !r &&
                                                  (n === Wt.First
                                                      ? (l({ width: '20%' }), E({ left: '20%' }))
                                                      : (l({}), E({})))
                                            : (l({ width: '100%' }), E({ left: '100%' })));
                                }, [t, r, u, n]),
                                s().createElement(
                                    'div',
                                    { className: C()(Ot.base, Ot[`base__${n}`], Ot[`base__${e}`]) },
                                    s().createElement('div', { className: Ot.shadow }),
                                    s().createElement('div', { className: Ot.bg }),
                                    s().createElement('div', { className: C()(Ot.progress, _), style: i }),
                                    r ||
                                        (n === Wt.First &&
                                            s().createElement(
                                                'div',
                                                { className: C()(Ot.pointer, F), style: m },
                                                s().createElement('div', { className: Ot.pointerFlare2 }),
                                                s().createElement('div', { className: Ot.pointerFlare1 }),
                                            )),
                                )
                            );
                        },
                    ),
                    kt = {
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
                    Ht = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Qe.Big,
                        special: n,
                        value: a,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ve.BATTLE_BOOSTER:
                                    case Ve.BATTLE_BOOSTER_REPLACE:
                                        return Xe.BATTLE_BOOSTER;
                                }
                            })(n),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ve.BATTLE_BOOSTER:
                                        return Ye.BATTLE_BOOSTER;
                                    case Ve.BATTLE_BOOSTER_REPLACE:
                                        return Ye.BATTLE_BOOSTER_REPLACE;
                                    case Ve.BUILT_IN_EQUIPMENT:
                                        return Ye.BUILT_IN_EQUIPMENT;
                                    case Ve.EQUIPMENT_PLUS:
                                        return Ye.EQUIPMENT_PLUS;
                                    case Ve.EQUIPMENT_TROPHY_BASIC:
                                        return Ye.EQUIPMENT_TROPHY_BASIC;
                                    case Ve.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ye.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ve.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ye.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ve.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ye.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case je.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case je.CURRENCY:
                                    case je.NUMBER:
                                        return s().createElement(Je, { format: 'integral', value: Number(e) });
                                    case je.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            { className: C()(kt.base, kt[`base__${r}`], l), style: i },
                            s().createElement(
                                Zu,
                                { tooltipArgs: m, className: kt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: C()(kt.image, null == c ? void 0 : c.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: C()(kt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: C()(kt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            s().createElement('div', {
                                                className: C()(kt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    kt.info,
                                                    kt[`info__${e}`],
                                                    o === je.MULTI && kt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Zu,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: C()(kt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ut = {
                        base: 'StepReward_base_67',
                        pastField: 'StepReward_pastField_f1',
                        futureField: 'StepReward_futureField_c0',
                        base__first: 'StepReward_base__first_2d',
                        base__right: 'StepReward_base__right_e2',
                        base__last: 'StepReward_base__last_f7',
                        base__left: 'StepReward_base__left_9b',
                        presentField: 'StepReward_presentField_b8',
                        hover: 'StepReward_hover_d3',
                        base__future: 'StepReward_base__future_43',
                        presentLight: 'StepReward_presentLight_ed',
                        reward: 'StepReward_reward_51',
                        base__past: 'StepReward_base__past_f6',
                    },
                    Gt = s().memo(({ state: e, reward: u, position: t = Wt.Normal }) => {
                        const r = u && t !== Wt.Left && t !== Wt.Last,
                            n = (0, ut.useSpring)({ opacity: e === $t.Past ? 1 : 0, HIDE_CONFIG: ot }),
                            o = (0, ut.useSpring)({ opacity: e === $t.Present ? 1 : 0, HIDE_CONFIG: ot }),
                            i = (0, ut.useSpring)({ opacity: e === $t.Future ? 1 : 0, HIDE_CONFIG: ot }),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            m = l[1],
                            E = (0, a.useCallback)(() => {
                                m(!0);
                            }, []),
                            d = (0, a.useCallback)(() => {
                                m(!1);
                            }, []),
                            _ = (0, ut.useTransition)(c, Object.assign({ key: c }, st));
                        return s().createElement(
                            'div',
                            {
                                className: C()(Ut.base, Ut[`base__${e}`], Ut[`base__${t}`]),
                                onMouseEnter: E,
                                onMouseLeave: d,
                            },
                            s().createElement(
                                ut.animated.div,
                                { style: n },
                                s().createElement('div', { className: Ut.pastField }),
                            ),
                            _((e, u) => u && s().createElement(ut.animated.div, { className: Ut.hover, style: e })),
                            s().createElement(
                                ut.animated.div,
                                { style: o },
                                s().createElement('div', { className: Ut.presentField }),
                                s().createElement('div', { className: Ut.presentLight }),
                            ),
                            s().createElement(
                                ut.animated.div,
                                { style: i },
                                s().createElement('div', { className: Ut.futureField }),
                            ),
                            r && s().createElement('div', { className: Ut.reward }, s().createElement(Ht, u)),
                        );
                    });
                let $t, Wt;
                var qt;
                (!(function (e) {
                    ((e.Past = 'past'), (e.Present = 'present'), (e.Future = 'future'));
                })($t || ($t = {})),
                    ((qt = Wt || (Wt = {})).First = 'first'),
                    (qt.Last = 'last'),
                    (qt.Normal = 'normal'),
                    (qt.Left = 'left'),
                    (qt.Right = 'right'),
                    (0, a.memo)(
                        ({
                            step: e,
                            state: u,
                            reward: t,
                            levelDuration: r,
                            isEmpty: n,
                            isRunning: a,
                            position: o = Wt.Normal,
                            isMainReward: i = !1,
                            playStageSound: l,
                            onPreview: c,
                        }) => {
                            const m = o !== Wt.Last && !i;
                            return s().createElement(
                                'div',
                                { className: Mt.base },
                                m &&
                                    s().createElement(
                                        'div',
                                        { className: Mt.line },
                                        s().createElement(Nt, { state: u }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: C()(Mt.progress, Mt[`progress__${o}`]) },
                                    s().createElement(It, {
                                        state: u,
                                        position: o,
                                        levelDuration: r,
                                        isEmpty: n,
                                        isRunning: a,
                                    }),
                                ),
                                m &&
                                    s().createElement(
                                        'div',
                                        { className: Mt.icon },
                                        s().createElement(
                                            We,
                                            {
                                                contentId:
                                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView(
                                                        'resId',
                                                    ),
                                                args: { state: Ie.Step, step: e },
                                                ignoreShowDelay: !0,
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(lt, { step: e, state: u, playStageSound: l }),
                                            ),
                                        ),
                                    ),
                                i &&
                                    s().createElement(
                                        'div',
                                        { className: Mt.mainReward },
                                        s().createElement(xt, {
                                            step: e,
                                            reward: t,
                                            isHighlighted: u === $t.Past || u === $t.Present,
                                            onPreview: c,
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Mt.reward },
                                    s().createElement(Gt, { state: u, reward: t, position: o }),
                                ),
                            );
                        },
                    ));
                const zt = R.strings.armory_yard.mainView.quest,
                    Qt = {
                        bgImageBase: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.bg',
                        line: {
                            bgColorBase: 'transparent',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'transparent',
                        },
                        pattern: {
                            bgImageBase: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    jt = (e, u, t) =>
                        t
                            ? e.map((e) => yt(e)).join(zt.levelSeparator())
                            : e
                                  .map((e) => yt(e))
                                  .slice(0, u ? 3 : e.length)
                                  .join(zt.levelSeparator()),
                    Vt = (0, a.memo)(({ text: e }) =>
                        s().createElement(
                            'div',
                            { className: 'Hint_base_73' },
                            s().createElement('div', { className: 'Hint_border_2f' }),
                            s().createElement(
                                'div',
                                { className: 'Hint_hint_dc' },
                                s().createElement('div', { className: 'Hint_hintSubstrate_cd' }),
                                s().createElement('div', { className: 'Hint_hintArrow_23' }),
                                s().createElement(Wu, { text: e, className: 'Hint_hintText_fa' }),
                            ),
                        ),
                    );
                var Xt = t(3282);
                const Yt = {
                    base: 'RerollButton_base_73',
                    base__disabled: 'RerollButton_base__disabled_b6',
                    iconWrapper: 'RerollButton_iconWrapper_ce',
                    base__small: 'RerollButton_base__small_0b',
                    base__medium: 'RerollButton_base__medium_cc',
                    base__large: 'RerollButton_base__large_a8',
                    base__extraLarge: 'RerollButton_base__extraLarge_34',
                    icon: 'RerollButton_icon_ee',
                    iconHover: 'RerollButton_iconHover_7d',
                    iconDisabled: 'RerollButton_iconDisabled_67',
                    text: 'RerollButton_text_91',
                    shine: 'RerollButton_shine_c9',
                };
                let Kt, Zt;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'), (e.ExtraLarge = 'extraLarge'));
                })(Kt || (Kt = {})),
                    (function (e) {
                        ((e.Left = 'left'), (e.Right = 'right'));
                    })(Zt || (Zt = {})));
                const Jt = R.strings.armory_yard.mainView.quest.rerollButton,
                    er = (0, Xt.observer)(
                        ({
                            onReroll: e,
                            text: u = '',
                            className: t,
                            disabled: r = !1,
                            size: n = Kt.Medium,
                            textPosition: a = Zt.Right,
                            hasTrigger: o = !1,
                        }) => {
                            const i = a === Zt.Left && Boolean(u),
                                l = a === Zt.Right && Boolean(u);
                            return s().createElement(
                                'div',
                                {
                                    className: C()(Yt.base, t, r && Yt.base__disabled, Yt[`base__${n}`]),
                                    onClick: () => {
                                        r || (Ju(R.sounds.play()), e());
                                    },
                                    onMouseEnter: () => {
                                        !r && Ju(R.sounds.highlight());
                                    },
                                },
                                i && s().createElement(Wu, { className: Yt.text, text: u || '' }),
                                s().createElement(
                                    'div',
                                    { className: Yt.iconWrapper },
                                    r
                                        ? s().createElement('div', { className: Yt.iconDisabled })
                                        : s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement('div', { className: Yt.icon }),
                                              s().createElement('div', { className: Yt.iconHover }),
                                              s().createElement('div', { className: Yt.shine }),
                                              o && s().createElement(Vt, { text: Jt.hint() }),
                                          ),
                                ),
                                l && s().createElement(Wu, { className: Yt.text, text: u || '' }),
                            );
                        },
                    ),
                    ur = ({ rewardsCount: e }) =>
                        s().createElement(
                            'div',
                            { className: 'QuestCompleted_base_56' },
                            s().createElement('div', { className: 'QuestCompleted_bg_fc' }),
                            s().createElement('div', { className: 'QuestCompleted_stroke_86' }),
                            s().createElement('div', { className: 'QuestCompleted_icon_8d' }),
                            s().createElement(Tu, {
                                text: R.strings.armory_yard.mainView.quest.progressionToken.rewardReceived(e - 1),
                                classMix: 'QuestCompleted_label_5a',
                            }),
                        ),
                    tr = 'VehicleDescirption_levelWrapper_0c',
                    rr = 'VehicleDescirption_level_fe',
                    nr = 'VehicleDescirption_conditionSeparator_6e',
                    ar = R.strings.armory_yard.mainView.quest,
                    sr = R.images.gui.maps.icons,
                    or = (0, a.memo)(
                        ({
                            vehicleTypes: e = [],
                            battleTypes: u = [],
                            levels: t,
                            showLevelsAsRange: r,
                            vehicleNations: n,
                        }) => {
                            const a = S().mediaSize,
                                o = 1 === t.length,
                                i = r && !o,
                                l = t.length > 3 && !i,
                                c = jt(t, l, !1),
                                m = u.slice(0, 4),
                                E = { from: yt(t[0]), to: yt(t[t.length - 1]) },
                                d = ((e) => {
                                    const u = R.images.gui.maps.icons.vehicleTypes;
                                    return e >= f.Medium ? u.$dyn('c_24x24') : u;
                                })(a),
                                _ = i ? `${E.from}${ar.levelRangeSeparator()}${E.to}` : jt(t, l, !0);
                            return s().createElement(
                                We,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.TaskConditionTooltipView('resId'),
                                    args: { vehicleLevels: _, vehicleTypes: e, battleTypes: u, vehicleNations: n },
                                    ignoreShowDelay: !0,
                                },
                                s().createElement(
                                    'div',
                                    { className: 'VehicleDescirption_base_c2' },
                                    s().createElement(
                                        'div',
                                        { className: 'VehicleDescirption_conditions_e4' },
                                        m.map((e, u) =>
                                            s().createElement('div', {
                                                className: C()(
                                                    'VehicleDescirption_battleTypeIcon_d6',
                                                    u === m.length - 1 && 'VehicleDescirption_battleTypeIcon__last_90',
                                                ),
                                                key: e,
                                                style: {
                                                    backgroundImage: `url(${sr.quests.prebattleConditions.$num(e)})`,
                                                },
                                            }),
                                        ),
                                        u.length > 4 &&
                                            s().createElement(Wu, {
                                                className: 'VehicleDescirption_ellipsis_ae',
                                                text: ar.battleType.ellipsis(),
                                            }),
                                        n &&
                                            n.length > 0 &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: nr }),
                                                n.map((e, u) =>
                                                    s().createElement('div', {
                                                        className: C()(
                                                            'VehicleDescirption_nation_7e',
                                                            u === n.length - 1 && 'VehicleDescirption_nation__last_7d',
                                                        ),
                                                        key: e,
                                                        style: {
                                                            backgroundImage: `url(${sr.filters.nations.$dyn(e)})`,
                                                        },
                                                    }),
                                                ),
                                            ),
                                        s().createElement('div', { className: nr }),
                                        i
                                            ? s().createElement(Wu, {
                                                  text: ar.vehicleType.levelsRange(),
                                                  className: C()(tr, rr),
                                                  format: {
                                                      binding: {
                                                          from: E.from,
                                                          to: s().createElement(Wu, { text: E.to }),
                                                          separator: s().createElement('div', {
                                                              className: 'VehicleDescirption_levelSeparator_ef',
                                                          }),
                                                      },
                                                      classMix: tr,
                                                  },
                                              })
                                            : s().createElement(Wu, { text: c, className: rr }),
                                        e[0] &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', {
                                                    className: C()(
                                                        nr,
                                                        'VehicleDescirption_conditionSeparator__onlyLeft_40',
                                                    ),
                                                }),
                                                s().createElement(
                                                    'div',
                                                    { className: 'VehicleDescirption_vehicleTypes_e6' },
                                                    e.map((e) =>
                                                        s().createElement('div', {
                                                            key: e,
                                                            className: 'VehicleDescirption_vehicleTypeIcon_37',
                                                            style: { backgroundImage: `url(${d.$dyn(vu(e))})` },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ir = {
                        base: 'QuestProgress_base_12',
                        conditionSeparator: 'QuestProgress_conditionSeparator_b5',
                        condition: 'QuestProgress_condition_c9',
                        base__notAvailable: 'QuestProgress_base__notAvailable_d4',
                        conditionText: 'QuestProgress_conditionText_f7',
                        progressTotal: 'QuestProgress_progressTotal_d5',
                        conditionIcon: 'QuestProgress_conditionIcon_36',
                        progressBar: 'QuestProgress_progressBar_03',
                        progressBg: 'QuestProgress_progressBg_c9',
                    },
                    lr = R.strings.armory_yard.mainView.quest,
                    cr = (0, a.memo)(({ state: e, current: u, total: t, earned: r, iconKey: n }) => {
                        const a = {
                            backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + n + '_90x90'}')`,
                        };
                        return s().createElement(
                            'div',
                            { className: C()(ir.base, ir[`base__${e}`]) },
                            s().createElement(
                                'div',
                                { className: ir.condition },
                                s().createElement('div', { className: ir.conditionIcon, style: a }),
                                s().createElement(Wu, {
                                    text: lr.progress(),
                                    className: ir.conditionText,
                                    format: {
                                        binding: {
                                            current: He.Z5.getRealFormat(u, He.Gr.WO_ZERO_DIGITS),
                                            total: s().createElement(Wu, {
                                                className: ir.progressTotal,
                                                text: He.Z5.getRealFormat(t, He.Gr.WO_ZERO_DIGITS),
                                            }),
                                        },
                                    },
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: ir.progressBar },
                                s().createElement(be, {
                                    size: Q.Small,
                                    maxValue: t,
                                    value: u,
                                    disabled: e === rt,
                                    theme: Qt,
                                    deltaFrom: u - r,
                                }),
                                s().createElement('div', { className: ir.progressBg }),
                            ),
                        );
                    }),
                    mr = 'QuestSeparator_separatorLine_8f',
                    Er = 'QuestSeparator_separatorLine__hideRewards_bc',
                    dr = (0, a.memo)(({ conditionType: e, isShowReward: u = !0 }) => {
                        const t = e === W.OR,
                            r = C()(
                                mr,
                                t
                                    ? 'QuestSeparator_separatorLine__bottomOr_8a'
                                    : 'QuestSeparator_separatorLine__bottom_20',
                                !u && Er,
                            );
                        return s().createElement(
                            'div',
                            { className: C()('QuestSeparator_base_64', t && 'QuestSeparator_base__or_45') },
                            s().createElement('div', { className: C()(mr, !u && Er) }),
                            s().createElement('div', { className: C()('QuestSeparator_separatorText_00') }),
                            s().createElement('div', { className: r }),
                        );
                    }),
                    _r = {
                        base: 'QuestCondition_base_25',
                        quest: 'QuestCondition_quest_16',
                        quest__multi: 'QuestCondition_quest__multi_4f',
                        base__hideRewards: 'QuestCondition_base__hideRewards_a6',
                        description: 'QuestCondition_description_1d',
                        progressContainer: 'QuestCondition_progressContainer_63',
                        questProgress: 'QuestCondition_questProgress_1a',
                    },
                    Ar = (0, a.memo)(
                        ({
                            state: e,
                            condition: u,
                            isOneCondition: t,
                            conditionType: r,
                            isFirst: n,
                            isMultiTypesConditions: a,
                            isShowReward: o = !0,
                            levels: i,
                            showLevelsAsRange: l,
                            vehicleTypes: c,
                            battleTypes: m,
                            description: E,
                            vehicleNations: d,
                        }) => {
                            const _ = u.current,
                                A = u.total,
                                g = u.earned,
                                F = n || t || a,
                                D = E || u.descrData;
                            return s().createElement(
                                'div',
                                { className: C()(_r.base, F && _r.base__first, !o && _r.base__hideRewards) },
                                s().createElement(
                                    'div',
                                    { className: C()(_r.quest, !t && _r.quest__multi) },
                                    s().createElement(Wu, { className: _r.description, text: D }),
                                    s().createElement(
                                        'div',
                                        { className: _r.progressContainer },
                                        s().createElement(
                                            'div',
                                            { className: _r.questProgress },
                                            s().createElement(cr, {
                                                state: e,
                                                current: _,
                                                total: A,
                                                iconKey: u.iconKey,
                                                earned: g,
                                            }),
                                        ),
                                        s().createElement(or, {
                                            levels: i,
                                            showLevelsAsRange: l,
                                            vehicleTypes: c,
                                            battleTypes: m,
                                            vehicleNations: d,
                                        }),
                                    ),
                                ),
                                n && !t && s().createElement(dr, { conditionType: r, isShowReward: o }),
                            );
                        },
                    );
                let gr;
                !(function (e) {
                    ((e.ArmoryCoin = 'armory_coin'), (e.ProgressionToken = 'progression_token'));
                })(gr || (gr = {}));
                const Fr = R.strings.armory_yard.tooltip.mainView.postProgressionToken,
                    Dr = (0, a.memo)(({ tokensCount: e = 0, isMainView: u = !0, isPostProgression: t = !1 }) =>
                        s().createElement(
                            'div',
                            { className: C()('QuestToken_base_45', u && 'QuestToken_base__main_7a') },
                            u && s().createElement('div', { className: 'QuestToken_glow_73' }),
                            s().createElement(
                                Yu,
                                { header: Fr.header(), body: Fr.body(), ignoreShowDelay: !0, isEnabled: t },
                                s().createElement(
                                    'div',
                                    { className: 'QuestToken_token_5a' },
                                    s().createElement(Wu, {
                                        text: t
                                            ? R.strings.armory_yard.mainView.quest.postProgressionToken.label()
                                            : R.strings.armory_yard.mainView.quest.progressionToken.label(),
                                        className: 'QuestToken_label_10',
                                    }),
                                    !t &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: 'QuestToken_tokensCount_c1' }, e),
                                            s().createElement(
                                                We,
                                                {
                                                    contentId:
                                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                                            'resId',
                                                        ),
                                                    args: { currency: gr.ProgressionToken },
                                                    ignoreShowDelay: !0,
                                                },
                                                s().createElement('div', { className: 'QuestToken_icon_c7' }),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                    );
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const Br = (0, a.memo)(({ data: e, size: u = Qe.Small }) =>
                        s().createElement(
                            'div',
                            { className: 'RewardsList_base_87' },
                            e.map((e, t) =>
                                s().createElement(
                                    'div',
                                    { key: t, className: 'RewardsList_reward_64' },
                                    s().createElement(
                                        Ht,
                                        pr({ size: u, classNames: { info: 'RewardsList_info_69' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Cr = {
                        base: 'Quest_base_71',
                        borderLayer: 'Quest_borderLayer_4e',
                        fadeIn: 'Quest_fadeIn_91',
                        fadeOut: 'Quest_fadeOut_b2',
                        questCard: 'Quest_questCard_9a',
                        questCard__hideRewards: 'Quest_questCard__hideRewards_2d',
                        questCard__selected: 'Quest_questCard__selected_2e',
                        background: 'Quest_background_48',
                        borderSelected: 'Quest_borderSelected_37',
                        state: 'Quest_state_8b',
                        content: 'Quest_content_3c',
                        questCard__notAvailable: 'Quest_questCard__notAvailable_99',
                        questCard__disableAllQuests: 'Quest_questCard__disableAllQuests_20',
                        questCard__hideAllContent: 'Quest_questCard__hideAllContent_fb',
                        quests: 'Quest_quests_a0',
                        rewards: 'Quest_rewards_a5',
                        separator: 'Quest_separator_5d',
                        checkIcon: 'Quest_checkIcon_57',
                        glow: 'Quest_glow_59',
                        rerollButtonContainer: 'Quest_rerollButtonContainer_48',
                        rerollButtonText: 'Quest_rerollButtonText_a5',
                        rerollButtonText__active: 'Quest_rerollButtonText__active_2c',
                        postprogressionDisabledQuest: 'Quest_postprogressionDisabledQuest_2c',
                    };
                function hr() {
                    return (
                        (hr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        hr.apply(this, arguments)
                    );
                }
                const br = R.strings.armory_yard.mainView.quests,
                    fr = R.images.armory_yard.gui.maps.icons.quests.quest,
                    vr = (0, a.memo)(
                        ({
                            tokensCount: e,
                            chapterState: u,
                            quests: t,
                            status: r,
                            progressionState: n,
                            isShowReward: o = !0,
                            isSelected: i = !1,
                            isRerollEnabled: l = !1,
                            hasRerollTrigger: c = !1,
                            isPostProgression: m = !1,
                            animationState: E,
                            onReroll: d,
                        }) => {
                            const _ = (0, a.useState)(null),
                                A = _[0],
                                g = _[1],
                                F = (0, a.useState)(r),
                                D = F[0],
                                p = F[1],
                                B = (0, a.useState)(!1),
                                h = B[0],
                                b = B[1],
                                v = S().mediaSize,
                                w = ((e) => {
                                    switch (e) {
                                        case f.ExtraSmall:
                                        case f.Small:
                                            return 'small';
                                        default:
                                            return 'big';
                                    }
                                })(v),
                                y = v >= f.Medium ? Qe.Big : Qe.Small,
                                P = v < f.Medium ? Kt.Small : Kt.Large,
                                T = fr.$dyn(w),
                                x = m && r === H.Locked,
                                M = Boolean(
                                    r !== H.Locked && r !== tt && u !== G && o && (e || (m && n !== q.Completed)),
                                ),
                                L = ((e) => {
                                    if (e && e.length)
                                        return e.length > 1
                                            ? W.OR
                                            : e[0].bonusCondition.items.length > 1
                                              ? W.AND
                                              : void 0;
                                })(t),
                                N = r === nt && d && l,
                                O = (0, a.useMemo)(
                                    () =>
                                        t[0].bonuses
                                            .filter((e) => e.label.length > 0 || e.value.length > 0)
                                            .map((e) =>
                                                ((e) => ({
                                                    name: e.name,
                                                    image: iu(e, Qe.Big),
                                                    value: e.value,
                                                    valueType: au(e.name),
                                                    bonusType: au(e.name),
                                                    tooltipArgs: lu(
                                                        { tooltipId: e.tooltipId, tooltipType: Pe },
                                                        Number.parseInt(e.tooltipContentId),
                                                    ),
                                                }))(e),
                                            ),
                                    [t],
                                );
                            return (
                                (0, a.useEffect)(() => {
                                    if (r !== D)
                                        return (
                                            g(D),
                                            p(r),
                                            J(() => {
                                                g(null);
                                            }, Re.ACTIVE_PHASE_END_STEPS[ye.DisableAllQuests])
                                        );
                                }, [D, r]),
                                s().createElement(
                                    'div',
                                    { className: Cr.base },
                                    A &&
                                        s().createElement('div', {
                                            className: C()(Cr.borderLayer, Cr.fadeOut),
                                            style: { borderImageSource: `url(${T.$dyn('bg_' + A)})` },
                                        }),
                                    s().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                Cr.questCard,
                                                Cr[`questCard__${r}`],
                                                !o && Cr.questCard__hideRewards,
                                                i && Cr.questCard__selected,
                                                Cr.borderLayer,
                                                Cr.fadeIn,
                                                Cr[`questCard__${E}`],
                                            ),
                                            style: { borderImageSource: `url(${T.$dyn('bg_' + r)})` },
                                        },
                                        x &&
                                            s().createElement(
                                                Yu,
                                                {
                                                    header: br.disabledQuest.tooltip.header(),
                                                    body: br.disabledQuest.tooltip.body(),
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Cr.postprogressionDisabledQuest },
                                                    s().createElement(Wu, { text: br.disabledQuest.title() }),
                                                ),
                                            ),
                                        s().createElement('div', { className: Cr.background }),
                                        s().createElement('div', { className: Cr.borderSelected }),
                                        s().createElement(
                                            'div',
                                            { className: Cr.state },
                                            r === tt &&
                                                o &&
                                                s().createElement(ur, { rewardsCount: t[0].bonuses.length }),
                                            M &&
                                                s().createElement(Dr, {
                                                    tokensCount: null != e ? e : 0,
                                                    isPostProgression: m,
                                                }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Cr.content },
                                            s().createElement(
                                                'div',
                                                { className: C()(Cr.quests, L === W.OR && Cr.quests__orCondition) },
                                                t.map((e, u) => {
                                                    const t = ((e, u) => {
                                                        const t = e.bonusCondition.items.length
                                                                ? e.bonusCondition.items[0]
                                                                : null,
                                                            r = e.postBattleCondition.items.length
                                                                ? e.postBattleCondition.items[0]
                                                                : null;
                                                        return (u !== W.AND && u) || !t
                                                            ? [t, r]
                                                            : [...e.bonusCondition.items];
                                                    })(e, L).filter((e) => e);
                                                    return t.map((t, n) =>
                                                        s().createElement(
                                                            Ar,
                                                            hr(
                                                                {
                                                                    key: t.descrData,
                                                                    state: r,
                                                                    condition: t,
                                                                    isOneCondition: Boolean(!L),
                                                                    conditionType: L,
                                                                    isFirst: 0 === n && 0 === u,
                                                                    isMultiTypesConditions: Boolean(L),
                                                                    isShowReward: o,
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    );
                                                }),
                                            ),
                                        ),
                                        o &&
                                            O &&
                                            s().createElement(
                                                'div',
                                                { className: Cr.rewards },
                                                s().createElement('div', { className: Cr.separator }),
                                                N &&
                                                    d &&
                                                    s().createElement(
                                                        'div',
                                                        { className: Cr.rerollButtonContainer },
                                                        !c &&
                                                            s().createElement(Wu, {
                                                                className: C()(
                                                                    Cr.rerollButtonText,
                                                                    h && Cr.rerollButtonText__active,
                                                                ),
                                                                text: br.rerollButtonText(),
                                                            }),
                                                        s().createElement(
                                                            We,
                                                            {
                                                                contentId:
                                                                    R.views.armory_yard.lobby.feature.tooltips.RerollButtonTooltip(
                                                                        'resId',
                                                                    ),
                                                            },
                                                            s().createElement(
                                                                'div',
                                                                {
                                                                    onMouseEnter: () => b(!0),
                                                                    onMouseLeave: () => b(!1),
                                                                    className: Cr.rerollButton,
                                                                },
                                                                s().createElement(er, {
                                                                    onReroll: d,
                                                                    size: P,
                                                                    hasTrigger: c,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                s().createElement(Br, { size: y, data: O }),
                                            ),
                                        i &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: Cr.glow }),
                                                s().createElement('div', { className: Cr.checkIcon }),
                                            ),
                                    ),
                                )
                            );
                        },
                    ),
                    wr = (e) => {
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
                    Sr = [];
                function yr(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Sr)
                    );
                }
                function Rr(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        n,
                    ];
                }
                function Pr(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                let Tr;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Tr || (Tr = {}));
                const xr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Mr = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return pe(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? xr : c,
                                E = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Pr(e, u);
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
                                                                              ? Pr(e, u)
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
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), t.apply(l, i));
                                                    }
                                                    a ||
                                                        (r && !n && m(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? m()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, ut.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                p = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = F.scrollPosition.get(),
                                            a = (null != (r = F.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            D.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: o(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, m.animationConfig, F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, m.step),
                                            a = p(u, e, r);
                                        B(a);
                                    },
                                    [B, p, m.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(r(e)),
                                            E.current && _.trigger('mouseWheel', e, F.scrollPosition, u(E.current)));
                                    },
                                    [F.scrollPosition, C, _],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
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
                                        wr(() => {
                                            const e = E.current;
                                            e &&
                                                (B(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                f = yr(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const v = (0, a.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: B,
                                    applyStepTo: C,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: f,
                                    handleIsThumbDragging: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, B, C, v, _.off, _.on, f, h, D, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Lr = Mr({
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
                        getDirection: (e) => (e.deltaY > 1 ? Tr.Next : Tr.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Nr = 'HorizontalBar_base__nonActive_82',
                    Or = 'disable',
                    Ir = { pending: !1, offset: 0 },
                    kr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Hr = () => {},
                    Ur = (e, u) => Math.max(20, e.offsetWidth * u),
                    Gr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = kr, onDrag: r = Hr }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, a.useState)(Ir),
                            d = E[0],
                            _ = E[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    m = pe(0, 1, a / (n - r)),
                                    E = (u.offsetWidth - Ur(u, s)) * m;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Or),
                                                    void i.current.classList.remove(Or)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Or),
                                                    void i.current.classList.add(Or)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Or), i.current.classList.remove(Or));
                                        }
                                    })(E));
                            },
                            F = yr(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    ((u.style.width = `${Ur(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(Nr) : n.current.classList.remove(Nr)));
                                })(),
                                    g());
                            });
                        ((0, a.useEffect)(() => wr(F)),
                            (0, a.useEffect)(
                                () =>
                                    wr(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Hr;
                                        const r = () => {
                                            (t(), (t = wr(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!n || !a || !s) return;
                                        const o = u.screenX - d.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(Ir));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]));
                        const D = Rr((u) => e.applyStepTo(u), m, [e]),
                            p = D[0],
                            B = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Or) || Ju('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Or) || 0 !== e.button || (Ju('play'), p(Tr.Next));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (Ju('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? Tr.Prev : Tr.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: C()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: C()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Or) || 0 !== e.button || (Ju('play'), p(Tr.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    $r = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Wr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()($r.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()($r.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()($r.defaultScrollArea, n) },
                                s().createElement(qr, { className: i, api: E, classNames: o }, e),
                            ),
                            s().createElement(Gr, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    qr = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => wr(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()($r.base, u), style: n },
                            s().createElement(
                                'div',
                                {
                                    className: C()($r.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: C()($r.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((qr.Bar = Gr),
                    (qr.Default = Wr),
                    (qr.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => wr(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()($r.base, u) },
                            s().createElement(
                                'div',
                                { className: C()($r.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: C()($r.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const zr = Mr({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Tr.Next : Tr.Prev),
                    }),
                    Qr = 'VerticalBar_base__nonActive_42',
                    jr = 'disable',
                    Vr = () => {},
                    Xr = { pending: !1, offset: 0 },
                    Yr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Kr = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Zr = (e, u) => Math.max(20, e.offsetHeight * u),
                    Jr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Yr, onDrag: r = Vr }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, a.useState)(Xr),
                            d = E[0],
                            _ = E[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            g = yr(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Zr(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Qr) : n.current.classList.remove(Qr)),
                                    s
                                );
                            }),
                            F = yr(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    m = pe(0, 1, a / (n - r)),
                                    E = (u.offsetHeight - Zr(u, s)) * m;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(jr),
                                                    void i.current.classList.remove(jr)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(jr),
                                                    void i.current.classList.add(jr)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(jr), i.current.classList.remove(jr));
                                        }
                                    })(E));
                            }),
                            D = yr(() => {
                                Kr(e, () => {
                                    (g(), F());
                                });
                            });
                        ((0, a.useEffect)(() => wr(D)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Kr(e, () => {
                                        F();
                                    });
                                };
                                let t = Vr;
                                const r = () => {
                                    (t(), (t = wr(D)));
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
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        Kr(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - d.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(Xr));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]));
                        const p = Rr((u) => e.applyStepTo(u), m, [e]),
                            B = p[0],
                            h = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(jr) || Ju('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(jr) || 0 !== e.button || (Ju('play'), B(Tr.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (Ju('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? Tr.Prev : Tr.Next),
                                                  c.current &&
                                                      Kr(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: C()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(jr) || 0 !== e.button || (Ju('play'), B(Tr.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    en = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    un = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(en.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()(en.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(en.area, n) },
                                s().createElement(tn, { className: o, classNames: i, api: E }, e),
                            ),
                            s().createElement(Jr, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    tn = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => wr(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(en.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(en.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                tn.Default = un;
                const rn = { Vertical: n, Horizontal: r };
                var nn = t(5521);
                const an = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function sn(e = nn.n.NONE, u = an, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== nn.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                const on = { type: 'idle' };
                function ln() {
                    return !1;
                }
                console.log;
                var cn = t(3915);
                function mn(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const En = (e) => (0 === e ? window : window.subViews.get(e)),
                    dn = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? dn(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, r) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? dn(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? dn(u) : u]),
                                    )
                            : e;
                        var u, t;
                    };
                var _n = t(5647);
                const An = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = En,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(s(a)), l);
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
                                                                                    return mn(e, u);
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
                                                                                          ? mn(e, u)
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
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const u = { root: e.object(), quests: e.array('quests', []) },
                                                    t = (0, _n.O)(
                                                        () => {
                                                            return ((e = u.quests.get()), dn(e)).sort(
                                                                (e, u) =>
                                                                    Number(e.quests[0].id.split(':')[1]) -
                                                                    Number(u.quests[0].id.split(':')[1]),
                                                            );
                                                            var e;
                                                        },
                                                        { equals: ln },
                                                    );
                                                return Object.assign({}, u, { computes: { getQuests: t } });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = cn.observable.box(r, { equals: ln });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, cn.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = cn.observable.box(r, { equals: ln });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, cn.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = cn.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, cn.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = cn.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, cn.action)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                            E = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && r ? r.controls(E) : u(E),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    d = E[0],
                                    _ = E[1],
                                    A = (0, a.useState)(() => c(e, r, o)),
                                    g = A[0],
                                    F = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? F(c(d, r, o)) : (m.current = !0);
                                    }, [o, d, r]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    s().createElement(t.Provider, { value: g }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, function () {}),
                    gn = An[0],
                    Fn = An[1],
                    Dn = (0, Xt.observer)(() => {
                        const e = Fn().model;
                        !(function ({
                            key: e = nn.n.ESCAPE,
                            callback: u = () => i.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            sn(e, u, t);
                        })({ callback: He.Sy });
                        const u = zr();
                        !(function (e, u) {
                            const t = e.contentRef,
                                r = e.wrapperRef,
                                n = e.scrollPosition,
                                s = e.clampPosition,
                                o = e.animationScroll,
                                i = e.events,
                                l = (0, a.useState)(on),
                                c = l[0],
                                m = l[1];
                            ((0, a.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [t, c.type]),
                                (0, a.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = (e) => {
                                            const a = t.current,
                                                i = r.current;
                                            if (!a || !i) return;
                                            const l = c.positionFrom - e.screenY,
                                                m = c.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(a, m),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    u,
                                                ),
                                            );
                                        },
                                        a = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', a),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', a));
                                        }
                                    );
                                }, [o.scrollPosition, s, t, c, n, r, u]),
                                (0, a.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        m(on);
                                    };
                                    return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [o.scrollPosition, c.type, i]),
                                (0, a.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        (e.stopPropagation(),
                                            0 === e.button &&
                                                m({
                                                    type: 'dragging',
                                                    positionFrom: e.screenY,
                                                    previousScrollPosition: o.scrollPosition.get(),
                                                }));
                                    };
                                    return (
                                        e.addEventListener('mousedown', u),
                                        () => e.removeEventListener('mousedown', u)
                                    );
                                }, [o.scrollPosition, t]));
                        })(u);
                        const t = e.computes.getQuests();
                        return s().createElement(
                            'div',
                            { className: 'App_base_cc' },
                            s().createElement(
                                'div',
                                { className: 'App_content_62' },
                                s().createElement(
                                    'div',
                                    { className: 'App_quests_08' },
                                    s().createElement(
                                        rn.Vertical.Area.Default,
                                        {
                                            api: u,
                                            barClassNames: {
                                                base: 'App_bar_0b',
                                                topButton: 'App_topButton_df',
                                                bottomButton: 'App_bottomButton_cb',
                                            },
                                        },
                                        t.map((e, u) => {
                                            var t;
                                            const r = e.quests[0],
                                                n = null == r || null == (t = r.id) ? void 0 : t.split(':')[1];
                                            return s().createElement(
                                                'div',
                                                { className: 'App_quest_b8', key: u },
                                                s().createElement(Wu, { text: n, className: 'App_questId_83' }),
                                                s().createElement(
                                                    'div',
                                                    { className: 'App_questContainer_5f' },
                                                    s().createElement(vr, {
                                                        quests: e.quests,
                                                        status: e.status,
                                                        isShowReward: !0,
                                                    }),
                                                ),
                                            );
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        s().createElement(gn, null, s().createElement(O, null, s().createElement(Dn, null))),
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
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
        (__webpack_require__.j = 626),
        (() => {
            var e = { 626: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3588));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
