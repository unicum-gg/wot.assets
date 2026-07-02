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
                t.d(u, { O: () => U });
                var r = {};
                (t.r(r), t.d(r, { mouse: () => E, onResize: () => l }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => A,
                        getSize: () => d,
                        graphicsQuality: () => m,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => F, getTextureUrl: () => _ }));
                var i = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => b,
                        addPreloadTexture: () => p,
                        children: () => a,
                        displayStatus: () => D,
                        displayStatusIs: () => W,
                        events: () => C,
                        extraSize: () => V,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => v,
                        getDisplayStatus: () => I,
                        getScale: () => M,
                        getSize: () => w,
                        getViewGlobalPosition: () => S,
                        isEventHandled: () => O,
                        isFocused: () => R,
                        pxToRem: () => T,
                        remToPx: () => P,
                        resize: () => y,
                        sendEvent: () => g,
                        setAnimateWindow: () => k,
                        setEventHandled: () => N,
                        setInputPaddingsRem: () => f,
                        setSidePaddingsRem: () => x,
                        whenTutorialReady: () => G,
                    }));
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && s(!1);
                        }
                        function t() {
                            e.enabled && s(!0);
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
                                : s(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            i = c[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
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
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && s(!0);
                            },
                            disableOutside() {
                                e.enabled && s(!1);
                            },
                        });
                    })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function F(e, u, t) {
                    return `url(${_(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    B = ['args'],
                    h = (e, u) => {
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
                                })(u, B);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    g = {
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
                function p(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function f(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function v(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function b(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function y(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function S(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: P(u.x), y: P(u.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function T(e) {
                    return viewEnv.pxToRem(e);
                }
                function P(e) {
                    return viewEnv.remToPx(e);
                }
                function k(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function R() {
                    return viewEnv.isFocused();
                }
                function N() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function I() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    V = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    G = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    U = { view: i, client: n };
            },
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(67);
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
                t.d(u, { B0: () => s, ry: () => B, Eu: () => h });
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
                var a = t(358);
                const i = {
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    _ = t(67);
                const F = ['args'];
                function D(e, u, t, r, n, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(r, n);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                        function i(e) {
                                            D(a, r, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(a, r, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
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
                                })(u, F);
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
                    p = () => g(s.CLOSE),
                    f = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var v = t(572);
                const b = n.instance,
                    x = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: A,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                A = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: C(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: b,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = x;
            },
            490: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => ku,
                        Bar: () => Mu,
                        DefaultScroll: () => Pu,
                        Direction: () => gu,
                        defaultSettings: () => pu,
                        useHorizontalScrollApi: () => vu,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Xu, Bar: () => Uu, Default: () => zu, useVerticalScrollApi: () => Ru }));
                var a = t(179),
                    i = t.n(a);
                const o = (e, u, t) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                const d = s.O.client.getSize('rem'),
                    A = d.width,
                    m = d.height,
                    _ = Object.assign({ width: A, height: m }, E(A, m, l)),
                    F = (0, a.createContext)(_),
                    D = ['children'],
                    C = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, D);
                        const r = (0, a.useContext)(F),
                            n = r.extraLarge,
                            i = r.large,
                            s = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            d = r.largeWidth,
                            A = r.mediumWidth,
                            m = r.smallWidth,
                            _ = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            B = r.largeHeight,
                            h = r.mediumHeight,
                            g = r.smallHeight,
                            p = r.extraSmallHeight,
                            f = { extraLarge: C, large: B, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, f);
                            if (t.largeWidth && d) return o(u, t, f);
                            if (t.mediumWidth && A) return o(u, t, f);
                            if (t.smallWidth && m) return o(u, t, f);
                            if (t.extraSmallWidth && _) return o(u, t, f);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                ((C.defaultProps = {
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
                    (0, a.memo)(C));
                const B = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        o = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                r = s.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, E(t, r, l)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return i().createElement(F.Provider, { value: c }, e);
                });
                var h = t(483),
                    g = t.n(h),
                    p = t(926),
                    f = t.n(p);
                let v, b, x;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
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
                    })(x || (x = {})));
                const w = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
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
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: f().SMALL_HEIGHT,
                        [x.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [x.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    P = (e) => {
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
                        const n = w(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            s = n.mediaSize;
                        return i().createElement('div', S({ className: g()(t, L[a], M[o], T[s]) }, r), u);
                    },
                    k = ['children'],
                    N = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, k);
                        return i().createElement(B, null, i().createElement(P, t, u));
                    };
                var O = t(493),
                    H = t.n(O),
                    I = t(521),
                    W = t(364);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = I.n.NONE, u = V, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== I.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var U = t(282);
                function j() {
                    return !1;
                }
                console.log;
                var z = t(915);
                function X(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const $ = (e) => (0 === e ? window : window.subViews.get(e)),
                    Y = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((u = e),
                                  (t = (e) => ('object' == typeof e ? Y(e) : e)),
                                  Array.isArray(u) ? u.map(t) : u.map((e, u, r) => t(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Y(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Y(u) : u]),
                                    )
                            : e;
                        var u, t;
                    };
                var K = t(517),
                    q = t(887),
                    Z = t.n(q);
                const Q = ['xl', 'lg', 'md', 'sm', 'xs'],
                    J = (e) => e.includes('_') && ((e) => Q.includes(e))(e.split('_').at(-1)),
                    ee = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    ue = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (J(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = ee.indexOf(u),
                                    i = (-1 !== a ? Q.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = i ? e[i] : void 0;
                                return ((t[n] = void 0 !== o ? o : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => Q.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    te = (e, u = ue) => {
                        const t = (
                            (e, u = ue) =>
                            (t) => {
                                const r = w().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return i().createElement(e, n);
                            }
                        )(e, u);
                        return i().memo((u) =>
                            Object.keys(u).some((e) => J(e) && void 0 !== u[e])
                                ? i().createElement(t, u)
                                : i().createElement(e, u),
                        );
                    },
                    re = {
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
                    ne = [
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
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                Object.keys(Z());
                const ie = {
                        XL: { mt: re.mt__XL, mr: re.mr__XL, mb: re.mb__XL, ml: re.ml__XL },
                        LG: { mt: re.mt__LG, mr: re.mr__LG, mb: re.mb__LG, ml: re.ml__LG },
                        MDp: { mt: re.mt__MDp, mr: re.mr__MDp, mb: re.mb__MDp, ml: re.ml__MDp },
                        MD: { mt: re.mt__MD, mr: re.mr__MD, mb: re.mb__MD, ml: re.ml__MD },
                        SMp: { mt: re.mt__SMp, mr: re.mr__SMp, mb: re.mb__SMp, ml: re.ml__SMp },
                        SM: { mt: re.mt__SM, mr: re.mr__SM, mb: re.mb__SM, ml: re.ml__SM },
                        XS: { mt: re.mt__XS, mr: re.mr__XS, mb: re.mb__XS, ml: re.ml__XS },
                    },
                    oe = (Object.keys(ie), ['mt', 'mr', 'mb', 'ml']),
                    se = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    le = te((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            o = e.mt,
                            s = void 0 === o ? n : o,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            E = e.mb,
                            d = void 0 === E ? n : E,
                            A = e.ml,
                            m = void 0 === A ? n : A,
                            _ = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (_ ? 'column' : F && 'row') || void 0 : D,
                            B = e.flexStart,
                            h = e.center,
                            p = e.flexEnd,
                            f = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            x =
                                void 0 === b
                                    ? (B ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            w = e.alignItems,
                            y = void 0 === w ? (B ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : w,
                            S = e.alignSelf,
                            L = e.wrap,
                            M = e.flexWrap,
                            T = void 0 === M ? (L ? 'wrap' : void 0) : M,
                            P = e.grow,
                            k = e.shrink,
                            R = e.flex,
                            N = void 0 === R ? (P || k ? `${P ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : R,
                            O = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ne);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: d, ml: m },
                                    u = ((e) =>
                                        oe.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(ie[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        oe.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[se[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: S,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: T,
                                        justifyContent: x,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, s, c, d, m, O, N, S, C, T, x, y]),
                            V = W.computedStyle,
                            G = W.computedClassNames;
                        return i().createElement('div', ae({ className: g()(re.base, ...G, u), style: V }, I), H);
                    });
                let ce;
                function Ee(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ce || (ce = {}));
                const de = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ae = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    me = (e, u, t = ce.left) => e.split(u).reduce(t === ce.left ? de : Ae, []),
                    _e = (() => {
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
                    Fe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    De = ({ binding: e, text: u = '', classMix: t, alignment: r = ce.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      i().createElement(
                                          'div',
                                          { className: g()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ce.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Fe.includes(t)
                                                                ? _e(e)
                                                                : ((e, u = ce.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          me(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(me(e, r, ce.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              i().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ce = t(532),
                    Be = t.n(Ce);
                const he = {
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
                    ge = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                Object.keys(Z());
                const fe = Object.keys(Be()),
                    ve = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    be = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    we =
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
                            'heading-H56': ve,
                            'heading-H36': ve,
                            'heading-H28': be,
                            'heading-H24': be,
                            'heading-H24R': be,
                            'heading-H22': be,
                            'heading-H20R': be,
                            'heading-H18': be,
                            'heading-H15': xe,
                            'heading-H14': xe,
                            'paragraph-P24': be,
                            'paragraph-P18': be,
                            'paragraph-P16': be,
                            'paragraph-P14': xe,
                            'paragraph-P12': xe,
                            'paragraph-P10': xe,
                        }),
                    ye =
                        (Object.keys(we),
                        (e) =>
                            e
                                ? ((e) => fe.includes(e))(e)
                                    ? { colorClassName: he[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Se = te((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            o = e.m,
                            s = e.mt,
                            l = void 0 === s ? o : s,
                            c = e.mr,
                            E = void 0 === c ? o : c,
                            d = e.mb,
                            A = void 0 === d ? o : d,
                            m = e.ml,
                            _ = void 0 === m ? o : m,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ge);
                        const B = (0, a.useMemo)(() => {
                                const e = ye(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, n]),
                            h = B.computedStyle,
                            p = B.colorClassName;
                        return i().createElement(
                            le,
                            pe(
                                {
                                    className: g()(he.base, t && he[t], p, r),
                                    style: h,
                                    mt: !0 === l ? we[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? we[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === A ? we[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === _ ? we[t || 'paragraph-P16'].ml : _,
                                },
                                C,
                            ),
                            void 0 !== D ? i().createElement(De, pe({}, D, { text: u })) : u,
                        );
                    }),
                    Le = [56, -3, 22, 23, 36],
                    Me = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = $,
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
                                                const i = (e) => {
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
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
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
                                                                                    return X(e, u);
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
                                                                                          ? X(e, u)
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
                                            i =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : i.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = { root: e.object(), vehicles: e.array('vehicles', []) },
                                                    t = (0, K.computedFn)(
                                                        () => {
                                                            return ((e = u.vehicles.get()), Y(e));
                                                            var e;
                                                        },
                                                        { equals: j },
                                                    ),
                                                    r = (0, K.computedFn)(
                                                        () => t()[u.root.get().currentVehicleIndex || 0],
                                                        { equals: j },
                                                    ),
                                                    n = (0, K.computedFn)(
                                                        () =>
                                                            ((e) => {
                                                                const u = [],
                                                                    t = new Set();
                                                                let r = 0;
                                                                return (
                                                                    e.forEach((e, n) => {
                                                                        t.has(e) ||
                                                                            (t.add(e),
                                                                            u.push({
                                                                                index: n,
                                                                                year: e,
                                                                                margin: s.O.view.remToPx(Le[r] || 33),
                                                                            }),
                                                                            r++);
                                                                    }),
                                                                    u
                                                                );
                                                            })(t().map((e) => e.year)),
                                                        { equals: j },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getCurrentVehicle: r,
                                                        getVehicles: t,
                                                        getVehiclesYears: n,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = z.observable.box(r, { equals: j });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, z.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = z.observable.box(r, { equals: j });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, z.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = z.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, z.action)((e) => {
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
                                                                o = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = z.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, z.action)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && r ? r.controls(d) : u(d),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    A = d[0],
                                    m = d[1],
                                    _ = (0, a.useState)(() => c(e, r, o)),
                                    F = _[0],
                                    D = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(A, r, o)) : (E.current = !0);
                                    }, [o, A, r]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    i().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        selectVehicle: e.createCallback((e) => ({ vehicleIndex: e }), 'onSelectVehicle'),
                        backToHangar: e.createCallbackNoArgs('onBackToHangar'),
                        moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        startMoving: e.createCallbackNoArgs('onStartMoving'),
                        audioCheckboxToggle: e.createCallbackNoArgs('onAudioCheckboxToggle'),
                        excursionEnd: e.createCallbackNoArgs('onExcursionEnd'),
                        playExcursion: e.createCallback((e) => ({ isExcursionPlaying: e }), 'onExcursionPlay'),
                        pauseExcursion: e.createCallback((e) => ({ isExcursionPaused: e }), 'onExcursionPause'),
                        vehiclePlayTimeLog: e.createCallback((e, u) => ({ time: e, index: u }), 'onVehiclePlayTimeLog'),
                    })),
                    Te = Me[0],
                    Pe = Me[1];
                function ke(e) {
                    engine.call('PlaySound', e);
                }
                const Re = {
                        playHighlight() {
                            ke('highlight');
                        },
                        playClick() {
                            ke('play');
                        },
                        playYes() {
                            ke('yes1');
                        },
                    },
                    Ne = {
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
                    Oe = [
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
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                class Ie extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ke(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ke(this.props.soundClick));
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
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
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
                                })(e, Oe)),
                            A = g()(Ne.base, Ne[`base__${a}`], Ne[`base__${n}`], null == o ? void 0 : o.base),
                            m = g()(Ne.icon, Ne[`icon__${a}`], Ne[`icon__${n}`], null == o ? void 0 : o.icon),
                            _ = g()(Ne.glow, null == o ? void 0 : o.glow),
                            F = g()(Ne.caption, Ne[`caption__${a}`], null == o ? void 0 : o.caption),
                            D = g()(Ne.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            He(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && i().createElement('div', { className: Ne.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: _ })),
                            i().createElement('div', { className: F }, u),
                            r && i().createElement('div', { className: D }, r),
                        );
                    }
                }
                let We;
                ((Ie.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(We || (We = {})));
                const Ve = {
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
                let Ge, Ue, je;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ge || (Ge = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Ue || (Ue = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(je || (je = {})));
                const ze = [
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
                const $e = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            n = e.isDisabled,
                            o = void 0 !== n && n,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            E = void 0 === c ? Ge.medium : c,
                            d = e.type,
                            A = void 0 === d ? Ue.primary : d,
                            m = e.soundHover,
                            _ = void 0 === m ? 'highlight' : m,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            C = e.onMouseEnter,
                            B = e.onMouseLeave,
                            h = e.onMouseUp,
                            p = e.onMouseDown,
                            f = e.onClick,
                            v = e.onChange,
                            b = e.onFocus,
                            x = e.onBlur,
                            w = e.text,
                            y = e.contentStyles,
                            S = e.children,
                            L = e.alignment,
                            M = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ze);
                        const T = (0, a.useState)(!1),
                            P = T[0],
                            k = T[1],
                            R = (0, a.useState)(!1),
                            N = (R[0], R[1]),
                            O = (0, a.useCallback)(
                                (e) => {
                                    o || (v && v(), f && f(e));
                                },
                                [o, v, f],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === We.LEFT;
                                    o || (u && k(!0), u && p && p(e), D && ke(D));
                                },
                                [o, p, D],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    o || (k(!1), h && h(e));
                                },
                                [o, h],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    o || (C && C(e), _ && ke(_));
                                },
                                [o, C, _],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    o || (k(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!0), b && b(e));
                                },
                                [o, b],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!1), x && x(e));
                                },
                                [o, x],
                            ),
                            j = i().createElement(
                                'div',
                                { className: Ve.label },
                                i().createElement(
                                    'div',
                                    { className: g()(Ve.labelContent, 's-labelContent'), style: y },
                                    w || S,
                                ),
                            );
                        return i().createElement(
                            'div',
                            Xe(
                                {
                                    id: u,
                                    className: g()(Ve.base, Ve[`base__${E}`], Ve[`base__${A}`], {
                                        [Ve.base__checked]: r,
                                        [Ve.base__disabled]: o,
                                        [Ve.base__mouseDown]: P,
                                        [Ve.base__alert]: l,
                                        [Ve.base__center]: L === je.Center,
                                        [Ve.base__bottom]: L === je.Bottom,
                                    }),
                                    onClick: O,
                                    onMouseEnter: W,
                                    onMouseLeave: V,
                                    onMouseDown: H,
                                    onMouseUp: I,
                                    onFocus: G,
                                    onBlur: U,
                                },
                                M,
                            ),
                            i().createElement(
                                'div',
                                { className: Ve.input },
                                i().createElement('div', { className: Ve.alertOverlay }),
                                i().createElement('div', { className: Ve.inputHoverOverlay }),
                                i().createElement('div', { className: Ve.highlight }),
                            ),
                            i().createElement('div', { className: Ve.checkmark }),
                            ((w || S) && j) || null,
                        );
                    },
                    Ye = [
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
                function Ke(e) {
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
                const qe = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Ze = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = e.decoratorId,
                            m = void 0 === A ? 0 : A,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            h = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ye);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            v = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (qe(t, m, { isMouseEvent: !0, on: !0, arguments: Ke(r) }, f),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, m, r, f, B]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        qe(t, m, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, m, f, h]),
                            x = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    Qe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const eu = R.views.common.tooltip_window.simple_tooltip_content,
                    uu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Qe);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, s]);
                        return i().createElement(
                            Ze,
                            Je(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? eu.SimpleTooltipHtmlContent('resId') : eu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    tu = R.strings.museum_of_glory,
                    ru = (0, a.memo)(({ isAudioEnabled: e, isAudioCheck: u, onAudioCheckboxToggle: t }) =>
                        i().createElement(
                            uu,
                            {
                                body: e
                                    ? tu.tooltips.audioButton.enabled.body()
                                    : tu.tooltips.audioButton.disabled.body(),
                                header: e
                                    ? tu.tooltips.audioButton.enabled.header()
                                    : tu.tooltips.audioButton.disabled.header(),
                            },
                            i().createElement(
                                'div',
                                { className: 'AudioButton_base_08' },
                                i().createElement($e, {
                                    text: tu.header.audioButton.label(),
                                    type: Ue.main,
                                    size: Ge.medium,
                                    onClick: t,
                                    isChecked: u,
                                    isDisabled: !e,
                                }),
                            ),
                        ),
                    );
                var nu = t(552);
                const au = {
                        from: { opacity: 0 },
                        enter: { opacity: 0.3 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 450,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    iu = (0, a.memo)(({ onAction: e, isStarted: u, isDisabled: t, buttonLabel: r }) => {
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            s = n[1],
                            l = (0, a.useCallback)(() => {
                                (Re.playClick(), e());
                            }, [e]),
                            c = (0, nu.useTransition)(o, Object.assign({ key: o }, au)),
                            E = t
                                ? 'StartButton_base__disabled_60'
                                : u
                                  ? 'StartButton_base__stop_f2'
                                  : 'StartButton_base__start_9b';
                        return i().createElement(
                            'div',
                            {
                                className: g()('StartButton_base_76', E, !t && 'StartButton_base__enabled_98'),
                                onClick: l,
                                onMouseEnter: () => {
                                    (Re.playHighlight(), s(!0));
                                },
                                onMouseLeave: () => {
                                    s(!1);
                                },
                            },
                            i().createElement(
                                'div',
                                { className: 'StartButton_mainButton_1c' },
                                i().createElement('div', { className: 'StartButton_image_32' }),
                                i().createElement(Se, { className: 'StartButton_animate_9e', text: r }),
                            ),
                            u &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: 'StartButton_layer_1_f1' }),
                                    i().createElement('div', { className: 'StartButton_layer_2_1c' }),
                                    i().createElement('div', { className: 'StartButton_layer_3_a6' }),
                                ),
                            c(
                                (e, u) =>
                                    u &&
                                    i().createElement(nu.animated.div, { className: 'StartButton_hover_fc', style: e }),
                            ),
                        );
                    }),
                    ou = R.strings.museum_of_glory,
                    su = (0, a.memo)(({ isExcursionPlaying: e, isExcursionPaused: u, onAnimate: t }) =>
                        i().createElement(
                            'div',
                            { className: 'ExcursionButton_base_1d' },
                            i().createElement(
                                uu,
                                {
                                    body: ou.tooltips.excursionButton.body(),
                                    header: ou.tooltips.excursionButton.header(),
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(iu, {
                                        onAction: t,
                                        isStarted: e && !u,
                                        isDisabled: !u && !e,
                                        buttonLabel: ou.header.excursionButton.label(),
                                    }),
                                ),
                            ),
                        ),
                    ),
                    lu = R.strings.museum_of_glory.header,
                    cu = (0, a.memo)(({ className: e, nation: u, vehicleType: t }) =>
                        i().createElement(
                            'div',
                            { className: g()(e, 'MainText_base_cc') },
                            i().createElement(Se, { className: 'MainText_subtitle_86', text: lu.subtitle() }),
                            i().createElement(Se, {
                                className: 'MainText_title_2a',
                                text: lu.title(),
                                format: {
                                    binding: { vehicleType: lu.vehicleType.$dyn(Ee(t)), nation: lu.nation.$dyn(u) },
                                },
                            }),
                        ),
                    ),
                    Eu = [
                        'className',
                        'nation',
                        'vehicleType',
                        'isAudioEnabled',
                        'isAudioCheck',
                        'isExcursionPlaying',
                        'isExcursionPaused',
                        'onAudioCheckboxToggle',
                        'onClose',
                        'onAnimate',
                    ];
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Au = (0, a.memo)((e) => {
                        let u = e.className,
                            t = e.nation,
                            r = e.vehicleType,
                            n = e.isAudioEnabled,
                            a = e.isAudioCheck,
                            o = e.isExcursionPlaying,
                            s = e.isExcursionPaused,
                            l = e.onAudioCheckboxToggle,
                            c = e.onClose,
                            E = e.onAnimate,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Eu);
                        return i().createElement(
                            'div',
                            { className: g()('Header_base_57', u) },
                            i().createElement(
                                'div',
                                { className: 'Header_container_f5' },
                                i().createElement(
                                    'div',
                                    du({ className: 'Header_buttons_35' }, d),
                                    i().createElement(
                                        'div',
                                        { className: 'Header_audioButton_7a' },
                                        i().createElement(ru, {
                                            onAudioCheckboxToggle: l,
                                            isAudioCheck: a,
                                            isAudioEnabled: n,
                                        }),
                                    ),
                                    i().createElement(su, {
                                        isExcursionPlaying: o,
                                        isExcursionPaused: s,
                                        onAnimate: E,
                                    }),
                                ),
                                i().createElement(cu, { className: 'Header_mainText_9a', nation: t, vehicleType: r }),
                                i().createElement(
                                    'div',
                                    du({ className: 'Header_closeLink_be' }, d),
                                    i().createElement(Ie, {
                                        side: 'right',
                                        type: 'close',
                                        caption: R.strings.museum_of_glory.header.closeLink(),
                                        onClick: c,
                                        classNames: { caption: 'Header_closeCaption_8f' },
                                    }),
                                ),
                            ),
                        );
                    }),
                    mu = ({ children: e, moveSpace: u, isDisabled: t = !1, onStartMoving: r, onEndMoving: n }) => {
                        const o = (0, a.useState)(!1),
                            s = o[0],
                            l = o[1],
                            c = (0, a.useState)({ x: 0, y: 0 }),
                            E = c[0],
                            d = c[1],
                            A = (0, a.useRef)(null),
                            m = (0, a.useCallback)(() => {
                                (l(!1), null == n || n());
                            }, [n]);
                        (0, a.useEffect)(
                            () => (
                                window.addEventListener('mouseup', m),
                                () => window.removeEventListener('mouseup', m)
                            ),
                            [m],
                        );
                        const _ = (e) => {
                            if (!A.current) return;
                            const u = A.current.getBoundingClientRect(),
                                t = u.width,
                                r = u.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= r - 1);
                        };
                        return i().createElement(
                            'div',
                            {
                                ref: A,
                                className: g()(
                                    'SceneWrapper_base_82',
                                    s && 'SceneWrapper_base__down_25',
                                    t && 'SceneWrapper_base__moveSpaceDisabled_ef',
                                ),
                                onMouseDown: t
                                    ? void 0
                                    : (e) => {
                                          (e.preventDefault(),
                                              0 === e.button &&
                                                  _(e) &&
                                                  (l(!0), null == r || r(), d({ x: e.clientX, y: e.clientY })));
                                      },
                                onMouseMove: t
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), s)) {
                                              if (!_(e)) return;
                                              const t = e.clientX !== E.x ? e.clientX - E.x : 0,
                                                  n = e.clientY !== E.y ? e.clientY - E.y : 0;
                                              ((0 === t && 0 === n) || null == r || r(),
                                                  d({ x: e.clientX, y: e.clientY }),
                                                  u({ dx: t, dy: n, dz: 0 }));
                                          }
                                      },
                                onMouseUp: t
                                    ? void 0
                                    : () => {
                                          (l(!1), null == n || n());
                                      },
                                onWheel: t
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), !_(e))) return;
                                          const t = e.deltaY < 0;
                                          u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                      },
                            },
                            e,
                        );
                    },
                    _u = (e) => {
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
                    Fu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Du = [];
                function Cu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Du)
                    );
                }
                function Bu(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, i),
                        n,
                    ];
                }
                function hu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                let gu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(gu || (gu = {}));
                const pu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    fu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return Fu(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? pu : c,
                                d = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                m = (() => {
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
                                                                    if ('string' == typeof e) return hu(e, u);
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
                                                                              ? hu(e, u)
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
                                _ = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    i = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function E() {
                                                        ((i = Date.now()), t.apply(l, s));
                                                    }
                                                    a ||
                                                        (r && !n && E(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    s
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
                                F = (0, nu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), i && _());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            C.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = B(u, e, r);
                                        h(a);
                                    },
                                    [h, B, E.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && g(r(e)),
                                            d.current && m.trigger('mouseWheel', e, D.scrollPosition, u(d.current)));
                                    },
                                    [D.scrollPosition, g, m],
                                ),
                                f = ((e, u = []) => {
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
                                        _u(() => {
                                            const e = d.current;
                                            e &&
                                                (h(o(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                v = Cu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && h(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            const b = (0, a.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: h,
                                    applyStepTo: g,
                                    contentRef: d,
                                    wrapperRef: A,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, h, g, b, m.off, m.on, v, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    vu = fu({
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
                        getDirection: (e) => (e.deltaY > 1 ? gu.Next : gu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    bu = 'HorizontalBar_base__nonActive_82',
                    xu = 'disable',
                    wu = { pending: !1, offset: 0 },
                    yu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Su = () => {},
                    Lu = (e, u) => Math.max(20, e.offsetWidth * u),
                    Mu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = yu, onDrag: r = Su }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(wu),
                            A = d[0],
                            m = d[1],
                            _ = (0, a.useCallback)(
                                (e) => {
                                    (m(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    E = Fu(0, 1, a / (n - r)),
                                    d = (u.offsetWidth - Lu(u, i)) * E;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(xu),
                                                    void s.current.classList.remove(xu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(xu),
                                                    void s.current.classList.add(xu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(xu), s.current.classList.remove(xu));
                                        }
                                    })(d));
                            },
                            D = Cu(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    ((u.style.width = `${Lu(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add(bu) : n.current.classList.remove(bu)));
                                })(),
                                    F());
                            });
                        ((0, a.useEffect)(() => _u(D)),
                            (0, a.useEffect)(
                                () =>
                                    _u(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Su;
                                        const r = () => {
                                            (t(), (t = _u(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            i = c.current;
                                        if (!n || !a || !i) return;
                                        const o = u.screenX - A.offset - a.getBoundingClientRect().x,
                                            s = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: s }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), _(wu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, r, _]));
                        const C = Bu((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const p = (e) => {
                            e.target.classList.contains(xu) || ke('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: g()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: g()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xu) || 0 !== e.button || (ke('play'), B(gu.Next));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: g()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (ke('play'),
                                            u.target === r
                                                ? _({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? gu.Prev : gu.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: c, className: g()('HorizontalBar_thumb_fd', u.thumb) }),
                                i().createElement('div', { className: g()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: g()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xu) || 0 !== e.button || (ke('play'), B(gu.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Tu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Pu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: g()(Tu.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: g()(Tu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(Tu.defaultScrollArea, n) },
                                i().createElement(ku, { className: s, api: d, classNames: o }, e),
                            ),
                            i().createElement(Mu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    ku = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => _u(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: g()(Tu.base, u), style: n },
                            i().createElement(
                                'div',
                                {
                                    className: g()(Tu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: g()(Tu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((ku.Bar = Mu),
                    (ku.Default = Pu),
                    (ku.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => _u(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: g()(Tu.base, u) },
                            i().createElement(
                                'div',
                                { className: g()(Tu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: g()(Tu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const Ru = fu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? gu.Next : gu.Prev),
                    }),
                    Nu = 'VerticalBar_base__nonActive_42',
                    Ou = 'disable',
                    Hu = () => {},
                    Iu = { pending: !1, offset: 0 },
                    Wu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Vu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Gu = (e, u) => Math.max(20, e.offsetHeight * u),
                    Uu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Wu, onDrag: r = Hu }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(Iu),
                            A = d[0],
                            m = d[1],
                            _ = (0, a.useCallback)(
                                (e) => {
                                    (m(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = Cu(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Gu(t, i)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(Nu) : n.current.classList.remove(Nu)),
                                    i
                                );
                            }),
                            D = Cu(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    E = Fu(0, 1, a / (n - r)),
                                    d = (u.offsetHeight - Gu(u, i)) * E;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Ou),
                                                    void s.current.classList.remove(Ou)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Ou),
                                                    void s.current.classList.add(Ou)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Ou), s.current.classList.remove(Ou));
                                        }
                                    })(d));
                            }),
                            C = Cu(() => {
                                Vu(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, a.useEffect)(() => _u(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Vu(e, () => {
                                        D();
                                    });
                                };
                                let t = Hu;
                                const r = () => {
                                    (t(), (t = _u(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        Vu(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                i = e.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const o = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                s = (o / n.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            _(Iu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, A.offset, A.pending, r, _]));
                        const B = Bu((u) => e.applyStepTo(u), E, [e]),
                            h = B[0],
                            p = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ou) || ke('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: g()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: g()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ou) || 0 !== e.button || (ke('play'), h(gu.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: g()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (ke('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  _({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? gu.Prev : gu.Next),
                                                  c.current &&
                                                      Vu(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: c, className: u.thumb }),
                                i().createElement('div', { className: g()('VerticalBar_rail_43', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: g()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ou) || 0 !== e.button || (ke('play'), h(gu.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    ju = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    zu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: g()(ju.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: g()(ju.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(ju.area, n) },
                                i().createElement(Xu, { className: o, classNames: s, api: d }, e),
                            ),
                            i().createElement(Uu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Xu = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => _u(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: g()(ju.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(ju.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Xu.Default = zu;
                const $u = { Vertical: n, Horizontal: r },
                    Yu = { type: 'idle' },
                    Ku = 'Dates_dateText_da',
                    qu = (0, a.memo)(
                        ({
                            className: e,
                            years: u,
                            hoveredDate: t,
                            onDateClick: r,
                            onDateMouseEnter: n,
                            onDateMouseLeave: a,
                        }) =>
                            i().createElement(
                                'div',
                                { className: g()('Dates_base_55', e) },
                                u.map((e, o) =>
                                    i().createElement(
                                        'div',
                                        { className: 'Dates_dateWrapper_69', key: e.year },
                                        i().createElement(Se, {
                                            className: g()(Ku, t === e.year && 'Dates_dateText__hovered_50'),
                                            text: String(e.year),
                                            onClick: r(e.index),
                                            onMouseEnter: n(e.year),
                                            onMouseLeave: a,
                                        }),
                                        o !== u.length - 1 &&
                                            i().createElement(Se, {
                                                className: Ku,
                                                text: R.strings.museum_of_glory.years.delimiter(),
                                            }),
                                    ),
                                ),
                            ),
                    ),
                    Zu = (0, a.memo)(({ name: e, techName: u, isSelected: t, year: r, isHovered: n }) => {
                        const a = g()(
                                'CardContent_vehicleImg_fd',
                                t && 'CardContent_vehicleImg__selected_c6',
                                n && 'CardContent_vehicleImg__hovered_70',
                            ),
                            o = g()(
                                'CardContent_text_be',
                                t && 'CardContent_text__selected_ae',
                                n && 'CardContent_text__hovered_24',
                            );
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'div',
                                { className: 'CardContent_imgWrapper_01' },
                                i().createElement('div', {
                                    className: a,
                                    style: {
                                        backgroundImage: `url(${R.images.museum_of_glory.gui.maps.icons.vehicles.$dyn(Ee(u))})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'CardContent_textWrapper_f4' },
                                i().createElement(Se, { className: o, text: e }),
                                i().createElement(Se, {
                                    className: o,
                                    text: R.strings.museum_of_glory.vehicleCarousel.year(),
                                    format: { binding: { year: r } },
                                }),
                            ),
                        );
                    });
                let Qu;
                var Ju;
                function et() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (u(), (e.current = 0));
                                        }, t)));
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
                (((Ju = Qu || (Qu = {})).SHORT_DATE = 'short-date'),
                    (Ju.SHORT_TIME = 'short-time'),
                    (Ju.SHORT_DATE_TIME = 'short-date-time'),
                    (Ju.FULL_DATE = 'full-date'),
                    (Ju.FULL_DATE_TIME = 'full-date-time'),
                    (Ju.MONTH = 'month'),
                    (Ju.MONTH_DATE = 'month-date'),
                    (Ju.DATE_MONTH = 'date-month'),
                    (Ju.MONTH_YEAR = 'month-year'),
                    (Ju.WEEK_DAY = 'week-day'),
                    (Ju.WEEK_DAY_TIME = 'week-day-time'),
                    (Ju.YEAR = 'year'),
                    (Ju.DATE_YEAR = 'date-year'),
                    Date.now());
                const ut = 'Pointer_pointerBg_49',
                    tt = (0, a.memo)(({ year: e, className: u, isPointerVisible: t }) =>
                        i().createElement(
                            'div',
                            { className: g()('Pointer_base_0d', u, t && 'Pointer_base__white_63') },
                            i().createElement('div', { className: ut }),
                            i().createElement('div', { className: g()(ut, 'Pointer_pointerBg__stick_73') }),
                            i().createElement(Se, { className: 'Pointer_pointerText_6e', text: String(e) }),
                        ),
                    ),
                    rt = (0, a.memo)(({ progressWidth: e, isHidden: u, isInExcursion: t, isFullProgress: r }) => {
                        const n = (0, a.useRef)(e),
                            o = (0, a.useState)(!1),
                            s = o[0],
                            l = o[1];
                        (0, a.useEffect)(() => {
                            if (e > 0 && t) n.current = e;
                            else if (0 === e && n.current > 0 && !t)
                                return (
                                    l(!0),
                                    ((u, t) => {
                                        let r;
                                        const a = setTimeout(() => {
                                            ((n.current = e), (r = void l(!1)));
                                        }, 250);
                                        return () => {
                                            ('function' == typeof r && r(), clearTimeout(a));
                                        };
                                    })()
                                );
                        }, [e, t]);
                        const c = s ? n.current : e;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', { className: 'ProgressLine_defaultShadow_5c' }),
                            i().createElement(
                                'div',
                                {
                                    className: g()(
                                        'ProgressLine_progressShadowWrapper_15',
                                        u && !r && 'ProgressLine_progressShadowWrapper__hidden_7a',
                                    ),
                                },
                                i().createElement('div', {
                                    className: g()(
                                        'ProgressLine_progressShadow_dd',
                                        t && 'ProgressLine_progressShadow__hidden_70',
                                    ),
                                    style: { width: `${e}%` },
                                }),
                                i().createElement('div', {
                                    className: g()(
                                        'ProgressLine_progressShadowExcursion_cc',
                                        t && 'ProgressLine_progressShadowExcursion__visible_f5',
                                    ),
                                    style: { width: `${c}%` },
                                }),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: g()(
                                        'ProgressLine_progressWrapper_2d',
                                        u && !r && 'ProgressLine_progressWrapper__hidden_d4',
                                    ),
                                },
                                i().createElement('div', {
                                    className: g()(
                                        'ProgressLine_progressLine_7c',
                                        r && 'ProgressLine_progressLine__hidden_95',
                                    ),
                                    style: { width: `${e}%` },
                                }),
                                i().createElement('div', {
                                    className: g()(
                                        'ProgressLine_progressLineExcursion_59',
                                        t && 'ProgressLine_progressLineExcursion__visible_84',
                                    ),
                                    style: { width: `${c}%` },
                                }),
                            ),
                        );
                    }),
                    nt = 100,
                    at = (0, a.memo)(
                        ({
                            year: e,
                            isPointerVisible: u,
                            isSelected: t,
                            time: r,
                            isAudioChecked: n,
                            isReselect: o,
                            isAudioEnabled: s,
                            isExcursionPlaying: l,
                            isLoaded: c,
                            isExcursionPaused: E,
                            isFullProgress: d,
                            isIntroPlay: A,
                            index: m,
                            isLast: _,
                            isWindowAccessible: F,
                            onVehicleExcursionSelect: D,
                            onVehiclePlayTimeLog: C,
                            onExcursionEnd: B,
                        }) => {
                            const h = (0, a.useState)(d ? nt : 0),
                                p = h[0],
                                f = h[1],
                                v = (0, a.useRef)(null),
                                b = (0, a.useRef)(null),
                                x = (0, a.useState)(!1),
                                w = x[0],
                                y = x[1],
                                S = (0, a.useState)(!1),
                                L = S[0],
                                M = S[1],
                                T = (() => {
                                    const e = (0, a.useState)(!1),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = (e) => t(e);
                                            return (
                                                engine.on('clientMinimized', e),
                                                () => {
                                                    engine.off('clientMinimized', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })(),
                                P = et(),
                                k = et(),
                                R = et(),
                                N = (0, a.useRef)(n && s),
                                O = (0, a.useRef)(!1),
                                H = (0, a.useRef)(0),
                                I = (0, a.useRef)(!1),
                                W = (0, a.useRef)(0),
                                V = F && !T,
                                G = (0, a.useRef)(V),
                                U = l || E,
                                j = (({ isExcursionPaused: e, isExcursionPlaying: u, isClientActive: t }) => {
                                    const r = (0, a.useRef)(e),
                                        n = (0, a.useRef)(u),
                                        i = (0, a.useRef)(t);
                                    return (
                                        (0, a.useEffect)(() => {
                                            r.current = e;
                                        }, [e]),
                                        (0, a.useEffect)(() => {
                                            n.current = u;
                                        }, [u]),
                                        (0, a.useEffect)(() => {
                                            i.current = t;
                                        }, [t]),
                                        { isExcursionPausedRef: r, isExcursionPlayingRef: n, isClientActiveRef: i }
                                    );
                                })({ isExcursionPaused: E, isExcursionPlaying: l, isClientActive: V }),
                                z = j.isExcursionPausedRef,
                                X = j.isExcursionPlayingRef,
                                $ = j.isClientActiveRef,
                                Y = () => {
                                    v.current && (cancelAnimationFrame(v.current), (v.current = null));
                                },
                                K = (0, a.useCallback)(() => {
                                    ((O.current = !1),
                                        (H.current = 0),
                                        (W.current = 0),
                                        Y(),
                                        P.clear(),
                                        k.clear(),
                                        f(0),
                                        y(!1),
                                        M(!1),
                                        (b.current = null));
                                }, [k, P]);
                            ((0, a.useEffect)(() => {
                                d && f(nt);
                            }, [d]),
                                (0, a.useEffect)(() => {
                                    t && M(!1);
                                }, [o, t]),
                                (0, a.useLayoutEffect)(() => {
                                    (t && n && s) || U || K();
                                }, [t, n, s, K, U]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (Y(), P.clear(), k.clear(), R.clear());
                                    },
                                    [k, P, R],
                                ),
                                (0, a.useEffect)(() => {
                                    V ||
                                        (null !== b.current &&
                                            ((H.current = performance.now() - b.current), (b.current = null)),
                                        Y());
                                }, [V]),
                                (0, a.useEffect)(() => {
                                    l &&
                                        t &&
                                        !E &&
                                        (p === nt
                                            ? (_ && ((I.current = !0), B()), D(m + 1))
                                            : 0 === p && (y(!1), D(m)));
                                }, [E, l, t, D, p, m, _, B]),
                                (0, a.useEffect)(() => {
                                    (U
                                        ? (M(!1), (O.current = !0))
                                        : (!N.current && n && s && (M(!0), (O.current = !1)),
                                          !N.current || n || s || (M(!0), (O.current = !1)),
                                          N.current && n && t && s && c && (O.current = !0)),
                                        (N.current = n && s));
                                }, [o, V, n, s, t, c, U]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return (
                                            b.current &&
                                                ((H.current = performance.now() - b.current), (b.current = null)),
                                            void Y()
                                        );
                                    if ((U && !O.current) || !t || !c || A || L) return void Y();
                                    if (!(U || (n && s && O.current))) return void Y();
                                    U || G.current !== V ? (G.current = V) : K();
                                    const e = (u) => {
                                        if (!v.current || z.current || !$.current) return;
                                        if (_ && I.current) return ((I.current = !1), void M(!0));
                                        b.current || (b.current = u - H.current);
                                        const t = u - b.current,
                                            n = Math.min(nt, (t / r) * nt),
                                            a = Math.ceil(t / 1e3);
                                        (f(n), a !== W.current && ((W.current = a), C(Math.max(0, a - 1), m)));
                                        const i = X.current || z.current;
                                        n < nt
                                            ? (v.current = requestAnimationFrame(e))
                                            : n !== nt ||
                                              i ||
                                              (_ && I.current
                                                  ? (f(0), M(!0))
                                                  : k.run(() => {
                                                        i ||
                                                            (y(!0),
                                                            P.run(() => {
                                                                i || ((b.current = null), (H.current = 0), f(0), M(!0));
                                                            }, 250));
                                                    }, 1e3));
                                    };
                                    return (
                                        (v.current = requestAnimationFrame(e)),
                                        () => {
                                            (Y(), P.clear(), k.clear());
                                        }
                                    );
                                }, [t, r, n, o, P, k, s, K, C, U, c, E, _, V, L, A]));
                            const q = g()(
                                'VehicleProgress_pointerCentering_68',
                                u && 'VehicleProgress_pointerCentering__show_86',
                            );
                            return i().createElement(
                                'div',
                                { className: 'VehicleProgress_base_d8' },
                                i().createElement('div', { className: 'VehicleProgress_progressBg_b0' }),
                                i().createElement(rt, {
                                    progressWidth: p,
                                    isHidden: w,
                                    isInExcursion: U,
                                    isFullProgress: d,
                                }),
                                i().createElement(tt, { year: e, className: q, isPointerVisible: u }),
                            );
                        },
                    );
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const ot = (0, a.memo)(
                        ({
                            vehicleData: e,
                            isSelected: u,
                            isLast: t,
                            isPointerVisible: r,
                            isAudioChecked: n,
                            isAudioEnabled: o,
                            isExcursionPlaying: s,
                            isFullProgress: l,
                            isExcursionPaused: c,
                            index: E,
                            isIntroPlay: d,
                            isWindowAccessible: A,
                            onVehicleExcursionSelect: m,
                            onVehiclePlayTimeLog: _,
                            onExcursionEnd: F,
                        }) => {
                            const D = g()(u ? 'VehicleCard_selected_ad' : 'VehicleCard_hoverBg_a7'),
                                C = (0, a.useState)(!1),
                                B = C[0],
                                h = C[1],
                                p = (0, a.useState)(!1),
                                f = p[0],
                                v = p[1];
                            return i().createElement(
                                uu,
                                { body: R.strings.museum_of_glory.tooltips.vehicle.body(), isEnabled: s && !c && !u },
                                i().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            'VehicleCard_base_fd',
                                            f && 'VehicleCard_base__hovered_f5',
                                            s && !c && 'VehicleCard_base__blocked_28',
                                        ),
                                        onClick: () => {
                                            u && h(!B);
                                        },
                                        onMouseEnter: () => {
                                            (s && !c) || (Re.playHighlight(), v(!0));
                                        },
                                        onMouseLeave: () => {
                                            v(!1);
                                        },
                                    },
                                    i().createElement(
                                        'div',
                                        { className: 'VehicleCard_cardContent_57' },
                                        i().createElement(at, {
                                            index: E,
                                            year: e.year,
                                            isPointerVisible: r,
                                            isSelected: u,
                                            isIntroPlay: d,
                                            isAudioChecked: n,
                                            isReselect: B,
                                            isAudioEnabled: o,
                                            time: e.time,
                                            isExcursionPlaying: s,
                                            isFullProgress: l,
                                            isLoaded: e.isLoaded,
                                            isExcursionPaused: c,
                                            isLast: t,
                                            isWindowAccessible: A,
                                            onVehicleExcursionSelect: m,
                                            onVehiclePlayTimeLog: _,
                                            onExcursionEnd: F,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: 'VehicleCard_tankCard_dc' },
                                            i().createElement('div', { className: D }),
                                            i().createElement(
                                                'div',
                                                { className: 'VehicleCard_cardContentWrapper_c9' },
                                                i().createElement(Zu, it({ isSelected: u, isHovered: f }, e)),
                                            ),
                                        ),
                                    ),
                                    !t && i().createElement('div', { className: 'VehicleCard_separator_29' }),
                                ),
                            );
                        },
                    ),
                    st = 'VehicleCarousel_arrow_53',
                    lt = 'VehicleCarousel_arrow__enabled_72',
                    ct = 'VehicleCarousel_arrow__disabled_12',
                    Et = 'VehicleCarousel_arrow__hidden_59',
                    dt = 'VehicleCarousel_borderCard_82',
                    At = 'VehicleCarousel_dates_12',
                    mt = s.O.view.remToPx(269),
                    _t = (0, a.memo)(
                        ({
                            vehicles: e,
                            currentVehicleIndex: u,
                            years: t,
                            isIntroPlay: r,
                            isExcursionPaused: n,
                            isAudioChecked: o,
                            isAudioEnabled: l,
                            isExcursionPlaying: c,
                            isWindowAccessible: E,
                            onSelectVehicle: d,
                            onPlayExcursion: A,
                            onVehiclePlayTimeLog: m,
                            onExcursionEnd: _,
                            onSetIsDisabledMouse: F,
                        }) => {
                            const D = vu(),
                                C = D.events,
                                B = (0, a.useState)(0),
                                h = B[0],
                                p = B[1],
                                f = (0, a.useState)([]),
                                b = f[0],
                                x = f[1],
                                y = (0, a.useState)([]),
                                S = y[0],
                                L = y[1],
                                M = (0, a.useState)([0, 0]),
                                T = M[0],
                                P = M[1],
                                k = { left: T[0], right: T[1] };
                            !(function (e, u, t) {
                                const r = e.contentRef,
                                    n = e.wrapperRef,
                                    i = e.scrollPosition,
                                    o = e.clampPosition,
                                    l = e.animationScroll,
                                    c = e.events,
                                    E = (0, a.useState)(Yu),
                                    d = E[0],
                                    A = E[1];
                                ((0, a.useEffect)(() => {
                                    const e = r.current;
                                    e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                }, [r, d.type]),
                                    (0, a.useEffect)(() => {
                                        if ('dragging' !== d.type) return;
                                        const e = s.O.client.events.mouse.move(([e, t]) => {
                                                const a = r.current,
                                                    s = n.current;
                                                if (!a || !s) return;
                                                if ('inside' === t && e.clientX < 0) return;
                                                const c = 'inside' === t ? e.clientX : e.clientX - s.offsetLeft,
                                                    E = d.positionFrom - c,
                                                    A = d.previousScrollPosition + E;
                                                i.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: o(a, A),
                                                            from: { scrollPosition: l.scrollPosition.get() },
                                                        },
                                                        u,
                                                    ),
                                                );
                                            }),
                                            t = s.O.client.events.mouse.up(function () {
                                                A({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), t());
                                        };
                                    }, [l.scrollPosition, o, r, d, i, n, u]),
                                    (0, a.useEffect)(() => {
                                        if ('scrollingToEnd' !== d.type) return;
                                        const e = () => {
                                            A(Yu);
                                        };
                                        return (l.scrollPosition.idle && e(), c.on('rest', e), () => c.off('rest', e));
                                    }, [l.scrollPosition, d.type, c]),
                                    (0, a.useEffect)(() => {
                                        const e = r.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            A({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: l.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [l.scrollPosition, r, t]));
                            })(D);
                            const R = w().mediaSize,
                                N = (0, a.useState)(null),
                                O = N[0],
                                H = N[1],
                                I = (0, a.useCallback)(
                                    (e) => () => {
                                        (Re.playHighlight(), H(e));
                                    },
                                    [],
                                );
                            (0, a.useEffect)(() => {
                                b.some((e) => e.year === O) || S.some((e) => e.year === O) || H(null);
                            }, [O, b, S]);
                            const W = (0, a.useCallback)(() => {
                                H(null);
                            }, []);
                            ((0, a.useEffect)(() => {
                                const e = () => {
                                    var e;
                                    const u = D.animationScroll.scrollPosition.goal,
                                        r = Math.round(
                                            (null == (e = D.wrapperRef.current)
                                                ? void 0
                                                : e.getBoundingClientRect().width) || 0,
                                        ),
                                        n = (e, u) => Math.floor(mt / (R === v.ExtraSmall ? e : 2)) - u,
                                        a = t.filter(({ index: e, margin: t }) => u > e * mt + n(4, t)),
                                        i = t.filter(({ index: e, margin: t }) => u + r < (e + 1) * mt + n(10, t));
                                    (x(a), L(i), p(u));
                                    const o = D.getBounds(),
                                        s = o[0],
                                        l = o[1];
                                    (s === k.left && l === k.right) || P([s, l]);
                                };
                                return (
                                    C.on('change', e),
                                    C.on('recalculateContent', e),
                                    C.on('resizeHandled', e),
                                    () => {
                                        (C.off('change', e), C.off('recalculateContent', e), C.off('resizeHandled', e));
                                    }
                                );
                            }, [C, R, D, k.left, k.right, t]),
                                (0, a.useEffect)(() => {
                                    D.applyScroll((u - 1) * mt + mt / 2);
                                }, [D, u]));
                            const V = g()(
                                    st,
                                    'VehicleCarousel_arrow__left_f1',
                                    h === k.left ? ct : lt,
                                    k.right <= 0 && Et,
                                ),
                                G = g()(
                                    st,
                                    'VehicleCarousel_arrow__right_a4',
                                    h === k.right ? ct : lt,
                                    k.right <= 0 && Et,
                                ),
                                U = (0, a.useCallback)(
                                    (e) => {
                                        (c && A(!1), d(e));
                                    },
                                    [d, c, A],
                                ),
                                j = (0, a.useCallback)(
                                    (u) => {
                                        u < e.length ? d(u) : A(!1);
                                    },
                                    [d, A, e],
                                ),
                                z = (0, a.useCallback)(
                                    (e) => () => {
                                        (c && !n) || (Re.playClick(), U(e));
                                    },
                                    [U, n, c],
                                ),
                                X = (0, a.useCallback)(
                                    (e) => () => {
                                        (Re.playClick(),
                                            H(null),
                                            F(!1),
                                            D.applyScroll((e - 1) * mt + mt / 2),
                                            (c && !n) || U(e));
                                    },
                                    [U, n, c, F, D],
                                ),
                                $ = g()(dt, 'VehicleCarousel_borderCard__left_4c'),
                                Y = g()(dt, 'VehicleCarousel_borderCard__right_54'),
                                K = g()(At, 'VehicleCarousel_dates__right_a7'),
                                q = g()(k.right > 0 && 'VehicleCarousel_vehicleCarouselWrapper_00');
                            return i().createElement(
                                'div',
                                { className: 'VehicleCarousel_base_0e' },
                                i().createElement(
                                    'div',
                                    { className: 'VehicleCarousel_datesWrapper_da' },
                                    i().createElement(qu, {
                                        className: At,
                                        years: b,
                                        hoveredDate: O,
                                        onDateClick: X,
                                        onDateMouseEnter: I,
                                        onDateMouseLeave: W,
                                    }),
                                    i().createElement(qu, {
                                        className: K,
                                        years: S,
                                        hoveredDate: O,
                                        onDateClick: X,
                                        onDateMouseEnter: I,
                                        onDateMouseLeave: W,
                                    }),
                                ),
                                i().createElement(
                                    $u.Horizontal.Area,
                                    { api: D, className: q },
                                    i().createElement(
                                        'div',
                                        { className: 'VehicleCarousel_vehicleCardsSlider_0b' },
                                        i().createElement('div', { className: $ }),
                                        e.map((a, s) => {
                                            const d =
                                                    t.some((e) => e.index === s) &&
                                                    !b.some((e) => e.index === s) &&
                                                    !S.some((e) => e.index === s),
                                                A = (c || n) && u > s;
                                            return i().createElement(
                                                'div',
                                                { key: s, onClick: z(s) },
                                                i().createElement(ot, {
                                                    isExcursionPaused: n,
                                                    vehicleData: a,
                                                    index: s,
                                                    isIntroPlay: r,
                                                    isSelected: s === u,
                                                    isLast: s === e.length - 1,
                                                    isPointerVisible: d,
                                                    isAudioChecked: o,
                                                    isAudioEnabled: l,
                                                    isExcursionPlaying: c,
                                                    isWindowAccessible: E,
                                                    isFullProgress: A,
                                                    onVehicleExcursionSelect: j,
                                                    onVehiclePlayTimeLog: m,
                                                    onExcursionEnd: _,
                                                }),
                                            );
                                        }),
                                        i().createElement('div', { className: Y }),
                                    ),
                                ),
                                i().createElement('div', {
                                    className: V,
                                    onClick: () => {
                                        D.applyStepTo(gu.Next);
                                    },
                                }),
                                i().createElement('div', {
                                    className: G,
                                    onClick: () => {
                                        D.applyStepTo(gu.Prev);
                                    },
                                }),
                            );
                        },
                    ),
                    Ft = (e, u) => e.getBoundingClientRect().top >= u,
                    Dt = ({ blocks: e, linesCount: u = 2, mediaSize: t }) => {
                        const r = (0, a.useState)(e),
                            n = r[0],
                            o = r[1],
                            l = (0, a.useState)({ width: 0, height: 0 }),
                            c = l[0],
                            E = l[1],
                            d = (0, a.useRef)(null),
                            A = (0, a.useRef)({ shortened: !1 }),
                            m = (0, a.useCallback)(() => {
                                (0, W.Eu)().then(() => {
                                    const e = ((e) => {
                                        const u = e.current;
                                        return u ? window.getComputedStyle(u).getPropertyValue('line-height') : '';
                                    })(d);
                                    if (e) {
                                        const t = Number(e.split('rem')[0]),
                                            r = d.current;
                                        if (r && isFinite(t)) {
                                            const e = s.O.view.remToPx(u * t);
                                            E({ height: e, width: r.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [u]);
                        ((0, a.useEffect)(() => {
                            if (e.length) return (A.current.shortened && (A.current.shortened = !1), _u(m));
                        }, [e, t, m]),
                            (0, a.useEffect)(() => {
                                if (c.height && !A.current.shortened) {
                                    const u = ((e, u) => {
                                        const t = e.current;
                                        if (t) {
                                            const e = t.getBoundingClientRect(),
                                                r = e.top + u,
                                                n = Array.from(t.children);
                                            if (n.length) {
                                                const u = ((e, u) => {
                                                    const t = e.length - 1;
                                                    if (!Ft(e[t], u)) return -1;
                                                    let r = 0,
                                                        n = t - 1,
                                                        a = !1;
                                                    for (; n - r > 1;) {
                                                        const t = r + Math.floor(0.5 * (n - r + 1));
                                                        ((a = Ft(e[t], u)), a ? (n = t) : (r = t));
                                                    }
                                                    return a || Ft(e[n], u) ? r : n;
                                                })(n, r);
                                                if (u > 0) {
                                                    const t = n[u].getBoundingClientRect();
                                                    return e.right - t.right < 16 ? u : u + 1;
                                                }
                                            }
                                        }
                                        return -1;
                                    })(d, c.height);
                                    if (-1 !== u) {
                                        const t = e.slice(0, u);
                                        (t.push(i().createElement('span', { key: u }, '...')),
                                            o(t),
                                            (A.current.shortened = !0));
                                    }
                                }
                            }, [e, c, t]));
                        const _ = (0, a.useMemo)(() => (c.height ? { maxHeight: `${c.height}rem` } : {}), [c.height]);
                        return i().createElement(
                            'div',
                            {
                                ref: d,
                                className: g()('ShortenedText_base_fe', c.height && 'ShortenedText_base__shown_af'),
                                style: _,
                            },
                            n,
                        );
                    };
                let Ct;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(Ct || (Ct = {}));
                const Bt = {
                        crew: 'troopers',
                        mass: 'tonns',
                        armor: 'armorMm',
                        caliber: 'caliberMm',
                        speed: 'kph',
                        weapon: 'caliberMm',
                        combatCrew: 'troopers',
                        power: 'hp',
                    },
                    ht = R.strings.museum_of_glory.description.characteristics,
                    gt = (0, a.memo)(({ characteristics: e, techName: u }) =>
                        i().createElement(
                            'div',
                            { className: 'Characteristics_base_92' },
                            e.map((e) => {
                                const t = e.key,
                                    r = e.value,
                                    n = Bt[t],
                                    a = ht.$dyn(Ee(`${u}_${t}`));
                                return i().createElement(
                                    'div',
                                    { className: 'Characteristics_charactElement_9a', key: t },
                                    i().createElement('div', { className: 'Characteristics_round_56' }),
                                    i().createElement(Se, {
                                        className: 'Characteristics_characteristicsText_5b',
                                        text: ht.$dyn(t),
                                        format: {
                                            binding: {
                                                value: i().createElement(Se, {
                                                    text: a || ht.$dyn(n),
                                                    className: 'Characteristics_valueText_87',
                                                    format: { binding: { value: r } },
                                                }),
                                            },
                                        },
                                    }),
                                );
                            }),
                        ),
                    ),
                    pt = {
                        base: 'VehicleInfo_base_1c',
                        flagBg: 'VehicleInfo_flagBg_fe',
                        content: 'VehicleInfo_content_d5',
                        mainInfo: 'VehicleInfo_mainInfo_f8',
                        descriptionHeader: 'VehicleInfo_descriptionHeader_2f',
                        descriptionBody: 'VehicleInfo_descriptionBody_22',
                    },
                    ft = R.strings.museum_of_glory,
                    vt = (0, U.observer)(({ className: e }) => {
                        const u = Pe().model,
                            t = (() => {
                                const e = (0, a.useContext)(F);
                                return e.extraSmall
                                    ? Ct.Tiny
                                    : e.small
                                      ? Ct.Small
                                      : e.medium || 1080 === e.height
                                        ? Ct.Medium
                                        : e.large
                                          ? Ct.Large
                                          : e.extraLarge
                                            ? Ct.Huge
                                            : Ct.None;
                            })(),
                            r = u.computes.getCurrentVehicle(),
                            n = r.name,
                            o = r.nation,
                            s = r.characteristics,
                            l = r.historicalText,
                            c = r.techName,
                            E = g()(pt.base, e),
                            d = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_362x362.${o})` };
                        return i().createElement(
                            'div',
                            { className: E },
                            i().createElement('div', { className: pt.flagBg, style: d }),
                            i().createElement(
                                'div',
                                { className: pt.content },
                                i().createElement(Se, { className: pt.mainInfo, text: n }),
                                i().createElement(gt, { characteristics: s, techName: c }),
                                i().createElement(
                                    uu,
                                    { body: l, header: ft.tooltips.historical.header() },
                                    i().createElement(
                                        'div',
                                        { className: pt.description },
                                        i().createElement(Se, {
                                            className: pt.descriptionHeader,
                                            text: ft.description.historical.header(),
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: pt.descriptionBody },
                                            i().createElement(Dt, {
                                                key: l,
                                                mediaSize: t,
                                                linesCount: 5,
                                                blocks:
                                                    ((A = l),
                                                    A.split(' ')
                                                        .filter((e) => Boolean(e))
                                                        .map((e, u) =>
                                                            i().createElement(Se, { text: e, key: `${e}-${u}` }),
                                                        )),
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                        var A;
                    });
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const xt = (0, U.observer)(() => {
                    const e = Pe(),
                        u = e.controls,
                        t = e.model,
                        r = t.root.get(),
                        n = r.currentVehicleIndex,
                        o = r.isAudioChecked,
                        l = r.isAudioEnabled,
                        c = r.isWindowAccessible,
                        E = r.isExcursionPlaying,
                        d = r.isExcursionPaused,
                        A = r.isAllBlocked,
                        m = r.isIntroPlay,
                        _ = t.computes.getVehicles();
                    !(function ({
                        key: e = I.n.ESCAPE,
                        callback: u = () => s.O.view.sendEvent.close(),
                        preventPropagation: t = !0,
                    } = {}) {
                        G(e, u, t);
                    })({ key: A ? I.n.NONE : I.n.ESCAPE, callback: A ? void 0 : u.backToHangar });
                    const F = t.computes.getCurrentVehicle(),
                        D = F.nation,
                        C = F.vehicleType,
                        B = (0, a.useState)(!1),
                        h = B[0],
                        p = B[1],
                        f = (0, a.useState)(!1),
                        v = f[0],
                        b = f[1],
                        x = t.computes.getVehiclesYears(),
                        w = (0, a.useMemo)(() => ({ onMouseEnter: () => b(!0), onMouseLeave: () => b(!1) }), []),
                        y = (0, a.useCallback)(
                            (e) => {
                                u.moveSpace(e);
                            },
                            [u],
                        ),
                        S = (0, a.useCallback)(() => {
                            (p(!0), u.startMoving());
                        }, [u]),
                        L = (0, a.useCallback)(() => {
                            p(!1);
                        }, []),
                        M = (0, a.useCallback)(() => {
                            E ? u.pauseExcursion(!d) : u.playExcursion(!0);
                        }, [u, d, E]),
                        T = (0, a.useCallback)(() => {
                            (E || d) && M();
                        }, [M, d, E]);
                    (G(A ? I.n.NONE : I.n.SPACE, T),
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                A && (e.preventDefault(), e.stopPropagation());
                            };
                            return (
                                document.addEventListener('keydown', e, { capture: !0 }),
                                document.addEventListener('keyup', e, { capture: !0 }),
                                document.addEventListener('click', e, { capture: !0 }),
                                document.addEventListener('mousedown', e, { capture: !0 }),
                                document.addEventListener('mouseup', e, { capture: !0 }),
                                document.addEventListener('mouseenter', e, { capture: !0 }),
                                document.addEventListener('mouseleave', e, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('keydown', e, { capture: !0 }),
                                        document.removeEventListener('keyup', e, { capture: !0 }),
                                        document.removeEventListener('click', e, { capture: !0 }),
                                        document.removeEventListener('mousedown', e, { capture: !0 }),
                                        document.removeEventListener('mouseup', e, { capture: !0 }),
                                        document.removeEventListener('mouseenter', e, { capture: !0 }),
                                        document.removeEventListener('mouseleave', e, { capture: !0 }));
                                }
                            );
                        }, [A]));
                    const P = g()('App_header_b8', h && 'App_header__hide_6d'),
                        k = g()('App_carouselWrapper_22', h && 'App_carouselWrapper__hide_1c');
                    return i().createElement(
                        mu,
                        { moveSpace: y, isDisabled: v || A, onStartMoving: S, onEndMoving: L },
                        i().createElement(
                            'div',
                            { className: g()('App_base_a8', A && 'App_base__blocked_64') },
                            i().createElement(
                                'div',
                                { className: 'App_content_83' },
                                i().createElement(
                                    Au,
                                    bt(
                                        {
                                            className: P,
                                            onClose: u.backToHangar,
                                            nation: D,
                                            vehicleType: C,
                                            isAudioEnabled: l,
                                            onAudioCheckboxToggle: u.audioCheckboxToggle,
                                            isAudioCheck: o,
                                            isExcursionPlaying: E,
                                            isExcursionPaused: d,
                                            onAnimate: M,
                                        },
                                        w,
                                    ),
                                ),
                                i().createElement(vt, { className: 'App_description_94' }),
                                i().createElement(
                                    'div',
                                    { className: k },
                                    i().createElement(
                                        'div',
                                        bt({ className: 'App_carousel_67' }, w),
                                        i().createElement(_t, {
                                            vehicles: _,
                                            years: x,
                                            isIntroPlay: m,
                                            currentVehicleIndex: n,
                                            onSelectVehicle: u.selectVehicle,
                                            isAudioChecked: o,
                                            isAudioEnabled: l,
                                            isExcursionPlaying: E,
                                            isExcursionPaused: d,
                                            onPlayExcursion: u.playExcursion,
                                            onVehiclePlayTimeLog: u.vehiclePlayTimeLog,
                                            isWindowAccessible: c,
                                            onExcursionEnd: u.excursionEnd,
                                            onSetIsDisabledMouse: b,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        i().createElement(Te, null, i().createElement(N, null, i().createElement(xt, null))),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, r] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, r];
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
            var e = { 338: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(490));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
