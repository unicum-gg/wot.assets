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
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => p,
                        remToPx: () => F,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => R,
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: F(u.x), y: F(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function p(e) {
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
                    R = Promise.all([
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const g = ['args'];
                function p(e, u, t, r, n, a, o) {
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
                                            p(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(a, r, n, o, s, 'throw', e);
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
                    f = () => B(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var v = t(7572);
                const h = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: _,
                        DateFormatType: E,
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
                                _ = s.height,
                                E = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(_),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(E),
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
            9881: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => ht,
                        Bar: () => ft,
                        DefaultScroll: () => vt,
                        Direction: () => mt,
                        defaultSettings: () => _t,
                        useHorizontalScrollApi: () => dt,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Tt, Bar: () => kt, Default: () => Nt, useVerticalScrollApi: () => bt }));
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
                const _ = i.O.client.getSize('rem'),
                    E = _.width,
                    d = _.height,
                    A = Object.assign({ width: E, height: d }, m(E, d, l)),
                    g = (0, a.createContext)(A),
                    p = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, p);
                        const r = (0, a.useContext)(g),
                            n = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            m = r.extraLargeWidth,
                            _ = r.largeWidth,
                            E = r.mediumWidth,
                            d = r.smallWidth,
                            A = r.extraSmallWidth,
                            F = r.extraLargeHeight,
                            D = r.largeHeight,
                            B = r.mediumHeight,
                            f = r.smallHeight,
                            C = r.extraSmallHeight,
                            v = { extraLarge: F, large: D, medium: B, small: f, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && m) return s(u, t, v);
                            if (t.largeWidth && _) return s(u, t, v);
                            if (t.mediumWidth && E) return s(u, t, v);
                            if (t.smallWidth && d) return s(u, t, v);
                            if (t.extraSmallWidth && A) return s(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && F) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && f) return u;
                                if (t.extraSmallHeight && C) return u;
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
                    const u = (0, a.useContext)(g),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        s = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, m(t, r, l)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(g.Provider, { value: c }, e);
                });
                var B = t(6483),
                    f = t.n(B),
                    C = t(926),
                    v = t.n(C);
                let h, b, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
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
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
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
                            o = ((e) => {
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
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
                const x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL_WIDTH,
                        [b.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [b.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [h.ExtraSmall]: '',
                        [h.Small]: v().SMALL,
                        [h.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [h.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [h.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
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
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', P({ className: f()(t, x[a], M[s], k[i]) }, r), u);
                    },
                    N = ['children'],
                    T = (e) => {
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
                        return o().createElement(D, null, o().createElement(L, t, u));
                    };
                var O = t(493),
                    I = t.n(O);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const U = {
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
                    W = {
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
                    G = [
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class V extends o().PureComponent {
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
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
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
                                })(e, G)),
                            E = f()(W.base, W[`base__${a}`], W[`base__${n}`], null == s ? void 0 : s.base),
                            d = f()(W.icon, W[`icon__${a}`], W[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = f()(W.glow, null == s ? void 0 : s.glow),
                            g = f()(W.caption, W[`caption__${a}`], null == s ? void 0 : s.caption),
                            p = f()(W.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            $(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== a && o().createElement('div', { className: W.shine }),
                            o().createElement('div', { className: d }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: g }, u),
                            r && o().createElement('div', { className: p }, r),
                        );
                    }
                }
                let j, z;
                ((V.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e.Main = 'main'), (e.Artefact = 'artefact'), (e.Rules = 'rules'), (e.Pickups = 'pickups'));
                    })(j || (j = {})),
                    (function (e) {
                        ((e[(e.Old = 1)] = 'Old'), (e[(e.New = 2)] = 'New'));
                    })(z || (z = {})));
                var X = t(5521),
                    Y = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = X.n.NONE, u = q, t = !1) {
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
                var Q = t(3282),
                    Z = t(5659);
                function J(e) {
                    return e;
                }
                function ee() {
                    return !1;
                }
                console.log;
                var ue = t(3915);
                function te(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e));
                function ne(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var ae = t(6517);
                const oe = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = re,
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
                                                                                    return te(e, u);
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
                                                                                          ? te(e, u)
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
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => {
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
                                                    t = (0, ae.computedFn)(() => ne(u.scoring.get(), J)),
                                                    r = (0, ae.computedFn)(() =>
                                                        ne(u.progression.get(), (e) =>
                                                            Object.assign({}, e, { bonuses: ne(e.bonuses, J) }),
                                                        ),
                                                    ),
                                                    n = (0, ae.computedFn)(() =>
                                                        ne(u.missions.get(), (e) => Object.assign({}, e)),
                                                    ),
                                                    a = (0, ae.computedFn)(() =>
                                                        ne(u.medals.get(), (e) => Object.assign({}, e)),
                                                    ),
                                                    o = (0, ae.computedFn)(() =>
                                                        ne(u.rovers.get(), (e) =>
                                                            Object.assign({}, e, {
                                                                parameters: ne(e.parameters, (e) =>
                                                                    Object.assign({}, e),
                                                                ),
                                                                abilities: ne(e.abilities, (e) => Object.assign({}, e)),
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
                                                            n = ue.observable.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, ue.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = ue.observable.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, ue.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = ue.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, ue.action)((e) => {
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
                                                                        (e[t] = ue.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, ue.action)((e) => {
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
                                            _ = { mode: e, model: m, externalModel: o, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && r ? r.controls(_) : u(_),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    E = _[0],
                                    d = _[1],
                                    A = (0, a.useState)(() => c(e, r, s)),
                                    g = A[0],
                                    p = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? p(c(E, r, s)) : (m.current = !0);
                                    }, [s, E, r]),
                                    (0, a.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    o().createElement(t.Provider, { value: g }, n)
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
                    se = oe[0],
                    ie = oe[1],
                    le = ['onClick', 'className', 'caption'];
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
                const me = (e) => {
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
                            })(e, le);
                        return o().createElement(
                            'div',
                            { className: f()('ExitMode_base_e4', t) },
                            o().createElement(
                                V,
                                ce(
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
                    _e = {
                        base: 'Navigation_base_32',
                        linksContainer: 'Navigation_linksContainer_49',
                        bgLeft: 'Navigation_bgLeft_ab',
                        bgRight: 'Navigation_bgRight_40',
                        link: 'Navigation_link_82',
                        link_light: 'Navigation_link_light_47',
                        link__active: 'Navigation_link__active_db',
                        borderImg: 'Navigation_borderImg_27',
                    },
                    Ee = o().memo(({ lobbyRoute: e, onLobbyRouteChange: u, classMix: t }) => {
                        const r = (0, a.useMemo)(
                                () => Object.values(j).filter((e) => e !== j.Main && e !== j.Artefact),
                                [],
                            ),
                            n = (0, a.useCallback)(
                                (t) => {
                                    e !== t && (u(t), H(R.sounds.ev_cosmic_lobby_tab_click()));
                                },
                                [e, u],
                            );
                        return o().createElement(
                            'div',
                            { className: f()(_e.base, t) },
                            o().createElement('div', { className: _e.bgLeft }),
                            o().createElement(
                                'div',
                                { className: _e.linksContainer },
                                r.map((u) =>
                                    o().createElement(
                                        'div',
                                        {
                                            key: u,
                                            onClick: () => n(u),
                                            onMouseEnter: () => H(R.sounds.ev_cosmic_lootbox_highlight()),
                                            className: f()(_e.link, e === u && _e.link__active),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: _e.link_text },
                                            R.strings.cosmicEvent.navigation[u](),
                                        ),
                                        o().createElement('div', { className: _e.link_light }),
                                        e === u && o().createElement('div', { className: _e.borderImg }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: _e.bgRight }),
                        );
                    }),
                    de = [
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
                function Ae(e) {
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
                const ge = (e, u, t = {}, r = 0) => {
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
                    pe = (e) => {
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
                            _ = void 0 !== m && m,
                            E = e.decoratorId,
                            d = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            p = e.targetId,
                            F = void 0 === p ? 0 : p,
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
                            })(e, de);
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
                                    (ge(t, d, { isMouseEvent: !0, on: !0, arguments: Ae(r) }, v),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, d, r, v, D]),
                            b = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        ge(t, d, { on: !1 }, v),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, d, v, B]),
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
                                !1 === g && b();
                            }, [g, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
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
                                                          ((C.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && b(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Fe = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Be = R.views.common.tooltip_window.simple_tooltip_content,
                    fe = (e) => {
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
                            })(e, Fe);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, i]);
                        return o().createElement(
                            pe,
                            De(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? Be.SimpleTooltipHtmlContent('resId') : Be.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    };
                var Ce = t(9887),
                    ve = t.n(Ce);
                const he = ['xl', 'lg', 'md', 'sm', 'xs'],
                    be = (e) => e.includes('_') && ((e) => he.includes(e))(e.split('_').at(-1)),
                    we = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    Re = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (be(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = we.indexOf(u),
                                    o = (-1 !== a ? he.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== s ? s : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => he.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Se = (e, u = Re) => {
                        const t = (
                            (e, u = Re) =>
                            (t) => {
                                const r = S().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => be(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    ye = {
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
                    Pe = [
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
                Object.keys(ve());
                const Me = {
                        XL: { mt: ye.mt__XL, mr: ye.mr__XL, mb: ye.mb__XL, ml: ye.ml__XL },
                        LG: { mt: ye.mt__LG, mr: ye.mr__LG, mb: ye.mb__LG, ml: ye.ml__LG },
                        MDp: { mt: ye.mt__MDp, mr: ye.mr__MDp, mb: ye.mb__MDp, ml: ye.ml__MDp },
                        MD: { mt: ye.mt__MD, mr: ye.mr__MD, mb: ye.mb__MD, ml: ye.ml__MD },
                        SMp: { mt: ye.mt__SMp, mr: ye.mr__SMp, mb: ye.mb__SMp, ml: ye.ml__SMp },
                        SM: { mt: ye.mt__SM, mr: ye.mr__SM, mb: ye.mb__SM, ml: ye.ml__SM },
                        XS: { mt: ye.mt__XS, mr: ye.mr__XS, mb: ye.mb__XS, ml: ye.ml__XS },
                    },
                    ke = (Object.keys(Me), ['mt', 'mr', 'mb', 'ml']),
                    Le = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Ne = Se((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            s = e.mt,
                            i = void 0 === s ? n : s,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            m = e.mb,
                            _ = void 0 === m ? n : m,
                            E = e.ml,
                            d = void 0 === E ? n : E,
                            A = e.column,
                            g = e.row,
                            p = e.flexDirection,
                            F = void 0 === p ? (A ? 'column' : g && 'row') || void 0 : p,
                            D = e.flexStart,
                            B = e.center,
                            C = e.flexEnd,
                            v = e.spaceBetween,
                            h = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (D ? 'flex-start' : B && 'center') ||
                                      (C && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (h && 'space-around') ||
                                      void 0
                                    : b,
                            R = e.alignItems,
                            S = void 0 === R ? (D ? 'flex-start' : B && 'center') || (C && 'flex-end') || void 0 : R,
                            y = e.alignSelf,
                            P = e.wrap,
                            x = e.flexWrap,
                            M = void 0 === x ? (P ? 'wrap' : void 0) : x,
                            k = e.grow,
                            L = e.shrink,
                            N = e.flex,
                            T = void 0 === N ? (k || L ? `${k ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : N,
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
                            })(e, Pe);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        ke.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Me[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ke.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[Le[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: T,
                                        alignSelf: y,
                                        display: F || S ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, _, d, O, T, y, F, M, w, S]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return o().createElement('div', xe({ className: f()(ye.base, ...G, u), style: W }, H), I);
                    });
                let Te;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Te || (Te = {}));
                const Oe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ie = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    He = (e, u, t = Te.left) => e.split(u).reduce(t === Te.left ? Oe : Ie, []),
                    Ue = (() => {
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
                    Ge = ({ binding: e, text: u = '', classMix: t, alignment: r = Te.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: f()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Te.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return We.includes(t)
                                                                ? Ue(e)
                                                                : ((e, u = Te.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          He(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(He(e, r, Te.left))),
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
                var $e = t(3532),
                    Ve = t.n($e);
                const je = {
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
                    ze = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                Object.keys(ve());
                const Ye = Object.keys(Ve()),
                    qe = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ke = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ze =
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
                            'heading-H56': qe,
                            'heading-H36': qe,
                            'heading-H28': Ke,
                            'heading-H24': Ke,
                            'heading-H24R': Ke,
                            'heading-H22': Ke,
                            'heading-H20R': Ke,
                            'heading-H18': Ke,
                            'heading-H15': Qe,
                            'heading-H14': Qe,
                            'paragraph-P24': Ke,
                            'paragraph-P18': Ke,
                            'paragraph-P16': Ke,
                            'paragraph-P14': Qe,
                            'paragraph-P12': Qe,
                            'paragraph-P10': Qe,
                        }),
                    Je =
                        (Object.keys(Ze),
                        (e) =>
                            e
                                ? ((e) => Ye.includes(e))(e)
                                    ? { colorClassName: je[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    eu = Se((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            m = void 0 === c ? s : c,
                            _ = e.mb,
                            E = void 0 === _ ? s : _,
                            d = e.ml,
                            A = void 0 === d ? s : d,
                            g = e.style,
                            p = e.format,
                            F = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ze);
                        const D = (0, a.useMemo)(() => {
                                const e = Je(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: u };
                            }, [g, n]),
                            B = D.computedStyle,
                            C = D.colorClassName;
                        return o().createElement(
                            Ne,
                            Xe(
                                {
                                    className: f()(je.base, t && je[t], C, r),
                                    style: B,
                                    mt: !0 === l ? Ze[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Ze[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === E ? Ze[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === A ? Ze[t || 'paragraph-P16'].ml : A,
                                },
                                F,
                            ),
                            void 0 !== p ? o().createElement(Ge, Xe({}, p, { text: u })) : u,
                        );
                    }),
                    uu = ({ icon: e, title: u, points: t, classMix: r }) =>
                        o().createElement(
                            'div',
                            { className: f()('ActionItem_base_86', r) },
                            o().createElement(
                                'div',
                                { className: 'ActionItem_icon_bg_90' },
                                o().createElement('img', { className: 'ActionItem_icon_e8', src: e }),
                            ),
                            o().createElement('div', { className: 'ActionItem_title_8b' }, u),
                            o().createElement(
                                fe,
                                {
                                    header: R.strings.cosmicEvent.tooltip.marsPoints.header(),
                                    body: R.strings.cosmicEvent.tooltip.marsPoints.description(),
                                    isEnabled: !0,
                                },
                                o().createElement(
                                    'div',
                                    { className: 'ActionItem_points_b7' },
                                    t,
                                    o().createElement('div', { className: 'ActionItem_points_bg_61' }),
                                ),
                            ),
                        ),
                    tu = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ru, nu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(ru || (ru = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(nu || (nu = {})));
                const au = ({ size: e = ru.Default, classMix: u }) =>
                        o().createElement('div', { className: f()(tu.background, tu[`background__${e}`], u) }),
                    ou = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    su = ({ size: e }) => {
                        const u = f()(ou.base, ou[`base__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    iu = {
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
                    lu = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const s = f()(
                                    iu.base,
                                    iu[`base__${e}`],
                                    t && iu.base__disabled,
                                    n && iu.base__finished,
                                    a && iu.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: u },
                                o().createElement('div', { className: iu.pattern }),
                                o().createElement('div', { className: iu.gradient }),
                                i && o().createElement(su, { size: e }),
                            );
                        },
                    ),
                    cu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            o().createElement(lu, { size: e, disabled: r, baseStyles: s, isComplete: i, lineRef: t })
                        );
                    },
                    mu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                let _u, Eu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(_u || (_u = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Eu || (Eu = {})));
                const du = (0, a.memo)(
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
                                m = (0, a.useState)(Eu.Idle),
                                _ = m[0],
                                E = m[1],
                                d = _ === Eu.In,
                                A = _ === Eu.End,
                                g = _ === Eu.Idle,
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (g && !t)
                                    return mu(() => {
                                        p(Eu.In);
                                    }, u);
                            }, [p, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (d)
                                        return mu(() => {
                                            (i && i(), p(Eu.End));
                                        }, e + u);
                                }, [p, d, i, u, e]));
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
                                          { style: g ? F : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          o().createElement(su, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Au = (0, a.memo)(
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
                                o().createElement(lu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: s,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    o().createElement(du, {
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
                    gu = (e) => (e ? { left: 0 } : { right: 0 }),
                    pu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Fu = (e) => ({ transitionDuration: `${e}ms` }),
                    Du = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = s < r,
                                _ = (0, a.useState)(_u.Idle),
                                E = _[0],
                                d = _[1],
                                A = E === _u.End,
                                g = E === _u.Idle,
                                p = E === _u.Grow,
                                F = E === _u.Shrink,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        mu(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(_u.Grow, u)
                                        : p
                                          ? B(_u.Shrink, e)
                                          : F
                                            ? B(_u.End, e)
                                            : void (A && i && i());
                            }, [B, t, A, p, g, F, i, u, e]);
                            const C = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Fu(e), gu(m)), [m, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Fu(e), gu(m)), [m, e]),
                                h = (0, a.useMemo)(() => Object.assign({ width: '0%' }, pu(m, r), Fu(e)), [r, m, e]),
                                b = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, pu(m, r), Fu(e)),
                                    [r, m, s, e],
                                );
                            if (A) return null;
                            const w = f()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return o().createElement(
                                'div',
                                { style: g ? h : b, className: w },
                                o().createElement(
                                    'div',
                                    { style: F ? v : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    o().createElement(su, { size: n }),
                                ),
                            );
                        },
                    ),
                    Bu = (0, a.memo)(
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
                                _ = (0, a.useState)(!1),
                                E = _[0],
                                d = _[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === _u.Shrink && d(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(lu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: s,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? p : g,
                                }),
                                t >= 0 &&
                                    o().createElement(Du, {
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
                    fu = ['onComplete', 'onEndAnimation'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const vu = (0, a.memo)((e) => {
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
                            })(e, fu);
                        const n = (0, a.useState)(!1),
                            s = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== s && i(e), e && u && u(), t && t());
                            }, [s, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case nu.Simple:
                                return o().createElement(Au, Cu({}, r, { onEndAnimation: l, isComplete: s }));
                            case nu.Growing:
                                return o().createElement(Bu, Cu({}, r, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    hu = ['onEndAnimation'];
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const wu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, hu);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        o().createElement(vu, bu({}, t, { onEndAnimation: n, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Su = (0, a.memo)(
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
                                return o().createElement(cu, {
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
                                ? o().createElement(wu, c)
                                : o().createElement(vu, Ru({ key: `${n}-${u}` }, c));
                        },
                    ),
                    yu = (e) => ({
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
                    Pu = {
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
                    xu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Mu = (e, u, t) => ('number' == typeof t ? (xu(0, u, t) / u) * 100 : e),
                    ku = {
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
                    Lu = {
                        freezed: !1,
                        withStack: !1,
                        type: nu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Nu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = ku,
                            size: t = ru.Default,
                            animationSettings: r = Lu,
                            disabled: n = !1,
                            withoutBackground: s = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: _,
                            onEndAnimation: E,
                            onComplete: d,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (xu(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Mu(r, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return o().createElement(
                                'div',
                                { className: f()(tu.base, tu[`base__${t}`]), style: yu(u) },
                                !s && o().createElement(au, { size: t, classMix: i }),
                                o().createElement(Su, {
                                    size: t,
                                    lineRef: m,
                                    disabled: n,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: E,
                                    onChangeAnimationState: _,
                                    onComplete: d,
                                }),
                            );
                        },
                    );
                let Tu, Ou, Iu, Hu, Uu, Wu, Gu;
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
                        (e.PortalEventDiscount25 = 'portalEventDiscountToken'),
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
                        (e.SACoin = 'sacoin'));
                })(Tu || (Tu = {})),
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
                    })(Ou || (Ou = {})),
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
                    })(Iu || (Iu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Hu || (Hu = {})),
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
                    })(Uu || (Uu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Wu || (Wu = {})),
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
                    })(Gu || (Gu = {})));
                const $u = ['children'];
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
                const ju = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, $u);
                    return o().createElement(
                        pe,
                        Vu(
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
                const Xu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = o().createElement('div', { className: t }, e);
                    if (u.header || u.body) return o().createElement(fe, u, r);
                    const n = u.contentId,
                        a = u.args,
                        s = null == a ? void 0 : a.contentId;
                    return n || s
                        ? o().createElement(pe, zu({}, u, { contentId: n || s }), r)
                        : o().createElement(ju, u, r);
                };
                class Yu extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? Y.B3.GOLD : Y.B3.INTEGRAL;
                        const u = Y.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Yu.defaultProps = { format: 'integral' };
                const qu = [
                        Tu.Items,
                        Tu.Equipment,
                        Tu.Xp,
                        Tu.XpFactor,
                        Tu.Blueprints,
                        Tu.BlueprintsAny,
                        Tu.Goodies,
                        Tu.Berths,
                        Tu.Slots,
                        Tu.Tokens,
                        Tu.CrewSkins,
                        Tu.CrewBooks,
                        Tu.Customizations,
                        Tu.CreditsFactor,
                        Tu.TankmenXp,
                        Tu.TankmenXpFactor,
                        Tu.FreeXpFactor,
                        Tu.BattleToken,
                        Tu.PremiumUniversal,
                        Tu.NaturalCover,
                        Tu.BpCoin,
                        Tu.BattlePassSelectToken,
                        Tu.BattlaPassFinalAchievement,
                        Tu.BattleBadge,
                        Tu.BonusX5,
                        Tu.CrewBonusX3,
                        Tu.NewYearFillers,
                        Tu.NewYearInvoice,
                        Tu.EpicSelectToken,
                        Tu.Comp7TokenWeeklyReward,
                        Tu.Comp7TokenCouponReward,
                        Tu.BattleBoosterGift,
                        Tu.CosmicLootboxCommon,
                        Tu.CosmicLootboxSilver,
                        Tu.SelectableBonus,
                        Tu.GoldenTicket,
                        Tu.PostStamp,
                        Tu.BlankPersonalMissions_1,
                        Tu.BlankPersonalMissions_2,
                        Tu.SACoin,
                    ],
                    Ku = [Tu.Gold, Tu.Credits, Tu.Crystal, Tu.FreeXp],
                    Qu = [Tu.BattlePassPoints],
                    Zu = [Tu.PremiumPlus, Tu.Premium],
                    Ju = ['engravings', 'backgrounds'],
                    et = ['engraving', 'background'],
                    ut = (e, u = Iu.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Iu.S600x450:
                                        return 'c_600x450';
                                    case Iu.S400x300:
                                        return 'c_400x300';
                                    case Iu.S296x222:
                                        return 'c_296x222';
                                    case Iu.S232x174:
                                        return 'c_232x174';
                                    case Iu.Big:
                                        return 'c_80x80';
                                    case Iu.Small:
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
                                        case Iu.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Iu.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = Ju[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(et[e])}`;
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
                                        case Iu.S600x450:
                                            return 'c_600x450';
                                        case Iu.S400x300:
                                            return 'c_400x300';
                                        case Iu.S296x222:
                                            return 'c_296x222';
                                        case Iu.S232x174:
                                            return 'c_232x174';
                                        case Iu.S180x135:
                                            return 'big';
                                        case Iu.Big:
                                        case Iu.S80x80:
                                            return 'c_80x80';
                                        case Iu.Small:
                                        case Iu.S48x48:
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
                            case 'portal':
                                return `R.images.gui.maps.icons.rewards.${u}.${o}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    tt = (e, u, t) => {
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
                    rt = {
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
                    nt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Iu.Big,
                        special: n,
                        value: a,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Uu.BATTLE_BOOSTER:
                                    case Uu.BATTLE_BOOSTER_REPLACE:
                                        return Wu.BATTLE_BOOSTER;
                                }
                            })(n),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Uu.BATTLE_BOOSTER:
                                        return Gu.BATTLE_BOOSTER;
                                    case Uu.BATTLE_BOOSTER_REPLACE:
                                        return Gu.BATTLE_BOOSTER_REPLACE;
                                    case Uu.BUILT_IN_EQUIPMENT:
                                        return Gu.BUILT_IN_EQUIPMENT;
                                    case Uu.EQUIPMENT_PLUS:
                                        return Gu.EQUIPMENT_PLUS;
                                    case Uu.EQUIPMENT_TROPHY_BASIC:
                                        return Gu.EQUIPMENT_TROPHY_BASIC;
                                    case Uu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Gu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Uu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Gu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Uu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Gu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Uu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Gu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Uu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Gu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Uu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Gu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Uu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Gu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Uu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Gu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Hu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Hu.CURRENCY:
                                    case Hu.NUMBER:
                                        return o().createElement(Yu, { format: 'integral', value: Number(e) });
                                    case Hu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return o().createElement(
                            'div',
                            { className: f()(rt.base, rt[`base__${r}`], l), style: i },
                            o().createElement(
                                Xu,
                                { tooltipArgs: m, className: rt.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: f()(rt.image, null == c ? void 0 : c.image) },
                                        E &&
                                            o().createElement('div', {
                                                className: f()(rt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            o().createElement('div', {
                                                className: f()(rt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            o().createElement('div', {
                                                className: f()(rt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    rt.info,
                                                    rt[`info__${e}`],
                                                    s === Hu.MULTI && rt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                o().createElement(
                                    Xu,
                                    { tooltipArgs: _ },
                                    o().createElement('div', {
                                        className: f()(rt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    at = (e) => {
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
                    ot = [];
                function st(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ot)
                    );
                }
                function it(e, u, t = []) {
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
                function lt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var ct = t(8552);
                let mt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(mt || (mt = {}));
                const _t = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Et = ({
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
                            return xu(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? _t : c,
                                _ = (0, a.useRef)(null),
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
                                                                    if ('string' == typeof e) return lt(e, u);
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
                                                                              ? lt(e, u)
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
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, ct.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                p = g[0],
                                F = g[1],
                                D = (0, a.useCallback)(
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
                                        const r = _.current;
                                        r &&
                                            F.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: s(r, p.scrollPosition.get()) },
                                            });
                                    },
                                    [F, m.animationConfig, p.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, m.step),
                                            a = D(u, e, r);
                                        B(a);
                                    },
                                    [B, D, m.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && f(r(e)),
                                            _.current && d.trigger('mouseWheel', e, p.scrollPosition, u(_.current)));
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
                                        at(() => {
                                            const e = _.current;
                                            e &&
                                                (B(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [B, p.scrollPosition.goal],
                                ),
                                h = st(() => {
                                    const e = _.current;
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
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: C,
                                    applyScroll: B,
                                    applyStepTo: f,
                                    contentRef: _,
                                    wrapperRef: E,
                                    scrollPosition: F,
                                    animationScroll: p,
                                    recalculateContent: h,
                                    handleIsThumbDragging: b,
                                    events: { on: d.on, off: d.off },
                                }),
                                [p.scrollPosition, B, f, b, d.off, d.on, h, C, F, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    dt = Et({
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
                        getDirection: (e) => (e.deltaY > 1 ? mt.Next : mt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    At = 'HorizontalBar_base__nonActive_82',
                    gt = 'disable',
                    pt = { pending: !1, offset: 0 },
                    Ft = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Dt = () => {},
                    Bt = (e, u) => Math.max(20, e.offsetWidth * u),
                    ft = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ft, onDrag: r = Dt }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(pt),
                            E = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
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
                                    o = Math.min(1, r / n),
                                    m = xu(0, 1, a / (n - r)),
                                    _ = (u.offsetWidth - Bt(u, o)) * m;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(gt),
                                                    void i.current.classList.remove(gt)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(gt),
                                                    void i.current.classList.add(gt)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(gt), i.current.classList.remove(gt));
                                        }
                                    })(_));
                            },
                            p = st(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${Bt(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(At) : n.current.classList.remove(At)));
                                })(),
                                    g());
                            });
                        ((0, a.useEffect)(() => at(p)),
                            (0, a.useEffect)(
                                () =>
                                    at(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Dt;
                                        const r = () => {
                                            (t(), (t = at(p)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            o = c.current;
                                        if (!n || !a || !o) return;
                                        const s = u.screenX - E.offset - a.getBoundingClientRect().x,
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
                                        (window.removeEventListener('mousemove', u), A(pt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, r, A]));
                        const F = it((u) => e.applyStepTo(u), m, [e]),
                            D = F[0],
                            B = F[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(gt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (H('play'), D(mt.Next));
                                },
                                onMouseUp: B,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? mt.Prev : mt.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: c, className: f()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: f()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (H('play'), D(mt.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ct = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    vt = ({
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
                        const m = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: f()(Ct.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: f()(Ct.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Ct.defaultScrollArea, n) },
                                o().createElement(ht, { className: i, api: _, classNames: s }, e),
                            ),
                            o().createElement(ft, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    ht = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => at(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Ct.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: f()(Ct.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: f()(Ct.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((ht.Bar = ft),
                    (ht.Default = vt),
                    (ht.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => at(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Ct.base, u) },
                            o().createElement(
                                'div',
                                { className: f()(Ct.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: f()(Ct.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const bt = Et({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? mt.Next : mt.Prev),
                    }),
                    wt = 'VerticalBar_base__nonActive_42',
                    Rt = 'disable',
                    St = () => {},
                    yt = { pending: !1, offset: 0 },
                    Pt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    xt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Mt = (e, u) => Math.max(20, e.offsetHeight * u),
                    kt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Pt, onDrag: r = St }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(yt),
                            E = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            g = st(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Mt(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(wt) : n.current.classList.remove(wt)),
                                    o
                                );
                            }),
                            p = st(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    m = xu(0, 1, a / (n - r)),
                                    _ = (u.offsetHeight - Mt(u, o)) * m;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Rt),
                                                    void i.current.classList.remove(Rt)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Rt),
                                                    void i.current.classList.add(Rt)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(Rt), i.current.classList.remove(Rt));
                                        }
                                    })(_));
                            }),
                            F = st(() => {
                                xt(e, () => {
                                    (g(), p());
                                });
                            });
                        ((0, a.useEffect)(() => at(F)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    xt(e, () => {
                                        p();
                                    });
                                };
                                let t = St;
                                const r = () => {
                                    (t(), (t = at(F)));
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
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        xt(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = u.screenY - E.offset - n.getBoundingClientRect().y,
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
                                            A(yt));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, r, A]));
                        const D = it((u) => e.applyStepTo(u), m, [e]),
                            B = D[0],
                            C = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Rt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rt) || 0 !== e.button || (H('play'), B(mt.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? mt.Prev : mt.Next),
                                                  c.current &&
                                                      xt(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: f()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rt) || 0 !== e.button || (H('play'), B(mt.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Lt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Nt = ({
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
                        const m = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: f()(Lt.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: f()(Lt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Lt.area, n) },
                                o().createElement(Tt, { className: s, classNames: i, api: _ }, e),
                            ),
                            o().createElement(kt, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    Tt = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => at(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Lt.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Lt.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Tt.Default = Nt;
                const Ot = { Vertical: n, Horizontal: r };
                let It;
                !(function (e) {
                    ((e.Hovered = 'Hovered'), (e.Active = 'Active'), (e.UnFocused = 'UnFocused'));
                })(It || (It = {}));
                const Ht = (e, u, t) => (u === t ? It.Active : e === t ? It.Hovered : It.UnFocused),
                    Ut = (e) =>
                        e.map((e) => {
                            return {
                                name: e.name,
                                image: ut(e, Iu.Big),
                                value: e.value,
                                valueType:
                                    ((u = e.name),
                                    qu.includes(u)
                                        ? Hu.MULTI
                                        : Ku.includes(u)
                                          ? Hu.CURRENCY
                                          : Qu.includes(u)
                                            ? Hu.NUMBER
                                            : Zu.includes(u)
                                              ? Hu.PREMIUM_PLUS
                                              : Hu.STRING),
                                tooltipArgs: tt({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                special: e.overlayType,
                            };
                            var u;
                        }),
                    Wt = 'ArtefactProgress_faded_8e',
                    Gt = 'ArtefactProgress_rewards_f7',
                    $t = 'ArtefactProgress_rewards_bottom_57',
                    Vt = 'ArtefactProgress_rewards_wrap_e7',
                    jt = 'ArtefactProgress_divider_45',
                    zt = 'ArtefactProgress_divider_end_77',
                    Xt = 'ArtefactProgress_pointsMark_b0',
                    Yt = 'ArtefactProgress_pointsMark_group_99';
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Kt = R.strings.cosmicEvent.tooltip.marsPoints,
                    Qt = (0, Q.observer)(({ className: e }) => {
                        var u;
                        const t = ie().model,
                            r = t.root.get(),
                            n = r.marsPoints,
                            s = t.computes.getProgression(),
                            i = (null == (u = s.at(-1)) ? void 0 : u.marsPoints) || 0,
                            l = 100 * Math.max(0, Math.min(n / (i || 1), 1)) + '%',
                            c = dt(),
                            m = c.applyScroll,
                            _ = S().mediaSize >= h.ExtraLarge ? 234 : 180,
                            E = (0, a.useCallback)(() => {
                                m(Math.max(0, r.currentProgressSectionIndex * _ - _ / 2), { immediate: !1, reset: !1 });
                            }, [_, r.currentProgressSectionIndex, m]);
                        (0, a.useEffect)(() => {
                            const e = setTimeout(() => E(), 300);
                            return (
                                engine.on('clientResized', E),
                                () => {
                                    (engine.off('clientResized', E), clearTimeout(e));
                                }
                            );
                        }, [r.currentProgressSectionIndex, E]);
                        const d = (e) => e === r.currentProgressSectionIndex,
                            A = (e) => {
                                if (e < r.currentProgressSectionIndex || n >= i) return Wt;
                            },
                            g = s.map(({ bonuses: e, marsPoints: u }) => ({ bonuses: Ut(e), marsPoints: u }));
                        return o().createElement(
                            'div',
                            {
                                className: f()('ArtefactProgress_base_3f', e),
                                style: {
                                    '--progress-percentage': l,
                                    '--sections-amount': s.length,
                                    '--rewards-wrap-width': _ + 'rem',
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
                                Ot.Horizontal.Area.Default,
                                {
                                    className: 'ArtefactProgress_scrollWrap_77',
                                    classNames: { wrapper: 'ArtefactProgress_overflow_2c' },
                                    api: c,
                                },
                                o().createElement(
                                    'div',
                                    { className: 'ArtefactProgress_wrapper_e4' },
                                    n < i &&
                                        o().createElement(
                                            fe,
                                            { header: Kt.header(), body: Kt.description(), isEnabled: !0 },
                                            o().createElement(
                                                'div',
                                                { className: 'ArtefactProgress_currentPoints_8a' },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    Y.Z5.getNumberFormat(r.marsPoints, Y.B3.GOLD),
                                                ),
                                                o().createElement('img', {
                                                    className: 'ArtefactProgress_currentPoints_icon_1f',
                                                    src: R.images.cosmic_event.gui.maps.icons.artefact.progress.marsPoints_icon(),
                                                }),
                                            ),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: f()('ArtefactProgress_flexContainer_2f') },
                                        o().createElement(
                                            'div',
                                            { className: Yt },
                                            o().createElement('div', { className: jt }),
                                            o().createElement('div', { className: f()(Xt, !d(0) && Wt) }, '0'),
                                        ),
                                        g.map(({ marsPoints: e }, u) =>
                                            o().createElement(
                                                'div',
                                                { className: f()(Vt, 'ArtefactProgress_rewards_top_fa'), key: u },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: f()(
                                                            Gt,
                                                            d(u) && 'ArtefactProgress_rewards_top__current_d4',
                                                            r.currentProgressSectionIndex > u &&
                                                                'ArtefactProgress_rewards_top__completed_89',
                                                        ),
                                                    },
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: f()(
                                                                'ArtefactProgress_level_e1',
                                                                d(u) && 'ArtefactProgress_level__current_f2',
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
                                                    { className: Yt },
                                                    o().createElement('div', { className: jt }),
                                                    o().createElement(eu, {
                                                        className: f()(
                                                            Xt,
                                                            (!(d(u) || r.currentProgressSectionIndex - 1 === u) ||
                                                                n >= i) &&
                                                                Wt,
                                                        ),
                                                        text: Y.Z5.getNumberFormat(e, Y.B3.GOLD),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    o().createElement(Nu, {
                                        size: ru.Default,
                                        value: r.marsPoints,
                                        maxValue: i,
                                        deltaFrom: r.artefactProgressDeltaFrom,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Vt },
                                        o().createElement(
                                            'div',
                                            { className: Yt },
                                            o().createElement('div', { className: zt }),
                                        ),
                                        g.map(({ bonuses: e }, u) =>
                                            o().createElement(
                                                'div',
                                                { className: f()(Vt, $t), key: u },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: f()(
                                                            Gt,
                                                            $t,
                                                            d(u) && 'ArtefactProgress_rewards_bottom__current_a2',
                                                            A(u),
                                                        ),
                                                    },
                                                    o().createElement('div', {
                                                        className: f()(
                                                            r.currentProgressSectionIndex > u &&
                                                                'ArtefactProgress_bottom_gradient_9f',
                                                        ),
                                                    }),
                                                    o().createElement(
                                                        'div',
                                                        { className: 'ArtefactProgress_rewards_group_46' },
                                                        e.map((e, u) =>
                                                            o().createElement(
                                                                nt,
                                                                qt(
                                                                    {
                                                                        size: Iu.Small,
                                                                        key: u,
                                                                        className: 'ArtefactProgress_reward_e2',
                                                                    },
                                                                    e,
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                                o().createElement('div', { className: zt }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Zt = {
                        base: 'CosmicLobbyViewApp_base_1b',
                        fadeIn: 'CosmicLobbyViewApp_fadeIn_c8',
                        base__fadeOut: 'CosmicLobbyViewApp_base__fadeOut_49',
                        fadeOut: 'CosmicLobbyViewApp_fadeOut_ab',
                        header: 'CosmicLobbyViewApp_header_3b',
                        fallback: 'CosmicLobbyViewApp_fallback_ed',
                        navigationWrapper: 'CosmicLobbyViewApp_navigationWrapper_64',
                        navBar: 'CosmicLobbyViewApp_navBar_35',
                        about: 'CosmicLobbyViewApp_about_6a',
                        close: 'CosmicLobbyViewApp_close_43',
                        routeWrapper: 'CosmicLobbyViewApp_routeWrapper_8a',
                        route__enterActive: 'CosmicLobbyViewApp_route__enterActive_72',
                        route: 'CosmicLobbyViewApp_route_7e',
                        background: 'CosmicLobbyViewApp_background_00',
                        background__main: 'CosmicLobbyViewApp_background__main_80',
                        background__artefact: 'CosmicLobbyViewApp_background__artefact_36',
                        background__pickups: 'CosmicLobbyViewApp_background__pickups_00',
                        background__rules: 'CosmicLobbyViewApp_background__rules_64',
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
                    };
                let Jt;
                var er;
                let ur;
                (((er = Jt || (Jt = {})).SHORT_DATE = 'short-date'),
                    (er.SHORT_TIME = 'short-time'),
                    (er.SHORT_DATE_TIME = 'short-date-time'),
                    (er.FULL_DATE = 'full-date'),
                    (er.FULL_DATE_TIME = 'full-date-time'),
                    (er.MONTH = 'month'),
                    (er.MONTH_DATE = 'month-date'),
                    (er.DATE_MONTH = 'date-month'),
                    (er.MONTH_YEAR = 'month-year'),
                    (er.WEEK_DAY = 'week-day'),
                    (er.WEEK_DAY_TIME = 'week-day-time'),
                    (er.YEAR = 'year'),
                    (er.DATE_YEAR = 'date-year'),
                    Date.now(),
                    Y.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(ur || (ur = {})),
                    Y.Sw.instance);
                const tr = (e) => {
                        const u = (0, a.useRef)();
                        return (
                            (0, a.useEffect)(() => {
                                u.current = e;
                            }, [e]),
                            u.current
                        );
                    },
                    rr = [
                        'src',
                        'className',
                        'autoplay',
                        'loop',
                        'directLoop',
                        'isPaused',
                        'onStarted',
                        'loopPartDuration',
                        'setPlayer',
                        'onClick',
                    ];
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                const ar = 16 / 9,
                    or = (e, u, t) => {
                        const r = viewEnv.pxToRem(e) * t,
                            n = viewEnv.pxToRem(u) * t,
                            a = r / ar,
                            o = n > a;
                        return { width: `${o ? n * ar : r}rem`, height: `${o ? n : a}rem` };
                    },
                    sr = o().memo(function (e) {
                        let u = e.src,
                            t = e.className,
                            r = e.autoplay,
                            n = void 0 !== r && r,
                            s = e.loop,
                            l = void 0 !== s && s,
                            c = e.directLoop,
                            m = void 0 !== c && c,
                            _ = e.isPaused,
                            E = void 0 !== _ && _,
                            d = e.onStarted,
                            A = e.loopPartDuration,
                            g = void 0 === A ? 0 : A,
                            p = e.setPlayer,
                            F = e.onClick,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, rr);
                        const B = (0, a.useRef)(null),
                            f = tr(E),
                            C = (0, a.useCallback)(() => {
                                d && !f && d();
                            }, [d, f]),
                            v = (0, a.useCallback)(() => {
                                const e = B.current;
                                e &&
                                    (l
                                        ? ((e.currentTime = e.duration - g), e.removeEventListener('play', C), e.play())
                                        : e.pause());
                            }, [C, l, g]);
                        (0, a.useEffect)(() => {
                            const e = B.current;
                            return (
                                e && (e.addEventListener('play', C), e.addEventListener('ended', v)),
                                () => {
                                    e && (e.removeEventListener('play', C), e.removeEventListener('ended', v));
                                }
                            );
                        }, [v, C]);
                        const h = (() => {
                                const e = (0, a.useState)(i.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(i.O.view.getScale());
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
                            b = (() => {
                                const e = i.O.view.getSize('rem'),
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
                            w = b.width,
                            R = b.height;
                        return (
                            (0, a.useEffect)(() => {
                                if (p && B.current) {
                                    const e = () => {
                                            let e = 0;
                                            const t = (function (t) {
                                                    let r = 0;
                                                    return [
                                                        function t() {
                                                            ((() => {
                                                                if (B.current) {
                                                                    const t = B.current,
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
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (e) => {
                                            B.current && (B.current.currentTime = xu(0, B.current.duration, e));
                                        },
                                        n = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.pause();
                                        },
                                        a = () => {
                                            (n(), r(0));
                                        },
                                        o = () => {
                                            ((u.changeTimeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop());
                                        };
                                    return (
                                        p({
                                            on: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = B.current) || t.addEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = B.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            off: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = B.current) || t.removeEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = B.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            play: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.play();
                                            },
                                            pause: n,
                                            stop: a,
                                            cleanup: o,
                                            getCurrentTime: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.currentTime;
                                            },
                                            getDuration: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.duration;
                                            },
                                            setCurrentTime: r,
                                            domRef: B.current,
                                            onChangeTime: t,
                                        }),
                                        () => {
                                            (o(), p(void 0));
                                        }
                                    );
                                }
                            }, [p]),
                            (0, a.useEffect)(() => {
                                B.current && n && B.current.play();
                            }, []),
                            o().createElement(
                                'video',
                                nr(
                                    {
                                        muted: !0,
                                        src: u,
                                        className: t,
                                        loop: m,
                                        ref: B,
                                        autoPlay: n,
                                        onClick: F,
                                        style: or(w, R, h),
                                    },
                                    D,
                                    { onError: D.onError },
                                ),
                            )
                        );
                    }),
                    ir = ({ mixClass: e }) => {
                        const u = ie().model.root.get().currentProgressSectionIndex,
                            t = R.videos.cosmic.progression.$dyn(`Loop_${u}`);
                        return o().createElement(sr, { className: e, src: t, autoplay: !0, directLoop: !0 });
                    },
                    lr = ({ imgSrc: e, isReceived: u, classMix: t, isMain: r, tooltipArgs: n, raysEnabled: a = !1 }) =>
                        o().createElement(
                            'div',
                            { className: f()('Medal_base_71', t, r && 'Medal_base__main_e2') },
                            a && o().createElement('div', { className: 'Medal_raysBg_35' }),
                            o().createElement('img', {
                                src: e,
                                className: f()('Medal_img_52', !u && 'Medal_grayscale_d2'),
                                alt: ' ',
                            }),
                            o().createElement(
                                Xu,
                                { tooltipArgs: n },
                                o().createElement('div', { className: 'Medal_tooltipArea_2f' }),
                            ),
                            !u && o().createElement('div', { className: 'Medal_lock_64' }),
                        ),
                    cr = {
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
                    },
                    mr = R.strings.cosmicEvent.artefact,
                    _r = (0, Q.observer)(({ className: e }) => {
                        const u = ie().model,
                            t = u.computes.getScoring(),
                            r = u.computes.getMedals();
                        return o().createElement(
                            'div',
                            { className: f()(cr.base, e) },
                            o().createElement(ir, { mixClass: cr.videoProgression }),
                            o().createElement(
                                'div',
                                { className: cr.titleWrapper },
                                o().createElement('div', { className: cr.titleDecoration }),
                                o().createElement(eu, { className: cr.title, text: mr.progressionTitle() }),
                                o().createElement('div', {
                                    className: f()(cr.titleDecoration, cr.titleDecoration__rotate),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: cr.middleBlock },
                                o().createElement(
                                    'div',
                                    { className: cr.actionsList },
                                    o().createElement(eu, { className: cr.actionsTitle, text: mr.actionsTitle() }),
                                    o().createElement(
                                        'div',
                                        { className: Zt.fromLeft_2 },
                                        o().createElement(
                                            'div',
                                            { className: cr.actions },
                                            t.map(({ type: e, marsPoints: u }) =>
                                                o().createElement(uu, {
                                                    key: e,
                                                    title: mr.actionList[e](),
                                                    icon: R.images.cosmic_event.gui.maps.icons.scoring.icons[e](),
                                                    points: u,
                                                    classMix: cr.actionItem,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: cr.medalsWrapper },
                                    o().createElement(eu, { className: cr.medalsTitle, text: mr.medalsTitle() }),
                                    o().createElement(
                                        'div',
                                        { className: cr.medalsList },
                                        r.map(({ name: e, isReceived: u, tooltipId: t }, r) => {
                                            const n = 0 === r;
                                            return o().createElement(lr, {
                                                tooltipArgs: { args: { tooltipId: t } },
                                                isMain: !n,
                                                imgSrc: R.images.gui.maps.icons.achievement.big.$dyn(e),
                                                isReceived: u,
                                                raysEnabled: !n,
                                                classMix: f()(n ? cr.firstMedal : cr.secondMedal),
                                                key: e,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                fe,
                                {
                                    header: R.strings.cosmicEvent.artefact.titleTooltip(),
                                    body: R.strings.cosmicEvent.artefact.descShort(),
                                },
                                o().createElement('div', { className: cr.artefactTooltip }),
                            ),
                            o().createElement(Qt, { className: f()(Zt.fromBelow, cr.progress) }),
                        );
                    }),
                    Er = ['children', 'className', 'isDone'];
                function dr() {
                    return (
                        (dr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        dr.apply(this, arguments)
                    );
                }
                const Ar = (e) => {
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
                            })(e, Er);
                        const s = (0, a.useState)(!1),
                            i = s[0],
                            l = s[1],
                            c = f()(
                                'Artefact_base_56',
                                i && 'Artefact_base__hovered_a6',
                                r && 'Artefact_base__completed_13',
                                t,
                            );
                        return o().createElement(
                            'div',
                            dr({ className: c }, n, {
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
                    gr = 'play',
                    pr = [
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
                function Fr() {
                    return (
                        (Fr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Fr.apply(this, arguments)
                    );
                }
                const Dr = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            n = e.frameCount,
                            s = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            _ = e.lastFrameIndex,
                            E = void 0 === _ ? n - 1 : _,
                            d = e.loop,
                            A = void 0 === d || d,
                            g = e.state,
                            p = void 0 === g ? gr : g,
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
                            })(e, pr);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = Cr(m, E, r),
                                                u = Br(m, E),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == s || s(r, a),
                                                          t(a),
                                                          r === E &&
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
                                            const n = () => t(fr(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, E, A, s, D, F, B, p]),
                            o().createElement('canvas', Fr({}, f, { width: u, height: t, ref: C }))
                        );
                    }),
                    Br = (e, u) => {
                        let t = e;
                        return () => {
                            const r = t;
                            return ((t += 1), t > u && (t = e), r);
                        };
                    },
                    fr = (e, u) => Object.assign({}, e, { img: u }),
                    Cr = (e, u, t) => {
                        const r = new Map(),
                            n = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = n[e.path];
                            if (u) r.set(a, fr(e, u));
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
                                    r.set(a, fr(e, u)));
                            }
                        }
                        return r;
                    };
                function vr() {
                    return (
                        (vr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        vr.apply(this, arguments)
                    );
                }
                const hr = ({ className: e }) => {
                        const u = ie().controls,
                            t = (function (e = {}, u = []) {
                                var t, r, n, o;
                                const s = (0, a.useState)(null != (t = e.state) ? t : gr),
                                    i = s[0],
                                    l = s[1],
                                    c = (0, a.useState)(null != (r = e.initialFrameIndex) ? r : 0),
                                    m = c[0],
                                    _ = c[1],
                                    E = (0, a.useState)(null != (n = e.frameTime) ? n : 33),
                                    d = E[0],
                                    A = E[1],
                                    g = (0, a.useState)(null == (o = e.loop) || o),
                                    p = g[0],
                                    F = g[1],
                                    D = (0, a.useRef)(m),
                                    B = (0, a.useCallback)((e) => {
                                        (_(e), l('play'));
                                    }, []),
                                    f = (0, a.useCallback)((e) => {
                                        (_(e), l('stop'));
                                    }, []),
                                    C = (0, a.useCallback)(() => {
                                        (_(0), l('stop'));
                                    }, []),
                                    v = (0, a.useCallback)(() => l('play'), []),
                                    h = (0, a.useCallback)(() => {
                                        (_(D.current + 1), l('stop'));
                                    }, []);
                                return {
                                    props: {
                                        state: i,
                                        initialFrameIndex: m,
                                        frameTime: d,
                                        loop: p,
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
                                    setInitialFrameIndex: _,
                                    setFrameTime: A,
                                    goAndPlay: B,
                                    goAndStop: f,
                                    stop: C,
                                    play: v,
                                    pause: h,
                                };
                            })(),
                            r = {
                                width: 256,
                                height: 256,
                                frameCount: 128,
                                chunk: { count: 1, rows: 16, columns: 8 },
                                getChunkPath: () => 'R.images.cosmic_event.gui.maps.icons.shop_entry_point.sequence',
                            },
                            n = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (r) => {
                                    const n = r % t,
                                        a = (n % u.columns) * e.width,
                                        o = Math.trunc(n / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(r / t)), x: a, y: o };
                                };
                            })(r);
                        return o().createElement(
                            pe,
                            { contentId: R.views.cosmic_event.lobby.tooltips.CosmicSimpleTooltip('resId') },
                            o().createElement(
                                'div',
                                {
                                    className: f()('ShopEntryPoint_base_88', e),
                                    onClick: () => {
                                        (U.playYes(), u.onShopClicked());
                                    },
                                    onMouseEnter: () => H(R.sounds.ev_cosmic_lobby_hover()),
                                },
                                o().createElement(
                                    Dr,
                                    vr({}, t.props, {
                                        width: r.width,
                                        height: r.height,
                                        frameCount: r.frameCount,
                                        getImageSource: n,
                                        frameTime: 70,
                                        loop: !0,
                                        className: 'ShopEntryPoint_particles_f6',
                                    }),
                                ),
                                o().createElement('div', { className: 'ShopEntryPoint_bg_c4' }),
                                o().createElement('div', { className: 'ShopEntryPoint_hover_f3' }),
                            ),
                        );
                    },
                    br = ({ className: e }) =>
                        o().createElement(
                            'div',
                            {
                                className: f()('RulesEntryPoint_base_3b', e),
                                onMouseEnter: () => H(R.sounds.ev_cosmic_lobby_hover()),
                            },
                            o().createElement('div', { className: 'RulesEntryPoint_background_52' }),
                            o().createElement('div', { className: 'RulesEntryPoint_hover_fd' }),
                        ),
                    wr = {
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
                    Rr = ({ className: e, description: u, currentProgress: t, totalProgress: r, icon: n }) => {
                        const a = t >= r,
                            s =
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.$dyn(n) ||
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.cosmic_mars_points();
                        return o().createElement(
                            'div',
                            {
                                className: f()(wr.base, e, a ? wr.base__done : wr.base__available),
                                onMouseEnter: () => U.playHighlight(),
                            },
                            o().createElement(
                                'div',
                                { className: wr.header, style: { backgroundImage: a ? '' : `url("${s}")` } },
                                a && o().createElement('div', { className: wr.doneBg }),
                            ),
                            o().createElement(
                                'div',
                                { className: wr.body },
                                o().createElement('div', { className: wr.title }, u),
                                o().createElement(
                                    'div',
                                    { className: wr.progression },
                                    o().createElement('span', { className: wr.progression_current }, t),
                                    ' / ',
                                    r,
                                ),
                                o().createElement(
                                    'div',
                                    { className: wr.progressBar },
                                    o().createElement(Nu, { size: ru.Small, value: t, maxValue: r, theme: Pu }),
                                ),
                            ),
                        );
                    },
                    Sr = {
                        rover: 'VehicleSelect_rover_6d',
                        roverBg: 'VehicleSelect_roverBg_35',
                        rover__old: 'VehicleSelect_rover__old_66',
                        rover__new: 'VehicleSelect_rover__new_1d',
                        roverActiveBg: 'VehicleSelect_roverActiveBg_2a',
                        rover__selected: 'VehicleSelect_rover__selected_21',
                        screenBorder: 'VehicleSelect_screenBorder_41',
                        roverIcon: 'VehicleSelect_roverIcon_6b',
                        roverLabel: 'VehicleSelect_roverLabel_d5',
                        darkBg: 'VehicleSelect_darkBg_16',
                        battleGlow: 'VehicleSelect_battleGlow_ea',
                        battleLabel: 'VehicleSelect_battleLabel_4d',
                    },
                    yr = R.strings.cosmicEvent,
                    Pr = ({
                        type: e,
                        isSelected: u,
                        inBattle: t,
                        handleRoverClick: r,
                        onMouseEnter: n,
                        className: a,
                    }) => {
                        const s = e === z.Old,
                            i = f()(
                                Sr.rover,
                                s ? Sr.rover__old : Sr.rover__new,
                                u && Sr.rover__selected,
                                t && Sr.rover__inBattle,
                                a,
                            );
                        return o().createElement(
                            pe,
                            {
                                contentId: R.views.cosmic_event.lobby.tooltips.VehicleSelectorTooltip('resId'),
                                key: e,
                                args: { vehicleId: e },
                            },
                            o().createElement(
                                'div',
                                { className: i, onClick: () => r(e), onMouseEnter: n },
                                o().createElement('div', { className: Sr.roverBg }),
                                o().createElement('div', { className: Sr.roverActiveBg }),
                                o().createElement('div', { className: Sr.roverIcon }),
                                o().createElement(eu, {
                                    text: yr.queue.vehicleName.$dyn(s ? 'old' : 'new'),
                                    className: Sr.roverLabel,
                                }),
                                t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Sr.darkBg }),
                                        o().createElement('div', { className: Sr.battleGlow }),
                                        o().createElement(eu, {
                                            text: yr.vehicle.inBattle(),
                                            className: Sr.battleLabel,
                                        }),
                                    ),
                                o().createElement('div', { className: Sr.screenBorder }),
                            ),
                        );
                    },
                    xr = ['title', 'imgUri', 'className'];
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const kr = (e) => {
                        let u = e.title,
                            t = e.imgUri,
                            r = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, xr);
                        return o().createElement(
                            'div',
                            Mr({ className: f()('AbilityBlock_base_51', r) }, n),
                            o().createElement('div', { className: 'AbilityBlock_bg_86' }),
                            o().createElement(
                                'div',
                                { className: 'AbilityBlock_imageContainer_ad' },
                                o().createElement('img', { className: 'AbilityBlock_img_c5', src: t, alt: '' }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'AbilityBlock_textContainer_bb' },
                                o().createElement(eu, { text: u, className: 'AbilityBlock_title_60' }),
                            ),
                        );
                    },
                    Lr = ['title', 'imgUri', 'value', 'className'];
                function Nr() {
                    return (
                        (Nr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Nr.apply(this, arguments)
                    );
                }
                const Tr = R.strings.cosmicEvent.specifications,
                    Or = (e) => {
                        let u = e.title,
                            t = e.imgUri,
                            r = e.value,
                            n = e.className,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Lr);
                        const i = (0, a.useState)(0),
                            l = i[0],
                            c = i[1];
                        (0, a.useEffect)(() => {
                            c(0);
                            const e = setTimeout(() => {
                                c(r > 30 ? 30 : r);
                            }, 100);
                            return () => clearTimeout(e);
                        }, [r]);
                        const m = Array.from({ length: 30 }, (e, u) => u < l);
                        return o().createElement(
                            pe,
                            {
                                contentId: R.views.cosmic_event.lobby.tooltips.SpecificationTooltip('resId'),
                                args: { parameterName: u },
                            },
                            o().createElement(
                                'div',
                                Nr({ className: f()('SpecificationBlock_base_61', n) }, s),
                                o().createElement('img', { className: 'SpecificationBlock_img_ce', src: t, alt: '' }),
                                o().createElement(
                                    'div',
                                    { className: 'SpecificationBlock_progressionContainer_13' },
                                    o().createElement(eu, {
                                        text: Tr.$dyn(u).$dyn('title'),
                                        className: 'SpecificationBlock_title_d9',
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: 'SpecificationBlock_progressionArea_1d' },
                                        m.map((e, u) =>
                                            o().createElement('div', {
                                                key: u,
                                                className: f()(
                                                    'SpecificationBlock_progressionDivision_61',
                                                    e && 'SpecificationBlock_progressionDivision_filled_d5',
                                                ),
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                let Ir;
                !(function (e) {
                    ((e.NONE = 'none'),
                        (e.SHELL = 'shell'),
                        (e.ACCELERATION = 'acceleration'),
                        (e.SHIELD = 'shield'),
                        (e.BLACK_HOLE = 'black_hole'),
                        (e.OVERCHARGE = 'overcharge'),
                        (e.RAPID_SHELLING = 'rapid_shelling'),
                        (e.POWER_SHOT = 'power_shot'),
                        (e.WAVE = 'wave'),
                        (e.STUN_SHOT = 'stun_shot'));
                })(Ir || (Ir = {}));
                const Hr = {
                    base: 'MainRoute_base_bb',
                    about: 'MainRoute_about_13',
                    rulesEntryPoint: 'MainRoute_rulesEntryPoint_27',
                    shopEntryContainer: 'MainRoute_shopEntryContainer_0f',
                    artefactWrapper: 'MainRoute_artefactWrapper_08',
                    artefact: 'MainRoute_artefact_88',
                    artefact_info: 'MainRoute_artefact_info_7b',
                    coubeIcon: 'MainRoute_coubeIcon_ad',
                    vehicleImageWrapper: 'MainRoute_vehicleImageWrapper_9a',
                    vehicleImageWrapper_old: 'MainRoute_vehicleImageWrapper_old_6e',
                    vehicleImageWrapper_new: 'MainRoute_vehicleImageWrapper_new_12',
                    vehicleName: 'MainRoute_vehicleName_3a',
                    logo: 'MainRoute_logo_45',
                    title: 'MainRoute_title_e6',
                    abilitiesTitleContainer: 'MainRoute_abilitiesTitleContainer_94',
                    specificationsTitleContainer: 'MainRoute_specificationsTitleContainer_72',
                    vehicleAbilitiesWrapper: 'MainRoute_vehicleAbilitiesWrapper_54',
                    specificationsWrapper: 'MainRoute_specificationsWrapper_d3',
                    specificationBlock: 'MainRoute_specificationBlock_01',
                    abilityBlock: 'MainRoute_abilityBlock_69',
                    scanningAnimation: 'MainRoute_scanningAnimation_6f',
                    roverLight: 'MainRoute_roverLight_32',
                    roverBlock: 'MainRoute_roverBlock_3a',
                    vehicleSelectWrapper: 'MainRoute_vehicleSelectWrapper_30',
                    missions: 'MainRoute_missions_e4',
                    mission: 'MainRoute_mission_54',
                    missionWrapper: 'MainRoute_missionWrapper_17',
                    missionSeparator: 'MainRoute_missionSeparator_dd',
                };
                function Ur() {
                    return (
                        (Ur =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ur.apply(this, arguments)
                    );
                }
                function Wr(e, u, t, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                function Gr(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (r, n) {
                            var a = e.apply(u, t);
                            function o(e) {
                                Wr(a, r, n, o, s, 'next', e);
                            }
                            function s(e) {
                                Wr(a, r, n, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const $r = () => H(R.sounds.ev_cosmic_lobby_hover()),
                    Vr = () => H(R.sounds.ev_cosmic_lootbox_highlight()),
                    jr = () => H(R.sounds.ev_cosmic_lootbox_icon()),
                    zr = () => H(R.sounds.ev_cosmic_lobby_character_hover()),
                    Xr = [Zt.fromLeft_3, Zt.fromLeft_4, Zt.fromLeft_5],
                    Yr = [Zt.fromLeft_2, Zt.fromLeft_3, Zt.fromLeft_4],
                    qr = R.strings.cosmicEvent,
                    Kr = R.images.cosmic_event.gui.maps.icons,
                    Qr = (0, Q.observer)(({ className: e }) => {
                        var u;
                        const t = ie(),
                            r = t.model,
                            n = t.controls,
                            s = r.computes.getMissions(),
                            i = r.computes.getRovers(),
                            l = r.root.get(),
                            c = (0, a.useState)(r.selectedVehicle.selectedVehicle.get()),
                            m = c[0],
                            _ = c[1],
                            E = m === z.Old,
                            d = l.isProgressionFinished,
                            A = (0, a.useCallback)(() => {
                                l.lobbyRoute !== j.Artefact &&
                                    (H(R.sounds.ev_cosmic_lobby_tab_click()), n.onLobbyRouteChange(j.Artefact));
                            }, [l, n]),
                            g = (0, a.useCallback)(() => {
                                (H(R.sounds.ev_cosmic_lobby_character_click()),
                                    l.lobbyRoute !== j.Rules && n.onLobbyRouteChange(j.Rules));
                            }, [l, n]),
                            p = (e) => {
                                (n.onVehicleChange(e), H(R.sounds.ev_cosmic_lootbox_play()), _(e));
                            },
                            F = (0, ct.useSpring)(() => {
                                return {
                                    from: { opacity: 0, bottom: '-200rem', transform: 'scale(1)' },
                                    to:
                                        ((e = Gr(function* (e) {
                                            const u = (function () {
                                                var t = Gr(function* () {
                                                    try {
                                                        (yield e({
                                                            opacity: 1,
                                                            bottom: '-50rem',
                                                            transform: 'scale(1.2)',
                                                        }),
                                                            yield e({
                                                                opacity: 0,
                                                                bottom: '100rem',
                                                                transform: 'scale(1)',
                                                            }),
                                                            yield e({
                                                                opacity: 1,
                                                                bottom: '-50rem',
                                                                transform: 'scale(1.2)',
                                                            }),
                                                            yield e({
                                                                opacity: 0,
                                                                bottom: '-200rem',
                                                                transform: 'scale(1)',
                                                            }),
                                                            yield new Promise((e) => setTimeout(e, 5e3)),
                                                            yield u());
                                                    } catch (e) {
                                                        B.stop();
                                                    }
                                                });
                                                return function () {
                                                    return t.apply(this, arguments);
                                                };
                                            })();
                                            yield u();
                                        })),
                                        function (u) {
                                            return e.apply(this, arguments);
                                        }),
                                    config: { duration: 1e3 },
                                };
                                var e;
                            }),
                            D = F[0],
                            B = F[1];
                        return o().createElement(
                            'div',
                            { className: f()(Hr.base, e) },
                            o().createElement(
                                'div',
                                { className: Hr.about },
                                o().createElement(
                                    pe,
                                    { contentId: R.views.cosmic_event.lobby.tooltips.RulesEntryPointTooltip('resId') },
                                    o().createElement(
                                        'div',
                                        { onClick: g, onMouseEnter: zr },
                                        o().createElement(br, { className: f()(Hr.rulesEntryPoint, Zt.fromLeft) }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Hr.missions },
                                s.map((e, u) =>
                                    o().createElement(
                                        pe,
                                        {
                                            key: u,
                                            contentId: R.views.cosmic_event.lobby.tooltips.DailyQuestsTooltip('resId'),
                                            args: { missionId: e.id },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Hr.missionWrapper },
                                            o().createElement(Rr, Ur({ key: u, className: f()(Hr.mission, Xr[u]) }, e)),
                                            o().createElement('div', { className: Hr.missionSeparator }),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Hr.vehicleAbilitiesWrapper },
                                o().createElement(
                                    'div',
                                    { className: Hr.abilitiesTitleContainer },
                                    o().createElement(eu, {
                                        text: qr.abilities.title(),
                                        className: f()(Zt.fromLeft, Hr.title),
                                    }),
                                ),
                                o().createElement(
                                    pe,
                                    { contentId: R.views.cosmic_event.lobby.tooltips.VehicleShellTooltip('resId') },
                                    o().createElement(
                                        'div',
                                        { className: f()(Hr.abilityBlock) },
                                        o().createElement(kr, {
                                            title:
                                                null == (u = R.strings.artefacts.$dyn(Ir.SHELL))
                                                    ? void 0
                                                    : u.$dyn('name'),
                                            imgUri: Kr.battle.ability_panel.size_48x48.$dyn(Ir.SHELL),
                                        }),
                                    ),
                                ),
                                i[m - 1].abilities.map(({ ability: e }, u) => {
                                    var t;
                                    return o().createElement(
                                        pe,
                                        {
                                            contentId:
                                                R.views.cosmic_event.lobby.tooltips.VehicleAbilityTooltip('resId'),
                                            args: { ability: e },
                                            key: e,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: f()(Hr.abilityBlock, Yr[u]) },
                                            o().createElement(kr, {
                                                title:
                                                    null == (t = R.strings.artefacts.$dyn(e)) ? void 0 : t.$dyn('name'),
                                                imgUri: Kr.battle.ability_panel.size_48x48.$dyn(e),
                                            }),
                                        ),
                                    );
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Hr.specificationsWrapper },
                                o().createElement(
                                    'div',
                                    { className: Hr.specificationsTitleContainer },
                                    o().createElement(eu, { text: qr.specifications.title(), className: Hr.title }),
                                ),
                                i[m - 1].parameters.map(({ parameterName: e, icon: u, value: t }, r) =>
                                    o().createElement(Or, {
                                        title: e,
                                        className: f()(Hr.specificationBlock, Zt.fadeAfterTransition),
                                        imgUri: u,
                                        value: t,
                                        key: r,
                                    }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                {
                                    className: f()(
                                        Hr.vehicleImageWrapper,
                                        E ? Hr.vehicleImageWrapper_old : Hr.vehicleImageWrapper_new,
                                    ),
                                },
                                o().createElement(ct.animated.div, { className: Hr.scanningAnimation, style: D }),
                                o().createElement(
                                    'div',
                                    { className: Hr.vehicleName },
                                    o().createElement('img', {
                                        src: Kr.vehicleSelect.$dyn(E ? 'one' : 'two'),
                                        className: Hr.logo,
                                        alt: '',
                                    }),
                                    o().createElement(eu, {
                                        text: qr.vehicle.title.$dyn(E ? 'old' : 'new'),
                                        className: Hr.title,
                                    }),
                                ),
                            ),
                            o().createElement('div', { className: Hr.roverLight }),
                            o().createElement(
                                'div',
                                { className: f()(Zt.fromBelow_2, Hr.vehicleSelectWrapper) },
                                i.map(({ vehicle: e, isVehicleInBattle: u }) =>
                                    o().createElement(
                                        pe,
                                        {
                                            contentId:
                                                R.views.cosmic_event.lobby.tooltips.VehicleSelectorTooltip('resId'),
                                            key: e,
                                            args: { vehicleId: e },
                                        },
                                        o().createElement(Pr, {
                                            type: e,
                                            inBattle: u,
                                            isSelected: m === e,
                                            handleRoverClick: p,
                                            onMouseEnter: Vr,
                                            className: Hr.roverBlock,
                                        }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                pe,
                                {
                                    contentId:
                                        R.views.cosmic_event.lobby.tooltips.ProgressionEntryPointTooltip('resId'),
                                    onClick: A,
                                    onMouseEnter: $r,
                                },
                                o().createElement(
                                    'div',
                                    { className: Hr.artefact },
                                    o().createElement(
                                        Ar,
                                        { isDone: d, className: Hr.artefactWrapper },
                                        !d &&
                                            o().createElement(
                                                'div',
                                                { className: Hr.artefact_info },
                                                l.currentProgressSectionIndex + 1,
                                            ),
                                        l.isSomethingHappeningWithArtefact &&
                                            o().createElement('img', {
                                                src: Kr.artefact.coube(),
                                                className: Hr.coubeIcon,
                                                alt: '',
                                            }),
                                    ),
                                ),
                            ),
                            o().createElement(hr, { className: Hr.shopEntryContainer, onClick: jr }),
                        );
                    }),
                    Zr = {
                        None: Ir.NONE,
                        Shell: Ir.SHELL,
                        Acceleration: Ir.ACCELERATION,
                        Shield: Ir.SHIELD,
                        BlackHole: Ir.BLACK_HOLE,
                        Overcharge: Ir.OVERCHARGE,
                        RapidShelling: Ir.RAPID_SHELLING,
                        PowerShot: Ir.POWER_SHOT,
                        StunShot: Ir.STUN_SHOT,
                    };
                let Jr;
                !(function (e) {
                    ((e[(e.First = 1)] = 'First'), (e[(e.Second = 2)] = 'Second'));
                })(Jr || (Jr = {}));
                const en = ['title', 'imgUri', 'imgGlowUri', 'state', 'ability', 'className'];
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const tn = {
                        [It.Hovered]: 'PickupBlock_base__hovered_bf',
                        [It.Active]: 'PickupBlock_base__active_9e',
                        [It.UnFocused]: 'PickupBlock_base__unFocused_ac',
                    },
                    rn = {
                        [Ir.OVERCHARGE]: 'PickupBlock_overcharge_67',
                        [Ir.RAPID_SHELLING]: 'PickupBlock_rapidshelling_c3',
                        [Ir.BLACK_HOLE]: 'PickupBlock_blackhole_88',
                        [Ir.POWER_SHOT]: 'PickupBlock_powershot_e4',
                    },
                    nn = (e) => {
                        let u = e.title,
                            t = e.imgUri,
                            r = e.imgGlowUri,
                            n = e.state,
                            a = e.ability,
                            s = e.className,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, en);
                        return o().createElement(
                            'div',
                            un({ className: f()('PickupBlock_base_62', tn[n], rn[a], s) }, i),
                            o().createElement(
                                'div',
                                { className: 'PickupBlock_content_5d' },
                                o().createElement('img', { className: 'PickupBlock_imgGlow_9b', src: r, alt: '' }),
                                o().createElement('img', { className: 'PickupBlock_pickupIcon_96', src: t, alt: '' }),
                                o().createElement('div', { className: 'PickupBlock_title_5e' }, u),
                            ),
                        );
                    },
                    an = {
                        base: 'PickupsRoute_base_27',
                        pickupWrapper: 'PickupsRoute_pickupWrapper_dd',
                        pickupsWrapper: 'PickupsRoute_pickupsWrapper_9a',
                        sideBarWrapper: 'PickupsRoute_sideBarWrapper_34',
                        stage: 'PickupsRoute_stage_a6',
                        videoWrapper: 'PickupsRoute_videoWrapper_44',
                        videoBorder: 'PickupsRoute_videoBorder_a3',
                        video: 'PickupsRoute_video_ae',
                        description: 'PickupsRoute_description_2e',
                    },
                    on = R.strings.cosmicEvent.pickups,
                    sn = R.sounds,
                    ln = R.images.cosmic_event.gui.maps.icons.pickups.icons,
                    cn = {
                        [Ir.OVERCHARGE]: on.overcharge.description(),
                        [Ir.BLACK_HOLE]: on.black_hole.description(),
                        [Ir.RAPID_SHELLING]: on.rapid_shelling.description(),
                        [Ir.POWER_SHOT]: on.power_shot.description(),
                    },
                    mn = {
                        [Ir.OVERCHARGE]: sn.ev_cosmic_forcefield_click(),
                        [Ir.BLACK_HOLE]: sn.ev_cosmic_supernova_click(),
                        [Ir.RAPID_SHELLING]: sn.ev_cosmic_snipershot_click(),
                        [Ir.POWER_SHOT]: sn.ev_cosmic_supershot_click(),
                    },
                    _n = (e, u) => (e >= h.Medium ? ln[u]() : ln[`${u}_small`]()),
                    En = ['title', 'description', 'imgUri', 'className', 'isSelected'];
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
                const An = (e) => {
                        let u = e.title,
                            t = e.description,
                            r = e.imgUri,
                            n = e.className,
                            a = e.isSelected,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, En);
                        const i = f()('InfoBlock_base_0f', n, a && 'InfoBlock_base__selected_89');
                        return o().createElement(
                            'div',
                            dn({ className: i }, s),
                            o().createElement('div', {
                                className: f()('InfoBlock_border_f8', a && 'InfoBlock_border__active_2f'),
                            }),
                            o().createElement('div', { className: 'InfoBlock_title_6a' }, u),
                            o().createElement(
                                'div',
                                { className: 'InfoBlock_normalFlex_7c' },
                                o().createElement('img', { className: 'InfoBlock_img_3a', src: r, alt: '' }),
                                o().createElement(eu, { text: t, className: 'InfoBlock_description_dc' }),
                            ),
                        );
                    },
                    gn = {
                        base: 'RulesRoute_base_23',
                        defaultBg: 'RulesRoute_defaultBg_f3',
                        mapBackground: 'RulesRoute_mapBackground_9d',
                        mapBackground__animated: 'RulesRoute_mapBackground__animated_b3',
                        scaleAnimation: 'RulesRoute_scaleAnimation_28',
                        mapBackground__artefact: 'RulesRoute_mapBackground__artefact_f6',
                        mapBackground__jampers: 'RulesRoute_mapBackground__jampers_51',
                        mapBackground__geysers: 'RulesRoute_mapBackground__geysers_02',
                        mapBackground__powerups: 'RulesRoute_mapBackground__powerups_78',
                        rulesBlock: 'RulesRoute_rulesBlock_40',
                        rulesBlock__1: 'RulesRoute_rulesBlock__1_ed',
                        rulesBlock__2: 'RulesRoute_rulesBlock__2_1b',
                        rulesBlock__3: 'RulesRoute_rulesBlock__3_13',
                        rulesBlock__4: 'RulesRoute_rulesBlock__4_ef',
                        transitionWithOpacity: 'RulesRoute_transitionWithOpacity_2b',
                    };
                let pn;
                !(function (e) {
                    ((e.Artefact = 'artefact'),
                        (e.Jampers = 'jampers'),
                        (e.Geysers = 'geysers'),
                        (e.Powerups = 'powerups'));
                })(pn || (pn = {}));
                const Fn = [{ name: pn.Powerups }, { name: pn.Artefact }, { name: pn.Jampers }, { name: pn.Geysers }],
                    Dn = R.strings.cosmicEvent.rules,
                    Bn = (0, Q.observer)(({ className: e }) => {
                        const u = (0, a.useState)(pn.Powerups),
                            t = u[0],
                            r = u[1],
                            n = (0, a.useState)(!1),
                            s = n[0],
                            i = n[1],
                            l = f()(gn.mapBackground, gn[`mapBackground__${t}`], s && gn.mapBackground__animated),
                            c = (0, a.useCallback)((e) => {
                                (r(e),
                                    i(!0),
                                    H(R.sounds.ev_cosmic_lobby_tab_click()),
                                    setTimeout(() => {
                                        i(!1);
                                    }, 500));
                            }, []);
                        return o().createElement(
                            'div',
                            { className: f()(gn.base, e) },
                            o().createElement('div', { className: gn.defaultBg }),
                            o().createElement('div', { className: l }),
                            Fn.map(({ name: e }, u) => {
                                const r = f()(gn[`${e}InfoBlock`]);
                                return o().createElement(
                                    'div',
                                    { className: f()(gn.rulesBlock, gn[`rulesBlock__${u + 1}`]), key: e },
                                    o().createElement(An, {
                                        title: Dn[e].title(),
                                        description: Dn[e].description(),
                                        imgUri: R.images.cosmic_event.gui.maps.icons.rules.assets[e](),
                                        className: r,
                                        onClick: () => c(e),
                                        onMouseEnter: () => H(R.sounds.ev_cosmic_lootbox_highlight()),
                                        isSelected: e === t,
                                    }),
                                );
                            }),
                        );
                    }),
                    fn = {
                        [j.Main]: Qr,
                        [j.Artefact]: _r,
                        [j.Pickups]: ({ className: e }) => {
                            const u = (0, a.useState)(null),
                                t = u[0],
                                r = u[1],
                                n = (0, a.useState)(Zr.Overcharge),
                                s = n[0],
                                i = n[1],
                                l = (0, a.useState)(Ir.OVERCHARGE),
                                c = l[0],
                                m = l[1],
                                _ = (0, a.useState)(cn[Zr.Overcharge]),
                                E = _[0],
                                d = _[1],
                                A = (() => {
                                    const e = (0, a.useRef)(),
                                        u = (0, a.useCallback)((u) => (e.current = u), []);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                var u;
                                                null == (u = e.current) || u.cleanup();
                                            },
                                            [],
                                        ),
                                        [e, u]
                                    );
                                })(),
                                g = A[0],
                                p = A[1],
                                F = S().mediaSize;
                            (0, a.useEffect)(() => {
                                const e = setTimeout(() => {
                                    const e = g.current;
                                    e && e.play();
                                }, 500);
                                return () => {
                                    clearTimeout(e);
                                };
                            }, [g]);
                            const D = (0, a.useCallback)(() => {
                                    r(null);
                                }, []),
                                B = (0, a.useCallback)((e) => {
                                    (r(e), H(R.sounds.ev_cosmic_lobby_hover()));
                                }, []),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = g.current;
                                        (i(e),
                                            m(e),
                                            d(cn[e]),
                                            H(mn[e]),
                                            setTimeout(() => {
                                                u && u.play();
                                            }, 500));
                                    },
                                    [g],
                                );
                            return o().createElement(
                                'div',
                                { className: f()(an.base, e) },
                                o().createElement(
                                    'div',
                                    { className: an.sideBarWrapper },
                                    o().createElement(
                                        'div',
                                        { className: Zt.fromLeft_2 },
                                        o().createElement(nn, {
                                            onMouseEnter: () => B(Zr.Overcharge),
                                            onClick: () => C(Zr.Overcharge),
                                            onMouseLeave: D,
                                            state: Ht(t, s, Zr.Overcharge),
                                            ability: Ir.OVERCHARGE,
                                            title: on.overcharge.title(),
                                            imgUri: _n(F, Zr.Overcharge),
                                            imgGlowUri: _n(F, 'overcharge_glow'),
                                            className: an.abilityOvercharge,
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Zt.fromLeft_3 },
                                        o().createElement(nn, {
                                            onMouseEnter: () => B(Zr.BlackHole),
                                            onClick: () => C(Zr.BlackHole),
                                            onMouseLeave: D,
                                            state: Ht(t, s, Zr.BlackHole),
                                            ability: Ir.BLACK_HOLE,
                                            title: on.black_hole.title(),
                                            imgUri: _n(F, Zr.BlackHole),
                                            imgGlowUri: _n(F, 'black_hole_glow'),
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Zt.fromLeft_4 },
                                        o().createElement(nn, {
                                            onMouseEnter: () => B(Zr.RapidShelling),
                                            onClick: () => C(Zr.RapidShelling),
                                            onMouseLeave: D,
                                            state: Ht(t, s, Zr.RapidShelling),
                                            ability: Ir.RAPID_SHELLING,
                                            title: on.rapid_shelling.title(),
                                            imgUri: _n(F, Zr.RapidShelling),
                                            imgGlowUri: _n(F, 'rapid_shelling_glow'),
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Zt.fromLeft_5 },
                                        o().createElement(nn, {
                                            onMouseEnter: () => B(Zr.PowerShot),
                                            onClick: () => C(Zr.PowerShot),
                                            onMouseLeave: D,
                                            state: Ht(t, s, Zr.PowerShot),
                                            ability: Ir.POWER_SHOT,
                                            title: on.power_shot.title(),
                                            imgUri: _n(F, Zr.PowerShot),
                                            imgGlowUri: _n(F, 'power_shot_glow'),
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: f()(an.stage, Zt.stage) },
                                    o().createElement(
                                        'div',
                                        { className: an.videoWrapper },
                                        o().createElement(
                                            'div',
                                            { className: an.videoBorder },
                                            o().createElement(sr, {
                                                key: c,
                                                className: an.video,
                                                src: R.videos.cosmic.abilities.$dyn(c),
                                                autoplay: !0,
                                                loop: !0,
                                                setPlayer: p,
                                            }),
                                        ),
                                        o().createElement(eu, { className: an.description, text: E }),
                                    ),
                                ),
                            );
                        },
                        [j.Rules]: Bn,
                    },
                    Cn = { [j.Main]: Hr.route, [j.Artefact]: cr.route, [j.Pickups]: an.route, [j.Rules]: gn.route },
                    vn = {
                        [j.Main]: Zt.background__main,
                        [j.Artefact]: Zt.background__artefact,
                        [j.Pickups]: Zt.background__pickups,
                        [j.Rules]: Zt.background__rules,
                    },
                    hn = () => U.playHighlight(),
                    bn = (0, Q.observer)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            n = u.lobbyRoute.lobbyRoute.get() || j.Main,
                            s = fn[n];
                        var i;
                        ((i = () => {
                            n === j.Main ? t.onClose() : t.onLobbyRouteChange(j.Main);
                        }),
                            K(X.n.ESCAPE, i));
                        const l = {
                                [j.Main]: (0, a.useRef)(null),
                                [j.Artefact]: (0, a.useRef)(null),
                                [j.Pickups]: (0, a.useRef)(null),
                                [j.Rules]: (0, a.useRef)(null),
                            }[n],
                            c = o().createElement('div', { className: f()(Zt.background, vn[n]) }),
                            m = (0, a.useMemo)(
                                () => ({
                                    [j.Main]: {
                                        navigationVisible: !1,
                                        aboutVisible: !0,
                                        closeVisible: !0,
                                        exitModeProps: { onClick: t.onClose },
                                    },
                                    [j.Artefact]: {
                                        navigationVisible: !1,
                                        aboutVisible: !1,
                                        closeVisible: !0,
                                        exitModeProps: {
                                            onClick: () => t.onLobbyRouteChange(j.Main),
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        },
                                    },
                                    [j.Pickups]: {
                                        navigationVisible: !0,
                                        aboutVisible: !1,
                                        closeVisible: !0,
                                        exitModeProps: {
                                            onClick: () => t.onLobbyRouteChange(j.Main),
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        },
                                    },
                                    [j.Rules]: {
                                        navigationVisible: !0,
                                        aboutVisible: !1,
                                        closeVisible: !0,
                                        exitModeProps: {
                                            onClick: () => t.onLobbyRouteChange(j.Main),
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        },
                                    },
                                }),
                                [t],
                            )[n];
                        return o().createElement(
                            'div',
                            { className: f()(Zt.base, Cn[n], r.fadeOut && Zt.base__fadeOut) },
                            o().createElement(
                                Z.TL,
                                { mode: 'in-out' },
                                o().createElement(
                                    Z.Kv,
                                    {
                                        key: n,
                                        classNames: {
                                            appear: Zt.route__enter,
                                            appearActive: Zt.route__enterActive,
                                            appearDone: Zt.route__enterDone,
                                            enter: Zt.route__enter,
                                            enterActive: Zt.route__enterActive,
                                            enterDone: Zt.route__enterDone,
                                            exit: Zt.route__exit,
                                            exitActive: Zt.route__exitActive,
                                            exitDone: Zt.route__exitDone,
                                        },
                                        timeout: { appear: 20, enter: 20, exit: 150 },
                                    },
                                    o().createElement(
                                        'div',
                                        { ref: l, className: Zt.routeWrapper },
                                        o().createElement(
                                            'div',
                                            { className: Zt.routeBackground },
                                            c,
                                            o().createElement('div', { className: Zt.glow }),
                                        ),
                                        o().createElement(s, { className: Zt.route }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Zt.header },
                                m.aboutVisible
                                    ? o().createElement(
                                          'div',
                                          { className: Zt.about },
                                          o().createElement(V, {
                                              caption: R.strings.cosmicEvent.aboutEvent(),
                                              onMouseEnter: hn,
                                              type: 'info',
                                              onClick: t.onAboutEvent,
                                          }),
                                      )
                                    : o().createElement('div', { className: Zt.fallback }),
                                m.navigationVisible &&
                                    o().createElement(
                                        'div',
                                        { className: Zt.navigationWrapper },
                                        o().createElement(Ee, {
                                            lobbyRoute: n,
                                            onLobbyRouteChange: t.onLobbyRouteChange,
                                            classMix: Zt.navBar,
                                        }),
                                    ),
                                m.closeVisible &&
                                    o().createElement(
                                        'div',
                                        { className: f()(Zt.close), onMouseEnter: hn },
                                        o().createElement(me, m.exitModeProps),
                                    ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        o().createElement(se, null, o().createElement(T, null, o().createElement(bn, null))),
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9881));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
