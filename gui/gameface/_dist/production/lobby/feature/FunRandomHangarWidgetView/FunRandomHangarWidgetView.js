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
                (t.r(e), t.d(e, { mouse: () => s, onResize: () => r }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    s = (function () {
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
                                            s = i[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, o),
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
                        addModelObserver: () => A,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => c,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => f,
                        getScale: () => d,
                        getSize: () => F,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => _,
                        remToPx: () => B,
                        resize: () => D,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => x,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function c() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
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
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
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
                    x = Promise.all([
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
                t.d(e, { B0: () => o, ry: () => C });
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
                    s = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                var E;
                (((E = o || (o = {}))[(E.UNDEFINED = 0)] = 'UNDEFINED'),
                    (E[(E.TOOLTIP = 1)] = 'TOOLTIP'),
                    (E[(E.POP_OVER = 2)] = 'POP_OVER'),
                    (E[(E.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (E[(E.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (E[(E.MOVE = 16)] = 'MOVE'),
                    (E[(E.CLOSE = 32)] = 'CLOSE'),
                    (E[(E.MINIMIZE = 64)] = 'MINIMIZE'));
                const A = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    D = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    c = t(3138);
                const d = ['args'];
                function _(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(a, n);
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
                                            _(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            _(r, a, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
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
                                })(e, d);
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
                    h = () => g(o.CLOSE),
                    p = (u, e) => {
                        u.keyCode === m.n.ESCAPE && e();
                    };
                var b = t(7572);
                const f = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: A,
                        RealFormatType: l,
                        TimeFormatType: F,
                        DateFormatType: D,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = c.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                E = s.x,
                                A = s.y,
                                l = s.width,
                                F = s.height,
                                D = {
                                    x: c.O.view.pxToRem(E) + i.x,
                                    y: c.O.view.pxToRem(A) + i.y,
                                    width: c.O.view.pxToRem(l),
                                    height: c.O.view.pxToRem(F),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(D),
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
                            p(u, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            2716: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r),
                    s = t(6483),
                    o = t.n(s),
                    E = t(9887),
                    A = t.n(E);
                const l = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var F = t(3138);
                const D = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var m;
                function c(u, e, t) {
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
                })(m || (m = {}));
                const d = F.O.client.getSize('rem'),
                    _ = d.width,
                    B = d.height,
                    C = Object.assign({ width: _, height: B }, c(_, B, D)),
                    g = (0, a.createContext)(C),
                    h = ['children'],
                    p = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, h);
                        const n = (0, a.useContext)(g),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            o = n.small,
                            E = n.extraSmall,
                            A = n.extraLargeWidth,
                            F = n.largeWidth,
                            D = n.mediumWidth,
                            m = n.smallWidth,
                            c = n.extraSmallWidth,
                            d = n.extraLargeHeight,
                            _ = n.largeHeight,
                            B = n.mediumHeight,
                            C = n.smallHeight,
                            p = n.extraSmallHeight,
                            b = { extraLarge: d, large: _, medium: B, small: C, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && o) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && A) return l(e, t, b);
                            if (t.largeWidth && F) return l(e, t, b);
                            if (t.mediumWidth && D) return l(e, t, b);
                            if (t.smallWidth && m) return l(e, t, b);
                            if (t.extraSmallWidth && c) return l(e, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && d) return e;
                                if (t.largeHeight && _) return e;
                                if (t.mediumHeight && B) return e;
                                if (t.smallHeight && C) return e;
                                if (t.extraSmallHeight && p) return e;
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
                    (0, a.memo)(p));
                let b, f, v;
                ((0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(g),
                        t = (0, a.useState)(e),
                        r = t[0],
                        i = t[1],
                        s = (0, a.useCallback)((u, e) => {
                            const t = F.O.view.pxToRem(u),
                                a = F.O.view.pxToRem(e);
                            i(Object.assign({ width: t, height: a }, c(t, a, D)));
                        }, []);
                    (((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const o = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(g.Provider, { value: o }, u);
                }),
                    (function (u) {
                        ((u[(u.ExtraSmall = D.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = D.small.width)] = 'Small'),
                            (u[(u.Medium = D.medium.width)] = 'Medium'),
                            (u[(u.Large = D.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = D.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = D.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = D.small.width)] = 'Small'),
                            (u[(u.Medium = D.medium.width)] = 'Medium'),
                            (u[(u.Large = D.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = D.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = D.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = D.small.height)] = 'Small'),
                            (u[(u.Medium = D.medium.height)] = 'Medium'),
                            (u[(u.Large = D.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = D.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const w = ['xl', 'lg', 'md', 'sm', 'xs'],
                    x = (u) => u.includes('_') && ((u) => w.includes(u))(u.split('_').at(-1)),
                    S = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    P = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (x(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = S.indexOf(e),
                                    i = (-1 !== r ? w.slice(r) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    s = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== s ? s : u[n]), t);
                            }
                            const n = u[a];
                            return (
                                void 0 === n ||
                                    ((u, e) => w.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    M = (u, e = P) => {
                        const t = (
                            (u, e = P) =>
                            (t) => {
                                const r = (() => {
                                        const u = (0, a.useContext)(g),
                                            e = u.width,
                                            t = u.height,
                                            n = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return b.ExtraLarge;
                                                    case u.large:
                                                        return b.Large;
                                                    case u.medium:
                                                        return b.Medium;
                                                    case u.small:
                                                        return b.Small;
                                                    case u.extraSmall:
                                                        return b.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            b.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            r = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return f.ExtraLarge;
                                                    case u.largeWidth:
                                                        return f.Large;
                                                    case u.mediumWidth:
                                                        return f.Medium;
                                                    case u.smallWidth:
                                                        return f.Small;
                                                    case u.extraSmallWidth:
                                                        return f.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            f.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            i = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return v.ExtraLarge;
                                                    case u.largeHeight:
                                                        return v.Large;
                                                    case u.mediumHeight:
                                                        return v.Medium;
                                                    case u.smallHeight:
                                                        return v.Small;
                                                    case u.extraSmallHeight:
                                                        return v.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            v.ExtraSmall
                                                        );
                                                }
                                            })(u);
                                        return {
                                            mediaSize: n,
                                            mediaWidth: r,
                                            mediaHeight: i,
                                            remScreenWidth: e,
                                            remScreenHeight: t,
                                        };
                                    })().mediaSize,
                                    i = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return n().createElement(u, i);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => x(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    y = {
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
                    L = [
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
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        O.apply(this, arguments)
                    );
                }
                Object.keys(A());
                const T = {
                        XL: { mt: y.mt__XL, mr: y.mr__XL, mb: y.mb__XL, ml: y.ml__XL },
                        LG: { mt: y.mt__LG, mr: y.mr__LG, mb: y.mb__LG, ml: y.ml__LG },
                        MDp: { mt: y.mt__MDp, mr: y.mr__MDp, mb: y.mb__MDp, ml: y.ml__MDp },
                        MD: { mt: y.mt__MD, mr: y.mr__MD, mb: y.mb__MD, ml: y.ml__MD },
                        SMp: { mt: y.mt__SMp, mr: y.mr__SMp, mb: y.mb__SMp, ml: y.ml__SMp },
                        SM: { mt: y.mt__SM, mr: y.mr__SM, mb: y.mb__SM, ml: y.ml__SM },
                        XS: { mt: y.mt__XS, mr: y.mr__XS, mb: y.mb__XS, ml: y.ml__XS },
                    },
                    k = (Object.keys(T), ['mt', 'mr', 'mb', 'ml']),
                    N = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    I = M((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            i = u.m,
                            s = u.mt,
                            E = void 0 === s ? i : s,
                            A = u.mr,
                            l = void 0 === A ? i : A,
                            F = u.mb,
                            D = void 0 === F ? i : F,
                            m = u.ml,
                            c = void 0 === m ? i : m,
                            d = u.column,
                            _ = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (d ? 'column' : _ && 'row') || void 0 : B,
                            g = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            b = u.spaceBetween,
                            f = u.spaceAround,
                            v = u.justifyContent,
                            w =
                                void 0 === v
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            x = u.alignItems,
                            S = void 0 === x ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : x,
                            P = u.alignSelf,
                            M = u.wrap,
                            R = u.flexWrap,
                            I = void 0 === R ? (M ? 'wrap' : void 0) : R,
                            H = u.grow,
                            W = u.shrink,
                            U = u.flex,
                            G = void 0 === U ? (H || W ? `${H ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : U,
                            j = u.style,
                            z = u.children,
                            $ = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, L);
                        const V = (0, a.useMemo)(() => {
                                const u = { mt: E, mr: l, mb: D, ml: c },
                                    e = ((u) =>
                                        k.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(T[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        k.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[N[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, j, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: G,
                                        alignSelf: P,
                                        display: C || S ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: I,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, E, l, D, c, j, G, P, C, I, w, S]),
                            X = V.computedStyle,
                            K = V.computedClassNames;
                        return n().createElement('div', O({ className: o()(y.base, ...K, e), style: X }, $), z);
                    });
                let H;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(H || (H = {}));
                const W = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    U = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    G = (u, e, t = H.left) => u.split(e).reduce(t === H.left ? W : U, []),
                    j = (() => {
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
                    z = ['zh_cn', 'zh_sg', 'zh_tw'],
                    $ = ({ binding: u, text: e = '', classMix: t, alignment: r = H.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      n().createElement(
                                          'div',
                                          { className: o()('FormatText_base_d0', t), key: `${e}-${i}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = H.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return z.includes(t)
                                                                ? j(u)
                                                                : ((u, e = H.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          G(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(G(u, a, H.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              n().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var V = t(3532),
                    X = t.n(V);
                const K = {
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
                    q = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                Object.keys(A());
                const Z = Object.keys(X()),
                    Q = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    J = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    uu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    eu =
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
                            'heading-H56': Q,
                            'heading-H36': Q,
                            'heading-H28': J,
                            'heading-H24': J,
                            'heading-H24R': J,
                            'heading-H22': J,
                            'heading-H20R': J,
                            'heading-H18': J,
                            'heading-H15': uu,
                            'heading-H14': uu,
                            'paragraph-P24': J,
                            'paragraph-P18': J,
                            'paragraph-P16': J,
                            'paragraph-P14': uu,
                            'paragraph-P12': uu,
                            'paragraph-P10': uu,
                        }),
                    tu =
                        (Object.keys(eu),
                        (u) =>
                            u
                                ? ((u) => Z.includes(u))(u)
                                    ? { colorClassName: K[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    au = M((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            i = u.color,
                            s = u.m,
                            E = u.mt,
                            A = void 0 === E ? s : E,
                            l = u.mr,
                            F = void 0 === l ? s : l,
                            D = u.mb,
                            m = void 0 === D ? s : D,
                            c = u.ml,
                            d = void 0 === c ? s : c,
                            _ = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, q);
                        const g = (0, a.useMemo)(() => {
                                const u = tu(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, _, a), colorClassName: e };
                            }, [_, i]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return n().createElement(
                            I,
                            Y(
                                {
                                    className: o()(K.base, t && K[t], p, r),
                                    style: h,
                                    mt: !0 === A ? eu[t || 'paragraph-P16'].mt : A,
                                    mr: !0 === F ? eu[t || 'paragraph-P16'].mr : F,
                                    mb: !0 === m ? eu[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === d ? eu[t || 'paragraph-P16'].ml : d,
                                },
                                C,
                            ),
                            void 0 !== B ? n().createElement($, Y({}, B, { text: e })) : e,
                        );
                    });
                let nu;
                function ru(u) {
                    engine.call('PlaySound', u);
                }
                !(function (u) {
                    ((u.DISABLED = 'disabled'),
                        (u.ACTIVE_FINAL = 'activeFinal'),
                        (u.ACTIVE_RESETTABLE = 'activeResettable'),
                        (u.COMPLETED_FINAL = 'completedFinal'),
                        (u.COMPLETED_RESETTABLE = 'completedResettable'));
                })(nu || (nu = {}));
                const iu = {
                    playHighlight() {
                        ru('highlight');
                    },
                    playClick() {
                        ru('play');
                    },
                    playYes() {
                        ru('yes1');
                    },
                };
                var su = t(3403);
                const ou = R.images.fun_random.gui.maps.icons.feature.asset_packs;
                var Eu = t(4179);
                const Au = [
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
                function lu(u) {
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
                const Fu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Eu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Du = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            l = u.ignoreMouseClick,
                            F = void 0 !== l && l,
                            D = u.decoratorId,
                            m = void 0 === D ? 0 : D,
                            c = u.isEnabled,
                            d = void 0 === c || c,
                            _ = u.targetId,
                            B = void 0 === _ ? 0 : _,
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
                            })(u, Au);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [B],
                            ),
                            f = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Fu(t, m, { isMouseEvent: !0, on: !0, arguments: lu(n) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, n, b, C]),
                            v = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        Fu(t, m, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            w = (0, a.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === d && v();
                            }, [d, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            d
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(f, A ? 100 : 400)),
                                                          r && r(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (v(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === F && v(), null == o || o(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === F && v(), null == s || s(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var x;
                    },
                    mu = {
                        base: 'ModifierDomainIcon_base_74',
                        image: 'ModifierDomainIcon_image_62',
                        iconOut: 'ModifierDomainIcon_iconOut_c6',
                        image__big: 'ModifierDomainIcon_image__big_3c',
                        image__large: 'ModifierDomainIcon_image__large_f1',
                        iconHover: 'ModifierDomainIcon_iconHover_69',
                    };
                let cu;
                !(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'));
                })(cu || (cu = {}));
                const du = (u, e) => {
                        const t = e === cu.large ? '80x80' : '64x64';
                        return {
                            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${t}`).$dyn(u)})`,
                        };
                    },
                    _u = ({ modifiersDomain: u, subModeId: e, className: t, size: a = cu.small }) => {
                        const r = e ? { modifiersDomain: u, subModeId: e } : { modifiersDomain: u };
                        return n().createElement(
                            'div',
                            { className: mu.base },
                            n().createElement(
                                Du,
                                {
                                    contentId:
                                        R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                                    args: r,
                                },
                                n().createElement('div', {
                                    className: o()(mu.image, mu[`image__${a}`], t),
                                    style: du(u, a),
                                }),
                            ),
                        );
                    };
                var Bu = t(9762),
                    Cu = t(6457);
                let gu, hu;
                (!(function (u) {
                    ((u.Init = 'init'),
                        (u.Active = 'active'),
                        (u.NonActive = 'nonActive'),
                        (u.UpdateState = 'updateState'));
                })(gu || (gu = {})),
                    (function (u) {
                        ((u.CheckDataUpdate = 'checkDataUpdate'),
                            (u.UpdateStageData = 'updateStageData'),
                            (u.SwitchState = 'switchState'));
                    })(hu || (hu = {})));
                const pu = (u) => u === nu.ACTIVE_RESETTABLE || u === nu.ACTIVE_FINAL,
                    bu = (u) => pu(u.status),
                    fu = (u) => !pu(u.status),
                    vu = (u, e) => u.status !== e.status && wu(u, e),
                    wu = (u, e) =>
                        e.stage === u.stage &&
                        e.currentPoints === u.currentPoints &&
                        e.maximumPoints === u.maximumPoints &&
                        0 === u.earnedPoints,
                    xu = (u, e) =>
                        pu(e.status) &&
                        ((1 === e.stage && 0 === e.currentPoints) ||
                            (e.stage === u.stage && u.maximumPoints !== e.maximumPoints)),
                    Su = (u, e) =>
                        e.stage === u.stage &&
                        e.currentPoints === u.currentPoints &&
                        e.maximumPoints === u.maximumPoints &&
                        0 !== u.earnedPoints,
                    Pu = (u, e) =>
                        e.stage === u.stage &&
                        e.currentPoints !== u.currentPoints &&
                        e.maximumPoints === u.maximumPoints,
                    Mu = (u, e) => e.stage > u.stage && u.currentPoints < u.maximumPoints,
                    yu = (u, e) => e.stage > u.stage && u.currentPoints === u.maximumPoints,
                    Lu = (u, e) => e.stage < u.stage && u.currentPoints > 0,
                    Ou = (u, e) => e.stage < u.stage && 0 === u.currentPoints,
                    Ru = (u, e) => u.status !== e.status && pu(e.status),
                    Tu = (u) => {
                        u.isSoundEnabled && 0 !== u.earnedPoints && ru('ev_fep_progress_bar');
                    };
                function ku() {
                    return !1;
                }
                console.log;
                var Nu = t(9174);
                function Iu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const Hu = (u) => (0 === u ? window : window.subViews.get(u)),
                    Wu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: i, mocks: s }) {
                                const o = (0, a.useRef)([]),
                                    E = (u, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Hu,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
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
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            o = F.O.view.addModelObserver(s, e, !0);
                                                        return (n.set(o, t), u && t(i(r)), o);
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
                                                                                    return Iu(u, e);
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
                                                                                          ? Iu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            E = (u) => o.current.push(u),
                                            A = (({ observableModel: u }) =>
                                                Object.assign({}, u.primitives(['activeModeResName']), {
                                                    progressionState: u.object('progressionState'),
                                                    currentProgressionStage: u.object('currentProgressionStage'),
                                                    modifiersDomains: u.array('modifiersDomains', []),
                                                }))({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Nu.LO.box(a, { equals: ku });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Nu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Nu.LO.box(a, { equals: ku });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Nu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = Nu.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Nu.aD)((u) => {
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
                                                                r = Object.entries(n),
                                                                s = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = Nu.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Nu.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            l = { mode: u, model: A, externalModel: i, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === u && a ? a.controls(l) : e(l),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    l = (0, a.useState)(u),
                                    D = l[0],
                                    m = l[1],
                                    c = (0, a.useState)(() => E(u, r, s)),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? _(E(D, r, s)) : (A.current = !0);
                                    }, [s, D, r]),
                                    (0, a.useEffect)(() => {
                                        m(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (d.externalModel.dispose(), o.current.forEach((u) => u()));
                                        },
                                        [d],
                                    ),
                                    n().createElement(t.Provider, { value: d }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ showInfo: u.createCallbackNoArgs('onShowInfo') })),
                    Uu = Wu[0],
                    Gu = Wu[1],
                    ju = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let zu, $u;
                (!(function (u) {
                    ((u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'), (u.Default = 'big'));
                })(zu || (zu = {})),
                    (function (u) {
                        ((u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing'));
                    })($u || ($u = {})));
                const Vu = ({ size: u = zu.Default, classMix: e }) =>
                        n().createElement('div', { className: o()(ju.background, ju[`background__${u}`], e) }),
                    Xu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Ku = ({ size: u }) => {
                        const e = o()(Xu.base, Xu[`base__${u}`]);
                        return n().createElement('div', { className: e });
                    },
                    qu = {
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
                    Yu = (0, a.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                            const s = o()(
                                    qu.base,
                                    qu[`base__${u}`],
                                    t && qu.base__disabled,
                                    r && qu.base__finished,
                                    i && qu.base__withoutBounce,
                                ),
                                E = !t && !r;
                            return n().createElement(
                                'div',
                                { className: s, style: a, ref: e },
                                n().createElement('div', { className: qu.pattern }),
                                n().createElement('div', { className: qu.gradient }),
                                E && n().createElement(Ku, { size: u }),
                            );
                        },
                    ),
                    Zu = ({ size: u, value: e, lineRef: t, disabled: r, onComplete: i }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            o = 100 === e;
                        return (
                            (0, a.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            n().createElement(Yu, { size: u, disabled: r, baseStyles: s, isComplete: o, lineRef: t })
                        );
                    },
                    Qu = (u, e) => {
                        let t;
                        const a = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let Ju, ue;
                (!(function (u) {
                    ((u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End'));
                })(Ju || (Ju = {})),
                    (function (u) {
                        ((u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End'));
                    })(ue || (ue = {})));
                const ee = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: E,
                        }) => {
                            const A = s < r,
                                l = (0, a.useState)(ue.Idle),
                                F = l[0],
                                D = l[1],
                                m = F === ue.In,
                                c = F === ue.End,
                                d = F === ue.Idle,
                                _ = (0, a.useCallback)(
                                    (u) => {
                                        (D(u), E && E(u));
                                    },
                                    [E],
                                );
                            ((0, a.useEffect)(() => {
                                if (d && !t)
                                    return Qu(() => {
                                        _(ue.In);
                                    }, e);
                            }, [_, t, d, e]),
                                (0, a.useEffect)(() => {
                                    if (m)
                                        return Qu(() => {
                                            (o && o(), _(ue.End));
                                        }, u + e);
                                }, [_, m, o, e, u]));
                            const B = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${A ? s : r}%` }),
                                    [r, A, s],
                                );
                            return c
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      n().createElement(
                                          'div',
                                          { style: d ? B : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          n().createElement(Ku, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    te = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: E,
                            onEndAnimation: A,
                        }) => {
                            const l = (0, a.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, u],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(Yu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: l,
                                }),
                                t >= 0 &&
                                    n().createElement(ee, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: A,
                                    }),
                            );
                        },
                    ),
                    ae = (u) => (u ? { left: 0 } : { right: 0 }),
                    ne = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    re = (u) => ({ transitionDuration: `${u}ms` }),
                    ie = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                            className: l,
                        }) => {
                            const F = s < r,
                                D = (0, a.useState)(Ju.Idle),
                                m = D[0],
                                c = D[1],
                                d = m === Ju.End,
                                _ = m === Ju.Idle,
                                B = m === Ju.Grow,
                                C = m === Ju.Shrink,
                                g = (0, a.useCallback)(
                                    (u) => {
                                        (c(u), A && A(u));
                                    },
                                    [A],
                                ),
                                h = (0, a.useCallback)(
                                    (u, e) =>
                                        Qu(() => {
                                            g(u);
                                        }, e),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return _
                                        ? h(Ju.Grow, e)
                                        : B
                                          ? h(Ju.Shrink, u)
                                          : C
                                            ? h(Ju.End, u)
                                            : void (d && E && E());
                            }, [h, t, d, B, _, C, E, e, u]);
                            const p = (0, a.useMemo)(() => Object.assign({ width: '100%' }, re(u), ae(F)), [F, u]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, re(u), ae(F)), [F, u]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, ne(F, r), re(u)), [r, F, u]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, ne(F, r), re(u)),
                                    [r, F, s, u],
                                );
                            if (d) return null;
                            const w = o()(
                                'ProgressBarDeltaGrow_base_7e',
                                l,
                                F && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return n().createElement(
                                'div',
                                { style: _ ? f : v, className: w },
                                n().createElement(
                                    'div',
                                    { style: C ? b : p, className: 'ProgressBarDeltaGrow_glow_68' },
                                    n().createElement(Ku, { size: i }),
                                ),
                            );
                        },
                    ),
                    se = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                        }) => {
                            const l = u < t,
                                F = (0, a.useState)(!1),
                                D = F[0],
                                m = F[1],
                                c = (0, a.useCallback)(
                                    (u) => {
                                        (u === Ju.Shrink && m(!0), A && A(u));
                                    },
                                    [A],
                                ),
                                d = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                _ = (0, a.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, u],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(Yu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: l && 0 === u,
                                    baseStyles: D ? _ : d,
                                }),
                                t >= 0 &&
                                    n().createElement(ie, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: c,
                                        freezed: o.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    oe = ['onComplete', 'onEndAnimation'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Ae = (0, a.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, oe);
                        const i = (0, a.useState)(!1),
                            s = i[0],
                            o = i[1],
                            E = (0, a.useCallback)(() => {
                                const u = 100 === r.to;
                                (u !== s && o(u), u && e && e(), t && t());
                            }, [s, e, t, r.to]);
                        switch (r.animationSettings.type) {
                            case $u.Simple:
                                return n().createElement(te, Ee({}, r, { onEndAnimation: E, isComplete: s }));
                            case $u.Growing:
                                return n().createElement(se, Ee({}, r, { onEndAnimation: E, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    le = ['onEndAnimation'];
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const De = (0, a.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, le);
                    const r = (0, a.useRef)({}),
                        i = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), e && e());
                        }, [e]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        n().createElement(Ae, Fe({}, t, { onEndAnimation: i, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const ce = (0, a.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: E,
                        }) => {
                            if (r === e)
                                return n().createElement(Zu, {
                                    key: `${r}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: E,
                                });
                            const A = {
                                from: r,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: a,
                                animationSettings: i,
                                onComplete: E,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? n().createElement(De, A)
                                : n().createElement(Ae, me({ key: `${r}-${e}` }, A));
                        },
                    ),
                    de = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    _e = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Be = (u, e, t) => ('number' == typeof t ? (_e(0, e, t) / e) * 100 : u),
                    Ce = {
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
                    ge = {
                        freezed: !1,
                        withStack: !1,
                        type: $u.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    he = (0, a.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Ce,
                            size: t = zu.Default,
                            animationSettings: r = ge,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            progressBarBackgroundClassMix: E,
                            value: A,
                            deltaFrom: l,
                            lineRef: F,
                            onChangeAnimationState: D,
                            onEndAnimation: m,
                            onComplete: c,
                        }) => {
                            const d = ((u, e, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (_e(0, e, u) / e) * 100;
                                    return { value: a, deltaFrom: Be(a, e, t) };
                                }, [t, e, u]))(A, u, l);
                            return n().createElement(
                                'div',
                                { className: o()(ju.base, ju[`base__${t}`]), style: de(e) },
                                !s && n().createElement(Vu, { size: t, classMix: E }),
                                n().createElement(ce, {
                                    size: t,
                                    lineRef: F,
                                    disabled: i,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: D,
                                    onComplete: c,
                                }),
                            );
                        },
                    );
                var pe = t(9459);
                const be = {
                        base: 'Status_base_a8',
                        base__noDomains: 'Status_base__noDomains_92',
                        base__completedResettable: 'Status_base__completedResettable_61',
                        base__completedFinal: 'Status_base__completedFinal_81',
                        progress: 'Status_progress_f1',
                        base__disabled: 'Status_base__disabled_e2',
                        progressLevel: 'Status_progressLevel_9a',
                        progressBar: 'Status_progressBar_68',
                        statusIcon: 'Status_statusIcon_bf',
                        base__completedFinal__noDomains: 'Status_base__completedFinal__noDomains_d3',
                        base__completedResettable__noDomains: 'Status_base__completedResettable__noDomains_cd',
                        fadeInWithScale: 'Status_fadeInWithScale_9b',
                        slideDown: 'Status_slideDown_d6',
                    },
                    fe = (0, su.Pi)(({ className: u, onStatusUpdate: e, isWithoutDomains: t }) => {
                        const r = Gu().model,
                            i = r.progressionState.get(),
                            s = i.status,
                            E = i.currentStage,
                            A = r.currentProgressionStage.get(),
                            l = A.currentPoints,
                            F = A.maximumPoints,
                            D = n().useMemo(() => {
                                return (
                                    'widget-fsm',
                                    (u = {
                                        status: s,
                                        stage: E,
                                        currentPoints: l,
                                        maximumPoints: F,
                                        earnedPoints: 0,
                                        isSoundEnabled: !1,
                                    }),
                                    300,
                                    (t = e),
                                    (0, Bu.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: 'widget-fsm',
                                            initial: gu.Init,
                                            context: u,
                                            states: {
                                                [gu.Init]: { always: { target: gu.UpdateState } },
                                                [gu.UpdateState]: {
                                                    always: [
                                                        { target: gu.Active, cond: bu },
                                                        { target: gu.NonActive, cond: fu },
                                                    ],
                                                },
                                                [gu.Active]: {
                                                    on: {
                                                        [hu.CheckDataUpdate]: [
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u, e) => ({
                                                                        type: hu.SwitchState,
                                                                        status: e.status,
                                                                    })),
                                                                ],
                                                                cond: vu,
                                                            },
                                                            { target: gu.Active, cond: wu },
                                                            {
                                                                target: gu.UpdateState,
                                                                actions: [
                                                                    (0, Cu.f0)({
                                                                        status: (u, e) => e.status,
                                                                        stage: (u, e) => e.stage,
                                                                        currentPoints: (u, e) => e.currentPoints,
                                                                        maximumPoints: (u, e) => e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                    () => {},
                                                                ],
                                                                cond: xu,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: u.maximumPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: u.maximumPoints - u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Mu,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u, e) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    () => {},
                                                                    (0, Cu.lW)(
                                                                        (u, e) => ({
                                                                            type: hu.UpdateStageData,
                                                                            stage: e.stage,
                                                                            currentPoints: e.currentPoints,
                                                                            maximumPoints: e.maximumPoints,
                                                                            earnedPoints: e.currentPoints,
                                                                        }),
                                                                        { delay: 300 },
                                                                    ),
                                                                ],
                                                                cond: yu,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u, e) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: e.currentPoints - u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Pu,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: u.currentPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, Cu.lW)((u, e) => ({
                                                                        type: hu.SwitchState,
                                                                        status: e.status,
                                                                    })),
                                                                ],
                                                                cond: Su,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: -u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Lu,
                                                            },
                                                            {
                                                                target: gu.Active,
                                                                actions: [
                                                                    (0, Cu.lW)((u, e) => ({
                                                                        type: hu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.currentPoints - e.maximumPoints,
                                                                    })),
                                                                    () => {},
                                                                ],
                                                                cond: Ou,
                                                            },
                                                        ],
                                                        [hu.UpdateStageData]: {
                                                            target: gu.Active,
                                                            actions: [
                                                                (0, Cu.f0)({
                                                                    stage: (u, e) => e.stage,
                                                                    currentPoints: (u, e) => e.currentPoints,
                                                                    maximumPoints: (u, e) => e.maximumPoints,
                                                                    earnedPoints: (u, e) => e.earnedPoints,
                                                                }),
                                                                Tu,
                                                            ],
                                                        },
                                                        [hu.SwitchState]: {
                                                            target: gu.UpdateState,
                                                            actions: [
                                                                (u, e) => t(e.status),
                                                                (0, Cu.f0)({ status: (u, e) => e.status }),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [gu.NonActive]: {
                                                    on: {
                                                        [hu.CheckDataUpdate]: {
                                                            target: gu.UpdateState,
                                                            actions: [
                                                                (0, Cu.f0)({
                                                                    status: (u, e) => e.status,
                                                                    stage: (u, e) => e.stage,
                                                                    currentPoints: (u, e) => e.currentPoints,
                                                                    maximumPoints: (u, e) => e.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                                () => {},
                                                            ],
                                                            cond: Ru,
                                                        },
                                                        [hu.SwitchState]: {
                                                            target: gu.UpdateState,
                                                            actions: (0, Cu.f0)({ status: (u, e) => e.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: bu,
                                                hasNonActiveStatus: fu,
                                                isStatusUpdate: vu,
                                                isTaskSwitchingUpdate: xu,
                                                isNoUpdate: wu,
                                                isUpdateCurrentStageWithZeroEarnPoints: Su,
                                                isUpdateCurrentStageWithCurrentPoints: Pu,
                                                isUpdateToNextStageWithoutFillMax: yu,
                                                isUpdateToNextStageWithFillMax: Mu,
                                                isUpdateToPrevStageWithReset: Lu,
                                                isUpdateToPrevStageWithoutReset: Ou,
                                                isUpdateWithActiveSwitch: Ru,
                                            },
                                        },
                                    )
                                );
                                var u, t;
                            }, []),
                            m = (0, pe.eO)(D),
                            c = m[0],
                            d = m[1],
                            _ = c.context.status === nu.DISABLED;
                        (0, a.useEffect)(() => {
                            d({ type: hu.CheckDataUpdate, status: s, stage: E, currentPoints: l, maximumPoints: F });
                        }, [s, l, F, E, d]);
                        const B = (0, a.useCallback)(() => {
                                d({
                                    type: hu.CheckDataUpdate,
                                    status: s,
                                    stage: E,
                                    currentPoints: l,
                                    maximumPoints: F,
                                });
                            }, [l, F, E, s, d]),
                            C = o()(
                                be.base,
                                be[`base__${c.context.status}`],
                                u,
                                t && be.base__noDomains,
                                t && be[`base__${c.context.status}__noDomains`],
                            );
                        return n().createElement(
                            Du,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: !_,
                            },
                            n().createElement(
                                'div',
                                { className: C },
                                n().createElement('div', { className: be.statusIcon }),
                                n().createElement(
                                    'div',
                                    { className: be.progress },
                                    n().createElement('div', { className: be.progressLevel }, c.context.stage),
                                    n().createElement(
                                        'div',
                                        { className: be.progressBar },
                                        n().createElement(he, {
                                            value: c.context.currentPoints,
                                            maxValue: c.context.maximumPoints,
                                            size: zu.Small,
                                            animationSettings: ge,
                                            deltaFrom: c.context.currentPoints - c.context.earnedPoints,
                                            onEndAnimation: B,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ve = {
                        base: 'App_base_59',
                        animContainer: 'App_animContainer_b4',
                        slideDown: 'App_slideDown_0e',
                        base__completedResettable: 'App_base__completedResettable_78',
                        base__completedFinal: 'App_base__completedFinal_76',
                        base__disabled: 'App_base__disabled_e8',
                        backgroundWrapper: 'App_backgroundWrapper_0b',
                        background: 'App_background_75',
                        background__scaled: 'App_background__scaled_b4',
                        modifications: 'App_modifications_5f',
                        icon: 'App_icon_a4',
                        title: 'App_title_31',
                        title__noDomains: 'App_title__noDomains_56',
                        status: 'App_status_1c',
                        fadeInWithScale: 'App_fadeInWithScale_72',
                    },
                    we = R.strings.fun_random.sub_modes,
                    xe = (0, su.Pi)(() => {
                        const u = Gu(),
                            e = u.model,
                            t = u.controls,
                            r = e.progressionState.get().status,
                            i = e.modifiersDomains.get(),
                            s = (() => {
                                const u = (0, a.useState)(F.O.view.getScale()),
                                    e = u[0],
                                    t = u[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const u = () => {
                                            t(F.O.view.getScale());
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
                            })(),
                            E = e.activeModeResName.get(),
                            A = we.$dyn(E) ? E : 'undefined',
                            l = we.$dyn(A).capsUserName(),
                            D = (0, a.useState)(r),
                            m = D[0],
                            c = D[1],
                            d = ((u, e) => {
                                var t;
                                const a = ou.$dyn('sub_modes');
                                return null != (t = a.$dyn(u)) ? t : a.$dyn('undefined');
                            })(A).hangar_widget,
                            _ = m === nu.ACTIVE_FINAL || m === nu.ACTIVE_RESETTABLE,
                            B = d.$dyn(_ ? E : `${E}_disabled`),
                            C = (0, a.useCallback)((u) => {
                                c(u);
                            }, []);
                        var g;
                        ((g = () => {
                            F.O.view.setSidePaddingsRem({ left: 186, right: 186, top: 0, bottom: 0 });
                        }),
                            (0, a.useEffect)(g, []),
                            (0, a.useEffect)(() => {
                                r !== m && pu(r) && c(r);
                            }, [r, m]));
                        const h = 0 === i.length;
                        return n().createElement(
                            'div',
                            { className: o()(ve.base, ve[`base__${m}`]) },
                            n().createElement(
                                'div',
                                {
                                    className: ve.animContainer,
                                    onClick: () => {
                                        (ru(R.sounds.yes()), t.showInfo());
                                    },
                                    onMouseEnter: iu.playHighlight,
                                },
                                n().createElement(
                                    'div',
                                    { className: ve.backgroundWrapper },
                                    n().createElement('img', {
                                        className: o()(ve.background, 2 === s && ve.background__scaled),
                                        src: d.ribbon(),
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: ve.modifications },
                                    (function (u, e) {
                                        return Array.isArray(u)
                                            ? u.map(e)
                                            : u.map((u, t, a) => e(null == u ? void 0 : u.value, t));
                                    })(i, (u, e) => n().createElement(_u, { key: e, modifiersDomain: u })),
                                ),
                                B
                                    ? n().createElement('div', {
                                          className: ve.icon,
                                          style: { backgroundImage: `url(${B})` },
                                      })
                                    : n().createElement(au, {
                                          className: o()(ve.title, h && ve.title__noDomains),
                                          text: l,
                                      }),
                                n().createElement(fe, { className: ve.status, onStatusUpdate: C, isWithoutDomains: h }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(Uu, null, n().createElement(xe, null)),
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
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (__webpack_require__.j = 808),
        (() => {
            var u = { 808: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2716));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
