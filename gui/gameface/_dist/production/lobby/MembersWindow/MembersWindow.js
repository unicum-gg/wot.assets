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
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${e}`,
                                            o = i[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                ((u.enabled = !1), a());
                            },
                            enable() {
                                ((u.enabled = !0), a());
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    }));
                var a = t(527);
                function n(u = 'px') {
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
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function A(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
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
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    w = {
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
                const a = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    r = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, n;
                (t.d(e, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(n || (n = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
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
                t.d(e, { Sw: () => r.Z, B3: () => c, Z5: () => i, B0: () => s, c9: () => p, ry: () => C, Eu: () => g });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    _ = t(3138);
                const F = ['args'];
                function D(u, e, t, a, n, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, a, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(r, a, n, i, o, 'throw', u);
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
                    p = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    h = () => p(s.CLOSE),
                    b = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var v = t(7572);
                const f = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => p(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                m = o.height,
                                d = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(m),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => b(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            b(u, h);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            1813: (u, e, t) => {
                'use strict';
                var a = t(6483),
                    n = t.n(a),
                    r = t(3138),
                    i = t(6179),
                    o = t.n(i);
                const s = ['children'],
                    l = o().createContext(null),
                    c = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, s);
                        return o().createElement(l.Provider, { value: t }, e);
                    };
                function E(u) {
                    engine.call('PlaySound', u);
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
                    d = {
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
                let A, _;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(A || (A = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(_ || (_ = {})));
                const F = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: r,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: m,
                    onMouseMove: _,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const g = (0, i.useRef)(null),
                        p = (0, i.useState)(t),
                        h = p[0],
                        b = p[1],
                        v = (0, i.useState)(!1),
                        f = v[0],
                        w = v[1],
                        y = (0, i.useState)(!1),
                        x = y[0],
                        S = y[1],
                        M = (0, i.useCallback)(() => {
                            r || (g.current && (g.current.focus(), b(!0)));
                        }, [r]),
                        T = (0, i.useCallback)(
                            (u) => {
                                h && null !== g.current && !g.current.contains(u.target) && b(!1);
                            },
                            [h],
                        ),
                        N = (0, i.useCallback)(
                            (u) => {
                                r || (C && C(u));
                            },
                            [r, C],
                        ),
                        O = (0, i.useCallback)(
                            (u) => {
                                r || (null !== l && E(l), m && m(u), S(!0));
                            },
                            [r, l, m],
                        ),
                        L = (0, i.useCallback)(
                            (u) => {
                                _ && _(u);
                            },
                            [_],
                        ),
                        k = (0, i.useCallback)(
                            (u) => {
                                r || (D && D(u), w(!1));
                            },
                            [r, D],
                        ),
                        P = (0, i.useCallback)(
                            (u) => {
                                r || (null !== c && E(c), F && F(u), t && M(), w(!0));
                            },
                            [r, c, F, M, t],
                        ),
                        I = (0, i.useCallback)(
                            (u) => {
                                r || (B && B(u), w(!1));
                            },
                            [r, B],
                        ),
                        H = n()(
                            d.base,
                            d[`base__${a}`],
                            {
                                [d.base__disabled]: r,
                                [d[`base__${e}`]]: e,
                                [d.base__focus]: h,
                                [d.base__highlightActive]: f,
                                [d.base__firstHover]: x,
                            },
                            s,
                        ),
                        W = n()(d.state, d.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, i.useEffect)(() => {
                            b(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: O,
                                onMouseMove: L,
                                onMouseUp: k,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            a !== A.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: d.back }),
                                    o().createElement('span', { className: d.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
                                o().createElement('span', { className: d.stateDisabled }),
                                o().createElement('span', { className: d.stateHighlightHover }),
                                o().createElement('span', { className: d.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                F.defaultProps = { type: A.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const D = (0, i.memo)(F),
                    B = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let C;
                !(function (u) {
                    ((u.Minimize = 'minimize'), (u.Close = 'close'));
                })(C || (C = {}));
                const g = ({ onClick: u, type: e }) => {
                        const t = (0, i.useCallback)(() => {
                                m.playHighlight();
                            }, []),
                            a = (0, i.useCallback)((u) => u.stopPropagation(), []),
                            r = n()(B.base, B[`base__${e}`]);
                        return o().createElement('div', { className: r, onClick: u, onMouseEnter: t, onMouseDown: a });
                    },
                    p = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: e, resId: a }
                        );
                    };
                var h = t(4179);
                const b = [
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
                function v(u) {
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
                const f = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: h.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    w = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            n = u.onMouseEnter,
                            r = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            m = void 0 !== E && E,
                            d = u.decoratorId,
                            A = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            F = void 0 === _ || _,
                            D = u.targetId,
                            B = void 0 === D ? 0 : D,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, b);
                        const w = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, i.useMemo)(() => B || p().resId, [B]),
                            x = (0, i.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (f(t, A, { isMouseEvent: !0, on: !0, arguments: v(a) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [t, A, a, y, C]),
                            S = (0, i.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        f(t, A, { on: !1 }, y),
                                        w.current.isVisible && g && g(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, A, y, g]),
                            M = (0, i.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const u = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', M, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', M, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === F && S();
                            }, [F, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ),
                            F
                                ? (0, i.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(x, c ? 100 : 400)),
                                                          n && n(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (S(), null == r || r(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === m && S(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === m && S(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    },
                    y = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const S = R.views.common.tooltip_window.simple_tooltip_content,
                    M = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            n = u.note,
                            r = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, y);
                        const c = (0, i.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: a, note: n, alert: r });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [r, t, a, n, s]);
                        return o().createElement(
                            w,
                            x(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? S.SimpleTooltipHtmlContent('resId') : S.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    T = ({ tooltipHeader: u, tooltipBody: e }) =>
                        o().createElement(
                            M,
                            { isEnabled: !0, header: u, body: e },
                            o().createElement('div', { className: 'Info_base_7b' }),
                        ),
                    N = ({ title: u, infoTooltipHeader: e, infoTooltipBody: t }) =>
                        o().createElement(
                            'div',
                            { className: 'Title_base_44' },
                            u,
                            e && t && o().createElement(T, { tooltipHeader: e, tooltipBody: t }),
                        ),
                    O = ({
                        title: u,
                        showMinimizeBtn: e,
                        onMinimize: t,
                        onClose: a,
                        onReload: s,
                        infoTooltipHeader: l,
                        infoTooltipBody: c,
                    }) => {
                        const E = (0, i.useState)(!1),
                            d = E[0],
                            A = E[1],
                            _ = (0, i.useCallback)((u) => {
                                const e = () => {
                                    (r.O.view.sendEvent.move(!1), A(!1), document.removeEventListener('mouseup', e));
                                };
                                0 === u.button &&
                                    (r.O.view.sendEvent.move(!0), A(!0), document.addEventListener('mouseup', e));
                            }, []);
                        return o().createElement(
                            'div',
                            { className: n()('Header_base_ff', d && 'Header_base__grabbing_dc'), onMouseDown: _ },
                            o().createElement(N, { title: u, infoTooltipBody: c, infoTooltipHeader: l }),
                            s &&
                                o().createElement(
                                    D,
                                    {
                                        mixClass: 'Header_reloadButton_19',
                                        onClick: (u) => {
                                            (m.playClick(), null == s || s(u));
                                        },
                                    },
                                    o().createElement('div', {
                                        className: n()('Header_icon_6e', 'Header_icon__reload_c2'),
                                    }),
                                ),
                            e &&
                                o().createElement(g, {
                                    type: C.Minimize,
                                    onClick: (u) => {
                                        (m.playClick(), t ? t(u) : r.O.view.sendEvent.minimize());
                                    },
                                }),
                            o().createElement(g, {
                                type: C.Close,
                                onClick: (u) => {
                                    (m.playClick(), a ? a(u) : r.O.view.sendEvent.close());
                                },
                            }),
                        );
                    },
                    L = o().forwardRef(
                        (
                            {
                                title: u,
                                showMinimizeBtn: e,
                                onClose: t,
                                onReload: a,
                                onMinimize: s,
                                onFocusChange: l,
                                infoTooltipHeader: E,
                                infoTooltipBody: m,
                                className: d,
                                children: A,
                            },
                            _,
                        ) => {
                            const F = (0, i.useRef)(null),
                                D = (0, i.useRef)(null),
                                B = (0, i.useState)(!0),
                                C = B[0],
                                g = B[1],
                                p = (function () {
                                    const u = (0, i.useRef)(0);
                                    var e;
                                    return (
                                        (e = () => {
                                            window.cancelAnimationFrame(u.current);
                                        }),
                                        (0, i.useEffect)(() => e, []),
                                        (0, i.useMemo)(
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
                                h = () => {
                                    p.run(() => {
                                        const u = F.current,
                                            e = D.current;
                                        if (!u || !e) return;
                                        const t = r.O.view.pxToRem(u.offsetWidth),
                                            a = r.O.view.pxToRem(u.offsetHeight);
                                        ((e.style.width = `${t}rem`), (e.style.height = `${a}rem`));
                                        const n = t + 10 + 26,
                                            i = 28 + a + 5 + 26;
                                        (r.O.view.setInputPaddingsRem(13), r.O.view.resize(n, i, 'rem'));
                                    });
                                };
                            var b;
                            return (
                                (b = () => {
                                    h();
                                }),
                                (0, i.useEffect)(b, []),
                                (0, i.useEffect)(
                                    () =>
                                        r.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && C
                                                ? (g(!1), null == l || l(!1))
                                                : 'inside' !== u || C || (g(!0), null == l || l(!0));
                                        }),
                                    [C, l],
                                ),
                                o().createElement(
                                    c,
                                    { updateSizes: h },
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()('WindowDecorator_base_6a', d),
                                            style: { '--outer-shadow-width': '13rem' },
                                            ref: _,
                                        },
                                        o().createElement('div', {
                                            className: n()(
                                                'WindowDecorator_frame_b5',
                                                C && 'WindowDecorator_frame__focused_af',
                                            ),
                                        }),
                                        o().createElement(O, {
                                            title: u,
                                            infoTooltipHeader: E,
                                            infoTooltipBody: m,
                                            onClose: t,
                                            onMinimize: s,
                                            onReload: a,
                                            showMinimizeBtn: e,
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: 'WindowDecorator_container_1d', ref: D },
                                            o().createElement('div', {
                                                className: 'WindowDecorator_contentDecorations_be',
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: 'WindowDecorator_content_0b', ref: F },
                                                A,
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var k = t(5521);
                const P = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function I(u = k.n.NONE, e = P, t = !1) {
                    (0, i.useEffect)(() => {
                        if (u !== k.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (r.O.view.isEventHandled()) return;
                                (r.O.view.setEventHandled(), e(a), t && a.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                const H = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    W = (u) => {
                        const e = (0, i.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    V = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    U = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    $ = h.Sw.instance;
                let j;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(j || (j = {}));
                const G = (u = 'model', e = j.Deep) => {
                        const t = (0, i.useState)(0),
                            a = (t[0], t[1]),
                            n = (0, i.useMemo)(() => p(), []),
                            r = n.caller,
                            o = n.resId,
                            s = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${u}` : u),
                                [r, u],
                            ),
                            l = (0, i.useState)(() =>
                                ((u) => {
                                    const e = H(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return V(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = H(`${u}.${e}`, window);
                                                return V(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            c = l[0],
                            E = l[1],
                            m = (0, i.useRef)(-1);
                        return (
                            W(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? j.Deep : j.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== j.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === j.Deep
                                                ? (u === c && a((u) => u + 1), E(u))
                                                : E(Object.assign([], u));
                                        },
                                        n = ((u) => {
                                            const e = ((u) => {
                                                    const e = p(),
                                                        t = e.caller,
                                                        a = e.resId,
                                                        n =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: n, modelPath: U(n, ''), resId: a };
                                                })(),
                                                t = e.modelPrefix,
                                                a = u.split('.');
                                            if (a.length > 0) {
                                                const u = [a[0]];
                                                return (
                                                    a.reduce((e, a) => {
                                                        const n = H(U(t, `${e}.${a}`), window);
                                                        return V(n)
                                                            ? (u.push(n.id), `${e}.${a}.value`)
                                                            : (u.push(a), `${e}.${a}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    m.current = $.addCallback(n, t, o, e === j.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (e !== j.None)
                                    return () => {
                                        $.removeCallback(m.current, o);
                                    };
                            }, [o, e]),
                            c
                        );
                    },
                    z = (u) => ({ backgroundImage: `url('${u}')` }),
                    X = () => {
                        const u = (0, i.useMemo)(() => z(R.images.gui.maps.icons.platoon.common.info()), []);
                        return o().createElement(
                            w,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            o().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: u }),
                        );
                    };
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const q = (0, i.memo)(
                        ({
                            caption: u,
                            isEnabled: e,
                            description: t,
                            children: a,
                            cButtonProps: n,
                            onClick: r,
                            className: s,
                        }) => {
                            const l = (0, i.useCallback)(() => r(), [r]);
                            return o().createElement(
                                M,
                                { isEnabled: !0, header: u, body: t },
                                o().createElement(
                                    'div',
                                    { className: s },
                                    o().createElement(
                                        D,
                                        K({ type: A.primary, size: _.small, onClick: l, disabled: !e }, n),
                                        a || u,
                                    ),
                                ),
                            );
                        },
                    ),
                    Y = /<link.*?>/g,
                    Z = /\.\.\//g,
                    Q = /<script.*?>/g,
                    J = 'default.css',
                    uu = (u) => {
                        const e = u.match(Z);
                        return e && e.join('');
                    },
                    eu = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(J)) return t.href;
                        }
                        return '';
                    },
                    tu = (u) => {
                        const e = eu(),
                            t = uu(e);
                        let a,
                            n = u;
                        for (; null !== (a = Q.exec(u)); ) {
                            const u = a[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(Z, '');
                                n = n.replace(u[2], e);
                            }
                        }
                        return n;
                    },
                    au = () => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const a = u.shift();
                            a && ((e = !0), a().then(() => t()));
                        };
                        return {
                            add: (a) => {
                                (u.push(a), e || t());
                            },
                        };
                    },
                    nu = 'subViews.onChanged',
                    ru = au(),
                    iu = (0, i.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: a }) => {
                        const r = (0, i.useState)(''),
                            s = r[0],
                            l = r[1],
                            c = (0, i.useMemo)(() => ({ __html: tu(s) }), [s]),
                            E = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            m = (0, i.useState)(!1),
                            d = m[0],
                            A = m[1],
                            _ = (0, i.useCallback)(
                                (u) => {
                                    u.includes(E) &&
                                        (A(!0), engine.off(nu, _), window.subViews.removeChildChangedCallback(E));
                                },
                                [E],
                            ),
                            F = (0, i.useCallback)((u) => {
                                ru.add(
                                    () =>
                                        new Promise((e) => {
                                            l(u);
                                            const t = new MutationObserver(() => {
                                                    (t.disconnect(), e());
                                                }),
                                                a = document.getElementById('root');
                                            a && t.observe(a, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, i.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let a;
                                if ((a = t.split('/').pop()))
                                    return (
                                        (a = a.split('.')[0]),
                                        (window.subViews[a] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${a}`, F),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            ((t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, h.Eu)().then(() => {
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
                                        })({ name: a, path: t }),
                                        () => {
                                            (a && window.subViews[a] && delete window.subViews[a],
                                                engine.trigger('subView:destroy', { viewName: a, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`subView:inject->${a}`, F),
                                                console.info(`Sub view ${a} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(nu, _);
                        }, [_, F, u, d]),
                            (0, i.useEffect)(
                                () => () => {
                                    s &&
                                        ((u) => {
                                            const e = uu(eu());
                                            let t;
                                            for (; null !== (t = Y.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(Z, ''),
                                                        a = document.head.querySelector(`[href="${t}"]`);
                                                    a && document.head.removeChild(a);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const D = n()('SubView_base_df', a);
                        if (s) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = eu(),
                                        a = uu(t);
                                    for (; null !== (e = Y.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(J) && a) {
                                            const e = a + u[1].replace(Z, ''),
                                                t = document.createElement('link');
                                            ((t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t));
                                        }
                                    }
                                })(s),
                                t && t(u),
                                o().createElement('div', { className: D, dangerouslySetInnerHTML: c })
                            );
                        }
                        return e ? o().createElement('div', { className: D }, o().createElement(e, null)) : null;
                    });
                let ou;
                !(function (u) {
                    ((u.left = 'left'), (u.top = 'top'), (u.right = 'right'), (u.bottom = 'bottom'));
                })(ou || (ou = {}));
                const su = ({ position: u }) => {
                        const e = R.images.gui.maps.icons.platoon.common.separator.$dyn(u),
                            t = [ou.right, ou.left].includes(u),
                            a = n()(
                                'Separator_base_98',
                                t ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                            );
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement('div', { className: 'Separator_image_5b', style: z(e) }),
                        );
                    },
                    lu = ['active', 'className', 'children', 'size'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const Eu = (u) => {
                        let e = u.active,
                            t = u.className,
                            a = u.children,
                            r = u.size,
                            i = void 0 === r ? _.small : r,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, lu);
                        const l = n()('ToggleButton_base_b9', t, e && 'ToggleButton_base__active_68');
                        return o().createElement(
                            'div',
                            { className: l },
                            o().createElement(
                                D,
                                cu({}, s, { type: 'secondary', size: i }),
                                o().createElement('span', { className: 'ToggleButton_content_85' }, a),
                            ),
                            o().createElement('div', { className: 'ToggleButton_overlay_0a' }),
                            o().createElement('div', { className: 'ToggleButton_indicator_85' }),
                        );
                    },
                    mu = ((0, i.memo)(Eu), 'Footer_base_d0'),
                    du = () => {
                        const u = G('model.btnSwitchReady'),
                            e = u.onClick,
                            t = u.caption,
                            a = u.description,
                            r = u.tooltipHeader,
                            s = u.isRed,
                            l = u.isEnabled,
                            c = G(),
                            E = c.footerMessage,
                            m = c.isFooterMessageGrey,
                            d = n()('Footer_message_3d', !m && 'Footer_message__alert_64'),
                            F = (0, i.useCallback)(() => e(), [e]),
                            B = s ? A.primaryRed : A.primary;
                        return o().createElement(
                            'div',
                            { className: mu },
                            o().createElement('div', { className: d }, E),
                            o().createElement(
                                M,
                                { header: r, body: a },
                                o().createElement(D, { onClick: F, size: _.small, type: B, disabled: !l }, t),
                            ),
                        );
                    },
                    Au = ({ currency: u, amount: e }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(u),
                            a = (0, i.useMemo)(() => z(t), [t]);
                        return o().createElement(
                            'div',
                            { className: 'Bonus_base_96' },
                            o().createElement('div', { className: 'Bonus_currencyImage_16', style: a }),
                            o().createElement('span', { className: 'Bonus_caption_7e' }, `+${e}%`),
                        );
                    },
                    _u = () => {
                        const u = G('model.header.bonuses');
                        return 0 === u.length
                            ? null
                            : o().createElement(
                                  'div',
                                  { className: 'Bonuses_base_6f' },
                                  u
                                      .filter((u) => u)
                                      .map(({ value: u }) =>
                                          o().createElement(Au, {
                                              currency: u.currency,
                                              amount: u.amount,
                                              key: u.currency,
                                          }),
                                      ),
                              );
                    };
                let Fu;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Fu || (Fu = {}));
                const Du = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Bu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Cu = (u, e, t = Fu.left) => u.split(e).reduce(t === Fu.left ? Du : Bu, []),
                    gu = (() => {
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
                    pu = ['zh_cn', 'zh_sg', 'zh_tw'];
                let hu;
                var bu;
                (((bu = hu || (hu = {})).SHORT_DATE = 'short-date'),
                    (bu.SHORT_TIME = 'short-time'),
                    (bu.SHORT_DATE_TIME = 'short-date-time'),
                    (bu.FULL_DATE = 'full-date'),
                    (bu.FULL_DATE_TIME = 'full-date-time'),
                    (bu.MONTH = 'month'),
                    (bu.MONTH_DATE = 'month-date'),
                    (bu.DATE_MONTH = 'date-month'),
                    (bu.MONTH_YEAR = 'month-year'),
                    (bu.WEEK_DAY = 'week-day'),
                    (bu.WEEK_DAY_TIME = 'week-day-time'),
                    (bu.YEAR = 'year'),
                    (bu.DATE_YEAR = 'date-year'),
                    Date.now(),
                    h.Sw.instance);
                const vu = ({ binding: u, text: e = '', classMix: t, alignment: a = Fu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  i.Fragment,
                                  null,
                                  e.split('\n').map((e, r) =>
                                      o().createElement(
                                          'div',
                                          { className: n()('FormatText_base_d0', t), key: `${e}-${r}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = Fu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return pu.includes(t)
                                                                ? gu(u)
                                                                : ((u, e = Fu.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Cu(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Cu(u, a, Fu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, a, u).map((u, e) =>
                                              o().createElement(i.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    fu = () => {
                        const u = G('model.header.noBonusPlaceholder'),
                            e = u.text,
                            t = u.icon,
                            a = t && z(t);
                        return i.createElement(
                            i.Fragment,
                            null,
                            e &&
                                i.createElement(
                                    'div',
                                    { className: 'NoBonus_textContainer_ef' },
                                    i.createElement(vu, {
                                        text: e,
                                        classMix: 'NoBonus_textMix_ff',
                                        alignment: Fu.right,
                                    }),
                                ),
                            a && i.createElement('div', { style: a, className: 'NoBonus_icon_69' }),
                        );
                    };
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const yu = () => {
                    const u = G('model.header.btnLeavePlatoon'),
                        e = G('model.header.btnMuteAll'),
                        t = G('model.header'),
                        a = t.backgroundImage,
                        n = t.showNoBonusPlaceholder,
                        r = t.showInfoIcon,
                        s = (0, i.useCallback)(() => {
                            (u.onClick(), E(R.sounds.gui_platoon_2_leave()));
                        }, [u]),
                        l = (0, i.useCallback)(() => e.onClick(), [e]);
                    return o().createElement(
                        'div',
                        { className: 'Header_base_26', style: z(a) },
                        o().createElement(
                            'div',
                            { className: 'Header_buttonContainer_84' },
                            o().createElement(
                                q,
                                wu({}, u, {
                                    onClick: s,
                                    cButtonProps: { type: A.secondary },
                                    className: 'Header_leavePlatoonButton_e4',
                                }),
                            ),
                        ),
                        e.isVisible &&
                            o().createElement(
                                M,
                                { header: e.tooltipHeader, body: e.tooltipBody },
                                o().createElement(
                                    'div',
                                    { className: 'Header_muteButtonContainer_7e' },
                                    o().createElement(
                                        Eu,
                                        { onClick: l, active: e.isSelected },
                                        o().createElement('div', { className: 'Header_muteIcon_54' }),
                                    ),
                                ),
                            ),
                        n ? o().createElement(fu, null) : o().createElement(_u, null),
                        r && o().createElement(X, null),
                    );
                };
                var xu = t(493),
                    Su = t.n(xu);
                const Mu = 'subViews.onChanged',
                    Tu = '.html',
                    Ru = /^coui:\/\/gui\/.*/,
                    Nu = au(),
                    Ou = (u) => {
                        const e = document.createElement('script');
                        ((e.src = u), (e.defer = !0), document.head.appendChild(e));
                    },
                    Lu = (0, i.memo)(({ id: u, mixClass: e, children: t }) => {
                        const a = (0, i.useRef)(null),
                            r = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            s = (0, i.useState)(!1),
                            l = s[0],
                            c = s[1],
                            E = (0, i.useState)(!0),
                            m = E[0],
                            d = E[1],
                            A = (0, i.useCallback)(
                                (u) => {
                                    u.includes(r) &&
                                        (c(!0), engine.off(Mu, A), window.subViews.removeChildChangedCallback(r));
                                },
                                [r],
                            ),
                            _ = (0, i.useCallback)((u) => {
                                Nu.add(
                                    () =>
                                        new Promise((e) => {
                                            const t = new MutationObserver(() => {
                                                (d(!1), t.disconnect(), e());
                                            });
                                            if (a.current) {
                                                const e = document.getElementById('root');
                                                (e && e.setAttribute('id', 'bugSubView'),
                                                    a.current.setAttribute('id', 'root'));
                                                const n = document.createElement('link');
                                                ((n.href = u.replace(Tu, '.css')),
                                                    (n.rel = 'stylesheet'),
                                                    document.head.appendChild(n),
                                                    Ru.test(u) &&
                                                        Ou(
                                                            u
                                                                .split('/')
                                                                .slice(0, -3)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    Ou(u.replace(Tu, '.js')),
                                                    t.observe(a.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                if (window.subViews.ids().includes(u)) {
                                    const e = window.subViews.get(u),
                                        t = e.path;
                                    let a = t.split('/').pop();
                                    if (a)
                                        return (
                                            (a = a.split('.')[0]),
                                            (window.subViews[a] = Object.assign({ id: u }, e)),
                                            _(t),
                                            () => {
                                                (a && window.subViews[a] && delete window.subViews[a],
                                                    engine.trigger('subView:destroy', { viewName: a, viewId: u }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(u),
                                                    console.info(`Sub view ${a} is destroyed: ${t}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(Mu, A);
                            }, [A, _, u, l]),
                            o().createElement(
                                'div',
                                { className: n()('SubView_base_b0', e) },
                                m && t,
                                o().createElement('div', { ref: a }),
                            )
                        );
                    });
                let ku;
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(ku || (ku = {}));
                const Pu = ({
                        children: u,
                        contentID: e,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: r = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, i.useCallback)(() => {
                                ((0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    m.playYes());
                            }, [n, e, t, a]),
                            l = (0, i.useCallback)(() => {
                                (0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [e, t, a]),
                            c = (0, i.useCallback)(
                                (u) => {
                                    (o && o(u), ((u) => u.button === ku.RIGHT)(u) && s());
                                },
                                [o, s],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, i.cloneElement)(u, { onMouseDown: c }) : u
                        );
                    },
                    Iu = ['children'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Wu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, Iu);
                    return o().createElement(
                        Pu,
                        Hu({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        e,
                    );
                };
                let Vu, Uu;
                (!(function (u) {
                    ((u.Squad = 'squad'),
                        (u.Event = 'event'),
                        (u.Comp7 = 'comp7'),
                        (u.BattleRoyal = 'battle_royal'),
                        (u.Epic = 'epic'),
                        (u.MapBox = 'mapbox'),
                        (u.Ranked = 'ranked'));
                })(Vu || (Vu = {})),
                    (function (u) {
                        ((u[(u.None = 0)] = 'None'), (u[(u.ModeOffline = 1)] = 'ModeOffline'));
                    })(Uu || (Uu = {})));
                const $u = ({ slotLabelElements: u }) => {
                        const e = (0, i.useMemo)(() => (u) => ('' === u ? {} : JSON.parse(u)), []);
                        return o().createElement(
                            o().Fragment,
                            null,
                            u.map(({ value: u }, t) =>
                                o().createElement(
                                    'div',
                                    { key: u.content + t, style: e(u.styleJson) },
                                    o().createElement(vu, { text: u.content, classMix: 'SlotLabel_formattedText_e8' }),
                                ),
                            ),
                        );
                    },
                    ju = {
                        base: 'NoPlayer_base_42',
                        base__disabled: 'NoPlayer_base__disabled_98',
                        central: 'NoPlayer_central_8a',
                        image: 'NoPlayer_image_41',
                        image__disabled: 'NoPlayer_image__disabled_14',
                        image__empty: 'NoPlayer_image__empty_b1',
                        image__spinner: 'NoPlayer_image__spinner_bd',
                        spinner: 'NoPlayer_spinner_44',
                        footer: 'NoPlayer_footer_68',
                    };
                let Gu;
                !(function (u) {
                    ((u.spinner = 'spinner'), (u.disabled = 'disabled'), (u.empty = 'empty'));
                })(Gu || (Gu = {}));
                const zu = ({ text: u, type: e, slotLabelElements: t }) => {
                        const a = n()(ju.base, e === Gu.disabled && ju.base__disabled),
                            r = n()(ju.image, ju[`image__${e}`]);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(
                                'div',
                                { className: ju.central },
                                o().createElement('div', { className: r }),
                                u,
                            ),
                            o().createElement(
                                'div',
                                { className: ju.footer },
                                t.length > 0 && o().createElement($u, { slotLabelElements: t }),
                            ),
                        );
                    },
                    Xu = ({ estimatedTime: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', null, R.strings.platoon.members.card.searching()),
                            o().createElement('span', null, '(', u, ')'),
                        ),
                    Ku = (u, e, t, a) => {
                        let n = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (a && a !== Vu.Squad) {
                            const u = n.$dyn(a.toString());
                            u && (n = u);
                        }
                        let r = null;
                        return (
                            (r = u
                                ? n.$dyn('in_battle')
                                : e
                                  ? t
                                      ? n.$dyn('ready_player')
                                      : n.$dyn('ready')
                                  : t
                                    ? n.$dyn('not_ready_player')
                                    : n.$dyn('not_ready')),
                            r || Ku(u, e, t)
                        );
                    },
                    qu = ({ rating: u }) =>
                        o().createElement(
                            'div',
                            { className: 'WTRInfo_wtr_5e' },
                            o().createElement('div', { className: 'WTRInfo_wtrIcon_a9' }),
                            o().createElement('span', { className: 'WTRInfo_wtrValue_80' }, u),
                        ),
                    Yu = (u) => u.replace('-', '_'),
                    Zu = (u, e) =>
                        String(
                            e
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Yu(u))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Yu(u)),
                        ),
                    Qu = (u, e) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Yu(e).toLowerCase())),
                    Ju = (u, e) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Yu(e).toLowerCase())),
                    ue = () => {
                        const u = R.strings.platoon.members.card.muted.caption(),
                            e = R.strings.platoon.members.card.muted.description();
                        return o().createElement(
                            M,
                            { header: u, body: e },
                            o().createElement('div', { className: 'MutedIcon_base_d2' }),
                        );
                    };
                let ee;
                !(function (u) {
                    ((u.default = 'default'), (u.x48 = 'x48'), (u.x80 = 'x80'), (u.x220 = 'x220'));
                })(ee || (ee = {}));
                const te = ({ content: u, classMix: e }) => {
                        const t = (0, i.useRef)(null),
                            a = (0, i.useState)(!0),
                            r = a[0],
                            s = a[1];
                        return (
                            (0, i.useEffect)(() =>
                                ((u) => {
                                    let e,
                                        a = null;
                                    return (
                                        (a = requestAnimationFrame(() => {
                                            a = requestAnimationFrame(() => {
                                                ((a = null),
                                                    (e = (() => {
                                                        const u = t.current;
                                                        u && u.offsetWidth >= u.scrollWidth && s(!1);
                                                    })()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof e && e(), null !== a && cancelAnimationFrame(a));
                                        }
                                    );
                                })(),
                            ),
                            o().createElement(
                                M,
                                { isEnabled: r, body: u },
                                o().createElement('div', { ref: t, className: n()('TextOverflow_base_3b', e) }, u),
                            )
                        );
                    },
                    ae = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    ne = { [ee.default]: 'c_24x24', [ee.x48]: 'c_48x48', [ee.x80]: 'c_80x80', [ee.x220]: 'c_220x220' },
                    re = ({ badgeID: u, size: e = ee.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(ne[e]);
                        return o().createElement('div', {
                            className: n()(ae.base, ae[`base__${e}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${u}`)})` },
                        });
                    },
                    ie = {
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
                    oe = (0, i.memo)(({ tooltipHeaderName: u }) => {
                        const e = (0, i.useMemo)(() => {
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
                        return o().createElement(
                            M,
                            { header: e, body: t },
                            o().createElement('div', { className: ie.anonymizedIcon }),
                        );
                    });
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const le = { [ee.default]: 'c_64x24', [ee.x48]: 'c_68x28' },
                    ce = { [ee.default]: 'c_48x48', [ee.x48]: 'c_48x48' },
                    Ee = ({
                        userName: u,
                        clanAbbrev: e = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: s = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: c = !1,
                        hiddenUserName: E = '',
                        size: m = ee.default,
                        userNameClassName: d = '',
                        clanTagClassName: A = '',
                    }) => {
                        const _ = R.images.gui.maps.icons.library.badges.strips.$dyn(le[m]),
                            F = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${_.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, _],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(ce[m]),
                            B = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, D],
                            ),
                            C = e ? `[${e}]` : '',
                            g = n()(ie.base, ie[`base__${m}`], s && ie.base__inverted),
                            p = n()(ie.userName, d),
                            h = n()(ie.clanTag, A),
                            b = u !== E,
                            v = l ? `${E}${C}` : E,
                            f = Boolean(a.badgeID) && o().createElement(re, se({ size: m }, a, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                f,
                                [
                                    o().createElement(
                                        'div',
                                        { className: p, key: 'userName' },
                                        o().createElement(te, { content: u, key: w }),
                                    ),
                                    !l && Boolean(C) && o().createElement('div', { className: h, key: 'clanTag' }, C),
                                ],
                                0 !== t && o().createElement('div', { className: ie.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    o().createElement(
                                        'div',
                                        { className: ie.suffixBadgeWrapper, key: 'suffixBadge' },
                                        o().createElement('div', { className: ie.suffixBadgeStripe, style: F }),
                                        o().createElement('div', { className: ie.suffixBadge, style: B }),
                                    ),
                                c && b && o().createElement(oe, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return o().createElement('div', { className: g }, s ? y.reverse() : y);
                    },
                    me = { badgeID: '' },
                    de = ({ name: u, badgeID: e, clanTag: t, color: a }) => {
                        const n = (0, i.useMemo)(() => ({ badgeID: e || '' }), [e]),
                            r = (0, i.useMemo)(() => ({ color: a }), [a]);
                        return o().createElement(
                            'div',
                            { style: r },
                            o().createElement(Ee, {
                                userName: u,
                                badge: n,
                                suffixBadge: me,
                                clanAbbrev: t,
                                userNameClassName: 'PlayerName_userName_c9',
                            }),
                        );
                    },
                    Ae = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _e = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const Fe = ({ type: u, isPremium: e, name: t, tier: a, className: r, prebattleType: i }) =>
                        o().createElement(
                            'div',
                            { className: n()('VehicleDescription_base_1b', r) },
                            i !== Vu.BattleRoyal &&
                                (function (u) {
                                    let e = '';
                                    for (let t = _e.length - 1; t >= 0; t--)
                                        for (; u >= _e[t]; ) ((e += Ae[t]), (u -= _e[t]));
                                    return e;
                                })(a),
                            o().createElement('div', {
                                className: n()(
                                    'VehicleDescription_vehicleType_a1',
                                    e && 'VehicleDescription_vehicleType__elite_71',
                                ),
                                style: z(Zu(u, e)),
                            }),
                            t,
                        ),
                    De = (0, i.memo)(({ src: u, className: e, autoPlay: t = !1, loop: a = !1 }) => {
                        const n = (0, i.useRef)(null);
                        return (
                            (0, i.useEffect)(() => {
                                engine.on('clientMinimized', (u) => {
                                    n.current && (u ? n.current.pause() : n.current.play());
                                });
                            }, []),
                            o().createElement('video', { ref: n, className: e, src: u, autoPlay: t, loop: a })
                        );
                    });
                De.displayName = 'Video';
                const Be = ({ visible: u }) => {
                    const e = n()(
                        'VoiceAnimation_talkingAnimation_c4',
                        u && 'VoiceAnimation_talkingAnimation__visible_18',
                    );
                    return o().createElement(De, {
                        src: R.videos.platoon.VoiceChat(),
                        autoPlay: !0,
                        loop: !0,
                        className: e,
                    });
                };
                class Ce extends o().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? h.B3.GOLD : h.B3.INTEGRAL;
                        const e = h.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                let ge, pe;
                ((Ce.defaultProps = { format: 'integral' }),
                    (function (u) {
                        ((u[(u.A = 1)] = 'A'),
                            (u[(u.B = 2)] = 'B'),
                            (u[(u.C = 3)] = 'C'),
                            (u[(u.D = 4)] = 'D'),
                            (u[(u.E = 5)] = 'E'));
                    })(ge || (ge = {})),
                    (function (u) {
                        ((u[(u.Achieved = 0)] = 'Achieved'),
                            (u[(u.Current = 1)] = 'Current'),
                            (u[(u.Inactive = 2)] = 'Inactive'));
                    })(pe || (pe = {})));
                const he = R.strings.comp7.division,
                    be = { [ge.A]: 'A', [ge.B]: 'B', [ge.C]: 'C', [ge.D]: 'D', [ge.E]: 'E' };
                let ve;
                !(function (u) {
                    ((u[(u.First = 6)] = 'First'),
                        (u[(u.Second = 5)] = 'Second'),
                        (u[(u.Third = 4)] = 'Third'),
                        (u[(u.Fourth = 3)] = 'Fourth'),
                        (u[(u.Fifth = 2)] = 'Fifth'),
                        (u[(u.Sixth = 1)] = 'Sixth'));
                })(ve || (ve = {}));
                const fe = {
                        [ve.First]: 'first',
                        [ve.Second]: 'second',
                        [ve.Third]: 'third',
                        [ve.Fourth]: 'fourth',
                        [ve.Fifth]: 'fifth',
                        [ve.Sixth]: 'sixth',
                    },
                    we = (u) => fe[u],
                    ye = [ve.First, ve.Second, ve.Third, ve.Fourth],
                    xe = (u) => ye.includes(u);
                let Se;
                !(function (u) {
                    ((u[(u.x22 = 22)] = 'x22'),
                        (u[(u.x40 = 40)] = 'x40'),
                        (u[(u.x48 = 48)] = 'x48'),
                        (u[(u.x64 = 64)] = 'x64'),
                        (u[(u.x84 = 84)] = 'x84'),
                        (u[(u.x110 = 110)] = 'x110'),
                        (u[(u.x150 = 150)] = 'x150'),
                        (u[(u.x200 = 200)] = 'x200'),
                        (u[(u.x260 = 260)] = 'x260'),
                        (u[(u.x320 = 320)] = 'x320'),
                        (u[(u.x420 = 420)] = 'x420'),
                        (u[(u.x600 = 600)] = 'x600'));
                })(Se || (Se = {}));
                const Me = ({ rank: u, size: e, division: t, className: a }) => {
                        const r = (0, i.useMemo)(() => {
                            const a = R.images.comp7.gui.maps.icons.comp7.ranks.$num(e),
                                n = xe(u) && void 0 !== t ? `_${((u) => he.$dyn(be[u]))(t)}` : '';
                            return { backgroundImage: `url(${a.$dyn(`${we(u)}${n}`)})`, '--imageSize': `${e}rem` };
                        }, [u, e, t]);
                        return o().createElement('div', { className: n()('RankEmblem_base_ec', a), style: r });
                    },
                    Te = R.strings.comp7.scoreTooltip,
                    Re = ({ slot: u }) => {
                        const e = u.rankData,
                            t = e.rank,
                            a = e.division,
                            r = e.score;
                        return o().createElement(
                            M,
                            { header: Te.header(), body: Te.body() },
                            o().createElement(
                                'div',
                                { className: n()('Comp7RankData_base_e8', xe(t) && 'Comp7RankData_base__general_01') },
                                o().createElement(
                                    'div',
                                    { className: 'Comp7RankData_icon_75' },
                                    o().createElement(Me, { rank: t, division: a, size: Se.x22 }),
                                ),
                                o().createElement(Ce, { value: r }),
                            ),
                        );
                    },
                    Ne = R.strings.ranked_battles.rankTooltip,
                    Oe = ({ slot: u }) => {
                        const e = u.rankData,
                            t = e.rank,
                            a = e.division,
                            r = R.images.gui.maps.icons.rankedBattles.ranks.c_24x24.$dyn(`rank${a}_${t}`);
                        return o().createElement(
                            M,
                            { body: Ne.body() },
                            o().createElement(
                                'div',
                                { className: n()('RankedRankData_base_e3') },
                                o().createElement('div', {
                                    className: 'RankedRankData_icon_5f',
                                    style: { background: `url(${r}) no-repeat center / contain` },
                                }),
                            ),
                        );
                    },
                    Le = 'Player_flagImage_4e';
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Pe = ({ slot: u, player: e, isInBattle: t, infoText: a, prebattleType: r }) => {
                    const s = n()('Player_readiness_f9', e.isReady && !t && 'Player_readiness__isReady_c9'),
                        l = r === Vu.BattleRoyal ? Ju : Qu,
                        c = e.isReady ? l(e.vehicle.nation, e.vehicle.techName) : '',
                        E = e.isReady
                            ? String(
                                  R.images.gui.maps.icons.platoon.members_window.tall_slot.flags.$dyn(e.vehicle.nation),
                              )
                            : '',
                        m = (0, i.useMemo)(
                            () => Ku(t, e.isReady, e.isCurrentUser, r),
                            [t, e.isReady, e.isCurrentUser, r],
                        ),
                        d = n()(
                            'Player_topping_6c',
                            e.isCommander ? 'Player_topping__isCommander_b9' : 'Player_topping__isPlayer_03',
                        );
                    return o().createElement(
                        'div',
                        { className: 'Player_base_7d', style: z(m) },
                        o().createElement(
                            'div',
                            { className: d },
                            o().createElement('div', { className: 'Player_toppingBack_cd' }),
                            e.isPrem && o().createElement('div', { className: 'Player_toppingPremiumIcon_20' }),
                            o().createElement(Be, { visible: e.voice.isSpeaking }),
                            o().createElement('div', { className: 'Player_toppingPlayerIcon_0b' }),
                        ),
                        !t &&
                            e.isReady &&
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement('div', { className: Le, style: z(E) }),
                                o().createElement('div', { className: 'Player_vehicleImage_42', style: z(c) }),
                            ),
                        e.isIgnored &&
                            o().createElement('div', {
                                className: Le,
                                style: z(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                            }),
                        o().createElement(
                            'div',
                            { className: 'Player_mutedContainer_69' },
                            e.voice.isMutedByUser && o().createElement(ue, null),
                        ),
                        o().createElement('div', { className: 'Player_name_11' }, o().createElement(de, e.commonData)),
                        '' !== e.commonData.rating && o().createElement(qu, { rating: e.commonData.rating }),
                        r === Vu.Comp7 && o().createElement(Re, { slot: u }),
                        r === Vu.Ranked && o().createElement(Oe, { slot: u }),
                        o().createElement(
                            'div',
                            { className: 'Player_footer_1a' },
                            e.isReady && !t ? o().createElement(Fe, ke({}, e.vehicle, { prebattleType: r })) : a,
                        ),
                        o().createElement('div', { className: s }),
                    );
                };
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const He = (u) => {
                        const e = (0, i.useMemo)(
                            () =>
                                u.isEmpty
                                    ? ((u) =>
                                          u.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: Gu.disabled,
                                                    slotLabelElements: u.slotLabelElements,
                                                }
                                              : u.isSearching
                                                ? {
                                                      text: o().createElement(Xu, { estimatedTime: u.estimatedTime }),
                                                      type: Gu.spinner,
                                                      slotLabelElements: u.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: Gu.empty,
                                                      slotLabelElements: u.slotLabelElements,
                                                  })(u)
                                    : {
                                          isInBattle: u.isInBattle,
                                          player: u.player,
                                          infoText: u.infoText,
                                          prebattleType: u.prebattleType,
                                      },
                            [u],
                        );
                        return (0, i.useMemo)(() => (u) => void 0 !== u.isInBattle, [])(e)
                            ? o().createElement(Pe, Ie({ slot: u }, e))
                            : o().createElement(zu, e);
                    },
                    We = ({ slot: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(de, u.player.commonData),
                            o().createElement(Re, { slot: u }),
                        ),
                    Ve = R.images.gui.maps.icons.platoon.members_window.wide_slot,
                    Ue = Ve.cards,
                    $e = R.strings.platoon.members.card,
                    je = R.images.portal.gui.maps.icons,
                    Ge = je.platoon.members_window.wide_slot.cards,
                    ze = R.images.portal.gui.maps.icons.vehicleLevel.s40x40,
                    Xe = ({ tier: u, className: e }) =>
                        o().createElement(
                            'div',
                            { className: n()('VehicleDescription_base_4a', e) },
                            o().createElement('div', {
                                className: 'VehicleDescription_vehicleLevel_0e',
                                style: z(String(ze.$num(u))),
                            }),
                        ),
                    Ke = R.images.portal.gui.maps.icons.vehicle.carousel.medium,
                    qe = ({ vehicle: u }) => {
                        const e = Ke.$dyn(u.techName);
                        return o().createElement(
                            'div',
                            { className: 'Vehicle_base_c4' },
                            o().createElement(Xe, u),
                            o().createElement('div', { className: 'Vehicle_vehicle_cc', style: z(e) }),
                        );
                    };
                var Ye = t(9887),
                    Ze = t.n(Ye);
                const Qe = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    Je = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ut;
                function et(u, e, t) {
                    const a = (function (u, e) {
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
                        n = (function (u, e) {
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
                })(ut || (ut = {}));
                const tt = r.O.client.getSize('rem'),
                    at = tt.width,
                    nt = tt.height,
                    rt = Object.assign({ width: at, height: nt }, et(at, nt, Je)),
                    it = (0, i.createContext)(rt),
                    ot = ['children'],
                    st = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, ot);
                        const a = (0, i.useContext)(it),
                            n = a.extraLarge,
                            r = a.large,
                            o = a.medium,
                            s = a.small,
                            l = a.extraSmall,
                            c = a.extraLargeWidth,
                            E = a.largeWidth,
                            m = a.mediumWidth,
                            d = a.smallWidth,
                            A = a.extraSmallWidth,
                            _ = a.extraLargeHeight,
                            F = a.largeHeight,
                            D = a.mediumHeight,
                            B = a.smallHeight,
                            C = a.extraSmallHeight,
                            g = { extraLarge: _, large: F, medium: D, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && r) return e;
                            if (t.medium && o) return e;
                            if (t.small && s) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && c) return Qe(e, t, g);
                            if (t.largeWidth && E) return Qe(e, t, g);
                            if (t.mediumWidth && m) return Qe(e, t, g);
                            if (t.smallWidth && d) return Qe(e, t, g);
                            if (t.extraSmallWidth && A) return Qe(e, t, g);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && _) return e;
                                if (t.largeHeight && F) return e;
                                if (t.mediumHeight && D) return e;
                                if (t.smallHeight && B) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                let lt, ct, Et;
                ((st.defaultProps = {
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
                    (0, i.memo)(st),
                    (0, i.memo)(({ children: u }) => {
                        const e = (0, i.useContext)(it),
                            t = (0, i.useState)(e),
                            a = t[0],
                            n = t[1],
                            s = (0, i.useCallback)((u, e) => {
                                const t = r.O.view.pxToRem(u),
                                    a = r.O.view.pxToRem(e);
                                n(Object.assign({ width: t, height: a }, et(t, a, Je)));
                            }, []);
                        (W(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, i.useEffect)(() => () => engine.off('clientResized', s), [s]));
                        const l = (0, i.useMemo)(() => Object.assign({}, a), [a]);
                        return o().createElement(it.Provider, { value: l }, u);
                    }),
                    (function (u) {
                        ((u[(u.ExtraSmall = Je.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Je.small.width)] = 'Small'),
                            (u[(u.Medium = Je.medium.width)] = 'Medium'),
                            (u[(u.Large = Je.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Je.extraLarge.width)] = 'ExtraLarge'));
                    })(lt || (lt = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Je.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Je.small.width)] = 'Small'),
                            (u[(u.Medium = Je.medium.width)] = 'Medium'),
                            (u[(u.Large = Je.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Je.extraLarge.width)] = 'ExtraLarge'));
                    })(ct || (ct = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Je.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = Je.small.height)] = 'Small'),
                            (u[(u.Medium = Je.medium.height)] = 'Medium'),
                            (u[(u.Large = Je.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = Je.extraLarge.height)] = 'ExtraLarge'));
                    })(Et || (Et = {})));
                const mt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    dt = (u) => u.includes('_') && ((u) => mt.includes(u))(u.split('_').at(-1)),
                    At = [lt.ExtraLarge, lt.Large, lt.Medium, lt.Small, lt.ExtraSmall],
                    _t = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (dt(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = At.indexOf(e),
                                    i = (-1 !== r ? mt.slice(r) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : u[n]), t);
                            }
                            const n = u[a];
                            return (
                                void 0 === n ||
                                    ((u, e) => mt.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    Ft = (u, e = _t) => {
                        const t = (
                            (u, e = _t) =>
                            (t) => {
                                const a = (() => {
                                        const u = (0, i.useContext)(it),
                                            e = u.width,
                                            t = u.height,
                                            a = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return lt.ExtraLarge;
                                                    case u.large:
                                                        return lt.Large;
                                                    case u.medium:
                                                        return lt.Medium;
                                                    case u.small:
                                                        return lt.Small;
                                                    case u.extraSmall:
                                                        return lt.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            lt.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            n = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return ct.ExtraLarge;
                                                    case u.largeWidth:
                                                        return ct.Large;
                                                    case u.mediumWidth:
                                                        return ct.Medium;
                                                    case u.smallWidth:
                                                        return ct.Small;
                                                    case u.extraSmallWidth:
                                                        return ct.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            ct.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            r = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return Et.ExtraLarge;
                                                    case u.largeHeight:
                                                        return Et.Large;
                                                    case u.mediumHeight:
                                                        return Et.Medium;
                                                    case u.smallHeight:
                                                        return Et.Small;
                                                    case u.extraSmallHeight:
                                                        return Et.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            Et.ExtraSmall
                                                        );
                                                }
                                            })(u);
                                        return {
                                            mediaSize: a,
                                            mediaWidth: n,
                                            mediaHeight: r,
                                            remScreenWidth: e,
                                            remScreenHeight: t,
                                        };
                                    })().mediaSize,
                                    n = (0, i.useMemo)(() => e(t, a), [t, a]);
                                return o().createElement(u, n);
                            }
                        )(u, e);
                        return o().memo((e) =>
                            Object.keys(e).some((u) => dt(u) && void 0 !== e[u])
                                ? o().createElement(t, e)
                                : o().createElement(u, e),
                        );
                    },
                    Dt = {
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
                    Bt = [
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
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                Object.keys(Ze());
                const gt = {
                        XL: { mt: Dt.mt__XL, mr: Dt.mr__XL, mb: Dt.mb__XL, ml: Dt.ml__XL },
                        LG: { mt: Dt.mt__LG, mr: Dt.mr__LG, mb: Dt.mb__LG, ml: Dt.ml__LG },
                        MDp: { mt: Dt.mt__MDp, mr: Dt.mr__MDp, mb: Dt.mb__MDp, ml: Dt.ml__MDp },
                        MD: { mt: Dt.mt__MD, mr: Dt.mr__MD, mb: Dt.mb__MD, ml: Dt.ml__MD },
                        SMp: { mt: Dt.mt__SMp, mr: Dt.mr__SMp, mb: Dt.mb__SMp, ml: Dt.ml__SMp },
                        SM: { mt: Dt.mt__SM, mr: Dt.mr__SM, mb: Dt.mb__SM, ml: Dt.ml__SM },
                        XS: { mt: Dt.mt__XS, mr: Dt.mr__XS, mb: Dt.mb__XS, ml: Dt.ml__XS },
                    },
                    pt = (Object.keys(gt), ['mt', 'mr', 'mb', 'ml']),
                    ht = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    bt = Ft((u) => {
                        let e = u.className,
                            t = u.width,
                            a = u.height,
                            r = u.m,
                            s = u.mt,
                            l = void 0 === s ? r : s,
                            c = u.mr,
                            E = void 0 === c ? r : c,
                            m = u.mb,
                            d = void 0 === m ? r : m,
                            A = u.ml,
                            _ = void 0 === A ? r : A,
                            F = u.column,
                            D = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (F ? 'column' : D && 'row') || void 0 : B,
                            g = u.flexStart,
                            p = u.center,
                            h = u.flexEnd,
                            b = u.spaceBetween,
                            v = u.spaceAround,
                            f = u.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            y = u.alignItems,
                            x = void 0 === y ? (g ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : y,
                            S = u.alignSelf,
                            M = u.wrap,
                            T = u.flexWrap,
                            R = void 0 === T ? (M ? 'wrap' : void 0) : T,
                            N = u.grow,
                            O = u.shrink,
                            L = u.flex,
                            k = void 0 === L ? (N || O ? `${N ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : L,
                            P = u.style,
                            I = u.children,
                            H = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Bt);
                        const W = (0, i.useMemo)(() => {
                                const u = { mt: l, mr: E, mb: d, ml: _ },
                                    e = ((u) =>
                                        pt.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(gt[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        pt.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[ht[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: k,
                                        alignSelf: S,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: R,
                                        justifyContent: w,
                                        alignItems: x,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, a, l, E, d, _, P, k, S, C, R, w, x]),
                            V = W.computedStyle,
                            U = W.computedClassNames;
                        return o().createElement('div', Ct({ className: n()(Dt.base, ...U, e), style: V }, H), I);
                    });
                var vt = t(3532),
                    ft = t.n(vt);
                const wt = {
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
                    yt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                Object.keys(Ze());
                const St = Object.keys(ft()),
                    Mt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Tt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Rt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Nt =
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
                            'heading-H56': Mt,
                            'heading-H36': Mt,
                            'heading-H28': Tt,
                            'heading-H24': Tt,
                            'heading-H24R': Tt,
                            'heading-H22': Tt,
                            'heading-H20R': Tt,
                            'heading-H18': Tt,
                            'heading-H15': Rt,
                            'heading-H14': Rt,
                            'paragraph-P24': Tt,
                            'paragraph-P18': Tt,
                            'paragraph-P16': Tt,
                            'paragraph-P14': Rt,
                            'paragraph-P12': Rt,
                            'paragraph-P10': Rt,
                        }),
                    Ot =
                        (Object.keys(Nt),
                        (u) =>
                            u
                                ? ((u) => St.includes(u))(u)
                                    ? { colorClassName: wt[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Lt = Ft((u) => {
                        let e = u.text,
                            t = u.variant,
                            a = u.className,
                            r = u.color,
                            s = u.m,
                            l = u.mt,
                            c = void 0 === l ? s : l,
                            E = u.mr,
                            m = void 0 === E ? s : E,
                            d = u.mb,
                            A = void 0 === d ? s : d,
                            _ = u.ml,
                            F = void 0 === _ ? s : _,
                            D = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, yt);
                        const g = (0, i.useMemo)(() => {
                                const u = Ot(r),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, a), colorClassName: e };
                            }, [D, r]),
                            p = g.computedStyle,
                            h = g.colorClassName;
                        return o().createElement(
                            bt,
                            xt(
                                {
                                    className: n()(wt.base, t && wt[t], h, a),
                                    style: p,
                                    mt: !0 === c ? Nt[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === m ? Nt[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === A ? Nt[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === F ? Nt[t || 'paragraph-P16'].ml : F,
                                },
                                C,
                            ),
                            void 0 !== B ? o().createElement(vu, xt({}, B, { text: e })) : e,
                        );
                    }),
                    kt = R.strings.portal_platoon,
                    Pt = ({ level: u, isCurrentUser: e, classMix: t }) => {
                        const a = n()('Complexity_base_72', e && 'Complexity_base__isCurrentUser_87', t);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement('div', {
                                className: 'Complexity_icon_f8',
                                style: z(((r = u), je.complexityLevel.s96x72.$num(r))),
                            }),
                            o().createElement(Lt, {
                                text: kt.members.slot.complexity(),
                                className: 'Complexity_text_93',
                            }),
                        );
                        var r;
                    },
                    It = {
                        base: 'WideSlot_base_31',
                        mutedContainer: 'WideSlot_mutedContainer_9d',
                        icon: 'WideSlot_icon_3d',
                        memberType: 'WideSlot_memberType_f8',
                        spinner: 'WideSlot_spinner_8e',
                        badge: 'WideSlot_badge_47',
                        mainContent: 'WideSlot_mainContent_db',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_f3',
                        complexity: 'WideSlot_complexity_8f',
                        infoContainer: 'WideSlot_infoContainer_b2',
                        readiness: 'WideSlot_readiness_14',
                    },
                    Ht = (u) => {
                        const e = u.player,
                            t = (0, i.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = e.isReady,
                                            a = e.isCurrentUser;
                                        return t
                                            ? a
                                                ? Ge.ready_player()
                                                : Ge.ready()
                                            : (({ slot: u, player: e }) => {
                                                  const t = u.isInBattle,
                                                      a = u.isEmpty,
                                                      n = u.isDisabled,
                                                      r = u.errorType,
                                                      i = e.isReady,
                                                      o = e.isCurrentUser;
                                                  return r
                                                      ? Ue.$dyn('error_' + r)
                                                      : t
                                                        ? Ue.in_battle_wide()
                                                        : a
                                                          ? Ue.empty_wide()
                                                          : n
                                                            ? Ue.disable_wide()
                                                            : i
                                                              ? o
                                                                  ? Ue.ready_player()
                                                                  : Ue.ready()
                                                              : i
                                                                ? void 0
                                                                : o
                                                                  ? Ue.not_ready_player()
                                                                  : Ue.not_ready_wide();
                                              })({ slot: u, player: e });
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            a = (0, i.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isSearching,
                                            a = u.isEmpty,
                                            n = u.isDisabled,
                                            r = e.isCommander,
                                            i = e.isPrem;
                                        return t
                                            ? Ve.spinner()
                                            : n
                                              ? Ve.disabled()
                                              : a
                                                ? Ve.empty()
                                                : r
                                                  ? i
                                                      ? Ve.commander_prem()
                                                      : Ve.commander()
                                                  : r
                                                    ? void 0
                                                    : i
                                                      ? Ve.member_prem()
                                                      : Ve.member();
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            r = (0, i.useMemo)(
                                () =>
                                    ((u) =>
                                        u.isSearching
                                            ? `${$e.searching()} (${u.estimatedTime})`
                                            : u.isDisabled
                                              ? $e.disabledVertical()
                                              : u.isEmpty
                                                ? $e.empty()
                                                : u.prebattleType === Vu.Comp7
                                                  ? o().createElement(We, { slot: u })
                                                  : o().createElement(de, u.player.commonData))(u),
                                [u],
                            ),
                            s = (0, i.useMemo)(() => ({ slotId: u.slotId }), [u.slotId]),
                            l =
                                !e.isReady || u.isInBattle
                                    ? o().createElement('div', { className: It.infoContainer }, u.infoText)
                                    : o().createElement(qe, { vehicle: e.vehicle });
                        return o().createElement(
                            w,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== e.commonData.rating,
                                args: s,
                            },
                            o().createElement(
                                'div',
                                { className: It.base, style: z(t) },
                                o().createElement(
                                    'div',
                                    { className: It.mutedContainer },
                                    e.voice.isMutedByUser && o().createElement(ue, null),
                                ),
                                o().createElement(
                                    'div',
                                    { className: n()(It.memberType, u.isDisabled && It.isDisabled) },
                                    o().createElement(Be, { visible: e.voice.isSpeaking }),
                                    o().createElement('div', {
                                        style: z(a),
                                        className: n()(It.icon, u.isSearching && It.spinner),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: n()(It.mainContent, u.isEmpty && It.mainContent__isEmpty) },
                                    r,
                                ),
                                !u.isInBattle &&
                                    !u.isEmpty &&
                                    !u.isDisabled &&
                                    o().createElement(Pt, {
                                        level: u.maxComplexity,
                                        isCurrentUser: e.isCurrentUser,
                                        classMix: It.complexity,
                                    }),
                                !u.isEmpty && l,
                                e.isReady &&
                                    !u.isInBattle &&
                                    o().createElement('div', {
                                        className: n()(It.readiness, e.isReady && It.readiness__isReady),
                                    }),
                            ),
                        );
                    };
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const Vt = ({ slot: u, isHorizontal: e, isShort: t }) => {
                        const a = e ? He : Ht,
                            r = u.player.commonData.name,
                            s = (0, i.useMemo)(() => ({ userName: r }), [r]),
                            l = o().createElement(
                                'div',
                                { className: n()(t && 'SlotContainer_base__short_67') },
                                o().createElement(a, Wt({ key: u.slotId }, u)),
                            );
                        return u.player.isCurrentUser || u.isEmpty
                            ? l
                            : o().createElement(Wu, { args: s, key: u.slotId }, l);
                    },
                    Ut = () => {
                        const u = G(),
                            e = u.isHorizontal,
                            t = u.isShort,
                            a = G('model.slots'),
                            r = n()(
                                'Slots_base_8e',
                                e && 'Slots_base__isHorizontal_06',
                                e && t && 'Slots_base__isHorizontal__short_f4',
                            );
                        return o().createElement(
                            'div',
                            { className: r },
                            a.map((u) =>
                                o().createElement(Vt, {
                                    slot: u.value,
                                    isHorizontal: e,
                                    isShort: t,
                                    key: u.value.slotId,
                                }),
                            ),
                        );
                    },
                    $t = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 };
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const Gt = R.strings.portal_platoon.members.commanderControls,
                    zt = R.strings.portal_lobby.complexity.level,
                    Xt = () => {
                        const u = G(),
                            e = u.shouldShowFindPlayersButton,
                            t = u.complexity,
                            a = G('model.btnInviteFriends'),
                            n = G('model.btnFindPlayers'),
                            r = (0, i.useCallback)(() => {
                                (n.onClick(), E(n.soundClickName));
                            }, [n]),
                            s = (0, i.useMemo)(() => ({ type: A.secondary }), []),
                            l = (0, i.useMemo)(
                                () =>
                                    ((u, e, t, a = !0) =>
                                        u && a
                                            ? $t
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
                                              }))(e, t, a))(!n.isEnabled, n.caption, n.description, n.hasTooltip),
                                [n.caption, n.isEnabled, n.description, n.hasTooltip],
                            );
                        return o().createElement(
                            o().Fragment,
                            null,
                            e &&
                                o().createElement(
                                    'div',
                                    { className: 'CommanderControls_left_9b' },
                                    o().createElement(
                                        w,
                                        l,
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                D,
                                                {
                                                    type: n.isLight ? A.primary : A.secondary,
                                                    size: _.small,
                                                    onClick: n.isEnabled ? r : void 0,
                                                    disabled: !n.isEnabled,
                                                },
                                                n.caption,
                                            ),
                                        ),
                                    ),
                                    o().createElement(iu, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: 'CommanderControls_tiersLimit_65',
                                    }),
                                ),
                            o().createElement(Lt, {
                                text: Gt.complexity(),
                                variant: 'paragraph-P14',
                                className: 'CommanderControls_complexity_46',
                                format: {
                                    binding: {
                                        value: o().createElement(
                                            'span',
                                            { className: 'CommanderControls_complexity__level_12' },
                                            zt.$num(t),
                                        ),
                                    },
                                },
                            }),
                            o().createElement(q, jt({}, a, { cButtonProps: s })),
                        );
                    },
                    Kt = () => {
                        const u = G(),
                            e = u.canMinimize,
                            t = u.isHorizontal,
                            a = u.isShort,
                            r = u.onClosed,
                            s = u.onMinimized,
                            l = u.onFocusChange,
                            c = u.windowTooltipHeader,
                            E = u.windowTooltipBody,
                            m = u.rawTitle,
                            d = n()(
                                'MembersWindow_base_08',
                                t
                                    ? [
                                          'MembersWindow_base__isHorizontal_d2',
                                          a && 'MembersWindow_base__isHorizontal__short_9f',
                                      ]
                                    : 'MembersWindow_base__isVertical_25',
                            ),
                            A = (0, i.useCallback)(() => r(), [r]),
                            _ = (0, i.useCallback)(() => s(), [s]),
                            F = (0, i.useCallback)(
                                (u) => {
                                    l({ isFocused: u });
                                },
                                [l],
                            );
                        return (
                            I(k.n.ESCAPE, () => A()),
                            o().createElement(
                                L,
                                {
                                    showMinimizeBtn: e,
                                    title: m,
                                    infoTooltipHeader: c,
                                    infoTooltipBody: E,
                                    onClose: A,
                                    onMinimize: _,
                                    onFocusChange: F,
                                },
                                o().createElement(
                                    'div',
                                    { className: d },
                                    o().createElement(
                                        'div',
                                        { className: 'MembersWindow_platoon_14' },
                                        o().createElement(yu, null),
                                        o().createElement(su, { position: ou.top }),
                                        o().createElement(Ut, null),
                                        o().createElement(
                                            'div',
                                            { className: 'MembersWindow_commanderControls_c0' },
                                            o().createElement(Xt, null),
                                        ),
                                        o().createElement(su, { position: ou.bottom }),
                                        o().createElement(du, null),
                                    ),
                                    o().createElement(su, { position: ou.left }),
                                    o().createElement(Lu, {
                                        id: R.views.lobby.platoon.subViews.Chat('resId'),
                                        mixClass: 'MembersWindow_chatContainer_2c',
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    (Su().render(o().createElement(Kt, null), document.getElementById('root')),
                        E(R.sounds.gui_platoon_2_created()));
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, a] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, a];
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
        (__webpack_require__.j = 838),
        (() => {
            var u = { 838: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1813));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
