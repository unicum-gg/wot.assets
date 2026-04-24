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
                (u.r(r), u.d(r, { getBgUrl: () => p, getTextureUrl: () => b }));
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
                        displayStatus: () => g,
                        displayStatusIs: () => G,
                        events: () => A,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => x,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => U,
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
                        whenTutorialReady: () => j,
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
                function b(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function p(e, t, u) {
                    return `url(${b(e, t, u)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                const f = 2,
                    h = 16,
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
                            D('popover' === e ? f : v);
                        },
                        minimize() {
                            D(F);
                        },
                        move(e) {
                            D(h, { isMouseEvent: !0, on: e });
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
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(g).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === g[t]), e), {}),
                    $ = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    j = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
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
                    c9: () => f,
                    wU: () => D,
                    ry: () => A,
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
                const b = ['args'];
                function p(e, t, u, a, n, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            p(r, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(r, a, n, o, s, 'throw', e);
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
                    f = (e, t) => {
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
                                })(t, b);
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
                    h = () => f(l.CLOSE),
                    v = () => f(l.POP_OVER, { on: !1 }),
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
                        f(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: t,
                            bbox: g(m),
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
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
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
                            B(e, h);
                        },
                        handleViewEvent: f,
                        onBindingsReady: A,
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
            64: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => pe,
                        Bar: () => me,
                        DefaultScroll: () => be,
                        Direction: () => Z,
                        defaultSettings: () => J,
                        useHorizontalScrollApi: () => ee,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => xe, Bar: () => Ne, Default: () => Ie, useVerticalScrollApi: () => ge }));
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
                    b = Object.assign({ width: m, height: E }, _(m, E, i)),
                    p = (0, r.createContext)(b),
                    g = ['children'];
                const A = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, g);
                    const a = (0, r.useContext)(p),
                        n = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        i = a.small,
                        c = a.extraSmall,
                        _ = a.extraLargeWidth,
                        d = a.largeWidth,
                        m = a.mediumWidth,
                        E = a.smallWidth,
                        b = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        C = a.largeHeight,
                        f = a.mediumHeight,
                        h = a.smallHeight,
                        v = a.extraSmallHeight,
                        F = { extraLarge: A, large: C, medium: f, small: h, extraSmall: v };
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
                        if (u.extraSmallWidth && b) return s(t, u, F);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && f) return t;
                            if (u.smallHeight && h) return t;
                            if (u.extraSmallHeight && v) return t;
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
                (0, r.memo)(A);
                const C = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(p),
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
                        return o().createElement(p.Provider, { value: c }, e);
                    });
                var h = u(483),
                    v = u.n(h),
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
                        const e = (0, r.useContext)(p),
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
                    return o().createElement(f, null, o().createElement(x, u, t));
                };
                var P = u(493),
                    H = u.n(P);
                const W = (e) => {
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
                    },
                    z = (e, t, u) => (u < e ? e : u > t ? t : u),
                    V = [];
                function U(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), V)
                    );
                }
                function G(e, t, u = []) {
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
                function $(e) {
                    engine.call('PlaySound', e);
                }
                const j = {
                    playHighlight() {
                        $('highlight');
                    },
                    playClick() {
                        $('play');
                    },
                    playYes() {
                        $('yes1');
                    },
                };
                function X(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return q(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return q(e, t);
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
                function q(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                function Y(e, t, u) {
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
                var K = u(30);
                let Z;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Z || (Z = {}));
                const J = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Q = ({
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
                            return z(n, r, u);
                        };
                        return (i = {}) => {
                            const c = i.settings,
                                _ = void 0 === c ? J : c,
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
                                            for (var a, n = X(t(e).values()); !(a = n()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                b = Y(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, K.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), E.trigger('change', e), o && b());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                g = p[0],
                                A = p[1],
                                C = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = g.scrollPosition.get(),
                                            r = (null != (a = g.scrollPosition.goal) ? a : 0) - n;
                                        return s(e, t * u + r + n);
                                    },
                                    [g.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            A.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [A, _.animationConfig, g.scrollPosition],
                                ),
                                h = (0, r.useCallback)(
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
                                        f(r);
                                    },
                                    [f, C, _.step],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && h(a(e)),
                                            d.current && E.trigger('mouseWheel', e, g.scrollPosition, t(d.current)));
                                    },
                                    [g.scrollPosition, h, E],
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
                                        W(() => {
                                            const e = d.current;
                                            e &&
                                                (f(s(e, g.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, g.scrollPosition.goal],
                                ),
                                D = U(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && f(t, { immediate: !0 }),
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
                                    applyScroll: f,
                                    applyStepTo: h,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: A,
                                    animationScroll: g,
                                    recalculateContent: D,
                                    handleIsThumbDragging: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [g.scrollPosition, f, h, B, E.off, E.on, D, v, A, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ee = Q({
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
                        getDirection: (e) => (e.deltaY > 1 ? Z.Next : Z.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    te = 'HorizontalBar_base_49',
                    ue = 'HorizontalBar_base__nonActive_82',
                    ae = 'HorizontalBar_leftButton_5f',
                    ne = 'HorizontalBar_rightButton_03',
                    re = 'HorizontalBar_track_0d',
                    oe = 'HorizontalBar_thumb_fd',
                    se = 'HorizontalBar_rail_32',
                    le = 'disable',
                    ie = { pending: !1, offset: 0 },
                    ce = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    _e = () => {},
                    de = (e, t) => Math.max(20, e.offsetWidth * t),
                    me = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ce, onDrag: a = _e }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(ie),
                            m = d[0],
                            E = d[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            p = () => {
                                const t = i.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    _ = z(0, 1, r / (n - a)),
                                    d = (t.offsetWidth - de(t, o)) * _;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(le),
                                                    void l.current.classList.remove(le)
                                                );
                                            if (
                                                ((t = i.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(le),
                                                    void l.current.classList.add(le)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(le), l.current.classList.remove(le));
                                        }
                                    })(d));
                            },
                            g = U(() => {
                                ((() => {
                                    const t = c.current,
                                        u = i.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const o = Math.min(1, a / r);
                                    ((t.style.width = `${de(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(ue) : n.current.classList.remove(ue)));
                                })(),
                                    p());
                            });
                        ((0, r.useEffect)(() => W(g)),
                            (0, r.useEffect)(
                                () =>
                                    W(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = _e;
                                        const a = () => {
                                            (u(), (u = W(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', g),
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
                                        (window.removeEventListener('mousemove', t), b(ie));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, m.offset, m.pending, a, b]));
                        const A = G((t) => e.applyStepTo(t), _, [e]),
                            C = A[0],
                            f = A[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const h = (e) => {
                            e.target.classList.contains(le) || $('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: v()(te, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: v()(ae, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ($('play'), C(Z.Next));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: v()(re, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (($('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Z.Prev : Z.Next);
                                            }
                                    },
                                    ref: i,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: c, className: v()(oe, t.thumb) }),
                                o().createElement('div', { className: v()(se, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: v()(ne, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ($('play'), C(Z.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Ee = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    be = ({
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
                                return Object.assign({}, e, { base: v()(Ee.base, e.base) });
                            }, [a]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: v()(Ee.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(Ee.defaultScrollArea, n) },
                                o().createElement(pe, { className: l, api: d, classNames: s }, e),
                            ),
                            o().createElement(me, { getStepByRailClick: i, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    pe = ({ api: e, className: t, classNames: u, children: a, style: n }) => (
                        (0, r.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(Ee.base, t), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: v()(Ee.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: v()(Ee.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((pe.Bar = me),
                    (pe.Default = be),
                    (pe.SeniorityAwards = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(Ee.base, t) },
                            o().createElement(
                                'div',
                                { className: v()(Ee.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: v()(Ee.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const ge = Q({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Z.Next : Z.Prev),
                    }),
                    Ae = 'VerticalBar_base_f3',
                    Ce = 'VerticalBar_base__nonActive_42',
                    fe = 'VerticalBar_topButton_d7',
                    he = 'VerticalBar_bottomButton_06',
                    ve = 'VerticalBar_track_df',
                    Fe = 'VerticalBar_thumb_32',
                    De = 'VerticalBar_rail_43',
                    Be = 'disable',
                    Se = () => {},
                    we = { pending: !1, offset: 0 },
                    ye = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ke = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Te = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ne = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ye, onDrag: a = Se }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(we),
                            m = d[0],
                            E = d[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            p = U(() => {
                                const t = c.current,
                                    u = i.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const o = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${Te(u, o)}px`),
                                    t.classList.add(Fe),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(Ce) : n.current.classList.remove(Ce)),
                                    o
                                );
                            }),
                            g = U(() => {
                                const t = i.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    _ = z(0, 1, r / (n - a)),
                                    d = (t.offsetHeight - Te(t, o)) * _;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Be),
                                                    void l.current.classList.remove(Be)
                                                );
                                            if (
                                                ((t = i.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Be),
                                                    void l.current.classList.add(Be)
                                                );
                                            var t, u;
                                            (s.current.classList.remove(Be), l.current.classList.remove(Be));
                                        }
                                    })(d));
                            }),
                            A = U(() => {
                                ke(e, () => {
                                    (p(), g());
                                });
                            });
                        ((0, r.useEffect)(() => W(A)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    ke(e, () => {
                                        g();
                                    });
                                };
                                let u = Se;
                                const a = () => {
                                    (u(), (u = W(A)));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        ke(e, (u) => {
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
                                            b(we));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, m.offset, m.pending, a, b]));
                        const C = G((t) => e.applyStepTo(t), _, [e]),
                            f = C[0],
                            h = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Be) || $('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: v()(Ae, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: v()(fe, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Be) || 0 !== e.button || ($('play'), f(Z.Next));
                                },
                                ref: s,
                                onMouseEnter: F,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: v()(ve, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (($('play'), t.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    b({
                                                        pending: !0,
                                                        offset: t.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        ke(e, (a) => {
                                                            if (!a) return;
                                                            const n = u(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Z.Prev : Z.Next);
                                            }
                                    },
                                    ref: i,
                                    onMouseEnter: F,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: v()(De, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: v()(he, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Be) || 0 !== e.button || ($('play'), f(Z.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    Me = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ie = ({
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
                                return Object.assign({}, e, { base: v()(Me.base, e.base) });
                            }, [a]),
                            d = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: v()(Me.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(Me.area, n) },
                                o().createElement(xe, { className: s, classNames: l, api: d }, e),
                            ),
                            o().createElement(Ne, { getStepByRailClick: i, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    xe = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => W(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: v()(Me.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: v()(Me.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                xe.Default = Ie;
                const Oe = { Vertical: n, Horizontal: a };
                var Le = u(403);
                const Re = { type: 'idle' };
                const Pe = {
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
                    He = [
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
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                class ze extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && $(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && $(this.props.soundClick));
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
                                })(e, He)),
                            m = v()(Pe.base, Pe[`base__${r}`], Pe[`base__${n}`], null == s ? void 0 : s.base),
                            E = v()(Pe.icon, Pe[`icon__${r}`], Pe[`icon__${n}`], null == s ? void 0 : s.icon),
                            b = v()(Pe.glow, null == s ? void 0 : s.glow),
                            p = v()(Pe.caption, Pe[`caption__${r}`], null == s ? void 0 : s.caption),
                            g = v()(Pe.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            We(
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
                            'info' !== r && o().createElement('div', { className: Pe.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: b })),
                            o().createElement('div', { className: p }, t),
                            a && o().createElement('div', { className: g }, a),
                        );
                    }
                }
                ze.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ve = 'EscBtn_base_d0',
                    Ue = 'EscBtn_esc_97',
                    Ge = 'EscBtn_close_90',
                    $e = (0, r.memo)(({ mixClass: e, soundClick: t = 'play', onCloseCallback: u }) => {
                        const a = v()(Ve, e);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(ze, {
                                caption: '',
                                type: 'close',
                                soundClick: t,
                                onClick: u,
                                classNames: { base: Ge },
                            }),
                            o().createElement('div', { className: Ue }),
                        );
                    });
                function je() {
                    return !1;
                }
                console.log;
                var Xe = u(174);
                function qe(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ye(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ye(e, t);
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
                function Ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const Ke = (e) => (0 === e ? window : window.subViews.get(e));
                const Ze = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: n, children: s, mocks: i }) {
                            const c = (0, r.useRef)([]),
                                _ = (u, a, n) => {
                                    var r;
                                    const o = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: u = Ke,
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
                                                    for (var e, u = qe(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(a),
                                        s =
                                            'real' === u
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (r = null == n ? void 0 : n.getter) ? r : () => {},
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
                                                        n = Xe.LO.box(a, { equals: je });
                                                    return (
                                                        'real' === u &&
                                                            s.subscribe(
                                                                (0, Xe.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : i(e),
                                                        n = Xe.LO.box(a, { equals: je });
                                                    return (
                                                        'real' === u &&
                                                            s.subscribe(
                                                                (0, Xe.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = i(t);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, t) => ((e[t] = Xe.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Xe.aD)((t) => {
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
                                                                (e, [t, u]) => ((e[u] = Xe.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Xe.aD)((e) => {
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
                                b = m[1],
                                p = (0, r.useState)(() => _(a, n, i)),
                                g = p[0],
                                A = p[1];
                            return (
                                (0, r.useEffect)(() => {
                                    d.current ? A(_(E, n, i)) : (d.current = !0);
                                }, [i, E, n]),
                                (0, r.useEffect)(() => {
                                    b(a);
                                }, [a]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), c.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                o().createElement(u.Provider, { value: g }, s)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
                function Je(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Qe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
                function et(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const a = Je(e[u]);
                        if (t(a, u, e)) return a;
                    }
                }
                const tt = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Qe(e, (e) => ('object' == typeof e ? tt(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? tt(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? tt(t) : t]),
                                    )
                            : e,
                    ut = (e) => tt(e);
                var at = u(946);
                const nt = Ze()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), seasons: e.array('seasons') },
                                u = (0, at.Om)(() => ut(t.seasons.get()), { equals: je });
                            return Object.assign({}, t, { computes: { getSeasonsItemsList: u } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onCloseAction'),
                            selectItem: e.createCallback(
                                (e, t, u) => ({ itemID: e, selected: t, season: u }),
                                'onSelectItem',
                            ),
                        }),
                    ),
                    rt = nt[0],
                    ot = nt[1],
                    st = 'App_base_38',
                    lt = 'App_scratches_bc',
                    it = 'App_close_44',
                    ct = 'App_contentWrapper_cf',
                    _t = 'App_contentWrapper__maskTop_ac',
                    dt = 'App_contentWrapper__maskBottom_c5',
                    mt = 'App_contentWrapper__fullMask_90',
                    Et = 'App_content_e9',
                    bt = 'App_content__defaultCursor_a8',
                    pt = 'App_categories_26',
                    gt = 'App_divider_6e',
                    At = 'App_cards_ef',
                    Ct = 'App_bar_6c',
                    ft = 'App_lip_f7',
                    ht = 'App_slot_08';
                var vt = u(887),
                    Ft = u.n(vt);
                const Dt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Bt = (e) => e.includes('_') && ((e) => Dt.includes(e))(e.split('_').at(-1)),
                    St = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    wt = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (Bt(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = St.indexOf(t),
                                    o = (-1 !== r ? Dt.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = o ? e[o] : void 0;
                                return ((u[n] = void 0 !== s ? s : e[n]), u);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => Dt.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = n),
                                u
                            );
                        }, {}),
                    yt = (e, t = wt) => {
                        const u = (
                            (e, t = wt) =>
                            (u) => {
                                const a = y().mediaSize,
                                    n = (0, r.useMemo)(() => t(u, a), [u, a]);
                                return o().createElement(e, n);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => Bt(e) && void 0 !== t[e])
                                ? o().createElement(u, t)
                                : o().createElement(e, t),
                        );
                    },
                    kt = {
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
                    Tt = [
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
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                Object.keys(Ft());
                const Mt = {
                        XL: { mt: kt.mt__XL, mr: kt.mr__XL, mb: kt.mb__XL, ml: kt.ml__XL },
                        LG: { mt: kt.mt__LG, mr: kt.mr__LG, mb: kt.mb__LG, ml: kt.ml__LG },
                        MDp: { mt: kt.mt__MDp, mr: kt.mr__MDp, mb: kt.mb__MDp, ml: kt.ml__MDp },
                        MD: { mt: kt.mt__MD, mr: kt.mr__MD, mb: kt.mb__MD, ml: kt.ml__MD },
                        SMp: { mt: kt.mt__SMp, mr: kt.mr__SMp, mb: kt.mb__SMp, ml: kt.ml__SMp },
                        SM: { mt: kt.mt__SM, mr: kt.mr__SM, mb: kt.mb__SM, ml: kt.ml__SM },
                        XS: { mt: kt.mt__XS, mr: kt.mr__XS, mb: kt.mb__XS, ml: kt.ml__XS },
                    },
                    It = (Object.keys(Mt), ['mt', 'mr', 'mb', 'ml']),
                    xt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Ot = yt((e) => {
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
                            b = e.column,
                            p = e.row,
                            g = e.flexDirection,
                            A = void 0 === g ? (b ? 'column' : p && 'row') || void 0 : g,
                            C = e.flexStart,
                            f = e.center,
                            h = e.flexEnd,
                            F = e.spaceBetween,
                            D = e.spaceAround,
                            B = e.justifyContent,
                            S =
                                void 0 === B
                                    ? (C ? 'flex-start' : f && 'center') ||
                                      (h && 'flex-end') ||
                                      (F && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            y = void 0 === w ? (C ? 'flex-start' : f && 'center') || (h && 'flex-end') || void 0 : w,
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
                            })(e, Tt);
                        const W = (0, r.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        It.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(Mt[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        It.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[xt[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, R, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: L,
                                        alignSelf: k,
                                        display: A || y ? 'flex' : void 0,
                                        flexDirection: A,
                                        flexWrap: M,
                                        justifyContent: S,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, l, c, d, E, R, L, k, A, M, S, y]),
                            z = W.computedStyle,
                            V = W.computedClassNames;
                        return o().createElement('div', Nt({ className: v()(kt.base, ...V, t), style: z }, H), P);
                    });
                let Lt;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Lt || (Lt = {}));
                const Rt = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Pt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    Ht = (e, t, u = Lt.left) => e.split(t).reduce(u === Lt.left ? Rt : Pt, []),
                    Wt = (() => {
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
                    zt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Vt = (e, t = Lt.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return zt.includes(u)
                            ? Wt(e)
                            : ((e, t = Lt.left) => {
                                  let u = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (Ht(n, /( )/, t).forEach((e) => (u = u.concat(Ht(e, a, Lt.left)))), u);
                              })(e, t);
                    },
                    Ut = 'FormatText_base_d0',
                    Gt = ({ binding: e, text: t = '', classMix: u, alignment: a = Lt.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  r.Fragment,
                                  null,
                                  t.split('\n').map((t, n) =>
                                      o().createElement(
                                          'div',
                                          { className: v()(Ut, u), key: `${t}-${n}` },
                                          ((e, t, u) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (u && e in u ? u[e] : Vt(e, t))))(t, a, e).map((e, t) =>
                                              o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var $t = u(532),
                    jt = u.n($t);
                const Xt = {
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
                    qt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                Object.keys(Ft());
                const Kt = Object.keys(jt()),
                    Zt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Jt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    eu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    tu =
                        (Object.keys(eu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Zt,
                            'heading-H36': Zt,
                            'heading-H28': Jt,
                            'heading-H24': Jt,
                            'heading-H24R': Jt,
                            'heading-H22': Jt,
                            'heading-H20R': Jt,
                            'heading-H18': Jt,
                            'heading-H15': Qt,
                            'heading-H14': Qt,
                            'paragraph-P24': Jt,
                            'paragraph-P18': Jt,
                            'paragraph-P16': Jt,
                            'paragraph-P14': Qt,
                            'paragraph-P12': Qt,
                            'paragraph-P10': Qt,
                        }),
                    uu =
                        (Object.keys(tu),
                        (e) =>
                            e
                                ? ((e) => Kt.includes(e))(e)
                                    ? { colorClassName: Xt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    au = yt((e) => {
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
                            b = void 0 === E ? s : E,
                            p = e.style,
                            g = e.format,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, qt);
                        const C = (0, r.useMemo)(() => {
                                const e = uu(n),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, p, a), colorClassName: t };
                            }, [p, n]),
                            f = C.computedStyle,
                            h = C.colorClassName;
                        return o().createElement(
                            Ot,
                            Yt(
                                {
                                    className: v()(Xt.base, u && Xt[u], h, a),
                                    style: f,
                                    mt: !0 === i ? tu[u || 'paragraph-P16'].mt : i,
                                    mr: !0 === _ ? tu[u || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? tu[u || 'paragraph-P16'].mb : m,
                                    ml: !0 === b ? tu[u || 'paragraph-P16'].ml : b,
                                },
                                A,
                            ),
                            void 0 !== g ? o().createElement(Gt, Yt({}, g, { text: t })) : t,
                        );
                    }),
                    nu = 'NoData_base_af',
                    ru = 'NoData_titleWrapper_3a',
                    ou = 'NoData_icon_7f',
                    su = 'NoData_title_12',
                    lu = 'NoData_description_ed',
                    iu = R.strings.customization.cart,
                    cu = () =>
                        o().createElement(
                            'div',
                            { className: nu },
                            o().createElement(
                                'div',
                                { className: ru },
                                o().createElement('div', { className: ou }),
                                o().createElement(au, { text: iu.emptyTitle(), className: su }),
                            ),
                            o().createElement(au, { text: iu.emptyDescription(), className: lu }),
                        );
                var _u = u(364);
                const du = [
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
                const Eu = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _u.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    bu = (e) => {
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
                            b = e.isEnabled,
                            p = void 0 === b || b,
                            g = e.targetId,
                            A = void 0 === g ? 0 : g,
                            C = e.onShow,
                            f = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, du);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, r.useMemo)(
                                () =>
                                    A ||
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
                                [A],
                            ),
                            D = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Eu(u, E, { isMouseEvent: !0, on: !0, arguments: mu(a) }, F),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [u, E, a, F, C]),
                            B = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Eu(u, E, { on: !1 }, F),
                                        v.current.isVisible && f && f(),
                                        (v.current.isVisible = !1));
                                }
                            }, [u, E, F, f]),
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
                                !1 === p && B();
                            }, [p, B]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ));
                        return p
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
                                      h,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    pu = ['children'];
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const Au = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, pu);
                        return o().createElement(
                            bu,
                            gu(
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
                    },
                    Cu = /<link.*?>/g,
                    fu = /\.\.\//g,
                    hu = /<script.*?>/g,
                    vu = 'default.css',
                    Fu = (e) => {
                        const t = e.match(fu);
                        return t && t.join('');
                    },
                    Du = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(vu)) return u.href;
                        }
                        return '';
                    },
                    Bu = (e, t) => {
                        const u = Du(),
                            a = Fu(u);
                        let n,
                            r = e;
                        for (; null !== (n = hu.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = a + e[2].replace(fu, '');
                                ((r = r.replace(e[2], u)),
                                    (r = r.replace('<div id="root"', `<div data-root-id=${t} id="root"`)));
                            }
                        }
                        return r;
                    },
                    Su = () => {
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
                    },
                    wu = 'SubView_base_0d',
                    yu = 'subViews.onChanged',
                    ku = 'subView:destroy',
                    Tu = '.html',
                    Nu = /^coui:\/\/gui\/.*/,
                    Mu = Su(),
                    Iu = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    xu =
                        ((0, r.memo)(({ id: e, mixClass: t, children: u }) => {
                            const a = (0, r.useRef)(null),
                                n = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                s = (0, r.useState)(!1),
                                l = s[0],
                                i = s[1],
                                c = (0, r.useState)(!0),
                                _ = c[0],
                                d = c[1],
                                m = (0, r.useCallback)(
                                    (e) => {
                                        e.includes(n) &&
                                            (i(!0), engine.off(yu, m), window.subViews.removeChildChangedCallback(n));
                                    },
                                    [n],
                                ),
                                E = (0, r.useCallback)((e) => {
                                    Mu.add(
                                        () =>
                                            new Promise((t) => {
                                                const u = new MutationObserver(() => {
                                                    (d(!1), u.disconnect(), t());
                                                });
                                                if (a.current) {
                                                    const t = document.getElementById('root');
                                                    (t && t.setAttribute('id', 'bugSubView'),
                                                        a.current.setAttribute('id', 'root'));
                                                    const n = document.createElement('link');
                                                    ((n.href = e.replace(Tu, '.css')),
                                                        (n.rel = 'stylesheet'),
                                                        document.head.appendChild(n),
                                                        Nu.test(e) &&
                                                            Iu(
                                                                e
                                                                    .split('/')
                                                                    .slice(0, -3)
                                                                    .concat(['vendors.js'])
                                                                    .join('/')
                                                                    .replace('/production/', '/production/lib/'),
                                                            ),
                                                        Iu(e.replace(Tu, '.js')),
                                                        u.observe(a.current, { childList: !0 }));
                                                }
                                            }),
                                    );
                                }, []);
                            return (
                                (0, r.useEffect)(() => {
                                    if (window.subViews.ids().includes(e)) {
                                        const t = window.subViews.get(e),
                                            u = t.path;
                                        let a = u.split('/').pop();
                                        if (a)
                                            return (
                                                (a = a.split('.')[0]),
                                                (window.subViews[a] = Object.assign({ id: e }, t)),
                                                E(u),
                                                () => {
                                                    (a && window.subViews[a] && delete window.subViews[a],
                                                        engine.trigger('subView:destroy', { viewName: a, viewId: e }),
                                                        window.__dataTracker &&
                                                            window.__dataTracker.clearViewCallbacks &&
                                                            window.__dataTracker.clearViewCallbacks(e),
                                                        console.info(`Sub view ${a} is destroyed: ${u}`));
                                                }
                                            );
                                        console.error("subView: can't get View component name");
                                    } else engine.on(yu, m);
                                }, [m, E, e, l]),
                                o().createElement(
                                    'div',
                                    { className: v()(wu, t) },
                                    _ && u,
                                    o().createElement('div', { ref: a, 'data-root-id': e }),
                                )
                            );
                        }),
                        {
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
                        });
                let Ou, Lu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ou || (Ou = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Lu || (Lu = {})));
                const Ru = ({
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
                    onClick: b,
                }) => {
                    const p = (0, r.useRef)(null),
                        g = (0, r.useState)(u),
                        A = g[0],
                        C = g[1],
                        f = (0, r.useState)(!1),
                        h = f[0],
                        F = f[1],
                        D = (0, r.useState)(!1),
                        B = D[0],
                        S = D[1],
                        w = (0, r.useCallback)(() => {
                            n || (p.current && (p.current.focus(), C(!0)));
                        }, [n]),
                        y = (0, r.useCallback)(
                            (e) => {
                                A && null !== p.current && !p.current.contains(e.target) && C(!1);
                            },
                            [A],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                n || (b && b(e));
                            },
                            [n, b],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                n || (null !== l && $(l), c && c(e), S(!0));
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
                                n || (null !== i && $(i), d && d(e), u && w(), F(!0));
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
                            xu.base,
                            xu[`base__${a}`],
                            {
                                [xu.base__disabled]: n,
                                [xu[`base__${t}`]]: t,
                                [xu.base__focus]: A,
                                [xu.base__highlightActive]: h,
                                [xu.base__firstHover]: B,
                            },
                            s,
                        ),
                        L = v()(xu.state, xu.state__default);
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
                                ref: p,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: N,
                                onMouseUp: M,
                                onMouseDown: I,
                                onMouseLeave: x,
                                onClick: k,
                            },
                            a !== Ou.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: xu.back }),
                                    o().createElement('span', { className: xu.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: L },
                                o().createElement('span', { className: xu.stateDisabled }),
                                o().createElement('span', { className: xu.stateHighlightHover }),
                                o().createElement('span', { className: xu.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: xu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ru.defaultProps = { type: Ou.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Pu = (0, r.memo)(Ru),
                    Hu = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const zu = R.views.common.tooltip_window.simple_tooltip_content,
                    Vu = (e) => {
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
                            })(e, Hu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: a, note: n, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, a, n, l]);
                        return o().createElement(
                            bu,
                            Wu(
                                {
                                    contentId:
                                        ((_ = null == l ? void 0 : l.hasHtmlContent),
                                        _ ? zu.SimpleTooltipHtmlContent('resId') : zu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                i,
                            ),
                            t,
                        );
                        var _;
                    };
                let Uu, Gu;
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
                })(Uu || (Uu = {})),
                    (function (e) {
                        ((e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text'));
                    })(Gu || (Gu = {})));
                const $u = (e) => {
                    const t = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
                let ju;
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
                })(ju || (ju = {}));
                Date.now();
                _u.Sw.instance;
                let Xu;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Xu || (Xu = {}));
                _u.Sw.instance;
                const qu = $u;
                var Yu = u(521);
                const Ku = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Zu(e = Yu.n.NONE, t = Ku, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Yu.n.NONE)
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
                function Ju({
                    key: e = Yu.n.ESCAPE,
                    callback: t = () => l.O.view.sendEvent.close(),
                    preventPropagation: u = !0,
                } = {}) {
                    return (Zu(e, t, u), t);
                }
                const Qu = (e) => {
                    (0, r.useEffect)(e, []);
                };
                function ea() {
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
                const ta = 'SubView_base_df',
                    ua = 'subViews.onChanged',
                    aa = Su(),
                    na = (0, r.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: a }) => {
                        const n = (0, r.useState)(''),
                            s = n[0],
                            l = n[1],
                            i = (0, r.useMemo)(() => ({ __html: Bu(s, e) }), [s, e]),
                            c = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            _ = (0, r.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(ua, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            b = (0, r.useCallback)((e) => {
                                aa.add(
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
                                        engine.on(`subView:inject->${a}`, b),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            ((u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, _u.Eu)().then(() => {
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
                                                engine.off(`subView:inject->${a}`, b),
                                                console.info(`Sub view ${a} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ua, E);
                        }, [E, b, e, d]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = Fu(Du());
                                            let u;
                                            for (; null !== (u = Cu.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(fu, ''),
                                                        a = document.head.querySelector(`[href="${u}"]`);
                                                    a && document.head.removeChild(a);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const p = v()(ta, a);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = Du(),
                                        a = Fu(u);
                                    for (; null !== (t = Cu.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(vu) && a) {
                                            const t = a + e[1].replace(fu, ''),
                                                u = document.createElement('link');
                                            ((u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u));
                                        }
                                    }
                                })(s),
                                u && u(e),
                                o().createElement('div', { className: p, dangerouslySetInnerHTML: i })
                            );
                        }
                        return t ? o().createElement('div', { className: p }, o().createElement(t, null)) : null;
                    });
                let ra;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(ra || (ra = {}));
                const oa = {
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
                let sa, la, ia;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(sa || (sa = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(la || (la = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(ia || (ia = {})));
                const ca = [
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
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                const da = (e) => {
                    let t = e.id,
                        u = e.isChecked,
                        a = void 0 !== u && u,
                        n = e.isDisabled,
                        s = void 0 !== n && n,
                        l = e.isAlert,
                        i = void 0 !== l && l,
                        c = e.size,
                        _ = void 0 === c ? sa.medium : c,
                        d = e.type,
                        m = void 0 === d ? la.primary : d,
                        E = e.soundHover,
                        b = void 0 === E ? 'highlight' : E,
                        p = e.soundClick,
                        g = void 0 === p ? 'play' : p,
                        A = e.onMouseEnter,
                        C = e.onMouseLeave,
                        f = e.onMouseUp,
                        h = e.onMouseDown,
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
                        })(e, ca);
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
                                const t = e.button === ra.LEFT;
                                s || (t && x(!0), t && h && h(e), g && $(g));
                            },
                            [s, h, g],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                s || (x(!1), f && f(e));
                            },
                            [s, f],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                s || (A && A(e), b && $(b));
                            },
                            [s, A, b],
                        ),
                        z = (0, r.useCallback)(
                            (e) => {
                                s || (x(!1), C && C(e));
                            },
                            [s, C],
                        ),
                        V = (0, r.useCallback)(
                            (e) => {
                                s || (L(!0), B && B(e));
                            },
                            [s, B],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                s || (L(!1), S && S(e));
                            },
                            [s, S],
                        ),
                        G = o().createElement(
                            'div',
                            { className: oa.label },
                            o().createElement(
                                'div',
                                { className: v()(oa.labelContent, 's-labelContent'), style: y },
                                w || k,
                            ),
                        );
                    return o().createElement(
                        'div',
                        _a(
                            {
                                id: t,
                                className: v()(oa.base, oa[`base__${_}`], oa[`base__${m}`], {
                                    [oa.base__checked]: a,
                                    [oa.base__disabled]: s,
                                    [oa.base__mouseDown]: I,
                                    [oa.base__alert]: i,
                                    [oa.base__center]: T === ia.Center,
                                    [oa.base__bottom]: T === ia.Bottom,
                                }),
                                onClick: R,
                                onMouseEnter: W,
                                onMouseLeave: z,
                                onMouseDown: P,
                                onMouseUp: H,
                                onFocus: V,
                                onBlur: U,
                            },
                            N,
                        ),
                        o().createElement(
                            'div',
                            { className: oa.input },
                            o().createElement('div', { className: oa.alertOverlay }),
                            o().createElement('div', { className: oa.inputHoverOverlay }),
                            o().createElement('div', { className: oa.highlight }),
                        ),
                        o().createElement('div', { className: oa.checkmark }),
                        ((w || k) && G) || null,
                    );
                };
                let ma, Ea, ba;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(ma || (ma = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(Ea || (Ea = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(ba || (ba = {})));
                class pa extends o().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = _u.B3.GOLD;
                        else e = _u.B3.INTEGRAL;
                        const t = _u.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                pa.defaultProps = { format: 'integral' };
                const ga = {
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
                    Aa = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: a,
                        isEnough: n,
                        value: r,
                        discountValue: s,
                        showPlus: l,
                        stockBackgroundName: i = ba.Red,
                    }) => {
                        const c = v()(ga.value, ga[`value__${a}`], !n && ga.value__notEnough),
                            _ = v()(ga.icon, ga[`icon__${a}-${u}`]),
                            d = v()(ga.stock, s && ga.stock__indent, t && ga.stock__interactive),
                            m = l && r > 0 && '+',
                            E = v()(ga.base, ga[`base__${u}`]);
                        return o().createElement(
                            'span',
                            { className: E },
                            o().createElement(
                                'span',
                                { className: c },
                                m,
                                o().createElement(pa, { value: r, format: a === Ea.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', { className: _ }),
                            e &&
                                o().createElement(
                                    'span',
                                    { className: d },
                                    o().createElement('span', {
                                        className: ga.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${i})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                Aa.defaultProps = { isEnough: !0 };
                const Ca = o().memo(Aa),
                    fa = 'Tutorial_tutorial_ce',
                    ha = 'Tutorial_tutorial_border_ab',
                    va = 'Tutorial_tutorial__hidden_8a',
                    Fa = 'Tutorial_tutorial_hint_bc',
                    Da = 'Tutorial_tutorial_hintSubstrate_c7',
                    Ba = 'Tutorial_tutorial_hintArrow_75',
                    Sa = 'Tutorial_tutorial_hintText_b5';
                class wa extends o().PureComponent {
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
                        const e = v()(fa, { [va]: this.props.isHidden });
                        return o().createElement(
                            'div',
                            { className: e, onClick: this.onClick },
                            o().createElement('div', { className: ha }),
                            o().createElement(
                                'div',
                                { className: Fa },
                                o().createElement('div', { className: Da }),
                                o().createElement('div', { className: Ba }),
                                o().createElement('div', { className: Sa }, this.props.text),
                            ),
                        );
                    }
                }
                const ya = 'HangarCounter_base_43',
                    ka = 'HangarCounter_currencyWrapper_cb',
                    Ta = 'HangarCounter_hangarIcon_46',
                    Na = (0, r.memo)(({ count: e }) => {
                        const t = y().mediaSize <= B.Small ? ma.small : ma.big;
                        return o().createElement(
                            'div',
                            { className: ya },
                            o().createElement(
                                'div',
                                { className: ka },
                                o().createElement(Ca, { value: e, size: t, type: 'equipCoin' }),
                            ),
                            o().createElement('div', { className: Ta }),
                        );
                    }),
                    Ma = 'CartPanel_base_e7',
                    Ia = 'CartPanel_base__onlyRightSide_f7',
                    xa = 'CartPanel_leftSide_d1',
                    Oa = 'CartPanel_checkboxContainer_32',
                    La = 'CartPanel_rightSide_12',
                    Ra = 'CartPanel_setupButton_b9',
                    Pa = 'CartPanel_deleteButton_b0',
                    Ha = 'CartPanel_deleteButtonIcon_77',
                    Wa = 'CartPanel_backButton_ee',
                    za = 'CartPanel_backButtonIcon_f2',
                    Va = 'CartPanel_amountWrapper_f1',
                    Ua = 'CartPanel_amountGold_c6',
                    Ga = 'CartPanel_amountRent_c7',
                    $a = 'CartPanel_amountCredits_7b',
                    ja = 'CartPanel_amountEquipment_5b',
                    Xa = 'CartPanel_rentCount_11',
                    qa = R.strings.customization,
                    Ya = R.strings.vehicle_customization.customization,
                    Ka = R.strings.customization.tooltips.cart,
                    Za = (0, r.memo)(
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
                                E = y().mediaSize <= B.Small ? ma.small : ma.big,
                                b = ((e) =>
                                    Array.from(e.values()).reduce((e, t) => {
                                        if ('object' == typeof t && null !== t) {
                                            const u = t.name,
                                                a = t.value;
                                            e[u] = (e[u] || 0) + a;
                                        }
                                        return e;
                                    }, {}))(e),
                                p = [
                                    l.isEnoughMoney ? '' : Ka.BuyButtonDisabledNotEnoughMoney(),
                                    l.isVehicleCustomized || l.buyButtonEnabled ? '' : Ka.buyButtonDisabledDefault(),
                                    l.isLockedItem ? Ya.lockedItemsApply() : '',
                                ].filter((e) => e.length > 0)[0],
                                g = l.isRentable && n,
                                A = (0, r.useCallback)(() => {
                                    (l.showAutoRentHint && (m(!0), s && s()), n && n());
                                }, [l.showAutoRentHint, n, s]);
                            return o().createElement(
                                'div',
                                { className: v()(Ma, c, !g && Ia) },
                                g &&
                                    o().createElement(
                                        'div',
                                        { className: xa },
                                        l.showAutoRentHint &&
                                            o().createElement(wa, {
                                                text: R.strings.tutorial.customization.autoprolongation(),
                                                isHidden: d,
                                            }),
                                        o().createElement(
                                            'div',
                                            { className: Oa },
                                            o().createElement(da, {
                                                isChecked: l.isAutoRentSelected,
                                                size: 'medium',
                                                text: R.strings.vehicle_customization.window.purchase.autoProlongationLabel(),
                                                type: 'primary',
                                                soundHover: 'highlight',
                                                soundClick: 'play',
                                                onChange: A,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: La },
                                    o().createElement(
                                        'div',
                                        { className: Va },
                                        l.inStorageCount > 0 &&
                                            o().createElement(
                                                'div',
                                                { className: ja },
                                                o().createElement(Na, { count: l.inStorageCount }),
                                            ),
                                        l.isRentable &&
                                            ((null == b ? void 0 : b.gold) || (null == b ? void 0 : b.credits)) &&
                                            !l.inStorageCount &&
                                            o().createElement(
                                                'div',
                                                { className: Ga },
                                                o().createElement(
                                                    'div',
                                                    { className: Xa },
                                                    o().createElement(au, {
                                                        text: `${l.rentCount} ${qa.cartPanel.rentAmountLabel()}`,
                                                    }),
                                                ),
                                            ),
                                        l.isGoldPrice
                                            ? (null == b ? void 0 : b.gold) &&
                                                  o().createElement(
                                                      'div',
                                                      { className: Ua },
                                                      o().createElement(Ca, {
                                                          value: null == b ? void 0 : b.gold,
                                                          size: E,
                                                          type: Ea.gold,
                                                          isEnough: l.isEnoughMoney,
                                                      }),
                                                  )
                                            : (null == b ? void 0 : b.credits) &&
                                                  o().createElement(
                                                      'div',
                                                      { className: $a },
                                                      o().createElement(Ca, {
                                                          value: null == b ? void 0 : b.credits,
                                                          size: E,
                                                          type: Ea.credits,
                                                          isEnough: l.isEnoughMoney,
                                                      }),
                                                  ),
                                    ),
                                    (l.clearButtonEnabled || l.cancelButtonEnabled) &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                Vu,
                                                {
                                                    body: l.cancelButtonEnabled
                                                        ? Ka.cancelButtonEnabled()
                                                        : Ka.cancelButtonDisabled(),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        Pu,
                                                        {
                                                            type: Ou.ghost,
                                                            size: i,
                                                            mixClass: Wa,
                                                            onClick: u,
                                                            disabled: !l.cancelButtonEnabled,
                                                        },
                                                        o().createElement('div', { className: za }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement(
                                                Vu,
                                                {
                                                    body: l.clearButtonEnabled
                                                        ? Ka.clearButtonEnabled()
                                                        : Ka.clearButtonDisabled(),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        Pu,
                                                        {
                                                            type: Ou.ghost,
                                                            size: i,
                                                            mixClass: Pa,
                                                            onClick: t,
                                                            soundClick: 'cust_select_remove',
                                                            disabled: !l.clearButtonEnabled,
                                                        },
                                                        o().createElement('div', { className: Ha }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    o().createElement(
                                        Vu,
                                        {
                                            body: p || '',
                                            isEnabled: l.isEnoughMoney
                                                ? !l.isApplyButton && (null == p ? void 0 : p.length) > 0
                                                : !l.buyButtonEnabled && (null == p ? void 0 : p.length) > 0,
                                        },
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                Pu,
                                                {
                                                    type: Ou.main,
                                                    size: i,
                                                    mixClass: Ra,
                                                    disabled: !l.buyButtonEnabled,
                                                    onClick: a,
                                                },
                                                o().createElement(au, {
                                                    text: l.isApplyButton
                                                        ? qa.cartPanel.applyButton()
                                                        : qa.cartPanel.setupButton(),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ja = {
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
                    Qa = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = (e) => {
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
                        })(e, Qa);
                    const c = a ? null : u,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const d = c && !_ && c > s,
                        m = v()(
                            Ja.base,
                            Ja[`base__${t}`],
                            n && Ja.base__animated,
                            r && Ja.base__hidden,
                            !c && Ja.base__pattern,
                            a && Ja.base__empty,
                            l,
                        );
                    return o().createElement(
                        'div',
                        en({ className: m }, i),
                        o().createElement('div', { className: Ja.bg }),
                        o().createElement('div', { className: Ja.pattern }),
                        o().createElement(
                            'div',
                            { className: v()(Ja.value, _ && Ja.value__text) },
                            d ? s : c,
                            d && o().createElement('span', { className: Ja.plus }, '+'),
                        ),
                    );
                };
                tn.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const un = {
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
                var an;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(an || (an = {}));
                const nn = ['__left', '__right', '__top', '__bottom'],
                    rn =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: a = {} }, n) => {
                                const s = (0, r.useRef)(null),
                                    i = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    _ = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    d = _[0],
                                    m = _[1],
                                    E = (0, r.useCallback)(() => {
                                        (j.playClick(), l.O.view.sendEvent.close());
                                    }, []),
                                    b = (0, r.useCallback)(() => {
                                        j.playHighlight();
                                    }, []),
                                    p = v()(un.arrow, un[`arrow${nn[d]}`]);
                                Qu(
                                    () => (
                                        l.O.client.events.mouse.enableOutside(),
                                        l.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (u ? u() : l.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const g = (0, r.useCallback)(
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
                                    A = (0, r.useCallback)(
                                        () => (
                                            l.O.view.freezeTextureBeforeResize(),
                                            W(() => {
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
                                    (0, r.useImperativeHandle)(n, () => ({ updateSize: A })),
                                    Qu(() => {
                                        l.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', g, { capture: !0 });
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
                                        })((0, _u.Eu)());
                                        return (
                                            !t && e.promise.then(() => A()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', g));
                                            }
                                        );
                                    }, [A, g, t]),
                                    o().createElement(
                                        'div',
                                        { className: un.base, ref: i },
                                        o().createElement(
                                            'div',
                                            { className: un.decorator },
                                            o().createElement(
                                                'div',
                                                { className: un.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        Vu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: un.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: b,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: p, style: a.arrow }),
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
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const sn = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        a = e.direction,
                        n = void 0 === a ? an.Top : a,
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
                        })(e, rn);
                    const E = (0, r.useRef)(null),
                        b = (0, r.useCallback)(() => {
                            if ((0, _u.wU)()) return (0, _u.SW)();
                            E.current && (0, _u.P3)(t, n, E.current, u, s, l);
                        }, [t, n, l, u, s]);
                    return o().createElement(
                        'div',
                        on(
                            {
                                ref: E,
                                onClick:
                                    ((p = c.props.onClick),
                                    (e) => {
                                        d && (b(), i && i(e), p && p(e));
                                    }),
                            },
                            m,
                        ),
                        c,
                    );
                    var p;
                };
                let ln, cn;
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
                })(ln || (ln = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(cn || (cn = {})));
                const _n = {
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
                    dn = [
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
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const En = (0, r.memo)((e) => {
                        let t = e.children,
                            u = e.labelRenderer,
                            a = e.value,
                            n = e.currentValue,
                            s = e.autofocus,
                            l = void 0 !== s && s,
                            i = e.disabled,
                            c = void 0 !== i && i,
                            _ = e.size,
                            d = void 0 === _ ? cn.Medium : _,
                            m = e.label,
                            E = e.soundHover,
                            b = void 0 === E ? 'highlight' : E,
                            p = e.soundClick,
                            g = void 0 === p ? 'play' : p,
                            A = e.onMouseEnter,
                            C = e.onMouseLeave,
                            f = e.onMouseUp,
                            h = e.onMouseDown,
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
                            })(e, dn);
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
                        const V = (0, r.useCallback)(
                                (e) => {
                                    c || (D && D(a), F && F(a, e));
                                },
                                [c, D, F, a],
                            ),
                            U = (0, r.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const t = e.button === ra.LEFT;
                                        (t && N(!0), t && h && h(a, e), g && $(g), l && H());
                                    }
                                },
                                [l, c, h, H, g, a],
                            ),
                            G = (0, r.useCallback)(
                                (e) => {
                                    c || (N(!1), f && f(a, e));
                                },
                                [c, f, a],
                            ),
                            j = (0, r.useCallback)(
                                (e) => {
                                    c || (A && A(a, e), b && $(b), x(!0));
                                },
                                [c, A, b, a],
                            ),
                            X = (0, r.useCallback)(
                                (e) => {
                                    c || (N(!1), x(!1), C && C(a, e));
                                },
                                [c, C, a],
                            ),
                            q = (0, r.useCallback)(
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
                            K = v()(_n.base, _n[`base__${d}`], {
                                [_n.base__blank]: !y && !I,
                                [_n.base__blankHover]: !y && I && !T,
                                [_n.base__blankMousedown]: !y && I && T,
                                [_n.base__check]: y && !I,
                                [_n.base__checkHover]: y && I && !T,
                                [_n.base__checkMousedown]: y && I && T,
                                [_n.base__focused]: L,
                                [_n.base__disabled]: c,
                            }),
                            Z = (0, r.useMemo)(
                                () => ({ isHovered: I, isMouseDown: T, isFocused: L, isChecked: y }),
                                [I, T, L, y],
                            ),
                            J = (0, r.useRef)(_n.blank),
                            Q = (0, r.useRef)(_n.blankHover),
                            ee = (0, r.useRef)(_n.blankMousedown),
                            te = (0, r.useRef)(_n.check),
                            ue = (0, r.useRef)(_n.checkHover),
                            ae = (0, r.useRef)(_n.checkMousedown);
                        return (
                            (0, r.useEffect)(
                                W(() => {
                                    ((J.current = v()(_n.blank, _n.transition)),
                                        (Q.current = v()(_n.blankHover, _n.transition)),
                                        (ee.current = v()(_n.blankMousedown, _n.transition)),
                                        (te.current = v()(_n.check, _n.transition)),
                                        (ue.current = v()(_n.checkHover, _n.transition)),
                                        (ae.current = v()(_n.checkMousedown, _n.transition)));
                                }),
                                [],
                            ),
                            o().createElement(
                                'div',
                                mn(
                                    {
                                        ref: P,
                                        className: K,
                                        onClick: V,
                                        onMouseEnter: j,
                                        onMouseLeave: X,
                                        onMouseDown: U,
                                        onMouseUp: G,
                                        onFocus: q,
                                        onBlur: Y,
                                    },
                                    w,
                                ),
                                o().createElement(
                                    'div',
                                    { className: _n.input },
                                    o().createElement('div', { className: J.current }),
                                    o().createElement('div', { className: Q.current }),
                                    o().createElement('div', { className: ee.current }),
                                    o().createElement('div', { className: te.current }),
                                    o().createElement('div', { className: ue.current }),
                                    o().createElement('div', { className: ae.current }),
                                ),
                                o().createElement('div', { className: _n.label }, m || t || (u && u(Z))),
                            )
                        );
                    }),
                    bn = 'RadioGroup_base_6e',
                    pn = 'RadioGroup_radio_3b',
                    gn = 'RadioGroup_label_86',
                    An = (0, r.memo)(({ data: e, selectedValue: t, onClickHandler: u }) => {
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
                                { className: bn },
                                null == e
                                    ? void 0
                                    : e.map((e) =>
                                          o().createElement(
                                              'div',
                                              { className: pn, key: e.id },
                                              o().createElement(
                                                  Vu,
                                                  { header: e.tooltipHeader, body: e.tooltipBody },
                                                  o().createElement(
                                                      En,
                                                      { value: e.value, currentValue: n, onClick: () => l(e.value) },
                                                      o().createElement(au, { className: gn, text: e.label }),
                                                  ),
                                              ),
                                          ),
                                      ),
                            )
                        );
                    });
                function Cn() {
                    return (
                        (Cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Cn.apply(this, arguments)
                    );
                }
                const fn = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = o().createElement('div', { className: u }, e);
                        if (t.header || t.body) return o().createElement(Vu, t, a);
                        const n = t.contentId,
                            r = t.args,
                            s = null == r ? void 0 : r.contentId;
                        return n || s
                            ? o().createElement(bu, Cn({}, t, { contentId: n || s }), a)
                            : o().createElement(Au, t, a);
                    },
                    hn = 'ToggleButton_base_19',
                    vn = 'ToggleButton_overlay_6b',
                    Fn = 'ToggleButton_base__active_6c',
                    Dn = 'ToggleButton_button_1c',
                    Bn = 'ToggleButton_indicator_9b',
                    Sn = 'ToggleButton_counter_63',
                    wn = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function yn() {
                    return (
                        (yn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yn.apply(this, arguments)
                    );
                }
                const kn = o().memo(function (e) {
                        let t = e.isActive,
                            u = e.counter,
                            a = e.className,
                            n = e.children,
                            r = e.type,
                            s = void 0 === r ? Ou.secondary : r,
                            l = e.size,
                            i = void 0 === l ? Lu.small : l,
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
                            })(e, wn);
                        return o().createElement(
                            'div',
                            { className: v()(hn, a, t && Fn) },
                            o().createElement(Pu, yn({ type: s, size: i, mixClass: Dn }, d), n),
                            o().createElement('div', { className: vn }),
                            _ && o().createElement('div', { className: Bn }),
                            Boolean(u) &&
                                o().createElement(
                                    'div',
                                    { className: Sn },
                                    o().createElement(tn, { value: u, size: 'small' }),
                                ),
                        );
                    }),
                    Tn = 'FilterTitle_base_53',
                    Nn = 'FilterTitle_label_14',
                    Mn = 'FilterTitle_discount_49',
                    In = 'FilterTitle_discountIcon_d4',
                    xn = ({ label: e, hasDiscount: t, className: u }) =>
                        o().createElement(
                            'div',
                            { className: v()(Tn, u) },
                            o().createElement('div', { className: Nn }, e),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: Mn },
                                    o().createElement('div', { className: In }),
                                ),
                        ),
                    On = 'ToggleIcon_base_31',
                    Ln = 'ToggleIcon_base__small_0e',
                    Rn = 'ToggleIcon_icon_9e',
                    Pn = o().memo(function ({ icon: e, iconParams: t, isSmall: u = !1, classNames: a }) {
                        return o().createElement(
                            'div',
                            { className: v()(On, null == a ? void 0 : a.base, u && Ln) },
                            o().createElement('div', {
                                className: v()(Rn, null == a ? void 0 : a.icon),
                                style: {
                                    backgroundImage: `url(${e})`,
                                    width: (null == t ? void 0 : t.iconWidth) || 'inherit',
                                    height: (null == t ? void 0 : t.iconHeight) || 'inherit',
                                },
                            }),
                        );
                    }),
                    Hn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Wn = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const zn = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Vn = (e) =>
                        zn
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = Wn.length - 1; u >= 0; u--)
                                      for (; e >= Wn[u]; ) ((t += Hn[u]), (e -= Wn[u]));
                                  return t;
                              })(e),
                    Un = 'VehicleTier_base_99',
                    Gn = 'VehicleTier_base__small_67',
                    $n = ({ level: e, isSmall: t = !1 }) =>
                        o().createElement('div', { className: v()(Un, t && Gn) }, Vn(e)),
                    jn = {
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
                    Xn = ({
                        id: e,
                        icon: t,
                        iconParams: u,
                        type: a,
                        isSmall: n = !0,
                        isSelected: r = !1,
                        baseClassName: s = '',
                        iconClassName: l = '',
                    }) => {
                        return a === ln.VehicleTier
                            ? o().createElement($n, { isSmall: n, level: Number(e) })
                            : o().createElement(Pn, {
                                  icon: t,
                                  isSmall: n,
                                  iconParams: u,
                                  classNames: {
                                      icon: v()(
                                          jn[`icon__${a}`],
                                          jn[`icon__${a}${((i = e), i[0].toUpperCase() + i.slice(1))}`],
                                          r && jn.icon__selected,
                                          l,
                                      ),
                                      base: s,
                                  },
                              });
                        var i;
                    },
                    qn = {
                        base: 'FilterToggleGroup_base_bd',
                        title: 'FilterToggleGroup_title_5c',
                        content: 'FilterToggleGroup_content_1b',
                        toggle: 'FilterToggleGroup_toggle_c2',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_51',
                    },
                    Yn = ['id', 'isSelected', 'tooltip', 'icon', 'counter'];
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                let Zn;
                !(function (e) {
                    ((e.Default = 'default'), (e.InPopup = 'inPopup'));
                })(Zn || (Zn = {}));
                const Jn = ({ header: e, body: t, contentId: u, targetId: a }) =>
                        u
                            ? { contentId: u, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    Qn = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: a,
                        filters: n,
                        onClick: r,
                        className: s,
                        toggleProps: l,
                        theme: i = Zn.Default,
                    }) => {
                        const c = i === Zn.InPopup;
                        return o().createElement(
                            'div',
                            { className: v()(qn.base, qn[`base__${i}`], s) },
                            c && o().createElement(xn, { className: qn.title, label: u, hasDiscount: a }),
                            o().createElement(
                                'div',
                                { className: qn.content },
                                Qe(n, (u) => {
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
                                        })(u, Yn),
                                        m = d.iconWidth,
                                        E = d.iconHeight;
                                    return o().createElement(
                                        fn,
                                        { key: a, tooltipArgs: Jn(s), className: qn.toggle },
                                        o().createElement(
                                            kn,
                                            Kn({}, l, {
                                                className: v()(qn.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == r ? void 0 : r(e, a)),
                                                counter: _,
                                            }),
                                            o().createElement(Xn, {
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
                    er = () => {
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
                    tr = {
                        base: 'NumberRange_base_65',
                        base__animation: 'NumberRange_base__animation_70',
                        blinkAnim: 'NumberRange_blinkAnim_5f',
                        from: 'NumberRange_from_45',
                        from__red: 'NumberRange_from__red_53',
                        separatorWrapper: 'NumberRange_separatorWrapper_5a',
                        separator: 'NumberRange_separator_61',
                        counterGlow: 'NumberRange_counterGlow_f6',
                    },
                    ur = R.strings.crew.barracks.berthsAmountDivider(),
                    ar = R.strings.crew.filterPanel.counter.selectLimit,
                    nr = (0, r.memo)(function ({
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
                                  { className: tr.separatorWrapper },
                                  o().createElement(au, { className: tr.separator, text: ur }),
                                  o().createElement('div', {
                                      style: l,
                                      className: v()(tr.counterGlow, r && tr.blink, null == i ? void 0 : i.counterGlow),
                                  }),
                              )
                            : o().createElement(au, { className: tr.separator, text: ur });
                        return n
                            ? o().createElement(
                                  Vu,
                                  { header: ar.header(), body: ar.body(), ignoreShowDelay: !0 },
                                  o().createElement(
                                      'div',
                                      { className: v()(tr.base, a) },
                                      o().createElement(au, { className: tr.from, text: String(t) }),
                                      (t !== u || r) &&
                                          o().createElement(
                                              o().Fragment,
                                              null,
                                              _,
                                              o().createElement(au, { text: String(u) }),
                                          ),
                                  ),
                              )
                            : o().createElement(
                                  'div',
                                  {
                                      className: v()(
                                          tr.base,
                                          e ? 0 === t && tr.base__animation : t > u && tr.base__animation,
                                          c && tr.base__animation,
                                          a,
                                      ),
                                  },
                                  o().createElement(au, {
                                      className: v()(
                                          tr.from,
                                          e ? 0 === t && u > 0 && tr.from__red : t > u && tr.from__red,
                                      ),
                                      text: String(t),
                                  }),
                                  (!s || t !== u) &&
                                      o().createElement(
                                          o().Fragment,
                                          null,
                                          _,
                                          o().createElement(au, { text: String(u) }),
                                      ),
                              );
                    }),
                    rr = 'NumberRangeWithLabel_base_fd',
                    or = 'NumberRangeWithLabel_counterGlow_fa',
                    sr = 'NumberRangeWithLabel_blink_15',
                    lr = (0, r.memo)(
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
                            const E = er(),
                                b =
                                    i !== c || a
                                        ? 7 * String(i).length * E + 4 * E
                                        : Math.round((7 * String(i).length * E) / 2),
                                p = { left: _ || b };
                            return o().createElement(
                                'div',
                                { className: v()(rr, s) },
                                t,
                                o().createElement(nr, {
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
                                        style: p,
                                        className: v()(or, a && sr, null == l ? void 0 : l.counterGlow),
                                    }),
                                e,
                            );
                        },
                    ),
                    ir = Ze()(
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
                                u = (0, at.Om)(
                                    () => ut(t.carouselItemsList.get()).slice(0, t.carouselModel.get().totalItemsCount),
                                    { equals: je },
                                ),
                                a = (0, at.Om)(() => et(u(), (e) => e.isSelected), { equals: je }),
                                n = (0, at.Om)(
                                    () => {
                                        var e;
                                        return null == (e = a()) ? void 0 : e.intCD;
                                    },
                                    { equals: je },
                                ),
                                r = (0, at.Om)(() => ut(t.arrowsList.get()), { equals: je }),
                                o = (0, at.Om)(() => ut(t.bookmarksList.get()), { equals: je }),
                                s = (0, at.Om)(() => ut(t.tabsItemsList.get()), { equals: je }),
                                l = (0, at.Om)(() => et(s(), (e) => e.isSelected), { equals: je }),
                                i = (0, at.Om)(
                                    () => {
                                        var e;
                                        return null == (e = l()) ? void 0 : e.itemType;
                                    },
                                    { equals: je },
                                ),
                                c = (0, at.Om)(() => ut(t.seasonsTabsItems.get()), { equals: je }),
                                _ = (0, at.Om)(() => ut(t.markers.get()), { equals: je }),
                                d = (0, at.Om)(() => ut(t.editModeData.get()), { equals: je }),
                                m = (0, at.Om)(() => ut(t.toolbarModel.get()), { equals: je }),
                                E = (0, at.Om)(() => ut(t.billModel.get()), { equals: je }),
                                b = (0, at.Om)(() => ut(t.buyPrice.get()), { equals: je }),
                                p = (0, at.Om)(() => ut(t.stageSwitcherWidgetModel.get()), { equals: je }),
                                g = (0, at.Om)(() => ut(t.toolbarButtonList.get()), { equals: je }),
                                A = (0, at.Om)(() => ut(t.filterModelStructure.get()), { equals: je });
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
                                    getBuyPrice: b,
                                    getToolbarButtonsList: g,
                                    getArrowsList: r,
                                    getStageSwitcher: p,
                                    getStructureList: A,
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
                                (e) => ({ isOver: !(0, _u.wU)() && e }),
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
                    cr = (ir[0], ir[1]),
                    _r = {
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
                    dr = R.strings.customization.tooltips.filters,
                    mr = R.strings.customization.filters,
                    Er = R.strings.customization,
                    br = 'all',
                    pr = 'sale',
                    gr = 'inventory',
                    Ar = [
                        {
                            label: mr.labelAll(),
                            id: br,
                            value: br,
                            name: 'availability',
                            tooltipHeader: dr.allRadioHeader(),
                            tooltipBody: dr.allRadioBody(),
                        },
                        {
                            label: mr.labelStock(),
                            id: gr,
                            value: gr,
                            tooltipHeader: dr.stockRadioHeader(),
                            tooltipBody: dr.stockRadioBody(),
                        },
                        {
                            label: mr.labelSale(),
                            id: pr,
                            value: pr,
                            tooltipHeader: dr.saleRadioHeader(),
                            tooltipBody: dr.saleRadioBody(),
                        },
                    ],
                    Cr = (0, Le.Pi)(({ isReverse: e = !1, buttonSize: t }) => {
                        const u = cr(),
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
                            b = n.computes.getStructureList,
                            p = (0, r.useMemo)(
                                () => [
                                    {
                                        id: 'fav1',
                                        icon: 'R.images.gui.maps.icons.customization.icon_favorites',
                                        isSelected: E,
                                        counter: 0,
                                        tooltip: {
                                            header: dr.favoritesToggleHeader(),
                                            body: dr.favoritesToggleBody(),
                                            contentId: 0,
                                            targetId: 0,
                                        },
                                    },
                                ],
                                [E],
                            ),
                            g = (0, r.useCallback)(() => {
                                a.changeFilter('favorite', !E);
                            }, [a, E]),
                            A = e ? an.Top : an.Bottom;
                        return o().createElement(
                            'div',
                            { className: v()(_r.base, e && _r.reverse) },
                            o().createElement(
                                'div',
                                { className: _r.counterWrapper },
                                o().createElement(
                                    sn,
                                    {
                                        contentId:
                                            R.views.lobby.customization.popovers.CustomizationFilterPopoverView(
                                                'resId',
                                            ),
                                        direction: b().length > 5 && s <= B.Small ? an.Left : A,
                                    },
                                    o().createElement(
                                        'div',
                                        null,
                                        o().createElement(
                                            Vu,
                                            { header: dr.popoverButtonTitle(), body: dr.popoverButtonBody() },
                                            o().createElement(
                                                Pu,
                                                {
                                                    type: Ou.ghost,
                                                    size: t,
                                                    mixClass: v()(_r.filtersPopover, e && _r.filtersPopoverUpdate),
                                                },
                                                o().createElement('div', { className: _r.filtersPopoverIcon }),
                                            ),
                                        ),
                                        d > 0 &&
                                            o().createElement(tn, {
                                                size: 'normal',
                                                value: d,
                                                className: _r.hiddenItemCounter,
                                            }),
                                    ),
                                ),
                                m &&
                                    !e &&
                                    o().createElement(lr, {
                                        title:
                                            m &&
                                            o().createElement(
                                                Vu,
                                                { body: Er.customization.resetFilter.tooltip.text() },
                                                o().createElement(
                                                    Pu,
                                                    {
                                                        type: Ou.ghost,
                                                        onClick: a.clearFilter,
                                                        mixClass: v()(_r.filtersClearButton),
                                                    },
                                                    o().createElement('div', { className: _r.filtersClearIcon }),
                                                ),
                                            ),
                                        from: c,
                                        to: _,
                                        isFilterRange: !0,
                                        isGlowVisible: !0,
                                        isSelectMode: !1,
                                        isSelectedLimitReached: d > 0,
                                        className: _r.filterNumbers,
                                        staticCounterGlowShift: -1,
                                        isAnimationEnabled: d > 0,
                                    }),
                            ),
                            o().createElement(Qn, {
                                id: 'favorites',
                                label: '',
                                type: ln.Default,
                                hasDiscount: !1,
                                filters: p,
                                toggleProps: { type: Ou.ghost },
                                onClick: g,
                                className: v()(_r.buttonFavorites, e && _r.buttonFavoritesBorder),
                            }),
                            o().createElement(An, { onClickHandler: a.changeFilter, data: Ar, selectedValue: i }),
                        );
                    }),
                    fr = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    },
                    hr = (e, t, u) => Math.min(Math.max(e, t), u),
                    vr = {
                        base: 'Switcher_base_9c',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_57',
                        base__small: 'Switcher_base__small_96',
                        base__isVisible: 'Switcher_base__isVisible_02',
                    },
                    Fr = (e) => ({ transitionDelay: e / 20 + 's' }),
                    Dr = 'SwitcherBullet_base_94',
                    Br = 'SwitcherBullet_container_28',
                    Sr = 'SwitcherBullet_base__selected_6e',
                    wr = 'SwitcherBullet_container__text_ff',
                    yr = 'SwitcherBullet_finishedHover_42',
                    kr = 'SwitcherBullet_base__finished_e2',
                    Tr = 'SwitcherBullet_base__hover_87',
                    Nr = 'SwitcherBullet_iconSmall_d4',
                    Mr = 'SwitcherBullet_base__afterCurrent_f6',
                    Ir = 'SwitcherBullet_iconBig_65',
                    xr = 'SwitcherBullet_base__currentSelected_eb',
                    Or = 'SwitcherBullet_iconText_ca',
                    Lr = 'SwitcherBullet_iconTextGlow_a0',
                    Rr = 'SwitcherBullet_clickArea_84',
                    Pr = 'SwitcherBullet_base__disabled_2a',
                    Hr = 'SwitcherBullet_disabled_56',
                    Wr = 'SwitcherBullet_number_08',
                    zr = 'SwitcherBullet_currentText_b6',
                    Vr = 'SwitcherBullet_text_e9',
                    Ur = 'SwitcherBullet_texture_b3';
                var Gr, $r;
                (!(function (e) {
                    ((e.BIG = 'big'), (e.SMALL = 'small'));
                })(Gr || (Gr = {})),
                    (function (e) {
                        ((e.LIGHT = 'light'), (e.DARK = 'dark'));
                    })($r || ($r = {})));
                const jr = R.images.gui.maps.icons.components.switcher.numbers,
                    Xr = (0, r.memo)(
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
                                b = m[1],
                                p = (0, r.useCallback)(() => {
                                    (b(!0), d && $(c));
                                }, [d, c]),
                                g = (0, r.useCallback)(() => {
                                    d && ($(_), n(e));
                                }, [d, _, e, n]),
                                A = (0, r.useCallback)(() => {
                                    b(!1);
                                }, []),
                                C = s || 0,
                                f = v()(
                                    Dr,
                                    t === u && Sr,
                                    t === u && t === C && xr,
                                    t > C && t !== u && Mr,
                                    t <= C && kr,
                                    E && Tr,
                                    i && Pr,
                                ),
                                h = (0, r.useMemo)(
                                    () =>
                                        ((e, t, u) =>
                                            e === t
                                                ? Fr(0)
                                                : e === u
                                                  ? Fr(Math.abs(e - t) - 2)
                                                  : (u > t && e > t && e < u) || (u < t && e < t && e > u)
                                                    ? Fr(Math.abs(e - t) - 1)
                                                    : void 0)(t, a, u),
                                    [t, a, u],
                                ),
                                F = (0, r.useCallback)(
                                    () => ((t === u && t === C) || t === u ? Gr.BIG : Gr.SMALL),
                                    [t, u, C],
                                ),
                                D = (0, r.useMemo)(() => {
                                    const e = t > C ? $r.LIGHT : $r.DARK;
                                    return Object.assign({}, h, {
                                        backgroundImage: `url(${jr.$dyn(`number_${t}_${F()}_${e}`)})`,
                                    });
                                }, [t, C, h, F]);
                            return o().createElement(
                                'div',
                                { className: f },
                                o().createElement(
                                    'div',
                                    { className: Br, style: h },
                                    o().createElement('div', { className: yr, style: h }),
                                    o().createElement('div', { className: Nr, style: h }),
                                    o().createElement('div', { className: Ir, style: h }),
                                    o().createElement('div', { className: Hr }),
                                    o().createElement('div', { className: Wr, style: D }),
                                    o().createElement('div', {
                                        className: Rr,
                                        style: h,
                                        onClick: g,
                                        onMouseEnter: p,
                                        onMouseLeave: A,
                                    }),
                                ),
                                l && t === s && o().createElement('div', { className: zr }, l),
                            );
                        },
                    ),
                    qr = ({
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
                            b = m[1],
                            p = (0, r.useCallback)(() => {
                                (b(!0), d || $(i));
                            }, [d, i]),
                            g = (0, r.useCallback)(() => {
                                d || ($(c), n(e));
                            }, [d, c, e, n]),
                            A = (0, r.useCallback)(() => {
                                b(!1);
                            }, []),
                            C = R.strings.vehicle_customization.style_switcher.$dyn(`style_${_}`).$dyn(`level${e}`),
                            f = v()(
                                Dr,
                                d && Sr,
                                d && t === s && xr,
                                t > s && t !== u && Mr,
                                t <= s && kr,
                                E && Tr,
                                l && Pr,
                            ),
                            h = (0, r.useMemo)(
                                () =>
                                    ((e, t, u) =>
                                        e === t
                                            ? Fr(0)
                                            : e === u
                                              ? Fr(Math.abs(e - t) - 2)
                                              : (u > t && e > t && e < u) || (u < t && e < t && e > u)
                                                ? Fr(Math.abs(e - t) - 1)
                                                : void 0)(t, a, u),
                                [t, a, u],
                            ),
                            F = v()(Br, wr);
                        return o().createElement(
                            'div',
                            { className: f },
                            o().createElement(
                                'div',
                                { className: F, style: h },
                                d && o().createElement('div', { className: Ur }),
                                !d && o().createElement('div', { className: Lr }),
                                o().createElement('div', { className: Or, style: h }),
                                o().createElement('div', { className: Vr }, C),
                                o().createElement('div', {
                                    className: Rr,
                                    style: h,
                                    onClick: g,
                                    onMouseEnter: p,
                                    onMouseLeave: A,
                                }),
                            ),
                        );
                    },
                    Yr = 'SwitcherSeparator_base_06',
                    Kr = 'SwitcherSeparator_base__isBeforeSelectedBullet_a8',
                    Zr = 'SwitcherSeparator_base__notAnimated_73',
                    Jr = 'SwitcherSeparator_base__scaled_76',
                    Qr = 'SwitcherSeparator_base__rightTransformOrigin_b8',
                    eo = 'SwitcherSeparator_base__leftTransformOrigin_49',
                    to = 'SwitcherSeparator_base__transitionTransformOrigin_9f',
                    uo = (0, r.memo)(({ index: e, selectedIndex: t, previousSelectedIndex: u, isAnimated: a = !0 }) => {
                        const n = ((e, t, u) =>
                                e === t + 1 || e === t - 1
                                    ? Fr(0)
                                    : e === u + 1 || e === u - 1
                                      ? Fr(Math.abs(u - t) - 2)
                                      : (u > t && e > t && e < u + 1) || (u < t && e < t && e > u - 1)
                                        ? Fr(Math.abs(e - t) - 1)
                                        : void 0)(e, u, t),
                            r = 1 === Math.abs(e - t),
                            s = 1 === Math.abs(e - u),
                            l = ((e, t, u, a) =>
                                e === u + 1 || (e === t + 1 && !a)
                                    ? Qr
                                    : e === u - 1 || (e === t - 1 && !a)
                                      ? eo
                                      : void 0)(e, u, t, r),
                            i = v()(
                                Yr,
                                a && e < t && Kr,
                                a && s && r && to,
                                a && (e === t + 1 || e === t - 1) && Jr,
                                a && l,
                                !a && Zr,
                            );
                        return o().createElement('div', { className: i, style: n });
                    }),
                    ao = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let no;
                !(function (e) {
                    e.small = 'small';
                })(no || (no = {}));
                const ro = ({
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
                        switcherType: b = Gu.digital,
                    }) => {
                        const p = (0, r.useState)(!1),
                            g = p[0],
                            A = p[1];
                        (0, r.useEffect)(() => fr(() => A(!0), 0), []);
                        const C = s + e - 1,
                            f = hr(t, l && n ? n : s, C),
                            h = 'number' == typeof n ? hr(n, s, C) : void 0,
                            F = ao(f, s),
                            D = ao(h, s),
                            B = (0, r.useRef)(F);
                        (0, r.useEffect)(() => {
                            B.current = F;
                        });
                        const S = B.current,
                            w = v()(
                                vr.base,
                                a && void 0 !== D && vr.base__hasCurrentText,
                                i && vr[`base__${i}`],
                                g && vr.base__isVisible,
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
                            k = b === Gu.digital;
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
                                        o().createElement(uo, {
                                            index: n - 1,
                                            selectedIndex: F,
                                            previousSelectedIndex: S,
                                            isAnimated: k,
                                        }),
                                    k
                                        ? o().createElement(Xr, {
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
                                        : o().createElement(qr, {
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
                    oo = 'Tab_base_05',
                    so = 'Tab_content_99',
                    lo = 'Tab_base__selected_4b',
                    io = 'Tab_base__accent_b2',
                    co = 'Tab_selectedDivider_25',
                    _o = 'Tab_selectedDivider__left_57',
                    mo = 'Tab_selectedDivider__right_78',
                    Eo = 'Tab_divider_0e',
                    bo = 'Tab_divider__left_ac',
                    po = 'Tab_divider__right_44',
                    go = 'Tab_icon_fb',
                    Ao = 'Tab_base__hover_54',
                    Co = 'Tab_plus_2d',
                    fo = 'Tab_iconWrapper_c5',
                    ho = 'Tab_label_e8',
                    vo = 'Tab_highlight_1c',
                    Fo = 'Tab_highlight__left_87',
                    Do = 'Tab_highlight__right_d6',
                    Bo = 'Tab_tick_a3',
                    So = 'Tab_tabsDivider_17',
                    wo = 'Tab_bubble_4f';
                let yo;
                !(function (e) {
                    ((e.Active = 'active'), (e.Accent = 'accent'), (e.Default = 'default'));
                })(yo || (yo = {}));
                const ko = R.images.gui.maps.icons.customization.tabs,
                    To = R.strings.customization.itemTypes,
                    No = R.strings.customization.tooltips.tabs,
                    Mo = (0, r.memo)(
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
                            const b = (0, r.useState)(!1),
                                p = b[0],
                                g = b[1],
                                A = (0, r.useCallback)(() => {
                                    _ || (j.playHighlight(), g(!0), E && E(e));
                                }, [e, _, E]),
                                C = (0, r.useMemo)(() => {
                                    let e;
                                    return (
                                        (e = _ ? yo.Active : c ? yo.Accent : yo.Default),
                                        { backgroundImage: `url(${ko.$dyn(`${t}_${e}`)})` }
                                    );
                                }, [c, _, t]),
                                f = v()(oo, p && Ao, _ && lo, c && !_ && io);
                            return o().createElement(
                                'div',
                                {
                                    onClick: () => {
                                        m(e);
                                    },
                                    onMouseEnter: A,
                                    onMouseLeave: () => {
                                        g(!1);
                                    },
                                    className: f,
                                },
                                u && !_ && o().createElement('div', { className: v()(Eo, bo) }),
                                o().createElement(
                                    Vu,
                                    {
                                        header: String(No.$dyn(`${t}_title`)),
                                        body: String(No.$dyn(`${t}_description`)),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: so },
                                        o().createElement(
                                            'div',
                                            { className: fo },
                                            o().createElement('div', { className: go, style: C }),
                                            a && o().createElement('div', { className: Co }),
                                        ),
                                        o().createElement('div', { className: ho }, To.$dyn(`${t}`)),
                                        _
                                            ? o().createElement(
                                                  o().Fragment,
                                                  null,
                                                  o().createElement('div', { className: v()(vo, Fo) }),
                                                  o().createElement('div', { className: v()(vo, Do) }),
                                                  o().createElement('div', { className: Bo }),
                                                  o().createElement('div', { className: v()(co, _o) }),
                                                  o().createElement('div', { className: v()(co, mo) }),
                                              )
                                            : o().createElement(
                                                  o().Fragment,
                                                  null,
                                                  s && o().createElement('div', { className: v()(Eo, bo) }),
                                                  l && o().createElement('div', { className: v()(Eo, po) }),
                                              ),
                                    ),
                                ),
                                !l && !_ && !i && o().createElement('div', { className: n ? v()(Eo, po) : So }),
                                Boolean(d) && o().createElement(au, { className: wo, text: d.toString() }),
                            );
                        },
                    ),
                    Io = 'Tabs_base_51',
                    xo = 'Tabs_tabs_ab',
                    Oo = 'Tabs_groupDivider_b2';
                function Lo() {
                    return (
                        (Lo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Lo.apply(this, arguments)
                    );
                }
                const Ro = (0, r.memo)(
                        ({ isEditable: e, tabs: t, onClick: u, onHoverTab: a, onEditClose: n, mixClass: r }) => {
                            var s;
                            const l = null == (s = t.find((e) => e.isSelected)) ? void 0 : s.groupId;
                            return o().createElement(
                                'div',
                                { className: v()(Io, r) },
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
                                            { key: `${n}-${e.id}`, className: xo },
                                            o().createElement(
                                                Mo,
                                                Lo(
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
                                            _ && o().createElement('div', { className: Oo }),
                                        );
                                    }),
                                e && o().createElement($e, { onCloseCallback: n }),
                            );
                        },
                    ),
                    Po = 'ExtendedItem_base_8b',
                    Ho = 'ExtendedItem_hoverBg_5c',
                    Wo = 'ExtendedItem_hoverBg__visible_6a',
                    zo = 'ExtendedItem_toggleBorder_9c',
                    Vo = 'ExtendedItem_toggleBorder__select_01',
                    Uo = 'ExtendedItem_toggle_24',
                    Go = 'ExtendedItem_size_1c',
                    $o = 'ExtendedItem_paletteIcon_87',
                    jo = R.images.gui.maps.icons.customization.toolbar.extended,
                    Xo = (0, r.memo)(({ item: e, onActionClick: t, actionType: u }) => {
                        const a = e.actionData,
                            n = e.isSelected,
                            s = e.icon,
                            l = e.paletteIcon,
                            i = (0, r.useState)(!1),
                            c = i[0],
                            _ = i[1],
                            d = n ? jo.toggle_on() : jo.toggle_default();
                        return o().createElement(
                            'div',
                            {
                                className: Po,
                                onClick: () => {
                                    (t(u, a), j.playClick());
                                },
                                onMouseEnter: () => {
                                    (_(!0), j.playHighlight());
                                },
                                onMouseLeave: () => {
                                    _(!1);
                                },
                            },
                            o().createElement('div', { className: v()(Ho, c && Wo) }),
                            o().createElement('div', { className: v()(zo, n && Vo) }),
                            o().createElement('div', { className: Uo, style: { backgroundImage: `url(${d})` } }),
                            Boolean(s.length) && o().createElement(au, { className: Go, text: s }),
                            Boolean(l.length) &&
                                o().createElement('div', { className: $o, style: { backgroundImage: `url(${l})` } }),
                        );
                    }),
                    qo = 'ExtendedSubButtons_base_b5',
                    Yo = 'ExtendedSubButtons_bg_4f',
                    Ko = 'ExtendedSubButtons_content_17',
                    Zo = (0, r.memo)(({ subButtons: e, onMouseLeave: t, onActionClick: u, actionType: a }) =>
                        o().createElement(
                            'div',
                            { className: qo, onMouseLeave: t },
                            o().createElement(
                                'div',
                                { className: Ko },
                                o().createElement('div', { className: Yo }),
                                e.map((e) =>
                                    o().createElement(Xo, {
                                        key: e.actionData,
                                        item: e,
                                        onActionClick: u,
                                        actionType: a,
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Jo = 'ToolbarItem_base_c1',
                    Qo = 'ToolbarItem_base__disable_40',
                    es = 'ToolbarItem_hoverBg_89',
                    ts = 'ToolbarItem_hoverBg__visible_c9',
                    us = 'ToolbarItem_icon_65',
                    as = 'ToolbarItem_icon__disable_ef',
                    ns = 'ToolbarItem_disable_43',
                    rs = 'ToolbarItem_hoveredIcon_a8',
                    os = 'ToolbarItem_base__hover_02',
                    ss = 'ToolbarItem_actionName_38',
                    ls = 'ToolbarItem_arrow_f4',
                    is = 'ToolbarItem_arrow__left_00',
                    cs = 'ToolbarItem_arrow__leftHover_72',
                    _s = 'ToolbarItem_arrow__right_a9',
                    ds = 'ToolbarItem_arrow__rightHover_a9',
                    ms = 'ToolbarItem_arrow__leftDisable_8c',
                    Es = 'ToolbarItem_arrow__rightDisable_bd';
                let bs, ps;
                (!(function (e) {
                    ((e[(e.RIGHT = 0)] = 'RIGHT'), (e[(e.LEFT = 1)] = 'LEFT'));
                })(bs || (bs = {})),
                    (function (e) {
                        ((e.COLOR_CHANGE = 'color_change'), (e.SCALE_CHANGE = 'scale_change'));
                    })(ps || (ps = {})));
                const gs = R.images.gui.maps.icons.customization.toolbar,
                    As = [ps.COLOR_CHANGE, ps.SCALE_CHANGE],
                    Cs = [
                        Uu.CUSTOMIZATION_SHEET_ACTION_REMOVE_ONE,
                        Uu.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_SEASONS,
                        Uu.CUSTOMIZATION_SHEET_ACTION_REMOVE_FROM_ALL_PARTS,
                    ],
                    fs = (0, r.memo)(({ toolbarItem: e, onItemClick: t, onItemOver: u, isSelected: a }) => {
                        const n = e.actionType,
                            s = e.isEnabled,
                            l = e.actionBtnLabel,
                            i = e.subButtons,
                            c = e.progressionLevel,
                            _ = `${n}${c}`,
                            d = c > 0,
                            m = s ? gs.default.$dyn(d ? _ : n) : gs.disable.$dyn(n),
                            E = gs.idle.$dyn(d ? _ : n),
                            b = (0, r.useState)(!1),
                            p = b[0],
                            g = b[1],
                            A = (0, r.useState)(!1),
                            C = A[0],
                            f = A[1],
                            h = (0, r.useState)(!1),
                            F = h[0],
                            D = h[1],
                            B = (0, r.useState)({ left: !1, right: !1 }),
                            S = B[0],
                            w = B[1],
                            y = As.includes(n);
                        (0, r.useEffect)(() => {
                            (a && s && g(!0), a && y && D(!0));
                        }, [a, y, s]);
                        const k = (0, r.useCallback)(() => {
                                (f(!1), a && y && f(!0));
                            }, [a, y]),
                            T = (e, u) => {
                                (e.stopPropagation(), t(n, u));
                            },
                            N = (e) => {
                                s &&
                                    (e === bs.LEFT
                                        ? w((e) => Object.assign({}, e, { left: !0 }))
                                        : w((e) => Object.assign({}, e, { right: !0 })));
                            },
                            M = (e) => {
                                s &&
                                    (e === bs.LEFT
                                        ? w((e) => Object.assign({}, e, { left: !1 }))
                                        : w((e) => Object.assign({}, e, { right: !1 })));
                            },
                            I = y && C && a,
                            x = v()(Jo, p && os, !s && Qo),
                            O = v()(ls, is, S.left && s && cs, !s && ms),
                            L = v()(ls, _s, S.right && s && ds, !s && Es);
                        return o().createElement(
                            'div',
                            {
                                onMouseEnter: () => {
                                    s && (g(!0), y && !C && f(!0), u(n), j.playHighlight());
                                },
                                onMouseLeave: () => {
                                    (g(!1), C && f(!1), F && D(!1));
                                },
                                onClick: () => {
                                    s &&
                                        !y &&
                                        (n === Uu.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_SEASONS
                                            ? $(R.sounds.cust_select_double())
                                            : n === Uu.CUSTOMIZATION_SHEET_ACTION_APPLY_TO_ALL_PARTS
                                              ? $(R.sounds.cust_color_apply())
                                              : Cs.includes(n)
                                                ? $(R.sounds.cust_select_remove())
                                                : $(R.sounds.cust_select()),
                                        t(n, d ? bs.RIGHT : -1));
                                },
                                className: x,
                            },
                            (I || F) &&
                                s &&
                                o().createElement(Zo, {
                                    subButtons: i,
                                    actionType: n,
                                    onActionClick: t,
                                    onMouseLeave: k,
                                }),
                            o().createElement('div', { className: v()(es, p && ts) }),
                            !s && o().createElement('div', { className: ns }),
                            o().createElement(au, { text: l, className: ss }),
                            d &&
                                o().createElement('div', {
                                    className: O,
                                    onMouseEnter: () => N(bs.LEFT),
                                    onMouseLeave: () => M(bs.LEFT),
                                    onClick: (e) => T(e, bs.LEFT),
                                }),
                            o().createElement('div', {
                                className: v()(us, !s && as),
                                style: { backgroundImage: `url(${m})` },
                            }),
                            o().createElement('div', { className: rs, style: { backgroundImage: `url(${E})` } }),
                            d &&
                                o().createElement('div', {
                                    className: L,
                                    onMouseEnter: () => N(bs.RIGHT),
                                    onMouseLeave: () => M(bs.RIGHT),
                                    onClick: (e) => T(e, bs.RIGHT),
                                }),
                        );
                    }),
                    hs = 'Toolbar_base_56',
                    vs = 'Toolbar_content_31',
                    Fs = { type: '', index: -1 },
                    Ds = (0, r.memo)(({ toolbarItems: e, onItemClick: t }) => {
                        const u = (0, r.useState)(Fs),
                            a = u[0],
                            n = u[1];
                        (0, r.useEffect)(() => () => n(Fs), [e]);
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
                            { className: hs },
                            o().createElement(
                                'div',
                                { className: vs },
                                e.map((e, t) =>
                                    o().createElement(
                                        fn,
                                        {
                                            key: e.actionType,
                                            tooltipArgs: {
                                                body: e.disableTooltip,
                                                isEnabled: Boolean(e.disableTooltip.length),
                                            },
                                        },
                                        o().createElement(fs, {
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
                    Bs = 'AllSeasonsHint_base_d7',
                    Ss = 'AllSeasonsHint_text_7b',
                    ws = R.strings.customization.customization.allSeasonsHint,
                    ys = R.strings.customization.itemTypes,
                    ks = (0, r.memo)(({ itemType: e, isSelected: t, onSelectApplyingAllSeasons: u }) => {
                        const a = y().mediaSize <= B.Small,
                            n = a ? sa.medium : sa.large;
                        return o().createElement(
                            Vu,
                            { header: ws.tooltip.header(), body: ws.tooltip.body() },
                            o().createElement(
                                'div',
                                { className: Bs },
                                o().createElement(
                                    da,
                                    {
                                        isChecked: t,
                                        size: n,
                                        type: la.main,
                                        soundHover: R.sounds.highlight(),
                                        soundClick: R.sounds.play(),
                                        onChange: () => {
                                            u();
                                        },
                                    },
                                    o().createElement(au, {
                                        text: a ? ws.shortText() : ws.text(),
                                        className: Ss,
                                        format: {
                                            binding: !a && e ? { item: String(ys.$dyn(`${e}`)).toLowerCase() } : void 0,
                                        },
                                    }),
                                ),
                            ),
                        );
                    });
                let Ts;
                !(function (e) {
                    ((e[(e.Empty = 0)] = 'Empty'),
                        (e[(e.SubmitEnter = 1)] = 'SubmitEnter'),
                        (e[(e.FirstEnter = 2)] = 'FirstEnter'),
                        (e[(e.EditEnter = 3)] = 'EditEnter'),
                        (e[(e.NotAvailableEnter = 4)] = 'NotAvailableEnter'));
                })(Ts || (Ts = {}));
                const Ns = 'Inscription_base_27',
                    Ms = 'Inscription_base__invalidInput_3d',
                    Is = 'Inscription_base__show_19',
                    xs = 'Inscription_base__hide_4c',
                    Os = 'Inscription_base__withIcons_ea',
                    Ls = 'Inscription_invalidEnterIcon_5f',
                    Rs = 'Inscription_icons_1d',
                    Ps = 'Inscription_icon_44',
                    Hs = 'Inscription_icon__withDelete_9a',
                    Ws = 'Inscription_text_7e',
                    zs = 'Inscription_invalidNumber_78',
                    Vs = R.strings.vehicle_customization.propertySheet.inscriptionController,
                    Us = {
                        [Ts.Empty]: '',
                        [Ts.EditEnter]: Vs.editEnter(),
                        [Ts.FirstEnter]: Vs.firstEnter(),
                        [Ts.SubmitEnter]: Vs.submitEnter(),
                        [Ts.NotAvailableEnter]: Vs.notAvailableEnter(),
                    },
                    Gs = {
                        [Ts.Empty]: [],
                        [Ts.EditEnter]: [
                            R.images.gui.maps.icons.customization.inscription_controller.bspace_btn(),
                            R.images.gui.maps.icons.customization.inscription_controller.delete_btn(),
                        ],
                        [Ts.FirstEnter]: [],
                        [Ts.SubmitEnter]: [R.images.gui.maps.icons.customization.inscription_controller.enter_btn()],
                        [Ts.NotAvailableEnter]: [],
                    },
                    $s = (0, r.memo)(
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
                                E = ea(),
                                b = ea();
                            (0, r.useEffect)(
                                () => (
                                    c(!1),
                                    b.run(() => {
                                        (c(!0), m(e));
                                    }, u),
                                    E.run(() => {
                                        c(!1);
                                    }, t + u),
                                    () => {
                                        (b.clear(), E.clear());
                                    }
                                ),
                                [s],
                            );
                            const p = d === Ts.NotAvailableEnter;
                            return o().createElement(
                                'div',
                                { className: v()(Ns, p && Ms, i && Is, !i && xs, Boolean(Gs[d].length) && Os) },
                                p && o().createElement('div', { className: Ls }),
                                o().createElement(au, {
                                    className: Ws,
                                    text: Us[d],
                                    format: {
                                        binding: {
                                            value: o().createElement(au, { className: zs, text: a }),
                                            start: Boolean(n.length) && n[0],
                                            end: Boolean(n.length > 1) && n[1],
                                        },
                                    },
                                }),
                                !p &&
                                    Boolean(Gs[d].length) &&
                                    o().createElement(
                                        'div',
                                        { className: Rs },
                                        Gs[d].map((e, t) =>
                                            o().createElement('div', {
                                                className: v()(Ps, d === Ts.EditEnter && Hs),
                                                key: t,
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    js = {
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
                    Xs = ({ isEnabled: e, icon: t, isWide: u, isDim: a, formFactor: n, selectedTab: s }) => {
                        const i = (0, r.useRef)(null),
                            c = qu(e);
                        ((0, r.useEffect)(() => {
                            !e && c && s !== $_.INSCRIPTION && $(R.sounds.cancelcloseno());
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
                            d = v()(js.base, !_ && u && js.base__wide, _ && js[`base__factor${n}`]);
                        return o().createElement(
                            'div',
                            { className: d },
                            e &&
                                o().createElement(
                                    'div',
                                    { ref: i, className: js.wrapper },
                                    a && o().createElement('div', { className: js.shine }),
                                    o().createElement('div', {
                                        className: js.icon,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                    o().createElement('div', { className: js.border }),
                                ),
                        );
                    },
                    qs = 'SceneHitArea_base_ec',
                    Ys = 'SceneHitArea_base__down_e8',
                    Ks = 'SceneHitArea_base__cursorActive_6e';
                let Zs;
                !(function (e) {
                    ((e.None = 'none'), (e.Ready = 'ready'), (e.Dragging = 'dragging'));
                })(Zs || (Zs = {}));
                const Js = ({
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
                            E = (0, r.useRef)({ x: 0, y: 0, state: Zs.None }),
                            b = (0, r.useRef)(null),
                            p = (0, r.useRef)(null);
                        ((0, r.useEffect)(() => {
                            const e = l.O.client.events.mouse.up(([e]) => {
                                (m(!1),
                                    E.current.state === Zs.Ready && a(),
                                    p.current && (clearTimeout(p.current), (p.current = null)),
                                    n(!1),
                                    u(!1));
                                const t = e;
                                if (t && t.button === ra.RIGHT) s();
                                else {
                                    const e = t && t.target;
                                    e && e !== b.current && !e.closest('[data-magnetic-tool-support]') && s();
                                }
                                E.current.state = Zs.None;
                            });
                            return () => e();
                        }, [E, n, a, u, s]),
                            (0, r.useEffect)(
                                () => () => {
                                    p.current && clearTimeout(p.current);
                                },
                                [],
                            ));
                        const g = (e) => {
                            if (!b.current) return;
                            const t = b.current.getBoundingClientRect(),
                                u = t.width,
                                a = t.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= u - 1 || e.clientY >= a - 1);
                        };
                        return o().createElement('div', {
                            className: v()(qs, d && Ys, i && Ks),
                            ref: b,
                            onMouseDown: (e) => {
                                (e.preventDefault(),
                                    e.button === ra.LEFT &&
                                        g(e) &&
                                        (m(!0),
                                        (E.current.x = e.clientX),
                                        (E.current.y = e.clientY),
                                        (E.current.state = Zs.Ready),
                                        u(!0),
                                        (p.current = setTimeout(() => {
                                            ((p.current = null), n(!0));
                                        }, 200))));
                            },
                            onMouseMove: (t) => {
                                if ((t.preventDefault(), d)) {
                                    if (!g(t)) return;
                                    const u = E.current,
                                        a = t.clientX !== u.x ? t.clientX - u.x : 0,
                                        r = t.clientY !== u.y ? t.clientY - u.y : 0;
                                    (0 !== a && 0 !== r && (u.state = Zs.Dragging),
                                        (u.x = t.clientX),
                                        (u.y = t.clientY),
                                        e({ dx: a, dy: r, dz: 0 }),
                                        p.current && (clearTimeout(p.current), (p.current = null), n(!0)));
                                }
                            },
                            onWheel: (t) => {
                                if ((t.preventDefault(), !g(t))) return;
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
                    Qs = 'BannerDecals_base_b8',
                    el = 'BannerDecals_base__hover_b3',
                    tl = 'BannerDecals_title_f7',
                    ul = R.strings.customization,
                    al = (0, r.memo)(({ onClick: e, onMouseLeave: t, onMouseEnter: u, mixClass: a }) => {
                        const n = (0, r.useState)(!1),
                            s = n[0],
                            l = n[1],
                            i = (0, r.useState)(!1),
                            c = i[0],
                            _ = i[1];
                        return o().createElement(
                            'div',
                            {
                                className: v()(Qs, s && el, a),
                                onMouseEnter: () => {
                                    (u && u(), l(!0), j.playHighlight());
                                },
                                onMouseLeave: () => {
                                    (!c && t && t(), l(!1));
                                },
                                onClick: () => {
                                    (u && u(), _(!0), j.playClick(), e());
                                },
                            },
                            o().createElement(au, { className: tl, text: ul.customization.decalsBanner() }),
                        );
                    }),
                    nl = {
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
                    rl = R.strings.customization.customization.seasonsTabs,
                    ol = R.images.gui.maps.icons.customization.seasons,
                    sl = (0, r.memo)(
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
                                b = m[1],
                                p = ea(),
                                g = null != (i = qu(s)) ? i : s;
                            ((0, r.useEffect)(() => {
                                if (p.isRunning) return () => p.clear();
                            }, [p]),
                                (0, r.useEffect)(() => {
                                    (!g && s && (b(!0), !n && $(R.sounds.cust_tick_on())),
                                        g && !s && $(R.sounds.cust_tick_off()));
                                }, [g, s, p, n]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return p.run(() => {
                                            b(!1);
                                        }, 1200);
                                }, [p, E]));
                            const A = (0, r.useCallback)(() => {
                                    p.isRunning || e(u);
                                }, [p, e, u]),
                                C = v()(
                                    nl.base,
                                    nl[`base__${u}`],
                                    s && !E && nl.base__full,
                                    E && nl.base__animatingAppear,
                                    !E && null !== E && nl.base__animatingDisappear,
                                    _ && nl.base__hover,
                                    t && nl.base__active,
                                    a && nl.base__fullContent,
                                    l,
                                );
                            return o().createElement(
                                'div',
                                {
                                    onMouseEnter: () => {
                                        t || (0, _u.wU)() || (d(!0), j.playHighlight());
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: A,
                                    className: C,
                                },
                                o().createElement('div', { className: nl.background }),
                                t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: nl.blink }),
                                        o().createElement(
                                            'div',
                                            {
                                                className: nl.activeTab,
                                                style: { backgroundImage: `url(${ol.$dyn(`${u}_bg`)})` },
                                            },
                                            o().createElement('div', {
                                                className: nl.shine,
                                                style: { backgroundImage: `url(${ol.$dyn(`${u}_shine`)})` },
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: nl.iconsWrapper },
                                    o().createElement(
                                        'div',
                                        { className: nl.seasonIconWrapper },
                                        o().createElement('div', {
                                            className: v()(
                                                nl.seasonIcon,
                                                _ || t ? nl.seasonIcon__hide : nl.seasonIcon__show,
                                            ),
                                            style: { backgroundImage: `url(${ol.$dyn(`${u}_default`)})` },
                                        }),
                                        o().createElement('div', {
                                            className: v()(
                                                nl.seasonIcon,
                                                _ || t ? nl.seasonIcon__show : nl.seasonIcon__hide,
                                            ),
                                            style: { backgroundImage: `url(${ol.$dyn(`${u}_active`)})` },
                                        }),
                                    ),
                                    o().createElement('div', { className: nl.plus }),
                                    o().createElement('div', { className: nl.check }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: nl.titleWrapper },
                                    o().createElement(au, { text: rl.$dyn(`${u}`), className: nl.title }),
                                    t && o().createElement(au, { text: rl.map(), className: nl.title }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: nl.flareWrapper },
                                    o().createElement('div', { className: nl.flare }),
                                ),
                                t && o().createElement('div', { className: nl.blik }),
                            );
                        },
                    ),
                    ll = 'SeasonsTabs_base_24',
                    il = 'SeasonsTabs_base__show_61';
                function cl() {
                    return (
                        (cl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        cl.apply(this, arguments)
                    );
                }
                const _l = ({ tabs: e, isMinimised: t, onClick: u, className: a }) => {
                        const n = y().mediaSize,
                            s = !t && n >= B.Medium,
                            l = e.every((e) => e.isFull);
                        return (
                            (0, r.useEffect)(() => {
                                l && $(R.sounds.cust_tick_on_all());
                            }, [l]),
                            o().createElement(
                                'div',
                                { className: v()(ll, s && il, a) },
                                Boolean(null == e ? void 0 : e.length) &&
                                    e.map((e) =>
                                        o().createElement(
                                            sl,
                                            cl(
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
                    dl = 'VehicleName_base_4d',
                    ml = 'VehicleName_vehicleTypeContainer_1e',
                    El = 'VehicleName_base__prem_ec',
                    bl = 'VehicleName_vehicleType_68',
                    pl = 'VehicleName_shortName_23',
                    gl = R.images.gui.maps.icons.vehicleTypes.big,
                    Al = (0, r.memo)(({ name: e, tier: t, type: u, isPremium: a = !1, classMix: n }) => {
                        const r = `${((s = u), s.replace(/-/g, '_'))}${a ? '_elite' : ''}`;
                        var s;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: v()(dl, a && El, n) },
                                o().createElement(au, { text: Vn(t) }),
                                o().createElement(
                                    'div',
                                    { className: ml },
                                    o().createElement('div', {
                                        className: bl,
                                        style: { backgroundImage: `url(${gl.$dyn(r)})` },
                                    }),
                                ),
                                o().createElement(au, { text: e, className: pl }),
                            ),
                            o().createElement('div', null),
                        );
                    }),
                    Cl = 'App_base_f6',
                    fl = 'App_base__expanded_2a',
                    hl = 'App_wrapper_5c',
                    vl = 'App_header_17',
                    Fl = 'App_header__hide_c5',
                    Dl = 'App_infoButton_db',
                    Bl = 'App_base__fadeIn_54',
                    Sl = 'App_base__fadeOut_33',
                    wl = 'App_closeButton_7c',
                    yl = 'App_description_d6',
                    kl = 'App_description__bonus_a0',
                    Tl = 'App_topPanelWrapper_50',
                    Nl = 'App_topPanel_29',
                    Ml = 'App_carouselBlock_24',
                    Il = 'App_carouselBlockBack_d6',
                    xl = 'App_markers_2a',
                    Ol = 'App_markers__fadeIn_94',
                    Ll = 'App_markers__fadeOut_e3',
                    Rl = 'App_emptyState_2f',
                    Pl = 'App_decalsBanner_75',
                    Hl = 'App_decalsBanner__hide_98',
                    Wl = 'App_decalsBanner__fadeIn_92',
                    zl = 'App_decalsBanner__fadeOut_38',
                    Vl = 'App_openPanelButton_55',
                    Ul = 'App_openPanelButtonText_6f',
                    Gl = 'App_leftPanel_85',
                    $l = 'App_rightPanel_fb',
                    jl = 'App_divider_8c',
                    Xl = 'App_seasontTabs_50',
                    ql = 'App_seasontTabs__fadeIn_3a',
                    Yl = 'App_seasontTabs__fadeOut_a6',
                    Kl = 'App_magneticTool_4d',
                    Zl = 'App_inscription_3e',
                    Jl = 'App_toolbarWrapper_55',
                    Ql = 'App_progressionWrapper_19',
                    ei = 'App_withProgressionWrapper_cb',
                    ti = 'App_seasonsHint_6d',
                    ui = 'App_sub_7b',
                    ai = 'App_sub__open_1c',
                    ni = 'App_footer_b1',
                    ri = 'App_footer__hide_ce',
                    oi = 'App_binCartPannelWrapper_8c',
                    si = 'App_binCartPannelWrapper__open_3f',
                    li = 'App_binCartPannel_b1',
                    ii = 'App_cart_25',
                    ci = 'App_subInfo_18',
                    _i = 'App_subInfo__open_b7',
                    di = 'App_back_ff',
                    mi = 'App_buttonHolder_58',
                    Ei = { type: 'idle' };
                const bi = (e, t) => {
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
                    pi = 'ArrowsHint_base_3c',
                    gi = 'ArrowsHint_content_ac',
                    Ai = 'ArrowsHint_notificationBg_ef',
                    Ci = 'ArrowsHint_arrows_7c',
                    fi = 'ArrowsHint_bg_e0',
                    hi = 'ArrowsHint_arrow_41',
                    vi = 'ArrowsHint_arrow__left_9c',
                    Fi = 'ArrowsHint_arrow__right_50',
                    Di = 'ArrowsHint_text_a2',
                    Bi = () =>
                        o().createElement(
                            'div',
                            { className: pi },
                            o().createElement('div', { className: fi }),
                            o().createElement(
                                'div',
                                { className: gi },
                                o().createElement('div', { className: Ai }),
                                o().createElement(au, {
                                    className: Di,
                                    text: R.strings.customization.arrowHint.text(),
                                }),
                                o().createElement(
                                    'div',
                                    { className: Ci },
                                    o().createElement('div', { className: v()(hi, vi) }),
                                    o().createElement('div', { className: v()(hi, Fi) }),
                                ),
                            ),
                        ),
                    Si = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                ((0, _u.c9)(_u.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    j.playYes());
                            }, [n, t, u, a]),
                            i = (0, r.useCallback)(() => {
                                (0, _u.c9)(_u.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (s && s(e), ((e) => e.button === ra.RIGHT)(e) && l());
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
                    wi = ['children'];
                function yi() {
                    return (
                        (yi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yi.apply(this, arguments)
                    );
                }
                const ki = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, wi);
                        return o().createElement(
                            Si,
                            yi({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Ti = 'Image_base_5c',
                    Ni = 'Image_shine_08',
                    Mi = 'Image_content_03',
                    Ii = (0, r.memo)(({ isDim: e, icon: t }) => {
                        const u = (0, r.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return t
                            ? o().createElement(
                                  'span',
                                  { className: Ti },
                                  e && o().createElement('span', { className: Ni }),
                                  o().createElement('span', { className: Mi, style: u }),
                              )
                            : o().createElement('span', { className: Mi });
                    }),
                    xi = 'Price_base_9e',
                    Oi = 'Price_base__stock_cc',
                    Li = 'Price_storage_04',
                    Ri = 'Price_storage__empty_2d',
                    Pi = 'Price_icon_df',
                    Hi = 'Price_iconRent_ec',
                    Wi = 'Price_iconRent__autoRent_df',
                    zi = 'Price_rental_5a',
                    Vi = 'Price_iconLocked_07',
                    Ui = R.strings.customization,
                    Gi = (0, r.memo)(
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
                            const m = v()(Hi, a && Wi);
                            if (e)
                                return o().createElement(
                                    'span',
                                    { className: v()(xi, c) },
                                    o().createElement(
                                        'span',
                                        { className: Pi },
                                        o().createElement('span', { className: Vi }),
                                    ),
                                );
                            if (u && l > 0)
                                return o().createElement(
                                    'span',
                                    { className: v()(xi, c) },
                                    o().createElement(
                                        'span',
                                        { className: Pi },
                                        o().createElement('span', { className: m }),
                                    ),
                                    l,
                                );
                            if (i && (0 === s.length || l > 0))
                                return o().createElement(
                                    'span',
                                    { className: v()(xi, c) },
                                    o().createElement('span', { className: v()(Li, !l && Ri) }, l),
                                );
                            const E = v()(xi, t && Oi, c);
                            return o().createElement(
                                'div',
                                { className: E },
                                '' !== n && o().createElement(au, { className: zi, text: n }),
                                Boolean(l && l > 1) &&
                                    o().createElement(au, {
                                        text: Ui.cart.quantity(),
                                        format: { binding: { quantity: l } },
                                    }),
                                o().createElement(Ca, {
                                    isDiscount: t,
                                    size: ma.small,
                                    type: null == (_ = s[0]) ? void 0 : _.name,
                                    value: Number(null == (d = s[0]) ? void 0 : d.value),
                                }),
                            );
                        },
                    ),
                    $i = 'ProgressionLevelIcon_base_8a',
                    ji = 'ProgressionLevelIcon_icon_49',
                    Xi = 'ProgressionLevelIcon_icon__big_74',
                    qi = 'ProgressionLevelIcon_icon__small_46',
                    Yi = ({ typeId: e, progressionLevel: t, classMix: u }) => {
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
                                  { className: $i },
                                  o().createElement('div', { className: v()(ji, qi, u), style: i }),
                                  o().createElement('div', { className: v()(ji, Xi, u), style: c }),
                              )
                            : null;
                    },
                    Ki = 'Slot_base_25',
                    Zi = 'Slot_base__big_e2',
                    Ji = 'Slot_base__isProgression_0b',
                    Qi = 'Slot_base__locked_4d',
                    ec = 'Slot_base__isAlreadyUsed_dd',
                    tc = 'Slot_base__selected_03',
                    uc = 'Slot_equippedIcon_0d',
                    ac = 'Slot_pulse_3a',
                    nc = 'Slot_image_c9',
                    rc = 'Slot_inProgressIcon_8a',
                    oc = 'Slot_progressionArrow_74',
                    sc = 'Slot_progressionArrow__enabled_25',
                    lc = 'Slot_shadowBottom_96',
                    ic = 'Slot_base__hasExtraName_55',
                    cc = 'Slot_shadowTop_11',
                    _c = 'Slot_base__topLeftCornerVisible_f9',
                    dc = 'Slot_border_74',
                    mc = 'Slot_base__equipped_be',
                    Ec = 'Slot_topLeftCorner_b3',
                    bc = 'Slot_ribbon_f5',
                    pc = 'Slot_isLocked_bb',
                    gc = 'Slot_isAlreadyUsed_1a',
                    Ac = 'Slot_isAlreadyUsedText_50',
                    Cc = 'Slot_isAlreadyUsedIcon_6a',
                    fc = 'Slot_icon_fc',
                    hc = 'Slot_icon__editable_69',
                    vc = 'Slot_icon__rewindable_fd',
                    Fc = 'Slot_icon__special_50',
                    Dc = 'Slot_icon__alert_6d',
                    Bc = 'Slot_icon__unHistorical_64',
                    Sc = 'Slot_icon__fantastical_3a',
                    wc = 'Slot_icon__serialNumber_26',
                    yc = 'Slot_hover_7b',
                    kc = 'Slot_price_d1',
                    Tc = 'Slot_styleName_c6',
                    Nc = 'Slot_button_a6',
                    Mc = 'Slot_buttonWrapper_ac',
                    Ic = 'Slot_bubble_cc',
                    xc = 'Slot_bubble__placeButton_28',
                    Oc = R.strings.customization,
                    Lc = (0, r.memo)(
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
                            quantity: b,
                            buyPrice: p,
                            extraName: g,
                            classMix: A,
                            progressionLevel: C,
                            isProgressionRewindEnabled: f,
                            editableIcon: h,
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
                            arrowEnabled: W,
                            isNew: z,
                            isFilled: V,
                        }) => {
                            var U;
                            const G = (0, r.useMemo)(() => -1 === e, [e]),
                                j = (0, r.useMemo)(() => !u, [u]),
                                X = y().mediaSize,
                                q = h.includes('disable') ? null : h,
                                Y = 1 === l,
                                K = 2 === l,
                                Z = _ || c || M || l || q,
                                J = (0, r.useCallback)(() => {
                                    (e && P(e), j && a && !s && $(a));
                                }, [P, e, j, a, s]),
                                Q = (0, r.useCallback)(() => {
                                    (C <= 0 && (u || x)) || (F && (e && F(e), $(n)));
                                }, [e, x, u, F, C, n]),
                                ee = (0, r.useCallback)(
                                    (t) => {
                                        (t.stopPropagation(), w && !u && e && w(e));
                                    },
                                    [e, u, w],
                                ),
                                te = v()(
                                    Ki,
                                    A,
                                    E && Zi,
                                    s && tc,
                                    D && mc,
                                    C > 0 && Ji,
                                    Z && _c,
                                    g && ic,
                                    u && Qi,
                                    x && ec,
                                ),
                                ue = (0, r.useMemo)(
                                    () => ({ intCD: e, tooltip: i, showInventoryBlock: !u, progressionLevel: C }),
                                    [e, u, C, i],
                                ),
                                ae = (0, r.useMemo)(
                                    () => ({
                                        tooltip: Y
                                            ? 'techCustomizationNonhistoricItem'
                                            : 'techCustomizationFantasticalItem',
                                    }),
                                    [Y],
                                ),
                                ne = Boolean(null == (U = p.discount[0]) ? void 0 : U.value);
                            return V
                                ? o().createElement(
                                      ki,
                                      { key: e, isEnabled: !G, args: { type: 'customizationItem', intCD: e } },
                                      o().createElement(
                                          Au,
                                          { args: ue },
                                          o().createElement(
                                              'div',
                                              { className: te, onMouseEnter: J, onClick: Q },
                                              z && o().createElement('div', { className: ac }),
                                              D && o().createElement('div', { className: uc }),
                                              o().createElement(
                                                  'div',
                                                  { className: dc },
                                                  void 0 !== W &&
                                                      o().createElement('div', { className: v()(oc, W && sc) }),
                                                  H && o().createElement('div', { className: rc }),
                                                  o().createElement(
                                                      'div',
                                                      { className: nc },
                                                      o().createElement(Ii, { isDim: d, icon: m }),
                                                  ),
                                                  o().createElement('div', { className: cc }),
                                                  o().createElement('div', { className: lc }),
                                                  u && o().createElement('div', { className: pc }),
                                                  x &&
                                                      o().createElement(
                                                          'div',
                                                          { className: gc },
                                                          o().createElement(
                                                              'div',
                                                              { className: Ac },
                                                              o().createElement('div', { className: Cc }),
                                                              E &&
                                                                  o().createElement(au, {
                                                                      text: Oc.customization.carousel.is_already_used(),
                                                                  }),
                                                          ),
                                                      ),
                                                  Boolean(O) &&
                                                      o().createElement(au, { className: Ic, text: O.toString() }),
                                                  I && o().createElement('div', { className: bc }),
                                                  o().createElement(
                                                      'div',
                                                      { className: Ec },
                                                      _ && o().createElement('div', { className: v()(fc, Dc) }),
                                                      c && o().createElement('div', { className: v()(fc, Fc) }),
                                                      M && o().createElement('div', { className: v()(fc, wc) }),
                                                      (Y || K) &&
                                                          !G &&
                                                          o().createElement(
                                                              Au,
                                                              { args: ae },
                                                              o().createElement('div', {
                                                                  className: v()(fc, Y ? Bc : Sc),
                                                              }),
                                                          ),
                                                      q &&
                                                          o().createElement('div', {
                                                              className: v()(fc, hc),
                                                              style: {
                                                                  backgroundImage: `url(${(() => {
                                                                      if (q)
                                                                          return X <= B.Small
                                                                              ? q
                                                                              : q.replace('small', 'big');
                                                                  })()})`,
                                                              },
                                                          }),
                                                      f
                                                          ? o().createElement('div', { className: v()(fc, vc) })
                                                          : o().createElement(Yi, {
                                                                typeId: t,
                                                                progressionLevel: C,
                                                                classMix: fc,
                                                            }),
                                                  ),
                                                  o().createElement(au, { className: Tc, text: g }),
                                                  o().createElement(Gi, {
                                                      classMix: kc,
                                                      isStub: G,
                                                      price: p.price,
                                                      quantity: b,
                                                      isRental: k,
                                                      rentalInfoText: T,
                                                      autoRentEnabled: N,
                                                      locked: u,
                                                      hasDiscount: ne,
                                                  }),
                                                  o().createElement('div', { className: yc }),
                                                  Boolean(h) &&
                                                      D &&
                                                      o().createElement(
                                                          Vu,
                                                          {
                                                              body: S
                                                                  ? Oc.customization.changeButton.tooltip()
                                                                  : Oc.customization.changeButtonDisabled.tooltip(),
                                                          },
                                                          o().createElement(
                                                              'div',
                                                              { id: `${e}-tooltip`, className: Mc },
                                                              o().createElement(
                                                                  Pu,
                                                                  {
                                                                      size: Lu.small,
                                                                      type: S ? Ou.primary : Ou.secondary,
                                                                      disabled: !S,
                                                                      mixClass: Nc,
                                                                      onClick: ee,
                                                                  },
                                                                  Boolean(L) &&
                                                                      o().createElement(au, {
                                                                          className: v()(Ic, xc),
                                                                          text: L.toString(),
                                                                      }),
                                                                  X >= B.Small
                                                                      ? o().createElement(au, {
                                                                            text: Oc.customization.carousel.change_button(),
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
                                      { className: v()(Ki, E && Zi), onMouseEnter: J, onClick: Q },
                                      o().createElement('div', { className: dc }),
                                  );
                        },
                    ),
                    Rc = 'Slots_base_ef',
                    Pc = 'Slots_categories_6b',
                    Hc = 'Slots_categorieBox_d3',
                    Wc = 'Slots_categorieText_12',
                    zc = 'Slots_categorieBoxPattern_8d',
                    Vc = 'Slots_slot_17';
                function Uc() {
                    return (
                        (Uc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Uc.apply(this, arguments)
                    );
                }
                const Gc = (0, r.memo)(
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
                            { className: Rc },
                            u.map((c, _) => {
                                var d;
                                return o().createElement(
                                    'div',
                                    { className: Pc, key: `${_}` },
                                    '' !== c.bookmarkName &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: Hc,
                                                ref: (e) => {
                                                    e
                                                        ? l.current.set(c.bookmarkIndex, e)
                                                        : l.current.delete(c.bookmarkIndex);
                                                },
                                            },
                                            o().createElement('div', { className: zc }),
                                            o().createElement('div', { className: Wc }, c.bookmarkName),
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
                                                    Lc,
                                                    Uc(
                                                        {
                                                            onSelectItem: a,
                                                            onHoverItem: n,
                                                            onEditItem: r,
                                                            classMix: Vc,
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
                let $c;
                !(function (e) {
                    ((e.auto = 'auto'), (e.left = 'left'), (e.right = 'right'));
                })($c || ($c = {}));
                const jc = {
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
                    Xc = 'right',
                    qc = 'left',
                    Yc = (e) => e.offsetLeft - 0.5 * e.offsetWidth,
                    Kc = (e, t) => e.offsetLeft - t + 1.5 * e.offsetWidth,
                    Zc = R.strings.customization,
                    Jc = { allowedButtons: [ra.LEFT] },
                    Qc = (0, r.memo)(
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
                                    tabId: b,
                                    lastScrollState: p,
                                    isEditable: g,
                                    onUpdateItems: A,
                                },
                                C,
                            ) => {
                                const f = y().mediaSize,
                                    h = (0, r.useRef)(new Map()),
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
                                    z = H[1],
                                    V = (0, r.useState)([]),
                                    U = V[0],
                                    G = V[1],
                                    $ = (0, r.useState)(!1),
                                    X = $[0],
                                    q = $[1],
                                    Y = (0, r.useState)([0, 0]),
                                    K = Y[0],
                                    Z = Y[1];
                                (0, r.useImperativeHandle)(C, () => ({
                                    getFirstVisibleItemId: () => {
                                        const t = e.find((e) => {
                                            const t = h.current.get(e.intCD);
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
                                            _ = (0, r.useState)(Ei),
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
                                                    m(Ei);
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
                                    })(i, void 0, Jc),
                                    te = 'dragging' === ee.type,
                                    ue = (0, r.useCallback)(() => {
                                        const e = i.getWrapperSize();
                                        if (!e) return null;
                                        let t = !1,
                                            u = !1;
                                        (D.forEach((a) => {
                                            const n = h.current.get(a.intCD);
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
                                                const r = h.current.get(n.intCD);
                                                if (!r) return null;
                                                const o = r.getBoundingClientRect(),
                                                    s = o.width / 2;
                                                if (e === qc) {
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
                                                n = e === qc ? u.offsetLeft - 36 : u.offsetLeft - t + a.width + 29;
                                            i.scrollPosition.start({ scrollPosition: J.right < n ? J.right : n });
                                        }
                                    },
                                    ne = (0, r.useCallback)(() => {
                                        const e = i.getContainerSize();
                                        if (!e) return;
                                        const t = u.length > 1 && !Q;
                                        if ((t !== X && q(t), !t)) return void (U.length > 0 && G([]));
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
                                            JSON.stringify(a) !== JSON.stringify(U) && G(a));
                                    }, [U, u, Q, i, X]),
                                    re = (0, r.useCallback)(
                                        (e) => {
                                            const t = e.which;
                                            (t === Yu.n.ARROW_LEFT && c(!0), t === Yu.n.ARROW_RIGHT && c(!1));
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
                                                a = h.current.get(u.intCD);
                                            if (a) return { position: a.offsetLeft, isFilled: u.isFilled };
                                        },
                                        [e],
                                    ),
                                    le = (0, r.useCallback)(() => {
                                        const t = i.getWrapperSize();
                                        if (t) {
                                            const u = i.animationScroll.scrollPosition.goal;
                                            A(u, t, e.length, se);
                                        }
                                    }, [i, e, A, se]),
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
                                        (e, t = !0, u = $c.auto) => {
                                            const a = i.getBounds(),
                                                n = a[0],
                                                r = a[1];
                                            if (!((n <= 0 && r <= 0) || void 0 === e))
                                                if (e > 0) {
                                                    const a = i.getWrapperSize(),
                                                        n = h.current.get(e);
                                                    if (n && a) {
                                                        const e = i.animationScroll.scrollPosition.goal;
                                                        let r = 0,
                                                            o = !0;
                                                        if (u === $c.left) r = Yc(n);
                                                        else if (u === $c.right) r = Kc(n, a);
                                                        else {
                                                            const t = n.offsetLeft - e < 0,
                                                                u = n.offsetLeft + n.offsetWidth - e > a;
                                                            t || u ? (t ? (r = Yc(n)) : u && (r = Kc(n, a))) : (o = !1);
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
                                bi(() => {
                                    if (de && _e && p.current)
                                        return p.current.firstExpandedItemId !== E
                                            ? ((p.current.firstExpandedItemId = E), void (E && ce(E, !0, $c.left)))
                                            : p.current.selectedItemId !== m
                                              ? ((p.current.selectedItemId = m), void (m && ce(m, !1, $c.auto)))
                                              : p.current.tabId !== b
                                                ? ((p.current.tabId = b), void ce(d, !0, $c.left))
                                                : void 0;
                                }, [ce, m, E, d, b, _e, de, p]);
                                const me = v()(jc.shadow, jc.shadow__left, (w === J.left || Q) && jc.shadow__hidden),
                                    Ee = v()(jc.shadow, jc.shadow__right, (w === J.right || Q) && jc.shadow__hidden),
                                    be = v()(
                                        jc.arrow,
                                        jc.arrow__left,
                                        R && jc.arrow__hover,
                                        (!N || Q) && jc.arrow__hidden,
                                    ),
                                    pe = v()(
                                        jc.arrow,
                                        jc.arrow__right,
                                        W && jc.arrow__hover,
                                        (!x || Q) && jc.arrow__hidden,
                                    ),
                                    ge = () => {
                                        j.playHighlight();
                                    };
                                return o().createElement(
                                    'div',
                                    { className: v()(jc.base, te && jc.base__dragging) },
                                    _ &&
                                        o().createElement(
                                            'div',
                                            { className: jc.arrowsHint },
                                            o().createElement(Bi, null),
                                        ),
                                    o().createElement(
                                        Oe.Horizontal.Area,
                                        {
                                            api: i,
                                            classNames: {
                                                wrapper: v()(
                                                    jc.horizontalWrapper,
                                                    Q && jc.horizontalWrapper__withoutScroll,
                                                ),
                                                content: jc.horizontalContent,
                                            },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: jc.slots },
                                            o().createElement(Gc, {
                                                items: e,
                                                categories: u,
                                                arrowsList: t,
                                                onClick: a,
                                                onHoverItem: n,
                                                onEditClick: s,
                                                isEditable: g,
                                                itemsRef: h,
                                                categoriesRef: F,
                                            }),
                                        ),
                                    ),
                                    o().createElement(Oe.Horizontal.Bar, {
                                        classNames: { base: jc.horizontalBar, thumb: jc.thumb },
                                        api: i,
                                    }),
                                    X &&
                                        o().createElement(
                                            'div',
                                            { className: jc.bookmarksWrapper },
                                            U.map(({ name: e, position: t, index: u }) =>
                                                o().createElement(
                                                    Vu,
                                                    { key: `${e}-${u}`, body: e },
                                                    o().createElement('div', {
                                                        onMouseEnter: ge,
                                                        onClick: () =>
                                                            ((e) => {
                                                                const t = i.getWrapperSize(),
                                                                    u = i.getContainerSize();
                                                                if (!t || !u) return;
                                                                const a = F.current.get(e);
                                                                if (a) {
                                                                    j.playClick();
                                                                    const e = a.offsetLeft + 0.5 * a.offsetWidth,
                                                                        n = e / u,
                                                                        r = f >= B.Medium ? 36 : 29,
                                                                        o = e - n * (t - 2 * r) - r;
                                                                    i.scrollPosition.start({ scrollPosition: o });
                                                                }
                                                            })(u),
                                                        className: jc.bookmark,
                                                        style: { left: 100 * t + '%' },
                                                    }),
                                                ),
                                            ),
                                        ),
                                    o().createElement('div', { className: me }),
                                    o().createElement('div', { className: Ee }),
                                    o().createElement(
                                        Vu,
                                        { body: Zc.tooltips.carousel.arrow() },
                                        o().createElement('div', {
                                            className: be,
                                            onMouseEnter: () => {
                                                (P(!0), j.playHighlight());
                                            },
                                            onMouseLeave: () => {
                                                P(!1);
                                            },
                                            onClick: () => {
                                                ae(qc);
                                            },
                                        }),
                                    ),
                                    o().createElement(
                                        Vu,
                                        { body: Zc.tooltips.carousel.arrow() },
                                        o().createElement('div', {
                                            className: pe,
                                            onMouseEnter: () => {
                                                (z(!0), j.playHighlight());
                                            },
                                            onClick: () => {
                                                ae(Xc);
                                            },
                                            onMouseLeave: () => {
                                                z(!1);
                                            },
                                        }),
                                    ),
                                );
                            },
                        ),
                    ),
                    e_ = { type: 'idle' };
                const t_ = 'WarningText_base_5d',
                    u_ = 'WarningText_header_57',
                    a_ = 'WarningText_headerIcon_2f',
                    n_ = 'WarningText_description_78',
                    r_ = o().memo(({ header: e, description: t }) =>
                        o().createElement(
                            'div',
                            { className: t_ },
                            o().createElement('div', { className: u_ }, o().createElement('div', { className: a_ }), e),
                            o().createElement('div', { className: n_ }, t),
                        ),
                    ),
                    o_ = 'ListEmptyState_base_5f',
                    s_ = 'ListEmptyState_content_22',
                    l_ = 'ListEmptyState_buttonWrapper_fa',
                    i_ = 'ListEmptyState_button_cd',
                    c_ = R.strings.customization,
                    __ = (0, r.memo)(
                        ({
                            warningHeader: e,
                            warningDescription: t,
                            buttonType: u = Ou.secondary,
                            tooltipArgs: a = { body: c_.customization.resetFilter.tooltip.text() },
                            className: n,
                            onClick: r,
                            children: s,
                        }) =>
                            o().createElement(
                                'div',
                                { className: v()(o_, n) },
                                o().createElement(
                                    'div',
                                    { className: s_ },
                                    o().createElement(r_, { header: e, description: t }),
                                    s &&
                                        o().createElement(
                                            'div',
                                            { className: l_ },
                                            o().createElement(
                                                Vu,
                                                a,
                                                o().createElement(
                                                    Pu,
                                                    { size: Lu.small, type: u, onClick: r, mixClass: i_ },
                                                    s,
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                    ),
                    d_ = {
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
                function m_() {
                    return (
                        (m_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        m_.apply(this, arguments)
                    );
                }
                const E_ = R.strings.customization,
                    b_ = (0, Le.Pi)(({ onCarouselCollapse: e, startScrollItemId: t, tabId: u, onUpdateItems: a }) => {
                        const n = cr(),
                            s = n.controls,
                            i = n.model,
                            c = i.computes.getItems(),
                            _ = i.computes.getCategories(),
                            d = i.computes.getBillModel(),
                            m = y().mediaSize <= B.Small ? Lu.small : Lu.medium,
                            E = i.computes.getTabsItemsList(),
                            b = i.root.get(),
                            p = b.filterModel,
                            g = b.carouselModel,
                            A = Oe.Vertical.useVerticalScrollApi(),
                            C = A.getWrapperSize(),
                            f = A.getContainerSize(),
                            h = i.computes.getBuyPrice(),
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
                            W = p.filteredItemsCounter,
                            z = p.allItemsCounter,
                            V = p.isFilteringActive,
                            U = p.newHiddenItemsCounter,
                            G = { top: P[0], bottom: P[1] },
                            X = G.top <= 0 && G.bottom <= 0,
                            q = Object.fromEntries(Object.entries(d).filter(([e]) => 'buyPrice' !== e)),
                            Y = (0, r.useCallback)(
                                () =>
                                    c.find((e) => {
                                        const t = F.current.get(e.intCD);
                                        return t && t.offsetTop - w > 0;
                                    }),
                                [c, w],
                            ),
                            K = (0, r.useCallback)(() => {
                                var t;
                                e(null == (t = Y()) ? void 0 : t.intCD);
                            }, [Y, e]);
                        Ju({ callback: K });
                        const Z = () => {
                                j.playHighlight();
                            },
                            J = (0, r.useCallback)(
                                (t) => {
                                    (t && s.onSelectItem(t), e());
                                },
                                [e, s],
                            ),
                            Q = (0, r.useCallback)(
                                (t) => {
                                    (t && s.onEditItem(t), e());
                                },
                                [s, e],
                            ),
                            ee = (0, r.useCallback)(() => {
                                (s.onShowBuyWindow(), e());
                            }, [s, e]),
                            te = (function (e, t) {
                                const u = e.contentRef,
                                    a = e.wrapperRef,
                                    n = e.scrollPosition,
                                    o = e.clampPosition,
                                    s = e.animationScroll,
                                    i = e.events,
                                    c = (0, r.useState)(e_),
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
                                            d(e_);
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
                            })(A),
                            ue = 'dragging' === te.type,
                            ae = (0, r.useCallback)(() => {
                                const e = A.getContainerSize();
                                if (!e) return;
                                const t = _.length > 1 && !X;
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
                            }, [N, _, X, A, x]),
                            ne = (0, r.useCallback)(() => {
                                const e = A.animationScroll.scrollPosition.goal;
                                k(e);
                                const t = A.getBounds(),
                                    u = t[0],
                                    a = t[1];
                                (u === G.top && a === G.bottom) || H([u, a]);
                            }, [A, G.top, G.bottom]),
                            re = (0, r.useCallback)(
                                (e) => {
                                    const t = c[e],
                                        u = F.current.get(t.intCD);
                                    if (u) return { position: u.offsetTop, isFilled: t.isFilled };
                                },
                                [c],
                            ),
                            oe = (0, r.useCallback)(() => {
                                const e = A.getWrapperSize();
                                if (e) {
                                    const t = A.animationScroll.scrollPosition.goal;
                                    a(t, e, c.length, re);
                                }
                            }, [A, c, a, re]),
                            se = (0, r.useCallback)(() => {
                                (ne(), ae(), oe());
                            }, [ne, ae, oe]);
                        (0, r.useEffect)(
                            () => (
                                A.events.on('change', se),
                                A.events.on('recalculateContent', se),
                                A.events.on('resizeHandled', se),
                                () => {
                                    (A.events.off('change', se),
                                        A.events.off('recalculateContent', se),
                                        A.events.off('resizeHandled', se));
                                }
                            ),
                            [se, ne, A.events],
                        );
                        const le = (0, r.useState)(t),
                            ie = le[0],
                            ce = le[1];
                        (bi(() => {
                            if (ie > -1 && C && f && !X) {
                                const e = F.current.get(ie);
                                if (e) {
                                    const t = e.offsetTop - 0.5 * e.offsetHeight;
                                    (A.applyScroll(t, { immediate: !0, reset: !0 }), ce(-1));
                                }
                            }
                        }, [t, C, f, X, A]),
                            bi(() => {
                                A.applyScroll(0, { immediate: !0, reset: !0 });
                            }, [u, A]));
                        const _e = v()(d_.lip, (w === G.bottom || X) && d_.lip__hidden);
                        return o().createElement(
                            'div',
                            { className: v()(d_.base, ue && d_.base__dragging) },
                            o().createElement('div', { className: d_.baseBack }),
                            o().createElement(Ro, {
                                tabs: E,
                                onClick: (e) => {
                                    ($(R.sounds.cust_tab_switch()), s.selectTab(e));
                                },
                                onHoverTab: s.hoverTab,
                                mixClass: d_.tabs,
                            }),
                            o().createElement(
                                'div',
                                { className: d_.filterHeader },
                                o().createElement(
                                    'div',
                                    { className: d_.filterCounter },
                                    o().createElement(lr, {
                                        title:
                                            V &&
                                            o().createElement(
                                                Vu,
                                                { body: E_.customization.resetFilter.tooltip.text() },
                                                o().createElement(
                                                    Pu,
                                                    {
                                                        type: Ou.ghost,
                                                        onClick: s.clearFilter,
                                                        mixClass: v()(d_.filtersClearButton),
                                                    },
                                                    o().createElement('div', { className: d_.filtersClearIcon }),
                                                ),
                                            ),
                                        label: o().createElement(au, {
                                            text: E_.filters.selectedTitle(),
                                            className: d_.filterNumbersLabel,
                                        }),
                                        from: W,
                                        to: z,
                                        isFilterRange: !0,
                                        isGlowVisible: V,
                                        isSelectMode: !1,
                                        className: d_.filterNumbers,
                                        classNames: { counterGlow: d_.counterGlow },
                                        isHideTotalCounter: !V,
                                        isSelectedLimitReached: U > 0,
                                        isAnimationEnabled: U > 0,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: d_.filter },
                                    o().createElement(Cr, { isReverse: !0, buttonSize: m }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: d_.carouselWrapper },
                                c.length > 0
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              Oe.Vertical.Area,
                                              {
                                                  api: A,
                                                  className: v()(d_.scrollArea, X && d_.scrollArea__withoutScroll),
                                                  classNames: {
                                                      content: v()(
                                                          d_.scrollContent,
                                                          X && d_.scrollContent__withoutScroll,
                                                      ),
                                                  },
                                              },
                                              _.map((e, t) => {
                                                  var u;
                                                  const a = g.isProgressionDecalsBannerVisible && e.isProgressive;
                                                  return o().createElement(
                                                      'div',
                                                      { className: d_.categories, key: `${t}` },
                                                      '' !== e.bookmarkName &&
                                                          o().createElement(
                                                              'div',
                                                              {
                                                                  className: d_.category,
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
                                                          { className: d_.slots },
                                                          a &&
                                                              o().createElement(al, {
                                                                  mixClass: d_.slot,
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
                                                                          Lc,
                                                                          m_(
                                                                              {
                                                                                  onSelectItem: J,
                                                                                  onEditItem: Q,
                                                                                  onHoverItem: s.hoverItem,
                                                                                  classMix: d_.slot,
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
                                              { className: d_.scrollbarWrapper },
                                              x &&
                                                  o().createElement(
                                                      'div',
                                                      { className: d_.bookmarksWrapper },
                                                      N.map(({ name: e, position: t, index: u }) =>
                                                          o().createElement(
                                                              Vu,
                                                              { key: `${e}-${u}`, body: e },
                                                              o().createElement('div', {
                                                                  onMouseEnter: Z,
                                                                  onClick: () =>
                                                                      ((e) => {
                                                                          const t = A.getWrapperSize(),
                                                                              u = A.getContainerSize();
                                                                          if (!t || !u) return;
                                                                          const a = D.current.get(e);
                                                                          if (a) {
                                                                              j.playClick();
                                                                              const e =
                                                                                      a.offsetTop + a.offsetHeight / 2,
                                                                                  n = e - (e / u) * (t - 34) - 17;
                                                                              A.scrollPosition.start({
                                                                                  scrollPosition: n,
                                                                              });
                                                                          }
                                                                      })(u),
                                                                  className: d_.bookmark,
                                                                  style: { top: 100 * t + '%' },
                                                              }),
                                                          ),
                                                      ),
                                                  ),
                                              o().createElement(Oe.Vertical.Bar, {
                                                  classNames: { thumb: d_.thumb },
                                                  api: A,
                                              }),
                                          ),
                                      )
                                    : o().createElement(
                                          __,
                                          {
                                              warningHeader: E_.customization.message.header(),
                                              warningDescription: E_.customization.message.description(),
                                              buttonType: Ou.secondary,
                                              onClick: s.clearFilter,
                                              className: d_.emptyState,
                                          },
                                          o().createElement(au, { text: E_.customization.resetFiltersBtn.label() }),
                                      ),
                            ),
                            o().createElement(na, {
                                id: R.views.lobby.customization.CustomizationMoneyBalance('resId'),
                                mixClass: d_.currency,
                            }),
                            o().createElement(
                                'div',
                                { className: d_.closeButton },
                                o().createElement(ze, {
                                    side: 'right',
                                    type: 'close',
                                    caption: E_.customization.closeButton(),
                                    onClick: K,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: d_.priceWrapper },
                                o().createElement('div', { className: _e }),
                                o().createElement(
                                    'div',
                                    { className: d_.price },
                                    h &&
                                        o().createElement(Za, {
                                            price: h,
                                            onResetHandler: s.onClearBasket,
                                            onBackHandler: s.onCancelChanges,
                                            cartParams: q,
                                            onApplyHandler: ee,
                                            buttonSize: m,
                                        }),
                                ),
                            ),
                        );
                    });
                let p_;
                !(function (e) {
                    ((e[(e.UnselectedEmpty = 0)] = 'UnselectedEmpty'),
                        (e[(e.SelectedEmpty = 1)] = 'SelectedEmpty'),
                        (e[(e.UnselectedFilled = 2)] = 'UnselectedFilled'),
                        (e[(e.SelectedFilled = 3)] = 'SelectedFilled'),
                        (e[(e.Preview = 4)] = 'Preview'),
                        (e[(e.Locked = 5)] = 'Locked'),
                        (e[(e.Removed = 6)] = 'Removed'),
                        (e[(e.Edit = 7)] = 'Edit'));
                })(p_ || (p_ = {}));
                const g_ = 'ArrowMarker_base_a2',
                    A_ = 'ArrowMarker_base__scaled_c5',
                    C_ = 'ArrowMarker_content_b3',
                    f_ = 'ArrowMarker_arrow_93',
                    h_ = 'ArrowMarker_arrow__left_88',
                    v_ = 'ArrowMarker_arrow__right_6b',
                    F_ = 'ArrowMarker_arrow__leftPressed_e7',
                    D_ = 'ArrowMarker_arrow__rightPressed_7b',
                    B_ = 'ArrowMarker_arrow__leftDisabled_7d',
                    S_ = 'ArrowMarker_arrow__rightDisabled_11',
                    w_ = 'ArrowMarker_arrowHover_48',
                    y_ = 'ArrowMarker_arrowHover__left_36',
                    k_ = 'ArrowMarker_arrowHover__right_a5',
                    T_ = 'ArrowMarker_arrowHitArea_66',
                    N_ = 'ArrowMarker_arrowHitArea__left_a8',
                    M_ = 'ArrowMarker_arrowHitArea__right_e5';
                function I_() {
                    return (
                        (I_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        I_.apply(this, arguments)
                    );
                }
                let x_;
                !(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(x_ || (x_ = {}));
                const O_ = (0, Le.Pi)(() => {
                        const e = cr(),
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
                            E = er(),
                            b = (e) => ({
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
                                        ($(R.sounds.cust_select()), u.onPressSelectNextItem(e === x_.left));
                                    })(e),
                            });
                        return o().createElement(
                            'div',
                            { className: v()(g_, E > 1 && A_) },
                            o().createElement(
                                'div',
                                { className: C_ },
                                o().createElement('div', { className: v()(f_, h_, d.left && F_, !s && B_) }),
                                o().createElement('div', { className: v()(f_, v_, d.right && D_, !n && S_) }),
                                o().createElement('div', { className: v()(w_, i.left && !d.left && s && y_) }),
                                o().createElement('div', { className: v()(w_, i.right && !d.right && n && k_) }),
                                o().createElement('div', I_({ className: v()(T_, N_) }, b(x_.left))),
                                o().createElement('div', I_({ className: v()(T_, M_) }, b(x_.right))),
                            ),
                        );
                    }),
                    L_ = {
                        base: 'EditMarker_base_77',
                        underline: 'EditMarker_underline_58',
                        underline__1: 'EditMarker_underline__1_bf',
                        underline__2: 'EditMarker_underline__2_a8',
                        underline__3: 'EditMarker_underline__3_7f',
                        underline__errorAnimation: 'EditMarker_underline__errorAnimation_ea',
                        shake: 'EditMarker_shake_85',
                    },
                    R_ = (0, Le.Pi)(() => {
                        const e = cr(),
                            t = e.model,
                            u = e.controls,
                            a = t.computes.getEditData(),
                            n = (0, r.useCallback)(
                                (e) => {
                                    const t = e.which;
                                    if ((t === Yu.n.ENTER && u.onEnterInput(), t >= Yu.n.KEY_0 && t <= Yu.n.KEY_9)) {
                                        const e = t - Yu.n.KEY_1 + 1;
                                        u.onAddChar(String(e));
                                    } else if (t >= Yu.n.NUMPAD_0 && t <= Yu.n.NUMPAD_9) {
                                        const e = t - Yu.n.NUMPAD_0;
                                        u.onAddChar(String(e));
                                    } else
                                        (t === Yu.n.DELETE && u.onDeleteAllChars(),
                                            t === Yu.n.BACKSPACE && u.onRemoveChar());
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
                        const s = a.inscriptionState === Ts.NotAvailableEnter;
                        return o().createElement(
                            'div',
                            { className: L_.base },
                            o().createElement('div', {
                                key: s ? a.startTimestamp : '',
                                className: v()(
                                    L_.underline,
                                    L_[`underline__${a.editDigitsCount}`],
                                    s && L_.underline__errorAnimation,
                                ),
                            }),
                        );
                    }),
                    P_ = {
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
                let H_;
                !(function (e) {
                    ((e.EMBLEM = 'Emblem'), (e.INSCRIPTION = 'Inscription'), (e.PROJECTION_DECAL = 'ProjectionDecal'));
                })(H_ || (H_ = {}));
                const W_ = [H_.EMBLEM, H_.PROJECTION_DECAL, H_.INSCRIPTION],
                    z_ = (0, r.memo)(
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
                                b = (0, r.useState)(!1),
                                p = b[0],
                                g = b[1],
                                A = W_.includes(i);
                            (0, r.useEffect)(() => {
                                ((E.current === p_.Preview && l === p_.UnselectedFilled) ||
                                (E.current === p_.Locked && l === p_.UnselectedEmpty)
                                    ? g(!0)
                                    : g(!1),
                                    (E.current = l));
                            }, [l]);
                            return o().createElement(
                                'div',
                                { className: P_.markerItem },
                                o().createElement(
                                    'div',
                                    {
                                        className: v()(P_.base, P_[`base__state${l}`], e && P_.base__hovered),
                                        onClick: () => {
                                            (l === p_.UnselectedFilled && $(R.sounds.cust_select()),
                                                l === p_.Removed && $(R.sounds.cust_select_remove()),
                                                l === p_.Locked ? ($(R.sounds.cust_negative()), a(t)) : a(t));
                                        },
                                        onMouseEnter: () => {
                                            (j.playHighlight(), n(t, !0));
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
                                    l !== p_.Edit &&
                                        o().createElement(
                                            'div',
                                            { className: P_.defaultMarker },
                                            o().createElement('div', {
                                                className: v()(
                                                    P_.defaultMarkerIcon,
                                                    P_[`defaultMarkerIcon__${i}`],
                                                    p && P_.defaultMarkerIcon__withAnimation,
                                                ),
                                                onAnimationEndCapture: () => {
                                                    g(!1);
                                                },
                                            }),
                                        ),
                                    l === p_.Edit &&
                                        o().createElement(
                                            'div',
                                            { className: P_.editMarkerWrapper },
                                            o().createElement(R_, null),
                                        ),
                                    l === p_.SelectedFilled &&
                                        A &&
                                        o().createElement(
                                            'div',
                                            { className: P_.arrowMarkerWrapper },
                                            o().createElement(O_, null),
                                        ),
                                    o().createElement('div', { className: P_.interactive }),
                                ),
                                u &&
                                    l === p_.Locked &&
                                    o().createElement(
                                        'div',
                                        { className: P_.inscription },
                                        o().createElement(au, {
                                            className: P_.inscriptionText,
                                            text: R.strings.vehicle_customization.notification.slotIsFilled.title(),
                                        }),
                                    ),
                            );
                        },
                    ),
                    V_ = 'MarkersList_markerWrapper_90',
                    U_ = (0, Le.Pi)(({ isSceneDraggingChange: e }) => {
                        const t = cr(),
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
                            b = m[1],
                            p = (0, r.useState)([]),
                            g = p[0],
                            A = p[1],
                            C = (0, r.useRef)(e),
                            f = (0, r.useRef)(_);
                        (0, r.useEffect)(() => {
                            f.current = _;
                        }, [_]);
                        const h = (0, r.useRef)([]),
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
                                return fr(() => {
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
                                    ((h.current = Array(e.length).fill('0')),
                                    A(Array(e.length).fill(0)),
                                    (v.current = Array(e.length).fill(!1)),
                                    b(Array(e.length).fill(!1)),
                                    (f.current = Array(e.length).fill(0)),
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
                                            p = t.isHovered,
                                            g = y.current[u] || { lastOpacityUpdate: 0 },
                                            C = 'flex' === a.style.display;
                                        t.isVisible
                                            ? ((a.style.display = 'flex'),
                                              (g.opacity === s && C) ||
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
                                              (g.x === r && C) || a.style.setProperty('--x', r),
                                              (g.y === o && C) || a.style.setProperty('--y', o),
                                              (g.zIndex === c && C) || a.style.setProperty('--zIndex', c),
                                              (g.scale === l && C) ||
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
                                                  lastOpacityUpdate: g.lastOpacityUpdate || 0,
                                                  lastScaleUpdate: g.lastScaleUpdate || 0,
                                                  areaId: i,
                                                  slotType: _,
                                                  regionIdx: m,
                                                  state: E,
                                                  zIndex: c,
                                              }),
                                              f.current[u] !== E &&
                                                  d((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = E), t);
                                                  }),
                                              h.current[u] !== _ &&
                                                  A((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = _), t);
                                                  }),
                                              v.current[u] !== p &&
                                                  b((e) => {
                                                      const t = [...e];
                                                      return ((t[u] = p), t);
                                                  }),
                                              (f.current[u] = E),
                                              (h.current[u] = _),
                                              (v.current[u] = p))
                                            : (a.style.display = 'none');
                                    }));
                            }));
                        const M = (0, r.useRef)(null),
                            I = (0, r.useCallback)(
                                (e) => {
                                    M.current && clearTimeout(M.current);
                                    const t = w.current[e];
                                    if (!t) return;
                                    if (f.current[e] === p_.Locked)
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
                                    { key: t, className: V_, ref: (e) => (w.current[t] = e) },
                                    o().createElement(z_, {
                                        index: t,
                                        isActiveInscription: B === t,
                                        onMarkerClick: () => I(t),
                                        onMarkerHover: x,
                                        onMarkerDragOut: O,
                                        state: _[t],
                                        isHovered: E[t],
                                        slotType: g[t],
                                        scale: T[t],
                                    }),
                                ),
                            ),
                        );
                    });
                function G_() {
                    return (
                        (G_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        G_.apply(this, arguments)
                    );
                }
                let $_;
                !(function (e) {
                    ((e.CAMOUFLAGE = 'camouflage'),
                        (e.PROJECTION_DECAL = 'projectionDecal'),
                        (e.INSCRIPTION = 'inscription'));
                })($_ || ($_ = {}));
                const j_ = 'mainview:close',
                    X_ = [$_.CAMOUFLAGE, $_.PROJECTION_DECAL],
                    q_ = R.strings.customization,
                    Y_ = R.strings.customization.tooltips.filters;
                viewEnv.clearInternalCacheAfterFinalize();
                (0, Le.Pi)(() => {
                    var e, t;
                    const u = cr(),
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
                        b = l.isHoverVehicleSlot,
                        p = l.isProgressiveItemsViewVisible,
                        g = l.isFilterPopoverOpened,
                        A = l.isOnboardingViewOpened,
                        C = (0, r.useRef)(null),
                        f = n.computes.getStageSwitcher(),
                        h = n.computes.getSelectedTabItemType(),
                        F = f.isVisible,
                        D = f.selectedLevel,
                        S = f.numberOfBullets,
                        w = f.isBulletsBeforeCurrentDisabled,
                        k = f.currentLevel,
                        T = n.toolbarModel.get(),
                        N = T.isToolbarPanelEnabled,
                        M = T.isInscriptionPanelEnabled,
                        I = n.carouselModel.get(),
                        x = I.scrollStartItemId,
                        O = I.isCarouselArrowsHintVisible,
                        L = n.computes.getSelectedItemId(),
                        P = (0, r.useState)(-1),
                        H = P[0],
                        W = P[1],
                        z = (0, r.useRef)({
                            tabId: void 0,
                            scrollStartItemId: void 0,
                            selectedItemId: void 0,
                            firstExpandedItemId: void 0,
                        }),
                        V = (0, r.useState)(!1),
                        U = V[0],
                        G = V[1],
                        j = (0, r.useState)(!1),
                        X = j[0],
                        q = j[1],
                        K = (0, r.useState)(!1),
                        Z = K[0],
                        J = K[1],
                        Q = (0, r.useState)(!1),
                        te = Q[0],
                        ue = Q[1],
                        ae = n.computes.getBuyPrice(),
                        ne = n.computes.getItems(),
                        re = n.computes.getCategories(),
                        oe = n.computes.getArrowsList(),
                        se = n.computes.getTabsItemsList(),
                        le = n.computes.getBillModel(),
                        ie = n.computes.getSeasonsTabsItemsList(),
                        ce = n.computes.getToolbarButtonsList(),
                        _e = n.magneticToolModel.get(),
                        de = n.headerVehicleInfo.get(),
                        me = de.description,
                        Ee = de.isStyleBonusPreviewText,
                        be = de.vehicle,
                        pe = s <= B.Small ? Lu.small : Lu.medium,
                        ge = ea(),
                        Ae = N && !M && !U && !i && !c,
                        Ce = qu(Ae),
                        fe = qu(_e.isEnabled),
                        he = n.computes.getEditData(),
                        ve = !U && !Ae && !he.inscriptionState,
                        Fe = (0, r.useCallback)(
                            (e) => {
                                (W(e || -1), a.onExpandCarousel(!1), G(!1));
                            },
                            [a],
                        ),
                        De = (0, r.useCallback)(
                            (e, t) => {
                                (a.onToolbarItemClick(e, t),
                                    e === Uu.CUSTOMIZATION_SHEET_ACTION_CLOSE && a.onSceneOverChange(!0));
                            },
                            [a],
                        ),
                        Be = (0, r.useCallback)(() => {
                            engine.trigger(j_);
                            const e =
                                n.computes
                                    .getMarkersList()
                                    .filter((e) => '1' === e.state.toString() || '3' === e.state.toString()).length > 0;
                            if (!U) {
                                if (Ae)
                                    return (
                                        a.onToolbarItemClick(Uu.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1),
                                        De(Uu.CUSTOMIZATION_SHEET_ACTION_CLOSE, 0),
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
                                    if (_e.isEnabled) a.onUnselectItem();
                                    else {
                                        if (!e)
                                            return (
                                                i ? a.closeBinEsc() : c ? a.onCloseStyleInfoEsc() : a.onClose(),
                                                () => {
                                                    engine.off(j_);
                                                }
                                            );
                                        a.onSceneClick();
                                    }
                            }
                        }, [a, i, U, _, Ae, c, _e.isEnabled, n.computes, De]);
                    (0, r.useEffect)(() => {
                        p && viewEnv.clearInternalCaches();
                    }, [p]);
                    const Se = Y(
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
                                (s || (s = !(null != (n = a(r)) && n.isFilled)), s && we(r, o));
                            }
                        },
                        [(we = a.onRequestItems)],
                        200,
                    );
                    var we;
                    Ju({ callback: Be, preventPropagation: !1 });
                    const ye = ee(),
                        ke = Y(
                            () => {
                                i ? a.buyItems() : a.onShowBuyWindow();
                            },
                            [i],
                            300,
                        ),
                        Te = (0, r.useCallback)(
                            (e) => {
                                a.selectSeason(e);
                            },
                            [a],
                        ),
                        Ne = (0, r.useCallback)(
                            (e) => {
                                e && a.onSelectItem(e);
                            },
                            [a],
                        ),
                        Me = (0, r.useCallback)(
                            (e) => {
                                !A && a.onSceneOverChange(e);
                            },
                            [a, A],
                        );
                    ((0, r.useEffect)(() => {
                        a.onSceneOverChange(!g);
                    }, [g, a]),
                        (0, r.useEffect)(() => {
                            a.onSceneOverChange(!A);
                        }, [A, a]),
                        (0, r.useEffect)(() => {
                            !fe && _e.isEnabled && U && Fe();
                        }, [Fe, U, _e.isEnabled, fe]),
                        (0, r.useEffect)(() => {
                            Ae && !Ce
                                ? X_.includes(h)
                                    ? $(R.sounds.radial_big())
                                    : $(R.sounds.radial_small())
                                : !Ae &&
                                  Ce &&
                                  (X_.includes(h) ? $(R.sounds.radial_big_close()) : $(R.sounds.radial_small()));
                        }, [Ae, Ce, h]),
                        (0, r.useEffect)(() => {
                            if (ge.isRunning) return () => ge.clear();
                        }, [ge]),
                        (0, r.useEffect)(() => {
                            (i && q(!0),
                                i ||
                                    ge.run(() => {
                                        q(!1);
                                    }, 400));
                        }, [i, ge]),
                        (0, r.useEffect)(() => {
                            (c && (U && Fe(), ue(!0)),
                                c ||
                                    ge.run(() => {
                                        ue(!1);
                                    }));
                        }, [c, ge, U, Fe]));
                    const Ie = Object.fromEntries(Object.entries(le).filter(([e]) => 'buyPrice' !== e)),
                        xe = (0, r.useCallback)(
                            (e) => {
                                a.onStageChange(e);
                            },
                            [a],
                        ),
                        Oe = (0, r.useCallback)(() => {
                            (a.onToolbarItemClick(Uu.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1),
                                a.progressiveInfoButtonClick());
                        }, [a]);
                    (0, r.useEffect)(() => {
                        0 === ne.length && ye.scrollPosition.start({ scrollPosition: 0, reset: !0, immediate: !0 });
                    }, [ye, ne]);
                    const Le = (0, r.useCallback)(() => {
                            (a.onToolbarItemClick(Uu.CUSTOMIZATION_SHEET_ACTION_CLOSE, -1), a.onClose());
                        }, [a]),
                        Re = (0, r.useCallback)(() => {
                            !A && a.onSceneOverChange(!1);
                        }, [a, A]),
                        Pe = (0, r.useCallback)(() => {
                            !A && a.onSceneOverChange(!0);
                        }, [a, A]);
                    return o().createElement(
                        'div',
                        { className: v()(Cl, Z ? Sl : Bl, U && fl), onMouseEnter: Pe, onMouseLeave: Re },
                        o().createElement(
                            'div',
                            { className: hl },
                            U
                                ? o().createElement(b_, {
                                      onCarouselCollapse: Fe,
                                      startScrollItemId: H,
                                      onUpdateItems: Se,
                                      tabId: null == (e = n.computes.getSelectedTab()) ? void 0 : e.id,
                                  })
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      !te &&
                                          o().createElement(Js, {
                                              moveSpace: a.moveSpace,
                                              onSceneOverChange: Me,
                                              onSceneDraggingChange: a.onSceneDraggingChange,
                                              onSceneClick: a.onSceneClick,
                                              onHideElements: (e) => {
                                                  J(e);
                                              },
                                              onResetMagneticTool: a.onUnselectItem,
                                              isHovered: b,
                                              isOnboardingViewOpened: A,
                                          }),
                                      E &&
                                          !i &&
                                          o().createElement(
                                              'div',
                                              { className: Dl },
                                              o().createElement(ze, {
                                                  caption: q_.progression.info(),
                                                  type: 'info',
                                                  onClick: Oe,
                                              }),
                                          ),
                                      !c &&
                                          !i &&
                                          o().createElement(
                                              'div',
                                              { className: wl },
                                              o().createElement(ze, {
                                                  side: 'right',
                                                  type: 'close',
                                                  caption: q_.customization.closeButton(),
                                                  onClick: Le,
                                              }),
                                          ),
                                      c &&
                                          o().createElement(
                                              'div',
                                              { className: di },
                                              o().createElement(ze, {
                                                  side: 'left',
                                                  type: 'back',
                                                  caption: q_.customization.backButton(),
                                                  onClick: a.onCloseStyleInfoEsc,
                                              }),
                                          ),
                                      !i &&
                                          !te &&
                                          o().createElement(
                                              'div',
                                              { className: v()(xl, Z ? Ll : Ol), 'data-magnetic-tool-support': !0 },
                                              o().createElement(U_, { isSceneDraggingChange: Z }),
                                          ),
                                      Boolean(he.inscriptionState) &&
                                          o().createElement('div', { className: Zl }, o().createElement($s, he)),
                                      o().createElement(
                                          'div',
                                          { className: v()(vl, i && Fl) },
                                          o().createElement(Al, be),
                                          !te && o().createElement(au, { text: me, className: v()(yl, Ee && kl) }),
                                      ),
                                      o().createElement(
                                          'div',
                                          { className: v()(ni, (i || c) && ri) },
                                          o().createElement(
                                              'div',
                                              { className: Tl },
                                              o().createElement(
                                                  'div',
                                                  { className: Nl },
                                                  o().createElement(
                                                      'div',
                                                      { className: Gl, onMouseEnter: Re, onMouseLeave: Pe },
                                                      o().createElement(
                                                          Vu,
                                                          {
                                                              body: _
                                                                  ? Y_.openPanelDisabledButton()
                                                                  : Y_.openPanelButton(),
                                                          },
                                                          o().createElement(
                                                              'div',
                                                              { className: mi },
                                                              o().createElement(
                                                                  Pu,
                                                                  {
                                                                      type: Ou.ghost,
                                                                      size: pe,
                                                                      mixClass: Vl,
                                                                      onClick: () => {
                                                                          if (C.current) {
                                                                              const e =
                                                                                  C.current.getFirstVisibleItemId();
                                                                              W(e || -1);
                                                                          }
                                                                          (a.onExpandCarousel(!0), G(!0));
                                                                      },
                                                                      disabled: _,
                                                                  },
                                                                  o().createElement(au, {
                                                                      className: Ul,
                                                                      text: q_.filters.openPanelButton(),
                                                                  }),
                                                              ),
                                                          ),
                                                      ),
                                                      o().createElement('div', { className: jl }),
                                                      o().createElement(Cr, { buttonSize: pe }),
                                                  ),
                                                  o().createElement(
                                                      'div',
                                                      { className: $l, onMouseEnter: Re, onMouseLeave: Pe },
                                                      ae &&
                                                          o().createElement(Za, {
                                                              price: ae,
                                                              onResetHandler: a.onClearBasket,
                                                              onBackHandler: a.onCancelChanges,
                                                              onApplyHandler: ke,
                                                              cartParams: Ie,
                                                              buttonSize: pe,
                                                          }),
                                                  ),
                                              ),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: Ml, onMouseEnter: Re, onMouseLeave: Pe },
                                              o().createElement('div', { className: Il }),
                                              o().createElement(Ro, {
                                                  isEditable: _,
                                                  tabs: se,
                                                  onClick: (e) => {
                                                      ($(R.sounds.cust_tab_switch()), a.selectTab(e));
                                                  },
                                                  onHoverTab: a.hoverTab,
                                                  onEditClose: a.closeEditItem,
                                              }),
                                              ne.length > 0
                                                  ? o().createElement(Qc, {
                                                        ref: C,
                                                        scrollApi: ye,
                                                        items: ne,
                                                        arrowsList: oe,
                                                        categories: re,
                                                        onClick: Ne,
                                                        onHoverItem: a.hoverItem,
                                                        onEditClick: a.onEditItem,
                                                        onArrowClick: a.onPressSelectNextItem,
                                                        isCarouselArrowsHintVisible: O,
                                                        scrollStartItemId: x,
                                                        selectedItemId: L,
                                                        firstExpandedItemId: H,
                                                        tabId:
                                                            null == (t = n.computes.getSelectedTab()) ? void 0 : t.id,
                                                        lastScrollState: z,
                                                        isEditable: _,
                                                        onUpdateItems: Se,
                                                    })
                                                  : o().createElement(
                                                        __,
                                                        {
                                                            warningHeader: q_.customization.message.header(),
                                                            warningDescription: q_.customization.message.description(),
                                                            buttonType: Ou.secondary,
                                                            onClick: a.clearFilter,
                                                            className: Rl,
                                                        },
                                                        o().createElement(au, {
                                                            text: q_.customization.resetFiltersBtn.label(),
                                                        }),
                                                    ),
                                          ),
                                      ),
                                  ),
                            o().createElement(
                                'div',
                                {
                                    className: v()(Xl, !i && (Z ? Yl : ql)),
                                    'data-magnetic-tool-support': !0,
                                    onMouseEnter: Re,
                                    onMouseLeave: Pe,
                                },
                                o().createElement(_l, { tabs: ie, onClick: Te, isMinimised: U || i || te }),
                            ),
                            !U &&
                                o().createElement(al, {
                                    onClick: a.clickDecalsBanner,
                                    onMouseEnter: Re,
                                    onMouseLeave: Pe,
                                    mixClass: v()(Pl, (i || c) && Hl, !(i || c) && (Z ? zl : Wl)),
                                }),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: v()(oi, i && si) },
                                    o().createElement(
                                        'div',
                                        { className: li },
                                        ae &&
                                            o().createElement(Za, {
                                                price: ae,
                                                onResetHandler: a.onClearBasket,
                                                onBackHandler: a.onCancelChanges,
                                                onApplyHandler: ke,
                                                onAutoRentChange: a.onAutoRentChange,
                                                onAutoRentHintClose: a.onAutoRentHintClose,
                                                cartParams: Ie,
                                                buttonSize: pe,
                                                className: ii,
                                            }),
                                    ),
                                ),
                            d &&
                                !U &&
                                !i &&
                                !c &&
                                o().createElement(
                                    'div',
                                    { className: ti, 'data-magnetic-tool-support': !0 },
                                    o().createElement(ks, {
                                        itemType: h,
                                        isSelected: m,
                                        onSelectApplyingAllSeasons: a.onApplyToAllSeasonsChange,
                                    }),
                                ),
                            Ae &&
                                o().createElement(
                                    'div',
                                    {
                                        className: v()(Jl, F && ei),
                                        'data-magnetic-tool-support': !0,
                                        onMouseEnter: Re,
                                        onMouseLeave: Pe,
                                    },
                                    o().createElement(Ds, {
                                        toolbarItems: ce,
                                        onItemClick: De,
                                        onCloseAction: a.onClose,
                                    }),
                                ),
                            F &&
                                !i &&
                                !c &&
                                o().createElement(
                                    'div',
                                    { className: v()(Jl, Ql), onMouseEnter: Re, onMouseLeave: Pe },
                                    o().createElement(ro, {
                                        numberOfBullets: S,
                                        currentNumber: k,
                                        selectedNumber: D,
                                        isBulletsBeforeCurrentDisabled: w,
                                        onChange: xe,
                                        switcherType: 2 === S ? Gu.text : Gu.digital,
                                        size: no.small,
                                        styleID: 594,
                                    }),
                                ),
                            X &&
                                o().createElement(na, {
                                    id: R.views.lobby.customization.CustomizationBinSubview('resId'),
                                    mixClass: v()(ui, i && ai),
                                }),
                            te &&
                                o().createElement(na, {
                                    id: R.views.lobby.customization.CustomizationStyleInfoView('resId'),
                                    mixClass: v()(ci, c && _i),
                                }),
                            ve &&
                                o().createElement(
                                    'div',
                                    { className: Kl },
                                    o().createElement(Xs, G_({}, _e, { selectedTab: h })),
                                ),
                        ),
                    );
                });
                const K_ = 'Slot_base_de',
                    Z_ = 'Slot_base__big_d6',
                    J_ = 'Slot_base__locked_8d',
                    Q_ = 'Slot_inActive_24',
                    ed = 'Slot_border_6c',
                    td = 'Slot_base__selected_75',
                    ud = 'Slot_topLeftCorner_3f',
                    ad = 'Slot_shadowBottom_a1',
                    nd = 'Slot_base__hasExtraName_c3',
                    rd = 'Slot_shadowTop_14',
                    od = 'Slot_base__topLeftCornerVisible_2c',
                    sd = 'Slot_base__unSelected_2d',
                    ld = 'Slot_image_c8',
                    id = 'Slot_ribbon_9e',
                    cd = 'Slot_icon_2d',
                    _d = 'Slot_icon__rewindable_44',
                    dd = 'Slot_icon__special_ee',
                    md = 'Slot_icon__alert_51',
                    Ed = 'Slot_icon__unHistorical_ce',
                    bd = 'Slot_icon__fantastical_0f',
                    pd = 'Slot_icon__serialNumber_19',
                    gd = 'Slot_icon__progression_db',
                    Ad = 'Slot_hover_22',
                    Cd = 'Slot_base__hovered_eb',
                    fd = 'Slot_price_7e',
                    hd = 'Slot_styleName_5b',
                    vd = (0, r.memo)(
                        ({
                            itemID: e,
                            intCD: t,
                            typeId: u,
                            isDisabled: a,
                            soundHover: n = R.sounds.highlight(),
                            isSelected: s,
                            customizationDisplayType: l,
                            tooltip: i,
                            isSpecial: c,
                            showAlert: _,
                            isDim: d,
                            isFromStorage: m,
                            icon: E,
                            isWide: b,
                            quantity: p,
                            buyPrice: g,
                            extraName: A,
                            classMix: C,
                            progressionLevel: f,
                            isProgressionRewindEnabled: h,
                            onSelectItem: F,
                            isRental: D,
                            rentalInfoText: B,
                            autoRentEnabled: S,
                            isWithSerialNumber: w,
                            isMainType: y,
                            season: k,
                        }) => {
                            var T;
                            const N = (0, r.useState)(!1),
                                M = N[0],
                                I = N[1],
                                x = (0, r.useMemo)(() => -1 === t, [t]),
                                O = (0, r.useState)(!x && !a),
                                L = O[0],
                                P = O[1],
                                H = _ || c || (l && !x) || f > -1,
                                W = (0, r.useCallback)(() => {
                                    !n || x || a || (I(!0), $(n));
                                }, [x, a, n]),
                                z = (0, r.useCallback)(() => {
                                    x ||
                                        a ||
                                        ($(s ? R.sounds.cust_select_remove() : R.sounds.cust_color_apply()),
                                        e && F(e, !s, k));
                                }, [F, x, a, s, e, k]),
                                V = v()(
                                    K_,
                                    C,
                                    M && Cd,
                                    b && Z_,
                                    s && !x && td,
                                    !s && sd,
                                    H && od,
                                    A && nd,
                                    (x || a) && J_,
                                ),
                                U = (0, r.useMemo)(
                                    () => ({ itemID: e, tooltip: i, showInventoryBlock: !x, progressionLevel: f }),
                                    [x, e, f, i],
                                ),
                                G = (0, r.useCallback)(() => {
                                    P(!1);
                                }, [P]);
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        engine.on(j_, G),
                                        engine.on(ku, () => {
                                            engine.off(j_, G);
                                        }),
                                        () => {
                                            engine.off(j_, G);
                                        }
                                    ),
                                    [G],
                                ),
                                o().createElement(
                                    Au,
                                    { args: U, isEnabled: L },
                                    o().createElement(
                                        'div',
                                        {
                                            className: V,
                                            onMouseEnter: W,
                                            onMouseLeave: () => {
                                                I(!1);
                                            },
                                            onClick: z,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: ed },
                                            o().createElement(
                                                'div',
                                                { className: ld },
                                                o().createElement(Ii, { isDim: d, icon: E }),
                                            ),
                                            o().createElement('div', { className: rd }),
                                            (A || g.price[0]) && o().createElement('div', { className: ad }),
                                            y && o().createElement('div', { className: id }),
                                            o().createElement(
                                                'div',
                                                { className: ud },
                                                _ && o().createElement('div', { className: v()(cd, md) }),
                                                c && o().createElement('div', { className: v()(cd, dd) }),
                                                w && o().createElement('div', { className: v()(cd, pd) }),
                                                1 === l && !x && o().createElement('div', { className: v()(cd, Ed) }),
                                                2 === l && !x && o().createElement('div', { className: v()(cd, bd) }),
                                                !h &&
                                                    o().createElement(Yi, {
                                                        typeId: u,
                                                        progressionLevel: f,
                                                        classMix: v()(cd, gd),
                                                    }),
                                                h && o().createElement('div', { className: v()(cd, _d) }),
                                            ),
                                            o().createElement(au, { className: hd, text: A }),
                                            o().createElement(Gi, {
                                                classMix: fd,
                                                isStub: x,
                                                price: g.price,
                                                quantity: p,
                                                isRental: D,
                                                rentalInfoText: B,
                                                autoRentEnabled: S,
                                                isFromStorage: m,
                                                hasDiscount: Boolean(null == (T = g.discount[0]) ? void 0 : T.value),
                                                locked: !1,
                                            }),
                                            o().createElement('span', { className: Ad }),
                                            (!s || a) && o().createElement('div', { className: Q_ }),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Fd = 'Title_base_16',
                    Dd = 'Title_title_65',
                    Bd = 'Title_count_ac',
                    Sd = 'Title_count__empty_39',
                    wd = 'Title_icon_39',
                    yd = 'Title_bonus_37',
                    kd = 'Title_blink_da',
                    Td = 'Title_blink__first_74',
                    Nd = R.strings.customization.cart,
                    Md = R.images.gui.maps.icons.customization.cart,
                    Id = ['summer', 'winter', 'desert'],
                    xd = ({ count: e, name: t, selectedSeason: u, bonusValue: a }) => {
                        const n = qu(u);
                        return o().createElement(
                            'div',
                            { className: Fd },
                            'all_seasons' === t
                                ? Id.map((e) =>
                                      o().createElement('div', {
                                          key: e,
                                          className: wd,
                                          style: { backgroundImage: `url(${Md.$dyn(e)})` },
                                      }),
                                  )
                                : o().createElement('div', {
                                      className: wd,
                                      style: { backgroundImage: `url(${Md.$dyn(t)})` },
                                  }),
                            o().createElement(au, { text: Nd.seasonsName.$dyn(`${t}`), className: Dd }),
                            e >= 0 && o().createElement(au, { text: `(${e})`, className: v()(Bd, 0 === e && Sd) }),
                            a &&
                                o().createElement(au, {
                                    text: Nd.bonus(),
                                    format: { binding: { bonus: a } },
                                    className: yd,
                                }),
                            u === t && o().createElement('div', { className: v()(kd, !n && Td) }),
                        );
                    };
                function Od() {
                    return (
                        (Od =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Od.apply(this, arguments)
                    );
                }
                viewEnv.clearInternalCacheAfterFinalize();
                const Ld = (0, Le.Pi)(() => {
                    const e = ot(),
                        t = e.controls,
                        u = e.model,
                        a = u.root.get().selectedSeason,
                        n = u.computes.getSeasonsItemsList(),
                        s = Oe.Vertical.useVerticalScrollApi(),
                        l = (0, r.useState)(!1),
                        i = l[0],
                        c = l[1],
                        _ = (0, r.useState)(!1),
                        d = _[0],
                        m = _[1],
                        E = (0, r.useState)(!1),
                        b = E[0],
                        p = E[1],
                        g = (0, r.useRef)(null);
                    !(function (e, t) {
                        const u = e.contentRef,
                            a = e.wrapperRef,
                            n = e.scrollPosition,
                            o = e.clampPosition,
                            s = e.animationScroll,
                            l = e.events,
                            i = (0, r.useState)(Re),
                            c = i[0],
                            _ = i[1];
                        ((0, r.useEffect)(() => {
                            const e = u.current;
                            e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                        }, [u, c.type]),
                            (0, r.useEffect)(() => {
                                if ('dragging' !== c.type) return;
                                const e = (e) => {
                                        const r = u.current,
                                            l = a.current;
                                        if (!r || !l) return;
                                        const i = c.positionFrom - e.screenY,
                                            _ = c.previousScrollPosition + i;
                                        n.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: o(r, _),
                                                    from: { scrollPosition: s.scrollPosition.get() },
                                                },
                                                t && { config: t },
                                            ),
                                        );
                                    },
                                    r = () => {
                                        (window.removeEventListener('mousemove', e), _({ type: 'scrollingToEnd' }));
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', r),
                                    () => {
                                        (window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', r));
                                    }
                                );
                            }, [s.scrollPosition, o, u, c, n, a, t]),
                            (0, r.useEffect)(() => {
                                if ('scrollingToEnd' !== c.type) return;
                                const e = () => {
                                    _(Re);
                                };
                                return (s.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                            }, [s.scrollPosition, c.type, l]),
                            (0, r.useEffect)(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = (e) => {
                                    (e.stopPropagation(),
                                        0 === e.button &&
                                            _({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: s.scrollPosition.get(),
                                            }));
                                };
                                return (
                                    e.addEventListener('mousedown', t),
                                    () => e.removeEventListener('mousedown', t)
                                );
                            }, [s.scrollPosition, u]));
                    })(s);
                    const A = (0, r.useMemo)(() => n.some((e) => Boolean(e.items.items.length)), [n]);
                    (0, r.useEffect)(() => {
                        const e = () => {
                            const e = s.animationScroll.scrollPosition.goal;
                            c(0 !== e);
                            const t = s.getBounds()[1];
                            var u, a, n;
                            (m(t !== e),
                                g.current &&
                                    p(
                                        ((u = g.current),
                                        (null != (a = null == (n = u.parentElement) ? void 0 : n.offsetHeight)
                                            ? a
                                            : 0) < u.offsetHeight),
                                    ));
                        };
                        return (
                            e(),
                            s.events.on('change', e),
                            s.events.on('resizeHandled', e),
                            () => {
                                (s.events.off('change', e), s.events.off('resizeHandled', e));
                            }
                        );
                    }, [s]);
                    const C = v()(ct, i && _t, d && dt, i && d && mt);
                    return o().createElement(
                        'div',
                        { className: st },
                        o().createElement('div', { className: lt }),
                        A
                            ? o().createElement(
                                  o().Fragment,
                                  null,
                                  i && o().createElement('div', { className: ft }),
                                  o().createElement(
                                      'div',
                                      { className: C },
                                      o().createElement(
                                          Oe.Vertical.Area,
                                          { api: s },
                                          o().createElement(
                                              'div',
                                              { className: v()(Et, !b && bt), ref: g },
                                              n.map((e) =>
                                                  e.items.items.length > 0
                                                      ? o().createElement(
                                                            'div',
                                                            { key: e.name, className: pt },
                                                            o().createElement(xd, {
                                                                count: e.count,
                                                                name: e.name,
                                                                bonusValue: e.bonusValue,
                                                                selectedSeason: a,
                                                            }),
                                                            o().createElement('div', { className: gt }),
                                                            o().createElement(
                                                                'div',
                                                                { className: At },
                                                                e.items.items.map((u, a) =>
                                                                    o().createElement(
                                                                        vd,
                                                                        Od(
                                                                            {
                                                                                key: `${u.intCD}_${a}`,
                                                                                onSelectItem: t.selectItem,
                                                                                season: e.name,
                                                                                classMix: ht,
                                                                            },
                                                                            u,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        )
                                                      : null,
                                              ),
                                          ),
                                      ),
                                      o().createElement(Oe.Vertical.Bar, { api: s, classNames: { base: Ct } }),
                                  ),
                              )
                            : o().createElement(cu, null),
                        o().createElement(
                            'div',
                            { className: it },
                            o().createElement($e, {
                                onCloseCallback: () => {
                                    t.close();
                                },
                            }),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    const e = document.getElementById('root').getAttribute('data-root-id');
                    H().render(
                        o().createElement(
                            rt,
                            { options: { rootId: Number(e) } },
                            o().createElement(L, null, o().createElement(Ld, null)),
                        ),
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
        (__webpack_require__.j = 690),
        (() => {
            var e = { 690: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(64));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
