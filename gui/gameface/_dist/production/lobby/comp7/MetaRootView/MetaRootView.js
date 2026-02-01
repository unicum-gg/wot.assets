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
            527: (e, t, a) => {
                'use strict';
                (a.r(t), a.d(t, { mouse: () => o, onResize: () => u }));
                var r = a(2472),
                    n = a(1176);
                const u = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const u = `mouse${t}`,
                                        o = s[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, i),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(u, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
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
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => u,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var r = a(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            2472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => n });
                var r = a(5959);
                const n = { view: a(7641), client: r };
            },
            3722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var r = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => B,
                        events: () => u.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => F,
                        isFocused: () => h,
                        pxToRem: () => b,
                        remToPx: () => A,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    }));
                var r = a(3722),
                    n = a(6112),
                    u = a(6538),
                    s = a(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    u = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, r);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = u),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? n : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let r, n;
                (a.d(t, { n: () => r }),
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
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                var r = a(3138);
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
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = r.O.view.addModelObserver(e, a, n);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(u) : (this._views[a] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const u = n;
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => u.Z,
                    kH: () => d,
                    B3: () => l,
                    Z5: () => s,
                    lf: () => m,
                    cy: () => o,
                    B0: () => i,
                    c9: () => h,
                    ry: () => A,
                    Eu: () => f,
                });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                var u = a(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    E = a(3138);
                const g = ['args'];
                function p(e, t, a, r, n, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(r, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        a = arguments;
                                    return new Promise(function (r, n) {
                                        var u = e.apply(t, a);
                                        function s(e) {
                                            p(u, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(u, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, u, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    v = () => h(i.CLOSE),
                    F = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = a(7572);
                const D = n.instance,
                    B = {
                        DataTracker: u.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), u) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                d = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(d),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: b(_),
                                on: !0,
                                args: u,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, v);
                        },
                        handleViewEvent: h,
                        onBindingsReady: A,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < n.length; t++) a[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = B;
            },
            9502: (e, t, a) => {
                'use strict';
                var r = {};
                (a.r(r), a.d(r, { Area: () => ra, Bar: () => ea, Default: () => aa, useVerticalScrollApi: () => Pt }));
                var n = {};
                (a.r(n),
                    a.d(n, {
                        Area: () => Mu,
                        Bar: () => Nu,
                        DefaultScroll: () => Iu,
                        Direction: () => yt,
                        defaultSettings: () => xt,
                        useHorizontalScrollApi: () => vu,
                    }));
                var u = a(6179),
                    s = a.n(u);
                const o = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var i = a(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e, t, a) {
                    const r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, a),
                        n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, a),
                        u = Math.min(r, n);
                    return {
                        extraLarge: u === a.extraLarge.weight,
                        large: u === a.large.weight,
                        medium: u === a.medium.weight,
                        small: u === a.small.weight,
                        extraSmall: u === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
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
                const d = i.O.client.getSize('rem'),
                    _ = d.width,
                    E = d.height,
                    g = Object.assign({ width: _, height: E }, m(_, E, l)),
                    p = (0, u.createContext)(g),
                    b = ['children'];
                const A = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                u = Object.keys(e);
                            for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, b);
                    const r = (0, u.useContext)(p),
                        n = r.extraLarge,
                        s = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        m = r.extraLargeWidth,
                        d = r.largeWidth,
                        _ = r.mediumWidth,
                        E = r.smallWidth,
                        g = r.extraSmallWidth,
                        A = r.extraLargeHeight,
                        f = r.largeHeight,
                        h = r.mediumHeight,
                        v = r.smallHeight,
                        F = r.extraSmallHeight,
                        C = { extraLarge: A, large: f, medium: h, small: v, extraSmall: F };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && n) return t;
                        if (a.large && s) return t;
                        if (a.medium && i) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && m) return o(t, a, C);
                        if (a.largeWidth && d) return o(t, a, C);
                        if (a.mediumWidth && _) return o(t, a, C);
                        if (a.smallWidth && E) return o(t, a, C);
                        if (a.extraSmallWidth && g) return o(t, a, C);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && A) return t;
                            if (a.largeHeight && f) return t;
                            if (a.mediumHeight && h) return t;
                            if (a.smallHeight && v) return t;
                            if (a.extraSmallHeight && F) return t;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, u.memo)(A);
                const f = (e) => {
                        const t = (0, u.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    h = (0, u.memo)(({ children: e }) => {
                        const t = (0, u.useContext)(p),
                            a = (0, u.useState)(t),
                            r = a[0],
                            n = a[1],
                            o = (0, u.useCallback)((e, t) => {
                                const a = i.O.view.pxToRem(e),
                                    r = i.O.view.pxToRem(t);
                                n(Object.assign({ width: a, height: r }, m(a, r, l)));
                            }, []);
                        (f(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, u.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const c = (0, u.useMemo)(() => Object.assign({}, r), [r]);
                        return s().createElement(p.Provider, { value: c }, e);
                    });
                var v = a(6483),
                    F = a.n(v),
                    C = a(926),
                    D = a.n(C);
                let B, w, k;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
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
                    })(k || (k = {})));
                const S = () => {
                        const e = (0, u.useContext)(p),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return k.ExtraLarge;
                                    case e.largeHeight:
                                        return k.Large;
                                    case e.mediumHeight:
                                        return k.Medium;
                                    case e.smallHeight:
                                        return k.Small;
                                    case e.extraSmallHeight:
                                        return k.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), k.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: t, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_WIDTH,
                        [w.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [w.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [k.ExtraSmall]: '',
                        [k.Small]: D().SMALL_HEIGHT,
                        [k.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [k.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [k.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL,
                        [B.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [B.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [B.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, y);
                        const n = S(),
                            u = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', x({ className: F()(a, T[u], P[o], N[i]) }, r), t);
                    },
                    I = ['children'];
                const M = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                u = Object.keys(e);
                            for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, I);
                    return s().createElement(h, null, s().createElement(L, a, t));
                };
                var O = a(493),
                    H = a.n(O);
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
                    $ = {
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class j extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            r = e.goto,
                            n = e.side,
                            u = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(e, z)),
                            _ = F()($.base, $[`base__${u}`], $[`base__${n}`], null == o ? void 0 : o.base),
                            E = F()($.icon, $[`icon__${u}`], $[`icon__${n}`], null == o ? void 0 : o.icon),
                            g = F()($.glow, null == o ? void 0 : o.glow),
                            p = F()($.caption, $[`caption__${u}`], null == o ? void 0 : o.caption),
                            b = F()($.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            G(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                d,
                            ),
                            'info' !== u && s().createElement('div', { className: $.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: p }, t),
                            r && s().createElement('div', { className: b }, r),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = a(3403),
                    V = a(5521),
                    X = a(4179);
                const Q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = V.n.NONE, t = Q, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(r), a && r.stopPropagation());
                            }
                        }
                    }, [t, e, a]);
                }
                const K = 'page_heading_05',
                    Z = 'page_close_a4',
                    J = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            Y(V.n.ESCAPE, a),
                            s().createElement(
                                'div',
                                { className: F()(Z, t) },
                                s().createElement(j, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    ee = () => i.O.client.graphicsQuality.isHigh();
                function te() {}
                function ae() {
                    return !1;
                }
                console.log;
                var re = a(9174);
                function ne(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ue(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return ue(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ue(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const se = (e) => (0 === e ? window : window.subViews.get(e));
                const oe = () => (e, t) => {
                        const a = (0, u.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: o, mocks: l }) {
                                const c = (0, u.useRef)([]),
                                    m = (a, r, n) => {
                                        var u;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = se,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function u(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = n.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = a(t),
                                                        u = r.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? u
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, u);
                                                };
                                                return {
                                                    subscribe: (a, u) => {
                                                        const o = 'string' == typeof u ? `${r}.${u}` : r,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return (n.set(l, a), e && a(s(u)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const a = s(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = ne(n.keys()); !(e = a()).done; ) u(e.value, t);
                                                    },
                                                    unsubscribe: u,
                                                };
                                            })(r),
                                            o =
                                                'real' === a
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (u = null == n ? void 0 : n.getter)
                                                                  ? u
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            m = (e) => c.current.push(e),
                                            d = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            n = re.LO.box(r, { equals: ae });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, re.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            n = re.LO.box(r, { equals: ae });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, re.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = re.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, re.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                u = Object.entries(n),
                                                                s = u.reduce(
                                                                    (e, [t, a]) => ((e[a] = re.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, re.aD)((e) => {
                                                                            u.forEach(([t, a]) => {
                                                                                s[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: m,
                                            }),
                                            _ = { mode: a, model: d, externalModel: o, cleanup: m };
                                        return {
                                            model: d,
                                            controls: 'mocks' === a && n ? n.controls(_) : t(_),
                                            externalModel: o,
                                            mode: a,
                                        };
                                    },
                                    d = (0, u.useRef)(!1),
                                    _ = (0, u.useState)(r),
                                    E = _[0],
                                    g = _[1],
                                    p = (0, u.useState)(() => m(r, n, l)),
                                    b = p[0],
                                    A = p[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        d.current ? A(m(E, n, l)) : (d.current = !0);
                                    }, [l, E, n]),
                                    (0, u.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, u.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    s().createElement(a.Provider, { value: b }, o)
                                );
                            },
                            () => (0, u.useContext)(a),
                        ];
                    },
                    ie = oe()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                ['startTimestamp', 'endTimestamp', 'serverTimestamp', 'state'],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    le = ie[0],
                    ce = ie[1];
                let me;
                !(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.WeeklyQuests = 2)] = 'WeeklyQuests'),
                        (e[(e.Leaderboard = 3)] = 'Leaderboard'));
                })(me || (me = {}));
                const de = {
                        [me.Progression]: 'progression',
                        [me.RankRewards]: 'rankRewards',
                        [me.WeeklyQuests]: 'weeklyQuests',
                        [me.Leaderboard]: 'leaderboard',
                    },
                    _e = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } };
                var Ee = a(3946);
                const ge = oe()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.object('progressionModel.qualificationModel'),
                                r = (0, Ee.Om)(() => t.root.get().pageViewId === me.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: r } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                        }),
                    ),
                    pe = ge[0],
                    be = ge[1];
                function Ae(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const fe = Ae;
                function he(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function ve(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, r) => t(null == e ? void 0 : e.value, a, r));
                }
                function Fe(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let r = Math.max(t, 0);
                            const n = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (r > n) return { done: !0, value: null };
                                    const t = e[r++];
                                    return t ? { value: he(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function Ce(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const r = he(e[a]);
                        if (t(r, a, e)) return r;
                    }
                }
                function De(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(fe(e, a), a, e)) return a;
                    }
                }
                const Be = R.images.comp7.gui.maps.icons.comp7.metaTabs,
                    we = (e, t) => {
                        const a = de[e];
                        return t ? `${Be.$dyn(a)}` : `${Be.small.$dyn(a)}`;
                    },
                    ke = oe()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                r = (0, Ee.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: ve(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: we(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: ae },
                                );
                            return Object.assign({}, t, { computes: { tabs: r } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Se = ke[0],
                    Re = ke[1],
                    ye = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    ((a = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                            }
                        );
                    };
                var xe = a(7030);
                const Te = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Pe = s().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: r }, n) {
                        return s().createElement(
                            'div',
                            { className: F()(Te.base, Te[`base__${a}`], r), ref: n },
                            s().createElement('div', {
                                className: F()(
                                    Te.border,
                                    Te.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: F()(
                                    Te.border,
                                    Te.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', {
                                className: F()(Te.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    Ne = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Le = { mouseEnter: 'highlight', click: 'play' },
                    Ie = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: r,
                            sounds: n = Le,
                            notification: u,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: m,
                            onMouseLeave: d,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const g = (e, a) => {
                                !t && n[a] && W(n[a]);
                            },
                            p = s().createElement(
                                'div',
                                {
                                    className: F()(
                                        Ne.base,
                                        Ne[`base__${i}`],
                                        t && F()(Ne.base__active, null == r ? void 0 : r.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        (g(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (g(0, 'mouseEnter'), null == m || m(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (g(0, 'mouseLeave'), null == d || d(e));
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: F()(Ne.highlight, null == r ? void 0 : r.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : s().createElement('div', {
                                          className: F()(Ne.icon, Ne[`icon__${i}`], null == r ? void 0 : r.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, isActive: t, size: i }),
                                u &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                Ne.notification,
                                                Ne[`notification__${u.type}`],
                                                u.size ? Ne[`notification__${u.size}`] : Ne.notification__medium,
                                                null == r ? void 0 : r.notification,
                                            ),
                                        },
                                        'dot' !== u.type && u.value,
                                    ),
                            );
                        return _ ? s().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    Me = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    Oe = s().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: r,
                        classNames: n,
                        size: o = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: m,
                        onMouseLeave: d,
                        WrapperElement: _,
                    }) {
                        const E = (0, u.useRef)(null),
                            g = (0, u.useRef)(null),
                            p = (0, u.useRef)(null),
                            b = (0, u.useRef)(null),
                            A = (0, xe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, xe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            h = (0, xe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / i.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (A.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 50 },
                                        }));
                                },
                                onRest: () => {
                                    (A.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            v = (0, u.useCallback)((e) => {
                                if (null !== p.current && null !== b.current) {
                                    e(p.current.getBoundingClientRect().top - b.current.getBoundingClientRect().top);
                                }
                            }, []);
                        var C, D;
                        return (
                            (0, u.useEffect)(() => {
                                v((e) => {
                                    h.start({ position: e, config: { duration: 200 } });
                                });
                            }, [h, e, v]),
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        v((e) => {
                                            h.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [h, v, o],
                            ),
                            (C = () => {
                                v((e) => {
                                    h.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (D = [h, v]),
                            (0, u.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    (e(), (e = ye(C)));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        (e(), window.removeEventListener('resize', t));
                                    }
                                );
                            }, D),
                            s().createElement(
                                'div',
                                { className: F()(Me.base, r), ref: b },
                                t.map(({ id: t, items: r, title: u, groupClassNames: i }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: F()(Me.group, Me[`group__${o}`], null == i ? void 0 : i.group),
                                        },
                                        u &&
                                            s().createElement(
                                                'div',
                                                { className: F()(Me.title, null == i ? void 0 : i.title) },
                                                u,
                                            ),
                                        r.map(({ id: t, icon: r, notification: u }) =>
                                            s().createElement(Ie, {
                                                key: t,
                                                id: t,
                                                icon: r,
                                                notification: u,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: o,
                                                className: null == n ? void 0 : n.tab,
                                                classNames: n,
                                                additionContent: l,
                                                onMouseEnter: m,
                                                onMouseLeave: d,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                s().createElement(Pe, {
                                    arrowRef: E,
                                    ref: g,
                                    size: o,
                                    className: null == n ? void 0 : n.frame,
                                    classNames: n,
                                }),
                            )
                        );
                    }),
                    He = [
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
                function We(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const Ue = (e, t, a = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: X.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                a,
                            ),
                        );
                    },
                    $e = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            b = e.targetId,
                            A = void 0 === b ? 0 : b,
                            f = e.onShow,
                            h = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, He);
                        const F = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, u.useMemo)(
                                () =>
                                    A ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (r = window.subViews[a].id)),
                                            { caller: a, stack: t, resId: r }
                                        );
                                    })().resId,
                                [A],
                            ),
                            D = (0, u.useCallback)(() => {
                                (F.current.isVisible && F.current.timeoutId) ||
                                    (Ue(a, E, { isMouseEvent: !0, on: !0, arguments: We(r) }, C),
                                    f && f(),
                                    (F.current.isVisible = !0));
                            }, [a, E, r, C, f]),
                            B = (0, u.useCallback)(() => {
                                if (F.current.isVisible || F.current.timeoutId) {
                                    const e = F.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (F.current.timeoutId = 0)),
                                        Ue(a, E, { on: !1 }, C),
                                        F.current.isVisible && h && h(),
                                        (F.current.isVisible = !1));
                                }
                            }, [a, E, C, h]),
                            w = (0, u.useCallback)((e) => {
                                F.current.isVisible &&
                                    ((F.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (F.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(F.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = F.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === p && B();
                            }, [p, B]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ));
                        return p
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((F.current.timeoutId = window.setTimeout(D, c ? 100 : 400)),
                                                      n && n(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (B(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === d && B(), null == i || i(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === d && B(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var k;
                    },
                    ze = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    qe = (e) => {
                        let t = e.children,
                            a = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, ze);
                        const c = (0, u.useMemo)(() => {
                            const e = Object.assign({}, i, { body: a, header: r, note: n, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, a, r, n, i]);
                        return s().createElement(
                            $e,
                            Ge(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    },
                    Ve = R.strings.comp7.sidebar.tabs.tooltip,
                    Xe = ({ children: e, id: t }) => {
                        const a = de[t];
                        return s().createElement(qe, { header: `${Ve.header.$dyn(a)}`, body: `${Ve.body.$dyn(a)}` }, e);
                    },
                    Qe = { icon: 'Tabs_icon_78' },
                    Ye = (0, q.Pi)(({ pageView: e, className: t }) => {
                        const a = Re(),
                            r = a.model,
                            n = a.controls,
                            o = S().mediaSize >= B.Medium,
                            i = (0, u.useCallback)((e) => n.changeSidebarTab(e), [n]),
                            l = r.computes.tabs(o);
                        return s().createElement(Oe, {
                            tabs: l,
                            onClick: i,
                            active: e,
                            size: o ? 'medium' : 'small',
                            className: t,
                            classNames: Qe,
                            WrapperElement: Xe,
                        });
                    }),
                    Ke = 'Spinner_base_87',
                    Ze = 'Spinner_caption_cf',
                    Je = 'Spinner_gear_c4',
                    et = 'Spinner_logo_bf',
                    tt = ({ message: e, className: t, classNames: a }) =>
                        s().createElement(
                            'div',
                            { className: F()(Ke, t) },
                            e && s().createElement('div', { className: F()(Ze, null == a ? void 0 : a.caption) }, e),
                            s().createElement('div', { className: F()(Je, null == a ? void 0 : a.gear) }),
                            s().createElement('div', { className: F()(et, null == a ? void 0 : a.logo) }),
                        );
                let at;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'));
                })(at || (at = {}));
                const rt = 'Heading_base_74',
                    nt = ({ children: e, className: t }) => s().createElement('div', { className: F()(rt, t) }, e),
                    ut = {
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
                let st, ot;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(st || (st = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(ot || (ot = {})));
                const it = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: r,
                    disabled: n,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, u.useRef)(null),
                        b = (0, u.useState)(a),
                        A = b[0],
                        f = b[1],
                        h = (0, u.useState)(!1),
                        v = h[0],
                        C = h[1],
                        D = (0, u.useState)(!1),
                        B = D[0],
                        w = D[1],
                        k = (0, u.useCallback)(() => {
                            n || (p.current && (p.current.focus(), f(!0)));
                        }, [n]),
                        S = (0, u.useCallback)(
                            (e) => {
                                A && null !== p.current && !p.current.contains(e.target) && f(!1);
                            },
                            [A],
                        ),
                        y = (0, u.useCallback)(
                            (e) => {
                                n || (g && g(e));
                            },
                            [n, g],
                        ),
                        x = (0, u.useCallback)(
                            (e) => {
                                n || (null !== i && W(i), c && c(e), w(!0));
                            },
                            [n, i, c],
                        ),
                        T = (0, u.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        P = (0, u.useCallback)(
                            (e) => {
                                n || (_ && _(e), C(!1));
                            },
                            [n, _],
                        ),
                        N = (0, u.useCallback)(
                            (e) => {
                                n || (null !== l && W(l), d && d(e), a && k(), C(!0));
                            },
                            [n, l, d, k, a],
                        ),
                        L = (0, u.useCallback)(
                            (e) => {
                                n || (E && E(e), C(!1));
                            },
                            [n, E],
                        ),
                        I = F()(
                            ut.base,
                            ut[`base__${r}`],
                            {
                                [ut.base__disabled]: n,
                                [ut[`base__${t}`]]: t,
                                [ut.base__focus]: A,
                                [ut.base__highlightActive]: v,
                                [ut.base__firstHover]: B,
                            },
                            o,
                        ),
                        M = F()(ut.state, ut.state__default);
                    return (
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, u.useEffect)(() => {
                            f(a);
                        }, [a]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: I,
                                onMouseEnter: x,
                                onMouseMove: T,
                                onMouseUp: P,
                                onMouseDown: N,
                                onMouseLeave: L,
                                onClick: y,
                            },
                            r !== st.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ut.back }),
                                    s().createElement('span', { className: ut.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: M },
                                s().createElement('span', { className: ut.stateDisabled }),
                                s().createElement('span', { className: ut.stateHighlightHover }),
                                s().createElement('span', { className: ut.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ut.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                it.defaultProps = { type: st.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const lt = (0, u.memo)(it),
                    ct = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    mt = oe()(
                        ({ observableModel: e, mode: t }) => {
                            const a = { root: e.object() },
                                r = e.array('items'),
                                n = (0, Ee.Om)(() => r.get().length),
                                u = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(r.get(), e);
                                        if (!t) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: ae },
                                ),
                                s = (0, Ee.Om)(() => {
                                    const e = a.root.get(),
                                        t = e.state,
                                        r = e.leaderboardUpdateTimestamp;
                                    return t !== at.Initial && r > 0;
                                }),
                                o = (0, Ee.Om)(() => n() > 0),
                                i = (0, Ee.Om)(() => u(0).rank),
                                l = (0, Ee.Om)(() => a.root.get().lastBestUserPosition + 1),
                                c = (0, Ee.Om)((e) => a.root.get().ownSpaID === u(e).spaID),
                                m = (0, Ee.Om)(() => -1 !== a.root.get().lastBestUserPosition),
                                d = (0, Ee.Om)(() => ({ first: u(0).position, last: u(0).position + n() }), {
                                    equals: ct,
                                }),
                                _ = (0, Ee.Om)(() => m() && l() >= d().first && l() <= d().last),
                                E = (0, Ee.Om)(
                                    (e) => {
                                        const t = Math.ceil(a.root.get().recordsCount / e);
                                        return {
                                            amount: t,
                                            hasPagination: t > 1,
                                            active: Math.floor(d().first / e) + 1,
                                        };
                                    },
                                    { equals: ct },
                                ),
                                g = (0, Ee.Om)((e) => u(e).position < 3),
                                p = (0, Ee.Om)(() => -1 === a.root.get().personalPosition);
                            return Object.assign(
                                {},
                                a,
                                {
                                    computes: {
                                        leaderboardItemsLength: n,
                                        leaderboardItem: u,
                                        hasUpdateInfo: s,
                                        hasRecords: o,
                                        firstItemRank: i,
                                        rowsDividerPosition: l,
                                        hasRowsDivider: _,
                                        isPersonalRow: c,
                                        hasPositionIcon: g,
                                        isDefaultPersonalPosition: p,
                                        hasLastBestUserPosition: m,
                                        pages: E,
                                        pagePositions: d,
                                    },
                                },
                                'mocks' === t && { internal: { items: r } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    dt = mt[0],
                    _t = mt[1],
                    Et = 'ErrorState_base_eb',
                    gt = 'ErrorState_titleContainer_ca',
                    pt = 'ErrorState_alertIcon_76',
                    bt = 'ErrorState_title_c1',
                    At = 'ErrorState_description_d9',
                    ft = 'ErrorState_buttonWrapper_5e',
                    ht = 'ErrorState_button_23',
                    vt = R.strings.comp7.leaderboard.error,
                    Ft = (0, q.Pi)(({ className: e }) => {
                        const t = _t(),
                            a = t.model,
                            r = t.controls,
                            n = a.root.get().isLoading,
                            u = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: F()(Et, e) },
                            s().createElement(
                                'div',
                                { className: gt },
                                s().createElement('div', { className: pt }),
                                s().createElement('div', { className: bt }, vt.title()),
                            ),
                            s().createElement('div', { className: At }, vt.description()),
                            s().createElement(
                                'div',
                                { className: ft },
                                s().createElement(
                                    lt,
                                    {
                                        type: st.secondary,
                                        disabled: n,
                                        size: ((o = u), o >= B.Medium ? ot.medium : ot.small),
                                        mixClass: ht,
                                        onClick: r.refresh,
                                    },
                                    vt.buttonText(),
                                ),
                            ),
                        );
                        var o;
                    });
                let Ct;
                !(function (e) {
                    ((e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth'));
                })(Ct || (Ct = {}));
                const Dt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function Bt(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return wt(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return wt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function wt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const kt = [];
                function St(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), kt)
                    );
                }
                function Rt(e, t, a) {
                    const r = (0, u.useMemo)(
                        () =>
                            (function (e, t, a, r) {
                                let n,
                                    u = !1,
                                    s = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function m() {
                                        ((s = Date.now()), a.apply(l, i));
                                    }
                                    u ||
                                        (r && !n && m(),
                                        o(),
                                        void 0 === r && c > e
                                            ? m()
                                            : !0 !== t &&
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
                                    'boolean' != typeof t && ((r = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (u = !0));
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return ((0, u.useEffect)(() => r.cancel, [r]), r);
                }
                let yt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(yt || (yt = {}));
                const xt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Tt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, a) => {
                            const r = t(e),
                                n = r[0],
                                u = r[1];
                            return Dt(n, u, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? xt : c,
                                d = (0, u.useRef)(null),
                                _ = (0, u.useRef)(null),
                                E = (() => {
                                    const e = (0, u.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (var r, n = Bt(t(e).values()); !(r = n()).done; ) (0, r.value)(...a);
                                        };
                                    return (0, u.useMemo)(() => ({ on: a, off: r, trigger: n }), []);
                                })(),
                                g = Rt(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, xe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = p[0],
                                A = p[1],
                                f = (0, u.useCallback)(
                                    (e, t, a) => {
                                        var r;
                                        const n = b.scrollPosition.get(),
                                            u = (null != (r = b.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, t * a + u + n);
                                    },
                                    [b.scrollPosition],
                                ),
                                h = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            A.start({
                                                scrollPosition: o(r, e),
                                                immediate: t,
                                                reset: a,
                                                config: m.animationConfig,
                                                from: { scrollPosition: o(r, b.scrollPosition.get()) },
                                            });
                                    },
                                    [A, m.animationConfig, b.scrollPosition],
                                ),
                                v = (0, u.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, m.step),
                                            u = f(t, e, r);
                                        h(u);
                                    },
                                    [h, f, m.step],
                                ),
                                F = (0, u.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(r(e)),
                                            d.current && E.trigger('mouseWheel', e, b.scrollPosition, t(d.current)));
                                    },
                                    [b.scrollPosition, v, E],
                                ),
                                C = ((e, t = []) => {
                                    const a = (0, u.useRef)(),
                                        r = (0, u.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        ye(() => {
                                            const e = d.current;
                                            e &&
                                                (h(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, b.scrollPosition.goal],
                                ),
                                D = St(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && h(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            const B = (0, u.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: F,
                                    applyScroll: h,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: A,
                                    animationScroll: b,
                                    recalculateContent: D,
                                    handleIsThumbDragging: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [b.scrollPosition, h, v, B, E.off, E.on, D, F, A, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Pt = Tt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? yt.Next : yt.Prev),
                    });
                class Nt extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = X.B3.GOLD;
                        else e = X.B3.INTEGRAL;
                        const t = X.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Nt.defaultProps = { format: 'integral' };
                const Lt = {
                    '--pageContentWidth': '78vw',
                    base: 'CurrentPositionPanel_base_92',
                    base__active: 'CurrentPositionPanel_base__active_8c',
                    cell: 'CurrentPositionPanel_cell_be',
                    cell__order: 'CurrentPositionPanel_cell__order_be',
                    cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_c5',
                    cell__battles: 'CurrentPositionPanel_cell__battles_8f',
                    cell__score: 'CurrentPositionPanel_cell__score_d2',
                    screwIcon: 'CurrentPositionPanel_screwIcon_8f',
                    screwIcon__left: 'CurrentPositionPanel_screwIcon__left_cb',
                    screwIcon__right: 'CurrentPositionPanel_screwIcon__right_6e',
                };
                let It;
                !(function (e) {
                    ((e.None = 'None'), (e.Active = 'Active'));
                })(It || (It = {}));
                const Mt = R.strings.comp7.leaderboard.currentPosition,
                    Ot = { [It.None]: 'none', [It.Active]: 'active' },
                    Ht = (0, q.Pi)(({ state: e, height: t, onClick: a, className: r }) => {
                        const n = _t().model.root.get(),
                            u = n.personalPosition,
                            o = n.personalBattlesCount,
                            i = n.personalScore;
                        return s().createElement(
                            'div',
                            {
                                className: F()(Lt.base, Lt[`base__${Ot[e]}`], r),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            s().createElement('div', { className: F()(Lt.screwIcon, Lt.screwIcon__left) }),
                            {
                                [It.None]: s().createElement('div', { className: F()(Lt.cell) }, Mt.none()),
                                [It.Active]: s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: F()(Lt.cell, Lt.cell__order) }, u + 1),
                                    s().createElement(
                                        'div',
                                        { className: F()(Lt.cell, Lt.cell__currentPosition) },
                                        Mt.body(),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: F()(Lt.cell, Lt.cell__battles) },
                                        s().createElement(Nt, { value: o }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: F()(Lt.cell, Lt.cell__score) },
                                        s().createElement(Nt, { value: i }),
                                    ),
                                ),
                            }[e],
                            s().createElement('div', { className: F()(Lt.screwIcon, Lt.screwIcon__right) }),
                        );
                    });
                function Wt(e, t, a = []) {
                    const r = (0, u.useRef)(0),
                        n = (0, u.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, u.useEffect)(() => n, [n]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, u.useCallback)((a) => {
                            ((r.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, s),
                        n,
                    ];
                }
                const Ut = 'VerticalBar_base_f3',
                    $t = 'VerticalBar_base__nonActive_42',
                    zt = 'VerticalBar_topButton_d7',
                    Gt = 'VerticalBar_bottomButton_06',
                    jt = 'VerticalBar_track_df',
                    qt = 'VerticalBar_thumb_32',
                    Vt = 'VerticalBar_rail_43',
                    Xt = 'disable',
                    Qt = () => {},
                    Yt = { pending: !1, offset: 0 },
                    Kt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Zt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Jt = (e, t) => Math.max(20, e.offsetHeight * t),
                    ea = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Kt, onDrag: r = Qt }) => {
                        const n = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, u.useState)(Yt),
                            _ = d[0],
                            E = d[1],
                            g = (0, u.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            p = St(() => {
                                const t = c.current,
                                    a = l.current,
                                    r = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const s = Math.min(1, r / u);
                                return (
                                    (t.style.height = `${Jt(a, s)}px`),
                                    t.classList.add(qt),
                                    n.current &&
                                        (1 === s ? n.current.classList.add($t) : n.current.classList.remove($t)),
                                    s
                                );
                            }),
                            b = St(() => {
                                const t = l.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    m = Dt(0, 1, u / (n - r)),
                                    d = (t.offsetHeight - Jt(t, s)) * m;
                                ((a.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Xt),
                                                    void i.current.classList.remove(Xt)
                                                );
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Xt),
                                                    void i.current.classList.add(Xt)
                                                );
                                            var t, a;
                                            (o.current.classList.remove(Xt), i.current.classList.remove(Xt));
                                        }
                                    })(d));
                            }),
                            A = St(() => {
                                Zt(e, () => {
                                    (p(), b());
                                });
                            });
                        ((0, u.useEffect)(() => ye(A)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Zt(e, () => {
                                        b();
                                    });
                                };
                                let a = Qt;
                                const r = () => {
                                    (a(), (a = ye(A)));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        Zt(e, (a) => {
                                            const n = l.current,
                                                u = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !u || !s) return;
                                            const o = t.screenY - _.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            g(Yt));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, g]));
                        const f = Wt((t) => e.applyStepTo(t), m, [e]),
                            h = f[0],
                            v = f[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Xt) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(Ut, t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(zt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xt) || 0 !== e.button || (W('play'), h(yt.Next));
                                },
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(jt, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if ((W('play'), t.target === r))
                                                (e.handleIsThumbDragging(!0),
                                                    g({
                                                        pending: !0,
                                                        offset: t.screenY - r.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Zt(e, (r) => {
                                                            if (!r) return;
                                                            const n = a(e),
                                                                u = e.clampPosition(r, r.scrollTop + n * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? yt.Prev : yt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: F()(Vt, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(Gt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xt) || 0 !== e.button || (W('play'), h(yt.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    ta = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    aa = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, u.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: F()(ta.base, e.base) });
                            }, [r]),
                            d = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(ta.defaultScroll, a), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(ta.area, n) },
                                s().createElement(ra, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(ea, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    ra = ({ className: e, classNames: t, children: a, api: r }) => (
                        (0, u.useEffect)(() => ye(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(ta.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(ta.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                a,
                            ),
                        )
                    );
                ra.Default = aa;
                const na = (e, t) => {
                    const a = [];
                    for (let r = 0; r < e; r++) a.push(t(r));
                    return a;
                };
                let ua, sa, oa;
                function ia(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function la(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                (!(function (e) {
                    ((e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E'));
                })(ua || (ua = {})),
                    (function (e) {
                        ((e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive'));
                    })(sa || (sa = {})),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(oa || (oa = {})));
                const ca = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    ma = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    da = (e, t, a = oa.left) => e.split(t).reduce(a === oa.left ? ca : ma, []),
                    _a = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    Ea = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ga = (e, t = oa.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Ea.includes(a)
                            ? _a(e)
                            : ((e, t = oa.left) => {
                                  let a = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (da(n, /( )/, t).forEach((e) => (a = a.concat(da(e, r, oa.left)))), a);
                              })(e, t);
                    },
                    pa = R.strings.comp7.division,
                    ba = { [ua.A]: 'A', [ua.B]: 'B', [ua.C]: 'C', [ua.D]: 'D', [ua.E]: 'E' },
                    Aa = (e) => pa.$dyn(ba[e]);
                let fa;
                !(function (e) {
                    ((e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth'));
                })(fa || (fa = {}));
                const ha = {
                        [fa.First]: 'first',
                        [fa.Second]: 'second',
                        [fa.Third]: 'third',
                        [fa.Fourth]: 'fourth',
                        [fa.Fifth]: 'fifth',
                        [fa.Sixth]: 'sixth',
                    },
                    va = (e) => ha[e],
                    Fa = [fa.First, fa.Second, fa.Third, fa.Fourth],
                    Ca = (e) => Fa.includes(e),
                    Da = 'RankEmblem_base_ec';
                let Ba;
                !(function (e) {
                    ((e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600'));
                })(Ba || (Ba = {}));
                const wa = ({ rank: e, size: t, division: a, className: r }) => {
                        const n = (0, u.useMemo)(() => {
                            const r = R.images.comp7.gui.maps.icons.comp7.ranks.$num(t),
                                n = Ca(e) && void 0 !== a ? `_${Aa(a)}` : '';
                            return { backgroundImage: `url(${r.$dyn(`${va(e)}${n}`)})`, '--imageSize': `${t}rem` };
                        }, [e, t, a]);
                        return s().createElement('div', { className: F()(Da, r), style: n });
                    },
                    ka = {
                        [fa.First]: 'first',
                        [fa.Second]: 'second',
                        [fa.Third]: 'third',
                        [fa.Fourth]: 'fourth',
                        [fa.Fifth]: 'fifth',
                        [fa.Sixth]: 'sixth',
                    },
                    Sa = (e, t) => `${e.$dyn(ka[t])}`,
                    Ra = (e) => Sa(R.strings.comp7.rank, e),
                    ya = (e) => la(R.strings.comp7.rank.text(), { rank: Ra(e) }),
                    xa = 'RowsDivider_base_0a',
                    Ta = 'RowsDivider_rankText_96',
                    Pa = (0, q.Pi)(({ index: e, className: t, onClick: a }) => {
                        const r = _t().model.computes.leaderboardItem(e).rank;
                        return s().createElement(
                            'div',
                            { className: F()(xa, t), onClick: a },
                            s().createElement(wa, { rank: r, size: Ba.x64 }),
                            s().createElement('div', { className: Ta }, ya(r)),
                        );
                    }),
                    Na = 'Header_base_83',
                    La = 'Header_separator_14',
                    Ia = 'Header_cell_0e',
                    Ma = 'Header_cell__order_7d',
                    Oa = 'Header_cell__player_c5',
                    Ha = 'Header_cell__score_3e',
                    Wa = R.strings.comp7.leaderboard.table.header,
                    Ua = R.strings.comp7.leaderboard.table.tooltip,
                    $a = () =>
                        s().createElement(
                            'div',
                            { className: Na },
                            s().createElement(
                                qe,
                                { header: Ua.order.header(), body: Ua.order.body() },
                                s().createElement('div', { className: F()(Ia, Ma) }, Wa.order()),
                            ),
                            s().createElement('div', { className: La }),
                            s().createElement(
                                qe,
                                { header: Ua.player.header(), body: Ua.player.body() },
                                s().createElement('div', { className: F()(Ia, Oa) }, Wa.player()),
                            ),
                            s().createElement('div', { className: La }),
                            s().createElement(
                                qe,
                                { header: Ua.battlesCount.header(), body: Ua.battlesCount.body() },
                                s().createElement('div', { className: F()(Ia, Ha) }, Wa.battlesCount()),
                            ),
                            s().createElement('div', { className: La }),
                            s().createElement(
                                qe,
                                { header: Ua.score.header(), body: Ua.score.body() },
                                s().createElement('div', { className: F()(Ia, Ha) }, Wa.score()),
                            ),
                        );
                let za;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(za || (za = {}));
                const Ga = 'TextOverflow_base_3b',
                    ja = ({ content: e, classMix: t }) => {
                        const a = (0, u.useRef)(null),
                            r = (0, u.useState)(!0),
                            n = r[0],
                            o = r[1];
                        return (
                            (0, u.useEffect)(() =>
                                ye(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && o(!1);
                                }),
                            ),
                            s().createElement(
                                qe,
                                { isEnabled: n, body: e },
                                s().createElement('div', { ref: a, className: F()(Ga, t) }, e),
                            )
                        );
                    },
                    qa = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Va = { [za.default]: 'c_24x24', [za.x48]: 'c_48x48', [za.x80]: 'c_80x80', [za.x220]: 'c_220x220' },
                    Xa = ({ badgeID: e, size: t = za.default, className: a }) => {
                        const r = R.images.gui.maps.icons.library.badges.$dyn(Va[t]);
                        return s().createElement('div', {
                            className: F()(qa.base, qa[`base__${t}`], a),
                            style: { backgroundImage: `url(${r.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Qa = {
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
                    Ya = (0, u.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, u.useMemo)(
                                () => la(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return s().createElement(
                            qe,
                            { header: t, body: a },
                            s().createElement('div', { className: Qa.anonymizedIcon }),
                        );
                    });
                function Ka() {
                    return (
                        (Ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ka.apply(this, arguments)
                    );
                }
                const Za = { [za.default]: 'c_64x24', [za.x48]: 'c_68x28' },
                    Ja = { [za.default]: 'c_48x48', [za.x48]: 'c_48x48' },
                    er = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: r = { badgeID: '' },
                        suffixBadge: n = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: i = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: m = za.default,
                        userNameClassName: d = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(Za[m]),
                            g = (0, u.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${n.badgeID}`)})` }),
                                [n, E],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(Ja[m]),
                            b = (0, u.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${n.badgeID}`)})` }),
                                [n, p],
                            ),
                            A = t ? `[${t}]` : '',
                            f = F()(Qa.base, Qa[`base__${m}`], o && Qa.base__inverted),
                            h = F()(Qa.userName, d),
                            v = F()(Qa.clanTag, _),
                            C = e !== c,
                            D = i ? `${c}${A}` : c,
                            B = Boolean(r.badgeID) && s().createElement(Xa, Ka({ size: m }, r, { key: 'badge' })),
                            w = Date.now(),
                            k = [
                                B,
                                [
                                    s().createElement(
                                        'div',
                                        { className: h, key: 'userName' },
                                        s().createElement(ja, { content: e, key: w }),
                                    ),
                                    !i && Boolean(A) && s().createElement('div', { className: v, key: 'clanTag' }, A),
                                ],
                                0 !== a && s().createElement('div', { className: Qa.igrIcon, key: 'igrType' }),
                                Boolean(n.badgeID) &&
                                    s().createElement(
                                        'div',
                                        { className: Qa.suffixBadgeWrapper, key: 'suffixBadge' },
                                        s().createElement('div', { className: Qa.suffixBadgeStripe, style: g }),
                                        s().createElement('div', { className: Qa.suffixBadge, style: b }),
                                    ),
                                l && C && s().createElement(Ya, { tooltipHeaderName: D, key: 'anonymizer' }),
                            ];
                        return s().createElement('div', { className: f }, o ? k.reverse() : k);
                    };
                let tr;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(tr || (tr = {}));
                const ar = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, u.useCallback)(() => {
                                ((0, X.c9)(X.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    U.playYes());
                            }, [n, t, a, r]),
                            l = (0, u.useCallback)(() => {
                                (0, X.c9)(X.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, u.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === tr.RIGHT)(e) && i());
                                },
                                [o, i],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, u.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    rr = ['children'];
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                const ur = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, rr);
                        return s().createElement(
                            ar,
                            nr({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    sr = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? s().createElement(ur, { args: a }, e) : e,
                    or = {
                        base: 'Row_base_fc',
                        base__personal: 'Row_base__personal_1c',
                        order: 'Row_order_30',
                        order__first: 'Row_order__first_53',
                        order__second: 'Row_order__second_cb',
                        order__third: 'Row_order__third_c6',
                        playerContainer: 'Row_playerContainer_9e',
                        player: 'Row_player_f9',
                        clanTag: 'Row_clanTag_73',
                        battles: 'Row_battles_61',
                        score: 'Row_score_55',
                    },
                    ir = R.strings.comp7.leaderboard.table.tooltip,
                    lr = { 0: 'first', 1: 'second', 2: 'third' },
                    cr = (0, q.Pi)(({ index: e, className: t }) => {
                        const a = _t().model,
                            r = a.computes.leaderboardItem(e),
                            n = r.position,
                            u = r.battlesCount,
                            o = r.userName,
                            i = r.clanTag,
                            l = r.clanTagColor,
                            c = r.score,
                            m = r.spaID,
                            d = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return s().createElement(
                            'div',
                            { className: F()(or.base, d && or.base__personal, t), style: { '--clanTagColor': l } },
                            s().createElement(
                                qe,
                                { header: ir.order.header(), body: ir.order.body() },
                                s().createElement(
                                    'div',
                                    { className: F()(or.order, _ && or[`order__${lr[n]}`]) },
                                    !_ && n + 1,
                                ),
                            ),
                            s().createElement(
                                sr,
                                { contextMenuArgs: { spaID: m, userName: o }, isEnabled: !d },
                                s().createElement(
                                    'div',
                                    { className: or.playerContainer },
                                    s().createElement(
                                        qe,
                                        { header: ir.player.header(), body: ir.player.body() },
                                        s().createElement(
                                            'div',
                                            { className: or.player },
                                            s().createElement(er, {
                                                userName: o,
                                                clanAbbrev: i,
                                                clanTagClassName: l && or.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                qe,
                                { header: ir.battlesCount.header(), body: ir.battlesCount.body() },
                                s().createElement(
                                    'div',
                                    { className: or.battles },
                                    s().createElement(Nt, { value: u }),
                                ),
                            ),
                            s().createElement(
                                qe,
                                { header: ir.score.header(), body: ir.score.body() },
                                s().createElement('div', { className: or.score }, s().createElement(Nt, { value: c })),
                            ),
                        );
                    }),
                    mr = 'Leaderboard_base_ec',
                    dr = 'Leaderboard_content_a5',
                    _r = 'Leaderboard_shadowsContainer_bc',
                    Er = 'Leaderboard_shadowsContainer__bottom_b4',
                    gr = 'Leaderboard_shadow_3f',
                    pr = 'Leaderboard_shadow__left_ee',
                    br = 'Leaderboard_shadow__center_37',
                    Ar = 'Leaderboard_shadow__right_ee',
                    fr = 'Leaderboard_area_c7',
                    hr = 'Leaderboard_row_06',
                    vr = 'Leaderboard_rowsDivider_2c',
                    Fr = { base: 'Leaderboard_bar_69' },
                    Cr = (0, q.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: r = 0 }) => {
                        const n = _t().model,
                            u = n.computes.hasRowsDivider(),
                            o = n.computes.rowsDividerPosition() % e;
                        return s().createElement(
                            'div',
                            {
                                className: mr,
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${r}rem` },
                            },
                            s().createElement($a, null),
                            s().createElement(
                                'div',
                                { className: dr },
                                s().createElement(
                                    'div',
                                    { className: _r },
                                    s().createElement('div', { className: F()(gr, pr) }),
                                    s().createElement('div', { className: F()(gr, br) }),
                                    s().createElement('div', { className: F()(gr, Ar) }),
                                ),
                                s().createElement(
                                    ra,
                                    { api: t, className: fr },
                                    na(n.computes.leaderboardItemsLength(), (e) =>
                                        s().createElement(
                                            s().Fragment,
                                            { key: e },
                                            u && e === o && s().createElement(Pa, { index: e, className: vr }),
                                            s().createElement(cr, { className: hr, index: e }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: F()(_r, Er) },
                                    s().createElement('div', { className: F()(gr, pr) }),
                                    s().createElement('div', { className: F()(gr, br) }),
                                    s().createElement('div', { className: F()(gr, Ar) }),
                                ),
                                s().createElement(ea, { api: t, classNames: Fr }),
                            ),
                        );
                    }),
                    Dr = {
                        base: 'Pagination_base_49',
                        pageButton: 'Pagination_pageButton_27',
                        pageButton__active: 'Pagination_pageButton__active_0b',
                        pageButton__inactive: 'Pagination_pageButton__inactive_4c',
                        pageButton__disabled: 'Pagination_pageButton__disabled_e4',
                        pageValue: 'Pagination_pageValue_b2',
                        control: 'Pagination_control_4f',
                        control__active: 'Pagination_control__active_25',
                        control__prev: 'Pagination_control__prev_8e',
                        control__next: 'Pagination_control__next_86',
                    };
                let Br;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(Br || (Br = {}));
                const wr = R.strings.comp7.pagination,
                    kr = Math.trunc(4),
                    Sr = ({ pagesAmount: e, activePage: t, className: a, onPageClick: r, onControlEvent: n }) => {
                        const u = t > 1,
                            o = t < e,
                            i = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == r || r(e);
                            },
                            c = (e) => () => {
                                null == n || n(e);
                            };
                        return s().createElement(
                            'div',
                            { className: F()(Dr.base, a) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(Dr.control, Dr.control__prev, u && Dr.control__active),
                                    onClick: u ? c('prevClick') : void 0,
                                },
                                wr.prev(),
                            ),
                            na(i, (a) => {
                                const r = ((e, t, a) => {
                                        const r = t > kr + 1,
                                            n = a > 9 && t + kr < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && r) || (7 === e && n)
                                                ? wr.dots()
                                                : 8 === e
                                                  ? a
                                                  : r && !n
                                                    ? a - 8 + e
                                                    : !r && n
                                                      ? e + 1
                                                      : e - kr + t;
                                    })(a, t, e),
                                    n = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? Br.Active : Br.Inactive) : Br.Disabled)(r, t);
                                return s().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: F()(Dr.pageButton, Dr[`pageButton__${n}`]),
                                        onClick: n !== Br.Disabled && 'number' == typeof r ? l(r) : void 0,
                                    },
                                    s().createElement('div', { className: Dr.pageValue }, r),
                                );
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(Dr.control, Dr.control__next, o && Dr.control__active),
                                    onClick: o ? c('nextClick') : void 0,
                                },
                                wr.next(),
                            ),
                        );
                    },
                    Rr = 'HasRecordsState_base_bb',
                    yr = 'HasRecordsState_base__withoutPagination_ad',
                    xr = 'HasRecordsState_tableContainer_02',
                    Tr = 'HasRecordsState_pagination_cb',
                    Pr = {
                        settings: Object.assign({}, xt, {
                            animationConfig: Object.assign({}, xt.animationConfig, { round: 1 }),
                        }),
                    },
                    Nr = (0, q.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: r,
                            className: n,
                        }) => {
                            const o = _t(),
                                i = o.model,
                                l = o.controls,
                                c = i.root.get(),
                                m = c.personalPosition,
                                d = c.lastBestUserPosition,
                                _ = Pt(Pr),
                                E = _.animationScroll.scrollPosition,
                                g = _.applyScroll,
                                p = _.events,
                                b = _.getBounds,
                                A = i.computes.isDefaultPersonalPosition() ? It.None : It.Active,
                                f = i.computes.pages(e),
                                h = i.computes.pagePositions(),
                                v = i.computes.rowsDividerPosition(),
                                C = i.computes.hasRowsDivider(),
                                D = ((e, t) => viewEnv.remToPx(44) * ((e + 1) % t))(d, e);
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === Ct.Fifth ? D : 0;
                                                    g(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = viewEnv.remToPx(44) * (m % e),
                                                        a = C && m > d ? t + viewEnv.remToPx(70) : t;
                                                    g(a);
                                                    break;
                                                }
                                                case 'page':
                                                    g(0);
                                            }
                                            r(void 0);
                                        }
                                    }),
                                [g, C, d, e, m, a, D, r],
                            );
                            const B = (0, u.useCallback)(() => {
                                const e = h.first > d ? Ct.Fifth : Ct.Sixth;
                                t(e);
                            }, [h.first, d, t]);
                            ((0, u.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, u.useEffect)(() => {
                                    const e = () => {
                                        if (C && v > h.first) {
                                            const e = b()[1],
                                                a = 0 !== e && E.goal === e && D >= e;
                                            t(E.goal >= D || a ? Ct.Fifth : Ct.Sixth);
                                        } else m >= h.first && m <= h.last ? t(m > d ? Ct.Fifth : Ct.Sixth) : B();
                                    };
                                    return (p.on('change', e), () => p.off('change', e));
                                }, [p, h.first, C, d, h.last, e, m, D, v, E.goal, t, B, b]));
                            const w = (0, u.useCallback)(() => {
                                    A !== It.None &&
                                        (U.playYes(),
                                        l.getTableRecords(e, m - (m % e)),
                                        r({ type: 'personalPosition' }));
                                }, [l, e, A, m, r]),
                                k = (0, u.useCallback)(
                                    (t) => {
                                        (U.playYes(), l.getTableRecords(e, (t - 1) * e), r({ type: 'page' }));
                                    },
                                    [l, e, r],
                                ),
                                S = (0, u.useCallback)(
                                    (t) => {
                                        U.playYes();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return f.active - 1;
                                                case 'nextClick':
                                                    return f.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        (l.getTableRecords(e, (a - 1) * e), r({ type: 'page' }));
                                    },
                                    [f.active, l, e, r],
                                );
                            return s().createElement(
                                'div',
                                { className: F()(Rr, !f.hasPagination && yr, n) },
                                s().createElement(
                                    'div',
                                    { className: xr },
                                    s().createElement(Cr, { limit: e, api: _, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                s().createElement(Ht, { state: A, onClick: w, height: 44 }),
                                f.hasPagination &&
                                    s().createElement(Sr, {
                                        pagesAmount: f.amount,
                                        activePage: f.active,
                                        className: Tr,
                                        onPageClick: k,
                                        onControlEvent: S,
                                    }),
                            );
                        },
                    ),
                    Lr = R.views.lobby.comp7.tooltips,
                    Ir = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const Or = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            r = e.from,
                            n = e.to,
                            u = e.topPercentage,
                            o = e.children,
                            i = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Ir);
                        const c = (({ rank: e, topPercentage: t, from: a, to: r, divisions: n = '' }) => {
                            switch (e) {
                                case fa.Sixth:
                                    return { contentId: Lr.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case fa.Fifth:
                                    return { contentId: Lr.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: Lr.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: n, from: a, to: r },
                                    };
                            }
                        })({ rank: t, divisions: a, from: r, to: n, topPercentage: u });
                        return s().createElement($e, Mr({}, c, l), s().createElement('div', { className: i }, o));
                    },
                    Hr = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_c4',
                        line: 'RankTabs_line_0e',
                        line__toRight: 'RankTabs_line__toRight_43',
                        line__toLeft: 'RankTabs_line__toLeft_cd',
                        ranksContainer: 'RankTabs_ranksContainer_86',
                        dividersDot: 'RankTabs_dividersDot_b9',
                        rank: 'RankTabs_rank_6f',
                        rankEmblem: 'RankTabs_rankEmblem_d6',
                        rank__disabled: 'RankTabs_rank__disabled_55',
                        label: 'RankTabs_label_cc',
                        rank__active: 'RankTabs_rank__active_38',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_c1',
                        fadeIn: 'RankTabs_fadeIn_42',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_0c',
                        fadeInHalf: 'RankTabs_fadeInHalf_ca',
                        fadeOut: 'RankTabs_fadeOut_3e',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_d0',
                        slideUp: 'RankTabs_slideUp_d1',
                        scale: 'RankTabs_scale_a5',
                        raysAppearance: 'RankTabs_raysAppearance_39',
                        rotate: 'RankTabs_rotate_b0',
                        'reverse-rotate': 'RankTabs_reverse-rotate_85',
                        glowAppearance: 'RankTabs_glowAppearance_c7',
                        highlightAppearance: 'RankTabs_highlightAppearance_67',
                        blink: 'RankTabs_blink_8a',
                        slideUpIn: 'RankTabs_slideUpIn_c8',
                    };
                let Wr;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(Wr || (Wr = {}));
                const Ur = ({ tabs: e, className: t, onTabClick: a }) => {
                        const r = (e) => () => {
                            null == a || a(e);
                        };
                        return s().createElement(
                            'div',
                            { className: F()(Hr.base, t) },
                            s().createElement('div', { className: Hr.dividersDot }),
                            s().createElement('div', { className: F()(Hr.line, Hr.line__toRight) }),
                            s().createElement(
                                'div',
                                { className: Hr.ranksContainer },
                                e.map(({ rank: e, state: t, args: a = {} }) => {
                                    const n = t !== Wr.Disabled;
                                    return s().createElement(
                                        'div',
                                        { className: F()(Hr.rank, Hr[`rank__${t}`]), key: e },
                                        s().createElement(
                                            Or,
                                            {
                                                rank: e,
                                                from: null == a ? void 0 : a.from,
                                                topPercentage: null == a ? void 0 : a.topPercentage,
                                                onClick: n ? r(e) : void 0,
                                                onMouseEnter: n ? U.playHighlight : void 0,
                                            },
                                            s().createElement('div', { className: Hr.rankTabHighlight }),
                                            s().createElement(wa, { rank: e, size: Ba.x64, className: Hr.rankEmblem }),
                                        ),
                                        t !== Wr.Disabled && s().createElement('div', { className: Hr.label }, ya(e)),
                                    );
                                }),
                            ),
                            s().createElement('div', { className: F()(Hr.line, Hr.line__toLeft) }),
                        );
                    },
                    $r = 'HasRecordsStateContainer_base_ee',
                    zr = 'HasRecordsStateContainer_content_b4',
                    Gr = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: r }) =>
                        (e === Ct.Sixth && -1 === t) || 0 === r ? Wr.Disabled : e === a ? Wr.Active : Wr.Inactive,
                    jr = [Ct.Fifth, Ct.Sixth],
                    qr = (0, q.Pi)(({ className: e }) => {
                        const t = _t(),
                            a = t.model,
                            r = t.controls,
                            n = a.root.get(),
                            o = n.lastBestUserPosition,
                            i = n.recordsCount,
                            l = n.from,
                            c = n.topPercentage,
                            m = a.computes.hasLastBestUserPosition(),
                            d = a.computes.rowsDividerPosition(),
                            _ = (0, u.useState)(a.computes.firstItemRank()),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useState)(),
                            b = p[0],
                            A = p[1],
                            f = jr.map((e) => ({
                                rank: e,
                                state: Gr({ rank: e, lastBestUserPosition: o, currentRankTab: E, recordsCount: i }),
                                args: { from: l, topPercentage: c },
                            })),
                            h = (0, u.useCallback)(
                                (e) => {
                                    const t = e === Ct.Fifth && m ? d - (d % 50) : 0;
                                    (U.playClick(), r.getTableRecords(50, t), A({ type: 'rank', rank: e }));
                                },
                                [r, d, m, 50],
                            );
                        return s().createElement(
                            'div',
                            { className: F()($r, e) },
                            s().createElement(Ur, { tabs: f, onTabClick: h }),
                            s().createElement(Nr, {
                                limit: 50,
                                positionToScroll: b,
                                onCurrentRankTabChange: g,
                                onPositionToScrollChange: A,
                                className: zr,
                            }),
                        );
                    }),
                    Vr = 'FormatText_base_d0',
                    Xr = ({ binding: e, text: t = '', classMix: a, alignment: r = oa.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  u.Fragment,
                                  null,
                                  t.split('\n').map((t, n) =>
                                      s().createElement(
                                          'div',
                                          { className: F()(Vr, a), key: `${t}-${n}` },
                                          ((e, t, a) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (a && e in a ? a[e] : ga(e, t))))(t, r, e).map((e, t) =>
                                              s().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Qr = {
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
                    Yr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Kr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Zr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Jr = (0, u.memo)(({ text: e, binding: t, classMix: a }) => {
                        const r = (0, u.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, u.useMemo)(() => t || {}, [t]);
                        let o = Yr.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const a = o[0],
                                u = Kr.exec(a),
                                c = Zr.exec(a),
                                m = o[1];
                            if (u && c) {
                                const e = u[0],
                                    o = e + l++ + e;
                                ((i = i.replace(a, `%(${o})`)),
                                    (n[o] = Qr[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Qr[e] },
                                              s().createElement(Xr, { text: m, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(Xr, { text: m, binding: t }),
                                          )));
                            }
                            o = Yr.exec(e);
                        }
                        return s().createElement(Xr, { text: i, classMix: a, binding: n });
                    }),
                    en = 'NoRecordsState_base_9b',
                    tn = 'NoRecordsState_imageContainer_13',
                    an = 'NoRecordsState_image_fe',
                    rn = 'NoRecordsState_title_f4',
                    nn = 'NoRecordsState_subtitle_5b',
                    un = R.strings.comp7.leaderboard.noRecords,
                    sn = (0, q.Pi)(({ className: e }) => {
                        const t = _t().model.root.get().from;
                        return s().createElement(
                            'div',
                            { className: F()(en, e) },
                            s().createElement('div', { className: tn }, s().createElement('div', { className: an })),
                            s().createElement('div', { className: rn }, un.title()),
                            s().createElement(Jr, {
                                text: un.subtitle(),
                                binding: { pointsCount: s().createElement(Nt, { value: t }) },
                                classMix: nn,
                            }),
                        );
                    });
                let on;
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
                })(on || (on = {}));
                const ln = 60,
                    cn = 3600,
                    mn = 86400;
                Date.now();
                const dn = (0, u.memo)(({ datetime: e, format: t = on.SHORT_DATE, localize: a = !0 }) =>
                        ((e, t, a) => {
                            switch (t) {
                                case on.SHORT_DATE:
                                    return a
                                        ? X.Z5.getDateFormat(e, X.kH.SHORT_FORMAT)
                                        : X.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case on.SHORT_TIME:
                                    return a
                                        ? X.Z5.getTimeFormat(e, X.lf.SHORT_FORMAT)
                                        : X.cy.getTimeFormat('%I:%M %p', e, !0);
                                case on.SHORT_DATE_TIME:
                                    return a
                                        ? `${X.Z5.getDateFormat(e, X.kH.SHORT_FORMAT)}, ${X.Z5.getTimeFormat(e, X.lf.SHORT_FORMAT)}`
                                        : X.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case on.FULL_DATE:
                                    return a
                                        ? X.Z5.getDateFormat(e, X.kH.LONG_FORMAT)
                                        : X.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case on.FULL_DATE_TIME:
                                    return a
                                        ? `${X.Z5.getDateFormat(e, X.kH.LONG_FORMAT)}, ${X.Z5.getTimeFormat(e, X.lf.SHORT_FORMAT)}`
                                        : X.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case on.MONTH:
                                    return X.cy.getTimeFormat('%B', e, !0);
                                case on.MONTH_DATE:
                                    return X.cy.getTimeFormat('%B %e', e, !0);
                                case on.DATE_MONTH:
                                    return X.cy.getTimeFormat('%e %B', e, !0);
                                case on.MONTH_YEAR:
                                    return X.cy.getTimeFormat('%B %Y', e, !0);
                                case on.WEEK_DAY:
                                    return X.cy.getTimeFormat('%A', e, !0);
                                case on.WEEK_DAY_TIME:
                                    return a
                                        ? `${X.cy.getTimeFormat('%A', e, !0)} ${X.Z5.getTimeFormat(e, X.lf.SHORT_FORMAT)}`
                                        : X.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case on.YEAR:
                                    return X.cy.getTimeFormat('%Y', e, !0);
                                case on.DATE_YEAR:
                                    return X.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, t, a),
                    ),
                    _n = la(R.strings.comp7.lastUpdateNote.lastBestUserPoints.description(), { count: 15 }),
                    En = 'LastUpdateNote_base_7f',
                    gn = 'LastUpdateNote_infoIcon_5c',
                    pn = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function bn() {
                    return (
                        (bn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        bn.apply(this, arguments)
                    );
                }
                const An = R.strings.comp7.lastUpdateNote,
                    fn = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            r = e.classNames,
                            n = e.dateTimeFormat,
                            u = void 0 === n ? on.SHORT_TIME : n,
                            o = e.contentId,
                            i = void 0 === o ? R.views.lobby.comp7.tooltips.LastUpdateTooltip('resId') : o,
                            l = e.tooltipDescription,
                            c = void 0 === l ? _n : l,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, pn);
                        return s().createElement(
                            'div',
                            { className: F()(En, a) },
                            s().createElement(Xr, {
                                text: An.info(),
                                binding: { date: s().createElement(dn, { datetime: t, format: u }) },
                            }),
                            s().createElement(
                                $e,
                                bn({ ignoreShowDelay: !0, contentId: i, args: { description: c } }, m),
                                s().createElement('div', { className: F()(gn, null == r ? void 0 : r.icon) }),
                            ),
                        );
                    },
                    hn = (e, t) => {
                        let a;
                        const r = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            ('function' == typeof a && a(), clearTimeout(r));
                        };
                    };
                const vn = ['children'];
                function Fn() {
                    return (
                        (Fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Fn.apply(this, arguments)
                    );
                }
                const Cn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, vn);
                        return s().createElement(
                            $e,
                            Fn(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Dn = (e) => {
                        const t = Math.floor(e);
                        return {
                            totalSecondsLeft: t,
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t / 60) % 60,
                            hours: Math.floor((t / 3600) % 24),
                            totalDays: Math.floor(t / 86400),
                        };
                    },
                    Bn = 'ActiveSeasonState_base_55',
                    wn = 'ActiveSeasonState_calendarIcon_df',
                    kn = 'ActiveSeasonState_divider_5b',
                    Sn = R.strings.comp7.season,
                    Rn = (e, t) => ({
                        startDate: s().createElement(dn, { datetime: e, format: on.SHORT_DATE }),
                        endDate: s().createElement(dn, { datetime: t, format: on.SHORT_DATE }),
                    }),
                    yn = (e, t, a) => {
                        const r = t - a,
                            n = ((e, t) => Dn(e - t))(t, a);
                        return r >= 604800
                            ? s().createElement(Xr, { text: Sn.range(), binding: Rn(e, t) })
                            : r >= mn
                              ? s().createElement(Xr, { text: Sn.daysLeft(), binding: n })
                              : r >= cn
                                ? s().createElement(Xr, { text: Sn.hoursLeft(), binding: n })
                                : r >= ln
                                  ? s().createElement(Xr, { text: Sn.minutesLeft(), binding: n })
                                  : r >= 1
                                    ? s().createElement(Xr, { text: Sn.secondsLeft(), binding: n })
                                    : void 0;
                    },
                    xn = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        tooltipId: r = '',
                        hasSeasonName: n = !0,
                    }) =>
                        s().createElement(
                            Cn,
                            { args: { tooltipId: r }, isEnabled: Boolean(r) },
                            s().createElement(
                                'div',
                                { className: Bn },
                                s().createElement('div', { className: wn }),
                                n &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        Sn.name(),
                                        s().createElement('div', { className: kn }),
                                    ),
                                yn(e, t, a),
                            ),
                        ),
                    Tn = 'ScheduleSubheading_base_f7',
                    Pn = (0, q.Pi)(({ className: e, hasSeasonName: t = !0 }) => {
                        const a = ce(),
                            r = a.model,
                            n = a.controls,
                            o = r.season.startTimestamp.get(),
                            i = r.season.endTimestamp.get(),
                            l = r.season.serverTimestamp.get();
                        return (
                            (function (e, t, a) {
                                (0, u.useEffect)(() => {
                                    if (!(e >= t))
                                        return hn(() => {
                                            a();
                                        }, 950);
                                }, [t, a, e]);
                            })(l, i, n.pollServerTime),
                            s().createElement(
                                'div',
                                { className: F()(Tn, e) },
                                l < i
                                    ? s().createElement(xn, {
                                          startTimestamp: o,
                                          endTimestamp: i,
                                          currentTimestamp: l,
                                          tooltipId: r.root.get().tooltipId,
                                          hasSeasonName: t,
                                      })
                                    : R.strings.comp7.season.over(),
                            )
                        );
                    }),
                    Nn = 'SubheadingContainer_base_a6',
                    Ln = 'SubheadingContainer_updateInfo_9a',
                    In = 'SubheadingContainer_updateInfoText_40',
                    Mn = (0, q.Pi)(({ className: e }) => {
                        const t = _t().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            r = t.computes.hasUpdateInfo(),
                            n = la(R.strings.comp7.lastUpdateNote.ratingPositions.description(), { count: 15 });
                        return s().createElement(
                            'div',
                            { className: F()(Nn, e) },
                            s().createElement(Pn, null),
                            r &&
                                s().createElement(
                                    'div',
                                    { className: Ln },
                                    s().createElement(fn, { timestamp: a, className: In, tooltipDescription: n }),
                                ),
                        );
                    }),
                    On = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_4a',
                        animationContainer: 'LeaderboardPage_animationContainer_94',
                        subHeading: 'LeaderboardPage_subHeading_ae',
                        content: 'LeaderboardPage_content_46',
                        base__loading: 'LeaderboardPage_base__loading_12',
                        hasRecords: 'LeaderboardPage_hasRecords_9f',
                        error: 'LeaderboardPage_error_7d',
                        noRecords: 'LeaderboardPage_noRecords_6b',
                        spinner: 'LeaderboardPage_spinner_67',
                        fadeIn: 'LeaderboardPage_fadeIn_46',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_98',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_30',
                        fadeOut: 'LeaderboardPage_fadeOut_e8',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_07',
                        slideUp: 'LeaderboardPage_slideUp_9c',
                        scale: 'LeaderboardPage_scale_5d',
                        raysAppearance: 'LeaderboardPage_raysAppearance_c3',
                        rotate: 'LeaderboardPage_rotate_db',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_1d',
                        glowAppearance: 'LeaderboardPage_glowAppearance_4f',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_23',
                        blink: 'LeaderboardPage_blink_7e',
                        slideUpIn: 'LeaderboardPage_slideUpIn_37',
                    },
                    Hn = { [at.Initial]: 'initial', [at.Success]: 'success', [at.Error]: 'error' },
                    Wn = (0, q.Pi)(() => {
                        const e = _t().model,
                            t = e.root.get(),
                            a = t.state,
                            r = t.isLoading,
                            n = e.computes.hasRecords(),
                            u = (0, xe.useSpring)(_e);
                        return s().createElement(
                            'div',
                            { className: F()(On.base, On[`base__${Hn[a]}`], r && On.base__loading) },
                            s().createElement(nt, { className: K }, R.strings.comp7.page.heading.leaderboard()),
                            s().createElement(Mn, { className: On.subHeading }),
                            s().createElement(
                                xe.animated.div,
                                { className: On.animationContainer, style: u },
                                s().createElement(
                                    'div',
                                    { className: On.content },
                                    (() => {
                                        switch (a) {
                                            case at.Initial:
                                                return null;
                                            case at.Success:
                                                return n
                                                    ? s().createElement(qr, { className: On.hasRecords })
                                                    : s().createElement(sn, { className: On.noRecords });
                                            case at.Error:
                                                return s().createElement(Ft, { className: On.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                r &&
                                    s().createElement(tt, {
                                        message: R.strings.comp7.waitingSpinner.message(),
                                        className: On.spinner,
                                    }),
                            ),
                        );
                    }),
                    Un = { context: 'model.leaderboardModel' },
                    $n = (e) => ve(e, (e) => Aa(e.name)).join(R.strings.comp7.listSeparator());
                let zn, Gn;
                (!(function (e) {
                    ((e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future'));
                })(zn || (zn = {})),
                    (function (e) {
                        ((e[(e.Page = 0)] = 'Page'),
                            (e[(e.Maps = 1)] = 'Maps'),
                            (e[(e.SeasonVehicles = 2)] = 'SeasonVehicles'));
                    })(Gn || (Gn = {})));
                const jn = (e, t, a) => (e > t || a ? zn.Future : e < t ? zn.Previous : zn.Current),
                    qn = [fa.Fifth, fa.Sixth],
                    Vn = oe()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: re.LO.box(!1),
                                    isParallaxPreloaded: re.LO.box(!1),
                                },
                                a = e.array('items'),
                                r = e.array('qualificationModel.battles'),
                                n = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: ct },
                                ),
                                u = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return ve(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: ae },
                                ),
                                s = (0, Ee.Om)(
                                    (e) => {
                                        const t = u(e);
                                        return {
                                            list: $n(t),
                                            count: t.length,
                                            currentDivisionIndex: De(t, (e) => e.state === sa.Current),
                                        };
                                    },
                                    { equals: ct },
                                ),
                                o = (0, Ee.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        r = Ae(a.get(), e);
                                    if (!r) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return r.hasRankInactivity;
                                }),
                                i = (0, Ee.Om)(
                                    (e, a) => {
                                        var r;
                                        const s = jn(e, t.root.get().currentItemIndex, a);
                                        return {
                                            state: s,
                                            division:
                                                null == (r = Ce(u(e), (e) => e.state === sa.Current)) ? void 0 : r.name,
                                            hasInfo: s === zn.Current && qn.includes(n(e).rank),
                                        };
                                    },
                                    { equals: ct },
                                ),
                                l = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(r.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: ae },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: n,
                                    qualificationBattle: l,
                                    itemsLength: (0, Ee.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, Ee.Om)(() => r.get().length),
                                    rankSettings: i,
                                    hasCurrentItemRankInactivity: o,
                                    divisions: u,
                                    divisionsConfig: s,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, re.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, re.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    Xn = Vn[0],
                    Qn = Vn[1],
                    Yn = 'RatingScore_base_bd',
                    Kn = 'RatingScore_rating_c9',
                    Zn = 'RatingScore_score_33',
                    Jn = 'RatingScore_rankInactivity_17',
                    eu = 'RatingScore_rankInactivityCount_31',
                    tu = 'RatingScore_rankInactivityIconContainer_32',
                    au = 'RatingScore_rankInactivityIcon_05',
                    ru = 'RatingScore_title_e4',
                    nu = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: r }) =>
                        s().createElement(
                            'div',
                            { className: F()(Yn, r) },
                            s().createElement(
                                'div',
                                { className: Kn },
                                s().createElement('div', { className: Zn }, e),
                                t &&
                                    s().createElement(
                                        $e,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Jn },
                                            s().createElement('div', { className: eu }, a),
                                            s().createElement(
                                                'div',
                                                { className: tu },
                                                s().createElement('div', { className: au }),
                                            ),
                                        ),
                                    ),
                            ),
                            s().createElement('div', { className: ru }, R.strings.comp7.ratingScore.title()),
                        ),
                    uu = 'ItemFooter_base_0f',
                    su = 'ItemFooter_background_bf',
                    ou = 'ItemFooter_divider_bb',
                    iu = 'ItemFooter_light_79',
                    lu = 'ItemFooter_footer_e7',
                    cu = 'ItemFooter_rankItemFooter_e6',
                    mu = (0, q.Pi)(({ className: e }) => {
                        const t = Qn().model,
                            a = t.root.get(),
                            r = a.currentScore,
                            n = a.rankInactivityCount;
                        return s().createElement(
                            'div',
                            { className: F()(uu, e) },
                            s().createElement('div', { className: su }),
                            s().createElement('div', { className: ou }),
                            s().createElement('div', { className: iu }),
                            s().createElement(
                                'div',
                                { className: lu },
                                s().createElement(nu, {
                                    currentScore: r,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: n,
                                    className: cu,
                                }),
                            ),
                        );
                    }),
                    du = [
                        {
                            path: R.images.comp7.gui.maps.icons.comp7.qualificationParallax.c_6(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                    ],
                    _u = 'Parallax_base_c9',
                    Eu = 'Parallax_layer_15',
                    gu = (0, q.Pi)(({ className: e }) => {
                        const t = (0, u.createRef)();
                        return s().createElement(
                            'div',
                            { ref: t, className: F()(_u, e) },
                            s().createElement('div', { className: Eu }),
                        );
                    }),
                    pu = 'ParallaxContainer_base_17',
                    bu = du.map((e) => e.path),
                    Au = (0, q.Pi)(({ className: e }) => {
                        const t = Qn(),
                            a = t.model,
                            r = t.controls,
                            n = a.isParallaxPreloaded.get(),
                            o = (0, xe.useSpring)({ to: { opacity: n ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, u.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, u.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                ((r.src = e),
                                                    r.addEventListener('load', () => {
                                                        (a++, n());
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        (t++, n());
                                                    }));
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(bu) && r.setIsParallaxPreloaded(!0),
                            s().createElement(
                                xe.animated.div,
                                { className: F()(pu, e), style: o },
                                s().createElement(gu, null),
                            )
                        );
                    }),
                    fu = { type: 'idle' };
                const hu = (e, t = 100) => ((viewEnv.pxToRem(i.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    vu = Tt({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? yt.Next : yt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Fu = 'HorizontalBar_base_49',
                    Cu = 'HorizontalBar_base__nonActive_82',
                    Du = 'HorizontalBar_leftButton_5f',
                    Bu = 'HorizontalBar_rightButton_03',
                    wu = 'HorizontalBar_track_0d',
                    ku = 'HorizontalBar_thumb_fd',
                    Su = 'HorizontalBar_rail_32',
                    Ru = 'disable',
                    yu = { pending: !1, offset: 0 },
                    xu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Tu = () => {},
                    Pu = (e, t) => Math.max(20, e.offsetWidth * t),
                    Nu = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = xu, onDrag: r = Tu }) => {
                        const n = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, u.useState)(yu),
                            _ = d[0],
                            E = d[1],
                            g = (0, u.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            p = () => {
                                const t = l.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    m = Dt(0, 1, u / (n - r)),
                                    d = (t.offsetWidth - Pu(t, s)) * m;
                                ((a.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Ru),
                                                    void i.current.classList.remove(Ru)
                                                );
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Ru),
                                                    void i.current.classList.add(Ru)
                                                );
                                            var t, a;
                                            (o.current.classList.remove(Ru), i.current.classList.remove(Ru));
                                        }
                                    })(d));
                            },
                            b = St(() => {
                                ((() => {
                                    const t = c.current,
                                        a = l.current,
                                        r = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && r && a)) return;
                                    const s = Math.min(1, r / u);
                                    ((t.style.width = `${Pu(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(Cu) : n.current.classList.remove(Cu)));
                                })(),
                                    p());
                            });
                        ((0, u.useEffect)(() => ye(b)),
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let a = Tu;
                                        const r = () => {
                                            (a(), (a = ye(b)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var a;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const u = l.current,
                                            s = c.current;
                                        if (!n || !u || !s) return;
                                        const o = t.screenX - _.offset - u.getBoundingClientRect().x,
                                            i = (o / u.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t), g(yu));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, g]));
                        const A = Wt((t) => e.applyStepTo(t), m, [e]),
                            f = A[0],
                            h = A[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ru) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(Fu, t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(Du, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ru) || 0 !== e.button || (W('play'), f(yt.Next));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(wu, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if ((W('play'), t.target === r))
                                                g({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = c.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const u = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? yt.Prev : yt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: c, className: F()(ku, t.thumb) }),
                                s().createElement('div', { className: F()(Su, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(Bu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ru) || 0 !== e.button || (W('play'), f(yt.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Lu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Iu = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, u.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: F()(Lu.base, e.base) });
                            }, [r]),
                            d = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(Lu.defaultScroll, a), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Lu.defaultScrollArea, n) },
                                s().createElement(Mu, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(Nu, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Mu = ({ api: e, className: t, classNames: a, children: r, style: n }) => (
                        (0, u.useEffect)(() => ye(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Lu.base, t), style: n },
                            s().createElement(
                                'div',
                                {
                                    className: F()(Lu.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: F()(Lu.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Mu.Bar = Nu),
                    (Mu.Default = Iu),
                    (Mu.SeniorityAwards = ({ api: e, className: t, classNames: a, children: r }) => (
                        (0, u.useEffect)(() => ye(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Lu.base, t) },
                            s().createElement(
                                'div',
                                { className: F()(Lu.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: F()(Lu.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const Ou = 'ProgressionScroll_base_0f',
                    Hu = 'ProgressionScroll_areaWrapper_dc',
                    Wu = 'ProgressionScroll_areaContent_2f',
                    Uu = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: r = 0,
                        children: n,
                        onStick: o,
                        className: l,
                        areaClassNames: c,
                        barClassNames: m,
                        staticContent: d,
                        containerMaxWidth: _,
                    }) => {
                        const E = viewEnv.remToPx(a),
                            g = e.animationScroll,
                            p = e.events,
                            b = e.applyScroll,
                            A = (function (e, t) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    n = e.scrollPosition,
                                    s = e.clampPosition,
                                    o = e.animationScroll,
                                    l = e.events,
                                    c = (0, u.useState)(fu),
                                    m = c[0],
                                    d = c[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = 'dragging' === m.type ? 'move' : 'grab');
                                    }, [a, m.type]),
                                    (0, u.useEffect)(() => {
                                        if ('dragging' !== m.type) return;
                                        const e = i.O.client.events.mouse.move(([e, u]) => {
                                                const i = a.current,
                                                    l = r.current;
                                                if (!i || !l) return;
                                                if ('inside' === u && e.clientX < 0) return;
                                                const c = 'inside' === u ? e.clientX : e.clientX - l.offsetLeft,
                                                    d = m.positionFrom - c,
                                                    _ = m.previousScrollPosition + d;
                                                n.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: s(i, _),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        t && { config: t },
                                                    ),
                                                );
                                            }),
                                            u = i.O.client.events.mouse.up(function () {
                                                d({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), u());
                                        };
                                    }, [o.scrollPosition, s, a, m, n, r, t]),
                                    (0, u.useEffect)(() => {
                                        if ('scrollingToEnd' !== m.type) return;
                                        const e = () => {
                                            d(fu);
                                        };
                                        return (o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [o.scrollPosition, m.type, l]),
                                    (0, u.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            d({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [o.scrollPosition, a]),
                                    m
                                );
                            })(e),
                            f = (0, u.useCallback)(
                                (e) => {
                                    b(t * E, e);
                                },
                                [b, E, t],
                            ),
                            h = (0, u.useCallback)(() => {
                                null == o || o(Math.round(g.scrollPosition.goal / E));
                            }, [o, g.scrollPosition, E]);
                        ((0, u.useEffect)(() => (p.on('rest', h), () => p.off('rest', h)), [p, h]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    f({ immediate: !0, reset: !0 });
                                };
                                return (
                                    p.on('resizeHandled', e),
                                    () => {
                                        p.off('resizeHandled', e);
                                    }
                                );
                            }, [f, p]),
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        'idle' === A.type && g.scrollPosition.idle && f();
                                    }),
                                [g.scrollPosition, A, f],
                            ));
                        const v = (0, u.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && b(t * E);
                            },
                            [b, E, t],
                        );
                        return s().createElement(
                            'div',
                            {
                                className: F()(Ou, l),
                                style: { '--offset': `${r}rem`, maxWidth: _ ? `${_}rem` : '100%' },
                            },
                            s().createElement(
                                Mu,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: F()(Hu, null == c ? void 0 : c.wrapper),
                                        content: F()(Wu, null == c ? void 0 : c.content),
                                    },
                                },
                                n,
                            ),
                            d,
                            s().createElement(Nu, { api: e, onDrag: v, classNames: m }),
                        );
                    },
                    $u = (e, t = 150, a) => {
                        const r = viewEnv.remToPx(e),
                            n = (0, u.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return vu(n);
                    },
                    zu = {
                        '--pageContentWidth': '78vw',
                        base: 'HighlightedRankEmblem_base_e2',
                        highlights: 'HighlightedRankEmblem_highlights_cc',
                        highlights__gold: 'HighlightedRankEmblem_highlights__gold_9f',
                        highlights__silver: 'HighlightedRankEmblem_highlights__silver_f4',
                        highlights__hidden: 'HighlightedRankEmblem_highlights__hidden_10',
                        highlight: 'HighlightedRankEmblem_highlight_72',
                        highlightAppearance: 'HighlightedRankEmblem_highlightAppearance_60',
                        rotate: 'HighlightedRankEmblem_rotate_0f',
                        highlight__second: 'HighlightedRankEmblem_highlight__second_91',
                        base__static: 'HighlightedRankEmblem_base__static_87',
                        rankEmblem: 'HighlightedRankEmblem_rankEmblem_29',
                        fadeIn: 'HighlightedRankEmblem_fadeIn_3a',
                        fadeInThreeQuarters: 'HighlightedRankEmblem_fadeInThreeQuarters_a4',
                        fadeInHalf: 'HighlightedRankEmblem_fadeInHalf_6e',
                        fadeOut: 'HighlightedRankEmblem_fadeOut_48',
                        fadeInWithScale: 'HighlightedRankEmblem_fadeInWithScale_a8',
                        slideUp: 'HighlightedRankEmblem_slideUp_82',
                        scale: 'HighlightedRankEmblem_scale_ec',
                        raysAppearance: 'HighlightedRankEmblem_raysAppearance_a6',
                        'reverse-rotate': 'HighlightedRankEmblem_reverse-rotate_e8',
                        glowAppearance: 'HighlightedRankEmblem_glowAppearance_2a',
                        blink: 'HighlightedRankEmblem_blink_ce',
                        slideUpIn: 'HighlightedRankEmblem_slideUpIn_80',
                    };
                let Gu, ju;
                (!(function (e) {
                    ((e.Silver = 'silver'), (e.Gold = 'gold'), (e.Hidden = 'hidden'));
                })(Gu || (Gu = {})),
                    (function (e) {
                        ((e.Dynamic = 'dynamic'), (e.Static = 'static'));
                    })(ju || (ju = {})));
                const qu = {
                        [Ba.x48]: 64,
                        [Ba.x64]: 80,
                        [Ba.x110]: 140,
                        [Ba.x200]: 260,
                        [Ba.x260]: 340,
                        [Ba.x320]: 400,
                        [Ba.x420]: 550,
                    },
                    Vu = ({ size: e, rank: t, division: a, type: r = ju.Dynamic, state: n, classNames: u }) => {
                        const o = ((e) => ({
                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.comp7.ranks.$num(e).$dyn('highlight')})`,
                        }))(e);
                        return s().createElement(
                            'div',
                            { className: F()(zu.base, zu[`base__${r}`]) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        zu.highlights,
                                        zu[`highlights__${n}`],
                                        null == u ? void 0 : u.highlights,
                                    ),
                                    style: { '--highlightsSize': `${qu[e]}rem` },
                                },
                                s().createElement('div', {
                                    className: F()(zu.highlight, zu.highlight__first, null == u ? void 0 : u.highlight),
                                    style: o,
                                }),
                                r === ju.Dynamic &&
                                    s().createElement('div', {
                                        className: F()(
                                            zu.highlight,
                                            zu.highlight__second,
                                            null == u ? void 0 : u.highlight,
                                        ),
                                        style: o,
                                    }),
                            ),
                            s().createElement(wa, {
                                size: e,
                                rank: t,
                                division: a,
                                className: F()(zu.rankEmblem, null == u ? void 0 : u.rankEmblem),
                            }),
                        );
                    },
                    Xu = [fa.Fifth, fa.Sixth],
                    Qu = (e, t, a) => (e !== zn.Current || a ? Gu.Hidden : Xu.includes(t) ? Gu.Gold : Gu.Silver),
                    Yu = 'RankInfo_base_21',
                    Ku = 'RankInfo_highlight_1f',
                    Zu = 'RankInfo_formattedText_26',
                    Ju = ({ rank: e, from: t, topPercentage: a, className: r }) =>
                        s().createElement(
                            'div',
                            { className: F()(Yu, r) },
                            s().createElement('div', { className: Ku }),
                            s().createElement(Jr, {
                                text: String(R.strings.comp7.rankInfo.current.$dyn(va(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: Zu,
                            }),
                        ),
                    es = 'RankItemDivider_base_c4',
                    ts = () => s().createElement('div', { className: es }),
                    as = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let rs, ns;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(rs || (rs = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ns || (ns = {})));
                const us = ({ size: e = rs.Default, classMix: t }) =>
                        s().createElement('div', { className: F()(as.background, as[`background__${e}`], t) }),
                    ss = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    os = ({ size: e }) => {
                        const t = F()(ss.base, ss[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    is = {
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
                    ls = (0, u.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: r, isComplete: n, withoutBounce: u }) => {
                            const o = F()(
                                    is.base,
                                    is[`base__${e}`],
                                    a && is.base__disabled,
                                    n && is.base__finished,
                                    u && is.base__withoutBounce,
                                ),
                                i = !a && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: t },
                                s().createElement('div', { className: is.pattern }),
                                s().createElement('div', { className: is.gradient }),
                                i && s().createElement(os, { size: e }),
                            );
                        },
                    ),
                    cs = ({ size: e, value: t, lineRef: a, disabled: r, onComplete: n }) => {
                        const o = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, u.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(ls, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: a })
                        );
                    };
                let ms, ds;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(ms || (ms = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ds || (ds = {})));
                const _s = 'ProgressBarDeltaSimple_base_6c',
                    Es = 'ProgressBarDeltaSimple_delta_99',
                    gs = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                m = (0, u.useState)(ds.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === ds.In,
                                g = d === ds.End,
                                p = d === ds.Idle,
                                b = (0, u.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, u.useEffect)(() => {
                                if (p && !a) {
                                    return hn(() => {
                                        b(ds.In);
                                    }, t);
                                }
                            }, [b, a, p, t]),
                                (0, u.useEffect)(() => {
                                    if (E) {
                                        return hn(() => {
                                            (i && i(), b(ds.End));
                                        }, e + t);
                                    }
                                }, [b, E, i, t, e]));
                            const A = (0, u.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, u.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                h = (0, u.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: _s, style: h },
                                      s().createElement(
                                          'div',
                                          { style: p ? A : f, className: Es },
                                          s().createElement(os, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    ps = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, u.useMemo)(
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
                                s().createElement(ls, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                a >= 0 &&
                                    s().createElement(gs, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    bs = 'ProgressBarDeltaGrow_base_7e',
                    As = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    fs = 'ProgressBarDeltaGrow_glow_68',
                    hs = (e) => (e ? { left: 0 } : { right: 0 }),
                    vs = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Fs = (e) => ({ transitionDuration: `${e}ms` }),
                    Cs = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < r,
                                d = (0, u.useState)(ms.Idle),
                                _ = d[0],
                                E = d[1],
                                g = _ === ms.End,
                                p = _ === ms.Idle,
                                b = _ === ms.Grow,
                                A = _ === ms.Shrink,
                                f = (0, u.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                h = (0, u.useCallback)(
                                    (e, t) =>
                                        hn(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, u.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? h(ms.Grow, t)
                                        : b
                                          ? h(ms.Shrink, e)
                                          : A
                                            ? h(ms.End, e)
                                            : void (g && i && i());
                            }, [h, a, g, b, p, A, i, t, e]);
                            const v = (0, u.useMemo)(() => Object.assign({ width: '100%' }, Fs(e), hs(m)), [m, e]),
                                C = (0, u.useMemo)(() => Object.assign({ width: '0%' }, Fs(e), hs(m)), [m, e]),
                                D = (0, u.useMemo)(() => Object.assign({ width: '0%' }, vs(m, r), Fs(e)), [r, m, e]),
                                B = (0, u.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, vs(m, r), Fs(e)),
                                    [r, m, o, e],
                                );
                            if (g) return null;
                            const w = F()(bs, c, m && 0 === o && As);
                            return s().createElement(
                                'div',
                                { style: p ? D : B, className: w },
                                s().createElement(
                                    'div',
                                    { style: A ? C : v, className: fs },
                                    s().createElement(os, { size: n }),
                                ),
                            );
                        },
                    ),
                    Ds = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < a,
                                d = (0, u.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, u.useCallback)(
                                    (e) => {
                                        (e === ms.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, u.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                b = (0, u.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(ls, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? b : p,
                                }),
                                a >= 0 &&
                                    s().createElement(Cs, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Bs = ['onComplete', 'onEndAnimation'];
                function ws() {
                    return (
                        (ws =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ws.apply(this, arguments)
                    );
                }
                const ks = (0, u.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Bs);
                        const n = (0, u.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, u.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && t && t(), a && a());
                            }, [o, t, a, r.to]);
                        switch (r.animationSettings.type) {
                            case ns.Simple:
                                return s().createElement(ps, ws({}, r, { onEndAnimation: l, isComplete: o }));
                            case ns.Growing:
                                return s().createElement(Ds, ws({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Ss = ['onEndAnimation'];
                function Rs() {
                    return (
                        (Rs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Rs.apply(this, arguments)
                    );
                }
                const ys = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                u = Object.keys(e);
                            for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, Ss);
                    const r = (0, u.useRef)({}),
                        n = (0, u.useCallback)(() => {
                            ((r.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof r.current.from ? r.current.from : a.from;
                    return (
                        (r.current.from = o),
                        s().createElement(ks, Rs({}, a, { onEndAnimation: n, key: `${o}-${a.to}`, from: o }))
                    );
                });
                function xs() {
                    return (
                        (xs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        xs.apply(this, arguments)
                    );
                }
                const Ts = (0, u.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: u,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === t)
                                return s().createElement(cs, {
                                    key: `${n}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: r,
                                animationSettings: u,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return u.withStack
                                ? s().createElement(ys, c)
                                : s().createElement(ks, xs({ key: `${n}-${t}` }, c));
                        },
                    ),
                    Ps = (e) => ({
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
                    Ns = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (Dt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    Ls = {
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
                    Is = {
                        freezed: !1,
                        withStack: !1,
                        type: ns.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ms = (0, u.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Ls,
                            size: a = rs.Default,
                            animationSettings: r = Is,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: d,
                            onEndAnimation: _,
                            onComplete: E,
                        }) => {
                            const g = ((e, t, a) =>
                                (0, u.useMemo)(() => {
                                    const r = (Dt(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: Ns(r, t, a) };
                                }, [a, t, e]))(l, e, c);
                            return s().createElement(
                                'div',
                                { className: F()(as.base, as[`base__${a}`]), style: Ps(t) },
                                !o && s().createElement(us, { size: a, classMix: i }),
                                s().createElement(Ts, {
                                    size: a,
                                    lineRef: m,
                                    disabled: n,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: _,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Os = ({ rank: e, division: t, from: a, to: r, className: n, children: u }) =>
                        s().createElement(
                            $e,
                            {
                                contentId: R.views.lobby.comp7.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: r },
                            },
                            s().createElement('div', { className: n }, u),
                        ),
                    Hs = 'RankProgressDivisions_base_54',
                    Ws = 'RankProgressDivisions_divisionItem_77',
                    Us = 'RankProgressDivisions_divisionItem__current_84',
                    $s = 'RankProgressDivisions_highlightContainer_53',
                    zs = 'RankProgressDivisions_radialBack_cc',
                    Gs = 'RankProgressDivisions_mainBack_38',
                    js = 'RankProgressDivisions_bottomLine_67',
                    qs = 'RankProgressDivisions_bottomLine__first_bd',
                    Vs = 'RankProgressDivisions_bottomLine__second_60',
                    Xs = 'RankProgressDivisions_bottomLine__third_08',
                    Qs = 'RankProgressDivisions_divisionText_ea',
                    Ys = 'RankProgressDivisions_note_e1',
                    Ks = (0, q.Pi)(({ itemIndex: e, rank: t, from: a, step: r }) => {
                        const n = Qn().model.computes.divisions(e);
                        return s().createElement(
                            'div',
                            { className: Hs },
                            ve(n, (e, n) => {
                                const u = e.state === sa.Current;
                                return s().createElement(
                                    Os,
                                    {
                                        key: n,
                                        rank: t,
                                        division: e.name,
                                        from: a + r * n,
                                        to: a + r * (n + 1),
                                        className: F()(Ws, u && Us),
                                    },
                                    u &&
                                        s().createElement(
                                            'div',
                                            { className: $s },
                                            s().createElement('div', { className: zs }),
                                            s().createElement('div', { className: Gs }),
                                            s().createElement('div', { className: F()(js, qs) }),
                                            s().createElement('div', { className: F()(js, Vs) }),
                                            s().createElement('div', { className: F()(js, Xs) }),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: Qs },
                                        u &&
                                            s().createElement(
                                                'div',
                                                { className: Ys },
                                                R.strings.comp7.division.note(),
                                            ),
                                        Aa(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    Zs = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_86',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_78',
                        base__bottom: 'RankProgressPoints_base__bottom_fc',
                        pointLine: 'RankProgressPoints_pointLine_b3',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_6b',
                        pointValue: 'RankProgressPoints_pointValue_af',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c5',
                    };
                let Js;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(Js || (Js = {}));
                const eo = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${Zs['--pointLineWidth']})` } : { left: a };
                    },
                    to = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: r, direction: n = Js.Bottom }) =>
                        s().createElement(
                            'div',
                            { className: F()(Zs.base, Zs[`base__${n}`]) },
                            na(t + 1, (n) => {
                                const u = void 0 !== r && n === r + 1,
                                    o = void 0 === a && (n === r || u);
                                return s().createElement(
                                    'div',
                                    { className: Zs.point, style: eo(n, t), key: n },
                                    s().createElement('div', {
                                        className: F()(Zs.pointLine, o && Zs.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        s().createElement(
                                            'div',
                                            { className: F()(Zs.pointValue, u && Zs.pointValue__next) },
                                            a + e * n,
                                        ),
                                );
                            }),
                        ),
                    ao = {
                        '--pageContentWidth': '78vw',
                        base: 'RankProgress_base_97',
                        base__hidden: 'RankProgress_base__hidden_b9',
                        base__inactive: 'RankProgress_base__inactive_49',
                        base__active: 'RankProgress_base__active_a2',
                        progressWrapper: 'RankProgress_progressWrapper_4e',
                    },
                    ro = {
                        freezed: !0,
                        withStack: !1,
                        type: ns.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    no = (0, q.Pi)(({ rank: e, state: t, itemIndex: a, from: r, to: n, progressState: u }) => {
                        const o = Qn().model,
                            i = o.root.get().currentScore,
                            l = o.computes.divisionsConfig(a),
                            c = n - r,
                            m = ((e, t, a) => Math.round((t - e) / a))(r, n, l.count);
                        return s().createElement(
                            'div',
                            { className: F()(ao.base, ao[`base__${u}`]) },
                            s().createElement(Ks, { itemIndex: a, rank: e, from: r, step: m }),
                            s().createElement(to, {
                                step: m,
                                divisionsCount: l.count,
                                direction: Js.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            s().createElement(
                                'div',
                                { className: ao.progressWrapper },
                                t === zn.Current
                                    ? s().createElement(Ms, { maxValue: c, value: i - r, animationSettings: ro })
                                    : s().createElement(Ms, { maxValue: c, value: i < r ? 0 : c, disabled: i < r }),
                            ),
                            s().createElement(to, {
                                step: m,
                                divisionsCount: l.count,
                                from: r,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    uo = 'RankStatusDescription_base_07',
                    so = ({ text: e, binding: t, className: a }) => {
                        const r = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: s().createElement(Nt, { value: e.pointsCount }) })
                                : e)(t);
                        return s().createElement(Jr, { text: e, binding: r, classMix: F()(uo, a) });
                    },
                    oo = 'AchievedRankStatus_base_70',
                    io = R.strings.comp7.rankItemStatus.previous,
                    lo = ({ rank: e, rankState: t, itemIndex: a, from: r, to: n, progressState: u }) => {
                        switch (e) {
                            case fa.First:
                            case fa.Second:
                            case fa.Third:
                            case fa.Fourth:
                                return s().createElement(no, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: r,
                                    to: n,
                                    progressState: u,
                                });
                            case fa.Fifth:
                                return s().createElement(
                                    'div',
                                    { className: oo },
                                    s().createElement(so, { text: Sa(io.description, e), binding: { fromScore: r } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`),
                                    null
                                );
                        }
                    },
                    co = 'LastUpdate_base_f7',
                    mo = 'LastUpdate_dataUpdate_90',
                    _o = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        s().createElement(
                            'div',
                            { className: co },
                            t
                                ? s().createElement(Xr, {
                                      text: R.strings.comp7.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: mo,
                                  })
                                : s().createElement(fn, { timestamp: e }),
                        ),
                    Eo = (e, t) => e > 0 || t;
                let go;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden'));
                })(go || (go = {}));
                const po = 'CurrentRankStatus_base_d4',
                    bo = R.strings.comp7.rankItemStatus.current,
                    Ao = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: r,
                        to: n,
                        progressState: o,
                        topPercentage: i,
                        pointsCount: l,
                        isLastBestUserPointsValueLoading: c,
                        timestamp: m,
                    }) => {
                        const d = { topPercentage: i, pointsCount: l };
                        return (
                            (0, u.useEffect)(() => {
                                o === go.Active && W('comp_7_progression_rank_active');
                            }, [o]),
                            s().createElement(
                                'div',
                                { className: po },
                                (() => {
                                    switch (e) {
                                        case fa.First:
                                        case fa.Second:
                                        case fa.Third:
                                        case fa.Fourth:
                                            return s().createElement(no, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: r,
                                                to: n,
                                                progressState: o,
                                            });
                                        case fa.Fifth:
                                        case fa.Sixth:
                                            return s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement(so, {
                                                    text: Eo(l, c)
                                                        ? Sa(bo.extendedDescription, e)
                                                        : Sa(bo.description, e),
                                                    binding: d,
                                                }),
                                                s().createElement(_o, {
                                                    timestamp: m,
                                                    isLastBestUserPointsValueLoading: c,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    fo = 'FutureRankStatus_base_c2',
                    ho = 'FutureRankStatus_lock_d0',
                    vo = R.strings.comp7.rankItemStatus.future,
                    Fo = [fa.Sixth],
                    Co = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: r,
                        pointsCount: n,
                        isLastBestUserPointsValueLoading: o,
                        timestamp: i,
                    }) => {
                        const l = (0, u.useMemo)(
                                () =>
                                    e === fa.Sixth
                                        ? { topPercentage: t, pointsCount: n }
                                        : e === fa.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: r },
                                [t, n, a, r, e],
                            ),
                            c = Fo.includes(e) && Eo(n, o);
                        return s().createElement(
                            'div',
                            { className: fo },
                            s().createElement('div', { className: ho }),
                            s().createElement(so, {
                                text: Sa(c ? vo.extendedDescription : vo.description, e),
                                binding: l,
                            }),
                            c && s().createElement(_o, { timestamp: i, isLastBestUserPointsValueLoading: o }),
                        );
                    },
                    Do = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: r,
                        to: n,
                        progressState: u,
                        pointsCount: o,
                        isLastBestUserPointsValueLoading: i,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case zn.Previous:
                                return s().createElement(lo, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: r,
                                    to: n,
                                    progressState: u,
                                });
                            case zn.Current:
                                return s().createElement(Ao, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: r,
                                    to: n,
                                    progressState: u,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: i,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case zn.Future:
                                return s().createElement(Co, {
                                    rank: t,
                                    topPercentage: l,
                                    from: r,
                                    to: n,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: i,
                                    timestamp: c,
                                });
                            default:
                                return (
                                    console.error(`Unreachable code for state '${e}' in RankStatusResolver.`),
                                    null
                                );
                        }
                    };
                let Bo;
                !(function (e) {
                    ((e.Progress = 'progress'), (e.Text = 'text'));
                })(Bo || (Bo = {}));
                const wo = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_60',
                        rankEmblem__future: 'RankItem_rankEmblem__future_08',
                        rankDescription: 'RankItem_rankDescription_32',
                        rankDescription__text: 'RankItem_rankDescription__text_90',
                        rankDescription__progress: 'RankItem_rankDescription__progress_e2',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_6b',
                        rankInfo: 'RankItem_rankInfo_6f',
                        dividerContainer: 'RankItem_dividerContainer_0f',
                        fadeIn: 'RankItem_fadeIn_95',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_f1',
                        fadeInHalf: 'RankItem_fadeInHalf_8a',
                        fadeOut: 'RankItem_fadeOut_56',
                        fadeInWithScale: 'RankItem_fadeInWithScale_68',
                        slideUp: 'RankItem_slideUp_74',
                        scale: 'RankItem_scale_6b',
                        raysAppearance: 'RankItem_raysAppearance_a8',
                        rotate: 'RankItem_rotate_da',
                        'reverse-rotate': 'RankItem_reverse-rotate_3e',
                        glowAppearance: 'RankItem_glowAppearance_90',
                        highlightAppearance: 'RankItem_highlightAppearance_5c',
                        blink: 'RankItem_blink_7e',
                        slideUpIn: 'RankItem_slideUpIn_ee',
                    },
                    ko = (0, q.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const r = Qn().model,
                            n = r.root.get(),
                            u = n.topPercentage,
                            o = n.lastBestUserPointsValue,
                            i = n.leaderboardUpdateTimestamp,
                            l = n.isLastBestUserPointsValueLoading,
                            c = r.qualificationModel.isActive.get(),
                            m = S().mediaSize,
                            d = r.computes.item(e),
                            _ = d.rank,
                            E = d.from,
                            g = d.to,
                            p = r.computes.divisionsConfig(e),
                            b = r.computes.rankSettings(e, c),
                            A = b.state,
                            f = b.division,
                            h = b.hasInfo,
                            v = ((e) => {
                                switch (!0) {
                                    case e >= B.ExtraLarge:
                                        return Ba.x420;
                                    case e >= B.Large:
                                        return Ba.x320;
                                    case e >= B.Medium:
                                        return Ba.x260;
                                    default:
                                        return Ba.x200;
                                }
                            })(m),
                            C = Qu(A, _, c),
                            D = ((e, t) => (t ? (e === zn.Current ? go.Active : go.Inactive) : go.Hidden))(A, t),
                            w = ((e, t) => {
                                const a = Ca(t);
                                switch (e) {
                                    case zn.Previous:
                                    case zn.Current:
                                        return a ? Bo.Progress : Bo.Text;
                                    default:
                                        return Bo.Text;
                                }
                            })(A, _);
                        return s().createElement(
                            'div',
                            { className: wo.base },
                            s().createElement(
                                Or,
                                { rank: _, from: E, to: g, topPercentage: u, divisions: p.list },
                                s().createElement(Vu, {
                                    size: v,
                                    rank: _,
                                    division: f,
                                    state: C,
                                    classNames: { rankEmblem: wo[`rankEmblem__${A}`] },
                                }),
                            ),
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        wo.rankDescription,
                                        wo[`rankDescription__${w}`],
                                        t && wo.rankDescription__viewed,
                                    ),
                                },
                                h &&
                                    s().createElement(
                                        'div',
                                        { className: wo.rankInfo },
                                        s().createElement(Ju, { rank: _, from: E, topPercentage: u }),
                                    ),
                                s().createElement(Do, {
                                    rankState: A,
                                    rank: _,
                                    itemIndex: e,
                                    from: E,
                                    to: g,
                                    progressState: D,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: l,
                                    topPercentage: u,
                                    timestamp: i,
                                }),
                            ),
                            a &&
                                s().createElement(
                                    'div',
                                    { className: wo.dividerContainer, style: { '--emblemSize': `${v}rem` } },
                                    s().createElement(ts, null),
                                ),
                        );
                    }),
                    So = 'RankItemContainer_base_b3',
                    Ro = 'RankItemContainer_title_d5',
                    yo = 'RankItemContainer_title__active_f0',
                    xo = (0, q.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: r, hasDivider: n }) => {
                        const u = Qn().model.computes.item(e);
                        return s().createElement(
                            'div',
                            { className: So, style: { '--itemWidth': `${t}rem` }, onMouseDown: r },
                            s().createElement('div', { className: F()(Ro, a && yo) }, ya(u.rank)),
                            s().createElement(ko, { itemIndex: e, isViewed: a, hasDivider: n }),
                        );
                    }),
                    To = 'Progression_base_97',
                    Po = { base: 'Progression_areaContainer_09', wrapper: 'Progression_areaWrapper_5f' },
                    No = { base: 'Progression_bar_4d' },
                    Lo = (0, q.Pi)(({ staticContent: e, className: t }) => {
                        const a = Qn().model,
                            r = a.root.get().currentItemIndex,
                            n = a.computes.itemsLength(),
                            o = ((e) => (e >= B.ExtraLarge ? 640 : e >= B.Large ? 500 : e >= B.Medium ? 440 : 400))(
                                S().mediaSize,
                            ),
                            i = hu(o),
                            l = $u(o),
                            c = (0, u.useState)(r),
                            m = c[0],
                            d = c[1],
                            _ = (0, u.useCallback)(
                                (e) => () => {
                                    (U.playClick(), d(e));
                                },
                                [],
                            );
                        return (
                            (0, u.useLayoutEffect)(() => {
                                l.scrollPosition.start({ scrollPosition: viewEnv.remToPx(r * o), immediate: !0 });
                            }, []),
                            (0, u.useLayoutEffect)(() => {
                                d(r);
                            }, [r]),
                            s().createElement(
                                Uu,
                                {
                                    api: l,
                                    stuckIndex: m,
                                    itemWidth: o,
                                    itemsOffset: i,
                                    staticContent: e,
                                    onStick: d,
                                    className: F()(To, t),
                                    areaClassNames: Po,
                                    barClassNames: No,
                                },
                                na(n, (e) =>
                                    s().createElement(xo, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: m === e,
                                        hasDivider: e < n - 1,
                                        itemWidth: o,
                                        onMouseDown: _(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    Io = R.strings.comp7.qualification,
                    Mo = { hasHtmlContent: !0 },
                    Oo = ({ maxBattlesCount: e, children: t }) =>
                        s().createElement(
                            qe,
                            {
                                header: Io.conditionTooltip.header(),
                                body: la(Io.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Mo,
                            },
                            s().createElement('div', null, t),
                        ),
                    Ho = 'BattlesCounter_base_f1',
                    Wo = 'BattlesCounter_battlesCount_ef',
                    Uo = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        s().createElement(Xr, {
                            text: R.strings.comp7.qualification.counter(),
                            binding: {
                                battlesCount: s().createElement('div', { className: Wo }, e),
                                maxBattlesCount: t,
                            },
                            classMix: F()(Ho, a),
                        }),
                    $o = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_0d',
                        base__size_234: 'QualificationBattleItem_base__size_234_ab',
                        battleBackground: 'QualificationBattleItem_battleBackground_67',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_2a',
                        blink: 'QualificationBattleItem_blink_3b',
                        fadeIn: 'QualificationBattleItem_fadeIn_c9',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_20',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_89',
                        fadeOut: 'QualificationBattleItem_fadeOut_c3',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_4f',
                        slideUp: 'QualificationBattleItem_slideUp_1f',
                        scale: 'QualificationBattleItem_scale_37',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_8f',
                        rotate: 'QualificationBattleItem_rotate_2d',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_9d',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_56',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_a0',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_be',
                    },
                    zo = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    Go = { x173: 173, x234: 234 },
                    jo = ({ className: e, state: t, size: a = 'x173' }) => {
                        const r = Go[a],
                            n = R.images.comp7.gui.maps.icons.comp7.icons.$dyn(`battle_${zo[t]}`);
                        return s().createElement(
                            'div',
                            { className: F()($o.base, e, $o[`base__${t}`], $o[`base__size_${r}`]) },
                            s().createElement('div', {
                                className: $o.battleBackground,
                                style: { backgroundImage: `url(${n})`, '--imageSize': `${r}rem` },
                            }),
                        );
                    },
                    qo = (0, q.Pi)(({ index: e, className: t }) => {
                        const a = Qn().model,
                            r = S().mediaSize,
                            n = a.computes.qualificationBattle(e);
                        return s().createElement(jo, {
                            state: n.state,
                            className: t,
                            key: e,
                            size: r >= B.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    Vo = 'BattlesProgression_base_a1',
                    Xo = 'BattlesProgression_item_73',
                    Qo = (0, q.Pi)(({ className: e }) => {
                        const t = Qn().model;
                        return s().createElement(
                            'div',
                            { className: F()(Vo, e) },
                            na(t.computes.qualificationBattlesLength(), (e) =>
                                s().createElement(qo, { index: e, className: Xo, key: e }),
                            ),
                        );
                    }),
                    Yo = 'Qualification_base_0f',
                    Ko = 'Qualification_content_64',
                    Zo = 'Qualification_footer_8f',
                    Jo = 'Qualification_qualificationEmblem_e2',
                    ei = 'Qualification_battlesProgression_51',
                    ti = 'Qualification_counterDescription_20',
                    ai = 'Qualification_ratingCalculationDescription_7a',
                    ri = 'Qualification_timerIcon_35',
                    ni = 'Qualification_conditionContainer_c4',
                    ui = 'Qualification_condition_23',
                    si = 'Qualification_rewardsDescription_c2',
                    oi = 'Qualification_infoIcon_fe',
                    ii = 'Qualification_rewardsButton_db',
                    li = 'Qualification_buttonIcon_39',
                    ci = 'Qualification_waiting_de',
                    mi = R.strings.comp7.qualification,
                    di = { base: ii, icon: li },
                    _i = (0, q.Pi)(({ className: e }) => {
                        const t = Qn(),
                            a = t.model,
                            r = t.controls,
                            n = a.qualificationModel.battlesCount.get(),
                            u = a.qualificationModel.maxBattlesCount.get(),
                            o = a.qualificationModel.isRatingCalculation.get(),
                            i = a.isParallaxPreloaded.get(),
                            l = (0, xe.useSpring)({
                                from: { opacity: 0 },
                                to: ee() ? { opacity: i ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return ee() && !i
                            ? s().createElement('div', { className: ci }, s().createElement(tt, null))
                            : s().createElement(
                                  xe.animated.div,
                                  { style: l, className: F()(Yo, e) },
                                  s().createElement(
                                      'div',
                                      { className: Ko },
                                      s().createElement('div', { className: Jo }),
                                      o
                                          ? s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement(Uo, { battlesCount: n, maxBattlesCount: u }),
                                                s().createElement(
                                                    qe,
                                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                                    s().createElement(
                                                        'div',
                                                        null,
                                                        s().createElement(Xr, {
                                                            text: mi.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: s().createElement('div', { className: ri }),
                                                            },
                                                            classMix: ai,
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : s().createElement(Jr, {
                                                text: mi.counterWithDescription(),
                                                classMix: ti,
                                                binding: {
                                                    counter: s().createElement(Uo, {
                                                        battlesCount: n,
                                                        maxBattlesCount: u,
                                                    }),
                                                },
                                            }),
                                      s().createElement(Qo, { className: ei }),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Zo },
                                      s().createElement(
                                          'div',
                                          { className: ni },
                                          s().createElement(Jr, {
                                              text: mi.condition(u),
                                              classMix: ui,
                                              binding: { maxBattlesCount: u },
                                          }),
                                          s().createElement(
                                              Oo,
                                              { maxBattlesCount: u },
                                              s().createElement('div', { className: oi }),
                                          ),
                                      ),
                                      s().createElement(Xr, { text: mi.rewardsDescription(), classMix: si }),
                                      s().createElement(j, {
                                          caption: mi.rewardsButton(),
                                          classNames: di,
                                          onMouseEnter: () => r.setRewardLayerVisible(!0),
                                          onMouseLeave: () => r.setRewardLayerVisible(!1),
                                          onClick: () => r.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    Ei = 'ProgressionPage_base_fa',
                    gi = 'ProgressionPage_parallaxContainer_c4',
                    pi = 'ProgressionPage_contentWrapper_cf',
                    bi = 'ProgressionPage_content_4a',
                    Ai = 'ProgressionPage_content__progression_c5',
                    fi = 'ProgressionPage_footer_d1',
                    hi = R.strings.comp7.page.heading,
                    vi = (0, q.Pi)(() => {
                        const e = Qn().model.qualificationModel.isActive.get(),
                            t = (0, xe.useSpring)(_e);
                        return s().createElement(
                            'div',
                            { className: Ei },
                            ee() && e && s().createElement(Au, { className: gi }),
                            s().createElement(nt, { className: K }, e ? hi.qualification() : hi.progression()),
                            s().createElement(Pn, null),
                            e
                                ? s().createElement('div', { className: pi }, s().createElement(_i, { className: bi }))
                                : s().createElement(
                                      xe.animated.div,
                                      { style: t, className: pi },
                                      s().createElement(Lo, {
                                          className: F()(bi, Ai),
                                          staticContent: s().createElement(mu, { className: fi }),
                                      }),
                                  ),
                        );
                    }),
                    Fi = { context: 'model.progressionModel' },
                    Ci = oe()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                r = (0, Ee.Om)(() => a.get().length),
                                n = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: ae },
                                ),
                                u = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return ve(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: ae },
                                ),
                                s = (0, Ee.Om)(
                                    (e) => {
                                        const t = Ae(u(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: ae },
                                ),
                                o = (0, Ee.Om)((e) => [...Fe(u(e), 1)], { equals: ae }),
                                i = (0, Ee.Om)((e) => {
                                    const t = Ae(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const r = ve(t.divisions, (e) => Object.assign({}, e));
                                    return $n(r);
                                }),
                                l = (0, Ee.Om)(
                                    () => {
                                        const e = De(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : r(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: ct },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: r,
                                    rankRewardsItem: n,
                                    mainReward: s,
                                    additionalRewards: o,
                                    additionalRewardsCount: (0, Ee.Om)((e) => o(e).length),
                                    divisionsString: i,
                                    scrollingSettings: l,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                openComp7Shop: e.createCallbackNoArgs('onComp7ShopOpen'),
                                goToPreview: (0, re.aD)((e, r) => {
                                    const n = t.computes.rankRewardsItem(e).rank;
                                    a(n, r);
                                }),
                            };
                        },
                    ),
                    Di = Ci[0],
                    Bi = Ci[1];
                var wi = a(9887),
                    ki = a.n(wi);
                const Si = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ri = (e) => e.includes('_') && ((e) => Si.includes(e))(e.split('_').at(-1)),
                    yi = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    xi = (e, t) =>
                        Object.keys(e).reduce((a, r) => {
                            if (r in a) return a;
                            if (Ri(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in a) return a;
                                const u = yi.indexOf(t),
                                    s = (-1 !== u ? Si.slice(u) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((a[n] = void 0 !== o ? o : e[n]), a);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, t) => Si.some((a) => void 0 !== t[`${e}_${a}`]))(r, e) ||
                                    (a[r] = n),
                                a
                            );
                        }, {}),
                    Ti = (e, t = xi) => {
                        const a = (
                            (e, t = xi) =>
                            (a) => {
                                const r = S().mediaSize,
                                    n = (0, u.useMemo)(() => t(a, r), [a, r]);
                                return s().createElement(e, n);
                            }
                        )(e, t);
                        return s().memo((t) =>
                            Object.keys(t).some((e) => Ri(e) && void 0 !== t[e])
                                ? s().createElement(a, t)
                                : s().createElement(e, t),
                        );
                    },
                    Pi = {
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
                    Ni = [
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
                function Li() {
                    return (
                        (Li =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Li.apply(this, arguments)
                    );
                }
                Object.keys(ki());
                const Ii = {
                        XL: { mt: Pi.mt__XL, mr: Pi.mr__XL, mb: Pi.mb__XL, ml: Pi.ml__XL },
                        LG: { mt: Pi.mt__LG, mr: Pi.mr__LG, mb: Pi.mb__LG, ml: Pi.ml__LG },
                        MDp: { mt: Pi.mt__MDp, mr: Pi.mr__MDp, mb: Pi.mb__MDp, ml: Pi.ml__MDp },
                        MD: { mt: Pi.mt__MD, mr: Pi.mr__MD, mb: Pi.mb__MD, ml: Pi.ml__MD },
                        SMp: { mt: Pi.mt__SMp, mr: Pi.mr__SMp, mb: Pi.mb__SMp, ml: Pi.ml__SMp },
                        SM: { mt: Pi.mt__SM, mr: Pi.mr__SM, mb: Pi.mb__SM, ml: Pi.ml__SM },
                        XS: { mt: Pi.mt__XS, mr: Pi.mr__XS, mb: Pi.mb__XS, ml: Pi.ml__XS },
                    },
                    Mi = (Object.keys(Ii), ['mt', 'mr', 'mb', 'ml']),
                    Oi = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Hi = Ti((e) => {
                        let t = e.className,
                            a = e.width,
                            r = e.height,
                            n = e.m,
                            o = e.mt,
                            i = void 0 === o ? n : o,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            m = e.mb,
                            d = void 0 === m ? n : m,
                            _ = e.ml,
                            E = void 0 === _ ? n : _,
                            g = e.column,
                            p = e.row,
                            b = e.flexDirection,
                            A = void 0 === b ? (g ? 'column' : p && 'row') || void 0 : b,
                            f = e.flexStart,
                            h = e.center,
                            v = e.flexEnd,
                            C = e.spaceBetween,
                            D = e.spaceAround,
                            B = e.justifyContent,
                            w =
                                void 0 === B
                                    ? (f ? 'flex-start' : h && 'center') ||
                                      (v && 'flex-end') ||
                                      (C && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : B,
                            k = e.alignItems,
                            S = void 0 === k ? (f ? 'flex-start' : h && 'center') || (v && 'flex-end') || void 0 : k,
                            R = e.alignSelf,
                            y = e.wrap,
                            x = e.flexWrap,
                            T = void 0 === x ? (y ? 'wrap' : void 0) : x,
                            P = e.grow,
                            N = e.shrink,
                            L = e.flex,
                            I = void 0 === L ? (P || N ? `${P ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : L,
                            M = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Ni);
                        const W = (0, u.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        Mi.reduce((t, a) => {
                                            const r = e[a];
                                            return r && 'number' != typeof r ? t.concat(Ii[!0 === r ? 'MD' : r][a]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        Mi.reduce((t, a) => {
                                            const r = e[a];
                                            return ('number' == typeof r && (t[Oi[a]] = r + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, M, n, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: I,
                                        alignSelf: R,
                                        display: A || S ? 'flex' : void 0,
                                        flexDirection: A,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, r, i, c, d, E, M, I, R, A, T, w, S]),
                            U = W.computedStyle,
                            $ = W.computedClassNames;
                        return s().createElement('div', Li({ className: F()(Pi.base, ...$, t), style: U }, H), O);
                    });
                var Wi = a(3532),
                    Ui = a.n(Wi);
                const $i = {
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
                    zi = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Gi() {
                    return (
                        (Gi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Gi.apply(this, arguments)
                    );
                }
                Object.keys(ki());
                const ji = Object.keys(Ui()),
                    qi = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Vi = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Xi = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qi = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Yi =
                        (Object.keys(Qi),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': qi,
                            'heading-H36': qi,
                            'heading-H28': Vi,
                            'heading-H24': Vi,
                            'heading-H24R': Vi,
                            'heading-H22': Vi,
                            'heading-H20R': Vi,
                            'heading-H18': Vi,
                            'heading-H15': Xi,
                            'heading-H14': Xi,
                            'paragraph-P24': Vi,
                            'paragraph-P18': Vi,
                            'paragraph-P16': Vi,
                            'paragraph-P14': Xi,
                            'paragraph-P12': Xi,
                            'paragraph-P10': Xi,
                        }),
                    Ki =
                        (Object.keys(Yi),
                        (e) =>
                            e
                                ? ((e) => ji.includes(e))(e)
                                    ? { colorClassName: $i[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Zi = Ti((e) => {
                        let t = e.text,
                            a = e.variant,
                            r = e.className,
                            n = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            m = void 0 === c ? o : c,
                            d = e.mb,
                            _ = void 0 === d ? o : d,
                            E = e.ml,
                            g = void 0 === E ? o : E,
                            p = e.style,
                            b = e.format,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, zi);
                        const f = (0, u.useMemo)(() => {
                                const e = Ki(n),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    r = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, p, r), colorClassName: t };
                            }, [p, n]),
                            h = f.computedStyle,
                            v = f.colorClassName;
                        return s().createElement(
                            Hi,
                            Gi(
                                {
                                    className: F()($i.base, a && $i[a], v, r),
                                    style: h,
                                    mt: !0 === l ? Yi[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Yi[a || 'paragraph-P16'].mr : m,
                                    mb: !0 === _ ? Yi[a || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Yi[a || 'paragraph-P16'].ml : g,
                                },
                                A,
                            ),
                            void 0 !== b ? s().createElement(Xr, Gi({}, b, { text: t })) : t,
                        );
                    });
                let Ji, el, tl, al, rl, nl, ul;
                function sl() {
                    return (
                        (sl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        sl.apply(this, arguments)
                    );
                }
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
                })(Ji || (Ji = {})),
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
                    })(el || (el = {})),
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
                    })(tl || (tl = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(al || (al = {})),
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
                    })(rl || (rl = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(nl || (nl = {})),
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
                    })(ul || (ul = {})));
                const ol = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const r = s().createElement('div', { className: a }, e);
                        if (t.header || t.body) return s().createElement(qe, t, r);
                        const n = t.contentId,
                            u = t.args,
                            o = null == u ? void 0 : u.contentId;
                        return n || o
                            ? s().createElement($e, sl({}, t, { contentId: n || o }), r)
                            : s().createElement(Cn, t, r);
                    },
                    il = [
                        Ji.Items,
                        Ji.Equipment,
                        Ji.Xp,
                        Ji.XpFactor,
                        Ji.Blueprints,
                        Ji.BlueprintsAny,
                        Ji.Goodies,
                        Ji.Berths,
                        Ji.Slots,
                        Ji.Tokens,
                        Ji.CrewSkins,
                        Ji.CrewBooks,
                        Ji.Customizations,
                        Ji.CreditsFactor,
                        Ji.TankmenXp,
                        Ji.TankmenXpFactor,
                        Ji.FreeXpFactor,
                        Ji.BattleToken,
                        Ji.PremiumUniversal,
                        Ji.NaturalCover,
                        Ji.BpCoin,
                        Ji.BattlePassSelectToken,
                        Ji.BattlaPassFinalAchievement,
                        Ji.BattleBadge,
                        Ji.BonusX5,
                        Ji.CrewBonusX3,
                        Ji.NewYearFillers,
                        Ji.NewYearInvoice,
                        Ji.EpicSelectToken,
                        Ji.Comp7TokenWeeklyReward,
                        Ji.Comp7TokenCouponReward,
                        Ji.BattleBoosterGift,
                        Ji.CosmicLootboxCommon,
                        Ji.CosmicLootboxSilver,
                        Ji.SelectableBonus,
                        Ji.GoldenTicket,
                        Ji.PostStamp,
                        Ji.PremiumPlusUniversal,
                    ],
                    ll = [Ji.Gold, Ji.Credits, Ji.Crystal, Ji.FreeXp],
                    cl = [Ji.BattlePassPoints],
                    ml = [Ji.PremiumPlus, Ji.Premium];
                let dl;
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
                })(dl || (dl = {}));
                const _l = ['engravings', 'backgrounds'],
                    El = ['engraving', 'background'],
                    gl = (e, t = tl.Small) => {
                        const a = e.name,
                            r = e.type,
                            n = e.value,
                            u = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case tl.S600x450:
                                        return 'c_600x450';
                                    case tl.S400x300:
                                        return 'c_400x300';
                                    case tl.S296x222:
                                        return 'c_296x222';
                                    case tl.S232x174:
                                        return 'c_232x174';
                                    case tl.Big:
                                        return 'c_80x80';
                                    case tl.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${u}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case tl.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case tl.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${u}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const r = _l[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            u = n.$dyn(a);
                                        return u ? `${u}` : `${n.$dyn(El[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, u);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${u}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case tl.S600x450:
                                            return 'c_600x450';
                                        case tl.S400x300:
                                            return 'c_400x300';
                                        case tl.S296x222:
                                            return 'c_296x222';
                                        case tl.S232x174:
                                            return 'c_232x174';
                                        case tl.S180x135:
                                            return 'big';
                                        case tl.Big:
                                        case tl.S80x80:
                                            return 'c_80x80';
                                        case tl.Small:
                                        case tl.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${u}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${u}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case tl.Mini:
                                            return dl.s32;
                                        case tl.Small:
                                        case tl.S48x48:
                                            return dl.s48;
                                        case tl.S80x80:
                                        case tl.Big:
                                            return dl.s80;
                                        case tl.S128x100:
                                            return dl.s116;
                                        case tl.S180x135:
                                        case tl.S232x174:
                                        case tl.S296x222:
                                            return dl.s296;
                                        case tl.S400x300:
                                            return dl.s400;
                                        case tl.S600x450:
                                            return dl.s600;
                                    }
                                })(t)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    pl = {
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
                    bl = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: r = tl.Big,
                        special: n,
                        value: u,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case rl.BATTLE_BOOSTER:
                                    case rl.BATTLE_BOOSTER_REPLACE:
                                        return nl.BATTLE_BOOSTER;
                                }
                            })(n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case rl.BATTLE_BOOSTER:
                                        return ul.BATTLE_BOOSTER;
                                    case rl.BATTLE_BOOSTER_REPLACE:
                                        return ul.BATTLE_BOOSTER_REPLACE;
                                    case rl.BUILT_IN_EQUIPMENT:
                                        return ul.BUILT_IN_EQUIPMENT;
                                    case rl.EQUIPMENT_PLUS:
                                        return ul.EQUIPMENT_PLUS;
                                    case rl.EQUIPMENT_TROPHY_BASIC:
                                        return ul.EQUIPMENT_TROPHY_BASIC;
                                    case rl.EQUIPMENT_TROPHY_UPGRADED:
                                        return ul.EQUIPMENT_TROPHY_UPGRADED;
                                    case rl.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case rl.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case rl.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ul.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case rl.PROGRESSION_STYLE_UPGRADED_1:
                                        return ul.PROGRESSION_STYLE_UPGRADED_1;
                                    case rl.PROGRESSION_STYLE_UPGRADED_2:
                                        return ul.PROGRESSION_STYLE_UPGRADED_2;
                                    case rl.PROGRESSION_STYLE_UPGRADED_3:
                                        return ul.PROGRESSION_STYLE_UPGRADED_3;
                                    case rl.PROGRESSION_STYLE_UPGRADED_4:
                                        return ul.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case al.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case al.CURRENCY:
                                    case al.NUMBER:
                                        return s().createElement(Nt, { format: 'integral', value: Number(e) });
                                    case al.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(u, o);
                        return s().createElement(
                            'div',
                            { className: F()(pl.base, pl[`base__${r}`], l), style: i },
                            s().createElement(
                                ol,
                                { tooltipArgs: m, className: pl.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: F()(pl.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: F()(pl.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: F()(pl.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: F()(pl.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    pl.info,
                                                    pl[`info__${e}`],
                                                    o === al.MULTI && pl.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                s().createElement(
                                    ol,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: F()(pl.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Al = 'Rewards_base_26',
                    fl = 'Rewards_base__vertical_9f',
                    hl = 'Rewards_reward_7b',
                    vl = 'Rewards_reward__vertical_c6';
                function Fl() {
                    return (
                        (Fl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Fl.apply(this, arguments)
                    );
                }
                const Cl = s().memo(
                        ({
                            data: e,
                            size: t = tl.Big,
                            isVertical: a = !1,
                            count: r,
                            classMix: n,
                            rewardItemClassMix: o,
                            boxRewardTooltip: i,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, u.useMemo)(
                                    () =>
                                        r && r < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [r, e.length, t],
                                ),
                                m =
                                    l ||
                                    la(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (r || 0),
                                    }),
                                d = F()(Al, a && fl, n),
                                _ = F()(hl, a && vl, o);
                            return s().createElement(
                                'div',
                                { className: d },
                                c
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          e
                                              .slice(0, r)
                                              .map((e, a) =>
                                                  s().createElement(
                                                      'div',
                                                      { key: a, className: _ },
                                                      s().createElement(bl, Fl({ size: t }, e)),
                                                  ),
                                              ),
                                          s().createElement(
                                              'div',
                                              { className: _ },
                                              s().createElement(bl, {
                                                  name: 'more',
                                                  image: c,
                                                  size: t,
                                                  value: m,
                                                  tooltipArgs: i,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          s().createElement(
                                              'div',
                                              { key: a, className: _ },
                                              s().createElement(bl, Fl({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Dl = ['overlayType'];
                const Bl = (e, t) => {
                        if ('dogTagComponents' === e.name) {
                            if (t === tl.Big) return tl.S80x80;
                            if (t === tl.Small) return tl.S48x48;
                        }
                        return t;
                    },
                    wl = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    kl = ({ reward: e, rank: t, index: a }) => {
                        const r = e.tooltipId,
                            n = e.tooltipContentId;
                        return ((e, t, a) => {
                            const r = t && { contentId: t };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || t),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !t,
                                },
                                r,
                                a,
                            );
                        })(
                            Object.assign({ tooltipId: r }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(n),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    Sl = ({ reward: e, size: t, rank: a, index: r }) => {
                        const n = e.overlayType,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Dl),
                            s = Bl(e, t);
                        return Object.assign({}, u, {
                            size: s,
                            image: gl(e, s),
                            value: wl(e),
                            valueType:
                                ((o = e.name),
                                il.includes(o)
                                    ? al.MULTI
                                    : ll.includes(o)
                                      ? al.CURRENCY
                                      : cl.includes(o)
                                        ? al.NUMBER
                                        : ml.includes(o)
                                          ? al.PREMIUM_PLUS
                                          : al.STRING),
                            special: n,
                            tooltipArgs: kl({ reward: e, rank: a, index: r }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var o;
                    },
                    Rl = ({ rewards: e, size: t, rank: a, index: r }) =>
                        ve(e, (e) => Sl({ reward: e, size: t, rank: a, index: r })),
                    yl = (e, t) => (e > t ? t - 1 : void 0),
                    xl = 'AdditionalRewards_reward_16',
                    Tl = 'AdditionalRewards_vehiclesRentBase_d4',
                    Pl = 'AdditionalRewards_vehiclesRentLabel_3e',
                    Nl = tl.Small,
                    Ll = (0, q.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: r }) => {
                        const n = Bi().model,
                            u = n.computes.additionalRewards(t),
                            o = n.computes.additionalRewardsCount(t),
                            i = ve(u, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, Sl({ reward: t, size: Nl, rank: e }), {
                                    className: F()(a && Tl),
                                    classNames: { info: F()(a && Pl) },
                                });
                            });
                        return s().createElement(Cl, {
                            data: i,
                            size: Nl,
                            count: yl(o, a),
                            rewardItemClassMix: xl,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: r,
                        });
                    });
                let Il;
                !(function (e) {
                    ((e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished'));
                })(Il || (Il = {}));
                const Ml = {
                        base: 'Heading_base_99',
                        tooltipArea: 'Heading_tooltipArea_c9',
                        rankEmblem__future: 'Heading_rankEmblem__future_6d',
                        lock: 'Heading_lock_a8',
                        description: 'Heading_description_6f',
                        rankName: 'Heading_rankName_05',
                        rankStatus: 'Heading_rankStatus_63',
                    },
                    Ol = (0, q.Pi)(
                        ({
                            rank: e,
                            from: t,
                            to: a,
                            topPercentage: r,
                            divisions: n,
                            rankEmblemSize: u,
                            rankState: o,
                        }) => {
                            const i = Bi().model,
                                l = ce().model,
                                c = i.qualification.isActive.get(),
                                m = Qu(o, e, c),
                                d = o === zn.Current && !c;
                            return s().createElement(
                                'div',
                                { className: Ml.base },
                                s().createElement(
                                    Or,
                                    {
                                        rank: e,
                                        from: t,
                                        to: a,
                                        topPercentage: r,
                                        divisions: n,
                                        className: Ml.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    s().createElement(Vu, {
                                        rank: e,
                                        size: u,
                                        type: ju.Static,
                                        state: m,
                                        classNames: { rankEmblem: Ml[`rankEmblem__${o}`] },
                                    }),
                                    o === zn.Future && s().createElement('div', { className: Ml.lock }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ml.description },
                                    s().createElement('div', { className: Ml.rankName }, ya(e)),
                                    d &&
                                        s().createElement(
                                            'div',
                                            { className: Ml.rankStatus },
                                            ((e) => {
                                                switch (e) {
                                                    case Il.OffSeason:
                                                    case Il.Finished:
                                                        return R.strings.comp7.rank.achieved();
                                                    case Il.Active:
                                                        return R.strings.comp7.rank.current();
                                                    default:
                                                        return '';
                                                }
                                            })(l.year.state.get()),
                                        ),
                                ),
                            );
                        },
                    ),
                    Hl = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Wl = [
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
                function Ul() {
                    return (
                        (Ul =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ul.apply(this, arguments)
                    );
                }
                let $l;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })($l || ($l = {}));
                const zl = (0, u.memo)((e) => {
                        let t = e.label,
                            a = e.isVisibleLabel,
                            r = void 0 !== a && a,
                            n = e.autofocus,
                            o = void 0 !== n && n,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            m = void 0 === c ? 'play' : c,
                            d = e.size,
                            _ = void 0 === d ? $l.NORMAL : d,
                            E = e.classNames,
                            g = e.onClick,
                            p = e.onMouseEnter,
                            b = e.onMouseLeave,
                            A = e.onMouseDown,
                            f = e.onMouseUp,
                            h = e.onFocus,
                            v = e.onBlur,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Wl);
                        const D = (0, u.useState)(!1),
                            B = D[0],
                            w = D[1],
                            k = (0, u.useState)(!1),
                            S = k[0],
                            R = k[1],
                            y = (0, u.useState)(o),
                            x = y[0],
                            T = y[1],
                            P = (0, u.useRef)(null),
                            N = (0, u.useCallback)(() => {
                                P.current && (P.current.focus(), T(!0));
                            }, []),
                            L = (0, u.useCallback)(
                                (e) => {
                                    x && null !== P.current && !P.current.contains(e.target) && T(!1);
                                },
                                [x],
                            );
                        ((0, u.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                            (0, u.useEffect)(() => {
                                T(o);
                            }, [o]));
                        const I = (0, u.useCallback)(
                                (e) => {
                                    g && g(e);
                                },
                                [g],
                            ),
                            M = (0, u.useCallback)(
                                (e) => {
                                    (w(!0), A && A(e), m && W(m), o && N());
                                },
                                [o, A, N, m],
                            ),
                            O = (0, u.useCallback)(
                                (e) => {
                                    (w(!1), f && f(e));
                                },
                                [f],
                            ),
                            H = (0, u.useCallback)(
                                (e) => {
                                    (p && p(e), l && W(l), R(!0));
                                },
                                [p, l],
                            ),
                            U = (0, u.useCallback)(
                                (e) => {
                                    (w(!1), R(!1), b && b(e));
                                },
                                [b],
                            ),
                            $ = (0, u.useCallback)(
                                (e) => {
                                    (T(!0), h && h(e));
                                },
                                [h],
                            ),
                            z = (0, u.useCallback)(
                                (e) => {
                                    (T(!1), v && v(e));
                                },
                                [v],
                            ),
                            G = F()(
                                Hl.base,
                                r && Hl.base__visibleLabel,
                                B && Hl.base__mouseDown,
                                S && Hl.base__hovered,
                                x && Hl.base__focused,
                                null == E ? void 0 : E.base,
                            ),
                            j = F()(Hl.icon, Hl[`icon__${_}`], null == E ? void 0 : E.icon),
                            q = F()(Hl.label, null == E ? void 0 : E.label);
                        return s().createElement(
                            'div',
                            Ul(
                                {
                                    ref: P,
                                    className: G,
                                    onClick: I,
                                    onMouseEnter: H,
                                    onMouseLeave: U,
                                    onMouseDown: M,
                                    onMouseUp: O,
                                    onFocus: $,
                                    onBlur: z,
                                },
                                C,
                            ),
                            s().createElement('div', { className: j }),
                            s().createElement('div', { className: q }, t),
                        );
                    }),
                    Gl = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    jl = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ql = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Vl = (e) =>
                        ql
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = jl.length - 1; a >= 0; a--)
                                      for (; e >= jl[a]; ) ((t += Gl[a]), (e -= jl[a]));
                                  return t;
                              })(e),
                    Xl = 'MainReward_base_32',
                    Ql = 'MainReward_imageContainer_37',
                    Yl = 'MainReward_highlightContainer_cf',
                    Kl = 'MainReward_highlight_06',
                    Zl = 'MainReward_preview_7a',
                    Jl = 'MainReward_info_58',
                    ec = 'MainReward_title_6d',
                    tc = 'MainReward_subTitle_e2',
                    ac = (0, q.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: r, onPreviewClick: n, className: u }) => {
                            const o = Bi().model.computes.mainReward(e);
                            return s().createElement(
                                'div',
                                { className: F()(Xl, u) },
                                s().createElement(
                                    'div',
                                    { className: Ql },
                                    r &&
                                        s().createElement(
                                            'div',
                                            { className: Yl },
                                            s().createElement('div', { className: Kl }),
                                        ),
                                    s().createElement(bl, Sl({ reward: o, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(o) &&
                                        s().createElement(
                                            'div',
                                            { className: Zl },
                                            s().createElement(zl, {
                                                label: R.strings.comp7.rewards.preview(),
                                                onClick: n,
                                            }),
                                        ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Jl },
                                    s().createElement('div', { className: ec }, o.label),
                                    s().createElement(Jr, {
                                        text: String(R.strings.comp7.rewards.subtitle.$dyn(o.name)),
                                        binding: { vehicleLevel: Vl(10) },
                                        classMix: tc,
                                    }),
                                ),
                            );
                        },
                    ),
                    rc = 'RankRewardsItem_base_a7',
                    nc = 'RankRewardsItem_mainRewardContainer_e0',
                    uc = 'RankRewardsItem_rewardsContainer_69',
                    sc = 'RankRewardsItem_rewardsContainer__qualification_b0',
                    oc = 'RankRewardsItem_statusContainer_bf',
                    ic = 'RankRewardsItem_statusContainer__hidden_c8',
                    lc = 'RankRewardsItem_icon_7d',
                    cc = (0, q.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            rankState: a,
                            mainRewardSize: r,
                            hasHighlight: n,
                            visibleRewardsCount: u,
                            rankEmblemSize: o,
                            isQualification: i,
                            onPreviewClick: l,
                        }) => {
                            const c = Bi().model,
                                m = c.root.get().topPercentage,
                                d = c.computes.rankRewardsItem(e),
                                _ = d.rank,
                                E = d.from,
                                g = d.to,
                                p = d.hasRewardsReceived,
                                b = c.computes.divisionsString(e);
                            return s().createElement(
                                'div',
                                { className: rc, style: { '--itemWidth': `${t}rem` } },
                                s().createElement(Ol, {
                                    rank: _,
                                    from: E,
                                    to: g,
                                    divisions: b,
                                    topPercentage: m,
                                    rankEmblemSize: o,
                                    rankState: a,
                                }),
                                s().createElement(ac, {
                                    index: e,
                                    rank: _,
                                    size: r,
                                    hasHighlight: n,
                                    onPreviewClick: l,
                                    className: nc,
                                }),
                                s().createElement(
                                    'div',
                                    { className: F()(uc, i && sc) },
                                    s().createElement(Ll, { itemIndex: e, visibleRewardsCount: u, rank: _ }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: F()(oc, !p && ic) },
                                    s().createElement('div', { className: lc }),
                                    R.strings.comp7.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    mc = (e) => (e >= B.Large ? Ba.x110 : e >= B.Medium ? Ba.x64 : Ba.x48),
                    dc = (e) =>
                        e >= B.ExtraLarge
                            ? tl.S600x450
                            : e >= B.Large
                              ? tl.S400x300
                              : e >= B.Medium
                                ? tl.S296x222
                                : tl.S232x174,
                    _c = (e) => (e >= w.Medium ? 5 : 4),
                    Ec = 'RankRewardsPage_base_fd',
                    gc = 'RankRewardsPage_content_3f',
                    pc = 'RankRewardsPage_scrollContainer_f2',
                    bc = 'RankRewardsPage_areaContainer_9e',
                    Ac = 'RankRewardsPage_areaWrapper_fb',
                    fc = 'RankRewardsPage_bar_59',
                    hc = 'RankRewardsPage_qualificationFooter_71',
                    vc = 'RankRewardsPage_shopButtonContainer_90',
                    Fc = 'RankRewardsPage_shopButton_4e',
                    Cc = 'RankRewardsPage_comp7ShopButtonBackground_cc',
                    Dc = 'RankRewardsPage_shopButtonIcon_51',
                    Bc = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    wc = R.strings.comp7.rewards,
                    kc = (0, q.Pi)(() => {
                        const e = S(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            r = Bi(),
                            n = r.model,
                            o = r.controls,
                            i = n.root.get(),
                            l = i.currentItemIndex,
                            c = i.initialItemIndex,
                            m = n.qualification.isActive.get(),
                            d = n.computes.rankRewardsItemsLength(),
                            _ = n.computes.scrollingSettings(),
                            E = _.nextNotAchievedItemIndex,
                            g = _.hasForceScroll,
                            p = (0, u.useState)(g ? 'idle' : 'initial'),
                            b = p[0],
                            A = p[1],
                            f = (0, u.useState)(g ? c : E),
                            h = f[0],
                            v = f[1],
                            F = ((e) =>
                                e >= B.ExtraLarge
                                    ? 600
                                    : e >= B.Large
                                      ? 460
                                      : e >= B.Medium
                                        ? 400
                                        : e >= B.Small
                                          ? 340
                                          : 300)(t),
                            C = d * F,
                            D = $u(F),
                            w = D.scrollPosition,
                            k = D.clampPosition,
                            y = D.contentRef,
                            x = (function () {
                                const e = (0, u.useRef)(!1);
                                return (
                                    (0, u.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        ((0, u.useLayoutEffect)(() => {
                            'idle' === b
                                ? w.start({ scrollPosition: viewEnv.remToPx(c * F), immediate: !0 })
                                : 'initial' === b && w.start({ scrollPosition: viewEnv.remToPx(C), immediate: !0 });
                        }, []),
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        const e = y.current;
                                        if (e && 'initial' === b) {
                                            const t = k(e, viewEnv.remToPx(E * F - F)),
                                                a = k(e, viewEnv.remToPx(C));
                                            if (t === a) return void A('idle');
                                            w.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: Bc,
                                                onStart: () => {
                                                    A('scrolling');
                                                },
                                                onRest: () => {
                                                    x.current || A('idle');
                                                },
                                            });
                                        }
                                    }),
                                [k, y, x, F, E, b, C, w],
                            ));
                        const T = (e) => 'idle' === b && e === E && !m,
                            P = (0, xe.useSpring)(_e),
                            N = { lineHeight: 1.5 },
                            L = hu(F) - F;
                        return s().createElement(
                            'div',
                            { className: Ec },
                            s().createElement(nt, { className: K }, R.strings.comp7.page.heading.rankRewards()),
                            s().createElement(Pn, null),
                            s().createElement(
                                xe.animated.div,
                                { className: gc, style: P },
                                s().createElement(
                                    Uu,
                                    {
                                        api: D,
                                        stuckIndex: h,
                                        itemWidth: F,
                                        itemsOffset: L,
                                        onStick: v,
                                        className: pc,
                                        areaClassNames: { base: bc, wrapper: Ac },
                                        barClassNames: { base: fc },
                                    },
                                    na(d, (e) =>
                                        s().createElement(cc, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: _c(a),
                                            rankState: jn(e, l, m),
                                            rankEmblemSize: mc(t),
                                            mainRewardSize: dc(t),
                                            itemWidth: F,
                                            hasHighlight: T(e),
                                            isQualification: m,
                                            onPreviewClick: () => o.goToPreview(e, h),
                                        }),
                                    ),
                                ),
                            ),
                            !m &&
                                s().createElement(
                                    'div',
                                    { className: vc },
                                    s().createElement(
                                        lt,
                                        { type: st.ghost, size: ot.medium, mixClass: Fc, onClick: o.openComp7Shop },
                                        s().createElement('div', { className: Cc }),
                                        s().createElement('div', { className: Dc }),
                                        s().createElement(Zi, {
                                            text: wc.shopButton(),
                                            color: 'WHITE',
                                            variant: 'paragraph-P14',
                                            variant_md: 'paragraph-P18',
                                            style: { fontWeight: 700 },
                                        }),
                                    ),
                                ),
                            m &&
                                s().createElement(
                                    'div',
                                    { className: hc },
                                    s().createElement(Zi, {
                                        text: wc.qualification.condition.first(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: N,
                                    }),
                                    s().createElement(Zi, {
                                        text: wc.qualification.condition.second(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: N,
                                    }),
                                ),
                        );
                    }),
                    Sc = { context: 'model.rankRewardsModel' };
                let Rc;
                !(function (e) {
                    ((e.LockedByNoXVehicles = 'lockedByNoXVehicles'),
                        (e.LockedByInactiveSeason = 'lockedByInactiveSeason'),
                        (e.LockedByPreviousQuest = 'lockedByPreviousQuest'),
                        (e.Active = 'active'),
                        (e.Completed = 'completed'));
                })(Rc || (Rc = {}));
                const yc = [Rc.LockedByNoXVehicles, Rc.LockedByInactiveSeason, Rc.LockedByPreviousQuest];
                let xc;
                !(function (e) {
                    ((e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished'));
                })(xc || (xc = {}));
                const Tc = 2140,
                    Pc = 1500,
                    Nc = 1264,
                    Lc = 1104,
                    Ic = 804,
                    Mc = 187,
                    Oc = 158,
                    Hc = oe()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {
                                        root: e.object(),
                                        questCards: e.array('questCards'),
                                        progressPoints: e.array('progressPoints'),
                                    },
                                    e.primitives(['currentTokenValue', 'previousTokenValue']),
                                    { progressAnimationState: re.LO.box(xc.Scrolling) },
                                ),
                                a = (0, Ee.Om)(
                                    (e) => {
                                        const a = Ae(t.questCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: ae },
                                ),
                                r = (0, Ee.Om)(
                                    (e, t) => {
                                        const r = a(e).rewards;
                                        return Rl({ rewards: r, size: t });
                                    },
                                    { equals: ae },
                                ),
                                n = (0, Ee.Om)(() =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let a = 0; a < e.length; a++) if (!t(fe(e, a), a, e)) return !1;
                                        return !0;
                                    })(t.questCards.get(), (e) => e.state === Rc.Completed),
                                ),
                                u = (0, Ee.Om)((e) => yc.includes(a(e).state)),
                                s = (0, Ee.Om)(() => t.questCards.get().length),
                                o = (0, Ee.Om)(() => 5 >= s(), { equals: ae }),
                                i = (0, Ee.Om)(() => (n() ? Rc.Completed : Rc.Active), { equals: ae }),
                                l = (0, Ee.Om)(() => t.currentTokenValue.get(), { equals: ae }),
                                c = (0, Ee.Om)(() => t.previousTokenValue.get(), { equals: ae }),
                                m = (0, Ee.Om)(
                                    (e) => ({
                                        wasProgressionVisited: c() === l(),
                                        isRecentlyCompletedLevel: c() <= e && e <= l(),
                                        isPrevLevel: e <= c(),
                                    }),
                                    { equals: ae },
                                ),
                                d = (0, Ee.Om)(
                                    () => {
                                        const e = t.currentTokenValue.get(),
                                            a = t.progressPoints.get();
                                        return ve(a, ({ rewards: t }, r) => ({
                                            level: r + 1,
                                            isCompleted: r < e,
                                            isActive: r === e,
                                            isLast: r === a.length - 1,
                                            rewards: t,
                                        }));
                                    },
                                    { equals: ae },
                                ),
                                _ = (0, Ee.Om)(
                                    () => {
                                        const e = 1 * t.progressPoints.get().length;
                                        return t.currentTokenValue.get() >= e;
                                    },
                                    { equals: ae },
                                ),
                                E = (0, Ee.Om)(() => _() && t.currentTokenValue.get() === t.previousTokenValue.get(), {
                                    equals: ae,
                                }),
                                g = (0, Ee.Om)(
                                    () => {
                                        var e;
                                        const a = t.progressPoints.get(),
                                            r = Ae(a, a.length - 1),
                                            n = null != (e = null == r ? void 0 : r.count) ? e : 0;
                                        return t.currentTokenValue.get() >= n;
                                    },
                                    { equals: ae },
                                ),
                                p = (0, Ee.Om)(
                                    () => {
                                        var e;
                                        return null != (e = De(t.questCards.get(), (e) => e.state === Rc.Active))
                                            ? e
                                            : 0;
                                    },
                                    { equals: ae },
                                ),
                                b = (0, Ee.Om)(
                                    (e, t, a, r) => {
                                        if (t && t.length) {
                                            const n = t.length * a + (t.length - 1) * r,
                                                u = (e, t) => (e >= t ? t : e);
                                            switch (!0) {
                                                case e >= B.ExtraLarge:
                                                    return u(n, Tc);
                                                case e >= B.Large:
                                                    return u(n, Pc);
                                                case e >= B.Medium:
                                                    return u(n, Nc);
                                                case e >= B.Small:
                                                    return u(n, Lc);
                                                default:
                                                    return u(n, Ic);
                                            }
                                        }
                                        return 0;
                                    },
                                    { equals: ae },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: s,
                                    questCard: a,
                                    questCards: t.questCards,
                                    questRewards: r,
                                    isQuestLocked: u,
                                    areDefaultNumberQuests: o,
                                    battleTasksStatus: i,
                                    isAllQuestsCompleted: n,
                                    levels: d,
                                    currentLevel: l,
                                    levelStatus: m,
                                    isProgressionCompleted: _,
                                    wasProgressionCompletedBeforeStart: E,
                                    initialItemScrollIndex: p,
                                    getScrollContainerMaxWidth: b,
                                    isDoneProgression: g,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (function (e) {
                                const t = {};
                                for (const a in e)
                                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                                        const r = e[a];
                                        t[a] = (0, re.aD)(r);
                                    }
                                return t;
                            })({
                                finishScrolling: () => t.progressAnimationState.set(xc.ProgressChange),
                                finishProgressionChange: () => t.progressAnimationState.set(xc.HighlightCard),
                                finishHighlightCard: () => t.progressAnimationState.set(xc.ChangeCompleted),
                                completeProgression: (e) =>
                                    t.progressAnimationState.set(e ? xc.ProgressAlreadyFinished : xc.ProgressFinished),
                            });
                            return Object.assign({}, a, {
                                animationStart: e.createCallbackNoArgs('onAnimationStart'),
                                animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                            });
                        },
                    ),
                    Wc = Hc[0],
                    Uc = Hc[1],
                    $c = {
                        base: 'Prompt_base_74',
                        defaultText: 'Prompt_defaultText_05',
                        defaultText__done: 'Prompt_defaultText__done_b0',
                    },
                    zc = R.strings.comp7.weeklyQuests.tokenProgress.description,
                    Gc = (0, q.Pi)(({ className: e }) => {
                        const t = Uc().model.computes.isDoneProgression();
                        return s().createElement(
                            'div',
                            { className: F()($c.base, t && $c.base__done, e) },
                            t
                                ? s().createElement(Zi, {
                                      text: zc.done(),
                                      variant: 'paragraph-P14',
                                      className: $c.defaultText__done,
                                  })
                                : s().createElement(Zi, {
                                      text: zc.normal(),
                                      variant: 'paragraph-P14',
                                      className: $c.defaultText,
                                  }),
                        );
                    }),
                    jc = { Vertical: r, Horizontal: n };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                ('undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                const qc = {
                        base: 'LevelCard_base_cd',
                        bgCompleted: 'LevelCard_bgCompleted_e8',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_53',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_2a',
                        completedIconContainer: 'LevelCard_completedIconContainer_28',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_47',
                        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_05',
                        completedIcon: 'LevelCard_completedIcon_40',
                        completedIconGlow: 'LevelCard_completedIconGlow_27',
                        border: 'LevelCard_border_b4',
                        border__right: 'LevelCard_border__right_c1',
                    },
                    Vc = 'LevelLabel_base_10',
                    Xc = 'LevelLabel_activeGlow_6d',
                    Qc = 'LevelLabel_activeGlow__completed_b9',
                    Yc = 'LevelLabel_level_4c',
                    Kc = 'LevelLabel_level__completed_c4',
                    Zc = 'LevelLabel_level__active_85',
                    Jc = 'LevelLabel_tokenIcon_67',
                    em = 'LevelLabel_tokenIcon__active_7a',
                    tm = 'LevelLabel_levelCurrent_ce',
                    am = 'LevelLabel_levelCurrent__completed_97',
                    rm = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    nm = ({ level: e, isActive: t, isCompleted: a }) => {
                        const r = F()(Yc, a && Kc, t && Zc);
                        return s().createElement(
                            qe,
                            { header: rm.header(), body: rm.body() },
                            s().createElement(
                                'div',
                                { className: Vc },
                                s().createElement('div', { className: F()(Xc, t && Qc) }),
                                t && s().createElement('div', { className: F()(tm, t && am) }, e),
                                !t && s().createElement('div', { className: r }, e),
                                s().createElement('div', { className: F()(Jc, { [em]: t }) }),
                            ),
                        );
                    },
                    um = 'prevLevel',
                    sm = 'completed',
                    om = 'inProgress',
                    im = (e, t, a) => (e ? sm : t ? om : a),
                    lm = (0, q.Pi)(({ level: e, isActive: t, isCompleted: a, isLast: r }) => {
                        const n = (0, u.useState)(),
                            o = n[0],
                            i = n[1],
                            l = Uc().model,
                            c = (0, u.useRef)(null),
                            m = l.computes.levelStatus(e),
                            d = m.wasProgressionVisited,
                            _ = m.isRecentlyCompletedLevel,
                            E = m.isPrevLevel;
                        (0, u.useEffect)(() => {
                            a && !d && _ && i(um);
                        }, [a, d, _]);
                        const g = (0, u.useCallback)(() => {
                            W('pr_progress_tick');
                        }, []);
                        return (
                            (0, u.useEffect)(() => {
                                const e = c.current;
                                return ye(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', g),
                                            () => {
                                                e.removeEventListener('transitionstart', g);
                                            }
                                        );
                                });
                            }, [c, g]),
                            s().createElement(
                                'div',
                                { className: qc.base },
                                s().createElement('div', {
                                    className: F()(qc.bgCompleted, (t || a) && qc.bgCompleted__completed),
                                    ref: c,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            qc.completedIconContainer,
                                            qc[`completedIconContainer__${im(E, !a, o)}`],
                                        ),
                                    },
                                    s().createElement('div', { className: qc.completedIconGlow }),
                                    s().createElement('div', { className: qc.completedIcon }),
                                ),
                                s().createElement(nm, { level: e, isCompleted: a, isActive: t }),
                                s().createElement('div', { className: qc.border }),
                                r && s().createElement('div', { className: F()(qc.border, qc.border__right) }),
                            )
                        );
                    }),
                    cm = 'LevelCards_base_b9';
                function mm() {
                    return (
                        (mm =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        mm.apply(this, arguments)
                    );
                }
                const dm = (0, q.Pi)(
                        ({ levelRef: e }) => {
                            const t = Uc().model.computes.levels();
                            return s().createElement(
                                'div',
                                { className: cm, ref: e },
                                t.map((e) => s().createElement(lm, mm({ key: e.level }, e))),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    _m = {
                        base: 'RewardCard_base_1f',
                        base__mediaLarge: 'RewardCard_base__mediaLarge_1a',
                        base__mediaExtraExtraLarge: 'RewardCard_base__mediaExtraExtraLarge_c5',
                        activeBlock: 'RewardCard_activeBlock_0f',
                        activeBlock__completed: 'RewardCard_activeBlock__completed_7c',
                        activeBlock__fast: 'RewardCard_activeBlock__fast_1a',
                        bgCompleted: 'RewardCard_bgCompleted_3c',
                        bgCompleted__completed: 'RewardCard_bgCompleted__completed_c9',
                        bgCompleted__fast: 'RewardCard_bgCompleted__fast_93',
                        border: 'RewardCard_border_ab',
                        border__right: 'RewardCard_border__right_55',
                    },
                    Em = 'Rewards_base_76',
                    gm = 'Rewards_base__completed_f5',
                    pm = 'Rewards_base__wide_f7',
                    bm = 'Rewards_reward_24';
                function Am() {
                    return (
                        (Am =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Am.apply(this, arguments)
                    );
                }
                const fm = (0, q.Pi)(({ isCompleted: e, isActive: t, rewards: a, fixedSize: r }) => {
                        const n = S(),
                            u = null != r ? r : n.mediaSize <= B.Medium ? tl.Small : tl.Big,
                            o = (e) => Rl({ rewards: e, size: u }),
                            i = F()(Em, u === tl.Small && o(a).length > 2 && pm, e && !t && gm);
                        return s().createElement(
                            'div',
                            { className: i },
                            ve(o(a), (e) => s().createElement(bl, Am({ className: bm, key: e.name }, e))),
                        );
                    }),
                    hm = (0, q.Pi)(({ isCompleted: e, isActive: t, isLast: a, rewards: r }) => {
                        const n = S(),
                            u = F()(
                                _m.base,
                                n.mediaSize === B.Medium && _m.base__mediaMedium,
                                n.mediaSize === B.Large && _m.base__mediaLarge,
                                n.remScreenHeight >= 1200 && _m.base__mediaExtraExtraLarge,
                            ),
                            o = F()(_m.activeBlock, t && _m.activeBlock__completed),
                            i = F()(_m.bgCompleted, (t || e) && _m.bgCompleted__completed);
                        return s().createElement(
                            'div',
                            { className: u },
                            s().createElement('div', { className: o }),
                            s().createElement('div', { className: i }),
                            s().createElement(fm, { rewards: r, isActive: t, isCompleted: e }),
                            s().createElement('div', { className: _m.border }),
                            a && s().createElement('div', { className: F()(_m.border, _m.border__right) }),
                        );
                    }),
                    vm = 'RewardCards_base_07',
                    Fm = (0, q.Pi)(() => {
                        const e = Uc().model.computes.levels();
                        return s().createElement(
                            'div',
                            { className: vm },
                            e.map(({ isCompleted: e, isActive: t, isLast: a, rewards: r }, n) =>
                                s().createElement(hm, { key: n, isCompleted: e, isActive: t, isLast: a, rewards: r }),
                            ),
                        );
                    }),
                    Cm = 'OptimizedProgressBar_base_1f',
                    Dm = 'OptimizedProgressBar_wrapper_ab',
                    Bm = 'OptimizedProgressBar_background_ce',
                    wm = ['api', 'value', 'maxValue', 'theme'];
                function km() {
                    return (
                        (km =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        km.apply(this, arguments)
                    );
                }
                const Sm = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Rm = (e) => {
                        let t = e.api,
                            a = e.value,
                            r = e.maxValue,
                            n = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? Ls : o,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) ((a = u[r]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, wm);
                        const c = (0, u.useRef)(null),
                            m = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            _ = Dt(0, a, n) / n,
                            E = (0, u.useCallback)(
                                (e) => {
                                    (d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, r) => {
                                            const n = a.offsetWidth - r.offsetWidth,
                                                u = e - Sm(a, t),
                                                s = Dt(0, n, u);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, d.current),
                                        m.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: r, line: n },
                                            ) => {
                                                const u = Math.max(0, Math.floor(r.offsetWidth * a) - 8e3),
                                                    s = e - Sm(r, t),
                                                    o = Dt(0, u, s);
                                                n.style.left = `${o}px`;
                                            })(e, _, { line: m.current, container: c.current }));
                                },
                                [_],
                            ),
                            g = (0, u.useMemo)(() => Ps(i), [i]);
                        return (
                            (t.current.update = E),
                            s().createElement(
                                'div',
                                { className: Cm, ref: c },
                                s().createElement(
                                    'div',
                                    { className: Dm },
                                    s().createElement(
                                        'div',
                                        { style: g, className: F()(Bm, l.progressBarBackgroundClassMix), ref: d },
                                        s().createElement(us, {
                                            size: l.size,
                                            classMix: l.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    s().createElement(
                                        Ms,
                                        km({}, l, {
                                            lineRef: m,
                                            value: a,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    ym = (e, t, a) =>
                        F()(
                            e[a],
                            t === xc.ProgressAlreadyFinished
                                ? e[`${a}__fast`]
                                : t >= xc.ProgressFinished
                                  ? e[`${a}__completed`]
                                  : void 0,
                        ),
                    xm = {
                        base: 'Container_base_31',
                        progressWrapper: 'Container_progressWrapper_e1',
                        progressWrapper__completed: 'Container_progressWrapper__completed_9e',
                        progressWrapper__fast: 'Container_progressWrapper__fast_af',
                        bg: 'Container_bg_d7',
                    },
                    Tm = (0, q.Pi)(({ api: e, theme: t }) => {
                        const a = Uc(),
                            r = a.model,
                            n = a.controls,
                            o = r.progressAnimationState.get(),
                            i = r.computes,
                            l = r.previousTokenValue.get(),
                            c = r.currentTokenValue.get(),
                            m = (0, u.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, u.useCallback)((e) => {
                            m.current.update(e);
                        }, []);
                        const d = (0, u.useState)({
                                maxPoints: 1 * i.levels().length,
                                previousEarnedPoints: l,
                                progressionSize: l,
                            }),
                            _ = d[0],
                            E = _.previousEarnedPoints,
                            g = _.maxPoints,
                            p = _.progressionSize,
                            b = d[1];
                        (0, u.useEffect)(() => {
                            (b((e) => {
                                const t = 0 === e.progressionSize ? l : e.progressionSize;
                                return {
                                    maxPoints: 1 * i.levels().length,
                                    previousEarnedPoints: t,
                                    progressionSize: c,
                                };
                            }),
                                l !== c && W('pr_progress_bar'));
                        }, [l, c, i]);
                        const A = (0, u.useMemo)(
                            () =>
                                Object.assign({}, Is, {
                                    withStack: !0,
                                    type: ns.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, u.useEffect)(() => {
                                if (o === xc.ProgressChange)
                                    return hn(() => {
                                        n.finishProgressionChange();
                                    }, 700);
                            }, [n, o]),
                            s().createElement(
                                'div',
                                { className: xm.base },
                                s().createElement('div', { className: xm.bg }),
                                s().createElement(
                                    'div',
                                    { className: ym(xm, o, 'progressWrapper') },
                                    s().createElement(Rm, {
                                        animationSettings: A,
                                        deltaFrom: E,
                                        value: p,
                                        maxValue: g,
                                        api: m,
                                        theme: t,
                                    }),
                                ),
                            )
                        );
                    }),
                    Pm = {
                        base: 'Content_base_d5',
                        base__centered: 'Content_base__centered_e6',
                        base__layoutReady: 'Content_base__layoutReady_84',
                        horizontalContent: 'Content_horizontalContent_91',
                        wrapper: 'Content_wrapper_d8',
                        progress: 'Content_progress_35',
                        progressArea: 'Content_progressArea_68',
                    },
                    Nm = 'ScrollDrag_base_bd',
                    Lm = 'ScrollDrag_base__grabbing_1f',
                    Im = ({ api: e, children: t, updateProgressBarPosition: a }) => {
                        const r = (0, u.useState)(0),
                            n = r[0],
                            o = r[1],
                            i = (0, u.useState)(0),
                            l = i[0],
                            c = i[1],
                            m = (0, u.useState)(!1),
                            d = m[0],
                            _ = m[1];
                        (0, u.useEffect)(
                            () =>
                                ye(() => {
                                    const t = (e) => {
                                        const t = e.value.scrollPosition;
                                        d || o(-t);
                                    };
                                    return (
                                        e.events.on('change', t),
                                        () => {
                                            e.events.off('change', t);
                                        }
                                    );
                                }),
                            [e, d],
                        );
                        const E = (0, u.useCallback)(
                                (e) => {
                                    (_(!0), c(e.clientX), a());
                                },
                                [a],
                            ),
                            g = (0, u.useCallback)(() => {
                                (_(!1), c(0), a());
                            }, [a]),
                            p = (0, u.useCallback)(
                                (t) => {
                                    if (d) {
                                        const r = Dt(-(e.getBounds()[1] || 0), 0, n + t.clientX - l);
                                        (e.applyScroll(-r, !0), c(t.clientX), o(r), a());
                                    }
                                },
                                [d, e, n, l, a],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: F()(Nm, d && Lm),
                                onMouseDown: E,
                                onMouseUp: g,
                                onMouseMove: p,
                                onMouseLeave: g,
                            },
                            t,
                        );
                    };
                function Mm(e, t, a, r, n, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(r, n);
                }
                const Om = (0, q.Pi)(({ api: e }) => {
                        const t = Uc().model,
                            a = t.computes,
                            r = a.levels,
                            n = a.getScrollContainerMaxWidth,
                            o = a.currentLevel,
                            i = S(),
                            l = (0, u.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = (0, u.useState)(!1),
                            _ = d[0],
                            E = d[1],
                            g = r().length,
                            p = t.progressAnimationState.get(),
                            b = t.currentTokenValue.get(),
                            A = n(i.mediaSize, t.computes.levels(), i.mediaSize >= B.Large ? Mc : Oc, 0),
                            f = (0, u.useRef)({ moveProgressBars: te }),
                            h = (0, u.useRef)(null),
                            v = (0, u.useRef)(null),
                            C = e.animationScroll.scrollPosition,
                            D = e.getWrapperSize,
                            w = e.contentRef,
                            k = e.wrapperRef,
                            R = e.getContainerSize,
                            y = e.applyScroll;
                        (0, u.useLayoutEffect)(
                            () =>
                                ye(() => {
                                    const e = k.current,
                                        t = v.current;
                                    if (!e || !t) return;
                                    const a = parseFloat(getComputedStyle(t.children[0]).width),
                                        r = parseFloat(getComputedStyle(t).paddingRight),
                                        n = parseFloat(getComputedStyle(e).paddingLeft);
                                    (m(i.remScreenWidth >= g * a + r + n), E(!0));
                                }),
                            [i.remScreenWidth, k, g],
                        );
                        const x = (0, u.useCallback)(
                                (e) => {
                                    if (h.current) {
                                        const t = D();
                                        f.current.moveProgressBars({
                                            viewPort: h.current,
                                            horizontalScrollPosition: t ? e - t : e,
                                        });
                                    }
                                },
                                [D],
                            ),
                            T = () => {
                                x(C.goal);
                            },
                            P = (0, u.useCallback)(() => {
                                const e = w.current,
                                    t = r().length;
                                if (e && t > 0) {
                                    const a = R() || 0,
                                        r = D() || 0,
                                        n = a / t,
                                        u = o() * n,
                                        s = (r - e.offsetLeft - n) / 2;
                                    y(Dt(0, a - r, u - s), { immediate: p === xc.ProgressAlreadyFinished });
                                }
                                0 === C.goal && x(C.goal);
                            }, [y, o, r, w, R, D, p, C.goal, x]);
                        return (
                            (0, u.useEffect)(() => {
                                P();
                            }, [b, P]),
                            (0, u.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = R(),
                                                    t = C.goal;
                                                (yield (0, X.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    }));
                                                const a = R();
                                                (x(a && e && a !== e ? (t * a) / e : t), P());
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, n) {
                                                    var u = e.apply(t, a);
                                                    function s(e) {
                                                        Mm(u, r, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Mm(u, r, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, u.useEffect)(() => hn(() => x(C.goal), 0), [b, C.goal, x]),
                            s().createElement(
                                'div',
                                {
                                    className: F()(Pm.base, c && Pm.base__centered, _ && Pm.base__layoutReady),
                                    ref: h,
                                    onWheel: () => x(C.goal),
                                    style: { maxWidth: `${A}rem` },
                                },
                                s().createElement(
                                    jc.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: Pm.horizontalContent,
                                        classNames: { wrapper: Pm.wrapper },
                                        barClassNames: { base: Pm.bar },
                                        onDrag: T,
                                    },
                                    s().createElement(
                                        Im,
                                        { api: e, updateProgressBarPosition: T },
                                        s().createElement(dm, { levelRef: v }),
                                        s().createElement(
                                            'div',
                                            { className: Pm.progress },
                                            s().createElement(
                                                'div',
                                                { className: Pm.progressArea },
                                                s().createElement(Tm, { api: f }),
                                            ),
                                        ),
                                        s().createElement(Fm, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Hm = {
                        base: 'Progression_base_d2',
                        contentWrapper: 'Progression_contentWrapper_6f',
                        progressionContentWrapper: 'Progression_progressionContentWrapper_59',
                        progressionContentWrapper__completed: 'Progression_progressionContentWrapper__completed_a7',
                        progressionContentWrapper__fast: 'Progression_progressionContentWrapper__fast_58',
                        prompt: 'Progression_prompt_7b',
                        'add-blur': 'Progression_add-blur_31',
                        hide: 'Progression_hide_32',
                        show: 'Progression_show_89',
                    },
                    Wm = (0, q.Pi)(({ className: e }) => {
                        const t = Uc(),
                            a = t.model,
                            r = t.controls,
                            n = a.progressAnimationState.get(),
                            o = a.computes.isProgressionCompleted(),
                            i = a.computes.wasProgressionCompletedBeforeStart(),
                            l = vu();
                        return (
                            (0, u.useEffect)(
                                () =>
                                    i
                                        ? r.completeProgression(!0)
                                        : n === xc.ChangeCompleted && o
                                          ? hn(() => {
                                                r.completeProgression(!1);
                                            }, 1600)
                                          : n !== xc.Scrolling || i
                                            ? n === xc.HighlightCard
                                                ? hn(() => {
                                                      r.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : hn(() => {
                                                  r.finishScrolling();
                                              }, 1200),
                                [n, i, o, r],
                            ),
                            s().createElement(
                                'div',
                                { className: F()(Hm.base, e) },
                                s().createElement(
                                    'div',
                                    { className: Hm.contentWrapper },
                                    s().createElement(
                                        'div',
                                        { className: ym(Hm, n, 'progressionContentWrapper') },
                                        s().createElement(Om, { api: l }),
                                    ),
                                    s().createElement(Gc, { className: Hm.prompt }),
                                ),
                            )
                        );
                    });
                let Um, $m, zm;
                (!(function (e) {
                    ((e.NotStarted = 'notStarted'),
                        (e.Active = 'active'),
                        (e.LastWeek = 'lastWeek'),
                        (e.Finished = 'finished'));
                })(Um || (Um = {})),
                    (function (e) {
                        ((e.Timer = 'timer'),
                            (e.Countdown = 'countdown'),
                            (e.Cooldown = 'cooldown'),
                            (e.None = 'none'));
                    })($m || ($m = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(zm || (zm = {})));
                const Gm = () => {},
                    jm = (e = 0, t, a = 0, r = Gm) => {
                        const n = (0, u.useState)(e),
                            s = n[0],
                            o = n[1];
                        return (
                            (0, u.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        u = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== a && t <= a ? (o(a), r && r(), clearInterval(u)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? ln : 1)),
                                        );
                                    return () => {
                                        clearInterval(u);
                                    };
                                }
                                o(0);
                            }, [e, t, a, r]),
                            s
                        );
                    };
                X.Sw.instance;
                let qm;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(qm || (qm = {}));
                X.Sw.instance;
                const Vm = jm,
                    Xm = 'Countdown_base_fe',
                    Qm = 'Countdown_icon_8b',
                    Ym = 'Countdown_description_8d',
                    Km = (e) => e.toString().padStart(2, '0'),
                    Zm = (e, t) => {
                        switch (t) {
                            case zm.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? ia(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? ia(R.strings.common.duration.days(), { days: e.days })
                                              : `${ia(R.strings.common.duration.days(), { days: e.days })} ${ia(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? ia(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${ia(R.strings.common.duration.hours(), { hours: e.hours })} ${ia(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : ia(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case zm.Short:
                                return `${Km(e.minutes)}:${Km(e.seconds)}`;
                            case zm.Long:
                                return `${Km(e.hours)}:${Km(e.minutes)}:${Km(e.seconds)}`;
                            case zm.Extended:
                                return `${ia(R.strings.common.duration.days(), { days: e.days })} | ${Km(e.hours)}:${Km(e.minutes)}:${Km(e.seconds)}`;
                        }
                    },
                    Jm = R.images.gui.maps.icons.components.countdown,
                    ed = (e, t) => {
                        const a = 2 === t ? Jm.big : Jm;
                        switch (e) {
                            case $m.Timer:
                                return a.clock();
                            case $m.Countdown:
                                return a.hourglass();
                            case $m.Cooldown:
                                return a.lock();
                        }
                    },
                    td = (0, u.memo)(
                        ({
                            duration: e,
                            icon: t = $m.Timer,
                            style: a = zm.Description,
                            onTimeReached: r,
                            className: n = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = a !== zm.Description ? 1 : void 0,
                                m = Vm(e, c),
                                d = (() => {
                                    const e = (0, u.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, u.useEffect)(() => {
                                            const e = () => {
                                                a(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })();
                            r && r[m] && r[m]();
                            const _ = Zm(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / mn);
                                    t -= a * mn;
                                    const r = Math.trunc(t / cn);
                                    t -= r * cn;
                                    const n = Math.trunc(t / ln);
                                    return ((t -= n * ln), { days: a, hours: r, minutes: n, seconds: t });
                                })(m),
                                a,
                            );
                            return s().createElement(
                                'div',
                                { className: F()(Xm, n) },
                                t !== $m.None &&
                                    s().createElement('div', {
                                        className: F()(Qm, o.icon),
                                        style: { backgroundImage: `url('${ed(t, d)}')` },
                                    }),
                                l
                                    ? s().createElement(
                                          'div',
                                          { className: F()(Ym, o.text) },
                                          s().createElement(Xr, { text: l, binding: { timerText: _ } }),
                                      )
                                    : s().createElement('div', { className: F()(Ym, o.text) }, _),
                            );
                        },
                    ),
                    ad = {
                        base: 'Separator_base_81',
                        separator: 'Separator_separator_9e',
                        base__completedBattleQuests: 'Separator_base__completedBattleQuests_ef',
                        separator__left: 'Separator_separator__left_74',
                        base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_4d',
                        base__condition: 'Separator_base__condition_d9',
                        base__awards: 'Separator_base__awards_d6',
                        base__lockedByNoXVehicles: 'Separator_base__lockedByNoXVehicles_00',
                        base__lockedByInactiveSeason: 'Separator_base__lockedByInactiveSeason_66',
                        base__lockedByPreviousQuest: 'Separator_base__lockedByPreviousQuest_75',
                        base__completed: 'Separator_base__completed_5f',
                        show: 'Separator_show_ca',
                        separator__right: 'Separator_separator__right_3d',
                        ellipse: 'Separator_ellipse_c0',
                        firstLayer: 'Separator_firstLayer_34',
                        secondLayer: 'Separator_secondLayer_54',
                        'add-blur': 'Separator_add-blur_ba',
                        hide: 'Separator_hide_0e',
                    };
                let rd;
                !(function (e) {
                    ((e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests'));
                })(rd || (rd = {}));
                const nd = ({ children: e, statusAnimation: t, type: a }) =>
                        s().createElement(
                            'div',
                            { className: F()(ad.base, ad[`base__${a}`], ad[`base__${t}`]) },
                            s().createElement(
                                'div',
                                { className: F()(ad.separator, ad.separator__left) },
                                s().createElement(
                                    'div',
                                    { className: ad.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: ad.firstLayer },
                                        s().createElement('div', { className: ad.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            s().createElement(
                                'div',
                                { className: F()(ad.separator, ad.separator__right) },
                                s().createElement(
                                    'div',
                                    { className: ad.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: ad.firstLayer },
                                        s().createElement('div', { className: ad.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    ud = {
                        base: 'Timer_base_ad',
                        timer: 'Timer_timer_4c',
                        block: 'Timer_block_de',
                        base__small: 'Timer_base__small_5a',
                        base__big: 'Timer_base__big_03',
                        text: 'Timer_text_35',
                        bgCountdown: 'Timer_bgCountdown_86',
                        description: 'Timer_description_bc',
                        countdown: 'Timer_countdown_e1',
                        'add-blur': 'Timer_add-blur_c0',
                        hide: 'Timer_hide_7d',
                        show: 'Timer_show_1b',
                    };
                let sd;
                !(function (e) {
                    ((e.Big = 'big'), (e.Small = 'small'));
                })(sd || (sd = {}));
                const od = ({ size: e, currentTimerDate: t, text: a, onlyText: r = !1 }) => {
                        const n = e === sd.Big;
                        return s().createElement(
                            'div',
                            { className: F()(ud.base, ud[`base__${e}`]) },
                            s().createElement(
                                'div',
                                { className: ud.timer },
                                s().createElement(
                                    nd,
                                    { type: n ? rd.CompletedBattleQuests : rd.InProgressBattleQuests },
                                    s().createElement(
                                        'div',
                                        { className: ud.block },
                                        a && s().createElement('div', { className: ud.text }, a),
                                        !r &&
                                            t &&
                                            s().createElement(
                                                'div',
                                                { className: ud.countdown },
                                                s().createElement('div', { className: ud.bgCountdown }),
                                                s().createElement(td, {
                                                    duration: t,
                                                    style: zm.Description,
                                                    classNames: { text: ud.description },
                                                    className: ud.countdown,
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    },
                    id = 'ResetStatus_base_25',
                    ld = 'ResetStatus_base__ended_5e',
                    cd = 'ResetStatus_endedTextTitle_20',
                    md = 'ResetStatus_endedTextSubtitle_6e',
                    dd = R.strings.comp7.weeklyQuests.resetStatus,
                    _d = (0, q.Pi)(({ className: e }) => {
                        const t = Uc().model,
                            a = t.root.get(),
                            r = a.seasonState,
                            n = a.resetTimeLeft,
                            u = t.computes.isAllQuestsCompleted;
                        return u() && r === Um.LastWeek
                            ? s().createElement(
                                  'div',
                                  { className: F()(id, ld, e) },
                                  s().createElement(Xr, { text: dd.ended.lastWeek.title(), classMix: cd }),
                              )
                            : u()
                              ? s().createElement(
                                    'div',
                                    { className: F()(id, ld, e) },
                                    s().createElement(Xr, { text: dd.ended.title(), classMix: cd }),
                                    s().createElement(Xr, { text: dd.ended.subtitle(), classMix: md }),
                                    s().createElement(od, {
                                        size: sd.Big,
                                        currentTimerDate: n,
                                        text: dd.ended.title(),
                                    }),
                                )
                              : r === Um.LastWeek
                                ? s().createElement(
                                      'div',
                                      { className: F()(id, e) },
                                      s().createElement(od, {
                                          size: sd.Small,
                                          currentTimerDate: n,
                                          text: dd.lastWeek(),
                                      }),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: F()(id, e) },
                                      s().createElement(od, { size: sd.Small, currentTimerDate: n, text: dd.timer() }),
                                  );
                    }),
                    Ed = 'Progress_base_d5',
                    gd = 'Progress_counter_3b',
                    pd = 'Progress_current_fd',
                    bd = 'Progress_progressBar_d2',
                    Ad = R.strings.comp7.weeklyQuests.card.progress,
                    fd = ({ current: e, total: t, isDisabled: a, className: r }) =>
                        s().createElement(
                            'div',
                            { className: F()(Ed, r) },
                            s().createElement(Xr, {
                                classMix: gd,
                                text: Ad.counter(),
                                binding: {
                                    current: s().createElement(
                                        'div',
                                        { className: pd },
                                        s().createElement(Nt, { value: e }),
                                    ),
                                    total: s().createElement(Nt, { value: t }),
                                },
                            }),
                            s().createElement(
                                'div',
                                { className: bd },
                                s().createElement(Ms, { size: rs.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    hd = {
                        nextArrowWrapper: 'TaskBattle_nextArrowWrapper_bb',
                        nextArrow: 'TaskBattle_nextArrow_32',
                        nextArrow__completed: 'TaskBattle_nextArrow__completed_0d',
                        nextArrow__active: 'TaskBattle_nextArrow__active_0a',
                        base: 'TaskBattle_base_44',
                        base__completed: 'TaskBattle_base__completed_96',
                        'add-shadow': 'TaskBattle_add-shadow_a9',
                        base__lockedByNoXVehicles: 'TaskBattle_base__lockedByNoXVehicles_65',
                        base__lockedByInactiveSeason: 'TaskBattle_base__lockedByInactiveSeason_b0',
                        base__lockedByPreviousQuest: 'TaskBattle_base__lockedByPreviousQuest_34',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_96',
                        taskType: 'TaskBattle_taskType_94',
                        conditions: 'TaskBattle_conditions_2d',
                        description: 'TaskBattle_description_f6',
                        description__completed: 'TaskBattle_description__completed_a2',
                        'update-condition': 'TaskBattle_update-condition_a0',
                        description__completedWasVisited: 'TaskBattle_description__completedWasVisited_42',
                        awards: 'TaskBattle_awards_0a',
                        'add-blur': 'TaskBattle_add-blur_68',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_8a',
                        awardsList: 'TaskBattle_awardsList_bf',
                        award: 'TaskBattle_award_8b',
                        hide: 'TaskBattle_hide_e0',
                        show: 'TaskBattle_show_4d',
                    },
                    vd = {
                        base: 'TaskType_base_d9',
                        ellipse: 'TaskType_ellipse_95',
                        base__completed: 'TaskType_base__completed_00',
                        hide: 'TaskType_hide_4e',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_28',
                        base__lockedByNoXVehicles: 'TaskType_base__lockedByNoXVehicles_99',
                        base__lockedByInactiveSeason: 'TaskType_base__lockedByInactiveSeason_c5',
                        base__lockedByPreviousQuest: 'TaskType_base__lockedByPreviousQuest_42',
                        typeIcon: 'TaskType_typeIcon_0c',
                        completedIcon: 'TaskType_completedIcon_cf',
                        lockIcon: 'TaskType_lockIcon_20',
                        'slide-down': 'TaskType_slide-down_53',
                        'add-blur': 'TaskType_add-blur_1d',
                        show: 'TaskType_show_a3',
                    },
                    Fd = ({ taskBattleIcon: e, statusAnimation: t }) =>
                        s().createElement(
                            'div',
                            { className: F()(vd.base, vd[`base__${t}`]) },
                            s().createElement('div', { className: vd.ellipse }),
                            s().createElement('div', {
                                className: vd.typeIcon,
                                style: {
                                    backgroundImage: `url('${R.images.comp7.gui.maps.icons.comp7.weekly_quests.$dyn(e)}')`,
                                },
                            }),
                            s().createElement('div', { className: vd.completedIcon }),
                            s().createElement('div', { className: vd.lockIcon }),
                        );
                function Cd() {
                    return (
                        (Cd =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Cd.apply(this, arguments)
                    );
                }
                const Dd = (0, q.Pi)(({ index: e }) => {
                        const t = (0, u.useState)(Rc.Active),
                            a = t[0],
                            r = t[1],
                            n = Uc().model,
                            o = n.computes.questRewards,
                            i = n.computes.questCard(e),
                            l = i.state,
                            c = i.currentProgress,
                            m = i.totalProgress,
                            d = i.description,
                            _ = i.iconKey,
                            E = S();
                        return (
                            (0, u.useEffect)(() => {
                                r(l);
                            }, [l]),
                            s().createElement(
                                s().Fragment,
                                null,
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: hd.nextArrowWrapper },
                                        s().createElement('div', {
                                            className: F()(hd.nextArrow, hd[`nextArrow__${a}`]),
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            hd.base,
                                            hd[`base__${a}`],
                                            E.mediaSize === B.Medium &&
                                                E.remScreenHeight >= 1024 &&
                                                hd.base__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: hd.taskType },
                                        s().createElement(Fd, { taskBattleIcon: _, statusAnimation: a }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: hd.conditions },
                                        s().createElement(
                                            'div',
                                            { className: F()(hd.description, hd[`description__${a}`]) },
                                            d,
                                        ),
                                        l === Rc.Active &&
                                            s().createElement(fd, {
                                                current: c,
                                                total: m,
                                                isDisabled: l !== Rc.Active,
                                            }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: hd.awards },
                                        s().createElement(
                                            nd,
                                            { statusAnimation: a, type: rd.Awards },
                                            s().createElement(
                                                'div',
                                                { className: hd.awardsList },
                                                ve(o(e, tl.Small), (e) =>
                                                    s().createElement(bl, Cd({ className: hd.award, key: e.name }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Bd = {
                        '--pageContentWidth': '78vw',
                        base__completed: 'TaskBattleList_base__completed_e6',
                        'hidden-tasks-list': 'TaskBattleList_hidden-tasks-list_39',
                        base: 'TaskBattleList_base_c6',
                        scroll: 'TaskBattleList_scroll_73',
                        timerWithQuestsTotal: 'TaskBattleList_timerWithQuestsTotal_39',
                        timer: 'TaskBattleList_timer_fe',
                        taskList: 'TaskBattleList_taskList_d4',
                        scrollContainer: 'TaskBattleList_scrollContainer_e0',
                        areaContainer: 'TaskBattleList_areaContainer_fb',
                        areaWrapper: 'TaskBattleList_areaWrapper_04',
                        bar: 'TaskBattleList_bar_d9',
                        'add-blur': 'TaskBattleList_add-blur_67',
                        hide: 'TaskBattleList_hide_56',
                        show: 'TaskBattleList_show_f9',
                        fadeIn: 'TaskBattleList_fadeIn_38',
                        fadeInThreeQuarters: 'TaskBattleList_fadeInThreeQuarters_b4',
                        fadeInHalf: 'TaskBattleList_fadeInHalf_5a',
                        fadeOut: 'TaskBattleList_fadeOut_f6',
                        fadeInWithScale: 'TaskBattleList_fadeInWithScale_0a',
                        slideUp: 'TaskBattleList_slideUp_dd',
                        scale: 'TaskBattleList_scale_d4',
                        raysAppearance: 'TaskBattleList_raysAppearance_32',
                        rotate: 'TaskBattleList_rotate_3f',
                        'reverse-rotate': 'TaskBattleList_reverse-rotate_56',
                        glowAppearance: 'TaskBattleList_glowAppearance_55',
                        highlightAppearance: 'TaskBattleList_highlightAppearance_7c',
                        blink: 'TaskBattleList_blink_1d',
                        slideUpIn: 'TaskBattleList_slideUpIn_33',
                    },
                    wd = (0, q.Pi)(() => {
                        const e = Uc().model.computes,
                            t = e.questCards,
                            a = e.battleTasksStatus,
                            r = e.initialItemScrollIndex,
                            n = e.getScrollContainerMaxWidth,
                            o = S(),
                            i = (0, u.useState)(r()),
                            l = i[0],
                            c = i[1],
                            m = $u(268),
                            d = t.get();
                        return s().createElement(
                            'div',
                            { className: F()(Bd.base, Bd[`base__${a()}`]) },
                            s().createElement(
                                'div',
                                { className: Bd.taskList },
                                s().createElement(
                                    Uu,
                                    {
                                        api: m,
                                        stuckIndex: l,
                                        itemWidth: 268,
                                        onStick: c,
                                        className: Bd.scrollContainer,
                                        areaClassNames: { base: Bd.areaContainer, wrapper: Bd.areaWrapper },
                                        barClassNames: { base: Bd.bar },
                                        containerMaxWidth: n(o.mediaSize, d, 268, 38),
                                    },
                                    ve(d, (e, t) => s().createElement(Dd, { key: t, index: t })),
                                ),
                            ),
                        );
                    }),
                    kd = 'WeeklyQuestsPage_base_6c',
                    Sd = 'WeeklyQuestsPage_content_cc',
                    Rd = 'WeeklyQuestsPage_resetStatus_8a',
                    yd = 'WeeklyQuestsPage_progression_25',
                    xd = () => {
                        const e = (0, xe.useSpring)(_e);
                        return s().createElement(
                            'div',
                            { className: kd },
                            s().createElement(nt, { className: K }, R.strings.comp7.page.heading.weeklyQuests()),
                            s().createElement(Pn, null),
                            s().createElement(
                                xe.animated.div,
                                { className: Sd, style: e },
                                s().createElement(_d, { className: Rd }),
                                s().createElement(wd, null),
                                s().createElement(Wm, { className: yd }),
                            ),
                        );
                    },
                    Td = { context: 'model.weeklyQuestsModel' },
                    Pd = {
                        [me.Progression]: () => s().createElement(Xn, { options: Fi }, s().createElement(vi, null)),
                        [me.RankRewards]: () => s().createElement(Di, { options: Sc }, s().createElement(kc, null)),
                        [me.WeeklyQuests]: () => s().createElement(Wc, { options: Td }, s().createElement(xd, null)),
                        [me.Leaderboard]: () => s().createElement(dt, { options: Un }, s().createElement(Wn, null)),
                    },
                    Nd = ({ pageView: e }) => {
                        const t = Pd[e];
                        return t ? s().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    Ld = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ef',
                        base__qualification: 'App_base__qualification_73',
                        base__progression: 'App_base__progression_3b',
                        base__leaderboard: 'App_base__leaderboard_da',
                        base__rankRewards: 'App_base__rankRewards_55',
                        base__weeklyQuests: 'App_base__weeklyQuests_58',
                        viewContainer: 'App_viewContainer_81',
                        sidebar: 'App_sidebar_95',
                        info: 'App_info_e9',
                    },
                    Id = { context: 'model.sidebar' },
                    Md = { context: 'model.scheduleInfo' },
                    Od = (0, q.Pi)(() => {
                        const e = be(),
                            t = e.model,
                            a = e.controls,
                            r = t.root.get().pageViewId,
                            n = t.computes.isProgressionInQualification();
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    Ld.base,
                                    n && !ee() && Ld.base__qualification,
                                    !n && Ld[`base__${de[r]}`],
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Ld.viewContainer },
                                s().createElement(le, { options: Md }, s().createElement(Nd, { pageView: r })),
                            ),
                            s().createElement(
                                Se,
                                { options: Id },
                                s().createElement(Ye, { pageView: r, className: Ld.sidebar }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ld.info },
                                s().createElement(j, {
                                    caption: R.strings.comp7.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                            ),
                            s().createElement(J, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(M, null, s().createElement(pe, null, s().createElement(Od, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, r] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), r < n && (n = r));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 992),
        (() => {
            var e = { 992: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        n,
                        [u, s, o] = a,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); i < u.length; i++)
                        ((n = u[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(9502));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
