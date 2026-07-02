(() => {
    var __webpack_modules__ = {
            3532: (u) => {
                u.exports = {
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
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => o, onResize: () => r }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${e}`,
                                            o = i[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (u.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((u.enabled = !1), n());
                            },
                            enable() {
                                ((u.enabled = !0), n());
                            },
                            enableOutside() {
                                u.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    }));
                var n = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
                var n = t(2472);
                const a = {
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => y,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function D(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const n = ['args'],
                    a = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    r = {
                        close(u) {
                            a('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(u) {
                            a(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, a;
                (t.d(e, { n: () => n }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_0 = 48)] = 'KEY_0'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD'));
                    })(n || (n = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(a || (a = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(3138);
                class a {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => r.Z, B0: () => s, c9: () => h, ry: () => C, Eu: () => g });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                const a = n;
                var r = t(1358);
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    F = t(3138);
                const _ = ['args'];
                function D(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, _);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    b = () => h(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var v = t(7572);
                const w = a.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                m = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(A),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: B(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, b);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            5235: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u);
                }
                const a = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
                var r = t(6179),
                    i = t.n(r),
                    o = t(493),
                    s = t.n(o),
                    l = t(6483),
                    E = t.n(l),
                    c = t(3138);
                const A = ['children'],
                    m = i().createContext(null),
                    d = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, A);
                        return i().createElement(m.Provider, { value: t }, e);
                    },
                    F = {
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
                let _, D;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(_ || (_ = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(D || (D = {})));
                const B = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: A,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: D,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const g = (0, r.useRef)(null),
                        h = (0, r.useState)(t),
                        b = h[0],
                        p = h[1],
                        v = (0, r.useState)(!1),
                        w = v[0],
                        f = v[1],
                        y = (0, r.useState)(!1),
                        x = y[0],
                        S = y[1],
                        M = (0, r.useCallback)(() => {
                            o || (g.current && (g.current.focus(), p(!0)));
                        }, [o]),
                        T = (0, r.useCallback)(
                            (u) => {
                                b && null !== g.current && !g.current.contains(u.target) && p(!1);
                            },
                            [b],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                o || (C && C(u));
                            },
                            [o, C],
                        ),
                        N = (0, r.useCallback)(
                            (u) => {
                                o || (null !== l && n(l), A && A(u), S(!0));
                            },
                            [o, l, A],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                m && m(u);
                            },
                            [m],
                        ),
                        k = (0, r.useCallback)(
                            (u) => {
                                o || (D && D(u), f(!1));
                            },
                            [o, D],
                        ),
                        P = (0, r.useCallback)(
                            (u) => {
                                o || (null !== c && n(c), d && d(u), t && M(), f(!0));
                            },
                            [o, c, d, M, t],
                        ),
                        H = (0, r.useCallback)(
                            (u) => {
                                o || (B && B(u), f(!1));
                            },
                            [o, B],
                        ),
                        I = E()(
                            F.base,
                            F[`base__${a}`],
                            {
                                [F.base__disabled]: o,
                                [F[`base__${e}`]]: e,
                                [F.base__focus]: b,
                                [F.base__highlightActive]: w,
                                [F.base__firstHover]: x,
                            },
                            s,
                        ),
                        W = E()(F.state, F.state__default);
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
                            p(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: g,
                                className: I,
                                onMouseEnter: N,
                                onMouseMove: O,
                                onMouseUp: k,
                                onMouseDown: P,
                                onMouseLeave: H,
                                onClick: L,
                            },
                            a !== _.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: F.back }),
                                    i().createElement('span', { className: F.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: W },
                                i().createElement('span', { className: F.stateDisabled }),
                                i().createElement('span', { className: F.stateHighlightHover }),
                                i().createElement('span', { className: F.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: F.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                B.defaultProps = { type: _.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const C = (0, r.memo)(B),
                    g = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let h;
                !(function (u) {
                    ((u.Minimize = 'minimize'), (u.Close = 'close'));
                })(h || (h = {}));
                const b = ({ onClick: u, type: e }) => {
                        const t = (0, r.useCallback)(() => {
                                a.playHighlight();
                            }, []),
                            n = (0, r.useCallback)((u) => u.stopPropagation(), []),
                            o = E()(g.base, g[`base__${e}`]);
                        return i().createElement('div', { className: o, onClick: u, onMouseEnter: t, onMouseDown: n });
                    },
                    p = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: e, resId: n }
                        );
                    };
                var v = t(4179);
                const w = [
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
                function f(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const y = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: v.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    x = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            m = u.decoratorId,
                            d = void 0 === m ? 0 : m,
                            F = u.isEnabled,
                            _ = void 0 === F || F,
                            D = u.targetId,
                            B = void 0 === D ? 0 : D,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, w);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(() => B || p().resId, [B]),
                            x = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (y(t, d, { isMouseEvent: !0, on: !0, arguments: f(n) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, d, n, v, C]),
                            S = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        y(t, d, { on: !1 }, v),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, d, v, g]),
                            M = (0, r.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', M, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', M, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === _ && S();
                            }, [_, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ),
                            _
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                          a && a(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (S(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === A && S(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === A && S(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    },
                    S = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const T = R.views.common.tooltip_window.simple_tooltip_content,
                    L = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            a = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, S);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: a, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, a, s]);
                        return i().createElement(
                            x,
                            M(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? T.SimpleTooltipHtmlContent('resId') : T.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    N = ({ tooltipHeader: u, tooltipBody: e }) =>
                        i().createElement(
                            L,
                            { isEnabled: !0, header: u, body: e },
                            i().createElement('div', { className: 'Info_base_7b' }),
                        ),
                    O = ({ title: u, infoTooltipHeader: e, infoTooltipBody: t }) =>
                        i().createElement(
                            'div',
                            { className: 'Title_base_44' },
                            u,
                            e && t && i().createElement(N, { tooltipHeader: e, tooltipBody: t }),
                        ),
                    k = ({
                        title: u,
                        showMinimizeBtn: e,
                        onMinimize: t,
                        onClose: n,
                        onReload: o,
                        infoTooltipHeader: s,
                        infoTooltipBody: l,
                    }) => {
                        const A = (0, r.useState)(!1),
                            m = A[0],
                            d = A[1],
                            F = (0, r.useCallback)((u) => {
                                const e = () => {
                                    (c.O.view.sendEvent.move(!1), d(!1), document.removeEventListener('mouseup', e));
                                };
                                0 === u.button &&
                                    (c.O.view.sendEvent.move(!0), d(!0), document.addEventListener('mouseup', e));
                            }, []);
                        return i().createElement(
                            'div',
                            { className: E()('Header_base_ff', m && 'Header_base__grabbing_dc'), onMouseDown: F },
                            i().createElement(O, { title: u, infoTooltipBody: l, infoTooltipHeader: s }),
                            o &&
                                i().createElement(
                                    C,
                                    {
                                        mixClass: 'Header_reloadButton_19',
                                        onClick: (u) => {
                                            (a.playClick(), null == o || o(u));
                                        },
                                    },
                                    i().createElement('div', {
                                        className: E()('Header_icon_6e', 'Header_icon__reload_c2'),
                                    }),
                                ),
                            e &&
                                i().createElement(b, {
                                    type: h.Minimize,
                                    onClick: (u) => {
                                        (a.playClick(), t ? t(u) : c.O.view.sendEvent.minimize());
                                    },
                                }),
                            i().createElement(b, {
                                type: h.Close,
                                onClick: (u) => {
                                    (a.playClick(), n ? n(u) : c.O.view.sendEvent.close());
                                },
                            }),
                        );
                    },
                    P = i().forwardRef(
                        (
                            {
                                title: u,
                                showMinimizeBtn: e,
                                onClose: t,
                                onReload: n,
                                onMinimize: a,
                                onFocusChange: o,
                                infoTooltipHeader: s,
                                infoTooltipBody: l,
                                className: A,
                                children: m,
                            },
                            F,
                        ) => {
                            const _ = (0, r.useRef)(null),
                                D = (0, r.useRef)(null),
                                B = (0, r.useState)(!0),
                                C = B[0],
                                g = B[1],
                                h = (function () {
                                    const u = (0, r.useRef)(0);
                                    var e;
                                    return (
                                        (e = () => {
                                            window.cancelAnimationFrame(u.current);
                                        }),
                                        (0, r.useEffect)(() => e, []),
                                        (0, r.useMemo)(
                                            () => ({
                                                run: (e) => {
                                                    (window.cancelAnimationFrame(u.current),
                                                        (u.current = window.requestAnimationFrame(() => {
                                                            u.current = window.requestAnimationFrame(() => {
                                                                (e(), (u.current = 0));
                                                            });
                                                        })));
                                                },
                                                clear: () => {
                                                    (window.cancelAnimationFrame(u.current), (u.current = 0));
                                                },
                                                get isRunning() {
                                                    return 0 !== u.current;
                                                },
                                            }),
                                            [],
                                        )
                                    );
                                })(),
                                b = () => {
                                    h.run(() => {
                                        const u = _.current,
                                            e = D.current;
                                        if (!u || !e) return;
                                        const t = c.O.view.pxToRem(u.offsetWidth),
                                            n = c.O.view.pxToRem(u.offsetHeight);
                                        ((e.style.width = `${t}rem`), (e.style.height = `${n}rem`));
                                        const a = t + 10 + 26,
                                            r = 28 + n + 5 + 26;
                                        (c.O.view.setInputPaddingsRem(13), c.O.view.resize(a, r, 'rem'));
                                    });
                                };
                            var p;
                            return (
                                (p = () => {
                                    b();
                                }),
                                (0, r.useEffect)(p, []),
                                (0, r.useEffect)(
                                    () =>
                                        c.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && C
                                                ? (g(!1), null == o || o(!1))
                                                : 'inside' !== u || C || (g(!0), null == o || o(!0));
                                        }),
                                    [C, o],
                                ),
                                i().createElement(
                                    d,
                                    { updateSizes: b },
                                    i().createElement(
                                        'div',
                                        {
                                            className: E()('WindowDecorator_base_6a', A),
                                            style: { '--outer-shadow-width': '13rem' },
                                            ref: F,
                                        },
                                        i().createElement('div', {
                                            className: E()(
                                                'WindowDecorator_frame_b5',
                                                C && 'WindowDecorator_frame__focused_af',
                                            ),
                                        }),
                                        i().createElement(k, {
                                            title: u,
                                            infoTooltipHeader: s,
                                            infoTooltipBody: l,
                                            onClose: t,
                                            onMinimize: a,
                                            onReload: n,
                                            showMinimizeBtn: e,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: 'WindowDecorator_container_1d', ref: D },
                                            i().createElement('div', {
                                                className: 'WindowDecorator_contentDecorations_be',
                                            }),
                                            i().createElement(
                                                'div',
                                                { className: 'WindowDecorator_content_0b', ref: _ },
                                                m,
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var H = t(5521);
                const I = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function W(u = H.n.NONE, e = I, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (c.O.view.isEventHandled()) return;
                                (c.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                const G = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    U = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    V = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    j = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    z = v.Sw.instance;
                let $;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })($ || ($ = {}));
                const X = (u = 'model', e = $.Deep) => {
                        const t = (0, r.useState)(0),
                            n = (t[0], t[1]),
                            a = (0, r.useMemo)(() => p(), []),
                            i = a.caller,
                            o = a.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                                [i, u],
                            ),
                            l = (0, r.useState)(() =>
                                ((u) => {
                                    const e = G(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return V(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = G(`${u}.${e}`, window);
                                                return V(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            E = l[0],
                            c = l[1],
                            A = (0, r.useRef)(-1);
                        return (
                            U(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? $.Deep : $.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== $.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === $.Deep
                                                ? (u === E && n((u) => u + 1), c(u))
                                                : c(Object.assign([], u));
                                        },
                                        a = ((u) => {
                                            const e = ((u) => {
                                                    const e = p(),
                                                        t = e.caller,
                                                        n = e.resId,
                                                        a =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: a, modelPath: j(a, ''), resId: n };
                                                })(),
                                                t = e.modelPrefix,
                                                n = u.split('.');
                                            if (n.length > 0) {
                                                const u = [n[0]];
                                                return (
                                                    n.reduce((e, n) => {
                                                        const a = G(j(t, `${e}.${n}`), window);
                                                        return V(a)
                                                            ? (u.push(a.id), `${e}.${n}.value`)
                                                            : (u.push(n), `${e}.${n}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    A.current = z.addCallback(a, t, o, e === $.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (e !== $.None)
                                    return () => {
                                        z.removeCallback(A.current, o);
                                    };
                            }, [o, e]),
                            E
                        );
                    },
                    K = /<link.*?>/g,
                    Y = /\.\.\//g,
                    q = /<script.*?>/g,
                    Z = 'default.css',
                    Q = (u) => {
                        const e = u.match(Y);
                        return e && e.join('');
                    },
                    J = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(Z)) return t.href;
                        }
                        return '';
                    },
                    uu = (u, e) => {
                        const t = J(),
                            n = Q(t);
                        let a,
                            r = u;
                        for (; null !== (a = q.exec(u));) {
                            const u = a[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const t = n + u[2].replace(Y, '');
                                ((r = r.replace(u[2], t)),
                                    (r = r.replace('<div id="root"', `<div data-root-id=${e} id="root"`)));
                            }
                        }
                        return r;
                    },
                    eu = 'subViews.onChanged',
                    tu = (() => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                (u.push(n), e || t());
                            },
                        };
                    })(),
                    nu = (0, r.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: n }) => {
                        const a = (0, r.useState)(''),
                            o = a[0],
                            s = a[1],
                            l = (0, r.useMemo)(() => ({ __html: uu(o, u) }), [o, u]),
                            c = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            A = (0, r.useState)(!1),
                            m = A[0],
                            d = A[1],
                            F = (0, r.useCallback)(
                                (u) => {
                                    u.includes(c) &&
                                        (d(!0), engine.off(eu, F), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            _ = (0, r.useCallback)((u) => {
                                tu.add(
                                    () =>
                                        new Promise((e) => {
                                            s(u);
                                            const t = new MutationObserver(() => {
                                                    (t.disconnect(), e());
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${n}`, _),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            ((t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, v.Eu)().then(() => {
                                                              (console.info(`Sub view ${e} loaded: ${u}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${e}`,
                                                                      t.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', u),
                                                t.send());
                                        })({ name: n, path: t }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`subView:inject->${n}`, _),
                                                console.info(`Sub view ${n} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(eu, F);
                        }, [F, _, u, m]),
                            (0, r.useEffect)(
                                () => () => {
                                    o &&
                                        ((u) => {
                                            const e = Q(J());
                                            let t;
                                            for (; null !== (t = K.exec(u));) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(Y, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(o);
                                },
                                [o],
                            ));
                        const D = E()('SubView_base_df', n);
                        if (o) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = J(),
                                        n = Q(t);
                                    for (; null !== (e = K.exec(u));) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(Z) && n) {
                                            const e = n + u[1].replace(Y, ''),
                                                t = document.createElement('link');
                                            ((t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t));
                                        }
                                    }
                                })(o),
                                t && t(u),
                                i().createElement('div', { className: D, dangerouslySetInnerHTML: l })
                            );
                        }
                        return e ? i().createElement('div', { className: D }, i().createElement(e, null)) : null;
                    }),
                    au = (u) => ({ backgroundImage: `url('${u}')` }),
                    ru = () => {
                        const u = (0, r.useMemo)(() => au(R.images.gui.maps.icons.platoon.common.info()), []);
                        return i().createElement(
                            x,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            i().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: u }),
                        );
                    };
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const ou = (0, r.memo)(
                    ({
                        caption: u,
                        isEnabled: e,
                        description: t,
                        children: n,
                        cButtonProps: a,
                        onClick: o,
                        className: s,
                    }) => {
                        const l = (0, r.useCallback)(() => o(), [o]);
                        return i().createElement(
                            L,
                            { isEnabled: !0, header: u, body: t },
                            i().createElement(
                                'div',
                                { className: s },
                                i().createElement(
                                    C,
                                    iu({ type: _.primary, size: D.small, onClick: l, disabled: !e }, a),
                                    n || u,
                                ),
                            ),
                        );
                    },
                );
                let su;
                !(function (u) {
                    ((u.left = 'left'), (u.top = 'top'), (u.right = 'right'), (u.bottom = 'bottom'));
                })(su || (su = {}));
                const lu = ({ position: u }) => {
                        const e = R.images.gui.maps.icons.platoon.common.separator.$dyn(u),
                            t = [su.right, su.left].includes(u),
                            n = E()(
                                'Separator_base_98',
                                t ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                            );
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement('div', { className: 'Separator_image_5b', style: au(e) }),
                        );
                    },
                    Eu = ['active', 'className', 'children', 'size'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const Au = (u) => {
                        let e = u.active,
                            t = u.className,
                            n = u.children,
                            a = u.size,
                            r = void 0 === a ? D.small : a,
                            o = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Eu);
                        const s = E()('ToggleButton_base_b9', t, e && 'ToggleButton_base__active_68');
                        return i().createElement(
                            'div',
                            { className: s },
                            i().createElement(
                                C,
                                cu({}, o, { type: 'secondary', size: r }),
                                i().createElement('span', { className: 'ToggleButton_content_85' }, n),
                            ),
                            i().createElement('div', { className: 'ToggleButton_overlay_0a' }),
                            i().createElement('div', { className: 'ToggleButton_indicator_85' }),
                        );
                    },
                    mu = ((0, r.memo)(Au), { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 });
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Fu = () => {
                        const u = X(),
                            e = u.shouldShowFindPlayersButton,
                            t = u.shouldShowInvitePlayersButton,
                            a = X('model.btnInviteFriends'),
                            o = X('model.btnFindPlayers'),
                            s = (0, r.useCallback)(() => {
                                (o.onClick(), n(o.soundClickName));
                            }, [o]),
                            l = (0, r.useMemo)(() => ({ type: _.secondary }), []),
                            E = (0, r.useMemo)(
                                () =>
                                    ((u, e, t, n = !0) =>
                                        u && n
                                            ? mu
                                            : ((u, e, t) => ({
                                                  contentId:
                                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                          'resId',
                                                      ),
                                                  decoratorId:
                                                      R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      ),
                                                  args: { header: u, body: e },
                                                  isEnabled: t,
                                              }))(e, t, n))(!o.isEnabled, o.caption, o.description, o.hasTooltip),
                                [o.caption, o.isEnabled, o.description, o.hasTooltip],
                            );
                        return i().createElement(
                            i().Fragment,
                            null,
                            e &&
                                i().createElement(
                                    'div',
                                    { className: 'CommanderControls_left_11' },
                                    i().createElement(
                                        x,
                                        E,
                                        i().createElement(
                                            'div',
                                            null,
                                            i().createElement(
                                                C,
                                                {
                                                    type: o.isLight ? _.primary : _.secondary,
                                                    size: D.small,
                                                    onClick: o.isEnabled ? s : void 0,
                                                    disabled: !o.isEnabled,
                                                    mixClass: 'CommanderControls_findPlayers_66',
                                                },
                                                o.caption,
                                            ),
                                        ),
                                    ),
                                    i().createElement(nu, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: 'CommanderControls_tiersLimit_85',
                                    }),
                                ),
                            t && i().createElement(ou, du({}, a, { cButtonProps: l })),
                        );
                    },
                    _u = () => {
                        const u = X('model.btnSwitchReady'),
                            e = u.onClick,
                            t = u.caption,
                            n = u.description,
                            a = u.tooltipHeader,
                            o = u.isRed,
                            s = u.isEnabled,
                            l = X(),
                            c = l.footerMessage,
                            A = l.isFooterMessageGrey,
                            m = l.isBanned,
                            d = Boolean(a && n),
                            F = (0, r.useCallback)(() => e(), [e]),
                            B = E()('Footer_message_55', !A && 'Footer_message__alert_ad');
                        return i().createElement(
                            'div',
                            { className: 'Footer_base_6c' },
                            i().createElement('div', { className: B }, c),
                            !m &&
                                i().createElement(
                                    L,
                                    { header: a, body: n, isEnabled: d },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(
                                            C,
                                            {
                                                onClick: F,
                                                size: D.small,
                                                type: o ? _.primaryRed : _.primary,
                                                disabled: !s,
                                            },
                                            t,
                                        ),
                                    ),
                                ),
                        );
                    },
                    Du = (u) => ({ backgroundImage: `url('${u}')` }),
                    Bu = ({ currency: u, amount: e }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(u),
                            n = (0, r.useMemo)(() => Du(t), [t]);
                        return i().createElement(
                            'div',
                            { className: 'Bonus_base_00' },
                            i().createElement('div', { className: 'Bonus_currencyImage_61', style: n }),
                            i().createElement('span', { className: 'Bonus_caption_19' }, `+${e}%`),
                        );
                    },
                    Cu = () => {
                        const u = X('model.header.bonuses');
                        return 0 === u.length
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: 'Bonuses_base_c0' },
                                  u
                                      .filter((u) => u)
                                      .map(({ value: u }) =>
                                          i().createElement(Bu, {
                                              currency: u.currency,
                                              amount: u.amount,
                                              key: u.currency,
                                          }),
                                      ),
                              );
                    };
                let gu;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(gu || (gu = {}));
                const hu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    bu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    pu = (u, e, t = gu.left) => u.split(e).reduce(t === gu.left ? hu : bu, []),
                    vu = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    wu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fu = ({ binding: u, text: e = '', classMix: t, alignment: n = gu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, a) =>
                                      i().createElement(
                                          'div',
                                          { className: E()('FormatText_base_d0', t), key: `${e}-${a}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = gu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return wu.includes(t)
                                                                ? vu(u)
                                                                : ((u, e = gu.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          pu(a, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(pu(u, n, gu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, n, u).map((u, e) =>
                                              i().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                let yu;
                var xu;
                (((xu = yu || (yu = {})).SHORT_DATE = 'short-date'),
                    (xu.SHORT_TIME = 'short-time'),
                    (xu.SHORT_DATE_TIME = 'short-date-time'),
                    (xu.FULL_DATE = 'full-date'),
                    (xu.FULL_DATE_TIME = 'full-date-time'),
                    (xu.MONTH = 'month'),
                    (xu.MONTH_DATE = 'month-date'),
                    (xu.DATE_MONTH = 'date-month'),
                    (xu.MONTH_YEAR = 'month-year'),
                    (xu.WEEK_DAY = 'week-day'),
                    (xu.WEEK_DAY_TIME = 'week-day-time'),
                    (xu.YEAR = 'year'),
                    (xu.DATE_YEAR = 'date-year'),
                    Date.now(),
                    v.Sw.instance);
                const Su = ({ isEvent: u }) => {
                    const e = X('model.header.noBonusPlaceholder'),
                        t = e.text,
                        n = e.icon,
                        a = n && Du(n),
                        r = E()('NoBonus_textContainer_18', u && 'NoBonus_textContainer__event_df'),
                        o = E()('NoBonus_icon_0e', u && 'NoBonus_icon__event_dd');
                    return i().createElement(
                        i().Fragment,
                        null,
                        t &&
                            i().createElement(
                                'div',
                                { className: r },
                                i().createElement(fu, { text: t, classMix: 'NoBonus_text_08', alignment: gu.right }),
                            ),
                        a && i().createElement('div', { className: o, style: a }),
                    );
                };
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Tu = () => {
                    const u = X('model.header.btnLeavePlatoon'),
                        e = X('model.header.btnMuteAll'),
                        t = X('model').frontName,
                        a = X('model.header'),
                        o = a.showNoBonusPlaceholder,
                        s = a.showInfoIcon,
                        l = (0, r.useMemo)(() => ({ type: _.secondary }), []),
                        E = (0, r.useCallback)(() => {
                            (u.onClick(), n(R.sounds.gui_platoon_2_leave()));
                        }, [u]),
                        c = (0, r.useCallback)(() => e.onClick(), [e]);
                    return i().createElement(
                        'div',
                        {
                            className: 'Header_base_8d',
                            style: Du(R.images.historical_battles.gui.maps.icons.membersWindow.$dyn(`${t}_header`)),
                        },
                        i().createElement(ou, Mu({}, u, { onClick: E, cButtonProps: l })),
                        e.isVisible &&
                            i().createElement(
                                L,
                                { isEnabled: !0, header: e.tooltipHeader, body: e.tooltipBody },
                                i().createElement(
                                    'div',
                                    { className: 'Header_button_4f' },
                                    i().createElement(
                                        Au,
                                        { onClick: c, active: e.isSelected },
                                        i().createElement('div', { className: 'Header_buttonIcon_99' }),
                                    ),
                                ),
                            ),
                        i().createElement(
                            'div',
                            { className: 'Header_box_e4' },
                            o ? i().createElement(Su, null) : i().createElement(Cu, null),
                            s && i().createElement(ru, null),
                        ),
                    );
                };
                let Lu;
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(Lu || (Lu = {}));
                const Nu = ({
                        children: u,
                        contentID: e,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: i,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                ((0, v.c9)(v.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    a.playYes());
                            }, [i, e, t, n]),
                            E = (0, r.useCallback)(() => {
                                (0, v.c9)(v.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [e, t, n]),
                            c = (0, r.useCallback)(
                                (u) => {
                                    (s && s(u), ((u) => u.button === Lu.RIGHT)(u) && l());
                                },
                                [s, l],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === o && E();
                            }, [o, E]),
                            o ? (0, r.cloneElement)(u, { onMouseDown: c }) : u
                        );
                    },
                    Ou = ['children'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const ku = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, Ou);
                    return i().createElement(
                        Nu,
                        Ru({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        e,
                    );
                };
                let Pu;
                !(function (u) {
                    ((u.default = 'default'), (u.x48 = 'x48'), (u.x80 = 'x80'), (u.x220 = 'x220'));
                })(Pu || (Pu = {}));
                const Hu = ({ content: u, classMix: e }) => {
                        const t = (0, r.useRef)(null),
                            n = (0, r.useState)(!0),
                            a = n[0],
                            o = n[1];
                        return (
                            (0, r.useEffect)(() =>
                                ((u) => {
                                    let e,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                ((n = null),
                                                    (e = (() => {
                                                        const u = t.current;
                                                        u && u.offsetWidth >= u.scrollWidth && o(!1);
                                                    })()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof e && e(), null !== n && cancelAnimationFrame(n));
                                        }
                                    );
                                })(),
                            ),
                            i().createElement(
                                L,
                                { isEnabled: a, body: u },
                                i().createElement('div', { ref: t, className: E()('TextOverflow_base_3b', e) }, u),
                            )
                        );
                    },
                    Iu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Wu = { [Pu.default]: 'c_24x24', [Pu.x48]: 'c_48x48', [Pu.x80]: 'c_80x80', [Pu.x220]: 'c_220x220' },
                    Gu = ({ badgeID: u, size: e = Pu.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Wu[e]);
                        return i().createElement('div', {
                            className: E()(Iu.base, Iu[`base__${e}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${u}`)})` },
                        });
                    },
                    Uu = {
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
                    Vu = (0, r.memo)(({ tooltipHeaderName: u }) => {
                        const e = (0, r.useMemo)(() => {
                                return (
                                    (e = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: u }),
                                    e.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(t[u.slice(e, -e)]);
                                    })
                                );
                                var e, t;
                            }, [u]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return i().createElement(
                            L,
                            { header: e, body: t },
                            i().createElement('div', { className: Uu.anonymizedIcon }),
                        );
                    });
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const zu = { [Pu.default]: 'c_64x24', [Pu.x48]: 'c_68x28' },
                    $u = { [Pu.default]: 'c_48x48', [Pu.x48]: 'c_48x48' },
                    Xu = ({
                        userName: u,
                        clanAbbrev: e = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: a = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: s = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: A = Pu.default,
                        userNameClassName: m = '',
                        clanTagClassName: d = '',
                    }) => {
                        const F = R.images.gui.maps.icons.library.badges.strips.$dyn(zu[A]),
                            _ = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${F.$dyn(`strip_${a.badgeID}`)})` }),
                                [a, F],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn($u[A]),
                            B = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${a.badgeID}`)})` }),
                                [a, D],
                            ),
                            C = e ? `[${e}]` : '',
                            g = E()(Uu.base, Uu[`base__${A}`], o && Uu.base__inverted),
                            h = E()(Uu.userName, m),
                            b = E()(Uu.clanTag, d),
                            p = u !== c,
                            v = s ? `${c}${C}` : c,
                            w = Boolean(n.badgeID) && i().createElement(Gu, ju({ size: A }, n, { key: 'badge' })),
                            f = Date.now(),
                            y = [
                                w,
                                [
                                    i().createElement(
                                        'div',
                                        { className: h, key: 'userName' },
                                        i().createElement(Hu, { content: u, key: f }),
                                    ),
                                    !s && Boolean(C) && i().createElement('div', { className: b, key: 'clanTag' }, C),
                                ],
                                0 !== t && i().createElement('div', { className: Uu.igrIcon, key: 'igrType' }),
                                Boolean(a.badgeID) &&
                                    i().createElement(
                                        'div',
                                        { className: Uu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        i().createElement('div', { className: Uu.suffixBadgeStripe, style: _ }),
                                        i().createElement('div', { className: Uu.suffixBadge, style: B }),
                                    ),
                                l && p && i().createElement(Vu, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return i().createElement('div', { className: g }, o ? y.reverse() : y);
                    },
                    Ku = { badgeID: '' },
                    Yu = ({ name: u, badgeID: e, clanTag: t, color: n }) => {
                        const a = (0, r.useMemo)(() => ({ badgeID: e || '' }), [e]),
                            o = (0, r.useMemo)(() => ({ color: n }), [n]);
                        return i().createElement(
                            'div',
                            { style: o },
                            i().createElement(Xu, {
                                userName: u,
                                badge: a,
                                suffixBadge: Ku,
                                clanAbbrev: t,
                                userNameClassName: 'PlayerName_userName_1e',
                            }),
                        );
                    };
                var qu = t(9887),
                    Zu = t.n(qu);
                const Qu = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    Ju = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ue;
                function ee(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                !(function (u) {
                    ((u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight'));
                })(ue || (ue = {}));
                const te = c.O.client.getSize('rem'),
                    ne = te.width,
                    ae = te.height,
                    re = Object.assign({ width: ne, height: ae }, ee(ne, ae, Ju)),
                    ie = (0, r.createContext)(re),
                    oe = ['children'],
                    se = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, oe);
                        const n = (0, r.useContext)(ie),
                            a = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            s = n.small,
                            l = n.extraSmall,
                            E = n.extraLargeWidth,
                            c = n.largeWidth,
                            A = n.mediumWidth,
                            m = n.smallWidth,
                            d = n.extraSmallWidth,
                            F = n.extraLargeHeight,
                            _ = n.largeHeight,
                            D = n.mediumHeight,
                            B = n.smallHeight,
                            C = n.extraSmallHeight,
                            g = { extraLarge: F, large: _, medium: D, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return e;
                            if (t.large && i) return e;
                            if (t.medium && o) return e;
                            if (t.small && s) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && E) return Qu(e, t, g);
                            if (t.largeWidth && c) return Qu(e, t, g);
                            if (t.mediumWidth && A) return Qu(e, t, g);
                            if (t.smallWidth && m) return Qu(e, t, g);
                            if (t.extraSmallWidth && d) return Qu(e, t, g);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && F) return e;
                                if (t.largeHeight && _) return e;
                                if (t.mediumHeight && D) return e;
                                if (t.smallHeight && B) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                let le, Ee, ce;
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
                    (0, r.memo)(se),
                    (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(ie),
                            t = (0, r.useState)(e),
                            n = t[0],
                            a = t[1],
                            o = (0, r.useCallback)((u, e) => {
                                const t = c.O.view.pxToRem(u),
                                    n = c.O.view.pxToRem(e);
                                a(Object.assign({ width: t, height: n }, ee(t, n, Ju)));
                            }, []);
                        (U(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]));
                        const s = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(ie.Provider, { value: s }, u);
                    }),
                    (function (u) {
                        ((u[(u.ExtraSmall = Ju.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Ju.small.width)] = 'Small'),
                            (u[(u.Medium = Ju.medium.width)] = 'Medium'),
                            (u[(u.Large = Ju.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Ju.extraLarge.width)] = 'ExtraLarge'));
                    })(le || (le = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Ju.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Ju.small.width)] = 'Small'),
                            (u[(u.Medium = Ju.medium.width)] = 'Medium'),
                            (u[(u.Large = Ju.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Ju.extraLarge.width)] = 'ExtraLarge'));
                    })(Ee || (Ee = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Ju.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = Ju.small.height)] = 'Small'),
                            (u[(u.Medium = Ju.medium.height)] = 'Medium'),
                            (u[(u.Large = Ju.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = Ju.extraLarge.height)] = 'ExtraLarge'));
                    })(ce || (ce = {})));
                const Ae = ['xl', 'lg', 'md', 'sm', 'xs'],
                    me = (u) => u.includes('_') && ((u) => Ae.includes(u))(u.split('_').at(-1)),
                    de = [le.ExtraLarge, le.Large, le.Medium, le.Small, le.ExtraSmall],
                    Fe = (u, e) =>
                        Object.keys(u).reduce((t, n) => {
                            if (n in t) return t;
                            if (me(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = de.indexOf(e),
                                    i = (-1 !== r ? Ae.slice(r) : [])
                                        .map((u) => a + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[a] = void 0 !== o ? o : u[a]), t);
                            }
                            const a = u[n];
                            return (
                                void 0 === a ||
                                    ((u, e) => Ae.some((t) => void 0 !== e[`${u}_${t}`]))(n, u) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    _e = (u, e = Fe) => {
                        const t = (
                            (u, e = Fe) =>
                            (t) => {
                                const n = (() => {
                                        const u = (0, r.useContext)(ie),
                                            e = u.width,
                                            t = u.height,
                                            n = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return le.ExtraLarge;
                                                    case u.large:
                                                        return le.Large;
                                                    case u.medium:
                                                        return le.Medium;
                                                    case u.small:
                                                        return le.Small;
                                                    case u.extraSmall:
                                                        return le.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            le.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            a = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return Ee.ExtraLarge;
                                                    case u.largeWidth:
                                                        return Ee.Large;
                                                    case u.mediumWidth:
                                                        return Ee.Medium;
                                                    case u.smallWidth:
                                                        return Ee.Small;
                                                    case u.extraSmallWidth:
                                                        return Ee.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            Ee.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            i = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return ce.ExtraLarge;
                                                    case u.largeHeight:
                                                        return ce.Large;
                                                    case u.mediumHeight:
                                                        return ce.Medium;
                                                    case u.smallHeight:
                                                        return ce.Small;
                                                    case u.extraSmallHeight:
                                                        return ce.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            ce.ExtraSmall
                                                        );
                                                }
                                            })(u);
                                        return {
                                            mediaSize: n,
                                            mediaWidth: a,
                                            mediaHeight: i,
                                            remScreenWidth: e,
                                            remScreenHeight: t,
                                        };
                                    })().mediaSize,
                                    a = (0, r.useMemo)(() => e(t, n), [t, n]);
                                return i().createElement(u, a);
                            }
                        )(u, e);
                        return i().memo((e) =>
                            Object.keys(e).some((u) => me(u) && void 0 !== e[u])
                                ? i().createElement(t, e)
                                : i().createElement(u, e),
                        );
                    },
                    De = {
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
                    Be = [
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
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                Object.keys(Zu());
                const ge = {
                        XL: { mt: De.mt__XL, mr: De.mr__XL, mb: De.mb__XL, ml: De.ml__XL },
                        LG: { mt: De.mt__LG, mr: De.mr__LG, mb: De.mb__LG, ml: De.ml__LG },
                        MDp: { mt: De.mt__MDp, mr: De.mr__MDp, mb: De.mb__MDp, ml: De.ml__MDp },
                        MD: { mt: De.mt__MD, mr: De.mr__MD, mb: De.mb__MD, ml: De.ml__MD },
                        SMp: { mt: De.mt__SMp, mr: De.mr__SMp, mb: De.mb__SMp, ml: De.ml__SMp },
                        SM: { mt: De.mt__SM, mr: De.mr__SM, mb: De.mb__SM, ml: De.ml__SM },
                        XS: { mt: De.mt__XS, mr: De.mr__XS, mb: De.mb__XS, ml: De.ml__XS },
                    },
                    he = (Object.keys(ge), ['mt', 'mr', 'mb', 'ml']),
                    be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    pe = _e((u) => {
                        let e = u.className,
                            t = u.width,
                            n = u.height,
                            a = u.m,
                            o = u.mt,
                            s = void 0 === o ? a : o,
                            l = u.mr,
                            c = void 0 === l ? a : l,
                            A = u.mb,
                            m = void 0 === A ? a : A,
                            d = u.ml,
                            F = void 0 === d ? a : d,
                            _ = u.column,
                            D = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (_ ? 'column' : D && 'row') || void 0 : B,
                            g = u.flexStart,
                            h = u.center,
                            b = u.flexEnd,
                            p = u.spaceBetween,
                            v = u.spaceAround,
                            w = u.justifyContent,
                            f =
                                void 0 === w
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (b && 'flex-end') ||
                                      (p && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            y = u.alignItems,
                            x = void 0 === y ? (g ? 'flex-start' : h && 'center') || (b && 'flex-end') || void 0 : y,
                            S = u.alignSelf,
                            M = u.wrap,
                            T = u.flexWrap,
                            L = void 0 === T ? (M ? 'wrap' : void 0) : T,
                            N = u.grow,
                            O = u.shrink,
                            R = u.flex,
                            k = void 0 === R ? (N || O ? `${N ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : R,
                            P = u.style,
                            H = u.children,
                            I = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Be);
                        const W = (0, r.useMemo)(() => {
                                const u = { mt: s, mr: c, mb: m, ml: F },
                                    e = ((u) =>
                                        he.reduce((e, t) => {
                                            const n = u[t];
                                            return n && 'number' != typeof n ? e.concat(ge[!0 === n ? 'MD' : n][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        he.reduce((e, t) => {
                                            const n = u[t];
                                            return ('number' == typeof n && (e[be[t]] = n + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: S,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: f,
                                        alignItems: x,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, n, s, c, m, F, P, k, S, C, L, f, x]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return i().createElement('div', Ce({ className: E()(De.base, ...U, e), style: G }, I), H);
                    });
                var ve = t(3532),
                    we = t.n(ve);
                const fe = {
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
                    ye = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                Object.keys(Zu());
                const Se = Object.keys(we()),
                    Me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Te = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Le = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ne =
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
                            'heading-H56': Me,
                            'heading-H36': Me,
                            'heading-H28': Te,
                            'heading-H24': Te,
                            'heading-H24R': Te,
                            'heading-H22': Te,
                            'heading-H20R': Te,
                            'heading-H18': Te,
                            'heading-H15': Le,
                            'heading-H14': Le,
                            'paragraph-P24': Te,
                            'paragraph-P18': Te,
                            'paragraph-P16': Te,
                            'paragraph-P14': Le,
                            'paragraph-P12': Le,
                            'paragraph-P10': Le,
                        }),
                    Oe =
                        (Object.keys(Ne),
                        (u) =>
                            u
                                ? ((u) => Se.includes(u))(u)
                                    ? { colorClassName: fe[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Re = _e((u) => {
                        let e = u.text,
                            t = u.variant,
                            n = u.className,
                            a = u.color,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            c = u.mr,
                            A = void 0 === c ? o : c,
                            m = u.mb,
                            d = void 0 === m ? o : m,
                            F = u.ml,
                            _ = void 0 === F ? o : F,
                            D = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, ye);
                        const g = (0, r.useMemo)(() => {
                                const u = Oe(a),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: e };
                            }, [D, a]),
                            h = g.computedStyle,
                            b = g.colorClassName;
                        return i().createElement(
                            pe,
                            xe(
                                {
                                    className: E()(fe.base, t && fe[t], b, n),
                                    style: h,
                                    mt: !0 === l ? Ne[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === A ? Ne[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === d ? Ne[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === _ ? Ne[t || 'paragraph-P16'].ml : _,
                                },
                                C,
                            ),
                            void 0 !== B ? i().createElement(fu, xe({}, B, { text: e })) : e,
                        );
                    }),
                    ke = () => {
                        const u = R.strings.platoon.members.card.muted.caption(),
                            e = R.strings.platoon.members.card.muted.description();
                        return i().createElement(
                            L,
                            { header: u, body: e },
                            i().createElement('div', { className: 'MutedIcon_base_50' }),
                        );
                    },
                    Pe = (0, r.memo)(({ src: u, className: e, autoPlay: t = !1, loop: n = !1 }) => {
                        const a = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                engine.on('clientMinimized', (u) => {
                                    a.current && (u ? a.current.pause() : a.current.play());
                                });
                            }, []),
                            i().createElement('video', { ref: a, className: e, src: u, autoPlay: t, loop: n })
                        );
                    });
                Pe.displayName = 'Video';
                const He = ({ visible: u }) => {
                        const e = E()(
                            'VoiceAnimation_talkingAnimation_44',
                            u && 'VoiceAnimation_talkingAnimation__visible_45',
                        );
                        return i().createElement(Pe, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: e,
                        });
                    },
                    Ie = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    We = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Ge = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ue = {
                        base: 'Level_base_12',
                        base__tiny: 'Level_base__tiny_b4',
                        base__extraSmall: 'Level_base__extraSmall_05',
                        base__small: 'Level_base__small_98',
                        base__medium: 'Level_base__medium_f0',
                        base__large: 'Level_base__large_c3',
                        base__extraLarge: 'Level_base__extraLarge_dc',
                        bg: 'Level_bg_f5',
                        border: 'Level_border_11',
                        base__yellow: 'Level_base__yellow_63',
                        innerGlow: 'Level_innerGlow_47',
                        lock: 'Level_lock_0b',
                        text: 'Level_text_ae',
                    };
                let Ve;
                !(function (u) {
                    ((u.Tiny = 'tiny'),
                        (u.ExtraSmall = 'extraSmall'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.ExtraLarge = 'extraLarge'));
                })(Ve || (Ve = {}));
                const je = (0, r.memo)(({ level: u, size: e, isYellow: t, isLocked: n = !1, mixClass: a }) => {
                        const r = E()(Ue.base, t && Ue.base__yellow, Ue[`base__${e}`], a);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement('div', { className: Ue.bg }),
                            i().createElement('div', { className: Ue.border }),
                            i().createElement('div', { className: Ue.innerGlow }),
                            n && i().createElement('div', { className: Ue.lock }),
                            i().createElement(Re, {
                                text:
                                    ((o = u),
                                    Ge
                                        ? `${o}`
                                        : (function (u) {
                                              let e = '';
                                              for (let t = We.length - 1; t >= 0; t--)
                                                  for (; u >= We[t];) ((e += Ie[t]), (u -= We[t]));
                                              return e;
                                          })(o)),
                                className: Ue.text,
                            }),
                        );
                        var o;
                    }),
                    ze = {
                        base: 'WideSlot_base_99',
                        mutedContainer: 'WideSlot_mutedContainer_e3',
                        icon: 'WideSlot_icon_29',
                        icon__spinner: 'WideSlot_icon__spinner_e2',
                        spinner: 'WideSlot_spinner_20',
                        glow: 'WideSlot_glow_39',
                        memberType: 'WideSlot_memberType_f0',
                        badge: 'WideSlot_badge_f2',
                        mainContent: 'WideSlot_mainContent_2e',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_f2',
                        flag: 'WideSlot_flag_9a',
                        detailsContainer: 'WideSlot_detailsContainer_76',
                        division_icon: 'WideSlot_division_icon_92',
                        division_name: 'WideSlot_division_name_f7',
                        division_name__yellow: 'WideSlot_division_name__yellow_95',
                        readiness: 'WideSlot_readiness_30',
                        starIcon: 'WideSlot_starIcon_da',
                        speciality: 'WideSlot_speciality_f3',
                        message: 'WideSlot_message_05',
                    },
                    $e = R.strings.hb_lobby,
                    Xe = ({ frontName: u, slot: e }) => {
                        var t;
                        const n = e.player,
                            a = e.isInBattle,
                            o = e.slotId,
                            s = e.isEmpty,
                            l = e.bannedMessage,
                            c = n.isReady,
                            A = n.isCommander,
                            m = n.voice,
                            d = Boolean(l),
                            F = (0, r.useMemo)(
                                () =>
                                    (({ slot: u, player: e, frontName: t }) => {
                                        const n = u.isInBattle,
                                            a = u.isEmpty,
                                            r = u.isDisabled,
                                            i = e.isReady,
                                            o = e.isCurrentUser,
                                            s = R.images.gui.maps.icons.platoon.members_window.wide_slot.cards,
                                            l = R.images.historical_battles.gui.maps.icons.membersWindow.slot;
                                        return n
                                            ? s.in_battle_wide()
                                            : a
                                              ? s.empty_wide()
                                              : r
                                                ? s.disable_wide()
                                                : i
                                                  ? o
                                                      ? l.$dyn(`commander_${t}`)
                                                      : l.$dyn(`default_${t}`)
                                                  : i
                                                    ? void 0
                                                    : o
                                                      ? s.not_ready_player()
                                                      : s.not_ready_wide();
                                    })({ slot: e, player: n, frontName: u }),
                                [n, e, u],
                            ),
                            _ = (0, r.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isSearching,
                                            n = u.isEmpty,
                                            a = u.isDisabled,
                                            r = e.isCommander,
                                            i = e.isPrem,
                                            o = R.images.gui.maps.icons.platoon.members_window.wide_slot;
                                        return t
                                            ? o.spinner()
                                            : a
                                              ? o.disabled()
                                              : n
                                                ? o.empty()
                                                : r
                                                  ? i
                                                      ? o.commander_prem()
                                                      : o.commander()
                                                  : r
                                                    ? void 0
                                                    : i
                                                      ? o.member_prem()
                                                      : o.member();
                                    })({ slot: e, player: n }),
                                [n, e],
                            ),
                            D = (0, r.useMemo)(
                                () =>
                                    ((u) =>
                                        u.isSearching
                                            ? `${R.strings.platoon.members.card.searching()} (${u.estimatedTime})`
                                            : u.isDisabled
                                              ? R.strings.platoon.members.card.disabledVertical()
                                              : u.isEmpty
                                                ? R.strings.platoon.members.card.empty()
                                                : i().createElement(Yu, u.player.commonData))(e),
                                [e],
                            ),
                            B = (0, r.useMemo)(() => ({ slotId: o }), [o]),
                            C = (0, r.useMemo)(
                                () => ({ star: i().createElement('div', { className: ze.starIcon }) }),
                                [],
                            ),
                            g = E()(ze.readiness, c && ze.readiness__isReady),
                            h = E()(ze.memberType, e.isDisabled && ze.isDisabled),
                            b = E()(ze.icon, e.isSearching && ze.icon__spinner),
                            p = E()(ze.mainContent, s && ze.mainContent__isEmpty);
                        return i().createElement(
                            x,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== n.commonData.rating,
                                args: B,
                            },
                            i().createElement(
                                'div',
                                { className: ze.base, style: Du(F) },
                                i().createElement(
                                    'div',
                                    { className: ze.mutedContainer },
                                    m.isMutedByUser && i().createElement(ke, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: h },
                                    i().createElement(He, { visible: m.isSpeaking }),
                                    i().createElement('div', { style: Du(_), className: b }),
                                    A && c && i().createElement('div', { className: ze.glow }),
                                ),
                                i().createElement('div', { className: p }, D),
                                d && i().createElement('div', { className: ze.message }, l),
                                !s &&
                                    i().createElement(
                                        'div',
                                        { className: ze.detailsContainer },
                                        !c || a
                                            ? i().createElement(fu, { text: e.infoText, binding: C })
                                            : i().createElement(
                                                  i().Fragment,
                                                  null,
                                                  i().createElement(je, {
                                                      level: e.divisionLevel,
                                                      size: Ve.Tiny,
                                                      isYellow: n.isCommander,
                                                  }),
                                                  i().createElement(Re, {
                                                      text:
                                                          null == (t = $e.$dyn(`division_capital_${e.divisionID}`))
                                                              ? void 0
                                                              : t.$dyn('name'),
                                                      className: E()(
                                                          ze.division_name,
                                                          n.isCommander && ze.division_name__yellow,
                                                      ),
                                                  }),
                                                  i().createElement('div', {
                                                      className: ze.division_icon,
                                                      style: Du(
                                                          R.images.historical_battles.gui.maps.icons.division.c_36x36
                                                              .$dyn(n.isCommander ? 'yellow' : 'white')
                                                              .$num(e.divisionID),
                                                      ),
                                                  }),
                                              ),
                                    ),
                                c && !e.isInBattle && i().createElement('div', { className: g }),
                            ),
                        );
                    },
                    Ke = ({ slot: u, frontName: e }) => {
                        const t = u.player.commonData.name,
                            n = (0, r.useMemo)(() => ({ userName: t }), [t]),
                            a = i().createElement(
                                'div',
                                null,
                                i().createElement(Xe, { frontName: e, key: u.slotId, slot: u }),
                            );
                        return u.player.isCurrentUser || u.isEmpty
                            ? a
                            : i().createElement(ku, { args: n, key: u.slotId }, a);
                    },
                    Ye = () => {
                        const u = X().frontName,
                            e = X('model.slots');
                        return i().createElement(
                            'div',
                            { className: 'Slots_base_a8' },
                            e.map((e) => i().createElement(Ke, { frontName: u, slot: e.value, key: e.value.slotId })),
                        );
                    },
                    qe = () => {
                        const u = X(),
                            e = u.canMinimize,
                            t = u.isCommander,
                            n = u.isHorizontal,
                            a = u.onClosed,
                            o = u.onMinimized,
                            s = u.onFocusChange,
                            l = u.windowTooltipHeader,
                            c = u.windowTooltipBody,
                            A = u.rawTitle,
                            m = E()(
                                'MembersWindowApp_base_ce',
                                n ? 'MembersWindowApp_base__isHorizontal_b4' : 'MembersWindowApp_base__isVertical_b1',
                            ),
                            d = (0, r.useCallback)(() => a(), [a]),
                            F = (0, r.useCallback)(() => o(), [o]),
                            _ = (0, r.useCallback)(
                                (u) => {
                                    s({ isFocused: u });
                                },
                                [s],
                            );
                        return (
                            W(H.n.ESCAPE, () => d()),
                            i().createElement(
                                P,
                                {
                                    showMinimizeBtn: e,
                                    title: A,
                                    infoTooltipHeader: l,
                                    infoTooltipBody: c,
                                    onClose: d,
                                    onMinimize: F,
                                    onFocusChange: _,
                                },
                                i().createElement(
                                    'div',
                                    { className: m },
                                    i().createElement(
                                        'div',
                                        { className: 'MembersWindowApp_platoon_3d' },
                                        i().createElement(Tu, null),
                                        i().createElement(lu, { position: su.top }),
                                        i().createElement(Ye, null),
                                        i().createElement(
                                            'div',
                                            { className: 'MembersWindowApp_commanderControls_e9' },
                                            t && i().createElement(Fu, null),
                                        ),
                                        i().createElement(lu, { position: su.bottom }),
                                        i().createElement(_u, null),
                                    ),
                                    i().createElement(lu, { position: su.left }),
                                    i().createElement(nu, {
                                        id: R.views.historical_battles.lobby.subViews.Chat('resId'),
                                        mixClass: 'MembersWindowApp_chatContainer_be',
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    (s().render(i().createElement(qe, null), document.getElementById('root')),
                        n(R.sounds.gui_platoon_2_created()));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (() => {
            var u = { 838: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5235));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
