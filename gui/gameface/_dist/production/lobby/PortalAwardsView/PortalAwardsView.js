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
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => r }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            o = i[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
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
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    }));
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
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
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
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
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
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
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    r = {
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
                let a, n;
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
                    })(n || (n = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                t.d(u, { Sw: () => r.Z, B3: () => c, Z5: () => i, B0: () => s, ry: () => B });
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
                const n = a;
                var r = t(1358);
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            D(r, a, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(r, a, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    g = () => h(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                E = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: C(m),
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
                            p(e, g);
                        },
                        handleViewEvent: h,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            9284: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r);
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
                function _(e, u, t) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                const E = s.O.client.getSize('rem'),
                    m = E.width,
                    d = E.height,
                    A = Object.assign({ width: m, height: d }, _(m, d, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'],
                    C = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, D);
                        const n = (0, a.useContext)(F),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            _ = n.extraLargeWidth,
                            E = n.largeWidth,
                            m = n.mediumWidth,
                            d = n.smallWidth,
                            A = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            B = n.largeHeight,
                            h = n.mediumHeight,
                            g = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: C, large: B, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return o(u, t, v);
                            if (t.largeWidth && E) return o(u, t, v);
                            if (t.mediumWidth && m) return o(u, t, v);
                            if (t.smallWidth && d) return o(u, t, v);
                            if (t.extraSmallWidth && A) return o(u, t, v);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && p) return u;
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
                    (0, a.memo)(C));
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, _(t, a, l)));
                            }, []);
                        (B(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: c }, e);
                    });
                var g = t(6483),
                    p = t.n(g),
                    v = t(926),
                    b = t.n(v);
                let w, f, y;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(w || (w = {})),
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
                    })(y || (y = {})));
                const x = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    L = ['children', 'className'];
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
                const M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_WIDTH,
                        [f.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [f.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [y.ExtraSmall]: '',
                        [y.Small]: b().SMALL_HEIGHT,
                        [y.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [y.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL,
                        [w.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [w.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [w.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, L);
                        const r = x(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', S({ className: p()(t, M[i], T[o], k[s]) }, a), u);
                    },
                    O = ['children'],
                    P = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, O);
                        return n().createElement(h, null, n().createElement(N, t, u));
                    };
                let H;
                function I(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(H || (H = {}));
                const W = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    G = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    U = (e, u, t = H.left) => e.split(u).reduce(t === H.left ? W : G, []),
                    $ = (() => {
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
                    j = ['zh_cn', 'zh_sg', 'zh_tw'];
                let V;
                var X;
                (((X = V || (V = {})).SHORT_DATE = 'short-date'),
                    (X.SHORT_TIME = 'short-time'),
                    (X.SHORT_DATE_TIME = 'short-date-time'),
                    (X.FULL_DATE = 'full-date'),
                    (X.FULL_DATE_TIME = 'full-date-time'),
                    (X.MONTH = 'month'),
                    (X.MONTH_DATE = 'month-date'),
                    (X.DATE_MONTH = 'date-month'),
                    (X.MONTH_YEAR = 'month-year'),
                    (X.WEEK_DAY = 'week-day'),
                    (X.WEEK_DAY_TIME = 'week-day-time'),
                    (X.YEAR = 'year'),
                    (X.DATE_YEAR = 'date-year'));
                var z = t(4179);
                Date.now();
                const K = (e = 1) => {
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
                    },
                    q = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Y = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Z = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Q = z.Sw.instance;
                let J;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(J || (J = {}));
                const ee = (e = 'model', u = J.Deep) => {
                    const t = (0, a.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, a.useMemo)(() => K(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const u = q(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return Y(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = q(`${e}.${u}`, window);
                                            return Y(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(s),
                            ),
                        ),
                        c = l[0],
                        _ = l[1],
                        E = (0, a.useRef)(-1);
                    return (
                        B(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? J.Deep : J.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== J.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === J.Deep
                                            ? (e === c && n((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    a = ((e) => {
                                        const u = ((e) => {
                                                const u = K(),
                                                    t = u.caller,
                                                    a = u.resId,
                                                    n =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: Z(n, ''), resId: a };
                                            })(),
                                            t = u.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((u, a) => {
                                                    const n = q(Z(t, `${u}.${a}`), window);
                                                    return Y(n)
                                                        ? (e.push(n.id), `${u}.${a}.value`)
                                                        : (e.push(a), `${u}.${a}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                E.current = Q.addCallback(a, t, o, u === J.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (u !== J.None)
                                return () => {
                                    Q.removeCallback(E.current, o);
                                };
                        }, [o, u]),
                        c
                    );
                };
                let ue, te, ae;
                (z.Sw.instance,
                    (function (e) {
                        ((e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank'));
                    })(ue || (ue = {})),
                    (function (e) {
                        ((e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank'));
                    })(te || (te = {})),
                    (function (e) {
                        ((e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter'));
                    })(ae || (ae = {})));
                var ne = t(5521);
                const re = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ie(e = ne.n.NONE, u = re, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ne.n.NONE)
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
                const oe = (e, u = 'integral') => {
                        let t;
                        return (
                            (t = 'gold' === u ? z.B3.GOLD : z.B3.INTEGRAL),
                            void 0 === e ? '' : z.Z5.getNumberFormat(e, t)
                        );
                    },
                    se = ({ format: e, value: u }) => {
                        const t = oe(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    le = [
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
                function ce(e) {
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
                const _e = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Ee = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            h = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, le);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => C || K().resId, [C]),
                            b = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (_e(t, d, { isMouseEvent: !0, on: !0, arguments: ce(n) }, v),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, d, n, v, B]),
                            w = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        _e(t, d, { on: !1 }, v),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, v, h]),
                            f = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (w(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && w(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && w(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    me = ['children'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const Ae = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, me);
                    return n().createElement(
                        Ee,
                        de(
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
                let Fe;
                !(function (e) {
                    ((e.goldStats = 'goldInfo'),
                        (e.creditsStats = 'creditsInfo'),
                        (e.crystalInfo = 'crystalInfo'),
                        (e.freeXpInfo = 'freeXPInfo'));
                })(Fe || (Fe = {}));
                const De = 'CurrencyBalance_currency_b6',
                    Ce = 'CurrencyBalance_errorText_b7',
                    Be = { tooltipId: Fe.goldStats },
                    he = { tooltipId: Fe.creditsStats },
                    ge = { tooltipId: Fe.crystalInfo },
                    pe = { tooltipId: Fe.freeXpInfo },
                    ve = '- - -',
                    be = ({ credits: e, golds: u, crystals: t, freexp: a, isWalletAvailable: r }) =>
                        n().createElement(
                            'div',
                            { className: 'CurrencyBalance_base_e7' },
                            n().createElement(
                                Ae,
                                { args: ge },
                                n().createElement(
                                    'span',
                                    { className: p()(De, 'CurrencyBalance_currency__crystal_7d') },
                                    r
                                        ? n().createElement(se, { value: t, format: 'integral' })
                                        : n().createElement('div', { className: Ce }, ve),
                                ),
                            ),
                            n().createElement(
                                Ae,
                                { args: Be },
                                n().createElement(
                                    'span',
                                    { className: p()(De, 'CurrencyBalance_currency__gold_27') },
                                    r
                                        ? n().createElement(se, { value: u, format: 'gold' })
                                        : n().createElement('div', { className: Ce }, ve),
                                ),
                            ),
                            n().createElement(
                                Ae,
                                { args: he },
                                n().createElement(
                                    'span',
                                    { className: p()(De, 'CurrencyBalance_currency__credit_7f') },
                                    r
                                        ? n().createElement(se, { value: e, format: 'integral' })
                                        : n().createElement('div', { className: Ce }, ve),
                                ),
                            ),
                            n().createElement(
                                Ae,
                                { args: pe },
                                n().createElement(
                                    'span',
                                    { className: p()(De, 'CurrencyBalance_currency__freexp_06') },
                                    r
                                        ? n().createElement(se, { value: a, format: 'integral' })
                                        : n().createElement('div', { className: Ce }, ve),
                                ),
                            ),
                        ),
                    we = ({ hasAnimation: e = !1 }) => {
                        const u = p()('Gradient_base_c7', e && 'Gradient_base__hasAnimation_15');
                        return n().createElement('div', { className: u });
                    },
                    fe = 100,
                    ye = ({ animationDelayStepsCount: e = 1, children: u }) =>
                        n().createElement(
                            'div',
                            { className: 'DelayedAnimationWrapper_base_af', style: { animationDelay: e * fe + 'ms' } },
                            u,
                        );
                let xe;
                function Le(e) {
                    engine.call('PlaySound', e);
                }
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(xe || (xe = {}));
                const Re = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                };
                let Se, Me, Te;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Se || (Se = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Me || (Me = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(Te || (Te = {})));
                const ke = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            i = e.isDisabled,
                            o = void 0 !== i && i,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            _ = void 0 === c ? Se.medium : c,
                            E = e.type,
                            m = void 0 === E ? Me.primary : E,
                            d = e.soundHover,
                            A = void 0 === d ? 'highlight' : d,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            C = e.onMouseEnter,
                            B = e.onMouseLeave,
                            h = e.onMouseUp,
                            g = e.onMouseDown,
                            v = e.onClick,
                            b = e.onChange,
                            w = e.onFocus,
                            f = e.onBlur,
                            y = e.text,
                            x = e.contentStyles,
                            L = e.children,
                            R = e.alignment,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ke);
                        const M = (0, a.useState)(!1),
                            T = M[0],
                            k = M[1],
                            N = (0, a.useState)(!1),
                            O = (N[0], N[1]),
                            P = (0, a.useCallback)(
                                (e) => {
                                    o || (b && b(), v && v(e));
                                },
                                [o, b, v],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === xe.LEFT;
                                    o || (u && k(!0), u && g && g(e), D && Le(D));
                                },
                                [o, g, D],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    o || (k(!1), h && h(e));
                                },
                                [o, h],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    o || (C && C(e), A && Le(A));
                                },
                                [o, C, A],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    o || (k(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    o || (O(!0), w && w(e));
                                },
                                [o, w],
                            ),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    o || (O(!1), f && f(e));
                                },
                                [o, f],
                            ),
                            j = n().createElement(
                                'div',
                                { className: Re.label },
                                n().createElement(
                                    'div',
                                    { className: p()(Re.labelContent, 's-labelContent'), style: x },
                                    y || L,
                                ),
                            );
                        return n().createElement(
                            'div',
                            Ne(
                                {
                                    id: u,
                                    className: p()(Re.base, Re[`base__${_}`], Re[`base__${m}`], {
                                        [Re.base__checked]: r,
                                        [Re.base__disabled]: o,
                                        [Re.base__mouseDown]: T,
                                        [Re.base__alert]: l,
                                        [Re.base__center]: R === Te.Center,
                                        [Re.base__bottom]: R === Te.Bottom,
                                    }),
                                    onClick: P,
                                    onMouseEnter: W,
                                    onMouseLeave: G,
                                    onMouseDown: H,
                                    onMouseUp: I,
                                    onFocus: U,
                                    onBlur: $,
                                },
                                S,
                            ),
                            n().createElement(
                                'div',
                                { className: Re.input },
                                n().createElement('div', { className: Re.alertOverlay }),
                                n().createElement('div', { className: Re.inputHoverOverlay }),
                                n().createElement('div', { className: Re.highlight }),
                            ),
                            n().createElement('div', { className: Re.checkmark }),
                            ((y || L) && j) || null,
                        );
                    },
                    Pe = ({ isChecked: e, onClick: u }) =>
                        n().createElement(
                            'div',
                            { className: 'AnimationCheckbox_animationCheckbox_c5' },
                            n().createElement(Oe, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: Se.large,
                                onClick: u,
                                isChecked: e,
                            }),
                        ),
                    He = {
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
                    Ie = [
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
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                class Ge extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Le(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Le(this.props.soundClick));
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
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, Ie)),
                            m = p()(He.base, He[`base__${i}`], He[`base__${r}`], null == o ? void 0 : o.base),
                            d = p()(He.icon, He[`icon__${i}`], He[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = p()(He.glow, null == o ? void 0 : o.glow),
                            F = p()(He.caption, He[`caption__${i}`], null == o ? void 0 : o.caption),
                            D = p()(He.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            We(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && n().createElement('div', { className: He.shine }),
                            n().createElement('div', { className: d }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                Ge.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ue = ({ onClose: e }) =>
                        n().createElement(
                            'div',
                            { className: 'CloseButton_base_1c' },
                            n().createElement(Ge, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        ),
                    $e = ({ onClick: e, goto: u }) =>
                        n().createElement(
                            'div',
                            { className: 'BackButton_base_2f' },
                            n().createElement(Ge, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: e,
                                goto: u,
                            }),
                        ),
                    je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Xe = R.views.common.tooltip_window.simple_tooltip_content,
                    ze = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, je);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return n().createElement(
                            Ee,
                            Ve(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? Xe.SimpleTooltipHtmlContent('resId') : Xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    Ke = ['tooltipType'],
                    qe = ['children', 'wrap'];
                function Ye(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                    return n;
                }
                let Ze;
                !(function (e) {
                    ((e.Simple = 'simple'), (e.Backport = 'backport'), (e.Base = 'base'));
                })(Ze || (Ze = {}));
                const Qe = (e) => (e.tooltipType, Ye(e, Ke)),
                    Je = (e) => {
                        let u = e.children,
                            t = e.wrap,
                            a = Ye(e, qe);
                        const r = t ? n().createElement('div', null, u) : u;
                        return a.tooltipType === Ze.Simple
                            ? n().createElement(ze, Qe(a), r)
                            : a.tooltipType === Ze.Backport
                              ? n().createElement(Ae, Qe(a), r)
                              : ((e) => e.tooltipType === Ze.Base)(a)
                                ? n().createElement(Ee, Qe(a), r)
                                : u;
                    },
                    eu = R.strings.event.WtEventPortals,
                    uu = ({ onBuyButtonClick: e }) => {
                        const u = (0, a.useState)(0),
                            t = u[0],
                            r = u[1],
                            i = x().mediaSize >= w.Medium,
                            o = (0, a.useCallback)(() => {
                                (e(), Le('play'));
                            }, [e]),
                            s = (0, a.useCallback)(() => {
                                Le('highlight');
                            }, []),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = () => {
                                const e = [l, c].sort(
                                    (e, u) =>
                                        (u.current ? u.current.offsetWidth : 0) -
                                        (e.current ? e.current.offsetWidth : 0),
                                )[0];
                                window.requestAnimationFrame(() => {
                                    e.current && r(e.current.offsetWidth);
                                });
                            };
                        (0, a.useEffect)(
                            () => (
                                _(),
                                window.addEventListener('resize', _),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [],
                        );
                        const E = { tooltipType: Ze.Simple, body: eu.buyButtonTooltip() },
                            m = (0, a.useMemo)(() => ({ width: `${t}px` }), [t]);
                        return n().createElement(
                            Je,
                            E,
                            n().createElement(
                                'div',
                                { className: 'BuyButton_base_33', style: m, onMouseEnter: s, onClick: o },
                                n().createElement('div', { className: 'BuyButton_image_9e', ref: l }),
                                n().createElement('div', { className: 'BuyButton_imageClickArea_81' }),
                                n().createElement('div', { className: 'BuyButton_text_da', ref: c }, eu.buyButton()),
                                n().createElement(
                                    'div',
                                    {
                                        className: 'BuyButton_flareWrapper_58',
                                        style: {
                                            maskImage: `url('R.images.white_tiger.gui.maps.icons.portals.buy_key_button${i ? '_large' : ''}')`,
                                        },
                                    },
                                    n().createElement('div', { className: 'BuyButton_flare_ed' }),
                                ),
                            ),
                        );
                    };
                let tu;
                var au;
                (((au = tu || (tu = {})).UNDEFINED = 'undefined'),
                    (au.BOSS = 'boss'),
                    (au.BOSS_2025 = 'boss2025'),
                    (au.BOSS_SPECIAL = 'bossSpecial'),
                    (au.HUNTER = 'hunter'));
                const nu = 1.6,
                    ru = (e, u = 150, t = 400, a = 1e3) => ({ appear: t + (u * e + 1), enter: a }),
                    iu = (e) => (u, t) =>
                        u / t >= 2.4000000000000004
                            ? e(viewEnv.remToPx(t) * nu, viewEnv.remToPx(t), u, t)
                            : e(viewEnv.remToPx(u), 0.625 * viewEnv.remToPx(u), u, t),
                    ou = iu((e, u, t, a) => {
                        const n = { width: viewEnv.remToPx(900) * nu, height: viewEnv.remToPx(900) },
                            r = { width: viewEnv.remToPx(1200) * nu, height: viewEnv.remToPx(1200) };
                        return e < n.width
                            ? n
                            : t > l.medium.width && a > l.medium.height && e < r.width
                              ? r
                              : { width: e, height: u };
                    }),
                    su =
                        (iu((e, u) => {
                            const t = { width: viewEnv.remToPx(700) * nu, height: viewEnv.remToPx(700) };
                            return e < t.width ? t : { width: e, height: u };
                        }),
                        (e, u, ...t) => {
                            const a = JSON.stringify({ command: u, data: t });
                            swfPlayer.gotoAndPlayLabel(e, a);
                        }),
                    lu = 'clientMinimized',
                    cu = 'playVideo',
                    _u = 'stopVideo',
                    Eu = 'loadVideo',
                    mu = 'autoPlay',
                    du = 'onPlaybackReady',
                    Au = 'viewEnv.onSwfEvent',
                    Fu = 'SwfAwardVideo_wrapper_43',
                    Du = 'wt_portal_open_swf',
                    Cu = {
                        [ue.HUNTER]: '../../videos/wt_event/hunter_portal_open.usm',
                        [ue.BOSS]: '../../videos/wt_event/boss_portal_open.usm',
                        [ue.TANK]: '',
                    },
                    Bu = { [Du]: '' },
                    hu = (0, a.memo)(
                        ({
                            portalType: e,
                            onVideoReady: u,
                            onVideoComplete: t,
                            isContentVisible: r,
                            isVideoReady: i,
                            shouldApplyRewardDelay: o,
                        }) => {
                            const s = x(),
                                l = s.remScreenWidth,
                                c = s.remScreenHeight,
                                _ = (0, a.useRef)(),
                                E = (0, a.useRef)(),
                                m = (0, a.useCallback)(() => {
                                    E.current ||
                                        (E.current = window.setTimeout(
                                            () => {
                                                (t(), (E.current = void 0));
                                            },
                                            o ? 1e3 : 0,
                                        ));
                                }, [t, o]);
                            ((0, a.useEffect)(
                                () => () => {
                                    i && !r && m();
                                },
                                [r, i, m],
                            ),
                                (0, a.useEffect)(
                                    () => () => {
                                        E.current && clearTimeout(E.current);
                                    },
                                    [],
                                ));
                            const d = (0, a.useCallback)(
                                (e) => {
                                    e === du && (u(), m());
                                },
                                [u, m],
                            );
                            ((0, a.useEffect)(() => {
                                const u = () => {
                                    _.current && (swfPlayer.removeEventListener(Du, _.current), (_.current = void 0));
                                };
                                u();
                                const t = ((u) => {
                                    let t,
                                        a = null;
                                    return (
                                        (a = requestAnimationFrame(() => {
                                            a = requestAnimationFrame(() => {
                                                ((a = null),
                                                    (t = (() => {
                                                        const u = Cu[e];
                                                        (su(Du, _u),
                                                            Bu.wt_portal_open_swf !== u
                                                                ? ((Bu.wt_portal_open_swf = u),
                                                                  su(Du, mu, !0),
                                                                  su(Du, Eu, u))
                                                                : su(Du, cu),
                                                            (_.current = swfPlayer.addEventListener(Du, du, !1, 0)));
                                                    })()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                                        }
                                    );
                                })();
                                return (
                                    engine.on(Au, d),
                                    () => {
                                        (t(), u(), engine.off(Au, d));
                                    }
                                );
                            }, [e, d]),
                                (0, a.useEffect)(() => {
                                    const e = (e) => {
                                        su(Du, e ? 'pauseVideo' : cu);
                                    };
                                    return (
                                        engine.on(lu, e),
                                        () => {
                                            engine.off(lu, e);
                                        }
                                    );
                                }, []));
                            const A = (0, a.useMemo)(() => ou(l, c), [l, c]);
                            return n().createElement(
                                'div',
                                { className: 'SwfAwardVideo_base_18' },
                                n().createElement(
                                    'div',
                                    { className: Fu },
                                    n().createElement('img', {
                                        alt: 'Tank Idle Video',
                                        style: A,
                                        src: 'swf://gui/flash/animations/wt_event/usm_video_player.swf?name=wt_portal_open_swf',
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Fu },
                                    n().createElement('div', { className: 'SwfAwardVideo_vignette_82', style: A }),
                                ),
                            );
                        },
                    ),
                    gu = (0, a.memo)(
                        ({
                            title: e,
                            children: u,
                            portalType: t,
                            isBoxesEnabled: r,
                            lootBoxesAnimationDelayCount: i,
                            onBuy: o,
                            onBackToPortal: s,
                            onClose: l,
                            availableLootBoxesPurchase: c,
                            openedBoxesCount: _ = 0,
                            showFinalAnimation: E = !0,
                            isAnimated: m = !0,
                            onAnimationSettingClick: d,
                            launchId: A,
                            showCurrencyBalance: F = !1,
                            currentCrystals: D = 0,
                            currentGold: C = 0,
                            currentCredits: B = 0,
                            currentFreeXP: h = 0,
                            isWalletAvailable: g = !1,
                        }) => {
                            const v = (0, a.useState)(!1),
                                b = v[0],
                                w = v[1],
                                f = (0, a.useState)(!1),
                                y = f[0],
                                x = f[1];
                            var L;
                            ((L = () => {
                                E && l();
                            }),
                                ie(ne.n.ESCAPE, L),
                                (0, a.useEffect)(() => {
                                    x(!1);
                                }, [_, A]));
                            const S = (0, a.useCallback)(() => {
                                    d && d();
                                }, [d]),
                                M = (0, a.useCallback)(() => {
                                    w(!0);
                                }, []),
                                T = (0, a.useCallback)(() => {
                                    x(!0);
                                }, []),
                                k = (0, a.useCallback)(() => {
                                    s();
                                }, [s]),
                                N = i + 1,
                                O = p()('AwardWrapper_base_3e', !b && 'AwardWrapper_base__hidden_4b'),
                                P = !m || y;
                            return n().createElement(
                                'div',
                                { className: O },
                                n().createElement(hu, {
                                    key: A,
                                    portalType: t,
                                    onVideoReady: M,
                                    onVideoComplete: T,
                                    isContentVisible: y,
                                    isVideoReady: b,
                                    shouldApplyRewardDelay: m,
                                }),
                                P && n().createElement(we, { hasAnimation: !0 }),
                                y &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: 'AwardWrapper_title_7f' }, e),
                                        n().createElement('div', { className: 'AwardWrapper_content_99' }, u),
                                    ),
                                E &&
                                    n().createElement(
                                        ye,
                                        { animationDelayStepsCount: N },
                                        n().createElement(
                                            'div',
                                            { className: 'AwardWrapper_headerButtonWrapper_cc' },
                                            n().createElement(Ue, { onClose: l }),
                                            n().createElement($e, {
                                                onClick: k,
                                                goto: R.strings.event.portalAward.backTo(),
                                            }),
                                        ),
                                        F &&
                                            n().createElement(
                                                'div',
                                                { className: 'AwardWrapper_currencyWrapper_42' },
                                                n().createElement(
                                                    'div',
                                                    { className: 'AwardWrapper_currencyBgWrapper_a3' },
                                                    n().createElement(be, {
                                                        crystals: D,
                                                        golds: C,
                                                        credits: B,
                                                        freexp: h,
                                                        isWalletAvailable: g,
                                                    }),
                                                ),
                                                n().createElement('div', {
                                                    className: 'AwardWrapper_backgroundSeperator_09',
                                                }),
                                            ),
                                        r &&
                                            t !== ue.HUNTER &&
                                            n().createElement(uu, {
                                                onBuyButtonClick: o,
                                                availableLootBoxesPurchase: c,
                                            }),
                                        d && n().createElement(Pe, { isChecked: m, onClick: S }),
                                    ),
                            );
                        },
                    ),
                    pu = {
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
                let vu, bu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(vu || (vu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(bu || (bu = {})));
                const wu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        B = D[1],
                        h = (0, a.useState)(!1),
                        g = h[0],
                        v = h[1],
                        b = (0, a.useState)(!1),
                        w = b[0],
                        f = b[1],
                        y = (0, a.useCallback)(() => {
                            i || (F.current && (F.current.focus(), B(!0)));
                        }, [i]),
                        x = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                i || (null !== s && Le(s), c && c(e), f(!0));
                            },
                            [i, s, c],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                i || (m && m(e), v(!1));
                            },
                            [i, m],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                i || (null !== l && Le(l), E && E(e), t && y(), v(!0));
                            },
                            [i, l, E, y, t],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                i || (d && d(e), v(!1));
                            },
                            [i, d],
                        ),
                        O = p()(
                            pu.base,
                            pu[`base__${r}`],
                            {
                                [pu.base__disabled]: i,
                                [pu[`base__${u}`]]: u,
                                [pu.base__focus]: C,
                                [pu.base__highlightActive]: g,
                                [pu.base__firstHover]: w,
                            },
                            o,
                        ),
                        P = p()(pu.state, pu.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: S,
                                onMouseMove: M,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: N,
                                onClick: L,
                            },
                            r !== vu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: pu.back }),
                                    n().createElement('span', { className: pu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: P },
                                n().createElement('span', { className: pu.stateDisabled }),
                                n().createElement('span', { className: pu.stateHighlightHover }),
                                n().createElement('span', { className: pu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: pu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                wu.defaultProps = { type: vu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const fu = (0, a.memo)(wu),
                    yu = ({ binding: e, text: u = '', classMix: t, alignment: r = H.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, i) =>
                                      n().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${u}-${i}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = H.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return j.includes(t)
                                                                ? $(e)
                                                                : ((e, u = H.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          U(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(U(e, a, H.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    xu = R.strings.event.WtEventPortals,
                    Lu = ({ type: e, lootBoxesCount: u, animationDelayStepsCount: t = 0 }) => {
                        const r = e === te.HUNTER,
                            i = (0, a.useMemo)(() => ({ isHunterLootBox: r }), [r]),
                            o = (0, a.useMemo)(
                                () => ({
                                    number: n().createElement(
                                        Ee,
                                        {
                                            contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                            args: i,
                                        },
                                        n().createElement(
                                            'div',
                                            { className: 'LootBoxesCount_valueWrapper_a1' },
                                            n().createElement('div', {
                                                className: p()(
                                                    'LootBoxesCount_value_41',
                                                    r && 'LootBoxesCount_value__hunter_57',
                                                ),
                                            }),
                                            u,
                                        ),
                                    ),
                                }),
                                [r, i, u],
                            ),
                            s = (0, a.useMemo)(() => ({ animationDelay: t * fe + 'ms' }), [t]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxesCount_base_37', style: s },
                            0 === u
                                ? xu.inside.currentKeysAmountIs0[e]()
                                : n().createElement(yu, { text: xu.inside.currentKeysAmount[e](), binding: o }),
                        );
                    },
                    Ru = R.strings.event.portalAward,
                    Su = ({
                        isBoxesEnabled: e,
                        isBossLootBox: u,
                        claimReward: t,
                        quantityKeys: r,
                        footerAnimationDelayCount: i,
                    }) => {
                        const o = (0, a.useMemo)(() => ({ isHunterLootBox: !u }), [u]),
                            s = (0, a.useMemo)(() => (u ? te.BOSS : te.HUNTER), [u]),
                            l = p()('ClaimButton_base_62', !u && 'ClaimButton_base__hunter_ea');
                        return n().createElement(
                            'div',
                            { className: l },
                            e &&
                                r > 0 &&
                                n().createElement(
                                    Ee,
                                    {
                                        contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                        args: o,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: 'ClaimButton_runPriceWrapper_76' },
                                        1,
                                        n().createElement('div', { className: 'ClaimButton_priceValue_54' }),
                                    ),
                                ),
                            n().createElement(
                                fu,
                                { size: bu.medium, onClick: t, mixClass: 'ClaimButton_claimBtn_27' },
                                r > 0 ? Ru.claimAndContinueButton() : Ru.claimRewardButton(),
                            ),
                            e &&
                                n().createElement(
                                    'div',
                                    { className: 'ClaimButton_lootBoxCountWrapper_4f' },
                                    n().createElement(Lu, { type: s, lootBoxesCount: r, animationDelayStepsCount: i }),
                                ),
                        );
                    },
                    Mu = R.strings.wt_portals.disabled,
                    Tu = ({ animationDelayStepsCount: e = 1 }) => {
                        const u = (0, a.useMemo)(() => ({ animationDelay: e * fe + 'ms' }), [e]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxDisabledWarning_basePortal_47', style: u },
                            n().createElement(
                                'div',
                                { className: 'LootBoxDisabledWarning_wrapper_ce' },
                                n().createElement('div', { className: 'LootBoxDisabledWarning_hintIcon_8c' }),
                                n().createElement(
                                    'div',
                                    { className: 'LootBoxDisabledWarning_textWrapper_2d' },
                                    Mu.warning(),
                                ),
                            ),
                        );
                    };
                var ku = t(9887),
                    Nu = t.n(ku);
                const Ou = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Pu = (e) => e.includes('_') && ((e) => Ou.includes(e))(e.split('_').at(-1)),
                    Hu = [w.ExtraLarge, w.Large, w.Medium, w.Small, w.ExtraSmall],
                    Iu = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Pu(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = Hu.indexOf(u),
                                    i = (-1 !== r ? Ou.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = i ? e[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : e[n]), t);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, u) => Ou.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    Wu = (e, u = Iu) => {
                        const t = (
                            (e, u = Iu) =>
                            (t) => {
                                const r = x().mediaSize,
                                    i = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return n().createElement(e, i);
                            }
                        )(e, u);
                        return n().memo((u) =>
                            Object.keys(u).some((e) => Pu(e) && void 0 !== u[e])
                                ? n().createElement(t, u)
                                : n().createElement(e, u),
                        );
                    },
                    Gu = {
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
                    Uu = [
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
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                Object.keys(Nu());
                const ju = {
                        XL: { mt: Gu.mt__XL, mr: Gu.mr__XL, mb: Gu.mb__XL, ml: Gu.ml__XL },
                        LG: { mt: Gu.mt__LG, mr: Gu.mr__LG, mb: Gu.mb__LG, ml: Gu.ml__LG },
                        MDp: { mt: Gu.mt__MDp, mr: Gu.mr__MDp, mb: Gu.mb__MDp, ml: Gu.ml__MDp },
                        MD: { mt: Gu.mt__MD, mr: Gu.mr__MD, mb: Gu.mb__MD, ml: Gu.ml__MD },
                        SMp: { mt: Gu.mt__SMp, mr: Gu.mr__SMp, mb: Gu.mb__SMp, ml: Gu.ml__SMp },
                        SM: { mt: Gu.mt__SM, mr: Gu.mr__SM, mb: Gu.mb__SM, ml: Gu.ml__SM },
                        XS: { mt: Gu.mt__XS, mr: Gu.mr__XS, mb: Gu.mb__XS, ml: Gu.ml__XS },
                    },
                    Vu = (Object.keys(ju), ['mt', 'mr', 'mb', 'ml']),
                    Xu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    zu = Wu((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            i = e.m,
                            o = e.mt,
                            s = void 0 === o ? i : o,
                            l = e.mr,
                            c = void 0 === l ? i : l,
                            _ = e.mb,
                            E = void 0 === _ ? i : _,
                            m = e.ml,
                            d = void 0 === m ? i : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            B = e.flexStart,
                            h = e.center,
                            g = e.flexEnd,
                            v = e.spaceBetween,
                            b = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (B ? 'flex-start' : h && 'center') ||
                                      (g && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : w,
                            y = e.alignItems,
                            x = void 0 === y ? (B ? 'flex-start' : h && 'center') || (g && 'flex-end') || void 0 : y,
                            L = e.alignSelf,
                            R = e.wrap,
                            S = e.flexWrap,
                            M = void 0 === S ? (R ? 'wrap' : void 0) : S,
                            T = e.grow,
                            k = e.shrink,
                            N = e.flex,
                            O = void 0 === N ? (T || k ? `${T ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : N,
                            P = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Uu);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: E, ml: d },
                                    u = ((e) =>
                                        Vu.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(ju[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        Vu.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[Xu[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: O,
                                        alignSelf: L,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: M,
                                        justifyContent: f,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, s, c, E, d, P, O, L, C, M, f, x]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return n().createElement('div', $u({ className: p()(Gu.base, ...U, u), style: G }, I), H);
                    });
                var Ku = t(3532),
                    qu = t.n(Ku);
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
                    Zu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                Object.keys(Nu());
                const Ju = Object.keys(qu()),
                    et = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ut = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    tt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    at =
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
                            'heading-H56': et,
                            'heading-H36': et,
                            'heading-H28': ut,
                            'heading-H24': ut,
                            'heading-H24R': ut,
                            'heading-H22': ut,
                            'heading-H20R': ut,
                            'heading-H18': ut,
                            'heading-H15': tt,
                            'heading-H14': tt,
                            'paragraph-P24': ut,
                            'paragraph-P18': ut,
                            'paragraph-P16': ut,
                            'paragraph-P14': tt,
                            'paragraph-P12': tt,
                            'paragraph-P10': tt,
                        }),
                    nt =
                        (Object.keys(at),
                        (e) =>
                            e
                                ? ((e) => Ju.includes(e))(e)
                                    ? { colorClassName: Yu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    rt = Wu((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            i = e.color,
                            o = e.m,
                            s = e.mt,
                            l = void 0 === s ? o : s,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            E = e.mb,
                            m = void 0 === E ? o : E,
                            d = e.ml,
                            A = void 0 === d ? o : d,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Zu);
                        const B = (0, a.useMemo)(() => {
                                const e = nt(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, i]),
                            h = B.computedStyle,
                            g = B.colorClassName;
                        return n().createElement(
                            zu,
                            Qu(
                                {
                                    className: p()(Yu.base, t && Yu[t], g, r),
                                    style: h,
                                    mt: !0 === l ? at[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? at[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? at[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? at[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? n().createElement(yu, Qu({}, D, { text: u })) : u,
                        );
                    }),
                    it = 'GuaranteedProgressBar_highlight_dc',
                    ot = 'GuaranteedProgressBar_sideLight_d3',
                    st = R.strings.wt_portals,
                    lt = ({ attemptsLeft: e, totalAttempts: u, isDisabled: t = !1 }) => {
                        const r = (100 / u) * (u - e + 1),
                            i = 100 === r,
                            o = (0, a.useMemo)(
                                () => ({
                                    binding: {
                                        count: n().createElement(
                                            'div',
                                            { className: p()(it, 'GuaranteedProgressBar_highlight__count_86') },
                                            e,
                                        ),
                                        text: n().createElement(
                                            'div',
                                            { className: p()(it, 'GuaranteedProgressBar_highlight__text_7d') },
                                            st.guaranteedProgressBar.nextLaunch(),
                                        ),
                                    },
                                }),
                                [e],
                            ),
                            s = (0, a.useMemo)(
                                () =>
                                    t
                                        ? st.notGuaranteed.warning()
                                        : i
                                          ? st.guaranteedProgressBar.oneLeft()
                                          : st.guaranteedProgressBar.left(),
                                [t, i],
                            );
                        return n().createElement(
                            'div',
                            { className: 'GuaranteedProgressBar_base_d1' },
                            n().createElement(
                                'div',
                                { className: 'GuaranteedProgressBar_textContainer_14' },
                                n().createElement(rt, { text: s, format: o }),
                                n().createElement(
                                    Ee,
                                    {
                                        contentId:
                                            R.views.white_tiger.lobby.tooltips.GuaranteedRewardTooltipView('resId'),
                                    },
                                    n().createElement('div', { className: 'GuaranteedProgressBar_attentionIcon_e7' }),
                                ),
                            ),
                            !t &&
                                n().createElement(
                                    'div',
                                    { className: 'GuaranteedProgressBar_progressContainer_a7' },
                                    n().createElement(
                                        'div',
                                        { className: 'GuaranteedProgressBar_progress_ca' },
                                        n().createElement('div', {
                                            className: 'GuaranteedProgressBar_mainLight_99',
                                            style: { transform: `translateX(-${100 - r}%)` },
                                        }),
                                    ),
                                    i &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', {
                                                className: p()(ot, 'GuaranteedProgressBar_sideLight__left_1b'),
                                            }),
                                            n().createElement('div', {
                                                className: p()(ot, 'GuaranteedProgressBar_sideLight__right_8c'),
                                            }),
                                        ),
                                ),
                        );
                    },
                    ct = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    _t = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                let mt;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(mt || (mt = {}));
                const dt = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            r = void 0 !== t && t,
                            i = e.autofocus,
                            o = void 0 !== i && i,
                            s = e.soundHover,
                            l = void 0 === s ? 'highlight' : s,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            E = e.size,
                            m = void 0 === E ? mt.NORMAL : E,
                            d = e.classNames,
                            A = e.onClick,
                            F = e.onMouseEnter,
                            D = e.onMouseLeave,
                            C = e.onMouseDown,
                            B = e.onMouseUp,
                            h = e.onFocus,
                            g = e.onBlur,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, _t);
                        const b = (0, a.useState)(!1),
                            w = b[0],
                            f = b[1],
                            y = (0, a.useState)(!1),
                            x = y[0],
                            L = y[1],
                            R = (0, a.useState)(o),
                            S = R[0],
                            M = R[1],
                            T = (0, a.useRef)(null),
                            k = (0, a.useCallback)(() => {
                                T.current && (T.current.focus(), M(!0));
                            }, []),
                            N = (0, a.useCallback)(
                                (e) => {
                                    S && null !== T.current && !T.current.contains(e.target) && M(!1);
                                },
                                [S],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                            (0, a.useEffect)(() => {
                                M(o);
                            }, [o]));
                        const O = (0, a.useCallback)(
                                (e) => {
                                    A && A(e);
                                },
                                [A],
                            ),
                            P = (0, a.useCallback)(
                                (e) => {
                                    (f(!0), C && C(e), _ && Le(_), o && k());
                                },
                                [o, C, k, _],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), B && B(e));
                                },
                                [B],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    (F && F(e), l && Le(l), L(!0));
                                },
                                [F, l],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), L(!1), D && D(e));
                                },
                                [D],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    (M(!0), h && h(e));
                                },
                                [h],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    (M(!1), g && g(e));
                                },
                                [g],
                            ),
                            $ = p()(
                                ct.base,
                                r && ct.base__visibleLabel,
                                w && ct.base__mouseDown,
                                x && ct.base__hovered,
                                S && ct.base__focused,
                                null == d ? void 0 : d.base,
                            ),
                            j = p()(ct.icon, ct[`icon__${m}`], null == d ? void 0 : d.icon),
                            V = p()(ct.label, null == d ? void 0 : d.label);
                        return n().createElement(
                            'div',
                            Et(
                                {
                                    ref: T,
                                    className: $,
                                    onClick: O,
                                    onMouseEnter: I,
                                    onMouseLeave: W,
                                    onMouseDown: P,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: U,
                                },
                                v,
                            ),
                            n().createElement('div', { className: j }),
                            n().createElement('div', { className: V }, u),
                        );
                    }),
                    At = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ft = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Dt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let Ct;
                !(function (e) {
                    ((e.Primary = 'primary'), (e.Secondary = 'secondary'));
                })(Ct || (Ct = {}));
                const Bt = ({
                    level: e,
                    type: u,
                    name: t,
                    isLarge: r,
                    isSingle: i,
                    animationDelayStepsCount: o,
                    nation: s,
                    color: l = Ct.Primary,
                }) => {
                    const c = (0, a.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${I(u)}_elite')`,
                            }),
                            [u],
                        ),
                        _ = p()(
                            'Vehicle_base_95',
                            l === Ct.Primary ? 'Vehicle_base__primary_47' : 'Vehicle_base__secondary_0e',
                            r && 'Vehicle_base__large_e9',
                            i && 'Vehicle_base__single_eb',
                            void 0 !== o && 'Vehicle_base__hasAnimation_56',
                        ),
                        E = (0, a.useMemo)(() => (void 0 !== o ? { animationDelay: o * fe + 'ms' } : void 0), [o]);
                    return n().createElement(
                        'span',
                        { className: _, style: E },
                        s &&
                            n().createElement('span', {
                                className: 'Vehicle_flag_f9',
                                style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40.${s})` },
                            }),
                        n().createElement(
                            'span',
                            { className: 'Vehicle_level_df' },
                            ((m = e),
                            Dt
                                ? `${m}`
                                : (function (e) {
                                      let u = '';
                                      for (let t = Ft.length - 1; t >= 0; t--)
                                          for (; e >= Ft[t];) ((u += At[t]), (e -= Ft[t]));
                                      return u;
                                  })(m)),
                        ),
                        n().createElement('span', { className: 'Vehicle_type_11', style: c }),
                        n().createElement('span', { className: 'Vehicle_name_63' }, t),
                    );
                    var m;
                };
                let ht, gt, pt;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(ht || (ht = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(gt || (gt = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(pt || (pt = {})));
                const vt = ({ count: e, quantity: u, isCurrency: t, isMultiple: a }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            t && n().createElement(se, { value: Number(e) }),
                            a && !t && u,
                        ),
                    bt = {
                        currency: 'Currency_currency_ef',
                        currency__credits: 'Currency_currency__credits_e2',
                        currency__gold: 'Currency_currency__gold_41',
                        currency__crystal: 'Currency_currency__crystal_90',
                        currency__additionalReward: 'Currency_currency__additionalReward_55',
                        currency__singleReward: 'Currency_currency__singleReward_8b',
                        currency__multiply: 'Currency_currency__multiply_ee',
                        count: 'Currency_count_92',
                        count__confirmReward: 'Currency_count__confirmReward_e5',
                        count__singleReward: 'Currency_count__singleReward_62',
                        count__additionalReward: 'Currency_count__additionalReward_e7',
                        count__multiply: 'Currency_count__multiply_22',
                    },
                    wt = ({
                        count: e,
                        currency: u,
                        isConfirmReward: t = !1,
                        isSingleReward: a = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: i = !1,
                    }) => {
                        const o = u in gt,
                            s = e > 1,
                            l = p()(
                                bt.count,
                                t && bt.count__confirmReward,
                                a && bt.count__singleReward,
                                r && bt.count__additionalReward,
                                i && bt.count__multiply,
                            ),
                            c = p()(
                                bt.currency,
                                bt[`currency__${u}`],
                                r && bt.currency__additionalReward,
                                a && bt.currency__singleReward,
                                i && bt.currency__multiply,
                            ),
                            _ =
                                ((E = R.strings.event.award.value()),
                                (m = { count: e }),
                                E.replace(/\{\w+\}/g, (e) => String(m[e.slice(1, -1)])));
                        var E, m;
                        return n().createElement(
                            'span',
                            { className: o ? c : l },
                            n().createElement(vt, { isCurrency: o, count: e, quantity: _, isMultiple: s }),
                        );
                    },
                    ft = () => {},
                    yt = (e, u) => {
                        const t = (0, a.useState)(e[u]),
                            n = t[0],
                            r = t[1],
                            i = (0, a.useRef)(ft),
                            o = (0, a.useCallback)(() => {
                                n.stop ||
                                    (i.current(),
                                    (i.current = ((u, t) => {
                                        let a;
                                        const i = setTimeout(() => {
                                            a = void r(e[n.nextState]);
                                        }, t);
                                        return () => {
                                            ('function' == typeof a && a(), clearTimeout(i));
                                        };
                                    })(0, n.timeout)));
                            }, [n, e]);
                        return (
                            (0, a.useEffect)(() => (o(), () => i.current()), [o]),
                            {
                                step: n,
                                setStep: (0, a.useCallback)(
                                    (u) => {
                                        r(e[u]);
                                    },
                                    [e],
                                ),
                                next: o,
                            }
                        );
                    },
                    xt = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                const Rt = () => {},
                    St = (0, a.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = void 0 === o ? Rt : o,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            _ = e.initialFrameIndex,
                            E = void 0 === _ ? 0 : _,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, xt);
                        const d = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = d.current;
                                if (!e) return;
                                const a = e.getContext('2d'),
                                    n = ((e, u) => {
                                        const t = [];
                                        for (let a = 0; a <= e; a++) {
                                            const e = new Image();
                                            ((e.src = u(a)), t.push(e));
                                        }
                                        return t;
                                    })(i, r),
                                    o = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return ((t += 1), t > e && (t = 0), u);
                                        };
                                    })(i - 1, E),
                                    l = setInterval(() => {
                                        const r = o();
                                        a.clearRect(0, 0, e.width, e.height);
                                        const i = n[r];
                                        (a.drawImage(i, 0, 0, u, t), s(r, i));
                                    }, c);
                                return () => clearInterval(l);
                            }, [i, c, r, t, E, s, u]),
                            n().createElement('canvas', Lt({}, m, { width: u, height: t, ref: d }))
                        );
                    }),
                    Mt = {
                        base: 'Convertation_base_24',
                        bumpStars: 'Convertation_bumpStars_ba',
                        bumpParticles: 'Convertation_bumpParticles_5f',
                        particlesCanvas: 'Convertation_particlesCanvas_f5',
                        bump: 'Convertation_bump_f7',
                        bumpRays: 'Convertation_bumpRays_42',
                        twirlyCanvas: 'Convertation_twirlyCanvas_9a',
                        base__start: 'Convertation_base__start_e8',
                        base__bump: 'Convertation_base__bump_d8',
                        base__end: 'Convertation_base__end_69',
                        reward: 'Convertation_reward_49',
                        rewardFrom: 'Convertation_rewardFrom_6c',
                        rewardTo: 'Convertation_rewardTo_62',
                        star: 'Convertation_star_7b',
                        star__one: 'Convertation_star__one_ae',
                        star__second: 'Convertation_star__second_9f',
                        star__third: 'Convertation_star__third_a2',
                    },
                    Tt = ['children'],
                    kt = ['children'];
                function Nt(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                    return n;
                }
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Pt = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    Ht = { width: 250, height: 250 },
                    It = () => {},
                    Wt = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    Gt = (e) => ({ width: `${e.width}rem`, height: `${e.height}rem` }),
                    Ut = (0, a.memo)(
                        ({
                            children: [e, u],
                            className: t,
                            classNames: r = {},
                            onAnimate: i = It,
                            animationSettings: o = Pt,
                            getSrcByFrameTwirly: s = Wt,
                            size: l = Ht,
                        }) => {
                            const c = yt(o, 'idle').step.state;
                            return (
                                (0, a.useEffect)(() => {
                                    i(c);
                                }, [c, i]),
                                (0, a.useEffect)(() => {
                                    'start' === c && Le('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [c]),
                                n().createElement(
                                    'div',
                                    { className: p()(Mt.base, Mt[`base__${c}`], t), style: Gt(l) },
                                    n().createElement(
                                        'div',
                                        { className: p()(Mt.bumpStars, r.bumpStars) },
                                        n().createElement('div', { className: p()(Mt.star, Mt.star__one, r.star) }),
                                        n().createElement('div', { className: p()(Mt.star, Mt.star__second, r.star) }),
                                        n().createElement('div', { className: p()(Mt.star, Mt.star__third, r.star) }),
                                    ),
                                    n().createElement('div', { className: p()(Mt.bump, r.bump) }),
                                    n().createElement('div', { className: p()(Mt.bumpRays, r.bumpRays) }),
                                    n().createElement(
                                        'div',
                                        { className: p()(Mt.reward, r.reward) },
                                        ('idle' === c || 'start' === c) &&
                                            n().createElement(
                                                'div',
                                                { className: p()(Mt.rewardFrom, r.rewardFrom) },
                                                e,
                                            ),
                                        ('end' === c || 'bump' === c) &&
                                            n().createElement('div', { className: p()(Mt.rewardTo, r.rewardTo) }, u),
                                    ),
                                    ('start' === c || 'bump' === c) &&
                                        n().createElement(
                                            St,
                                            Ot({}, l, {
                                                className: p()(Mt.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    n().createElement('div', { className: p()(Mt.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (e, u) => {
                            e.children;
                            const t = Nt(e, Tt),
                                a = (u.children, Nt(u, kt));
                            return (
                                (n = t),
                                (r = a),
                                Object.keys(n).length === Object.keys(r).length &&
                                    Object.keys(n).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && n[e] === r[e],
                                    )
                            );
                            var n, r;
                        },
                    ),
                    $t = {
                        base: 'Compensation_base_8b',
                        tank: 'Compensation_tank_d8',
                        base__single: 'Compensation_base__single_e1',
                        base__multiply: 'Compensation_base__multiply_2e',
                        gold: 'Compensation_gold_64',
                        base__additionalReward: 'Compensation_base__additionalReward_ba',
                        particlesCanvas: 'Compensation_particlesCanvas_59',
                        convertIcon: 'Compensation_convertIcon_03',
                        vehicleName: 'Compensation_vehicleName_af',
                        value: 'Compensation_value_b8',
                        blue: 'Compensation_blue_86',
                    },
                    jt = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_particles.items_idle_${e.toString().padStart(5, '0')}`,
                    Vt = Object.assign({}, Pt, { idle: Object.assign({}, Pt.idle, { timeout: 1800 }) });
                let Xt;
                !(function (e) {
                    ((e.Single = 'single'), (e.Multiply = 'multiply'), (e.Base = 'base'));
                })(Xt || (Xt = {}));
                const zt = { width: 100, height: 100 },
                    Kt = { width: 450, height: 450 },
                    qt = { width: 500, height: 500 },
                    Yt = (e) => (e.extraSmall || e.small ? Kt : qt),
                    Zt = ({ isSingle: e, isMultiply: u, value: t, vehicleName: r, isAdditionalReward: i }) => {
                        const o = (0, a.useContext)(F),
                            s = (0, a.useMemo)(() => (e ? Xt.Single : u ? Xt.Multiply : Xt.Base), [u, e]),
                            l = p()($t.base, $t[`base__${s}`], i && $t.base__additionalReward);
                        return n().createElement(
                            'div',
                            { className: l },
                            n().createElement(St, {
                                width: u ? zt.width : Yt(o).width,
                                height: u ? zt.height : Yt(o).height,
                                className: p()($t.particlesCanvas, $t.blue),
                                frameCount: 60,
                                getSrcByFrame: jt,
                            }),
                            n().createElement(
                                Ut,
                                { size: u ? zt : Yt(o), animationSettings: Vt, className: $t.nyAnimation },
                                [
                                    n().createElement(
                                        'div',
                                        { key: 1, className: $t.tank },
                                        n().createElement('div', { className: $t.convertIcon }),
                                        n().createElement('div', { className: $t.vehicleName }, r),
                                    ),
                                    n().createElement(
                                        'div',
                                        { key: 2, className: $t.gold },
                                        n().createElement('div', { className: $t.convertIcon }),
                                        n().createElement(
                                            'div',
                                            { className: $t.value },
                                            n().createElement(vt, { isCurrency: !0, count: t, isMultiple: u }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    Qt = {
                        base: 'Reward_base_7f',
                        base__singleReward: 'Reward_base__singleReward_8f',
                        base__additional: 'Reward_base__additional_3e',
                        base__vehicleReward: 'Reward_base__vehicleReward_99',
                        base__multiply: 'Reward_base__multiply_a9',
                        rewardImage: 'Reward_rewardImage_8a',
                        compensation: 'Reward_compensation_d4',
                        tankSpecName: 'Reward_tankSpecName_27',
                        tankName: 'Reward_tankName_1d',
                        preview: 'Reward_preview_73',
                        description: 'Reward_description_e2',
                        description__single: 'Reward_description__single_67',
                        vehicle: 'Reward_vehicle_d7',
                        vehicle__single: 'Reward_vehicle__single_bf',
                    };
                let Jt, ea;
                (!(function (e) {
                    ((e.Big = 'big'), (e.Large = 's600x450'));
                })(Jt || (Jt = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Additional = 'additional'), (e.Multiply = 'multiply'));
                    })(ea || (ea = {})));
                const ua = R.views.common.tooltip_window,
                    ta = (e, u) => ({ backgroundImage: `url('R.images.gui.maps.icons.quests.bonuses.${u}.${e}')` }),
                    aa = (e) => ({ backgroundImage: `url('${e}')` }),
                    na = ['credits', 'gold', 'crystal', 'freeXP'],
                    ra = R.strings.event.awardView.previewBtnText(),
                    ia = (0, a.memo)(
                        ({
                            tooltipId: e,
                            name: u,
                            label: t,
                            value: r,
                            icon: i,
                            specName: o,
                            specialId: s,
                            compensationSource: l = '',
                            isCompensation: c = !1,
                            isConfirmReward: _ = !1,
                            isSingleReward: E = !1,
                            isMultiplyReward: m = !1,
                            theme: d = ea.Default,
                            size: A,
                        }) => {
                            const F = ee('model'),
                                D = F.vehicle,
                                C = F.onPreview,
                                B = na.includes(u),
                                h = 'premium_plus' === u,
                                g = 'vehicles' === u,
                                v = d === ea.Additional,
                                b = g || ('customizations' === u && i && i.includes('style3d')),
                                w = (g || 'gold' === u) && c,
                                f = t && d === ea.Default && !B && !g,
                                y = d === ea.Default ? Jt.Large : Jt.Big,
                                x = (0, a.useMemo)(() => {
                                    switch (u) {
                                        case 'premium_plus':
                                            return ta(`${u}_${r}`, y);
                                        case 'crewBooks':
                                            return ((e, u) => ({
                                                backgroundImage: `url('R.images.gui.maps.icons.crewBooks.books.${u}.${e}')`,
                                            }))(String(i), y);
                                        case 'goodies':
                                            return ta(String(i), y);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return d === ea.Default
                                                ? ta(`collection.${i}`, y)
                                                : ta(s ? 'style_3d' : `${i}`, y);
                                        case 'gold':
                                            return c ? aa('') : ta(u, y);
                                        case 'vehicles':
                                            return o
                                                ? aa(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(I(o)))
                                                : D.specName
                                                  ? aa(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(I(D.specName)))
                                                  : ta('vehicles', y);
                                        default:
                                            return ta(u, y);
                                    }
                                }, [s, u, r, y, i, d, c, D, o]),
                                L = (0, a.useMemo)(() => ({ value: r, tooltipId: e }), [e, r]),
                                S = (0, a.useMemo)(
                                    () => ua.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                M = (0, a.useCallback)(() => {
                                    (g && D.intCD && C({ intCD: D.intCD }), s && C({ intCD: s }));
                                }, [g, D, C, s]),
                                T = p()(Qt.rewardImage, w && Qt.rewardImage__compensation),
                                k = p()(
                                    Qt.base,
                                    m && Qt.base__multiply,
                                    _ && Qt.base__confirmReward,
                                    E && Qt.base__singleReward,
                                    g && Qt.base__vehicleReward,
                                    Qt[`base__${A}`],
                                    d !== ea.Default && Qt[`base__${d}`],
                                );
                            return n().createElement(
                                Ee,
                                { ignoreShowDelay: !0, contentId: S, args: L },
                                n().createElement(
                                    'div',
                                    { className: k },
                                    w
                                        ? n().createElement(Zt, {
                                              isSingle: E,
                                              isMultiply: m,
                                              value: r,
                                              vehicleName: l,
                                              isAdditionalReward: v,
                                          })
                                        : n().createElement(
                                              'div',
                                              { className: T, style: x },
                                              b &&
                                                  !w &&
                                                  !m &&
                                                  !g &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Qt.preview },
                                                      n().createElement(dt, {
                                                          onClick: M,
                                                          label: ra,
                                                          isVisibleLabel: !0,
                                                      }),
                                                  ),
                                          ),
                                    w || !g || D.specName
                                        ? null
                                        : n().createElement('div', { className: Qt.tankName }, t),
                                    !h &&
                                        !w &&
                                        n().createElement(wt, {
                                            count: r,
                                            currency: u,
                                            isConfirmReward: _,
                                            isSingleReward: E,
                                            isAdditionalReward: v,
                                            isMultiplyReward: m,
                                        }),
                                    f &&
                                        n().createElement(
                                            'div',
                                            { className: p()(Qt.description, E && Qt.description__single) },
                                            t,
                                        ),
                                    g &&
                                        !m &&
                                        (v
                                            ? n().createElement('span', { className: Qt.tankSpecName }, t)
                                            : n().createElement(
                                                  'span',
                                                  { className: p()(Qt.vehicle, E && Qt.vehicle__single) },
                                                  n().createElement(Bt, {
                                                      level: D.level,
                                                      type: D.type,
                                                      name: D.name,
                                                      isSingle: E,
                                                  }),
                                              )),
                                ),
                            );
                        },
                    );
                var oa = t(5659);
                const sa = { base: 'AnimationItem_base_cd', entered: 'AnimationItem_entered_01' },
                    la = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
                function ca() {
                    return (
                        (ca =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ca.apply(this, arguments)
                    );
                }
                const _a = (e) => {
                    let u = e.index,
                        t = e.isSingleReward,
                        r = void 0 !== t && t,
                        i = e.theme,
                        o = void 0 === i ? ea.Default : i,
                        s = e.delay,
                        l = e.onEntered,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, la);
                    const _ = (0, a.useCallback)(() => {
                        (Le('ev_white_tiger_hangar_lootbox_item'), l && l());
                    }, [l]);
                    return n().createElement(
                        oa.uT,
                        { in: !0, appear: !0, timeout: ru(u, 150, s), onEntered: _ },
                        (e) => {
                            const u = p()(sa.base, sa[e]);
                            return n().createElement(
                                'div',
                                { className: u },
                                n().createElement(ia, ca({}, c, { isSingleReward: r, theme: o })),
                            );
                        },
                    );
                };
                function Ea() {
                    return (
                        (Ea =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ea.apply(this, arguments)
                    );
                }
                const ma = { animationDelay: '1000ms' },
                    da = ({ rewards: e, additionalRewards: u, openedBoxesCount: t }) => {
                        const r = (0, a.useContext)(fa),
                            i = 1 === e.items.length,
                            o = u.items.length > 0;
                        return n().createElement(
                            'div',
                            { className: 'RewardList_base_cf' },
                            n().createElement(
                                'div',
                                { className: 'RewardList_mainRewards_3a' },
                                e.items.map(({ value: u }, a) => {
                                    const s = !o && a === e.items.length - 1 && r ? r : void 0;
                                    return n().createElement(
                                        _a,
                                        Ea({ key: `${t}_${a}_${u.tooltipId}` }, u, {
                                            index: a,
                                            isSingleReward: i,
                                            onEntered: s,
                                            delay: 700,
                                        }),
                                    );
                                }),
                            ),
                            o &&
                                n().createElement(
                                    'div',
                                    { className: 'RewardList_additional_32', style: ma },
                                    n().createElement(
                                        'span',
                                        { className: 'RewardList_additionalTitle_d7' },
                                        R.strings.event.portalAward.additionalTitle(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'RewardList_additionalWrapper_77' },
                                        u.items.map(({ value: e }, a) => {
                                            const i = a === u.items.length - 1 && r ? r : void 0;
                                            return n().createElement(
                                                _a,
                                                Ea({ key: `${t}_${a}_${e.tooltipId}` }, e, {
                                                    index: a,
                                                    theme: ea.Additional,
                                                    onEntered: i,
                                                    delay: 1e3,
                                                }),
                                            );
                                        }),
                                    ),
                                ),
                        );
                    },
                    Aa = {
                        base: 'AttemptsLeft_base_15',
                        show: 'AttemptsLeft_show_fa',
                        iconContainer: 'AttemptsLeft_iconContainer_02',
                        highlight: 'AttemptsLeft_highlight_32',
                        'translate-down': 'AttemptsLeft_translate-down_fe',
                        'translate-up': 'AttemptsLeft_translate-up_11',
                    },
                    Fa = R.strings.event.WtEventPortals,
                    Da = R.strings.event.portalAward,
                    Ca = ({
                        leftAttemptsCount: e,
                        animationDelayStepsCount: u = 0,
                        displayText: t = Fa.boss.left(),
                        isTextChangable: r = !0,
                        isBossLootBox: i,
                    }) => {
                        const o = r && 1 === e,
                            s = (0, a.useMemo)(
                                () => ({
                                    attemptsCount: n().createElement('div', { className: Aa.highlight }, e),
                                    leftAttemptsCount: n().createElement('div', { className: Aa.highlight }, e),
                                }),
                                [e],
                            ),
                            l = (0, a.useMemo)(() => ({ animationDelay: u * fe + 'ms' }), [u]);
                        return void 0 === i
                            ? n().createElement(
                                  Ee,
                                  {
                                      contentId:
                                          R.views.white_tiger.lobby.tooltips.GuaranteedRewardTooltipView('resId'),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: Aa.base },
                                      o
                                          ? n().createElement('div', { className: Aa.attemptsLeft }, Fa.boss.oneLeft())
                                          : n().createElement(yu, { text: t, binding: s, classMix: Aa.attemptsLeft }),
                                      n().createElement('div', { className: Aa.iconContainer }),
                                  ),
                              )
                            : n().createElement(
                                  ze,
                                  {
                                      header: Da.reRollTooltipHeader(),
                                      body: i ? Da.reRollTooltipBossBody() : Da.reRollTooltipHunterBody(),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: Aa.base },
                                      o
                                          ? n().createElement('div', { className: Aa.attemptsLeft }, Fa.boss.oneLeft())
                                          : n().createElement(yu, { text: t, binding: s, classMix: Aa.attemptsLeft }),
                                      n().createElement('div', { className: Aa.iconContainer }),
                                  ),
                              );
                    },
                    Ba = R.strings.event.portalAward,
                    ha = ({
                        rerollPrice: e,
                        isRerollAffordable: u,
                        isBossLootBox: t,
                        handleReRoll: a,
                        rerollCount: r,
                        currencyTooltipType: i,
                        attemptsLeftAnimationDelayCount: o,
                    }) => {
                        const s = oe(e, t ? 'gold' : 'integral'),
                            l = R.strings.tooltips.awardItem[i],
                            c = { header: l ? l.header() : ' ', body: l ? l.body() : ' ' },
                            _ = p()(
                                'RerollButton_base_86',
                                !t && 'RerollButton_base__hunter_98',
                                !u && 'RerollButton_rerollNotAffordable_74',
                            );
                        return n().createElement(
                            'div',
                            { className: _ },
                            n().createElement(
                                ze,
                                c,
                                n().createElement(
                                    'div',
                                    { className: 'RerollButton_rerollWrapper_0e' },
                                    s,
                                    n().createElement('div', { className: 'RerollButton_runPrice_14' }),
                                ),
                            ),
                            n().createElement(
                                fu,
                                { size: bu.medium, type: vu.main, onClick: a, disabled: !t || !u },
                                Ba.reRollButton(),
                            ),
                            n().createElement(
                                'div',
                                { className: 'RerollButton_attemptsLeftWrapper_e8' },
                                n().createElement(Ca, {
                                    leftAttemptsCount: r,
                                    displayText: Ba.reRollInformation(),
                                    animationDelayStepsCount: o,
                                    isTextChangable: !1,
                                    isBossLootBox: t,
                                }),
                            ),
                        );
                    },
                    ga = R.strings.event.WtEventPortals.inside.firstLaunch,
                    pa = R.strings.tooltips.awardItem.gold,
                    va = ({ value: e, classMix: u }) => {
                        const t = { header: pa.header(), body: pa.body() },
                            a = { header: ga.tooltip.header(), body: ga.tooltip.body() };
                        return n().createElement(
                            'div',
                            { className: p()('FirstLaunchReward_base_12', u) },
                            n().createElement(rt, { text: R.strings.event.portalAward.firstLaunchRewardTitle() }),
                            n().createElement(
                                ze,
                                t,
                                n().createElement(
                                    'div',
                                    { className: 'FirstLaunchReward_gold_8c' },
                                    n().createElement(rt, { text: oe(e, 'gold') }),
                                    n().createElement('div', { className: 'FirstLaunchReward_goldIcon_46' }),
                                ),
                            ),
                            n().createElement(
                                ze,
                                a,
                                n().createElement('div', { className: 'FirstLaunchReward_infoIcon_3e' }),
                            ),
                        );
                    },
                    ba = {
                        base: 'Content_base_c6',
                        firstLaunchReward: 'Content_firstLaunchReward_50',
                        wrapper: 'Content_wrapper_2e',
                        rerollContentWrapper: 'Content_rerollContentWrapper_e0',
                        controls: 'Content_controls_60',
                        show: 'Content_show_cf',
                        controls_warning: 'Content_controls_warning_8a',
                        btnWrapper: 'Content_btnWrapper_ab',
                        btnHolder: 'Content_btnHolder_17',
                        slideUp: 'Content_slideUp_84',
                        fadeOut: 'Content_fadeOut_40',
                        fadeIn: 'Content_fadeIn_3e',
                        fadeInScale: 'Content_fadeInScale_e6',
                        fadeInWithScale: 'Content_fadeInWithScale_6e',
                        scale: 'Content_scale_cf',
                        raysAppearance: 'Content_raysAppearance_c2',
                        rotate: 'Content_rotate_0f',
                        fadeTop: 'Content_fadeTop_ea',
                        fadeBot: 'Content_fadeBot_60',
                        'translate-down': 'Content_translate-down_41',
                        'translate-up': 'Content_translate-up_9d',
                    },
                    wa = ({
                        isBoxesEnabled: e,
                        isBossLootBox: u,
                        quantityKeys: t,
                        rewards: r,
                        additionalRewards: i,
                        onReRoll: o,
                        onClaimReward: s,
                        totalAttempts: l,
                        rerollCount: c,
                        rerollPrice: _,
                        leftAttemptsCount: E,
                        isControlsVisible: m,
                        footerAnimationDelayCount: d,
                        openedBoxesCount: A,
                        vehicle: D,
                        onPreview: C,
                        isRerollAffordable: B,
                        isGuaranteedIgnored: h,
                        currencyTooltipType: g,
                        firstLaunchReward: v,
                        isFirstLaunch: b,
                    }) => {
                        const w = (0, a.useContext)(F),
                            f = w.width,
                            y = w.height,
                            x = (0, a.useCallback)(() => {
                                s();
                            }, [s]),
                            L = (0, a.useCallback)(() => {
                                D.intCD && C({ intCD: D.intCD });
                            }, [D, C]),
                            S = (0, a.useCallback)(() => {
                                o();
                            }, [o]),
                            M = (() => {
                                const e = (() => {
                                        const e = (0, a.useContext)(F),
                                            u = e.small,
                                            t = e.medium,
                                            n = e.large,
                                            r = e.extraLarge,
                                            i = r || n,
                                            o = i || t;
                                        return {
                                            isMediaSmall: o || u,
                                            isMediaMedium: o,
                                            isMediaLarge: i,
                                            isMediaExtraLarge: r,
                                        };
                                    })(),
                                    u = e.isMediaSmall,
                                    t = e.isMediaMedium,
                                    n = e.isMediaLarge,
                                    r = e.isMediaExtraLarge;
                                return p()(
                                    u && 'mediaSmall',
                                    t && 'mediaMedium',
                                    n && 'mediaLarge',
                                    r && 'mediaExtraLarge',
                                );
                            })(),
                            T = (0, a.useMemo)(
                                () =>
                                    p()(
                                        ba.base,
                                        M,
                                        !u && ba.base__hunter,
                                        !e && ba.controls_warning,
                                        !B && ba.rerollNotAffordable,
                                    ),
                                [M, u, e, B],
                            ),
                            k = (0, a.useMemo)(() => ({ animationDelay: d * fe + 'ms' }), [d]),
                            N = d - 1,
                            O = (0, a.useMemo)(() => ({ marginBottom: 0.23 * ou(f, y).height }), [f, y]),
                            P = (0, a.useMemo)(() => r.items.some((e) => 'vehicles' === e.value.name), [r.items]),
                            H = (0, a.useMemo)(() => r.items.some((e) => e.value.isCompensation), [r.items]),
                            I = (0, a.useMemo)(() => c > 0 && e && !H && !P, [c, e, H, P]);
                        return n().createElement(
                            'div',
                            { className: T },
                            b && n().createElement(va, { value: v, classMix: ba.firstLaunchReward }),
                            n().createElement(
                                'div',
                                { style: O },
                                n().createElement(da, { rewards: r, additionalRewards: i, openedBoxesCount: A }),
                            ),
                            n().createElement(
                                'div',
                                { className: ba.wrapper },
                                m &&
                                    n().createElement(
                                        'div',
                                        { className: ba.controls },
                                        n().createElement(
                                            'div',
                                            { className: ba.rerollContentWrapper },
                                            u &&
                                                e &&
                                                !h &&
                                                n().createElement(lt, { attemptsLeft: E, totalAttempts: l }),
                                            n().createElement(
                                                'div',
                                                { className: ba.btnWrapper, style: k },
                                                I &&
                                                    n().createElement(ha, {
                                                        attemptsLeftAnimationDelayCount: N,
                                                        currencyTooltipType: g,
                                                        handleReRoll: S,
                                                        isBossLootBox: u,
                                                        isRerollAffordable: B,
                                                        rerollCount: c,
                                                        rerollPrice: _,
                                                    }),
                                                P &&
                                                    !H &&
                                                    n().createElement(
                                                        'div',
                                                        { className: ba.btnHolder },
                                                        n().createElement(
                                                            fu,
                                                            { size: bu.medium, type: vu.main, onClick: L },
                                                            R.strings.event.portalAward.takeAndOpenGarageButton(),
                                                        ),
                                                    ),
                                                n().createElement(Su, {
                                                    isBoxesEnabled: e,
                                                    isBossLootBox: u,
                                                    claimReward: x,
                                                    quantityKeys: t,
                                                    footerAnimationDelayCount: d,
                                                }),
                                            ),
                                        ),
                                    ),
                                !e && !P && n().createElement(Tu, null),
                            ),
                        );
                    },
                    fa = (0, a.createContext)(null),
                    ya = R.strings.event.portalAward,
                    xa = () => {
                        const e = ee('model'),
                            u = e.isBossLootBox,
                            t = e.isBoxesEnabled,
                            r = e.rewards,
                            i = e.additionalRewards,
                            o = e.onBackToPortal,
                            s = e.onClose,
                            l = e.onBuy,
                            c = e.onReRoll,
                            _ = e.rerollCount,
                            E = e.rerollPrice,
                            m = e.onClaimReward,
                            d = e.availableLootBoxesPurchase,
                            A = e.guaranteedAward,
                            F = e.openedBoxesCount,
                            D = e.vehicle,
                            C = e.onPreview,
                            B = e.isRerollAffordable,
                            h = e.currencyTooltipType,
                            g = e.isLaunchAnimated,
                            p = e.onAnimationSettingChange,
                            v = e.currentCrystals,
                            b = e.currentGold,
                            w = e.currentCredits,
                            f = e.currentFreeExperience,
                            y = e.isWalletAvailable,
                            x = e.firstLaunchReward,
                            L = e.isFirstLaunch,
                            R = ee('model.portalAvailability'),
                            S = (0, a.useMemo)(() => `${_}${R.lootBoxesCount}`, [_, R.lootBoxesCount]),
                            M = (0, a.useState)(!1),
                            T = M[0],
                            k = M[1];
                        (0, a.useEffect)(() => k(!1), [S]);
                        const N = (0, a.useCallback)(() => p(), [p]),
                            O = (0, a.useCallback)(() => k(!0), []),
                            P = (0, a.useCallback)(() => {
                                s();
                            }, [s]);
                        return n().createElement(
                            fa.Provider,
                            { value: O },
                            n().createElement(
                                gu,
                                {
                                    title: ya.title(),
                                    portalType: u ? ue.BOSS : ue.HUNTER,
                                    isBoxesEnabled: t,
                                    onBuy: l,
                                    onBackToPortal: o,
                                    onClose: P,
                                    availableLootBoxesPurchase: d,
                                    showFinalAnimation: T,
                                    lootBoxesAnimationDelayCount: 3,
                                    openedBoxesCount: F,
                                    isAnimated: g,
                                    onAnimationSettingClick: N,
                                    launchId: S,
                                    showCurrencyBalance: !0,
                                    currentCrystals: v,
                                    currentGold: b,
                                    currentCredits: w,
                                    currentFreeXP: f,
                                    isWalletAvailable: y,
                                },
                                n().createElement(wa, {
                                    isBoxesEnabled: t,
                                    isBossLootBox: u,
                                    quantityKeys: R.lootBoxesCount,
                                    rewards: r,
                                    additionalRewards: i,
                                    onReRoll: c,
                                    onClaimReward: m,
                                    rerollCount: _,
                                    rerollPrice: E,
                                    leftAttemptsCount: A.leftAttemptsCount,
                                    totalAttempts: A.guaranteedTankAttemptCount,
                                    isControlsVisible: T && t,
                                    footerAnimationDelayCount: 3,
                                    openedBoxesCount: F,
                                    vehicle: D,
                                    onPreview: C,
                                    isRerollAffordable: B,
                                    isGuaranteedIgnored: A.isIgnored,
                                    currencyTooltipType: h,
                                    firstLaunchReward: x,
                                    isFirstLaunch: L,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(P, null, n().createElement(xa, null)),
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
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
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
        (() => {
            var e = { 591: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9284));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
