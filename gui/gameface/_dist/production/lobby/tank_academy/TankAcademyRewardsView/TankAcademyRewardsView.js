(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            532: (u) => {
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
            887: (u) => {
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
            67: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => X });
                var a = {};
                (t.r(a), t.d(a, { mouse: () => c, onResize: () => l }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => A,
                        getSize: () => _,
                        graphicsQuality: () => m,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => d, getTextureUrl: () => F }));
                var i = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => w,
                        addPreloadTexture: () => p,
                        children: () => r,
                        displayStatus: () => D,
                        displayStatusIs: () => G,
                        events: () => B,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => T,
                        getBrowserTexturePath: () => v,
                        getDisplayStatus: () => U,
                        getScale: () => M,
                        getSize: () => x,
                        getViewGlobalPosition: () => R,
                        isClientAccessible: () => N,
                        isEventHandled: () => I,
                        isFocused: () => O,
                        pxToRem: () => y,
                        remToPx: () => L,
                        resize: () => f,
                        sendEvent: () => h,
                        setAnimateWindow: () => P,
                        setEventHandled: () => k,
                        setInputPaddingsRem: () => b,
                        setSidePaddingsRem: () => S,
                        whenTutorialReady: () => $,
                    }));
                const l = s('clientResized'),
                    E = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    c = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && o(!1);
                        }
                        function t() {
                            u.enabled && o(!0);
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
                                : o(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${e}`,
                                            i = E[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
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
                        return Object.assign({}, n, {
                            disable() {
                                ((u.enabled = !1), a());
                            },
                            enable() {
                                ((u.enabled = !0), a());
                            },
                            enableOutside() {
                                u.enabled && o(!0);
                            },
                            disableOutside() {
                                u.enabled && o(!1);
                            },
                        });
                    })();
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function F(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function d(u, e, t) {
                    return `url(${F(u, e, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    C = ['args'],
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
                                })(e, C);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    h = {
                        close(u) {
                            g('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            g(64);
                        },
                        move(u) {
                            g(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function p(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function b(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function v(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function w(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function S(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function x(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function f(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function R(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: L(e.x), y: L(e.y) };
                }
                function T() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function y(u) {
                    return viewEnv.pxToRem(u);
                }
                function L(u) {
                    return viewEnv.remToPx(u);
                }
                function P(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function O() {
                    return viewEnv.isFocused();
                }
                function N() {
                    return viewEnv.isClientAccessible();
                }
                function k() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(D).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === D[e]), u), {}),
                    W = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    $ = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: i, client: n };
            },
            521: (u, e, t) => {
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
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(67);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => E, Z5: () => i, B0: () => o, ry: () => C });
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
                var r = t(358);
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
                var l;
                (((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    F = t(67);
                const d = ['args'];
                function D(u, e, t, a, n, r, i) {
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
                                            D(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(r, a, n, i, s, 'throw', u);
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
                var b = t(572);
                const v = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                _ = s.height,
                                A = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(_),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(A),
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
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = w;
            },
            656: (u, e, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r),
                    s = t(483),
                    o = t.n(s);
                function l(u) {
                    engine.call('PlaySound', u);
                }
                const E = {
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
                    c = [
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
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        _.apply(this, arguments)
                    );
                }
                class A extends n().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && l(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && l(this.props.soundClick));
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                (u && u(e), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            a = u.goto,
                            r = u.side,
                            i = u.type,
                            s = u.classNames,
                            l = u.onMouseEnter,
                            A = u.onMouseLeave,
                            m = u.onMouseDown,
                            F = u.onMouseUp,
                            d =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, c)),
                            D = o()(E.base, E[`base__${i}`], E[`base__${r}`], null == s ? void 0 : s.base),
                            B = o()(E.icon, E[`icon__${i}`], E[`icon__${r}`], null == s ? void 0 : s.icon),
                            C = o()(E.glow, null == s ? void 0 : s.glow),
                            g = o()(E.caption, E[`caption__${i}`], null == s ? void 0 : s.caption),
                            h = o()(E.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            _(
                                {
                                    className: D,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(A),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(F),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && n().createElement('div', { className: E.shine }),
                            n().createElement('div', { className: B }, n().createElement('div', { className: C })),
                            n().createElement('div', { className: g }, e),
                            a && n().createElement('div', { className: h }, a),
                        );
                    }
                }
                A.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var m = t(67),
                    F = t(521),
                    d = t(364);
                const D = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function B(u = F.n.NONE, e = D, t = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== F.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (m.O.view.isEventHandled()) return;
                                (m.O.view.setEventHandled(), e(a), t && a.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                var C = t(282),
                    g = t(552);
                const h = 'vehicle',
                    p = 'tokenVehicle',
                    b = 200,
                    v = 400,
                    w = (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    S = [h];
                function x() {
                    return !1;
                }
                console.log;
                var f = t(915);
                function T(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const M = (u) => (0 === u ? window : window.subViews.get(u));
                let y, L, P, O, N, k, I, H, U;
                function G(u) {
                    var e;
                    return u && 'value' in u && null != (e = u.constructor) && e.name.includes('ArrayItem')
                        ? null == u
                            ? void 0
                            : u.value
                        : u;
                }
                function W(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                (!(function (u) {
                    ((u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Currency = 'currency'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.SelectableBonus = 'selectableBonus'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.CollectionItem = 'collectionItem'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.CosmicLootboxSilver = 'lootBoxToken'),
                        (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (u.Branch = 'branch'),
                        (u.VehicleSelect = 'vehicleSelect'),
                        (u.StyleProgress = 'styleProgress'),
                        (u.ParagonsUnlocks = 'paragonsUnlocks'),
                        (u.LootBoxToken = 'lootBoxToken'),
                        (u.PostStamp = 'giftsystem_5_stamp'),
                        (u.Quests = 'quests'),
                        (u.ArmoryCoin = 'armory_coin'),
                        (u.PremiumPlusUniversal = 'premium_plus_universal'),
                        (u.DogTagType = 'dogTagComponents'),
                        (u.GoldenTicket = 'goldenticket'),
                        (u.LbStyleProgress = 'lbStyleProgress'),
                        (u.RewardsSlots = 'rewardsSlots'));
                })(y || (y = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'));
                    })(L || (L = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48'));
                    })(P || (P = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(O || (O = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(N || (N = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(k || (k = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(I || (I = {})),
                    (function (u) {
                        ((u.Small = '400x300'), (u.Big = '600x450'));
                    })(H || (H = {})),
                    (function (u) {
                        u.ProgressionStyle = 'progressionStyle';
                    })(U || (U = {})));
                var $ = t(517);
                class X extends n().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? d.B3.GOLD : d.B3.INTEGRAL;
                        const e = d.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                X.defaultProps = { format: 'integral' };
                const V = [
                        y.Items,
                        y.Equipment,
                        y.Xp,
                        y.XpFactor,
                        y.Blueprints,
                        y.BlueprintsAny,
                        y.Goodies,
                        y.Berths,
                        y.Slots,
                        y.Tokens,
                        y.CrewSkins,
                        y.CrewBooks,
                        y.Customizations,
                        y.CreditsFactor,
                        y.TankmenXp,
                        y.TankmenXpFactor,
                        y.FreeXpFactor,
                        y.BattleToken,
                        y.PremiumUniversal,
                        y.NaturalCover,
                        y.BpCoin,
                        y.BattlePassSelectToken,
                        y.BattlaPassFinalAchievement,
                        y.BattleBadge,
                        y.BonusX5,
                        y.CrewBonusX3,
                        y.NewYearFillers,
                        y.NewYearInvoice,
                        y.EpicSelectToken,
                        y.Comp7TokenWeeklyReward,
                        y.Comp7TokenCouponReward,
                        y.BattleBoosterGift,
                        y.CosmicLootboxCommon,
                        y.CosmicLootboxSilver,
                        y.SelectableBonus,
                        y.PostStamp,
                        y.PremiumPlusUniversal,
                        y.GoldenTicket,
                        y.RewardsSlots,
                    ],
                    j = [y.Gold, y.Credits, y.Crystal, y.FreeXp],
                    q = [y.BattlePassPoints],
                    Y = [y.PremiumPlus, y.Premium];
                let z;
                !(function (u) {
                    ((u.s16 = '16'),
                        (u.s32 = '32'),
                        (u.s48 = '48'),
                        (u.s66 = '66'),
                        (u.s80 = '80'),
                        (u.s116 = '116'),
                        (u.s296 = '296'),
                        (u.s360 = '360'),
                        (u.s400 = '400'),
                        (u.s600 = '600'));
                })(z || (z = {}));
                const K = ['engravings', 'backgrounds'],
                    Q = ['engraving', 'background'],
                    Z = (u, e, t) => {
                        const a = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            a,
                            t,
                        );
                    },
                    J = (u, e, t) => {
                        const a = R.images.gui.maps.icons.quests.bonuses.$dyn(e),
                            n = a.$dyn(u);
                        return String(null != n ? n : a.$dyn(t));
                    },
                    uu = (u) => {
                        return {
                            name: u.name,
                            image: (e) =>
                                u.name === h
                                    ? ((u, e = P.Small) => {
                                          switch (e) {
                                              case P.Mini:
                                              case P.Small:
                                              case P.S48x48:
                                                  return 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                              case P.Big:
                                              case P.S80x80:
                                                  return 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                              case P.S128x100:
                                              case P.S180x135:
                                                  return `R.images.gui.maps.shop.vehicles.c_180x135.${u.icon}`;
                                              case P.S232x174:
                                              case P.S296x222:
                                                  return `R.images.gui.maps.shop.vehicles.c_360x270.${u.icon}`;
                                              case P.S400x300:
                                              case P.S600x450:
                                                  return `R.images.gui.maps.shop.vehicles.c_600x450.${u.icon}`;
                                              default:
                                                  return (
                                                      console.error('Unknown vehicle image size', e, u.icon),
                                                      'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                  );
                                          }
                                      })(u, e)
                                    : ((u, e = P.Small) => {
                                          const t = u.name,
                                              a = u.type,
                                              n = u.value,
                                              r = u.icon,
                                              i = u.item,
                                              s = u.dogTagType,
                                              o = ((u) => {
                                                  switch (u) {
                                                      case P.S600x450:
                                                          return 'c_600x450';
                                                      case P.S400x300:
                                                          return 'c_400x300';
                                                      case P.S296x222:
                                                          return 'c_296x222';
                                                      case P.S232x174:
                                                          return 'c_232x174';
                                                      case P.Big:
                                                          return 'c_80x80';
                                                      case P.Small:
                                                          return 'c_48x48';
                                                      default:
                                                          return u;
                                                  }
                                              })(e);
                                          switch (t) {
                                              case 'basic':
                                              case 'plus':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                                              case 'premium':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_plus_${n}`;
                                              case 'premium_plus':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                                              case 'items':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                                              case 'blueprints':
                                              case 'blueprintsAny':
                                              case 'finalBlueprints':
                                                  return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                                              case 'tokens':
                                              case 'battleToken':
                                                  return ((u, e) => {
                                                      switch (e) {
                                                          case P.Big:
                                                              return u.iconBig.replace('..', 'img://gui');
                                                          case P.Small:
                                                              return u.iconSmall.replace('..', 'img://gui');
                                                          default:
                                                              return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                                      }
                                                  })(u, e);
                                              case 'crewBooks':
                                                  return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                                              case 'dogTagComponents':
                                                  return ((u, e, t) => {
                                                      const a = K[u];
                                                      if (a) {
                                                          const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                                              r = n.$dyn(t);
                                                          return r ? `${r}` : `${n.$dyn(Q[u])}`;
                                                      }
                                                      return (
                                                          console.error(
                                                              'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                          ),
                                                          ''
                                                      );
                                                  })(s, e, r);
                                              case 'dossier_badge':
                                                  return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                                              case 'dossier_achievement':
                                                  return `R.images.gui.maps.icons.achievement.${((u) => {
                                                      switch (u) {
                                                          case P.S600x450:
                                                              return 'c_600x450';
                                                          case P.S400x300:
                                                              return 'c_400x300';
                                                          case P.S296x222:
                                                              return 'c_296x222';
                                                          case P.S232x174:
                                                              return 'c_232x174';
                                                          case P.S180x135:
                                                              return 'big';
                                                          case P.Big:
                                                          case P.S80x80:
                                                              return 'c_80x80';
                                                          case P.Small:
                                                          case P.S48x48:
                                                              return 'c_48x48';
                                                          default:
                                                              return u;
                                                      }
                                                  })(e)}.${r}`;
                                              case 'xp':
                                              case 'xpFactor':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                                              case 'creditsFactor':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                                              case 'tankmenXPFactor':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                                              case 'dailyXPFactor':
                                              case 'freeXPFactor':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                                              case 'tmanToken':
                                              case 'battlePassSelectToken':
                                              case 'selectableBonus':
                                              case 'groups':
                                              case 'lootBoxToken':
                                              case 'customizations':
                                              case 'crewSkins':
                                              case 'goodies':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                                              case 'premiumTank':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                                              case 'styleProgressToken':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                                              case 'collectionItem':
                                                  return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                                              case 'premium_universal':
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.premium_plus_universal`;
                                              case 'armory_coin':
                                                  return `R.images.armory_yard.gui.maps.icons.token.sf${((u) => {
                                                      switch (u) {
                                                          case P.Mini:
                                                              return z.s32;
                                                          case P.Small:
                                                          case P.S48x48:
                                                              return z.s48;
                                                          case P.S80x80:
                                                          case P.Big:
                                                              return z.s80;
                                                          case P.S128x100:
                                                              return z.s116;
                                                          case P.S180x135:
                                                          case P.S232x174:
                                                          case P.S296x222:
                                                              return z.s296;
                                                          case P.S400x300:
                                                              return z.s400;
                                                          case P.S600x450:
                                                              return z.s600;
                                                      }
                                                  })(e)}`;
                                              case y.StyleProgress:
                                              case y.LbStyleProgress:
                                                  return J(r, e, U.ProgressionStyle);
                                              default:
                                                  return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                                          }
                                      })(u, e),
                            value: u.value,
                            valueType:
                                ((e = u.name),
                                V.includes(e)
                                    ? O.MULTI
                                    : j.includes(e)
                                      ? O.CURRENCY
                                      : q.includes(e)
                                        ? O.NUMBER
                                        : Y.includes(e)
                                          ? O.PREMIUM_PLUS
                                          : O.STRING),
                            label: u.label,
                            tooltipArgs: Z({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                            vehicleName: u.label,
                            type: u.type,
                            tier: u.tier,
                            isPremium: u.isPremium,
                        };
                        var e;
                    },
                    eu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: i, mocks: s }) {
                                const o = (0, a.useRef)([]),
                                    l = (u, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = M,
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
                                                            o = m.O.view.addModelObserver(s, e, !0);
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
                                                                                    return T(u, e);
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
                                                                                          ? T(u, e)
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
                                            l = (u) => o.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = {
                                                        root: u.object(),
                                                        mainRewards: u.array('mainRewards'),
                                                        rewards: u.array('rewards'),
                                                    },
                                                    t = (0, $.computedFn)(() => W(e.mainRewards.get(), (u) => uu(u)), {
                                                        equals: x,
                                                    }),
                                                    a = (0, $.computedFn)(() => W(e.rewards.get(), (u) => uu(u)), {
                                                        equals: x,
                                                    }),
                                                    n = (0, $.computedFn)(() => t().some((u) => S.includes(u.name)), {
                                                        equals: x,
                                                    }),
                                                    r = (0, $.computedFn)(() => Boolean(t().length), { equals: x }),
                                                    i = (0, $.computedFn)(() => Boolean(a().length), { equals: x }),
                                                    s = (0, $.computedFn)(() => i() && !r(), { equals: x }),
                                                    o = (0, $.computedFn)(() => (s() ? 0 : b * t().length + v), {
                                                        equals: x,
                                                    }),
                                                    l = (0, $.computedFn)(() => Math.min(a().length, 10), {
                                                        equals: x,
                                                    }),
                                                    E = (0, $.computedFn)(
                                                        () => {
                                                            const u = l() > 0 ? v : 0;
                                                            return o() + b * l() + u;
                                                        },
                                                        { equals: x },
                                                    ),
                                                    c = (0, $.computedFn)(
                                                        () => W(e.mainRewards.get(), (u) => uu(u))[0],
                                                        { equals: x },
                                                    ),
                                                    _ = (0, $.computedFn)(() =>
                                                        (function (u, e) {
                                                            for (let t = 0; t < u.length; t++) {
                                                                const a = G(u[t]);
                                                                if (e(a, t, u)) return a;
                                                            }
                                                        })(e.mainRewards.get(), (u) => u.name === p),
                                                    ),
                                                    A = (0, $.computedFn)(() => t().some((u) => u.name === h), {
                                                        equals: x,
                                                    }),
                                                    m = (0, $.computedFn)(() => Boolean(t().length % 2), { equals: x });
                                                return Object.assign({}, e, {
                                                    computes: {
                                                        getMainRewards: t,
                                                        getRegularRewards: a,
                                                        hasGoldMainRewards: n,
                                                        getRewardsShowDelay: o,
                                                        getFooterShowDelay: E,
                                                        hasRegularRewards: i,
                                                        getToken: c,
                                                        hasToken: _,
                                                        hasVehicles: A,
                                                        isCountMainRewardsOdd: m,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = f.observable.box(a, { equals: x });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, f.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = f.observable.box(a, { equals: x });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, f.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = f.observable.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, f.action)((u) => {
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
                                                                    (u, [e, t]) => (
                                                                        (u[t] = f.observable.box(a[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, f.action)((u) => {
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
                                                cleanup: l,
                                            }),
                                            c = { mode: u, model: E, externalModel: i, cleanup: l };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && a ? a.controls(c) : e(c),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    c = (0, a.useState)(u),
                                    _ = c[0],
                                    A = c[1],
                                    F = (0, a.useState)(() => l(u, r, s)),
                                    d = F[0],
                                    D = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(l(_, r, s)) : (E.current = !0);
                                    }, [s, _, r]),
                                    (0, a.useEffect)(() => {
                                        A(u);
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
                    })(0, ({ externalModel: u }) => ({
                        close: u.createCallbackNoArgs('onClose'),
                        toRewardsSelection: u.createCallbackNoArgs('goToRewardsSelection'),
                        toNextTask: u.createCallbackNoArgs('goToNextTask'),
                        toHangarPreview: u.createCallbackNoArgs('goToHangarPreview'),
                    })),
                    tu = eu[0],
                    au = eu[1],
                    nu = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    ru = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var iu;
                function su(u, e, t) {
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
                })(iu || (iu = {}));
                const ou = m.O.client.getSize('rem'),
                    lu = ou.width,
                    Eu = ou.height,
                    cu = Object.assign({ width: lu, height: Eu }, su(lu, Eu, ru)),
                    _u = (0, a.createContext)(cu),
                    Au = ['children'],
                    mu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Au);
                        const n = (0, a.useContext)(_u),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            o = n.small,
                            l = n.extraSmall,
                            E = n.extraLargeWidth,
                            c = n.largeWidth,
                            _ = n.mediumWidth,
                            A = n.smallWidth,
                            m = n.extraSmallWidth,
                            F = n.extraLargeHeight,
                            d = n.largeHeight,
                            D = n.mediumHeight,
                            B = n.smallHeight,
                            C = n.extraSmallHeight,
                            g = { extraLarge: F, large: d, medium: D, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && o) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && E) return nu(e, t, g);
                            if (t.largeWidth && c) return nu(e, t, g);
                            if (t.mediumWidth && _) return nu(e, t, g);
                            if (t.smallWidth && A) return nu(e, t, g);
                            if (t.extraSmallWidth && m) return nu(e, t, g);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && F) return e;
                                if (t.largeHeight && d) return e;
                                if (t.mediumHeight && D) return e;
                                if (t.smallHeight && B) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                ((mu.defaultProps = {
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
                    (0, a.memo)(mu));
                const Fu = (0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(_u),
                        t = (0, a.useState)(e),
                        r = t[0],
                        i = t[1],
                        s = (0, a.useCallback)((u, e) => {
                            const t = m.O.view.pxToRem(u),
                                a = m.O.view.pxToRem(e);
                            i(Object.assign({ width: t, height: a }, su(t, a, ru)));
                        }, []);
                    (((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const o = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(_u.Provider, { value: o }, u);
                });
                let du, Du, Bu;
                (!(function (u) {
                    ((u[(u.ExtraSmall = ru.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = ru.small.width)] = 'Small'),
                        (u[(u.Medium = ru.medium.width)] = 'Medium'),
                        (u[(u.Large = ru.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = ru.extraLarge.width)] = 'ExtraLarge'));
                })(du || (du = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = ru.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = ru.small.width)] = 'Small'),
                            (u[(u.Medium = ru.medium.width)] = 'Medium'),
                            (u[(u.Large = ru.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = ru.extraLarge.width)] = 'ExtraLarge'));
                    })(Du || (Du = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = ru.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = ru.small.height)] = 'Small'),
                            (u[(u.Medium = ru.medium.height)] = 'Medium'),
                            (u[(u.Large = ru.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = ru.extraLarge.height)] = 'ExtraLarge'));
                    })(Bu || (Bu = {})));
                const Cu = () => {
                        const u = (0, a.useContext)(_u),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return du.ExtraLarge;
                                    case u.large:
                                        return du.Large;
                                    case u.medium:
                                        return du.Medium;
                                    case u.small:
                                        return du.Small;
                                    case u.extraSmall:
                                        return du.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), du.ExtraSmall);
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return Du.ExtraLarge;
                                    case u.largeWidth:
                                        return Du.Large;
                                    case u.mediumWidth:
                                        return Du.Medium;
                                    case u.smallWidth:
                                        return Du.Small;
                                    case u.extraSmallWidth:
                                        return Du.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Du.ExtraSmall);
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return Bu.ExtraLarge;
                                    case u.largeHeight:
                                        return Bu.Large;
                                    case u.mediumHeight:
                                        return Bu.Medium;
                                    case u.smallHeight:
                                        return Bu.Small;
                                    case u.extraSmallHeight:
                                        return Bu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Bu.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
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
                function hu(u) {
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
                const pu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    bu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            _ = void 0 !== c && c,
                            A = u.decoratorId,
                            m = void 0 === A ? 0 : A,
                            F = u.isEnabled,
                            d = void 0 === F || F,
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
                            })(u, gu);
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
                            v = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (pu(t, m, { isMouseEvent: !0, on: !0, arguments: hu(n) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, n, b, C]),
                            w = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        pu(t, m, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            S = (0, a.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', S, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === d && w();
                            }, [d, w]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
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
                                                          ((p.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                          r && r(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (w(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === _ && w(), null == o || o(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === _ && w(), null == s || s(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var x;
                    },
                    vu = ['children'];
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
                const Su = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, vu);
                        return n().createElement(
                            bu,
                            wu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    xu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const Ru = R.views.common.tooltip_window.simple_tooltip_content,
                    Tu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            s = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, xu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            bu,
                            fu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Ru.SimpleTooltipHtmlContent('resId') : Ru.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const yu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(Tu, e, a);
                        const r = e.contentId,
                            i = e.args,
                            s = null == i ? void 0 : i.contentId;
                        return r || s
                            ? n().createElement(bu, Mu({}, e, { contentId: r || s }), a)
                            : n().createElement(Su, e, a);
                    },
                    Lu = {
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
                    Pu = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = P.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const m = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case N.BATTLE_BOOSTER:
                                    case N.BATTLE_BOOSTER_REPLACE:
                                        return k.BATTLE_BOOSTER;
                                }
                            })(r),
                            F = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case N.BATTLE_BOOSTER:
                                        return I.BATTLE_BOOSTER;
                                    case N.BATTLE_BOOSTER_REPLACE:
                                        return I.BATTLE_BOOSTER_REPLACE;
                                    case N.BUILT_IN_EQUIPMENT:
                                        return I.BUILT_IN_EQUIPMENT;
                                    case N.EQUIPMENT_PLUS:
                                        return I.EQUIPMENT_PLUS;
                                    case N.EQUIPMENT_TROPHY_BASIC:
                                        return I.EQUIPMENT_TROPHY_BASIC;
                                    case N.EQUIPMENT_TROPHY_UPGRADED:
                                        return I.EQUIPMENT_TROPHY_UPGRADED;
                                    case N.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return I.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case N.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return I.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case N.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return I.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case N.PROGRESSION_STYLE_UPGRADED_1:
                                        return I.PROGRESSION_STYLE_UPGRADED_1;
                                    case N.PROGRESSION_STYLE_UPGRADED_2:
                                        return I.PROGRESSION_STYLE_UPGRADED_2;
                                    case N.PROGRESSION_STYLE_UPGRADED_3:
                                        return I.PROGRESSION_STYLE_UPGRADED_3;
                                    case N.PROGRESSION_STYLE_UPGRADED_4:
                                        return I.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            d = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case O.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case O.CURRENCY:
                                    case O.NUMBER:
                                        return n().createElement(X, { format: 'integral', value: Number(u) });
                                    case O.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(i, s);
                        return n().createElement(
                            'div',
                            { className: o()(Lu.base, Lu[`base__${a}`], E), style: l },
                            n().createElement(
                                yu,
                                { tooltipArgs: _, className: Lu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: o()(Lu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            n().createElement('div', {
                                                className: o()(Lu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            n().createElement('div', {
                                                className: o()(Lu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        F &&
                                            n().createElement('div', {
                                                className: o()(Lu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: o()(
                                                    Lu.info,
                                                    Lu[`info__${u}`],
                                                    s === O.MULTI && Lu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    yu,
                                    { tooltipArgs: A },
                                    n().createElement('div', {
                                        className: o()(Lu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ou = ({ index: u = 0, delay: e = 0, children: t }) => {
                        const a = (0, g.useSpring)({
                            from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                            to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                            delay: e + 900 + b * u,
                            config: { duration: v, easing: w },
                            onStart: () => {
                                l(R.sounds.gui_random_reward_appear());
                            },
                        });
                        return n().createElement(g.animated.div, { style: a }, t);
                    };
                var Nu = t(887),
                    ku = t.n(Nu);
                const Iu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Hu = (u) => u.includes('_') && ((u) => Iu.includes(u))(u.split('_').at(-1)),
                    Uu = [du.ExtraLarge, du.Large, du.Medium, du.Small, du.ExtraSmall],
                    Gu = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (Hu(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = Uu.indexOf(e),
                                    i = (-1 !== r ? Iu.slice(r) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    s = i ? u[i] : void 0;
                                return ((t[n] = void 0 !== s ? s : u[n]), t);
                            }
                            const n = u[a];
                            return (
                                void 0 === n ||
                                    ((u, e) => Iu.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    Wu = (u, e = Gu) => {
                        const t = (
                            (u, e = Gu) =>
                            (t) => {
                                const r = Cu().mediaSize,
                                    i = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return n().createElement(u, i);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => Hu(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    $u = {
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
                    Xu = [
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
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                Object.keys(ku());
                const ju = {
                        XL: { mt: $u.mt__XL, mr: $u.mr__XL, mb: $u.mb__XL, ml: $u.ml__XL },
                        LG: { mt: $u.mt__LG, mr: $u.mr__LG, mb: $u.mb__LG, ml: $u.ml__LG },
                        MDp: { mt: $u.mt__MDp, mr: $u.mr__MDp, mb: $u.mb__MDp, ml: $u.ml__MDp },
                        MD: { mt: $u.mt__MD, mr: $u.mr__MD, mb: $u.mb__MD, ml: $u.ml__MD },
                        SMp: { mt: $u.mt__SMp, mr: $u.mr__SMp, mb: $u.mb__SMp, ml: $u.ml__SMp },
                        SM: { mt: $u.mt__SM, mr: $u.mr__SM, mb: $u.mb__SM, ml: $u.ml__SM },
                        XS: { mt: $u.mt__XS, mr: $u.mr__XS, mb: $u.mb__XS, ml: $u.ml__XS },
                    },
                    qu = (Object.keys(ju), ['mt', 'mr', 'mb', 'ml']),
                    Yu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    zu = Wu((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            i = u.m,
                            s = u.mt,
                            l = void 0 === s ? i : s,
                            E = u.mr,
                            c = void 0 === E ? i : E,
                            _ = u.mb,
                            A = void 0 === _ ? i : _,
                            m = u.ml,
                            F = void 0 === m ? i : m,
                            d = u.column,
                            D = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (d ? 'column' : D && 'row') || void 0 : B,
                            g = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            b = u.spaceBetween,
                            v = u.spaceAround,
                            w = u.justifyContent,
                            S =
                                void 0 === w
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            x = u.alignItems,
                            f = void 0 === x ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : x,
                            R = u.alignSelf,
                            T = u.wrap,
                            M = u.flexWrap,
                            y = void 0 === M ? (T ? 'wrap' : void 0) : M,
                            L = u.grow,
                            P = u.shrink,
                            O = u.flex,
                            N = void 0 === O ? (L || P ? `${L ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : O,
                            k = u.style,
                            I = u.children,
                            H = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Xu);
                        const U = (0, a.useMemo)(() => {
                                const u = { mt: l, mr: c, mb: A, ml: F },
                                    e = ((u) =>
                                        qu.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(ju[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        qu.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[Yu[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, k, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: R,
                                        display: C || f ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: y,
                                        justifyContent: S,
                                        alignItems: f,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, l, c, A, F, k, N, R, C, y, S, f]),
                            G = U.computedStyle,
                            W = U.computedClassNames;
                        return n().createElement('div', Vu({ className: o()($u.base, ...W, e), style: G }, H), I);
                    });
                let Ku;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Ku || (Ku = {}));
                const Qu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Zu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Ju = (u, e, t = Ku.left) => u.split(e).reduce(t === Ku.left ? Qu : Zu, []),
                    ue = (() => {
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
                    ee = ['zh_cn', 'zh_sg', 'zh_tw'],
                    te = ({ binding: u, text: e = '', classMix: t, alignment: r = Ku.left }) =>
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
                                                      : ((u, e = Ku.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ee.includes(t)
                                                                ? ue(u)
                                                                : ((u, e = Ku.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ju(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Ju(u, a, Ku.left))),
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
                var ae = t(532),
                    ne = t.n(ae);
                const re = {
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
                    ie = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
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
                Object.keys(ku());
                const oe = Object.keys(ne()),
                    le = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ee = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ce = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    _e =
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
                            'heading-H56': le,
                            'heading-H36': le,
                            'heading-H28': Ee,
                            'heading-H24': Ee,
                            'heading-H24R': Ee,
                            'heading-H22': Ee,
                            'heading-H20R': Ee,
                            'heading-H18': Ee,
                            'heading-H15': ce,
                            'heading-H14': ce,
                            'paragraph-P24': Ee,
                            'paragraph-P18': Ee,
                            'paragraph-P16': Ee,
                            'paragraph-P14': ce,
                            'paragraph-P12': ce,
                            'paragraph-P10': ce,
                        }),
                    Ae =
                        (Object.keys(_e),
                        (u) =>
                            u
                                ? ((u) => oe.includes(u))(u)
                                    ? { colorClassName: re[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    me = Wu((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            i = u.color,
                            s = u.m,
                            l = u.mt,
                            E = void 0 === l ? s : l,
                            c = u.mr,
                            _ = void 0 === c ? s : c,
                            A = u.mb,
                            m = void 0 === A ? s : A,
                            F = u.ml,
                            d = void 0 === F ? s : F,
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
                            })(u, ie);
                        const g = (0, a.useMemo)(() => {
                                const u = Ae(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, a), colorClassName: e };
                            }, [D, i]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return n().createElement(
                            zu,
                            se(
                                {
                                    className: o()(re.base, t && re[t], p, r),
                                    style: h,
                                    mt: !0 === E ? _e[t || 'paragraph-P16'].mt : E,
                                    mr: !0 === _ ? _e[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? _e[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === d ? _e[t || 'paragraph-P16'].ml : d,
                                },
                                C,
                            ),
                            void 0 !== B ? n().createElement(te, se({}, B, { text: e })) : e,
                        );
                    }),
                    Fe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    de = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function De(u) {
                    let e = '';
                    for (let t = de.length - 1; t >= 0; t--) for (; u >= de[t];) ((e += Fe[t]), (u -= de[t]));
                    return e;
                }
                const Be = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ce = {
                        base: 'VehicleName_base_58',
                        base__white: 'VehicleName_base__white_d2',
                        base__whiteOrange: 'VehicleName_base__whiteOrange_f2',
                        nation: 'VehicleName_nation_45',
                        nation__china: 'VehicleName_nation__china_28',
                        nation__czech: 'VehicleName_nation__czech_59',
                        nation__france: 'VehicleName_nation__france_65',
                        nation__germany: 'VehicleName_nation__germany_3d',
                        nation__italy: 'VehicleName_nation__italy_f0',
                        nation__japan: 'VehicleName_nation__japan_b6',
                        nation__poland: 'VehicleName_nation__poland_0d',
                        nation__sweden: 'VehicleName_nation__sweden_ab',
                        nation__uk: 'VehicleName_nation__uk_18',
                        nation__usa: 'VehicleName_nation__usa_7d',
                        nation__ussr: 'VehicleName_nation__ussr_76',
                        nation__intunion: 'VehicleName_nation__intunion_cb',
                        level: 'VehicleName_level_33',
                        base__colored: 'VehicleName_base__colored_00',
                        type: 'VehicleName_type_60',
                        type__AT_SPG: 'VehicleName_type__AT_SPG_43',
                        type__elite: 'VehicleName_type__elite_ab',
                        type__heavyTank: 'VehicleName_type__heavyTank_11',
                        type__lightTank: 'VehicleName_type__lightTank_87',
                        type__mediumTank: 'VehicleName_type__mediumTank_d2',
                        type__SPG: 'VehicleName_type__SPG_fd',
                        base__medium: 'VehicleName_base__medium_a4',
                        name: 'VehicleName_name_09',
                    };
                let ge, he;
                (!(function (u) {
                    ((u.Small = 'small'), (u.Medium = 'medium'));
                })(ge || (ge = {})),
                    (function (u) {
                        ((u.Colored = 'colored'), (u.White = 'white'), (u.WhiteOrange = 'whiteOrange'));
                    })(he || (he = {})));
                const pe = (0, a.memo)(
                    ({
                        isElite: u = !0,
                        vehicleName: e,
                        vehicleShortName: t = e,
                        vehicleType: a,
                        vehicleLvl: r,
                        size: i = ge.Small,
                        type: s = he.WhiteOrange,
                        classNames: l,
                    }) => {
                        const E = o()(Ce.base, Ce[`base__${i}`], Ce[`base__${s}`], l),
                            c = o()(Ce.type, u && Ce.type__elite, Ce[`type__${((_ = a || ''), _.replace(/-/g, '_'))}`]);
                        var _, A;
                        return n().createElement(
                            'div',
                            { className: E },
                            n().createElement(me, { className: Ce.level, text: ((A = r), Be ? `${A}` : De(A)) }),
                            n().createElement('div', { className: c }),
                            n().createElement(me, { className: Ce.name, text: t }),
                        );
                    },
                );
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const ve = ({ reward: u, index: e, size: t }) => {
                        const r = u.image(t),
                            i = (0, a.useState)(!0),
                            s = i[0],
                            l = i[1],
                            E = Object.assign({}, u.tooltipArgs, { ignoreShowDelay: !0 }),
                            c = o()('MainReward_base_2e', s && 'MainReward_base__disabled_07'),
                            _ =
                                (u.name === h &&
                                    n().createElement(pe, {
                                        isElite: u.isPremium,
                                        vehicleName: u.vehicleName,
                                        vehicleType: u.type,
                                        vehicleLvl: u.tier,
                                        classNames: 'MainReward_vehicleNameLabel_a9',
                                    })) ||
                                n().createElement(me, { text: u.label, className: 'MainReward_labelText_42' });
                        return (
                            (0, a.useEffect)(
                                () =>
                                    ((u, e) => {
                                        let t;
                                        const a = setTimeout(() => {
                                            t = void l(!1);
                                        }, e);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(a));
                                        };
                                    })(0, 900 + b * e - 200),
                                [e],
                            ),
                            n().createElement(
                                'div',
                                { className: c },
                                n().createElement(
                                    Ou,
                                    { index: e },
                                    n().createElement(
                                        Pu,
                                        be({}, u, {
                                            image: r,
                                            size: t,
                                            classNames: { info: 'MainReward_info_19' },
                                            tooltipArgs: E,
                                            value: u.value,
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'MainReward_labelCont_18' },
                                        n().createElement('div', { className: 'MainReward_label_8c' }, _),
                                    ),
                                ),
                            )
                        );
                    },
                    we = 'RewardList_reward_4a',
                    Se = 'RewardList_rewardInfo_f4';
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const fe = ({ data: u, maxRewards: e, showDelay: t }) => {
                        const a = Cu().mediaSize < du.Medium ? P.Small : P.Big,
                            r = e < u.length,
                            i = r ? u.slice(0, e) : u,
                            s = `R.images.gui.maps.icons.quests.bonuses.${a}.default`,
                            o =
                                ((l = R.strings.tooltips.quests.awards.additional.bottom()),
                                (E = { count: u.length - e }),
                                l.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                    const e = 0 === u.indexOf('%') ? 2 : 1;
                                    return String(E[u.slice(e, -e)]);
                                }));
                        var l, E;
                        const c = Z({}, R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'));
                        return n().createElement(
                            'div',
                            { className: 'RewardList_base_b1' },
                            i.map((u, e) =>
                                n().createElement(
                                    Ou,
                                    { key: e, index: e, delay: t },
                                    n().createElement(
                                        Pu,
                                        xe({}, u, {
                                            image: u.image(a),
                                            size: a,
                                            className: we,
                                            classNames: { info: Se },
                                        }),
                                    ),
                                ),
                            ),
                            r &&
                                n().createElement(
                                    Ou,
                                    { index: e, delay: t },
                                    n().createElement(Pu, {
                                        name: 'more',
                                        image: s,
                                        size: a,
                                        value: o,
                                        tooltipArgs: c,
                                        className: we,
                                        classNames: { info: Se },
                                    }),
                                ),
                        );
                    },
                    Re = {
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
                let Te, Me;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Te || (Te = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(Me || (Me = {})));
                const ye = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: E,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: A,
                    onMouseDown: m,
                    onMouseUp: F,
                    onMouseLeave: d,
                    onClick: D,
                }) => {
                    const B = (0, a.useRef)(null),
                        C = (0, a.useState)(t),
                        g = C[0],
                        h = C[1],
                        p = (0, a.useState)(!1),
                        b = p[0],
                        v = p[1],
                        w = (0, a.useState)(!1),
                        S = w[0],
                        x = w[1],
                        f = (0, a.useCallback)(() => {
                            i || (B.current && (B.current.focus(), h(!0)));
                        }, [i]),
                        T = (0, a.useCallback)(
                            (u) => {
                                g && null !== B.current && !B.current.contains(u.target) && h(!1);
                            },
                            [g],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                i || (D && D(u));
                            },
                            [i, D],
                        ),
                        y = (0, a.useCallback)(
                            (u) => {
                                i || (null !== E && l(E), _ && _(u), x(!0));
                            },
                            [i, E, _],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        P = (0, a.useCallback)(
                            (u) => {
                                i || (F && F(u), v(!1));
                            },
                            [i, F],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                i || (null !== c && l(c), m && m(u), t && f(), v(!0));
                            },
                            [i, c, m, f, t],
                        ),
                        N = (0, a.useCallback)(
                            (u) => {
                                i || (d && d(u), v(!1));
                            },
                            [i, d],
                        ),
                        k = o()(
                            Re.base,
                            Re[`base__${r}`],
                            {
                                [Re.base__disabled]: i,
                                [Re[`base__${e}`]]: e,
                                [Re.base__focus]: g,
                                [Re.base__highlightActive]: b,
                                [Re.base__firstHover]: S,
                            },
                            s,
                        ),
                        I = o()(Re.state, Re.state__default);
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
                            h(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: B,
                                className: k,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: P,
                                onMouseDown: O,
                                onMouseLeave: N,
                                onClick: M,
                            },
                            r !== Te.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Re.back }),
                                    n().createElement('span', { className: Re.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: I },
                                n().createElement('span', { className: Re.stateDisabled }),
                                n().createElement('span', { className: Re.stateHighlightHover }),
                                n().createElement('span', { className: Re.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Re.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                ye.defaultProps = { type: Te.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Le = (0, a.memo)(ye),
                    Pe = R.strings.tank_academy.rewardsView.selectVehicleWidget,
                    Oe = (0, C.observer)(() => {
                        const u = au(),
                            e = u.model,
                            t = u.controls,
                            a = e.computes.getToken(),
                            r = De(Number(a.tier)),
                            i = a.name === p && a.isPremium ? Pe.subtitlePrem() : Pe.subtitle();
                        return n().createElement(
                            'div',
                            { className: 'SelectVehicleWidget_base_02' },
                            n().createElement(me, {
                                text: Pe.title(),
                                className: 'SelectVehicleWidget_title_40',
                                format: { binding: { level: r } },
                            }),
                            n().createElement(me, {
                                text: i,
                                className: 'SelectVehicleWidget_subTitle_d3',
                                format: { binding: { level: r } },
                            }),
                            n().createElement(
                                Le,
                                { type: 'main', mixClass: 'SelectVehicleWidget_button_2e' },
                                n().createElement(me, { text: Pe.button(), onClick: t.toRewardsSelection }),
                            ),
                        );
                    }),
                    Ne = (0, C.observer)(() => {
                        const u = au().model,
                            e = Cu().mediaSize,
                            t = u.computes.getToken(),
                            r = t.isPremium,
                            i = (0, a.useMemo)(() => {
                                const u = (u) =>
                                    `url(R.images.tank_academy.gui.maps.icons.vehicles.${u}.tank${r ? '_prem' : ''})`;
                                return e >= du.Large
                                    ? u('c_600x450')
                                    : e >= du.Medium
                                      ? u('c_400x300')
                                      : u('c_296x222');
                            }, [e, r]),
                            s = (0, a.useMemo)(() => {
                                const u = (u) =>
                                    `url(R.images.tank_academy.gui.maps.icons.levels.${u}.tier_${t.tier}${r ? '_prem' : ''})`;
                                return e >= du.Large
                                    ? u('c_600x450')
                                    : e >= du.Medium
                                      ? u('c_400x300')
                                      : u('c_296x222');
                            }, [e, t, r]);
                        return n().createElement(
                            'div',
                            { className: 'TokenReward_base_bf' },
                            n().createElement('div', {
                                className: 'TokenReward_image_4f',
                                style: { backgroundImage: i },
                            }),
                            n().createElement('div', {
                                className: 'TokenReward_level_d5',
                                style: { backgroundImage: s },
                            }),
                        );
                    });
                function ke(u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (a) => {
                        const n = a % t,
                            r = (n % e.columns) * u.width,
                            i = Math.trunc(n / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(a / t)), x: r, y: i };
                    };
                }
                const Ie = [
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
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ue = (0, a.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            r = u.getImageSource,
                            i = u.frameCount,
                            s = u.onAnimate,
                            o = u.frameTime,
                            l = void 0 === o ? 33 : o,
                            E = u.initialFrameIndex,
                            c = void 0 === E ? 0 : E,
                            _ = u.lastFrameIndex,
                            A = void 0 === _ ? i - 1 : _,
                            m = u.loop,
                            F = void 0 === m || m,
                            d = u.state,
                            D = void 0 === d ? 'play' : d,
                            B = u.onAnimationDone,
                            C = u.onAnimationComplete,
                            g = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Ie);
                        const p = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        (e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const u = $e(c, A, r),
                                                e = Ge(c, A),
                                                a = window.setInterval(() => {
                                                    const n = e(),
                                                        r = u.get(n);
                                                    r
                                                        ? (null == s || s(n, r),
                                                          t(r),
                                                          n === A &&
                                                              (null == C || C(),
                                                              F || (null == B || B(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === c && g ? { path: g, x: 0, y: 0 } : r(c),
                                                e = new Image();
                                            e.src = u.path;
                                            const a = () => t(We(u, e));
                                            return (
                                                e.addEventListener('load', a),
                                                () => e.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, c, A, F, s, C, B, g, D]),
                            n().createElement('canvas', He({}, h, { width: e, height: t, ref: p }))
                        );
                    }),
                    Ge = (u, e) => {
                        let t = u;
                        return () => {
                            const a = t;
                            return ((t += 1), t > e && (t = u), a);
                        };
                    },
                    We = (u, e) => Object.assign({}, u, { img: e }),
                    $e = (u, e, t) => {
                        const a = new Map(),
                            n = {};
                        for (let r = u; r <= e; r++) {
                            const u = t(r),
                                e = n[u.path];
                            if (e) a.set(r, We(u, e));
                            else {
                                const e = new Image();
                                ((n[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    a.set(r, We(u, e)));
                            }
                        }
                        return a;
                    },
                    Xe = {
                        width: 200,
                        height: 200,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.tank_academy.gui.maps.icons.rewardsView.sprite_',
                            (u) => `R.images.tank_academy.gui.maps.icons.rewardsView.sprite_${u}`),
                    };
                const Ve = {
                        1: {
                            [du.ExtraSmall]: [P.S296x222],
                            [du.Small]: [P.S400x300],
                            [du.Medium]: [P.S400x300],
                            [du.Large]: [P.S600x450],
                            [du.ExtraLarge]: [P.S600x450],
                        },
                        2: {
                            [du.ExtraSmall]: [P.S296x222, P.S296x222],
                            [du.Small]: [P.S296x222, P.S296x222],
                            [du.Medium]: [P.S400x300, P.S400x300],
                            [du.Large]: [P.S400x300, P.S400x300],
                            [du.ExtraLarge]: [P.S600x450, P.S600x450],
                        },
                        3: {
                            [du.ExtraSmall]: [P.S232x174, P.S296x222, P.S232x174],
                            [du.Small]: [P.S232x174, P.S296x222, P.S232x174],
                            [du.Medium]: [P.S296x222, P.S400x300, P.S296x222],
                            [du.Large]: [P.S296x222, P.S400x300, P.S296x222],
                            [du.ExtraLarge]: [P.S400x300, P.S600x450, P.S400x300],
                        },
                    },
                    je = (0, C.observer)(() => {
                        const u = Cu().mediaSize,
                            e = au().model,
                            t = e.computes.getMainRewards(),
                            a = e.computes.getRegularRewards(),
                            r = e.computes.hasRegularRewards(),
                            i = e.computes.hasToken(),
                            s = e.computes.hasVehicles(),
                            l = e.computes.getRewardsShowDelay(),
                            E = e.computes.hasGoldMainRewards(),
                            c = e.computes.isCountMainRewardsOdd(),
                            _ = o()(
                                'Content_ribbon_f1',
                                E && 'Content_ribbon__gold_75',
                                i && 'Content_ribbon__withToken_7d',
                            ),
                            A = o()('Content_light_68', i && 'Content_light__withToken_95'),
                            m = o()('Content_mainRewards_23', i && 'Content_mainRewards__withToken_d2'),
                            F = o()('Content_regularRewards_19', i && 'Content_regularRewards__withToken_c6');
                        return n().createElement(
                            'div',
                            { className: 'Content_base_e1' },
                            c &&
                                s &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_sunShine_4f' },
                                    n().createElement(Ue, {
                                        width: Xe.width,
                                        height: Xe.height,
                                        frameCount: Xe.frameCount,
                                        getImageSource: ke(Xe),
                                        frameTime: 50,
                                        className: 'Content_sunShineCanvas_4f',
                                    }),
                                ),
                            n().createElement('div', { className: _ }),
                            n().createElement('div', { className: A }),
                            n().createElement('div', { className: 'Content_radianLines_4f' }),
                            n().createElement(
                                'div',
                                { className: m },
                                i
                                    ? n().createElement(Ou, null, n().createElement(Ne, null))
                                    : n().createElement(
                                          n().Fragment,
                                          null,
                                          t.map((e, a) =>
                                              n().createElement(ve, {
                                                  key: a,
                                                  reward: e,
                                                  index: a,
                                                  size: Ve[t.length][u][a],
                                              }),
                                          ),
                                      ),
                            ),
                            i &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_selectVehicleWidget_c0' },
                                    n().createElement(Ou, null, n().createElement(Oe, null)),
                                ),
                            r &&
                                n().createElement(
                                    'div',
                                    { className: F },
                                    n().createElement(fe, { data: a, maxRewards: 10, showDelay: l }),
                                ),
                        );
                    }),
                    qe = 'Footer_button_07',
                    Ye = 'Footer_button__secondary_1a';
                let ze;
                !(function (u) {
                    ((u[(u.Regular = 0)] = 'Regular'),
                        (u[(u.RewardScreenChain = 1)] = 'RewardScreenChain'),
                        (u[(u.EndRewardScreenChain = 2)] = 'EndRewardScreenChain'),
                        (u[(u.First = 3)] = 'First'),
                        (u[(u.Final = 4)] = 'Final'));
                })(ze || (ze = {}));
                const Ke = R.strings.tank_academy.rewardsView.button,
                    Qe = (0, C.observer)(() => {
                        const u = au(),
                            e = u.controls,
                            t = u.model,
                            a = t.root.get().state,
                            r = t.computes.hasToken(),
                            i = t.computes.hasVehicles(),
                            s = t.computes.getMainRewards(),
                            l = a === ze.First,
                            E = a === ze.Regular,
                            c = a === ze.Final,
                            _ = a === ze.RewardScreenChain,
                            A = i && 1 === s.length,
                            m = s.length > 1,
                            F = !r && !A && (l || E || c),
                            d = !l && (r || _ || E || c || A || m);
                        return n().createElement(
                            'div',
                            { className: 'Footer_base_fc' },
                            n().createElement(
                                'div',
                                { className: 'Footer_buttons_ab' },
                                F &&
                                    n().createElement(
                                        Le,
                                        { mixClass: qe, type: Te.primary, size: Me.medium, onClick: e.toNextTask },
                                        n().createElement(me, { text: l ? Ke.viewAcademy() : Ke.nextTask() }),
                                    ),
                                d &&
                                    n().createElement(
                                        Le,
                                        {
                                            mixClass: o()(qe, Ye),
                                            type: F ? Te.secondary : Te.primary,
                                            size: Me.medium,
                                            onClick: e.close,
                                        },
                                        n().createElement(me, { text: Ke.accept() }),
                                    ),
                                A &&
                                    n().createElement(
                                        Le,
                                        {
                                            mixClass: o()(qe, Ye),
                                            type: Te.secondary,
                                            size: Me.medium,
                                            onClick: e.toHangarPreview,
                                        },
                                        n().createElement(me, { text: Ke.viewHangar() }),
                                    ),
                            ),
                        );
                    }),
                    Ze = 'Header_subTitle_15',
                    Je = R.strings.tank_academy.rewardsView.header,
                    ut = (0, C.observer)(() => {
                        const u = au().model,
                            e = u.root.get(),
                            t = e.stage,
                            a = e.state,
                            r = u.computes.hasVehicles(),
                            i = a === ze.Final ? Je.finalSubtitle() : Je.subtitle();
                        return n().createElement(
                            'div',
                            { className: 'Header_base_c7' },
                            n().createElement(me, { className: 'Header_title_db', text: Je.title() }),
                            r
                                ? n().createElement(me, { className: Ze, text: Je.vehicleSubtitle() })
                                : n().createElement(me, { className: Ze, text: i, format: { binding: { stage: t } } }),
                            a === ze.EndRewardScreenChain &&
                                n().createElement(
                                    'div',
                                    { className: 'Header_doneBlock_29' },
                                    n().createElement('div', { className: 'Header_doneIcon_fa' }),
                                    n().createElement(me, { className: 'Header_chainText_d1', text: Je.chainText() }),
                                ),
                        );
                    }),
                    et = (0, C.observer)(() => {
                        const u = au(),
                            e = u.model,
                            t = u.controls,
                            r = e.computes.getFooterShowDelay();
                        !(function ({
                            key: u = F.n.ESCAPE,
                            callback: e = () => m.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            B(u, e, t);
                        })({ callback: t.close });
                        const i = (0, g.useSpring)({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                            delay: r + 900,
                            config: { duration: v, easing: w },
                        });
                        return (
                            (0, a.useEffect)(() => {
                                l(R.sounds.ta_reward());
                            }, []),
                            n().createElement(
                                'div',
                                { className: 'App_base_c4' },
                                n().createElement('div', { className: 'App_header_67' }, n().createElement(ut, null)),
                                n().createElement('div', { className: 'App_content_27' }, n().createElement(je, null)),
                                n().createElement(A, {
                                    caption: R.strings.tank_academy.rewardsView.button.close(),
                                    type: 'close',
                                    side: 'right',
                                    classNames: { base: 'App_close_9e' },
                                    onClick: t.close,
                                }),
                                n().createElement(
                                    g.animated.div,
                                    { className: 'App_footer_43', style: i },
                                    n().createElement(Qe, null),
                                ),
                            )
                        );
                    });
                var tt = t(926),
                    at = t.n(tt);
                const nt = ['children', 'className'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const it = {
                        [Du.ExtraSmall]: '',
                        [Du.Small]: at().SMALL_WIDTH,
                        [Du.Medium]: `${at().SMALL_WIDTH} ${at().MEDIUM_WIDTH}`,
                        [Du.Large]: `${at().SMALL_WIDTH} ${at().MEDIUM_WIDTH} ${at().LARGE_WIDTH}`,
                        [Du.ExtraLarge]: `${at().SMALL_WIDTH} ${at().MEDIUM_WIDTH} ${at().LARGE_WIDTH} ${at().EXTRA_LARGE_WIDTH}`,
                    },
                    st = {
                        [Bu.ExtraSmall]: '',
                        [Bu.Small]: at().SMALL_HEIGHT,
                        [Bu.Medium]: `${at().SMALL_HEIGHT} ${at().MEDIUM_HEIGHT}`,
                        [Bu.Large]: `${at().SMALL_HEIGHT} ${at().MEDIUM_HEIGHT} ${at().LARGE_HEIGHT}`,
                        [Bu.ExtraLarge]: `${at().SMALL_HEIGHT} ${at().MEDIUM_HEIGHT} ${at().LARGE_HEIGHT} ${at().EXTRA_LARGE_HEIGHT}`,
                    },
                    ot = {
                        [du.ExtraSmall]: '',
                        [du.Small]: at().SMALL,
                        [du.Medium]: `${at().SMALL} ${at().MEDIUM}`,
                        [du.Large]: `${at().SMALL} ${at().MEDIUM} ${at().LARGE}`,
                        [du.ExtraLarge]: `${at().SMALL} ${at().MEDIUM} ${at().LARGE} ${at().EXTRA_LARGE}`,
                    },
                    lt = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, nt);
                        const r = Cu(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return n().createElement('div', rt({ className: o()(t, it[i], st[s], ot[l]) }, a), e);
                    },
                    Et = ['children'],
                    ct = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Et);
                        return n().createElement(Fu, null, n().createElement(lt, t, e));
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(ct, null, n().createElement(tu, null, n().createElement(et, null))),
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
        (() => {
            var u = { 232: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(656));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
