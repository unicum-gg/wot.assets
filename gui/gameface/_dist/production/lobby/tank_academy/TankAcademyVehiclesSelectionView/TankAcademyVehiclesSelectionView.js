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
                (t.r(r), t.d(r, { mouse: () => E, onResize: () => i }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => _,
                        graphicsQuality: () => d,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => F, getTextureUrl: () => A }));
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(o),
                    t.d(o, {
                        addModelObserver: () => f,
                        addPreloadTexture: () => p,
                        children: () => a,
                        displayStatus: () => D,
                        displayStatusIs: () => G,
                        events: () => C,
                        extraSize: () => V,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => y,
                        getBrowserTexturePath: () => b,
                        getDisplayStatus: () => W,
                        getScale: () => M,
                        getSize: () => S,
                        getViewGlobalPosition: () => x,
                        isClientAccessible: () => O,
                        isEventHandled: () => I,
                        isFocused: () => R,
                        pxToRem: () => L,
                        remToPx: () => N,
                        resize: () => T,
                        sendEvent: () => B,
                        setAnimateWindow: () => k,
                        setEventHandled: () => P,
                        setInputPaddingsRem: () => v,
                        setSidePaddingsRem: () => w,
                        whenTutorialReady: () => z,
                    }));
                const i = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && l(!1);
                        }
                        function t() {
                            e.enabled && l(!0);
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
                                : l(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            o = c[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
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
                                e.enabled && l(!0);
                            },
                            disableOutside() {
                                e.enabled && l(!1);
                            },
                        });
                    })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function F(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    g = ['args'],
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
                                })(u, g);
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
                    B = {
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
                function v(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function b(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
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
                function T(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function x(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: N(u.x), y: N(u.y) };
                }
                function y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function N(e) {
                    return viewEnv.remToPx(e);
                }
                function k(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function R() {
                    return viewEnv.isFocused();
                }
                function O() {
                    return viewEnv.isClientAccessible();
                }
                function P() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function W() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    V = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    U = { view: o, client: n };
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
                t.d(u, { B0: () => l, c9: () => B, wU: () => f, ry: () => g, Eu: () => h, SW: () => v, P3: () => b });
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
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                var i;
                (((i = l || (l = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    A = t(67);
                const F = ['args'];
                function D(e, u, t, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(l) : Promise.resolve(l).then(r, n);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        function o(e) {
                                            D(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                    B = (e, u) => {
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
                    p = () => B(l.CLOSE),
                    v = () => B(l.POP_OVER, { on: !1 }),
                    b = (e, u, t, r, n = R.invalid('resId'), a) => {
                        const o = A.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            i = s.x,
                            c = s.y,
                            E = s.width,
                            _ = s.height,
                            m = {
                                x: A.O.view.pxToRem(i) + o.x,
                                y: A.O.view.pxToRem(c) + o.y,
                                width: A.O.view.pxToRem(E),
                                height: A.O.view.pxToRem(_),
                            };
                        B(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: C(m),
                            on: !0,
                            args: a,
                        });
                    },
                    f = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    w = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var S = t(572);
                const T = n.instance,
                    x = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => B(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (e) => {
                            const u = (u) => w(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: g,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: f,
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
                        ClickOutsideManager: T,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = x;
            },
            10: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => me,
                        Bar: () => ce,
                        DefaultScroll: () => _e,
                        Direction: () => J,
                        defaultSettings: () => ee,
                        useHorizontalScrollApi: () => re,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => fe, Bar: () => pe, Default: () => be, useVerticalScrollApi: () => de }));
                var a = t(179),
                    o = t.n(a);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var l = t(67);
                const i = {
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
                const _ = l.O.client.getSize('rem'),
                    m = _.width,
                    d = _.height,
                    A = Object.assign({ width: m, height: d }, E(m, d, i)),
                    F = (0, a.createContext)(A),
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
                            o = r.large,
                            l = r.medium,
                            i = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            d = r.smallWidth,
                            A = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            g = r.largeHeight,
                            h = r.mediumHeight,
                            B = r.smallHeight,
                            p = r.extraSmallHeight,
                            v = { extraLarge: C, large: g, medium: h, small: B, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && o) return u;
                            if (t.medium && l) return u;
                            if (t.small && i) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return s(u, t, v);
                            if (t.largeWidth && _) return s(u, t, v);
                            if (t.mediumWidth && m) return s(u, t, v);
                            if (t.smallWidth && d) return s(u, t, v);
                            if (t.extraSmallWidth && A) return s(u, t, v);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && B) return u;
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
                const g = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        s = (0, a.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, E(t, r, i)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]));
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(F.Provider, { value: c }, e);
                });
                var h = t(483),
                    B = t.n(h),
                    p = t(926),
                    v = t.n(p);
                let b, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const S = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_WIDTH,
                        [f.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [f.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    N = (e) => {
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
                            })(e, T);
                        const n = S(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            l = n.mediaSize;
                        return o().createElement('div', x({ className: B()(t, y[a], M[s], L[l]) }, r), u);
                    },
                    k = ['children'],
                    O = (e) => {
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
                        return o().createElement(g, null, o().createElement(N, t, u));
                    };
                var P = t(493),
                    I = t.n(P);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
                        playHighlight() {
                            H('highlight');
                        },
                        playClick() {
                            H('play');
                        },
                        playYes() {
                            H('yes1');
                        },
                    },
                    G = {
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
                    V = [
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class U extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick));
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
                            s = e.classNames,
                            l = e.onMouseEnter,
                            i = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
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
                                })(e, V)),
                            m = B()(G.base, G[`base__${a}`], G[`base__${n}`], null == s ? void 0 : s.base),
                            d = B()(G.icon, G[`icon__${a}`], G[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = B()(G.glow, null == s ? void 0 : s.glow),
                            F = B()(G.caption, G[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = B()(G.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            z(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(i),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== a && o().createElement('div', { className: G.shine }),
                            o().createElement('div', { className: d }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: F }, u),
                            r && o().createElement('div', { className: D }, r),
                        );
                    }
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var j = t(282);
                const $ = (e) => {
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
                    X = (e, u, t) => (t < e ? e : t > u ? u : t),
                    K = [];
                function Y(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), K)
                    );
                }
                function q(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        n,
                    ];
                }
                function Z(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var Q = t(552);
                let J;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(J || (J = {}));
                const ee = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ue = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return X(n, a, t);
                        };
                        return (i = {}) => {
                            const c = i.settings,
                                E = void 0 === c ? ee : c,
                                _ = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                d = (() => {
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
                                                                    if ('string' == typeof e) return Z(e, u);
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
                                                                              ? Z(e, u)
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
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    o = 0;
                                                function s() {
                                                    n && clearTimeout(n);
                                                }
                                                function l(...l) {
                                                    const i = this,
                                                        c = Date.now() - o;
                                                    function E() {
                                                        ((o = Date.now()), t.apply(i, l));
                                                    }
                                                    a ||
                                                        (r && !n && E(),
                                                        s(),
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
                                                    (l.cancel = function () {
                                                        (s(), (a = !0));
                                                    }),
                                                    l
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Q.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return s(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = _.current;
                                        r &&
                                            C.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = g(u, e, r);
                                        h(a);
                                    },
                                    [h, g, E.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && B(r(e)),
                                            _.current && d.trigger('mouseWheel', e, D.scrollPosition, u(_.current)));
                                    },
                                    [D.scrollPosition, B, d],
                                ),
                                v = ((e, u = []) => {
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
                                        $(() => {
                                            const e = _.current;
                                            e &&
                                                (h(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                b = Y(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && h(u, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            const f = (0, a.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: p,
                                    applyScroll: h,
                                    applyStepTo: B,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    handleIsThumbDragging: f,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, h, B, f, d.off, d.on, b, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    te = (e) => {
                        var u, t;
                        return (
                            (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0) <
                            e.offsetWidth
                        );
                    },
                    re = ue({
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
                        getDirection: (e) => (e.deltaY > 1 ? J.Next : J.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ne = 'HorizontalBar_base__nonActive_82',
                    ae = 'disable',
                    oe = { pending: !1, offset: 0 },
                    se = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    le = () => {},
                    ie = (e, u) => Math.max(20, e.offsetWidth * u),
                    ce = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = se, onDrag: r = le }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, a.useState)(oe),
                            m = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = () => {
                                const u = i.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    E = X(0, 1, a / (n - r)),
                                    _ = (u.offsetWidth - ie(u, o)) * E;
                                ((t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(ae),
                                                    void l.current.classList.remove(ae)
                                                );
                                            if (
                                                ((u = i.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(ae),
                                                    void l.current.classList.add(ae)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(ae), l.current.classList.remove(ae));
                                        }
                                    })(_));
                            },
                            D = Y(() => {
                                ((() => {
                                    const u = c.current,
                                        t = i.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${ie(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(ne) : n.current.classList.remove(ne)));
                                })(),
                                    F());
                            });
                        ((0, a.useEffect)(() => $(D)),
                            (0, a.useEffect)(
                                () =>
                                    $(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = le;
                                        const r = () => {
                                            (t(), (t = $(D)));
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
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = i.current,
                                            o = c.current;
                                        if (!n || !a || !o) return;
                                        const s = u.screenX - m.offset - a.getBoundingClientRect().x,
                                            l = (s / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: l }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(oe));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]));
                        const C = q((u) => e.applyStepTo(u), E, [e]),
                            g = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const p = (e) => {
                            e.target.classList.contains(ae) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ae) || 0 !== e.button || (H('play'), g(J.Next));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: p,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? J.Prev : J.Next));
                                    },
                                    ref: i,
                                    onMouseEnter: p,
                                },
                                o().createElement('div', { ref: c, className: B()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: B()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ae) || 0 !== e.button || (H('play'), g(J.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Ee = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    _e = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Ee.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: B()(Ee.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(Ee.defaultScrollArea, n) },
                                o().createElement(me, { className: l, api: _, classNames: s }, e),
                            ),
                            o().createElement(ce, { getStepByRailClick: i, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    me = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => $(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(Ee.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: B()(Ee.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: B()(Ee.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((me.Bar = ce),
                    (me.Default = _e),
                    (me.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => $(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(Ee.base, u) },
                            o().createElement(
                                'div',
                                { className: B()(Ee.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: B()(Ee.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const de = ue({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? J.Next : J.Prev),
                    }),
                    Ae = 'VerticalBar_base__nonActive_42',
                    Fe = 'disable',
                    De = () => {},
                    Ce = { pending: !1, offset: 0 },
                    ge = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    he = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Be = (e, u) => Math.max(20, e.offsetHeight * u),
                    pe = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ge, onDrag: r = De }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, a.useState)(Ce),
                            m = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    (d(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            F = Y(() => {
                                const u = c.current,
                                    t = i.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Be(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(Ae) : n.current.classList.remove(Ae)),
                                    o
                                );
                            }),
                            D = Y(() => {
                                const u = i.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    E = X(0, 1, a / (n - r)),
                                    _ = (u.offsetHeight - Be(u, o)) * E;
                                ((t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && i.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Fe),
                                                    void l.current.classList.remove(Fe)
                                                );
                                            if (
                                                ((u = i.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Fe),
                                                    void l.current.classList.add(Fe)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(Fe), l.current.classList.remove(Fe));
                                        }
                                    })(_));
                            }),
                            C = Y(() => {
                                he(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, a.useEffect)(() => $(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    he(e, () => {
                                        D();
                                    });
                                };
                                let t = De;
                                const r = () => {
                                    (t(), (t = $(C)));
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
                                if (!m.pending) return;
                                const u = (u) => {
                                        he(e, (t) => {
                                            const n = i.current,
                                                a = c.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                l = (s / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: l }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            A(Ce));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]));
                        const g = q((u) => e.applyStepTo(u), E, [e]),
                            h = g[0],
                            p = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Fe) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fe) || 0 !== e.button || (H('play'), h(J.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? J.Prev : J.Next),
                                                  c.current &&
                                                      he(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: i,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: B()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fe) || 0 !== e.button || (H('play'), h(J.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    ve = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    be = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: l,
                        getStepByRailClick: i,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(ve.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: B()(ve.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(ve.area, n) },
                                o().createElement(fe, { className: s, classNames: l, api: _ }, e),
                            ),
                            o().createElement(pe, { getStepByRailClick: i, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    fe = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => $(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(ve.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(ve.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                fe.Default = be;
                const we = { Vertical: n, Horizontal: r };
                var Se = t(887),
                    Te = t.n(Se);
                const xe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ye = (e) => e.includes('_') && ((e) => xe.includes(e))(e.split('_').at(-1)),
                    Me = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    Le = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (ye(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Me.indexOf(u),
                                    o = (-1 !== a ? xe.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== s ? s : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => xe.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Ne = (e, u = Le) => {
                        const t = (
                            (e, u = Le) =>
                            (t) => {
                                const r = S().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => ye(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    ke = {
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
                    Re = [
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
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                Object.keys(Te());
                const Pe = {
                        XL: { mt: ke.mt__XL, mr: ke.mr__XL, mb: ke.mb__XL, ml: ke.ml__XL },
                        LG: { mt: ke.mt__LG, mr: ke.mr__LG, mb: ke.mb__LG, ml: ke.ml__LG },
                        MDp: { mt: ke.mt__MDp, mr: ke.mr__MDp, mb: ke.mb__MDp, ml: ke.ml__MDp },
                        MD: { mt: ke.mt__MD, mr: ke.mr__MD, mb: ke.mb__MD, ml: ke.ml__MD },
                        SMp: { mt: ke.mt__SMp, mr: ke.mr__SMp, mb: ke.mb__SMp, ml: ke.ml__SMp },
                        SM: { mt: ke.mt__SM, mr: ke.mr__SM, mb: ke.mb__SM, ml: ke.ml__SM },
                        XS: { mt: ke.mt__XS, mr: ke.mr__XS, mb: ke.mb__XS, ml: ke.ml__XS },
                    },
                    Ie = (Object.keys(Pe), ['mt', 'mr', 'mb', 'ml']),
                    He = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    We = Ne((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            s = e.mt,
                            l = void 0 === s ? n : s,
                            i = e.mr,
                            c = void 0 === i ? n : i,
                            E = e.mb,
                            _ = void 0 === E ? n : E,
                            m = e.ml,
                            d = void 0 === m ? n : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            h = e.center,
                            p = e.flexEnd,
                            v = e.spaceBetween,
                            b = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            T = void 0 === S ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            y = e.wrap,
                            M = e.flexWrap,
                            L = void 0 === M ? (y ? 'wrap' : void 0) : M,
                            N = e.grow,
                            k = e.shrink,
                            R = e.flex,
                            O = void 0 === R ? (N || k ? `${N ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : R,
                            P = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Re);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        Ie.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Pe[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Ie.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[He[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: O,
                                        alignSelf: x,
                                        display: C || T ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, l, c, _, d, P, O, x, C, L, w, T]),
                            G = W.computedStyle,
                            V = W.computedClassNames;
                        return o().createElement('div', Oe({ className: B()(ke.base, ...V, u), style: G }, H), I);
                    });
                let Ge;
                function Ve(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ge || (Ge = {}));
                const ze = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ue = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    je = (e, u, t = Ge.left) => e.split(u).reduce(t === Ge.left ? ze : Ue, []),
                    $e = (() => {
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
                    Xe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ke = ({ binding: e, text: u = '', classMix: t, alignment: r = Ge.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Ge.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Xe.includes(t)
                                                                ? $e(e)
                                                                : ((e, u = Ge.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          je(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(je(e, r, Ge.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ye = t(532),
                    qe = t.n(Ye);
                const Ze = {
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
                    Qe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
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
                Object.keys(Te());
                const eu = Object.keys(qe()),
                    uu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    tu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ru = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    nu =
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
                            'heading-H56': uu,
                            'heading-H36': uu,
                            'heading-H28': tu,
                            'heading-H24': tu,
                            'heading-H24R': tu,
                            'heading-H22': tu,
                            'heading-H20R': tu,
                            'heading-H18': tu,
                            'heading-H15': ru,
                            'heading-H14': ru,
                            'paragraph-P24': tu,
                            'paragraph-P18': tu,
                            'paragraph-P16': tu,
                            'paragraph-P14': ru,
                            'paragraph-P12': ru,
                            'paragraph-P10': ru,
                        }),
                    au =
                        (Object.keys(nu),
                        (e) =>
                            e
                                ? ((e) => eu.includes(e))(e)
                                    ? { colorClassName: Ze[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ou = Ne((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            s = e.m,
                            l = e.mt,
                            i = void 0 === l ? s : l,
                            c = e.mr,
                            E = void 0 === c ? s : c,
                            _ = e.mb,
                            m = void 0 === _ ? s : _,
                            d = e.ml,
                            A = void 0 === d ? s : d,
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
                            })(e, Qe);
                        const g = (0, a.useMemo)(() => {
                                const e = au(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, n]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return o().createElement(
                            We,
                            Je(
                                {
                                    className: B()(Ze.base, t && Ze[t], p, r),
                                    style: h,
                                    mt: !0 === i ? nu[t || 'paragraph-P16'].mt : i,
                                    mr: !0 === E ? nu[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? nu[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? nu[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? o().createElement(Ke, Je({}, D, { text: u })) : u,
                        );
                    });
                var su = t(521),
                    lu = t(364);
                const iu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function cu(e = su.n.NONE, u = iu, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== su.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                function Eu() {
                    return !1;
                }
                console.log;
                var _u = t(915);
                function mu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const du = (e) => (0 === e ? window : window.subViews.get(e));
                function Au(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                function Fu(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        var r;
                        const a = null == (r = e[n]) ? void 0 : r.value;
                        u(a, n, e) && t.push(a);
                    }
                    return t;
                }
                const Du = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Au(e, (e) => ('object' == typeof e ? Du(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Du(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Du(u) : u]),
                                    )
                            : e,
                    Cu = 'vehCD';
                let gu;
                !(function (e) {
                    ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'));
                })(gu || (gu = {}));
                var hu = t(517);
                const Bu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: s }) {
                                const i = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = du,
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
                                                const o = (e) => {
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
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            i = l.O.view.addModelObserver(s, u, !0);
                                                        return (n.set(i, t), e && t(o(a)), i);
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
                                                                                    return mu(e, u);
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
                                                                                          ? mu(e, u)
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
                                            o =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            c = (e) => i.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = _u.observable.box(''),
                                                    t = {
                                                        primitives: e.primitives(['endDate', 'totalVehiclesCount']),
                                                        vehicles: e.array('vehicles', []),
                                                        tabs: e.array('tabs', []),
                                                        types: e.array('types', []),
                                                        nations: e.array('nations', []),
                                                    },
                                                    r = (0, hu.computedFn)(() =>
                                                        Au(t.vehicles.get(), ({ userName: e }) =>
                                                            systemLocale.toLowerCase(e),
                                                        ),
                                                    ),
                                                    n = (0, hu.computedFn)(
                                                        () =>
                                                            Fu(t.types.get(), ({ isSelected: e }) => Boolean(e)).reduce(
                                                                (e, u) => ((e[u.name] = !0), e),
                                                                {},
                                                            ),
                                                        { equals: Eu },
                                                    ),
                                                    a = (0, hu.computedFn)(
                                                        () =>
                                                            Fu(t.nations.get(), ({ isSelected: e }) =>
                                                                Boolean(e),
                                                            ).reduce((e, u) => ((e[u.name] = !0), e), {}),
                                                        { equals: Eu },
                                                    ),
                                                    o = (0, hu.computedFn)(
                                                        () =>
                                                            Object.keys(n()).length > 0 || Object.keys(a()).length > 0,
                                                    ),
                                                    s = (0, hu.computedFn)(() => {
                                                        const e = u.get().toLowerCase(),
                                                            o = n(),
                                                            s = a(),
                                                            l = Object.keys(o).length > 0,
                                                            i = Object.keys(s).length > 0;
                                                        return Fu(
                                                            t.vehicles.get(),
                                                            (u, t) =>
                                                                !(
                                                                    !r()[t].includes(e) ||
                                                                    (l && !o[u.vehType]) ||
                                                                    (i && !s[u.nation])
                                                                ),
                                                        );
                                                    }),
                                                    l = (0, hu.computedFn)(() => s().length),
                                                    i = (0, hu.computedFn)(() => u.get().length > 0 || o()),
                                                    c = (0, hu.computedFn)(
                                                        () => {
                                                            return ((e = t.tabs.get()), Du(e));
                                                            var e;
                                                        },
                                                        { equals: Eu },
                                                    ),
                                                    E = (0, hu.computedFn)(
                                                        () => {
                                                            var e;
                                                            return null != (e = c().find((e) => Boolean(e.isSelected)))
                                                                ? e
                                                                : c()[0];
                                                        },
                                                        { equals: Eu },
                                                    ),
                                                    _ = (0, hu.computedFn)(
                                                        () => {
                                                            var e, u;
                                                            return null !=
                                                                (e =
                                                                    null == (u = E())
                                                                        ? void 0
                                                                        : u.tasks.map((e) => ({
                                                                              taskNumber: e.number,
                                                                              isDone: e.state === gu.Done,
                                                                          })))
                                                                ? e
                                                                : [];
                                                        },
                                                        { equals: Eu },
                                                    ),
                                                    m = (0, hu.computedFn)(() => {
                                                        var e, u, t, r;
                                                        return null !=
                                                            (e =
                                                                null != (u = null == (t = E()) ? void 0 : t.level)
                                                                    ? u
                                                                    : null == (r = E())
                                                                      ? void 0
                                                                      : r.level)
                                                            ? e
                                                            : 1;
                                                    }),
                                                    d = (0, hu.computedFn)(() => {
                                                        var e, u;
                                                        return (
                                                            (null != (e = null == (u = E()) ? void 0 : u.tokensCount)
                                                                ? e
                                                                : 0) > 0
                                                        );
                                                    }),
                                                    A = (0, hu.computedFn)(() => {
                                                        var e, u;
                                                        return (
                                                            null == (e = null == (u = E()) ? void 0 : u.isPremium) || e
                                                        );
                                                    });
                                                return Object.assign({}, t.primitives, {
                                                    filterString: u,
                                                    computes: {
                                                        getVehiclesNames: r,
                                                        getVehiclesFiltered: s,
                                                        getVehiclesFilteredCount: l,
                                                        isFilterApplied: i,
                                                        getSelectedTypes: n,
                                                        getSelectedNations: a,
                                                        getTabs: c,
                                                        getSelectedTab: E,
                                                        getTasks: _,
                                                        getSelectedLevel: m,
                                                        hasSelectedTabToken: d,
                                                        isSelectedTabPremium: A,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = _u.observable.box(r, { equals: Eu });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, _u.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = _u.observable.box(r, { equals: Eu });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, _u.action)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = _u.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, _u.action)((e) => {
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
                                                                s = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = _u.observable.box(r[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, _u.action)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && r ? r.controls(_) : u(_),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    m = _[0],
                                    d = _[1],
                                    A = (0, a.useState)(() => c(e, r, s)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(m, r, s)) : (E.current = !0);
                                    }, [s, m, r]),
                                    (0, a.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    o().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => {
                        const t = e.createCallbackNoArgs('onResetFilter'),
                            r = e.createCallback((e, u) => ({ level: e, isPremium: u }), 'onSelectTab');
                        return {
                            goBack: e.createCallbackNoArgs('onGoBack'),
                            showVehicle: e.createCallback((e) => ({ [Cu]: e }), 'onShowVehicle'),
                            compareVehicle: e.createCallback((e) => ({ [Cu]: e }), 'onCompareVehicle'),
                            selectTab: (0, _u.action)((e, t) => {
                                (u.filterString.set(''), r(e, t));
                            }),
                            setFilter: (0, _u.action)((e) => u.filterString.set(e)),
                            resetFilter: (0, _u.action)(() => {
                                (u.filterString.set(''), t());
                            }),
                        };
                    }),
                    pu = Bu[0],
                    vu = Bu[1],
                    bu = 'App_container_68',
                    fu = (e) => e > 1,
                    wu = 'Tabs_tabs_39',
                    Su = { type: 'idle' },
                    Tu = 'dragging';
                let xu;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(xu || (xu = {}));
                const yu = (0, a.memo)(({ side: e, isBigMode: u, showScroll: t, showNewGlow: r, onClick: n }) => {
                        const a = e === xu.Right,
                            s = B()('TabsScrollEdgeArrow_base_d3', {
                                TabsScrollEdgeArrow_base__right_5c: a,
                                TabsScrollEdgeArrow_base__disabled_41: !t,
                                TabsScrollEdgeArrow_base__big_40: u,
                            }),
                            l = B()('TabsScrollEdgeArrow_border_65', { TabsScrollEdgeArrow_border__big_2e: u }),
                            i = B()('TabsScrollEdgeArrow_arrow_10', {
                                TabsScrollEdgeArrow_arrow__left_16: !a,
                                TabsScrollEdgeArrow_arrow__right_0d: a,
                            }),
                            c = B()('TabsScrollEdgeArrow_glow_82', {
                                TabsScrollEdgeArrow_glow__right_f6: a,
                                TabsScrollEdgeArrow_glow__big_35: u,
                                TabsScrollEdgeArrow_glow__visible_cf: r,
                            }),
                            E = B()('TabsScrollEdgeArrow_glowNew_23', {
                                TabsScrollEdgeArrow_glowNew__right_bf: a,
                                TabsScrollEdgeArrow_glowNew__big_60: u,
                                TabsScrollEdgeArrow_glowNew__visible_c1: r,
                            });
                        return o().createElement(
                            'div',
                            { className: s, onClick: n },
                            o().createElement('div', { className: l }),
                            o().createElement('div', { className: i }),
                            o().createElement('div', { className: c }),
                            o().createElement('div', { className: E }),
                        );
                    }),
                    Mu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Lu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Nu(e) {
                    let u = '';
                    for (let t = Lu.length - 1; t >= 0; t--) for (; e >= Lu[t];) ((u += Mu[t]), (e -= Lu[t]));
                    return u;
                }
                const ku = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Ou = R.strings.tank_academy.vehiclesSelection.tabs,
                    Pu = (0, a.memo)(
                        ({
                            tab: e,
                            hasDivider: u,
                            isBigMode: t,
                            isCompactSelectedGlow: r = !1,
                            isTabStripDragging: n,
                            onSelect: a,
                        }) => {
                            const s = B()('TabItem_base_a8', {
                                    TabItem_base__dragging_8c: n,
                                    TabItem_base__big_e8: t,
                                    TabItem_base__compact_2e: !t,
                                }),
                                l = B()('TabItem_isNewCounter_37', { TabItem_isNewCounter__big_d9: t }),
                                i = B()('TabItem_label_a6', {
                                    TabItem_label__big_61: t,
                                    TabItem_labelSelected_73: e.isSelected,
                                }),
                                c = B()('TabItem_divider_36', { TabItem_divider__big_8a: t }),
                                E = B()('TabItem_glowSelected_5b', {
                                    TabItem_glowSelected__big_68: t && !r,
                                    TabItem_glowSelected__compactInBig_72: t && r,
                                }),
                                _ = B()('TabItem_tabIcon_f0', {
                                    TabItem_tabIcon__big_d6: t,
                                    TabItem_tabIcon__big__done_f4: e.isDone,
                                }),
                                m = B()('TabItem_isNew_4a', {
                                    TabItem_isNew__big_d5: t,
                                    TabItem_isNew__big__selected_f7: e.isSelected,
                                }),
                                d = B()('TabItem_doneIcon_83', { TabItem_doneIcon__big_3b: t }),
                                A = B()('TabItem_tokensCount_54', {
                                    TabItem_tokensCount__selected_01: e.isSelected,
                                    TabItem_tokensCount__big_e5: t,
                                    TabItem_tokensCount__big__invisible_58: !e.tokensCount,
                                }),
                                F = e.isPremium
                                    ? `url(R.images.tank_academy.gui.maps.icons.vehiclesSelect.tabs.level.c_${e.level}_premium)`
                                    : `url(R.images.tank_academy.gui.maps.icons.vehiclesSelect.tabs.level.c_${e.level})`,
                                D = e.tokensCount > 0,
                                C = D ? { 'data-tab-is-new': '' } : {};
                            return o().createElement(
                                'div',
                                Ru({}, C, {
                                    className: s,
                                    onClick: (e) =>
                                        ((e) => {
                                            (W.playClick(), a(e.currentTarget));
                                        })(e),
                                    onMouseEnter: () => W.playHighlight(),
                                }),
                                o().createElement(ou, {
                                    className: i,
                                    text: Ou.label(),
                                    format: {
                                        binding: {
                                            level: o().createElement(
                                                'div',
                                                {
                                                    className: B()('TabItem_labelContainer_e3', {
                                                        TabItem_labelContainer__premium_08: e.isPremium,
                                                    }),
                                                },
                                                o().createElement(ou, { text: Nu(e.level) }),
                                                e.isPremium &&
                                                    o().createElement('div', { className: 'TabItem_premLabelIcon_40' }),
                                            ),
                                        },
                                    },
                                }),
                                o().createElement('div', { className: _, style: { backgroundImage: F } }),
                                o().createElement(ou, {
                                    className: A,
                                    text: Ou.count(),
                                    format: { binding: { count: e.tokensCount } },
                                }),
                                e.isSelected && o().createElement('div', { className: E }),
                                u && o().createElement('div', { className: c }),
                                D &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: l }),
                                        o().createElement('div', { className: m }),
                                    ),
                                e.isDone && o().createElement('div', { className: d }),
                            );
                        },
                    ),
                    Iu = we.Horizontal.Area,
                    Hu = ({ tabs: e, isBigMode: u, onTabSelect: t, onSelectTab: r }) => {
                        const n = (function (e) {
                                const u = we.Horizontal.useHorizontalScrollApi(),
                                    t = (0, a.useCallback)(
                                        (e) => {
                                            if (!e.shiftKey) return;
                                            const t = u.contentRef.current;
                                            t &&
                                                te(t) &&
                                                ((0 === e.deltaY && 0 === e.deltaX) ||
                                                    (e.preventDefault(),
                                                    e.stopPropagation(),
                                                    0 !== e.deltaY
                                                        ? u.handleMouseWheel(e)
                                                        : u.applyStepTo(e.deltaX > 1 ? J.Next : J.Prev)));
                                        },
                                        [u],
                                    ),
                                    r = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: t }), [u, t]),
                                    n = (function (e, u, t) {
                                        const r = e.contentRef,
                                            n = e.wrapperRef,
                                            o = e.scrollPosition,
                                            s = e.clampPosition,
                                            i = e.animationScroll,
                                            c = e.events,
                                            E = (0, a.useState)(Su),
                                            _ = E[0],
                                            m = E[1];
                                        return (
                                            (0, a.useEffect)(() => {
                                                const e = r.current;
                                                e && (e.style.cursor = 'dragging' === _.type ? 'move' : 'grab');
                                            }, [r, _.type]),
                                            (0, a.useEffect)(() => {
                                                if ('dragging' !== _.type) return;
                                                const e = l.O.client.events.mouse.move(([e, t]) => {
                                                        const a = r.current,
                                                            l = n.current;
                                                        if (!a || !l) return;
                                                        if ('inside' === t && e.clientX < 0) return;
                                                        const c = 'inside' === t ? e.clientX : e.clientX - l.offsetLeft,
                                                            E = _.positionFrom - c,
                                                            m = _.previousScrollPosition + E;
                                                        o.start(
                                                            Object.assign(
                                                                {
                                                                    scrollPosition: s(a, m),
                                                                    from: { scrollPosition: i.scrollPosition.get() },
                                                                },
                                                                u,
                                                            ),
                                                        );
                                                    }),
                                                    t = l.O.client.events.mouse.up(function () {
                                                        m({ type: 'scrollingToEnd' });
                                                    });
                                                return () => {
                                                    (e(), t());
                                                };
                                            }, [i.scrollPosition, s, r, _, o, n, u]),
                                            (0, a.useEffect)(() => {
                                                if ('scrollingToEnd' !== _.type) return;
                                                const e = () => {
                                                    m(Su);
                                                };
                                                return (
                                                    i.scrollPosition.idle && e(),
                                                    c.on('rest', e),
                                                    () => c.off('rest', e)
                                                );
                                            }, [i.scrollPosition, _.type, c]),
                                            (0, a.useEffect)(() => {
                                                const e = r.current;
                                                if (!e) return;
                                                const u = (e) => {
                                                    m({
                                                        type: 'dragging',
                                                        positionFrom: e.screenX,
                                                        previousScrollPosition: i.scrollPosition.get(),
                                                    });
                                                };
                                                return (
                                                    e.addEventListener('mousedown', u),
                                                    () => e.removeEventListener('mousedown', u)
                                                );
                                            }, [i.scrollPosition, r, t]),
                                            _
                                        );
                                    })(u),
                                    o = (0, a.useState)(!1),
                                    s = o[0],
                                    i = o[1],
                                    c = (0, a.useRef)(0),
                                    E = n.type === Tu || 'scrollingToEnd' === n.type;
                                ((0, a.useEffect)(() => {
                                    if (n.type === Tu)
                                        return ((c.current = u.animationScroll.scrollPosition.get()), void i(!1));
                                    'idle' === n.type && i(!1);
                                }, [n.type, u]),
                                    (0, a.useEffect)(() => {
                                        if (!E) return;
                                        const e = () => {
                                            Math.abs(u.animationScroll.scrollPosition.get() - c.current) > 5 && i(!0);
                                        };
                                        return (
                                            u.events.on('change', e),
                                            () => {
                                                u.events.off('change', e);
                                            }
                                        );
                                    }, [E, u]));
                                const _ = s;
                                (0, a.useEffect)(() => {
                                    const e = u.contentRef.current,
                                        t = u.wrapperRef.current;
                                    if (e)
                                        return _
                                            ? ((e.style.cursor = 'all-scroll'),
                                              void (t && (t.style.cursor = 'all-scroll')))
                                            : void (t && (t.style.cursor = ''));
                                }, [u, _]);
                                const m = (0, a.useState)(!1),
                                    d = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(!1),
                                    D = F[0],
                                    C = F[1],
                                    g = (0, a.useState)(!1),
                                    h = g[0],
                                    B = g[1],
                                    p = (0, a.useState)(!1),
                                    v = p[0],
                                    b = p[1],
                                    f = (0, a.useState)(!1),
                                    w = f[0],
                                    S = f[1],
                                    T = (0, a.useCallback)(() => {
                                        const e = u.contentRef.current,
                                            t = u.wrapperRef.current;
                                        if (!e || !t) return (A(!1), C(!1), B(!1), b(!1), void S(!1));
                                        const r = te(e);
                                        if ((A(r), !r))
                                            return (
                                                C(!1),
                                                B(!1),
                                                b(!1),
                                                S(!1),
                                                void (
                                                    u.animationScroll.scrollPosition.get() > 2 &&
                                                    u.applyScroll(0, { immediate: !0 })
                                                )
                                            );
                                        const n = u.animationScroll.scrollPosition.get(),
                                            a = u.getBounds()[1];
                                        (C(n > 2), B(n < a - 2));
                                        const o = (function (e, u) {
                                                const t = e.querySelectorAll('[data-tab-is-new]');
                                                if (0 === t.length) return { left: !1, right: !1 };
                                                const r = u.getBoundingClientRect();
                                                if (r.width <= 1) return { left: !1, right: !1 };
                                                let n = !1,
                                                    a = !1;
                                                return (
                                                    t.forEach((e) => {
                                                        if (n && a) return;
                                                        if (!(e instanceof HTMLElement)) return;
                                                        const u = e.getBoundingClientRect();
                                                        (u.right <= r.left + 1 && (n = !0),
                                                            u.left >= r.right - 1 && (a = !0));
                                                    }),
                                                    { left: n, right: a }
                                                );
                                            })(e, t),
                                            s = o.left,
                                            l = o.right;
                                        (b(s), S(l));
                                    }, [u]);
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = $(T);
                                        return (
                                            u.events.on('change', T),
                                            u.events.on('resizeHandled', T),
                                            u.events.on('recalculateContent', T),
                                            () => {
                                                (e(),
                                                    u.events.off('change', T),
                                                    u.events.off('resizeHandled', T),
                                                    u.events.off('recalculateContent', T));
                                            }
                                        );
                                    }, [u, T]),
                                    (0, a.useEffect)(
                                        () =>
                                            $(() => {
                                                u.recalculateContent();
                                            }),
                                        [u, e],
                                    ),
                                    (0, a.useLayoutEffect)(
                                        () =>
                                            $(() => {
                                                (u.recalculateContent(), T());
                                            }),
                                        [u, e, T],
                                    ),
                                    {
                                        tabsHorizontalScrollApi: r,
                                        scrollTabsToStart: (0, a.useCallback)(() => {
                                            u.applyScroll(0);
                                        }, [u]),
                                        scrollTabsToEnd: (0, a.useCallback)(() => {
                                            if (!u.contentRef.current) return;
                                            const e = u.getBounds()[1];
                                            u.applyScroll(e);
                                        }, [u]),
                                        scrollTabToCenter: (0, a.useCallback)(
                                            (e) => {
                                                const t = u.contentRef.current,
                                                    r = u.getWrapperSize();
                                                if (!t || !r || !te(t)) return;
                                                const n = e.offsetLeft + e.offsetWidth / 2 - r / 2;
                                                u.applyScroll(u.clampPosition(t, n));
                                            },
                                            [u],
                                        ),
                                        isTabsScrollRequired: d,
                                        showScrollLeft: D,
                                        showScrollRight: h,
                                        showNewGlowLeft: v,
                                        showNewGlowRight: w,
                                        isTabStripDragging: _,
                                    }
                                );
                            })(e),
                            s = n.tabsHorizontalScrollApi,
                            i = n.scrollTabsToStart,
                            c = n.scrollTabsToEnd,
                            E = n.scrollTabToCenter,
                            _ = n.showScrollLeft,
                            m = n.showScrollRight,
                            d = n.showNewGlowLeft,
                            A = n.showNewGlowRight,
                            F = n.isTabsScrollRequired,
                            D = n.isTabStripDragging,
                            C = {
                                wrapper: B()('Tabs_areaWrapper_97', {
                                    Tabs_areaWrapper__centered_6c: !F,
                                    Tabs_areaWrapper__dragging_49: D,
                                }),
                                content: B()(wu, D && 'Tabs_tabs__dragging_68'),
                            },
                            g = B()('Tabs_tabsScrollArea_9f', { Tabs_tabsScrollArea__dragging_fa: D }),
                            h = (0, a.useMemo)(
                                () =>
                                    e.map((n, a) =>
                                        o().createElement(Pu, {
                                            key: `${n.level}-${a}`,
                                            tab: n,
                                            hasDivider: Boolean(e[a + 1]),
                                            isBigMode: u,
                                            isCompactSelectedGlow: !0,
                                            isTabStripDragging: D,
                                            onSelect: (e) => {
                                                (E(e), null == t || t(() => r(n.level, n.isPremium)));
                                            },
                                        }),
                                    ),
                                [e, u, D, t, r, E],
                            );
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(yu, {
                                side: xu.Left,
                                isBigMode: u,
                                showScroll: _,
                                showNewGlow: d,
                                onClick: (e) => {
                                    (e.stopPropagation(), i());
                                },
                            }),
                            o().createElement(Iu, { api: s, className: g, classNames: C }, h),
                            o().createElement(yu, {
                                side: xu.Right,
                                isBigMode: u,
                                showScroll: m,
                                showNewGlow: A,
                                onClick: (e) => {
                                    (e.stopPropagation(), c());
                                },
                            }),
                        );
                    },
                    Wu = ({ tabs: e, isBigMode: u, onTabSelect: t, onSelectTab: r }) => {
                        const n = (0, a.useMemo)(
                            () =>
                                e.map((n, a) =>
                                    o().createElement(Pu, {
                                        key: `${n.level}-${a}`,
                                        tab: n,
                                        hasDivider: Boolean(e[a + 1]),
                                        isBigMode: u,
                                        isTabStripDragging: !1,
                                        onSelect: () => {
                                            null == t || t(() => r(n.level, n.isPremium));
                                        },
                                    }),
                                ),
                            [e, u, t, r],
                        );
                        return o().createElement(
                            'div',
                            { className: 'Tabs_tabsStaticArea_4d' },
                            o().createElement('div', { className: wu }, n),
                        );
                    },
                    Gu = (0, j.observer)(({ isBigMode: e = !0, onTabSelect: u }) => {
                        const t = vu(),
                            r = t.model,
                            n = t.controls,
                            s = r.computes.getTabs(),
                            l = s.length > 8,
                            i = B()('Tabs_line_08', { Tabs_line__small_24: !e }),
                            c = {
                                tabs: s,
                                isBigMode: e,
                                onTabSelect: u,
                                onSelectTab: (0, a.useCallback)(
                                    (e, u) => {
                                        n.selectTab(e, u);
                                    },
                                    [n],
                                ),
                            };
                        return o().createElement(
                            'div',
                            { className: 'Tabs_base_10' },
                            o().createElement(
                                'div',
                                { className: 'Tabs_panel_8a' },
                                o().createElement(
                                    'div',
                                    { className: 'Tabs_tabsBar_37' },
                                    l ? o().createElement(Hu, c) : o().createElement(Wu, c),
                                ),
                                o().createElement('div', { className: i }),
                            ),
                        );
                    }),
                    Vu = (0, a.memo)(({ tasks: e }) =>
                        o().createElement(
                            'div',
                            { className: 'Tasks_base_ad' },
                            e.map((e) =>
                                o().createElement(
                                    'div',
                                    {
                                        className: B()('Tasks_taskContainer_95', {
                                            Tasks_taskContainer__done_e3: e.isDone,
                                        }),
                                        key: e.taskNumber,
                                    },
                                    e.isDone && o().createElement('div', { className: 'Tasks_taskIcon_8a' }),
                                    o().createElement(ou, {
                                        text: String(e.taskNumber),
                                        className: B()('Tasks_taskText_6e', { Tasks_taskText__done_3a: e.isDone }),
                                    }),
                                ),
                            ),
                        ),
                    ),
                    zu = R.strings.tank_academy.vehiclesSelection.doneView,
                    Uu = (0, j.observer)(() => {
                        const e = vu().model,
                            u = e.computes.getSelectedTab(),
                            t = e.computes.isSelectedTabPremium(),
                            r =
                                (null == u
                                    ? void 0
                                    : u.tasks.map((e) => ({ taskNumber: e.number, isDone: e.state === gu.Done }))) ||
                                [];
                        return o().createElement(
                            'div',
                            { className: 'VehiclesReceivedWidget_base_3d' },
                            o().createElement(
                                'div',
                                { className: 'VehiclesReceivedWidget_content_47' },
                                o().createElement('div', { className: 'VehiclesReceivedWidget_doneIcon_38' }),
                                o().createElement('div', { className: 'VehiclesReceivedWidget_smoke_36' }),
                                o().createElement(ou, {
                                    text: zu.title(),
                                    className: 'VehiclesReceivedWidget_text_95',
                                    format: {
                                        binding: {
                                            vehicleText: zu.vehicleText.$dyn(t ? 'premiumVehicle' : 'defaultVehicle'),
                                            level: o().createElement(ou, {
                                                text: zu.level(),
                                                format: { binding: { level: null == u ? void 0 : u.level } },
                                                className: 'VehiclesReceivedWidget_innerText_99',
                                            }),
                                        },
                                    },
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'VehiclesReceivedWidget_tasksWrapper_ee' },
                                    o().createElement(Vu, { tasks: r }),
                                ),
                            ),
                        );
                    }),
                    ju = R.strings.tank_academy.vehiclesSelection.infoWidget,
                    $u = ({ tasks: e, hasToken: u, level: t, isPremium: r }) => {
                        const n = Nu(t),
                            a = 1 === e.length ? ju.noTokenSingle() : ju.noTokenFew(),
                            s = (e) =>
                                r
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          ' ',
                                          o().createElement(ou, { text: ju.selectionPremiumText(), className: e }),
                                          ' ',
                                      )
                                    : ' ';
                        return o().createElement(
                            'div',
                            { className: B()('InfoWidget_base_0a') },
                            o().createElement(
                                'div',
                                { className: 'InfoWidget_content_0f' },
                                u
                                    ? o().createElement(
                                          'div',
                                          { className: 'InfoWidget_hasTokenContent_45' },
                                          o().createElement('div', { className: 'InfoWidget_hasTokenTextBg_eb' }),
                                          o().createElement(ou, {
                                              className: 'InfoWidget_hasTokenText_06',
                                              text: ju.hasToken(),
                                              format: {
                                                  binding: {
                                                      level: n,
                                                      premium: s('InfoWidget_hasTokenText__isPremium_96'),
                                                  },
                                              },
                                          }),
                                      )
                                    : o().createElement(
                                          'div',
                                          { className: 'InfoWidget_noTokenContent_d1' },
                                          o().createElement('div', { className: 'InfoWidget_noTokenTextBg_8c' }),
                                          o().createElement(ou, {
                                              className: 'InfoWidget_noTokenText_11',
                                              text: a,
                                              format: {
                                                  binding: {
                                                      selectionText: o().createElement(ou, {
                                                          text: ju.selectionText(),
                                                          className: B()('InfoWidget_noTokenTextHighlight_84', {
                                                              InfoWidget_noTokenTextHighlight__isPremium_61: r,
                                                          }),
                                                      }),
                                                      premium: s('InfoWidget_noTokenPremiumText_ab'),
                                                  },
                                              },
                                          }),
                                          o().createElement(Vu, { tasks: e }),
                                      ),
                            ),
                        );
                    },
                    Xu = {
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
                let Ku, Yu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ku || (Ku = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Yu || (Yu = {})));
                const qu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: s,
                    soundHover: l,
                    soundClick: i,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        g = D[1],
                        h = (0, a.useState)(!1),
                        p = h[0],
                        v = h[1],
                        b = (0, a.useState)(!1),
                        f = b[0],
                        w = b[1],
                        S = (0, a.useCallback)(() => {
                            n || (F.current && (F.current.focus(), g(!0)));
                        }, [n]),
                        T = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [C],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                n || (A && A(e));
                            },
                            [n, A],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                n || (null !== l && H(l), c && c(e), w(!0));
                            },
                            [n, l, c],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                n || (m && m(e), v(!1));
                            },
                            [n, m],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                n || (null !== i && H(i), _ && _(e), t && S(), v(!0));
                            },
                            [n, i, _, S, t],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                n || (d && d(e), v(!1));
                            },
                            [n, d],
                        ),
                        O = B()(
                            Xu.base,
                            Xu[`base__${r}`],
                            {
                                [Xu.base__disabled]: n,
                                [Xu[`base__${u}`]]: u,
                                [Xu.base__focus]: C,
                                [Xu.base__highlightActive]: p,
                                [Xu.base__firstHover]: f,
                            },
                            s,
                        ),
                        P = B()(Xu.state, Xu.state__default);
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
                            g(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: y,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: k,
                                onClick: x,
                            },
                            r !== Ku.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Xu.back }),
                                    o().createElement('span', { className: Xu.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: P },
                                o().createElement('span', { className: Xu.stateDisabled }),
                                o().createElement('span', { className: Xu.stateHighlightHover }),
                                o().createElement('span', { className: Xu.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Xu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                qu.defaultProps = { type: Ku.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Zu = (0, a.memo)(qu),
                    Qu = [
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
                function Ju(e) {
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
                const et = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: lu.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    ut = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            i = e.ignoreShowDelay,
                            c = void 0 !== i && i,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            g = e.onShow,
                            h = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Qu);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
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
                            b = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (et(t, d, { isMouseEvent: !0, on: !0, arguments: Ju(r) }, v),
                                    g && g(),
                                    (p.current.isVisible = !0));
                            }, [t, d, r, v, g]),
                            f = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        et(t, d, { on: !1 }, v),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, v, h]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === _ && f(), null == l || l(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === _ && f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    tt = ['children'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const nt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, tt);
                        return o().createElement(
                            ut,
                            rt(
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
                    at = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const st = R.views.common.tooltip_window.simple_tooltip_content,
                    lt = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            s = e.alert,
                            l = e.args,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, at);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, l]);
                        return o().createElement(
                            ut,
                            ot(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? st.SimpleTooltipHtmlContent('resId') : st.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                i,
                            ),
                            u,
                        );
                        var E;
                    };
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
                const ct = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(lt, u, r);
                        const n = u.contentId,
                            a = u.args,
                            s = null == a ? void 0 : a.contentId;
                        return n || s
                            ? o().createElement(ut, it({}, u, { contentId: n || s }), r)
                            : o().createElement(nt, u, r);
                    },
                    Et = 'default',
                    _t = 'search',
                    mt = 'email',
                    dt = 'password',
                    At = 'normal',
                    Ft = 'medium',
                    Dt = {
                        [Et]: '',
                        [mt]: R.strings.common.input.placeholder.email(),
                        [_t]: R.strings.common.input.placeholder.search(),
                        [dt]: R.strings.common.input.placeholder.password(),
                    },
                    Ct = { [Et]: 'text', [mt]: 'text', [_t]: 'text', [dt]: 'password' },
                    gt = { [Et]: '', [mt]: 'Invalid email', [_t]: '', [dt]: '' },
                    ht = R.images.gui.maps.icons.components.input;
                const Bt = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    pt = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = 'default',
                            size: r = 'medium',
                            variant: n = 'normal',
                            placeholder: s = '',
                            highlighted: l,
                            withClear: i,
                            selectOnFocus: c = !0,
                            maxLength: E,
                            iconSource: _,
                            classMix: m,
                            onMouseEnter: d,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: D,
                            onClick: C,
                            onChange: g,
                            onClear: h,
                            onFocus: p,
                            onBlur: v,
                        }) => {
                            const b = (0, a.useState)(!1),
                                f = b[0],
                                w = b[1],
                                S = (0, a.useRef)(null),
                                T = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = 'disabled' !== n,
                                y = (0, a.useCallback)(
                                    (e) => {
                                        x && (w(!0), p && p(e));
                                    },
                                    [x, p],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        x && !T.current.mouseOver && (w(!1), v && v(e));
                                    },
                                    [x, v],
                                );
                            (0, a.useEffect)(() => {
                                x && f && c && S.current && S.current.select();
                            }, [c, f, x]);
                            const L = (0, a.useCallback)(
                                    (e) => {
                                        x && g && g(e.target.value);
                                    },
                                    [x, g],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseOver = !0), d && d(e));
                                    },
                                    [x, d],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            S.current &&
                                            (T.current.mouseDown && S.current.focus(),
                                            (T.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [x, A],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseDown = !0), F && F(e));
                                    },
                                    [x, F],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        x && ((T.current.mouseDown = !1), D && D(e));
                                    },
                                    [x, D],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            S.current &&
                                            ((!f || (f && e.target !== S.current)) && S.current.focus(), C && C(e));
                                    },
                                    [f, x, C],
                                ),
                                I = s || Dt[t],
                                H = Boolean(_),
                                G = B()(
                                    Bt.base,
                                    Bt[`base__${r}`],
                                    l && Bt[`base__${n}`],
                                    f && Bt.base__focused,
                                    H && Bt.base__withIcon,
                                    m,
                                ),
                                V = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                z = B()(Bt.input, Bt[`input__${t}`]),
                                U = B()(Bt.icon, Bt[`icon__${t}`]),
                                j = B()(Bt.placeholder, Bt[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: G,
                                    onMouseEnter: N,
                                    onMouseDown: R,
                                    onMouseUp: O,
                                    onMouseLeave: k,
                                    onClick: P,
                                },
                                !x && o().createElement('div', { className: Bt.disabled }),
                                V && o().createElement('div', { style: V, className: U }),
                                o().createElement('input', {
                                    ref: S,
                                    className: z,
                                    type: Ct[t],
                                    value: u,
                                    onChange: L,
                                    disabled: !x,
                                    onFocus: y,
                                    onBlur: M,
                                    maxLength: E,
                                }),
                                I && !u && !f && o().createElement('div', { className: j }, I),
                                i &&
                                    o().createElement('div', {
                                        className: Bt.clear,
                                        onClick: (e) => {
                                            (W.playClick(), h && h(e));
                                        },
                                        onMouseEnter: W.playHighlight,
                                    }),
                            );
                        },
                    ),
                    vt = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    bt = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: n }) => {
                        const s = (0, a.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            l = B()(vt.base, u && vt.base__shown),
                            i = B()(vt.message, vt[`message__${e}`], n);
                        return o().createElement(
                            'div',
                            { className: l },
                            s && o().createElement('div', { className: vt.icon, style: s }),
                            o().createElement('div', { className: i }, t),
                        );
                    },
                    ft = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    wt = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const Tt = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    xt = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? Et : t,
                            n = e.variant,
                            s = void 0 === n ? At : n,
                            l = e.size,
                            i = void 0 === l ? Ft : l,
                            c = e.value,
                            E = e.tooltipArgs,
                            _ = e.helperText,
                            m = void 0 === _ ? '' : _,
                            d = e.isValidated,
                            A = void 0 === d || d,
                            F = e.showHelper,
                            D = void 0 === F || F,
                            C = e.error,
                            g = e.options,
                            h = e.onFocus,
                            p = e.onMouseEnter,
                            v = e.onMouseLeave,
                            b = e.onMouseUp,
                            f = e.onMouseDown,
                            w = e.onChange,
                            S = e.classMix,
                            T = e.controlClassMix,
                            x = e.helperClassMix,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, wt);
                        const M = (0, a.useState)(c),
                            L = M[0],
                            N = M[1],
                            k = (0, a.useState)(A),
                            R = k[0],
                            O = k[1],
                            P = (0, a.useMemo)(() => Object.assign({}, Tt, g), [g]),
                            I = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, a.useCallback)((e) => {
                                e !== I.current.value &&
                                    ((I.current.value = e), (I.current.isChangeHandled = !1), N(e));
                            }, []),
                            W = (0, a.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (P.performChangeValidation &&
                                        (u = P.changesValidator
                                            ? P.changesValidator(e)
                                            : (function (e, u) {
                                                  return (
                                                      u !== mt ||
                                                      (function (e) {
                                                          const u = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(u);
                                                      })(e)
                                                  );
                                              })(e, I.current.type)),
                                        w && w(e, u));
                                },
                                [w, P],
                            ),
                            G = (0, a.useCallback)(() => {
                                I.current.debounceTimeout &&
                                    (window.clearTimeout(I.current.debounceTimeout), (I.current.debounceTimeout = 0));
                            }, []),
                            V = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => G(), [G]);
                        const z = (0, a.useCallback)(
                            (e) => {
                                (G(),
                                    P.debounceTime
                                        ? (I.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, P.debounceTime))
                                        : W(e));
                            },
                            [W, G, P.debounceTime],
                        );
                        ((0, a.useEffect)(() => {
                            I.current.isChangeHandled ||
                                I.current.value !== L ||
                                (z(I.current.value), (I.current.isChangeHandled = !0));
                        }, [L, z]),
                            (0, a.useEffect)(() => {
                                (I.current.isChangeHandled && c !== I.current.value && ((I.current.value = c), N(c)),
                                    (I.current.type = r));
                            }, [c, r]),
                            (0, a.useEffect)(() => {
                                O(A);
                            }, [A, s]));
                        const U = (0, a.useCallback)((e) => p && p(e), [p]),
                            j = (0, a.useCallback)(
                                (e) => {
                                    (P.disableHighlightOnFocus && R && O(!1), h && h(e));
                                },
                                [R, h, P.disableHighlightOnFocus],
                            ),
                            $ = (0, a.useCallback)((e) => b && b(e), [b]),
                            X = (0, a.useCallback)((e) => f && f(e), [f]),
                            K = (0, a.useCallback)((e) => v && v(e), [v]),
                            Y = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, u) {
                                              return e === _t ? ht.$dyn(`search_${u}`) : '';
                                          })(r, i)
                                        : '',
                                [r, i, P.withTypeIcon],
                            ),
                            q = m || gt[r],
                            Z = Boolean(L),
                            Q = C ? 'error' : s,
                            J = Boolean(C) || R,
                            ee = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Z && P.withClear : Z && r === _t),
                                [r, Z, P],
                            ),
                            ue = B()(ft.base, ft[`base__${i}`], ft[`base__${s}`], S);
                        return o().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: U, onMouseDown: X, onMouseUp: $, onMouseLeave: K },
                            o().createElement(
                                ct,
                                { tooltipArgs: E },
                                o().createElement(
                                    pt,
                                    St(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: i,
                                            type: r,
                                            variant: Q,
                                            value: L,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: T,
                                            onFocus: j,
                                            onChange: H,
                                            onClear: V,
                                        },
                                        y,
                                    ),
                                ),
                            ),
                            q &&
                                o().createElement(
                                    'div',
                                    { className: ft.helper },
                                    o().createElement(bt, {
                                        variant: Q,
                                        show: D && (P.isPermanentHelper || J),
                                        helperText: C || q,
                                        helperIcon: P.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    yt = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    Mt = {
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
                var Lt;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Lt || (Lt = {}));
                const Nt = ['__left', '__right', '__top', '__bottom'],
                    kt =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, n) => {
                                const s = (0, a.useRef)(null),
                                    i = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    E = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    _ = E[0],
                                    m = E[1],
                                    d = (0, a.useCallback)(() => {
                                        (W.playClick(), l.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        W.playHighlight();
                                    }, []),
                                    F = B()(Mt.arrow, Mt[`arrow${Nt[_]}`]);
                                yt(
                                    () => (
                                        l.O.client.events.mouse.enableOutside(),
                                        l.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : l.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === s.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = l.O.client.getMouseGlobalPosition(),
                                                    u = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < r.boundX ||
                                                        e.x > r.boundX + r.boundWidth ||
                                                        e.y > r.boundY + r.boundHeight ||
                                                        e.y < r.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : l.O.view.sendEvent.close('popover');
                                        },
                                        [s, c, t],
                                    ),
                                    C = (0, a.useCallback)(
                                        () => (
                                            l.O.view.freezeTextureBeforeResize(),
                                            $(() => {
                                                if (i.current) {
                                                    const e = i.current.scrollWidth,
                                                        u = i.current.scrollHeight;
                                                    (l.O.view.resize(e, u), m(window.decorator.directionType));
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, a.useImperativeHandle)(n, () => ({ updateSize: C })),
                                    yt(() => {
                                        l.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && r(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, lu.Eu)());
                                        return (
                                            !u && e.promise.then(() => C()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [C, D, u]),
                                    o().createElement(
                                        'div',
                                        { className: Mt.base, ref: i },
                                        o().createElement(
                                            'div',
                                            { className: Mt.decorator },
                                            o().createElement(
                                                'div',
                                                { className: Mt.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        lt,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: Mt.closeBtn,
                                                            onClick: d,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: F, style: r.arrow }),
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
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Ot = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            n = void 0 === r ? Lt.Top : r,
                            s = e.targetId,
                            l = e.args,
                            i = e.onClick,
                            c = e.children,
                            E = e.isEnabled,
                            _ = void 0 === E || E,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, kt);
                        const d = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, lu.wU)()) return (0, lu.SW)();
                                d.current && (0, lu.P3)(u, n, d.current, t, s, l);
                            }, [u, n, l, t, s]);
                        return o().createElement(
                            'div',
                            Rt(
                                {
                                    ref: d,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            _ && (A(), i && i(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    Pt = {
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
                    It = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ht = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Wt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Gt = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let s = It.exec(e),
                            l = e,
                            i = 0;
                        for (; s;) {
                            const t = s[0],
                                a = Ht.exec(t),
                                c = Wt.exec(t),
                                E = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + i++ + e;
                                ((l = l.replace(t, `%(${s})`)),
                                    (n[s] = Pt[e]
                                        ? o().createElement(
                                              'span',
                                              { className: Pt[e] },
                                              o().createElement(Ke, { text: E, binding: u }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: r(e) },
                                              o().createElement(Ke, { text: E, binding: u }),
                                          )));
                            }
                            s = It.exec(e);
                        }
                        return o().createElement(Ke, { text: l, classMix: t, binding: n });
                    }),
                    Vt = 'SearchResult_showedCount_ef',
                    zt = R.strings.battle_matters.vehicleSelection,
                    Ut = (0, j.observer)(() => {
                        const e = vu(),
                            u = e.model,
                            t = e.controls,
                            r = u.totalVehiclesCount.get(),
                            n = u.computes.getVehiclesFilteredCount(),
                            a = u.computes.isFilterApplied();
                        return o().createElement(
                            'div',
                            { className: 'SearchResult_base_76' },
                            o().createElement(ou, { text: zt.showed(), className: 'SearchResult_text_f5' }),
                            r === n
                                ? o().createElement('div', { className: Vt }, n)
                                : o().createElement(
                                      'div',
                                      {
                                          className: B()(
                                              'SearchResult_filterApplied_0f',
                                              0 === n && 'SearchResult_filterApplied__empty_94',
                                          ),
                                      },
                                      o().createElement('div', { className: 'SearchResult_filterAppliedIcon_0d' }),
                                      o().createElement(Gt, {
                                          text: zt.searchResults(),
                                          classMix: 'SearchResult_searchResults_70',
                                          binding: {
                                              showedCount: o().createElement('div', { className: Vt }, n),
                                              totalCount: r,
                                          },
                                      }),
                                  ),
                            a &&
                                o().createElement(
                                    lt,
                                    {
                                        header: zt.filter.tooltip.reset.header(),
                                        body: zt.filter.tooltip.reset.description(),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'SearchResult_resetHoverArea_20', onClick: t.resetFilter },
                                        o().createElement('div', { className: 'SearchResult_resetIconBg_b4' }),
                                        o().createElement('div', { className: 'SearchResult_resetIcon_26' }),
                                    ),
                                ),
                        );
                    }),
                    jt = R.strings.battle_matters.vehicleSelection,
                    $t = { maxLength: 50 },
                    Xt = (0, j.observer)(() => {
                        const e = vu(),
                            u = e.model,
                            t = e.controls,
                            r = Y((e) => {
                                t.setFilter(e);
                            });
                        return o().createElement(
                            'div',
                            { className: 'SearchPanel_base_77' },
                            o().createElement(Ut, null),
                            o().createElement(
                                'div',
                                { className: 'SearchPanel_controls_b0' },
                                o().createElement(
                                    lt,
                                    {
                                        header: jt.search.tooltip.header(),
                                        body:
                                            ((n = jt.search.tooltip.body()),
                                            (a = $t),
                                            n.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                                return String(a[e.slice(u, -u)]);
                                            })),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'SearchPanel_searchField_db' },
                                        o().createElement(xt, {
                                            value: u.filterString.get(),
                                            type: _t,
                                            placeholder: jt.search.placeholder(),
                                            onChange: r,
                                            options: $t,
                                            classMix: 'SearchPanel_input_22',
                                            controlClassMix: 'SearchPanel_control_4a',
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    Ot,
                                    {
                                        contentId:
                                            R.views.tank_academy.lobby.tank_academy.popovers.TankAcademyFilterPopoverView(
                                                'resId',
                                            ),
                                        direction: Lt.Bottom,
                                    },
                                    o().createElement(
                                        lt,
                                        { header: jt.filter.tooltip.header(), body: jt.filter.tooltip.body() },
                                        o().createElement(
                                            Zu,
                                            { mixClass: 'SearchPanel_filterButton_8b' },
                                            o().createElement('div', { className: 'SearchPanel_filterButtonIcon_60' }),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: 'SearchPanel_divider_e2' }),
                        );
                        var n, a;
                    }),
                    Kt = R.strings.battle_matters.vehicleSelection,
                    Yt = (0, j.observer)(() => {
                        const e = vu().controls;
                        return o().createElement(
                            'div',
                            { className: 'NoFilteredVehicles_base_b8' },
                            o().createElement(
                                'div',
                                { className: 'NoFilteredVehicles_header_d8' },
                                o().createElement('div', { className: 'NoFilteredVehicles_alertIcon_65' }),
                                o().createElement(ou, {
                                    text: Kt.noFilteredVehicles(),
                                    className: 'NoFilteredVehicles_text_d3',
                                }),
                            ),
                            o().createElement(
                                Zu,
                                { type: Ku.secondary, size: Yu.small, onClick: e.resetFilter },
                                o().createElement(ou, { text: Kt.noFilteredVehiclesResetButton() }),
                            ),
                        );
                    }),
                    qt = 'Card_vehicleRole_dd',
                    Zt = R.strings.tank_academy.vehiclesSelection.card,
                    Qt = R.strings.menu.roleExp,
                    Jt = (0, j.observer)(
                        ({
                            vehicleName: e,
                            vehicleType: u,
                            nation: t,
                            level: r,
                            vehicleCD: n,
                            userName: s,
                            roleKey: l,
                            isBranchContinuation: i,
                            isPremium: c,
                        }) => {
                            const E = vu().controls,
                                _ = S().mediaSize,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                A = m[1],
                                F = c ? '_elite' : '',
                                D = R.images.gui.maps.shop.vehicles.c_360x270.$dyn(Ve(e)),
                                C = R.images.gui.maps.shop.nations.$dyn(`flag_${t}`),
                                g = R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(`${Ve(u)}${F}`),
                                h = R.images.gui.maps.icons.roleExp.roles.c_24x24.$dyn(Ve(l)),
                                p = 'NotDefined' !== l,
                                v = p ? Zt.additionalTitleRole() : Zt.additionalTitleNoRole(),
                                f = Zt.vehicleTypeDescription.$dyn(Ve(u)),
                                w = p ? Qt.roleDescr.$dyn(Ve(l)) : f,
                                T =
                                    'string' != typeof (x = w) || x.length <= 90
                                        ? x
                                        : x.slice(0, 90 - '...'.length) + '...';
                            var x;
                            const y = !i || (_ !== b.ExtraSmall && _ !== b.Small) ? w : T,
                                M = {
                                    icon: o().createElement('div', {
                                        className: 'Card_vehicleTypeIcon_22',
                                        style: { backgroundImage: `url(${g})` },
                                    }),
                                    level: ((L = r), ku ? `${L}` : Nu(L)),
                                    name: s,
                                };
                            var L;
                            return o().createElement(
                                'div',
                                {
                                    className: B()('Card_base_7d', d && 'Card_base__hovered_26'),
                                    onMouseEnter: () => {
                                        (A(!0), H(R.sounds.ta_hover_ui()));
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: 'Card_wrapper_15',
                                        onClick: () => {
                                            (E.showVehicle(n), W.playClick());
                                        },
                                    },
                                    o().createElement('div', {
                                        className: 'Card_nationImage_49',
                                        style: { backgroundImage: `url(${C})` },
                                    }),
                                    o().createElement('div', {
                                        className: 'Card_vehicleImage_32',
                                        style: { backgroundImage: `url(${D})` },
                                    }),
                                    i &&
                                        !d &&
                                        o().createElement('div', { className: 'Card_branchContinuationIcon_88' }),
                                    o().createElement('div', { className: 'Card_overlay_d2' }),
                                    o().createElement(
                                        'div',
                                        { className: B()('Card_text_aa', { Card_text__withContinuationBlock_8a: i }) },
                                        i &&
                                            o().createElement(
                                                'div',
                                                { className: 'Card_additionalContinuationBlock_36' },
                                                o().createElement(
                                                    'div',
                                                    { className: 'Card_additionalContinuationContainer_45' },
                                                    o().createElement('div', {
                                                        className: 'Card_additionalContinuationIcon_6c',
                                                    }),
                                                    o().createElement(ou, {
                                                        text: Zt.continuationText(),
                                                        className: 'Card_additionalContinuationText_3c',
                                                    }),
                                                ),
                                                o().createElement('div', {
                                                    className: 'Card_additionalContinuationDivider_88',
                                                }),
                                            ),
                                        !d &&
                                            o().createElement(Gt, {
                                                text: Zt.vehicleName(),
                                                binding: M,
                                                classMix: B()(
                                                    'Card_vehicleName_2d',
                                                    d && 'Card_vehicleName__hidden_33',
                                                ),
                                            }),
                                        d
                                            ? o().createElement(ou, {
                                                  text: v,
                                                  className: B()(qt, {
                                                      Card_vehicleRole__noRole_43: !p,
                                                      Card_vehicleRole__withMargin_ea: i,
                                                  }),
                                              })
                                            : o().createElement(
                                                  'div',
                                                  { className: 'Card_vehicleRoleContainer_cb' },
                                                  p &&
                                                      o().createElement('div', {
                                                          className: 'Card_vehicleRoleIcon_88',
                                                          style: { backgroundImage: `url(${h})` },
                                                      }),
                                                  p
                                                      ? o().createElement(ou, {
                                                            text: Qt.roleName.$dyn(l),
                                                            className: B()(qt),
                                                            format: {
                                                                binding: { groupName: Qt.roleGroupName.$dyn(Ve(l)) },
                                                            },
                                                        })
                                                      : o().createElement(ou, {
                                                            text: Zt.vehicleType.$dyn(Ve(u)),
                                                            className: 'Card_vehicleType_30',
                                                        }),
                                              ),
                                        o().createElement(ou, { text: y, className: 'Card_additionsText_0e' }),
                                    ),
                                ),
                                o().createElement(
                                    lt,
                                    { body: Zt.compare.tooltip.body() },
                                    o().createElement('div', {
                                        className: 'Card_compareButton_15',
                                        onClick: () => {
                                            (E.compareVehicle(n), W.playClick());
                                        },
                                    }),
                                ),
                            );
                        },
                    ),
                    er = (0, j.observer)(() => {
                        const e = vu().model.computes.getVehiclesFiltered();
                        return o().createElement(
                            'div',
                            { className: 'Cards_base_44' },
                            e.map((e, u) =>
                                o().createElement(
                                    'div',
                                    {
                                        key: e.vehCD,
                                        className: B()('Cards_card_b1', (u + 1) % 3 == 0 && 'Cards_card__lastInRow_d9'),
                                    },
                                    o().createElement(Jt, {
                                        vehicleName: e.vehName,
                                        vehicleType: e.vehType,
                                        nation: e.nation,
                                        level: e.level,
                                        vehicleCD: e.vehCD,
                                        userName: e.userName,
                                        isBranchContinuation: e.isBranchContinuation,
                                        roleKey: e.roleKey,
                                        isPremium: e.isPremium,
                                    }),
                                ),
                            ),
                        );
                    }),
                    ur = R.strings.tank_academy.vehiclesSelection.noVehicles,
                    tr = (0, j.observer)(() => {
                        const e = vu().model.computes.getSelectedTab(),
                            u = null != e && e.isPremium ? ur.subtitlePremium() : ur.subtitleDefault(),
                            t = Nu(null == e ? void 0 : e.level);
                        return o().createElement(
                            'div',
                            { className: 'NoVehicles_base_ff' },
                            o().createElement(ou, { text: ur.title(), className: 'NoVehicles_title_71' }),
                            o().createElement(ou, {
                                text: u,
                                className: 'NoVehicles_subtitle_92',
                                format: { binding: { level: t } },
                            }),
                        );
                    }),
                    rr = R.strings.tank_academy.vehiclesSelection,
                    nr = we.Vertical.Area,
                    ar = we.Vertical.Bar,
                    or = (0, j.observer)(() => {
                        const e = (0, a.useState)(!1),
                            u = e[0],
                            t = e[1],
                            r = vu(),
                            n = r.model,
                            s = r.controls,
                            i = (0, a.useCallback)(() => {
                                ((0, lu.c9)(lu.B0.TOOLTIP, { on: !1 }), s.goBack());
                            }, [s]);
                        ((0, a.useLayoutEffect)(() => {
                            const e = requestAnimationFrame(() => {
                                t(!0);
                            });
                            return () => cancelAnimationFrame(e);
                        }, []),
                            (function ({
                                key: e = su.n.ESCAPE,
                                callback: u = () => l.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                cu(e, u, t);
                            })({ key: su.n.ESCAPE, callback: i }));
                        const c = S().mediaSize === b.ExtraSmall,
                            E = n.computes.getVehiclesFilteredCount() > 0,
                            _ = de(),
                            m = n.computes.getSelectedLevel(),
                            d = n.computes.getTasks(),
                            A = n.computes.hasSelectedTabToken(),
                            F = n.computes.isSelectedTabPremium(),
                            D = n.computes.getSelectedTab(),
                            C = ((e, u) => {
                                const t = (0, a.useState)(!1),
                                    r = t[0],
                                    n = t[1],
                                    o = (0, a.useRef)(0),
                                    s = (0, a.useCallback)(() => {
                                        const u = e.contentRef.current;
                                        return !u || u.scrollTop <= 1;
                                    }, [e.contentRef]),
                                    l = (0, a.useCallback)(() => {
                                        const u = e.contentRef.current;
                                        if (!u) return !1;
                                        const t = Math.max(0, u.scrollHeight - u.offsetHeight);
                                        return u.scrollTop >= t - 1;
                                    }, [e.contentRef]),
                                    i = (0, a.useCallback)(() => {
                                        (e.applyScroll(0, { immediate: !0 }), (o.current = 0));
                                    }, [e]),
                                    c = (0, a.useCallback)(() => {
                                        (n(!1), i());
                                    }, [i]),
                                    E = (0, a.useCallback)(
                                        (e) => {
                                            if (u && !e.shiftKey) {
                                                if (fu(e.deltaY) && s())
                                                    return (e.preventDefault(), e.stopPropagation(), void n(!1));
                                                if (e.deltaY < -1) {
                                                    if (l()) return;
                                                    n(!0);
                                                }
                                            }
                                        },
                                        [u, l, s],
                                    ),
                                    _ = (0, a.useCallback)(
                                        (t) => {
                                            u &&
                                                (t.preventDefault(),
                                                t.stopPropagation(),
                                                fu(t.deltaY) && s() ? n(!1) : e.handleMouseWheel(t));
                                        },
                                        [u, s, e],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (!u) return;
                                        e.recalculateContent();
                                        const t = window.setTimeout(() => {
                                            e.recalculateContent();
                                        }, 400);
                                        return () => window.clearTimeout(t);
                                    }, [u, r, e]),
                                    (0, a.useEffect)(() => {
                                        if (!u) return;
                                        const t = (e) => {
                                            const u = e.value.scrollPosition,
                                                t = o.current;
                                            ((o.current = u), u <= 1 ? n(!1) : u > t && n(!0));
                                        };
                                        return (
                                            e.events.on('change', t),
                                            () => {
                                                e.events.off('change', t);
                                            }
                                        );
                                    }, [u, e]),
                                    { isTabsCompressed: r, onTabSelect: c, onMainWheelCapture: E, onFixedTopWheel: _ }
                                );
                            })(_, E),
                            g = C.isTabsCompressed,
                            h = C.onTabSelect,
                            p = C.onMainWheelCapture,
                            v = C.onFixedTopWheel,
                            f = (() => {
                                const e = (0, a.useState)(!0),
                                    u = e[0],
                                    t = e[1];
                                return {
                                    isContentVisible: u,
                                    runWithAnimation: (0, a.useCallback)((e) => {
                                        (t(!1),
                                            requestAnimationFrame(() => {
                                                requestAnimationFrame(() => {
                                                    (e(), t(!0));
                                                });
                                            }));
                                    }, []),
                                };
                            })(),
                            w = f.isContentVisible,
                            T = f.runWithAnimation,
                            x = !g,
                            y = B()('App_tabSwitchContent_12', { App_tabSwitchContent__hidden_db: !w }),
                            M = n.computes.getVehiclesNames().length > 0,
                            L = B()('App_base_19', u && 'App_base__visible_c7'),
                            N = { content: 'App_scrollableArea_41' },
                            k = { base: 'App_scrollBarColumn_ee' };
                        return o().createElement(
                            'div',
                            { className: L },
                            o().createElement(
                                'div',
                                { className: 'App_content_6c' },
                                o().createElement(
                                    'div',
                                    { className: 'App_backButton_4d' },
                                    o().createElement(U, {
                                        caption: rr.backButton.title(),
                                        goto: c ? '' : rr.backButton.subtitle(),
                                        onClick: i,
                                    }),
                                ),
                                o().createElement(ou, { text: rr.header.title(), className: 'App_header_83' }),
                                o().createElement(
                                    'div',
                                    { className: 'App_main_3e', onWheelCapture: p },
                                    o().createElement(Gu, {
                                        isBigMode: !!D.isDone || x,
                                        onTabSelect: (e) => {
                                            T(() => {
                                                (h(), e());
                                            });
                                        },
                                    }),
                                    null != D && D.isDone
                                        ? o().createElement('div', { className: y }, o().createElement(Uu, null))
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: 'App_fixedTop_49', onWheel: v },
                                                  o().createElement(
                                                      'div',
                                                      { className: 'App_tabsInfo_d5' },
                                                      o().createElement(
                                                          'div',
                                                          { className: y },
                                                          o().createElement($u, {
                                                              tasks: d,
                                                              level: m,
                                                              hasToken: A,
                                                              isPremium: F,
                                                          }),
                                                      ),
                                                  ),
                                                  o().createElement(
                                                      'div',
                                                      { className: bu },
                                                      o().createElement(Xt, null),
                                                  ),
                                              ),
                                              M
                                                  ? o().createElement(
                                                        'div',
                                                        { className: 'App_cards_ed' },
                                                        o().createElement(
                                                            nr,
                                                            {
                                                                api: _,
                                                                className: 'App_scrollSensitiveArea_30',
                                                                classNames: N,
                                                            },
                                                            o().createElement(
                                                                'div',
                                                                { className: y },
                                                                E
                                                                    ? o().createElement(
                                                                          'div',
                                                                          { className: bu },
                                                                          o().createElement(er, null),
                                                                      )
                                                                    : o().createElement(
                                                                          'div',
                                                                          { className: 'App_noFilteredVehicles_cd' },
                                                                          o().createElement(Yt, null),
                                                                      ),
                                                            ),
                                                        ),
                                                        E && o().createElement(ar, { api: _, classNames: k }),
                                                    )
                                                  : o().createElement(tr, null),
                                          ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        o().createElement(O, null, o().createElement(pu, null, o().createElement(or, null))),
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, r] = deferred[l], a = !0, o = 0; o < u.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, r];
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
            var e = { 533: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, o, s] = t,
                        l = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var i = s(__webpack_require__);
                    }
                    for (u && u(t); l < a.length; l++)
                        ((n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(i);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(10));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
