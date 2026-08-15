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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => V });
                var a = {};
                (t.r(a), t.d(a, { mouse: () => _, onResize: () => l }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => m,
                        getSize: () => d,
                        graphicsQuality: () => E,
                    }));
                var n = {};
                (t.r(n), t.d(n, { getBgUrl: () => g, getTextureUrl: () => A }));
                var s = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(s),
                    t.d(s, {
                        addModelObserver: () => f,
                        addPreloadTexture: () => B,
                        children: () => n,
                        displayStatus: () => F,
                        displayStatusIs: () => G,
                        events: () => D,
                        extraSize: () => U,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => P,
                        getBrowserTexturePath: () => v,
                        getDisplayStatus: () => Q,
                        getScale: () => y,
                        getSize: () => S,
                        getViewGlobalPosition: () => R,
                        isClientAccessible: () => k,
                        isEventHandled: () => O,
                        isFocused: () => I,
                        pxToRem: () => N,
                        remToPx: () => T,
                        resize: () => x,
                        sendEvent: () => b,
                        setAnimateWindow: () => M,
                        setEventHandled: () => L,
                        setInputPaddingsRem: () => C,
                        setSidePaddingsRem: () => w,
                        whenTutorialReady: () => q,
                    }));
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && i(!1);
                        }
                        function t() {
                            e.enabled && i(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : i(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            s = c[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            a(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(n, o),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && i(!0);
                            },
                            disableOutside() {
                                e.enabled && i(!1);
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
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function g(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    D = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    p = ['args'],
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, p);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    b = {
                        close(e) {
                            h('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            h(64);
                        },
                        move(e) {
                            h(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function v(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function f(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function x(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function R(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: T(u.x), y: T(u.y) };
                }
                function P() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function y() {
                    return viewEnv.getScale();
                }
                function N(e) {
                    return viewEnv.pxToRem(e);
                }
                function T(e) {
                    return viewEnv.remToPx(e);
                }
                function M(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function I() {
                    return viewEnv.isFocused();
                }
                function k() {
                    return viewEnv.isClientAccessible();
                }
                function L() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(F).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === F[u]), e), {}),
                    U = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    V = { view: s, client: r };
            },
            521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                    })(r || (r = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(67);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => s, B0: () => i, ry: () => p });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const r = a;
                var n = t(358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    A = t(67);
                const g = ['args'];
                function F(e, u, t, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            F(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    b = () => h(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(572);
                const v = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(d),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, b);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            881: (e, u, t) => {
                'use strict';
                var a = t(179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(67);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
                    const a = (function (e, u) {
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
                        r = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    _ = c.width,
                    d = c.height,
                    m = Object.assign({ width: _, height: d }, l(_, d, o)),
                    E = (0, a.createContext)(m),
                    A = ['children'],
                    g = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const r = (0, a.useContext)(E),
                            s = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            d = r.largeWidth,
                            m = r.mediumWidth,
                            g = r.smallWidth,
                            F = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            p = r.largeHeight,
                            h = r.mediumHeight,
                            b = r.smallHeight,
                            B = r.extraSmallHeight,
                            C = { extraLarge: D, large: p, medium: h, small: b, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return n(u, t, C);
                            if (t.largeWidth && d) return n(u, t, C);
                            if (t.mediumWidth && m) return n(u, t, C);
                            if (t.smallWidth && g) return n(u, t, C);
                            if (t.extraSmallWidth && F) return n(u, t, C);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && b) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                ((g.defaultProps = {
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
                    (0, a.memo)(g));
                const F = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(E),
                        t = (0, a.useState)(u),
                        n = t[0],
                        i = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: a }, l(t, a, o)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(E.Provider, { value: _ }, e);
                });
                var D = t(483),
                    p = t.n(D),
                    h = t(926),
                    b = t.n(h);
                let B, C, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const f = () => {
                        const e = (0, a.useContext)(E),
                            u = e.width,
                            t = e.height,
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
                                        return C.ExtraLarge;
                                    case e.largeWidth:
                                        return C.Large;
                                    case e.mediumWidth:
                                        return C.Medium;
                                    case e.smallWidth:
                                        return C.Small;
                                    case e.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: b().SMALL_WIDTH,
                        [C.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [C.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_HEIGHT,
                        [v.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [v.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [B.ExtraSmall]: '',
                        [B.Small]: b().SMALL,
                        [B.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [B.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [B.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, w);
                        const n = f(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', S({ className: p()(t, x[s], P[o], y[i]) }, a), u);
                    },
                    T = ['children'],
                    M = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, T);
                        return r().createElement(F, null, r().createElement(N, t, u));
                    };
                var I = t(493),
                    k = t.n(I),
                    L = t(282);
                const O = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    },
                    H = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Q, G;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Q || (Q = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(G || (G = {})));
                const U = ({ size: e = Q.Default, classMix: u }) =>
                        r().createElement('div', { className: p()(H.background, H[`background__${e}`], u) }),
                    q = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    V = ({ size: e }) => {
                        const u = p()(q.base, q[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    $ = {
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
                    W = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const o = p()(
                                    $.base,
                                    $[`base__${e}`],
                                    t && $.base__disabled,
                                    n && $.base__finished,
                                    s && $.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return r().createElement(
                                'div',
                                { className: o, style: a, ref: u },
                                r().createElement('div', { className: $.pattern }),
                                r().createElement('div', { className: $.gradient }),
                                i && r().createElement(V, { size: e }),
                            );
                        },
                    ),
                    z = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(W, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                let j, X;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(j || (j = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(X || (X = {})));
                const Y = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                _ = (0, a.useState)(X.Idle),
                                d = _[0],
                                m = _[1],
                                E = d === X.In,
                                A = d === X.End,
                                g = d === X.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (g && !t)
                                    return O(() => {
                                        F(X.In);
                                    }, u);
                            }, [F, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return O(() => {
                                            (i && i(), F(X.End));
                                        }, e + u);
                                }, [F, E, i, u, e]));
                            const D = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: h },
                                      r().createElement(
                                          'div',
                                          { style: g ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(V, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    K = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(W, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    r().createElement(Y, {
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
                    Z = (e) => (e ? { left: 0 } : { right: 0 }),
                    J = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ee = (e) => ({ transitionDuration: `${e}ms` }),
                    ue = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < n,
                                d = (0, a.useState)(j.Idle),
                                m = d[0],
                                E = d[1],
                                A = m === j.End,
                                g = m === j.Idle,
                                F = m === j.Grow,
                                D = m === j.Shrink,
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                b = (0, a.useCallback)(
                                    (e, u) =>
                                        O(() => {
                                            h(e);
                                        }, u),
                                    [h],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? b(j.Grow, u)
                                        : F
                                          ? b(j.Shrink, e)
                                          : D
                                            ? b(j.End, e)
                                            : void (A && i && i());
                            }, [b, t, A, F, g, D, i, u, e]);
                            const B = (0, a.useMemo)(() => Object.assign({ width: '100%' }, ee(e), Z(_)), [_, e]),
                                C = (0, a.useMemo)(() => Object.assign({ width: '0%' }, ee(e), Z(_)), [_, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, J(_, n), ee(e)), [n, _, e]),
                                f = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, J(_, n), ee(e)),
                                    [n, _, o, e],
                                );
                            if (A) return null;
                            const w = p()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: g ? v : f, className: w },
                                r().createElement(
                                    'div',
                                    { style: D ? C : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(V, { size: s }),
                                ),
                            );
                        },
                    ),
                    te = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                E = d[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === j.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(W, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    r().createElement(ue, {
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
                    ae = ['onComplete', 'onEndAnimation'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ne = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ae);
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case G.Simple:
                                return r().createElement(K, re({}, n, { onEndAnimation: l, isComplete: o }));
                            case G.Growing:
                                return r().createElement(te, re({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    se = ['onEndAnimation'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ie = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, se);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        r().createElement(ne, oe({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return r().createElement(z, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(ie, c)
                                : r().createElement(ne, le({ key: `${n}-${u}` }, c));
                        },
                    ),
                    _e = (e) => ({
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
                    de = (e, u, t) => (t < e ? e : t > u ? u : t),
                    me = (e, u, t) => ('number' == typeof t ? (de(0, u, t) / u) * 100 : e),
                    Ee = {
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
                    Ae = {
                        freezed: !1,
                        withStack: !1,
                        type: G.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ge = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Ee,
                            size: t = Q.Default,
                            animationSettings: n = Ae,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: _,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: E,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (de(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: me(a, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return r().createElement(
                                'div',
                                { className: p()(H.base, H[`base__${t}`]), style: _e(u) },
                                !o && r().createElement(U, { size: t, classMix: i }),
                                r().createElement(ce, {
                                    size: t,
                                    lineRef: _,
                                    disabled: s,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Fe = 'styles_timingFunction_8a',
                    De = Object.assign({}, Ae, {
                        line: { delay: 0, duration: 0 },
                        delta: { className: Fe, delay: 0, duration: 0 },
                    }),
                    pe = Object.assign({}, Ae, {
                        line: { delay: 0, duration: 500 },
                        delta: { className: Fe, delay: 0, duration: 500 },
                    }),
                    he = pe.line.duration + pe.delta.duration,
                    be = Object.assign({}, Ae, {
                        line: { delay: 0, duration: 250 },
                        delta: { className: Fe, delay: 0, duration: 250 },
                    }),
                    Be = R.images.tank_academy.gui.maps.icons.mainView.backgrounds,
                    Ce = (0, a.memo)(
                        ({ classNames: e, selectedQuest: u, isWithVehicle: t, isVehicleAcquired: n, onLoaded: s }) => {
                            const o = (0, a.useState)(''),
                                i = o[0],
                                l = o[1],
                                c = f().mediaSize,
                                _ = (0, a.useMemo)(() => {
                                    const e = Be.default();
                                    return u && t
                                        ? ((a = n ? 'hangar_completed' : 'hangar'),
                                          Be.$dyn(c < B.Small ? 'small' : 'big').$dyn(a))
                                        : e;
                                    var a;
                                }, [u, t, c, n]);
                            var d, m;
                            return (
                                (d = _),
                                (m = s),
                                (0, a.useEffect)(() => {
                                    if (!m) return;
                                    const e = new Image();
                                    return (
                                        e.addEventListener('load', m),
                                        e.addEventListener('error', m),
                                        (e.src = d),
                                        () => {
                                            (e.removeEventListener('load', m), e.removeEventListener('error', m));
                                        }
                                    );
                                }, [m, d]),
                                (0, a.useEffect)(() => O(() => l(_), 200), [_]),
                                r().createElement(
                                    'div',
                                    { className: p()('Background_base_f9', e) },
                                    Boolean(i) &&
                                        r().createElement('div', {
                                            className: 'Background_image_bb',
                                            style: { backgroundImage: `url(${i})` },
                                        }),
                                )
                            );
                        },
                    );
                let ve, fe, we, Se, xe, Re, Pe, ye, Ne, Te;
                function Me() {}
                function Ie(e) {
                    return e;
                }
                function ke() {
                    return !1;
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
                        (e.PostStamp = 'giftsystem_5_stamp'),
                        (e.Quests = 'quests'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.GoldenTicket = 'goldenticket'),
                        (e.LbStyleProgress = 'lbStyleProgress'),
                        (e.RewardsSlots = 'rewardsSlots'));
                })(ve || (ve = {})),
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
                    })(fe || (fe = {})),
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
                    })(we || (we = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Se || (Se = {})),
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
                    })(xe || (xe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Re || (Re = {})),
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
                    })(Pe || (Pe = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(ye || (ye = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'));
                    })(Te || (Te = {})),
                    console.log);
                var Le = t(915);
                function Oe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const He = (e) => (0 === e ? window : window.subViews.get(e)),
                    Qe = () => (e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: o, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    _ = (t, a, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = He,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(o(n)), l);
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
                                                                                    return Oe(e, u);
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
                                                                                          ? Oe(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Le.observable.box(a, { equals: ke });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Le.action)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Le.observable.box(a, { equals: ke });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Le.action)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Le.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Le.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = Le.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Le.action)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: t, model: d, externalModel: i, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    E = m[0],
                                    A = m[1],
                                    g = (0, a.useState)(() => _(n, o, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? D(_(E, o, l)) : (d.current = !0);
                                    }, [l, E, o]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    };
                function Ge(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Ue = Ge;
                function qe(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                const Ve = (e) =>
                    null !== e && 'object' == typeof e
                        ? 'CoherentArrayProxy' === e.constructor.name
                            ? qe(e, (e) => ('object' == typeof e ? Ve(e) : e))
                            : Array.isArray(e)
                              ? e.map((e) => ('object' == typeof e ? Ve(e) : e))
                              : Object.fromEntries(
                                    Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Ve(u) : u]),
                                )
                        : e;
                var $e = t(517);
                const We = 'vehicle',
                    ze = 'tokenVehicle';
                var je = t(364);
                class Xe extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? je.B3.GOLD : je.B3.INTEGRAL;
                        const u = je.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Xe.defaultProps = { format: 'integral' };
                const Ye = [
                        ve.Items,
                        ve.Equipment,
                        ve.Xp,
                        ve.XpFactor,
                        ve.Blueprints,
                        ve.BlueprintsAny,
                        ve.Goodies,
                        ve.Berths,
                        ve.Slots,
                        ve.Tokens,
                        ve.CrewSkins,
                        ve.CrewBooks,
                        ve.Customizations,
                        ve.CreditsFactor,
                        ve.TankmenXp,
                        ve.TankmenXpFactor,
                        ve.FreeXpFactor,
                        ve.BattleToken,
                        ve.PremiumUniversal,
                        ve.NaturalCover,
                        ve.BpCoin,
                        ve.BattlePassSelectToken,
                        ve.BattlaPassFinalAchievement,
                        ve.BattleBadge,
                        ve.BonusX5,
                        ve.CrewBonusX3,
                        ve.NewYearFillers,
                        ve.NewYearInvoice,
                        ve.EpicSelectToken,
                        ve.Comp7TokenWeeklyReward,
                        ve.Comp7TokenCouponReward,
                        ve.BattleBoosterGift,
                        ve.CosmicLootboxCommon,
                        ve.CosmicLootboxSilver,
                        ve.SelectableBonus,
                        ve.PostStamp,
                        ve.PremiumPlusUniversal,
                        ve.GoldenTicket,
                        ve.RewardsSlots,
                    ],
                    Ke = [ve.Gold, ve.Credits, ve.Crystal, ve.FreeXp],
                    Ze = [ve.BattlePassPoints],
                    Je = [ve.PremiumPlus, ve.Premium];
                let eu;
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
                })(eu || (eu = {}));
                const uu = (e) =>
                        Ye.includes(e)
                            ? Se.MULTI
                            : Ke.includes(e)
                              ? Se.CURRENCY
                              : Ze.includes(e)
                                ? Se.NUMBER
                                : Je.includes(e)
                                  ? Se.PREMIUM_PLUS
                                  : Se.STRING,
                    tu = ['engravings', 'backgrounds'],
                    au = ['engraving', 'background'],
                    ru = (e, u = we.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case we.S600x450:
                                        return 'c_600x450';
                                    case we.S400x300:
                                        return 'c_400x300';
                                    case we.S296x222:
                                        return 'c_296x222';
                                    case we.S232x174:
                                        return 'c_232x174';
                                    case we.Big:
                                        return 'c_80x80';
                                    case we.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case we.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case we.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = tu[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(au[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case we.S600x450:
                                            return 'c_600x450';
                                        case we.S400x300:
                                            return 'c_400x300';
                                        case we.S296x222:
                                            return 'c_296x222';
                                        case we.S232x174:
                                            return 'c_232x174';
                                        case we.S180x135:
                                            return 'big';
                                        case we.Big:
                                        case we.S80x80:
                                            return 'c_80x80';
                                        case we.Small:
                                        case we.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${n}`;
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
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case we.Mini:
                                            return eu.s32;
                                        case we.Small:
                                        case we.S48x48:
                                            return eu.s48;
                                        case we.S80x80:
                                        case we.Big:
                                            return eu.s80;
                                        case we.S128x100:
                                            return eu.s116;
                                        case we.S180x135:
                                        case we.S232x174:
                                        case we.S296x222:
                                            return eu.s296;
                                        case we.S400x300:
                                            return eu.s400;
                                        case we.S600x450:
                                            return eu.s600;
                                    }
                                })(u)}`;
                            case ve.StyleProgress:
                            case ve.LbStyleProgress:
                                return su(n, u, Ne.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    nu = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    su = (e, u, t) => {
                        const a = R.images.gui.maps.icons.quests.bonuses.$dyn(u),
                            r = a.$dyn(e);
                        return String(null != r ? r : a.$dyn(t));
                    },
                    ou = [ze, We],
                    iu = (e) => e.some((e) => ou.includes(e.name)),
                    lu = (e) => R.strings.tank_academy.mainView.questRewards.descriptions.$dyn(e),
                    cu = (e) => {
                        switch (e) {
                            case Te.Done:
                                return Te.InProgress;
                            case Te.InProgress:
                            default:
                                return Te.Unavailable;
                        }
                    },
                    _u = ({ reward: e, imageSize: u, showValue: t, showUniversalPremium: a, isTooltipEnabled: r }) =>
                        Object.assign({}, e, {
                            value: t ? e.value : ' ',
                            valueType: t ? uu(e.name) : void 0,
                            image: ru(
                                Object.assign({}, e, {
                                    name: a && e.name === ve.PremiumPlus ? ve.PremiumUniversal : e.name,
                                }),
                                u,
                            ),
                            tooltipArgs: r
                                ? nu({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 })
                                : void 0,
                        });
                let du;
                !(function (e) {
                    ((e.Scrolling = 'scrolling'),
                        (e.ToDone = 'toDone'),
                        (e.ToDoneFinished = 'toDoneFinished'),
                        (e.ToInProgress = 'toInProgress'),
                        (e.None = 'none'));
                })(du || (du = {}));
                const mu = Qe()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {
                                        progression: e.primitives(
                                            ['countCompleted', 'totalQuests', 'lastSeenProgress'],
                                            'questProgress',
                                        ),
                                        questGroups: e.array('quest_groups', []),
                                    },
                                    e.primitives(['isRewardsViewOpen', 'unobtainedVehiclesCount']),
                                ),
                                t = Le.observable.box(!1),
                                a = Le.observable.box(du.None),
                                r = Le.observable.box(void 0),
                                n = (0, $e.computedFn)(
                                    () => {
                                        return ((e = u.questGroups.get()), Ve(e));
                                        var e;
                                    },
                                    { equals: ke },
                                ),
                                s = (0, $e.computedFn)((e) => n()[e], { equals: ke }),
                                o = (e) => {
                                    const u = n();
                                    let t = e;
                                    for (let e = 0; e < u.length; e++) {
                                        var a;
                                        const r = null == (a = u[e]) ? void 0 : a.quests;
                                        if (r) {
                                            if (t < r.length) return { questGroupIndex: e, questIndex: t };
                                            t -= r.length;
                                        }
                                    }
                                    return { questGroupIndex: -1, questIndex: -1 };
                                },
                                i = () => {
                                    var e, t, a;
                                    const r = n(),
                                        s = null != (e = u.progression.countCompleted.get()) ? e : 0,
                                        i = null != (t = u.progression.totalQuests.get()) ? t : 0;
                                    if ((null != (a = u.progression.lastSeenProgress.get()) ? a : 0) < s) {
                                        const e = o(s - 1),
                                            u = o(s);
                                        return Object.assign({}, e, {
                                            activeQuestGroupIndex: u.questGroupIndex,
                                            activeQuestIndex: u.questIndex,
                                        });
                                    }
                                    if (s === i && i > 0) {
                                        var l, c;
                                        const e = r.length - 1,
                                            u =
                                                (null != (l = null == (c = r[e]) ? void 0 : c.quests.length) ? l : 0) -
                                                1;
                                        return {
                                            questGroupIndex: e,
                                            questIndex: u,
                                            activeQuestGroupIndex: e,
                                            activeQuestIndex: u,
                                        };
                                    }
                                    for (let e = 0; e < r.length; e++) {
                                        var _;
                                        const u = null == (_ = r[e]) ? void 0 : _.quests;
                                        if (u)
                                            for (let t = 0; t < u.length; t++)
                                                if (u[t].state === Te.InProgress)
                                                    return {
                                                        questGroupIndex: e,
                                                        questIndex: t,
                                                        activeQuestGroupIndex: e,
                                                        activeQuestIndex: t,
                                                    };
                                    }
                                    return {
                                        questGroupIndex: -1,
                                        questIndex: -1,
                                        activeQuestGroupIndex: -1,
                                        activeQuestIndex: -1,
                                    };
                                },
                                l = i(),
                                c = l.questGroupIndex,
                                _ = l.questIndex,
                                d = l.activeQuestGroupIndex,
                                m = l.activeQuestIndex,
                                E = Le.observable.box(d),
                                A = Le.observable.box(m),
                                g = Le.observable.box(c),
                                F = Le.observable.box(_),
                                D = (0, Le.action)((e) => E.set(e)),
                                p = (0, Le.action)((e) => A.set(e)),
                                h = (0, Le.action)((e) => g.set(e)),
                                b = (0, Le.action)((e) => F.set(e));
                            (0, Le.autorun)(() => {
                                const e = i();
                                -1 !== e.questGroupIndex &&
                                    -1 !== e.questIndex &&
                                    (h(e.questGroupIndex),
                                    b(e.questIndex),
                                    D(e.activeQuestGroupIndex),
                                    p(e.activeQuestIndex));
                            });
                            const B = (0, $e.computedFn)(
                                    (e, u) => {
                                        const t = e >= 0 && s(e);
                                        return t ? t.quests[u] : null;
                                    },
                                    { equals: ke },
                                ),
                                C = (0, $e.computedFn)(() => B(g.get(), F.get()), { equals: ke }),
                                v = (0, $e.computedFn)(
                                    (e, u) => {
                                        var t;
                                        const a = B(e, u);
                                        return null !=
                                            (t = null == a ? void 0 : a.rewards.find((e) => ou.includes(e.name)))
                                            ? t
                                            : null;
                                    },
                                    { equals: ke },
                                ),
                                f = (0, $e.computedFn)(
                                    () => {
                                        var e;
                                        const u = C();
                                        return null !=
                                            (e = null == u ? void 0 : u.rewards.find((e) => ou.includes(e.name)))
                                            ? e
                                            : null;
                                    },
                                    { equals: ke },
                                ),
                                w = (0, $e.computedFn)(
                                    (e) => {
                                        const u = n();
                                        let t = e;
                                        for (let e = 0; e < u.length; e++) {
                                            var a;
                                            const r = null == (a = u[e]) ? void 0 : a.quests;
                                            if (r) {
                                                if (t < r.length) return B(e, t);
                                                t -= r.length;
                                            }
                                        }
                                        return null;
                                    },
                                    { equals: ke },
                                ),
                                S = (0, $e.computedFn)((e) => {
                                    const u = w(e);
                                    return !!u && u.maxProgress > 0;
                                }),
                                x = (0, $e.computedFn)(
                                    ({
                                        questGroupIndex: e,
                                        questIndex: u,
                                        imageSize: t = we.Small,
                                        isTooltipEnabled: a,
                                        showValue: r,
                                        showUniversalPremium: n = !1,
                                    }) => {
                                        const s = B(e, u),
                                            o = s && iu(s.rewards),
                                            i = s
                                                ? qe(
                                                      s.rewards.filter((e) => !ou.includes(e.name)),
                                                      (e) =>
                                                          _u({
                                                              reward: e,
                                                              imageSize: t,
                                                              showValue: r,
                                                              showUniversalPremium: n,
                                                              isTooltipEnabled: a,
                                                          }),
                                                  )
                                                : [],
                                            l = i.filter((e) => e.isEssential).length,
                                            c = l <= 2 ? l : Math.min(i.length, 3) - Number(i.length > 3),
                                            _ =
                                                a &&
                                                (({ count: e, hasVehicle: u, questGroupIndex: t, questIndex: a }) =>
                                                    nu(
                                                        {
                                                            showCount: e + (u ? 1 : 0),
                                                            questGroupIndex: t,
                                                            questIndex: a,
                                                        },
                                                        R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                    ))({ count: c, questGroupIndex: e, questIndex: u, hasVehicle: o });
                                        return { data: i, count: c, boxRewardTooltip: _ };
                                    },
                                    { equals: ke },
                                ),
                                P = (0, $e.computedFn)(
                                    ({ imageSize: e, isTooltipEnabled: u, showValue: t }) =>
                                        x({
                                            questGroupIndex: g.get(),
                                            questIndex: F.get(),
                                            imageSize: e,
                                            isTooltipEnabled: u,
                                            showValue: t,
                                        }),
                                    { equals: ke },
                                ),
                                y = (0, $e.computedFn)(() => {
                                    var e, t;
                                    const a = null != (e = u.progression.countCompleted.get()) ? e : 0,
                                        r = null != (t = u.progression.totalQuests.get()) ? t : 0;
                                    return a === r && r > 0;
                                }),
                                N = (0, $e.computedFn)(() => {
                                    const e = u.progression.countCompleted.get(),
                                        t = u.progression.lastSeenProgress.get();
                                    return void 0 !== e && t < e;
                                });
                            return Object.assign({}, u, {
                                isLoaded: t,
                                questSwitchAnimationPhase: a,
                                selectedQuestGroupIndex: g,
                                selectedQuestIndex: F,
                                currentQuestGroupIndex: E,
                                currentQuestIndex: A,
                                lastPlayedToDoneAnimationQuestIndex: r,
                                computes: {
                                    getQuestGroups: n,
                                    getQuestGroup: s,
                                    getQuest: B,
                                    getSelectedQuest: C,
                                    getQuestRewardsProps: x,
                                    getSelectedQuestRewardsProps: P,
                                    getQuestVehicle: v,
                                    getSelectedQuestVehicle: f,
                                    isAllQuestsCompleted: y,
                                    getIsQuestSwitchAnimationNeeded: N,
                                    isQuestWithProgress: S,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            showView: e.createCallbackNoArgs('onShowView'),
                            close: e.createCallbackNoArgs('onClose'),
                            showInfoPage: e.createCallbackNoArgs('onShowInfoPage'),
                            viewVehicles: e.createCallbackNoArgs('onViewVehicles'),
                            seenAnimation: e.createCallbackNoArgs('onSeenAnimation'),
                            setQuestSwitchAnimationPhase: (0, Le.action)((e) => u.questSwitchAnimationPhase.set(e)),
                            showQuestTutorial: e.createCallback((e) => ({ questNumber: e }), 'onShowQuestTutorial'),
                            showQuestVehicle: e.createCallback((e) => ({ questNumber: e }), 'onShowQuestVehicle'),
                            useQuestToken: e.createCallback((e) => ({ questNumber: e }), 'onUseQuestToken'),
                            loaded: (0, Le.action)(() => u.isLoaded.set(!0)),
                            selectQuest: (0, Le.action)((e, t) => {
                                (u.selectedQuestGroupIndex.set(e), u.selectedQuestIndex.set(t));
                            }),
                            setLastPlayedToDoneAnimationQuestIndex: (0, Le.action)((e) =>
                                u.lastPlayedToDoneAnimationQuestIndex.set(e),
                            ),
                            selectCurrentQuest: (0, Le.action)(() => {
                                (u.selectedQuestGroupIndex.set(u.currentQuestGroupIndex.get()),
                                    u.selectedQuestIndex.set(u.currentQuestIndex.get()));
                            }),
                        }),
                    ),
                    Eu = mu[0],
                    Au = mu[1];
                function gu(e) {
                    engine.call('PlaySound', e);
                }
                const Fu = {
                        playHighlight() {
                            gu('highlight');
                        },
                        playClick() {
                            gu('play');
                        },
                        playYes() {
                            gu('yes1');
                        },
                    },
                    Du = {
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
                let pu, hu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(pu || (pu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(hu || (hu = {})));
                const bu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const g = (0, a.useRef)(null),
                        F = (0, a.useState)(t),
                        D = F[0],
                        h = F[1],
                        b = (0, a.useState)(!1),
                        B = b[0],
                        C = b[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, a.useCallback)(() => {
                            s || (g.current && (g.current.focus(), h(!0)));
                        }, [s]),
                        x = (0, a.useCallback)(
                            (e) => {
                                D && null !== g.current && !g.current.contains(e.target) && h(!1);
                            },
                            [D],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                s || (null !== i && gu(i), c && c(e), w(!0));
                            },
                            [s, i, c],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                s || (m && m(e), C(!1));
                            },
                            [s, m],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                s || (null !== l && gu(l), d && d(e), t && S(), C(!0));
                            },
                            [s, l, d, S, t],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                s || (E && E(e), C(!1));
                            },
                            [s, E],
                        ),
                        k = p()(
                            Du.base,
                            Du[`base__${n}`],
                            {
                                [Du.base__disabled]: s,
                                [Du[`base__${u}`]]: u,
                                [Du.base__focus]: D,
                                [Du.base__highlightActive]: B,
                                [Du.base__firstHover]: f,
                            },
                            o,
                        ),
                        L = p()(Du.state, Du.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            h(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: k,
                                onMouseEnter: y,
                                onMouseMove: N,
                                onMouseUp: T,
                                onMouseDown: M,
                                onMouseLeave: I,
                                onClick: P,
                            },
                            n !== pu.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Du.back }),
                                    r().createElement('span', { className: Du.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: L },
                                r().createElement('span', { className: Du.stateDisabled }),
                                r().createElement('span', { className: Du.stateHighlightHover }),
                                r().createElement('span', { className: Du.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Du.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                bu.defaultProps = { type: pu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Bu = (0, a.memo)(bu),
                    Cu = {
                        base: 'Action_base_64',
                        base__medium: 'Action_base__medium_b1',
                        glow: 'Action_glow_fe',
                        glow__wide: 'Action_glow__wide_fe',
                        glow__normal: 'Action_glow__normal_54',
                        base__withGlow: 'Action_base__withGlow_4c',
                        button: 'Action_button_58',
                    },
                    vu = (0, a.memo)(
                        ({
                            children: e,
                            hasGlow: u,
                            size: t = hu.small,
                            onClick: a,
                            onMouseDown: n,
                            onMouseMove: s,
                            onMouseUp: o,
                            onMouseLeave: i,
                        }) =>
                            r().createElement(
                                'div',
                                { className: p()(Cu.base, u && Cu.base__withGlow, { [Cu[`base__${t}`]]: t }) },
                                r().createElement('div', { className: p()(Cu.glow, Cu.glow__wide) }),
                                r().createElement('div', { className: p()(Cu.glow, Cu.glow__normal) }),
                                r().createElement(
                                    Bu,
                                    {
                                        type: pu.ghost,
                                        mixClass: Cu.button,
                                        size: t,
                                        onClick: a,
                                        onMouseMove: s,
                                        onMouseUp: o,
                                        onMouseLeave: i,
                                        onMouseDown: n,
                                    },
                                    e,
                                ),
                            ),
                    ),
                    fu = (e) => {
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
                    wu = [];
                function Su(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), wu)
                    );
                }
                function xu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var Ru = t(552);
                let Pu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Pu || (Pu = {}));
                const yu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Nu = (({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                r = a[0],
                                n = a[1];
                            return de(r, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? yu : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                E = (() => {
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
                                                var a,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return xu(e, u);
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
                                                                              ? xu(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var a = 0;
                                                            return function () {
                                                                return a >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[a++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(a = r()).done;
                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let r,
                                                    n = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function _() {
                                                        ((s = Date.now()), t.apply(l, i));
                                                    }
                                                    n ||
                                                        (a && !r && _(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? _()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (n = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ru.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), E.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                p = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const r = F.scrollPosition.get(),
                                            n = (null != (a = F.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, u * t + n + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            D.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, _.animationConfig, F.scrollPosition],
                                ),
                                b = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            r = p(u, e, a);
                                        h(r);
                                    },
                                    [h, p, _.step],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(r(e)),
                                            d.current && E.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, b, E],
                                ),
                                C = ((e, u = []) => {
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
                                        fu(() => {
                                            const e = d.current;
                                            e &&
                                                (h(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, F.scrollPosition.goal],
                                ),
                                v = Su(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && h(u, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            const f = (0, a.useCallback)((e) => E.trigger('isThumbDraggingChanged', e), [E]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: B,
                                    applyScroll: h,
                                    applyStepTo: b,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    handleIsThumbDragging: f,
                                    events: { on: E.on, off: E.off },
                                }),
                                [F.scrollPosition, h, b, f, E.off, E.on, v, B, D, _.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
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
                        getDirection: (e) => (e.deltaY > 1 ? Pu.Next : Pu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Tu = 'HorizontalBar_base__nonActive_82',
                    Mu = 'disable',
                    Iu = { pending: !1, offset: 0 },
                    ku = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Lu = () => {},
                    Ou = (e, u) => Math.max(20, e.offsetWidth * u),
                    Hu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ku, onDrag: n = Lu }) => {
                        const s = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(Iu),
                            m = d[0],
                            E = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    _ = de(0, 1, n / (r - a)),
                                    d = (u.offsetWidth - Ou(u, s)) * _;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Mu),
                                                    void i.current.classList.remove(Mu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Mu),
                                                    void i.current.classList.add(Mu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Mu), i.current.classList.remove(Mu));
                                        }
                                    })(d));
                            },
                            F = Su(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const n = Math.min(1, a / r);
                                    ((u.style.width = `${Ou(t, n)}px`),
                                        (u.style.display = 'flex'),
                                        s.current &&
                                            (1 === n ? s.current.classList.add(Tu) : s.current.classList.remove(Tu)));
                                })(),
                                    g());
                            });
                        ((0, a.useEffect)(() => fu(F)),
                            (0, a.useEffect)(
                                () =>
                                    fu(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Lu;
                                        const a = () => {
                                            (t(), (t = fu(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            s = c.current;
                                        if (!a || !r || !s) return;
                                        const o = u.screenX - m.offset - r.getBoundingClientRect().x,
                                            i = (o / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(Iu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]));
                        const D = (function (e, u, t = []) {
                                const r = (0, a.useRef)(0),
                                    n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                                (0, a.useEffect)(() => n, [n]);
                                const s = (null != t ? t : []).concat([u]);
                                return [
                                    (0, a.useCallback)((t) => {
                                        ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                                    }, s),
                                    n,
                                ];
                            })((u) => e.applyStepTo(u), _, [e]),
                            h = D[0],
                            b = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const B = (e) => {
                            e.target.classList.contains(Mu) || gu('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: p()('HorizontalBar_base_49', u.base), ref: s, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: p()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Mu) || 0 !== e.button || (gu('play'), h(Pu.Next));
                                },
                                onMouseUp: b,
                                ref: o,
                                onMouseEnter: B,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: p()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = c.current;
                                        a &&
                                            0 === u.button &&
                                            (gu('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = c.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? Pu.Prev : Pu.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: B,
                                },
                                r().createElement('div', { ref: c, className: p()('HorizontalBar_thumb_fd', u.thumb) }),
                                r().createElement('div', { className: p()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            r().createElement('div', {
                                className: p()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Mu) || 0 !== e.button || (gu('play'), h(Pu.Prev));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Qu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Gu = ({ api: e, className: u, classNames: t, children: n, style: s }) => (
                        (0, a.useEffect)(() => fu(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: p()(Qu.base, u), style: s },
                            r().createElement(
                                'div',
                                {
                                    className: p()(Qu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: p()(Qu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((Gu.Bar = Hu),
                    (Gu.Default = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: s,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Qu.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return r().createElement(
                            'div',
                            { className: p()(Qu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: p()(Qu.defaultScrollArea, s) },
                                r().createElement(Gu, { className: i, api: d, classNames: o }, e),
                            ),
                            r().createElement(Hu, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    }),
                    (Gu.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => fu(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: p()(Qu.base, u) },
                            r().createElement(
                                'div',
                                { className: p()(Qu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                r().createElement(
                                    'div',
                                    { className: p()(Qu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                var Uu = t(887),
                    qu = t.n(Uu);
                const Vu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    $u = (e) => e.includes('_') && ((e) => Vu.includes(e))(e.split('_').at(-1)),
                    Wu = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    zu = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if ($u(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const n = Wu.indexOf(u),
                                    s = (-1 !== n ? Vu.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => Vu.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    ju = (e, u = zu) => {
                        const t = (
                            (e, u = zu) =>
                            (t) => {
                                const n = f().mediaSize,
                                    s = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => $u(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    Xu = {
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
                    Yu = [
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
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                Object.keys(qu());
                const Zu = {
                        XL: { mt: Xu.mt__XL, mr: Xu.mr__XL, mb: Xu.mb__XL, ml: Xu.ml__XL },
                        LG: { mt: Xu.mt__LG, mr: Xu.mr__LG, mb: Xu.mb__LG, ml: Xu.ml__LG },
                        MDp: { mt: Xu.mt__MDp, mr: Xu.mr__MDp, mb: Xu.mb__MDp, ml: Xu.ml__MDp },
                        MD: { mt: Xu.mt__MD, mr: Xu.mr__MD, mb: Xu.mb__MD, ml: Xu.ml__MD },
                        SMp: { mt: Xu.mt__SMp, mr: Xu.mr__SMp, mb: Xu.mb__SMp, ml: Xu.ml__SMp },
                        SM: { mt: Xu.mt__SM, mr: Xu.mr__SM, mb: Xu.mb__SM, ml: Xu.ml__SM },
                        XS: { mt: Xu.mt__XS, mr: Xu.mr__XS, mb: Xu.mb__XS, ml: Xu.ml__XS },
                    },
                    Ju = (Object.keys(Zu), ['mt', 'mr', 'mb', 'ml']),
                    et = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ut = ju((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            _ = e.mb,
                            d = void 0 === _ ? s : _,
                            m = e.ml,
                            E = void 0 === m ? s : m,
                            A = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            D = void 0 === F ? (A ? 'column' : g && 'row') || void 0 : F,
                            h = e.flexStart,
                            b = e.center,
                            B = e.flexEnd,
                            C = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (h ? 'flex-start' : b && 'center') ||
                                      (B && 'flex-end') ||
                                      (C && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            x = void 0 === S ? (h ? 'flex-start' : b && 'center') || (B && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            P = e.wrap,
                            y = e.flexWrap,
                            N = void 0 === y ? (P ? 'wrap' : void 0) : y,
                            T = e.grow,
                            M = e.shrink,
                            I = e.flex,
                            k = void 0 === I ? (T || M ? `${T ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : I,
                            L = e.style,
                            O = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Yu);
                        const Q = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    u = ((e) =>
                                        Ju.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(Zu[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        Ju.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[et[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, L, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: R,
                                        display: D || x ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, i, c, d, E, L, k, R, D, N, w, x]),
                            G = Q.computedStyle,
                            U = Q.computedClassNames;
                        return r().createElement('div', Ku({ className: p()(Xu.base, ...U, u), style: G }, H), O);
                    });
                let tt;
                function at(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(tt || (tt = {}));
                const rt = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    nt = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    st = (e, u, t = tt.left) => e.split(u).reduce(t === tt.left ? rt : nt, []),
                    ot = (() => {
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
                    it = ['zh_cn', 'zh_sg', 'zh_tw'],
                    lt = ({ binding: e, text: u = '', classMix: t, alignment: n = tt.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = tt.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return it.includes(t)
                                                                ? ot(e)
                                                                : ((e, u = tt.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          st(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(st(e, a, tt.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ct = t(532),
                    _t = t.n(ct);
                const dt = {
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
                    mt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                Object.keys(qu());
                const At = Object.keys(_t()),
                    gt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ft = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Dt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    pt =
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
                            'heading-H56': gt,
                            'heading-H36': gt,
                            'heading-H28': Ft,
                            'heading-H24': Ft,
                            'heading-H24R': Ft,
                            'heading-H22': Ft,
                            'heading-H20R': Ft,
                            'heading-H18': Ft,
                            'heading-H15': Dt,
                            'heading-H14': Dt,
                            'paragraph-P24': Ft,
                            'paragraph-P18': Ft,
                            'paragraph-P16': Ft,
                            'paragraph-P14': Dt,
                            'paragraph-P12': Dt,
                            'paragraph-P10': Dt,
                        }),
                    ht =
                        (Object.keys(pt),
                        (e) =>
                            e
                                ? ((e) => At.includes(e))(e)
                                    ? { colorClassName: dt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    bt = ju((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            d = e.mb,
                            m = void 0 === d ? o : d,
                            E = e.ml,
                            A = void 0 === E ? o : E,
                            g = e.style,
                            F = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, mt);
                        const h = (0, a.useMemo)(() => {
                                const e = ht(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, a), colorClassName: u };
                            }, [g, s]),
                            b = h.computedStyle,
                            B = h.colorClassName;
                        return r().createElement(
                            ut,
                            Et(
                                {
                                    className: p()(dt.base, t && dt[t], B, n),
                                    style: b,
                                    mt: !0 === l ? pt[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? pt[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? pt[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? pt[t || 'paragraph-P16'].ml : A,
                                },
                                D,
                            ),
                            void 0 !== F ? r().createElement(lt, Et({}, F, { text: u })) : u,
                        );
                    }),
                    Bt = [
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
                function Ct(e) {
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
                const vt = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: je.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ft = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            h = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Bt);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, a.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [D],
                            ),
                            v = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (vt(t, E, { isMouseEvent: !0, on: !0, arguments: Ct(r) }, C),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, E, r, C, p]),
                            f = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        vt(t, E, { on: !1 }, C),
                                        B.current.isVisible && h && h(),
                                        (B.current.isVisible = !1));
                                }
                            }, [t, E, C, h]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && f();
                            }, [g, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
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
                                                          ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    wt = ['children'];
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const xt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, wt);
                        return r().createElement(
                            ft,
                            St(
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
                    Rt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                const yt = R.views.common.tooltip_window.simple_tooltip_content,
                    Nt = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Rt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, s, i]);
                        return r().createElement(
                            ft,
                            Pt(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? yt.SimpleTooltipHtmlContent('resId') : yt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const Mt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Nt, u, a);
                        const n = u.contentId,
                            s = u.args,
                            o = null == s ? void 0 : s.contentId;
                        return n || o
                            ? r().createElement(ft, Tt({}, u, { contentId: n || o }), a)
                            : r().createElement(xt, u, a);
                    },
                    It = {
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
                    kt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = we.Big,
                        special: n,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case xe.BATTLE_BOOSTER:
                                    case xe.BATTLE_BOOSTER_REPLACE:
                                        return Re.BATTLE_BOOSTER;
                                }
                            })(n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case xe.BATTLE_BOOSTER:
                                        return Pe.BATTLE_BOOSTER;
                                    case xe.BATTLE_BOOSTER_REPLACE:
                                        return Pe.BATTLE_BOOSTER_REPLACE;
                                    case xe.BUILT_IN_EQUIPMENT:
                                        return Pe.BUILT_IN_EQUIPMENT;
                                    case xe.EQUIPMENT_PLUS:
                                        return Pe.EQUIPMENT_PLUS;
                                    case xe.EQUIPMENT_TROPHY_BASIC:
                                        return Pe.EQUIPMENT_TROPHY_BASIC;
                                    case xe.EQUIPMENT_TROPHY_UPGRADED:
                                        return Pe.EQUIPMENT_TROPHY_UPGRADED;
                                    case xe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Pe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case xe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Pe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case xe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Pe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case xe.PROGRESSION_STYLE_UPGRADED_1:
                                        return Pe.PROGRESSION_STYLE_UPGRADED_1;
                                    case xe.PROGRESSION_STYLE_UPGRADED_2:
                                        return Pe.PROGRESSION_STYLE_UPGRADED_2;
                                    case xe.PROGRESSION_STYLE_UPGRADED_3:
                                        return Pe.PROGRESSION_STYLE_UPGRADED_3;
                                    case xe.PROGRESSION_STYLE_UPGRADED_4:
                                        return Pe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Se.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Se.CURRENCY:
                                    case Se.NUMBER:
                                        return r().createElement(Xe, { format: 'integral', value: Number(e) });
                                    case Se.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: p()(It.base, It[`base__${a}`], l), style: i },
                            r().createElement(
                                Mt,
                                { tooltipArgs: _, className: It.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: p()(It.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: p()(It.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: p()(It.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: p()(It.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    It.info,
                                                    It[`info__${e}`],
                                                    o === Se.MULTI && It.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Mt,
                                    { tooltipArgs: d },
                                    r().createElement('div', {
                                        className: p()(It.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Lt = 'QuestRewards_label_c1',
                    Ot = 'QuestRewards_description_2e',
                    Ht = 'QuestRewards_overlay_2f',
                    Qt = 'QuestRewards_reward_wrapper_b9',
                    Gt = 'QuestRewards_icon_8d',
                    Ut = 'QuestRewards_icon__big_db';
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Vt = R.strings.tank_academy.mainView.questRewards,
                    $t = (0, a.memo)(
                        ({
                            classNames: e,
                            imageSize: u,
                            rewards: t,
                            showAdditionalInfo: n,
                            showOverlayImage: s,
                            maxRewards: o = 0,
                            showCustomBox: i,
                            questState: l,
                        }) => {
                            const c = p()('QuestRewards_base_bb', null == e ? void 0 : e.base),
                                _ = t.count && t.count < t.data.length,
                                d = { info: null == e ? void 0 : e.rewardInfo, image: 'QuestRewards_rewardImage_bf' },
                                m = p()(
                                    'QuestRewards_reward_de',
                                    l === Te.Done && 'QuestRewards_reward__withOverlay_ec',
                                    null == e ? void 0 : e.reward,
                                ),
                                E = t.data.slice(0, t.count),
                                A = (0, a.useMemo)(
                                    () =>
                                        _
                                            ? i
                                                ? `R.images.tank_academy.gui.maps.icons.mainView.questCard.box.${u === we.Small ? we.Small : we.Big}`
                                                : `R.images.gui.maps.icons.quests.bonuses.${we.Small}.default`
                                            : '',
                                    [_, i, u],
                                ),
                                g = (e, t) =>
                                    r().createElement(
                                        'div',
                                        { key: t, className: m },
                                        r().createElement(
                                            'div',
                                            { className: Qt },
                                            r().createElement(kt, qt({ size: u }, e, { classNames: d })),
                                            s &&
                                                r().createElement(
                                                    'div',
                                                    { className: Ht },
                                                    r().createElement('div', {
                                                        className: p()(Gt, u !== we.Small && Ut),
                                                    }),
                                                ),
                                        ),
                                        n &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(bt, { className: Lt, text: e.label }),
                                                r().createElement(bt, { className: Ot, text: lu(e.name) }),
                                            ),
                                    ),
                                F = i
                                    ? ''
                                    : ((D = R.strings.tooltips.quests.awards.additional.bottom()),
                                      (h = { count: t.data.length - o }),
                                      D.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                          const u = 0 === e.indexOf('%') ? 2 : 1;
                                          return String(h[e.slice(u, -u)]);
                                      }));
                            var D, h;
                            return r().createElement(
                                'div',
                                { className: c },
                                _
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          E.map((e, u) => g(e, u)),
                                          r().createElement(
                                              'div',
                                              { className: m },
                                              r().createElement(
                                                  'div',
                                                  { className: Qt },
                                                  r().createElement(kt, {
                                                      name: 'more',
                                                      image: A,
                                                      size: u,
                                                      value: F,
                                                      tooltipArgs: t.boxRewardTooltip,
                                                      classNames: d,
                                                  }),
                                                  s &&
                                                      r().createElement(
                                                          'div',
                                                          { className: Ht },
                                                          r().createElement('div', {
                                                              className: p()(Gt, u !== we.Small && Ut),
                                                          }),
                                                      ),
                                              ),
                                              n &&
                                                  r().createElement(
                                                      r().Fragment,
                                                      null,
                                                      r().createElement(bt, { className: Lt, text: Vt.box.name() }),
                                                      r().createElement(bt, { className: Ot, text: lu('box') }),
                                                  ),
                                          ),
                                      )
                                    : E.map((e, u) => g(e, u)),
                            );
                        },
                    ),
                    Wt = (0, L.observer)(({ questGroupIndex: e, questIndex: u, classNames: t, questState: a }) => {
                        const n = Au().model.computes.getQuestRewardsProps({
                            questGroupIndex: e,
                            questIndex: u,
                            showUniversalPremium: !0,
                        });
                        return r().createElement(
                            'div',
                            { className: t },
                            r().createElement($t, {
                                classNames: { reward: 'Rewards_reward_25' },
                                rewards: n,
                                imageSize: we.Small,
                                showCustomBox: !0,
                                questState: a,
                            }),
                        );
                    }),
                    zt = {
                        base: 'Quest_base_9b',
                        card: 'Quest_card_2b',
                        card__hasVehicle: 'Quest_card__hasVehicle_f6',
                        hangar: 'Quest_hangar_4d',
                        hangar_dimmer: 'Quest_hangar_dimmer_f5',
                        background: 'Quest_background_8f',
                        background__main: 'Quest_background__main_f7',
                        card__done: 'Quest_card__done_92',
                        card__inProgress: 'Quest_card__inProgress_e4',
                        card__final: 'Quest_card__final_24',
                        card__hovered: 'Quest_card__hovered_45',
                        background__top: 'Quest_background__top_a4',
                        background__visible: 'Quest_background__visible_e5',
                        icon: 'Quest_icon_40',
                        icon__check: 'Quest_icon__check_f2',
                        icon__lock: 'Quest_icon__lock_8a',
                        card__locked: 'Quest_card__locked_82',
                        arrow: 'Quest_arrow_38',
                        corners: 'Quest_corners_08',
                        corner: 'Quest_corner_ad',
                        corner__topLeft: 'Quest_corner__topLeft_1d',
                        corner__topRight: 'Quest_corner__topRight_07',
                        corner__bottomLeft: 'Quest_corner__bottomLeft_d6',
                        corner__bottomRight: 'Quest_corner__bottomRight_30',
                        marks: 'Quest_marks_f1',
                        mark: 'Quest_mark_15',
                        mark__top: 'Quest_mark__top_2a',
                        mark__down: 'Quest_mark__down_dc',
                        shine: 'Quest_shine_c0',
                        shine__active: 'Quest_shine__active_f8',
                        shine__done: 'Quest_shine__done_82',
                        questNumber: 'Quest_questNumber_a5',
                        card__selected: 'Quest_card__selected_28',
                        divider: 'Quest_divider_58',
                        vehicle: 'Quest_vehicle_b8',
                        vehicle__premium: 'Quest_vehicle__premium_45',
                        level: 'Quest_level_87',
                        rewards: 'Quest_rewards_f3',
                    },
                    jt = [zt.corner__topLeft, zt.corner__topRight, zt.corner__bottomLeft, zt.corner__bottomRight],
                    Xt = (0, L.observer)(({ groupIndex: e, index: u, classNames: t, questsRef: n, isVisible: s }) => {
                        const o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1],
                            c = Au(),
                            _ = c.model,
                            d = c.controls,
                            m = _.questSwitchAnimationPhase.get(),
                            E = _.computes.getQuestGroup(e),
                            A = _.computes.getQuest(e, u),
                            g = _.computes.getSelectedQuest(),
                            F = _.computes.getQuestVehicle(e, u),
                            D = null == F ? void 0 : F.isPremium,
                            h = _.progression.countCompleted.get() === A.number,
                            b = A.state === Te.InProgress,
                            B = _.computes.getIsQuestSwitchAnimationNeeded() && (h || b),
                            C = (0, a.useState)(B ? cu(A.state) : A.state),
                            v = C[0],
                            f = C[1],
                            w = h && m === du.ToDoneFinished,
                            S = b && m === du.ToInProgress,
                            x = {
                                isFinal: u === E.quests.length - 1,
                                isInProgress: v === Te.InProgress,
                                isCompleted: v === Te.Done,
                                isSelected: (null == g ? void 0 : g.number) === A.number,
                                isLocked: v === Te.Unavailable,
                                questNumber: A.number,
                            },
                            R = x.isFinal,
                            P = x.isInProgress,
                            y = x.isCompleted,
                            N = x.isSelected,
                            T = x.isLocked,
                            M = x.questNumber,
                            I = Boolean(F),
                            k = ((e, u) => {
                                const t = e && u && u.name === We;
                                return {
                                    backgroundImage:
                                        u && t
                                            ? at(`url('R.images.gui.maps.shop.vehicles.c_180x135.${u.icon}')`)
                                            : void 0,
                                };
                            })(y, F),
                            L = A.number < _.progression.totalQuests.get(),
                            H = (0, a.useCallback)(() => {
                                (Fu.playClick(), d.selectQuest(e, u));
                            }, [d, e, u]),
                            Q = (0, a.useCallback)(
                                (e) => {
                                    e && n.current.push(e);
                                },
                                [n],
                            );
                        ((0, a.useEffect)(() => {
                            f(B ? cu(A.state) : A.state);
                        }, [B, A]),
                            (0, a.useEffect)(() => {
                                if ((w && f(Te.Done), S))
                                    return (f(Te.InProgress), O(() => d.selectCurrentQuest(), he / 2));
                            }, [w, S, d]));
                        const G = p()(
                                zt.card,
                                N && zt.card__selected,
                                I && zt.card__hasVehicle,
                                R && zt.card__final,
                                y && zt.card__done,
                                T && zt.card__locked,
                                P && zt.card__inProgress,
                                i && zt.card__hovered,
                            ),
                            U = `url(R.images.tank_academy.gui.maps.icons.levels.c_180x135.tier_${null == F ? void 0 : F.tier}${D ? '_prem' : ''})`;
                        return r().createElement(
                            'div',
                            { className: p()(zt.base, t), ref: Q },
                            r().createElement(
                                'div',
                                {
                                    className: G,
                                    onClick: H,
                                    onMouseEnter: () => {
                                        (Fu.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => l(!1),
                                },
                                s &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(bt, { className: zt.questNumber, text: M.toString() }),
                                        I
                                            ? r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement('div', {
                                                      className: p()(zt.vehicle, D && zt.vehicle__premium),
                                                      style: k,
                                                  }),
                                                  (null == F ? void 0 : F.name) === ze &&
                                                      r().createElement('div', {
                                                          className: zt.level,
                                                          style: { backgroundImage: U },
                                                      }),
                                              )
                                            : r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement('div', { className: zt.divider }),
                                                  r().createElement(Wt, {
                                                      classNames: zt.rewards,
                                                      questGroupIndex: e,
                                                      questIndex: u,
                                                      questState: v,
                                                  }),
                                              ),
                                        R &&
                                            r().createElement(
                                                'div',
                                                { className: zt.hangar },
                                                r().createElement('div', { className: zt.hangar_dimmer }),
                                            ),
                                        r().createElement('div', {
                                            className: p()(zt.background, zt.background__main),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: zt.corners },
                                            jt.map((e) =>
                                                r().createElement('div', { key: e, className: p()(zt.corner, e) }),
                                            ),
                                        ),
                                        r().createElement('div', {
                                            className: p()(
                                                zt.background,
                                                zt.background__top,
                                                N && zt.background__visible,
                                            ),
                                        }),
                                        y &&
                                            r().createElement('div', { className: p()(zt.shine, zt.shine__completed) }),
                                        P && r().createElement('div', { className: p()(zt.shine, zt.shine__active) }),
                                        r().createElement('div', { className: p()(zt.icon, zt.icon__lock) }),
                                        r().createElement('div', { className: p()(zt.icon, zt.icon__check) }),
                                        L && r().createElement('div', { className: zt.arrow }),
                                    ),
                            ),
                            s &&
                                r().createElement(
                                    'div',
                                    { className: zt.marks },
                                    !I && r().createElement('div', { className: p()(zt.mark, zt.mark__top) }),
                                    r().createElement('div', { className: p()(zt.mark, zt.mark__down) }),
                                ),
                        );
                    }),
                    Yt = 'questID';
                let Kt, Zt;
                (!(function (e) {
                    ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'));
                })(Kt || (Kt = {})),
                    (function (e) {
                        ((e.Scrolling = 'scrolling'),
                            (e.ToDone = 'toDone'),
                            (e.ToDoneFinished = 'toDoneFinished'),
                            (e.ToInProgress = 'toInProgress'),
                            (e.None = 'none'));
                    })(Zt || (Zt = {})));
                const Jt = (e) => ({ tokenID: e }),
                    ea = Qe()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {
                                        bootcampInfo: e.primitives(['bootcampIsAvailable', 'isBootcampCompleted']),
                                        progression: e.primitives(
                                            ['countCompleted', 'totalQuests', 'lastSeenProgress', 'mainRewardReceived'],
                                            'questProgress',
                                        ),
                                        intermediateQuests: e.array('questProgress.intermediateQuests', []),
                                        quests: e.array('quests', []),
                                    },
                                    e.primitives(['isRewardsViewOpen']),
                                ),
                                t = Le.observable.box(!1),
                                a = Le.observable.box(Zt.None),
                                r = Le.observable.box(void 0),
                                n = (0, $e.computedFn)(() =>
                                    qe(u.intermediateQuests.get(), (e) =>
                                        Object.assign({}, e, { rewards: qe(e.rewards, Ie) }),
                                    ),
                                ),
                                s = (0, $e.computedFn)(() =>
                                    qe(u.quests.get(), (e) => Object.assign({}, e, { rewards: qe(e.rewards, Ie) })),
                                ),
                                o = (0, $e.computedFn)(() => s().length),
                                i = (0, $e.computedFn)((e) => Ge(s(), e), { equals: ke }),
                                l = (0, $e.computedFn)(
                                    (e, u) => {
                                        const t = i(e),
                                            a = t
                                                ? qe(t.rewards, (e) => ({
                                                      name: e.name,
                                                      valueType: uu(e.name),
                                                      value: e.value,
                                                      special: e.overlayType,
                                                      image: ru(e, u),
                                                      tooltipArgs: nu(
                                                          { tooltipId: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                          { ignoreShowDelay: !0 },
                                                      ),
                                                  }))
                                                : [],
                                            r = a.length > 5 ? 4 : 5;
                                        return {
                                            data: a,
                                            count: r,
                                            boxRewardTooltip: t
                                                ? nu(
                                                      { showCount: r, [Yt]: t.number },
                                                      R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                  )
                                                : void 0,
                                        };
                                    },
                                    { equals: ke },
                                ),
                                c = (0, $e.computedFn)(() =>
                                    (function (e, u) {
                                        for (let u = e.length - 1; u >= 0; u--)
                                            if (Ue(e, u).state === Kt.Done) return u;
                                    })(s()),
                                ),
                                _ = (0, $e.computedFn)(() =>
                                    (function (e, u) {
                                        for (let u = 0; u < e.length; u++)
                                            if (Ue(e, u).state === Kt.InProgress) return u;
                                    })(s()),
                                ),
                                d = (0, $e.computedFn)(() => {
                                    const e = c(),
                                        t = u.progression.lastSeenProgress.get();
                                    return void 0 !== e && t - 1 < e;
                                }),
                                m = (0, $e.computedFn)(() => {
                                    const e = _(),
                                        u = c();
                                    return void 0 === e ? u : e;
                                }),
                                E = (0, $e.computedFn)((e) => {
                                    const u = i(e);
                                    return u ? u.maxProgress > 0 : void 0;
                                });
                            return Object.assign({}, u, {
                                isLoaded: t,
                                questSwitchAnimationPhase: a,
                                lastPlayedToDoneAnimationQuestIndex: r,
                                computes: {
                                    getQuests: s,
                                    getIntermediateQuests: n,
                                    getQuestsLength: o,
                                    getQuest: i,
                                    getQuestRewardsProps: l,
                                    getLastDoneQuestIndex: c,
                                    getFirstInProgressQuestIndex: _,
                                    getIsQuestSwitchAnimationNeeded: d,
                                    getCurrentQuestIndex: m,
                                    getIsProgressionQuest: E,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            showView: e.createCallbackNoArgs('onShowView'),
                            close: e.createCallbackNoArgs('onClose'),
                            openBootcamp: e.createCallbackNoArgs('onRunBootcamp'),
                            showManual: e.createCallbackNoArgs('onShowManual'),
                            showMainReward: e.createCallbackNoArgs('onShowMainReward'),
                            exchangeToken: e.createCallback(Jt, 'onSelectDelayedReward'),
                            loaded: (0, Le.action)(() => u.isLoaded.set(!0)),
                            setQuestSwitchAnimationPhase: (0, Le.action)((e) => u.questSwitchAnimationPhase.set(e)),
                            setLastPlayedToDoneAnimationQuestIndex: (0, Le.action)((e) =>
                                u.lastPlayedToDoneAnimationQuestIndex.set(e),
                            ),
                            showAnimForQuest: e.createCallback((e) => ({ [Yt]: e }), 'onShowAnimForQuest'),
                            showManualForQuest: e.createCallback((e) => ({ [Yt]: e }), 'onShowManualForQuest'),
                        }),
                    );
                let ua;
                (ea[0],
                    ea[1],
                    (function (e) {
                        ((e[(e.LeftHidden = 0)] = 'LeftHidden'),
                            (e[(e.Visible = 1)] = 'Visible'),
                            (e[(e.RightHidden = 2)] = 'RightHidden'));
                    })(ua || (ua = {})));
                const ta = (e, u) => e * u + 28 * (e - 1),
                    aa = (0, L.observer)(({ groupIndex: e, classNames: u, questsRef: t, itemsVisibility: n }) => {
                        const s = f().mediaWidth,
                            o = Au().model,
                            i = o.isRewardsViewOpen.get(),
                            l = o.questSwitchAnimationPhase.get(),
                            c = o.progression.lastSeenProgress.get(),
                            _ = o.progression.totalQuests.get(),
                            d = o.computes.getQuestGroups(),
                            m = o.computes.getIsQuestSwitchAnimationNeeded(),
                            E = o.computes.isAllQuestsCompleted(),
                            A = o.computes.getQuestGroup(e),
                            g = A.questProgress.countCompleted,
                            F = e > 0 ? o.computes.getQuestGroup(e - 1) : null,
                            D = !!F && F.questProgress.countCompleted === F.questProgress.totalQuests,
                            h = d[e + 1] ? o.computes.getQuestGroup(e + 1) : null,
                            b = (0, a.useMemo)(() => {
                                if ((h && h.questProgress.countCompleted) || c === _)
                                    return A.questProgress.countCompleted;
                                if (m) {
                                    const e = A.questProgress.countCompleted;
                                    return e > 0 ? e - 1 : 0;
                                }
                                return A.questProgress.countCompleted;
                            }, [h, c, _, A, m]),
                            B = (0, a.useState)(m ? b : g),
                            v = B[0],
                            w = B[1],
                            S = (0, a.useState)(!0),
                            x = S[0],
                            P = S[1],
                            y = c !== o.progression.countCompleted.get() && g === A.quests.length,
                            N = 0 === b && 0 === g,
                            T = x || i,
                            M = s > C.Medium ? 250 : 200,
                            I = (0, a.useCallback)(() => gu(R.sounds.ta_progress_bar_stop()), []),
                            k = (0, a.useMemo)(
                                () =>
                                    T
                                        ? { from: 0, to: 0 }
                                        : { from: m && N ? 0 : b * M + M / 2 + 28 * b, to: v * M + M / 2 + 28 * v },
                                [M, b, m, N, v, T],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                k.to > k.from && gu(R.sounds.ta_progress_bar_start());
                            }, [k]),
                            (0, a.useEffect)(() => {
                                w(b);
                            }, [b]),
                            (0, a.useEffect)(() => {
                                (l === Zt.ToInProgress && g && w(g),
                                    E && l === Zt.ToDoneFinished && O(() => w(g), 500));
                            }, [l, g, E]),
                            (0, a.useEffect)(() => {
                                if (0 === e || (e > 0 && !N) || (D && !m)) P(!1);
                                else if (D && m && l === Zt.ToInProgress) return O(() => P(!1), he / 2);
                            }, [e, N, D, m, l]),
                            r().createElement(
                                'div',
                                { className: p()('QuestGroup_base_5d', u) },
                                r().createElement(
                                    'div',
                                    { className: 'QuestGroup_quests_39' },
                                    A.quests.map((u, a) =>
                                        r().createElement(Xt, {
                                            classNames: 'QuestGroup_quest_d5',
                                            key: `quest-${e}-${a}`,
                                            groupIndex: e,
                                            index: a,
                                            questsRef: t,
                                            isVisible: n[u.number - 1] === ua.Visible,
                                        }),
                                    ),
                                ),
                                r().createElement(ge, {
                                    value: k.to,
                                    deltaFrom: k.from,
                                    disabled: T,
                                    onEndAnimation: I,
                                    maxValue: ta(A.questProgress.totalQuests, M),
                                    animationSettings: y || N ? be : pe,
                                }),
                            )
                        );
                    }),
                    ra = (e, u, t) => {
                        const r = t.contentRef,
                            n = t.clampPosition,
                            s = t.getWrapperSize,
                            o = (0, a.useState)(),
                            i = o[0],
                            l = o[1],
                            c = f(),
                            _ = c.remScreenWidth,
                            d = c.remScreenHeight;
                        return (
                            (0, a.useEffect)(
                                () =>
                                    fu(() => {
                                        const t = u.current,
                                            a = r.current,
                                            o = s();
                                        if (void 0 === e || !t || !a || !o) return l(void 0);
                                        let i = 0;
                                        if (t[e]) {
                                            const u = t[e],
                                                r = u.offsetWidth,
                                                s = u.offsetLeft;
                                            i = n(a, s + r / 2 - o / 2);
                                        }
                                        l(i);
                                    }),
                                [n, r, e, u, _, d, s],
                            ),
                            (0, a.useEffect)(() => {
                                l(null);
                            }, [_, d]),
                            i
                        );
                    },
                    na = (0, L.observer)(
                        ({ questGroupsRef: e, setShowButton: u }) => {
                            var t;
                            const n = Au(),
                                s = n.model,
                                o = n.controls,
                                i = s.isRewardsViewOpen.get(),
                                l = s.progression.countCompleted.get() + 1,
                                c = s.questSwitchAnimationPhase.get(),
                                _ = (null != (t = s.progression.countCompleted.get()) ? t : 0) - 1,
                                d = s.lastPlayedToDoneAnimationQuestIndex.get(),
                                m = s.computes.getSelectedQuest(),
                                E = s.computes.isAllQuestsCompleted(),
                                A = s.computes.getQuestGroups(),
                                g = s.computes.getIsQuestSwitchAnimationNeeded(),
                                F = void 0 !== _ ? s.computes.isQuestWithProgress(_) : void 0,
                                D = (null == m ? void 0 : m.number) || 1,
                                p = (0, a.useRef)([]),
                                h = Nu(),
                                b = (0, a.useMemo)(() => Object.assign({}, h, { handleMouseWheel: Me }), [h]),
                                B = ((e, u) => {
                                    const t = f(),
                                        r = t.remScreenWidth,
                                        n = t.remScreenHeight,
                                        s = (0, a.useState)([]),
                                        o = s[0],
                                        i = s[1],
                                        l = (0, a.useRef)({ boxes: [], wrapperWidth: 0, scrollPosition: 0 }),
                                        c = u.animationScroll,
                                        _ = u.events,
                                        d = u.getWrapperSize,
                                        m = (0, a.useCallback)(() => {
                                            const e = l.current,
                                                u = e.boxes,
                                                t = e.wrapperWidth,
                                                a = e.scrollPosition;
                                            i(
                                                u.map(([e, u]) =>
                                                    u <= a ? ua.LeftHidden : a + t <= e ? ua.RightHidden : ua.Visible,
                                                ),
                                            );
                                        }, []);
                                    return (
                                        (0, a.useEffect)(
                                            () =>
                                                fu(() => {
                                                    const u = e.current,
                                                        t = d();
                                                    u &&
                                                        t &&
                                                        ((l.current.boxes = u.map(
                                                            ({ offsetWidth: e, offsetLeft: u }) => [u, u + e],
                                                        )),
                                                        (l.current.wrapperWidth = t),
                                                        m());
                                                }),
                                            [r, n, d, m],
                                        ),
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                ((l.current.scrollPosition = c.scrollPosition.get()), m());
                                            };
                                            return (_.on('change', e), () => _.off('change', e));
                                        }, [c.scrollPosition, m, _]),
                                        o
                                    );
                                })(p, h),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = h.contentRef.current;
                                        var t, a, r;
                                        u &&
                                            (null != (a = null == (r = (t = u).parentElement) ? void 0 : r.offsetWidth)
                                                ? a
                                                : 0) < t.offsetWidth &&
                                            0 !== e.deltaY &&
                                            h.handleMouseWheel(e);
                                    },
                                    [h],
                                );
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('wheel', C),
                                    () => window.removeEventListener('wheel', C)
                                ),
                                [C],
                            );
                            const v = ra(_, p, h),
                                w = ra(D - 1, p, h),
                                S = (0, a.useCallback)(() => {
                                    null !== w && h.scrollPosition.start({ scrollPosition: w });
                                }, [h.scrollPosition, w]);
                            (0, a.useEffect)(() => S(), [S]);
                            const x = (0, a.useCallback)(() => {
                                (o.selectCurrentQuest(), null !== w && h.scrollPosition.start({ scrollPosition: w }));
                            }, [o, h.scrollPosition, w]);
                            return (
                                (0, a.useEffect)(() => {
                                    u(!E && D !== l);
                                }, [l, D, u, E]),
                                (0, a.useImperativeHandle)(e, () => ({ showCurrentQuest: x }), [x]),
                                (0, a.useEffect)(() => {
                                    if (null === v || null === w) return;
                                    if (i) return void o.setQuestSwitchAnimationPhase(Zt.None);
                                    const e = (e, u) =>
                                        O(() => {
                                            o.setQuestSwitchAnimationPhase(e);
                                        }, u);
                                    switch (c) {
                                        case Zt.ToDone:
                                            return (
                                                o.setLastPlayedToDoneAnimationQuestIndex(_),
                                                e(Zt.ToDoneFinished, F ? he : 500)
                                            );
                                        case Zt.ToDoneFinished:
                                            return E
                                                ? void o.setQuestSwitchAnimationPhase(Zt.None)
                                                : void h.scrollPosition.start({
                                                      scrollPosition: w,
                                                      onStart: () => {
                                                          o.setQuestSwitchAnimationPhase(Zt.Scrolling);
                                                      },
                                                      onResolve: () => e(Zt.ToInProgress, 1e3),
                                                  });
                                        case Zt.ToInProgress:
                                            return e(Zt.None, 1e3);
                                    }
                                }, [o, E, w, F, i, v, _, c, h.scrollPosition]),
                                (0, a.useEffect)(() => {
                                    if (null !== v && null !== w && !i)
                                        return fu(() => {
                                            if (g && _ !== d)
                                                h.scrollPosition.start({
                                                    scrollPosition: v,
                                                    onStart: () => {
                                                        o.setQuestSwitchAnimationPhase(Zt.Scrolling);
                                                    },
                                                    onResolve: () => {
                                                        o.setQuestSwitchAnimationPhase(Zt.ToDone);
                                                    },
                                                });
                                            else {
                                                if (c !== Zt.None) return;
                                                h.scrollPosition.start({ scrollPosition: w });
                                            }
                                        });
                                }, [o, c, g, i, _, d, h.scrollPosition, w, v]),
                                r().createElement(
                                    'div',
                                    { className: 'QuestGroups_base_b6' },
                                    r().createElement(
                                        'div',
                                        { className: 'QuestGroups_wrapper_24' },
                                        r().createElement(
                                            Gu,
                                            { api: b, classNames: { content: 'QuestGroups_content_9c' } },
                                            A.map((e, u) =>
                                                r().createElement(aa, {
                                                    classNames: 'QuestGroups_questGroup_e7',
                                                    key: `quest-group-${u}`,
                                                    groupIndex: u,
                                                    questsRef: p,
                                                    itemsVisibility: B,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(Hu, {
                                        api: b,
                                        classNames: {
                                            base: 'QuestGroups_bar_8a',
                                            thumb: 'QuestGroups_barThumb_60',
                                            rail: 'QuestGroups_barRail_c0',
                                        },
                                    }),
                                )
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    sa = {
                        base: 'Footer_base_5d',
                        title: 'Footer_title_f2',
                        wrapper: 'Footer_wrapper_59',
                        background: 'Footer_background_53',
                        wrapper_border: 'Footer_wrapper_border_b6',
                        wrapper_border__top: 'Footer_wrapper_border__top_01',
                        wrapper_border__bottom: 'Footer_wrapper_border__bottom_07',
                        action: 'Footer_action_68',
                        action__visible: 'Footer_action__visible_1c',
                        actionText: 'Footer_actionText_da',
                        text: 'Footer_text_9a',
                        divider: 'Footer_divider_41',
                        completedQuests: 'Footer_completedQuests_4a',
                        completedQuests__allcompleted: 'Footer_completedQuests__allcompleted_05',
                    },
                    oa = R.strings.tank_academy.mainView.footer,
                    ia = (0, L.observer)(({ classNames: e }) => {
                        const u = Au().model,
                            t = u.progression.countCompleted.get(),
                            n = t - 1,
                            s = u.questSwitchAnimationPhase.get(),
                            o = u.computes.getIsQuestSwitchAnimationNeeded(),
                            i = (0, a.useRef)(null),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (0, a.useState)(o ? n : t),
                            m = d[0],
                            E = d[1],
                            A = u.progression.totalQuests.get(),
                            g = (0, a.useMemo)(() => m === A, [m, A]);
                        ((0, a.useEffect)(() => {
                            s === Zt.ToDoneFinished && E(t);
                        }, [t, s]),
                            (0, a.useEffect)(() => {
                                (E(o ? n : t), _(!1));
                            }, [n, t, o]));
                        const F = (0, a.useCallback)(() => {
                                var e;
                                null == (e = i.current) || e.showCurrentQuest();
                            }, []),
                            D = (0, a.useMemo)(
                                () => ({
                                    completed: r().createElement(
                                        'span',
                                        { className: p()(sa.completedQuests, g && sa.completedQuests__allCompleted) },
                                        m,
                                    ),
                                    total: A,
                                }),
                                [m, A, g],
                            );
                        return r().createElement(
                            'div',
                            { className: p()(sa.base, e) },
                            r().createElement(
                                'div',
                                { className: sa.title },
                                r().createElement(
                                    'div',
                                    { className: sa.wrapper },
                                    r().createElement('div', {
                                        className: p()(sa.wrapper_border, sa.wrapper_border__top),
                                    }),
                                    r().createElement('div', {
                                        className: p()(sa.wrapper_border, sa.wrapper_border__bottom),
                                    }),
                                    r().createElement('div', { className: sa.background }),
                                    r().createElement(bt, {
                                        className: sa.text,
                                        text: oa.progress(),
                                        format: { binding: D },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: p()(sa.action, c && sa.action__visible) },
                                    r().createElement('div', { className: sa.divider }),
                                    r().createElement(
                                        vu,
                                        { hasGlow: !0, onClick: F },
                                        r().createElement(bt, {
                                            text: oa.currentQuestButton(),
                                            className: sa.actionText,
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(na, { questGroupsRef: i, setShowButton: _ }),
                        );
                    }),
                    la = {
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
                    ca = [
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
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                class da extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && gu(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && gu(this.props.soundClick));
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
                            a = e.goto,
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, ca)),
                            m = p()(la.base, la[`base__${s}`], la[`base__${n}`], null == o ? void 0 : o.base),
                            E = p()(la.icon, la[`icon__${s}`], la[`icon__${n}`], null == o ? void 0 : o.icon),
                            A = p()(la.glow, null == o ? void 0 : o.glow),
                            g = p()(la.caption, la[`caption__${s}`], null == o ? void 0 : o.caption),
                            F = p()(la.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            _a(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && r().createElement('div', { className: la.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: g }, u),
                            a && r().createElement('div', { className: F }, a),
                        );
                    }
                }
                da.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const ma = R.strings.tank_academy.mainView.header,
                    Ea = ({ classNames: e }) => {
                        const u = Au().controls;
                        return r().createElement(
                            'div',
                            { className: p()('Header_base_b6', e) },
                            r().createElement(
                                'div',
                                { className: 'Header_title_bd' },
                                r().createElement('div', { className: 'Header_title_icon_ea' }),
                                r().createElement(
                                    'div',
                                    { className: 'Header_title_info_37' },
                                    r().createElement(bt, { className: 'Header_info_text_7c', text: ma.title() }),
                                    r().createElement(da, {
                                        caption: ma.infoButton(),
                                        type: 'info',
                                        onClick: u.showInfoPage,
                                    }),
                                ),
                            ),
                        );
                    },
                    Aa = {
                        base: 'Progress_base_eb',
                        value: 'Progress_value_9c',
                        current: 'Progress_current_28',
                        base__inProgress: 'Progress_base__inProgress_22',
                    },
                    ga = R.strings.battle_matters.mainScreen.quest,
                    Fa = (0, a.memo)(({ className: e, state: u, maxProgress: t, animationSettings: n }) => {
                        const s = (0, a.useContext)(pa),
                            o = s.progressToShow,
                            i = s.lastShowedProgress,
                            l = s.setLastShowedProgress,
                            c = p()(Aa.base, Aa[`base__${u}`], e);
                        (0, a.useEffect)(() => {
                            o > i && gu(R.sounds.ta_progress_bar_start());
                        }, [i, o]);
                        const _ = (0, a.useCallback)(() => {
                            (0 !== o && gu(R.sounds.ta_progress_bar_stop()), l(o));
                        }, [o, l]);
                        return (
                            (0, a.useEffect)(
                                () => () => {
                                    l(o);
                                },
                                [o, l],
                            ),
                            r().createElement(
                                'div',
                                { className: c },
                                r().createElement(bt, {
                                    className: Aa.value,
                                    text: ga.progress(),
                                    format: {
                                        binding: {
                                            current: r().createElement(
                                                'span',
                                                { className: Aa.current },
                                                r().createElement(Xe, { value: i }),
                                            ),
                                            max: r().createElement(Xe, { value: t }),
                                        },
                                    },
                                }),
                                r().createElement(ge, {
                                    size: Q.Small,
                                    value: o,
                                    deltaFrom: i,
                                    maxValue: t,
                                    onEndAnimation: _,
                                    animationSettings: n,
                                }),
                            )
                        );
                    }),
                    Da = R.strings.tank_academy.mainView.questCard,
                    pa = (0, a.createContext)({}),
                    ha = (0, L.observer)(({ classNames: e, questState: u }) => {
                        const t = Au(),
                            n = t.model,
                            s = t.controls,
                            o = f().mediaSize,
                            i = n.questSwitchAnimationPhase.get(),
                            l = n.computes.getSelectedQuest(),
                            c = n.progression.countCompleted.get(),
                            _ = n.isRewardsViewOpen.get(),
                            d = c === (null == l ? void 0 : l.number),
                            m = (null == l ? void 0 : l.state) === Te.InProgress,
                            E = n.computes.getIsQuestSwitchAnimationNeeded(),
                            A = (0, a.useState)(d || m ? l.lastSeenProgress : l.currentProgress),
                            g = A[0],
                            F = A[1],
                            D = (0, a.useState)(!0),
                            h = D[0],
                            b = D[1],
                            C = (0, a.useState)(g || 0),
                            v = C[0],
                            w = C[1],
                            S = (0, a.useState)(!1),
                            x = S[0],
                            R = S[1],
                            P = d && i === du.ToDone,
                            y = d && i === du.ToDoneFinished,
                            N = i === du.ToInProgress;
                        (0, a.useEffect)(() => {
                            _ ||
                                (P && l.maxProgress > 0 && w(l.currentProgress),
                                y && R(!0),
                                N && (w(l.currentProgress), R(!1)),
                                E || w(l.currentProgress));
                        }, [P, y, N, l, _, E]);
                        const T = l.number,
                            M = u === Te.Done,
                            I = u === Te.InProgress,
                            k = u === Te.Unavailable,
                            L = (0, a.useMemo)(
                                () =>
                                    I || _ || P ? Da.title.inProgress() : M ? Da.title.done() : Da.title.unavailable(),
                                [M, I, P, _],
                            ),
                            O = k ? Da.subtitle.unavailable() : l.condition,
                            H = p()(
                                'QuestCard_base_99',
                                M && 'QuestCard_base__done_84',
                                x && 'QuestCard_base__doneAnimated_15',
                                I && 'QuestCard_base__inProgress_0a',
                                k && 'QuestCard_base__unavailable_b5',
                                h && 'QuestCard_base__withTransition_8b',
                                e,
                            ),
                            Q = o < B.Large ? hu.small : hu.medium,
                            G = l.maxProgress > 0 && !(M && i === du.None) && !k,
                            U = { progressToShow: v, lastShowedProgress: g, setLastShowedProgress: F };
                        ((0, a.useEffect)(() => {
                            i === du.ToDoneFinished && (b(!0), gu('ta_widget_complete'));
                        }, [i]),
                            (0, a.useEffect)(() => {
                                b(!1);
                            }, [l]));
                        const q = I && l.hasTutorial;
                        return r().createElement(
                            pa.Provider,
                            { value: U },
                            r().createElement(
                                'div',
                                { className: H },
                                r().createElement('div', { className: 'QuestCard_overlay_2f' }),
                                r().createElement(
                                    'div',
                                    { className: 'QuestCard_content_e4' },
                                    r().createElement(bt, { className: 'QuestCard_number_78', text: T.toString() }),
                                    r().createElement(
                                        Nt,
                                        { isEnabled: !k, header: l.title, body: l.description },
                                        r().createElement('div', { className: 'QuestCard_icon_6e' }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'QuestCard_text_16' },
                                        r().createElement(
                                            'div',
                                            { className: 'QuestCard_title_b9' },
                                            r().createElement(bt, { text: L }),
                                        ),
                                        r().createElement(bt, { className: 'QuestCard_subtitle_55', text: O }),
                                        G &&
                                            r().createElement(Fa, {
                                                className: 'QuestCard_progress_bd',
                                                state: u,
                                                maxProgress: l.maxProgress,
                                                animationSettings: i === du.ToInProgress ? De : pe,
                                            }),
                                        q &&
                                            r().createElement(
                                                'div',
                                                { className: 'QuestCard_action_f4' },
                                                r().createElement(
                                                    vu,
                                                    {
                                                        hasGlow: !0,
                                                        size: Q,
                                                        onClick: () => s.showQuestTutorial(l.number),
                                                    },
                                                    r().createElement('div', { className: 'QuestCard_action_icon_d5' }),
                                                    r().createElement(bt, {
                                                        text: Da.action(),
                                                        className: 'QuestCard_actionText_05',
                                                    }),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ba = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ba = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Ca(e) {
                    let u = '';
                    for (let t = Ba.length - 1; t >= 0; t--) for (; e >= Ba[t];) ((u += ba[t]), (e -= Ba[t]));
                    return u;
                }
                const va = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    fa = {
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
                let wa, Sa;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(wa || (wa = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteOrange = 'whiteOrange'));
                    })(Sa || (Sa = {})));
                const xa = (0, a.memo)(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleShortName: t = u,
                            vehicleType: a,
                            vehicleLvl: n,
                            size: s = wa.Small,
                            type: o = Sa.WhiteOrange,
                            classNames: i,
                        }) => {
                            const l = p()(fa.base, fa[`base__${s}`], fa[`base__${o}`], i),
                                c = p()(fa.type, e && fa.type__elite, fa[`type__${at(a || '')}`]);
                            return r().createElement(
                                'div',
                                { className: l },
                                r().createElement(bt, { className: fa.level, text: ((_ = n), va ? `${_}` : Ca(_)) }),
                                r().createElement('div', { className: c }),
                                r().createElement(bt, { className: fa.name, text: t }),
                            );
                            var _;
                        },
                    ),
                    Ra = 'QuestVehicleRewards_rewardsBlock_2c',
                    Pa = 'QuestVehicleRewards_rewards_title_29',
                    ya = 'QuestVehicleRewards_rewards_title__acquired_5f',
                    Na = R.strings.tank_academy.mainView.questVehicleRewards,
                    Ta = 'unavailable',
                    Ma = 'acquired';
                var Ia;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'));
                })(Ia || (Ia = {}));
                const ka = (0, L.observer)(({ classNames: e, questState: u, onShowVehicleClick: t }) => {
                    const n = f().mediaSize,
                        s = Au(),
                        o = s.model,
                        i = s.controls,
                        l = o.computes.getSelectedQuest(),
                        c = o.computes.getSelectedQuestVehicle(),
                        _ = null == c ? void 0 : c.isPremium,
                        d = u === Te.Done,
                        m = d && (null == c ? void 0 : c.name) === We,
                        E = (0, a.useState)(!1),
                        A = E[0],
                        g = E[1],
                        F = (0, a.useMemo)(() => (d || m ? (m ? Ma : 'available') : Ta), [d, m]),
                        D = (0, a.useMemo)(() => Na.rewards.title.$dyn(d ? Ma : Ta), [d]),
                        h = (0, a.useMemo)(() => (n < B.Medium ? we.Small : we.Big), [n]),
                        b = (0, a.useMemo)(
                            () =>
                                m
                                    ? {
                                          backgroundImage: at(
                                              `url('R.images.gui.maps.shop.vehicles.c_600x450.${null == c ? void 0 : c.icon}')`,
                                          ),
                                      }
                                    : void 0,
                            [m, null == c ? void 0 : c.icon],
                        ),
                        C = (0, a.useMemo)(() => {
                            let e = Ia.LARGE;
                            return (
                                n < B.Medium ? (e = Ia.SMALL) : n < B.Large && (e = Ia.MEDIUM),
                                {
                                    backgroundImage: `url('R.images.tank_academy.gui.maps.icons.mainView.platforms.${m ? 'acquired' : 'available'}.${e}')`,
                                }
                            );
                        }, [m, n]),
                        v = o.computes.getSelectedQuestRewardsProps({
                            imageSize: h,
                            isTooltipEnabled: !0,
                            showValue: !0,
                        }),
                        w = (0, a.useMemo)(
                            () => p()(Pa, d && !m && 'QuestVehicleRewards_rewards_title__available_ca', m && ya),
                            [d, m],
                        ),
                        S = (0, a.useMemo)(
                            () =>
                                p()(
                                    'QuestVehicleRewards_divider_1d',
                                    d && !m && 'QuestVehicleRewards_divider__available_fb',
                                    m && 'QuestVehicleRewards_divider__acquired_06',
                                ),
                            [d, m],
                        ),
                        x = `url(R.images.tank_academy.gui.maps.icons.levels.c_600x450.tier_${null == c ? void 0 : c.tier}${null != c && c.isPremium ? '_prem' : ''})`;
                    return c
                        ? r().createElement(
                              'div',
                              {
                                  className: p()(
                                      'QuestVehicleRewards_base_82',
                                      e,
                                      !m && 'QuestVehicleRewards_base__selectable_fb',
                                      A && 'QuestVehicleRewards_base__hovered_56',
                                      _ && 'QuestVehicleRewards_base__premium_ed',
                                  ),
                              },
                              r().createElement(
                                  'div',
                                  { className: 'QuestVehicleRewards_platform_container_d1' },
                                  r().createElement('div', { className: 'QuestVehicleRewards_platform_9f', style: C }),
                                  r().createElement(
                                      'div',
                                      {
                                          onClick: () => {
                                              m || (gu(R.sounds.play()), i.useQuestToken(l.number));
                                          },
                                          onMouseEnter: () => {
                                              m || (gu('ta_highlight'), g(!0));
                                          },
                                          onMouseLeave: () => g(!1),
                                          className: 'QuestVehicleRewards_vehicle_container_b9',
                                      },
                                      r().createElement('div', {
                                          className: 'QuestVehicleRewards_vehicle_78',
                                          style: b,
                                      }),
                                      !m && r().createElement('div', { className: 'QuestVehicleRewards_mask_5b' }),
                                      r().createElement('div', { className: 'QuestVehicleRewards_hover_60' }),
                                      (null == c ? void 0 : c.name) === ze &&
                                          r().createElement('div', {
                                              className: 'QuestVehicleRewards_level_f8',
                                              style: { backgroundImage: x },
                                          }),
                                  ),
                              ),
                              r().createElement(
                                  'div',
                                  { className: 'QuestVehicleRewards_rewards_c3' },
                                  r().createElement('div', { className: 'QuestVehicleRewards_shadow_4b' }),
                                  r().createElement(
                                      'div',
                                      { className: p()(Ra, 'QuestVehicleRewards_rewardsBlock_main_ea') },
                                      r().createElement(lt, { classMix: w, text: Na.vehicle.title.$dyn(F) }),
                                      m
                                          ? r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(xa, {
                                                    type: Sa.White,
                                                    classNames: 'QuestVehicleRewards_vehicleName_5f',
                                                    vehicleLvl: c.tier,
                                                    vehicleName: c.label,
                                                    vehicleType: c.type,
                                                    isElite: c.isPremium,
                                                }),
                                                r().createElement(
                                                    Bu,
                                                    {
                                                        type: pu.ghost,
                                                        mixClass: 'QuestVehicleRewards_button_12',
                                                        onClick: t,
                                                    },
                                                    r().createElement(bt, {
                                                        text: Na.vehicle.action(),
                                                        className: 'QuestVehicleRewards_buttonText_4a',
                                                    }),
                                                ),
                                            )
                                          : r().createElement(bt, {
                                                className: 'QuestVehicleRewards_vehicleLevel_e2',
                                                text: Na.vehicle.level(),
                                                format: { binding: { level: Ca(c.tier) } },
                                            }),
                                  ),
                                  r().createElement('div', { className: S }),
                                  r().createElement(
                                      'div',
                                      { className: p()(Ra, 'QuestVehicleRewards_rewardsBlock_additional_3b') },
                                      r().createElement(bt, { className: p()(Pa, d && ya), text: D }),
                                      r().createElement($t, {
                                          classNames: { reward: 'QuestVehicleRewards_reward_fa' },
                                          rewards: v,
                                          imageSize: h,
                                          showCustomBox: !0,
                                          showOverlayImage: !0,
                                          questState: u,
                                      }),
                                  ),
                              ),
                          )
                        : null;
                });
                function La(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Oa = (e, u) => {
                        const t = f().mediaSize;
                        return (0, a.useMemo)(() => {
                            for (
                                var a,
                                    r = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return La(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? La(e, u)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (u && e && 'number' == typeof e.length)
                                        ) {
                                            t && (e = t);
                                            var a = 0;
                                            return function () {
                                                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(e);
                                !(a = r()).done;
                            ) {
                                const e = a.value,
                                    u = e.maxMediaSize,
                                    r = e.imageSize;
                                if (t < u) return r;
                            }
                            return u;
                        }, [t, e, u]);
                    },
                    Ha = {
                        base: 'SingleReward_base_ad',
                        sideInfo: 'SingleReward_sideInfo_6d',
                        divider: 'SingleReward_divider_b4',
                        sideInfo_label: 'SingleReward_sideInfo_label_fd',
                        sideInfo_description: 'SingleReward_sideInfo_description_ed',
                        rewardInfo: 'SingleReward_rewardInfo_56',
                        overlay__obtained: 'SingleReward_overlay__obtained_90',
                        reward_wrapper: 'SingleReward_reward_wrapper_7c',
                        icon__obtained: 'SingleReward_icon__obtained_d1',
                        rewardImage: 'SingleReward_rewardImage_d8',
                        base__withOverlay: 'SingleReward_base__withOverlay_df',
                    };
                function Qa() {
                    return (
                        (Qa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Qa.apply(this, arguments)
                    );
                }
                const Ga = (0, L.observer)(({ classNames: e, showOverlayImage: u, questState: t }) => {
                        const n = Au().model,
                            s = f().mediaSize,
                            o = t === Te.Done,
                            i = Oa(
                                [
                                    { maxMediaSize: B.Medium, imageSize: we.S180x135 },
                                    { maxMediaSize: B.Large, imageSize: we.S296x222 },
                                ],
                                we.S400x300,
                            ),
                            l = n.computes.getSelectedQuest(),
                            c = (0, a.useMemo)(() => {
                                const e = null == l ? void 0 : l.rewards[0];
                                return e ? _u({ reward: e, imageSize: i, showValue: !0, isTooltipEnabled: !0 }) : null;
                            }, [l, i]);
                        if (!c) return null;
                        const _ = lu(c.name);
                        return r().createElement(
                            'div',
                            { className: p()(Ha.base, o && Ha.base__withOverlay, e) },
                            r().createElement(
                                'div',
                                { className: Ha.reward_wrapper },
                                r().createElement(
                                    kt,
                                    Qa({ size: i }, c, { classNames: { info: Ha.rewardInfo, image: Ha.rewardImage } }),
                                ),
                                o &&
                                    u &&
                                    r().createElement(
                                        'div',
                                        { className: Ha.overlay__obtained },
                                        r().createElement('div', { className: Ha.icon__obtained }),
                                    ),
                            ),
                            s < B.Small && r().createElement(bt, { className: Ha.sideInfo_label, text: c.label }),
                            s > B.ExtraSmall &&
                                r().createElement(
                                    'div',
                                    { className: Ha.sideInfo },
                                    r().createElement('div', { className: Ha.divider }),
                                    r().createElement(
                                        'div',
                                        { className: Ha.sideInfo_text },
                                        r().createElement(bt, { className: Ha.sideInfo_label, text: c.label }),
                                        r().createElement(bt, { className: Ha.sideInfo_description, text: _ }),
                                    ),
                                ),
                        );
                    }),
                    Ua = {
                        base: 'Award_base_79',
                        base__small: 'Award_base__small_fb',
                        base__big: 'Award_base__big_6e',
                        base__hasAppearAnimation: 'Award_base__hasAppearAnimation_ed',
                        baseAppear: 'Award_baseAppear_97',
                        border: 'Award_border_71',
                        border__small: 'Award_border__small_37',
                        border__small_active: 'Award_border__small_active_f3',
                        border__big: 'Award_border__big_98',
                        border__big_active: 'Award_border__big_active_9a',
                        borderHover: 'Award_borderHover_e3',
                        borderHover__small: 'Award_borderHover__small_0a',
                        borderHover__small_active: 'Award_borderHover__small_active_d3',
                        borderHover__big: 'Award_borderHover__big_ad',
                        borderHover__big_active: 'Award_borderHover__big_active_53',
                        shine: 'Award_shine_f8',
                        shine__smallLeft: 'Award_shine__smallLeft_70',
                        shine__smallRight: 'Award_shine__smallRight_91',
                        shine_small: 'Award_shine_small_2c',
                        shine__bigLeft: 'Award_shine__bigLeft_56',
                        shine__bigRight: 'Award_shine__bigRight_83',
                        shine_big: 'Award_shine_big_8e',
                        bg: 'Award_bg_de',
                        bgHover: 'Award_bgHover_bc',
                        bg__small: 'Award_bg__small_7a',
                        bg__small_active: 'Award_bg__small_active_6e',
                        bg__big: 'Award_bg__big_ef',
                        bg__big_active: 'Award_bg__big_active_e8',
                        bgHover__small: 'Award_bgHover__small_0b',
                        bgHover__small_active: 'Award_bgHover__small_active_f7',
                        bgHover__big: 'Award_bgHover__big_d2',
                        bgHover__big_active: 'Award_bgHover__big_active_d4',
                        arrow: 'Award_arrow_b6',
                        icon: 'Award_icon_da',
                        icon_active: 'Award_icon_active_ca',
                        icon__Award: 'Award_icon__Award_d6',
                        icon__Coin: 'Award_icon__Coin_73',
                        count: 'Award_count_84',
                        label: 'Award_label_8f',
                        label__smallCoin: 'Award_label__smallCoin_f5',
                        base__active: 'Award_base__active_2f',
                        blinkShape: 'Award_blinkShape_b7',
                        blink: 'Award_blink_89',
                        blinker_with_pause: 'Award_blinker_with_pause_14',
                        blinker: 'Award_blinker_73',
                    };
                let qa, Va;
                (!(function (e) {
                    ((e.Coin = 'Coin'), (e.Award = 'Award'));
                })(qa || (qa = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(Va || (Va = {})));
                const $a = R.strings.tank_academy.mainView.widget,
                    Wa = ({ type: e, count: u, onClick: t, size: n }) => {
                        const s = { Award: $a.tokens.allRewards, Coin: $a.tokens.$dyn(u ? 'active' : 'inactive') }[e],
                            o = s.$dyn('title'),
                            i = s.$dyn('tooltip'),
                            l = u > 0,
                            c = p()(
                                Ua.base,
                                Ua[`base__${n}`],
                                e === qa.Coin && Ua.base__hasAppearAnimation,
                                l && Ua.base__active,
                            ),
                            _ = p()(Ua.border, Ua[`border__${n}`], l && Ua[`border__${n}_active`]),
                            d = p()(Ua.borderHover, Ua[`borderHover__${n}`], l && Ua[`borderHover__${n}_active`]),
                            m = p()(Ua.shine, Ua[`shine__${n}Left`]),
                            E = p()(Ua.shine, Ua[`shine__${n}Right`]),
                            A = p()(Ua.bg, Ua[`bg__${n}`], l && Ua[`bg__${n}_active`]),
                            g = p()(Ua.bgHover, Ua[`bgHover__${n}`], l && Ua[`bgHover__${n}_active`]),
                            F = p()(Ua.label, Ua[`label__${n}${e}`]),
                            D = p()(Ua.icon, { [Ua.icon_active]: l }, Ua[`icon__${e}`]),
                            h = (0, a.useCallback)(() => {
                                (Fu.playClick(), t());
                            }, [t]),
                            b = (0, a.useCallback)(() => {
                                gu('bp_highlight_02');
                            }, []);
                        return r().createElement(
                            Nt,
                            { body: i, isEnabled: Boolean(i) },
                            r().createElement(
                                'div',
                                { className: c, onMouseEnter: b, onClick: h },
                                r().createElement('div', { className: _ }),
                                r().createElement('div', { className: d }),
                                e === qa.Coin &&
                                    l &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: m }),
                                        r().createElement('div', { className: E }),
                                    ),
                                r().createElement('div', { className: A }),
                                r().createElement('div', { className: g }),
                                e === qa.Coin && l && r().createElement('div', { className: Ua.arrow }),
                                r().createElement('div', { className: D }),
                                l &&
                                    r().createElement(
                                        'div',
                                        { className: Ua.count },
                                        r().createElement(Xe, { format: 'integral', value: u }),
                                    ),
                                r().createElement('div', { className: F }, o),
                                e === qa.Coin &&
                                    r().createElement(
                                        'div',
                                        { className: Ua.blinkShape },
                                        r().createElement('div', { className: Ua.blink }),
                                    ),
                            ),
                        );
                    },
                    za = [B.ExtraLarge, B.Large, B.Medium],
                    ja = (0, L.observer)(({ classNames: e, showFlags: u }) => {
                        const t = Au(),
                            n = t.model,
                            s = t.controls,
                            o = f().mediaSize,
                            i = (0, a.useMemo)(() => (za.includes(o) ? Va.Big : Va.Small), [o]),
                            l = (0, a.useCallback)(() => {
                                s.viewVehicles();
                            }, [s]);
                        return r().createElement(
                            'div',
                            { className: p()('RewardFlags_base_ea', e) },
                            u &&
                                r().createElement(Wa, {
                                    type: qa.Coin,
                                    size: i,
                                    count: n.unobtainedVehiclesCount.get(),
                                    onClick: l,
                                }),
                        );
                    });
                var Xa = t(521);
                const Ya = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ka(e = Xa.n.NONE, u = Ya, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Xa.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                const Za = {
                    base: 'App_base_74',
                    base__visible: 'App_base__visible_76',
                    base__disabled: 'App_base__disabled_97',
                    content: 'App_content_46',
                    quest: 'App_quest_98',
                    ribbon: 'App_ribbon_21',
                    questCard: 'App_questCard_f2',
                    questRewards: 'App_questRewards_86',
                    questVehicleRewards: 'App_questVehicleRewards_e3',
                    background: 'App_background_49',
                    reward: 'App_reward_81',
                    rewardInfo: 'App_rewardInfo_3d',
                    vignette: 'App_vignette_51',
                    vignette__withVignette: 'App_vignette__withVignette_6b',
                    header: 'App_header_c2',
                    footer: 'App_footer_8e',
                    rewardFlags: 'App_rewardFlags_d9',
                    fadeOut: 'App_fadeOut_9b',
                };
                var Ja;
                !(function (e) {
                    ((e.OUT = 'out'), (e.IN = 'in'));
                })(Ja || (Ja = {}));
                const er = { base: Za.questRewards, reward: Za.reward, rewardInfo: Za.rewardInfo },
                    ur = (0, L.observer)(() => {
                        const e = Au(),
                            u = e.controls,
                            t = e.model,
                            n = t.computes.getSelectedQuest(),
                            o = t.questSwitchAnimationPhase.get(),
                            i = t.progression.countCompleted.get(),
                            l = t.progression.lastSeenProgress.get(),
                            c = t.isLoaded.get(),
                            _ = t.isRewardsViewOpen.get(),
                            d = t.computes.getIsQuestSwitchAnimationNeeded(),
                            m = n && i === n.number,
                            E = n && n.state === Te.InProgress,
                            A = t.computes.isAllQuestsCompleted(),
                            g = m && o === du.ToDoneFinished,
                            F = E && o === du.ToInProgress,
                            D = (0, a.useState)(void 0),
                            h = D[0],
                            b = D[1];
                        (0, a.useEffect)(() => {
                            n && b(d ? cu(n.state) : n.state);
                        }, [d, n]);
                        const C = (0, a.useState)(!1),
                            v = C[0],
                            f = C[1],
                            w = (0, a.useState)(null),
                            S = w[0],
                            x = w[1],
                            R = (0, a.useState)(!1),
                            P = R[0],
                            y = R[1],
                            N = Oa(
                                [
                                    { maxMediaSize: B.Small, imageSize: we.Big },
                                    { maxMediaSize: B.Large, imageSize: we.S180x135 },
                                ],
                                we.S296x222,
                            );
                        ((0, a.useEffect)(() => {
                            c && u.showView();
                        }, [c, u]),
                            (0, a.useEffect)(() => {
                                o === du.ToDoneFinished && u.seenAnimation();
                            }, [u, i, o]),
                            (0, a.useEffect)(() => {
                                i > 0 && y(i === l);
                            }, [i, l]),
                            (0, a.useEffect)(() => {
                                _ || (g && !A && O(() => x(Ja.OUT), 1500), (F || (g && A)) && y(!0));
                            }, [g, F, _, A]),
                            (function ({
                                key: e = Xa.n.ESCAPE,
                                callback: u = () => s.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                Ka(e, u, t);
                            })({ callback: u.close }));
                        const T = (0, a.useMemo)(() => !!n && iu(n.rewards), [n]),
                            M = (0, a.useMemo)(() => !!n && n.rewards.some((e) => e.name === We), [n]),
                            I = t.computes.getSelectedQuestRewardsProps({
                                imageSize: N,
                                isTooltipEnabled: !0,
                                showValue: !0,
                            }),
                            k = 1 === I.data.length;
                        ((0, a.useEffect)(() => {
                            d || f(!0);
                        }, [d]),
                            (0, a.useEffect)(() => {
                                (g && b(Te.Done), F && (b(Te.InProgress), f(!0)));
                            }, [g, F]),
                            (0, a.useEffect)(() => (x(Ja.OUT), O(() => x(Ja.IN), 200)), [n]),
                            (0, a.useEffect)(() => {
                                (!P && d) || !n || b(n.state);
                            }, [n, P, d]));
                        const L = { [Za.fadeOut]: S === Ja.OUT };
                        return r().createElement(
                            'div',
                            { className: p()(Za.base, c && Za.base__visible, !P && Za.base__disabled) },
                            r().createElement(
                                'div',
                                { className: Za.content },
                                r().createElement(Ce, {
                                    classNames: p()(Za.background, L),
                                    selectedQuest: n,
                                    isWithVehicle: T,
                                    isVehicleAcquired: M,
                                    onLoaded: u.loaded,
                                }),
                                r().createElement(Ea, { classNames: Za.header }),
                                r().createElement(ia, { classNames: Za.footer }),
                                h &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: p()(Za.vignette, T && Za.vignette__withVehicle),
                                        }),
                                        T
                                            ? r().createElement(ka, {
                                                  classNames: p()(Za.questVehicleRewards, L),
                                                  questState: h,
                                                  onShowVehicleClick: () => n && u.showQuestVehicle(n.number),
                                              })
                                            : r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement('div', { className: p()(Za.ribbon, L) }),
                                                  k
                                                      ? r().createElement(Ga, {
                                                            classNames: p()(Za.questRewards, L),
                                                            showOverlayImage: !0,
                                                            questState: h,
                                                        })
                                                      : r().createElement($t, {
                                                            classNames: Object.assign({}, er, {
                                                                base: p()(er.base, L),
                                                            }),
                                                            rewards: I,
                                                            imageSize: N,
                                                            showAdditionalInfo: !0,
                                                            showOverlayImage: !0,
                                                            showCustomBox: !0,
                                                            questState: h,
                                                        }),
                                              ),
                                        r().createElement(ha, { classNames: p()(Za.questCard, L), questState: h }),
                                    ),
                                r().createElement(ja, { classNames: Za.rewardFlags, showFlags: v }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        r().createElement(M, null, r().createElement(Eu, null, r().createElement(ur, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
            var e = { 905: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, o] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(881));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
