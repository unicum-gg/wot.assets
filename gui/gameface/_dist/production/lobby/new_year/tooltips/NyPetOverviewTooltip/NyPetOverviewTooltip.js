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
                (t.r(e), t.d(e, { mouse: () => o, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    i = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
                        }
                        function r() {
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
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${e}`,
                                            o = i[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((u.enabled = !1), r());
                            },
                            enable() {
                                ((u.enabled = !0), r());
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
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    }));
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
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
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => _,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
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
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function _(u) {
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
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
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
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => a });
                const r = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = a),
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
                    a = {
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
                let r, n;
                (t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                t.d(e, { Z: () => a });
                var r = t(3138);
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
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
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
                t.d(e, { Sw: () => a.Z, B0: () => s, wU: () => w, ry: () => C, Eu: () => g, SW: () => v, P3: () => b });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    m = t(3138);
                const D = ['args'];
                function _(u, e, t, r, n, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            _(a, r, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(a, r, n, i, o, 'throw', u);
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
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, D);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    h = () => p(s.CLOSE),
                    v = () => p(s.POP_OVER, { on: !1 }),
                    b = (u, e, t, r, n = R.invalid('resId'), a) => {
                        const i = m.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            E = o.y,
                            c = o.width,
                            A = o.height,
                            d = {
                                x: m.O.view.pxToRem(l) + i.x,
                                y: m.O.view.pxToRem(E) + i.y,
                                width: m.O.view.pxToRem(c),
                                height: m.O.view.pxToRem(A),
                            };
                        p(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: e,
                            bbox: B(d),
                            on: !0,
                            args: a,
                        });
                    },
                    w = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    f = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var x = t(7572);
                const y = n.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: x.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: d,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => p(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (u) => {
                            const e = (e) => f(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            f(u, h);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: w,
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = S;
            },
            8813: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(493),
                    i = t.n(a),
                    o = t(6483),
                    s = t.n(o),
                    l = t(3138);
                const E = (u) => {
                        (0, r.useEffect)(u, []);
                    },
                    c = (u) => {
                        (0, r.useEffect)(() => u, []);
                    },
                    A = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    d = ['children', 'className', 'theme'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const m = n().forwardRef(function (u, e) {
                        let t = u.children,
                            a = u.className,
                            i = u.theme,
                            o = void 0 === i ? 'default' : i,
                            m = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, d);
                        const D = (function () {
                                const u = (0, r.useRef)(0);
                                return (
                                    c(() => {
                                        window.cancelAnimationFrame(u.current);
                                    }),
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
                            _ = n().useRef(null);
                        return (
                            E(() => {
                                D.run(() => {
                                    const u = _.current;
                                    if (!u) return;
                                    const e = u.scrollWidth,
                                        t = u.scrollHeight;
                                    l.O.view.resize(e, t);
                                    const r = window.getComputedStyle(u);
                                    l.O.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            n().createElement(
                                'div',
                                F({}, m, {
                                    className: s()(A.base, A[`base__theme-${o}`], a),
                                    ref: function (u) {
                                        ((_.current = u), 'function' == typeof e ? e(u) : e && (e.current = u));
                                    },
                                }),
                                n().createElement('div', { className: A.decorator }, t),
                            )
                        );
                    }),
                    D = (0, r.memo)(({ children: u }) =>
                        n().createElement(
                            'div',
                            {
                                className: 'TooltipAndPopoverStyleWrapper_base_f8',
                                onWheel: (u) => {
                                    u.preventDefault();
                                },
                            },
                            n().createElement(
                                'div',
                                { className: 'TooltipAndPopoverStyleWrapper_snowIconContainer_33' },
                                n().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_snowIcon_d7' }),
                            ),
                            n().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_pattern_f6' }),
                            n().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_content_8a' }, u),
                        ),
                    ),
                    _ = (0, r.memo)(({ children: u, tooltipDecoratorClassName: e }) =>
                        n().createElement(m, { theme: 'none', className: e }, n().createElement(D, null, u)),
                    );
                var B = t(9887),
                    C = t.n(B);
                const g = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    p = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var h;
                function v(u, e, t) {
                    const r = (function (u, e) {
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
                })(h || (h = {}));
                const b = l.O.client.getSize('rem'),
                    w = b.width,
                    f = b.height,
                    x = Object.assign({ width: w, height: f }, v(w, f, p)),
                    y = (0, r.createContext)(x),
                    S = ['children'],
                    O = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, S);
                        const n = (0, r.useContext)(y),
                            a = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            s = n.small,
                            l = n.extraSmall,
                            E = n.extraLargeWidth,
                            c = n.largeWidth,
                            A = n.mediumWidth,
                            d = n.smallWidth,
                            F = n.extraSmallWidth,
                            m = n.extraLargeHeight,
                            D = n.largeHeight,
                            _ = n.mediumHeight,
                            B = n.smallHeight,
                            C = n.extraSmallHeight,
                            p = { extraLarge: m, large: D, medium: _, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return e;
                            if (t.large && i) return e;
                            if (t.medium && o) return e;
                            if (t.small && s) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && E) return g(e, t, p);
                            if (t.largeWidth && c) return g(e, t, p);
                            if (t.mediumWidth && A) return g(e, t, p);
                            if (t.smallWidth && d) return g(e, t, p);
                            if (t.extraSmallWidth && F) return g(e, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && m) return e;
                                if (t.largeHeight && D) return e;
                                if (t.mediumHeight && _) return e;
                                if (t.smallHeight && B) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                ((O.defaultProps = {
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
                    (0, r.memo)(O));
                let M, T, L;
                ((0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(y),
                        t = (0, r.useState)(e),
                        a = t[0],
                        i = t[1],
                        o = (0, r.useCallback)((u, e) => {
                            const t = l.O.view.pxToRem(u),
                                r = l.O.view.pxToRem(e);
                            i(Object.assign({ width: t, height: r }, v(t, r, p)));
                        }, []);
                    (((u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const s = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return n().createElement(y.Provider, { value: s }, u);
                }),
                    (function (u) {
                        ((u[(u.ExtraSmall = p.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = p.small.width)] = 'Small'),
                            (u[(u.Medium = p.medium.width)] = 'Medium'),
                            (u[(u.Large = p.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = p.extraLarge.width)] = 'ExtraLarge'));
                    })(M || (M = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = p.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = p.small.width)] = 'Small'),
                            (u[(u.Medium = p.medium.width)] = 'Medium'),
                            (u[(u.Large = p.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = p.extraLarge.width)] = 'ExtraLarge'));
                    })(T || (T = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = p.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = p.small.height)] = 'Small'),
                            (u[(u.Medium = p.medium.height)] = 'Medium'),
                            (u[(u.Large = p.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = p.extraLarge.height)] = 'ExtraLarge'));
                    })(L || (L = {})));
                const P = ['xl', 'lg', 'md', 'sm', 'xs'],
                    I = (u) => u.includes('_') && ((u) => P.includes(u))(u.split('_').at(-1)),
                    N = [M.ExtraLarge, M.Large, M.Medium, M.Small, M.ExtraSmall],
                    k = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (I(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = N.indexOf(e),
                                    i = (-1 !== a ? P.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    o = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : u[n]), t);
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => P.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    H = (u, e = k) => {
                        const t = (
                            (u, e = k) =>
                            (t) => {
                                const a = (() => {
                                        const u = (0, r.useContext)(y),
                                            e = u.width,
                                            t = u.height,
                                            n = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return M.ExtraLarge;
                                                    case u.large:
                                                        return M.Large;
                                                    case u.medium:
                                                        return M.Medium;
                                                    case u.small:
                                                        return M.Small;
                                                    case u.extraSmall:
                                                        return M.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            M.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            a = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return T.ExtraLarge;
                                                    case u.largeWidth:
                                                        return T.Large;
                                                    case u.mediumWidth:
                                                        return T.Medium;
                                                    case u.smallWidth:
                                                        return T.Small;
                                                    case u.extraSmallWidth:
                                                        return T.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            T.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            i = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return L.ExtraLarge;
                                                    case u.largeHeight:
                                                        return L.Large;
                                                    case u.mediumHeight:
                                                        return L.Medium;
                                                    case u.smallHeight:
                                                        return L.Small;
                                                    case u.extraSmallHeight:
                                                        return L.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            L.ExtraSmall
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
                                    i = (0, r.useMemo)(() => e(t, a), [t, a]);
                                return n().createElement(u, i);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => I(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    W = {
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
                    j = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        U.apply(this, arguments)
                    );
                }
                Object.keys(C());
                const V = {
                        XL: { mt: W.mt__XL, mr: W.mr__XL, mb: W.mb__XL, ml: W.ml__XL },
                        LG: { mt: W.mt__LG, mr: W.mr__LG, mb: W.mb__LG, ml: W.ml__LG },
                        MDp: { mt: W.mt__MDp, mr: W.mr__MDp, mb: W.mb__MDp, ml: W.ml__MDp },
                        MD: { mt: W.mt__MD, mr: W.mr__MD, mb: W.mb__MD, ml: W.ml__MD },
                        SMp: { mt: W.mt__SMp, mr: W.mr__SMp, mb: W.mb__SMp, ml: W.ml__SMp },
                        SM: { mt: W.mt__SM, mr: W.mr__SM, mb: W.mb__SM, ml: W.ml__SM },
                        XS: { mt: W.mt__XS, mr: W.mr__XS, mb: W.mb__XS, ml: W.ml__XS },
                    },
                    G = (Object.keys(V), ['mt', 'mr', 'mb', 'ml']),
                    $ = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    X = H((u) => {
                        let e = u.className,
                            t = u.width,
                            a = u.height,
                            i = u.m,
                            o = u.mt,
                            l = void 0 === o ? i : o,
                            E = u.mr,
                            c = void 0 === E ? i : E,
                            A = u.mb,
                            d = void 0 === A ? i : A,
                            F = u.ml,
                            m = void 0 === F ? i : F,
                            D = u.column,
                            _ = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (D ? 'column' : _ && 'row') || void 0 : B,
                            g = u.flexStart,
                            p = u.center,
                            h = u.flexEnd,
                            v = u.spaceBetween,
                            b = u.spaceAround,
                            w = u.justifyContent,
                            f =
                                void 0 === w
                                    ? (g ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : w,
                            x = u.alignItems,
                            y = void 0 === x ? (g ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : x,
                            S = u.alignSelf,
                            O = u.wrap,
                            M = u.flexWrap,
                            T = void 0 === M ? (O ? 'wrap' : void 0) : M,
                            L = u.grow,
                            P = u.shrink,
                            I = u.flex,
                            N = void 0 === I ? (L || P ? `${L ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : I,
                            R = u.style,
                            k = u.children,
                            H = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, j);
                        const X = (0, r.useMemo)(() => {
                                const u = { mt: l, mr: c, mb: d, ml: m },
                                    e = ((u) =>
                                        G.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(V[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        G.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[$[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, R, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: N,
                                        alignSelf: S,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: T,
                                        justifyContent: f,
                                        alignItems: y,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, a, l, c, d, m, R, N, S, C, T, f, y]),
                            z = X.computedStyle,
                            K = X.computedClassNames;
                        return n().createElement('div', U({ className: s()(W.base, ...K, e), style: z }, H), k);
                    });
                let z;
                function K(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(z || (z = {}));
                const Y = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    q = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Z = (u, e, t = z.left) => u.split(e).reduce(t === z.left ? Y : q, []),
                    Q = (() => {
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
                    J = ['zh_cn', 'zh_sg', 'zh_tw'],
                    uu = ({ binding: u, text: e = '', classMix: t, alignment: a = z.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      n().createElement(
                                          'div',
                                          { className: s()('FormatText_base_d0', t), key: `${e}-${i}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = z.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return J.includes(t)
                                                                ? Q(u)
                                                                : ((u, e = z.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Z(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Z(u, r, z.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, a, u).map((u, e) =>
                                              n().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var eu = t(3532),
                    tu = t.n(eu);
                const ru = {
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
                    nu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        au.apply(this, arguments)
                    );
                }
                Object.keys(C());
                const iu = Object.keys(tu()),
                    ou = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    su = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    lu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Eu =
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
                            'heading-H56': ou,
                            'heading-H36': ou,
                            'heading-H28': su,
                            'heading-H24': su,
                            'heading-H24R': su,
                            'heading-H22': su,
                            'heading-H20R': su,
                            'heading-H18': su,
                            'heading-H15': lu,
                            'heading-H14': lu,
                            'paragraph-P24': su,
                            'paragraph-P18': su,
                            'paragraph-P16': su,
                            'paragraph-P14': lu,
                            'paragraph-P12': lu,
                            'paragraph-P10': lu,
                        }),
                    cu =
                        (Object.keys(Eu),
                        (u) =>
                            u
                                ? ((u) => iu.includes(u))(u)
                                    ? { colorClassName: ru[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Au = H((u) => {
                        let e = u.text,
                            t = u.variant,
                            a = u.className,
                            i = u.color,
                            o = u.m,
                            l = u.mt,
                            E = void 0 === l ? o : l,
                            c = u.mr,
                            A = void 0 === c ? o : c,
                            d = u.mb,
                            F = void 0 === d ? o : d,
                            m = u.ml,
                            D = void 0 === m ? o : m,
                            _ = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, nu);
                        const g = (0, r.useMemo)(() => {
                                const u = cu(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, _, r), colorClassName: e };
                            }, [_, i]),
                            p = g.computedStyle,
                            h = g.colorClassName;
                        return n().createElement(
                            X,
                            au(
                                {
                                    className: s()(ru.base, t && ru[t], h, a),
                                    style: p,
                                    mt: !0 === E ? Eu[t || 'paragraph-P16'].mt : E,
                                    mr: !0 === A ? Eu[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === F ? Eu[t || 'paragraph-P16'].mb : F,
                                    ml: !0 === D ? Eu[t || 'paragraph-P16'].ml : D,
                                },
                                C,
                            ),
                            void 0 !== B ? n().createElement(uu, au({}, B, { text: e })) : e,
                        );
                    });
                var du = t(3282),
                    Fu = t(4179);
                const mu = [
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
                function Du(u) {
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
                const _u = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Fu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Bu = (u) => {
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
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            m = u.isEnabled,
                            D = void 0 === m || m,
                            _ = u.targetId,
                            B = void 0 === _ ? 0 : _,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, mu);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: r }
                                        );
                                    })().resId,
                                [B],
                            ),
                            b = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (_u(t, F, { isMouseEvent: !0, on: !0, arguments: Du(n) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, v, C]),
                            w = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        _u(t, F, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, F, v, g]),
                            f = (0, r.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ),
                            D
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                          a && a(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (w(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === A && w(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === A && w(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : e
                        );
                        var x;
                    },
                    Cu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const pu = R.views.common.tooltip_window.simple_tooltip_content,
                    hu = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Cu);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: a, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, a, i, s]);
                        return n().createElement(
                            Bu,
                            gu(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? pu.SimpleTooltipHtmlContent('resId') : pu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function vu(u) {
                    engine.call('PlaySound', u);
                }
                const bu = {
                        playHighlight() {
                            vu('highlight');
                        },
                        playClick() {
                            vu('play');
                        },
                        playYes() {
                            vu('yes1');
                        },
                    },
                    wu = {
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
                var fu;
                !(function (u) {
                    ((u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom'));
                })(fu || (fu = {}));
                const xu = ['__left', '__right', '__top', '__bottom'],
                    yu =
                        ((0, r.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: a = {} }, i) => {
                                const o = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    A = (0, r.useRef)(null),
                                    d = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    F = d[0],
                                    m = d[1],
                                    D = (0, r.useCallback)(() => {
                                        (bu.playClick(), l.O.view.sendEvent.close());
                                    }, []),
                                    _ = (0, r.useCallback)(() => {
                                        bu.playHighlight();
                                    }, []),
                                    B = s()(wu.arrow, wu[`arrow${xu[F]}`]);
                                E(
                                    () => (
                                        l.O.client.events.mouse.enableOutside(),
                                        l.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : l.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const C = (0, r.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === o.current || e === A.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = l.O.client.getMouseGlobalPosition(),
                                                    e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < r.boundX ||
                                                        u.x > r.boundX + r.boundWidth ||
                                                        u.y > r.boundY + r.boundHeight ||
                                                        u.y < r.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : l.O.view.sendEvent.close('popover');
                                        },
                                        [o, A, t],
                                    ),
                                    g = (0, r.useCallback)(
                                        () => (
                                            l.O.view.freezeTextureBeforeResize(),
                                            ((u) => {
                                                let e,
                                                    t = null;
                                                return (
                                                    (t = requestAnimationFrame(() => {
                                                        t = requestAnimationFrame(() => {
                                                            ((t = null),
                                                                (e = (() => {
                                                                    if (c.current) {
                                                                        const u = c.current.scrollWidth,
                                                                            e = c.current.scrollHeight;
                                                                        (l.O.view.resize(u, e),
                                                                            m(window.decorator.directionType));
                                                                    }
                                                                })()));
                                                        });
                                                    })),
                                                    () => {
                                                        ('function' == typeof e && e(),
                                                            null !== t && cancelAnimationFrame(t));
                                                    }
                                                );
                                            })()
                                        ),
                                        [],
                                    );
                                return (
                                    (0, r.useImperativeHandle)(i, () => ({ updateSize: g })),
                                    E(() => {
                                        l.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', C, { capture: !0 });
                                        const u = ((u) => {
                                            let e = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    u.then((u) => !e && t(u)).catch((u) => !e && r(u));
                                                }),
                                                cancel() {
                                                    e = !0;
                                                },
                                            };
                                        })((0, Fu.Eu)());
                                        return (
                                            !e && u.promise.then(() => g()),
                                            () => {
                                                (u.cancel(), document.removeEventListener('mousedown', C));
                                            }
                                        );
                                    }, [g, C, e]),
                                    n().createElement(
                                        'div',
                                        { className: wu.base, ref: c },
                                        n().createElement(
                                            'div',
                                            { className: wu.decorator },
                                            n().createElement(
                                                'div',
                                                { className: wu.content, ref: o },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        hu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: wu.closeBtn,
                                                            onClick: D,
                                                            onMouseEnter: _,
                                                            ref: A,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: B, style: a.arrow }),
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
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Ou = (u) => {
                    let e = u.contentId,
                        t = u.decoratorId,
                        a = u.direction,
                        i = void 0 === a ? fu.Top : a,
                        o = u.targetId,
                        s = u.args,
                        l = u.onClick,
                        E = u.children,
                        c = u.isEnabled,
                        A = void 0 === c || c,
                        d = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, yu);
                    const F = (0, r.useRef)(null),
                        m = (0, r.useCallback)(() => {
                            if ((0, Fu.wU)()) return (0, Fu.SW)();
                            F.current && (0, Fu.P3)(e, i, F.current, t, o, s);
                        }, [e, i, s, t, o]);
                    return n().createElement(
                        'div',
                        Su(
                            {
                                ref: F,
                                onClick:
                                    ((D = E.props.onClick),
                                    (u) => {
                                        A && (m(), l && l(u), D && D(u));
                                    }),
                            },
                            d,
                        ),
                        E,
                    );
                    var D;
                };
                function Mu() {
                    const u = (0, r.useRef)(!0);
                    return (
                        E(() => {
                            u.current = !1;
                        }),
                        u.current
                    );
                }
                let Tu, Lu, Pu, Iu, Nu, Ru, ku;
                (!(function (u) {
                    ((u.Unknown = ''), (u.Sad = 'sad'), (u.Normal = 'normal'), (u.Fun = 'fun'));
                })(Tu || (Tu = {})),
                    (function (u) {
                        ((u.Food = 'food'), (u.Fun = 'fun'), (u.Activity = 'activity'));
                    })(Lu || (Lu = {})),
                    (function (u) {
                        ((u[(u.Empty = -1)] = 'Empty'),
                            (u[(u.NewStory = 1)] = 'NewStory'),
                            (u[(u.FunOpened = 2)] = 'FunOpened'),
                            (u[(u.ActivityOpened = 3)] = 'ActivityOpened'),
                            (u[(u.Leaderboard = 4)] = 'Leaderboard'));
                    })(Pu || (Pu = {})),
                    (function (u) {
                        ((u[(u.Null = 0)] = 'Null'),
                            (u[(u.Video = -10)] = 'Video'),
                            (u[(u.First = 1)] = 'First'),
                            (u[(u.Second = 2)] = 'Second'),
                            (u[(u.Third = 3)] = 'Third'),
                            (u[(u.Fourth = 4)] = 'Fourth'),
                            (u[(u.Fifth = 5)] = 'Fifth'),
                            (u[(u.Six = 6)] = 'Six'),
                            (u[(u.Seventh = 7)] = 'Seventh'),
                            (u[(u.End = 8)] = 'End'));
                    })(Iu || (Iu = {})),
                    (function (u) {
                        ((u[(u.Fun = 0)] = 'Fun'),
                            (u[(u.Activity = 1)] = 'Activity'),
                            (u[(u.Leaderboard = 2)] = 'Leaderboard'));
                    })(Nu || (Nu = {})),
                    (function (u) {
                        ((u[(u.First = 1)] = 'First'), (u[(u.Second = 2)] = 'Second'), (u[(u.Third = 3)] = 'Third'));
                    })(Ru || (Ru = {})),
                    (function (u) {
                        ((u[(u.Header = 0)] = 'Header'),
                            (u[(u.MailBlock = 1)] = 'MailBlock'),
                            (u[(u.Needs = 2)] = 'Needs'),
                            (u[(u.Indicators = 3)] = 'Indicators'),
                            (u[(u.HeaderOpacity = 4)] = 'HeaderOpacity'),
                            (u[(u.ShopOpacity = 5)] = 'ShopOpacity'),
                            (u[(u.Shop = 6)] = 'Shop'),
                            (u[(u.Story = 7)] = 'Story'),
                            (u[(u.AnimationCheckbox = 8)] = 'AnimationCheckbox'));
                    })(ku || (ku = {})));
                const Hu = R.strings.ny.pet.onboarding,
                    Wu =
                        (Pu.NewStory,
                        Pu.Empty,
                        Pu.Leaderboard,
                        Hu.leaderboard.title(),
                        Hu.leaderboard.description(),
                        Hu.leaderboard.button(),
                        Ru.Third,
                        Pu.FunOpened,
                        Hu.funOpened.title(),
                        Hu.funOpened.description(),
                        Hu.funOpened.button(),
                        Ru.First,
                        Pu.ActivityOpened,
                        Hu.activityOpened.title(),
                        Hu.activityOpened.description(),
                        Hu.activityOpened.button(),
                        Ru.First,
                        Iu.Null,
                        ku.HeaderOpacity,
                        ku.Indicators,
                        ku.ShopOpacity,
                        Iu.Video,
                        ku.HeaderOpacity,
                        ku.Indicators,
                        ku.ShopOpacity,
                        Iu.First,
                        ku.HeaderOpacity,
                        ku.Indicators,
                        ku.ShopOpacity,
                        Hu.title.c_1(),
                        Hu.description.c_1(),
                        Hu.button.c_1(),
                        Ru.First,
                        Iu.Second,
                        ku.Header,
                        ku.Indicators,
                        ku.ShopOpacity,
                        Hu.title.c_2(),
                        Hu.description.c_2(),
                        Hu.button.c_2(),
                        Ru.First,
                        Iu.Third,
                        ku.Header,
                        ku.Indicators,
                        ku.ShopOpacity,
                        ku.MailBlock,
                        Hu.title.c_3(),
                        Hu.description.c_3(),
                        Hu.button.c_3(),
                        Ru.Second,
                        Iu.Fourth,
                        ku.Header,
                        ku.Indicators,
                        ku.Shop,
                        ku.MailBlock,
                        Hu.title.c_4(),
                        Hu.description.c_4(),
                        Hu.button.c_4(),
                        Ru.Second,
                        Iu.Fifth,
                        ku.Header,
                        ku.Indicators,
                        ku.Shop,
                        ku.MailBlock,
                        ku.Needs,
                        Hu.title.c_5(),
                        Hu.description.c_5(),
                        Hu.button.c_5(),
                        Ru.Third,
                        Iu.Six,
                        ku.Header,
                        ku.Indicators,
                        ku.Shop,
                        ku.MailBlock,
                        ku.Needs,
                        Ru.Third,
                        Iu.Seventh,
                        ku.Header,
                        ku.Indicators,
                        ku.Shop,
                        ku.MailBlock,
                        ku.Needs,
                        ku.Story,
                        ku.AnimationCheckbox,
                        Hu.title.c_6(),
                        Hu.description.c_6(),
                        Hu.button.c_6(),
                        Ru.Third,
                        Iu.End,
                        ku.Header,
                        ku.Indicators,
                        ku.Shop,
                        ku.MailBlock,
                        ku.Needs,
                        ku.Story,
                        ku.AnimationCheckbox,
                        (u, e, t, r, n) =>
                            t.map((a, i) => {
                                const o = i === t.length - 1,
                                    s = (o ? r - a : t[i + 1] - a) + (0 === i ? 1 : 0);
                                return {
                                    type: n,
                                    scaleLevel: a,
                                    state: u >= t[i + 1] ? re.COMPLETED : re.NOT_COMPLETED,
                                    pointsInProgress: Math.min(Math.max(u - a + (0 === i ? 1 : 0), 0), s),
                                    potentialPointsInProgress: Math.min(Math.max(e - a + (0 === i ? 1 : 0), 0), s),
                                    range: s,
                                    isActive: (u >= a && (u < t[i + 1] || o)) || (0 === i && u < t[i + 1]),
                                };
                            }));
                let ju, Uu, Vu;
                var Gu;
                (!(function (u) {
                    ((u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none'));
                })(ju || (ju = {})),
                    (function (u) {
                        ((u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended'));
                    })(Uu || (Uu = {})),
                    ((Gu = Vu || (Vu = {})).SHORT_DATE = 'short-date'),
                    (Gu.SHORT_TIME = 'short-time'),
                    (Gu.SHORT_DATE_TIME = 'short-date-time'),
                    (Gu.FULL_DATE = 'full-date'),
                    (Gu.FULL_DATE_TIME = 'full-date-time'),
                    (Gu.MONTH = 'month'),
                    (Gu.MONTH_DATE = 'month-date'),
                    (Gu.DATE_MONTH = 'date-month'),
                    (Gu.MONTH_YEAR = 'month-year'),
                    (Gu.WEEK_DAY = 'week-day'),
                    (Gu.WEEK_DAY_TIME = 'week-day-time'),
                    (Gu.YEAR = 'year'),
                    (Gu.DATE_YEAR = 'date-year'));
                Date.now();
                const $u = () => {};
                let Xu;
                (Fu.Sw.instance,
                    (function (u) {
                        ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                    })(Xu || (Xu = {})),
                    Fu.Sw.instance);
                const zu = (u = 0, e, t = 0, n = $u) => {
                        const a = (0, r.useState)(u),
                            i = a[0],
                            o = a[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (u > 0) {
                                    o(u);
                                    const r = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && e <= t ? (o(t), n && n(), clearInterval(a)) : o(e);
                                            },
                                            1e3 * (e || (u > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                                o(0);
                            }, [u, e, t, n]),
                            i
                        );
                    },
                    Ku = 'Countdown_description_32',
                    Yu = (u) => u.toString().padStart(2, '0'),
                    qu = R.images.gui.maps.icons.components.countdown,
                    Zu = (u, e) => {
                        const t = 2 === e ? qu.big : qu;
                        switch (u) {
                            case ju.Timer:
                                return t.clock();
                            case ju.Countdown:
                                return t.hourglass();
                            case ju.Cooldown:
                                return t.lock();
                        }
                    },
                    Qu = (0, r.memo)(
                        ({
                            duration: u,
                            withShortMinutes: e = !1,
                            icon: t = ju.Timer,
                            style: a = Uu.Description,
                            onTimeReached: i,
                            className: o = '',
                            classNames: E = {},
                            labelFormat: c = '',
                        }) => {
                            const A = a !== Uu.Description ? 1 : void 0,
                                d = zu(u, A),
                                F = (() => {
                                    const u = (0, r.useState)(l.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, r.useEffect)(() => {
                                            const u = () => {
                                                t(l.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            i && i[d] && i[d]();
                            const m = ((u, e, t = !1) => {
                                switch (e) {
                                    case Uu.Description:
                                        return ((u, e = !0, t = !1) =>
                                            u.days > 7 && e
                                                ? K(R.strings.common.duration.days(), { days: u.days })
                                                : u.days >= 1
                                                  ? 0 === u.hours
                                                      ? K(R.strings.common.duration.days(), { days: u.days })
                                                      : `${K(R.strings.common.duration.days(), { days: u.days })} ${K(R.strings.common.duration.hours(), { hours: u.hours })}`
                                                  : u.hours >= 1
                                                    ? 0 === u.minutes
                                                        ? K(R.strings.common.duration.hours(), { hours: u.hours })
                                                        : `${K(R.strings.common.duration.hours(), { hours: u.hours })} ${K(t ? R.strings.common.duration.shortMinutes() : R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                    : K(R.strings.common.duration.minutes(), {
                                                          minutes: u.minutes || 1,
                                                      }))(u, !0, t);
                                    case Uu.Short:
                                        return `${Yu(u.minutes)}:${Yu(u.seconds)}`;
                                    case Uu.Long:
                                        return `${Yu(u.hours)}:${Yu(u.minutes)}:${Yu(u.seconds)}`;
                                    case Uu.Extended:
                                        return `${K(R.strings.common.duration.days(), { days: u.days })} | ${Yu(u.hours)}:${Yu(u.minutes)}:${Yu(u.seconds)}`;
                                }
                            })(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / 86400);
                                    e -= 86400 * t;
                                    const r = Math.trunc(e / 3600);
                                    e -= 3600 * r;
                                    const n = Math.trunc(e / 60);
                                    return ((e -= 60 * n), { days: t, hours: r, minutes: n, seconds: e });
                                })(d),
                                a,
                                e,
                            );
                            return n().createElement(
                                'div',
                                { className: s()('Countdown_base_2a', o) },
                                t !== ju.None &&
                                    n().createElement('div', {
                                        className: s()('Countdown_icon_ff', E.icon),
                                        style: { backgroundImage: `url('${Zu(t, F)}')` },
                                    }),
                                c
                                    ? n().createElement(
                                          'div',
                                          { className: s()(Ku, E.text) },
                                          n().createElement(uu, { text: c, binding: { timerText: m } }),
                                      )
                                    : n().createElement('div', { className: s()(Ku, E.text) }, m),
                            );
                        },
                    ),
                    Ju = 100,
                    ue = (u, e) => (u / e) * 1.1,
                    ee = (0, r.memo)(
                        ({
                            type: u,
                            range: e,
                            scaleDowngradeTime: t,
                            pointsInProgress: a,
                            potentialPointsInProgress: i,
                            index: o,
                            isActive: l,
                            onComplete: E,
                            wasOverflowed: A,
                            onResetWasOverflowed: d,
                            onProgressFillSound: F,
                        }) => {
                            const m = (0, r.useState)(!1),
                                D = m[0],
                                _ = m[1],
                                B = (0, r.useState)(!1),
                                C = B[0],
                                g = B[1],
                                p = Mu(),
                                h = (0, r.useState)(a),
                                v = h[0],
                                b = h[1],
                                w = (0, r.useState)(1),
                                f = w[0],
                                x = w[1],
                                y = (0, r.useState)(!0),
                                S = y[0],
                                O = y[1],
                                M = (function () {
                                    const u = (0, r.useRef)(0);
                                    return (
                                        c(() => {
                                            window.clearTimeout(u.current);
                                        }),
                                        (0, r.useMemo)(
                                            () => ({
                                                run: (e, t) => {
                                                    (window.clearTimeout(u.current),
                                                        (u.current = window.setTimeout(() => {
                                                            (e(), (u.current = 0));
                                                        }, t)));
                                                },
                                                clear: () => {
                                                    (window.clearTimeout(u.current), (u.current = 0));
                                                },
                                                get isRunning() {
                                                    return 0 !== u.current;
                                                },
                                            }),
                                            [],
                                        )
                                    );
                                })();
                            (0, r.useEffect)(() => {
                                p ||
                                    (l && a !== v
                                        ? (a < v
                                              ? (x(ue(v - a, e)), g(!0))
                                              : (A && 2 === o && (_(!0), d({ type: u })),
                                                x(ue(a - v, e)),
                                                g(!1),
                                                F({ type: u, started: !0 })),
                                          b(a),
                                          O(!1))
                                        : l && A && 2 === o && (_(!0), d({ type: u })));
                            }, [l, a, A]);
                            const T = {
                                    backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.petView.categories.progress.background.$dyn(u)})`,
                                },
                                L = {
                                    backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.petView.categories.progress.dynamicBackground.$dyn(u)})`,
                                },
                                P = (v / e) * Ju,
                                I = (i / e) * Ju,
                                N = (l && (0 !== P || !S) && (P !== Ju || !S || (P === Ju && 2 === o))) || D,
                                k = (0, r.useMemo)(() => ({ text: 'Progress_downgradeTime_f1' }), []);
                            return n().createElement(
                                'div',
                                { className: 'Progress_base_3a' },
                                S &&
                                    n().createElement('div', {
                                        className: 'Progress_potentialProgress_57',
                                        style: Object.assign({}, T, { width: `${I}%` }),
                                    }),
                                n().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'Progress_progress_de',
                                            D && S && 'Progress_progress__multyBounce_d5',
                                        ),
                                        style: Object.assign({}, T, { width: `${P}%`, transitionDuration: `${f}s` }),
                                        onTransitionEnd: () => {
                                            (C || F({ type: u, started: !1 }),
                                                O(!0),
                                                (v !== e && 0 !== v) ||
                                                    M.run(() => {
                                                        E(o, C);
                                                    }, 100));
                                        },
                                        onAnimationStart: () => {
                                            p || vu(R.sounds.hangar_newyear_raccoon_max_resources());
                                        },
                                        onAnimationEndCapture: () => {
                                            _(!1);
                                        },
                                    },
                                    0 !== P &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: 'Progress_dynamicMask_76' }),
                                            n().createElement('div', {
                                                className: 'Progress_dynamicBackground_52',
                                                style: L,
                                            }),
                                        ),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'Progress_cursor_1f',
                                            D && S && 'Progress_cursor__multyBounce_06',
                                        ),
                                        style: { width: `${P}%`, transitionDuration: `${f}s` },
                                    },
                                    n().createElement(
                                        'div',
                                        { className: 'Progress_cursorContainer_d6' },
                                        n().createElement('div', {
                                            className: s()(
                                                'Progress_cursorPointer_e4',
                                                N && 'Progress_cursorPointer__visible_f9',
                                            ),
                                        }),
                                    ),
                                ),
                                n().createElement('div', { className: 'Progress_mask_c4' }),
                                l &&
                                    Boolean(a) &&
                                    (S || C) &&
                                    n().createElement(
                                        'div',
                                        { className: 'Progress_timer_af' },
                                        n().createElement('div', { className: 'Progress_timerIcon_14' }),
                                        n().createElement(Qu, {
                                            classNames: k,
                                            style: Uu.Description,
                                            icon: ju.None,
                                            duration: t,
                                            withShortMinutes: !0,
                                        }),
                                    ),
                            );
                        },
                    );
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        te.apply(this, arguments)
                    );
                }
                let re;
                !(function (u) {
                    ((u.COMPLETED = 'completed'), (u.NOT_COMPLETED = 'not-completed'));
                })(re || (re = {}));
                const ne = R.strings.ny.pet.category,
                    ae = R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons,
                    ie = R.images.new_year.gui.maps.icons.newYear.mainView.petView,
                    oe = { description: R.strings.ny.petWidgetTooltips.petIndicator.itemsAmount.description() },
                    se = (u, e, t) => (0 === u ? e > 0 : t[u - 1].state === re.COMPLETED),
                    le =
                        ((0, r.memo)(
                            ({
                                activeBlink: u,
                                onboardingStep: e,
                                isPopoverOpened: t,
                                isOnboarding: a,
                                indicator: i,
                                isSelected: o,
                                setSelected: l,
                                progressState: E,
                                setProgressState: c,
                                setActiveBlink: A,
                                onResetWasOverflowed: d,
                                onProgressFillSound: F,
                                handleNextOnboardingStep: m,
                            }) => {
                                const D = i.type,
                                    _ = i.maxPoint,
                                    B = i.curPoint,
                                    C = i.scaleLevels,
                                    g = i.itemCount,
                                    p = i.wasOverflowed,
                                    h = i.scaleDowngradeTime,
                                    v = i.potentialCurPoint,
                                    b = i.isLocked,
                                    w = i.isLoading,
                                    f = i.lettersToUnlock,
                                    x = Mu(),
                                    y = (0, r.useState)(!1),
                                    S = y[0],
                                    O = y[1];
                                ((0, r.useEffect)(() => {
                                    c(Wu(B, v, C, _, D));
                                }, []),
                                    (0, r.useEffect)(() => {
                                        x ||
                                            c((u) =>
                                                u.map((u, e) =>
                                                    Object.assign({}, u, {
                                                        potentialPointsInProgress: Math.min(
                                                            Math.max(v - u.scaleLevel + (0 === e ? 1 : 0), 0),
                                                            u.range,
                                                        ),
                                                    }),
                                                ),
                                            );
                                    }, [v]),
                                    (0, r.useEffect)(() => {
                                        (a && B > 0 && m(),
                                            x ||
                                                c((u) => {
                                                    const e = u.find((u) => 0 === u.pointsInProgress && u.isActive),
                                                        t = u.findIndex((u) => 0 === u.pointsInProgress && u.isActive);
                                                    if (e) {
                                                        const r = e.scaleLevel > B;
                                                        return u.map(
                                                            (u, e) => (
                                                                0 === u.pointsInProgress &&
                                                                    0 === e &&
                                                                    B > 0 &&
                                                                    A({ index: e, type: D }),
                                                                u.isActive && r && e === t
                                                                    ? Object.assign({}, u, { isActive: !1 })
                                                                    : r && e === t - 1
                                                                      ? Object.assign({}, u, {
                                                                            isActive: !0,
                                                                            state: re.NOT_COMPLETED,
                                                                            pointsInProgress: Math.min(
                                                                                Math.max(
                                                                                    B -
                                                                                        u.scaleLevel +
                                                                                        (0 === e ? 1 : 0),
                                                                                    0,
                                                                                ),
                                                                                u.range,
                                                                            ),
                                                                        })
                                                                      : Object.assign({}, u, {
                                                                            pointsInProgress: u.isActive
                                                                                ? Math.min(
                                                                                      Math.max(
                                                                                          B -
                                                                                              u.scaleLevel +
                                                                                              (0 === e ? 1 : 0),
                                                                                          0,
                                                                                      ),
                                                                                      u.range,
                                                                                  )
                                                                                : u.pointsInProgress,
                                                                        })
                                                            ),
                                                        );
                                                    }
                                                    return u.map(
                                                        (u, e) => (
                                                            0 === u.pointsInProgress &&
                                                                0 === e &&
                                                                B > 0 &&
                                                                A({ index: e, type: D }),
                                                            Object.assign({}, u, {
                                                                pointsInProgress: u.isActive
                                                                    ? Math.min(
                                                                          Math.max(
                                                                              B - u.scaleLevel + (0 === e ? 1 : 0),
                                                                              0,
                                                                          ),
                                                                          u.range,
                                                                      )
                                                                    : u.pointsInProgress,
                                                            })
                                                        ),
                                                    );
                                                }));
                                    }, [B, c]));
                                const M = { backgroundImage: `url(${ae.c_24x24.$dyn(D)})` },
                                    T = { backgroundImage: `url(${ie.categories.mainIcon.$dyn(D)})` },
                                    L = { backgroundImage: `url(${ae.c_34x34.$dyn(D)})` },
                                    P = { backgroundImage: `url(${ie.categories.mainIcon.$dyn(D)})` },
                                    I = { backgroundImage: `url(${ie.categories.mainIcon.$dyn(`${D}_select`)})` },
                                    N = { backgroundImage: `url(${ie.categories.mainIcon.$dyn(`${D}_select_mask`)})` },
                                    k = { backgroundImage: `url(${ie.categories.background.$dyn(`${D}_select`)})` },
                                    H = { backgroundImage: `url(${ie.categories.progress.pointLight.$dyn(D)})` },
                                    W = { backgroundImage: `url(${ie.common.blinks.$dyn(D)})` },
                                    j = (0, r.useCallback)(
                                        (u) => {
                                            b ||
                                                w ||
                                                (u.stopPropagation(),
                                                (e !== Iu.Fifth && e !== Iu.Seventh) || m(!0),
                                                e === Iu.Fifth && vu(R.sounds.ny_vo_terentiy_help_stop()),
                                                bu.playClick(),
                                                l(D));
                                        },
                                        [m, w, b, e, l, D],
                                    ),
                                    U = (u, e) => {
                                        c((t) =>
                                            t.map((r, n) => {
                                                if (n === u)
                                                    return e
                                                        ? Object.assign({}, r, {
                                                              state: re.NOT_COMPLETED,
                                                              isActive: 0 === u || B === r.scaleLevel,
                                                          })
                                                        : (A(u + 1 > 2 ? null : { index: u + 1, type: r.type }),
                                                          Object.assign({}, r, {
                                                              state: re.COMPLETED,
                                                              isActive:
                                                                  B === r.scaleLevel || (B > r.scaleLevel && 2 === n),
                                                          }));
                                                if (e && n === u - 1) {
                                                    const u = Math.min(
                                                            Math.max(B - r.scaleLevel + (0 === n ? 1 : 0), 0),
                                                            r.range,
                                                        ),
                                                        e = u === r.range;
                                                    return Object.assign({}, r, {
                                                        state: e ? re.COMPLETED : re.NOT_COMPLETED,
                                                        pointsInProgress: u,
                                                        isActive: !e,
                                                    });
                                                }
                                                if (!e && n === u + 1) {
                                                    const e = Math.min(
                                                        Math.max(B - r.scaleLevel + (0 === n ? 1 : 0), 0),
                                                        r.range,
                                                    );
                                                    return Object.assign({}, r, {
                                                        pointsInProgress: e,
                                                        isActive: t[u].pointsInProgress === t[u].range || 0 !== e,
                                                    });
                                                }
                                                return r;
                                            }),
                                        );
                                    };
                                return n().createElement(
                                    Bu,
                                    {
                                        contentId:
                                            R.views.new_year.lobby.new_year.tooltips.NyPetIndicatorTooltip('resId'),
                                        args: { type: D },
                                        isEnabled: !w && !b && !a,
                                    },
                                    n().createElement(
                                        Ou,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.popovers.NyPetItemActivatePopover(
                                                    'resId',
                                                ),
                                            direction: fu.Right,
                                            onClick: j,
                                            args: { type: D },
                                            isEnabled: !b && !w,
                                        },
                                        n().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    'Indicator_base_05',
                                                    b && 'Indicator_base__locked_82',
                                                    w && 'Indicator_base__loading_8f',
                                                ),
                                                onMouseEnter: () => {
                                                    b || w || (bu.playHighlight(), O(!0));
                                                },
                                                onMouseLeave: () => {
                                                    b || w || O(!1);
                                                },
                                                id: D,
                                            },
                                            (e === Iu.Six || e === Iu.Fifth) &&
                                                !b &&
                                                !t &&
                                                n().createElement('div', {
                                                    className: 'Indicator_onboardingBorder_26',
                                                }),
                                            n().createElement('div', { className: 'Indicator_background_13' }),
                                            n().createElement('div', {
                                                className: s()(
                                                    'Indicator_backgroundHovered_8b',
                                                    S && !o && 'Indicator_backgroundHovered__visible_79',
                                                ),
                                            }),
                                            n().createElement('div', {
                                                className: s()(
                                                    'Indicator_backgroundSelected_79',
                                                    o && 'Indicator_backgroundSelected__visible_11',
                                                ),
                                                style: k,
                                            }),
                                            n().createElement('div', {
                                                className: s()(
                                                    'Indicator_backgroundDisabled_b9',
                                                    (b || w) && 'Indicator_backgroundDisabled__visible_0f',
                                                ),
                                            }),
                                            n().createElement(
                                                'div',
                                                { className: 'Indicator_mainIcon_ae', style: T },
                                                n().createElement('div', {
                                                    className: s()(
                                                        'Indicator_mainIconHovered_4b',
                                                        S && !o && 'Indicator_mainIconHovered__visible_49',
                                                    ),
                                                    style: P,
                                                }),
                                                n().createElement('div', {
                                                    className: s()(
                                                        'Indicator_mainIconSelected_e8',
                                                        o && 'Indicator_mainIconSelected__visible_83',
                                                    ),
                                                    style: I,
                                                }),
                                                n().createElement('div', { className: 'Indicator_mainIconMask_3a' }),
                                                n().createElement('div', {
                                                    className: s()(
                                                        'Indicator_mainIconSelectedMask_ae',
                                                        o && 'Indicator_mainIconSelectedMask__visible_93',
                                                    ),
                                                    style: N,
                                                }),
                                                n().createElement('div', {
                                                    className: 'Indicator_mainCategoryImageIcon_1d',
                                                    style: L,
                                                }),
                                                w &&
                                                    !b &&
                                                    n().createElement('div', {
                                                        className: 'Indicator_mainIconLoading_61',
                                                    }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: 'Indicator_bodyBackground_25' },
                                                n().createElement(
                                                    'div',
                                                    { className: 'Indicator_topContainer_e1' },
                                                    n().createElement(
                                                        'div',
                                                        { className: 'Indicator_topContainerLeftSide_62' },
                                                        n().createElement(ce, {
                                                            isLocked: b,
                                                            activeBlink: u,
                                                            type: D,
                                                            progressState: E,
                                                        }),
                                                        n().createElement(Au, {
                                                            className: 'Indicator_type_6a',
                                                            text: ne.title.$dyn(D),
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        Bu,
                                                        {
                                                            contentId:
                                                                R.views.new_year.lobby.new_year.tooltips.CommonTooltip(
                                                                    'resId',
                                                                ),
                                                            args: oe,
                                                            isEnabled: !w,
                                                        },
                                                        n().createElement(
                                                            'div',
                                                            { className: 'Indicator_itemsAmount_fc' },
                                                            n().createElement('div', {
                                                                className: 'Indicator_itemsAmountIcon_1e',
                                                                style: M,
                                                            }),
                                                            n().createElement(Au, {
                                                                className: 'Indicator_itemsAmountText_88',
                                                                text: ne.numOfItems(),
                                                                format: { binding: { value: g.toString() } },
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                                b
                                                    ? n().createElement(Au, {
                                                          className: 'Indicator_disabledText_38',
                                                          text: ne.disabled(),
                                                          format: {
                                                              binding: {
                                                                  value: n().createElement(Au, {
                                                                      className: 'Indicator_disabledValue_24',
                                                                      text: String(f),
                                                                  }),
                                                              },
                                                          },
                                                      })
                                                    : n().createElement(
                                                          n().Fragment,
                                                          null,
                                                          E.map((e, t) =>
                                                              n().createElement(
                                                                  'div',
                                                                  {
                                                                      key: e.scaleLevel,
                                                                      className: s()(
                                                                          'Indicator_breakPointNum_ad',
                                                                          0 === t && 'Indicator_firstNum_5c',
                                                                          1 === t && 'Indicator_secondNum_f5',
                                                                          2 === t && 'Indicator_thirdNum_d0',
                                                                      ),
                                                                  },
                                                                  n().createElement(
                                                                      'div',
                                                                      {
                                                                          className:
                                                                              'Indicator_breakPointNumContainer_a2',
                                                                      },
                                                                      n().createElement(Au, {
                                                                          className: 'Indicator_topNum_3b',
                                                                          text: (e.scaleLevel - 1).toString(),
                                                                      }),
                                                                      u &&
                                                                          u.index === t &&
                                                                          u.type === D &&
                                                                          n().createElement('div', {
                                                                              className: 'Indicator_blink_4a',
                                                                              style: W,
                                                                              onAnimationEnd: () => A(null),
                                                                          }),
                                                                      n().createElement('div', {
                                                                          className: s()(
                                                                              'Indicator_activeLight_37',
                                                                              se(t, e.pointsInProgress, E) &&
                                                                                  'Indicator_activeLight__visible_2a',
                                                                          ),
                                                                          style: H,
                                                                      }),
                                                                  ),
                                                              ),
                                                          ),
                                                          n().createElement('div', {
                                                              className: 'Indicator_infinity_80',
                                                          }),
                                                          n().createElement(
                                                              'div',
                                                              { className: 'Indicator_progresses_c3' },
                                                              E.map((u, e) =>
                                                                  n().createElement(
                                                                      'div',
                                                                      { className: 'Indicator_progress_8a', key: e },
                                                                      n().createElement(
                                                                          ee,
                                                                          te({}, u, {
                                                                              index: e,
                                                                              scaleDowngradeTime: h,
                                                                              onComplete: U,
                                                                              wasOverflowed: p,
                                                                              onResetWasOverflowed: d,
                                                                              onProgressFillSound: F,
                                                                          }),
                                                                      ),
                                                                  ),
                                                              ),
                                                          ),
                                                      ),
                                            ),
                                        ),
                                    ),
                                );
                            },
                        ),
                        'SlotIndicators_base_a4'),
                    Ee = R.images.new_year.gui.maps.icons.newYear.mainView.petView,
                    ce = (0, r.memo)(({ activeBlink: u, type: e, progressState: t, isLocked: r = !1 }) => {
                        const a = { backgroundImage: `url(${Ee.common.slot_blink.$dyn(e)})` },
                            i = { backgroundImage: `url(${Ee.common.blinks.$dyn(e)})` };
                        return n().createElement(
                            'div',
                            { className: s()(le, r && 'SlotIndicators_base__locked_17') },
                            !r &&
                                t.map((r, o) =>
                                    n().createElement(
                                        'div',
                                        { className: 'SlotIndicators_lightContainer_82', key: r.scaleLevel },
                                        u &&
                                            u.index === o &&
                                            u.type === e &&
                                            n().createElement('div', {
                                                className: 'SlotIndicators_blink_98',
                                                style: i,
                                            }),
                                        n().createElement('div', {
                                            className: s()(
                                                'SlotIndicators_light_40',
                                                se(o, r.pointsInProgress, t) && 'SlotIndicators_light__visible_c4',
                                            ),
                                            style: a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Ae = R.strings.ny.pet,
                    de = R.strings.ny.petWidgetTooltips.header.bonus,
                    Fe = (0, r.memo)(({ indicator: u }) => {
                        const e = u.bonus,
                            t = u.curPoint,
                            a = u.potentialCurPoint,
                            i = u.scaleLevels,
                            o = u.maxPoint,
                            l = u.type,
                            E = u.isLocked,
                            c = u.lettersToUnlock,
                            A = (0, r.useMemo)(() => Wu(t, a, i, o, l), [t, o, a, i, l]);
                        return n().createElement(
                            'div',
                            { className: 'PetTooltipsIndicator_base_92' },
                            !E &&
                                n().createElement(
                                    'div',
                                    { className: 'PetTooltipsIndicator_content_8d' },
                                    n().createElement(ce, { activeBlink: null, progressState: A, type: l }),
                                    n().createElement(Au, {
                                        className: 'PetTooltipsIndicator_type_bf',
                                        text: de.$dyn(l),
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: 'PetTooltipsIndicator_roundedValue_45' },
                                        n().createElement(Au, {
                                            className: s()(
                                                'PetTooltipsIndicator_bonusValue_18',
                                                e > 0 && 'PetTooltipsIndicator_bonusValue__green_fd',
                                            ),
                                            text: Ae.header.currentBonus(),
                                            format: { binding: { prefix: '', value: e } },
                                        }),
                                    ),
                                ),
                            E &&
                                n().createElement(Au, {
                                    className: 'PetTooltipsIndicator_mailsToUnlock_38',
                                    text: de.mailToUnlock(),
                                    format: {
                                        binding: {
                                            type: de.$dyn(l),
                                            number: n().createElement(Au, {
                                                className: 'PetTooltipsIndicator_mailsToUnlockValue_e9',
                                                text: String(c),
                                            }),
                                        },
                                    },
                                }),
                        );
                    });
                function me() {
                    return !1;
                }
                console.log;
                var De = t(3915);
                function _e(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Be = (u) => (0 === u ? window : window.subViews.get(u)),
                    Ce = (u) => {
                        return null !== u && 'object' == typeof u
                            ? 'CoherentArrayProxy' === u.constructor.name
                                ? ((e = u),
                                  (t = (u) => ('object' == typeof u ? Ce(u) : u)),
                                  Array.isArray(e) ? e.map(t) : e.map((u, e, r) => t(null == u ? void 0 : u.value)))
                                : Array.isArray(u)
                                  ? u.map((u) => ('object' == typeof u ? Ce(u) : u))
                                  : Object.fromEntries(
                                        Object.entries(u).map(([u, e]) => [u, 'object' == typeof e ? Ce(e) : e]),
                                    )
                            : u;
                        var e, t;
                    };
                var ge = t(6517);
                const pe = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: e, children: a, mocks: i }) {
                                const o = (0, r.useRef)([]),
                                    s = (u, e, t) => {
                                        var r;
                                        const n = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Be,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            s = l.O.view.addModelObserver(o, e, !0);
                                                        return (n.set(s, t), u && t(i(a)), s);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return _e(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? _e(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(e),
                                            a =
                                                'real' === u
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == t ? void 0 : t.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == t ? void 0 : t.getter(e)) : a.readByPath(e),
                                            s = (u) => o.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = { root: u.object(), indicators: u.array('indicators') },
                                                    t = (0, ge.computedFn)(
                                                        () => {
                                                            return ((u = e.indicators.get()), Ce(u));
                                                            var u;
                                                        },
                                                        { equals: me },
                                                    );
                                                return Object.assign({}, e, { computes: { getPetIndicators: t } });
                                            })({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : i(e),
                                                            n = De.observable.box(r, { equals: me });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, De.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : i(e),
                                                            n = De.observable.box(r, { equals: me });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, De.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = i(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = De.observable.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, De.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = De.observable.box(r[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, De.action)((u) => {
                                                                            i.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            c = { mode: u, model: E, externalModel: a, cleanup: s };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && t ? t.controls(c) : {},
                                            externalModel: a,
                                            mode: u,
                                        };
                                    },
                                    E = (0, r.useRef)(!1),
                                    c = (0, r.useState)(u),
                                    A = c[0],
                                    d = c[1],
                                    F = (0, r.useState)(() => s(u, e, i)),
                                    m = F[0],
                                    D = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        E.current ? D(s(A, e, i)) : (E.current = !0);
                                    }, [i, A, e]),
                                    (0, r.useEffect)(() => {
                                        d(u);
                                    }, [u]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), o.current.forEach((u) => u()));
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, a)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(),
                    he = pe[0],
                    ve = pe[1],
                    be = 'App_currentBonusValue_0e',
                    we = 'App_currentBonusValuePrefix_f0',
                    fe = R.strings.ny.petOverviewTooltip,
                    xe = R.strings.ny.pet,
                    ye = (0, du.observer)(() => {
                        const u = ve().model,
                            e = u.root.get(),
                            t = e.currentBonus,
                            r = e.minBonus,
                            a = e.maxBonus,
                            i = e.mailsAmount,
                            o = e.isLeaderboard,
                            l = u.computes.getPetIndicators(),
                            E = t > r + (a - r) / 2 && t < a,
                            c = t === a,
                            A = o || t !== a;
                        return n().createElement(
                            'div',
                            { className: 'App_base_1c' },
                            n().createElement(
                                'div',
                                { className: 'App_header_13' },
                                n().createElement(Au, { className: 'App_title_68', text: fe.title() }),
                                n().createElement(
                                    'div',
                                    { className: 'App_currentBonus_b1' },
                                    n().createElement('div', { className: 'App_currentBonusImage_40' }),
                                    n().createElement(
                                        'div',
                                        { className: 'App_currentBonusValueWrapper_65' },
                                        n().createElement(Au, {
                                            className: s()(
                                                be,
                                                E && 'App_currentBonusValue__med_e0',
                                                c && 'App_currentBonusValue__gold_db',
                                            ),
                                            text: xe.header.currentBonus(),
                                            format: {
                                                binding: {
                                                    prefix: n().createElement(Au, {
                                                        className: we,
                                                        text: xe.header.prefix(),
                                                    }),
                                                    value: t,
                                                },
                                            },
                                        }),
                                        c &&
                                            n().createElement(Au, {
                                                className: s()(be, 'App_currentBonusValue__copied_f8'),
                                                text: xe.header.currentBonus(),
                                                format: {
                                                    binding: {
                                                        prefix: n().createElement(Au, {
                                                            className: we,
                                                            text: xe.header.prefix(),
                                                        }),
                                                        value: t,
                                                    },
                                                },
                                            }),
                                    ),
                                    n().createElement(Au, {
                                        className: 'App_maxBonus_6c',
                                        text: xe.header.maxBonus(),
                                        format: { binding: { prefix: '', value: a } },
                                    }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: 'App_indicators_cb' },
                                l.map((u) =>
                                    n().createElement(
                                        'div',
                                        { key: u.type, className: 'App_indicator_d2' },
                                        n().createElement(Fe, { indicator: u }),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: s()('App_mails_98', A && 'App_mails__border_6c') },
                                n().createElement('div', { className: 'App_mailsImage_c7' }),
                                n().createElement(Au, { className: 'App_mailsText_ae', text: fe.mailsAmount() }),
                                n().createElement(
                                    'div',
                                    { className: 'App_roundedValue_bb' },
                                    n().createElement(Au, { text: String(i) }),
                                ),
                            ),
                            A &&
                                n().createElement(
                                    'div',
                                    { className: 'App_bottom_5c' },
                                    n().createElement(Au, {
                                        className: 'App_bottomTitle_fd',
                                        text:
                                            t !== a ? fe.descriptions.pet.title() : fe.descriptions.leaderboard.title(),
                                    }),
                                    n().createElement(Au, {
                                        className: 'App_bottomDescription_77',
                                        text:
                                            t !== a
                                                ? fe.descriptions.pet.description()
                                                : fe.descriptions.leaderboard.description(),
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(he, null, n().createElement(_, null, n().createElement(ye, null))),
                        document.getElementById('root'),
                    );
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (__webpack_require__.j = 1128),
        (() => {
            var u = { 1128: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(8813));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
