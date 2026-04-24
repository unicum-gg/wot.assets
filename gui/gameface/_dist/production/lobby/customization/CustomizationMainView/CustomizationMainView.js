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
            532: (e) => {
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
            887: (e) => {
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
            67: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => X });
                var a = {};
                (u.r(a), u.d(a, { mouse: () => _, onResize: () => i }));
                var n = {};
                (u.r(n),
                    u.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => m,
                        getSize: () => d,
                        graphicsQuality: () => E,
                    }));
                var r = {};
                (u.r(r), u.d(r, { getBgUrl: () => g, getTextureUrl: () => A }));
                var o = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (u.r(o),
                    u.d(o, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => S,
                        children: () => r,
                        displayStatus: () => b,
                        displayStatusIs: () => V,
                        events: () => p,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => U,
                        freezeTextureBeforeResize: () => x,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => G,
                        getScale: () => O,
                        getSize: () => N,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => z,
                        isFocused: () => H,
                        pxToRem: () => L,
                        remToPx: () => R,
                        resize: () => M,
                        sendEvent: () => B,
                        setAnimateWindow: () => P,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => w,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => $,
                    }));
                const i = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function u() {
                        e.enabled && l(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : l(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        o = c[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function g(e, t, u) {
                    return `url(${A(e, t, u)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
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
                    C = ['args'];
                const h = 2,
                    f = 16,
                    v = 32,
                    F = 64,
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, C);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    B = {
                        close(e) {
                            D('popover' === e ? h : v);
                        },
                        minimize() {
                            D(F);
                        },
                        move(e) {
                            D(f, { isMouseEvent: !0, on: e });
                        },
                    };
                function S(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function y(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function k(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function I(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: R(t.x), y: R(t.y) };
                }
                function x() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function R(e) {
                    return viewEnv.remToPx(e);
                }
                function P(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function z() {
                    return viewEnv.isEventHandled();
                }
                function U() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    j = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    $ = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: o, client: n };
            },
            521: (e, t, u) => {
                'use strict';
                let a, n;
                (u.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(67);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
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
            364: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => i,
                    Z5: () => o,
                    B0: () => l,
                    c9: () => h,
                    wU: () => D,
                    ry: () => p,
                    Eu: () => C,
                    SW: () => v,
                    P3: () => F,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var r = u(358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let l;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(l || (l = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(521),
                    E = u(67);
                const A = ['args'];
                function g(e, t, u, a, n, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        u = arguments;
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            g(r, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    f = () => h(l.CLOSE),
                    v = () => h(l.POP_OVER, { on: !1 }),
                    F = (e, t, u, a, n = R.invalid('resId'), r) => {
                        const o = E.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            i = s.x,
                            c = s.y,
                            _ = s.width,
                            d = s.height,
                            m = {
                                x: E.O.view.pxToRem(i) + o.x,
                                y: E.O.view.pxToRem(c) + o.y,
                                width: E.O.view.pxToRem(_),
                                height: E.O.view.pxToRem(d),
                            };
                        h(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: t,
                            bbox: b(m),
                            on: !0,
                            args: r,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var S = u(572);
                const w = n.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: S.Z,
                        ViewEventType: l,
                        NumberFormatType: i,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => h(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            h(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: F,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, f);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: D,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = y;
            },
            581: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => El,
                        Bar: () => _l,
                        DefaultScroll: () => ml,
                        Direction: () => te,
                        defaultSettings: () => ue,
                        useHorizontalScrollApi: () => ne,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => Ml, Bar: () => kl, Default: () => Nl, useVerticalScrollApi: () => Al }));
                var r = u(179),
                    o = u.n(r);
                const s = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var l = u(67);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, t, u) {
                    const a = (function (e, t) {
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
                        })(e, u),
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
                        })(t, u),
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
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
                const d = l.O.client.getSize('rem'),
                    m = d.width,
                    E = d.height,
                    A = Object.assign({ width: m, height: E }, _(m, E, i)),
                    g = (0, r.createContext)(A),
                    b = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, b);
                    const a = (0, r.useContext)(g),
                        n = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        i = a.small,
                        c = a.extraSmall,
                        _ = a.extraLargeWidth,
                        d = a.largeWidth,
                        m = a.mediumWidth,
                        E = a.smallWidth,
                        A = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        C = a.largeHeight,
                        h = a.mediumHeight,
                        f = a.smallHeight,
                        v = a.extraSmallHeight,
                        F = { extraLarge: p, large: C, medium: h, small: f, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && n) return t;
                        if (u.large && o) return t;
                        if (u.medium && l) return t;
                        if (u.small && i) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && _) return s(t, u, F);
                        if (u.largeWidth && d) return s(t, u, F);
                        if (u.mediumWidth && m) return s(t, u, F);
                        if (u.smallWidth && E) return s(t, u, F);
                        if (u.extraSmallWidth && A) return s(t, u, F);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && h) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, r.memo)(p);
                const C = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    h = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(g),
                            u = (0, r.useState)(t),
                            a = u[0],
                            n = u[1],
                            s = (0, r.useCallback)((e, t) => {
                                const u = l.O.view.pxToRem(e),
                                    a = l.O.view.pxToRem(t);
                                n(Object.assign({ width: u, height: a }, _(u, a, i)));
                            }, []);
                        (C(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', s), [s]));
                        const c = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return o().createElement(g.Provider, { value: c }, e);
                    });
                var f = u(483),
                    v = u.n(f),
                    F = u(926),
                    D = u.n(F);
                let B, S, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const y = () => {
                        const e = (0, r.useContext)(g),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    k = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const N = {
                        [S.ExtraSmall]: '',
                        [S.Small]: D().SMALL_WIDTH,
                        [S.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [S.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_HEIGHT,
                        [w.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [w.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL,
                        [B.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [B.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [B.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, k);
                        const n = y(),
                            r = n.mediaWidth,
                            s = n.mediaHeight,
                            l = n.mediaSize;
                        return o().createElement('div', T({ className: v()(u, N[r], M[s], I[l]) }, a), t);
                    },
                    O = ['children'];
                const L = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, O);
                    return o().createElement(h, null, o().createElement(x, u, t));
                };
                var P = u(493),
                    H = u.n(P);
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const z = {
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
                    U = {
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
                let G, V;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(G || (G = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(V || (V = {})));
                const j = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: n,
                    mixClass: s,
                    soundHover: l,
                    soundClick: i,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const g = (0, r.useRef)(null),
                        b = (0, r.useState)(u),
                        p = b[0],
                        C = b[1],
                        h = (0, r.useState)(!1),
                        f = h[0],
                        F = h[1],
                        D = (0, r.useState)(!1),
                        B = D[0],
                        S = D[1],
                        w = (0, r.useCallback)(() => {
                            n || (g.current && (g.current.focus(), C(!0)));
                        }, [n]),
                        y = (0, r.useCallback)(
                            (e) => {
                                p && null !== g.current && !g.current.contains(e.target) && C(!1);
                            },
                            [p],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                n || (A && A(e));
                            },
                            [n, A],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                n || (null !== l && W(l), c && c(e), S(!0));
                            },
                            [n, l, c],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                n || (m && m(e), F(!1));
                            },
                            [n, m],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                n || (null !== i && W(i), d && d(e), u && w(), F(!0));
                            },
                            [n, i, d, w, u],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                n || (E && E(e), F(!1));
                            },
                            [n, E],
                        ),
                        O = v()(
                            U.base,
                            U[`base__${a}`],
                            {
                                [U.base__disabled]: n,
                                [U[`base__${t}`]]: t,
                                [U.base__focus]: p,
                                [U.base__highlightActive]: f,
                                [U.base__firstHover]: B,
                            },
                            s,
                        ),
                        L = v()(U.state, U.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, r.useEffect)(() => {
                            C(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: N,
                                onMouseUp: M,
                                onMouseDown: I,
                                onMouseLeave: x,
                                onClick: k,
                            },
                            a !== G.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: U.back }),
                                    o().createElement('span', { className: U.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: L },
                                o().createElement('span', { className: U.stateDisabled }),
                                o().createElement('span', { className: U.stateHighlightHover }),
                                o().createElement('span', { className: U.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: U.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                j.defaultProps = { type: G.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = (0, r.memo)(j),
                    X = (e, t, u) => (u < e ? e : u > t ? t : u),
                    q = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    };
                function Y(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return K(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return K(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function K(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const Z = [];
                function J(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), Z)
                    );
                }
                function Q(e, t, u) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, t, u, a) {
                                let n,
                                    r = !1,
                                    o = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function l(...l) {
                                    const i = this,
                                        c = Date.now() - o;
                                    function _() {
                                        ((o = Date.now()), u.apply(i, l));
                                    }
                                    r ||
                                        (a && !n && _(),
                                        s(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : _,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                    (l.cancel = function () {
                                        (s(), (r = !0));
                                    }),
                                    l
                                );
                            })(u, e),
                        t,
                    );
                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                }
                var ee = u(30);
                let te;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(te || (te = {}));
                const ue = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ae = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, u) => {
                            const a = t(e),
                                n = a[0],
                                r = a[1];
                            return X(n, r, u);
                        };
                        return (i = {}) => {
                            const c = i.settings,
                                _ = void 0 === c ? ue : c,
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (var a, n = Y(t(e).values()); !(a = n()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                A = Q(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, ee.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), E.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = g[0],
                                p = g[1],
                                C = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = b.scrollPosition.get(),
                                            r = (null != (a = b.scrollPosition.goal) ? a : 0) - n;
                                        return s(e, t * u + r + n);
                                    },
                                    [b.scrollPosition],
                                ),
                                h = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            p.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [p, _.animationConfig, b.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, _.step),
                                            r = C(t, e, a);
                                        h(r);
                                    },
                                    [h, C, _.step],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && f(a(e)),
                                            d.current && E.trigger('mouseWheel', e, b.scrollPosition, t(d.current)));
                                    },
                                    [b.scrollPosition, f, E],
                                ),
                                F = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        q(() => {
                                            const e = d.current;
                                            e &&
                                                (h(s(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, b.scrollPosition.goal],
                                ),
                                D = J(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && h(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            );
                            const B = (0, r.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: v,
                                    applyScroll: h,
                                    applyStepTo: f,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: p,
                                    animationScroll: b,
                                    recalculateContent: D,
                                    handleIsThumbDragging: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [b.scrollPosition, h, f, B, E.off, E.on, D, v, p, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ne = ae({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? te.Next : te.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
                var re = u(887),
                    oe = u.n(re);
                const se = ['xl', 'lg', 'md', 'sm', 'xs'],
                    le = (e) => e.includes('_') && ((e) => se.includes(e))(e.split('_').at(-1)),
                    ie = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    ce = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (le(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = ie.indexOf(t),
                                    o = (-1 !== r ? se.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = o ? e[o] : void 0;
                                return ((u[n] = void 0 !== s ? s : e[n]), u);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => se.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = n),
                                u
                            );
                        }, {}),
                    _e = (e, t = ce) => {
                        const u = (
                            (e, t = ce) =>
                            (u) => {
                                const a = y().mediaSize,
                                    n = (0, r.useMemo)(() => t(u, a), [u, a]);
                                return o().createElement(e, n);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => le(e) && void 0 !== t[e])
                                ? o().createElement(u, t)
                                : o().createElement(e, t),
                        );
                    },
                    de = {
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
                    me = [
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
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                Object.keys(oe());
                const Ae = {
                        XL: { mt: de.mt__XL, mr: de.mr__XL, mb: de.mb__XL, ml: de.ml__XL },
                        LG: { mt: de.mt__LG, mr: de.mr__LG, mb: de.mb__LG, ml: de.ml__LG },
                        MDp: { mt: de.mt__MDp, mr: de.mr__MDp, mb: de.mb__MDp, ml: de.ml__MDp },
                        MD: { mt: de.mt__MD, mr: de.mr__MD, mb: de.mb__MD, ml: de.ml__MD },
                        SMp: { mt: de.mt__SMp, mr: de.mr__SMp, mb: de.mb__SMp, ml: de.ml__SMp },
                        SM: { mt: de.mt__SM, mr: de.mr__SM, mb: de.mb__SM, ml: de.ml__SM },
                        XS: { mt: de.mt__XS, mr: de.mr__XS, mb: de.mb__XS, ml: de.ml__XS },
                    },
                    ge = (Object.keys(Ae), ['mt', 'mr', 'mb', 'ml']),
                    be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    pe = _e((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            n = e.m,
                            s = e.mt,
                            l = void 0 === s ? n : s,
                            i = e.mr,
                            c = void 0 === i ? n : i,
                            _ = e.mb,
                            d = void 0 === _ ? n : _,
                            m = e.ml,
                            E = void 0 === m ? n : m,
                            A = e.column,
                            g = e.row,
                            b = e.flexDirection,
                            p = void 0 === b ? (A ? 'column' : g && 'row') || void 0 : b,
                            C = e.flexStart,
                            h = e.center,
                            f = e.flexEnd,
                            F = e.spaceBetween,
                            D = e.spaceAround,
                            B = e.justifyContent,
                            S =
                                void 0 === B
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (f && 'flex-end') ||
                                      (F && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            y = void 0 === w ? (C ? 'flex-start' : h && 'center') || (f && 'flex-end') || void 0 : w,
                            k = e.alignSelf,
                            T = e.wrap,
                            N = e.flexWrap,
                            M = void 0 === N ? (T ? 'wrap' : void 0) : N,
                            I = e.grow,
                            x = e.shrink,
                            O = e.flex,
                            L = void 0 === O ? (I || x ? `${I ? 1 : 0} ${x ? 1 : 0} auto` : void 0) : O,
                            R = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, me);
                        const W = (0, r.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        ge.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(Ae[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        ge.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[be[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, R, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: L,
                                        alignSelf: k,
                                        display: p || y ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: M,
                                        justifyContent: S,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, l, c, d, E, R, L, k, p, M, S, y]),
                            z = W.computedStyle,
                            U = W.computedClassNames;
                        return o().createElement('div', Ee({ className: v()(de.base, ...U, t), style: z }, H), P);
                    });
                let Ce;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ce || (Ce = {}));
                const he = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    fe = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    ve = (e, t, u = Ce.left) => e.split(t).reduce(u === Ce.left ? he : fe, []),
                    Fe = (() => {
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
                    De = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Be = (e, t = Ce.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return De.includes(u)
                            ? Fe(e)
                            : ((e, t = Ce.left) => {
                                  let u = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (ve(n, /( )/, t).forEach((e) => (u = u.concat(ve(e, a, Ce.left)))), u);
                              })(e, t);
                    },
                    Se = 'FormatText_base_d0',
                    we = ({ binding: e, text: t = '', classMix: u, alignment: a = Ce.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  r.Fragment,
                                  null,
                                  t.split('\n').map((t, n) =>
                                      o().createElement(
                                          'div',
                                          { className: v()(Se, u), key: `${t}-${n}` },
                                          ((e, t, u) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (u && e in u ? u[e] : Be(e, t))))(t, a, e).map((e, t) =>
                                              o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ye = u(532),
                    ke = u.n(ye);
                const Te = {
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
                    Ne = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                Object.keys(oe());
                const Ie = Object.keys(ke()),
                    xe = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Oe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Le = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Re = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Pe =
                        (Object.keys(Re),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': xe,
                            'heading-H36': xe,
                            'heading-H28': Oe,
                            'heading-H24': Oe,
                            'heading-H24R': Oe,
                            'heading-H22': Oe,
                            'heading-H20R': Oe,
                            'heading-H18': Oe,
                            'heading-H15': Le,
                            'heading-H14': Le,
                            'paragraph-P24': Oe,
                            'paragraph-P18': Oe,
                            'paragraph-P16': Oe,
                            'paragraph-P14': Le,
                            'paragraph-P12': Le,
                            'paragraph-P10': Le,
                        }),
                    He =
                        (Object.keys(Pe),
                        (e) =>
                            e
                                ? ((e) => Ie.includes(e))(e)
                                    ? { colorClassName: Te[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    We = _e((e) => {
                        let t = e.text,
                            u = e.variant,
                            a = e.className,
                            n = e.color,
                            s = e.m,
                            l = e.mt,
                            i = void 0 === l ? s : l,
                            c = e.mr,
                            _ = void 0 === c ? s : c,
                            d = e.mb,
                            m = void 0 === d ? s : d,
                            E = e.ml,
                            A = void 0 === E ? s : E,
                            g = e.style,
                            b = e.format,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ne);
                        const C = (0, r.useMemo)(() => {
                                const e = He(n),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, g, a), colorClassName: t };
                            }, [g, n]),
                            h = C.computedStyle,
                            f = C.colorClassName;
                        return o().createElement(
                            pe,
                            Me(
                                {
                                    className: v()(Te.base, u && Te[u], f, a),
                                    style: h,
                                    mt: !0 === i ? Pe[u || 'paragraph-P16'].mt : i,
                                    mr: !0 === _ ? Pe[u || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? Pe[u || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? Pe[u || 'paragraph-P16'].ml : A,
                                },
                                p,
                            ),
                            void 0 !== b ? o().createElement(we, Me({}, b, { text: t })) : t,
                        );
                    }),
                    ze = {
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
                    Ue = [
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                class Ve extends o().PureComponent {
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
                            u = e.onClick,
                            a = e.goto,
                            n = e.side,
                            r = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            i = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(e, Ue)),
                            m = v()(ze.base, ze[`base__${r}`], ze[`base__${n}`], null == s ? void 0 : s.base),
                            E = v()(ze.icon, ze[`icon__${r}`], ze[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = v()(ze.glow, null == s ? void 0 : s.glow),
                            g = v()(ze.caption, ze[`caption__${r}`], null == s ? void 0 : s.caption),
                            b = v()(ze.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            Ge(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(i),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== r && o().createElement('div', { className: ze.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: g }, t),
                            a && o().createElement('div', { className: b }, a),
                        );
                    }
                }
                Ve.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var je = u(364);
                const $e = [
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
                function Xe(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const qe = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: je.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    Ye = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            i = e.ignoreShowDelay,
                            c = void 0 !== i && i,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            b = e.targetId,
                            p = void 0 === b ? 0 : b,
                            C = e.onShow,
                            h = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, $e);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, r.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (a = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: a }
                                        );
                                    })().resId,
                                [p],
                            ),
                            D = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (qe(u, E, { isMouseEvent: !0, on: !0, arguments: Xe(a) }, F),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [u, E, a, F, C]),
                            B = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        qe(u, E, { on: !1 }, F),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1));
                                }
                            }, [u, E, F, h]),
                            S = (0, r.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && B();
                            }, [g, B]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ));
                        return g
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(D, c ? 100 : 400)),
                                                      n && n(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (B(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === d && B(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === d && B(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    Ke = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Je = R.views.common.tooltip_window.simple_tooltip_content,
                    Qe = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
                            s = e.alert,
                            l = e.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ke);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: a, note: n, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, a, n, l]);
                        return o().createElement(
                            Ye,
                            Ze(
                                {
                                    contentId:
                                        ((_ = null == l ? void 0 : l.hasHtmlContent),
                                        _ ? Je.SimpleTooltipHtmlContent('resId') : Je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                i,
                            ),
                            t,
                        );
                        var _;
                    };
                let et, tt;
                (!(function (e) {
                    ((e.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_PARTS = 'apply_all_parts'),
                        (e.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_SEASONS = 'apply_all_seasons'),
                        (e.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_SEASONS_ALERT = 'apply_all_seasons_alert'),
                        (e.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_SEASONS = 'remove_all_seasons'),
                        (e.CUSTOMIZATION_SHEET_ACTION_REMOVE_ONE = 'remove_one'),
                        (e.CUSTOMIZATION_SHEET_ACTION_COLOR_CHANGE = 'color_change'),
                        (e.CUSTOMIZATION_SHEET_ACTION_SCALE_CHANGE = 'scale_change'),
                        (e.CUSTOMIZATION_SHEET_RENT_PROLONG = 'rent_prolong'),
                        (e.CUSTOMIZATION_SHEET_RENT_NOT_PROLONG = 'rent_not_prolong'),
                        (e.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_PARTS = 'remove_from_all_parts'),
                        (e.CUSTOMIZATION_SHEET_ACTION_CLOSE = 'action_close'),
                        (e.CUSTOMIZATION_SHEET_ACTION_HORIZONZONTAL_MIRROR_RIGHT = 'horizontal_mirror_right'),
                        (e.CUSTOMIZATION_SHEET_ACTION_HORIZONZONTAL_MIRROR_LEFT = 'horizontal_mirror_left'),
                        (e.CUSTOMIZATION_SHEET_ACTION_VERTICAL_MIRROR_UP = 'vertical_mirror_up'),
                        (e.CUSTOMIZATION_SHEET_ACTION_VERTICAL_MIRROR_DOWN = 'vertical_mirror_down'),
                        (e.CUSTOMIZATION_SHEET_ACTION_MIRROR_LEFT_UP = 'mirror_left_up'),
                        (e.CUSTOMIZATION_SHEET_ACTION_MIRROR_RIGHT_UP = 'mirror_right_up'),
                        (e.CUSTOMIZATION_SHEET_ACTION_MIRROR_LEFT_DOWN = 'mirror_left_down'),
                        (e.CUSTOMIZATION_SHEET_ACTION_MIRROR_RIGHT_DOWN = 'mirror_right_down'),
                        (e.CUSTOMIZATION_SHEET_ACTION_MOVE = 'move'),
                        (e.CUSTOMIZATION_SHEET_ACTION_EDIT = 'edit'),
                        (e.CUSTOMIZATION_SHEET_ACTION_INFO = 'info'),
                        (e.CUSTOMIZATION_SHEET_ACTION_GET_BACK = 'get_back'),
                        (e.CUSTOMIZATION_SHEET_ACTION_SWITCH_PROGRESSION_LVL = 'switch_progression_lvl'),
                        (e.CUSTOMIZATION_SHEET_ACTION_EDIT_STYLE = 'edit_style'));
                })(et || (et = {})),
                    (function (e) {
                        ((e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text'));
                    })(tt || (tt = {})));
                const ut = (e) => {
                    const t = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
                let at;
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
                })(at || (at = {}));
                Date.now();
                je.Sw.instance;
                let nt;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(nt || (nt = {}));
                je.Sw.instance;
                const rt = ut;
                var ot = u(521);
                const st = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function lt(e = ot.n.NONE, t = st, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ot.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                function it({
                    key: e = ot.n.ESCAPE,
                    callback: t = () => l.O.view.sendEvent.close(),
                    preventPropagation: u = !0,
                } = {}) {
                    return (lt(e, t, u), t);
                }
                const ct = (e) => {
                    (0, r.useEffect)(e, []);
                };
                function _t() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (t, u) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (t(), (e.current = 0));
                                        }, u)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const dt = /<link.*?>/g,
                    mt = /\.\.\//g,
                    Et = /<script.*?>/g,
                    At = 'default.css',
                    gt = (e) => {
                        const t = e.match(mt);
                        return t && t.join('');
                    },
                    bt = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(At)) return u.href;
                        }
                        return '';
                    },
                    pt = (e, t) => {
                        const u = bt(),
                            a = gt(u);
                        let n,
                            r = e;
                        for (; null !== (n = Et.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = a + e[2].replace(mt, '');
                                ((r = r.replace(e[2], u)),
                                    (r = r.replace('<div id="root"', `<div data-root-id=${t} id="root"`)));
                            }
                        }
                        return r;
                    },
                    Ct = 'SubView_base_df',
                    ht = 'subViews.onChanged',
                    ft = (() => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const a = e.shift();
                            a && ((t = !0), a().then(() => u()));
                        };
                        return {
                            add: (a) => {
                                (e.push(a), t || u());
                            },
                        };
                    })(),
                    vt = (0, r.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: a }) => {
                        const n = (0, r.useState)(''),
                            s = n[0],
                            l = n[1],
                            i = (0, r.useMemo)(() => ({ __html: pt(s, e) }), [s, e]),
                            c = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            _ = (0, r.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(ht, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, r.useCallback)((e) => {
                                ft.add(
                                    () =>
                                        new Promise((t) => {
                                            l(e);
                                            const u = new MutationObserver(() => {
                                                    (u.disconnect(), t());
                                                }),
                                                a = document.getElementById('root');
                                            a && u.observe(a, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let a;
                                if ((a = u.split('/').pop()))
                                    return (
                                        (a = a.split('.')[0]),
                                        (window.subViews[a] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${a}`, A),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            ((u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, je.Eu)().then(() => {
                                                              (console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send());
                                        })({ name: a, path: u }),
                                        () => {
                                            (a && window.subViews[a] && delete window.subViews[a],
                                                engine.trigger('subView:destroy', { viewName: a, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${a}`, A),
                                                console.info(`Sub view ${a} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ht, E);
                        }, [E, A, e, d]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = gt(bt());
                                            let u;
                                            for (; null !== (u = dt.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(mt, ''),
                                                        a = document.head.querySelector(`[href="${u}"]`);
                                                    a && document.head.removeChild(a);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const g = v()(Ct, a);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = bt(),
                                        a = gt(u);
                                    for (; null !== (t = dt.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(At) && a) {
                                            const t = a + e[1].replace(mt, ''),
                                                u = document.createElement('link');
                                            ((u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u));
                                        }
                                    }
                                })(s),
                                u && u(e),
                                o().createElement('div', { className: g, dangerouslySetInnerHTML: i })
                            );
                        }
                        return t ? o().createElement('div', { className: g }, o().createElement(t, null)) : null;
                    });
                var Ft = u(403);
                let Dt;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Dt || (Dt = {}));
                const Bt = {
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
                let St, wt, yt;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(St || (St = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(wt || (wt = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(yt || (yt = {})));
                const kt = [
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
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const Nt = (e) => {
                    let t = e.id,
                        u = e.isChecked,
                        a = void 0 !== u && u,
                        n = e.isDisabled,
                        s = void 0 !== n && n,
                        l = e.isAlert,
                        i = void 0 !== l && l,
                        c = e.size,
                        _ = void 0 === c ? St.medium : c,
                        d = e.type,
                        m = void 0 === d ? wt.primary : d,
                        E = e.soundHover,
                        A = void 0 === E ? 'highlight' : E,
                        g = e.soundClick,
                        b = void 0 === g ? 'play' : g,
                        p = e.onMouseEnter,
                        C = e.onMouseLeave,
                        h = e.onMouseUp,
                        f = e.onMouseDown,
                        F = e.onClick,
                        D = e.onChange,
                        B = e.onFocus,
                        S = e.onBlur,
                        w = e.text,
                        y = e.contentStyles,
                        k = e.children,
                        T = e.alignment,
                        N = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, kt);
                    const M = (0, r.useState)(!1),
                        I = M[0],
                        x = M[1],
                        O = (0, r.useState)(!1),
                        L = (O[0], O[1]),
                        R = (0, r.useCallback)(
                            (e) => {
                                s || (D && D(), F && F(e));
                            },
                            [s, D, F],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                const t = e.button === Dt.LEFT;
                                s || (t && x(!0), t && f && f(e), b && W(b));
                            },
                            [s, f, b],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                s || (x(!1), h && h(e));
                            },
                            [s, h],
                        ),
                        z = (0, r.useCallback)(
                            (e) => {
                                s || (p && p(e), A && W(A));
                            },
                            [s, p, A],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                s || (x(!1), C && C(e));
                            },
                            [s, C],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                s || (L(!0), B && B(e));
                            },
                            [s, B],
                        ),
                        V = (0, r.useCallback)(
                            (e) => {
                                s || (L(!1), S && S(e));
                            },
                            [s, S],
                        ),
                        j = o().createElement(
                            'div',
                            { className: Bt.label },
                            o().createElement(
                                'div',
                                { className: v()(Bt.labelContent, 's-labelContent'), style: y },
                                w || k,
                            ),
                        );
                    return o().createElement(
                        'div',
                        Tt(
                            {
                                id: t,
                                className: v()(Bt.base, Bt[`base__${_}`], Bt[`base__${m}`], {
                                    [Bt.base__checked]: a,
                                    [Bt.base__disabled]: s,
                                    [Bt.base__mouseDown]: I,
                                    [Bt.base__alert]: i,
                                    [Bt.base__center]: T === yt.Center,
                                    [Bt.base__bottom]: T === yt.Bottom,
                                }),
                                onClick: R,
                                onMouseEnter: z,
                                onMouseLeave: U,
                                onMouseDown: P,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: V,
                            },
                            N,
                        ),
                        o().createElement(
                            'div',
                            { className: Bt.input },
                            o().createElement('div', { className: Bt.alertOverlay }),
                            o().createElement('div', { className: Bt.inputHoverOverlay }),
                            o().createElement('div', { className: Bt.highlight }),
                        ),
                        o().createElement('div', { className: Bt.checkmark }),
                        ((w || k) && j) || null,
                    );
                };
                let Mt, It, xt;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Mt || (Mt = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(It || (It = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(xt || (xt = {})));
                class Ot extends o().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = je.B3.GOLD;
                        else e = je.B3.INTEGRAL;
                        const t = je.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Ot.defaultProps = { format: 'integral' };
                const Lt = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    Rt = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: a,
                        isEnough: n,
                        value: r,
                        discountValue: s,
                        showPlus: l,
                        stockBackgroundName: i = xt.Red,
                    }) => {
                        const c = v()(Lt.value, Lt[`value__${a}`], !n && Lt.value__notEnough),
                            _ = v()(Lt.icon, Lt[`icon__${a}-${u}`]),
                            d = v()(Lt.stock, s && Lt.stock__indent, t && Lt.stock__interactive),
                            m = l && r > 0 && '+',
                            E = v()(Lt.base, Lt[`base__${u}`]);
                        return o().createElement(
                            'span',
                            { className: E },
                            o().createElement(
                                'span',
                                { className: c },
                                m,
                                o().createElement(Ot, { value: r, format: a === It.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', { className: _ }),
                            e &&
                                o().createElement(
                                    'span',
                                    { className: d },
                                    o().createElement('span', {
                                        className: Lt.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${i})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                Rt.defaultProps = { isEnough: !0 };
                const Pt = o().memo(Rt),
                    Ht = 'Tutorial_tutorial_ce',
                    Wt = 'Tutorial_tutorial_border_ab',
                    zt = 'Tutorial_tutorial__hidden_8a',
                    Ut = 'Tutorial_tutorial_hint_bc',
                    Gt = 'Tutorial_tutorial_hintSubstrate_c7',
                    Vt = 'Tutorial_tutorial_hintArrow_75',
                    jt = 'Tutorial_tutorial_hintText_b5';
                class $t extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.onClick = () => {
                                !this.props.isHidden && this.props.onClick && this.props.onClick();
                            }));
                    }
                    componentDidMount() {
                        this.handlerID = document.addEventListener('click', () => {
                            this.props.onCancel && this.props.onCancel();
                        });
                    }
                    componentWillUnmount() {
                        document.removeEventListener('click', this.handlerID);
                    }
                    render() {
                        const e = v()(Ht, { [zt]: this.props.isHidden });
                        return o().createElement(
                            'div',
                            { className: e, onClick: this.onClick },
                            o().createElement('div', { className: Wt }),
                            o().createElement(
                                'div',
                                { className: Ut },
                                o().createElement('div', { className: Gt }),
                                o().createElement('div', { className: Vt }),
                                o().createElement('div', { className: jt }, this.props.text),
                            ),
                        );
                    }
                }
                const Xt = 'HangarCounter_base_43',
                    qt = 'HangarCounter_currencyWrapper_cb',
                    Yt = 'HangarCounter_hangarIcon_46',
                    Kt = (0, r.memo)(({ count: e }) => {
                        const t = y().mediaSize <= B.Small ? Mt.small : Mt.big;
                        return o().createElement(
                            'div',
                            { className: Xt },
                            o().createElement(
                                'div',
                                { className: qt },
                                o().createElement(Pt, { value: e, size: t, type: 'equipCoin' }),
                            ),
                            o().createElement('div', { className: Yt }),
                        );
                    }),
                    Zt = 'CartPanel_base_e7',
                    Jt = 'CartPanel_base__onlyRightSide_f7',
                    Qt = 'CartPanel_leftSide_d1',
                    eu = 'CartPanel_checkboxContainer_32',
                    tu = 'CartPanel_rightSide_12',
                    uu = 'CartPanel_setupButton_b9',
                    au = 'CartPanel_deleteButton_b0',
                    nu = 'CartPanel_deleteButtonIcon_77',
                    ru = 'CartPanel_backButton_ee',
                    ou = 'CartPanel_backButtonIcon_f2',
                    su = 'CartPanel_amountWrapper_f1',
                    lu = 'CartPanel_amountGold_c6',
                    iu = 'CartPanel_amountRent_c7',
                    cu = 'CartPanel_amountCredits_7b',
                    _u = 'CartPanel_amountEquipment_5b',
                    du = 'CartPanel_rentCount_11',
                    mu = R.strings.customization,
                    Eu = R.strings.vehicle_customization.customization,
                    Au = R.strings.customization.tooltips.cart,
                    gu = (0, r.memo)(
                        ({
                            price: e,
                            onResetHandler: t,
                            onBackHandler: u,
                            onApplyHandler: a,
                            onAutoRentChange: n,
                            onAutoRentHintClose: s,
                            cartParams: l,
                            buttonSize: i,
                            className: c,
                        }) => {
                            const _ = (0, r.useState)(!1),
                                d = _[0],
                                m = _[1],
                                E = y().mediaSize <= B.Small ? Mt.small : Mt.big,
                                A = ((e) =>
                                    Array.from(e.values()).reduce((e, t) => {
                                        if ('object' == typeof t && null !== t) {
                                            const u = t.name,
                                                a = t.value;
                                            e[u] = (e[u] || 0) + a;
                                        }
                                        return e;
                                    }, {}))(e),
                                g = [
                                    l.isEnoughMoney ? '' : Au.BuyButtonDisabledNotEnoughMoney(),
                                    l.isVehicleCustomized || l.buyButtonEnabled ? '' : Au.buyButtonDisabledDefault(),
                                    l.isLockedItem ? Eu.lockedItemsApply() : '',
                                ].filter((e) => e.length > 0)[0],
                                b = l.isRentable && n,
                                p = (0, r.useCallback)(() => {
                                    (l.showAutoRentHint && (m(!0), s && s()), n && n());
                                }, [l.showAutoRentHint, n, s]);
                            return o().createElement(
                                'div',
                                { className: v()(Zt, c, !b && Jt) },
                                b &&
                                    o().createElement(
                                        'div',
                                        { className: Qt },
                                        l.showAutoRentHint &&
                                            o().createElement($t, {
                                                text: R.strings.tutorial.customization.autoprolongation(),
                                                isHidden: d,
                                            }),
                                        o().createElement(
                                            'div',
                                            { className: eu },
                                            o().createElement(Nt, {
                                                isChecked: l.isAutoRentSelected,
                                                size: 'medium',
                                                text: R.strings.vehicle_customization.window.purchase.autoProlongationLabel(),
                                                type: 'primary',
                                                soundHover: 'highlight',
                                                soundClick: 'play',
                                                onChange: p,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: tu },
                                    o().createElement(
                                        'div',
                                        { className: su },
                                        l.inStorageCount > 0 &&
                                            o().createElement(
                                                'div',
                                                { className: _u },
                                                o().createElement(Kt, { count: l.inStorageCount }),
                                            ),
                                        l.isRentable &&
                                            ((null == A ? void 0 : A.gold) || (null == A ? void 0 : A.credits)) &&
                                            !l.inStorageCount &&
                                            o().createElement(
                                                'div',
                                                { className: iu },
                                                o().createElement(
                                                    'div',
                                                    { className: du },
                                                    o().createElement(We, {
                                                        text: `${l.rentCount} ${mu.cartPanel.rentAmountLabel()}`,
                                                    }),
                                                ),
                                            ),
                                        l.isGoldPrice
                                            ? (null == A ? void 0 : A.gold) &&
                                                  o().createElement(
                                                      'div',
                                                      { className: lu },
                                                      o().createElement(Pt, {
                                                          value: null == A ? void 0 : A.gold,
                                                          size: E,
                                                          type: It.gold,
                                                          isEnough: l.isEnoughMoney,
                                                      }),
                                                  )
                                            : (null == A ? void 0 : A.credits) &&
                                                  o().createElement(
                                                      'div',
                                                      { className: cu },
                                                      o().createElement(Pt, {
                                                          value: null == A ? void 0 : A.credits,
                                                          size: E,
                                                          type: It.credits,
                                                          isEnough: l.isEnoughMoney,
                                                      }),
                                                  ),
                                    ),
                                    (l.clearButtonEnabled || l.cancelButtonEnabled) &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                Qe,
                                                {
                                                    body: l.cancelButtonEnabled
                                                        ? Au.cancelButtonEnabled()
                                                        : Au.cancelButtonDisabled(),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        $,
                                                        {
                                                            type: G.ghost,
                                                            size: i,
                                                            mixClass: ru,
                                                            onClick: u,
                                                            disabled: !l.cancelButtonEnabled,
                                                        },
                                                        o().createElement('div', { className: ou }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement(
                                                Qe,
                                                {
                                                    body: l.clearButtonEnabled
                                                        ? Au.clearButtonEnabled()
                                                        : Au.clearButtonDisabled(),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        $,
                                                        {
                                                            type: G.ghost,
                                                            size: i,
                                                            mixClass: au,
                                                            onClick: t,
                                                            soundClick: 'cust_select_remove',
                                                            disabled: !l.clearButtonEnabled,
                                                        },
                                                        o().createElement('div', { className: nu }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    o().createElement(
                                        Qe,
                                        {
                                            body: g || '',
                                            isEnabled: l.isEnoughMoney
                                                ? !l.isApplyButton && (null == g ? void 0 : g.length) > 0
                                                : !l.buyButtonEnabled && (null == g ? void 0 : g.length) > 0,
                                        },
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                $,
                                                {
                                                    type: G.main,
                                                    size: i,
                                                    mixClass: uu,
                                                    disabled: !l.buyButtonEnabled,
                                                    onClick: a,
                                                },
                                                o().createElement(We, {
                                                    text: l.isApplyButton
                                                        ? mu.cartPanel.applyButton()
                                                        : mu.cartPanel.setupButton(),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    bu = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    pu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const hu = (e) => {
                    let t = e.size,
                        u = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        r = e.hide,
                        s = e.maximumNumber,
                        l = e.className,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, pu);
                    const c = a ? null : u,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const d = c && !_ && c > s,
                        m = v()(
                            bu.base,
                            bu[`base__${t}`],
                            n && bu.base__animated,
                            r && bu.base__hidden,
                            !c && bu.base__pattern,
                            a && bu.base__empty,
                            l,
                        );
                    return o().createElement(
                        'div',
                        Cu({ className: m }, i),
                        o().createElement('div', { className: bu.bg }),
                        o().createElement('div', { className: bu.pattern }),
                        o().createElement(
                            'div',
                            { className: v()(bu.value, _ && bu.value__text) },
                            d ? s : c,
                            d && o().createElement('span', { className: bu.plus }, '+'),
                        ),
                    );
                };
                hu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const fu = {
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
                var vu;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(vu || (vu = {}));
                const Fu = ['__left', '__right', '__top', '__bottom'],
                    Du =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: a = {} }, n) => {
                                const s = (0, r.useRef)(null),
                                    i = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    _ = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    d = _[0],
                                    m = _[1],
                                    E = (0, r.useCallback)(() => {
                                        (z.playClick(), l.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, r.useCallback)(() => {
                                        z.playHighlight();
                                    }, []),
                                    g = v()(fu.arrow, fu[`arrow${Fu[d]}`]);
                                ct(
                                    () => (
                                        l.O.client.events.mouse.enableOutside(),
                                        l.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (u ? u() : l.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const b = (0, r.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === s.current || t === c.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = l.O.client.getMouseGlobalPosition(),
                                                    t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    u =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (t && !u) return;
                                            }
                                            u ? u() : l.O.view.sendEvent.close('popover');
                                        },
                                        [s, c, u],
                                    ),
                                    p = (0, r.useCallback)(
                                        () => (
                                            l.O.view.freezeTextureBeforeResize(),
                                            q(() => {
                                                if (i.current) {
                                                    const e = i.current.scrollWidth,
                                                        t = i.current.scrollHeight;
                                                    (l.O.view.resize(e, t), m(window.decorator.directionType));
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, r.useImperativeHandle)(n, () => ({ updateSize: p })),
                                    ct(() => {
                                        l.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', b, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((u, a) => {
                                                    e.then((e) => !t && u(e)).catch((e) => !t && a(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, je.Eu)());
                                        return (
                                            !t && e.promise.then(() => p()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', b));
                                            }
                                        );
                                    }, [p, b, t]),
                                    o().createElement(
                                        'div',
                                        { className: fu.base, ref: i },
                                        o().createElement(
                                            'div',
                                            { className: fu.decorator },
                                            o().createElement(
                                                'div',
                                                { className: fu.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        Qe,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: fu.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: g, style: a.arrow }),
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
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const Su = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        a = e.direction,
                        n = void 0 === a ? vu.Top : a,
                        s = e.targetId,
                        l = e.args,
                        i = e.onClick,
                        c = e.children,
                        _ = e.isEnabled,
                        d = void 0 === _ || _,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, Du);
                    const E = (0, r.useRef)(null),
                        A = (0, r.useCallback)(() => {
                            if ((0, je.wU)()) return (0, je.SW)();
                            E.current && (0, je.P3)(t, n, E.current, u, s, l);
                        }, [t, n, l, u, s]);
                    return o().createElement(
                        'div',
                        Bu(
                            {
                                ref: E,
                                onClick:
                                    ((g = c.props.onClick),
                                    (e) => {
                                        d && (A(), i && i(e), g && g(e));
                                    }),
                            },
                            m,
                        ),
                        c,
                    );
                    var g;
                };
                let wu, yu;
                (!(function (e) {
                    ((e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle'));
                })(wu || (wu = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(yu || (yu = {})));
                const ku = {
                        base: 'RadioButton_base_d9',
                        base__disabled: 'RadioButton_base__disabled_84',
                        input: 'RadioButton_input_24',
                        base__small: 'RadioButton_base__small_71',
                        base__medium: 'RadioButton_base__medium_d8',
                        blank: 'RadioButton_blank_b5',
                        blankHover: 'RadioButton_blankHover_5e',
                        blankMousedown: 'RadioButton_blankMousedown_0e',
                        check: 'RadioButton_check_f2',
                        checkHover: 'RadioButton_checkHover_c6',
                        checkMousedown: 'RadioButton_checkMousedown_a7',
                        transition: 'RadioButton_transition_b3',
                        base__blank: 'RadioButton_base__blank_46',
                        base__blankHover: 'RadioButton_base__blankHover_9a',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd',
                        base__check: 'RadioButton_base__check_fe',
                        base__checkHover: 'RadioButton_base__checkHover_2f',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_83',
                        label: 'RadioButton_label_7f',
                    },
                    Tu = [
                        'children',
                        'labelRenderer',
                        'value',
                        'currentValue',
                        'autofocus',
                        'disabled',
                        'size',
                        'label',
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
                    ];
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const Mu = (0, r.memo)((e) => {
                        let t = e.children,
                            u = e.labelRenderer,
                            a = e.value,
                            n = e.currentValue,
                            s = e.autofocus,
                            l = void 0 !== s && s,
                            i = e.disabled,
                            c = void 0 !== i && i,
                            _ = e.size,
                            d = void 0 === _ ? yu.Medium : _,
                            m = e.label,
                            E = e.soundHover,
                            A = void 0 === E ? 'highlight' : E,
                            g = e.soundClick,
                            b = void 0 === g ? 'play' : g,
                            p = e.onMouseEnter,
                            C = e.onMouseLeave,
                            h = e.onMouseUp,
                            f = e.onMouseDown,
                            F = e.onClick,
                            D = e.onChange,
                            B = e.onFocus,
                            S = e.onBlur,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Tu);
                        const y = a === n,
                            k = (0, r.useState)(!1),
                            T = k[0],
                            N = k[1],
                            M = (0, r.useState)(!1),
                            I = M[0],
                            x = M[1],
                            O = (0, r.useState)(l),
                            L = O[0],
                            R = O[1],
                            P = (0, r.useRef)(null),
                            H = (0, r.useCallback)(() => {
                                !c && P.current && (P.current.focus(), R(!0));
                            }, [c]),
                            z = (0, r.useCallback)(
                                (e) => {
                                    L && null !== P.current && !P.current.contains(e.target) && R(!1);
                                },
                                [L],
                            );
                        ((0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', z),
                                () => {
                                    document.removeEventListener('mousedown', z);
                                }
                            ),
                            [z],
                        ),
                            (0, r.useEffect)(() => {
                                R(l);
                            }, [l]));
                        const U = (0, r.useCallback)(
                                (e) => {
                                    c || (D && D(a), F && F(a, e));
                                },
                                [c, D, F, a],
                            ),
                            G = (0, r.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const t = e.button === Dt.LEFT;
                                        (t && N(!0), t && f && f(a, e), b && W(b), l && H());
                                    }
                                },
                                [l, c, f, H, b, a],
                            ),
                            V = (0, r.useCallback)(
                                (e) => {
                                    c || (N(!1), h && h(a, e));
                                },
                                [c, h, a],
                            ),
                            j = (0, r.useCallback)(
                                (e) => {
                                    c || (p && p(a, e), A && W(A), x(!0));
                                },
                                [c, p, A, a],
                            ),
                            $ = (0, r.useCallback)(
                                (e) => {
                                    c || (N(!1), x(!1), C && C(a, e));
                                },
                                [c, C, a],
                            ),
                            X = (0, r.useCallback)(
                                (e) => {
                                    c || (R(!0), B && B(a, e));
                                },
                                [c, B, a],
                            ),
                            Y = (0, r.useCallback)(
                                (e) => {
                                    c || (R(!1), S && S(a, e));
                                },
                                [c, S, a],
                            ),
                            K = v()(ku.base, ku[`base__${d}`], {
                                [ku.base__blank]: !y && !I,
                                [ku.base__blankHover]: !y && I && !T,
                                [ku.base__blankMousedown]: !y && I && T,
                                [ku.base__check]: y && !I,
                                [ku.base__checkHover]: y && I && !T,
                                [ku.base__checkMousedown]: y && I && T,
                                [ku.base__focused]: L,
                                [ku.base__disabled]: c,
                            }),
                            Z = (0, r.useMemo)(
                                () => ({ isHovered: I, isMouseDown: T, isFocused: L, isChecked: y }),
                                [I, T, L, y],
                            ),
                            J = (0, r.useRef)(ku.blank),
                            Q = (0, r.useRef)(ku.blankHover),
                            ee = (0, r.useRef)(ku.blankMousedown),
                            te = (0, r.useRef)(ku.check),
                            ue = (0, r.useRef)(ku.checkHover),
                            ae = (0, r.useRef)(ku.checkMousedown);
                        return (
                            (0, r.useEffect)(
                                q(() => {
                                    ((J.current = v()(ku.blank, ku.transition)),
                                        (Q.current = v()(ku.blankHover, ku.transition)),
                                        (ee.current = v()(ku.blankMousedown, ku.transition)),
                                        (te.current = v()(ku.check, ku.transition)),
                                        (ue.current = v()(ku.checkHover, ku.transition)),
                                        (ae.current = v()(ku.checkMousedown, ku.transition)));
                                }),
                                [],
                            ),
                            o().createElement(
                                'div',
                                Nu(
                                    {
                                        ref: P,
                                        className: K,
                                        onClick: U,
                                        onMouseEnter: j,
                                        onMouseLeave: $,
                                        onMouseDown: G,
                                        onMouseUp: V,
                                        onFocus: X,
                                        onBlur: Y,
                                    },
                                    w,
                                ),
                                o().createElement(
                                    'div',
                                    { className: ku.input },
                                    o().createElement('div', { className: J.current }),
                                    o().createElement('div', { className: Q.current }),
                                    o().createElement('div', { className: ee.current }),
                                    o().createElement('div', { className: te.current }),
                                    o().createElement('div', { className: ue.current }),
                                    o().createElement('div', { className: ae.current }),
                                ),
                                o().createElement('div', { className: ku.label }, m || t || (u && u(Z))),
                            )
                        );
                    }),
                    Iu = 'RadioGroup_base_6e',
                    xu = 'RadioGroup_radio_3b',
                    Ou = 'RadioGroup_label_86',
                    Lu = (0, r.memo)(({ data: e, selectedValue: t, onClickHandler: u }) => {
                        const a = (0, r.useState)(t),
                            n = a[0],
                            s = a[1],
                            l = (0, r.useCallback)(
                                (t) => {
                                    t && (s(t), void 0 !== u && u(e[0].name, t));
                                },
                                [e, u],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                s(t);
                            }, [t]),
                            o().createElement(
                                'div',
                                { className: Iu },
                                null == e
                                    ? void 0
                                    : e.map((e) =>
                                          o().createElement(
                                              'div',
                                              { className: xu, key: e.id },
                                              o().createElement(
                                                  Qe,
                                                  { header: e.tooltipHeader, body: e.tooltipBody },
                                                  o().createElement(
                                                      Mu,
                                                      { value: e.value, currentValue: n, onClick: () => l(e.value) },
                                                      o().createElement(We, { className: Ou, text: e.label }),
                                                  ),
                                              ),
                                          ),
                                      ),
                            )
                        );
                    }),
                    Ru = ['children'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Hu = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, Ru);
                    return o().createElement(
                        Ye,
                        Pu(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const zu = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const a = o().createElement('div', { className: u }, e);
                    if (t.header || t.body) return o().createElement(Qe, t, a);
                    const n = t.contentId,
                        r = t.args,
                        s = null == r ? void 0 : r.contentId;
                    return n || s
                        ? o().createElement(Ye, Wu({}, t, { contentId: n || s }), a)
                        : o().createElement(Hu, t, a);
                };
                function Uu(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Gu(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
                function Vu(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const a = Uu(e[u]);
                        if (t(a, u, e)) return a;
                    }
                }
                const ju = 'ToggleButton_base_19',
                    $u = 'ToggleButton_overlay_6b',
                    Xu = 'ToggleButton_base__active_6c',
                    qu = 'ToggleButton_button_1c',
                    Yu = 'ToggleButton_indicator_9b',
                    Ku = 'ToggleButton_counter_63',
                    Zu = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Qu = o().memo(function (e) {
                        let t = e.isActive,
                            u = e.counter,
                            a = e.className,
                            n = e.children,
                            r = e.type,
                            s = void 0 === r ? G.secondary : r,
                            l = e.size,
                            i = void 0 === l ? V.small : l,
                            c = e.hasIndicator,
                            _ = void 0 === c || c,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Zu);
                        return o().createElement(
                            'div',
                            { className: v()(ju, a, t && Xu) },
                            o().createElement($, Ju({ type: s, size: i, mixClass: qu }, d), n),
                            o().createElement('div', { className: $u }),
                            _ && o().createElement('div', { className: Yu }),
                            Boolean(u) &&
                                o().createElement(
                                    'div',
                                    { className: Ku },
                                    o().createElement(hu, { value: u, size: 'small' }),
                                ),
                        );
                    }),
                    ea = 'FilterTitle_base_53',
                    ta = 'FilterTitle_label_14',
                    ua = 'FilterTitle_discount_49',
                    aa = 'FilterTitle_discountIcon_d4',
                    na = ({ label: e, hasDiscount: t, className: u }) =>
                        o().createElement(
                            'div',
                            { className: v()(ea, u) },
                            o().createElement('div', { className: ta }, e),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: ua },
                                    o().createElement('div', { className: aa }),
                                ),
                        ),
                    ra = 'ToggleIcon_base_31',
                    oa = 'ToggleIcon_base__small_0e',
                    sa = 'ToggleIcon_icon_9e',
                    la = o().memo(function ({ icon: e, iconParams: t, isSmall: u = !1, classNames: a }) {
                        return o().createElement(
                            'div',
                            { className: v()(ra, null == a ? void 0 : a.base, u && oa) },
                            o().createElement('div', {
                                className: v()(sa, null == a ? void 0 : a.icon),
                                style: {
                                    backgroundImage: `url(${e})`,
                                    width: (null == t ? void 0 : t.iconWidth) || 'inherit',
                                    height: (null == t ? void 0 : t.iconHeight) || 'inherit',
                                },
                            }),
                        );
                    }),
                    ia = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ca = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const _a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    da = (e) =>
                        _a
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = ca.length - 1; u >= 0; u--)
                                      for (; e >= ca[u]; ) ((t += ia[u]), (e -= ca[u]));
                                  return t;
                              })(e),
                    ma = 'VehicleTier_base_99',
                    Ea = 'VehicleTier_base__small_67',
                    Aa = ({ level: e, isSmall: t = !1 }) =>
                        o().createElement('div', { className: v()(ma, t && Ea) }, da(e)),
                    ga = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_6d',
                        icon__nation: 'ToggleButtonIcon_icon__nation_76',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_40',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_f4',
                        icon__selected: 'ToggleButtonIcon_icon__selected_29',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_44',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_de',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_85',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_02',
                        icon__locationUnique: 'ToggleButtonIcon_icon__locationUnique_aa',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_ed',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_d8',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_ec',
                    },
                    ba = ({
                        id: e,
                        icon: t,
                        iconParams: u,
                        type: a,
                        isSmall: n = !0,
                        isSelected: r = !1,
                        baseClassName: s = '',
                        iconClassName: l = '',
                    }) => {
                        return a === wu.VehicleTier
                            ? o().createElement(Aa, { isSmall: n, level: Number(e) })
                            : o().createElement(la, {
                                  icon: t,
                                  isSmall: n,
                                  iconParams: u,
                                  classNames: {
                                      icon: v()(
                                          ga[`icon__${a}`],
                                          ga[`icon__${a}${((i = e), i[0].toUpperCase() + i.slice(1))}`],
                                          r && ga.icon__selected,
                                          l,
                                      ),
                                      base: s,
                                  },
                              });
                        var i;
                    },
                    pa = {
                        base: 'FilterToggleGroup_base_bd',
                        title: 'FilterToggleGroup_title_5c',
                        content: 'FilterToggleGroup_content_1b',
                        toggle: 'FilterToggleGroup_toggle_c2',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_51',
                    },
                    Ca = ['id', 'isSelected', 'tooltip', 'icon', 'counter'];
                function ha() {
                    return (
                        (ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ha.apply(this, arguments)
                    );
                }
                let fa;
                !(function (e) {
                    ((e.Default = 'default'), (e.InPopup = 'inPopup'));
                })(fa || (fa = {}));
                const va = ({ header: e, body: t, contentId: u, targetId: a }) =>
                        u
                            ? { contentId: u, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    Fa = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: a,
                        filters: n,
                        onClick: r,
                        className: s,
                        toggleProps: l,
                        theme: i = fa.Default,
                    }) => {
                        const c = i === fa.InPopup;
                        return o().createElement(
                            'div',
                            { className: v()(pa.base, pa[`base__${i}`], s) },
                            c && o().createElement(na, { className: pa.title, label: u, hasDiscount: a }),
                            o().createElement(
                                'div',
                                { className: pa.content },
                                Gu(n, (u) => {
                                    let a = u.id,
                                        n = u.isSelected,
                                        s = u.tooltip,
                                        i = u.icon,
                                        _ = u.counter;
                                    const d = (function (e, t) {
                                            if (null == e) return {};
                                            var u,
                                                a,
                                                n = {},
                                                r = Object.keys(e);
                                            for (a = 0; a < r.length; a++)
                                                ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                            return n;
                                        })(u, Ca),
                                        m = d.iconWidth,
                                        E = d.iconHeight;
                                    return o().createElement(
                                        zu,
                                        { key: a, tooltipArgs: va(s), className: pa.toggle },
                                        o().createElement(
                                            Qu,
                                            ha({}, l, {
                                                className: v()(pa.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == r ? void 0 : r(e, a)),
                                                counter: _,
                                            }),
                                            o().createElement(ba, {
                                                id: a,
                                                icon: i,
                                                iconParams: { iconWidth: m, iconHeight: E },
                                                type: t,
                                                isSmall: c,
                                                isSelected: n,
                                                baseClassName: null == l ? void 0 : l.baseClassName,
                                                iconClassName: v()(
                                                    null == l ? void 0 : l.iconClassName,
                                                    (null == l ? void 0 : l.parentStyles) &&
                                                        (null == l ? void 0 : l.parentStyles[`icon_${a}`]),
                                                ),
                                            }),
                                        ),
                                    );
                                }),
                            ),
                        );
                    },
                    Da = () => {
                        const e = (0, r.useState)(l.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    u(l.O.view.getScale());
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
                    },
                    Ba = {
                        base: 'NumberRange_base_65',
                        base__animation: 'NumberRange_base__animation_70',
                        blinkAnim: 'NumberRange_blinkAnim_5f',
                        from: 'NumberRange_from_45',
                        from__red: 'NumberRange_from__red_53',
                        separatorWrapper: 'NumberRange_separatorWrapper_5a',
                        separator: 'NumberRange_separator_61',
                        counterGlow: 'NumberRange_counterGlow_f6',
                    },
                    Sa = R.strings.crew.barracks.berthsAmountDivider(),
                    wa = R.strings.crew.filterPanel.counter.selectLimit,
                    ya = (0, r.memo)(function ({
                        isFilterRange: e,
                        from: t,
                        to: u,
                        className: a,
                        isSelectMode: n = !1,
                        isSelectedLimitReached: r = !1,
                        isHideTotalCounter: s = !1,
                        counterGlowShift: l,
                        classNames: i,
                        isAnimationEnabled: c = !1,
                    }) {
                        const _ = l
                            ? o().createElement(
                                  'div',
                                  { className: Ba.separatorWrapper },
                                  o().createElement(We, { className: Ba.separator, text: Sa }),
                                  o().createElement('div', {
                                      style: l,
                                      className: v()(Ba.counterGlow, r && Ba.blink, null == i ? void 0 : i.counterGlow),
                                  }),
                              )
                            : o().createElement(We, { className: Ba.separator, text: Sa });
                        return n
                            ? o().createElement(
                                  Qe,
                                  { header: wa.header(), body: wa.body(), ignoreShowDelay: !0 },
                                  o().createElement(
                                      'div',
                                      { className: v()(Ba.base, a) },
                                      o().createElement(We, { className: Ba.from, text: String(t) }),
                                      (t !== u || r) &&
                                          o().createElement(
                                              o().Fragment,
                                              null,
                                              _,
                                              o().createElement(We, { text: String(u) }),
                                          ),
                                  ),
                              )
                            : o().createElement(
                                  'div',
                                  {
                                      className: v()(
                                          Ba.base,
                                          e ? 0 === t && Ba.base__animation : t > u && Ba.base__animation,
                                          c && Ba.base__animation,
                                          a,
                                      ),
                                  },
                                  o().createElement(We, {
                                      className: v()(
                                          Ba.from,
                                          e ? 0 === t && u > 0 && Ba.from__red : t > u && Ba.from__red,
                                      ),
                                      text: String(t),
                                  }),
                                  (!s || t !== u) &&
                                      o().createElement(
                                          o().Fragment,
                                          null,
                                          _,
                                          o().createElement(We, { text: String(u) }),
                                      ),
                              );
                    }),
                    ka = 'NumberRangeWithLabel_base_fd',
                    Ta = 'NumberRangeWithLabel_counterGlow_fa',
                    Na = 'NumberRangeWithLabel_blink_15',
                    Ma = (0, r.memo)(
                        ({
                            title: e,
                            label: t = '',
                            isGlowVisible: u = !1,
                            isSelectedLimitReached: a = !1,
                            isFilterRange: n = !1,
                            isSelectMode: r = !1,
                            className: s,
                            classNames: l,
                            from: i,
                            to: c,
                            staticCounterGlowShift: _,
                            isHideTotalCounter: d = !1,
                            isAnimationEnabled: m = !1,
                        }) => {
                            const E = Da(),
                                A =
                                    i !== c || a
                                        ? 7 * String(i).length * E + 4 * E
                                        : Math.round((7 * String(i).length * E) / 2),
                                g = { left: _ || A };
                            return o().createElement(
                                'div',
                                { className: v()(ka, s) },
                                t,
                                o().createElement(ya, {
                                    isFilterRange: n,
                                    isSelectedLimitReached: a,
                                    isSelectMode: r,
                                    from: i,
                                    to: c,
                                    isHideTotalCounter: d,
                                    classNames: l,
                                    isAnimationEnabled: m,
                                }),
                                u &&
                                    n &&
                                    o().createElement('div', {
                                        style: g,
                                        className: v()(Ta, a && Na, null == l ? void 0 : l.counterGlow),
                                    }),
                                e,
                            );
                        },
                    );
                function Ia() {
                    return !1;
                }
                console.log;
                var xa = u(174);
                function Oa(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return La(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return La(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function La(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const Ra = (e) => (0 === e ? window : window.subViews.get(e));
                const Pa = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Gu(e, (e) => ('object' == typeof e ? Pa(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Pa(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? Pa(t) : t]),
                                    )
                            : e,
                    Ha = (e) => Pa(e);
                var Wa = u(946);
                const za = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: s, mocks: i }) {
                                const c = (0, r.useRef)([]),
                                    _ = (u, a, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Ra,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            i = l.O.view.addModelObserver(s, t, !0);
                                                        return (n.set(i, u), e && u(o(r)), i);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const u = o(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Oa(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            s =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = xa.LO.box(a, { equals: Ia });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, xa.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = xa.LO.box(a, { equals: Ia });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, xa.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = xa.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, xa.aD)((t) => {
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
                                                                r = Object.entries(n),
                                                                o = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = xa.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, xa.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                o[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: u, model: d, externalModel: s, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === u && n ? n.controls(m) : t(m),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    m = (0, r.useState)(a),
                                    E = m[0],
                                    A = m[1],
                                    g = (0, r.useState)(() => _(a, n, i)),
                                    b = g[0],
                                    p = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? p(_(E, n, i)) : (d.current = !0);
                                    }, [i, E, n]),
                                    (0, r.useEffect)(() => {
                                        A(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    o().createElement(u.Provider, { value: b }, s)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    carouselModel: e.object('carouselModel'),
                                    filterModel: e.object('filterModel'),
                                    filterModelStructure: e.object('filterModel.structure'),
                                    carouselItemsList: e.array('carouselModel.carouselItemsList'),
                                    arrowsList: e.array('carouselModel.arrowsList'),
                                    bookmarksList: e.array('carouselModel.bookmarksList'),
                                    tabsItemsList: e.array('tabsModel.tabItemsList', []),
                                    billModel: e.object('billModel'),
                                    buyPrice: e.array('billModel.buyPrice.price'),
                                    headerVehicleInfo: e.object('headerVehicleInfoModel'),
                                    seasonsTabs: e.object('seasonsModel'),
                                    seasonsTabsItems: e.array('seasonsModel.seasonsList'),
                                    markersModel: e.object('markersModel'),
                                    markers: e.array('markersModel.markersList'),
                                    editModeData: e.array('markersModel.editModeData'),
                                    availability: e.array('availability'),
                                    toolbarModel: e.object('toolbarModel'),
                                    toolbarButtonList: e.array('toolbarModel.buttonList'),
                                    selectedItemsCounter: e.array('selectedItemsCounter'),
                                    hiddenItemsCounter: e.array('hiddenItemsCounter'),
                                    stageSwitcherWidgetModel: e.object('stageSwitcherWidgetModel'),
                                    customizationTypes: e.object('markersModel.customizationTypes'),
                                    magneticToolModel: e.object('magneticToolModel'),
                                },
                                u = (0, Wa.Om)(
                                    () => Ha(t.carouselItemsList.get()).slice(0, t.carouselModel.get().totalItemsCount),
                                    { equals: Ia },
                                ),
                                a = (0, Wa.Om)(() => Vu(u(), (e) => e.isSelected), { equals: Ia }),
                                n = (0, Wa.Om)(
                                    () => {
                                        var e;
                                        return null == (e = a()) ? void 0 : e.intCD;
                                    },
                                    { equals: Ia },
                                ),
                                r = (0, Wa.Om)(() => Ha(t.arrowsList.get()), { equals: Ia }),
                                o = (0, Wa.Om)(() => Ha(t.bookmarksList.get()), { equals: Ia }),
                                s = (0, Wa.Om)(() => Ha(t.tabsItemsList.get()), { equals: Ia }),
                                l = (0, Wa.Om)(() => Vu(s(), (e) => e.isSelected), { equals: Ia }),
                                i = (0, Wa.Om)(
                                    () => {
                                        var e;
                                        return null == (e = l()) ? void 0 : e.itemType;
                                    },
                                    { equals: Ia },
                                ),
                                c = (0, Wa.Om)(() => Ha(t.seasonsTabsItems.get()), { equals: Ia }),
                                _ = (0, Wa.Om)(() => Ha(t.markers.get()), { equals: Ia }),
                                d = (0, Wa.Om)(() => Ha(t.editModeData.get()), { equals: Ia }),
                                m = (0, Wa.Om)(() => Ha(t.toolbarModel.get()), { equals: Ia }),
                                E = (0, Wa.Om)(() => Ha(t.billModel.get()), { equals: Ia }),
                                A = (0, Wa.Om)(() => Ha(t.buyPrice.get()), { equals: Ia }),
                                g = (0, Wa.Om)(() => Ha(t.stageSwitcherWidgetModel.get()), { equals: Ia }),
                                b = (0, Wa.Om)(() => Ha(t.toolbarButtonList.get()), { equals: Ia }),
                                p = (0, Wa.Om)(() => Ha(t.filterModelStructure.get()), { equals: Ia });
                            return Object.assign({}, t, {
                                computes: {
                                    getItems: u,
                                    getSelectedItem: a,
                                    getSelectedItemId: n,
                                    getCategories: o,
                                    getTabsItemsList: s,
                                    getSelectedTab: l,
                                    getSelectedTabItemType: i,
                                    getSeasonsTabsItemsList: c,
                                    getMarkersList: _,
                                    getEditData: d,
                                    getBillModel: E,
                                    getBuyPrice: A,
                                    getToolbarButtonsList: b,
                                    getArrowsList: r,
                                    getStageSwitcher: g,
                                    getStructureList: p,
                                    getToolbarData: m,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onExpandCarousel: e.createCallback((e) => ({ isExpanded: e }), 'onExpandCarousel'),
                            onSelectItem: e.createCallback((e) => ({ itemId: e }), 'onSelectItem'),
                            onUnselectItem: e.createCallbackNoArgs('onUnselectItem'),
                            hoverItem: e.createCallback((e) => ({ itemId: e }), 'onHoverItem'),
                            onEditItem: e.createCallback((e) => ({ itemId: e }), 'onEditItem'),
                            clearFilter: e.createCallbackNoArgs('clearFilter'),
                            clickDecalsBanner: e.createCallbackNoArgs('onClickDecalsBanner'),
                            moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                            selectTab: e.createCallback((e) => ({ tabId: e }), 'onSelectTab'),
                            hoverTab: e.createCallback((e) => ({ tabId: e }), 'onHoverTab'),
                            closeEditItem: e.createCallbackNoArgs('onCloseEditItem'),
                            onSceneOverChange: e.createCallback(
                                (e) => ({ isOver: !(0, je.wU)() && e }),
                                'onSceneOverChange',
                            ),
                            onSceneDraggingChange: e.createCallback(
                                (e) => ({ isDragging: e }),
                                'onSceneDraggingChange',
                            ),
                            onSceneClick: e.createCallbackNoArgs('onSceneClick'),
                            selectSeason: e.createCallback((e) => ({ seasonName: e }), 'onSelectSeason'),
                            selectAnchor: e.createCallback(
                                (e, t, u) => ({ areaId: e, slotType: t, regionIdx: u }),
                                'markersModel.onSelectAnchor',
                            ),
                            hoverAnchor: e.createCallback(
                                (e, t, u, a) => ({ areaId: e, slotType: t, regionIdx: u, hover: a }),
                                'markersModel.onHoverAnchor',
                            ),
                            dragAnchor: e.createCallback(
                                (e, t, u) => ({ areaId: e, slotType: t, regionIdx: u }),
                                'markersModel.onDragAnchor',
                            ),
                            onRemoveChar: e.createCallbackNoArgs('markersModel.onRemoveChar'),
                            onAddChar: e.createCallback((e) => ({ char: e }), 'markersModel.onAddChar'),
                            onDeleteAllChars: e.createCallbackNoArgs('markersModel.onDeleteAllChars'),
                            onEnterInput: e.createCallbackNoArgs('markersModel.onEnterInput'),
                            onApplyToAllSeasonsChange: e.createCallbackNoArgs('onApplyToAllSeasonsChange'),
                            onCancelChanges: e.createCallbackNoArgs('billModel.onCancelChanges'),
                            onAutoRentHintClose: e.createCallbackNoArgs('billModel.onAutoRentHintClose'),
                            onAutoRentChange: e.createCallbackNoArgs('billModel.onAutoRentChange'),
                            onClearBasket: e.createCallbackNoArgs('billModel.onClearBasket'),
                            onShowBuyWindow: e.createCallbackNoArgs('billModel.onShowBuyWindow'),
                            closeBinEsc: e.createCallbackNoArgs('onCloseBinEsc'),
                            buyItems: e.createCallbackNoArgs('onBuyItems'),
                            onCloseStyleInfoEsc: e.createCallbackNoArgs('onCloseStyleInfoEsc'),
                            changeFilter: e.createCallback((e, t) => ({ key: e, value: t }), 'changeFilter'),
                            onToolbarItemClick: e.createCallback(
                                (e, t) => ({ actionType: e, actionData: t }),
                                'toolbarModel.onActionBtnClick',
                            ),
                            progressiveInfoButtonClick: e.createCallbackNoArgs('onProgressiveInfoButtonClick'),
                            onStageChange: e.createCallback(
                                (e) => ({ selectedLevel: e }),
                                'stageSwitcherWidgetModel.onChange',
                            ),
                            onPressSelectNextItem: e.createCallback((e) => ({ isLeft: e }), 'onPressSelectNextItem'),
                            onRequestItems: e.createCallback(
                                (e, t) => ({ startIndex: e, endIndex: t }),
                                'onRequestItems',
                            ),
                        }),
                    ),
                    Ua = za[0],
                    Ga = za[1],
                    Va = {
                        base: 'Filters_base_c3',
                        reverse: 'Filters_reverse_26',
                        filtersPopover: 'Filters_filtersPopover_22',
                        filtersPopoverUpdate: 'Filters_filtersPopoverUpdate_e7',
                        filtersPopoverIcon: 'Filters_filtersPopoverIcon_bc',
                        buttonFavorites: 'Filters_buttonFavorites_f4',
                        counterWrapper: 'Filters_counterWrapper_dd',
                        filterNumbers: 'Filters_filterNumbers_72',
                        filtersClearButton: 'Filters_filtersClearButton_eb',
                        filtersClearIcon: 'Filters_filtersClearIcon_79',
                        hiddenItemCounter: 'Filters_hiddenItemCounter_d1',
                    },
                    ja = R.strings.customization.tooltips.filters,
                    $a = R.strings.customization.filters,
                    Xa = R.strings.customization,
                    qa = 'all',
                    Ya = 'sale',
                    Ka = 'inventory',
                    Za = [
                        {
                            label: $a.labelAll(),
                            id: qa,
                            value: qa,
                            name: 'availability',
                            tooltipHeader: ja.allRadioHeader(),
                            tooltipBody: ja.allRadioBody(),
                        },
                        {
                            label: $a.labelStock(),
                            id: Ka,
                            value: Ka,
                            tooltipHeader: ja.stockRadioHeader(),
                            tooltipBody: ja.stockRadioBody(),
                        },
                        {
                            label: $a.labelSale(),
                            id: Ya,
                            value: Ya,
                            tooltipHeader: ja.saleRadioHeader(),
                            tooltipBody: ja.saleRadioBody(),
                        },
                    ],
                    Ja = (0, Ft.Pi)(({ isReverse: e = !1, buttonSize: t }) => {
                        const u = Ga(),
                            a = u.controls,
                            n = u.model,
                            s = y().mediaSize,
                            l = n.filterModel.get(),
                            i = l.availability,
                            c = l.filteredItemsCounter,
                            _ = l.allItemsCounter,
                            d = l.newHiddenItemsCounter,
                            m = l.isFilteringActive,
                            E = l.favorite,
                            A = n.computes.getStructureList,
                            g = (0, r.useMemo)(
                                () => [
                                    {
                                        id: 'fav1',
                                        icon: 'R.images.gui.maps.icons.customization.icon_favorites',
                                        isSelected: E,
                                        counter: 0,
                                        tooltip: {
                                            header: ja.favoritesToggleHeader(),
                                            body: ja.favoritesToggleBody(),
                                            contentId: 0,
                                            targetId: 0,
                                        },
                                    },
                                ],
                                [E],
                            ),
                            b = (0, r.useCallback)(() => {
                                a.changeFilter('favorite', !E);
                            }, [a, E]),
                            p = e ? vu.Top : vu.Bottom;
                        return o().createElement(
                            'div',
                            { className: v()(Va.base, e && Va.reverse) },
                            o().createElement(
                                'div',
                                { className: Va.counterWrapper },
                                o().createElement(
                                    Su,
                                    {
                                        contentId:
                                            R.views.lobby.customization.popovers.CustomizationFilterPopoverView(
                                                'resId',
                                            ),
                                        direction: A().length > 5 && s <= B.Small ? vu.Left : p,
                                    },
                                    o().createElement(
                                        'div',
                                        null,
                                        o().createElement(
                                            Qe,
                                            { header: ja.popoverButtonTitle(), body: ja.popoverButtonBody() },
                                            o().createElement(
                                                $,
                                                {
                                                    type: G.ghost,
                                                    size: t,
                                                    mixClass: v()(Va.filtersPopover, e && Va.filtersPopoverUpdate),
                                                },
                                                o().createElement('div', { className: Va.filtersPopoverIcon }),
                                            ),
                                        ),
                                        d > 0 &&
                                            o().createElement(hu, {
                                                size: 'normal',
                                                value: d,
                                                className: Va.hiddenItemCounter,
                                            }),
                                    ),
                                ),
                                m &&
                                    !e &&
                                    o().createElement(Ma, {
                                        title:
                                            m &&
                                            o().createElement(
                                                Qe,
                                                { body: Xa.customization.resetFilter.tooltip.text() },
                                                o().createElement(
                                                    $,
                                                    {
                                                        type: G.ghost,
                                                        onClick: a.clearFilter,
                                                        mixClass: v()(Va.filtersClearButton),
                                                    },
                                                    o().createElement('div', { className: Va.filtersClearIcon }),
                                                ),
                                            ),
                                        from: c,
                                        to: _,
                                        isFilterRange: !0,
                                        isGlowVisible: !0,
                                        isSelectMode: !1,
                                        isSelectedLimitReached: d > 0,
                                        className: Va.filterNumbers,
                                        staticCounterGlowShift: -1,
                                        isAnimationEnabled: d > 0,
                                    }),
                            ),
                            o().createElement(Fa, {
                                id: 'favorites',
                                label: '',
                                type: wu.Default,
                                hasDiscount: !1,
                                filters: g,
                                toggleProps: { type: G.ghost },
                                onClick: b,
                                className: v()(Va.buttonFavorites, e && Va.buttonFavoritesBorder),
                            }),
                            o().createElement(Lu, { onClickHandler: a.changeFilter, data: Za, selectedValue: i }),
                        );
                    }),
                    Qa = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    },
                    en = (e, t, u) => Math.min(Math.max(e, t), u),
                    tn = {
                        base: 'Switcher_base_9c',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_57',
                        base__small: 'Switcher_base__small_96',
                        base__isVisible: 'Switcher_base__isVisible_02',
                    },
                    un = (e) => ({ transitionDelay: e / 20 + 's' }),
                    an = 'SwitcherBullet_base_94',
                    nn = 'SwitcherBullet_container_28',
                    rn = 'SwitcherBullet_base__selected_6e',
                    on = 'SwitcherBullet_container__text_ff',
                    sn = 'SwitcherBullet_finishedHover_42',
                    ln = 'SwitcherBullet_base__finished_e2',
                    cn = 'SwitcherBullet_base__hover_87',
                    _n = 'SwitcherBullet_iconSmall_d4',
                    dn = 'SwitcherBullet_base__afterCurrent_f6',
                    mn = 'SwitcherBullet_iconBig_65',
                    En = 'SwitcherBullet_base__currentSelected_eb',
                    An = 'SwitcherBullet_iconText_ca',
                    gn = 'SwitcherBullet_iconTextGlow_a0',
                    bn = 'SwitcherBullet_clickArea_84',
                    pn = 'SwitcherBullet_base__disabled_2a',
                    Cn = 'SwitcherBullet_disabled_56',
                    hn = 'SwitcherBullet_number_08',
                    fn = 'SwitcherBullet_currentText_b6',
                    vn = 'SwitcherBullet_text_e9',
                    Fn = 'SwitcherBullet_texture_b3';
                var Dn, Bn;
                (!(function (e) {
                    ((e.BIG = 'big'), (e.SMALL = 'small'));
                })(Dn || (Dn = {})),
                    (function (e) {
                        ((e.LIGHT = 'light'), (e.DARK = 'dark'));
                    })(Bn || (Bn = {})));
                const Sn = R.images.gui.maps.icons.components.switcher.numbers,
                    wn = (0, r.memo)(
                        ({
                            numberToDisplay: e,
                            index: t,
                            selectedIndex: u,
                            previousSelectedIndex: a,
                            onChange: n,
                            currentIndex: s,
                            currentText: l,
                            isDisabled: i = !1,
                            mouseEnterSound: c,
                            clickSound: _,
                        }) => {
                            const d = t !== u,
                                m = (0, r.useState)(!1),
                                E = m[0],
                                A = m[1],
                                g = (0, r.useCallback)(() => {
                                    (A(!0), d && W(c));
                                }, [d, c]),
                                b = (0, r.useCallback)(() => {
                                    d && (W(_), n(e));
                                }, [d, _, e, n]),
                                p = (0, r.useCallback)(() => {
                                    A(!1);
                                }, []),
                                C = s || 0,
                                h = v()(
                                    an,
                                    t === u && rn,
                                    t === u && t === C && En,
                                    t > C && t !== u && dn,
                                    t <= C && ln,
                                    E && cn,
                                    i && pn,
                                ),
                                f = (0, r.useMemo)(
                                    () =>
                                        ((e, t, u) =>
                                            e === t
                                                ? un(0)
                                                : e === u
                                                  ? un(Math.abs(e - t) - 2)
                                                  : (u > t && e > t && e < u) || (u < t && e < t && e > u)
                                                    ? un(Math.abs(e - t) - 1)
                                                    : void 0)(t, a, u),
                                    [t, a, u],
                                ),
                                F = (0, r.useCallback)(
                                    () => ((t === u && t === C) || t === u ? Dn.BIG : Dn.SMALL),
                                    [t, u, C],
                                ),
                                D = (0, r.useMemo)(() => {
                                    const e = t > C ? Bn.LIGHT : Bn.DARK;
                                    return Object.assign({}, f, {
                                        backgroundImage: `url(${Sn.$dyn(`number_${t}_${F()}_${e}`)})`,
                                    });
                                }, [t, C, f, F]);
                            return o().createElement(
                                'div',
                                { className: h },
                                o().createElement(
                                    'div',
                                    { className: nn, style: f },
                                    o().createElement('div', { className: sn, style: f }),
                                    o().createElement('div', { className: _n, style: f }),
                                    o().createElement('div', { className: mn, style: f }),
                                    o().createElement('div', { className: Cn }),
                                    o().createElement('div', { className: hn, style: D }),
                                    o().createElement('div', {
                                        className: bn,
                                        style: f,
                                        onClick: b,
                                        onMouseEnter: g,
                                        onMouseLeave: p,
                                    }),
                                ),
                                l && t === s && o().createElement('div', { className: fn }, l),
                            );
                        },
                    ),
                    yn = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: u,
                        previousSelectedIndex: a,
                        onChange: n,
                        currentIndex: s = 0,
                        isDisabled: l = !1,
                        mouseEnterSound: i,
                        clickSound: c,
                        styleID: _,
                    }) => {
                        const d = t === u,
                            m = (0, r.useState)(!1),
                            E = m[0],
                            A = m[1],
                            g = (0, r.useCallback)(() => {
                                (A(!0), d || W(i));
                            }, [d, i]),
                            b = (0, r.useCallback)(() => {
                                d || (W(c), n(e));
                            }, [d, c, e, n]),
                            p = (0, r.useCallback)(() => {
                                A(!1);
                            }, []),
                            C = R.strings.vehicle_customization.style_switcher.$dyn(`style_${_}`).$dyn(`level${e}`),
                            h = v()(
                                an,
                                d && rn,
                                d && t === s && En,
                                t > s && t !== u && dn,
                                t <= s && ln,
                                E && cn,
                                l && pn,
                            ),
                            f = (0, r.useMemo)(
                                () =>
                                    ((e, t, u) =>
                                        e === t
                                            ? un(0)
                                            : e === u
                                              ? un(Math.abs(e - t) - 2)
                                              : (u > t && e > t && e < u) || (u < t && e < t && e > u)
                                                ? un(Math.abs(e - t) - 1)
                                                : void 0)(t, a, u),
                                [t, a, u],
                            ),
                            F = v()(nn, on);
                        return o().createElement(
                            'div',
                            { className: h },
                            o().createElement(
                                'div',
                                { className: F, style: f },
                                d && o().createElement('div', { className: Fn }),
                                !d && o().createElement('div', { className: gn }),
                                o().createElement('div', { className: An, style: f }),
                                o().createElement('div', { className: vn }, C),
                                o().createElement('div', {
                                    className: bn,
                                    style: f,
                                    onClick: b,
                                    onMouseEnter: g,
                                    onMouseLeave: p,
                                }),
                            ),
                        );
                    },
                    kn = 'SwitcherSeparator_base_06',
                    Tn = 'SwitcherSeparator_base__isBeforeSelectedBullet_a8',
                    Nn = 'SwitcherSeparator_base__notAnimated_73',
                    Mn = 'SwitcherSeparator_base__scaled_76',
                    In = 'SwitcherSeparator_base__rightTransformOrigin_b8',
                    xn = 'SwitcherSeparator_base__leftTransformOrigin_49',
                    On = 'SwitcherSeparator_base__transitionTransformOrigin_9f',
                    Ln = (0, r.memo)(({ index: e, selectedIndex: t, previousSelectedIndex: u, isAnimated: a = !0 }) => {
                        const n = ((e, t, u) =>
                                e === t + 1 || e === t - 1
                                    ? un(0)
                                    : e === u + 1 || e === u - 1
                                      ? un(Math.abs(u - t) - 2)
                                      : (u > t && e > t && e < u + 1) || (u < t && e < t && e > u - 1)
                                        ? un(Math.abs(e - t) - 1)
                                        : void 0)(e, u, t),
                            r = 1 === Math.abs(e - t),
                            s = 1 === Math.abs(e - u),
                            l = ((e, t, u, a) =>
                                e === u + 1 || (e === t + 1 && !a)
                                    ? In
                                    : e === u - 1 || (e === t - 1 && !a)
                                      ? xn
                                      : void 0)(e, u, t, r),
                            i = v()(
                                kn,
                                a && e < t && Tn,
                                a && s && r && On,
                                a && (e === t + 1 || e === t - 1) && Mn,
                                a && l,
                                !a && Nn,
                            );
                        return o().createElement('div', { className: i, style: n });
                    }),
                    Rn = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let Pn;
                !(function (e) {
                    e.small = 'small';
                })(Pn || (Pn = {}));
                const Hn = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: u,
                        currentText: a,
                        currentNumber: n,
                        startNumber: s = 1,
                        isBulletsBeforeCurrentDisabled: l = !1,
                        size: i,
                        mouseEnterSound: c = 'highlight',
                        clickSound: _ = 'play',
                        isArabic: d = !1,
                        hasLightShadows: m = !1,
                        styleID: E = 0,
                        switcherType: A = tt.digital,
                    }) => {
                        const g = (0, r.useState)(!1),
                            b = g[0],
                            p = g[1];
                        (0, r.useEffect)(() => Qa(() => p(!0), 0), []);
                        const C = s + e - 1,
                            h = en(t, l && n ? n : s, C),
                            f = 'number' == typeof n ? en(n, s, C) : void 0,
                            F = Rn(h, s),
                            D = Rn(f, s),
                            B = (0, r.useRef)(F);
                        (0, r.useEffect)(() => {
                            B.current = F;
                        });
                        const S = B.current,
                            w = v()(
                                tn.base,
                                a && void 0 !== D && tn.base__hasCurrentText,
                                i && tn[`base__${i}`],
                                b && tn.base__isVisible,
                            ),
                            y = (0, r.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const u = [];
                                        for (let a = e; a <= t; a++) u.push(a);
                                        return u;
                                    })(s, C),
                                [C, s],
                            ),
                            k = A === tt.digital;
                        return o().createElement(
                            'div',
                            { className: w },
                            y.map((e, t) => {
                                const n = 2 * t,
                                    r = !(!l || !D) && n < D;
                                return o().createElement(
                                    o().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        o().createElement(Ln, {
                                            index: n - 1,
                                            selectedIndex: F,
                                            previousSelectedIndex: S,
                                            isAnimated: k,
                                        }),
                                    k
                                        ? o().createElement(wn, {
                                              index: n,
                                              selectedIndex: F,
                                              previousSelectedIndex: S,
                                              numberToDisplay: e,
                                              currentIndex: D,
                                              currentText: a,
                                              onChange: u,
                                              isDisabled: r,
                                              mouseEnterSound: c,
                                              clickSound: _,
                                              isArabic: d,
                                              hasLightShadows: m,
                                          })
                                        : o().createElement(yn, {
                                              index: n,
                                              selectedIndex: F,
                                              previousSelectedIndex: S,
                                              numberToDisplay: e,
                                              currentIndex: D,
                                              onChange: u,
                                              isDisabled: r,
                                              mouseEnterSound: c,
                                              clickSound: _,
                                              hasLightShadows: m,
                                              styleID: E,
                                          }),
                                );
                            }),
                        );
                    },
                    Wn = 'EscBtn_base_d0',
                    zn = 'EscBtn_esc_97',
                    Un = 'EscBtn_close_90',
                    Gn = (0, r.memo)(({ mixClass: e, soundClick: t = 'play', onCloseCallback: u }) => {
                        const a = v()(Wn, e);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(Ve, {
                                caption: '',
                                type: 'close',
                                soundClick: t,
                                onClick: u,
                                classNames: { base: Un },
                            }),
                            o().createElement('div', { className: zn }),
                        );
                    }),
                    Vn = 'Tab_base_05',
                    jn = 'Tab_content_99',
                    $n = 'Tab_base__selected_4b',
                    Xn = 'Tab_base__accent_b2',
                    qn = 'Tab_selectedDivider_25',
                    Yn = 'Tab_selectedDivider__left_57',
                    Kn = 'Tab_selectedDivider__right_78',
                    Zn = 'Tab_divider_0e',
                    Jn = 'Tab_divider__left_ac',
                    Qn = 'Tab_divider__right_44',
                    er = 'Tab_icon_fb',
                    tr = 'Tab_base__hover_54',
                    ur = 'Tab_plus_2d',
                    ar = 'Tab_iconWrapper_c5',
                    nr = 'Tab_label_e8',
                    rr = 'Tab_highlight_1c',
                    or = 'Tab_highlight__left_87',
                    sr = 'Tab_highlight__right_d6',
                    lr = 'Tab_tick_a3',
                    ir = 'Tab_tabsDivider_17',
                    cr = 'Tab_bubble_4f';
                let _r;
                !(function (e) {
                    ((e.Active = 'active'), (e.Accent = 'accent'), (e.Default = 'default'));
                })(_r || (_r = {}));
                const dr = R.images.gui.maps.icons.customization.tabs,
                    mr = R.strings.customization.itemTypes,
                    Er = R.strings.customization.tooltips.tabs,
                    Ar = (0, r.memo)(
                        ({
                            id: e,
                            itemType: t,
                            isFirst: u,
                            isPlus: a,
                            isLast: n,
                            isPrevAnotherGroup: s,
                            isNextAnotherGroup: l,
                            isNextSelected: i,
                            isAccent: c,
                            isSelected: _,
                            noveltyCounter: d,
                            onClick: m,
                            onHoverTab: E,
                        }) => {
                            const A = (0, r.useState)(!1),
                                g = A[0],
                                b = A[1],
                                p = (0, r.useCallback)(() => {
                                    _ || (z.playHighlight(), b(!0), E && E(e));
                                }, [e, _, E]),
                                C = (0, r.useMemo)(() => {
                                    let e;
                                    return (
                                        (e = _ ? _r.Active : c ? _r.Accent : _r.Default),
                                        { backgroundImage: `url(${dr.$dyn(`${t}_${e}`)})` }
                                    );
                                }, [c, _, t]),
                                h = v()(Vn, g && tr, _ && $n, c && !_ && Xn);
                            return o().createElement(
                                'div',
                                {
                                    onClick: () => {
                                        m(e);
                                    },
                                    onMouseEnter: p,
                                    onMouseLeave: () => {
                                        b(!1);
                                    },
                                    className: h,
                                },
                                u && !_ && o().createElement('div', { className: v()(Zn, Jn) }),
                                o().createElement(
                                    Qe,
                                    {
                                        header: String(Er.$dyn(`${t}_title`)),
                                        body: String(Er.$dyn(`${t}_description`)),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: jn },
                                        o().createElement(
                                            'div',
                                            { className: ar },
                                            o().createElement('div', { className: er, style: C }),
                                            a && o().createElement('div', { className: ur }),
                                        ),
                                        o().createElement('div', { className: nr }, mr.$dyn(`${t}`)),
                                        _
                                            ? o().createElement(
                                                  o().Fragment,
                                                  null,
                                                  o().createElement('div', { className: v()(rr, or) }),
                                                  o().createElement('div', { className: v()(rr, sr) }),
                                                  o().createElement('div', { className: lr }),
                                                  o().createElement('div', { className: v()(qn, Yn) }),
                                                  o().createElement('div', { className: v()(qn, Kn) }),
                                              )
                                            : o().createElement(
                                                  o().Fragment,
                                                  null,
                                                  s && o().createElement('div', { className: v()(Zn, Jn) }),
                                                  l && o().createElement('div', { className: v()(Zn, Qn) }),
                                              ),
                                    ),
                                ),
                                !l && !_ && !i && o().createElement('div', { className: n ? v()(Zn, Qn) : ir }),
                                Boolean(d) && o().createElement(We, { className: cr, text: d.toString() }),
                            );
                        },
                    ),
                    gr = 'Tabs_base_51',
                    br = 'Tabs_tabs_ab',
                    pr = 'Tabs_groupDivider_b2';
                function Cr() {
                    return (
                        (Cr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Cr.apply(this, arguments)
                    );
                }
                const hr = (0, r.memo)(
                        ({ isEditable: e, tabs: t, onClick: u, onHoverTab: a, onEditClose: n, mixClass: r }) => {
                            var s;
                            const l = null == (s = t.find((e) => e.isSelected)) ? void 0 : s.groupId;
                            return o().createElement(
                                'div',
                                { className: v()(gr, r) },
                                t &&
                                    t.map((e, n) => {
                                        const r = t[n + 1],
                                            s = t[n - 1],
                                            i = r && r.isSelected,
                                            c = s && e.groupId !== s.groupId,
                                            _ = r && e.groupId !== r.groupId,
                                            d = e.groupId === l;
                                        return o().createElement(
                                            'div',
                                            { key: `${n}-${e.id}`, className: br },
                                            o().createElement(
                                                Ar,
                                                Cr(
                                                    {
                                                        isFirst: 0 === n,
                                                        isLast: n === t.length - 1,
                                                        isNextSelected: i,
                                                        isPrevAnotherGroup: c,
                                                        isNextAnotherGroup: _,
                                                        isAccent: d,
                                                        onClick: u,
                                                        onHoverTab: a,
                                                    },
                                                    e,
                                                ),
                                            ),
                                            _ && o().createElement('div', { className: pr }),
                                        );
                                    }),
                                e && o().createElement(Gn, { onCloseCallback: n }),
                            );
                        },
                    ),
                    fr = 'ExtendedItem_base_8b',
                    vr = 'ExtendedItem_hoverBg_5c',
                    Fr = 'ExtendedItem_hoverBg__visible_6a',
                    Dr = 'ExtendedItem_toggleBorder_9c',
                    Br = 'ExtendedItem_toggleBorder__select_01',
                    Sr = 'ExtendedItem_toggle_24',
                    wr = 'ExtendedItem_size_1c',
                    yr = 'ExtendedItem_paletteIcon_87',
                    kr = R.images.gui.maps.icons.customization.toolbar.extended,
                    Tr = (0, r.memo)(({ item: e, onActionClick: t, actionType: u }) => {
                        const a = e.actionData,
                            n = e.isSelected,
                            s = e.icon,
                            l = e.paletteIcon,
                            i = (0, r.useState)(!1),
                            c = i[0],
                            _ = i[1],
                            d = n ? kr.toggle_on() : kr.toggle_default();
                        return o().createElement(
                            'div',
                            {
                                className: fr,
                                onClick: () => {
                                    (t(u, a), z.playClick());
                                },
                                onMouseEnter: () => {
                                    (_(!0), z.playHighlight());
                                },
                                onMouseLeave: () => {
                                    _(!1);
                                },
                            },
                            o().createElement('div', { className: v()(vr, c && Fr) }),
                            o().createElement('div', { className: v()(Dr, n && Br) }),
                            o().createElement('div', { className: Sr, style: { backgroundImage: `url(${d})` } }),
                            Boolean(s.length) && o().createElement(We, { className: wr, text: s }),
                            Boolean(l.length) &&
                                o().createElement('div', { className: yr, style: { backgroundImage: `url(${l})` } }),
                        );
                    }),
                    Nr = 'ExtendedSubButtons_base_b5',
                    Mr = 'ExtendedSubButtons_bg_4f',
                    Ir = 'ExtendedSubButtons_content_17',
                    xr = (0, r.memo)(({ subButtons: e, onMouseLeave: t, onActionClick: u, actionType: a }) =>
                        o().createElement(
                            'div',
                            { className: Nr, onMouseLeave: t },
                            o().createElement(
                                'div',
                                { className: Ir },
                                o().createElement('div', { className: Mr }),
                                e.map((e) =>
                                    o().createElement(Tr, {
                                        key: e.actionData,
                                        item: e,
                                        onActionClick: u,
                                        actionType: a,
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Or = 'ToolbarItem_base_c1',
                    Lr = 'ToolbarItem_base__disable_40',
                    Rr = 'ToolbarItem_hoverBg_89',
                    Pr = 'ToolbarItem_hoverBg__visible_c9',
                    Hr = 'ToolbarItem_icon_65',
                    Wr = 'ToolbarItem_icon__disable_ef',
                    zr = 'ToolbarItem_disable_43',
                    Ur = 'ToolbarItem_hoveredIcon_a8',
                    Gr = 'ToolbarItem_base__hover_02',
                    Vr = 'ToolbarItem_actionName_38',
                    jr = 'ToolbarItem_arrow_f4',
                    $r = 'ToolbarItem_arrow__left_00',
                    Xr = 'ToolbarItem_arrow__leftHover_72',
                    qr = 'ToolbarItem_arrow__right_a9',
                    Yr = 'ToolbarItem_arrow__rightHover_a9',
                    Kr = 'ToolbarItem_arrow__leftDisable_8c',
                    Zr = 'ToolbarItem_arrow__rightDisable_bd';
                let Jr, Qr;
                (!(function (e) {
                    ((e[(e.RIGHT = 0)] = 'RIGHT'), (e[(e.LEFT = 1)] = 'LEFT'));
                })(Jr || (Jr = {})),
                    (function (e) {
                        ((e.COLOR_CHANGE = 'color_change'), (e.SCALE_CHANGE = 'scale_change'));
                    })(Qr || (Qr = {})));
                const eo = R.images.gui.maps.icons.customization.toolbar,
                    to = [Qr.COLOR_CHANGE, Qr.SCALE_CHANGE],
                    uo = [
                        et.CUSTOMIZATION_SHEET_ACTION_REMOVE_ONE,
                        et.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_SEASONS,
                        et.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_PARTS,
                    ],
                    ao = (0, r.memo)(({ toolbarItem: e, onItemClick: t, onItemOver: u, isSelected: a }) => {
                        const n = e.actionType,
                            s = e.isEnabled,
                            l = e.actionBtnLabel,
                            i = e.subButtons,
                            c = e.progressionLevel,
                            _ = `${n}${c}`,
                            d = c > 0,
                            m = s ? eo.default.$dyn(d ? _ : n) : eo.disable.$dyn(n),
                            E = eo.idle.$dyn(d ? _ : n),
                            A = (0, r.useState)(!1),
                            g = A[0],
                            b = A[1],
                            p = (0, r.useState)(!1),
                            C = p[0],
                            h = p[1],
                            f = (0, r.useState)(!1),
                            F = f[0],
                            D = f[1],
                            B = (0, r.useState)({ left: !1, right: !1 }),
                            S = B[0],
                            w = B[1],
                            y = to.includes(n);
                        (0, r.useEffect)(() => {
                            (a && s && b(!0), a && y && D(!0));
                        }, [a, y, s]);
                        const k = (0, r.useCallback)(() => {
                                (h(!1), a && y && h(!0));
                            }, [a, y]),
                            T = (e, u) => {
                                (e.stopPropagation(), t(n, u));
                            },
                            N = (e) => {
                                s &&
                                    (e === Jr.LEFT
                                        ? w((e) => Object.assign({}, e, { left: !0 }))
                                        : w((e) => Object.assign({}, e, { right: !0 })));
                            },
                            M = (e) => {
                                s &&
                                    (e === Jr.LEFT
                                        ? w((e) => Object.assign({}, e, { left: !1 }))
                                        : w((e) => Object.assign({}, e, { right: !1 })));
                            },
                            I = y && C && a,
                            x = v()(Or, g && Gr, !s && Lr),
                            O = v()(jr, $r, S.left && s && Xr, !s && Kr),
                            L = v()(jr, qr, S.right && s && Yr, !s && Zr);
                        return o().createElement(
                            'div',
                            {
                                onMouseEnter: () => {
                                    s && (b(!0), y && !C && h(!0), u(n), z.playHighlight());
                                },
                                onMouseLeave: () => {
                                    (b(!1), C && h(!1), F && D(!1));
                                },
                                onClick: () => {
                                    s &&
                                        !y &&
                                        (n === et.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_SEASONS
                                            ? W(R.sounds.cust_select_double())
                                            : n === et.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_PARTS
                                              ? W(R.sounds.cust_color_apply())
                                              : uo.includes(n)
                                                ? W(R.sounds.cust_select_remove())
                                                : W(R.sounds.cust_select()),
                                        t(n, d ? Jr.RIGHT : -1));
                                },
                                className: x,
                            },
                            (I || F) &&
                                s &&
                                o().createElement(xr, {
                                    subButtons: i,
                                    actionType: n,
                                    onActionClick: t,
                                    onMouseLeave: k,
                                }),
                            o().createElement('div', { className: v()(Rr, g && Pr) }),
                            !s && o().createElement('div', { className: zr }),
                            o().createElement(We, { text: l, className: Vr }),
                            d &&
                                o().createElement('div', {
                                    className: O,
                                    onMouseEnter: () => N(Jr.LEFT),
                                    onMouseLeave: () => M(Jr.LEFT),
                                    onClick: (e) => T(e, Jr.LEFT),
                                }),
                            o().createElement('div', {
                                className: v()(Hr, !s && Wr),
                                style: { backgroundImage: `url(${m})` },
                            }),
                            o().createElement('div', { className: Ur, style: { backgroundImage: `url(${E})` } }),
                            d &&
                                o().createElement('div', {
                                    className: L,
                                    onMouseEnter: () => N(Jr.RIGHT),
                                    onMouseLeave: () => M(Jr.RIGHT),
                                    onClick: (e) => T(e, Jr.RIGHT),
                                }),
                        );
                    }),
                    no = 'Toolbar_base_56',
                    ro = 'Toolbar_content_31',
                    oo = { type: '', index: -1 },
                    so = (0, r.memo)(({ toolbarItems: e, onItemClick: t }) => {
                        const u = (0, r.useState)(oo),
                            a = u[0],
                            n = u[1];
                        (0, r.useEffect)(() => () => n(oo), [e]);
                        const s = (0, r.useCallback)((e) => {
                                n((t) => Object.assign({}, t, { type: e }));
                            }, []),
                            l = (0, r.useCallback)(
                                (e, u, a) => {
                                    (t(e, u), n({ type: e, index: a }));
                                },
                                [t],
                            );
                        return o().createElement(
                            'div',
                            { className: no },
                            o().createElement(
                                'div',
                                { className: ro },
                                e.map((e, t) =>
                                    o().createElement(
                                        zu,
                                        {
                                            key: e.actionType,
                                            tooltipArgs: {
                                                body: e.disableTooltip,
                                                isEnabled: Boolean(e.disableTooltip.length),
                                            },
                                        },
                                        o().createElement(ao, {
                                            key: e.actionType,
                                            toolbarItem: e,
                                            onItemClick: (e, u) => l(e, u, t),
                                            onItemOver: s,
                                            isSelected: a.type === e.actionType || t === a.index,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    lo = 'AllSeasonsHint_base_d7',
                    io = 'AllSeasonsHint_text_7b',
                    co = R.strings.customization.customization.allSeasonsHint,
                    _o = R.strings.customization.itemTypes,
                    mo = (0, r.memo)(({ itemType: e, isSelected: t, onSelectApplyingAllSeasons: u }) => {
                        const a = y().mediaSize <= B.Small,
                            n = a ? St.medium : St.large;
                        return o().createElement(
                            Qe,
                            { header: co.tooltip.header(), body: co.tooltip.body() },
                            o().createElement(
                                'div',
                                { className: lo },
                                o().createElement(
                                    Nt,
                                    {
                                        isChecked: t,
                                        size: n,
                                        type: wt.main,
                                        soundHover: R.sounds.highlight(),
                                        soundClick: R.sounds.play(),
                                        onChange: () => {
                                            u();
                                        },
                                    },
                                    o().createElement(We, {
                                        text: a ? co.shortText() : co.text(),
                                        className: io,
                                        format: {
                                            binding: !a && e ? { item: String(_o.$dyn(`${e}`)).toLowerCase() } : void 0,
                                        },
                                    }),
                                ),
                            ),
                        );
                    });
                let Eo;
                !(function (e) {
                    ((e[(e.Empty = 0)] = 'Empty'),
                        (e[(e.SubmitEnter = 1)] = 'SubmitEnter'),
                        (e[(e.FirstEnter = 2)] = 'FirstEnter'),
                        (e[(e.EditEnter = 3)] = 'EditEnter'),
                        (e[(e.NotAvailableEnter = 4)] = 'NotAvailableEnter'));
                })(Eo || (Eo = {}));
                const Ao = 'Inscription_base_27',
                    go = 'Inscription_base__invalidInput_3d',
                    bo = 'Inscription_base__show_19',
                    po = 'Inscription_base__hide_4c',
                    Co = 'Inscription_base__withIcons_ea',
                    ho = 'Inscription_invalidEnterIcon_5f',
                    fo = 'Inscription_icons_1d',
                    vo = 'Inscription_icon_44',
                    Fo = 'Inscription_icon__withDelete_9a',
                    Do = 'Inscription_text_7e',
                    Bo = 'Inscription_invalidNumber_78',
                    So = R.strings.vehicle_customization.propertySheet.inscriptionController,
                    wo = {
                        [Eo.Empty]: '',
                        [Eo.EditEnter]: So.editEnter(),
                        [Eo.FirstEnter]: So.firstEnter(),
                        [Eo.SubmitEnter]: So.submitEnter(),
                        [Eo.NotAvailableEnter]: So.notAvailableEnter(),
                    },
                    yo = {
                        [Eo.Empty]: [],
                        [Eo.EditEnter]: [
                            R.images.gui.maps.icons.customization.inscription_controller.bspace_btn(),
                            R.images.gui.maps.icons.customization.inscription_controller.delete_btn(),
                        ],
                        [Eo.FirstEnter]: [],
                        [Eo.SubmitEnter]: [R.images.gui.maps.icons.customization.inscription_controller.enter_btn()],
                        [Eo.NotAvailableEnter]: [],
                    },
                    ko = (0, r.memo)(
                        ({
                            inscriptionState: e,
                            inscriptionDuration: t,
                            inscriptionDelay: u,
                            invalidInscriptionNumber: a,
                            inscriptionFirstEnterRange: n,
                            startTimestamp: s,
                        }) => {
                            const l = (0, r.useState)(!1),
                                i = l[0],
                                c = l[1],
                                _ = (0, r.useState)(e),
                                d = _[0],
                                m = _[1],
                                E = _t(),
                                A = _t();
                            (0, r.useEffect)(
                                () => (
                                    c(!1),
                                    A.run(() => {
                                        (c(!0), m(e));
                                    }, u),
                                    E.run(() => {
                                        c(!1);
                                    }, t + u),
                                    () => {
                                        (A.clear(), E.clear());
                                    }
                                ),
                                [s],
                            );
                            const g = d === Eo.NotAvailableEnter;
                            return o().createElement(
                                'div',
                                { className: v()(Ao, g && go, i && bo, !i && po, Boolean(yo[d].length) && Co) },
                                g && o().createElement('div', { className: ho }),
                                o().createElement(We, {
                                    className: Do,
                                    text: wo[d],
                                    format: {
                                        binding: {
                                            value: o().createElement(We, { className: Bo, text: a }),
                                            start: Boolean(n.length) && n[0],
                                            end: Boolean(n.length > 1) && n[1],
                                        },
                                    },
                                }),
                                !g &&
                                    Boolean(yo[d].length) &&
                                    o().createElement(
                                        'div',
                                        { className: fo },
                                        yo[d].map((e, t) =>
                                            o().createElement('div', {
                                                className: v()(vo, d === Eo.EditEnter && Fo),
                                                key: t,
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    To = {
                        base: 'MagneticTool_base_cf',
                        wrapper: 'MagneticTool_wrapper_c1',
                        base__wide: 'MagneticTool_base__wide_a0',
                        base__factor2: 'MagneticTool_base__factor2_cb',
                        base__factor3: 'MagneticTool_base__factor3_c2',
                        base__factor4: 'MagneticTool_base__factor4_67',
                        base__factor6: 'MagneticTool_base__factor6_79',
                        border: 'MagneticTool_border_d9',
                        icon: 'MagneticTool_icon_56',
                        shine: 'MagneticTool_shine_03',
                    },
                    No = ({ isEnabled: e, icon: t, isWide: u, isDim: a, formFactor: n, selectedTab: s }) => {
                        const i = (0, r.useRef)(null),
                            c = rt(e);
                        ((0, r.useEffect)(() => {
                            !e && c && s !== __.INSCRIPTION && W(R.sounds.cancelcloseno());
                        }, [e, c, s]),
                            (0, r.useEffect)(() => {
                                if (!e) return;
                                const t = l.O.client.events.mouse.move(([{ clientX: e, clientY: t }, u]) => {
                                    const a = i.current;
                                    a &&
                                        ('outside' !== u
                                            ? (a.style.setProperty('--visibility', 'visible'),
                                              a.style.setProperty('--x', `${viewEnv.pxToRem(e + 7)}rem`),
                                              a.style.setProperty('--y', `${viewEnv.pxToRem(t + -40)}rem`))
                                            : a.style.setProperty('--visibility', 'hidden'));
                                });
                                return () => {
                                    t();
                                };
                            }, [e]));
                        const _ = n > 0,
                            d = v()(To.base, !_ && u && To.base__wide, _ && To[`base__factor${n}`]);
                        return o().createElement(
                            'div',
                            { className: d },
                            e &&
                                o().createElement(
                                    'div',
                                    { ref: i, className: To.wrapper },
                                    a && o().createElement('div', { className: To.shine }),
                                    o().createElement('div', {
                                        className: To.icon,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                    o().createElement('div', { className: To.border }),
                                ),
                        );
                    },
                    Mo = 'SceneHitArea_base_ec',
                    Io = 'SceneHitArea_base__down_e8',
                    xo = 'SceneHitArea_base__cursorActive_6e';
                let Oo;
                !(function (e) {
                    ((e.None = 'none'), (e.Ready = 'ready'), (e.Dragging = 'dragging'));
                })(Oo || (Oo = {}));
                const Lo = ({
                        moveSpace: e,
                        onSceneOverChange: t,
                        onSceneDraggingChange: u,
                        onSceneClick: a,
                        onHideElements: n,
                        onResetMagneticTool: s,
                        isHovered: i,
                        isOnboardingViewOpened: c = !1,
                    }) => {
                        const _ = (0, r.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, r.useRef)({ x: 0, y: 0, state: Oo.None }),
                            A = (0, r.useRef)(null),
                            g = (0, r.useRef)(null);
                        ((0, r.useEffect)(() => {
                            const e = l.O.client.events.mouse.up(([e]) => {
                                (m(!1),
                                    E.current.state === Oo.Ready && a(),
                                    g.current && (clearTimeout(g.current), (g.current = null)),
                                    n(!1),
                                    u(!1));
                                const t = e;
                                if (t && t.button === Dt.RIGHT) s();
                                else {
                                    const e = t && t.target;
                                    e && e !== A.current && !e.closest('[data-magnetic-tool-support]') && s();
                                }
                                E.current.state = Oo.None;
                            });
                            return () => e();
                        }, [E, n, a, u, s]),
                            (0, r.useEffect)(
                                () => () => {
                                    g.current && clearTimeout(g.current);
                                },
                                [],
                            ));
                        const b = (e) => {
                            if (!A.current) return;
                            const t = A.current.getBoundingClientRect(),
                                u = t.width,
                                a = t.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= u - 1 || e.clientY >= a - 1);
                        };
                        return o().createElement('div', {
                            className: v()(Mo, d && Io, i && xo),
                            ref: A,
                            onMouseDown: (e) => {
                                (e.preventDefault(),
                                    e.button === Dt.LEFT &&
                                        b(e) &&
                                        (m(!0),
                                        (E.current.x = e.clientX),
                                        (E.current.y = e.clientY),
                                        (E.current.state = Oo.Ready),
                                        u(!0),
                                        (g.current = setTimeout(() => {
                                            ((g.current = null), n(!0));
                                        }, 200))));
                            },
                            onMouseMove: (t) => {
                                if ((t.preventDefault(), d)) {
                                    if (!b(t)) return;
                                    const u = E.current,
                                        a = t.clientX !== u.x ? t.clientX - u.x : 0,
                                        r = t.clientY !== u.y ? t.clientY - u.y : 0;
                                    (0 !== a && 0 !== r && (u.state = Oo.Dragging),
                                        (u.x = t.clientX),
                                        (u.y = t.clientY),
                                        e({ dx: a, dy: r, dz: 0 }),
                                        g.current && (clearTimeout(g.current), (g.current = null), n(!0)));
                                }
                            },
                            onWheel: (t) => {
                                if ((t.preventDefault(), !b(t))) return;
                                const u = t.deltaY < 0;
                                e({ dx: 0, dy: 0, dz: u ? -600 : 600 });
                            },
                            onMouseEnter: () => {
                                !c && t(!0);
                            },
                            onMouseLeave: () => {
                                !c && t(!0);
                            },
                        });
                    },
                    Ro = 'BannerDecals_base_b8',
                    Po = 'BannerDecals_base__hover_b3',
                    Ho = 'BannerDecals_title_f7',
                    Wo = R.strings.customization,
                    zo = (0, r.memo)(({ onClick: e, onMouseLeave: t, onMouseEnter: u, mixClass: a }) => {
                        const n = (0, r.useState)(!1),
                            s = n[0],
                            l = n[1],
                            i = (0, r.useState)(!1),
                            c = i[0],
                            _ = i[1];
                        return o().createElement(
                            'div',
                            {
                                className: v()(Ro, s && Po, a),
                                onMouseEnter: () => {
                                    (u && u(), l(!0), z.playHighlight());
                                },
                                onMouseLeave: () => {
                                    (!c && t && t(), l(!1));
                                },
                                onClick: () => {
                                    (u && u(), _(!0), z.playClick(), e());
                                },
                            },
                            o().createElement(We, { className: Ho, text: Wo.customization.decalsBanner() }),
                        );
                    }),
                    Uo = {
                        base: 'SeasonsTab_base_f1',
                        tabNotActive: 'SeasonsTab_tabNotActive_0d',
                        base__fullContent: 'SeasonsTab_base__fullContent_bc',
                        base__active: 'SeasonsTab_base__active_06',
                        tabActive: 'SeasonsTab_tabActive_61',
                        background: 'SeasonsTab_background_a5',
                        base__hover: 'SeasonsTab_base__hover_59',
                        activeTab: 'SeasonsTab_activeTab_80',
                        shine: 'SeasonsTab_shine_19',
                        blink: 'SeasonsTab_blink_b5',
                        base__animatingAppear: 'SeasonsTab_base__animatingAppear_87',
                        blik: 'SeasonsTab_blik_0a',
                        flareWrapper: 'SeasonsTab_flareWrapper_84',
                        flare: 'SeasonsTab_flare_1c',
                        flareActive: 'SeasonsTab_flareActive_e0',
                        iconsWrapper: 'SeasonsTab_iconsWrapper_38',
                        seasonIconWrapper: 'SeasonsTab_seasonIconWrapper_b4',
                        seasonIcon: 'SeasonsTab_seasonIcon_75',
                        seasonIcon__hide: 'SeasonsTab_seasonIcon__hide_cf',
                        seasonIcon__show: 'SeasonsTab_seasonIcon__show_41',
                        plus: 'SeasonsTab_plus_9e',
                        fadeOut: 'SeasonsTab_fadeOut_46',
                        base__animatingDisappear: 'SeasonsTab_base__animatingDisappear_07',
                        base__full: 'SeasonsTab_base__full_31',
                        check: 'SeasonsTab_check_82',
                        fadeInScale: 'SeasonsTab_fadeInScale_68',
                        titleWrapper: 'SeasonsTab_titleWrapper_fe',
                        title: 'SeasonsTab_title_ea',
                        fadeOutScale: 'SeasonsTab_fadeOutScale_9a',
                        fadeIn: 'SeasonsTab_fadeIn_f1',
                    },
                    Go = R.strings.customization.customization.seasonsTabs,
                    Vo = R.images.gui.maps.icons.customization.seasons,
                    jo = (0, r.memo)(
                        ({
                            onClick: e,
                            isSelected: t,
                            season: u,
                            isShowFullTabContent: a,
                            isAllTabsFull: n,
                            isFull: s,
                            className: l,
                        }) => {
                            var i;
                            const c = (0, r.useState)(!1),
                                _ = c[0],
                                d = c[1],
                                m = (0, r.useState)(null),
                                E = m[0],
                                A = m[1],
                                g = _t(),
                                b = null != (i = rt(s)) ? i : s;
                            ((0, r.useEffect)(() => {
                                if (g.isRunning) return () => g.clear();
                            }, [g]),
                                (0, r.useEffect)(() => {
                                    (!b && s && (A(!0), !n && W(R.sounds.cust_tick_on())),
                                        b && !s && W(R.sounds.cust_tick_off()));
                                }, [b, s, g, n]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return g.run(() => {
                                            A(!1);
                                        }, 1200);
                                }, [g, E]));
                            const p = (0, r.useCallback)(() => {
                                    g.isRunning || e(u);
                                }, [g, e, u]),
                                C = v()(
                                    Uo.base,
                                    Uo[`base__${u}`],
                                    s && !E && Uo.base__full,
                                    E && Uo.base__animatingAppear,
                                    !E && null !== E && Uo.base__animatingDisappear,
                                    _ && Uo.base__hover,
                                    t && Uo.base__active,
                                    a && Uo.base__fullContent,
                                    l,
                                );
                            return o().createElement(
                                'div',
                                {
                                    onMouseEnter: () => {
                                        t || (0, je.wU)() || (d(!0), z.playHighlight());
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: p,
                                    className: C,
                                },
                                o().createElement('div', { className: Uo.background }),
                                t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Uo.blink }),
                                        o().createElement(
                                            'div',
                                            {
                                                className: Uo.activeTab,
                                                style: { backgroundImage: `url(${Vo.$dyn(`${u}_bg`)})` },
                                            },
                                            o().createElement('div', {
                                                className: Uo.shine,
                                                style: { backgroundImage: `url(${Vo.$dyn(`${u}_shine`)})` },
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: Uo.iconsWrapper },
                                    o().createElement(
                                        'div',
                                        { className: Uo.seasonIconWrapper },
                                        o().createElement('div', {
                                            className: v()(
                                                Uo.seasonIcon,
                                                _ || t ? Uo.seasonIcon__hide : Uo.seasonIcon__show,
                                            ),
                                            style: { backgroundImage: `url(${Vo.$dyn(`${u}_default`)})` },
                                        }),
                                        o().createElement('div', {
                                            className: v()(
                                                Uo.seasonIcon,
                                                _ || t ? Uo.seasonIcon__show : Uo.seasonIcon__hide,
                                            ),
                                            style: { backgroundImage: `url(${Vo.$dyn(`${u}_active`)})` },
                                        }),
                                    ),
                                    o().createElement('div', { className: Uo.plus }),
                                    o().createElement('div', { className: Uo.check }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Uo.titleWrapper },
                                    o().createElement(We, { text: Go.$dyn(`${u}`), className: Uo.title }),
                                    t && o().createElement(We, { text: Go.map(), className: Uo.title }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Uo.flareWrapper },
                                    o().createElement('div', { className: Uo.flare }),
                                ),
                                t && o().createElement('div', { className: Uo.blik }),
                            );
                        },
                    ),
                    $o = 'SeasonsTabs_base_24',
                    Xo = 'SeasonsTabs_base__show_61';
                function qo() {
                    return (
                        (qo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        qo.apply(this, arguments)
                    );
                }
                const Yo = ({ tabs: e, isMinimised: t, onClick: u, className: a }) => {
                        const n = y().mediaSize,
                            s = !t && n >= B.Medium,
                            l = e.every((e) => e.isFull);
                        return (
                            (0, r.useEffect)(() => {
                                l && W(R.sounds.cust_tick_on_all());
                            }, [l]),
                            o().createElement(
                                'div',
                                { className: v()($o, s && Xo, a) },
                                Boolean(null == e ? void 0 : e.length) &&
                                    e.map((e) =>
                                        o().createElement(
                                            jo,
                                            qo(
                                                {
                                                    key: e.season,
                                                    isShowFullTabContent: s,
                                                    isAllTabsFull: l,
                                                    onClick: u,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                            )
                        );
                    },
                    Ko = 'VehicleName_base_4d',
                    Zo = 'VehicleName_vehicleTypeContainer_1e',
                    Jo = 'VehicleName_base__prem_ec',
                    Qo = 'VehicleName_vehicleType_68',
                    es = 'VehicleName_shortName_23',
                    ts = R.images.gui.maps.icons.vehicleTypes.big,
                    us = (0, r.memo)(({ name: e, tier: t, type: u, isPremium: a = !1, classMix: n }) => {
                        const r = `${((s = u), s.replace(/-/g, '_'))}${a ? '_elite' : ''}`;
                        var s;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: v()(Ko, a && Jo, n) },
                                o().createElement(We, { text: da(t) }),
                                o().createElement(
                                    'div',
                                    { className: Zo },
                                    o().createElement('div', {
                                        className: Qo,
                                        style: { backgroundImage: `url(${ts.$dyn(r)})` },
                                    }),
                                ),
                                o().createElement(We, { text: e, className: es }),
                            ),
                            o().createElement('div', null),
                        );
                    }),
                    as = 'App_base_f6',
                    ns = 'App_base__expanded_2a',
                    rs = 'App_wrapper_5c',
                    os = 'App_header_17',
                    ss = 'App_header__hide_c5',
                    ls = 'App_infoButton_db',
                    is = 'App_base__fadeIn_54',
                    cs = 'App_base__fadeOut_33',
                    _s = 'App_closeButton_7c',
                    ds = 'App_description_d6',
                    ms = 'App_description__bonus_a0',
                    Es = 'App_topPanelWrapper_50',
                    As = 'App_topPanel_29',
                    gs = 'App_carouselBlock_24',
                    bs = 'App_carouselBlockBack_d6',
                    ps = 'App_markers_2a',
                    Cs = 'App_markers__fadeIn_94',
                    hs = 'App_markers__fadeOut_e3',
                    fs = 'App_emptyState_2f',
                    vs = 'App_decalsBanner_75',
                    Fs = 'App_decalsBanner__hide_98',
                    Ds = 'App_decalsBanner__fadeIn_92',
                    Bs = 'App_decalsBanner__fadeOut_38',
                    Ss = 'App_openPanelButton_55',
                    ws = 'App_openPanelButtonText_6f',
                    ys = 'App_leftPanel_85',
                    ks = 'App_rightPanel_fb',
                    Ts = 'App_divider_8c',
                    Ns = 'App_seasontTabs_50',
                    Ms = 'App_seasontTabs__fadeIn_3a',
                    Is = 'App_seasontTabs__fadeOut_a6',
                    xs = 'App_magneticTool_4d',
                    Os = 'App_inscription_3e',
                    Ls = 'App_toolbarWrapper_55',
                    Rs = 'App_progressionWrapper_19',
                    Ps = 'App_withProgressionWrapper_cb',
                    Hs = 'App_seasonsHint_6d',
                    Ws = 'App_sub_7b',
                    zs = 'App_sub__open_1c',
                    Us = 'App_footer_b1',
                    Gs = 'App_footer__hide_ce',
                    Vs = 'App_binCartPannelWrapper_8c',
                    js = 'App_binCartPannelWrapper__open_3f',
                    $s = 'App_binCartPannel_b1',
                    Xs = 'App_cart_25',
                    qs = 'App_subInfo_18',
                    Ys = 'App_subInfo__open_b7',
                    Ks = 'App_back_ff',
                    Zs = 'App_buttonHolder_58';
                function Js(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, o),
                        n,
                    ];
                }
                const Qs = 'HorizontalBar_base_49',
                    el = 'HorizontalBar_base__nonActive_82',
                    tl = 'HorizontalBar_leftButton_5f',
                    ul = 'HorizontalBar_rightButton_03',
                    al = 'HorizontalBar_track_0d',
                    nl = 'HorizontalBar_thumb_fd',
                    rl = 'HorizontalBar_rail_32',
                    ol = 'disable',
                    sl = { pending: !1, offset: 0 },
                    ll = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    il = () => {},
                    cl = (e, t) => Math.max(20, e.offsetWidth * t),
                    _l = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ll, onDrag: a = il }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(sl),
                            m = d[0],
                            E = d[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            g = () => {
                                const t = i.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    _ = X(0, 1, r / (n - a)),
                                    d = (t.offsetWidth - cl(t, o)) * _;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(ol),
                                                    void l.current.classList.remove(ol)
                                                );
                                            if (
                                                ((t = i.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(ol),
                                                    void l.current.classList.add(ol)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(ol), l.current.classList.remove(ol));
                                        }
                                    })(d));
                            },
                            b = J(() => {
                                ((() => {
                                    const t = c.current,
                                        u = i.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const o = Math.min(1, a / r);
                                    ((t.style.width = `${cl(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(el) : n.current.classList.remove(el)));
                                })(),
                                    g());
                            });
                        ((0, r.useEffect)(() => q(b)),
                            (0, r.useEffect)(
                                () =>
                                    q(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let u = il;
                                        const a = () => {
                                            (u(), (u = q(b)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        var u;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const r = i.current,
                                            o = c.current;
                                        if (!n || !r || !o) return;
                                        const s = t.screenX - m.offset - r.getBoundingClientRect().x,
                                            l = (s / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: l }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), A(sl));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, m.offset, m.pending, a, A]));
                        const p = Js((t) => e.applyStepTo(t), _, [e]),
                            C = p[0],
                            h = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(ol) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: v()(Qs, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: v()(tl, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ol) || 0 !== e.button || (W('play'), C(te.Next));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: v()(al, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if ((W('play'), t.target === a))
                                                A({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? te.Prev : te.Next);
                                            }
                                    },
                                    ref: i,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: c, className: v()(nl, t.thumb) }),
                                o().createElement('div', { className: v()(rl, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: v()(ul, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ol) || 0 !== e.button || (W('play'), C(te.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    dl = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ml = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: v()(dl.base, e.base) });
                            }, [a]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: v()(dl.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(dl.defaultScrollArea, n) },
                                o().createElement(El, { className: l, api: d, classNames: s }, e),
                            ),
                            o().createElement(_l, { getStepByRailClick: i, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    El = ({ api: e, className: t, classNames: u, children: a, style: n }) => (
                        (0, r.useEffect)(() => q(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(dl.base, t), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: v()(dl.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: v()(dl.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((El.Bar = _l),
                    (El.Default = ml),
                    (El.SeniorityAwards = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => q(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(dl.base, t) },
                            o().createElement(
                                'div',
                                { className: v()(dl.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: v()(dl.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Al = ae({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? te.Next : te.Prev),
                    }),
                    gl = 'VerticalBar_base_f3',
                    bl = 'VerticalBar_base__nonActive_42',
                    pl = 'VerticalBar_topButton_d7',
                    Cl = 'VerticalBar_bottomButton_06',
                    hl = 'VerticalBar_track_df',
                    fl = 'VerticalBar_thumb_32',
                    vl = 'VerticalBar_rail_43',
                    Fl = 'disable',
                    Dl = () => {},
                    Bl = { pending: !1, offset: 0 },
                    Sl = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    wl = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    yl = (e, t) => Math.max(20, e.offsetHeight * t),
                    kl = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Sl, onDrag: a = Dl }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(Bl),
                            m = d[0],
                            E = d[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            g = J(() => {
                                const t = c.current,
                                    u = i.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const o = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${yl(u, o)}px`),
                                    t.classList.add(fl),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(bl) : n.current.classList.remove(bl)),
                                    o
                                );
                            }),
                            b = J(() => {
                                const t = i.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    _ = X(0, 1, r / (n - a)),
                                    d = (t.offsetHeight - yl(t, o)) * _;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Fl),
                                                    void l.current.classList.remove(Fl)
                                                );
                                            if (
                                                ((t = i.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Fl),
                                                    void l.current.classList.add(Fl)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(Fl), l.current.classList.remove(Fl));
                                        }
                                    })(d));
                            }),
                            p = J(() => {
                                wl(e, () => {
                                    (g(), b());
                                });
                            });
                        ((0, r.useEffect)(() => q(p)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    wl(e, () => {
                                        b();
                                    });
                                };
                                let u = Dl;
                                const a = () => {
                                    (u(), (u = q(p)));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        wl(e, (u) => {
                                            const n = i.current,
                                                r = c.current,
                                                o = e.getContainerSize();
                                            if (!n || !r || !o) return;
                                            const s = t.screenY - m.offset - n.getBoundingClientRect().y,
                                                l = (s / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: l }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            A(Bl));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, m.offset, m.pending, a, A]));
                        const C = Js((t) => e.applyStepTo(t), _, [e]),
                            h = C[0],
                            f = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Fl) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: v()(gl, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: v()(pl, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fl) || 0 !== e.button || (W('play'), h(te.Next));
                                },
                                ref: s,
                                onMouseEnter: F,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: v()(hl, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if ((W('play'), t.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    A({
                                                        pending: !0,
                                                        offset: t.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        wl(e, (a) => {
                                                            if (!a) return;
                                                            const n = u(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? te.Prev : te.Next);
                                            }
                                    },
                                    ref: i,
                                    onMouseEnter: F,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: v()(vl, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: v()(Cl, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fl) || 0 !== e.button || (W('play'), h(te.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    Tl = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Nl = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: v()(Tl.base, e.base) });
                            }, [a]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: v()(Tl.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(Tl.area, n) },
                                o().createElement(Ml, { className: s, classNames: l, api: d }, e),
                            ),
                            o().createElement(kl, { getStepByRailClick: i, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Ml = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => q(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(Tl.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(Tl.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                Ml.Default = Nl;
                const Il = { Vertical: n, Horizontal: a },
                    xl = { type: 'idle' };
                const Ol = (e, t) => {
                        (0, r.useEffect)(() => {
                            let t = null;
                            return (
                                (t = requestAnimationFrame(() => {
                                    t = requestAnimationFrame(() => {
                                        ((t = null), e());
                                    });
                                })),
                                () => {
                                    null !== t && cancelAnimationFrame(t);
                                }
                            );
                        }, t);
                    },
                    Ll = 'ArrowsHint_base_3c',
                    Rl = 'ArrowsHint_content_ac',
                    Pl = 'ArrowsHint_notificationBg_ef',
                    Hl = 'ArrowsHint_arrows_7c',
                    Wl = 'ArrowsHint_bg_e0',
                    zl = 'ArrowsHint_arrow_41',
                    Ul = 'ArrowsHint_arrow__left_9c',
                    Gl = 'ArrowsHint_arrow__right_50',
                    Vl = 'ArrowsHint_text_a2',
                    jl = () =>
                        o().createElement(
                            'div',
                            { className: Ll },
                            o().createElement('div', { className: Wl }),
                            o().createElement(
                                'div',
                                { className: Rl },
                                o().createElement('div', { className: Pl }),
                                o().createElement(We, {
                                    className: Vl,
                                    text: R.strings.customization.arrowHint.text(),
                                }),
                                o().createElement(
                                    'div',
                                    { className: Hl },
                                    o().createElement('div', { className: v()(zl, Ul) }),
                                    o().createElement('div', { className: v()(zl, Gl) }),
                                ),
                            ),
                        ),
                    $l = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                ((0, je.c9)(je.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    z.playYes());
                            }, [n, t, u, a]),
                            i = (0, r.useCallback)(() => {
                                (0, je.c9)(je.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (s && s(e), ((e) => e.button === Dt.RIGHT)(e) && l());
                                },
                                [s, l],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === o && i();
                            }, [o, i]),
                            o ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Xl = ['children'];
                function ql() {
                    return (
                        (ql =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ql.apply(this, arguments)
                    );
                }
                const Yl = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Xl);
                        return o().createElement(
                            $l,
                            ql({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Kl = 'Image_base_5c',
                    Zl = 'Image_shine_08',
                    Jl = 'Image_content_03',
                    Ql = (0, r.memo)(({ isDim: e, icon: t }) => {
                        const u = (0, r.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return t
                            ? o().createElement(
                                  'span',
                                  { className: Kl },
                                  e && o().createElement('span', { className: Zl }),
                                  o().createElement('span', { className: Jl, style: u }),
                              )
                            : o().createElement('span', { className: Jl });
                    }),
                    ei = 'Price_base_9e',
                    ti = 'Price_base__stock_cc',
                    ui = 'Price_storage_04',
                    ai = 'Price_storage__empty_2d',
                    ni = 'Price_icon_df',
                    ri = 'Price_iconRent_ec',
                    oi = 'Price_iconRent__autoRent_df',
                    si = 'Price_rental_5a',
                    li = 'Price_iconLocked_07',
                    ii = R.strings.customization,
                    ci = (0, r.memo)(
                        ({
                            locked: e,
                            hasDiscount: t,
                            isRental: u,
                            autoRentEnabled: a,
                            rentalInfoText: n,
                            isStub: r,
                            price: s,
                            quantity: l,
                            isFromStorage: i = !0,
                            classMix: c,
                        }) => {
                            var _, d;
                            if (r) return null;
                            const m = v()(ri, a && oi);
                            if (e)
                                return o().createElement(
                                    'span',
                                    { className: v()(ei, c) },
                                    o().createElement(
                                        'span',
                                        { className: ni },
                                        o().createElement('span', { className: li }),
                                    ),
                                );
                            if (u && l > 0)
                                return o().createElement(
                                    'span',
                                    { className: v()(ei, c) },
                                    o().createElement(
                                        'span',
                                        { className: ni },
                                        o().createElement('span', { className: m }),
                                    ),
                                    l,
                                );
                            if (i && (0 === s.length || l > 0))
                                return o().createElement(
                                    'span',
                                    { className: v()(ei, c) },
                                    o().createElement('span', { className: v()(ui, !l && ai) }, l),
                                );
                            const E = v()(ei, t && ti, c);
                            return o().createElement(
                                'div',
                                { className: E },
                                '' !== n && o().createElement(We, { className: si, text: n }),
                                Boolean(l && l > 1) &&
                                    o().createElement(We, {
                                        text: ii.cart.quantity(),
                                        format: { binding: { quantity: l } },
                                    }),
                                o().createElement(Pt, {
                                    isDiscount: t,
                                    size: Mt.small,
                                    type: null == (_ = s[0]) ? void 0 : _.name,
                                    value: Number(null == (d = s[0]) ? void 0 : d.value),
                                }),
                            );
                        },
                    ),
                    _i = 'ProgressionLevelIcon_base_8a',
                    di = 'ProgressionLevelIcon_icon_49',
                    mi = 'ProgressionLevelIcon_icon__big_74',
                    Ei = 'ProgressionLevelIcon_icon__small_46',
                    Ai = ({ typeId: e, progressionLevel: t, classMix: u }) => {
                        const a = `level_${t}`,
                            n =
                                36 === e
                                    ? R.images.gui.maps.icons.customization.progression_icons
                                    : R.images.gui.maps.icons.customization.progression_styles.icons,
                            s = n.$dyn(a),
                            l = n.$dyn(a.concat('_small')),
                            i = (0, r.useMemo)(() => ({ backgroundImage: `url(${l})` }), [l]),
                            c = (0, r.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]);
                        return s && l
                            ? o().createElement(
                                  'div',
                                  { className: _i },
                                  o().createElement('div', { className: v()(di, Ei, u), style: i }),
                                  o().createElement('div', { className: v()(di, mi, u), style: c }),
                              )
                            : null;
                    },
                    gi = 'Slot_base_25',
                    bi = 'Slot_base__big_e2',
                    pi = 'Slot_base__isProgression_0b',
                    Ci = 'Slot_base__locked_4d',
                    hi = 'Slot_base__isAlreadyUsed_dd',
                    fi = 'Slot_base__selected_03',
                    vi = 'Slot_equippedIcon_0d',
                    Fi = 'Slot_pulse_3a',
                    Di = 'Slot_image_c9',
                    Bi = 'Slot_inProgressIcon_8a',
                    Si = 'Slot_progressionArrow_74',
                    wi = 'Slot_progressionArrow__enabled_25',
                    yi = 'Slot_shadowBottom_96',
                    ki = 'Slot_base__hasExtraName_55',
                    Ti = 'Slot_shadowTop_11',
                    Ni = 'Slot_base__topLeftCornerVisible_f9',
                    Mi = 'Slot_border_74',
                    Ii = 'Slot_base__equipped_be',
                    xi = 'Slot_topLeftCorner_b3',
                    Oi = 'Slot_ribbon_f5',
                    Li = 'Slot_isLocked_bb',
                    Ri = 'Slot_isAlreadyUsed_1a',
                    Pi = 'Slot_isAlreadyUsedText_50',
                    Hi = 'Slot_isAlreadyUsedIcon_6a',
                    Wi = 'Slot_icon_fc',
                    zi = 'Slot_icon__editable_69',
                    Ui = 'Slot_icon__rewindable_fd',
                    Gi = 'Slot_icon__special_50',
                    Vi = 'Slot_icon__alert_6d',
                    ji = 'Slot_icon__unHistorical_64',
                    $i = 'Slot_icon__fantastical_3a',
                    Xi = 'Slot_icon__serialNumber_26',
                    qi = 'Slot_hover_7b',
                    Yi = 'Slot_price_d1',
                    Ki = 'Slot_styleName_c6',
                    Zi = 'Slot_button_a6',
                    Ji = 'Slot_buttonWrapper_ac',
                    Qi = 'Slot_bubble_cc',
                    ec = 'Slot_bubble__placeButton_28',
                    tc = R.strings.customization,
                    uc = (0, r.memo)(
                        ({
                            intCD: e,
                            typeId: t,
                            locked: u,
                            soundHover: a = R.sounds.highlight(),
                            soundClick: n = R.sounds.cust_select(),
                            isSelected: s,
                            customizationDisplayType: l,
                            tooltip: i,
                            isSpecial: c,
                            showAlert: _,
                            isDim: d,
                            icon: m,
                            isWide: E,
                            quantity: A,
                            buyPrice: g,
                            extraName: b,
                            classMix: p,
                            progressionLevel: C,
                            isProgressionRewindEnabled: h,
                            editableIcon: f,
                            onSelectItem: F,
                            isEquipped: D,
                            editBtnEnabled: S,
                            onEditItem: w,
                            isRental: k,
                            rentalInfoText: T,
                            autoRentEnabled: N,
                            isWithSerialNumber: M,
                            isMainType: I,
                            isAlreadyUsed: x,
                            noveltyCounter: O,
                            editNoveltyCounter: L,
                            onHoverItem: P,
                            isInProgress: H,
                            arrowEnabled: z,
                            isNew: U,
                            isFilled: j,
                        }) => {
                            var X;
                            const q = (0, r.useMemo)(() => -1 === e, [e]),
                                Y = (0, r.useMemo)(() => !u, [u]),
                                K = y().mediaSize,
                                Z = f.includes('disable') ? null : f,
                                J = 1 === l,
                                Q = 2 === l,
                                ee = _ || c || M || l || Z,
                                te = (0, r.useCallback)(() => {
                                    (e && P(e), Y && a && !s && W(a));
                                }, [P, e, Y, a, s]),
                                ue = (0, r.useCallback)(() => {
                                    (C <= 0 && (u || x)) || (F && (e && F(e), W(n)));
                                }, [e, x, u, F, C, n]),
                                ae = (0, r.useCallback)(
                                    (t) => {
                                        (t.stopPropagation(), w && !u && e && w(e));
                                    },
                                    [e, u, w],
                                ),
                                ne = v()(
                                    gi,
                                    p,
                                    E && bi,
                                    s && fi,
                                    D && Ii,
                                    C > 0 && pi,
                                    ee && Ni,
                                    b && ki,
                                    u && Ci,
                                    x && hi,
                                ),
                                re = (0, r.useMemo)(
                                    () => ({ intCD: e, tooltip: i, showInventoryBlock: !u, progressionLevel: C }),
                                    [e, u, C, i],
                                ),
                                oe = (0, r.useMemo)(
                                    () => ({
                                        tooltip: J
                                            ? 'techCustomizationNonhistoricItem'
                                            : 'techCustomizationFantasticalItem',
                                    }),
                                    [J],
                                ),
                                se = Boolean(null == (X = g.discount[0]) ? void 0 : X.value);
                            return j
                                ? o().createElement(
                                      Yl,
                                      { key: e, isEnabled: !q, args: { type: 'customizationItem', intCD: e } },
                                      o().createElement(
                                          Hu,
                                          { args: re },
                                          o().createElement(
                                              'div',
                                              { className: ne, onMouseEnter: te, onClick: ue },
                                              U && o().createElement('div', { className: Fi }),
                                              D && o().createElement('div', { className: vi }),
                                              o().createElement(
                                                  'div',
                                                  { className: Mi },
                                                  void 0 !== z &&
                                                      o().createElement('div', { className: v()(Si, z && wi) }),
                                                  H && o().createElement('div', { className: Bi }),
                                                  o().createElement(
                                                      'div',
                                                      { className: Di },
                                                      o().createElement(Ql, { isDim: d, icon: m }),
                                                  ),
                                                  o().createElement('div', { className: Ti }),
                                                  o().createElement('div', { className: yi }),
                                                  u && o().createElement('div', { className: Li }),
                                                  x &&
                                                      o().createElement(
                                                          'div',
                                                          { className: Ri },
                                                          o().createElement(
                                                              'div',
                                                              { className: Pi },
                                                              o().createElement('div', { className: Hi }),
                                                              E &&
                                                                  o().createElement(We, {
                                                                      text: tc.customization.carousel.is_already_used(),
                                                                  }),
                                                          ),
                                                      ),
                                                  Boolean(O) &&
                                                      o().createElement(We, { className: Qi, text: O.toString() }),
                                                  I && o().createElement('div', { className: Oi }),
                                                  o().createElement(
                                                      'div',
                                                      { className: xi },
                                                      _ && o().createElement('div', { className: v()(Wi, Vi) }),
                                                      c && o().createElement('div', { className: v()(Wi, Gi) }),
                                                      M && o().createElement('div', { className: v()(Wi, Xi) }),
                                                      (J || Q) &&
                                                          !q &&
                                                          o().createElement(
                                                              Hu,
                                                              { args: oe },
                                                              o().createElement('div', {
                                                                  className: v()(Wi, J ? ji : $i),
                                                              }),
                                                          ),
                                                      Z &&
                                                          o().createElement('div', {
                                                              className: v()(Wi, zi),
                                                              style: {
                                                                  backgroundImage: `url(${(() => {
                                                                      if (Z)
                                                                          return K <= B.Small
                                                                              ? Z
                                                                              : Z.replace('small', 'big');
                                                                  })()})`,
                                                              },
                                                          }),
                                                      h
                                                          ? o().createElement('div', { className: v()(Wi, Ui) })
                                                          : o().createElement(Ai, {
                                                                typeId: t,
                                                                progressionLevel: C,
                                                                classMix: Wi,
                                                            }),
                                                  ),
                                                  o().createElement(We, { className: Ki, text: b }),
                                                  o().createElement(ci, {
                                                      classMix: Yi,
                                                      isStub: q,
                                                      price: g.price,
                                                      quantity: A,
                                                      isRental: k,
                                                      rentalInfoText: T,
                                                      autoRentEnabled: N,
                                                      locked: u,
                                                      hasDiscount: se,
                                                  }),
                                                  o().createElement('div', { className: qi }),
                                                  Boolean(f) &&
                                                      D &&
                                                      o().createElement(
                                                          Qe,
                                                          {
                                                              body: S
                                                                  ? tc.customization.changeButton.tooltip()
                                                                  : tc.customization.changeButtonDisabled.tooltip(),
                                                          },
                                                          o().createElement(
                                                              'div',
                                                              { id: `${e}-tooltip`, className: Ji },
                                                              o().createElement(
                                                                  $,
                                                                  {
                                                                      size: V.small,
                                                                      type: S ? G.primary : G.secondary,
                                                                      disabled: !S,
                                                                      mixClass: Zi,
                                                                      onClick: ae,
                                                                  },
                                                                  Boolean(L) &&
                                                                      o().createElement(We, {
                                                                          className: v()(Qi, ec),
                                                                          text: L.toString(),
                                                                      }),
                                                                  K >= B.Small
                                                                      ? o().createElement(We, {
                                                                            text: tc.customization.carousel.change_button(),
                                                                        })
                                                                      : o().createElement('img', {
                                                                            src: R.images.gui.maps.icons.customization.edit_btn(),
                                                                        }),
                                                              ),
                                                          ),
                                                      ),
                                              ),
                                          ),
                                      ),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: v()(gi, E && bi), onMouseEnter: te, onClick: ue },
                                      o().createElement('div', { className: Mi }),
                                  );
                        },
                    ),
                    ac = 'Slots_base_ef',
                    nc = 'Slots_categories_6b',
                    rc = 'Slots_categorieBox_d3',
                    oc = 'Slots_categorieText_12',
                    sc = 'Slots_categorieBoxPattern_8d',
                    lc = 'Slots_slot_17';
                function ic() {
                    return (
                        (ic =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ic.apply(this, arguments)
                    );
                }
                const cc = (0, r.memo)(
                    ({
                        items: e,
                        arrowsList: t,
                        categories: u,
                        onClick: a,
                        onHoverItem: n,
                        onEditClick: r,
                        isEditable: s,
                        categoriesRef: l,
                        itemsRef: i,
                    }) =>
                        o().createElement(
                            'div',
                            { className: ac },
                            u.map((c, _) => {
                                var d;
                                return o().createElement(
                                    'div',
                                    { className: nc, key: `${_}` },
                                    '' !== c.bookmarkName &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: rc,
                                                ref: (e) => {
                                                    e
                                                        ? l.current.set(c.bookmarkIndex, e)
                                                        : l.current.delete(c.bookmarkIndex);
                                                },
                                            },
                                            o().createElement('div', { className: sc }),
                                            o().createElement('div', { className: oc }, c.bookmarkName),
                                        ),
                                    e
                                        .slice(c.bookmarkIndex, null == (d = u[_ + 1]) ? void 0 : d.bookmarkIndex)
                                        .map((e, u) => {
                                            const l = t.find((e) => e.arrowIndex === u);
                                            return o().createElement(
                                                'div',
                                                {
                                                    key: `${_}_${u}`,
                                                    ref: (t) => {
                                                        t ? i.current.set(e.intCD, t) : i.current.delete(e.intCD);
                                                    },
                                                    'data-magnetic-tool-support': !0,
                                                },
                                                o().createElement(
                                                    uc,
                                                    ic(
                                                        {
                                                            onSelectItem: a,
                                                            onHoverItem: n,
                                                            onEditItem: r,
                                                            classMix: lc,
                                                            arrowEnabled: null == l ? void 0 : l.isEnabled,
                                                            isEditable: s,
                                                        },
                                                        e,
                                                    ),
                                                ),
                                            );
                                        }),
                                );
                            }),
                        ),
                );
                let _c;
                !(function (e) {
                    ((e.auto = 'auto'), (e.left = 'left'), (e.right = 'right'));
                })(_c || (_c = {}));
                const dc = {
                        base: 'Carousel_base_8a',
                        arrow: 'Carousel_arrow_6b',
                        arrow__hover: 'Carousel_arrow__hover_19',
                        arrow__left: 'Carousel_arrow__left_dd',
                        arrow__right: 'Carousel_arrow__right_99',
                        arrow__hidden: 'Carousel_arrow__hidden_de',
                        shadow: 'Carousel_shadow_6b',
                        shadow__left: 'Carousel_shadow__left_18',
                        shadow__right: 'Carousel_shadow__right_76',
                        shadow__hidden: 'Carousel_shadow__hidden_01',
                        horizontalContent: 'Carousel_horizontalContent_82',
                        horizontalWrapper__withoutScroll: 'Carousel_horizontalWrapper__withoutScroll_a1',
                        horizontalWrapper: 'Carousel_horizontalWrapper_fb',
                        horizontalBar: 'Carousel_horizontalBar_8a',
                        bookmarksWrapper: 'Carousel_bookmarksWrapper_13',
                        bookmark: 'Carousel_bookmark_04',
                        slots: 'Carousel_slots_ea',
                        slots__transition: 'Carousel_slots__transition_21',
                        thumb: 'Carousel_thumb_39',
                        arrowsHint: 'Carousel_arrowsHint_6f',
                    },
                    mc = 'right',
                    Ec = 'left',
                    Ac = (e) => e.offsetLeft - 0.5 * e.offsetWidth,
                    gc = (e, t) => e.offsetLeft - t + 1.5 * e.offsetWidth,
                    bc = R.strings.customization,
                    pc = { allowedButtons: [Dt.LEFT] },
                    Cc = (0, r.memo)(
                        (0, r.forwardRef)(
                            (
                                {
                                    items: e,
                                    arrowsList: t,
                                    categories: u,
                                    onClick: a,
                                    onHoverItem: n,
                                    onEditClick: s,
                                    scrollApi: i,
                                    onArrowClick: c,
                                    isCarouselArrowsHintVisible: _,
                                    scrollStartItemId: d,
                                    selectedItemId: m,
                                    firstExpandedItemId: E,
                                    tabId: A,
                                    lastScrollState: g,
                                    isEditable: b,
                                    onUpdateItems: p,
                                },
                                C,
                            ) => {
                                const h = y().mediaSize,
                                    f = (0, r.useRef)(new Map()),
                                    F = (0, r.useRef)(new Map()),
                                    D = (0, r.useMemo)(() => e.filter((e) => e.isEquipped), [e]),
                                    S = (0, r.useState)(0),
                                    w = S[0],
                                    k = S[1],
                                    T = (0, r.useState)(!1),
                                    N = T[0],
                                    M = T[1],
                                    I = (0, r.useState)(!1),
                                    x = I[0],
                                    O = I[1],
                                    L = (0, r.useState)(!1),
                                    R = L[0],
                                    P = L[1],
                                    H = (0, r.useState)(!1),
                                    W = H[0],
                                    U = H[1],
                                    G = (0, r.useState)([]),
                                    V = G[0],
                                    j = G[1],
                                    $ = (0, r.useState)(!1),
                                    X = $[0],
                                    q = $[1],
                                    Y = (0, r.useState)([0, 0]),
                                    K = Y[0],
                                    Z = Y[1];
                                (0, r.useImperativeHandle)(C, () => ({
                                    getFirstVisibleItemId: () => {
                                        const t = e.find((e) => {
                                            const t = f.current.get(e.intCD);
                                            return t && t.getBoundingClientRect().left > 0;
                                        });
                                        return t ? t.intCD : -1;
                                    },
                                }));
                                const J = { left: K[0], right: K[1] },
                                    Q = J.right <= 0 && J.left <= 0,
                                    ee = (function (e, t, u) {
                                        const a = e.contentRef,
                                            n = e.wrapperRef,
                                            o = e.scrollPosition,
                                            s = e.clampPosition,
                                            i = e.animationScroll,
                                            c = e.events,
                                            _ = (0, r.useState)(xl),
                                            d = _[0],
                                            m = _[1];
                                        return (
                                            (0, r.useEffect)(() => {
                                                const e = a.current;
                                                e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                            }, [a, d.type]),
                                            (0, r.useEffect)(() => {
                                                if ('dragging' !== d.type) return;
                                                const e = l.O.client.events.mouse.move(([e, u]) => {
                                                        const r = a.current,
                                                            l = n.current;
                                                        if (!r || !l) return;
                                                        if ('inside' === u && e.clientX < 0) return;
                                                        const c = 'inside' === u ? e.clientX : e.clientX - l.offsetLeft,
                                                            _ = d.positionFrom - c,
                                                            m = d.previousScrollPosition + _;
                                                        o.start(
                                                            Object.assign(
                                                                {
                                                                    scrollPosition: s(r, m),
                                                                    from: { scrollPosition: i.scrollPosition.get() },
                                                                },
                                                                t && { config: t },
                                                            ),
                                                        );
                                                    }),
                                                    u = l.O.client.events.mouse.up(function () {
                                                        m({ type: 'scrollingToEnd' });
                                                    });
                                                return () => {
                                                    (e(), u());
                                                };
                                            }, [i.scrollPosition, s, a, d, o, n, t]),
                                            (0, r.useEffect)(() => {
                                                if ('scrollingToEnd' !== d.type) return;
                                                const e = () => {
                                                    m(xl);
                                                };
                                                return (
                                                    i.scrollPosition.idle && e(),
                                                    c.on('rest', e),
                                                    () => c.off('rest', e)
                                                );
                                            }, [i.scrollPosition, d.type, c]),
                                            (0, r.useEffect)(() => {
                                                const e = a.current;
                                                if (!e) return;
                                                const t = (e) => {
                                                    (u &&
                                                        u.allowedButtons &&
                                                        -1 === u.allowedButtons.findIndex((t) => e.button === t)) ||
                                                        m({
                                                            type: 'dragging',
                                                            positionFrom: e.screenX,
                                                            previousScrollPosition: i.scrollPosition.get(),
                                                        });
                                                };
                                                return (
                                                    e.addEventListener('mousedown', t),
                                                    () => e.removeEventListener('mousedown', t)
                                                );
                                            }, [i.scrollPosition, a, u]),
                                            d
                                        );
                                    })(i, void 0, pc),
                                    te = 'dragging' === ee.type,
                                    ue = (0, r.useCallback)(() => {
                                        const e = i.getWrapperSize();
                                        if (!e) return null;
                                        let t = !1,
                                            u = !1;
                                        (D.forEach((a) => {
                                            const n = f.current.get(a.intCD);
                                            if (!n) return null;
                                            const r = n.getBoundingClientRect();
                                            (r.right <= 0 && (t = !0), r.left >= e && (u = !0));
                                        }),
                                            M(t),
                                            O(u));
                                    }, [D, i]),
                                    ae = (e) => {
                                        const t = i.getWrapperSize();
                                        if (!t) return null;
                                        let u = null,
                                            a = 1 / 0;
                                        if (
                                            (D.forEach((n) => {
                                                const r = f.current.get(n.intCD);
                                                if (!r) return null;
                                                const o = r.getBoundingClientRect(),
                                                    s = o.width / 2;
                                                if (e === Ec) {
                                                    if (o.right - s <= 0) {
                                                        const e = t - o.right;
                                                        e < a && ((a = e), (u = r));
                                                    }
                                                } else if (o.left + s >= t) {
                                                    const e = o.left - t;
                                                    e < a && ((a = e), (u = r));
                                                }
                                            }),
                                            u)
                                        ) {
                                            const a = u.getBoundingClientRect(),
                                                n = e === Ec ? u.offsetLeft - 36 : u.offsetLeft - t + a.width + 29;
                                            i.scrollPosition.start({ scrollPosition: J.right < n ? J.right : n });
                                        }
                                    },
                                    ne = (0, r.useCallback)(() => {
                                        const e = i.getContainerSize();
                                        if (!e) return;
                                        const t = u.length > 1 && !Q;
                                        if ((t !== X && q(t), !t)) return void (V.length > 0 && j([]));
                                        const a = [];
                                        (u.forEach((t) => {
                                            const u = F.current.get(t.bookmarkIndex);
                                            if (u) {
                                                let n = (u.offsetLeft + u.offsetWidth / 2) / e;
                                                ((n = Math.max(0, Math.min(1, n))),
                                                    a.push({
                                                        name: t.bookmarkName,
                                                        position: n,
                                                        index: t.bookmarkIndex,
                                                    }));
                                            }
                                        }),
                                            JSON.stringify(a) !== JSON.stringify(V) && j(a));
                                    }, [V, u, Q, i, X]),
                                    re = (0, r.useCallback)(
                                        (e) => {
                                            const t = e.which;
                                            (t === ot.n.ARROW_LEFT && c(!0), t === ot.n.ARROW_RIGHT && c(!1));
                                        },
                                        [c],
                                    );
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('keydown', re),
                                        () => window.removeEventListener('keydown', re)
                                    ),
                                    [re],
                                );
                                const oe = (0, r.useCallback)(() => {
                                        const e = i.animationScroll.scrollPosition.goal;
                                        k(e);
                                        const t = i.getBounds(),
                                            u = t[0],
                                            a = t[1];
                                        (u === J.left && a === J.right) || Z([u, a]);
                                    }, [i, J.left, J.right]),
                                    se = (0, r.useCallback)(
                                        (t) => {
                                            const u = e[t],
                                                a = f.current.get(u.intCD);
                                            if (a) return { position: a.offsetLeft, isFilled: u.isFilled };
                                        },
                                        [e],
                                    ),
                                    le = (0, r.useCallback)(() => {
                                        const t = i.getWrapperSize();
                                        if (t) {
                                            const u = i.animationScroll.scrollPosition.goal;
                                            p(u, t, e.length, se);
                                        }
                                    }, [i, e, p, se]),
                                    ie = (0, r.useCallback)(() => {
                                        (oe(), ne(), ue(), le());
                                    }, [ue, oe, ne, le]);
                                (0, r.useEffect)(
                                    () => (
                                        i.events.on('change', ie),
                                        i.events.on('recalculateContent', ie),
                                        i.events.on('resizeHandled', ie),
                                        () => {
                                            (i.events.off('change', ie),
                                                i.events.off('recalculateContent', ie),
                                                i.events.off('resizeHandled', ie));
                                        }
                                    ),
                                    [ie, i.events],
                                );
                                const ce = (0, r.useCallback)(
                                        (e, t = !0, u = _c.auto) => {
                                            const a = i.getBounds(),
                                                n = a[0],
                                                r = a[1];
                                            if (!((n <= 0 && r <= 0) || void 0 === e))
                                                if (e > 0) {
                                                    const a = i.getWrapperSize(),
                                                        n = f.current.get(e);
                                                    if (n && a) {
                                                        const e = i.animationScroll.scrollPosition.goal;
                                                        let r = 0,
                                                            o = !0;
                                                        if (u === _c.left) r = Ac(n);
                                                        else if (u === _c.right) r = gc(n, a);
                                                        else {
                                                            const t = n.offsetLeft - e < 0,
                                                                u = n.offsetLeft + n.offsetWidth - e > a;
                                                            t || u ? (t ? (r = Ac(n)) : u && (r = gc(n, a))) : (o = !1);
                                                        }
                                                        o &&
                                                            i.scrollPosition.start({
                                                                scrollPosition: r,
                                                                immediate: t,
                                                                reset: t,
                                                            });
                                                    }
                                                } else i.applyScroll(0, { immediate: !0, reset: !0 });
                                        },
                                        [i],
                                    ),
                                    _e = i.getContainerSize(),
                                    de = i.getWrapperSize();
                                Ol(() => {
                                    if (de && _e && g.current)
                                        return g.current.firstExpandedItemId !== E
                                            ? ((g.current.firstExpandedItemId = E), void (E && ce(E, !0, _c.left)))
                                            : g.current.selectedItemId !== m
                                              ? ((g.current.selectedItemId = m), void (m && ce(m, !1, _c.auto)))
                                              : g.current.tabId !== A
                                                ? ((g.current.tabId = A), void ce(d, !0, _c.left))
                                                : void 0;
                                }, [ce, m, E, d, A, _e, de, g]);
                                const me = v()(dc.shadow, dc.shadow__left, (w === J.left || Q) && dc.shadow__hidden),
                                    Ee = v()(dc.shadow, dc.shadow__right, (w === J.right || Q) && dc.shadow__hidden),
                                    Ae = v()(
                                        dc.arrow,
                                        dc.arrow__left,
                                        R && dc.arrow__hover,
                                        (!N || Q) && dc.arrow__hidden,
                                    ),
                                    ge = v()(
                                        dc.arrow,
                                        dc.arrow__right,
                                        W && dc.arrow__hover,
                                        (!x || Q) && dc.arrow__hidden,
                                    ),
                                    be = () => {
                                        z.playHighlight();
                                    };
                                return o().createElement(
                                    'div',
                                    { className: v()(dc.base, te && dc.base__dragging) },
                                    _ &&
                                        o().createElement(
                                            'div',
                                            { className: dc.arrowsHint },
                                            o().createElement(jl, null),
                                        ),
                                    o().createElement(
                                        Il.Horizontal.Area,
                                        {
                                            api: i,
                                            classNames: {
                                                wrapper: v()(
                                                    dc.horizontalWrapper,
                                                    Q && dc.horizontalWrapper__withoutScroll,
                                                ),
                                                content: dc.horizontalContent,
                                            },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: dc.slots },
                                            o().createElement(cc, {
                                                items: e,
                                                categories: u,
                                                arrowsList: t,
                                                onClick: a,
                                                onHoverItem: n,
                                                onEditClick: s,
                                                isEditable: b,
                                                itemsRef: f,
                                                categoriesRef: F,
                                            }),
                                        ),
                                    ),
                                    o().createElement(Il.Horizontal.Bar, {
                                        classNames: { base: dc.horizontalBar, thumb: dc.thumb },
                                        api: i,
                                    }),
                                    X &&
                                        o().createElement(
                                            'div',
                                            { className: dc.bookmarksWrapper },
                                            V.map(({ name: e, position: t, index: u }) =>
                                                o().createElement(
                                                    Qe,
                                                    { key: `${e}-${u}`, body: e },
                                                    o().createElement('div', {
                                                        onMouseEnter: be,
                                                        onClick: () =>
                                                            ((e) => {
                                                                const t = i.getWrapperSize(),
                                                                    u = i.getContainerSize();
                                                                if (!t || !u) return;
                                                                const a = F.current.get(e);
                                                                if (a) {
                                                                    z.playClick();
                                                                    const e = a.offsetLeft + 0.5 * a.offsetWidth,
                                                                        n = e / u,
                                                                        r = h >= B.Medium ? 36 : 29,
                                                                        o = e - n * (t - 2 * r) - r;
                                                                    i.scrollPosition.start({ scrollPosition: o });
                                                                }
                                                            })(u),
                                                        className: dc.bookmark,
                                                        style: { left: 100 * t + '%' },
                                                    }),
                                                ),
                                            ),
                                        ),
                                    o().createElement('div', { className: me }),
                                    o().createElement('div', { className: Ee }),
                                    o().createElement(
                                        Qe,
                                        { body: bc.tooltips.carousel.arrow() },
                                        o().createElement('div', {
                                            className: Ae,
                                            onMouseEnter: () => {
                                                (P(!0), z.playHighlight());
                                            },
                                            onMouseLeave: () => {
                                                P(!1);
                                            },
                                            onClick: () => {
                                                ae(Ec);
                                            },
                                        }),
                                    ),
                                    o().createElement(
                                        Qe,
                                        { body: bc.tooltips.carousel.arrow() },
                                        o().createElement('div', {
                                            className: ge,
                                            onMouseEnter: () => {
                                                (U(!0), z.playHighlight());
                                            },
                                            onClick: () => {
                                                ae(mc);
                                            },
                                            onMouseLeave: () => {
                                                U(!1);
                                            },
                                        }),
                                    ),
                                );
                            },
                        ),
                    ),
                    hc = { type: 'idle' };
                const fc = 'WarningText_base_5d',
                    vc = 'WarningText_header_57',
                    Fc = 'WarningText_headerIcon_2f',
                    Dc = 'WarningText_description_78',
                    Bc = o().memo(({ header: e, description: t }) =>
                        o().createElement(
                            'div',
                            { className: fc },
                            o().createElement('div', { className: vc }, o().createElement('div', { className: Fc }), e),
                            o().createElement('div', { className: Dc }, t),
                        ),
                    ),
                    Sc = 'ListEmptyState_base_5f',
                    wc = 'ListEmptyState_content_22',
                    yc = 'ListEmptyState_buttonWrapper_fa',
                    kc = 'ListEmptyState_button_cd',
                    Tc = R.strings.customization,
                    Nc = (0, r.memo)(
                        ({
                            warningHeader: e,
                            warningDescription: t,
                            buttonType: u = G.secondary,
                            tooltipArgs: a = { body: Tc.customization.resetFilter.tooltip.text() },
                            className: n,
                            onClick: r,
                            children: s,
                        }) =>
                            o().createElement(
                                'div',
                                { className: v()(Sc, n) },
                                o().createElement(
                                    'div',
                                    { className: wc },
                                    o().createElement(Bc, { header: e, description: t }),
                                    s &&
                                        o().createElement(
                                            'div',
                                            { className: yc },
                                            o().createElement(
                                                Qe,
                                                a,
                                                o().createElement(
                                                    $,
                                                    { size: V.small, type: u, onClick: r, mixClass: kc },
                                                    s,
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                    ),
                    Mc = {
                        base: 'CarouselExpandedView_base_31',
                        baseBack: 'CarouselExpandedView_baseBack_03',
                        tabs: 'CarouselExpandedView_tabs_e1',
                        filterHeader: 'CarouselExpandedView_filterHeader_14',
                        filterCounter: 'CarouselExpandedView_filterCounter_85',
                        filterNumbers: 'CarouselExpandedView_filterNumbers_5e',
                        filterNumbersLabel: 'CarouselExpandedView_filterNumbersLabel_93',
                        counterGlow: 'CarouselExpandedView_counterGlow_6f',
                        filtersClearButton: 'CarouselExpandedView_filtersClearButton_86',
                        filtersClearIcon: 'CarouselExpandedView_filtersClearIcon_5b',
                        filter: 'CarouselExpandedView_filter_c0',
                        currency: 'CarouselExpandedView_currency_3b',
                        closeButton: 'CarouselExpandedView_closeButton_bd',
                        carouselWrapper: 'CarouselExpandedView_carouselWrapper_60',
                        scrollArea: 'CarouselExpandedView_scrollArea_b4',
                        scrollContent: 'CarouselExpandedView_scrollContent_4c',
                        scrollContent__withoutScroll: 'CarouselExpandedView_scrollContent__withoutScroll_2a',
                        scrollContent__transition: 'CarouselExpandedView_scrollContent__transition_f3',
                        categories: 'CarouselExpandedView_categories_41',
                        category: 'CarouselExpandedView_category_b3',
                        slots: 'CarouselExpandedView_slots_6c',
                        slot: 'CarouselExpandedView_slot_b3',
                        base__dragging: 'CarouselExpandedView_base__dragging_36',
                        emptyState: 'CarouselExpandedView_emptyState_ea',
                        scrollbarWrapper: 'CarouselExpandedView_scrollbarWrapper_14',
                        lip: 'CarouselExpandedView_lip_64',
                        lip__hidden: 'CarouselExpandedView_lip__hidden_0b',
                        priceWrapper: 'CarouselExpandedView_priceWrapper_85',
                        price: 'CarouselExpandedView_price_fe',
                        bookmarksWrapper: 'CarouselExpandedView_bookmarksWrapper_ce',
                        bookmark: 'CarouselExpandedView_bookmark_7f',
                        thumb: 'CarouselExpandedView_thumb_9f',
                    };
                function Ic() {
                    return (
                        (Ic =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ic.apply(this, arguments)
                    );
                }
                const xc = R.strings.customization,
                    Oc = (0, Ft.Pi)(({ onCarouselCollapse: e, startScrollItemId: t, tabId: u, onUpdateItems: a }) => {
                        const n = Ga(),
                            s = n.controls,
                            i = n.model,
                            c = i.computes.getItems(),
                            _ = i.computes.getCategories(),
                            d = i.computes.getBillModel(),
                            m = y().mediaSize <= B.Small ? V.small : V.medium,
                            E = i.computes.getTabsItemsList(),
                            A = i.root.get(),
                            g = A.filterModel,
                            b = A.carouselModel,
                            p = Il.Vertical.useVerticalScrollApi(),
                            C = p.getWrapperSize(),
                            h = p.getContainerSize(),
                            f = i.computes.getBuyPrice(),
                            F = (0, r.useRef)(new Map()),
                            D = (0, r.useRef)(new Map()),
                            S = (0, r.useState)(0),
                            w = S[0],
                            k = S[1],
                            T = (0, r.useState)([]),
                            N = T[0],
                            M = T[1],
                            I = (0, r.useState)(!1),
                            x = I[0],
                            O = I[1],
                            L = (0, r.useState)([0, 0]),
                            P = L[0],
                            H = L[1],
                            U = g.filteredItemsCounter,
                            j = g.allItemsCounter,
                            X = g.isFilteringActive,
                            q = g.newHiddenItemsCounter,
                            Y = { top: P[0], bottom: P[1] },
                            K = Y.top <= 0 && Y.bottom <= 0,
                            Z = Object.fromEntries(Object.entries(d).filter(([e]) => 'buyPrice' !== e)),
                            J = (0, r.useCallback)(
                                () =>
                                    c.find((e) => {
                                        const t = F.current.get(e.intCD);
                                        return t && t.offsetTop - w > 0;
                                    }),
                                [c, w],
                            ),
                            Q = (0, r.useCallback)(() => {
                                var t;
                                e(null == (t = J()) ? void 0 : t.intCD);
                            }, [J, e]);
                        it({ callback: Q });
                        const ee = () => {
                                z.playHighlight();
                            },
                            te = (0, r.useCallback)(
                                (t) => {
                                    (t && s.onSelectItem(t), e());
                                },
                                [e, s],
                            ),
                            ue = (0, r.useCallback)(
                                (t) => {
                                    (t && s.onEditItem(t), e());
                                },
                                [s, e],
                            ),
                            ae = (0, r.useCallback)(() => {
                                (s.onShowBuyWindow(), e());
                            }, [s, e]),
                            ne = (function (e, t) {
                                const u = e.contentRef,
                                    a = e.wrapperRef,
                                    n = e.scrollPosition,
                                    o = e.clampPosition,
                                    s = e.animationScroll,
                                    i = e.events,
                                    c = (0, r.useState)(hc),
                                    _ = c[0],
                                    d = c[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = u.current;
                                        e && (e.style.cursor = 'dragging' === _.type ? 'grabbing' : 'grab');
                                    }, [u, _.type]),
                                    (0, r.useEffect)(() => {
                                        if ('dragging' !== _.type) return;
                                        const e = l.O.client.events.mouse.move(([e, r]) => {
                                                const l = u.current,
                                                    i = a.current;
                                                if (!l || !i) return;
                                                if ('inside' === r && e.clientY < 0) return;
                                                const c = 'inside' === r ? e.clientY : e.clientY - i.offsetTop,
                                                    d = _.positionFrom - c,
                                                    m = _.previousScrollPosition + d;
                                                n.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: o(l, m),
                                                            from: { scrollPosition: s.scrollPosition.get() },
                                                        },
                                                        t && { config: t },
                                                    ),
                                                );
                                            }),
                                            r = l.O.client.events.mouse.up(function () {
                                                d({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), r());
                                        };
                                    }, [s.scrollPosition, o, u, _, n, a, t]),
                                    (0, r.useEffect)(() => {
                                        if ('scrollingToEnd' !== _.type) return;
                                        const e = () => {
                                            d(hc);
                                        };
                                        return (s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                    }, [s.scrollPosition, _.type, i]),
                                    (0, r.useEffect)(() => {
                                        const e = u.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            d({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: s.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [s.scrollPosition, u]),
                                    _
                                );
                            })(p),
                            re = 'dragging' === ne.type,
                            oe = (0, r.useCallback)(() => {
                                const e = p.getContainerSize();
                                if (!e) return;
                                const t = _.length > 1 && !K;
                                if ((t !== x && O(t), !t)) return void (N.length > 0 && M([]));
                                const u = [];
                                (_.forEach((t) => {
                                    const a = D.current.get(t.bookmarkIndex);
                                    if (a) {
                                        let n = (a.offsetTop + a.offsetHeight / 2) / e;
                                        ((n = Math.max(0, Math.min(1, n))),
                                            u.push({ name: t.bookmarkName, position: n, index: t.bookmarkIndex }));
                                    }
                                }),
                                    JSON.stringify(u) !== JSON.stringify(N) && M(u));
                            }, [N, _, K, p, x]),
                            se = (0, r.useCallback)(() => {
                                const e = p.animationScroll.scrollPosition.goal;
                                k(e);
                                const t = p.getBounds(),
                                    u = t[0],
                                    a = t[1];
                                (u === Y.top && a === Y.bottom) || H([u, a]);
                            }, [p, Y.top, Y.bottom]),
                            le = (0, r.useCallback)(
                                (e) => {
                                    const t = c[e],
                                        u = F.current.get(t.intCD);
                                    if (u) return { position: u.offsetTop, isFilled: t.isFilled };
                                },
                                [c],
                            ),
                            ie = (0, r.useCallback)(() => {
                                const e = p.getWrapperSize();
                                if (e) {
                                    const t = p.animationScroll.scrollPosition.goal;
                                    a(t, e, c.length, le);
                                }
                            }, [p, c, a, le]),
                            ce = (0, r.useCallback)(() => {
                                (se(), oe(), ie());
                            }, [se, oe, ie]);
                        (0, r.useEffect)(
                            () => (
                                p.events.on('change', ce),
                                p.events.on('recalculateContent', ce),
                                p.events.on('resizeHandled', ce),
                                () => {
                                    (p.events.off('change', ce),
                                        p.events.off('recalculateContent', ce),
                                        p.events.off('resizeHandled', ce));
                                }
                            ),
                            [ce, se, p.events],
                        );
                        const _e = (0, r.useState)(t),
                            de = _e[0],
                            me = _e[1];
                        (Ol(() => {
                            if (de > -1 && C && h && !K) {
                                const e = F.current.get(de);
                                if (e) {
                                    const t = e.offsetTop - 0.5 * e.offsetHeight;
                                    (p.applyScroll(t, { immediate: !0, reset: !0 }), me(-1));
                                }
                            }
                        }, [t, C, h, K, p]),
                            Ol(() => {
                                p.applyScroll(0, { immediate: !0, reset: !0 });
                            }, [u, p]));
                        const Ee = v()(Mc.lip, (w === Y.bottom || K) && Mc.lip__hidden);
                        return o().createElement(
                            'div',
                            { className: v()(Mc.base, re && Mc.base__dragging) },
                            o().createElement('div', { className: Mc.baseBack }),
                            o().createElement(hr, {
                                tabs: E,
                                onClick: (e) => {
                                    (W(R.sounds.cust_tab_switch()), s.selectTab(e));
                                },
                                onHoverTab: s.hoverTab,
                                mixClass: Mc.tabs,
                            }),
                            o().createElement(
                                'div',
                                { className: Mc.filterHeader },
                                o().createElement(
                                    'div',
                                    { className: Mc.filterCounter },
                                    o().createElement(Ma, {
                                        title:
                                            X &&
                                            o().createElement(
                                                Qe,
                                                { body: xc.customization.resetFilter.tooltip.text() },
                                                o().createElement(
                                                    $,
                                                    {
                                                        type: G.ghost,
                                                        onClick: s.clearFilter,
                                                        mixClass: v()(Mc.filtersClearButton),
                                                    },
                                                    o().createElement('div', { className: Mc.filtersClearIcon }),
                                                ),
                                            ),
                                        label: o().createElement(We, {
                                            text: xc.filters.selectedTitle(),
                                            className: Mc.filterNumbersLabel,
                                        }),
                                        from: U,
                                        to: j,
                                        isFilterRange: !0,
                                        isGlowVisible: X,
                                        isSelectMode: !1,
                                        className: Mc.filterNumbers,
                                        classNames: { counterGlow: Mc.counterGlow },
                                        isHideTotalCounter: !X,
                                        isSelectedLimitReached: q > 0,
                                        isAnimationEnabled: q > 0,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Mc.filter },
                                    o().createElement(Ja, { isReverse: !0, buttonSize: m }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Mc.carouselWrapper },
                                c.length > 0
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              Il.Vertical.Area,
                                              {
                                                  api: p,
                                                  className: v()(Mc.scrollArea, K && Mc.scrollArea__withoutScroll),
                                                  classNames: {
                                                      content: v()(
                                                          Mc.scrollContent,
                                                          K && Mc.scrollContent__withoutScroll,
                                                      ),
                                                  },
                                              },
                                              _.map((e, t) => {
                                                  var u;
                                                  const a = b.isProgressionDecalsBannerVisible && e.isProgressive;
                                                  return o().createElement(
                                                      'div',
                                                      { className: Mc.categories, key: `${t}` },
                                                      '' !== e.bookmarkName &&
                                                          o().createElement(
                                                              'div',
                                                              {
                                                                  className: Mc.category,
                                                                  ref: (t) => {
                                                                      t
                                                                          ? D.current.set(e.bookmarkIndex, t)
                                                                          : D.current.delete(e.bookmarkIndex);
                                                                  },
                                                              },
                                                              e.bookmarkName,
                                                          ),
                                                      o().createElement(
                                                          'div',
                                                          { className: Mc.slots },
                                                          a &&
                                                              o().createElement(zo, {
                                                                  mixClass: Mc.slot,
                                                                  onClick: s.clickDecalsBanner,
                                                              }),
                                                          c
                                                              .slice(
                                                                  e.bookmarkIndex,
                                                                  null == (u = _[t + 1]) ? void 0 : u.bookmarkIndex,
                                                              )
                                                              .map((e, u) =>
                                                                  o().createElement(
                                                                      'div',
                                                                      {
                                                                          key: `${t}_${u}`,
                                                                          ref: (t) => {
                                                                              t
                                                                                  ? F.current.set(e.intCD, t)
                                                                                  : F.current.delete(e.intCD);
                                                                          },
                                                                      },
                                                                      o().createElement(
                                                                          uc,
                                                                          Ic(
                                                                              {
                                                                                  onSelectItem: te,
                                                                                  onEditItem: ue,
                                                                                  onHoverItem: s.hoverItem,
                                                                                  classMix: Mc.slot,
                                                                              },
                                                                              e,
                                                                          ),
                                                                      ),
                                                                  ),
                                                              ),
                                                      ),
                                                  );
                                              }),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: Mc.scrollbarWrapper },
                                              x &&
                                                  o().createElement(
                                                      'div',
                                                      { className: Mc.bookmarksWrapper },
                                                      N.map(({ name: e, position: t, index: u }) =>
                                                          o().createElement(
                                                              Qe,
                                                              { key: `${e}-${u}`, body: e },
                                                              o().createElement('div', {
                                                                  onMouseEnter: ee,
                                                                  onClick: () =>
                                                                      ((e) => {
                                                                          const t = p.getWrapperSize(),
                                                                              u = p.getContainerSize();
                                                                          if (!t || !u) return;
                                                                          const a = D.current.get(e);
                                                                          if (a) {
                                                                              z.playClick();
                                                                              const e =
                                                                                      a.offsetTop + a.offsetHeight / 2,
                                                                                  n = e - (e / u) * (t - 34) - 17;
                                                                              p.scrollPosition.start({
                                                                                  scrollPosition: n,
                                                                              });
                                                                          }
                                                                      })(u),
                                                                  className: Mc.bookmark,
                                                                  style: { top: 100 * t + '%' },
                                                              }),
                                                          ),
                                                      ),
                                                  ),
                                              o().createElement(Il.Vertical.Bar, {
                                                  classNames: { thumb: Mc.thumb },
                                                  api: p,
                                              }),
                                          ),
                                      )
                                    : o().createElement(
                                          Nc,
                                          {
                                              warningHeader: xc.customization.message.header(),
                                              warningDescription: xc.customization.message.description(),
                                              buttonType: G.secondary,
                                              onClick: s.clearFilter,
                                              className: Mc.emptyState,
                                          },
                                          o().createElement(We, { text: xc.customization.resetFiltersBtn.label() }),
                                      ),
                            ),
                            o().createElement(vt, {
                                id: R.views.lobby.customization.CustomizationMoneyBalance('resId'),
                                mixClass: Mc.currency,
                            }),
                            o().createElement(
                                'div',
                                { className: Mc.closeButton },
                                o().createElement(Ve, {
                                    side: 'right',
                                    type: 'close',
                                    caption: xc.customization.closeButton(),
                                    onClick: Q,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Mc.priceWrapper },
                                o().createElement('div', { className: Ee }),
                                o().createElement(
                                    'div',
                                    { className: Mc.price },
                                    f &&
                                        o().createElement(gu, {
                                            price: f,
                                            onResetHandler: s.onClearBasket,
                                            onBackHandler: s.onCancelChanges,
                                            cartParams: Z,
                                            onApplyHandler: ae,
                                            buttonSize: m,
                                        }),
                                ),
                            ),
                        );
                    });
                let Lc;
                !(function (e) {
                    ((e[(e.UnselectedEmpty = 0)] = 'UnselectedEmpty'),
                        (e[(e.SelectedEmpty = 1)] = 'SelectedEmpty'),
                        (e[(e.UnselectedFilled = 2)] = 'UnselectedFilled'),
                        (e[(e.SelectedFilled = 3)] = 'SelectedFilled'),
                        (e[(e.Preview = 4)] = 'Preview'),
                        (e[(e.Locked = 5)] = 'Locked'),
                        (e[(e.Removed = 6)] = 'Removed'),
                        (e[(e.Edit = 7)] = 'Edit'));
                })(Lc || (Lc = {}));
                const Rc = 'ArrowMarker_base_a2',
                    Pc = 'ArrowMarker_base__scaled_c5',
                    Hc = 'ArrowMarker_content_b3',
                    Wc = 'ArrowMarker_arrow_93',
                    zc = 'ArrowMarker_arrow__left_88',
                    Uc = 'ArrowMarker_arrow__right_6b',
                    Gc = 'ArrowMarker_arrow__leftPressed_e7',
                    Vc = 'ArrowMarker_arrow__rightPressed_7b',
                    jc = 'ArrowMarker_arrow__leftDisabled_7d',
                    $c = 'ArrowMarker_arrow__rightDisabled_11',
                    Xc = 'ArrowMarker_arrowHover_48',
                    qc = 'ArrowMarker_arrowHover__left_36',
                    Yc = 'ArrowMarker_arrowHover__right_a5',
                    Kc = 'ArrowMarker_arrowHitArea_66',
                    Zc = 'ArrowMarker_arrowHitArea__left_a8',
                    Jc = 'ArrowMarker_arrowHitArea__right_e5';
                function Qc() {
                    return (
                        (Qc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Qc.apply(this, arguments)
                    );
                }
                let e_;
                !(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(e_ || (e_ = {}));
                const t_ = (0, Ft.Pi)(() => {
                        const e = Ga(),
                            t = e.model,
                            u = e.controls,
                            a = t.carouselModel.get(),
                            n = a.isRightAvailable,
                            s = a.isLeftAvailable,
                            l = (0, r.useState)({ left: !1, right: !1 }),
                            i = l[0],
                            c = l[1],
                            _ = (0, r.useState)({ left: !1, right: !1 }),
                            d = _[0],
                            m = _[1],
                            E = Da(),
                            A = (e) => ({
                                onMouseEnter: () =>
                                    ((e) => {
                                        c((t) => Object.assign({}, t, { [e]: !0 }));
                                    })(e),
                                onMouseLeave: () =>
                                    ((e) => {
                                        (c((t) => Object.assign({}, t, { [e]: !1 })),
                                            m((t) => Object.assign({}, t, { [e]: !1 })));
                                    })(e),
                                onMouseDown: () =>
                                    ((e) => {
                                        m((t) => Object.assign({}, t, { [e]: !0 }));
                                    })(e),
                                onMouseUp: () =>
                                    ((e) => {
                                        m((t) => Object.assign({}, t, { [e]: !1 }));
                                    })(e),
                                onClick: () =>
                                    ((e) => {
                                        (W(R.sounds.cust_select()), u.onPressSelectNextItem(e === e_.left));
                                    })(e),
                            });
                        return o().createElement(
                            'div',
                            { className: v()(Rc, E > 1 && Pc) },
                            o().createElement(
                                'div',
                                { className: Hc },
                                o().createElement('div', { className: v()(Wc, zc, d.left && Gc, !s && jc) }),
                                o().createElement('div', { className: v()(Wc, Uc, d.right && Vc, !n && $c) }),
                                o().createElement('div', { className: v()(Xc, i.left && !d.left && s && qc) }),
                                o().createElement('div', { className: v()(Xc, i.right && !d.right && n && Yc) }),
                                o().createElement('div', Qc({ className: v()(Kc, Zc) }, A(e_.left))),
                                o().createElement('div', Qc({ className: v()(Kc, Jc) }, A(e_.right))),
                            ),
                        );
                    }),
                    u_ = {
                        base: 'EditMarker_base_77',
                        underline: 'EditMarker_underline_58',
                        underline__1: 'EditMarker_underline__1_bf',
                        underline__2: 'EditMarker_underline__2_a8',
                        underline__3: 'EditMarker_underline__3_7f',
                        underline__errorAnimation: 'EditMarker_underline__errorAnimation_ea',
                        shake: 'EditMarker_shake_85',
                    },
                    a_ = (0, Ft.Pi)(() => {
                        const e = Ga(),
                            t = e.model,
                            u = e.controls,
                            a = t.computes.getEditData(),
                            n = (0, r.useCallback)(
                                (e) => {
                                    const t = e.which;
                                    if ((t === ot.n.ENTER && u.onEnterInput(), t >= ot.n.KEY_0 && t <= ot.n.KEY_9)) {
                                        const e = t - ot.n.KEY_1 + 1;
                                        u.onAddChar(String(e));
                                    } else if (t >= ot.n.NUMPAD_0 && t <= ot.n.NUMPAD_9) {
                                        const e = t - ot.n.NUMPAD_0;
                                        u.onAddChar(String(e));
                                    } else
                                        (t === ot.n.DELETE && u.onDeleteAllChars(),
                                            t === ot.n.BACKSPACE && u.onRemoveChar());
                                },
                                [u],
                            );
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('keydown', n),
                                () => window.removeEventListener('keydown', n)
                            ),
                            [n],
                        );
                        const s = a.inscriptionState === Eo.NotAvailableEnter;
                        return o().createElement(
                            'div',
                            { className: u_.base },
                            o().createElement('div', {
                                key: s ? a.startTimestamp : '',
                                className: v()(
                                    u_.underline,
                                    u_[`underline__${a.editDigitsCount}`],
                                    s && u_.underline__errorAnimation,
                                ),
                            }),
                        );
                    }),
                    n_ = {
                        base: 'Marker_base_2a',
                        markerItem: 'Marker_markerItem_89',
                        inscription: 'Marker_inscription_c6',
                        show: 'Marker_show_37',
                        hide: 'Marker_hide_dc',
                        inscriptionText: 'Marker_inscriptionText_ae',
                        editMarkerWrapper: 'Marker_editMarkerWrapper_fd',
                        arrowMarkerWrapper: 'Marker_arrowMarkerWrapper_92',
                        defaultMarker: 'Marker_defaultMarker_06',
                        defaultMarkerIcon: 'Marker_defaultMarkerIcon_78',
                        base__hovered: 'Marker_base__hovered_2e',
                        base__state2: 'Marker_base__state2_d8',
                        defaultMarkerIcon__Camouflage: 'Marker_defaultMarkerIcon__Camouflage_ac',
                        base__state3: 'Marker_base__state3_5b',
                        defaultMarkerIcon__Modification: 'Marker_defaultMarkerIcon__Modification_77',
                        defaultMarkerIcon__Paint: 'Marker_defaultMarkerIcon__Paint_46',
                        defaultMarkerIcon__Style: 'Marker_defaultMarkerIcon__Style_3f',
                        defaultMarkerIcon__Emblem: 'Marker_defaultMarkerIcon__Emblem_36',
                        base__state0: 'Marker_base__state0_50',
                        opacityFrom05to1: 'Marker_opacityFrom05to1_1a',
                        base__state1: 'Marker_base__state1_95',
                        scaleFrom02to1: 'Marker_scaleFrom02to1_e9',
                        base__state6: 'Marker_base__state6_13',
                        defaultMarkerIcon__Inscription: 'Marker_defaultMarkerIcon__Inscription_58',
                        base__state4: 'Marker_base__state4_c9',
                        defaultMarkerIcon__ProjectionDecal: 'Marker_defaultMarkerIcon__ProjectionDecal_d3',
                        defaultMarkerIcon__withAnimation: 'Marker_defaultMarkerIcon__withAnimation_2f',
                        scaleFrom05to1: 'Marker_scaleFrom05to1_89',
                        base__state5: 'Marker_base__state5_5a',
                        brightnessFrom1to17: 'Marker_brightnessFrom1to17_3d',
                        scaleFrom08to1: 'Marker_scaleFrom08to1_d0',
                        interactive: 'Marker_interactive_87',
                    };
                let r_;
                !(function (e) {
                    ((e.EMBLEM = 'Emblem'), (e.INSCRIPTION = 'Inscription'), (e.PROJECTION_DECAL = 'ProjectionDecal'));
                })(r_ || (r_ = {}));
                const o_ = [r_.EMBLEM, r_.PROJECTION_DECAL, r_.INSCRIPTION],
                    s_ = (0, r.memo)(
                        ({
                            isHovered: e,
                            index: t,
                            isActiveInscription: u,
                            onMarkerClick: a,
                            onMarkerHover: n,
                            onMarkerDragOut: s,
                            state: l,
                            slotType: i,
                            scale: c,
                        }) => {
                            const _ = (0, r.useState)(!1),
                                d = _[0],
                                m = _[1],
                                E = (0, r.useRef)(l),
                                A = (0, r.useState)(!1),
                                g = A[0],
                                b = A[1],
                                p = o_.includes(i);
                            (0, r.useEffect)(() => {
                                ((E.current === Lc.Preview && l === Lc.UnselectedFilled) ||
                                (E.current === Lc.Locked && l === Lc.UnselectedEmpty)
                                    ? b(!0)
                                    : b(!1),
                                    (E.current = l));
                            }, [l]);
                            return o().createElement(
                                'div',
                                { className: n_.markerItem },
                                o().createElement(
                                    'div',
                                    {
                                        className: v()(n_.base, n_[`base__state${l}`], e && n_.base__hovered),
                                        onClick: () => {
                                            (l === Lc.UnselectedFilled && W(R.sounds.cust_select()),
                                                l === Lc.Removed && W(R.sounds.cust_select_remove()),
                                                l === Lc.Locked ? (W(R.sounds.cust_negative()), a(t)) : a(t));
                                        },
                                        onMouseEnter: () => {
                                            (z.playHighlight(), n(t, !0));
                                        },
                                        onMouseLeave: () => {
                                            (n(t, !1), d && s(t));
                                        },
                                        onMouseDown: () => {
                                            m(!0);
                                        },
                                        onMouseUp: () => {
                                            m(!1);
                                        },
                                        style: c
                                            ? {
                                                  opacity: c.opacity,
                                                  transform: 'translate(-50%, -50%) scale(' + c.scale + ')',
                                              }
                                            : {},
                                    },
                                    l !== Lc.Edit &&
                                        o().createElement(
                                            'div',
                                            { className: n_.defaultMarker },
                                            o().createElement('div', {
                                                className: v()(
                                                    n_.defaultMarkerIcon,
                                                    n_[`defaultMarkerIcon__${i}`],
                                                    g && n_.defaultMarkerIcon__withAnimation,
                                                ),
                                                onAnimationEndCapture: () => {
                                                    b(!1);
                                                },
                                            }),
                                        ),
                                    l === Lc.Edit &&
                                        o().createElement(
                                            'div',
                                            { className: n_.editMarkerWrapper },
                                            o().createElement(a_, null),
                                        ),
                                    l === Lc.SelectedFilled &&
                                        p &&
                                        o().createElement(
                                            'div',
                                            { className: n_.arrowMarkerWrapper },
                                            o().createElement(t_, null),
                                        ),
                                    o().createElement('div', { className: n_.interactive }),
                                ),
                                u &&
                                    l === Lc.Locked &&
                                    o().createElement(
                                        'div',
                                        { className: n_.inscription },
                                        o().createElement(We, {
                                            className: n_.inscriptionText,
                                            text: R.strings.vehicle_customization.notification.slotIsFilled.title(),
                                        }),
                                    ),
                            );
                        },
                    ),
                    l_ = 'MarkersList_markerWrapper_90',
                    i_ = (0, Ft.Pi)(({ isSceneDraggingChange: e }) => {
                        const t = Ga(),
                            u = t.model,
                            a = t.controls,
                            n = u.customizationTypes.get(),
                            s = (0, r.useState)(0),
                            l = s[0],
                            i = s[1],
                            c = (0, r.useState)([]),
                            _ = c[0],
                            d = c[1],
                            m = (0, r.useState)([]),
                            E = m[0],
                            A = m[1],
                            g = (0, r.useState)([]),
                            b = g[0],
                            p = g[1],
                            C = (0, r.useRef)(e),
                            h = (0, r.useRef)(_);
                        (0, r.useEffect)(() => {
                            h.current = _;
                        }, [_]);
                        const f = (0, r.useRef)([]),
                            v = (0, r.useRef)([]),
                            F = (0, r.useRef)(0),
                            D = (0, r.useState)(null),
                            B = D[0],
                            S = D[1],
                            w = (0, r.useRef)([]),
                            y = (0, r.useRef)([]),
                            k = (0, r.useState)([]),
                            T = k[0],
                            N = k[1];
                        ((0, r.useEffect)(() => {
                            if (e)
                                return Qa(() => {
                                    C.current = e;
                                }, 300);
                            C.current = e;
                        }, [e]),
                            ((e) => {
                                const t = (0, r.useRef)(0),
                                    u = (0, r.useRef)(0),
                                    a = (0, r.useRef)(0),
                                    n = (0, r.useRef)(0),
                                    o = (r) => {
                                        if (u.current) {
                                            const t = r - u.current;
                                            ((a.current += t), (n.current = n.current + t), (n.current = 0), e());
                                        }
                                        ((u.current = r), (t.current = requestAnimationFrame(o)));
                                    };
                                (0, r.useEffect)(
                                    () => (
                                        (t.current = requestAnimationFrame(o)),
                                        () => cancelAnimationFrame(t.current)
                                    ),
                                    [],
                                );
                            })(() => {
                                if (C.current) return;
                                const e = u.computes.getMarkersList().filter((e) => 0 !== e.slotType);
                                (e.length !== F.current &&
                                    ((f.current = Array(e.length).fill('0')),
                                    p(Array(e.length).fill(0)),
                                    (v.current = Array(e.length).fill(!1)),
                                    A(Array(e.length).fill(!1)),
                                    (h.current = Array(e.length).fill(0)),
                                    d(Array(e.length).fill(0)),
                                    (F.current = e.length),
                                    i(e.length)),
                                    e.forEach((t, u) => {
                                        const a = w.current[u];
                                        if (!a) return;
                                        const r = `${t.posx.toFixed(1)}rem`,
                                            o = `${t.posy.toFixed(1)}rem`,
                                            s = `${t.opacity.toFixed(2)}`,
                                            l = `${t.scale.toFixed(2)}`,
                                            i = `${t.areaId}`,
                                            c = `${t.zIndex}`,
                                            _ = Object.keys(n).find((e) => n[e] === t.slotType);
                                        if (void 0 === _) throw Error(`invalid slotType ${t.slotType} of ${t.state}`);
                                        const m = `${t.regionIdx}`,
                                            E = t.state,
                                            g = t.isHovered,
                                            b = y.current[u] || { lastOpacityUpdate: 0 },
                                            C = 'flex' === a.style.display;
                                        t.isVisible
                                            ? ((a.style.display = 'flex'),
                                              (b.opacity === s && C) ||
                                                  ((a.style.opacity = '1'),
                                                  N((e) => {
                                                      var t;
                                                      return (
                                                          e[u] && null != (t = Object.keys(e[u])) && t.length
                                                              ? (e[u] = Object.assign({}, e[u], { opacity: s }))
                                                              : (e[u] = { opacity: s }),
                                                          e
                                                      );
                                                  })),
                                              (b.x === r && C) || a.style.setProperty('--x', r),
                                              (b.y === o && C) || a.style.setProperty('--y', o),
                                              (b.zIndex === c && C) || a.style.setProperty('--zIndex', c),
                                              (b.scale === l && C) ||
                                                  (a.style.setProperty('--scale', '1'),
                                                  N(
                                                      (e) => (
                                                          e[u] && Object.keys(e[u]).length
                                                              ? (e[u] = Object.assign({}, e[u], { scale: l }))
                                                              : (e[u] = { scale: l }),
                                                          e
                                                      ),
                                                  )),
                                              (a.getAttribute('areaId') === i && e.length === F.current && C) ||
                                                  a.setAttribute('areaId', i),
                                              (a.getAttribute('slotType') === _ && e.length === F.current && C) ||
                                                  a.setAttribute('slotType', _),
                                              (a.getAttribute('regionIdx') === m && e.length === F.current && C) ||
                                                  a.setAttribute('regionIdx', m),
                                              (y.current[u] = {
                                                  x: r,
                                                  y: o,
                                                  opacity: s,
                                                  scale: l,
                                                  lastOpacityUpdate: b.lastOpacityUpdate || 0,
                                                  lastScaleUpdate: b.lastScaleUpdate || 0,
                                                  areaId: i,
                                                  slotType: _,
                                                  regionIdx: m,
                                                  state: E,
                                                  zIndex: c,
                                              }),
                                              h.current[u] !== E &&
                                                  d((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = E), t);
                                                  }),
                                              f.current[u] !== _ &&
                                                  p((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = _), t);
                                                  }),
                                              v.current[u] !== g &&
                                                  A((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = g), t);
                                                  }),
                                              (h.current[u] = E),
                                              (f.current[u] = _),
                                              (v.current[u] = g))
                                            : (a.style.display = 'none');
                                    }));
                            }));
                        const M = (0, r.useRef)(null),
                            I = (0, r.useCallback)(
                                (e) => {
                                    M.current && clearTimeout(M.current);
                                    const t = w.current[e];
                                    if (!t) return;
                                    if (h.current[e] === Lc.Locked)
                                        (S(null),
                                            S(e),
                                            (M.current = setTimeout(() => {
                                                S((t) => (t === e ? null : t));
                                            }, 2300)));
                                    else {
                                        const e = Number(t.getAttribute('areaId')),
                                            u = t.getAttribute('slotType'),
                                            r = Number(t.getAttribute('regionIdx'));
                                        n[u] && a.selectAnchor(e, n[u], r);
                                    }
                                },
                                [a, n],
                            ),
                            x = (0, r.useCallback)(
                                (e, t) => {
                                    if (w.current.length > e && e >= 0) {
                                        const u = w.current[e],
                                            r = Number(u.getAttribute('areaId')),
                                            o = u.getAttribute('slotType'),
                                            s = Number(u.getAttribute('regionIdx'));
                                        n[o] && a.hoverAnchor(r, n[o], s, t);
                                    }
                                },
                                [a, n],
                            ),
                            O = (0, r.useCallback)(
                                (e) => {
                                    if (w.current.length > e && e >= 0) {
                                        const t = w.current[e],
                                            u = Number(t.getAttribute('areaId')),
                                            r = t.getAttribute('slotType'),
                                            o = Number(t.getAttribute('regionIdx'));
                                        n[r] && a.dragAnchor(u, n[r], o);
                                    }
                                },
                                [a, n],
                            );
                        return o().createElement(
                            o().Fragment,
                            null,
                            Array.from({ length: l }).map((e, t) =>
                                o().createElement(
                                    'div',
                                    { key: t, className: l_, ref: (e) => (w.current[t] = e) },
                                    o().createElement(s_, {
                                        index: t,
                                        isActiveInscription: B === t,
                                        onMarkerClick: () => I(t),
                                        onMarkerHover: x,
                                        onMarkerDragOut: O,
                                        state: _[t],
                                        isHovered: E[t],
                                        slotType: b[t],
                                        scale: T[t],
                                    }),
                                ),
                            ),
                        );
                    });
                function c_() {
                    return (
                        (c_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        c_.apply(this, arguments)
                    );
                }
                let __;
                !(function (e) {
                    ((e.CAMOUFLAGE = 'camouflage'),
                        (e.PROJECTION_DECAL = 'projectionDecal'),
                        (e.INSCRIPTION = 'inscription'));
                })(__ || (__ = {}));
                const d_ = 'mainview:close',
                    m_ = [__.CAMOUFLAGE, __.PROJECTION_DECAL],
                    E_ = R.strings.customization,
                    A_ = R.strings.customization.tooltips.filters;
                viewEnv.clearInternalCacheAfterFinalize();
                const g_ = (0, Ft.Pi)(() => {
                    var e, t;
                    const u = Ga(),
                        a = u.controls,
                        n = u.model,
                        s = y().mediaSize,
                        l = n.root.get(),
                        i = l.isBuyViewActive,
                        c = l.isStyleInfoViewActive,
                        _ = l.isEditable,
                        d = l.isApplyToAllSeasonsAvailable,
                        m = l.isApplyToAllSeasonsSelected,
                        E = l.isShowProgressionInfoButton,
                        A = l.isHoverVehicleSlot,
                        g = l.isProgressiveItemsViewVisible,
                        b = l.isFilterPopoverOpened,
                        p = l.isOnboardingViewOpened,
                        C = (0, r.useRef)(null),
                        h = n.computes.getStageSwitcher(),
                        f = n.computes.getSelectedTabItemType(),
                        F = h.isVisible,
                        D = h.selectedLevel,
                        S = h.numberOfBullets,
                        w = h.isBulletsBeforeCurrentDisabled,
                        k = h.currentLevel,
                        T = n.toolbarModel.get(),
                        N = T.isToolbarPanelEnabled,
                        M = T.isInscriptionPanelEnabled,
                        I = n.carouselModel.get(),
                        x = I.scrollStartItemId,
                        O = I.isCarouselArrowsHintVisible,
                        L = n.computes.getSelectedItemId(),
                        P = (0, r.useState)(-1),
                        H = P[0],
                        z = P[1],
                        U = (0, r.useRef)({
                            tabId: void 0,
                            scrollStartItemId: void 0,
                            selectedItemId: void 0,
                            firstExpandedItemId: void 0,
                        }),
                        j = (0, r.useState)(!1),
                        X = j[0],
                        q = j[1],
                        Y = (0, r.useState)(!1),
                        K = Y[0],
                        Z = Y[1],
                        J = (0, r.useState)(!1),
                        ee = J[0],
                        te = J[1],
                        ue = (0, r.useState)(!1),
                        ae = ue[0],
                        re = ue[1],
                        oe = n.computes.getBuyPrice(),
                        se = n.computes.getItems(),
                        le = n.computes.getCategories(),
                        ie = n.computes.getArrowsList(),
                        ce = n.computes.getTabsItemsList(),
                        _e = n.computes.getBillModel(),
                        de = n.computes.getSeasonsTabsItemsList(),
                        me = n.computes.getToolbarButtonsList(),
                        Ee = n.magneticToolModel.get(),
                        Ae = n.headerVehicleInfo.get(),
                        ge = Ae.description,
                        be = Ae.isStyleBonusPreviewText,
                        pe = Ae.vehicle,
                        Ce = s <= B.Small ? V.small : V.medium,
                        he = _t(),
                        fe = N && !M && !X && !i && !c,
                        ve = rt(fe),
                        Fe = rt(Ee.isEnabled),
                        De = n.computes.getEditData(),
                        Be = !X && !fe && !De.inscriptionState,
                        Se = (0, r.useCallback)(
                            (e) => {
                                (z(e || -1), a.onExpandCarousel(!1), q(!1));
                            },
                            [a],
                        ),
                        we = (0, r.useCallback)(
                            (e, t) => {
                                (a.onToolbarItemClick(e, t),
                                    e === et.CUSTOMIZATION_SHEET_ACTION_CLOSE && a.onSceneOverChange(!0));
                            },
                            [a],
                        ),
                        ye = (0, r.useCallback)(() => {
                            engine.trigger(d_);
                            const e =
                                n.computes
                                    .getMarkersList()
                                    .filter((e) => '1' === e.state.toString() || '3' === e.state.toString()).length > 0;
                            if (!X) {
                                if (fe)
                                    return (
                                        a.onToolbarItemClick(et.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1),
                                        we(et.CUSTOMIZATION_SHEET_ACTION_CLOSE, 0),
                                        void a.onUnselectItem()
                                    );
                                if (
                                    n.computes.getToolbarData().isInscriptionPanelEnabled &&
                                    2 !== n.computes.getEditData().inscriptionState &&
                                    1 !== n.computes.getEditData().inscriptionState
                                )
                                    a.onSceneClick();
                                else if (
                                    (!_ &&
                                        0 === n.computes.getEditData().inscriptionState &&
                                        !n.computes.getToolbarData().isToolbarPanelEnabled) ||
                                    ((2 === n.computes.getEditData().inscriptionState ||
                                        1 === n.computes.getEditData().inscriptionState) &&
                                        a.onCancelChanges(),
                                    a.closeEditItem(),
                                    i)
                                )
                                    if (Ee.isEnabled) a.onUnselectItem();
                                    else {
                                        if (!e)
                                            return (
                                                i ? a.closeBinEsc() : c ? a.onCloseStyleInfoEsc() : a.onClose(),
                                                () => {
                                                    engine.off(d_);
                                                }
                                            );
                                        a.onSceneClick();
                                    }
                            }
                        }, [a, i, X, _, fe, c, Ee.isEnabled, n.computes, we]);
                    (0, r.useEffect)(() => {
                        g && viewEnv.clearInternalCaches();
                    }, [g]);
                    const ke = Q(
                        (e, t, u, a) => {
                            if (t) {
                                var n;
                                let r = 0,
                                    o = u,
                                    s = !1,
                                    l = 0;
                                for (; l < u; ) {
                                    const u = a(l);
                                    if (u) {
                                        const a = u.position - e < 0,
                                            n = u.position - e > t;
                                        if ((a && l > r ? (r = l) : s || (s = !u.isFilled), n)) {
                                            o = l;
                                            break;
                                        }
                                    }
                                    l++;
                                }
                                (s || (s = !(null != (n = a(r)) && n.isFilled)), s && Te(r, o));
                            }
                        },
                        [(Te = a.onRequestItems)],
                        200,
                    );
                    var Te;
                    it({ callback: ye, preventPropagation: !1 });
                    const Ne = ne(),
                        Me = Q(
                            () => {
                                i ? a.buyItems() : a.onShowBuyWindow();
                            },
                            [i],
                            300,
                        ),
                        Ie = (0, r.useCallback)(
                            (e) => {
                                a.selectSeason(e);
                            },
                            [a],
                        ),
                        xe = (0, r.useCallback)(
                            (e) => {
                                e && a.onSelectItem(e);
                            },
                            [a],
                        ),
                        Oe = (0, r.useCallback)(
                            (e) => {
                                !p && a.onSceneOverChange(e);
                            },
                            [a, p],
                        );
                    ((0, r.useEffect)(() => {
                        a.onSceneOverChange(!b);
                    }, [b, a]),
                        (0, r.useEffect)(() => {
                            a.onSceneOverChange(!p);
                        }, [p, a]),
                        (0, r.useEffect)(() => {
                            !Fe && Ee.isEnabled && X && Se();
                        }, [Se, X, Ee.isEnabled, Fe]),
                        (0, r.useEffect)(() => {
                            fe && !ve
                                ? m_.includes(f)
                                    ? W(R.sounds.radial_big())
                                    : W(R.sounds.radial_small())
                                : !fe &&
                                  ve &&
                                  (m_.includes(f) ? W(R.sounds.radial_big_close()) : W(R.sounds.radial_small()));
                        }, [fe, ve, f]),
                        (0, r.useEffect)(() => {
                            if (he.isRunning) return () => he.clear();
                        }, [he]),
                        (0, r.useEffect)(() => {
                            (i && Z(!0),
                                i ||
                                    he.run(() => {
                                        Z(!1);
                                    }, 400));
                        }, [i, he]),
                        (0, r.useEffect)(() => {
                            (c && (X && Se(), re(!0)),
                                c ||
                                    he.run(() => {
                                        re(!1);
                                    }));
                        }, [c, he, X, Se]));
                    const Le = Object.fromEntries(Object.entries(_e).filter(([e]) => 'buyPrice' !== e)),
                        Re = (0, r.useCallback)(
                            (e) => {
                                a.onStageChange(e);
                            },
                            [a],
                        ),
                        Pe = (0, r.useCallback)(() => {
                            (a.onToolbarItemClick(et.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1),
                                a.progressiveInfoButtonClick());
                        }, [a]);
                    (0, r.useEffect)(() => {
                        0 === se.length && Ne.scrollPosition.start({ scrollPosition: 0, reset: !0, immediate: !0 });
                    }, [Ne, se]);
                    const He = (0, r.useCallback)(() => {
                            (a.onToolbarItemClick(et.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1), a.onClose());
                        }, [a]),
                        ze = (0, r.useCallback)(() => {
                            !p && a.onSceneOverChange(!1);
                        }, [a, p]),
                        Ue = (0, r.useCallback)(() => {
                            !p && a.onSceneOverChange(!0);
                        }, [a, p]);
                    return o().createElement(
                        'div',
                        { className: v()(as, ee ? cs : is, X && ns), onMouseEnter: Ue, onMouseLeave: ze },
                        o().createElement(
                            'div',
                            { className: rs },
                            X
                                ? o().createElement(Oc, {
                                      onCarouselCollapse: Se,
                                      startScrollItemId: H,
                                      onUpdateItems: ke,
                                      tabId: null == (e = n.computes.getSelectedTab()) ? void 0 : e.id,
                                  })
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      !ae &&
                                          o().createElement(Lo, {
                                              moveSpace: a.moveSpace,
                                              onSceneOverChange: Oe,
                                              onSceneDraggingChange: a.onSceneDraggingChange,
                                              onSceneClick: a.onSceneClick,
                                              onHideElements: (e) => {
                                                  te(e);
                                              },
                                              onResetMagneticTool: a.onUnselectItem,
                                              isHovered: A,
                                              isOnboardingViewOpened: p,
                                          }),
                                      E &&
                                          !i &&
                                          o().createElement(
                                              'div',
                                              { className: ls },
                                              o().createElement(Ve, {
                                                  caption: E_.progression.info(),
                                                  type: 'info',
                                                  onClick: Pe,
                                              }),
                                          ),
                                      !c &&
                                          !i &&
                                          o().createElement(
                                              'div',
                                              { className: _s },
                                              o().createElement(Ve, {
                                                  side: 'right',
                                                  type: 'close',
                                                  caption: E_.customization.closeButton(),
                                                  onClick: He,
                                              }),
                                          ),
                                      c &&
                                          o().createElement(
                                              'div',
                                              { className: Ks },
                                              o().createElement(Ve, {
                                                  side: 'left',
                                                  type: 'back',
                                                  caption: E_.customization.backButton(),
                                                  onClick: a.onCloseStyleInfoEsc,
                                              }),
                                          ),
                                      !i &&
                                          !ae &&
                                          o().createElement(
                                              'div',
                                              { className: v()(ps, ee ? hs : Cs), 'data-magnetic-tool-support': !0 },
                                              o().createElement(i_, { isSceneDraggingChange: ee }),
                                          ),
                                      Boolean(De.inscriptionState) &&
                                          o().createElement('div', { className: Os }, o().createElement(ko, De)),
                                      o().createElement(
                                          'div',
                                          { className: v()(os, i && ss) },
                                          o().createElement(us, pe),
                                          !ae && o().createElement(We, { text: ge, className: v()(ds, be && ms) }),
                                      ),
                                      o().createElement(
                                          'div',
                                          { className: v()(Us, (i || c) && Gs) },
                                          o().createElement(
                                              'div',
                                              { className: Es },
                                              o().createElement(
                                                  'div',
                                                  { className: As },
                                                  o().createElement(
                                                      'div',
                                                      { className: ys, onMouseEnter: ze, onMouseLeave: Ue },
                                                      o().createElement(
                                                          Qe,
                                                          {
                                                              body: _
                                                                  ? A_.openPanelDisabledButton()
                                                                  : A_.openPanelButton(),
                                                          },
                                                          o().createElement(
                                                              'div',
                                                              { className: Zs },
                                                              o().createElement(
                                                                  $,
                                                                  {
                                                                      type: G.ghost,
                                                                      size: Ce,
                                                                      mixClass: Ss,
                                                                      onClick: () => {
                                                                          if (C.current) {
                                                                              const e =
                                                                                  C.current.getFirstVisibleItemId();
                                                                              z(e || -1);
                                                                          }
                                                                          (a.onExpandCarousel(!0), q(!0));
                                                                      },
                                                                      disabled: _,
                                                                  },
                                                                  o().createElement(We, {
                                                                      className: ws,
                                                                      text: E_.filters.openPanelButton(),
                                                                  }),
                                                              ),
                                                          ),
                                                      ),
                                                      o().createElement('div', { className: Ts }),
                                                      o().createElement(Ja, { buttonSize: Ce }),
                                                  ),
                                                  o().createElement(
                                                      'div',
                                                      { className: ks, onMouseEnter: ze, onMouseLeave: Ue },
                                                      oe &&
                                                          o().createElement(gu, {
                                                              price: oe,
                                                              onResetHandler: a.onClearBasket,
                                                              onBackHandler: a.onCancelChanges,
                                                              onApplyHandler: Me,
                                                              cartParams: Le,
                                                              buttonSize: Ce,
                                                          }),
                                                  ),
                                              ),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: gs, onMouseEnter: ze, onMouseLeave: Ue },
                                              o().createElement('div', { className: bs }),
                                              o().createElement(hr, {
                                                  isEditable: _,
                                                  tabs: ce,
                                                  onClick: (e) => {
                                                      (W(R.sounds.cust_tab_switch()), a.selectTab(e));
                                                  },
                                                  onHoverTab: a.hoverTab,
                                                  onEditClose: a.closeEditItem,
                                              }),
                                              se.length > 0
                                                  ? o().createElement(Cc, {
                                                        ref: C,
                                                        scrollApi: Ne,
                                                        items: se,
                                                        arrowsList: ie,
                                                        categories: le,
                                                        onClick: xe,
                                                        onHoverItem: a.hoverItem,
                                                        onEditClick: a.onEditItem,
                                                        onArrowClick: a.onPressSelectNextItem,
                                                        isCarouselArrowsHintVisible: O,
                                                        scrollStartItemId: x,
                                                        selectedItemId: L,
                                                        firstExpandedItemId: H,
                                                        tabId:
                                                            null == (t = n.computes.getSelectedTab()) ? void 0 : t.id,
                                                        lastScrollState: U,
                                                        isEditable: _,
                                                        onUpdateItems: ke,
                                                    })
                                                  : o().createElement(
                                                        Nc,
                                                        {
                                                            warningHeader: E_.customization.message.header(),
                                                            warningDescription: E_.customization.message.description(),
                                                            buttonType: G.secondary,
                                                            onClick: a.clearFilter,
                                                            className: fs,
                                                        },
                                                        o().createElement(We, {
                                                            text: E_.customization.resetFiltersBtn.label(),
                                                        }),
                                                    ),
                                          ),
                                      ),
                                  ),
                            o().createElement(
                                'div',
                                {
                                    className: v()(Ns, !i && (ee ? Is : Ms)),
                                    'data-magnetic-tool-support': !0,
                                    onMouseEnter: ze,
                                    onMouseLeave: Ue,
                                },
                                o().createElement(Yo, { tabs: de, onClick: Ie, isMinimised: X || i || ae }),
                            ),
                            !X &&
                                o().createElement(zo, {
                                    onClick: a.clickDecalsBanner,
                                    onMouseEnter: ze,
                                    onMouseLeave: Ue,
                                    mixClass: v()(vs, (i || c) && Fs, !(i || c) && (ee ? Bs : Ds)),
                                }),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: v()(Vs, i && js) },
                                    o().createElement(
                                        'div',
                                        { className: $s },
                                        oe &&
                                            o().createElement(gu, {
                                                price: oe,
                                                onResetHandler: a.onClearBasket,
                                                onBackHandler: a.onCancelChanges,
                                                onApplyHandler: Me,
                                                onAutoRentChange: a.onAutoRentChange,
                                                onAutoRentHintClose: a.onAutoRentHintClose,
                                                cartParams: Le,
                                                buttonSize: Ce,
                                                className: Xs,
                                            }),
                                    ),
                                ),
                            d &&
                                !X &&
                                !i &&
                                !c &&
                                o().createElement(
                                    'div',
                                    { className: Hs, 'data-magnetic-tool-support': !0 },
                                    o().createElement(mo, {
                                        itemType: f,
                                        isSelected: m,
                                        onSelectApplyingAllSeasons: a.onApplyToAllSeasonsChange,
                                    }),
                                ),
                            fe &&
                                o().createElement(
                                    'div',
                                    {
                                        className: v()(Ls, F && Ps),
                                        'data-magnetic-tool-support': !0,
                                        onMouseEnter: ze,
                                        onMouseLeave: Ue,
                                    },
                                    o().createElement(so, {
                                        toolbarItems: me,
                                        onItemClick: we,
                                        onCloseAction: a.onClose,
                                    }),
                                ),
                            F &&
                                !i &&
                                !c &&
                                o().createElement(
                                    'div',
                                    { className: v()(Ls, Rs), onMouseEnter: ze, onMouseLeave: Ue },
                                    o().createElement(Hn, {
                                        numberOfBullets: S,
                                        currentNumber: k,
                                        selectedNumber: D,
                                        isBulletsBeforeCurrentDisabled: w,
                                        onChange: Re,
                                        switcherType: 2 === S ? tt.text : tt.digital,
                                        size: Pn.small,
                                        styleID: 594,
                                    }),
                                ),
                            K &&
                                o().createElement(vt, {
                                    id: R.views.lobby.customization.CustomizationBinSubview('resId'),
                                    mixClass: v()(Ws, i && zs),
                                }),
                            ae &&
                                o().createElement(vt, {
                                    id: R.views.lobby.customization.CustomizationStyleInfoView('resId'),
                                    mixClass: v()(qs, c && Ys),
                                }),
                            Be &&
                                o().createElement(
                                    'div',
                                    { className: xs },
                                    o().createElement(No, c_({}, Ee, { selectedTab: f })),
                                ),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(Ua, null, o().createElement(L, null, o().createElement(g_, null))),
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, a] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 376),
        (() => {
            var e = { 376: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, o, s] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var i = s(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        ((n = r[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(i);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(581));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
