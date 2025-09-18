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
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const o = (function () {
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
                                        o = s[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
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
                        graphicsQuality: () => s,
                    }));
                var n = t(527);
                function r(e = 'px') {
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
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
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
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
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                (t.d(u, { n: () => n, s: () => r }),
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
                t.d(u, { B3: () => l, Z5: () => s, B0: () => i, ry: () => C });
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
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, n, r, s, o, 'throw', e);
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
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, A);
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
                    p = () => g(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                m = o.height,
                                _ = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(m),
                                };
                            g(i.POP_OVER, {
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
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, p);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            2904: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => Nt,
                        Bar: () => yt,
                        DefaultScroll: () => Lt,
                        Direction: () => Au,
                        defaultSettings: () => Fu,
                        useHorizontalScrollApi: () => Cu,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Zt, Bar: () => Yt, Default: () => Qt, useVerticalScrollApi: () => Pt }));
                var a = t(6179),
                    s = t.n(a),
                    o = t(493),
                    i = t.n(o),
                    l = t(6483),
                    c = t.n(l);
                function E(e) {
                    engine.call('PlaySound', e);
                }
                const m = {
                        playHighlight() {
                            E('highlight');
                        },
                        playClick() {
                            E('play');
                        },
                        playYes() {
                            E('yes1');
                        },
                    },
                    _ = {
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
                let d, A;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(d || (d = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(A || (A = {})));
                const F = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: m,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: C,
                    onClick: g,
                }) => {
                    const p = (0, a.useRef)(null),
                        B = (0, a.useState)(t),
                        h = B[0],
                        f = B[1],
                        v = (0, a.useState)(!1),
                        b = v[0],
                        S = v[1],
                        x = (0, a.useState)(!1),
                        w = x[0],
                        T = x[1],
                        y = (0, a.useCallback)(() => {
                            r || (p.current && (p.current.focus(), f(!0)));
                        }, [r]),
                        M = (0, a.useCallback)(
                            (e) => {
                                h && null !== p.current && !p.current.contains(e.target) && f(!1);
                            },
                            [h],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (g && g(e));
                            },
                            [r, g],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (null !== i && E(i), m && m(e), T(!0));
                            },
                            [r, i, m],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                r || (D && D(e), S(!1));
                            },
                            [r, D],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && E(l), F && F(e), t && y(), S(!0));
                            },
                            [r, l, F, y, t],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                r || (C && C(e), S(!1));
                            },
                            [r, C],
                        ),
                        H = c()(
                            _.base,
                            _[`base__${n}`],
                            {
                                [_.base__disabled]: r,
                                [_[`base__${u}`]]: u,
                                [_.base__focus]: h,
                                [_.base__highlightActive]: b,
                                [_.base__firstHover]: w,
                            },
                            o,
                        ),
                        U = c()(_.state, _.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, a.useEffect)(() => {
                            f(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: P,
                                onMouseUp: k,
                                onMouseDown: O,
                                onMouseLeave: I,
                                onClick: L,
                            },
                            n !== d.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: _.back }),
                                    s().createElement('span', { className: _.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: U },
                                s().createElement('span', { className: _.stateDisabled }),
                                s().createElement('span', { className: _.stateHighlightHover }),
                                s().createElement('span', { className: _.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: _.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                F.defaultProps = { type: d.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const D = (0, a.memo)(F);
                var C = t(9887),
                    g = t.n(C);
                const p = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var B = t(3138);
                const h = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var f;
                function v(e, u, t) {
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
                })(f || (f = {}));
                const b = B.O.client.getSize('rem'),
                    S = b.width,
                    x = b.height,
                    w = Object.assign({ width: S, height: x }, v(S, x, h)),
                    T = (0, a.createContext)(w),
                    y = ['children'];
                const M = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, y);
                    const n = (0, a.useContext)(T),
                        r = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        i = n.small,
                        l = n.extraSmall,
                        c = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        _ = n.smallWidth,
                        d = n.extraSmallWidth,
                        A = n.extraLargeHeight,
                        F = n.largeHeight,
                        D = n.mediumHeight,
                        C = n.smallHeight,
                        g = n.extraSmallHeight,
                        B = { extraLarge: A, large: F, medium: D, small: C, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && i) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return p(u, t, B);
                        if (t.largeWidth && E) return p(u, t, B);
                        if (t.mediumWidth && m) return p(u, t, B);
                        if (t.smallWidth && _) return p(u, t, B);
                        if (t.extraSmallWidth && d) return p(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                M.defaultProps = {
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
                (0, a.memo)(M);
                const L = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    N = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(T),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = B.O.view.pxToRem(e),
                                    n = B.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, v(t, n, h)));
                            }, []);
                        (L(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const i = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(T.Provider, { value: i }, e);
                    });
                let P, k, O;
                (!(function (e) {
                    ((e[(e.ExtraSmall = h.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = h.small.width)] = 'Small'),
                        (e[(e.Medium = h.medium.width)] = 'Medium'),
                        (e[(e.Large = h.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = h.extraLarge.width)] = 'ExtraLarge'));
                })(P || (P = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = h.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = h.small.width)] = 'Small'),
                            (e[(e.Medium = h.medium.width)] = 'Medium'),
                            (e[(e.Large = h.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = h.extraLarge.width)] = 'ExtraLarge'));
                    })(k || (k = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = h.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = h.small.height)] = 'Small'),
                            (e[(e.Medium = h.medium.height)] = 'Medium'),
                            (e[(e.Large = h.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = h.extraLarge.height)] = 'ExtraLarge'));
                    })(O || (O = {})));
                const I = () => {
                        const e = (0, a.useContext)(T),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return P.ExtraLarge;
                                    case e.large:
                                        return P.Large;
                                    case e.medium:
                                        return P.Medium;
                                    case e.small:
                                        return P.Small;
                                    case e.extraSmall:
                                        return P.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), P.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return k.ExtraLarge;
                                    case e.largeWidth:
                                        return k.Large;
                                    case e.mediumWidth:
                                        return k.Medium;
                                    case e.smallWidth:
                                        return k.Small;
                                    case e.extraSmallWidth:
                                        return k.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), k.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return O.ExtraLarge;
                                    case e.largeHeight:
                                        return O.Large;
                                    case e.mediumHeight:
                                        return O.Medium;
                                    case e.smallHeight:
                                        return O.Small;
                                    case e.extraSmallHeight:
                                        return O.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), O.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    H = ['xl', 'lg', 'md', 'sm', 'xs'],
                    U = (e) => e.includes('_') && ((e) => H.includes(e))(e.split('_').at(-1)),
                    W = [P.ExtraLarge, P.Large, P.Medium, P.Small, P.ExtraSmall],
                    G = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (U(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = W.indexOf(u),
                                    s = (-1 !== a ? H.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => H.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    $ = (e, u = G) => {
                        const t = (
                            (e, u = G) =>
                            (t) => {
                                const n = I().mediaSize,
                                    r = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return s().createElement(e, r);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => U(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    z = {
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
                    X = [
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
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                Object.keys(g());
                const j = {
                        XL: { mt: z.mt__XL, mr: z.mr__XL, mb: z.mb__XL, ml: z.ml__XL },
                        LG: { mt: z.mt__LG, mr: z.mr__LG, mb: z.mb__LG, ml: z.ml__LG },
                        MDp: { mt: z.mt__MDp, mr: z.mr__MDp, mb: z.mb__MDp, ml: z.ml__MDp },
                        MD: { mt: z.mt__MD, mr: z.mr__MD, mb: z.mb__MD, ml: z.ml__MD },
                        SMp: { mt: z.mt__SMp, mr: z.mr__SMp, mb: z.mb__SMp, ml: z.ml__SMp },
                        SM: { mt: z.mt__SM, mr: z.mr__SM, mb: z.mb__SM, ml: z.ml__SM },
                        XS: { mt: z.mt__XS, mr: z.mr__XS, mb: z.mb__XS, ml: z.ml__XS },
                    },
                    V = (Object.keys(j), ['mt', 'mr', 'mb', 'ml']),
                    Y = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    K = $((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            o = e.mt,
                            i = void 0 === o ? r : o,
                            l = e.mr,
                            E = void 0 === l ? r : l,
                            m = e.mb,
                            _ = void 0 === m ? r : m,
                            d = e.ml,
                            A = void 0 === d ? r : d,
                            F = e.column,
                            D = e.row,
                            C = e.flexDirection,
                            g = void 0 === C ? (F ? 'column' : D && 'row') || void 0 : C,
                            p = e.flexStart,
                            B = e.center,
                            h = e.flexEnd,
                            f = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            S =
                                void 0 === b
                                    ? (p ? 'flex-start' : B && 'center') ||
                                      (h && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            x = e.alignItems,
                            w = void 0 === x ? (p ? 'flex-start' : B && 'center') || (h && 'flex-end') || void 0 : x,
                            R = e.alignSelf,
                            T = e.wrap,
                            y = e.flexWrap,
                            M = void 0 === y ? (T ? 'wrap' : void 0) : y,
                            L = e.grow,
                            N = e.shrink,
                            P = e.flex,
                            k = void 0 === P ? (L || N ? `${L ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : P,
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
                            })(e, X);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: E, mb: _, ml: A },
                                    u = ((e) =>
                                        V.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(j[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        V.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[Y[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: R,
                                        display: g || w ? 'flex' : void 0,
                                        flexDirection: g,
                                        flexWrap: M,
                                        justifyContent: S,
                                        alignItems: w,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, i, E, _, A, O, k, R, g, M, S, w]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return s().createElement('div', q({ className: c()(z.base, ...G, u), style: W }, H), I);
                    });
                let Q;
                function Z(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Q || (Q = {}));
                const J = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ee = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ue = (e, u, t = Q.left) => e.split(u).reduce(t === Q.left ? J : ee, []),
                    te = (() => {
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
                    ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    re = (e, u = Q.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return ne.includes(t)
                            ? te(e)
                            : ((e, u = Q.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return (ue(r, /( )/, u).forEach((e) => (t = t.concat(ue(e, n, Q.left)))), t);
                              })(e, u);
                    },
                    ae = 'FormatText_base_d0',
                    se = ({ binding: e, text: u = '', classMix: t, alignment: n = Q.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      s().createElement(
                                          'div',
                                          { className: c()(ae, t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : re(e, u))))(u, n, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var oe = t(3532),
                    ie = t.n(oe);
                const le = {
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
                    ce = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                Object.keys(g());
                const me = Object.keys(ie()),
                    _e = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    de = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ae = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Fe = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    De =
                        (Object.keys(Fe),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': _e,
                            'heading-H36': _e,
                            'heading-H28': de,
                            'heading-H24': de,
                            'heading-H24R': de,
                            'heading-H22': de,
                            'heading-H20R': de,
                            'heading-H18': de,
                            'heading-H15': Ae,
                            'heading-H14': Ae,
                            'paragraph-P24': de,
                            'paragraph-P18': de,
                            'paragraph-P16': de,
                            'paragraph-P14': Ae,
                            'paragraph-P12': Ae,
                            'paragraph-P10': Ae,
                        }),
                    Ce =
                        (Object.keys(De),
                        (e) =>
                            e
                                ? ((e) => me.includes(e))(e)
                                    ? { colorClassName: le[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ge = $((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            E = e.mr,
                            m = void 0 === E ? o : E,
                            _ = e.mb,
                            d = void 0 === _ ? o : _,
                            A = e.ml,
                            F = void 0 === A ? o : A,
                            D = e.style,
                            C = e.format,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ce);
                        const p = (0, a.useMemo)(() => {
                                const e = Ce(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, r]),
                            B = p.computedStyle,
                            h = p.colorClassName;
                        return s().createElement(
                            K,
                            Ee(
                                {
                                    className: c()(le.base, t && le[t], h, n),
                                    style: B,
                                    mt: !0 === l ? De[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? De[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === d ? De[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === F ? De[t || 'paragraph-P16'].ml : F,
                                },
                                g,
                            ),
                            void 0 !== C ? s().createElement(se, Ee({}, C, { text: u })) : u,
                        );
                    }),
                    pe = {
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
                    Be = [
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
                class fe extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && E(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && E(this.props.soundClick));
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
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            E = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
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
                                })(e, Be)),
                            d = c()(pe.base, pe[`base__${a}`], pe[`base__${r}`], null == o ? void 0 : o.base),
                            A = c()(pe.icon, pe[`icon__${a}`], pe[`icon__${r}`], null == o ? void 0 : o.icon),
                            F = c()(pe.glow, null == o ? void 0 : o.glow),
                            D = c()(pe.caption, pe[`caption__${a}`], null == o ? void 0 : o.caption),
                            C = c()(pe.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            he(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== a && s().createElement('div', { className: pe.shine }),
                            s().createElement('div', { className: A }, s().createElement('div', { className: F })),
                            s().createElement('div', { className: D }, u),
                            n && s().createElement('div', { className: C }, n),
                        );
                    }
                }
                fe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                let ve;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'),
                        (e[(e.Success = 1)] = 'Success'),
                        (e[(e.Failed = 2)] = 'Failed'));
                })(ve || (ve = {}));
                const be = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
                function Se() {
                    const e = (0, a.useRef)(!0);
                    var u;
                    return (
                        (u = () => {
                            e.current = !1;
                        }),
                        (0, a.useEffect)(u, []),
                        e.current
                    );
                }
                var xe = t(5521),
                    we = t(4179);
                const Re = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Te(e = xe.n.NONE, u = Re, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== xe.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (B.O.view.isEventHandled()) return;
                                (B.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var ye = t(3403);
                function Me(e) {
                    return e;
                }
                function Le() {
                    return !1;
                }
                console.log;
                var Ne = t(9174);
                function Pe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ke(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ke(e, u);
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
                function ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Oe = (e) => (0 === e ? window : window.subViews.get(e));
                function Ie(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const He = Ie;
                function Ue(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var We = t(3946);
                let Ge;
                !(function (e) {
                    ((e.NORMAL = 'normal'), (e.ERROR = 'error'), (e.CONFORMITY = 'conformity'));
                })(Ge || (Ge = {}));
                const $e = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: o, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (t, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Oe,
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
                                                const s = (e) => {
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
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            i = B.O.view.addModelObserver(o, u, !0);
                                                        return (r.set(i, t), e && t(s(a)), i);
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
                                                        for (var e, t = Pe(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : i(e),
                                                            r = Ne.LO.box(n, { equals: Le });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : i(e),
                                                            r = Ne.LO.box(n, { equals: Le });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = i(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Ne.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ne.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                                cleanup: c,
                                            }),
                                            m = { mode: t, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    _ = m[0],
                                    d = m[1],
                                    A = (0, a.useState)(() => c(n, r, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(_, r, i)) : (E.current = !0);
                                    }, [i, _, r]),
                                    (0, a.useEffect)(() => {
                                        d(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    resetVehicles: e.array('resetVehicles'),
                                    pageState: Ne.LO.box('default'),
                                    checkboxState: Ne.LO.box(!1),
                                    captchaState: Ne.LO.box(Ge.NORMAL),
                                },
                                t = (0, We.Om)(
                                    () =>
                                        Ue(u.resetVehicles.get(), (e) =>
                                            Object.assign({}, e, {
                                                vehicleInfo: Object.assign({}, e.vehicleInfo, {
                                                    tags: Ue(e.vehicleInfo.tags, Me),
                                                }),
                                                returnedItems: Ue(e.returnedItems, (e) =>
                                                    Object.assign({}, e, { groupInfo: Ue(e.groupInfo, Me) }),
                                                ),
                                            }),
                                        ),
                                    { equals: Le },
                                ),
                                n = (0, We.Om)(
                                    () =>
                                        (function (e, u, t) {
                                            if (Array.isArray(e)) return e.reduce(u, t);
                                            let n = t;
                                            for (let t = 0; t < e.length; t++) n = u(n, He(e, t), t, e);
                                            return n;
                                        })(t(), (e, u) => e + u.progressPoints, 0),
                                    { equals: Le },
                                );
                            return Object.assign({}, u, {
                                computes: { getResetVehicles: t, getTotalProgressPoints: n },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            setCaptchaState: (0, Ne.aD)((e) => {
                                u.captchaState.set(e);
                            }),
                            setCheckboxState: (0, Ne.aD)((e) => {
                                u.checkboxState.set(e);
                            }),
                            close: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            onInstallVehicleConfiguration: e.createCallback(
                                (e) => ({ configuration: e }),
                                'onInstallVehicleConfiguration',
                            ),
                        }),
                    ),
                    ze = $e[0],
                    Xe = $e[1];
                let qe, je, Ve, Ye, Ke, Qe;
                (!(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'),
                        (e[(e.Success = 1)] = 'Success'),
                        (e[(e.Failed = 2)] = 'Failed'));
                })(qe || (qe = {})),
                    (function (e) {
                        ((e[(e.INFO = 0)] = 'INFO'),
                            (e[(e.DETAILS = 1)] = 'DETAILS'),
                            (e[(e.CAPTCHA = 2)] = 'CAPTCHA'));
                    })(je || (je = {})),
                    (function (e) {
                        ((e[(e.OptionalDevices = 0)] = 'OptionalDevices'),
                            (e[(e.BattleBoosters = 1)] = 'BattleBoosters'),
                            (e[(e.Shells = 2)] = 'Shells'),
                            (e[(e.Customization = 3)] = 'Customization'),
                            (e[(e.Equipments = 4)] = 'Equipments'),
                            (e[(e.Crew = 5)] = 'Crew'));
                    })(Ve || (Ve = {})),
                    (function (e) {
                        ((e.MEDIUM = 'medium'), (e.SMALL = 'small'));
                    })(Ye || (Ye = {})),
                    (function (e) {
                        ((e.CREDITS = 'credits'), (e.EQUIPMENTS = 'equipment'), (e.BLUEPRINTS = 'finalBlueprints'));
                    })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.INFO = 'info-page'), (e.DETAILS = 'details-page'), (e.RETURN_ITEMS = 'return-items'));
                    })(Qe || (Qe = {})));
                const Ze = {
                        base: 'App_base_87',
                        content: 'App_content_2c',
                        content__captcha: 'App_content__captcha_f5',
                        content__result: 'App_content__result_5d',
                        close: 'App_close_a3',
                        header: 'App_header_9a',
                        captchaWrapper: 'App_captchaWrapper_30',
                        footer: 'App_footer_df',
                        footer__captcha: 'App_footer__captcha_8e',
                        resultScreenButton: 'App_resultScreenButton_5c',
                    },
                    Je = (e) => {
                        if (!e) return !1;
                        const u = e.getBoundingClientRect(),
                            t = u.width,
                            n = u.height;
                        return 0 !== t && 0 !== n;
                    },
                    eu = (e) => {
                        const u = (0, a.useState)(Je(e ? e.current : null)),
                            t = u[0],
                            n = u[1];
                        return (
                            (0, a.useEffect)(() => {
                                let u = 0;
                                const t = () => {
                                    u = requestAnimationFrame(() => {
                                        Je(e ? e.current : null) ? n(!0) : t();
                                    });
                                };
                                return (
                                    t(),
                                    () => {
                                        cancelAnimationFrame(u);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => () => n(!1), [e]),
                            t
                        );
                    },
                    uu = {
                        base: 'Captcha_base_24',
                        base__error: 'Captcha_base__error_32',
                        base__conformity: 'Captcha_base__conformity_9b',
                        glow: 'Captcha_glow_1b',
                        border: 'Captcha_border_66',
                        header: 'Captcha_header_1d',
                        captchaValue: 'Captcha_captchaValue_3f',
                        input: 'Captcha_input_cd',
                        input__notEmpty: 'Captcha_input__notEmpty_a2',
                        warning: 'Captcha_warning_99',
                        warningIcon: 'Captcha_warningIcon_85',
                        warningText: 'Captcha_warningText_5b',
                        conformityIcon: 'Captcha_conformityIcon_0a',
                    },
                    tu = R.strings.paragons.resetBranch.captcha,
                    nu = /^\d+$/,
                    ru = /\s/g,
                    au = (e) => e.replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                    su = (0, ye.Pi)(() => {
                        const e = Xe(),
                            u = e.model,
                            t = e.controls,
                            n = (0, a.useRef)(null),
                            r = (0, a.useState)(''),
                            o = r[0],
                            i = r[1],
                            l = (0, a.useState)(''),
                            _ = l[0],
                            d = l[1],
                            A = eu(n),
                            F = u.root.get().totalCredits,
                            D = we.Z5.getNumberFormat(F, we.B3.INTEGRAL),
                            C = u.captchaState.get(),
                            g = C === Ge.ERROR,
                            p = C === Ge.CONFORMITY,
                            B = c()(uu.base, g && uu.base__error, p && uu.base__conformity);
                        (0, a.useEffect)(() => {
                            A && n.current && n.current.focus();
                        }, [A]);
                        const h = (e, u, t) =>
                                e
                                    .split('')
                                    .filter((e, n) => (n < u || n >= t) && ' ' !== e)
                                    .join(''),
                            f = (0, a.useCallback)(
                                (e) => {
                                    const u = o.replace(ru, ''),
                                        n = F.toString().slice(0, u.toString().length);
                                    String(u) !== n
                                        ? (t.setCaptchaState(Ge.ERROR), e && E(R.sounds.paragons_captcha_incorrect()))
                                        : u.toString().length === String(F).length
                                          ? (t.setCaptchaState(Ge.CONFORMITY),
                                            e && E(R.sounds.paragons_captcha_enter()))
                                          : (t.setCaptchaState(Ge.NORMAL), e && E(R.sounds.paragons_captcha_correct()));
                                },
                                [t, o, F],
                            );
                        (0, a.useEffect)(() => {
                            f(o.length > _.length);
                        }, [o, f]);
                        return s().createElement(
                            'div',
                            { className: B },
                            g && s().createElement('div', { className: uu.glow }),
                            s().createElement('div', { className: uu.border }),
                            s().createElement(ge, { text: tu.header(), className: uu.header }),
                            s().createElement(ge, { text: String(D), className: uu.captchaValue }),
                            s().createElement('input', {
                                ref: n,
                                className: c()(
                                    uu.input,
                                    o && uu.input__notEmpty,
                                    g && uu.input__error,
                                    p && uu.input__comnformity,
                                ),
                                type: 'number',
                                value: o,
                                onChange: (e) => {
                                    const u = e.currentTarget.value.replace(ru, ''),
                                        t = nu.test(u);
                                    if (u.length > F.toString().length) return;
                                    const r = n.current;
                                    if (t || '' === u) {
                                        const e = au(u);
                                        if ((i(e), d(o), e.length === o.length - 2 && r && null !== r.selectionStart)) {
                                            const e = r.selectionStart - 1 >= 0 ? r.selectionStart - 1 : 0;
                                            r.setSelectionRange(e, e);
                                        }
                                        e.length - 2 === o.length &&
                                            r &&
                                            null !== r.selectionStart &&
                                            setTimeout(
                                                () => r.setSelectionRange(r.selectionStart + 1, r.selectionStart + 1),
                                                0,
                                            );
                                    } else
                                        r &&
                                            null !== r.selectionStart &&
                                            r.setSelectionRange(r.selectionStart - 1, r.selectionStart - 1);
                                },
                                onClick: () => {
                                    E(R.sounds.yes1());
                                },
                                onMouseEnter: () => {
                                    m.playHighlight();
                                },
                                onKeyDown: (e) => {
                                    ((e.which !== xe.n.DELETE && e.which !== xe.n.BACKSPACE) ||
                                        E(R.sounds.paragons_captcha_delete()),
                                        (e.which === xe.n.SPACE ||
                                            e.getModifierState(xe.s.CONTROL) ||
                                            e.getModifierState(xe.s.SHIFT)) &&
                                            e.preventDefault());
                                    const u = e.currentTarget,
                                        t = u.selectionStart,
                                        n = u.selectionEnd,
                                        r = t !== n;
                                    if (
                                        (r &&
                                            null !== t &&
                                            null !== n &&
                                            setTimeout(() => {
                                                const e = o.split('').filter((e) => ' ' === e).length,
                                                    r = o.split('').splice(t, n - t),
                                                    a = e - u.value.split('').filter((e) => ' ' === e).length,
                                                    s =
                                                        u.value.replace(ru, '').length ===
                                                        o.replace(ru, '').length - r.join('').replace(ru, '').length;
                                                if (a && s) {
                                                    const e = t - a >= 0 ? t - a : 0;
                                                    r.includes(' ')
                                                        ? u.setSelectionRange(t, t)
                                                        : u.setSelectionRange(e, e);
                                                } else if (!s && r.length > 1) {
                                                    const e =
                                                        o.split('').filter((e, u) => ' ' === e && u < t).length -
                                                        u.value.split('').filter((e, u) => ' ' === e && u < t).length;
                                                    if (e) u.setSelectionRange(t + 1 - e, t + 1 - e);
                                                    else {
                                                        const e = 2 === r.length && r.includes(' ') ? 2 : 1;
                                                        u.setSelectionRange(t + e, t + e);
                                                    }
                                                }
                                            }, 0),
                                        e.which !== xe.n.BACKSPACE ||
                                            r ||
                                            (t &&
                                                ' ' === o[t - 1] &&
                                                (e.preventDefault(),
                                                i((e) => {
                                                    const u = h(e, t - 2, t);
                                                    return au(u);
                                                }),
                                                u.setSelectionRange(t - 2, t - 2))),
                                        e.which === xe.n.DELETE && !r && t && ' ' === o[t])
                                    ) {
                                        e.preventDefault();
                                        const n = h(o, t, t + 2),
                                            r = au(n);
                                        (i(r),
                                            o.length - 2 === r.length
                                                ? u.setSelectionRange(t, t)
                                                : u.setSelectionRange(t + 1, t + 1));
                                    }
                                },
                                maxLength: au(F.toString()).length,
                            }),
                            g &&
                                s().createElement(
                                    'div',
                                    { className: uu.warning },
                                    s().createElement('div', { className: uu.warningIcon }),
                                    s().createElement(ge, { text: tu.error(), className: uu.warningText }),
                                ),
                            p && s().createElement('div', { className: uu.conformityIcon }),
                        );
                    }),
                    ou = (e, u, t) => (t < e ? e : t > u ? u : t),
                    iu = (e) => {
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
                    };
                function lu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return cu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return cu(e, u);
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
                function cu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Eu = [];
                function mu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Eu)
                    );
                }
                function _u(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        ((s = Date.now()), t.apply(l, i));
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (o(), (a = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                }
                var du = t(7030);
                let Au;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Au || (Au = {}));
                const Fu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Du = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return ou(r, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Fu : l,
                                E = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = lu(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                d = _u(
                                    () => {
                                        B.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, du.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), s && d());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                C = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = C(u, e, n);
                                        g(a);
                                    },
                                    [g, C, c.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(n(e)),
                                            E.current && _.trigger('mouseWheel', e, F.scrollPosition, u(E.current)));
                                    },
                                    [F.scrollPosition, p, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        iu(() => {
                                            const e = E.current;
                                            e &&
                                                (g(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [g, F.scrollPosition.goal],
                                ),
                                v = mu(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && g(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            const b = (0, a.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, g, p, b, _.off, _.on, v, h, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Cu = Du({
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
                        getDirection: (e) => (e.deltaY > 1 ? Au.Next : Au.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    gu = [
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
                function pu(e) {
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
                const Bu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: we.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    hu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
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
                            g = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, gu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
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
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Bu(t, d, { isMouseEvent: !0, on: !0, arguments: pu(n) }, f),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, d, n, f, g]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Bu(t, d, { on: !1 }, f),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, f, p]),
                            S = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ));
                        return F
                            ? (0, a.cloneElement)(
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
                                              (b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === m && b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === m && b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    fu = ['children'];
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
                const bu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, fu);
                    return s().createElement(
                        hu,
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
                let Su, xu, wu, Ru, Tu, yu, Mu;
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
                        (e.WtStamp = 'stamp'),
                        (e.WtHunter = 'wt_hunter'),
                        (e.WtHunterCollection = 'hunter_collection'),
                        (e.WtTicket = 'wtevent_ticket'),
                        (e.WtMainPrizeDiscount = 'main_prize_discount'),
                        (e.WtTicket25 = 'wtevent_ticket25'));
                })(Su || (Su = {})),
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
                    })(xu || (xu = {})),
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
                    })(wu || (wu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Ru || (Ru = {})),
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
                    })(Tu || (Tu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
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
                    })(Mu || (Mu = {})));
                const Lu = {
                        [Ve.OptionalDevices]: 'optionalDevices',
                        [Ve.Shells]: 'shells',
                        [Ve.Customization]: 'customization',
                        [Ve.Equipments]: 'equipments',
                        [Ve.BattleBoosters]: 'battleBoosters',
                        [Ve.Crew]: 'crew',
                    },
                    Nu = {
                        [Ve.OptionalDevices]: 'hangarCardModule',
                        [Ve.Shells]: 'defaultShell',
                        [Ve.Customization]: 'techCustomizationItem',
                        [Ve.Equipments]: 'hangarCardModule',
                        [Ve.BattleBoosters]: 'battleBoosterBlock',
                        [Ve.Crew]: '',
                        VEHICLE: 'awardVehicle',
                    },
                    Pu = (e, u) => {
                        const t = R.strings.paragons.resetBranch.tooltip;
                        switch (e) {
                            case Ke.CREDITS:
                                return {
                                    header: t.credits.header(),
                                    description: t.credits.description(),
                                    contentId: R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                };
                            case Ke.EQUIPMENTS:
                                return {
                                    header: t.returnBack.header(),
                                    description: t.returnBack.description(),
                                    additionalDescription: t.returnBack.additionalDescription(),
                                    contentId: R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                };
                            case Ke.BLUEPRINTS:
                                return {
                                    contentId: R.views.lobby.paragons.tooltips.BlueprintUniversalTooltip('resId'),
                                    vehicleCD: u,
                                };
                        }
                    },
                    ku = (e, u, t) =>
                        e === Ve.Crew
                            ? { invID: t, contentId: R.views.lobby.crew.tooltips.TankmanTooltip('resId') }
                            : { intCD: t, alias: Nu[e], vehicleCD: u },
                    Ou = 'Frame_base_b1',
                    Iu = 'Frame_corners_57',
                    Hu = 'Frame_stroke_34',
                    Uu = 'Frame_corner_08',
                    Wu = [
                        'Frame_corner__topLeft_a0',
                        'Frame_corner__topRight_12',
                        'Frame_corner__bottomLeft_6e',
                        'Frame_corner__bottomRight_17',
                    ],
                    Gu = (0, a.memo)(() =>
                        s().createElement(
                            'div',
                            { className: Ou },
                            s().createElement(
                                'div',
                                { className: Iu },
                                Wu.map((e) => s().createElement('div', { key: e, className: c()(Uu, e) })),
                            ),
                            s().createElement('div', { className: Hu }),
                        ),
                    ),
                    $u = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    zu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Xu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    qu = (e) =>
                        Xu
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = zu.length - 1; t >= 0; t--)
                                      for (; e >= zu[t]; ) ((u += $u[t]), (e -= zu[t]));
                                  return u;
                              })(e),
                    ju = {
                        base: 'VehicleName_base_1f',
                        base__small: 'VehicleName_base__small_39',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_37',
                        vehicleType: 'VehicleName_vehicleType_6b',
                    },
                    Vu = R.images.gui.maps.icons.vehicleTypes,
                    Yu = (0, a.memo)(({ name: e, level: u, type: t, size: n = Ye.MEDIUM, isPremium: r = !1 }) => {
                        const a = `${Z(t)}${r ? '_elite' : ''}`,
                            o = n === Ye.SMALL,
                            i = o ? 'c_24x24' : 'big',
                            l = Vu.$dyn(i);
                        return s().createElement(
                            'div',
                            { className: c()(ju.base, o && ju.base__small) },
                            s().createElement(ge, { text: qu(u) }),
                            s().createElement(
                                'div',
                                { className: ju.vehicleTypeContainer },
                                s().createElement('div', {
                                    className: ju.vehicleType,
                                    style: { backgroundImage: `url(${l.$dyn(a)})` },
                                }),
                            ),
                            s().createElement(ge, { text: e, className: ju.shortName }),
                        );
                    }),
                    Ku = {
                        base: 'Card_base_c4',
                        container: 'Card_container_a5',
                        container__scale: 'Card_container__scale_c1',
                        scaleDown: 'Card_scaleDown_9c',
                        scaleUp: 'Card_scaleUp_47',
                        frame: 'Card_frame_fb',
                        card: 'Card_card_a5',
                        glow: 'Card_glow_93',
                        vehicle: 'Card_vehicle_22',
                        vehicleName: 'Card_vehicleName_14',
                        vehicleIcon: 'Card_vehicleIcon_25',
                        shadow: 'Card_shadow_04',
                        typeWrapper: 'Card_typeWrapper_e8',
                        level: 'Card_level_bf',
                        name: 'Card_name_02',
                        inner: 'Card_inner_69',
                        cardContent: 'Card_cardContent_36',
                    },
                    Qu = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? we.B3.GOLD : we.B3.INTEGRAL;
                            return void 0 === e ? '' : we.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? s().createElement('span', null, t) : null;
                    },
                    Zu = [
                        Su.Items,
                        Su.Equipment,
                        Su.Xp,
                        Su.XpFactor,
                        Su.Blueprints,
                        Su.BlueprintsAny,
                        Su.Goodies,
                        Su.Berths,
                        Su.Slots,
                        Su.Tokens,
                        Su.CrewSkins,
                        Su.CrewBooks,
                        Su.Customizations,
                        Su.CreditsFactor,
                        Su.TankmenXp,
                        Su.TankmenXpFactor,
                        Su.FreeXpFactor,
                        Su.BattleToken,
                        Su.PremiumUniversal,
                        Su.NaturalCover,
                        Su.BpCoin,
                        Su.BattlePassSelectToken,
                        Su.BattlaPassFinalAchievement,
                        Su.BattleBadge,
                        Su.BonusX5,
                        Su.CrewBonusX3,
                        Su.NewYearFillers,
                        Su.NewYearInvoice,
                        Su.EpicSelectToken,
                        Su.Comp7TokenWeeklyReward,
                        Su.Comp7TokenCouponReward,
                        Su.BattleBoosterGift,
                        Su.CosmicLootboxCommon,
                        Su.CosmicLootboxSilver,
                        Su.SelectableBonus,
                        Su.GoldenTicket,
                        Su.PostStamp,
                        Su.WtStamp,
                        Su.WtTicket,
                        Su.WtMainPrizeDiscount,
                        Su.WtHunter,
                        Su.WtHunterCollection,
                    ],
                    Ju = [Su.Gold, Su.Credits, Su.Crystal, Su.FreeXp],
                    et = [Su.BattlePassPoints],
                    ut = [Su.PremiumPlus, Su.Premium],
                    tt = ['engravings', 'backgrounds'],
                    nt = ['engraving', 'background'],
                    rt = (e, u = wu.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case wu.S600x450:
                                        return 'c_600x450';
                                    case wu.S400x300:
                                        return 'c_400x300';
                                    case wu.S296x222:
                                        return 'c_296x222';
                                    case wu.S232x174:
                                        return 'c_232x174';
                                    case wu.Big:
                                        return 'c_80x80';
                                    case wu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case wu.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case wu.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = tt[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(nt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case wu.S600x450:
                                            return 'c_600x450';
                                        case wu.S400x300:
                                            return 'c_400x300';
                                        case wu.S296x222:
                                            return 'c_296x222';
                                        case wu.S232x174:
                                            return 'c_232x174';
                                        case wu.S180x135:
                                            return 'big';
                                        case wu.Big:
                                        case wu.S80x80:
                                            return 'c_80x80';
                                        case wu.Small:
                                        case wu.S48x48:
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
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    at = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ot = R.views.common.tooltip_window.simple_tooltip_content,
                    it = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, at);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, i]);
                        return s().createElement(
                            hu,
                            st(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? ot.SimpleTooltipHtmlContent('resId') : ot.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ct = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(it, u, n);
                        const r = u.contentId,
                            a = u.args,
                            o = null == a ? void 0 : a.contentId;
                        return r || o
                            ? s().createElement(hu, lt({}, u, { contentId: r || o }), n)
                            : s().createElement(bu, u, n);
                    },
                    Et = {
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
                    mt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = wu.Big,
                        special: r,
                        value: a,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: E,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Tu.BATTLE_BOOSTER:
                                    case Tu.BATTLE_BOOSTER_REPLACE:
                                        return yu.BATTLE_BOOSTER;
                                }
                            })(r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Tu.BATTLE_BOOSTER:
                                        return Mu.BATTLE_BOOSTER;
                                    case Tu.BATTLE_BOOSTER_REPLACE:
                                        return Mu.BATTLE_BOOSTER_REPLACE;
                                    case Tu.BUILT_IN_EQUIPMENT:
                                        return Mu.BUILT_IN_EQUIPMENT;
                                    case Tu.EQUIPMENT_PLUS:
                                        return Mu.EQUIPMENT_PLUS;
                                    case Tu.EQUIPMENT_TROPHY_BASIC:
                                        return Mu.EQUIPMENT_TROPHY_BASIC;
                                    case Tu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Mu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Mu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Mu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Mu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Mu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Mu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Mu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Mu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Ru.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Ru.CURRENCY:
                                    case Ru.NUMBER:
                                        return s().createElement(Qu, { format: 'integral', value: Number(e) });
                                    case Ru.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            { className: c()(Et.base, Et[`base__${n}`], l), style: i },
                            s().createElement(
                                ct,
                                { tooltipArgs: m, className: Et.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: c()(Et.image, null == E ? void 0 : E.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: c()(Et.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: c()(Et.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: c()(Et.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Et.info,
                                                    Et[`info__${e}`],
                                                    o === Ru.MULTI && Et.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    ct,
                                    { tooltipArgs: _ },
                                    s().createElement('div', {
                                        className: c()(Et.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    _t = [Su.Branch, Su.VehicleSelect, Su.ParagonsUnlocks, Su.StyleProgress],
                    dt = (e, u = wu.Small) => {
                        const t = Z(e.vehicleName || '');
                        if (e.name === Su.Vehicles)
                            switch (u) {
                                case wu.Mini:
                                case wu.Small:
                                case wu.S48x48:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                case wu.Big:
                                case wu.S80x80:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                case wu.S128x100:
                                case wu.S180x135:
                                    return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                case wu.S232x174:
                                case wu.S296x222:
                                    return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                case wu.S400x300:
                                case wu.S600x450:
                                    return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                default:
                                    return (
                                        console.error('Unknown vehicle image size', u, e.vehicleName),
                                        'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                    );
                            }
                        if (e.name === Su.TmanToken)
                            switch (u) {
                                case wu.Mini:
                                case wu.Small:
                                case wu.S48x48:
                                case wu.Big:
                                case wu.S80x80:
                                    return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                case wu.S128x100:
                                case wu.S180x135:
                                case wu.S232x174:
                                    return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                case wu.S296x222:
                                    return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                case wu.S400x300:
                                    return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                case wu.S600x450:
                                    return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                default:
                                    return (
                                        console.error('Unknown image size', u),
                                        'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                    );
                            }
                        if (e.name === Su.CollectionItem)
                            switch (u) {
                                case wu.Mini:
                                case wu.Small:
                                case wu.S48x48:
                                    return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                case wu.Big:
                                case wu.S80x80:
                                    return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                case wu.S128x100:
                                case wu.S180x135:
                                case wu.S232x174:
                                    return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                case wu.S296x222:
                                    return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                case wu.S400x300:
                                    return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                case wu.S600x450:
                                    return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                default:
                                    console.error('Unknown image size', u);
                            }
                        if (e.name === Su.StyleProgress)
                            switch (u) {
                                case wu.Small:
                                case wu.Big:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                            }
                        if (_t.includes(e.name))
                            switch (e.name) {
                                case 'branch':
                                case 'vehicleSelect':
                                case 'paragonsUnlocks':
                                    return `R.images.gui.maps.icons.paragons.allRewards.${u}.${e.icon}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                            }
                        return rt(e, u);
                    },
                    At = {
                        notInHangar: 'DefaultCardContent_notInHangar_ee',
                        pointsWrapper: 'DefaultCardContent_pointsWrapper_2b',
                        points: 'DefaultCardContent_points_c0',
                        count: 'DefaultCardContent_count_48',
                        paragonIcon: 'DefaultCardContent_paragonIcon_4c',
                        pointsBg: 'DefaultCardContent_pointsBg_12',
                        pointsDescription: 'DefaultCardContent_pointsDescription_a3',
                        return: 'DefaultCardContent_return_a0',
                        line: 'DefaultCardContent_line_5e',
                        line__right: 'DefaultCardContent_line__right_14',
                        returnBack: 'DefaultCardContent_returnBack_ef',
                        arrowDown: 'DefaultCardContent_arrowDown_63',
                        list: 'DefaultCardContent_list_0f',
                        btnContainer: 'DefaultCardContent_btnContainer_9e',
                        btn: 'DefaultCardContent_btn_60',
                    },
                    Ft = R.strings.paragons.resetBranch,
                    Dt = (0, a.memo)(
                        ({
                            isInHangar: e,
                            currentStep: u,
                            progressPoints: t,
                            returnedItemsShort: n,
                            vehicleCD: r,
                            handleDetailsClick: a,
                        }) => {
                            const o = I().mediaSize <= P.Medium ? wu.Small : wu.Big;
                            return u === je.INFO
                                ? s().createElement(
                                      'div',
                                      { className: At.pointsWrapper },
                                      s().createElement('div', { className: At.pointsBg }),
                                      s().createElement(
                                          hu,
                                          {
                                              contentId: R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                              args: {
                                                  header: Ft.tooltip.progressionPoints.header(),
                                                  description: Ft.tooltip.progressionPoints.description(),
                                              },
                                          },
                                          s().createElement(
                                              'div',
                                              { className: At.points },
                                              s().createElement(
                                                  'div',
                                                  { className: At.count },
                                                  s().createElement(Qu, { value: t }),
                                              ),
                                              s().createElement('div', { className: At.paragonIcon }),
                                          ),
                                      ),
                                      s().createElement(ge, {
                                          text: Ft.step1.pointsDescription(),
                                          className: At.pointsDescription,
                                      }),
                                  )
                                : e
                                  ? s().createElement(
                                        'div',
                                        { className: At.property },
                                        s().createElement(
                                            'div',
                                            { className: At.return },
                                            s().createElement('div', { className: At.line }),
                                            s().createElement(ge, {
                                                text: Ft.step2.returnBack(),
                                                className: At.returnBack,
                                            }),
                                            s().createElement('div', { className: c()(At.line, At.line__right) }),
                                            s().createElement('div', { className: At.arrowDown }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: At.list },
                                            n.map((e) => {
                                                return s().createElement(mt, {
                                                    name: e.name,
                                                    image: dt(e, o),
                                                    value: String(e.value),
                                                    size: o,
                                                    valueType:
                                                        ((u = e.valueType),
                                                        Zu.includes(u)
                                                            ? Ru.MULTI
                                                            : Ju.includes(u)
                                                              ? Ru.CURRENCY
                                                              : et.includes(u)
                                                                ? Ru.NUMBER
                                                                : ut.includes(u)
                                                                  ? Ru.PREMIUM_PLUS
                                                                  : Ru.STRING),
                                                    key: e.name,
                                                    tooltipArgs: { args: Pu(e.name, r) },
                                                });
                                                var u;
                                            }),
                                        ),
                                        n.length > 1 &&
                                            s().createElement(
                                                'div',
                                                { className: At.btnContainer },
                                                s().createElement(
                                                    D,
                                                    {
                                                        type: d.ghost,
                                                        size: A.medium,
                                                        mixClass: At.btn,
                                                        onClick: a,
                                                        onMouseDown: (e) => {
                                                            e.stopPropagation();
                                                        },
                                                    },
                                                    s().createElement(ge, { text: Ft.step2.details() }),
                                                ),
                                            ),
                                    )
                                  : s().createElement(ge, { className: At.notInHangar, text: Ft.step2.notInHangar() });
                        },
                    );
                function Ct(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        r,
                    ];
                }
                const gt = 'HorizontalBar_base_49',
                    pt = 'HorizontalBar_base__nonActive_82',
                    Bt = 'HorizontalBar_leftButton_5f',
                    ht = 'HorizontalBar_rightButton_03',
                    ft = 'HorizontalBar_track_0d',
                    vt = 'HorizontalBar_thumb_fd',
                    bt = 'HorizontalBar_rail_32',
                    St = 'disable',
                    xt = { pending: !1, offset: 0 },
                    wt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Rt = () => {},
                    Tt = (e, u) => Math.max(20, e.offsetWidth * u),
                    yt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = wt, onDrag: n = Rt }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(xt),
                            A = d[0],
                            F = d[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (F(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            C = () => {
                                const u = l.current,
                                    t = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    c = ou(0, 1, a / (r - n)),
                                    E = (u.offsetWidth - Tt(u, s)) * c;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(St),
                                                    void i.current.classList.remove(St)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = m.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(St),
                                                    void i.current.classList.add(St)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(St), i.current.classList.remove(St));
                                        }
                                    })(E));
                            },
                            g = mu(() => {
                                ((() => {
                                    const u = m.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    ((u.style.width = `${Tt(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(pt) : r.current.classList.remove(pt)));
                                })(),
                                    C());
                            });
                        ((0, a.useEffect)(() => iu(g)),
                            (0, a.useEffect)(
                                () =>
                                    iu(() => {
                                        const u = () => {
                                            C();
                                        };
                                        let t = Rt;
                                        const n = () => {
                                            (t(), (t = iu(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            s = m.current;
                                        if (!r || !a || !s) return;
                                        const o = u.screenX - A.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), D(xt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, n, D]));
                        const p = Ct((u) => e.applyStepTo(u), _, [e]),
                            B = p[0],
                            h = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(St) || E('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: c()(gt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: c()(Bt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (E('play'), B(Au.Next));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: c()(ft, u.track),
                                    onMouseDown: (u) => {
                                        const n = m.current;
                                        if (n && 0 === u.button)
                                            if ((E('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = m.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Au.Prev : Au.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: m, className: c()(vt, u.thumb) }),
                                s().createElement('div', { className: c()(bt, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: c()(ht, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (E('play'), B(Au.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Mt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Lt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Mt.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: c()(Mt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: c()(Mt.defaultScrollArea, r) },
                                s().createElement(Nt, { className: i, api: _, classNames: o }, e),
                            ),
                            s().createElement(yt, { getStepByRailClick: l, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    Nt = ({ api: e, className: u, classNames: t, children: n, style: r }) => (
                        (0, a.useEffect)(() => iu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: c()(Mt.base, u), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: c()(Mt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: c()(Mt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((Nt.Bar = yt),
                    (Nt.Default = Lt),
                    (Nt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => iu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: c()(Mt.base, u) },
                            s().createElement(
                                'div',
                                { className: c()(Mt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: c()(Mt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const Pt = Du({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Au.Next : Au.Prev),
                    }),
                    kt = 'VerticalBar_base_f3',
                    Ot = 'VerticalBar_base__nonActive_42',
                    It = 'VerticalBar_topButton_d7',
                    Ht = 'VerticalBar_bottomButton_06',
                    Ut = 'VerticalBar_track_df',
                    Wt = 'VerticalBar_thumb_32',
                    Gt = 'VerticalBar_rail_43',
                    $t = 'disable',
                    zt = () => {},
                    Xt = { pending: !1, offset: 0 },
                    qt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    jt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Vt = (e, u) => Math.max(20, e.offsetHeight * u),
                    Yt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = qt, onDrag: n = zt }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(Xt),
                            A = d[0],
                            F = d[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (F(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            C = mu(() => {
                                const u = m.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Vt(t, s)}px`),
                                    u.classList.add(Wt),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Ot) : r.current.classList.remove(Ot)),
                                    s
                                );
                            }),
                            g = mu(() => {
                                const u = l.current,
                                    t = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    c = ou(0, 1, a / (r - n)),
                                    E = (u.offsetHeight - Vt(u, s)) * c;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add($t),
                                                    void i.current.classList.remove($t)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = m.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove($t),
                                                    void i.current.classList.add($t)
                                                );
                                            var u, t;
                                            (o.current.classList.remove($t), i.current.classList.remove($t));
                                        }
                                    })(E));
                            }),
                            p = mu(() => {
                                jt(e, () => {
                                    (C(), g());
                                });
                            });
                        ((0, a.useEffect)(() => iu(p)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    jt(e, () => {
                                        g();
                                    });
                                };
                                let t = zt;
                                const n = () => {
                                    (t(), (t = iu(p)));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        jt(e, (t) => {
                                            const r = l.current,
                                                a = m.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            D(Xt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, n, D]));
                        const B = Ct((u) => e.applyStepTo(u), _, [e]),
                            h = B[0],
                            f = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains($t) || E('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: c()(kt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: c()(It, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($t) || 0 !== e.button || (E('play'), h(Au.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: c()(Ut, u.track),
                                    onMouseDown: (u) => {
                                        const n = m.current;
                                        if (n && 0 === u.button)
                                            if ((E('play'), u.target === n))
                                                (e.handleIsThumbDragging(!0),
                                                    D({
                                                        pending: !0,
                                                        offset: u.screenY - n.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((u) => {
                                                    m.current &&
                                                        jt(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Au.Prev : Au.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: m, className: u.thumb }),
                                s().createElement('div', { className: c()(Gt, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: c()(Ht, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($t) || 0 !== e.button || (E('play'), h(Au.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Kt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Kt.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: c()(Kt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: c()(Kt.area, r) },
                                s().createElement(Zt, { className: o, classNames: i, api: _ }, e),
                            ),
                            s().createElement(Yt, { getStepByRailClick: l, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    Zt = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => iu(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: c()(Kt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: c()(Kt.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Zt.Default = Qt;
                const Jt = { Vertical: r, Horizontal: n },
                    en = {
                        base: 'ReversedCardContent_base_7c',
                        header: 'ReversedCardContent_header_5e',
                        close: 'ReversedCardContent_close_54',
                        closeHover: 'ReversedCardContent_closeHover_f8',
                        closeContainer: 'ReversedCardContent_closeContainer_3e',
                        scrollWrapper: 'ReversedCardContent_scrollWrapper_1a',
                        scrollArea: 'ReversedCardContent_scrollArea_f4',
                        scrollBase: 'ReversedCardContent_scrollBase_89',
                        divider: 'ReversedCardContent_divider_b0',
                        divider__top: 'ReversedCardContent_divider__top_f7',
                        divider__bottom: 'ReversedCardContent_divider__bottom_f4',
                        rewardOverlay: 'ReversedCardContent_rewardOverlay_2c',
                        rewardOverlay__equipmentPlus: 'ReversedCardContent_rewardOverlay__equipmentPlus_be',
                        group: 'ReversedCardContent_group_79',
                        title: 'ReversedCardContent_title_4a',
                        list: 'ReversedCardContent_list_73',
                        reward: 'ReversedCardContent_reward_8e',
                    },
                    un = { type: 'idle' };
                const tn = R.strings.paragons.resetBranch,
                    nn = (0, a.memo)(({ returnedItems: e, handleClose: u, vehicleCD: t }) => {
                        const n = Jt.Vertical.useVerticalScrollApi(),
                            r = (0, a.useRef)(null),
                            o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1],
                            E = n.getContainerSize,
                            _ = n.getWrapperSize,
                            d = _(),
                            A = E(),
                            F = eu(r);
                        ((0, a.useEffect)(() => {
                            d && A && d < A && l(!0);
                        }, [F, A, d]),
                            n.events.on('resizeHandled', () => {
                                const e = _(),
                                    u = E();
                                if (e && u) {
                                    l(u > e);
                                } else l(!1);
                            }),
                            (function (e, u) {
                                const t = e.contentRef,
                                    n = e.wrapperRef,
                                    r = e.scrollPosition,
                                    s = e.clampPosition,
                                    o = e.animationScroll,
                                    i = e.events,
                                    l = (0, a.useState)(un),
                                    c = l[0],
                                    E = l[1];
                                ((0, a.useEffect)(() => {
                                    const e = t.current;
                                    e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                                }, [t, c.type]),
                                    (0, a.useEffect)(() => {
                                        if ('dragging' !== c.type) return;
                                        const e = (e) => {
                                                const a = t.current,
                                                    i = n.current;
                                                if (!a || !i) return;
                                                const l = c.positionFrom - e.screenY,
                                                    E = c.previousScrollPosition + l;
                                                r.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: s(a, E),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        u && { config: u },
                                                    ),
                                                );
                                            },
                                            a = () => {
                                                (window.removeEventListener('mousemove', e),
                                                    E({ type: 'scrollingToEnd' }));
                                            };
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', a),
                                            () => {
                                                (window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', a));
                                            }
                                        );
                                    }, [o.scrollPosition, s, t, c, r, n, u]),
                                    (0, a.useEffect)(() => {
                                        if ('scrollingToEnd' !== c.type) return;
                                        const e = () => {
                                            E(un);
                                        };
                                        return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                    }, [o.scrollPosition, c.type, i]),
                                    (0, a.useEffect)(() => {
                                        const e = t.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            (e.stopPropagation(),
                                                0 === e.button &&
                                                    E({
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
                            })(n));
                        const D = I().mediaSize <= P.Medium,
                            C = D ? wu.Small : wu.Big;
                        (0, a.useEffect)(() => {
                            if (i)
                                return (
                                    n.events.on('mouseWheel', (e) => e.stopPropagation()),
                                    () => n.events.off('mouseWheel', (e) => e.stopPropagation())
                                );
                        }, [i, n]);
                        return s().createElement(
                            'div',
                            { className: en.base },
                            s().createElement(ge, { text: tn.returnBack.header(), className: en.header }),
                            s().createElement(
                                'div',
                                {
                                    className: en.closeContainer,
                                    onClick: u,
                                    onMouseDown: (e) => {
                                        e.stopPropagation();
                                    },
                                    onMouseEnter: () => {
                                        m.playHighlight();
                                    },
                                },
                                s().createElement('div', { className: en.close }),
                                s().createElement('div', { className: en.closeHover }),
                            ),
                            s().createElement(
                                'div',
                                { className: en.scrollWrapper },
                                s().createElement('div', { className: c()(en.divider, en.divider__top) }),
                                s().createElement(
                                    Jt.Vertical.Area.Default,
                                    {
                                        api: n,
                                        scrollClassNames: { content: i ? '' : en.scrollArea },
                                        barClassNames: { base: i ? '' : en.scrollBase },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: en.group, ref: r },
                                        e.map(({ type: e, groupInfo: u }) => {
                                            const n = ((e, u) => {
                                                const t = R.images.gui.maps.icons;
                                                switch (e) {
                                                    case Ve.Customization:
                                                    case Ve.Equipments:
                                                    case Ve.BattleBoosters:
                                                    case Ve.OptionalDevices:
                                                    case Ve.Crew:
                                                        return u ? t.quests.bonuses.small : t.quests.bonuses.big;
                                                    case Ve.Shells:
                                                        return u ? t.shell.small : t.shell.medium;
                                                    default:
                                                        return '';
                                                }
                                            })(e, D);
                                            if (u.length)
                                                return s().createElement(
                                                    s().Fragment,
                                                    { key: `$rewardType_${e}}` },
                                                    s().createElement(ge, {
                                                        text: tn.returnBack.$dyn(Lu[e]),
                                                        className: en.title,
                                                    }),
                                                    s().createElement(
                                                        'div',
                                                        { className: en.list },
                                                        u.map((u, r) => {
                                                            const a = n.$dyn(u.icon);
                                                            return s().createElement(mt, {
                                                                image: a,
                                                                name: u.name,
                                                                value: String(u.count),
                                                                valueType: Ru.MULTI,
                                                                key: `${u.name}_${r}`,
                                                                size: C,
                                                                classNames: {
                                                                    overlay: c()(
                                                                        en.rewardOverlay,
                                                                        en[`rewardOverlay__${u.overlayIcon}`],
                                                                    ),
                                                                },
                                                                special: u.overlayIcon,
                                                                className: en.reward,
                                                                tooltipArgs: { args: ku(e, t, u.intCD) },
                                                            });
                                                        }),
                                                    ),
                                                );
                                        }),
                                    ),
                                ),
                                s().createElement('div', { className: c()(en.divider, en.divider__bottom) }),
                            ),
                        );
                    }),
                    rn = R.images.gui.maps.shop.vehicles.c_360x270,
                    an = (0, a.memo)(({ currentStep: e, resetVehicleInfo: u, index: t, realStep: n }) => {
                        const r = u.vehicleInfo,
                            o = u.blueprintFragments,
                            i = u.credits,
                            l = u.returnedItems,
                            _ = u.progressPoints,
                            d = r.name,
                            A = r.techName,
                            F = r.tier,
                            D = r.type,
                            C = r.isPremium,
                            g = r.vehicleCD,
                            p = (0, a.useState)(!1),
                            B = p[0],
                            h = p[1],
                            f = (0, a.useState)(!1),
                            v = f[0],
                            b = f[1],
                            S = (0, a.useState)(!1),
                            x = S[0],
                            w = S[1],
                            T = e === je.CAPTCHA,
                            y = n === je.CAPTCHA,
                            M = (0, a.useMemo)(() => ((e) => e.reduce((e, u) => e + u.groupInfo.length, 0))(l), [l]),
                            L = (0, a.useMemo)(
                                () =>
                                    ((e, u, t) => {
                                        const n = [
                                            { name: 'credits', value: e, icon: 'credits', valueType: Su.Credits },
                                        ];
                                        return (
                                            0 !== u &&
                                                n.push({
                                                    name: 'equipment',
                                                    value: u,
                                                    icon: 'equipment',
                                                    valueType: Su.Equipment,
                                                }),
                                            0 !== t &&
                                                n.push({
                                                    name: 'finalBlueprints',
                                                    value: t,
                                                    icon: 'vehicle',
                                                    valueType: Su.Blueprints,
                                                }),
                                            n
                                        );
                                    })(i, M, o),
                                [i, M, o],
                            ),
                            N = Se();
                        ((0, a.useEffect)(() => {
                            ((e === je.INFO && B) || T) && h(!1);
                        }, [e, B, T]),
                            (0, a.useEffect)(() => {
                                if ((e !== n || B !== v) && !y)
                                    return (
                                        w(!0),
                                        be(() => {
                                            w(!1);
                                        }, 2 * zr)
                                    );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (e !== je.INFO && !N)
                                    return (
                                        w(!0),
                                        be(() => {
                                            w(!1);
                                        }, 2 * zr)
                                    );
                            }, [B]),
                            (0, a.useEffect)(
                                () =>
                                    be(() => {
                                        b(B);
                                    }, zr),
                                [B],
                            ));
                        const P = (0, a.useCallback)(() => {
                                (h(!0), E(R.sounds.paragons_card_turn()));
                            }, []),
                            k = (0, a.useCallback)(() => {
                                (h(!1), m.playClick(), E(R.sounds.paragons_card_turn()));
                            }, []);
                        return s().createElement(
                            'div',
                            { className: Ku.base },
                            s().createElement(
                                'div',
                                { className: c()(Ku.container, x && !y && Ku.container__scale) },
                                s().createElement(
                                    'div',
                                    { className: c()(Ku.card, !y && Ku[`card__extend__${t}`]) },
                                    s().createElement('div', { className: Ku.frame }, s().createElement(Gu, null)),
                                    !v &&
                                        s().createElement(
                                            'div',
                                            { className: Ku.cardContent },
                                            s().createElement('div', { className: Ku.shadow }),
                                            s().createElement(
                                                'div',
                                                { className: Ku.vehicle },
                                                s().createElement(
                                                    bu,
                                                    { args: { alias: Nu.VEHICLE, vehicleCD: g } },
                                                    s().createElement('div', {
                                                        className: Ku.vehicleIcon,
                                                        style: { backgroundImage: `url(${rn.$dyn(A)})` },
                                                    }),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: Ku.vehicleName },
                                                s().createElement(Yu, { name: d, level: F, type: D, isPremium: C }),
                                            ),
                                            s().createElement(Dt, {
                                                isInHangar: 0 !== u.credits,
                                                currentStep: n,
                                                progressPoints: _,
                                                handleDetailsClick: P,
                                                returnedItemsShort: L,
                                                vehicleCD: g,
                                            }),
                                        ),
                                    v &&
                                        s().createElement(
                                            'div',
                                            { className: Ku.cardContent },
                                            s().createElement(nn, { returnedItems: l, handleClose: k, vehicleCD: g }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    sn = { type: 'idle' };
                const on = 'HorizontalDrag_base_fa',
                    ln = 'HorizontalDrag_base__withoutScroll_56',
                    cn = 'HorizontalDrag_base__shadowBoth_9e',
                    En = 'HorizontalDrag_content_ab',
                    mn = (0, a.memo)(
                        ({ children: e, scroll: u, cardListApi: t }) => (
                            (function (e, u) {
                                const t = e.contentRef,
                                    n = e.wrapperRef,
                                    r = e.scrollPosition,
                                    s = e.clampPosition,
                                    o = e.animationScroll,
                                    i = e.events,
                                    l = (0, a.useState)(sn),
                                    c = l[0],
                                    E = l[1];
                                ((0, a.useEffect)(() => {
                                    const e = t.current;
                                    e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                                }, [t, c.type]),
                                    (0, a.useEffect)(() => {
                                        if ('dragging' !== c.type) return;
                                        const e = B.O.client.events.mouse.move(([e, a]) => {
                                                const i = t.current,
                                                    l = n.current;
                                                if (!i || !l) return;
                                                if ('inside' === a && e.clientX < 0) return;
                                                const E = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                                    m = c.positionFrom - E,
                                                    _ = c.previousScrollPosition + m;
                                                r.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: s(i, _),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        u && { config: u },
                                                    ),
                                                );
                                            }),
                                            a = B.O.client.events.mouse.up(function () {
                                                E({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), a());
                                        };
                                    }, [o.scrollPosition, s, t, c, r, n, u]),
                                    (0, a.useEffect)(() => {
                                        if ('scrollingToEnd' !== c.type) return;
                                        const e = () => {
                                            E(sn);
                                        };
                                        return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                    }, [o.scrollPosition, c.type, i]),
                                    (0, a.useEffect)(() => {
                                        const e = t.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            E({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [o.scrollPosition, t]));
                            })(t),
                            s().createElement(
                                Jt.Horizontal.Area,
                                { api: t, classNames: { wrapper: c()(on, !u && ln, u && cn), content: En } },
                                e,
                            )
                        ),
                    ),
                    _n = 'MiniCard_base_96',
                    dn = 'MiniCard_container_b1',
                    An = 'MiniCard_card_26',
                    Fn = 'MiniCard_glow_16',
                    Dn = 'MiniCard_vehicle_b2',
                    Cn = 'MiniCard_vehicleIcon_11',
                    gn = 'MiniCard_shadow_60',
                    pn = 'MiniCard_cardContent_d3',
                    Bn = R.images.gui.maps.shop.vehicles.c_360x270,
                    hn = (0, a.memo)(({ resetVehicleInfo: e }) => {
                        const u = e.vehicleInfo,
                            t = u.name,
                            n = u.techName,
                            r = u.tier,
                            a = u.type,
                            o = u.isPremium,
                            i = u.vehicleCD,
                            l = I().mediaSize <= P.Medium ? Ye.SMALL : Ye.MEDIUM;
                        return s().createElement(
                            'div',
                            { className: _n },
                            s().createElement(
                                'div',
                                { className: dn },
                                s().createElement(
                                    'div',
                                    { className: An },
                                    s().createElement(Gu, null),
                                    s().createElement(
                                        'div',
                                        { className: pn },
                                        s().createElement('div', { className: Fn }),
                                        s().createElement('div', { className: gn }),
                                        s().createElement(
                                            'div',
                                            { className: Dn },
                                            s().createElement(
                                                bu,
                                                { args: { alias: Nu.VEHICLE, vehicleCD: i } },
                                                s().createElement('div', {
                                                    className: Cn,
                                                    style: { backgroundImage: `url(${Bn.$dyn(n)})` },
                                                }),
                                            ),
                                        ),
                                        s().createElement(Yu, { name: t, level: r, type: a, isPremium: o, size: l }),
                                    ),
                                ),
                            ),
                        );
                    });
                let fn;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(fn || (fn = {}));
                const vn = {
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
                let bn, Sn, xn;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(bn || (bn = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Sn || (Sn = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(xn || (xn = {})));
                const wn = [
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
                function Rn() {
                    return (
                        (Rn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Rn.apply(this, arguments)
                    );
                }
                const Tn = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            n = void 0 !== t && t,
                            r = e.isDisabled,
                            o = void 0 !== r && r,
                            i = e.isAlert,
                            l = void 0 !== i && i,
                            m = e.size,
                            _ = void 0 === m ? bn.medium : m,
                            d = e.type,
                            A = void 0 === d ? Sn.primary : d,
                            F = e.soundHover,
                            D = void 0 === F ? 'highlight' : F,
                            C = e.soundClick,
                            g = void 0 === C ? 'play' : C,
                            p = e.onMouseEnter,
                            B = e.onMouseLeave,
                            h = e.onMouseUp,
                            f = e.onMouseDown,
                            v = e.onClick,
                            b = e.onChange,
                            S = e.onFocus,
                            x = e.onBlur,
                            w = e.text,
                            R = e.contentStyles,
                            T = e.children,
                            y = e.alignment,
                            M = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, wn);
                        const L = (0, a.useState)(!1),
                            N = L[0],
                            P = L[1],
                            k = (0, a.useState)(!1),
                            O = (k[0], k[1]),
                            I = (0, a.useCallback)(
                                (e) => {
                                    o || (b && b(), v && v(e));
                                },
                                [o, b, v],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === fn.LEFT;
                                    o || (u && P(!0), u && f && f(e), g && E(g));
                                },
                                [o, f, g],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    o || (P(!1), h && h(e));
                                },
                                [o, h],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    o || (p && p(e), D && E(D));
                                },
                                [o, p, D],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    o || (P(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    o || (O(!0), S && S(e));
                                },
                                [o, S],
                            ),
                            z = (0, a.useCallback)(
                                (e) => {
                                    o || (O(!1), x && x(e));
                                },
                                [o, x],
                            ),
                            X = s().createElement(
                                'div',
                                { className: vn.label },
                                s().createElement(
                                    'div',
                                    { className: c()(vn.labelContent, 's-labelContent'), style: R },
                                    w || T,
                                ),
                            );
                        return s().createElement(
                            'div',
                            Rn(
                                {
                                    id: u,
                                    className: c()(vn.base, vn[`base__${_}`], vn[`base__${A}`], {
                                        [vn.base__checked]: n,
                                        [vn.base__disabled]: o,
                                        [vn.base__mouseDown]: N,
                                        [vn.base__alert]: l,
                                        [vn.base__center]: y === xn.Center,
                                        [vn.base__bottom]: y === xn.Bottom,
                                    }),
                                    onClick: I,
                                    onMouseEnter: W,
                                    onMouseLeave: G,
                                    onMouseDown: H,
                                    onMouseUp: U,
                                    onFocus: $,
                                    onBlur: z,
                                },
                                M,
                            ),
                            s().createElement(
                                'div',
                                { className: vn.input },
                                s().createElement('div', { className: vn.alertOverlay }),
                                s().createElement('div', { className: vn.inputHoverOverlay }),
                                s().createElement('div', { className: vn.highlight }),
                            ),
                            s().createElement('div', { className: vn.checkmark }),
                            ((w || T) && X) || null,
                        );
                    },
                    yn = 'CheckboxModule_base_c8',
                    Mn = 'CheckboxModule_content_78',
                    Ln = 'CheckboxModule_moduleDescription_3e',
                    Nn = 'CheckboxModule_info_b3',
                    Pn = 'CheckboxModule_checkbox_8d',
                    kn = 'CheckboxModule_content__notPressed_0c',
                    On = R.strings.paragons.resetBranch,
                    In = (0, a.memo)(({ checkboxState: e, onCheckboxChange: u }) => {
                        const t = (0, a.useState)(!1),
                            n = t[0],
                            r = t[1];
                        return s().createElement(
                            'div',
                            { className: yn },
                            s().createElement(
                                'div',
                                {
                                    className: c()(Mn, !n && kn),
                                    onMouseDown: () => {
                                        r(!0);
                                    },
                                    onMouseEnter: () => {
                                        m.playHighlight();
                                    },
                                    onMouseUp: () => {
                                        r(!1);
                                    },
                                    onClick: () => {
                                        (m.playClick(), u());
                                    },
                                },
                                s().createElement(
                                    'div',
                                    { className: Pn },
                                    s().createElement(Tn, {
                                        soundHover: '',
                                        soundClick: '',
                                        isChecked: e,
                                        type: Sn.main,
                                    }),
                                ),
                                s().createElement(ge, { text: On.step2.module(), className: Ln }),
                                s().createElement('div', { className: Nn }),
                            ),
                        );
                    }),
                    Hn = {
                        base: 'CardList_base_ba',
                        animation: 'CardList_animation_33',
                        cardList: 'CardList_cardList_15',
                        cardList__captchaStep: 'CardList_cardList__captchaStep_14',
                        cardList__hidden: 'CardList_cardList__hidden_43',
                        module: 'CardList_module_c0',
                    },
                    Un = R.strings.paragons.resetBranch,
                    Wn = (e) => 1 - Math.pow(1 - e, 3),
                    Gn = (0, a.memo)(
                        ({
                            isCardListAnimation: e,
                            currentStep: u,
                            cardList: t,
                            realStep: n,
                            canEquipStock: r,
                            setIsCardListAnimation: o,
                            onInstallVehicleConfiguration: i,
                            setCheckboxState: l,
                            checkboxState: _,
                        }) => {
                            const d = (0, a.useState)(null),
                                A = d[0],
                                F = d[1],
                                D = (0, a.useRef)(null),
                                C = u === je.CAPTCHA,
                                g = n === je.CAPTCHA,
                                p = C && !g,
                                B = u === je.DETAILS && g,
                                h = eu(D),
                                f = c()(
                                    Hn.cardList,
                                    (null === A || p || B) && Hn.cardList__hidden,
                                    null !== A && Hn.blinkList,
                                    g && Hn.cardList__captchaStep,
                                ),
                                v = Cu(),
                                b = v.getWrapperSize,
                                S = v.getContainerSize,
                                x = (0, a.useCallback)(() => {
                                    (i(_ ? 'current' : 'stock'), l(!_));
                                }, [_, i, l]);
                            ((0, a.useEffect)(() => {
                                o(!(!p && !B));
                            }, [p, B, o]),
                                (0, a.useLayoutEffect)(() => {
                                    const e = b(),
                                        u = S();
                                    if (h)
                                        if (e && u) {
                                            F(u > e);
                                        } else F(!1);
                                }, [h, u, n, b, S, v]),
                                v.events.on('resizeHandled', () => {
                                    const e = b(),
                                        u = S();
                                    if (h)
                                        if (e && u) {
                                            F(u > e);
                                        } else F(!1);
                                }));
                            const w = (0, du.useSpring)({
                                from: { transform: `translateX(${b()}rem)`, opacity: 0 },
                                to: { transform: 'translateX(0rem)', opacity: 1 },
                                delay: zr,
                                config: { duration: 900, easing: Wn },
                                reset: !1,
                                onStart: () => {
                                    e || E(R.sounds.paragons_cards_slide());
                                },
                            });
                            return s().createElement(
                                'div',
                                { className: Hn.base },
                                s().createElement(
                                    mn,
                                    { scroll: A, cardListApi: v },
                                    s().createElement(
                                        du.animated.div,
                                        {
                                            className: f,
                                            ref: D,
                                            style: w,
                                            onMouseEnter: () => {
                                                A && m.playHighlight();
                                            },
                                            onMouseDown: () => {
                                                A && m.playClick();
                                            },
                                        },
                                        t.map((e, r) =>
                                            g
                                                ? s().createElement(hn, {
                                                      key: `${e.vehicleInfo.name}_mini_${r}`,
                                                      resetVehicleInfo: e,
                                                  })
                                                : s().createElement(an, {
                                                      resetVehicleInfo: e,
                                                      currentStep: u,
                                                      key: `${e.vehicleInfo.name}_${r}`,
                                                      index: t.length - r,
                                                      realStep: n,
                                                  }),
                                        ),
                                    ),
                                ),
                                n === je.DETAILS &&
                                    r &&
                                    s().createElement(
                                        hu,
                                        {
                                            contentId: R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                            args: {
                                                header: Un.tooltip.modules.header(),
                                                description: Un.tooltip.modules.description(),
                                            },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Hn.module },
                                            s().createElement(In, { checkboxState: _, onCheckboxChange: x }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    $n = 'FadeAnimation_base_f3',
                    zn = 'FadeAnimation_base__fadeOut_59',
                    Xn = 'FadeAnimation_base__fadeIn_6d',
                    qn = 'FadeAnimation_base__firstRender_24',
                    jn = (0, a.memo)(({ children: e, fadeOutAnimation: u, disabled: t = !1 }) => {
                        const n = Se();
                        return t ? e : s().createElement('div', { className: c()($n, u ? zn : Xn, n && qn) }, e);
                    }),
                    Vn = 'Footer_base_ad',
                    Yn = 'Footer_branchCountCurrent_cc',
                    Kn = 'Footer_description_93',
                    Qn = 'Footer_points_ea',
                    Zn = 'Footer_count_c8',
                    Jn = 'Footer_paragonIcon_21',
                    er = 'Footer_creditIcon_e1',
                    ur = 'Footer_buttons_8b',
                    tr = 'Footer_buttons__step2_3b',
                    nr = 'Footer_button_d2',
                    rr = 'Footer_smallButton_c5',
                    ar = 'Footer_smallButtonText_da',
                    sr = 'Footer_confirmText_20',
                    or = 'Footer_pointsText_f9',
                    ir = R.strings.paragons.resetBranch,
                    lr = (0, a.memo)(
                        ({
                            realStep: e,
                            resetBranchesCount: u,
                            maxResetBranchesCount: t,
                            totalProgressionPoints: n,
                            totalCredits: r,
                            captchaState: o,
                            handleBackBtnClick: i,
                            handleNextBtnClick: l,
                            isFadeOutAnimation: E,
                        }) => {
                            const m = e === je.CAPTCHA,
                                _ = m && o !== Ge.CONFORMITY,
                                F = m ? ir.buttons.reset() : ir.buttons.next(),
                                C = I().mediaSize >= P.Medium,
                                g = (0, a.useCallback)(() => {
                                    switch (e) {
                                        case je.INFO:
                                            return s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement(
                                                    hu,
                                                    {
                                                        contentId:
                                                            R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                                        args: {
                                                            header: ir.tooltip.resetBranch.header(),
                                                            description:
                                                                ((a = ir.tooltip.resetBranch.description()),
                                                                (o = { max_count: t }),
                                                                a.replace(/\{\w+\}/g, (e) =>
                                                                    String(o[e.slice(1, -1)]),
                                                                )),
                                                        },
                                                    },
                                                    s().createElement(ge, {
                                                        text: ir.step1.branchCount(),
                                                        format: {
                                                            binding: {
                                                                current: s().createElement(ge, {
                                                                    text: String(u),
                                                                    className: Yn,
                                                                }),
                                                                max: t,
                                                            },
                                                        },
                                                        className: Kn,
                                                    }),
                                                ),
                                                s().createElement(
                                                    hu,
                                                    {
                                                        contentId:
                                                            R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                                        args: {
                                                            header: ir.tooltip.totalProgressionPoints.header(),
                                                            description:
                                                                ir.tooltip.totalProgressionPoints.description(),
                                                        },
                                                    },
                                                    s().createElement(
                                                        'div',
                                                        { className: Qn },
                                                        s().createElement(ge, {
                                                            text: ir.step1.total(),
                                                            className: or,
                                                        }),
                                                        s().createElement(
                                                            'div',
                                                            { className: Zn },
                                                            s().createElement(Qu, { value: n }),
                                                        ),
                                                        s().createElement('div', { className: Jn }),
                                                    ),
                                                ),
                                            );
                                        case je.DETAILS:
                                            return s().createElement(
                                                'div',
                                                { className: Qn },
                                                s().createElement(ge, { text: ir.step2.creditsBack(), className: or }),
                                                s().createElement(
                                                    'div',
                                                    { className: Zn },
                                                    s().createElement(Qu, { value: r }),
                                                ),
                                                s().createElement(
                                                    hu,
                                                    {
                                                        contentId:
                                                            R.views.lobby.paragons.tooltips.ResetBranchTooltip('resId'),
                                                        args: {
                                                            header: ir.tooltip.credits.header(),
                                                            description: ir.tooltip.credits.description(),
                                                        },
                                                    },
                                                    s().createElement('div', { className: er }),
                                                ),
                                            );
                                        default:
                                            return s().createElement(ge, {
                                                text: ir.step3.confirmText(),
                                                className: sr,
                                            });
                                    }
                                    var a, o;
                                }, [e, t, u, r, n]);
                            return s().createElement(
                                jn,
                                { fadeOutAnimation: E },
                                s().createElement(
                                    'div',
                                    { className: Vn },
                                    g(),
                                    s().createElement(
                                        'div',
                                        { className: c()(ur, e === je.DETAILS && tr) },
                                        s().createElement(
                                            'div',
                                            { className: nr },
                                            s().createElement(
                                                D,
                                                {
                                                    size: C ? A.medium : A.small,
                                                    type: d.secondary,
                                                    onClick: i,
                                                    mixClass: C ? void 0 : rr,
                                                },
                                                s().createElement(ge, {
                                                    text: ir.buttons.back(),
                                                    className: C ? void 0 : ar,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: nr },
                                            s().createElement(
                                                D,
                                                {
                                                    size: C ? A.medium : A.small,
                                                    type: d.primary,
                                                    onClick: l,
                                                    disabled: _,
                                                    mixClass: C ? void 0 : rr,
                                                },
                                                s().createElement(ge, { text: F, className: C ? void 0 : ar }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    cr = {
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
                    Er = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    mr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    _r = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    dr = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, a.useMemo)(() => u || {}, [u]);
                        let o = Er.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = mr.exec(t),
                                c = _r.exec(t),
                                E = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                ((i = i.replace(t, `%(${o})`)),
                                    (r[o] = cr[e]
                                        ? s().createElement(
                                              'span',
                                              { className: cr[e] },
                                              s().createElement(se, { text: E, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: n(e) },
                                              s().createElement(se, { text: E, binding: u }),
                                          )));
                            }
                            o = Er.exec(e);
                        }
                        return s().createElement(se, { text: i, classMix: t, binding: r });
                    }),
                    Ar = 'ResetBranchStepper_base_3a',
                    Fr = 'ResetBranchStepper_line_1a',
                    Dr = 'ResetBranchStepperTab_base_78',
                    Cr = 'ResetBranchStepperTab_base__completed_61',
                    gr = 'ResetBranchStepperTab_base__active_d7',
                    pr = 'ResetBranchStepperTab_base__border_14',
                    Br = 'ResetBranchStepperTab_base__next_59',
                    hr = 'ResetBranchStepperTab_base__bg_44',
                    fr = 'ResetBranchStepperTab_step_c5',
                    vr = 'ResetBranchStepperTab_completeIcon_1a',
                    br = R.strings.paragons.resetBranch.tooltip,
                    Sr = (0, a.memo)(({ step: e, isSelected: u, isCompleted: t, handleClick: n }) => {
                        const r = e + 1,
                            a = br.$dyn(`step${r}`),
                            o = c()(Dr, t && Cr, u && gr, !u && !t && Br);
                        return s().createElement(
                            it,
                            { header: a.$dyn('header'), body: a.$dyn('descr') },
                            s().createElement(
                                'div',
                                {
                                    className: o,
                                    onClick: n,
                                    onMouseEnter: () => {
                                        t && m.playHighlight();
                                    },
                                },
                                s().createElement('div', { className: hr }),
                                s().createElement('div', { className: pr }),
                                t && s().createElement('div', { className: vr }),
                                s().createElement(ge, { text: String(r), className: fr }),
                            ),
                        );
                    }),
                    xr = (0, a.memo)(({ currentStep: e, handleTabClick: u }) => {
                        const t = (n = je) ? Object.values(n).filter((e) => !isNaN(Number(e))) : [];
                        var n;
                        return s().createElement(
                            'div',
                            { className: Ar },
                            t.map((n, r) => {
                                const a = e === r,
                                    o = e > r,
                                    i = o
                                        ? () => {
                                              (m.playClick(), u(n));
                                          }
                                        : void 0;
                                return s().createElement(
                                    s().Fragment,
                                    { key: n },
                                    s().createElement(Sr, { step: n, isSelected: a, isCompleted: o, handleClick: i }),
                                    r !== t.length - 1 && s().createElement('div', { className: Fr }),
                                );
                            }),
                        );
                    }),
                    wr = 'Header_base_a0',
                    Rr = 'Header_subtitle_47',
                    Tr = 'Header_title_6b',
                    yr = 'Header_stepperWrapper_90',
                    Mr = 'Header_description_ce',
                    Lr = R.strings.paragons.resetBranch,
                    Nr = (0, a.memo)(({ realStep: e, isFadeOutAnimation: u, handleTabClick: t }) => {
                        const n = e === je.CAPTCHA,
                            r = Lr.$dyn(`step${e + 1}`);
                        return s().createElement(
                            'div',
                            { className: wr },
                            s().createElement(ge, { text: Lr.subtitle(), className: Rr }),
                            s().createElement(ge, { text: Lr.title(), className: Tr }),
                            s().createElement(
                                'div',
                                { className: yr },
                                s().createElement(xr, { currentStep: e, handleTabClick: t }),
                            ),
                            !n &&
                                s().createElement(
                                    jn,
                                    { fadeOutAnimation: u },
                                    s().createElement(dr, { text: r.$dyn('description'), classMix: Mr }),
                                ),
                        );
                    }),
                    Pr = 'ResultScreen_base_6a',
                    kr = 'ResultScreen_fire_a1',
                    Or = 'ResultScreen_smoke_47',
                    Ir = 'ResultScreen_icon_78',
                    Hr = 'ResultScreen_icon__failed_bd',
                    Ur = 'ResultScreen_text_d7',
                    Wr = 'ResultScreen_title_dd',
                    Gr = 'ResultScreen_subTitle_fd',
                    $r = (0, a.memo)(({ state: e }) => {
                        const u = e === ve.Success,
                            t = u ? 'success' : 'failed';
                        return (
                            (0, a.useEffect)(() => {
                                E(u ? R.sounds.bp_reward_screen() : R.sounds.gui_error_screen());
                            }, [u]),
                            s().createElement(
                                'div',
                                { className: Pr },
                                s().createElement('div', { className: kr }),
                                s().createElement('div', { className: Or }),
                                s().createElement('div', { className: c()(Ir, e === ve.Failed && Hr) }),
                                s().createElement(
                                    'div',
                                    { className: Ur },
                                    s().createElement(ge, {
                                        className: Wr,
                                        text: R.strings.paragons.resetBranch.resultScreen.title.$dyn(t),
                                    }),
                                    s().createElement(ge, {
                                        className: Gr,
                                        text: R.strings.paragons.resetBranch.resultScreen.subTitle.$dyn(t),
                                    }),
                                ),
                            )
                        );
                    }),
                    zr = 250,
                    Xr = R.strings.paragons.resetBranch,
                    qr = (0, ye.Pi)(() => {
                        const e = Xe(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = n.totalCredits,
                            o = n.resetBranchesCount,
                            i = n.maxResetBranchesCount,
                            l = n.isFill,
                            m = n.canEquipStock,
                            _ = n.resetState,
                            F = u.checkboxState.get(),
                            C = u.computes.getResetVehicles(),
                            g = u.captchaState.get(),
                            p = u.computes.getTotalProgressPoints(),
                            B = I().mediaSize,
                            h = (0, a.useState)(0),
                            f = h[0],
                            v = h[1],
                            b = (0, a.useState)(0),
                            S = b[0],
                            x = b[1],
                            w = (0, a.useState)(!1),
                            T = w[0],
                            y = w[1],
                            M = (0, a.useState)(!1),
                            L = M[0],
                            N = M[1],
                            k = S === je.DETAILS,
                            O = S === je.CAPTCHA,
                            H = f === je.CAPTCHA,
                            U = Se();
                        (0, a.useEffect)(
                            () => (
                                U || y(!0),
                                be(() => {
                                    (y(!1), x(f));
                                }, zr)
                            ),
                            [f],
                        );
                        const W = (0, a.useCallback)(() => {
                                (0 === f && t.close(), v((e) => e - 1));
                            }, [f, t]),
                            G = (0, a.useCallback)(() => {
                                f >= je.CAPTCHA ? t.confirm() : v((e) => e + 1);
                            }, [f, t]);
                        var $;
                        (($ = () => t.close()), Te(xe.n.ESCAPE, $));
                        const z = B >= P.Medium;
                        return (
                            (0, a.useEffect)(() => {
                                S === f || O || H || E(R.sounds.paragons_card_turn());
                            }, [f, H, O, S]),
                            (0, a.useEffect)(() => {
                                g !== Ge.NORMAL && t.setCaptchaState(Ge.NORMAL);
                            }, [t, S]),
                            s().createElement(
                                'div',
                                { className: Ze.base },
                                s().createElement(
                                    'div',
                                    { className: Ze.close },
                                    s().createElement(fe, {
                                        caption: Xr.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                (_ === ve.Failed || _ === ve.Success) &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: c()(Ze.content, Ze.content__result) },
                                            s().createElement($r, { state: _ }),
                                        ),
                                        s().createElement(
                                            D,
                                            {
                                                mixClass: Ze.resultScreenButton,
                                                onClick: t.close,
                                                type: d.primary,
                                                size: z ? A.medium : A.small,
                                            },
                                            s().createElement(ge, { text: Xr.resultScreen.button() }),
                                        ),
                                    ),
                                _ === ve.Initial &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: c()(Ze.content, O && Ze.content__captcha) },
                                            s().createElement(
                                                'div',
                                                { className: Ze.header },
                                                s().createElement(Nr, {
                                                    realStep: S,
                                                    isFadeOutAnimation: T,
                                                    handleTabClick: (e) => {
                                                        v(e);
                                                    },
                                                }),
                                            ),
                                            O &&
                                                s().createElement(
                                                    jn,
                                                    { fadeOutAnimation: T },
                                                    s().createElement(
                                                        'div',
                                                        { className: Ze.captchaWrapper },
                                                        s().createElement(su, null),
                                                    ),
                                                ),
                                            l &&
                                                s().createElement(
                                                    jn,
                                                    { fadeOutAnimation: T, disabled: !L },
                                                    s().createElement(Gn, {
                                                        checkboxState: F,
                                                        setCheckboxState: t.setCheckboxState,
                                                        isCardListAnimation: L,
                                                        currentStep: f,
                                                        cardList: C,
                                                        realStep: S,
                                                        canEquipStock: m,
                                                        setIsCardListAnimation: N,
                                                        onInstallVehicleConfiguration: t.onInstallVehicleConfiguration,
                                                    }),
                                                ),
                                        ),
                                        s().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Ze.footer,
                                                    k && Ze.footer__details,
                                                    O && Ze.footer__captcha,
                                                ),
                                            },
                                            s().createElement(lr, {
                                                realStep: S,
                                                totalProgressionPoints: p,
                                                maxResetBranchesCount: i,
                                                resetBranchesCount: o,
                                                totalCredits: r,
                                                captchaState: g,
                                                handleBackBtnClick: W,
                                                handleNextBtnClick: G,
                                                isFadeOutAnimation: T,
                                            }),
                                        ),
                                    ),
                            )
                        );
                    });
                var jr = t(926),
                    Vr = t.n(jr);
                const Yr = ['children', 'className'];
                function Kr() {
                    return (
                        (Kr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Kr.apply(this, arguments)
                    );
                }
                const Qr = {
                        [k.ExtraSmall]: '',
                        [k.Small]: Vr().SMALL_WIDTH,
                        [k.Medium]: `${Vr().SMALL_WIDTH} ${Vr().MEDIUM_WIDTH}`,
                        [k.Large]: `${Vr().SMALL_WIDTH} ${Vr().MEDIUM_WIDTH} ${Vr().LARGE_WIDTH}`,
                        [k.ExtraLarge]: `${Vr().SMALL_WIDTH} ${Vr().MEDIUM_WIDTH} ${Vr().LARGE_WIDTH} ${Vr().EXTRA_LARGE_WIDTH}`,
                    },
                    Zr = {
                        [O.ExtraSmall]: '',
                        [O.Small]: Vr().SMALL_HEIGHT,
                        [O.Medium]: `${Vr().SMALL_HEIGHT} ${Vr().MEDIUM_HEIGHT}`,
                        [O.Large]: `${Vr().SMALL_HEIGHT} ${Vr().MEDIUM_HEIGHT} ${Vr().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${Vr().SMALL_HEIGHT} ${Vr().MEDIUM_HEIGHT} ${Vr().LARGE_HEIGHT} ${Vr().EXTRA_LARGE_HEIGHT}`,
                    },
                    Jr = {
                        [P.ExtraSmall]: '',
                        [P.Small]: Vr().SMALL,
                        [P.Medium]: `${Vr().SMALL} ${Vr().MEDIUM}`,
                        [P.Large]: `${Vr().SMALL} ${Vr().MEDIUM} ${Vr().LARGE}`,
                        [P.ExtraLarge]: `${Vr().SMALL} ${Vr().MEDIUM} ${Vr().LARGE} ${Vr().EXTRA_LARGE}`,
                    },
                    ea = (e) => {
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
                            })(e, Yr);
                        const r = I(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', Kr({ className: c()(t, Qr[a], Zr[o], Jr[i]) }, n), u);
                    },
                    ua = ['children'];
                const ta = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, ua);
                    return s().createElement(N, null, s().createElement(ea, t, u));
                };
                engine.whenReady.then(() => {
                    i().render(
                        s().createElement(ze, null, s().createElement(ta, null, s().createElement(qr, null))),
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 844),
        (() => {
            var e = { 844: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [454], () => __webpack_require__(2904));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
