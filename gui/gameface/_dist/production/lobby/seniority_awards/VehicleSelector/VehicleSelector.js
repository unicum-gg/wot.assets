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
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
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
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
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
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
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
                t.d(u, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    i = (e, u) => {
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
                    l = {
                        close(e) {
                            i('popover' === e ? n : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
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
                t.d(u, {
                    kH: () => m,
                    B3: () => l,
                    Z5: () => o,
                    lf: () => E,
                    cy: () => s,
                    B0: () => i,
                    wU: () => v,
                    ry: () => C,
                    Eu: () => B,
                    SW: () => p,
                    P3: () => f,
                });
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
                function F(e, u, t, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, u) => {
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
                                })(u, A);
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
                    g = () => h(i.CLOSE),
                    p = () => h(i.POP_OVER, { on: !1 }),
                    f = (e, u, t, r, n = R.invalid('resId'), a) => {
                        const o = d.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            E = s.width,
                            m = s.height,
                            _ = {
                                x: d.O.view.pxToRem(l) + o.x,
                                y: d.O.view.pxToRem(c) + o.y,
                                width: d.O.view.pxToRem(E),
                                height: d.O.view.pxToRem(m),
                            };
                        h(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: D(_),
                            on: !0,
                            args: a,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var w = t(7572);
                const S = n.instance,
                    T = {
                        DataTracker: a.Z,
                        ViewModel: w.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: f,
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
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
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = T;
            },
            7130: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => Mr,
                        Bar: () => Sr,
                        DefaultScroll: () => xr,
                        Direction: () => Er,
                        defaultSettings: () => mr,
                        useHorizontalScrollApi: () => dr,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => $r, Bar: () => jr, Default: () => Yr, useVerticalScrollApi: () => yr }));
                var a = t(6179),
                    o = t.n(a);
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
                var i = t(3138);
                const l = {
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
                const m = i.O.client.getSize('rem'),
                    _ = m.width,
                    d = m.height,
                    A = Object.assign({ width: _, height: d }, E(_, d, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, D);
                    const r = (0, a.useContext)(F),
                        n = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        m = r.largeWidth,
                        _ = r.mediumWidth,
                        d = r.smallWidth,
                        A = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        B = r.largeHeight,
                        h = r.mediumHeight,
                        g = r.smallHeight,
                        p = r.extraSmallHeight,
                        f = { extraLarge: C, large: B, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return s(u, t, f);
                        if (t.largeWidth && m) return s(u, t, f);
                        if (t.mediumWidth && _) return s(u, t, f);
                        if (t.smallWidth && d) return s(u, t, f);
                        if (t.extraSmallWidth && A) return s(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                (0, a.memo)(C);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            r = t[0],
                            n = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    r = i.O.view.pxToRem(u);
                                n(Object.assign({ width: t, height: r }, E(t, r, l)));
                            }, []);
                        (B(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                        const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return o().createElement(F.Provider, { value: c }, e);
                    });
                var g = t(6483),
                    p = t.n(g),
                    f = t(926),
                    v = t.n(f);
                let b, w, S;
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
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const T = () => {
                        const e = (0, a.useContext)(F),
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
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const y = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_HEIGHT,
                        [S.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [S.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    P = (e) => {
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
                            })(e, x);
                        const n = T(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', M({ className: p()(t, y[a], L[s], O[i]) }, r), u);
                    },
                    N = ['children'];
                const k = (e) => {
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
                    return o().createElement(h, null, o().createElement(P, t, u));
                };
                var I = t(493),
                    H = t.n(I);
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const U = {
                        playHighlight() {
                            W('highlight');
                        },
                        playClick() {
                            W('play');
                        },
                        playYes() {
                            W('yes1');
                        },
                    },
                    G = {
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
                    z = [
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
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                class j extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick));
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
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
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
                                })(e, z)),
                            _ = p()(G.base, G[`base__${a}`], G[`base__${n}`], null == s ? void 0 : s.base),
                            d = p()(G.icon, G[`icon__${a}`], G[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = p()(G.glow, null == s ? void 0 : s.glow),
                            F = p()(G.caption, G[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = p()(G.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            V(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== a && o().createElement('div', { className: G.shine }),
                            o().createElement('div', { className: d }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: F }, u),
                            r && o().createElement('div', { className: D }, r),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var X = t(5521),
                    Y = t(4179);
                const $ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = X.n.NONE, u = $, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== X.n.NONE)
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
                var K = t(8515);
                function Z() {
                    return !1;
                }
                console.log;
                var Q = t(9174);
                function J(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ee(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ee(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                const te = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? te(e) : e)),
                                  Array.isArray(u)
                                      ? u.map(t)
                                      : u.map((e, u, r) => t(null == e ? void 0 : e.value, u, r)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? te(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? te(u) : u]),
                                    )
                            : e;
                        var u, t;
                    },
                    re = (e) => te(e);
                var ne = t(3946);
                const ae = [],
                    oe = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
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
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return (n.set(l, t), e && t(o(a)), l);
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
                                                        for (var e, t = J(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = Q.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = Q.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Q.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Q.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Q.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Q.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            _ = { mode: t, model: m, externalModel: s, cleanup: E };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && n ? n.controls(_) : u(_),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(r),
                                    d = _[0],
                                    A = _[1],
                                    F = (0, a.useState)(() => E(r, n, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? C(E(d, n, l)) : (m.current = !0);
                                    }, [l, d, n]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    selectableRewards: e.array('vehicles', []),
                                    filterQuery: Q.LO.box(''),
                                    selectedVehicles: Q.LO.array(ae),
                                },
                                t = (0, ne.Om)(
                                    () => {
                                        const e = u.root.get().availableToSelectCount;
                                        return re(u.selectableRewards.get()).map((u) => {
                                            const t = -1 !== r().indexOf(String(u.vehicleCD)),
                                                n = !t && e > 1 && r().length === e;
                                            return Object.assign({}, u, { isSelected: t, isDisabled: n });
                                        });
                                    },
                                    { equals: Z },
                                ),
                                r = (0, ne.Om)(() => re(u.selectedVehicles), { equals: Z }),
                                n = (0, ne.Om)(() => {
                                    const e = u.filterQuery.get();
                                    return t().filter((u) =>
                                        systemLocale.toLowerCase(u.name).includes(e && systemLocale.toLowerCase(e)),
                                    );
                                }),
                                a = (0, ne.Om)(() => n().length),
                                o = (0, ne.Om)(() => a() < u.root.get().availableVehiclesCount);
                            return Object.assign({}, u, {
                                computes: {
                                    getVehicles: t,
                                    getSelectableRewards: n,
                                    isFilterApplied: o,
                                    selectableRewardsLength: a,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = e.createCallbackNoArgs('onFilterReset');
                            return {
                                selectReward: e.createCallback((e) => ({ rewardIndex: e }), 'onSelectReward'),
                                confirm: e.createCallback((e) => ({ selectedVehicles: e }), 'onApplySelect'),
                                onClose: e.createCallbackNoArgs('onClose'),
                                selectVehicle: (0, Q.aD)((e) => {
                                    const t = u.root.get().availableToSelectCount,
                                        r = u.selectedVehicles.indexOf(e);
                                    t > 1
                                        ? r < 0
                                            ? u.selectedVehicles.push(e)
                                            : u.selectedVehicles.splice(r, 1)
                                        : r < 0
                                          ? (u.selectedVehicles[0] = e)
                                          : u.selectedVehicles.clear();
                                }),
                                setFilterQuery: (0, Q.aD)((e) => u.filterQuery.set(e)),
                                resetFilter: (0, Q.aD)(() => {
                                    (u.filterQuery.set(''), t());
                                }),
                            };
                        },
                    ),
                    se = oe[0],
                    ie = oe[1],
                    le = 'App_base_36',
                    ce = 'App_background_b8',
                    Ee = 'App_close_cf',
                    me = 'App_container_22',
                    _e = 'App_content_09',
                    de = 'App_footer_78',
                    Ae = {
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
                let Fe, De;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(De || (De = {})));
                const Ce = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        B = D[1],
                        h = (0, a.useState)(!1),
                        g = h[0],
                        f = h[1],
                        v = (0, a.useState)(!1),
                        b = v[0],
                        w = v[1],
                        S = (0, a.useCallback)(() => {
                            n || (F.current && (F.current.focus(), B(!0)));
                        }, [n]),
                        T = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                n || (A && A(e));
                            },
                            [n, A],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                n || (null !== i && W(i), c && c(e), w(!0));
                            },
                            [n, i, c],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                n || (_ && _(e), f(!1));
                            },
                            [n, _],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                n || (null !== l && W(l), m && m(e), t && S(), f(!0));
                            },
                            [n, l, m, S, t],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                n || (d && d(e), f(!1));
                            },
                            [n, d],
                        ),
                        N = p()(
                            Ae.base,
                            Ae[`base__${r}`],
                            {
                                [Ae.base__disabled]: n,
                                [Ae[`base__${u}`]]: u,
                                [Ae.base__focus]: C,
                                [Ae.base__highlightActive]: g,
                                [Ae.base__firstHover]: b,
                            },
                            s,
                        ),
                        k = p()(Ae.state, Ae.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: M,
                                onMouseMove: y,
                                onMouseUp: L,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: x,
                            },
                            r !== Fe.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Ae.back }),
                                    o().createElement('span', { className: Ae.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: k },
                                o().createElement('span', { className: Ae.stateDisabled }),
                                o().createElement('span', { className: Ae.stateHighlightHover }),
                                o().createElement('span', { className: Ae.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Ae.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ce.defaultProps = { type: Fe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Be = (0, a.memo)(Ce);
                var he = t(9887),
                    ge = t.n(he);
                const pe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    fe = (e) => e.includes('_') && ((e) => pe.includes(e))(e.split('_').at(-1)),
                    ve = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    be = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (fe(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = ve.indexOf(u),
                                    o = (-1 !== a ? pe.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== s ? s : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => pe.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    we = (e, u = be) => {
                        const t = (
                            (e, u = be) =>
                            (t) => {
                                const r = T().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => fe(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    Se = {
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
                    Te = [
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
                Object.keys(ge());
                const Me = {
                        XL: { mt: Se.mt__XL, mr: Se.mr__XL, mb: Se.mb__XL, ml: Se.ml__XL },
                        LG: { mt: Se.mt__LG, mr: Se.mr__LG, mb: Se.mb__LG, ml: Se.ml__LG },
                        MDp: { mt: Se.mt__MDp, mr: Se.mr__MDp, mb: Se.mb__MDp, ml: Se.ml__MDp },
                        MD: { mt: Se.mt__MD, mr: Se.mr__MD, mb: Se.mb__MD, ml: Se.ml__MD },
                        SMp: { mt: Se.mt__SMp, mr: Se.mr__SMp, mb: Se.mb__SMp, ml: Se.ml__SMp },
                        SM: { mt: Se.mt__SM, mr: Se.mr__SM, mb: Se.mb__SM, ml: Se.ml__SM },
                        XS: { mt: Se.mt__XS, mr: Se.mr__XS, mb: Se.mb__XS, ml: Se.ml__XS },
                    },
                    ye = (Object.keys(Me), ['mt', 'mr', 'mb', 'ml']),
                    Re = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Le = we((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            s = e.mt,
                            i = void 0 === s ? n : s,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            E = e.mb,
                            m = void 0 === E ? n : E,
                            _ = e.ml,
                            d = void 0 === _ ? n : _,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            B = e.flexStart,
                            h = e.center,
                            g = e.flexEnd,
                            f = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (B ? 'flex-start' : h && 'center') ||
                                      (g && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            S = e.alignItems,
                            T = void 0 === S ? (B ? 'flex-start' : h && 'center') || (g && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            M = e.wrap,
                            y = e.flexWrap,
                            R = void 0 === y ? (M ? 'wrap' : void 0) : y,
                            L = e.grow,
                            O = e.shrink,
                            P = e.flex,
                            N = void 0 === P ? (L || O ? `${L ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : P,
                            k = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Te);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: m, ml: d },
                                    u = ((e) =>
                                        ye.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Me[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ye.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[Re[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: x,
                                        display: C || T ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: R,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, m, d, k, N, x, C, R, w, T]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', xe({ className: p()(Se.base, ...G, u), style: U }, H), I);
                    });
                let Oe;
                function Pe(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Oe || (Oe = {}));
                const Ne = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ke = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ie = (e, u, t = Oe.left) => e.split(u).reduce(t === Oe.left ? Ne : ke, []),
                    He = (() => {
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
                    We = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ue = (e, u = Oe.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return We.includes(t)
                            ? He(e)
                            : ((e, u = Oe.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (Ie(n, /( )/, u).forEach((e) => (t = t.concat(Ie(e, r, Oe.left)))), t);
                              })(e, u);
                    },
                    Ge = 'FormatText_base_d0',
                    ze = ({ binding: e, text: u = '', classMix: t, alignment: r = Oe.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: p()(Ge, t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Ue(e, u))))(u, r, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ve = t(3532),
                    je = t.n(Ve);
                const Xe = {
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
                    Ye = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                Object.keys(ge());
                const qe = Object.keys(je()),
                    Ke = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ze = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Je = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    eu =
                        (Object.keys(Je),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Ke,
                            'heading-H36': Ke,
                            'heading-H28': Ze,
                            'heading-H24': Ze,
                            'heading-H24R': Ze,
                            'heading-H22': Ze,
                            'heading-H20R': Ze,
                            'heading-H18': Ze,
                            'heading-H15': Qe,
                            'heading-H14': Qe,
                            'paragraph-P24': Ze,
                            'paragraph-P18': Ze,
                            'paragraph-P16': Ze,
                            'paragraph-P14': Qe,
                            'paragraph-P12': Qe,
                            'paragraph-P10': Qe,
                        }),
                    uu =
                        (Object.keys(eu),
                        (e) =>
                            e
                                ? ((e) => qe.includes(e))(e)
                                    ? { colorClassName: Xe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    tu = we((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            E = void 0 === c ? s : c,
                            m = e.mb,
                            _ = void 0 === m ? s : m,
                            d = e.ml,
                            A = void 0 === d ? s : d,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ye);
                        const B = (0, a.useMemo)(() => {
                                const e = uu(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, n]),
                            h = B.computedStyle,
                            g = B.colorClassName;
                        return o().createElement(
                            Le,
                            $e(
                                {
                                    className: p()(Xe.base, t && Xe[t], g, r),
                                    style: h,
                                    mt: !0 === l ? eu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? eu[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? eu[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? eu[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? o().createElement(ze, $e({}, D, { text: u })) : u,
                        );
                    }),
                    ru = 'ErrorScreen_base_fb',
                    nu = 'ErrorScreen_icon_82',
                    au = 'ErrorScreen_title_be',
                    ou = 'ErrorScreen_description_4b',
                    su = 'ErrorScreen_button_7c',
                    iu = R.strings.seniority_awards,
                    lu = iu.buttons,
                    cu = (0, a.memo)(({ onClose: e }) =>
                        o().createElement(
                            'div',
                            { className: ru },
                            o().createElement('div', { className: nu }),
                            o().createElement(tu, { className: au, text: iu.vehicleSelector.errorScreen.title() }),
                            o().createElement(tu, { className: ou, text: iu.vehicleSelector.errorScreen.subTitle() }),
                            o().createElement(
                                Be,
                                { mixClass: su, onClick: e },
                                o().createElement(tu, { text: lu.applyButton() }),
                            ),
                        ),
                    ),
                    Eu = [
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
                function mu(e) {
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
                const _u = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    du = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
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
                            B = e.onShow,
                            h = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Eu);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
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
                            v = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (_u(t, d, { isMouseEvent: !0, on: !0, arguments: mu(r) }, f),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, d, r, f, B]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        _u(t, d, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, f, h]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
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
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === m && b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === m && b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var S;
                    };
                let Au;
                !(function (e) {
                    ((e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year'));
                })(Au || (Au = {}));
                Date.now();
                const Fu = (e, u, t) => {
                        switch (u) {
                            case Au.SHORT_DATE:
                                return t
                                    ? Y.Z5.getDateFormat(e, Y.kH.SHORT_FORMAT)
                                    : Y.cy.getTimeFormat('%d.%m.%y', e, !0);
                            case Au.SHORT_TIME:
                                return t
                                    ? Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)
                                    : Y.cy.getTimeFormat('%I:%M %p', e, !0);
                            case Au.SHORT_DATE_TIME:
                                if (t) {
                                    return `${Y.Z5.getDateFormat(e, Y.kH.SHORT_FORMAT)}, ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`;
                                }
                                return Y.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                            case Au.FULL_DATE:
                                return t
                                    ? Y.Z5.getDateFormat(e, Y.kH.LONG_FORMAT)
                                    : Y.cy.getTimeFormat('%B %d, %Y', e, !0);
                            case Au.FULL_DATE_TIME:
                                if (t) {
                                    return `${Y.Z5.getDateFormat(e, Y.kH.LONG_FORMAT)}, ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`;
                                }
                                return Y.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                            case Au.MONTH:
                                return Y.cy.getTimeFormat('%B', e, !0);
                            case Au.MONTH_DATE:
                                return Y.cy.getTimeFormat('%B %e', e, !0);
                            case Au.DATE_MONTH:
                                return Y.cy.getTimeFormat('%e %B', e, !0);
                            case Au.MONTH_YEAR:
                                return Y.cy.getTimeFormat('%B %Y', e, !0);
                            case Au.WEEK_DAY:
                                return Y.cy.getTimeFormat('%A', e, !0);
                            case Au.WEEK_DAY_TIME:
                                if (t) {
                                    return `${Y.cy.getTimeFormat('%A', e, !0)} ${Y.Z5.getTimeFormat(e, Y.lf.SHORT_FORMAT)}`;
                                }
                                return Y.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                            case Au.YEAR:
                                return Y.cy.getTimeFormat('%Y', e, !0);
                            case Au.DATE_YEAR:
                                return Y.cy.getTimeFormat('%d, %Y', e, !0);
                        }
                    },
                    Du = 'Footer_base_1a',
                    Cu = 'Footer_infoIcon_1b',
                    Bu = 'Footer_amountRewards_2e',
                    hu = 'Footer_textContainer_c9',
                    gu = 'Footer_text_95',
                    pu = 'Footer_text__active_30',
                    fu = 'Footer_selectedRewardsCount_92',
                    vu = 'Footer_formatText_dd',
                    bu = 'Footer_actions_c9',
                    wu = 'Footer_button_09',
                    Su = 'Footer_warningContainer_b4',
                    Tu = 'Footer_warningIcon_42',
                    xu = R.strings.seniority_awards,
                    Mu = (0, a.memo)(
                        ({
                            selectedRewardsCount: e,
                            maxSelectCount: u,
                            className: t,
                            expirationTime: r,
                            selectedVehicles: n,
                            onClose: a,
                            onConfirm: s,
                        }) => {
                            return o().createElement(
                                'div',
                                { className: p()(Du, t) },
                                o().createElement(
                                    'div',
                                    { className: hu },
                                    o().createElement(tu, {
                                        text: xu.vehicleSelector.selectScreen.footer.actionText.active(),
                                        format: {
                                            binding: {
                                                infoIcon: o().createElement(
                                                    du,
                                                    {
                                                        contentId:
                                                            R.views.lobby.seniority_awards.tooltips.SelectedRewardsTooltip(
                                                                'resId',
                                                            ),
                                                        args: { selectedVehicles: n },
                                                    },
                                                    o().createElement('div', { className: Cu }),
                                                ),
                                                amountRewards: o().createElement(tu, {
                                                    text: xu.vehicleSelector.selectScreen.footer.vehicleCount(),
                                                    className: Bu,
                                                    format: {
                                                        binding: {
                                                            selectedCount: o().createElement(tu, {
                                                                text: String(e),
                                                                className: fu,
                                                            }),
                                                            allCount: o().createElement(tu, { text: String(u) }),
                                                        },
                                                    },
                                                }),
                                            },
                                            classMix: vu,
                                        },
                                        className: p()(gu, Boolean(e) && pu),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: bu },
                                    o().createElement(
                                        Be,
                                        { size: De.medium, mixClass: wu, type: Fe.primary, disabled: !e, onClick: s },
                                        o().createElement(tu, { text: xu.buttons.claim() }),
                                    ),
                                    o().createElement(
                                        Be,
                                        { size: De.medium, mixClass: wu, type: Fe.secondary, onClick: a },
                                        o().createElement(tu, { text: xu.buttons.claimLater() }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Su },
                                    o().createElement('div', { className: Tu }),
                                    o().createElement(tu, {
                                        text: xu.vehicleSelector.selectScreen.footer.selectExpirationTime(),
                                        format: {
                                            binding: {
                                                selectExexpirationTime:
                                                    ((i = Fu(r, Au.FULL_DATE, !0)), i.replaceAll(' ', ' ')),
                                            },
                                        },
                                    }),
                                ),
                            );
                            var i;
                        },
                    ),
                    yu = {
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
                    Ru = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Lu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ou = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Pu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let s = Ru.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = Lu.exec(t),
                                c = Ou.exec(t),
                                E = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                ((i = i.replace(t, `%(${s})`)),
                                    (n[s] = yu[e]
                                        ? o().createElement(
                                              'span',
                                              { className: yu[e] },
                                              o().createElement(ze, { text: E, binding: u }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: r(e) },
                                              o().createElement(ze, { text: E, binding: u }),
                                          )));
                            }
                            s = Ru.exec(e);
                        }
                        return o().createElement(ze, { text: i, classMix: t, binding: n });
                    }),
                    Nu = ['children'];
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
                const Iu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Nu);
                        return o().createElement(
                            du,
                            ku(
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
                    Hu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const Uu = R.views.common.tooltip_window.simple_tooltip_content,
                    Gu = (e) => {
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
                            })(e, Hu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, i]);
                        return o().createElement(
                            du,
                            Wu(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Uu.SimpleTooltipHtmlContent('resId') : Uu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
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
                const Vu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(Gu, u, r);
                        const n = u.contentId,
                            a = u.args,
                            s = null == a ? void 0 : a.contentId;
                        return n || s
                            ? o().createElement(du, zu({}, u, { contentId: n || s }), r)
                            : o().createElement(Iu, u, r);
                    },
                    ju = ['children', 'tooltipType', 'wrap'],
                    Xu = ['contentId'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                function $u(e, u) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                    return n;
                }
                let qu;
                !(function (e) {
                    ((e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple'));
                })(qu || (qu = {}));
                const Ku = (e) => {
                        let u = e.children,
                            t = e.tooltipType,
                            r = e.wrap,
                            n = void 0 !== r && r,
                            a = $u(e, ju);
                        if (!a) return u;
                        const s = n && (a.isEnabled || void 0 === a.isEnabled) ? o().createElement('div', null, u) : u,
                            i = a.contentId,
                            l = $u(a, Xu);
                        switch (t) {
                            case qu.Base:
                                return (
                                    !i && console.error('`contentId` field is required for a base Tooltip'),
                                    i ? o().createElement(du, Yu({}, l, { contentId: i }), s) : s
                                );
                            case qu.Simple:
                                return o().createElement(Gu, l, s);
                            case qu.Backport:
                                return o().createElement(Iu, l, s);
                            default:
                                return o().createElement(Vu, { tooltipArgs: a }, s);
                        }
                    },
                    Zu = 'default',
                    Qu = 'search',
                    Ju = 'email',
                    et = 'password',
                    ut = 'normal',
                    tt = 'disabled',
                    rt = 'alert',
                    nt = 'error',
                    at = 'medium',
                    ot = {
                        [Zu]: '',
                        [Ju]: R.strings.common.input.placeholder.email(),
                        [Qu]: R.strings.common.input.placeholder.search(),
                        [et]: R.strings.common.input.placeholder.password(),
                    },
                    st = { [Zu]: 'text', [Ju]: 'text', [Qu]: 'text', [et]: 'password' },
                    it = { [Zu]: '', [Ju]: 'Invalid email', [Qu]: '', [et]: '' },
                    lt = R.images.gui.maps.icons.components.input;
                function ct(e, u) {
                    return (
                        u !== Ju ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const Et = {
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
                    mt = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = Zu,
                            size: r = at,
                            variant: n = ut,
                            placeholder: s = '',
                            highlighted: i,
                            withClear: l,
                            selectOnFocus: c = !0,
                            maxLength: E,
                            iconSource: m,
                            classMix: _,
                            onMouseEnter: d,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: D,
                            onClick: C,
                            onChange: B,
                            onClear: h,
                            onFocus: g,
                            onBlur: f,
                        }) => {
                            const v = (0, a.useState)(!1),
                                b = v[0],
                                w = v[1],
                                S = (0, a.useRef)(null),
                                T = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = n !== tt,
                                M = (0, a.useCallback)(
                                    (e) => {
                                        x && (w(!0), g && g(e));
                                    },
                                    [x, g],
                                ),
                                y = (0, a.useCallback)(
                                    (e) => {
                                        x && !T.current.mouseOver && (w(!1), f && f(e));
                                    },
                                    [x, f],
                                );
                            (0, a.useEffect)(() => {
                                x && b && c && S.current && S.current.select();
                            }, [c, b, x]);
                            const R = (0, a.useCallback)(
                                    (e) => {
                                        x && B && B(e.target.value);
                                    },
                                    [x, B],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseOver = !0), d && d(e));
                                    },
                                    [x, d],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            S.current &&
                                            (T.current.mouseDown && S.current.focus(),
                                            (T.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [x, A],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseDown = !0), F && F(e));
                                    },
                                    [x, F],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseDown = !1), D && D(e));
                                    },
                                    [x, D],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        if (x && S.current) {
                                            ((!b || (b && e.target !== S.current)) && S.current.focus(), C && C(e));
                                        }
                                    },
                                    [b, x, C],
                                ),
                                I = s || ot[t],
                                H = Boolean(m),
                                W = p()(
                                    Et.base,
                                    Et[`base__${r}`],
                                    i && Et[`base__${n}`],
                                    b && Et.base__focused,
                                    H && Et.base__withIcon,
                                    _,
                                ),
                                G = (0, a.useMemo)(() => (m ? { backgroundImage: `url(${m})` } : null), [m]),
                                z = p()(Et.input, Et[`input__${t}`]),
                                V = p()(Et.icon, Et[`icon__${t}`]),
                                j = p()(Et.placeholder, Et[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: P,
                                    onMouseUp: N,
                                    onMouseLeave: O,
                                    onClick: k,
                                },
                                !x && o().createElement('div', { className: Et.disabled }),
                                G && o().createElement('div', { style: G, className: V }),
                                o().createElement('input', {
                                    ref: S,
                                    className: z,
                                    type: st[t],
                                    value: u,
                                    onChange: R,
                                    disabled: !x,
                                    onFocus: M,
                                    onBlur: y,
                                    maxLength: E,
                                }),
                                I && !u && !b && o().createElement('div', { className: j }, I),
                                l &&
                                    o().createElement('div', {
                                        className: Et.clear,
                                        onClick: (e) => {
                                            (U.playClick(), h && h(e));
                                        },
                                        onMouseEnter: U.playHighlight,
                                    }),
                            );
                        },
                    ),
                    _t = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    dt = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: n }) => {
                        const s = (0, a.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return e === rt ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            i = p()(_t.base, u && _t.base__shown),
                            l = p()(_t.message, _t[`message__${e}`], n);
                        return o().createElement(
                            'div',
                            { className: i },
                            s && o().createElement('div', { className: _t.icon, style: s }),
                            o().createElement('div', { className: l }, t),
                        );
                    },
                    At = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Ft = [
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
                const Ct = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Bt = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? Zu : t,
                            n = e.variant,
                            s = void 0 === n ? ut : n,
                            i = e.size,
                            l = void 0 === i ? at : i,
                            c = e.value,
                            E = e.tooltipArgs,
                            m = e.helperText,
                            _ = void 0 === m ? '' : m,
                            d = e.isValidated,
                            A = void 0 === d || d,
                            F = e.showHelper,
                            D = void 0 === F || F,
                            C = e.error,
                            B = e.options,
                            h = e.onFocus,
                            g = e.onMouseEnter,
                            f = e.onMouseLeave,
                            v = e.onMouseUp,
                            b = e.onMouseDown,
                            w = e.onChange,
                            S = e.classMix,
                            T = e.controlClassMix,
                            x = e.helperClassMix,
                            M = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ft);
                        const y = (0, a.useState)(c),
                            R = y[0],
                            L = y[1],
                            O = (0, a.useState)(A),
                            P = O[0],
                            N = O[1],
                            k = (0, a.useMemo)(() => Object.assign({}, Ct, B), [B]),
                            I = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, a.useCallback)((e) => {
                                e !== I.current.value &&
                                    ((I.current.value = e), (I.current.isChangeHandled = !1), L(e));
                            }, []),
                            W = (0, a.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (k.performChangeValidation &&
                                        (u = k.changesValidator ? k.changesValidator(e) : ct(e, I.current.type)),
                                        w && w(e, u));
                                },
                                [w, k],
                            ),
                            U = (0, a.useCallback)(() => {
                                I.current.debounceTimeout &&
                                    (window.clearTimeout(I.current.debounceTimeout), (I.current.debounceTimeout = 0));
                            }, []),
                            G = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => U(), [U]);
                        const z = (0, a.useCallback)(
                            (e) => {
                                (U(),
                                    k.debounceTime
                                        ? (I.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, k.debounceTime))
                                        : W(e));
                            },
                            [W, U, k.debounceTime],
                        );
                        ((0, a.useEffect)(() => {
                            I.current.isChangeHandled ||
                                I.current.value !== R ||
                                (z(I.current.value), (I.current.isChangeHandled = !0));
                        }, [R, z]),
                            (0, a.useEffect)(() => {
                                (I.current.isChangeHandled && c !== I.current.value && ((I.current.value = c), L(c)),
                                    (I.current.type = r));
                            }, [c, r]),
                            (0, a.useEffect)(() => {
                                N(A);
                            }, [A, s]));
                        const V = (0, a.useCallback)((e) => g && g(e), [g]),
                            j = (0, a.useCallback)(
                                (e) => {
                                    (k.disableHighlightOnFocus && P && N(!1), h && h(e));
                                },
                                [P, h, k.disableHighlightOnFocus],
                            ),
                            X = (0, a.useCallback)((e) => v && v(e), [v]),
                            Y = (0, a.useCallback)((e) => b && b(e), [b]),
                            $ = (0, a.useCallback)((e) => f && f(e), [f]),
                            q = (0, a.useMemo)(
                                () =>
                                    k.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Qu ? lt.$dyn(`search_${u}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, k.withTypeIcon],
                            ),
                            K = _ || it[r],
                            Z = Boolean(R),
                            Q = C ? nt : s,
                            J = Boolean(C) || P,
                            ee = (0, a.useMemo)(
                                () => ('boolean' == typeof k.withClear ? Z && k.withClear : Z && r === Qu),
                                [r, Z, k],
                            ),
                            ue = p()(At.base, At[`base__${l}`], At[`base__${s}`], S);
                        return o().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: V, onMouseDown: Y, onMouseUp: X, onMouseLeave: $ },
                            o().createElement(
                                Ku,
                                Dt({ wrap: !0 }, E),
                                o().createElement(
                                    mt,
                                    Dt(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: q,
                                            size: l,
                                            type: r,
                                            variant: Q,
                                            value: R,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: k.selectOnFocus,
                                            maxLength: k.maxLength,
                                            classMix: T,
                                            onFocus: j,
                                            onChange: H,
                                            onClear: G,
                                        },
                                        M,
                                    ),
                                ),
                            ),
                            K &&
                                o().createElement(
                                    'div',
                                    { className: At.helper },
                                    o().createElement(dt, {
                                        variant: Q,
                                        show: D && (k.isPermanentHelper || J),
                                        helperText: C || K,
                                        helperIcon: k.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    ht = (e) => {
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
                    gt = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    pt = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var ft;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(ft || (ft = {}));
                const vt = ['__left', '__right', '__top', '__bottom'],
                    bt =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, n) => {
                                const s = (0, a.useRef)(null),
                                    l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    E = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    m = E[0],
                                    _ = E[1],
                                    d = (0, a.useCallback)(() => {
                                        (U.playClick(), i.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        U.playHighlight();
                                    }, []),
                                    F = p()(pt.arrow, pt[`arrow${vt[m]}`]);
                                gt(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === s.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = i.O.client.getMouseGlobalPosition(),
                                                    u = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < r.boundX ||
                                                        e.x > r.boundX + r.boundWidth ||
                                                        e.y > r.boundY + r.boundHeight ||
                                                        e.y < r.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [s, c, t],
                                    ),
                                    C = (0, a.useCallback)(
                                        () => (
                                            i.O.view.freezeTextureBeforeResize(),
                                            ht(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        u = l.current.scrollHeight;
                                                    (i.O.view.resize(e, u), _(window.decorator.directionType));
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, a.useImperativeHandle)(n, () => ({ updateSize: C })),
                                    gt(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && r(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, Y.Eu)());
                                        return (
                                            !u && e.promise.then(() => C()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [C, D, u]),
                                    o().createElement(
                                        'div',
                                        { className: pt.base, ref: l },
                                        o().createElement(
                                            'div',
                                            { className: pt.decorator },
                                            o().createElement(
                                                'div',
                                                { className: pt.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        Gu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: pt.closeBtn,
                                                            onClick: d,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: F, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const St = (e) => {
                    let u = e.contentId,
                        t = e.decoratorId,
                        r = e.direction,
                        n = void 0 === r ? ft.Top : r,
                        s = e.targetId,
                        i = e.args,
                        l = e.onClick,
                        c = e.children,
                        E = e.isEnabled,
                        m = void 0 === E || E,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, bt);
                    const d = (0, a.useRef)(null),
                        A = (0, a.useCallback)(() => {
                            if ((0, Y.wU)()) return (0, Y.SW)();
                            d.current && (0, Y.P3)(u, n, d.current, t, s, i);
                        }, [u, n, i, t, s]);
                    return o().createElement(
                        'div',
                        wt(
                            {
                                ref: d,
                                onClick:
                                    ((F = c.props.onClick),
                                    (e) => {
                                        m && (A(), l && l(e), F && F(e));
                                    }),
                            },
                            _,
                        ),
                        c,
                    );
                    var F;
                };
                function Tt(e, u, t, r) {
                    let n,
                        a = !1,
                        o = 0;
                    function s() {
                        n && clearTimeout(n);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - o;
                        function E() {
                            ((o = Date.now()), t.apply(l, i));
                        }
                        a ||
                            (r && !n && E(),
                            s(),
                            void 0 === r && c > e
                                ? E()
                                : !0 !== u &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : E,
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
                }
                function xt(e, u, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? Tt(e, u, !1) : Tt(e, t, !1 !== u);
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
                const Mt = 'Filter_base_a2',
                    yt = 'Filter_wrapper_91',
                    Rt = 'Filter_controls_0b',
                    Lt = 'Filter_input_4e',
                    Ot = 'Filter_button_48',
                    Pt = 'Filter_buttonIcon_93',
                    Nt = 'SearchDetails_base_df',
                    kt = 'SearchDetails_shown_08',
                    It = 'SearchDetails_searchResults_3d',
                    Ht = 'SearchDetails_glow_73',
                    Wt = 'SearchDetails_glow__shown_8e',
                    Ut = 'SearchDetails_button_6b',
                    Gt = 'SearchDetails_button__hovered_ba',
                    zt = 'SearchDetails_buttonGradient_46',
                    Vt = 'SearchDetails_buttonIcon_37',
                    jt = 'SearchDetails_shownCount_ce',
                    Xt = 'SearchDetails_shownCount__divider_e5',
                    Yt = 'SearchDetails_shownCount__zero_4d',
                    $t = R.strings.seniority_awards.vehicleSelector.selectScreen.filter,
                    qt = (0, a.memo)(
                        ({ itemsAvailable: e, filteredRewardsCount: u, isFilterApplied: t, onResetFilter: r }) => {
                            const n = (0, a.useState)(!1),
                                s = n[0],
                                i = n[1];
                            return o().createElement(
                                'div',
                                { className: Nt },
                                o().createElement(tu, { className: kt, text: $t.shownCount() }),
                                o().createElement(
                                    'div',
                                    { className: It },
                                    t
                                        ? o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(tu, { text: String(u), className: p()(jt, !u && Yt) }),
                                              o().createElement(tu, {
                                                  text: $t.shownCountDivider(),
                                                  format: { binding: { count: e } },
                                                  className: Xt,
                                              }),
                                          )
                                        : o().createElement(tu, { text: String(e), className: p()(jt, !u && Yt) }),
                                    o().createElement('div', { className: p()(Ht, t && Wt) }),
                                ),
                                t &&
                                    o().createElement(
                                        Gu,
                                        {
                                            header: $t.tooltip.clearFilter.header(),
                                            body: $t.tooltip.clearFilter.body(),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: p()(Ut, s && Gt),
                                                onClick: () => {
                                                    (U.playClick(), r());
                                                },
                                                onMouseEnter: () => {
                                                    (i(!0), U.playHighlight());
                                                },
                                                onMouseLeave: () => {
                                                    i(!1);
                                                },
                                            },
                                            o().createElement('div', { className: zt }),
                                            o().createElement('div', { className: Vt }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Kt = R.strings.seniority_awards.vehicleSelector.selectScreen.filter,
                    Zt = R.strings.seniority_awards.vehicleSelector.selectScreen.popover,
                    Qt = (0, K.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.filterQuery.get(),
                            n = u.root.get().availableVehiclesCount,
                            a = u.computes.isFilterApplied(),
                            s = u.computes.selectableRewardsLength(),
                            i = xt(
                                (e) => {
                                    t.setFilterQuery(e);
                                },
                                [],
                                400,
                            );
                        return o().createElement(
                            'div',
                            { className: Mt },
                            o().createElement(
                                'div',
                                { className: yt },
                                o().createElement(qt, {
                                    itemsAvailable: n,
                                    isFilterApplied: a,
                                    filteredRewardsCount: s,
                                    onResetFilter: t.resetFilter,
                                }),
                                o().createElement(
                                    'div',
                                    { className: Rt },
                                    o().createElement(Bt, {
                                        value: r,
                                        type: Qu,
                                        placeholder: Kt.vehicleNameSearch(),
                                        classMix: Lt,
                                        onChange: i,
                                    }),
                                    o().createElement(
                                        St,
                                        {
                                            contentId:
                                                R.views.lobby.seniority_awards.popovers.VehicleFilterPopover('resId'),
                                            direction: ft.Bottom,
                                        },
                                        o().createElement(
                                            Gu,
                                            { header: Zt.tooltip.header(), body: Zt.tooltip.body() },
                                            o().createElement(
                                                Be,
                                                { mixClass: Ot },
                                                o().createElement('div', { className: Pt }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Jt = 'Header_base_47',
                    er = 'Header_title_66',
                    ur = 'Header_additionTitle_c2',
                    tr = 'Header_filterContainer_04',
                    rr = (0, a.memo)(({ title: e, subTitle: u }) =>
                        o().createElement(
                            'div',
                            { className: Jt },
                            o().createElement(tu, { className: er, text: e }),
                            o().createElement(Pu, { classMix: ur, text: u }),
                            o().createElement('div', { className: tr }, o().createElement(Qt, null)),
                        ),
                    ),
                    nr = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ar = [];
                function or(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ar)
                    );
                }
                function sr(e, u, t = []) {
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
                function ir(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return lr(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return lr(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function lr(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var cr = t(7030);
                let Er;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Er || (Er = {}));
                const mr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _r = ({
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
                            return nr(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? mr : c,
                                m = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
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
                                            for (var r, n = ir(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(() => Tt(t, e), u);
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, cr.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return s(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = m.current;
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
                                g = (0, a.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = B(u, e, r);
                                        h(a);
                                    },
                                    [h, B, E.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && g(r(e)),
                                            m.current && d.trigger('mouseWheel', e, D.scrollPosition, u(m.current)));
                                    },
                                    [D.scrollPosition, g, d],
                                ),
                                f = ((e, u = []) => {
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
                                        ht(() => {
                                            const e = m.current;
                                            e &&
                                                (h(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                v = or(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && h(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
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
                            const b = (0, a.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: p,
                                    applyScroll: h,
                                    applyStepTo: g,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, h, g, b, d.off, d.on, v, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    dr = _r({
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
                        getDirection: (e) => (e.deltaY > 1 ? Er.Next : Er.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ar = 'HorizontalBar_base_49',
                    Fr = 'HorizontalBar_base__nonActive_82',
                    Dr = 'HorizontalBar_leftButton_5f',
                    Cr = 'HorizontalBar_rightButton_03',
                    Br = 'HorizontalBar_track_0d',
                    hr = 'HorizontalBar_thumb_fd',
                    gr = 'HorizontalBar_rail_32',
                    pr = 'disable',
                    fr = { pending: !1, offset: 0 },
                    vr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    br = () => {},
                    wr = (e, u) => Math.max(20, e.offsetWidth * u),
                    Sr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = vr, onDrag: r = br }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(fr),
                            _ = m[0],
                            d = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    E = nr(0, 1, a / (n - r)),
                                    m = (u.offsetWidth - wr(u, o)) * E;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(pr),
                                                    void i.current.classList.remove(pr)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(pr),
                                                    void i.current.classList.add(pr)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(pr), i.current.classList.remove(pr));
                                        }
                                    })(m));
                            },
                            D = or(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${wr(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(Fr) : n.current.classList.remove(Fr)));
                                })(),
                                    F());
                            });
                        ((0, a.useEffect)(() => ht(D)),
                            (0, a.useEffect)(
                                () =>
                                    ht(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = br;
                                        const r = () => {
                                            (t(), (t = ht(D)));
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
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            o = c.current;
                                        if (!n || !a || !o) return;
                                        const s = u.screenX - _.offset - a.getBoundingClientRect().x,
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
                                        (window.removeEventListener('mousemove', u), A(fr));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, A]));
                        const C = sr((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const g = (e) => {
                            e.target.classList.contains(pr) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()(Ar, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()(Dr, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pr) || 0 !== e.button || (W('play'), B(Er.Next));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: g,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()(Br, u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        if (r && 0 === u.button)
                                            if ((W('play'), u.target === r))
                                                A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = c.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? Er.Prev : Er.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: g,
                                },
                                o().createElement('div', { ref: c, className: p()(hr, u.thumb) }),
                                o().createElement('div', { className: p()(gr, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()(Cr, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pr) || 0 !== e.button || (W('play'), B(Er.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: g,
                            }),
                        );
                    }),
                    Tr = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    xr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(Tr.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Tr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Tr.defaultScrollArea, n) },
                                o().createElement(Mr, { className: i, api: m, classNames: s }, e),
                            ),
                            o().createElement(Sr, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Mr = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => ht(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Tr.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: p()(Tr.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: p()(Tr.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Mr.Bar = Sr),
                    (Mr.Default = xr),
                    (Mr.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => ht(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Tr.base, u) },
                            o().createElement(
                                'div',
                                { className: p()(Tr.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: p()(Tr.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const yr = _r({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Er.Next : Er.Prev),
                    }),
                    Rr = 'VerticalBar_base_f3',
                    Lr = 'VerticalBar_base__nonActive_42',
                    Or = 'VerticalBar_topButton_d7',
                    Pr = 'VerticalBar_bottomButton_06',
                    Nr = 'VerticalBar_track_df',
                    kr = 'VerticalBar_thumb_32',
                    Ir = 'VerticalBar_rail_43',
                    Hr = 'disable',
                    Wr = () => {},
                    Ur = { pending: !1, offset: 0 },
                    Gr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    zr = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Vr = (e, u) => Math.max(20, e.offsetHeight * u),
                    jr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Gr, onDrag: r = Wr }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(Ur),
                            _ = m[0],
                            d = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = or(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Vr(t, o)}px`),
                                    u.classList.add(kr),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(Lr) : n.current.classList.remove(Lr)),
                                    o
                                );
                            }),
                            D = or(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    E = nr(0, 1, a / (n - r)),
                                    m = (u.offsetHeight - Vr(u, o)) * E;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Hr),
                                                    void i.current.classList.remove(Hr)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Hr),
                                                    void i.current.classList.add(Hr)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(Hr), i.current.classList.remove(Hr));
                                        }
                                    })(m));
                            }),
                            C = or(() => {
                                zr(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, a.useEffect)(() => ht(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    zr(e, () => {
                                        D();
                                    });
                                };
                                let t = Wr;
                                const r = () => {
                                    (t(), (t = ht(C)));
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
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        zr(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = u.screenY - _.offset - n.getBoundingClientRect().y,
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
                                            A(Ur));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, A]));
                        const B = sr((u) => e.applyStepTo(u), E, [e]),
                            h = B[0],
                            g = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Hr) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()(Rr, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()(Or, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Hr) || 0 !== e.button || (W('play'), h(Er.Next));
                                },
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()(Nr, u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        if (r && 0 === u.button)
                                            if ((W('play'), u.target === r))
                                                (e.handleIsThumbDragging(!0),
                                                    A({
                                                        pending: !0,
                                                        offset: u.screenY - r.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        zr(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? Er.Prev : Er.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: p()(Ir, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()(Pr, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Hr) || 0 !== e.button || (W('play'), h(Er.Prev));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Xr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Yr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(Xr.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Xr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Xr.area, n) },
                                o().createElement($r, { className: s, classNames: i, api: m }, e),
                            ),
                            o().createElement(jr, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    $r = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => ht(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Xr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Xr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                $r.Default = Yr;
                const qr = { Vertical: n, Horizontal: r },
                    Kr = 'NoFilteredVehicles_base_ee',
                    Zr = 'NoFilteredVehicles_info_58',
                    Qr = 'NoFilteredVehicles_vehicleInfo_1e',
                    Jr = 'NoFilteredVehicles_alertIcon_91',
                    en = 'NoFilteredVehicles_vehicleIcon_08',
                    un = 'NoFilteredVehicles_text_37',
                    tn = 'NoFilteredVehicles_button_78',
                    rn = R.strings.seniority_awards,
                    nn = (0, a.memo)(({ isFilterApplied: e, className: u, onFilterReset: t }) => {
                        const r = e
                            ? rn.vehicleSelector.selectScreen.noVehicles.clearFilter()
                            : rn.vehicleSelector.selectScreen.noVehicles.hasAllVehicles();
                        return o().createElement(
                            'div',
                            { className: p()(Kr, u) },
                            e
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(
                                          'div',
                                          { className: Zr },
                                          o().createElement('div', { className: Jr }),
                                          o().createElement(tu, { text: r, className: un }),
                                      ),
                                      o().createElement(
                                          Be,
                                          { size: De.medium, mixClass: tn, type: Fe.secondary, onClick: t },
                                          o().createElement(tu, { text: rn.buttons.clearFilter() }),
                                      ),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: Qr },
                                      o().createElement('div', { className: en }),
                                      o().createElement(Pu, { text: r, classMix: un }),
                                  ),
                        );
                    }),
                    an = 'Cards_base_80';
                class on extends o().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Y.B3.GOLD;
                        else e = Y.B3.INTEGRAL;
                        const u = Y.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let sn, ln, cn, En, mn, _n, dn;
                ((on.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                    })(sn || (sn = {})),
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
                    })(ln || (ln = {})),
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
                    })(cn || (cn = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(En || (En = {})),
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
                    })(mn || (mn = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_n || (_n = {})),
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
                    })(dn || (dn = {})));
                (sn.Items,
                    sn.Equipment,
                    sn.Xp,
                    sn.XpFactor,
                    sn.Blueprints,
                    sn.BlueprintsAny,
                    sn.Goodies,
                    sn.Berths,
                    sn.Slots,
                    sn.Tokens,
                    sn.CrewSkins,
                    sn.CrewBooks,
                    sn.Customizations,
                    sn.CreditsFactor,
                    sn.TankmenXp,
                    sn.TankmenXpFactor,
                    sn.FreeXpFactor,
                    sn.BattleToken,
                    sn.Entitlements,
                    sn.PremiumUniversal,
                    sn.NaturalCover,
                    sn.BpCoin,
                    sn.BattlePassSelectToken,
                    sn.BattlaPassFinalAchievement,
                    sn.BattleBadge,
                    sn.BonusX5,
                    sn.CrewBonusX3,
                    sn.NewYearFillers,
                    sn.NewYearInvoice,
                    sn.EpicSelectToken,
                    sn.Comp7TokenWeeklyReward,
                    sn.Comp7TokenCouponReward,
                    sn.BattleBoosterGift,
                    sn.NewYearFillers,
                    sn.NewYearInvoice,
                    sn.LootBoxToken,
                    sn.CosmicLootboxCommon,
                    sn.CosmicLootboxSilver,
                    sn.SelectableBonus,
                    sn.GoldenTicket,
                    sn.PostStamp,
                    sn.BlankPersonalMissions_1,
                    sn.BlankPersonalMissions_2,
                    sn.SACoin,
                    sn.PremiumPlusUniversal,
                    sn.NyPetGoodies,
                    sn.HiddenVehicle,
                    sn.Gold,
                    sn.Credits,
                    sn.Crystal,
                    sn.FreeXp,
                    sn.NewYearToyFragments,
                    sn.BattlePassPoints,
                    sn.PremiumPlus,
                    sn.Premium);
                let An;
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
                })(An || (An = {}));
                const Fn = (e, u, t) => {
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
                    Dn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Cn = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Bn = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    hn = (e) =>
                        Bn
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Cn.length - 1; t >= 0; t--)
                                      for (; e >= Cn[t]; ) ((u += Dn[t]), (e -= Cn[t]));
                                  return u;
                              })(e),
                    gn = 'Card_base_55',
                    pn = 'Card_base__active_ee',
                    fn = (0, a.memo)(({ children: e, isSelected: u, vehicleCD: t, className: r, selectReward: n }) =>
                        o().createElement(
                            'div',
                            {
                                className: p()(gn, r, u && pn),
                                onClick: () => {
                                    (U.playClick(), n(t));
                                },
                                onMouseEnter: U.playHighlight,
                            },
                            e,
                        ),
                    ),
                    vn = 'VehicleReward_nationImage_1a',
                    bn = 'VehicleReward_vehicleImage_fd',
                    wn = 'VehicleReward_card_0c',
                    Sn = 'VehicleReward_card__lastInRow_8f',
                    Tn = 'VehicleReward_card__disabled_61',
                    xn = 'VehicleReward_disabledPattern_99',
                    Mn = 'VehicleReward_vehicleName_79',
                    yn = R.strings.menu.header.vehicleType,
                    Rn = R.strings.seniority_awards.vehicleSelector.selectScreen.vehicleCard,
                    Ln = (0, a.memo)(({ vehicle: e, rewardIndex: u, selectReward: t }) => {
                        const r = T().mediaSize,
                            n = R.images.gui.maps.shop.vehicles.c_360x270.$dyn(Pe(e.name)),
                            a = R.images.gui.maps.shop.nations.$dyn(`flag_${e.nation}`),
                            s =
                                (u + 1) %
                                    ((e) => {
                                        switch (!0) {
                                            case e >= b.ExtraLarge:
                                                return 6;
                                            case e >= b.Medium:
                                                return 5;
                                            case e >= b.Small:
                                                return 4;
                                            default:
                                                return 3;
                                        }
                                    })(r) ==
                                0;
                        return o().createElement(
                            Vu,
                            {
                                tooltipArgs: Fn(
                                    { tooltipId: e.tooltipId, vehicleCD: e.vehicleCD },
                                    Number(e.tooltipContentId),
                                    { ignoreShowDelay: !0 },
                                ),
                            },
                            o().createElement(
                                fn,
                                {
                                    isSelected: e.isSelected,
                                    vehicleCD: String(e.vehicleCD),
                                    selectReward: t,
                                    className: p()(wn, e.isDisabled && Tn, s && Sn),
                                },
                                o().createElement('div', { className: vn, style: { backgroundImage: `url(${a})` } }),
                                o().createElement('div', { className: bn, style: { backgroundImage: `url(${n})` } }),
                                e.isDisabled && o().createElement('div', { className: xn }),
                                o().createElement(Pu, {
                                    text: Rn.vehicleName(),
                                    binding: { type: yn.$dyn(Pe(e.type)), level: hn(e.vehicleLvl), name: e.userName },
                                    classMix: Mn,
                                }),
                            ),
                        );
                    }),
                    On = (0, a.memo)(({ className: e, rewards: u, selectReward: t }) =>
                        o().createElement(
                            'div',
                            { className: p()(an, e) },
                            u.map((e, u) =>
                                o().createElement(Ln, { key: e.name, vehicle: e, selectReward: t, rewardIndex: u }),
                            ),
                        ),
                    ),
                    Pn = 'ScrollableCards_base_d4',
                    Nn = 'ScrollableCards_shadow_cb',
                    kn = 'ScrollableCards_shadow__visible_44',
                    In = 'ScrollableCards_shadow__top_63',
                    Hn = 'ScrollableCards_shadow__bottom_e9',
                    Wn = 'ScrollableCards_noFilteredVehicles_af',
                    Un = 'ScrollableCards_cards_b9',
                    Gn = 'ScrollableCards_scrollBar_14',
                    zn = 'ScrollableCards_barThumb_80',
                    Vn = 'ScrollableCards_barRail_77';
                let jn;
                !(function (e) {
                    ((e[(e.WithoutScroll = 0)] = 'WithoutScroll'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'));
                })(jn || (jn = {}));
                const Xn = (0, K.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = T(),
                            n = r.remScreenWidth,
                            s = r.remScreenHeight,
                            i = yr(),
                            l = u.computes.getSelectableRewards(),
                            c = u.computes.isFilterApplied(),
                            E = l.length,
                            m = ((e, u = []) => {
                                const t = e.animationScroll,
                                    r = e.getContainerSize,
                                    n = e.getWrapperSize,
                                    o = e.events,
                                    s = (0, a.useState)(jn.WithoutScroll),
                                    i = s[0],
                                    l = s[1],
                                    c = (0, a.useCallback)(() => {
                                        const e = t.scrollPosition.get(),
                                            u = r(),
                                            a = n();
                                        l(
                                            !u || !a || u <= a
                                                ? jn.WithoutScroll
                                                : e <= 10
                                                  ? jn.Start
                                                  : e >= u - a - 10
                                                    ? jn.End
                                                    : jn.Between,
                                        );
                                    }, [t.scrollPosition, r, n]);
                                return (
                                    (0, a.useEffect)(() => (o.on('change', c), () => o.off('change', c)), [o, c]),
                                    (0, a.useEffect)(() => ht(c), [c, ...u]),
                                    i
                                );
                            })(i, [E, n, s]),
                            _ = m !== jn.Start && m !== jn.WithoutScroll,
                            d = m !== jn.End && m !== jn.WithoutScroll;
                        return o().createElement(
                            'div',
                            { className: Pn },
                            o().createElement('div', { className: p()(Nn, In, _ && kn) }),
                            0 === E
                                ? o().createElement(nn, {
                                      isFilterApplied: c,
                                      className: Wn,
                                      onFilterReset: t.resetFilter,
                                  })
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(
                                          qr.Vertical.Area,
                                          { api: i },
                                          o().createElement(On, {
                                              className: Un,
                                              rewards: l,
                                              selectReward: t.selectVehicle,
                                          }),
                                      ),
                                      o().createElement(qr.Vertical.Bar, {
                                          api: i,
                                          classNames: { base: Gn, thumb: zn, rail: Vn },
                                      }),
                                  ),
                            o().createElement('div', { className: p()(Nn, Hn, d && kn) }),
                        );
                    }),
                    Yn = R.strings.seniority_awards,
                    $n = (0, K.Pi)(() => {
                        const e = ie(),
                            u = e.controls,
                            t = e.model,
                            r = t.root.get(),
                            n = r.isError,
                            s = r.availableToSelectCount,
                            l = r.finishSelectTimeStamp,
                            c = t.selectedVehicles,
                            E = c.length,
                            m =
                                s > 1
                                    ? Yn.vehicleSelector.selectScreen.subTitleMultiple()
                                    : Yn.vehicleSelector.selectScreen.subTitleSingle(),
                            _ = (0, a.useCallback)(() => {
                                u.confirm(c.join(':'));
                            }, [u, c]);
                        return (
                            (function ({
                                key: e = X.n.ESCAPE,
                                callback: u = () => i.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                q(e, u, t);
                            })({ callback: u.onClose }),
                            o().createElement(
                                'div',
                                { className: le },
                                o().createElement('div', { className: ce }),
                                o().createElement(
                                    'div',
                                    { className: Ee },
                                    o().createElement(j, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: u.onClose,
                                    }),
                                ),
                                n
                                    ? o().createElement(cu, { onClose: u.onClose })
                                    : o().createElement(
                                          'div',
                                          { className: me },
                                          o().createElement(rr, {
                                              title: Yn.vehicleSelector.selectScreen.title(),
                                              subTitle: m,
                                          }),
                                          o().createElement('div', { className: _e }, o().createElement(Xn, null)),
                                          o().createElement(Mu, {
                                              className: de,
                                              onClose: u.onClose,
                                              onConfirm: _,
                                              selectedRewardsCount: E,
                                              maxSelectCount: s,
                                              expirationTime: l,
                                              selectedVehicles: c.join(':'),
                                          }),
                                      ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(se, null, o().createElement(k, null, o().createElement($n, null))),
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
        (__webpack_require__.j = 353),
        (() => {
            var e = { 353: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [851], () => __webpack_require__(7130));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
