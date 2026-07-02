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
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            s = i[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    }));
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => f,
                        isFocused: () => B,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                function s(e) {
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
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
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
                function f() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                    a = {
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
                let n, r;
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
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { B3: () => c, Z5: () => i, B0: () => o, ry: () => p });
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
                const r = n;
                var a = t(1358);
                const i = {
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const g = ['args'];
                function F(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            F(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(o.CLOSE),
                    f = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const v = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                m = s.width,
                                E = s.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, C);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = b;
            },
            4946: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => se,
                        Bar: () => re,
                        DefaultScroll: () => ie,
                        Direction: () => Y,
                        defaultSettings: () => K,
                        useHorizontalScrollApi: () => Z,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => pe, Bar: () => ge, Default: () => De, useVerticalScrollApi: () => oe }));
                var a = t(4179),
                    i = t(6179),
                    s = t.n(i);
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
                var l = t(3138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var m;
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
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
                })(m || (m = {}));
                const _ = l.O.client.getSize('rem'),
                    d = _.width,
                    A = _.height,
                    g = Object.assign({ width: d, height: A }, E(d, A, c)),
                    F = (0, i.createContext)(g),
                    D = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, D);
                        const n = (0, i.useContext)(F),
                            r = n.extraLarge,
                            a = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            m = n.extraLargeWidth,
                            E = n.largeWidth,
                            _ = n.mediumWidth,
                            d = n.smallWidth,
                            A = n.extraSmallWidth,
                            g = n.extraLargeHeight,
                            p = n.largeHeight,
                            B = n.mediumHeight,
                            C = n.smallHeight,
                            f = n.extraSmallHeight,
                            h = { extraLarge: g, large: p, medium: B, small: C, extraSmall: f };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && a) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && m) return o(u, t, h);
                            if (t.largeWidth && E) return o(u, t, h);
                            if (t.mediumWidth && _) return o(u, t, h);
                            if (t.smallWidth && d) return o(u, t, h);
                            if (t.extraSmallWidth && A) return o(u, t, h);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && f) return u;
                            }
                        }
                        return null;
                    };
                ((p.defaultProps = {
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
                    (0, i.memo)(p));
                const B = (0, i.memo)(({ children: e }) => {
                    const u = (0, i.useContext)(F),
                        t = (0, i.useState)(u),
                        n = t[0],
                        r = t[1],
                        a = (0, i.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: n }, E(t, n, c)));
                        }, []);
                    (((e) => {
                        const u = (0, i.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', a);
                    }),
                        (0, i.useEffect)(() => () => engine.off('clientResized', a), [a]));
                    const o = (0, i.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(F.Provider, { value: o }, e);
                });
                var C = t(6483),
                    f = t.n(C),
                    h = t(926),
                    v = t.n(h);
                let b, S, x;
                (!(function (e) {
                    ((e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge'));
                    })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge'));
                    })(x || (x = {})));
                const w = () => {
                        const e = (0, i.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
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
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: a, remScreenWidth: u, remScreenHeight: t };
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
                const L = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_WIDTH,
                        [S.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [S.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: v().SMALL_HEIGHT,
                        [x.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [x.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, y);
                        const r = w(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return s().createElement('div', T({ className: f()(t, L[a], M[i], N[o]) }, n), u);
                    },
                    P = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, P);
                        return s().createElement(B, null, s().createElement(k, t, u));
                    };
                var I = t(493),
                    H = t.n(I);
                const W = (e) => {
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
                    j = (e, u, t) => (t < e ? e : t > u ? u : t),
                    U = [];
                function G(e) {
                    const u = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, u.current)(...e), U)
                    );
                }
                function z(e, u, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, i.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, a),
                        r,
                    ];
                }
                function V(e) {
                    engine.call('PlaySound', e);
                }
                function $(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var X = t(7030);
                let Y;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Y || (Y = {}));
                const K = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    q = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return j(r, a, t);
                        };
                        return (o = {}) => {
                            const c = o.settings,
                                m = void 0 === c ? K : c,
                                E = (0, i.useRef)(null),
                                _ = (0, i.useRef)(null),
                                d = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return $(e, u);
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
                                                                              ? $(e, u)
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
                                                    })(u(e).values());
                                                !(n = r()).done;
                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, i.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    a = !1,
                                                    i = 0;
                                                function s() {
                                                    r && clearTimeout(r);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function m() {
                                                        ((i = Date.now()), t.apply(l, o));
                                                    }
                                                    a ||
                                                        (n && !r && m(),
                                                        s(),
                                                        void 0 === n && c > e
                                                            ? m()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        (s(), (a = !0));
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, i.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, X.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), d.trigger('change', e), a && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                p = (0, i.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, i.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            D.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: s(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, m.animationConfig, F.scrollPosition],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, m.step),
                                            a = p(u, e, n);
                                        B(a);
                                    },
                                    [B, p, m.step],
                                ),
                                f = (0, i.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(n(e)),
                                            E.current && d.trigger('mouseWheel', e, F.scrollPosition, u(E.current)));
                                    },
                                    [F.scrollPosition, C, d],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        W(() => {
                                            const e = E.current;
                                            e &&
                                                (B(s(e, F.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                v = G(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = s(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            const b = (0, i.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: f,
                                    applyScroll: B,
                                    applyStepTo: C,
                                    contentRef: E,
                                    wrapperRef: _,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: d.on, off: d.off },
                                }),
                                [F.scrollPosition, B, C, b, d.off, d.on, v, f, D, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Z = q({
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
                        getDirection: (e) => (e.deltaY > 1 ? Y.Next : Y.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Q = 'HorizontalBar_base__nonActive_82',
                    J = 'disable',
                    ee = { pending: !1, offset: 0 },
                    ue = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    te = () => {},
                    ne = (e, u) => Math.max(20, e.offsetWidth * u),
                    re = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ue, onDrag: n = te }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, i.useState)(ee),
                            _ = E[0],
                            d = E[1],
                            A = (0, i.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    m = j(0, 1, i / (r - n)),
                                    E = (u.offsetWidth - ne(u, s)) * m;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (a.current.classList.add(J), void o.current.classList.remove(J));
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (a.current.classList.remove(J), void o.current.classList.add(J));
                                            var u, t;
                                            (a.current.classList.remove(J), o.current.classList.remove(J));
                                        }
                                    })(E));
                            },
                            F = G(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const i = Math.min(1, n / a);
                                    ((u.style.width = `${ne(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(Q) : r.current.classList.remove(Q)));
                                })(),
                                    g());
                            });
                        ((0, i.useEffect)(() => W(F)),
                            (0, i.useEffect)(
                                () =>
                                    W(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = te;
                                        const n = () => {
                                            (t(), (t = W(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            i = c.current;
                                        if (!r || !a || !i) return;
                                        const s = u.screenX - _.offset - a.getBoundingClientRect().x,
                                            o = (s / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: o }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(ee));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, n, A]));
                        const D = z((u) => e.applyStepTo(u), m, [e]),
                            p = D[0],
                            B = D[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(J) || V('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: f()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: f()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (V('play'), p(Y.Next));
                                },
                                onMouseUp: B,
                                ref: a,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: f()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        n &&
                                            0 === u.button &&
                                            (V('play'),
                                            u.target === n
                                                ? A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = c.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Y.Prev : Y.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: f()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: f()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: f()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (V('play'), p(Y.Prev));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    ae = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ie = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(ae.base, e.base) });
                            }, [n]),
                            E = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: f()(ae.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(ae.defaultScrollArea, r) },
                                s().createElement(se, { className: o, api: E, classNames: a }, e),
                            ),
                            s().createElement(re, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    se = ({ api: e, className: u, classNames: t, children: n, style: r }) => (
                        (0, i.useEffect)(() => W(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(ae.base, u), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: f()(ae.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: f()(ae.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((se.Bar = re),
                    (se.Default = ie),
                    (se.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => W(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(ae.base, u) },
                            s().createElement(
                                'div',
                                { className: f()(ae.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: f()(ae.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const oe = q({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Y.Next : Y.Prev),
                    }),
                    le = 'VerticalBar_base__nonActive_42',
                    ce = 'disable',
                    me = () => {},
                    Ee = { pending: !1, offset: 0 },
                    _e = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    de = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Ae = (e, u) => Math.max(20, e.offsetHeight * u),
                    ge = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = _e, onDrag: n = me }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, i.useState)(Ee),
                            _ = E[0],
                            d = E[1],
                            A = (0, i.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            g = G(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Ae(t, i)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(le) : r.current.classList.remove(le)),
                                    i
                                );
                            }),
                            F = G(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    m = j(0, 1, i / (r - n)),
                                    E = (u.offsetHeight - Ae(u, s)) * m;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    a.current.classList.add(ce),
                                                    void o.current.classList.remove(ce)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(ce),
                                                    void o.current.classList.add(ce)
                                                );
                                            var u, t;
                                            (a.current.classList.remove(ce), o.current.classList.remove(ce));
                                        }
                                    })(E));
                            }),
                            D = G(() => {
                                de(e, () => {
                                    (g(), F());
                                });
                            });
                        ((0, i.useEffect)(() => W(D)),
                            (0, i.useEffect)(() => {
                                const u = () => {
                                    de(e, () => {
                                        F();
                                    });
                                };
                                let t = me;
                                const n = () => {
                                    (t(), (t = W(D)));
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
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        de(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(Ee));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, n, A]));
                        const p = z((u) => e.applyStepTo(u), m, [e]),
                            B = p[0],
                            C = p[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ce) || V('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: f()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: f()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ce) || 0 !== e.button || (V('play'), B(Y.Next));
                                },
                                ref: a,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: f()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            (V('play'),
                                            u.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y }))
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? Y.Prev : Y.Next),
                                                  c.current &&
                                                      de(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: f()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: f()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ce) || 0 !== e.button || (V('play'), B(Y.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Fe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    De = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(Fe.base, e.base) });
                            }, [n]),
                            E = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: f()(Fe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(Fe.area, r) },
                                s().createElement(pe, { className: a, classNames: o, api: E }, e),
                            ),
                            s().createElement(ge, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    pe = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, i.useEffect)(() => W(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(Fe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(Fe.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                pe.Default = De;
                const Be = { Vertical: r, Horizontal: n },
                    Ce = {
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
                    fe = [
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
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                class ve extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && V(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && V(this.props.soundClick));
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
                            r = e.side,
                            a = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, fe)),
                            _ = f()(Ce.base, Ce[`base__${a}`], Ce[`base__${r}`], null == i ? void 0 : i.base),
                            d = f()(Ce.icon, Ce[`icon__${a}`], Ce[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = f()(Ce.glow, null == i ? void 0 : i.glow),
                            g = f()(Ce.caption, Ce[`caption__${a}`], null == i ? void 0 : i.caption),
                            F = f()(Ce.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            he(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== a && s().createElement('div', { className: Ce.shine }),
                            s().createElement('div', { className: d }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                let be;
                function Se(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                ((ve.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(be || (be = {})));
                const xe = (e) => e.replace(/&nbsp;/g, ' '),
                    we = (e, u, t) => {
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
                    Re = (e, u, t = be.left) => e.split(u).reduce(t === be.left ? we : ye, []),
                    Te = (() => {
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
                    Le = ['zh_cn', 'zh_sg', 'zh_tw'];
                let Me;
                var Ne;
                (((Ne = Me || (Me = {})).SHORT_DATE = 'short-date'),
                    (Ne.SHORT_TIME = 'short-time'),
                    (Ne.SHORT_DATE_TIME = 'short-date-time'),
                    (Ne.FULL_DATE = 'full-date'),
                    (Ne.FULL_DATE_TIME = 'full-date-time'),
                    (Ne.MONTH = 'month'),
                    (Ne.MONTH_DATE = 'month-date'),
                    (Ne.DATE_MONTH = 'date-month'),
                    (Ne.MONTH_YEAR = 'month-year'),
                    (Ne.WEEK_DAY = 'week-day'),
                    (Ne.WEEK_DAY_TIME = 'week-day-time'),
                    (Ne.YEAR = 'year'),
                    (Ne.DATE_YEAR = 'date-year'));
                Date.now();
                var ke = t(5521);
                const Pe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Oe(e = ke.n.NONE, u = Pe, t = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== ke.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Ie = t(3403);
                const He = (0, i.memo)(({ text: e, children: u, classMix: t }) =>
                    s().createElement(
                        'div',
                        { className: f()('PageTitle_base_ef', t) },
                        s().createElement('span', { className: 'PageTitle_title_33' }, e),
                        u,
                    ),
                );
                function We(e) {
                    return e;
                }
                function je() {
                    return !1;
                }
                console.log;
                var Ue = t(9174);
                function Ge(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ze = (e) => (0 === e ? window : window.subViews.get(e));
                function Ve(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const $e = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Ve(e, (e) => ('object' == typeof e ? $e(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? $e(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? $e(u) : u]),
                                    )
                            : e,
                    Xe = (e) => $e(e);
                var Ye = t(3946);
                const Ke = ((e, u) => {
                        const t = (0, i.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: a }) {
                                const o = (0, i.useRef)([]),
                                    c = (e, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ze,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
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
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            o = l.O.view.addModelObserver(s, u, !0);
                                                        return (r.set(o, t), e && t(i(a)), o);
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
                                                                                    return Ge(e, u);
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
                                                                                          ? Ge(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            i =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                            c = (e) => o.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        validVehicleLevels: e.array('validVehicleLevels', []),
                                                        ranksWithPoints: e.array('ranksWithPoints', []),
                                                        skillsCategories: e.array('skillsCategories', []),
                                                        winTablePoints: e.array('winTablePoints', []),
                                                        loseTablePoints: e.array('loseTablePoints', []),
                                                    },
                                                    t = (0, Ye.Om)(() => Ve(u.validVehicleLevels.get(), We)),
                                                    n = (0, Ye.Om)(() => Ve(u.ranksWithPoints.get(), We)),
                                                    r = (0, Ye.Om)(() => Ve(u.skillsCategories.get(), We)),
                                                    a = (0, Ye.Om)(() => Xe(u.winTablePoints.get()), { equals: je }),
                                                    i = (0, Ye.Om)(() => Xe(u.loseTablePoints.get()), { equals: je });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getValidVehicleLevels: t,
                                                        getRanksWithPoints: n,
                                                        getSkillsCategories: r,
                                                        getWinTablePoints: a,
                                                        getLoseTablePoints: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = Ue.LO.box(n, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Ue.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = Ue.LO.box(n, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, Ue.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Ue.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Ue.aD)((e) => {
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
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ue.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, Ue.aD)((e) => {
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
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: m, externalModel: i, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && n ? n.controls(E) : u(E),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    m = (0, i.useRef)(!1),
                                    E = (0, i.useState)(e),
                                    _ = E[0],
                                    d = E[1],
                                    A = (0, i.useState)(() => c(e, n, a)),
                                    g = A[0],
                                    F = A[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        m.current ? F(c(_, n, a)) : (m.current = !0);
                                    }, [a, _, n]),
                                    (0, i.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), o.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    s().createElement(t.Provider, { value: g }, r)
                                );
                            },
                            () => (0, i.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') })),
                    qe = Ke[0],
                    Ze = Ke[1],
                    Qe = 'default_sectionTitleLong_f5',
                    Je = 'default_sectionTitleSmall_45',
                    eu = 'default_sectionSubtitle_6e';
                var uu = t(9887),
                    tu = t.n(uu);
                const nu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ru = (e) => e.includes('_') && ((e) => nu.includes(e))(e.split('_').at(-1)),
                    au = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    iu = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (ru(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = au.indexOf(u),
                                    i = (-1 !== a ? nu.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = i ? e[i] : void 0;
                                return ((t[r] = void 0 !== s ? s : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => nu.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    su = (e, u = iu) => {
                        const t = (
                            (e, u = iu) =>
                            (t) => {
                                const n = w().mediaSize,
                                    r = (0, i.useMemo)(() => u(t, n), [t, n]);
                                return s().createElement(e, r);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => ru(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    ou = {
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
                    lu = [
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
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                Object.keys(tu());
                const mu = {
                        XL: { mt: ou.mt__XL, mr: ou.mr__XL, mb: ou.mb__XL, ml: ou.ml__XL },
                        LG: { mt: ou.mt__LG, mr: ou.mr__LG, mb: ou.mb__LG, ml: ou.ml__LG },
                        MDp: { mt: ou.mt__MDp, mr: ou.mr__MDp, mb: ou.mb__MDp, ml: ou.ml__MDp },
                        MD: { mt: ou.mt__MD, mr: ou.mr__MD, mb: ou.mb__MD, ml: ou.ml__MD },
                        SMp: { mt: ou.mt__SMp, mr: ou.mr__SMp, mb: ou.mb__SMp, ml: ou.ml__SMp },
                        SM: { mt: ou.mt__SM, mr: ou.mr__SM, mb: ou.mb__SM, ml: ou.ml__SM },
                        XS: { mt: ou.mt__XS, mr: ou.mr__XS, mb: ou.mb__XS, ml: ou.ml__XS },
                    },
                    Eu = (Object.keys(mu), ['mt', 'mr', 'mb', 'ml']),
                    _u = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    du = su((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            a = e.mt,
                            o = void 0 === a ? r : a,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            m = e.mb,
                            E = void 0 === m ? r : m,
                            _ = e.ml,
                            d = void 0 === _ ? r : _,
                            A = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            D = void 0 === F ? (A ? 'column' : g && 'row') || void 0 : F,
                            p = e.flexStart,
                            B = e.center,
                            C = e.flexEnd,
                            h = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            S =
                                void 0 === b
                                    ? (p ? 'flex-start' : B && 'center') ||
                                      (C && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            x = e.alignItems,
                            w = void 0 === x ? (p ? 'flex-start' : B && 'center') || (C && 'flex-end') || void 0 : x,
                            y = e.alignSelf,
                            R = e.wrap,
                            T = e.flexWrap,
                            L = void 0 === T ? (R ? 'wrap' : void 0) : T,
                            M = e.grow,
                            N = e.shrink,
                            k = e.flex,
                            P = void 0 === k ? (M || N ? `${M ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : k,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, lu);
                        const W = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: E, ml: d },
                                    u = ((e) =>
                                        Eu.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(mu[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        Eu.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[_u[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: P,
                                        alignSelf: y,
                                        display: D || w ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: L,
                                        justifyContent: S,
                                        alignItems: w,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, o, c, E, d, O, P, y, D, L, S, w]),
                            j = W.computedStyle,
                            U = W.computedClassNames;
                        return s().createElement('div', cu({ className: f()(ou.base, ...U, u), style: j }, H), I);
                    }),
                    Au = ({ binding: e, text: u = '', classMix: t, alignment: n = be.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  i.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      s().createElement(
                                          'div',
                                          { className: f()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = be.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Le.includes(t)
                                                                ? Te(e)
                                                                : ((e, u = be.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = xe(e);
                                                                      return (
                                                                          Re(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Re(e, n, be.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              s().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var gu = t(3532),
                    Fu = t.n(gu);
                const Du = {
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
                    pu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                Object.keys(tu());
                const Cu = Object.keys(Fu()),
                    fu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    hu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    vu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    bu =
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
                            'heading-H56': fu,
                            'heading-H36': fu,
                            'heading-H28': hu,
                            'heading-H24': hu,
                            'heading-H24R': hu,
                            'heading-H22': hu,
                            'heading-H20R': hu,
                            'heading-H18': hu,
                            'heading-H15': vu,
                            'heading-H14': vu,
                            'paragraph-P24': hu,
                            'paragraph-P18': hu,
                            'paragraph-P16': hu,
                            'paragraph-P14': vu,
                            'paragraph-P12': vu,
                            'paragraph-P10': vu,
                        }),
                    Su =
                        (Object.keys(bu),
                        (e) =>
                            e
                                ? ((e) => Cu.includes(e))(e)
                                    ? { colorClassName: Du[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    xu = su((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            a = e.m,
                            o = e.mt,
                            l = void 0 === o ? a : o,
                            c = e.mr,
                            m = void 0 === c ? a : c,
                            E = e.mb,
                            _ = void 0 === E ? a : E,
                            d = e.ml,
                            A = void 0 === d ? a : d,
                            g = e.style,
                            F = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, pu);
                        const p = (0, i.useMemo)(() => {
                                const e = Su(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, n), colorClassName: u };
                            }, [g, r]),
                            B = p.computedStyle,
                            C = p.colorClassName;
                        return s().createElement(
                            du,
                            Bu(
                                {
                                    className: f()(Du.base, t && Du[t], C, n),
                                    style: B,
                                    mt: !0 === l ? bu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? bu[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === _ ? bu[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? bu[t || 'paragraph-P16'].ml : A,
                                },
                                D,
                            ),
                            void 0 !== F ? s().createElement(Au, Bu({}, F, { text: u })) : u,
                        );
                    }),
                    wu = 'AboutSection_tableColumn_4e',
                    yu = 'AboutSection_tableCell_1a',
                    Ru = 'AboutSection_tableCell__centered_c2',
                    Tu = R.strings.fl_info_page.about,
                    Lu = [5, 20, 30],
                    Mu = (0, Ie.Pi)(() => {
                        const e = Ze().model,
                            u = e.computes.getWinTablePoints(),
                            t = e.computes.getLoseTablePoints(),
                            n = [
                                { header: Tu.scoresTable.winHeader(), cells: u },
                                { header: Tu.scoresTable.loseHeader(), cells: t },
                            ];
                        return s().createElement(
                            'div',
                            { className: 'AboutSection_base_9b' },
                            s().createElement(xu, { text: Tu.header(), className: Je }),
                            s().createElement(xu, { text: Tu.text(), className: 'AboutSection_description_ac' }),
                            s().createElement(
                                'div',
                                { className: 'AboutSection_battlePass_03' },
                                s().createElement(
                                    'div',
                                    { className: 'AboutSection_battlePassImgContainer_b8' },
                                    s().createElement('div', { className: 'AboutSection_battlePassImg_15' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'AboutSection_battlePassText_4c' },
                                    s().createElement(xu, { text: Tu.scores.header(), className: eu }),
                                    s().createElement(xu, { text: Tu.scores.text() }),
                                ),
                            ),
                            s().createElement(xu, { text: Tu.position.header(), className: eu }),
                            s().createElement(xu, { text: Tu.position.text() }),
                            s().createElement(
                                'div',
                                { className: 'AboutSection_table_4b' },
                                s().createElement(
                                    'div',
                                    { className: wu },
                                    s().createElement('div', { className: yu }),
                                    Lu.map((e) =>
                                        s().createElement(xu, {
                                            key: e,
                                            text: Tu.scoresTable.topCell(),
                                            className: yu,
                                            format: { binding: { top: e } },
                                        }),
                                    ),
                                ),
                                n.map(({ header: e, cells: u }, t) =>
                                    s().createElement(
                                        'div',
                                        { key: t, className: wu },
                                        s().createElement('div', { className: f()(yu, Ru) }, e),
                                        Lu.map((e, t) => {
                                            const n = u[t];
                                            return s().createElement(
                                                'div',
                                                { key: t, className: f()(yu, Ru) },
                                                n
                                                    ? s().createElement(
                                                          s().Fragment,
                                                          null,
                                                          s().createElement(
                                                              'div',
                                                              { className: 'AboutSection_tableCellText_1f' },
                                                              n,
                                                          ),
                                                          s().createElement('div', {
                                                              className: 'AboutSection_tableBpImg_d4',
                                                          }),
                                                      )
                                                    : s().createElement(xu, { text: Tu.scoresTable.emptyCell() }),
                                            );
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Nu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ku = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Pu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ou = (e) =>
                        Pu
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = ku.length - 1; t >= 0; t--)
                                      for (; e >= ku[t];) ((u += Nu[t]), (e -= ku[t]));
                                  return u;
                              })(e),
                    Iu = [
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
                function Hu(e) {
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
                const Wu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ju = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            E = void 0 !== m && m,
                            _ = e.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            B = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Iu);
                        const f = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, i.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            v = (0, i.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Wu(t, d, { isMouseEvent: !0, on: !0, arguments: Hu(n) }, h),
                                    p && p(),
                                    (f.current.isVisible = !0));
                            }, [t, d, n, h, p]),
                            b = (0, i.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Wu(t, d, { on: !1 }, h),
                                        f.current.isVisible && B && B(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, d, h, B]),
                            S = (0, i.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && b();
                            }, [g, b]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            g
                                ? (0, i.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == a || a(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    Uu = ['children'];
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const zu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Uu);
                        return s().createElement(
                            ju,
                            Gu(
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
                    Vu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Xu = R.views.common.tooltip_window.simple_tooltip_content,
                    Yu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            a = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Vu);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, n, r, o]);
                        return s().createElement(
                            ju,
                            $u(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
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
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const qu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(Yu, u, n);
                    const r = u.contentId,
                        a = u.args,
                        i = null == a ? void 0 : a.contentId;
                    return r || i
                        ? s().createElement(ju, Ku({}, u, { contentId: r || i }), n)
                        : s().createElement(zu, u, n);
                };
                var Zu = t(8045);
                let Qu, Ju, et;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Qu || (Qu = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Ju || (Ju = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(et || (et = {})));
                const ut = { [et.NBSP]: Qu.NoBreakSymbol, [et.ZWNBSP]: Qu.NoBreakSymbol, [et.NEW_LINE]: Qu.LineBreak },
                    tt = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    nt = (e) => ({ color: `#${e}` }),
                    rt = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? tt[n]
                                ? s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: tt[n] },
                                      e,
                                  )
                                : s().createElement('span', { key: t, 'data-block-type': u.blockType, style: nt(n) }, e)
                            : s().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    at = {
                        [Qu.Word]: rt,
                        [Qu.NoBreakSymbol]: rt,
                        [Qu.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: t }, e)),
                            ),
                        [Qu.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': Qu.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Qu.NewLine]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': Qu.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Qu.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Qu.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    it = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const i = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = it(e, at[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    st = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r;) (a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e)));
                        a !== e.length && t(e.slice(a));
                    },
                    ot = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let r = 0;
                        for (; t;) (n.push(e.slice(r, u.lastIndex)), (r = u.lastIndex), (t = u.exec(e)));
                        return (r !== e.length && n.push(e.slice(r)), n);
                    },
                    lt = (e, u = '') => {
                        const t = [];
                        return (
                            st(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Qu.Word, colorTag: u, childList: ot(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = ut[n.charAt(0)];
                                    r === Qu.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Qu.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Qu.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    ct = (e, u, t = '') => {
                        const n = [];
                        return (
                            st(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...lt(e, t));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...lt(String(a), t))
                                        : n.push({ blockType: Qu.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    mt = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Qu.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Qu.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Et = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Qu.NoBreakSymbol
                                        ? ((t = !0), u.push(...mt(u.pop(), e)))
                                        : (t ? u.push(...mt(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    st(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...ct(e, u));
                                        },
                                        (e) => {
                                            t.push(...ct(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(xe(e).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = at[n],
                                                a = it(e, r, u);
                                            return (
                                                n === Qu.NoBreakWrapper
                                                    ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                    : t.push(...a),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    _t = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    dt = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    At = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = dt(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    gt = (e, u, t, n, r, a) => {
                        let i = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Qu.LineBreak || c === Qu.NewLine || c === Qu.Binding) continue;
                            const m = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = At(t, n, r),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (r -= E);
                                    continue;
                                }
                                const _ = m.slice(0, m.length - E) + a,
                                    d = u[l];
                                ((o = s().cloneElement(d, d.props, _)), (i = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    E = c.props.children,
                                    _ = gt(e, E, e.length - 1, n, r, a),
                                    d = _[0],
                                    A = _[1];
                                if (!(d < 0)) {
                                    const e = E.slice(0, d);
                                    ((o = s().cloneElement(c, c.props, e, A)), (i = l));
                                    break;
                                }
                                r -= m.length;
                            }
                        }
                        return [i, o];
                    },
                    Ft = s().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: a = !1,
                            targetId: o,
                            justifyContent: l = Ju.FlexStart,
                            alignContent: c = Ju.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const E = (0, i.useRef)(null),
                                _ = (0, i.useRef)({ height: 0, width: 0 }),
                                d = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = d[0],
                                g = d[1],
                                F = (0, i.useMemo)(() => Et(e, n), [n, e]),
                                D = (0, i.useMemo)(() => {
                                    if (r && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, r, o, e, A.isTruncated]),
                                p = (0, i.useCallback)(
                                    (e) => {
                                        ((_.current.width = e.contentRect.width),
                                            (_.current.height = e.contentRect.height));
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const i = t.height,
                                                    s = t.width,
                                                    o = a.lastElementChild;
                                                if (!_t(o, i) && dt(o, s) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0;) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            _t(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [r, !1];
                                                const m = gt(l, r, c, s, n.length, n),
                                                    E = m[0],
                                                    _ = m[1];
                                                return (_ && (r.splice(E, 1, _), r.splice(E + 1)), [r, !0]);
                                            })(E, F, _.current, m),
                                            n = u[0],
                                            r = u[1];
                                        (g({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, m, F],
                                ),
                                B = (0, i.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, i.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Zu.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(E, p, a),
                                s().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            a && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: B,
                                    },
                                    s().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: E }, F),
                                    s().createElement(
                                        qu,
                                        { tooltipArgs: D },
                                        s().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && a && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: B,
                                            },
                                            A.isTruncateFinished && a ? A.elementList : F,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Dt = (0, i.memo)(({ withDivider: e = !0, classMix: u, children: t }) =>
                        s().createElement(
                            'div',
                            { className: f()('DividedSection_base_dd', u) },
                            t,
                            e && s().createElement('div', { className: 'DividedSection_divider_6e' }),
                        ),
                    ),
                    pt = (0, i.memo)(({ validVehicleLevels: e, withBattlePass: u }) =>
                        s().createElement(
                            Dt,
                            { withDivider: u },
                            s().createElement(
                                'div',
                                { className: f()(Je, 'default_sectionTitleSmall__biggerMargin_5b') },
                                R.strings.fl_info_page.addons.header(),
                            ),
                            s().createElement(
                                'div',
                                { className: 'AddonsSection_description_66' },
                                ((e) => [
                                    {
                                        header: R.strings.fl_info_page.addons.cellRent.header(),
                                        text:
                                            e.length > 1
                                                ? R.strings.fl_info_page.addons.cellRent.textUnlockable()
                                                : R.strings.fl_info_page.addons.cellRent.text(),
                                        binding: {
                                            vehiclesLevelFrom: Ou(Math.min(...e)),
                                            vehiclesLevelTo: Ou(Math.max(...e)),
                                            vehiclesLevel: Ou(e[0]),
                                        },
                                    },
                                    {
                                        header: R.strings.fl_info_page.addons.cellTime.header(),
                                        text: R.strings.fl_info_page.addons.cellTime.text(),
                                    },
                                    {
                                        header: R.strings.fl_info_page.addons.cellSpectator.header(),
                                        text: R.strings.fl_info_page.addons.cellSpectator.text(),
                                    },
                                ])(e).map(({ header: e, text: u, binding: t }, n) =>
                                    s().createElement(
                                        'div',
                                        { key: n, className: 'AddonsSection_column_fb' },
                                        s().createElement('div', { className: eu }, e),
                                        t
                                            ? s().createElement(Ft, { text: u, binding: t })
                                            : s().createElement('div', { className: 'AddonsSection_text_08' }, u),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Bt = 'LevelUpSection_level_e3',
                    Ct = (0, i.memo)(({ validVehicleLevels: e, unlockableInBattleVehicleLevel: u }) =>
                        s().createElement(
                            Dt,
                            null,
                            s().createElement(
                                'div',
                                { className: 'LevelUpSection_container_a4' },
                                s().createElement(
                                    'div',
                                    { className: 'LevelUpSection_text_2a' },
                                    s().createElement(Au, {
                                        text: R.strings.fl_info_page.levelUp.sectionHeader(),
                                        binding: { level: Ou(u) },
                                        classMix: Qe,
                                    }),
                                    s().createElement(Au, {
                                        text: R.strings.fl_info_page.levelUp.text(),
                                        binding: { vehiclesLevelFrom: Ou(Math.min(...e)), vehiclesLevelTo: Ou(u) },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'LevelUpSection_img_a3' },
                                    s().createElement('div', {
                                        className: f()(Bt, 'LevelUpSection_level__left_fa'),
                                        style: {
                                            backgroundImage: `url(R.images.frontline.gui.maps.icons.levelChange.level_${Math.min(...e)})`,
                                        },
                                    }),
                                    s().createElement('div', {
                                        className: f()(Bt, 'LevelUpSection_level__right_0e'),
                                        style: {
                                            backgroundImage: `url(R.images.frontline.gui.maps.icons.levelChange.level_${u})`,
                                        },
                                    }),
                                ),
                            ),
                        ),
                    ),
                    ft = 'MainInfoSection_cell_b3',
                    ht = (0, i.memo)(
                        ({
                            withBattlePass: e,
                            duration: u,
                            validVehicleLevels: t,
                            unlockableInBattleVehicleLevel: n,
                        }) =>
                            s().createElement(
                                Dt,
                                { classMix: 'MainInfoSection_base_81' },
                                s().createElement(
                                    'div',
                                    { className: Qe },
                                    R.strings.fl_info_page.main.sectionHeader(),
                                ),
                                ((e, u = 3) => {
                                    const t = [];
                                    for (let n = 0; n < e.length; n += u) t.push(e.slice(n, n + u));
                                    return t;
                                })(
                                    ((e, u, t, n) => {
                                        const r = Ou(Math.min(...t)),
                                            a = Ou(Math.max(...t)),
                                            i = Ou(n),
                                            s = [
                                                {
                                                    image: R.images.frontline.gui.maps.icons.about.epic(),
                                                    header: {
                                                        value: R.strings.fl_info_page.main.cellFrontline.header(),
                                                    },
                                                    text:
                                                        t.length > 1
                                                            ? {
                                                                  value: R.strings.fl_info_page.main.cellFrontline.text.someLevels(),
                                                                  binding: { vehiclesLevelFrom: r, vehiclesLevelTo: a },
                                                              }
                                                            : {
                                                                  value: R.strings.fl_info_page.main.cellFrontline.text.oneLevel(),
                                                                  binding: { vehicleLevel: r },
                                                              },
                                                },
                                                {
                                                    image: R.images.frontline.gui.maps.icons.about.episodic(),
                                                    header: {
                                                        value: R.strings.fl_info_page.main.cellDuration.header(),
                                                    },
                                                    text: {
                                                        value: R.strings.fl_info_page.main.cellDuration.text(),
                                                        binding: {
                                                            days: Se(R.strings.fl_common.day(u), { duration: u }),
                                                        },
                                                    },
                                                },
                                            ];
                                        return (
                                            e &&
                                                s.push({
                                                    image: R.images.frontline.gui.maps.icons.about.battlepass(),
                                                    header: { value: R.strings.fl_info_page.main.cellPass.header() },
                                                    text: { value: R.strings.fl_info_page.main.cellPass.text() },
                                                }),
                                            s.push({
                                                image: R.images.frontline.gui.maps.icons.about.reserves(),
                                                header: { value: R.strings.fl_info_page.main.cellReserves.header() },
                                                text: { value: R.strings.fl_info_page.main.cellReserves.text() },
                                            }),
                                            s.push({
                                                image: R.images.frontline.gui.maps.icons.about.$dyn(
                                                    `start_level_${Math.min(...t)}`,
                                                ),
                                                header: {
                                                    value: R.strings.fl_info_page.main.cellLevels.header(),
                                                    binding: { vehiclesLevel: r },
                                                },
                                                text: {
                                                    value: R.strings.fl_info_page.main.cellLevels.text(),
                                                    binding: { vehiclesLevel: r },
                                                },
                                            }),
                                            s.push({
                                                image: R.images.frontline.gui.maps.icons.about.supply_object(),
                                                header: { value: R.strings.fl_info_page.main.supplyObject.header() },
                                                text: { value: R.strings.fl_info_page.main.supplyObject.text() },
                                            }),
                                            n > 0 &&
                                                s.push({
                                                    image: R.images.frontline.gui.maps.icons.about.$dyn(
                                                        `respawn_level_${n}`,
                                                    ),
                                                    header: {
                                                        value: R.strings.fl_info_page.main.cellLevelUnlockable.header(),
                                                        binding: { unlockableInBattleVehicleLevel: i },
                                                    },
                                                    text: {
                                                        value: R.strings.fl_info_page.main.cellLevelUnlockable.text(),
                                                        binding: { unlockableInBattleVehicleLevel: i },
                                                    },
                                                }),
                                            s
                                        );
                                    })(e, u, t, n),
                                ).map((e, u) =>
                                    s().createElement(
                                        'div',
                                        { key: u, className: 'MainInfoSection_row_c7' },
                                        e.map(({ header: e, text: u, image: t }, n) =>
                                            e && u && t
                                                ? s().createElement(
                                                      'div',
                                                      { key: n, className: ft },
                                                      s().createElement('div', {
                                                          className: 'MainInfoSection_cellImage_ec',
                                                          style: { backgroundImage: `url(${t})` },
                                                      }),
                                                      s().createElement(
                                                          'div',
                                                          { className: 'MainInfoSection_cellContent_bb' },
                                                          e.binding
                                                              ? s().createElement(Ft, {
                                                                    text: e.value,
                                                                    binding: e.binding,
                                                                    classMix: eu,
                                                                })
                                                              : s().createElement('div', { className: eu }, e.value),
                                                          s().createElement(Ft, { text: u.value, binding: u.binding }),
                                                      ),
                                                  )
                                                : s().createElement('div', { key: n, className: ft }),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                    vt = 'ProgressionSection_caption_98',
                    bt = 'ProgressionSection_captionDescription_e4',
                    St = 'ProgressionSection_captionImgContainer_a1',
                    xt = 'ProgressionSection_tableColumn_78',
                    wt = 'ProgressionSection_tableCell_60',
                    yt = 'ProgressionSection_tableCell__header_a9',
                    Rt = 'SupplyProgression_wrappedText_3a',
                    Tt = 'SupplyProgression_targetImage_94',
                    Lt = 'SupplyProgression_targetImage__visible_cd',
                    Mt = 'objects',
                    Nt = ['tasks', Mt, 'directions'],
                    kt = R.images.frontline.gui.maps.infopage.progressInfo,
                    Pt = R.strings.fl_info_page.progression,
                    Ot = (0, i.memo)(() => {
                        const e = (0, i.useState)(1),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, i.useEffect)(() => {
                                const e = setInterval(() => {
                                    t((e) => (1 === e ? 2 : 1));
                                }, 6e3);
                                return () => clearInterval(e);
                            }, []),
                            s().createElement(
                                'div',
                                { className: 'SupplyProgression_base_63' },
                                s().createElement(xu, {
                                    className: f()('SupplyProgression_subtitle_96', Rt),
                                    text: Pt.subTitle(),
                                }),
                                s().createElement(
                                    'div',
                                    { className: 'SupplyProgression_progressionWrapper_c5' },
                                    Nt.map((e) =>
                                        s().createElement(
                                            'div',
                                            { className: 'SupplyProgression_progressionBlock_4c', key: `block_${e}` },
                                            s().createElement(
                                                'div',
                                                { className: 'SupplyProgression_imageWrapper_26' },
                                                s().createElement('div', {
                                                    className: f()(
                                                        e === Mt
                                                            ? 'SupplyProgression_objectsImage_83'
                                                            : 'SupplyProgression_image_2c',
                                                    ),
                                                    style: { backgroundImage: `url(${kt.$dyn(e)})` },
                                                }),
                                            ),
                                            s().createElement(xu, {
                                                className: eu,
                                                text: Pt.progressionBlock.title.$dyn(e),
                                            }),
                                            s().createElement(xu, {
                                                className: Rt,
                                                text: Pt.progressionBlock.description.$dyn(e),
                                            }),
                                        ),
                                    ),
                                    s().createElement('div', { className: 'SupplyProgression_separator_0c' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'SupplyProgression_targetWrapper_47' },
                                    s().createElement(
                                        'div',
                                        { className: 'SupplyProgression_targetDescription_8b' },
                                        s().createElement(xu, {
                                            className: eu,
                                            text: Pt.progressionBlock.title.targets(),
                                        }),
                                        s().createElement(xu, {
                                            className: Rt,
                                            text: Pt.progressionBlock.description.targets(),
                                        }),
                                    ),
                                    s().createElement('div', {
                                        className: f()(Tt, 1 === u && Lt),
                                        style: { backgroundImage: `url(${kt.beforeAfter_1()})` },
                                    }),
                                    s().createElement('div', {
                                        className: f()(Tt, 2 === u && Lt),
                                        style: { backgroundImage: `url(${kt.beforeAfter_2()})` },
                                    }),
                                ),
                                s().createElement(xu, {
                                    className: 'SupplyProgression_footerText_d3',
                                    text: Pt.footer(),
                                }),
                                s().createElement('div', { className: 'SupplyProgression_progressSeparator_cd' }),
                            )
                        );
                    }),
                    It = R.strings.fl_info_page.progression,
                    Ht = [null, It.ranksTable.frontExperienceCell(), It.ranksTable.bonusCell()],
                    Wt = (0, Ie.Pi)(({ withBattlePass: e }) => {
                        const u = Ze().model.computes.getRanksWithPoints();
                        return s().createElement(
                            Dt,
                            null,
                            s().createElement(xu, { className: Je, text: It.sectionHeader() }),
                            s().createElement(Ot, null),
                            s().createElement(xu, { className: 'ProgressionSection_description_1e', text: It.text() }),
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    'div',
                                    { className: vt },
                                    s().createElement(
                                        'div',
                                        { className: St },
                                        s().createElement('div', { className: 'ProgressionSection_captionImg_56' }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: bt },
                                        s().createElement(xu, { className: eu, text: It.ranksSection.header() }),
                                        s().createElement(xu, { text: It.ranksSection.text() }),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'ProgressionSection_table_3f' },
                                s().createElement(
                                    'div',
                                    { className: xt },
                                    Ht.map((e, u) =>
                                        s().createElement(
                                            'div',
                                            {
                                                key: u,
                                                className: f()(wt, e ? 'ProgressionSection_tableCell__right_98' : yt),
                                            },
                                            s().createElement(xu, { text: e }),
                                        ),
                                    ),
                                ),
                                Ve(u, ({ rankName: e, rankPoints: u }, t) =>
                                    s().createElement(
                                        'div',
                                        { key: t, className: xt },
                                        s().createElement(
                                            'div',
                                            { className: f()(wt, yt) },
                                            s().createElement('div', {
                                                className: 'ProgressionSection_rankImg_50',
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.library.epicRank.$dyn(`msg_rank_${e}`)})`,
                                                },
                                            }),
                                            s().createElement(xu, { className: eu, text: It.ranksTable.$dyn(e) }),
                                        ),
                                        Ve(u, (e, u) => {
                                            return s().createElement(
                                                'div',
                                                {
                                                    key: u,
                                                    className: f()(wt, 'ProgressionSection_tableCell__centered_6d'),
                                                },
                                                0 === u
                                                    ? `${(t = e) > 0 ? '+' : ''}${a.Z5.getNumberFormat(t, a.B3.GOLD)}`
                                                    : ((e) => `${e > 0 ? '+' : ''}${e}%`)(e),
                                            );
                                            var t;
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: vt },
                                s().createElement(
                                    'div',
                                    { className: St },
                                    s().createElement('div', { className: 'ProgressionSection_captionBadge_5b' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: bt },
                                    s().createElement(xu, { className: eu, text: It.levelsSection.header() }),
                                    s().createElement(xu, { text: It.levelsSection.experienceText() }),
                                    s().createElement(Ft, {
                                        text: e ? It.levelsSection.rewardsText() : It.levelsSection.rewardsTextNoBP(),
                                        classMix: 'ProgressionSection_captionText_e3',
                                    }),
                                ),
                            ),
                        );
                    }),
                    jt = [
                        {
                            icon: null,
                            label: null,
                            cells: [
                                R.strings.fl_info_page.reserveCategories.categories.main(),
                                R.strings.fl_info_page.reserveCategories.categories.additional(),
                                R.strings.fl_info_page.reserveCategories.categories.support(),
                            ],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_recruit(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.soldier(),
                            cells: [1, null, null],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_sergeant(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.sergeant(),
                            cells: [null, 1, null],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_lieutenant(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.lieutenant(),
                            cells: [null, null, 1],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_captain(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.captain(),
                            cells: [2, 2, 2],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_major(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.major(),
                            cells: [3, 3, 3],
                        },
                    ],
                    Ut = [
                        [
                            { isImg: !1, value: null },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.light() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.middle() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.heavy() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.destroyer() },
                            {
                                isImg: !1,
                                value: R.strings.fl_info_page.reserveCategories.config.vehicles.selfPropelled(),
                            },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.main() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.additional() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.support() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                        ],
                    ],
                    Gt = 'ReserveCategoriesSection_categoryCell_16',
                    zt = 'ReserveCategoriesSection_progressionTableCell_85',
                    Vt = (0, Ie.Pi)(() => {
                        const e = Ze().model.computes.getSkillsCategories();
                        return s().createElement(
                            Dt,
                            null,
                            s().createElement(
                                'div',
                                { className: Je },
                                R.strings.fl_info_page.reserveCategories.sectionHeader(),
                            ),
                            s().createElement(
                                'div',
                                { className: 'ReserveCategoriesSection_categoriesText_85' },
                                R.strings.fl_info_page.reserveCategories.text(),
                            ),
                            s().createElement(
                                'div',
                                { className: 'ReserveCategoriesSection_categoriesLists_8c' },
                                Ve(e, ({ type: e, skills: u }, t) =>
                                    s().createElement(
                                        'div',
                                        { key: t, className: 'ReserveCategoriesSection_categoryColumn_b1' },
                                        s().createElement(
                                            'div',
                                            { className: f()(Gt, 'ReserveCategoriesSection_categoryCell__title_1b') },
                                            s().createElement('div', {
                                                className: 'ReserveCategoriesSection_categoryTypeIcon_bb',
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.category.small.$dyn(e)})`,
                                                },
                                            }),
                                            R.strings.fl_info_page.reserveCategories.types.$dyn(e),
                                        ),
                                        Ve(u, (e, u) =>
                                            s().createElement(
                                                'div',
                                                { key: u, className: Gt },
                                                s().createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'ReserveCategoriesSection_categoryCell__imgContainer_86',
                                                    },
                                                    s().createElement('div', {
                                                        className: 'ReserveCategoriesSection_categoryTypeImg_d7',
                                                        style: {
                                                            backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.skills.c_48x48.$dyn(e.icon)})`,
                                                        },
                                                    }),
                                                ),
                                                e.name,
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_progression_03' },
                                    s().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_progressionInfo_57' },
                                        s().createElement(
                                            'div',
                                            { className: eu },
                                            R.strings.fl_info_page.reserveCategories.levels.header(),
                                        ),
                                        s().createElement(
                                            'div',
                                            null,
                                            R.strings.fl_info_page.reserveCategories.levels.text(),
                                        ),
                                    ),
                                    s().createElement('div', {
                                        className: 'ReserveCategoriesSection_progressionImg_35',
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_progressionTable_aa' },
                                    jt.map(({ label: e, icon: u, cells: t }, n) =>
                                        s().createElement(
                                            'div',
                                            { key: n, className: 'ReserveCategoriesSection_progressionTableColumn_34' },
                                            s().createElement(
                                                'div',
                                                { className: zt },
                                                s().createElement('div', {
                                                    className: 'ReserveCategoriesSection_progressionTableHeaderIcon_dd',
                                                    style: Object.assign({}, u && { backgroundImage: `url(${u})` }),
                                                }),
                                                s().createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'ReserveCategoriesSection_progressionTableHeaderText_77',
                                                    },
                                                    e,
                                                ),
                                            ),
                                            t.map((e, u) =>
                                                s().createElement(
                                                    'div',
                                                    {
                                                        key: u,
                                                        className: f()(
                                                            zt,
                                                            !n &&
                                                                'ReserveCategoriesSection_progressionTableCell__accentStart_4f',
                                                        ),
                                                    },
                                                    Number.isInteger(e)
                                                        ? s().createElement(Ft, {
                                                              text: R.strings.fl_info_page.reserveCategories.progression.tableCell(),
                                                              binding: { level: Ou(e) },
                                                          })
                                                        : e,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    'div',
                                    { className: eu },
                                    R.strings.fl_info_page.reserveCategories.config.header(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_configurationText_f0' },
                                    R.strings.fl_info_page.reserveCategories.config.text(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_configuration_a0' },
                                    s().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_configurationTable_96' },
                                        Ut.map((e, u) =>
                                            s().createElement(
                                                'div',
                                                {
                                                    key: u,
                                                    className: u
                                                        ? 'ReserveCategoriesSection_configurationTableColumn_2f'
                                                        : 'ReserveCategoriesSection_configurationTableColumn__accent_a6',
                                                },
                                                e.map(({ isImg: e, value: t }, n) =>
                                                    s().createElement(
                                                        'div',
                                                        {
                                                            key: n,
                                                            className: f()(
                                                                'ReserveCategoriesSection_configurationTableCell_d9',
                                                                u
                                                                    ? 'ReserveCategoriesSection_configurationTableCell__centered_32'
                                                                    : 'ReserveCategoriesSection_configurationTableCell__start_9e',
                                                            ),
                                                        },
                                                        e
                                                            ? s().createElement('div', {
                                                                  className:
                                                                      'ReserveCategoriesSection_configurationIcon_4d',
                                                                  style: { backgroundImage: `url(${t})` },
                                                              })
                                                            : t,
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_configurationImgContainer_51' },
                                        s().createElement('div', {
                                            className: 'ReserveCategoriesSection_configurationImg_5e',
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    $t = 'RulesSection_armorText_8a',
                    Xt = (0, i.memo)((e) =>
                        s().createElement(
                            Dt,
                            { classMix: 'RulesSection_base_e7' },
                            s().createElement(
                                'div',
                                { className: f()(Je, 'default_sectionTitleSmall__largeMargin_e4') },
                                R.strings.fl_info_page.rules.sectionHeader(),
                            ),
                            s().createElement(
                                'div',
                                { className: 'RulesSection_description_8b' },
                                (({
                                    sideDestructiblesArmor: e,
                                    backDestructiblesArmor: u,
                                    doorDestructiblesArmor: t,
                                    ventilationDestructiblesArmor: n,
                                }) => [
                                    {
                                        image: R.images.frontline.gui.maps.infopage.weapons(),
                                        header: R.strings.fl_info_page.rules.weapons.header(),
                                        text: [R.strings.fl_info_page.rules.weapons.text()],
                                        list: [
                                            { value: R.strings.fl_info_page.rules.weapons.list.roof() },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.sides(),
                                                binding: { sideDestructiblesArmor: e },
                                            },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.back(),
                                                binding: { backDestructiblesArmor: u },
                                            },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.vulnerable(),
                                                binding: {
                                                    doorDestructiblesArmor: t,
                                                    ventilationDestructiblesArmor: n,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        image: R.images.frontline.gui.maps.infopage.base(),
                                        header: R.strings.fl_info_page.rules.base.header(),
                                        text: [
                                            R.strings.fl_info_page.rules.base.textTop(),
                                            R.strings.fl_info_page.rules.base.textBottom(),
                                        ],
                                    },
                                    {
                                        image: R.images.frontline.gui.maps.infopage.service(),
                                        header: R.strings.fl_info_page.rules.service.header(),
                                        text: [R.strings.fl_info_page.rules.service.text()],
                                    },
                                ])(e).map(({ image: e, header: u, text: t, list: n }, r) =>
                                    s().createElement(
                                        'div',
                                        { key: r, className: 'RulesSection_descriptionColumn_f3' },
                                        s().createElement('div', {
                                            className: 'RulesSection_descriptionImg_ee',
                                            style: { backgroundImage: `url(${e})` },
                                        }),
                                        s().createElement('div', { className: eu }, u),
                                        t.map((e, u) =>
                                            s().createElement(Ft, {
                                                text: e,
                                                key: u,
                                                classMix: 'RulesSection_text_e7',
                                            }),
                                        ),
                                        n &&
                                            s().createElement(
                                                'div',
                                                { className: 'RulesSection_list_7b' },
                                                n.map((e, u) =>
                                                    s().createElement(
                                                        'div',
                                                        { key: u, className: 'RulesSection_listItem_48' },
                                                        s().createElement(
                                                            'div',
                                                            { className: 'RulesSection_listBullet_32' },
                                                            '•',
                                                        ),
                                                        s().createElement(Ft, {
                                                            text: e.value,
                                                            classMix: 'RulesSection_listItemText_9f',
                                                            binding: e.binding,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: f()($t, 'RulesSection_armorSide_19') },
                                e.sideDestructiblesArmor,
                            ),
                            s().createElement(
                                'div',
                                { className: f()($t, 'RulesSection_armorBack_69') },
                                e.backDestructiblesArmor,
                            ),
                            s().createElement(
                                'div',
                                { className: f()($t, 'RulesSection_armorDoor_9b') },
                                e.doorDestructiblesArmor,
                            ),
                            s().createElement(
                                'div',
                                { className: f()($t, 'RulesSection_armorVentilation_d1') },
                                e.ventilationDestructiblesArmor,
                            ),
                            s().createElement(
                                'div',
                                { className: 'RulesSection_backToFight_70' },
                                s().createElement(
                                    'div',
                                    { className: 'RulesSection_backToFightText_79' },
                                    s().createElement(
                                        'div',
                                        { className: eu },
                                        R.strings.fl_info_page.rules.backToFight.header(),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'RulesSection_wrappedText_c5' },
                                        R.strings.fl_info_page.rules.backToFight.text(),
                                    ),
                                ),
                                s().createElement('div', { className: 'RulesSection_backToFightImg_52' }),
                            ),
                        ),
                    ),
                    Yt = R.strings.fl_info_page.subTitle,
                    Kt = R.strings.menu.dateTime.months,
                    qt = (0, i.memo)(({ startTimestamp: e, endTimestamp: u }) => {
                        const t = new Date(1e3 * e),
                            n = new Date(1e3 * u),
                            r = {
                                from: t.getDate(),
                                to: n.getDate(),
                                startMonth: Kt.$num(t.getMonth() + 1),
                                endMonth: Kt.$num(n.getMonth() + 1),
                                startYear: t.getFullYear(),
                                endYear: n.getFullYear(),
                            },
                            a = r.startMonth === r.endMonth ? Yt.sameMonth() : Yt.differentMonth(),
                            i = r.startYear === r.endYear ? a : Yt.differentYears();
                        return s().createElement('div', { className: 'SubTitle_base_07' }, Se(i, r));
                    }),
                    Zt = 'SectionItem_zonesText_1c',
                    Qt = 'SectionItem_damageBlockText_4b',
                    Jt = 'SectionItem_damageBlockText__param_66',
                    en = 'SectionItem_damageBlockText__light_76',
                    un = R.images.frontline.gui.maps.infopage.supplyInfo,
                    tn = R.strings.fl_info_page.supply,
                    nn = tn.item.damageZones,
                    rn = (0, i.memo)(
                        ({
                            name: e,
                            className: u,
                            value: t = 0,
                            isBig: n = !1,
                            isWithLine: r = !1,
                            typeIcon: a = '',
                            airshipHullDamageFactor: i = 0,
                            airshipTurretDamageFactor: o = 0,
                        }) => {
                            const l = 'airship' === e,
                                c = f()('SectionItem_base_26', n && 'SectionItem_base__big_dd', u),
                                m = f()(
                                    'SectionItem_image_06',
                                    n ? 'SectionItem_image__right_5d' : 'SectionItem_image__center_7c',
                                    l && 'SectionItem_image__airship_94',
                                ),
                                E = 0 === t ? R.strings.fl_info_page.about.scoresTable.emptyCell() : t,
                                _ = String(Math.round(100 * i)),
                                d = String(Math.round(100 * o));
                            return s().createElement(
                                'div',
                                { className: c },
                                a &&
                                    s().createElement('div', {
                                        className: 'SectionItem_typeIcon_8e',
                                        style: { backgroundImage: `url(${un.$dyn(a)})` },
                                    }),
                                s().createElement(
                                    'div',
                                    { className: m, style: { backgroundImage: `url(${un.$dyn(e)})` } },
                                    l &&
                                        s().createElement(
                                            'div',
                                            { className: 'SectionItem_zonesWrapper_93' },
                                            s().createElement(xu, {
                                                className: f()(Zt, 'SectionItem_zonesText__turret_09'),
                                                text: nn.damage(),
                                                format: { binding: { number: d } },
                                            }),
                                            s().createElement(xu, {
                                                className: f()(Zt, 'SectionItem_zonesText__hull_43'),
                                                text: nn.damage(),
                                                format: { binding: { number: _ } },
                                            }),
                                        ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'SectionItem_cardContent_ff' },
                                    s().createElement(xu, { className: eu, text: tn.item.name.$dyn(e) }),
                                    s().createElement(xu, {
                                        className: f()(
                                            'SectionItem_descriptionText_ee',
                                            l && 'SectionItem_descriptionText__inAirship_a8',
                                        ),
                                        text: tn.item.description.$dyn(e),
                                        format: { binding: { value: E } },
                                    }),
                                    l &&
                                        s().createElement(
                                            'div',
                                            null,
                                            s().createElement(xu, { className: Qt, text: nn.title() }),
                                            s().createElement(xu, {
                                                className: f()(Qt, Jt),
                                                text: nn.hullText(),
                                                format: {
                                                    binding: {
                                                        value: s().createElement(xu, {
                                                            className: en,
                                                            text: nn.damage(),
                                                            format: { binding: { number: _ } },
                                                        }),
                                                    },
                                                },
                                            }),
                                            s().createElement(xu, {
                                                className: f()(Qt, Jt),
                                                text: nn.turretText(),
                                                format: {
                                                    binding: {
                                                        value: s().createElement(xu, {
                                                            className: en,
                                                            text: nn.damage(),
                                                            format: { binding: { number: d } },
                                                        }),
                                                    },
                                                },
                                            }),
                                        ),
                                ),
                                r && s().createElement('div', { className: 'SectionItem_separator_90' }),
                            );
                        },
                    ),
                    an = 'SupplyObjectsSection_contentWrapper_03',
                    sn = 'SupplyObjectsSection_titleMargin_b0',
                    on = 'SupplyObjectsSection_sectionItem_98';
                function ln() {
                    return (
                        (ln =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ln.apply(this, arguments)
                    );
                }
                const cn = R.strings.fl_info_page.supply;
                let mn;
                !(function (e) {
                    ((e.Pillbox = 'pillbox'),
                        (e.Flamer = 'flamer'),
                        (e.Repair = 'repair'),
                        (e.Mortar = 'mortar'),
                        (e.Airship = 'airship'),
                        (e.Respawn = 'respawn'));
                })(mn || (mn = {}));
                const En = [
                        { name: mn.Pillbox, isWithLine: !0 },
                        { name: mn.Flamer, typeIcon: 'defend' },
                    ],
                    _n = [
                        { name: mn.Mortar, isWithLine: !0 },
                        { name: mn.Airship, typeIcon: 'attack' },
                        { name: mn.Respawn, isBig: !0, isLast: !0 },
                    ],
                    dn = (0, i.memo)(
                        ({
                            repairSpeedPlayerCap: e,
                            mortarRespawnTime: u,
                            airshipRespawnTime: t,
                            airshipCaptureDuration: n,
                            airshipHullDamageFactor: r,
                            airshipTurretDamageFactor: a,
                            pillboxRespawnTime: i,
                            flamerRespawnTime: o,
                        }) => {
                            const l = (r) =>
                                r === mn.Flamer
                                    ? o
                                    : r === mn.Pillbox
                                      ? i
                                      : r === mn.Repair
                                        ? e
                                        : r === mn.Mortar
                                          ? u
                                          : r === mn.Airship
                                            ? t
                                            : r === mn.Respawn
                                              ? n
                                              : void 0;
                            return s().createElement(
                                Dt,
                                null,
                                s().createElement(xu, { className: Je, text: cn.titel() }),
                                s().createElement(xu, {
                                    className: 'SupplyObjectsSection_mainTextWrapper_1c',
                                    text: cn.description.main(),
                                }),
                                s().createElement(xu, {
                                    className: 'SupplyObjectsSection_subtitleText_e8',
                                    text: cn.description.secondary(),
                                }),
                                s().createElement(xu, { className: f()(eu, sn), text: cn.subTitle.defend() }),
                                s().createElement(
                                    'div',
                                    { className: an },
                                    En.map((e) =>
                                        s().createElement(
                                            rn,
                                            ln(
                                                {
                                                    key: `defend_supply_${e.name}`,
                                                    className: f()(on, 'SupplyObjectsSection_sectionItem__small_5d'),
                                                },
                                                e,
                                                { value: l(e.name) },
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(xu, { className: f()(eu, sn), text: cn.subTitle.attack() }),
                                s().createElement(
                                    'div',
                                    { className: an },
                                    _n.map((e) =>
                                        s().createElement(
                                            rn,
                                            ln(
                                                {
                                                    key: `attack_supply_${e.name}`,
                                                    className: f()(
                                                        on,
                                                        e.isLast && 'SupplyObjectsSection_sectionItem__last_b2',
                                                    ),
                                                },
                                                e,
                                                {
                                                    value: l(e.name),
                                                    airshipHullDamageFactor: r,
                                                    airshipTurretDamageFactor: a,
                                                },
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    An = 'WinStrategySection_winText_7d',
                    gn = [
                        R.strings.fl_info_page.winStrategy.firstLine(),
                        R.strings.fl_info_page.winStrategy.secondLine(),
                        R.strings.fl_info_page.winStrategy.thirdLine(),
                    ],
                    Fn = (0, i.memo)(() =>
                        s().createElement(
                            Dt,
                            { classMix: 'WinStrategySection_base_b6' },
                            s().createElement(
                                'div',
                                { className: 'WinStrategySection_container_e8' },
                                s().createElement(
                                    'div',
                                    { className: 'WinStrategySection_text_17' },
                                    s().createElement(
                                        'div',
                                        { className: Je },
                                        R.strings.fl_info_page.winStrategy.header(),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: An },
                                        R.strings.fl_info_page.winStrategy.mapZones(),
                                    ),
                                    gn.map((e, u) => s().createElement(Ft, { key: u, text: e, classMix: An })),
                                ),
                                s().createElement('div', { className: 'WinStrategySection_img_9f' }),
                            ),
                        ),
                    ),
                    Dn = (0, Ie.Pi)(() => {
                        const e = oe(),
                            u = Ze(),
                            t = u.model,
                            n = u.controls,
                            r = (0, i.useState)(!1),
                            a = r[0],
                            o = r[1];
                        (0, i.useEffect)(() => {
                            const u = () => {
                                const u = e.animationScroll.scrollPosition.goal;
                                o(0 === u);
                            };
                            return (
                                e.events.on('change', u),
                                e.events.on('recalculateContent', u),
                                e.events.on('resizeHandled', u),
                                () => {
                                    (e.events.off('change', u),
                                        e.events.off('recalculateContent', u),
                                        e.events.off('resizeHandled', u));
                                }
                            );
                        }, [e]);
                        const l = t.root.get(),
                            c = l.isFullScreen,
                            m = l.isBattlePassAvailable,
                            E = l.startTimestamp,
                            _ = l.endTimestamp,
                            d = l.unlockableInBattleVehicleLevel,
                            A = l.sideDestructiblesArmor,
                            g = l.backDestructiblesArmor,
                            F = l.doorDestructiblesArmor,
                            D = l.ventilationDestructiblesArmor,
                            p = l.repairSpeedPlayerCap,
                            B = l.mortarRespawnTime,
                            C = l.airshipRespawnTime,
                            h = l.airshipCaptureDuration,
                            v = l.airshipHullDamageFactor,
                            b = l.airshipTurretDamageFactor,
                            S = l.pillboxRespawnTime,
                            x = l.flamerRespawnTime,
                            w = t.computes.getValidVehicleLevels(),
                            y = (0, i.useMemo)(() => Math.round((_ - E) / 86400), [E, _]);
                        var T;
                        return (
                            (T = () => c && n.close()),
                            Oe(ke.n.ESCAPE, T),
                            s().createElement(
                                'div',
                                { className: f()('InfoViewApp_base_a5', c && 'InfoViewApp_base__fullScreen_0a') },
                                s().createElement(
                                    He,
                                    {
                                        text: R.strings.fl_info_page.page.headerUpper(),
                                        classMix: 'InfoViewApp_pageTitle_5d',
                                    },
                                    s().createElement(qt, { startTimestamp: E, endTimestamp: _ }),
                                ),
                                c &&
                                    s().createElement(ve, {
                                        classNames: { base: 'InfoViewApp_closeButton_c4' },
                                        caption: R.strings.fl_info_page.page.backBtn(),
                                        type: 'back',
                                        side: 'left',
                                        onClick: n.close,
                                    }),
                                s().createElement(
                                    Be.Vertical.Area.Default,
                                    {
                                        className: f()(
                                            'InfoViewApp_scroll_0b',
                                            !a && 'InfoViewApp_scroll__fadedTop_a8',
                                        ),
                                        areaClassName: 'InfoViewApp_page_ca',
                                        scrollClassName: f()(
                                            'InfoViewApp_mainContent_9d',
                                            !c && 'InfoViewApp_mainContent__padded_64',
                                        ),
                                        api: e,
                                    },
                                    s().createElement(ht, {
                                        withBattlePass: m,
                                        duration: y,
                                        validVehicleLevels: w,
                                        unlockableInBattleVehicleLevel: d,
                                    }),
                                    s().createElement(dn, {
                                        repairSpeedPlayerCap: p,
                                        mortarRespawnTime: B,
                                        airshipRespawnTime: C,
                                        airshipCaptureDuration: h,
                                        airshipHullDamageFactor: v,
                                        airshipTurretDamageFactor: b,
                                        pillboxRespawnTime: S,
                                        flamerRespawnTime: x,
                                    }),
                                    s().createElement(Vt, null),
                                    0 !== d &&
                                        s().createElement(Ct, {
                                            validVehicleLevels: w,
                                            unlockableInBattleVehicleLevel: d,
                                        }),
                                    s().createElement(Xt, {
                                        sideDestructiblesArmor: A,
                                        backDestructiblesArmor: g,
                                        doorDestructiblesArmor: F,
                                        ventilationDestructiblesArmor: D,
                                    }),
                                    s().createElement(Wt, { withBattlePass: m }),
                                    s().createElement(Fn, null),
                                    s().createElement(pt, { withBattlePass: m, validVehicleLevels: w }),
                                    m && s().createElement(Mu, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(O, null, s().createElement(qe, null, s().createElement(Dn, null))),
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
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 153),
        (() => {
            var e = { 153: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        ((r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4946));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
