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
                (t.r(u), t.d(u, { mouse: () => s, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    s = (function () {
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
                                            s = o[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (s(),
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
                        graphicsQuality: () => o,
                    }));
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => p,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => g,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function s(e) {
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
                    return 'rem' === e ? u : { x: F(u.x), y: F(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
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
                                o = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
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
                t.d(u, { Sw: () => a.Z, B3: () => c, Z5: () => o, B0: () => i, ry: () => D });
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
                const p = ['args'];
                function g(e, u, t, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                        function o(e) {
                                            g(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                                })(u, p);
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
                    f = () => B(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const h = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                m = s.width,
                                E = s.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                        ClickOutsideManager: h,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = b;
            },
            5758: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => _t,
                        Bar: () => mt,
                        DefaultScroll: () => dt,
                        Direction: () => ut,
                        defaultSettings: () => tt,
                        useHorizontalScrollApi: () => nt,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => wt, Bar: () => vt, Default: () => bt, useVerticalScrollApi: () => At }));
                var a = t(6179),
                    o = t.n(a),
                    s = t(493),
                    i = t.n(s),
                    l = t(6483),
                    c = t.n(l);
                function m(e) {
                    engine.call('PlaySound', e);
                }
                const E = {
                        playHighlight() {
                            m('highlight');
                        },
                        playClick() {
                            m('play');
                        },
                        playYes() {
                            m('yes1');
                        },
                    },
                    d = {
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
                    _ = [
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
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                class p extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && m(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && m(this.props.soundClick));
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
                            a = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            m = e.onMouseDown,
                            E = e.onMouseUp,
                            p =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, _)),
                            g = c()(d.base, d[`base__${a}`], d[`base__${n}`], null == s ? void 0 : s.base),
                            F = c()(d.icon, d[`icon__${a}`], d[`icon__${n}`], null == s ? void 0 : s.icon),
                            D = c()(d.glow, null == s ? void 0 : s.glow),
                            B = c()(d.caption, d[`caption__${a}`], null == s ? void 0 : s.caption),
                            f = c()(d.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            A(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                p,
                            ),
                            'info' !== a && o().createElement('div', { className: d.shine }),
                            o().createElement('div', { className: F }, o().createElement('div', { className: D })),
                            o().createElement('div', { className: B }, u),
                            r && o().createElement('div', { className: f }, r),
                        );
                    }
                }
                let g, F;
                ((p.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e.Main = 'main'), (e.Artefact = 'artefact'), (e.Pickups = 'pickups'));
                    })(g || (g = {})),
                    (function (e) {
                        ((e[(e.Old = 1)] = 'Old'), (e[(e.New = 2)] = 'New'));
                    })(F || (F = {})));
                var D = t(3138),
                    B = t(5521),
                    f = t(4179);
                const C = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function v(e = B.n.NONE, u = C, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== B.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (D.O.view.isEventHandled()) return;
                                (D.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var h = t(3282),
                    b = t(5659);
                function w(e) {
                    return e;
                }
                function S() {
                    return !1;
                }
                console.log;
                var y = t(3915);
                function P(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const L = (e) => (0 === e ? window : window.subViews.get(e));
                function M(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var T = t(6517);
                const x = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: s }) {
                                const i = (0, a.useRef)([]),
                                    l = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = L,
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
                                                const o = (e) => {
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
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            i = D.O.view.addModelObserver(s, u, !0);
                                                        return (n.set(i, t), e && t(o(a)), i);
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
                                                                                    return P(e, u);
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
                                                                                          ? P(e, u)
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
                                            o =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            l = (e) => i.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        lobbyRoute: e.primitives(['lobbyRoute']),
                                                        selectedVehicle: e.primitives(['selectedVehicle']),
                                                        scoring: e.array('scoring', []),
                                                        progression: e.array('progression', []),
                                                        missions: e.array('missions', []),
                                                        medals: e.array('medals', []),
                                                        rovers: e.array('rovers', []),
                                                    },
                                                    t = (0, T.computedFn)(() => M(u.scoring.get(), w)),
                                                    r = (0, T.computedFn)(() =>
                                                        M(u.progression.get(), (e) =>
                                                            Object.assign({}, e, { bonuses: M(e.bonuses, w) }),
                                                        ),
                                                    ),
                                                    n = (0, T.computedFn)(() =>
                                                        M(u.missions.get(), (e) => Object.assign({}, e)),
                                                    ),
                                                    a = (0, T.computedFn)(() =>
                                                        M(u.medals.get(), (e) => Object.assign({}, e)),
                                                    ),
                                                    o = (0, T.computedFn)(() =>
                                                        M(u.rovers.get(), (e) =>
                                                            Object.assign({}, e, {
                                                                abilities: M(e.abilities, (e) => Object.assign({}, e)),
                                                            }),
                                                        ),
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getScoring: t,
                                                        getProgression: r,
                                                        getMissions: n,
                                                        getRovers: o,
                                                        getMedals: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = y.observable.box(r, { equals: S });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = y.observable.box(r, { equals: S });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = y.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.action)((e) => {
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
                                                                s = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = y.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.action)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                                cleanup: l,
                                            }),
                                            m = { mode: e, model: c, externalModel: o, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(m) : u(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    m = (0, a.useState)(e),
                                    E = m[0],
                                    d = m[1],
                                    _ = (0, a.useState)(() => l(e, r, s)),
                                    A = _[0],
                                    p = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? p(l(E, r, s)) : (c.current = !0);
                                    }, [s, E, r]),
                                    (0, a.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    o().createElement(t.Provider, { value: A }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onLobbyRouteChange: e.createCallback((e) => ({ newRoute: e }), 'onLobbyRouteChange'),
                        onVehicleChange: e.createCallback((e) => ({ vehicleSelected: e }), 'onVehicleChange'),
                        onClose: e.createCallbackNoArgs('onClose'),
                        onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        onShopClicked: e.createCallbackNoArgs('onShopClicked'),
                    })),
                    k = x[0],
                    N = x[1];
                let O;
                !(function (e) {
                    ((e.Hovered = 'Hovered'), (e.Active = 'Active'), (e.UnFocused = 'UnFocused'));
                })(O || (O = {}));
                const I = ['onClick', 'className', 'caption'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const U = (e) => {
                        let u = e.onClick,
                            t = e.className,
                            r = e.caption,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, I);
                        return o().createElement(
                            'div',
                            { className: c()('ExitMode_base_e4', t) },
                            o().createElement(
                                p,
                                H(
                                    {
                                        caption: r || R.strings.cosmicEvent.exitMode(),
                                        onClick: u,
                                        side: 'right',
                                        type: 'close',
                                    },
                                    n,
                                ),
                            ),
                        );
                    },
                    W = [
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
                function G(e) {
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
                const V = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: f.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    $ = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            E = void 0 !== m && m,
                            d = e.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            p = void 0 === A || A,
                            g = e.targetId,
                            F = void 0 === g ? 0 : g,
                            D = e.onShow,
                            B = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, W);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    F ||
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
                                [F],
                            ),
                            h = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (V(t, _, { isMouseEvent: !0, on: !0, arguments: G(r) }, v),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, _, r, v, D]),
                            b = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        V(t, _, { on: !1 }, v),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, _, v, B]),
                            w = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && b();
                            }, [p, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            p
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && b(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    z = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const X = R.views.common.tooltip_window.simple_tooltip_content,
                    Y = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, z);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, i]);
                        return o().createElement(
                            $,
                            j(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? X.SimpleTooltipHtmlContent('resId') : X.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    };
                var q = t(9887),
                    K = t.n(q);
                const Q = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    Z = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var J;
                function ee(e, u, t) {
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
                })(J || (J = {}));
                const ue = D.O.client.getSize('rem'),
                    te = ue.width,
                    re = ue.height,
                    ne = Object.assign({ width: te, height: re }, ee(te, re, Z)),
                    ae = (0, a.createContext)(ne),
                    oe = ['children'],
                    se = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, oe);
                        const r = (0, a.useContext)(ae),
                            n = r.extraLarge,
                            o = r.large,
                            s = r.medium,
                            i = r.small,
                            l = r.extraSmall,
                            c = r.extraLargeWidth,
                            m = r.largeWidth,
                            E = r.mediumWidth,
                            d = r.smallWidth,
                            _ = r.extraSmallWidth,
                            A = r.extraLargeHeight,
                            p = r.largeHeight,
                            g = r.mediumHeight,
                            F = r.smallHeight,
                            D = r.extraSmallHeight,
                            B = { extraLarge: A, large: p, medium: g, small: F, extraSmall: D };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && o) return u;
                            if (t.medium && s) return u;
                            if (t.small && i) return u;
                            if (t.extraSmall && l) return u;
                        } else {
                            if (t.extraLargeWidth && c) return Q(u, t, B);
                            if (t.largeWidth && m) return Q(u, t, B);
                            if (t.mediumWidth && E) return Q(u, t, B);
                            if (t.smallWidth && d) return Q(u, t, B);
                            if (t.extraSmallWidth && _) return Q(u, t, B);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && A) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && F) return u;
                                if (t.extraSmallHeight && D) return u;
                            }
                        }
                        return null;
                    };
                ((se.defaultProps = {
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
                    (0, a.memo)(se));
                const ie = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(ae),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        s = (0, a.useCallback)((e, u) => {
                            const t = D.O.view.pxToRem(e),
                                r = D.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, ee(t, r, Z)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const i = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(ae.Provider, { value: i }, e);
                });
                let le, ce, me;
                (!(function (e) {
                    ((e[(e.ExtraSmall = Z.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Z.small.width)] = 'Small'),
                        (e[(e.Medium = Z.medium.width)] = 'Medium'),
                        (e[(e.Large = Z.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Z.extraLarge.width)] = 'ExtraLarge'));
                })(le || (le = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = Z.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Z.small.width)] = 'Small'),
                            (e[(e.Medium = Z.medium.width)] = 'Medium'),
                            (e[(e.Large = Z.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Z.extraLarge.width)] = 'ExtraLarge'));
                    })(ce || (ce = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = Z.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Z.small.height)] = 'Small'),
                            (e[(e.Medium = Z.medium.height)] = 'Medium'),
                            (e[(e.Large = Z.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Z.extraLarge.height)] = 'ExtraLarge'));
                    })(me || (me = {})));
                const Ee = () => {
                        const e = (0, a.useContext)(ae),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return le.ExtraLarge;
                                    case e.large:
                                        return le.Large;
                                    case e.medium:
                                        return le.Medium;
                                    case e.small:
                                        return le.Small;
                                    case e.extraSmall:
                                        return le.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), le.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ce.ExtraLarge;
                                    case e.largeWidth:
                                        return ce.Large;
                                    case e.mediumWidth:
                                        return ce.Medium;
                                    case e.smallWidth:
                                        return ce.Small;
                                    case e.extraSmallWidth:
                                        return ce.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), ce.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return me.ExtraLarge;
                                    case e.largeHeight:
                                        return me.Large;
                                    case e.mediumHeight:
                                        return me.Medium;
                                    case e.smallHeight:
                                        return me.Small;
                                    case e.extraSmallHeight:
                                        return me.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), me.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    de = ['xl', 'lg', 'md', 'sm', 'xs'],
                    _e = (e) => e.includes('_') && ((e) => de.includes(e))(e.split('_').at(-1)),
                    Ae = [le.ExtraLarge, le.Large, le.Medium, le.Small, le.ExtraSmall],
                    pe = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (_e(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Ae.indexOf(u),
                                    o = (-1 !== a ? de.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== s ? s : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => de.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    ge = (e, u = pe) => {
                        const t = (
                            (e, u = pe) =>
                            (t) => {
                                const r = Ee().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => _e(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    Fe = {
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
                    De = [
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
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const fe = {
                        XL: { mt: Fe.mt__XL, mr: Fe.mr__XL, mb: Fe.mb__XL, ml: Fe.ml__XL },
                        LG: { mt: Fe.mt__LG, mr: Fe.mr__LG, mb: Fe.mb__LG, ml: Fe.ml__LG },
                        MDp: { mt: Fe.mt__MDp, mr: Fe.mr__MDp, mb: Fe.mb__MDp, ml: Fe.ml__MDp },
                        MD: { mt: Fe.mt__MD, mr: Fe.mr__MD, mb: Fe.mb__MD, ml: Fe.ml__MD },
                        SMp: { mt: Fe.mt__SMp, mr: Fe.mr__SMp, mb: Fe.mb__SMp, ml: Fe.ml__SMp },
                        SM: { mt: Fe.mt__SM, mr: Fe.mr__SM, mb: Fe.mb__SM, ml: Fe.ml__SM },
                        XS: { mt: Fe.mt__XS, mr: Fe.mr__XS, mb: Fe.mb__XS, ml: Fe.ml__XS },
                    },
                    Ce = (Object.keys(fe), ['mt', 'mr', 'mb', 'ml']),
                    ve = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    he = ge((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            s = e.mt,
                            i = void 0 === s ? n : s,
                            l = e.mr,
                            m = void 0 === l ? n : l,
                            E = e.mb,
                            d = void 0 === E ? n : E,
                            _ = e.ml,
                            A = void 0 === _ ? n : _,
                            p = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            D = void 0 === F ? (p ? 'column' : g && 'row') || void 0 : F,
                            B = e.flexStart,
                            f = e.center,
                            C = e.flexEnd,
                            v = e.spaceBetween,
                            h = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (B ? 'flex-start' : f && 'center') ||
                                      (C && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (h && 'space-around') ||
                                      void 0
                                    : b,
                            S = e.alignItems,
                            y = void 0 === S ? (B ? 'flex-start' : f && 'center') || (C && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            P = e.wrap,
                            L = e.flexWrap,
                            M = void 0 === L ? (P ? 'wrap' : void 0) : L,
                            T = e.grow,
                            x = e.shrink,
                            k = e.flex,
                            N = void 0 === k ? (T || x ? `${T ? 1 : 0} ${x ? 1 : 0} auto` : void 0) : k,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, De);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: m, mb: d, ml: A },
                                    u = ((e) =>
                                        Ce.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(fe[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Ce.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[ve[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: R,
                                        display: D || y ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, m, d, A, O, N, R, D, M, w, y]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return o().createElement('div', Be({ className: c()(Fe.base, ...G, u), style: W }, H), I);
                    });
                let be;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(be || (be = {}));
                const we = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Se = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ye = (e, u, t = be.left) => e.split(u).reduce(t === be.left ? we : Se, []),
                    Re = (() => {
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
                    Pe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Le = ({ binding: e, text: u = '', classMix: t, alignment: r = be.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: c()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = be.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Pe.includes(t)
                                                                ? Re(e)
                                                                : ((e, u = be.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          ye(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(ye(e, r, be.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Me = t(3532),
                    Te = t.n(Me);
                const xe = {
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
                    ke = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const Oe = Object.keys(Te()),
                    Ie = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    He = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ue = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H56': Ie,
                            'heading-H36': Ie,
                            'heading-H28': He,
                            'heading-H24': He,
                            'heading-H24R': He,
                            'heading-H22': He,
                            'heading-H20R': He,
                            'heading-H18': He,
                            'heading-H15': Ue,
                            'heading-H14': Ue,
                            'paragraph-P24': He,
                            'paragraph-P18': He,
                            'paragraph-P16': He,
                            'paragraph-P14': Ue,
                            'paragraph-P12': Ue,
                            'paragraph-P10': Ue,
                        }),
                    Ge =
                        (Object.keys(We),
                        (e) =>
                            e
                                ? ((e) => Oe.includes(e))(e)
                                    ? { colorClassName: xe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ve = ge((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            m = e.mr,
                            E = void 0 === m ? s : m,
                            d = e.mb,
                            _ = void 0 === d ? s : d,
                            A = e.ml,
                            p = void 0 === A ? s : A,
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
                            })(e, ke);
                        const B = (0, a.useMemo)(() => {
                                const e = Ge(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: u };
                            }, [g, n]),
                            f = B.computedStyle,
                            C = B.colorClassName;
                        return o().createElement(
                            he,
                            Ne(
                                {
                                    className: c()(xe.base, t && xe[t], C, r),
                                    style: f,
                                    mt: !0 === l ? We[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? We[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? We[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === p ? We[t || 'paragraph-P16'].ml : p,
                                },
                                D,
                            ),
                            void 0 !== F ? o().createElement(Le, Ne({}, F, { text: u })) : u,
                        );
                    }),
                    $e = ({
                        icon: e,
                        title: u,
                        points: t,
                        tooltipTitle: r,
                        tooltipBody: n,
                        isHighlighted: a = !1,
                        classMix: s,
                    }) =>
                        o().createElement(
                            'div',
                            { className: c()('ActionItem_base_86', a && 'ActionItem_base__highlighted_84', s) },
                            o().createElement(
                                Y,
                                { header: r, body: n },
                                o().createElement(
                                    'div',
                                    { className: 'ActionItem_infoBlock_23' },
                                    o().createElement(
                                        'div',
                                        { className: 'ActionItem_icon_bg_90' },
                                        o().createElement('img', { className: 'ActionItem_icon_e8', src: e }),
                                    ),
                                    o().createElement(Ve, { text: u, className: 'ActionItem_title_8b' }),
                                ),
                            ),
                            o().createElement(
                                Y,
                                {
                                    header: R.strings.cosmicEvent.tooltip.marsPoints.header(),
                                    body: R.strings.cosmicEvent.tooltip.marsPoints.description(),
                                },
                                o().createElement(
                                    'div',
                                    { className: 'ActionItem_points_b7' },
                                    t,
                                    o().createElement('div', { className: 'ActionItem_points_bg_61' }),
                                ),
                            ),
                        ),
                    ze = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let je, Xe;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(je || (je = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Xe || (Xe = {})));
                const Ye = ({ size: e = je.Default, classMix: u }) =>
                        o().createElement('div', { className: c()(ze.background, ze[`background__${e}`], u) }),
                    qe = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Ke = ({ size: e }) => {
                        const u = c()(qe.base, qe[`base__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    Qe = {
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
                    Ze = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const s = c()(
                                    Qe.base,
                                    Qe[`base__${e}`],
                                    t && Qe.base__disabled,
                                    n && Qe.base__finished,
                                    a && Qe.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: u },
                                o().createElement('div', { className: Qe.pattern }),
                                o().createElement('div', { className: Qe.gradient }),
                                i && o().createElement(Ke, { size: e }),
                            );
                        },
                    ),
                    Je = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            o().createElement(Ze, { size: e, disabled: r, baseStyles: s, isComplete: i, lineRef: t })
                        );
                    },
                    eu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                let uu, tu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(uu || (uu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(tu || (tu = {})));
                const ru = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < r,
                                m = (0, a.useState)(tu.Idle),
                                E = m[0],
                                d = m[1],
                                _ = E === tu.In,
                                A = E === tu.End,
                                p = E === tu.Idle,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (p && !t)
                                    return eu(() => {
                                        g(tu.In);
                                    }, u);
                            }, [g, t, p, u]),
                                (0, a.useEffect)(() => {
                                    if (_)
                                        return eu(() => {
                                            (i && i(), g(tu.End));
                                        }, e + u);
                                }, [g, _, i, u, e]));
                            const F = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${c ? s : r}%` }),
                                    [r, c, s],
                                );
                            return A
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: B },
                                      o().createElement(
                                          'div',
                                          { style: p ? F : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          o().createElement(Ke, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    nu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: s,
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
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ze, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: s,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    o().createElement(ru, {
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
                    au = (e) => (e ? { left: 0 } : { right: 0 }),
                    ou = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    su = (e) => ({ transitionDuration: `${e}ms` }),
                    iu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: m,
                        }) => {
                            const E = s < r,
                                d = (0, a.useState)(uu.Idle),
                                _ = d[0],
                                A = d[1],
                                p = _ === uu.End,
                                g = _ === uu.Idle,
                                F = _ === uu.Grow,
                                D = _ === uu.Shrink,
                                B = (0, a.useCallback)(
                                    (e) => {
                                        (A(e), l && l(e));
                                    },
                                    [l],
                                ),
                                f = (0, a.useCallback)(
                                    (e, u) =>
                                        eu(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? f(uu.Grow, u)
                                        : F
                                          ? f(uu.Shrink, e)
                                          : D
                                            ? f(uu.End, e)
                                            : void (p && i && i());
                            }, [f, t, p, F, g, D, i, u, e]);
                            const C = (0, a.useMemo)(() => Object.assign({ width: '100%' }, su(e), au(E)), [E, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, su(e), au(E)), [E, e]),
                                h = (0, a.useMemo)(() => Object.assign({ width: '0%' }, ou(E, r), su(e)), [r, E, e]),
                                b = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, ou(E, r), su(e)),
                                    [r, E, s, e],
                                );
                            if (p) return null;
                            const w = c()(
                                'ProgressBarDeltaGrow_base_7e',
                                m,
                                E && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return o().createElement(
                                'div',
                                { style: g ? h : b, className: w },
                                o().createElement(
                                    'div',
                                    { style: D ? v : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    o().createElement(Ke, { size: n }),
                                ),
                            );
                        },
                    ),
                    lu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: s,
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
                                        (e === uu.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ze, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: s,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? g : p,
                                }),
                                t >= 0 &&
                                    o().createElement(iu, {
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
                    cu = ['onComplete', 'onEndAnimation'];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const Eu = (0, a.memo)((e) => {
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
                            })(e, cu);
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== s && i(e), e && u && u(), t && t());
                            }, [s, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Xe.Simple:
                                return o().createElement(nu, mu({}, r, { onEndAnimation: l, isComplete: s }));
                            case Xe.Growing:
                                return o().createElement(lu, mu({}, r, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    du = ['onEndAnimation'];
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
                const Au = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, du);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        o().createElement(Eu, _u({}, t, { onEndAnimation: n, key: `${s}-${t.to}`, from: s }))
                    );
                });
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
                const gu = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: a,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return o().createElement(Je, {
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
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? o().createElement(Au, c)
                                : o().createElement(Eu, pu({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Fu = (e) => ({
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
                    Du = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
                        delta: {
                            color: '#c2ffff',
                            shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
                        },
                    },
                    Bu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    fu = (e, u, t) => ('number' == typeof t ? (Bu(0, u, t) / u) * 100 : e),
                    Cu = {
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
                    vu = {
                        freezed: !1,
                        withStack: !1,
                        type: Xe.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    hu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Cu,
                            size: t = je.Default,
                            animationSettings: r = vu,
                            disabled: n = !1,
                            withoutBackground: s = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: m,
                            lineRef: E,
                            onChangeAnimationState: d,
                            onEndAnimation: _,
                            onComplete: A,
                        }) => {
                            const p = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (Bu(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: fu(r, u, t) };
                                }, [t, u, e]))(l, e, m);
                            return o().createElement(
                                'div',
                                { className: c()(ze.base, ze[`base__${t}`]), style: Fu(u) },
                                !s && o().createElement(Ye, { size: t, classMix: i }),
                                o().createElement(gu, {
                                    size: t,
                                    lineRef: E,
                                    disabled: n,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: _,
                                    onChangeAnimationState: d,
                                    onComplete: A,
                                }),
                            );
                        },
                    );
                let bu, wu, Su, yu, Ru, Pu, Lu;
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
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'));
                })(bu || (bu = {})),
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
                    })(wu || (wu = {})),
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
                    })(Su || (Su = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(yu || (yu = {})),
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
                    })(Ru || (Ru = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Pu || (Pu = {})),
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
                    })(Lu || (Lu = {})));
                const Mu = ['children'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const xu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, Mu);
                    return o().createElement(
                        $,
                        Tu(
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
                const Nu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = o().createElement('div', { className: t }, e);
                    if (u.header || u.body) return o().createElement(Y, u, r);
                    const n = u.contentId,
                        a = u.args,
                        s = null == a ? void 0 : a.contentId;
                    return n || s
                        ? o().createElement($, ku({}, u, { contentId: n || s }), r)
                        : o().createElement(xu, u, r);
                };
                class Ou extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? f.B3.GOLD : f.B3.INTEGRAL;
                        const u = f.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ou.defaultProps = { format: 'integral' };
                const Iu = [
                        bu.Items,
                        bu.Equipment,
                        bu.Xp,
                        bu.XpFactor,
                        bu.Blueprints,
                        bu.BlueprintsAny,
                        bu.Goodies,
                        bu.Berths,
                        bu.Slots,
                        bu.Tokens,
                        bu.CrewSkins,
                        bu.CrewBooks,
                        bu.Customizations,
                        bu.CreditsFactor,
                        bu.TankmenXp,
                        bu.TankmenXpFactor,
                        bu.FreeXpFactor,
                        bu.BattleToken,
                        bu.PremiumUniversal,
                        bu.NaturalCover,
                        bu.BpCoin,
                        bu.BattlePassSelectToken,
                        bu.BattlaPassFinalAchievement,
                        bu.BattleBadge,
                        bu.BonusX5,
                        bu.CrewBonusX3,
                        bu.NewYearFillers,
                        bu.NewYearInvoice,
                        bu.EpicSelectToken,
                        bu.Comp7TokenWeeklyReward,
                        bu.Comp7TokenCouponReward,
                        bu.BattleBoosterGift,
                        bu.CosmicLootboxCommon,
                        bu.CosmicLootboxSilver,
                        bu.SelectableBonus,
                        bu.GoldenTicket,
                        bu.PostStamp,
                        bu.PremiumPlusUniversal,
                    ],
                    Hu = [bu.Gold, bu.Credits, bu.Crystal, bu.FreeXp],
                    Uu = [bu.BattlePassPoints],
                    Wu = [bu.PremiumPlus, bu.Premium];
                let Gu;
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
                })(Gu || (Gu = {}));
                const Vu = ['engravings', 'backgrounds'],
                    $u = ['engraving', 'background'],
                    zu = (e, u = Su.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Su.S600x450:
                                        return 'c_600x450';
                                    case Su.S400x300:
                                        return 'c_400x300';
                                    case Su.S296x222:
                                        return 'c_296x222';
                                    case Su.S232x174:
                                        return 'c_232x174';
                                    case Su.Big:
                                        return 'c_80x80';
                                    case Su.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Su.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Su.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = Vu[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn($u[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case Su.S600x450:
                                            return 'c_600x450';
                                        case Su.S400x300:
                                            return 'c_400x300';
                                        case Su.S296x222:
                                            return 'c_296x222';
                                        case Su.S232x174:
                                            return 'c_232x174';
                                        case Su.S180x135:
                                            return 'big';
                                        case Su.Big:
                                        case Su.S80x80:
                                            return 'c_80x80';
                                        case Su.Small:
                                        case Su.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${a}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case Su.Mini:
                                            return Gu.s32;
                                        case Su.Small:
                                        case Su.S48x48:
                                            return Gu.s48;
                                        case Su.S80x80:
                                        case Su.Big:
                                            return Gu.s80;
                                        case Su.S128x100:
                                            return Gu.s116;
                                        case Su.S180x135:
                                        case Su.S232x174:
                                        case Su.S296x222:
                                            return Gu.s296;
                                        case Su.S400x300:
                                            return Gu.s400;
                                        case Su.S600x450:
                                            return Gu.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ju = (e, u, t) => {
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
                    Xu = {
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
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Su.Big,
                        special: n,
                        value: a,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: m,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ru.BATTLE_BOOSTER:
                                    case Ru.BATTLE_BOOSTER_REPLACE:
                                        return Pu.BATTLE_BOOSTER;
                                }
                            })(n),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ru.BATTLE_BOOSTER:
                                        return Lu.BATTLE_BOOSTER;
                                    case Ru.BATTLE_BOOSTER_REPLACE:
                                        return Lu.BATTLE_BOOSTER_REPLACE;
                                    case Ru.BUILT_IN_EQUIPMENT:
                                        return Lu.BUILT_IN_EQUIPMENT;
                                    case Ru.EQUIPMENT_PLUS:
                                        return Lu.EQUIPMENT_PLUS;
                                    case Ru.EQUIPMENT_TROPHY_BASIC:
                                        return Lu.EQUIPMENT_TROPHY_BASIC;
                                    case Ru.EQUIPMENT_TROPHY_UPGRADED:
                                        return Lu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ru.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_1:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_2:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_3:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ru.PROGRESSION_STYLE_UPGRADED_4:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            p = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case yu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case yu.CURRENCY:
                                    case yu.NUMBER:
                                        return o().createElement(Ou, { format: 'integral', value: Number(e) });
                                    case yu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return o().createElement(
                            'div',
                            { className: c()(Xu.base, Xu[`base__${r}`], l), style: i },
                            o().createElement(
                                Nu,
                                { tooltipArgs: E, className: Xu.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: c()(Xu.image, null == m ? void 0 : m.image) },
                                        _ &&
                                            o().createElement('div', {
                                                className: c()(Xu.highlight, null == m ? void 0 : m.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            o().createElement('div', {
                                                className: c()(Xu.icon, null == m ? void 0 : m.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            o().createElement('div', {
                                                className: c()(Xu.overlay, null == m ? void 0 : m.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Xu.info,
                                                    Xu[`info__${e}`],
                                                    s === yu.MULTI && Xu.info__multi,
                                                    null == m ? void 0 : m.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            t &&
                                o().createElement(
                                    Nu,
                                    { tooltipArgs: d },
                                    o().createElement('div', {
                                        className: c()(Xu.timer, null == m ? void 0 : m.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    qu = (e) => {
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
                    Ku = [];
                function Qu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Ku)
                    );
                }
                function Zu(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        n,
                    ];
                }
                function Ju(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var et = t(8552);
                let ut;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(ut || (ut = {}));
                const tt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    rt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return Bu(n, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? tt : l,
                                m = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                d = (() => {
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
                                                                    if ('string' == typeof e) return Ju(e, u);
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
                                                                              ? Ju(e, u)
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
                                _ = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    o = 0;
                                                function s() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - o;
                                                    function m() {
                                                        ((o = Date.now()), t.apply(l, i));
                                                    }
                                                    a ||
                                                        (r && !n && m(),
                                                        s(),
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
                                                        (s(), (a = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        D.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, et.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), d.trigger('change', e), o && _());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                p = A[0],
                                g = A[1],
                                F = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = p.scrollPosition.get(),
                                            a = (null != (r = p.scrollPosition.goal) ? r : 0) - n;
                                        return s(e, u * t + a + n);
                                    },
                                    [p.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            g.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(r, p.scrollPosition.get()) },
                                            });
                                    },
                                    [g, c.animationConfig, p.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = F(u, e, r);
                                        B(a);
                                    },
                                    [B, F, c.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && f(r(e)),
                                            m.current && d.trigger('mouseWheel', e, p.scrollPosition, u(m.current)));
                                    },
                                    [p.scrollPosition, f, d],
                                ),
                                v = ((e, u = []) => {
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
                                        qu(() => {
                                            const e = m.current;
                                            e &&
                                                (B(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [B, p.scrollPosition.goal],
                                ),
                                h = Qu(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = s(e, p.scrollPosition.goal);
                                    (u !== p.scrollPosition.goal && B(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            const b = (0, a.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? n(E.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: C,
                                    applyScroll: B,
                                    applyStepTo: f,
                                    contentRef: m,
                                    wrapperRef: E,
                                    scrollPosition: g,
                                    animationScroll: p,
                                    recalculateContent: h,
                                    handleIsThumbDragging: b,
                                    events: { on: d.on, off: d.off },
                                }),
                                [p.scrollPosition, B, f, b, d.off, d.on, h, C, g, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    nt = rt({
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
                        getDirection: (e) => (e.deltaY > 1 ? ut.Next : ut.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    at = 'HorizontalBar_base__nonActive_82',
                    ot = 'disable',
                    st = { pending: !1, offset: 0 },
                    it = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    lt = () => {},
                    ct = (e, u) => Math.max(20, e.offsetWidth * u),
                    mt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = it, onDrag: r = lt }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, a.useState)(st),
                            A = _[0],
                            p = _[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (p(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    c = Bu(0, 1, a / (n - r)),
                                    m = (u.offsetWidth - ct(u, o)) * c;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(ot),
                                                    void i.current.classList.remove(ot)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(ot),
                                                    void i.current.classList.add(ot)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(ot), i.current.classList.remove(ot));
                                        }
                                    })(m));
                            },
                            D = Qu(() => {
                                ((() => {
                                    const u = E.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${ct(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(at) : n.current.classList.remove(at)));
                                })(),
                                    F());
                            });
                        ((0, a.useEffect)(() => qu(D)),
                            (0, a.useEffect)(
                                () =>
                                    qu(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = lt;
                                        const r = () => {
                                            (t(), (t = qu(D)));
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
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            o = E.current;
                                        if (!n || !a || !o) return;
                                        const s = u.screenX - A.offset - a.getBoundingClientRect().x,
                                            i = (s / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), g(st));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, r, g]));
                        const B = Zu((u) => e.applyStepTo(u), d, [e]),
                            f = B[0],
                            C = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(ot) || m('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ot) || 0 !== e.button || (m('play'), f(ut.Next));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        r &&
                                            0 === u.button &&
                                            (m('play'),
                                            u.target === r
                                                ? g({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = E.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? ut.Prev : ut.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: c()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: c()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ot) || 0 !== e.button || (m('play'), f(ut.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Et = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    dt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: m,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: c()(Et.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(Et.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Et.defaultScrollArea, n) },
                                o().createElement(_t, { className: i, api: d, classNames: s }, e),
                            ),
                            o().createElement(mt, { getStepByRailClick: l, api: u, onDrag: m, classNames: E }),
                        );
                    },
                    _t = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => qu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Et.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: c()(Et.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(Et.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((_t.Bar = mt),
                    (_t.Default = dt),
                    (_t.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => qu(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Et.base, u) },
                            o().createElement(
                                'div',
                                { className: c()(Et.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: c()(Et.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const At = rt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ut.Next : ut.Prev),
                    }),
                    pt = 'VerticalBar_base__nonActive_42',
                    gt = 'disable',
                    Ft = () => {},
                    Dt = { pending: !1, offset: 0 },
                    Bt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ft = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Ct = (e, u) => Math.max(20, e.offsetHeight * u),
                    vt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Bt, onDrag: r = Ft }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, a.useState)(Dt),
                            A = _[0],
                            p = _[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (p(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            F = Qu(() => {
                                const u = E.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Ct(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(pt) : n.current.classList.remove(pt)),
                                    o
                                );
                            }),
                            D = Qu(() => {
                                const u = l.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    c = Bu(0, 1, a / (n - r)),
                                    m = (u.offsetHeight - Ct(u, o)) * c;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(gt),
                                                    void i.current.classList.remove(gt)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(gt),
                                                    void i.current.classList.add(gt)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(gt), i.current.classList.remove(gt));
                                        }
                                    })(m));
                            }),
                            B = Qu(() => {
                                ft(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, a.useEffect)(() => qu(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    ft(e, () => {
                                        D();
                                    });
                                };
                                let t = Ft;
                                const r = () => {
                                    (t(), (t = qu(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        ft(e, (t) => {
                                            const n = l.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                i = (s / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            g(Dt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, r, g]));
                        const f = Zu((u) => e.applyStepTo(u), d, [e]),
                            C = f[0],
                            v = f[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const h = (e) => {
                            e.target.classList.contains(gt) || m('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (m('play'), C(ut.Next));
                                },
                                ref: s,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (m('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  g({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? ut.Prev : ut.Next),
                                                  E.current &&
                                                      ft(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: E, className: u.thumb }),
                                o().createElement('div', { className: c()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (m('play'), C(ut.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    ht = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    bt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: m,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: c()(ht.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(ht.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(ht.area, n) },
                                o().createElement(wt, { className: s, classNames: i, api: d }, e),
                            ),
                            o().createElement(vt, { getStepByRailClick: l, api: u, onDrag: m, classNames: E }),
                        );
                    },
                    wt = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => qu(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(ht.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(ht.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                wt.Default = bt;
                const St = { Vertical: n, Horizontal: r },
                    yt = (e, u, t) => (u === t ? O.Active : e === t ? O.Hovered : O.UnFocused),
                    Rt = (e) =>
                        e.map((e) => {
                            return {
                                name: e.name,
                                image: zu(e, Su.Big),
                                value: e.value,
                                valueType:
                                    ((u = e.name),
                                    Iu.includes(u)
                                        ? yu.MULTI
                                        : Hu.includes(u)
                                          ? yu.CURRENCY
                                          : Uu.includes(u)
                                            ? yu.NUMBER
                                            : Wu.includes(u)
                                              ? yu.PREMIUM_PLUS
                                              : yu.STRING),
                                tooltipArgs: ju({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                special: e.overlayType,
                            };
                            var u;
                        }),
                    Pt = 'ArtefactProgress_faded_8e',
                    Lt = 'ArtefactProgress_rewards_f7',
                    Mt = 'ArtefactProgress_rewards_bottom_57',
                    Tt = 'ArtefactProgress_rewards_wrap_e7',
                    xt = 'ArtefactProgress_divider_45',
                    kt = 'ArtefactProgress_divider_end_77',
                    Nt = 'ArtefactProgress_pointsMark_b0',
                    Ot = 'ArtefactProgress_pointsMark_group_99';
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Ht = R.strings.cosmicEvent.tooltip.marsPoints,
                    Ut = (0, h.observer)(({ className: e }) => {
                        var u;
                        const t = N().model,
                            r = t.root.get(),
                            n = r.marsPoints,
                            s = t.computes.getProgression(),
                            i = (null == (u = s.at(-1)) ? void 0 : u.marsPoints) || 0,
                            l = 100 * Math.max(0, Math.min(n / (i || 1), 1)) + '%',
                            m = nt(),
                            E = m.applyScroll,
                            d = Ee().mediaSize >= le.ExtraLarge ? 234 : 180,
                            _ = (0, a.useCallback)(() => {
                                E(Math.max(0, r.currentProgressSectionIndex * d - d / 2), { immediate: !1, reset: !1 });
                            }, [d, r.currentProgressSectionIndex, E]);
                        (0, a.useEffect)(() => {
                            const e = setTimeout(() => _(), 300);
                            return (
                                engine.on('clientResized', _),
                                () => {
                                    (engine.off('clientResized', _), clearTimeout(e));
                                }
                            );
                        }, [r.currentProgressSectionIndex, _]);
                        const A = (e) => e === r.currentProgressSectionIndex,
                            p = (e) => {
                                if (e < r.currentProgressSectionIndex || n >= i) return Pt;
                            },
                            g = s.map(({ bonuses: e, marsPoints: u }) => ({ bonuses: Rt(e), marsPoints: u }));
                        return o().createElement(
                            'div',
                            {
                                className: c()('ArtefactProgress_base_3f', e),
                                style: {
                                    '--progress-percentage': l,
                                    '--sections-amount': s.length,
                                    '--rewards-wrap-width': d + 'rem',
                                },
                            },
                            n >= i &&
                                o().createElement(
                                    'div',
                                    { className: 'ArtefactProgress_doneProgression_f4' },
                                    o().createElement(
                                        'div',
                                        { className: 'ArtefactProgress_doneProgression_text_35' },
                                        R.strings.cosmicEvent.artefact.doneProgression(),
                                    ),
                                ),
                            o().createElement(
                                St.Horizontal.Area.Default,
                                {
                                    className: 'ArtefactProgress_scrollWrap_77',
                                    classNames: { wrapper: 'ArtefactProgress_overflow_2c' },
                                    api: m,
                                },
                                o().createElement(
                                    'div',
                                    { className: 'ArtefactProgress_wrapper_e4' },
                                    n < i &&
                                        o().createElement(
                                            Y,
                                            { header: Ht.header(), body: Ht.description(), isEnabled: !0 },
                                            o().createElement(
                                                'div',
                                                { className: 'ArtefactProgress_currentPoints_8a' },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    f.Z5.getNumberFormat(r.marsPoints, f.B3.GOLD),
                                                ),
                                                o().createElement('img', {
                                                    className: 'ArtefactProgress_currentPoints_icon_1f',
                                                    src: R.images.cosmic_event.gui.maps.icons.artefact.progress.marsPoints_icon(),
                                                }),
                                            ),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: c()('ArtefactProgress_flexContainer_2f') },
                                        o().createElement(
                                            'div',
                                            { className: Ot },
                                            o().createElement('div', { className: xt }),
                                            o().createElement('div', { className: c()(Nt, !A(0) && Pt) }, '0'),
                                        ),
                                        g.map(({ marsPoints: e }, u) =>
                                            o().createElement(
                                                'div',
                                                { className: c()(Tt, 'ArtefactProgress_rewards_top_fa'), key: u },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: c()(
                                                            Lt,
                                                            A(u) && 'ArtefactProgress_rewards_top__current_d4',
                                                            r.currentProgressSectionIndex > u &&
                                                                'ArtefactProgress_rewards_top__completed_89',
                                                        ),
                                                    },
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: c()(
                                                                'ArtefactProgress_level_e1',
                                                                A(u) && 'ArtefactProgress_level__current_f2',
                                                                r.currentProgressSectionIndex > u &&
                                                                    'ArtefactProgress_level__completed_73',
                                                            ),
                                                        },
                                                        r.currentProgressSectionIndex > u &&
                                                            o().createElement('div', {
                                                                className: 'ArtefactProgress_checkmark_d5',
                                                            }),
                                                        u + 1,
                                                    ),
                                                ),
                                                o().createElement(
                                                    'div',
                                                    { className: Ot },
                                                    o().createElement('div', { className: xt }),
                                                    o().createElement(Ve, {
                                                        className: c()(
                                                            Nt,
                                                            (!(A(u) || r.currentProgressSectionIndex - 1 === u) ||
                                                                n >= i) &&
                                                                Pt,
                                                        ),
                                                        text: f.Z5.getNumberFormat(e, f.B3.GOLD),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    o().createElement(hu, {
                                        size: je.Default,
                                        value: r.marsPoints,
                                        maxValue: i,
                                        deltaFrom: r.artefactProgressDeltaFrom,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Tt },
                                        o().createElement(
                                            'div',
                                            { className: Ot },
                                            o().createElement('div', { className: kt }),
                                        ),
                                        g.map(({ bonuses: e }, u) =>
                                            o().createElement(
                                                'div',
                                                { className: c()(Tt, Mt), key: u },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: c()(
                                                            Lt,
                                                            Mt,
                                                            A(u) && 'ArtefactProgress_rewards_bottom__current_a2',
                                                            p(u),
                                                        ),
                                                    },
                                                    o().createElement('div', {
                                                        className: c()(
                                                            r.currentProgressSectionIndex > u &&
                                                                'ArtefactProgress_bottom_gradient_9f',
                                                        ),
                                                    }),
                                                    o().createElement(
                                                        'div',
                                                        { className: 'ArtefactProgress_rewards_group_46' },
                                                        e.map((e, u) =>
                                                            o().createElement(
                                                                Yu,
                                                                It(
                                                                    {
                                                                        size: Su.Small,
                                                                        key: u,
                                                                        className: 'ArtefactProgress_reward_e2',
                                                                    },
                                                                    e,
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                                o().createElement('div', { className: kt }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Wt = {
                        base: 'CosmicLobbyViewApp_base_1b',
                        fadeIn: 'CosmicLobbyViewApp_fadeIn_c8',
                        base__fadeOut: 'CosmicLobbyViewApp_base__fadeOut_49',
                        fadeOut: 'CosmicLobbyViewApp_fadeOut_ab',
                        header: 'CosmicLobbyViewApp_header_3b',
                        fallback: 'CosmicLobbyViewApp_fallback_ed',
                        about: 'CosmicLobbyViewApp_about_6a',
                        aboutCaption: 'CosmicLobbyViewApp_aboutCaption_03',
                        aboutIcon: 'CosmicLobbyViewApp_aboutIcon_b4',
                        close: 'CosmicLobbyViewApp_close_43',
                        routeWrapper: 'CosmicLobbyViewApp_routeWrapper_8a',
                        route__enterActive: 'CosmicLobbyViewApp_route__enterActive_72',
                        route: 'CosmicLobbyViewApp_route_7e',
                        background: 'CosmicLobbyViewApp_background_00',
                        background__main: 'CosmicLobbyViewApp_background__main_80',
                        background__artefact: 'CosmicLobbyViewApp_background__artefact_36',
                        background__pickups: 'CosmicLobbyViewApp_background__pickups_00',
                        stage: 'CosmicLobbyViewApp_stage_90',
                        route__enter: 'CosmicLobbyViewApp_route__enter_0c',
                        route__enterDone: 'CosmicLobbyViewApp_route__enterDone_69',
                        route__exit: 'CosmicLobbyViewApp_route__exit_e2',
                        route__exitActive: 'CosmicLobbyViewApp_route__exitActive_7a',
                        route__exitDone: 'CosmicLobbyViewApp_route__exitDone_20',
                        routeBackground: 'CosmicLobbyViewApp_routeBackground_b9',
                        fromLeft: 'CosmicLobbyViewApp_fromLeft_c6',
                        fromLeft_2: 'CosmicLobbyViewApp_fromLeft_2_da',
                        fromLeft_3: 'CosmicLobbyViewApp_fromLeft_3_98',
                        fromLeft_4: 'CosmicLobbyViewApp_fromLeft_4_58',
                        fromLeft_5: 'CosmicLobbyViewApp_fromLeft_5_91',
                        fromBelow: 'CosmicLobbyViewApp_fromBelow_4f',
                        fromBelow_2: 'CosmicLobbyViewApp_fromBelow_2_c1',
                        fadeAfterTransition: 'CosmicLobbyViewApp_fadeAfterTransition_ac',
                    },
                    Gt = ({ imgSrc: e, isReceived: u, classMix: t, isMain: r, tooltipArgs: n }) =>
                        o().createElement(
                            'div',
                            { className: c()('Medal_base_71', t, r && 'Medal_base__main_e2') },
                            u && o().createElement('div', { className: 'Medal_raysBg_35' }),
                            o().createElement('img', { src: e, className: 'Medal_img_52' }),
                            o().createElement(
                                Nu,
                                { tooltipArgs: n },
                                o().createElement('div', { className: 'Medal_tooltipArea_2f' }),
                            ),
                        ),
                    Vt = {
                        base: 'ArtefactRoute_base_32',
                        videoProgression: 'ArtefactRoute_videoProgression_15',
                        artefactTooltip: 'ArtefactRoute_artefactTooltip_74',
                        titleWrapper: 'ArtefactRoute_titleWrapper_54',
                        titleDecoration: 'ArtefactRoute_titleDecoration_2e',
                        titleDecoration__rotate: 'ArtefactRoute_titleDecoration__rotate_d6',
                        title: 'ArtefactRoute_title_de',
                        middleBlock: 'ArtefactRoute_middleBlock_1f',
                        actionsList: 'ArtefactRoute_actionsList_39',
                        actionsTitle: 'ArtefactRoute_actionsTitle_6b',
                        medalsTitle: 'ArtefactRoute_medalsTitle_8d',
                        medalsWrapper: 'ArtefactRoute_medalsWrapper_89',
                        medalsList: 'ArtefactRoute_medalsList_f6',
                        firstMedal: 'ArtefactRoute_firstMedal_16',
                        secondMedal: 'ArtefactRoute_secondMedal_7c',
                        actions_heading: 'ArtefactRoute_actions_heading_d4',
                        actions: 'ArtefactRoute_actions_be',
                        actionItem: 'ArtefactRoute_actionItem_ae',
                        progress: 'ArtefactRoute_progress_84',
                    };
                let $t;
                var zt;
                (((zt = $t || ($t = {})).SHORT_DATE = 'short-date'),
                    (zt.SHORT_TIME = 'short-time'),
                    (zt.SHORT_DATE_TIME = 'short-date-time'),
                    (zt.FULL_DATE = 'full-date'),
                    (zt.FULL_DATE_TIME = 'full-date-time'),
                    (zt.MONTH = 'month'),
                    (zt.MONTH_DATE = 'month-date'),
                    (zt.DATE_MONTH = 'date-month'),
                    (zt.MONTH_YEAR = 'month-year'),
                    (zt.WEEK_DAY = 'week-day'),
                    (zt.WEEK_DAY_TIME = 'week-day-time'),
                    (zt.YEAR = 'year'),
                    (zt.DATE_YEAR = 'date-year'));
                let jt;
                (Date.now(),
                    f.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(jt || (jt = {})),
                    f.Sw.instance);
                const Xt = (e) => {
                        const u = (0, a.useRef)();
                        return (
                            (0, a.useEffect)(() => {
                                u.current = e;
                            }, [e]),
                            u.current
                        );
                    },
                    Yt = o().memo(({ subtitlesData: e, videoRef: u }) => {
                        const t = (0, a.useState)(0),
                            r = t[0],
                            n = t[1];
                        (0, a.useEffect)(() => {
                            const e = setInterval(() => {
                                u.current && !u.current.paused && n(u.current.currentTime);
                            }, 100);
                            return () => {
                                clearInterval(e);
                            };
                        }, [u]);
                        const s = (0, a.useState)(null),
                            i = s[0],
                            l = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (null == e || !e.length) return void l(null);
                                const u = e.find((e) => r >= e.startTime && r <= e.endTime);
                                l(u || null);
                            }, [r, e]),
                            o().createElement(
                                'div',
                                {
                                    className: c()('CustomSubtitles_base_45', {
                                        CustomSubtitles_visible_fb: Boolean(i),
                                    }),
                                },
                                i && o().createElement('div', { className: 'CustomSubtitles_text_40' }, i.text),
                            )
                        );
                    }),
                    qt = {
                        buttonsWrapper: 'Video_buttonsWrapper_33',
                        baseButton: 'Video_baseButton_49',
                        iconWrapper: 'Video_iconWrapper_d4',
                        iconLayer: 'Video_iconLayer_41',
                        iconHover: 'Video_iconHover_71',
                        iconPress: 'Video_iconPress_97',
                        actionButton: 'Video_actionButton_f2',
                        muteButton: 'Video_muteButton_d7',
                        playBase: 'Video_playBase_07',
                        playHover: 'Video_playHover_f0',
                        playPress: 'Video_playPress_a6',
                        pauseBase: 'Video_pauseBase_dd',
                        pauseHover: 'Video_pauseHover_ab',
                        pausePress: 'Video_pausePress_1f',
                        muteBase: 'Video_muteBase_52',
                        muteHover: 'Video_muteHover_d0',
                        soundOnBase: 'Video_soundOnBase_7f',
                        soundOnHover: 'Video_soundOnHover_6d',
                        subtitlesOnBase: 'Video_subtitlesOnBase_2c',
                        subtitlesOffBase: 'Video_subtitlesOffBase_d7',
                        subtitlesHover: 'Video_subtitlesHover_25',
                        subtitlesPress: 'Video_subtitlesPress_c8',
                        videoControl: 'Video_videoControl_d2',
                        volumeContainer: 'Video_volumeContainer_c6',
                        volumeSlider: 'Video_volumeSlider_ec',
                        volumeSliderTrack: 'Video_volumeSliderTrack_7d',
                        volumeSliderFill: 'Video_volumeSliderFill_82',
                        volumeSliderThumb: 'Video_volumeSliderThumb_30',
                    },
                    Kt = [
                        'src',
                        'className',
                        'autoplay',
                        'loop',
                        'directLoop',
                        'isPaused',
                        'restartOnPlay',
                        'subtitlesData',
                        'onStarted',
                        'loopPartDuration',
                        'setPlayer',
                        'onClick',
                        'controlsVisible',
                        'currentVolume',
                        'defaultVolume',
                        'isWindowAccessible',
                    ];
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Zt = 16 / 9,
                    Jt = o().memo(function (e) {
                        let u = e.src,
                            t = e.className,
                            r = e.autoplay,
                            n = void 0 !== r && r,
                            s = e.loop,
                            i = void 0 !== s && s,
                            l = e.directLoop,
                            m = void 0 !== l && l,
                            E = e.isPaused,
                            d = void 0 !== E && E,
                            _ = e.restartOnPlay,
                            A = void 0 !== _ && _,
                            p = e.subtitlesData,
                            g = e.onStarted,
                            F = e.loopPartDuration,
                            f = void 0 === F ? 0 : F,
                            C = e.setPlayer,
                            v = e.onClick,
                            h = e.controlsVisible,
                            b = void 0 !== h && h,
                            w = e.currentVolume,
                            S = e.defaultVolume,
                            y = e.isWindowAccessible,
                            R = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Kt);
                        const P = (0, a.useRef)(null),
                            L = (0, a.useState)(!1),
                            M = L[0],
                            T = L[1],
                            x = (0, a.useState)(!0),
                            k = x[0],
                            N = x[1],
                            O = (0, a.useState)(S || 1),
                            I = O[0],
                            H = O[1],
                            U = (0, a.useState)(!1),
                            W = U[0],
                            G = U[1],
                            V = (0, a.useState)(!1),
                            $ = V[0],
                            z = V[1],
                            j = (0, a.useState)(!1),
                            X = j[0],
                            Y = j[1],
                            q = (0, a.useState)(!1),
                            K = q[0],
                            Q = q[1],
                            Z = (0, a.useState)(!1 === y),
                            J = Z[0],
                            ee = Z[1],
                            ue = Xt(d),
                            te = (0, a.useRef)(null),
                            re = (0, a.useRef)(!1),
                            ne = (0, a.useRef)(!1),
                            ae = (0, a.useRef)(0),
                            oe = (0, a.useRef)(0),
                            se = (0, a.useRef)(!1),
                            ie = (0, et.useSpring)({
                                width: X || re.current || K ? '100rem' : '0rem',
                                opacity: X || re.current || K ? 1 : 0,
                                config: { duration: 200 },
                            }),
                            le = (0, a.useCallback)(() => {
                                ae.current && (window.clearTimeout(ae.current), (ae.current = 0));
                            }, []),
                            ce = (0, a.useCallback)(() => {
                                oe.current && (window.clearTimeout(oe.current), (oe.current = 0));
                            }, []),
                            me = (0, a.useCallback)(() => {
                                (Q(!0), le());
                                const e = () => {
                                    re.current || ne.current
                                        ? (ae.current = window.setTimeout(e, 200))
                                        : (Q(!1), (ae.current = 0));
                                };
                                ae.current = window.setTimeout(e, 1500);
                            }, [le]);
                        ((0, a.useEffect)(() => le, [le]),
                            (0, a.useEffect)(() => ce, [ce]),
                            (0, a.useEffect)(() => {
                                if ((ce(), !1 !== y))
                                    return !0 === y
                                        ? (ee(!0),
                                          void (oe.current = window.setTimeout(() => {
                                              (ee(!1), (oe.current = 0));
                                          }, 300)))
                                        : void ee(!1);
                                ee(!0);
                            }, [ce, y]));
                        const Ee = (0, a.useCallback)(() => {
                                ((ne.current = !0), Y(!0));
                            }, []),
                            de = (0, a.useCallback)(() => {
                                ((ne.current = !1), re.current || Y(!1));
                            }, []),
                            _e = (0, a.useRef)(0),
                            Ae = (0, a.useRef)(!0);
                        ((0, a.useEffect)(() => {
                            const e = P.current;
                            e && u && ((Ae.current = !0), e.load());
                        }, [u]),
                            (0, a.useEffect)(() => {
                                const e = P.current;
                                engine.on('clientMinimized', (u) => {
                                    e && (u ? e.pause() : e.play());
                                });
                            }, []));
                        const pe = (0, a.useCallback)(() => {
                                _e.current && (window.clearTimeout(_e.current), (_e.current = 0));
                            }, []),
                            ge = (0, a.useCallback)(() => {
                                var e, u;
                                if ((z(!0), pe(), null == (e = null == (u = P.current) ? void 0 : u.paused) || e))
                                    return;
                                const t = Ae.current ? 2e3 : 3500;
                                _e.current = window.setTimeout(() => {
                                    (z(!1), (Ae.current = !1));
                                }, t);
                            }, [pe]),
                            Fe = (0, a.useRef)(0),
                            De = (0, a.useCallback)(() => {
                                const e = Date.now();
                                e - Fe.current > 100 && (ge(), (Fe.current = e));
                            }, [ge]);
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousemove', De),
                                () => {
                                    (document.removeEventListener('mousemove', De), pe());
                                }
                            ),
                            [pe, De],
                        );
                        const Be = (0, et.useTransition)($ && b, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: { duration: 300 },
                            }),
                            fe = (0, a.useCallback)(() => {
                                (N(!1), ge(), g && !ue && g());
                            }, [g, ue, ge]),
                            Ce = (0, a.useCallback)(() => {
                                (N(!0), ge());
                            }, [ge]),
                            ve = (0, a.useCallback)(() => {
                                const e = P.current;
                                e && (i ? ((e.currentTime = f > 0 ? e.duration - f : 0), e.play(), N(!1)) : e.pause());
                            }, [i, f]);
                        (0, a.useEffect)(() => {
                            const e = P.current;
                            return (
                                e &&
                                    (e.addEventListener('play', fe),
                                    e.addEventListener('pause', Ce),
                                    e.addEventListener('ended', ve)),
                                () => {
                                    e &&
                                        (e.removeEventListener('play', fe),
                                        e.removeEventListener('pause', Ce),
                                        e.removeEventListener('ended', ve));
                                }
                            );
                        }, [ve, fe, Ce]);
                        const he = (() => {
                                const e = (0, a.useState)(D.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(D.O.view.getScale());
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
                            be = (() => {
                                const e = D.O.view.getSize('rem'),
                                    u = (0, a.useState)({ height: e.height, width: e.width }),
                                    t = u[0],
                                    r = u[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = (e) => {
                                            r(e);
                                        };
                                        return (
                                            engine.on('screenResized', e),
                                            () => {
                                                engine.off('screenResized', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            we = be.width,
                            Se = be.height,
                            ye = (0, a.useMemo)(
                                () =>
                                    ((e, u, t) => {
                                        const r = viewEnv.pxToRem(e) * t,
                                            n = viewEnv.pxToRem(u) * t,
                                            a = r / Zt,
                                            o = n > a;
                                        return { width: `${o ? n * Zt : r}rem`, height: `${o ? n : a}rem` };
                                    })(we, Se, he),
                                [we, Se, he],
                            );
                        ((0, a.useEffect)(() => {
                            if (C && P.current) {
                                const e = () => {
                                        let e = 0;
                                        const t = (function (t) {
                                                let r = 0;
                                                return [
                                                    function t() {
                                                        ((() => {
                                                            if (P.current) {
                                                                const t = P.current,
                                                                    r = t.currentTime,
                                                                    n = t.duration;
                                                                e !== r &&
                                                                    (u.changeTimeHandlers.forEach((e) =>
                                                                        e({ currentTime: r, duration: n }),
                                                                    ),
                                                                    (e = r));
                                                            }
                                                        })(),
                                                            (r = requestAnimationFrame(t)));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(r);
                                                    },
                                                ];
                                            })(),
                                            r = t[0],
                                            n = t[1];
                                        return (r(), n);
                                    },
                                    u = { changeTimeHandlers: [], changeTimeLoop: e() },
                                    t = (e) => (
                                        u.changeTimeHandlers.push(e),
                                        () => {
                                            const t = u.changeTimeHandlers,
                                                r = t.indexOf(e);
                                            r < 0 || t.splice(r, 1);
                                        }
                                    ),
                                    r = (e) => {
                                        P.current && (P.current.currentTime = Bu(0, P.current.duration, e));
                                    },
                                    n = () => {
                                        var e;
                                        return null == (e = P.current) ? void 0 : e.pause();
                                    },
                                    a = () => {
                                        (n(), r(0));
                                    },
                                    o = () => {
                                        ((u.changeTimeHandlers = []), null == u.changeTimeLoop || u.changeTimeLoop());
                                    };
                                return (
                                    C({
                                        on: (e, u) => {
                                            var t;
                                            return (
                                                null == (t = P.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = P.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        off: (e, u) => {
                                            var t;
                                            return (
                                                null == (t = P.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = P.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        play: () => {
                                            var e;
                                            return null == (e = P.current) ? void 0 : e.play();
                                        },
                                        pause: n,
                                        stop: a,
                                        cleanup: o,
                                        getCurrentTime: () => {
                                            var e;
                                            return null == (e = P.current) ? void 0 : e.currentTime;
                                        },
                                        getDuration: () => {
                                            var e;
                                            return null == (e = P.current) ? void 0 : e.duration;
                                        },
                                        setCurrentTime: r,
                                        domRef: P.current,
                                        onChangeTime: t,
                                    }),
                                    () => {
                                        (o(), C(void 0));
                                    }
                                );
                            }
                        }, [C]),
                            (0, a.useEffect)(() => {
                                const e = P.current;
                                if (e)
                                    return (
                                        (e.volume = I),
                                        () => {
                                            e && (e.pause(), (e.src = ''), e.load());
                                        }
                                    );
                            }, []),
                            (0, a.useEffect)(() => {
                                const e = P.current;
                                e && (e.volume = I);
                            }, [I]));
                        const Re = () => {
                                (T(!M), ge());
                            },
                            Pe = () => {
                                (ge(), J || (P.current && (P.current.paused ? P.current.play() : P.current.pause())));
                            },
                            Le = (0, a.useRef)(I),
                            Me = (0, a.useRef)(W),
                            Te = (0, a.useRef)(S || 1),
                            xe = (0, a.useRef)(d);
                        ((0, a.useEffect)(() => {
                            ((Le.current = I), (Me.current = W));
                        }, [I, W]),
                            (0, a.useEffect)(() => {
                                I > 0 && (Te.current = I);
                            }, [I]),
                            (0, a.useEffect)(() => {
                                const e = P.current;
                                if (!e) return;
                                const u = xe.current;
                                if (((xe.current = d), d)) return (e.pause(), () => e.pause());
                                if (!n) return () => e.pause();
                                const t = () => {
                                    try {
                                        return ((e.currentTime = 0), !0);
                                    } catch (e) {
                                        return !1;
                                    }
                                };
                                if (A && u && !(e.readyState >= 1 && t())) {
                                    const u = () => {
                                        t();
                                    };
                                    e.addEventListener('loadedmetadata', u, { once: !0 });
                                }
                                return (e.play(), () => e.pause());
                            }, [n, d, A]));
                        const ke = (0, a.useCallback)(
                                (e) => {
                                    const u = Math.max(0, Math.min(1, e));
                                    (H(u),
                                        w && w(u),
                                        P.current &&
                                            ((P.current.volume = u),
                                            u > 0 && Me.current && (G(!1), (P.current.muted = !1))));
                                },
                                [w],
                            ),
                            Ne = (0, a.useCallback)(
                                (e) => {
                                    (ge(), ke(Le.current + e));
                                },
                                [ge, ke],
                            ),
                            Oe = (0, a.useCallback)(() => {
                                ge();
                                const e = P.current;
                                e && (e.paused ? e.play() : e.pause());
                            }, [ge]);
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                    if (
                                        ((e) => {
                                            if (!e) return !1;
                                            if (!(e instanceof HTMLElement)) return !1;
                                            const u = e.tagName.toLowerCase();
                                            return (
                                                'input' === u ||
                                                'textarea' === u ||
                                                'select' === u ||
                                                e.isContentEditable
                                            );
                                        })(e.target)
                                    )
                                        return;
                                    if (e.keyCode === B.n.SPACE) {
                                        if (!b) return;
                                        if (se.current) return;
                                        return ((se.current = !0), e.preventDefault(), void Oe());
                                    }
                                    e.keyCode === B.n.ESCAPE && ge();
                                    const u = e.keyCode,
                                        t = u === B.n.ARROW_UP || u === B.n.ARROW_RIGHT,
                                        r = u === B.n.ARROW_DOWN || u === B.n.ARROW_LEFT;
                                    if (!t && !r) return;
                                    e.preventDefault();
                                    const n = t ? 0.05 : -0.05;
                                    (me(), Ne(n));
                                },
                                u = (e) => {
                                    e.keyCode === B.n.SPACE && (se.current = !1);
                                };
                            return (
                                window.addEventListener('keydown', e, !0),
                                window.addEventListener('keyup', u, !0),
                                () => {
                                    (window.removeEventListener('keydown', e, !0),
                                        window.removeEventListener('keyup', u, !0));
                                }
                            );
                        }, [b, Ne, Oe, ge, me]);
                        const Ie = (0, a.useCallback)((e) => {
                                if (!te.current) return 0;
                                const u = te.current.getBoundingClientRect(),
                                    t = (e - u.left) / u.width;
                                return Math.max(0, Math.min(1, t));
                            }, []),
                            He = (0, a.useCallback)(
                                (e) => {
                                    (e.preventDefault(), ge(), (re.current = !0));
                                    const u = Ie(e.clientX);
                                    ke(u);
                                },
                                [Ie, ke, ge],
                            ),
                            Ue = (0, a.useCallback)(
                                (e) => {
                                    if (re.current) {
                                        ge();
                                        const u = Ie(e.clientX);
                                        ke(u);
                                    }
                                },
                                [Ie, ke, ge],
                            ),
                            We = (0, a.useCallback)(() => {
                                re.current && (ge(), (re.current = !1), ne.current ? Y((e) => e) : Y(!1));
                            }, [ge]);
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousemove', Ue),
                                document.addEventListener('mouseup', We),
                                () => {
                                    (document.removeEventListener('mousemove', Ue),
                                        document.removeEventListener('mouseup', We));
                                }
                            ),
                            [Ue, We],
                        );
                        const Ge = (0, a.useCallback)(() => {
                                ge();
                                const e = P.current;
                                if (!e) return;
                                if (!Me.current && 0 !== Le.current)
                                    return (
                                        Le.current > 0 && (Te.current = Le.current),
                                        G(!0),
                                        (e.muted = !0),
                                        void ke(0)
                                    );
                                const u = Te.current > 0 ? Te.current : S || 1;
                                ((e.muted = !1), ke(u));
                            }, [S, ge, ke]),
                            Ve = W || 0 === I;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'video',
                                Qt({ muted: W, src: u, className: t, loop: m, ref: P, autoPlay: n, onClick: v }, R, {
                                    onError: R.onError,
                                    style: Object.assign({}, ye, R.style),
                                }),
                            ),
                            (null == p ? void 0 : p.length) &&
                                M &&
                                o().createElement(Yt, { subtitlesData: p, videoRef: P }),
                            Be(
                                (e, u) =>
                                    u &&
                                    o().createElement(
                                        et.animated.div,
                                        { style: e, className: qt.buttonsWrapper },
                                        o().createElement(
                                            'div',
                                            { className: qt.videoControl },
                                            o().createElement(
                                                'div',
                                                { className: c()(qt.baseButton, qt.actionButton), onClick: Pe },
                                                o().createElement(
                                                    'div',
                                                    { className: qt.iconWrapper },
                                                    k
                                                        ? o().createElement(
                                                              o().Fragment,
                                                              null,
                                                              o().createElement('div', {
                                                                  className: c()(qt.iconLayer, qt.pauseBase),
                                                              }),
                                                              o().createElement('div', {
                                                                  className: c()(
                                                                      qt.iconLayer,
                                                                      qt.iconHover,
                                                                      qt.pauseHover,
                                                                  ),
                                                              }),
                                                              o().createElement('div', {
                                                                  className: c()(
                                                                      qt.iconLayer,
                                                                      qt.iconPress,
                                                                      qt.pausePress,
                                                                  ),
                                                              }),
                                                          )
                                                        : o().createElement(
                                                              o().Fragment,
                                                              null,
                                                              o().createElement('div', {
                                                                  className: c()(qt.iconLayer, qt.playBase),
                                                              }),
                                                              o().createElement('div', {
                                                                  className: c()(
                                                                      qt.iconLayer,
                                                                      qt.iconHover,
                                                                      qt.playHover,
                                                                  ),
                                                              }),
                                                              o().createElement('div', {
                                                                  className: c()(
                                                                      qt.iconLayer,
                                                                      qt.iconPress,
                                                                      qt.playPress,
                                                                  ),
                                                              }),
                                                          ),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: qt.volumeContainer, onMouseEnter: Ee, onMouseLeave: de },
                                                o().createElement(
                                                    'div',
                                                    { className: c()(qt.baseButton, qt.muteButton), onClick: Ge },
                                                    o().createElement(
                                                        'div',
                                                        { className: qt.iconWrapper },
                                                        Ve
                                                            ? o().createElement(
                                                                  o().Fragment,
                                                                  null,
                                                                  o().createElement('div', {
                                                                      className: c()(qt.iconLayer, qt.soundOnBase),
                                                                  }),
                                                                  o().createElement('div', {
                                                                      className: c()(
                                                                          qt.iconLayer,
                                                                          qt.iconHover,
                                                                          qt.soundOnHover,
                                                                      ),
                                                                  }),
                                                              )
                                                            : o().createElement(
                                                                  o().Fragment,
                                                                  null,
                                                                  o().createElement('div', {
                                                                      className: c()(qt.iconLayer, qt.muteBase),
                                                                  }),
                                                                  o().createElement('div', {
                                                                      className: c()(
                                                                          qt.iconLayer,
                                                                          qt.iconHover,
                                                                          qt.muteHover,
                                                                      ),
                                                                  }),
                                                              ),
                                                    ),
                                                ),
                                                o().createElement(
                                                    et.animated.div,
                                                    { ref: te, className: qt.volumeSlider, style: ie, onMouseDown: He },
                                                    o().createElement(
                                                        'div',
                                                        { className: qt.volumeSliderTrack },
                                                        o().createElement('div', {
                                                            className: qt.volumeSliderFill,
                                                            style: { width: 100 * (W ? 0 : I) + '%' },
                                                        }),
                                                    ),
                                                    o().createElement('div', {
                                                        className: qt.volumeSliderThumb,
                                                        style: { left: 100 * (W ? 0 : I) + '%' },
                                                    }),
                                                ),
                                            ),
                                        ),
                                        (null == p ? void 0 : p.length) &&
                                            o().createElement(
                                                'div',
                                                {
                                                    className: c()(qt.baseButton, M && qt.baseButton__active),
                                                    onClick: Re,
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: qt.iconWrapper },
                                                    o().createElement('div', {
                                                        className: c()(
                                                            qt.iconLayer,
                                                            M ? qt.subtitlesOnBase : qt.subtitlesOffBase,
                                                        ),
                                                    }),
                                                    !M &&
                                                        o().createElement('div', {
                                                            className: c()(
                                                                qt.iconLayer,
                                                                qt.iconHover,
                                                                qt.subtitlesHover,
                                                            ),
                                                        }),
                                                    o().createElement('div', {
                                                        className: c()(qt.iconLayer, qt.iconPress, qt.subtitlesPress),
                                                    }),
                                                ),
                                            ),
                                    ),
                            ),
                        );
                    });
                let er;
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
                })(er || (er = {}));
                const ur = R.strings.cosmicEvent.artefact,
                    tr = R.videos.cosmic.progression.Loop_0(),
                    rr = R.images.cosmic_event.gui.maps.icons.scoring.icons,
                    nr = [er.LootResearching, er.LootResearchablePickUp, er.LootResearchingDone],
                    ar = (0, h.observer)(({ className: e }) => {
                        const u = N().model,
                            t = u.computes.getScoring(),
                            r = u.computes.getMedals(),
                            n = (e, u) =>
                                u
                                    ? R.images.gui.maps.icons.achievement.c_110x110.$dyn(e)
                                    : R.images.cosmic_event.gui.maps.icons.artefact.rewards.$dyn(e);
                        return o().createElement(
                            'div',
                            { className: c()(Vt.base, e) },
                            o().createElement(Jt, {
                                className: Vt.videoProgression,
                                src: tr,
                                autoplay: !0,
                                directLoop: !0,
                            }),
                            o().createElement(
                                'div',
                                { className: Vt.titleWrapper },
                                o().createElement('div', { className: Vt.titleDecoration }),
                                o().createElement(Ve, { className: Vt.title, text: ur.progressionTitle() }),
                                o().createElement('div', {
                                    className: c()(Vt.titleDecoration, Vt.titleDecoration__rotate),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Vt.middleBlock },
                                o().createElement(
                                    'div',
                                    { className: Vt.actionsList },
                                    o().createElement(Ve, { className: Vt.actionsTitle, text: ur.actionsTitle() }),
                                    o().createElement(
                                        'div',
                                        { className: Wt.fromLeft_2 },
                                        o().createElement(
                                            'div',
                                            { className: Vt.actions },
                                            t.map(({ type: e, marsPoints: u }) => {
                                                const t = ((e) => ur.actionList[e]())(e),
                                                    r = ((e) => rr[e]())(e),
                                                    n = ((e) => ur.actionList.desc[e]())(e);
                                                return o().createElement($e, {
                                                    key: e,
                                                    title: t,
                                                    icon: r,
                                                    points: u,
                                                    tooltipTitle: t,
                                                    tooltipBody: n,
                                                    isHighlighted: nr.includes(e),
                                                    classMix: Vt.actionItem,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Vt.medalsWrapper },
                                    o().createElement(Ve, { className: Vt.medalsTitle, text: ur.medalsTitle() }),
                                    o().createElement(
                                        'div',
                                        { className: Vt.medalsList },
                                        r.map(({ name: e, isReceived: u, tooltipId: t }, r) => {
                                            const a = 0 === r;
                                            return o().createElement(Gt, {
                                                tooltipArgs: { args: { tooltipId: t } },
                                                isMain: !a,
                                                imgSrc: n(e, u),
                                                isReceived: u,
                                                classMix: c()(a ? Vt.firstMedal : Vt.secondMedal),
                                                key: e,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                Y,
                                { body: R.strings.cosmicEvent.artefact.descShort() },
                                o().createElement('div', { className: Vt.artefactTooltip }),
                            ),
                            o().createElement(Ut, { className: c()(Wt.fromBelow, Vt.progress) }),
                        );
                    }),
                    or = ['children', 'className', 'isDone'];
                function sr() {
                    return (
                        (sr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        sr.apply(this, arguments)
                    );
                }
                const ir = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = e.isDone,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, or);
                        const s = (0, a.useState)(!1),
                            i = s[0],
                            l = s[1],
                            m = c()(
                                'Artefact_base_56',
                                i && 'Artefact_base__hovered_a6',
                                r && 'Artefact_base__completed_13',
                                t,
                            );
                        return o().createElement(
                            'div',
                            sr({ className: m }, n, {
                                onMouseEnter: () => {
                                    l(!0);
                                },
                                onMouseLeave: () => {
                                    l(!1);
                                },
                            }),
                            o().createElement('div', { className: 'Artefact_image_be' }),
                            o().createElement('div', { className: 'Artefact_hover_63' }),
                            u,
                        );
                    },
                    lr = 'play',
                    cr = [
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
                function mr() {
                    return (
                        (mr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        mr.apply(this, arguments)
                    );
                }
                const Er = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            n = e.frameCount,
                            s = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            d = void 0 === E ? n - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ || _,
                            p = e.state,
                            g = void 0 === p ? lr : p,
                            F = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            B = e.poster,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, cr);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = Ar(m, d, r),
                                                u = dr(m, d),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == s || s(r, a),
                                                          t(a),
                                                          r === d &&
                                                              (null == D || D(),
                                                              A || (null == F || F(), window.clearInterval(n))))
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
                                            const n = () => t(_r(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, d, A, s, D, F, B, g]),
                            o().createElement('canvas', mr({}, f, { width: u, height: t, ref: C }))
                        );
                    }),
                    dr = (e, u) => {
                        let t = e;
                        return () => {
                            const r = t;
                            return ((t += 1), t > u && (t = e), r);
                        };
                    },
                    _r = (e, u) => Object.assign({}, e, { img: u }),
                    Ar = (e, u, t) => {
                        const r = new Map(),
                            n = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = n[e.path];
                            if (u) r.set(a, _r(e, u));
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
                                    r.set(a, _r(e, u)));
                            }
                        }
                        return r;
                    };
                function pr(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (r) => {
                        const n = r % t,
                            a = (n % u.columns) * e.width,
                            o = Math.trunc(n / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(r / t)), x: a, y: o };
                    };
                }
                const gr = {
                        width: 348,
                        height: 280,
                        frameCount: 72,
                        chunk: { count: 1, rows: 12, columns: 6 },
                        getChunkPath: () => 'R.images.cosmic_event.gui.maps.icons.shop_entry_point.sequence_large',
                    },
                    Fr = {
                        width: 290,
                        height: 234,
                        frameCount: 72,
                        chunk: { count: 1, rows: 12, columns: 6 },
                        getChunkPath: () => 'R.images.cosmic_event.gui.maps.icons.shop_entry_point.sequence_medium',
                    },
                    Dr = {
                        width: 214,
                        height: 172,
                        frameCount: 72,
                        chunk: { count: 1, rows: 12, columns: 6 },
                        getChunkPath: () => 'R.images.cosmic_event.gui.maps.icons.shop_entry_point.sequence_small',
                    },
                    Br = 'ShopEntryPoint_particles_f6';
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                const Cr = ({ className: e }) => {
                        const u = N().controls,
                            t = Ee().mediaSize,
                            r = t < le.Medium,
                            n = t >= le.Medium && t < le.ExtraLarge,
                            s = t >= le.ExtraLarge,
                            i = (function (e = {}, u = []) {
                                var t, r, n, o;
                                const s = (0, a.useState)(null != (t = e.state) ? t : lr),
                                    i = s[0],
                                    l = s[1],
                                    c = (0, a.useState)(null != (r = e.initialFrameIndex) ? r : 0),
                                    m = c[0],
                                    E = c[1],
                                    d = (0, a.useState)(null != (n = e.frameTime) ? n : 33),
                                    _ = d[0],
                                    A = d[1],
                                    p = (0, a.useState)(null == (o = e.loop) || o),
                                    g = p[0],
                                    F = p[1],
                                    D = (0, a.useRef)(m),
                                    B = (0, a.useCallback)((e) => {
                                        (E(e), l('play'));
                                    }, []),
                                    f = (0, a.useCallback)((e) => {
                                        (E(e), l('stop'));
                                    }, []),
                                    C = (0, a.useCallback)(() => {
                                        (E(0), l('stop'));
                                    }, []),
                                    v = (0, a.useCallback)(() => l('play'), []),
                                    h = (0, a.useCallback)(() => {
                                        (E(D.current + 1), l('stop'));
                                    }, []);
                                return {
                                    props: {
                                        state: i,
                                        initialFrameIndex: m,
                                        frameTime: _,
                                        loop: g,
                                        onAnimate: (0, a.useCallback)((u, t) => {
                                            ((D.current = u), null == e.onAnimate || e.onAnimate(u, t));
                                        }, u),
                                        onAnimationDone: (0, a.useCallback)(() => {
                                            C();
                                        }, u),
                                    },
                                    enableLoop: (0, a.useCallback)(() => F(!0), []),
                                    disableLoop: (0, a.useCallback)(() => F(!1), []),
                                    setState: l,
                                    setInitialFrameIndex: E,
                                    setFrameTime: A,
                                    goAndPlay: B,
                                    goAndStop: f,
                                    stop: C,
                                    play: v,
                                    pause: h,
                                };
                            })(),
                            l = (0, a.useRef)(null),
                            E = pr(gr),
                            d = pr(Fr),
                            _ = pr(Dr);
                        (0, a.useEffect)(
                            () => () => {
                                null !== l.current && (window.clearTimeout(l.current), (l.current = null));
                            },
                            [],
                        );
                        const A = (0, a.useCallback)(() => {
                            (i.stop(),
                                null !== l.current && window.clearTimeout(l.current),
                                (l.current = window.setTimeout(() => {
                                    i.play();
                                }, 7e3)));
                        }, [i]);
                        return o().createElement(
                            $,
                            { contentId: R.views.cosmic_event.lobby.tooltips.CosmicSimpleTooltip('resId') },
                            o().createElement(
                                'div',
                                {
                                    className: c()('ShopEntryPoint_base_88', e),
                                    onClick: () => {
                                        (m(R.sounds.ev_cosmic_lootbox_icon()), u.onShopClicked());
                                    },
                                    onMouseEnter: () => m(R.sounds.ev_cosmic_lobby_hover()),
                                },
                                r &&
                                    o().createElement(
                                        Er,
                                        fr({}, i.props, {
                                            width: Dr.width,
                                            height: Dr.height,
                                            frameCount: Dr.frameCount,
                                            getImageSource: _,
                                            frameTime: 42,
                                            loop: !1,
                                            onAnimationDone: A,
                                            className: Br,
                                        }),
                                    ),
                                n &&
                                    o().createElement(
                                        Er,
                                        fr({}, i.props, {
                                            width: Fr.width,
                                            height: Fr.height,
                                            frameCount: Fr.frameCount,
                                            getImageSource: d,
                                            frameTime: 42,
                                            loop: !1,
                                            onAnimationDone: A,
                                            className: Br,
                                        }),
                                    ),
                                s &&
                                    o().createElement(
                                        Er,
                                        fr({}, i.props, {
                                            width: gr.width,
                                            height: gr.height,
                                            frameCount: gr.frameCount,
                                            getImageSource: E,
                                            frameTime: 42,
                                            loop: !1,
                                            onAnimationDone: A,
                                            className: Br,
                                        }),
                                    ),
                                o().createElement('div', { className: 'ShopEntryPoint_hover_f3' }),
                            ),
                        );
                    },
                    vr = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: c()('RulesEntryPoint_base_3b', e) },
                            o().createElement('div', { className: 'RulesEntryPoint_background_52' }),
                            o().createElement('div', { className: 'RulesEntryPoint_hover_fd' }),
                        ),
                    hr = {
                        base: 'Mission_base_3a',
                        doneBg: 'Mission_doneBg_f0',
                        header: 'Mission_header_c5',
                        points: 'Mission_points_92',
                        base__done: 'Mission_base__done_69',
                        body: 'Mission_body_c9',
                        title: 'Mission_title_d6',
                        progression: 'Mission_progression_1c',
                        progression_current: 'Mission_progression_current_c3',
                        progressBar: 'Mission_progressBar_71',
                    },
                    br = ({ className: e, description: u, currentProgress: t, totalProgress: r, icon: n }) => {
                        const a = t >= r,
                            s =
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.$dyn(n) ||
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.cosmic_mars_points();
                        return o().createElement(
                            'div',
                            { className: c()(hr.base, e, a ? hr.base__done : hr.base__available) },
                            o().createElement(
                                'div',
                                { className: hr.header, style: { backgroundImage: a ? '' : `url("${s}")` } },
                                a && o().createElement('div', { className: hr.doneBg }),
                            ),
                            o().createElement(
                                'div',
                                { className: hr.body },
                                o().createElement('div', { className: hr.title }, u),
                                o().createElement(
                                    'div',
                                    { className: hr.progression },
                                    o().createElement('span', { className: hr.progression_current }, t),
                                    ' / ',
                                    r,
                                ),
                                o().createElement(
                                    'div',
                                    { className: hr.progressBar },
                                    o().createElement(hu, { size: je.Small, value: t, maxValue: r, theme: Du }),
                                ),
                            ),
                        );
                    },
                    wr = R.strings.cosmicEvent,
                    Sr = ({
                        type: e,
                        isSelected: u,
                        inBattle: t,
                        handleRoverClick: r,
                        onMouseEnter: n,
                        className: s,
                    }) => {
                        const i = (0, a.useState)(!1),
                            l = i[0],
                            m = i[1],
                            E = e === F.Old,
                            d = c()(
                                'VehicleSelect_rover_6d',
                                E ? 'VehicleSelect_rover__old_66' : 'VehicleSelect_rover__new_1d',
                                u && 'VehicleSelect_rover__selected_21',
                                t && 'VehicleSelect_rover__inBattle_5c',
                                s,
                            );
                        return o().createElement(
                            'div',
                            { className: d },
                            o().createElement(
                                $,
                                {
                                    contentId: R.views.cosmic_event.lobby.tooltips.VehicleSelectorTooltip('resId'),
                                    key: e,
                                    args: { vehicleId: e },
                                },
                                o().createElement('div', {
                                    className: 'VehicleSelect_actionBlock_e1',
                                    onClick: () => r(e),
                                    onMouseEnter: n,
                                    onMouseOver: () => {
                                        m(!0);
                                    },
                                    onMouseLeave: () => {
                                        m(!1);
                                    },
                                }),
                            ),
                            o().createElement('div', { className: 'VehicleSelect_roverBg_35' }),
                            o().createElement('div', { className: 'VehicleSelect_roverActiveBg_2a' }),
                            o().createElement('div', {
                                className: 'VehicleSelect_roverHover_80',
                                style: l && !t ? { opacity: 0.3 } : void 0,
                            }),
                            t &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', {
                                        className: 'VehicleSelect_roverBattle_4c',
                                        style: l && !u ? { opacity: 0.7 } : void 0,
                                    }),
                                    o().createElement('div', { className: 'VehicleSelect_glow_f9' }),
                                    o().createElement(Ve, {
                                        text: wr.vehicle.inBattle(),
                                        className: 'VehicleSelect_battleLabel_4d',
                                    }),
                                ),
                        );
                    },
                    yr = ['imgUri', 'className'];
                function Rr() {
                    return (
                        (Rr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Rr.apply(this, arguments)
                    );
                }
                const Pr = (e) => {
                    let u = e.imgUri,
                        t = e.className,
                        r = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, yr);
                    return o().createElement(
                        'div',
                        Rr({ className: c()('AbilityBlock_base_51', t) }, r),
                        o().createElement(
                            'div',
                            { className: 'AbilityBlock_imageContainer_ad' },
                            o().createElement('img', { className: 'AbilityBlock_img_c5', src: u, alt: '' }),
                        ),
                    );
                };
                let Lr;
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
                })(Lr || (Lr = {}));
                const Mr = {
                    base: 'MainRoute_base_bb',
                    about: 'MainRoute_about_13',
                    rulesEntryPoint: 'MainRoute_rulesEntryPoint_27',
                    shopEntryContainer: 'MainRoute_shopEntryContainer_0f',
                    artefactWrapper: 'MainRoute_artefactWrapper_08',
                    artefact: 'MainRoute_artefact_88',
                    artefact_info: 'MainRoute_artefact_info_7b',
                    artefact_infoNumber: 'MainRoute_artefact_infoNumber_a4',
                    'signal-loss-opacity': 'MainRoute_signal-loss-opacity_e7',
                    glitchLayer1: 'MainRoute_glitchLayer1_86',
                    glitchLayer2: 'MainRoute_glitchLayer2_bb',
                    'glitch-anim-1': 'MainRoute_glitch-anim-1_e2',
                    'glitch-anim-2': 'MainRoute_glitch-anim-2_30',
                    scanline: 'MainRoute_scanline_62',
                    coubeIcon: 'MainRoute_coubeIcon_ad',
                    vehicleAbilitiesHeader: 'MainRoute_vehicleAbilitiesHeader_06',
                    abilitiesTitle: 'MainRoute_abilitiesTitle_47',
                    roverIcon: 'MainRoute_roverIcon_53',
                    roverSputnik: 'MainRoute_roverSputnik_12',
                    roverMeteor: 'MainRoute_roverMeteor_22',
                    vehicleAbilitiesWrapper: 'MainRoute_vehicleAbilitiesWrapper_54',
                    abilitiesContent: 'MainRoute_abilitiesContent_b3',
                    commonAbility: 'MainRoute_commonAbility_aa',
                    abilityBlock: 'MainRoute_abilityBlock_69',
                    vehicleSelectWrapper: 'MainRoute_vehicleSelectWrapper_30',
                    missions: 'MainRoute_missions_e4',
                    missionsContent: 'MainRoute_missionsContent_1e',
                    mission: 'MainRoute_mission_54',
                    missionWrapper: 'MainRoute_missionWrapper_17',
                    missionSeparator: 'MainRoute_missionSeparator_dd',
                    timerWrap: 'MainRoute_timerWrap_17',
                    timerText: 'MainRoute_timerText_b1',
                    mark: 'MainRoute_mark_e6',
                    clockIcon: 'MainRoute_clockIcon_75',
                };
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const xr = () => m(R.sounds.ev_cosmic_lobby_hover()),
                    kr = () => m(R.sounds.ev_cosmic_rover_hover()),
                    Nr = () => m(R.sounds.ev_cosmic_lobby_tab_click()),
                    Or = () => m(R.sounds.ev_cosmic_lobby_character_click()),
                    Ir = () => m(R.sounds.ev_cosmic_lobby_character_hover()),
                    Hr = R.strings.cosmicEvent,
                    Ur = R.images.cosmic_event.gui.maps.icons,
                    Wr = (0, h.observer)(({ className: e }) => {
                        var u;
                        const t = N(),
                            r = t.model,
                            n = t.controls,
                            s = Ee().mediaSize,
                            i = (0, a.useRef)(!1),
                            l = r.computes.getMissions(),
                            E = r.computes.getRovers(),
                            d = r.root.get(),
                            _ = (0, a.useState)(r.selectedVehicle.selectedVehicle.get()),
                            A = _[0],
                            p = _[1],
                            D = A === F.Old,
                            B = d.isProgressionFinished,
                            f = (function (e = 0) {
                                let u = e;
                                const t = Math.trunc(u / 86400);
                                u -= 86400 * t;
                                const r = Math.trunc(u / 3600);
                                u -= 3600 * r;
                                const n = Math.trunc(u / 60);
                                return ((u -= 60 * n), { days: t, hours: r, minutes: n, seconds: u });
                            })(d.questTimer),
                            C = r.lobbyRoute.lobbyRoute.get() !== g.Main,
                            v = f.hours,
                            h = f.minutes,
                            b = (0, a.useMemo)(
                                () =>
                                    ((e) => {
                                        switch (!0) {
                                            case e >= le.ExtraLarge:
                                                return 'size_62x62';
                                            case e >= le.Large:
                                                return 'size_48x48';
                                            default:
                                                return 'size_36x36';
                                        }
                                    })(s),
                                [s],
                            ),
                            w = (0, a.useCallback)(
                                (e, u) => {
                                    i.current ||
                                        C ||
                                        ((i.current = !0),
                                        u(),
                                        n.onLobbyRouteChange(e),
                                        setTimeout(() => {
                                            i.current = !1;
                                        }, 400));
                                },
                                [C, n],
                            ),
                            S = (0, a.useCallback)(() => {
                                w(g.Artefact, Nr);
                            }, [w]),
                            y = (0, a.useCallback)(() => {
                                w(g.Pickups, Or);
                            }, [w]),
                            P = (e) => {
                                (n.onVehicleChange(e), m(R.sounds.ev_cosmic_rover_click()), p(e));
                            },
                            L = {
                                '--glitch-bg': `url(${Ur.artefact.progress_numbers.$dyn(`c_${d.currentProgressSectionIndex + 1}`)})`,
                            };
                        return o().createElement(
                            'div',
                            { className: c()(Mr.base, e) },
                            o().createElement(
                                'div',
                                { className: Mr.about },
                                o().createElement(
                                    $,
                                    { contentId: R.views.cosmic_event.lobby.tooltips.RulesEntryPointTooltip('resId') },
                                    o().createElement(
                                        'div',
                                        { onClick: y, onMouseEnter: Ir },
                                        o().createElement(vr, { className: c()(Mr.rulesEntryPoint, Wt.fromLeft) }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Mr.missions, Wt.fadeAfterTransition) },
                                o().createElement(
                                    'div',
                                    { className: Mr.missionsContent },
                                    l.map((e) =>
                                        o().createElement(
                                            $,
                                            {
                                                key: e.id,
                                                contentId:
                                                    R.views.cosmic_event.lobby.tooltips.DailyQuestsTooltip('resId'),
                                                args: { missionId: e.id },
                                                ignoreShowDelay: !0,
                                            },
                                            o().createElement(
                                                'div',
                                                { className: Mr.missionWrapper },
                                                o().createElement(br, Tr({ className: Mr.mission }, e)),
                                                o().createElement('div', { className: Mr.missionSeparator }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    $,
                                    {
                                        ignoreShowDelay: !0,
                                        contentId: R.views.cosmic_event.lobby.tooltips.DailyQuestsTimerTooltip('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Mr.timerWrap },
                                        o().createElement('div', { className: Mr.mark }),
                                        o().createElement('div', { className: Mr.clockIcon }),
                                        o().createElement(Ve, {
                                            className: Mr.timerText,
                                            text: Hr.lobby.dailyMission.expiryTimer(),
                                            format: {
                                                binding: {
                                                    hours: v
                                                        ? o().createElement(Ve, {
                                                              text: `${v} ${Hr.lobby.dailyMission.hours()}`,
                                                          })
                                                        : '',
                                                    minutes: v
                                                        ? ''
                                                        : o().createElement(Ve, {
                                                              text: `${h} ${Hr.lobby.dailyMission.minutes()}`,
                                                          }),
                                                },
                                            },
                                        }),
                                        o().createElement('div', { className: Mr.mark }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Mr.vehicleAbilitiesWrapper, Wt.fadeAfterTransition) },
                                o().createElement(
                                    'div',
                                    { className: Mr.vehicleAbilitiesHeader },
                                    o().createElement('div', {
                                        className: c()(Mr.roverIcon, D ? Mr.roverMeteor : Mr.roverSputnik),
                                    }),
                                    o().createElement(Ve, {
                                        text: Hr.queue.vehicleName.$dyn(D ? 'old' : 'new'),
                                        className: Mr.abilitiesTitle,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Mr.abilitiesContent },
                                    o().createElement(
                                        $,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.cosmic_event.lobby.tooltips.VehicleShellTooltip('resId'),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: c()(Mr.abilityBlock, Mr.commonAbility) },
                                            o().createElement(Pr, {
                                                title:
                                                    null == (u = R.strings.artefacts.$dyn(Lr.SHELL))
                                                        ? void 0
                                                        : u.$dyn('name'),
                                                imgUri: Ur.battle.ability_panel[b].$dyn(Lr.SHELL),
                                            }),
                                        ),
                                    ),
                                    E[A - 1].abilities.map(({ ability: e }) => {
                                        var u;
                                        return o().createElement(
                                            $,
                                            {
                                                ignoreShowDelay: !0,
                                                contentId:
                                                    R.views.cosmic_event.lobby.tooltips.VehicleAbilityTooltip('resId'),
                                                args: { ability: e },
                                                key: e,
                                            },
                                            o().createElement(
                                                'div',
                                                { className: Mr.abilityBlock },
                                                o().createElement(Pr, {
                                                    title:
                                                        null == (u = R.strings.artefacts.$dyn(e))
                                                            ? void 0
                                                            : u.$dyn('name'),
                                                    imgUri: Ur.battle.ability_panel[b].$dyn(e),
                                                }),
                                            ),
                                        );
                                    }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Wt.fadeAfterTransition, Mr.vehicleSelectWrapper) },
                                E.map(({ vehicle: e, isVehicleInBattle: u }) =>
                                    o().createElement(Sr, {
                                        key: e,
                                        type: e,
                                        inBattle: u,
                                        isSelected: A === e,
                                        handleRoverClick: P,
                                        onMouseEnter: kr,
                                        className: Mr.roverBlock,
                                    }),
                                ),
                            ),
                            o().createElement(
                                $,
                                {
                                    contentId:
                                        R.views.cosmic_event.lobby.tooltips.ProgressionEntryPointTooltip('resId'),
                                },
                                o().createElement(
                                    'div',
                                    { className: Mr.artefact, onClick: S, onMouseEnter: xr },
                                    o().createElement(
                                        ir,
                                        { isDone: B, className: Mr.artefactWrapper },
                                        !B &&
                                            o().createElement(
                                                'div',
                                                { className: Mr.artefact_info },
                                                o().createElement(
                                                    'div',
                                                    { className: Mr.artefact_infoNumber, style: L },
                                                    o().createElement('div', { className: Mr.glitchLayer1 }),
                                                    o().createElement('div', { className: Mr.glitchLayer2 }),
                                                ),
                                            ),
                                        o().createElement('div', { className: Mr.scanline }),
                                    ),
                                ),
                            ),
                            o().createElement(Cr, { className: Mr.shopEntryContainer }),
                        );
                    }),
                    Gr = {
                        None: Lr.NONE,
                        Shell: Lr.SHELL,
                        Acceleration: Lr.ACCELERATION,
                        Shield: Lr.SHIELD,
                        BlackHole: Lr.BLACK_HOLE,
                        Overcharge: Lr.OVERCHARGE,
                        RapidShelling: Lr.RAPID_SHELLING,
                        PowerShot: Lr.POWER_SHOT,
                        StunShot: Lr.STUN_SHOT,
                        Teleport: Lr.TELEPORT,
                    };
                let Vr;
                !(function (e) {
                    ((e[(e.First = 1)] = 'First'), (e[(e.Second = 2)] = 'Second'));
                })(Vr || (Vr = {}));
                const $r = ['title', 'imgUri', 'state', 'ability', 'className', 'isLocked'];
                function zr() {
                    return (
                        (zr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        zr.apply(this, arguments)
                    );
                }
                const jr = {
                        [O.Hovered]: 'PickupBlock_base__hovered_bf',
                        [O.Active]: 'PickupBlock_base__active_9e',
                        [O.UnFocused]: 'PickupBlock_base__unFocused_ac',
                    },
                    Xr = {
                        [Lr.OVERCHARGE]: 'PickupBlock_overcharge_67',
                        [Lr.TELEPORT]: 'PickupBlock_teleport_67',
                        [Lr.BLACK_HOLE]: 'PickupBlock_blackhole_88',
                        [Lr.POWER_SHOT]: 'PickupBlock_powershot_e4',
                    },
                    Yr = (e) => {
                        let u = e.title,
                            t = e.imgUri,
                            r = e.state,
                            n = e.ability,
                            a = e.className,
                            s = e.isLocked,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, $r);
                        const l = r === O.Active || r === O.Hovered,
                            m = c()('PickupBlock_base_62', s && 'PickupBlock_base__locked_2a', jr[r], Xr[n], a);
                        return o().createElement(
                            'div',
                            zr({ className: m }, i),
                            (l || s) && o().createElement('div', { className: 'PickupBlock_gradient_d4' }),
                            o().createElement(
                                'div',
                                { className: 'PickupBlock_content_5d' },
                                o().createElement('img', { className: 'PickupBlock_pickupIcon_96', src: t, alt: '' }),
                                o().createElement('div', { className: 'PickupBlock_title_5e' }, u),
                            ),
                        );
                    },
                    qr = R.strings.cosmicEvent.pickups,
                    Kr = R.sounds,
                    Qr = [
                        {
                            ability: Lr.OVERCHARGE,
                            description: qr.overcharge.description(),
                            audio: Kr.ev_cosmic_forcefield_click(),
                        },
                        {
                            ability: Lr.BLACK_HOLE,
                            description: qr.black_hole.description(),
                            audio: Kr.ev_cosmic_supernova_click(),
                        },
                        {
                            ability: Lr.TELEPORT,
                            description: qr.teleport.description(),
                            audio: Kr.ev_cosmic_teleport_click(),
                        },
                        {
                            ability: Lr.POWER_SHOT,
                            description: qr.power_shot.description(),
                            audio: Kr.ev_cosmic_supershot_click(),
                        },
                    ],
                    Zr = (e) => Qr.find((u) => u.ability === e),
                    Jr = Qr.map((e) => e.ability),
                    en = {
                        base: 'PickupsRoute_base_27',
                        title: 'PickupsRoute_title_54',
                        content: 'PickupsRoute_content_7f',
                        sideBarWrapper: 'PickupsRoute_sideBarWrapper_34',
                        tab: 'PickupsRoute_tab_51',
                        videoWrapper: 'PickupsRoute_videoWrapper_44',
                        videoLayer: 'PickupsRoute_videoLayer_4e',
                        videoLayer__active: 'PickupsRoute_videoLayer__active_9c',
                        videoBorder: 'PickupsRoute_videoBorder_a3',
                        video: 'PickupsRoute_video_ae',
                        fadeIn: 'PickupsRoute_fadeIn_bd',
                        description: 'PickupsRoute_description_2e',
                    },
                    un = R.strings.cosmicEvent.pickups,
                    tn = R.images.cosmic_event.gui.maps.icons.pickups.icons,
                    rn = (e, u) => (e >= le.Medium ? tn[u]() : tn[`${u}_small`]()),
                    nn = {
                        [g.Main]: Wr,
                        [g.Artefact]: ar,
                        [g.Pickups]: ({ className: e }) => {
                            const u = (0, a.useState)(null),
                                t = u[0],
                                r = u[1],
                                n = (0, a.useState)(Gr.Overcharge),
                                s = n[0],
                                i = n[1],
                                l = (0, a.useState)(!1),
                                E = l[0],
                                d = l[1],
                                _ = Ee().mediaSize,
                                A = (0, a.useRef)(0);
                            (0, a.useEffect)(
                                () => () => {
                                    A.current && window.clearTimeout(A.current);
                                },
                                [],
                            );
                            const p = (0, a.useCallback)(() => {
                                    r(null);
                                }, []),
                                g = (0, a.useCallback)((e) => {
                                    (r(e), m(R.sounds.ev_cosmic_lobby_hover()));
                                }, []),
                                F = (0, a.useCallback)(
                                    (e) => {
                                        e === s ||
                                            E ||
                                            (d(!0),
                                            i(e),
                                            m(((e) => Zr(e).audio)(e)),
                                            (A.current = window.setTimeout(() => {
                                                (d(!1), (A.current = 0));
                                            }, 200)));
                                    },
                                    [s, E],
                                );
                            return o().createElement(
                                'div',
                                { className: c()(en.base, e) },
                                o().createElement(Ve, {
                                    className: en.title,
                                    text: R.strings.cosmicEvent.navigation.pickups(),
                                }),
                                o().createElement(
                                    'div',
                                    { className: en.content },
                                    o().createElement(
                                        'div',
                                        { className: en.sideBarWrapper },
                                        o().createElement(
                                            'div',
                                            { className: c()(en.tab, Wt.fromLeft_2) },
                                            o().createElement(Yr, {
                                                onMouseEnter: () => g(Gr.Overcharge),
                                                onClick: () => F(Gr.Overcharge),
                                                onMouseLeave: p,
                                                state: yt(t, s, Gr.Overcharge),
                                                ability: Lr.OVERCHARGE,
                                                title: un.overcharge.title(),
                                                imgUri: rn(_, Gr.Overcharge),
                                                isLocked: E && s !== Gr.Overcharge,
                                            }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: c()(en.tab, Wt.fromLeft_3) },
                                            o().createElement(Yr, {
                                                onMouseEnter: () => g(Gr.BlackHole),
                                                onClick: () => F(Gr.BlackHole),
                                                onMouseLeave: p,
                                                state: yt(t, s, Gr.BlackHole),
                                                ability: Lr.BLACK_HOLE,
                                                title: un.black_hole.title(),
                                                imgUri: rn(_, Gr.BlackHole),
                                                isLocked: E && s !== Gr.BlackHole,
                                            }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: c()(en.tab, Wt.fromLeft_4) },
                                            o().createElement(Yr, {
                                                onMouseEnter: () => g(Gr.Teleport),
                                                onClick: () => F(Gr.Teleport),
                                                onMouseLeave: p,
                                                state: yt(t, s, Gr.Teleport),
                                                ability: Lr.TELEPORT,
                                                title: un.teleport.title(),
                                                imgUri: rn(_, Gr.Teleport),
                                                isLocked: E && s !== Gr.Teleport,
                                            }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: c()(en.tab, Wt.fromLeft_5) },
                                            o().createElement(Yr, {
                                                onMouseEnter: () => g(Gr.PowerShot),
                                                onClick: () => F(Gr.PowerShot),
                                                onMouseLeave: p,
                                                state: yt(t, s, Gr.PowerShot),
                                                ability: Lr.POWER_SHOT,
                                                title: un.power_shot.title(),
                                                imgUri: rn(_, Gr.PowerShot),
                                                isLocked: E && s !== Gr.PowerShot,
                                            }),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: c()(en.videoWrapper, Wt.stage) },
                                        Jr.map((e) => {
                                            const u = e === s;
                                            return o().createElement(
                                                'div',
                                                { key: e, className: c()(en.videoLayer, u && en.videoLayer__active) },
                                                o().createElement(Jt, {
                                                    className: en.video,
                                                    src: R.videos.cosmic.abilities.$dyn(e),
                                                    loop: !0,
                                                    autoplay: !0,
                                                    isPaused: !u,
                                                    restartOnPlay: !0,
                                                }),
                                            );
                                        }),
                                        o().createElement('div', { className: en.videoBorder }),
                                        o().createElement(Ve, {
                                            className: en.description,
                                            text: ((D = s), Zr(D).description),
                                        }),
                                    ),
                                ),
                            );
                            var D;
                        },
                    },
                    an = { [g.Main]: Mr.route, [g.Artefact]: Vt.route, [g.Pickups]: en.route },
                    on = {
                        [g.Main]: Wt.background__main,
                        [g.Artefact]: Wt.background__artefact,
                        [g.Pickups]: Wt.background__pickups,
                    },
                    sn = () => E.playHighlight(),
                    ln = (0, h.observer)(() => {
                        const e = N(),
                            u = e.model,
                            t = e.controls,
                            r = (0, a.useRef)(!1),
                            n = (0, a.useCallback)(
                                (e) => {
                                    r.current ||
                                        ((r.current = !0),
                                        t.onLobbyRouteChange(e),
                                        setTimeout(() => {
                                            r.current = !1;
                                        }, 400));
                                },
                                [t],
                            ),
                            s = u.root.get(),
                            i = u.lobbyRoute.lobbyRoute.get() || g.Main,
                            l = nn[i];
                        !(function ({
                            key: e = B.n.ESCAPE,
                            callback: u = () => D.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            v(e, u, t);
                        })({
                            callback: () => {
                                i === g.Main ? t.onClose() : n(g.Main);
                            },
                        });
                        const m = {
                                [g.Main]: (0, a.useRef)(null),
                                [g.Artefact]: (0, a.useRef)(null),
                                [g.Pickups]: (0, a.useRef)(null),
                            }[i],
                            E = o().createElement('div', { className: c()(Wt.background, on[i]) }),
                            d = (0, a.useMemo)(
                                () => ({
                                    [g.Main]: {
                                        aboutVisible: !0,
                                        closeVisible: !0,
                                        exitModeProps: { onClick: t.onClose },
                                    },
                                    [g.Artefact]: {
                                        aboutVisible: !1,
                                        closeVisible: !0,
                                        exitModeProps: {
                                            onClick: () => n(g.Main),
                                            caption: R.strings.cosmicEvent.artefact.progressionCloseBtn(),
                                        },
                                    },
                                    [g.Pickups]: {
                                        aboutVisible: !1,
                                        closeVisible: !0,
                                        exitModeProps: {
                                            onClick: () => n(g.Main),
                                            caption: R.strings.cosmicEvent.artefact.progressionCloseBtn(),
                                        },
                                    },
                                }),
                                [t, n],
                            )[i];
                        return o().createElement(
                            'div',
                            { className: c()(Wt.base, an[i], s.fadeOut && Wt.base__fadeOut) },
                            o().createElement(
                                b.TL,
                                { mode: 'out-in' },
                                o().createElement(
                                    b.Kv,
                                    {
                                        key: i,
                                        classNames: {
                                            appear: Wt.route__enter,
                                            appearActive: Wt.route__enterActive,
                                            appearDone: Wt.route__enterDone,
                                            enter: Wt.route__enter,
                                            enterActive: Wt.route__enterActive,
                                            enterDone: Wt.route__enterDone,
                                            exit: Wt.route__exit,
                                            exitActive: Wt.route__exitActive,
                                            exitDone: Wt.route__exitDone,
                                        },
                                        timeout: { appear: 20, enter: 20, exit: 150 },
                                    },
                                    o().createElement(
                                        'div',
                                        { ref: m, className: Wt.routeWrapper },
                                        o().createElement(
                                            'div',
                                            { className: Wt.routeBackground },
                                            E,
                                            o().createElement('div', { className: Wt.glow }),
                                        ),
                                        o().createElement(l, { className: Wt.route }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Wt.header },
                                d.aboutVisible
                                    ? o().createElement(
                                          'div',
                                          { className: Wt.about },
                                          o().createElement(p, {
                                              classNames: { icon: Wt.aboutIcon, caption: Wt.aboutCaption },
                                              caption: R.strings.cosmicEvent.aboutEvent(),
                                              onMouseEnter: sn,
                                              type: 'info',
                                              onClick: t.onAboutEvent,
                                          }),
                                      )
                                    : o().createElement('div', { className: Wt.fallback }),
                                d.closeVisible &&
                                    o().createElement(
                                        'div',
                                        { className: c()(Wt.close), onMouseEnter: sn },
                                        o().createElement(U, d.exitModeProps),
                                    ),
                            ),
                        );
                    });
                var cn = t(926),
                    mn = t.n(cn);
                const En = ['children', 'className'];
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const _n = {
                        [ce.ExtraSmall]: '',
                        [ce.Small]: mn().SMALL_WIDTH,
                        [ce.Medium]: `${mn().SMALL_WIDTH} ${mn().MEDIUM_WIDTH}`,
                        [ce.Large]: `${mn().SMALL_WIDTH} ${mn().MEDIUM_WIDTH} ${mn().LARGE_WIDTH}`,
                        [ce.ExtraLarge]: `${mn().SMALL_WIDTH} ${mn().MEDIUM_WIDTH} ${mn().LARGE_WIDTH} ${mn().EXTRA_LARGE_WIDTH}`,
                    },
                    An = {
                        [me.ExtraSmall]: '',
                        [me.Small]: mn().SMALL_HEIGHT,
                        [me.Medium]: `${mn().SMALL_HEIGHT} ${mn().MEDIUM_HEIGHT}`,
                        [me.Large]: `${mn().SMALL_HEIGHT} ${mn().MEDIUM_HEIGHT} ${mn().LARGE_HEIGHT}`,
                        [me.ExtraLarge]: `${mn().SMALL_HEIGHT} ${mn().MEDIUM_HEIGHT} ${mn().LARGE_HEIGHT} ${mn().EXTRA_LARGE_HEIGHT}`,
                    },
                    pn = {
                        [le.ExtraSmall]: '',
                        [le.Small]: mn().SMALL,
                        [le.Medium]: `${mn().SMALL} ${mn().MEDIUM}`,
                        [le.Large]: `${mn().SMALL} ${mn().MEDIUM} ${mn().LARGE}`,
                        [le.ExtraLarge]: `${mn().SMALL} ${mn().MEDIUM} ${mn().LARGE} ${mn().EXTRA_LARGE}`,
                    },
                    gn = (e) => {
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
                            })(e, En);
                        const n = Ee(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', dn({ className: c()(t, _n[a], An[s], pn[i]) }, r), u);
                    },
                    Fn = ['children'],
                    Dn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Fn);
                        return o().createElement(ie, null, o().createElement(gn, t, u));
                    };
                engine.whenReady.then(() => {
                    i().render(
                        o().createElement(k, null, o().createElement(Dn, null, o().createElement(ln, null))),
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
                    for (var [u, t, r] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (() => {
            var e = { 726: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5758));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
