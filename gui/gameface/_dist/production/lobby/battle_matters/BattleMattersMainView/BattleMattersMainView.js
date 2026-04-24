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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => j });
                var n = {};
                (t.r(n), t.d(n, { mouse: () => d, onResize: () => l }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => E,
                        graphicsQuality: () => m,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => F, getTextureUrl: () => A }));
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
                        addModelObserver: () => x,
                        addPreloadTexture: () => w,
                        children: () => r,
                        displayStatus: () => D,
                        displayStatusIs: () => Q,
                        events: () => g,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => P,
                        getDisplayStatus: () => $,
                        getScale: () => I,
                        getSize: () => R,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => G,
                        isFocused: () => H,
                        pxToRem: () => k,
                        remToPx: () => L,
                        resize: () => T,
                        sendEvent: () => v,
                        setAnimateWindow: () => O,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => y,
                        whenTutorialReady: () => q,
                    }));
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
                    }
                    function n() {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        s = c[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
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
                    g = {
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
                    B = ['args'];
                const C = 2,
                    p = 16,
                    h = 32,
                    b = 64,
                    f = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, B);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    v = {
                        close(e) {
                            f('popover' === e ? C : h);
                        },
                        minimize() {
                            f(b);
                        },
                        move(e) {
                            f(p, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function P(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function R(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function T(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function M(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: L(u.x), y: L(u.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function k(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function O(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function $() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: s, client: a };
            },
            521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(67);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                t.d(u, { B3: () => l, Z5: () => s, B0: () => i, ry: () => g });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var r = t(358);
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
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    m = t(67);
                const A = ['args'];
                function F(e, u, t, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            F(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(572);
                const b = a.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: g,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            718: (e, u, t) => {
                'use strict';
                var n = t(179),
                    a = t.n(n);
                const r = (e, u, t) =>
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
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, l(d, E, o)),
                    m = (0, n.createContext)(_),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, A);
                    const a = (0, n.useContext)(m),
                        s = a.extraLarge,
                        o = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        E = a.largeWidth,
                        _ = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        g = a.extraLargeHeight,
                        B = a.largeHeight,
                        C = a.mediumHeight,
                        p = a.smallHeight,
                        h = a.extraSmallHeight,
                        b = { extraLarge: g, large: B, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, b);
                        if (t.largeWidth && E) return r(u, t, b);
                        if (t.mediumWidth && _) return r(u, t, b);
                        if (t.smallWidth && F) return r(u, t, b);
                        if (t.extraSmallWidth && D) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && g) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, n.memo)(F);
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    g = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(m),
                            t = (0, n.useState)(u),
                            r = t[0],
                            i = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []);
                        (D(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]));
                        const d = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: d }, e);
                    });
                var B = t(483),
                    C = t.n(B),
                    p = t(926),
                    h = t.n(p);
                let b, f, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const w = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                            r = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, S);
                        const r = w(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', P({ className: C()(t, x[s], y[o], T[i]) }, n), u);
                    },
                    N = ['children'];
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, N);
                    return a().createElement(g, null, a().createElement(M, t, u));
                };
                var k = t(493),
                    L = t.n(k),
                    O = t(521),
                    H = t(364);
                const U = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = O.n.NONE, u = U, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== O.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var W = t(403);
                const $ = 'Background_base_1b',
                    Q = 'Background_image_71',
                    z = ({ isBlurred: e, children: u, onLoaded: t }) => {
                        const r = e
                            ? 'img://gui/maps/icons/battleMatters/common/background_blurred.dds'
                            : R.images.gui.maps.icons.battleMatters.common.background();
                        var s, o;
                        return (
                            (s = r),
                            (o = t),
                            (0, n.useEffect)(() => {
                                if (!o) return;
                                const e = new Image();
                                return (
                                    e.addEventListener('load', o),
                                    e.addEventListener('error', o),
                                    (e.src = s),
                                    () => {
                                        (e.removeEventListener('load', o), e.removeEventListener('error', o));
                                    }
                                );
                            }, [o, s]),
                            a().createElement(
                                'div',
                                { className: $ },
                                a().createElement('div', { className: Q, style: { backgroundImage: `url(${r})` } }, u),
                            )
                        );
                    };
                class q extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = H.B3.GOLD;
                        else e = H.B3.INTEGRAL;
                        const u = H.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let j, V, Y, X, K, Z, J;
                ((q.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                            (e.HistoricalBattleDiscount25 = 'historical_battles_main_discount'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.GoldenTicket = 'birthday2025_golden_ticket'),
                            (e.PostStamp = 'giftsystem_4_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'));
                    })(j || (j = {})),
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
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(V || (V = {})),
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
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(X || (X = {})),
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
                    })(K || (K = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Z || (Z = {})),
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
                    })(J || (J = {})));
                const ee = [
                        j.Items,
                        j.Equipment,
                        j.Xp,
                        j.XpFactor,
                        j.Blueprints,
                        j.BlueprintsAny,
                        j.Goodies,
                        j.Berths,
                        j.Slots,
                        j.Tokens,
                        j.CrewSkins,
                        j.CrewBooks,
                        j.Customizations,
                        j.CreditsFactor,
                        j.TankmenXp,
                        j.TankmenXpFactor,
                        j.FreeXpFactor,
                        j.BattleToken,
                        j.PremiumUniversal,
                        j.NaturalCover,
                        j.BpCoin,
                        j.BattlePassSelectToken,
                        j.BattlaPassFinalAchievement,
                        j.BattleBadge,
                        j.BonusX5,
                        j.CrewBonusX3,
                        j.NewYearFillers,
                        j.NewYearInvoice,
                        j.EpicSelectToken,
                        j.Comp7TokenWeeklyReward,
                        j.Comp7TokenCouponReward,
                        j.BattleBoosterGift,
                        j.CosmicLootboxCommon,
                        j.CosmicLootboxSilver,
                        j.SelectableBonus,
                        j.GoldenTicket,
                        j.PostStamp,
                        j.PremiumPlusUniversal,
                    ],
                    ue = [j.Gold, j.Credits, j.Crystal, j.FreeXp],
                    te = [j.BattlePassPoints],
                    ne = [j.PremiumPlus, j.Premium];
                let ae;
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
                })(ae || (ae = {}));
                const re = (e) =>
                        ee.includes(e)
                            ? X.MULTI
                            : ue.includes(e)
                              ? X.CURRENCY
                              : te.includes(e)
                                ? X.NUMBER
                                : ne.includes(e)
                                  ? X.PREMIUM_PLUS
                                  : X.STRING,
                    se = ['engravings', 'backgrounds'],
                    oe = ['engraving', 'background'],
                    ie = (e, u = Y.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Y.S600x450:
                                        return 'c_600x450';
                                    case Y.S400x300:
                                        return 'c_400x300';
                                    case Y.S296x222:
                                        return 'c_296x222';
                                    case Y.S232x174:
                                        return 'c_232x174';
                                    case Y.Big:
                                        return 'c_80x80';
                                    case Y.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Y.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Y.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = se[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(oe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case Y.S600x450:
                                            return 'c_600x450';
                                        case Y.S400x300:
                                            return 'c_400x300';
                                        case Y.S296x222:
                                            return 'c_296x222';
                                        case Y.S232x174:
                                            return 'c_232x174';
                                        case Y.S180x135:
                                            return 'big';
                                        case Y.Big:
                                        case Y.S80x80:
                                            return 'c_80x80';
                                        case Y.Small:
                                        case Y.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${r}`;
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
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case Y.Mini:
                                            return ae.s32;
                                        case Y.Small:
                                        case Y.S48x48:
                                            return ae.s48;
                                        case Y.S80x80:
                                        case Y.Big:
                                            return ae.s80;
                                        case Y.S128x100:
                                            return ae.s116;
                                        case Y.S180x135:
                                        case Y.S232x174:
                                        case Y.S296x222:
                                            return ae.s296;
                                        case Y.S400x300:
                                            return ae.s400;
                                        case Y.S600x450:
                                            return ae.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    le = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    ce = 'questID';
                let de;
                !(function (e) {
                    ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'));
                })(de || (de = {}));
                function Ee(e) {
                    return e;
                }
                function _e() {
                    return !1;
                }
                console.log;
                var me = t(174);
                function Ae(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Fe(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Fe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const De = (e) => (0 === e ? window : window.subViews.get(e));
                function ge(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Be = ge;
                function Ce(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var pe = t(946);
                let he;
                !(function (e) {
                    ((e.Scrolling = 'scrolling'),
                        (e.ToDone = 'toDone'),
                        (e.ToDoneFinished = 'toDoneFinished'),
                        (e.ToInProgress = 'toInProgress'),
                        (e.None = 'none'));
                })(he || (he = {}));
                const be = (e) => ({ tokenID: e }),
                    fe = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = De,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (a.set(l, t), e && t(o(r)), l);
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
                                                        for (var e, t = Ae(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = me.LO.box(n, { equals: _e });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, me.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = me.LO.box(n, { equals: _e });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, me.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = me.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, me.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = me.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: d,
                                            }),
                                            _ = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(_) : u(_),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(r),
                                    m = _[0],
                                    A = _[1],
                                    F = (0, n.useState)(() => d(r, o, l)),
                                    D = F[0],
                                    g = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? g(d(m, o, l)) : (E.current = !0);
                                    }, [l, m, o]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
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
                                t = me.LO.box(!1),
                                n = me.LO.box(he.None),
                                a = me.LO.box(void 0),
                                r = (0, pe.Om)(() =>
                                    Ce(u.intermediateQuests.get(), (e) =>
                                        Object.assign({}, e, { rewards: Ce(e.rewards, Ee) }),
                                    ),
                                ),
                                s = (0, pe.Om)(() =>
                                    Ce(u.quests.get(), (e) => Object.assign({}, e, { rewards: Ce(e.rewards, Ee) })),
                                ),
                                o = (0, pe.Om)(() => s().length),
                                i = (0, pe.Om)((e) => ge(s(), e), { equals: _e }),
                                l = (0, pe.Om)(
                                    (e, u) => {
                                        const t = i(e),
                                            n = t
                                                ? Ce(t.rewards, (e) => ({
                                                      name: e.name,
                                                      valueType: re(e.name),
                                                      value: e.value,
                                                      special: e.overlayType,
                                                      image: ie(e, u),
                                                      tooltipArgs: le(
                                                          { tooltipId: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                          { ignoreShowDelay: !0 },
                                                      ),
                                                  }))
                                                : [],
                                            a = n.length > 5 ? 4 : 5;
                                        return {
                                            data: n,
                                            count: a,
                                            boxRewardTooltip: t
                                                ? le(
                                                      { showCount: a, [ce]: t.number },
                                                      R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                  )
                                                : void 0,
                                        };
                                    },
                                    { equals: _e },
                                ),
                                c = (0, pe.Om)(() =>
                                    (function (e, u) {
                                        for (let t = e.length - 1; t >= 0; t--) if (u(Be(e, t), t, e)) return t;
                                    })(s(), (e) => e.state === de.Done),
                                ),
                                d = (0, pe.Om)(() =>
                                    (function (e, u) {
                                        for (let t = 0; t < e.length; t++) if (u(Be(e, t), t, e)) return t;
                                    })(s(), (e) => e.state === de.InProgress),
                                ),
                                E = (0, pe.Om)(() => {
                                    const e = c(),
                                        t = u.progression.lastSeenProgress.get();
                                    return void 0 !== e && t - 1 < e;
                                }),
                                _ = (0, pe.Om)(() => {
                                    const e = d(),
                                        u = c();
                                    return void 0 === e ? u : e;
                                }),
                                m = (0, pe.Om)((e) => {
                                    const u = i(e);
                                    return u ? u.maxProgress > 0 : void 0;
                                });
                            return Object.assign({}, u, {
                                isLoaded: t,
                                questSwitchAnimationPhase: n,
                                lastPlayedToDoneAnimationQuestIndex: a,
                                computes: {
                                    getQuests: s,
                                    getIntermediateQuests: r,
                                    getQuestsLength: o,
                                    getQuest: i,
                                    getQuestRewardsProps: l,
                                    getLastDoneQuestIndex: c,
                                    getFirstInProgressQuestIndex: d,
                                    getIsQuestSwitchAnimationNeeded: E,
                                    getCurrentQuestIndex: _,
                                    getIsProgressionQuest: m,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            showView: e.createCallbackNoArgs('onShowView'),
                            close: e.createCallbackNoArgs('onClose'),
                            openBootcamp: e.createCallbackNoArgs('onRunBootcamp'),
                            showManual: e.createCallbackNoArgs('onShowManual'),
                            showMainReward: e.createCallbackNoArgs('onShowMainReward'),
                            exchangeToken: e.createCallback(be, 'onSelectDelayedReward'),
                            loaded: (0, me.aD)(() => u.isLoaded.set(!0)),
                            setQuestSwitchAnimationPhase: (0, me.aD)((e) => u.questSwitchAnimationPhase.set(e)),
                            setLastPlayedToDoneAnimationQuestIndex: (0, me.aD)((e) =>
                                u.lastPlayedToDoneAnimationQuestIndex.set(e),
                            ),
                            showAnimForQuest: e.createCallback((e) => ({ [ce]: e }), 'onShowAnimForQuest'),
                            showManualForQuest: e.createCallback((e) => ({ [ce]: e }), 'onShowManualForQuest'),
                        }),
                    ),
                    ve = fe[0],
                    we = fe[1];
                let Se;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Se || (Se = {}));
                const Pe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    xe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ye = (e, u, t = Se.left) => e.split(u).reduce(t === Se.left ? Pe : xe, []),
                    Re = (() => {
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
                    Te = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Me = (e, u = Se.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Te.includes(t)
                            ? Re(e)
                            : ((e, u = Se.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return (ye(a, /( )/, u).forEach((e) => (t = t.concat(ye(e, n, Se.left)))), t);
                              })(e, u);
                    },
                    Ne = 'FormatText_base_d0',
                    Ie = ({ binding: e, text: u = '', classMix: t, alignment: r = Se.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: C()(Ne, t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Me(e, u))))(u, r, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                function ke(e) {
                    engine.call('PlaySound', e);
                }
                const Le = {
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
                    Oe = {
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
                let He, Ue;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(He || (He = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Ue || (Ue = {})));
                const Ge = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        g = D[0],
                        B = D[1],
                        p = (0, n.useState)(!1),
                        h = p[0],
                        b = p[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        w = f[1],
                        S = (0, n.useCallback)(() => {
                            s || (F.current && (F.current.focus(), B(!0)));
                        }, [s]),
                        P = (0, n.useCallback)(
                            (e) => {
                                g && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [g],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                s || (null !== i && ke(i), c && c(e), w(!0));
                            },
                            [s, i, c],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                s || (_ && _(e), b(!1));
                            },
                            [s, _],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                s || (null !== l && ke(l), E && E(e), t && S(), b(!0));
                            },
                            [s, l, E, S, t],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                s || (m && m(e), b(!1));
                            },
                            [s, m],
                        ),
                        k = C()(
                            Oe.base,
                            Oe[`base__${r}`],
                            {
                                [Oe.base__disabled]: s,
                                [Oe[`base__${u}`]]: u,
                                [Oe.base__focus]: g,
                                [Oe.base__highlightActive]: h,
                                [Oe.base__firstHover]: v,
                            },
                            o,
                        ),
                        L = C()(Oe.state, Oe.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: k,
                                onMouseEnter: y,
                                onMouseMove: T,
                                onMouseUp: M,
                                onMouseDown: N,
                                onMouseLeave: I,
                                onClick: x,
                            },
                            r !== He.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Oe.back }),
                                    a().createElement('span', { className: Oe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: L },
                                a().createElement('span', { className: Oe.stateDisabled }),
                                a().createElement('span', { className: Oe.stateHighlightHover }),
                                a().createElement('span', { className: Oe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ge.defaultProps = { type: He.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const We = (0, n.memo)(Ge),
                    $e = 'MainReward_base_54',
                    Qe = 'MainReward_image_a5',
                    ze = 'MainReward_received_f6',
                    qe = 'MainReward_receivedText_59',
                    je = 'MainReward_checkMarkWrapper_b9',
                    Ve = 'MainReward_checkMark_87',
                    Ye = 'MainReward_back_dc',
                    Xe = 'MainReward_button_0f',
                    Ke = R.strings.battle_matters.mainScreen,
                    Ze = (0, W.Pi)(() => {
                        const e = we(),
                            u = e.controls,
                            t = e.model;
                        return a().createElement(
                            'div',
                            { className: $e },
                            a().createElement('div', { className: Qe }),
                            t.progression.mainRewardReceived.get()
                                ? a().createElement(
                                      'div',
                                      { className: ze },
                                      a().createElement(
                                          'div',
                                          { className: je },
                                          a().createElement('div', { className: Ye }),
                                          a().createElement('div', { className: Ve }),
                                      ),
                                      a().createElement('div', { className: qe }, Ke.mainRewardReceived()),
                                  )
                                : a().createElement(
                                      We,
                                      { mixClass: Xe, size: Ue.medium, type: He.ghost, onClick: u.showMainReward },
                                      Ke.showMainReward(),
                                  ),
                        );
                    }),
                    Je = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let eu, uu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(eu || (eu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(uu || (uu = {})));
                const tu = ({ size: e = eu.Default, classMix: u }) =>
                        a().createElement('div', { className: C()(Je.background, Je[`background__${e}`], u) }),
                    nu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    au = ({ size: e }) => {
                        const u = C()(nu.base, nu[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    ru = {
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
                    su = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: s }) => {
                            const o = C()(
                                    ru.base,
                                    ru[`base__${e}`],
                                    t && ru.base__disabled,
                                    r && ru.base__finished,
                                    s && ru.base__withoutBounce,
                                ),
                                i = !t && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                a().createElement('div', { className: ru.pattern }),
                                a().createElement('div', { className: ru.gradient }),
                                i && a().createElement(au, { size: e }),
                            );
                        },
                    ),
                    ou = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            a().createElement(su, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    iu = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let lu, cu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(lu || (lu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(cu || (cu = {})));
                const du = 'ProgressBarDeltaSimple_base_6c',
                    Eu = 'ProgressBarDeltaSimple_delta_99',
                    _u = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                d = (0, n.useState)(cu.Idle),
                                E = d[0],
                                _ = d[1],
                                m = E === cu.In,
                                A = E === cu.End,
                                F = E === cu.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (F && !t) {
                                    return iu(() => {
                                        D(cu.In);
                                    }, u);
                                }
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (m) {
                                        return iu(() => {
                                            (i && i(), D(cu.End));
                                        }, e + u);
                                    }
                                }, [D, m, i, u, e]));
                            const g = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: du, style: C },
                                      a().createElement(
                                          'div',
                                          { style: F ? g : B, className: Eu },
                                          a().createElement(au, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    mu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(su, {
                                    size: u,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    a().createElement(_u, {
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
                    Au = 'ProgressBarDeltaGrow_base_7e',
                    Fu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Du = 'ProgressBarDeltaGrow_glow_68',
                    gu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Bu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Cu = (e) => ({ transitionDuration: `${e}ms` }),
                    pu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < r,
                                E = (0, n.useState)(lu.Idle),
                                _ = E[0],
                                m = E[1],
                                A = _ === lu.End,
                                F = _ === lu.Idle,
                                D = _ === lu.Grow,
                                g = _ === lu.Shrink,
                                B = (0, n.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                ),
                                p = (0, n.useCallback)(
                                    (e, u) =>
                                        iu(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(lu.Grow, u)
                                        : D
                                          ? p(lu.Shrink, e)
                                          : g
                                            ? p(lu.End, e)
                                            : void (A && i && i());
                            }, [p, t, A, D, F, g, i, u, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Cu(e), gu(d)), [d, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Cu(e), gu(d)), [d, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Bu(d, r), Cu(e)), [r, d, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Bu(d, r), Cu(e)),
                                    [r, d, o, e],
                                );
                            if (A) return null;
                            const w = C()(Au, c, d && 0 === o && Fu);
                            return a().createElement(
                                'div',
                                { style: F ? f : v, className: w },
                                a().createElement(
                                    'div',
                                    { style: g ? b : h, className: Du },
                                    a().createElement(au, { size: s }),
                                ),
                            );
                        },
                    ),
                    hu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                E = (0, n.useState)(!1),
                                _ = E[0],
                                m = E[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (e === lu.Shrink && m(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(su, {
                                    size: u,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? D : F,
                                }),
                                t >= 0 &&
                                    a().createElement(pu, {
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
                    bu = ['onComplete', 'onEndAnimation'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const vu = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, bu);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case uu.Simple:
                                return a().createElement(mu, fu({}, r, { onEndAnimation: l, isComplete: o }));
                            case uu.Growing:
                                return a().createElement(hu, fu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    wu = ['onEndAnimation'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Pu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, wu);
                    const r = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(vu, Su({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const yu = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(ou, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? a().createElement(Pu, c)
                                : a().createElement(vu, xu({ key: `${r}-${u}` }, c));
                        },
                    ),
                    Ru = (e) => ({
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
                    Tu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Mu = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Tu(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Nu = {
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
                    Iu = {
                        freezed: !1,
                        withStack: !1,
                        type: uu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ku = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Nu,
                            size: t = eu.Default,
                            animationSettings: r = Iu,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: d,
                            onChangeAnimationState: E,
                            onEndAnimation: _,
                            onComplete: m,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Tu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: Mu(n, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return a().createElement(
                                'div',
                                { className: C()(Je.base, Je[`base__${t}`]), style: Ru(u) },
                                !o && a().createElement(tu, { size: t, classMix: i }),
                                a().createElement(yu, {
                                    size: t,
                                    lineRef: d,
                                    disabled: s,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: _,
                                    onChangeAnimationState: E,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Lu = {
                        base: 'IntermediateQuest_base_5b',
                        base__last: 'IntermediateQuest_base__last_12',
                        questNumber: 'IntermediateQuest_questNumber_29',
                        base__currentCompleted: 'IntermediateQuest_base__currentCompleted_82',
                        base__allCompleted: 'IntermediateQuest_base__allCompleted_c9',
                        serif: 'IntermediateQuest_serif_73',
                        serif__top: 'IntermediateQuest_serif__top_88',
                        serif__bottom: 'IntermediateQuest_serif__bottom_1e',
                        rewards: 'IntermediateQuest_rewards_38',
                    };
                let Ou;
                !(function (e) {
                    ((e.Regular = 'regular'),
                        (e.CurrentCompleted = 'currentCompleted'),
                        (e.AllCompleted = 'allCompleted'));
                })(Ou || (Ou = {}));
                const Hu = ({ children: e, questNumber: u, questsCount: t, state: n, zIndex: r }) => {
                        const s = { left: `${(100 * u) / t}%`, zIndex: r };
                        return a().createElement(
                            'div',
                            { className: C()(Lu.base, Lu[`base__${n}`], u === t && Lu.base__last), style: s },
                            a().createElement('div', { className: Lu.questNumber }, u),
                            a().createElement('div', { className: C()(Lu.serif, Lu.serif__top) }),
                            a().createElement('div', { className: C()(Lu.serif, Lu.serif__bottom) }),
                            a().createElement('div', { className: Lu.rewards }, e),
                        );
                    },
                    Uu = [
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
                function Gu(e) {
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
                const Wu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: H.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    $u = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Uu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [g],
                            ),
                            f = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Wu(t, m, { isMouseEvent: !0, on: !0, arguments: Gu(a) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, m, a, b, B]),
                            v = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Wu(t, m, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, m, b, C]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && v(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    Qu = ['children'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const qu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Qu);
                        return a().createElement(
                            $u,
                            zu(
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
                    ju = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const Yu = R.views.common.tooltip_window.simple_tooltip_content,
                    Xu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ju);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, s, i]);
                        return a().createElement(
                            $u,
                            Vu(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Yu.SimpleTooltipHtmlContent('resId') : Yu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Zu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Xu, u, n);
                        const r = u.contentId,
                            s = u.args,
                            o = null == s ? void 0 : s.contentId;
                        return r || o
                            ? a().createElement($u, Ku({}, u, { contentId: r || o }), n)
                            : a().createElement(qu, u, n);
                    },
                    Ju = {
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
                    et = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = Y.Big,
                        special: r,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case K.BATTLE_BOOSTER:
                                    case K.BATTLE_BOOSTER_REPLACE:
                                        return Z.BATTLE_BOOSTER;
                                }
                            })(r),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case K.BATTLE_BOOSTER:
                                        return J.BATTLE_BOOSTER;
                                    case K.BATTLE_BOOSTER_REPLACE:
                                        return J.BATTLE_BOOSTER_REPLACE;
                                    case K.BUILT_IN_EQUIPMENT:
                                        return J.BUILT_IN_EQUIPMENT;
                                    case K.EQUIPMENT_PLUS:
                                        return J.EQUIPMENT_PLUS;
                                    case K.EQUIPMENT_TROPHY_BASIC:
                                        return J.EQUIPMENT_TROPHY_BASIC;
                                    case K.EQUIPMENT_TROPHY_UPGRADED:
                                        return J.EQUIPMENT_TROPHY_UPGRADED;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return J.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return J.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return J.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case K.PROGRESSION_STYLE_UPGRADED_1:
                                        return J.PROGRESSION_STYLE_UPGRADED_1;
                                    case K.PROGRESSION_STYLE_UPGRADED_2:
                                        return J.PROGRESSION_STYLE_UPGRADED_2;
                                    case K.PROGRESSION_STYLE_UPGRADED_3:
                                        return J.PROGRESSION_STYLE_UPGRADED_3;
                                    case K.PROGRESSION_STYLE_UPGRADED_4:
                                        return J.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case X.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case X.CURRENCY:
                                    case X.NUMBER:
                                        return a().createElement(q, { format: 'integral', value: Number(e) });
                                    case X.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return a().createElement(
                            'div',
                            { className: C()(Ju.base, Ju[`base__${n}`], l), style: i },
                            a().createElement(
                                Zu,
                                { tooltipArgs: d, className: Ju.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: C()(Ju.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            a().createElement('div', {
                                                className: C()(Ju.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            a().createElement('div', {
                                                className: C()(Ju.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            a().createElement('div', {
                                                className: C()(Ju.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Ju.info,
                                                    Ju[`info__${e}`],
                                                    o === X.MULTI && Ju.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    Zu,
                                    { tooltipArgs: E },
                                    a().createElement('div', {
                                        className: C()(Ju.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var ut = t(30);
                const tt = 'TokenReward_base_db',
                    nt = 'TokenReward_lightContainer_44',
                    at = 'TokenReward_light_14',
                    rt = 'TokenReward_button_66',
                    st = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    ot = (0, W.Pi)(({ isReceived: e, value: u, level: t }) => {
                        const n = we().controls,
                            r = (0, ut.useSpring)({ opacity: e ? 1 : 0, config: { duration: 300, easing: st } }),
                            s = (0, ut.useTransition)(e, {
                                initial: { opacity: 1, transform: 'translateY(12rem)' },
                                from: { opacity: 0, transform: 'translateY(22rem)' },
                                enter: { opacity: 1, transform: 'translateY(12rem)' },
                                config: { duration: 300, easing: st },
                            }),
                            o = `url(R.images.gui.maps.icons.battleMatters.common.tokens.c_48x48.level_${t})`,
                            i = { rewardToken: u };
                        return a().createElement(
                            $u,
                            {
                                contentId: R.views.lobby.battle_matters.tooltips.BattleMattersTokenTooltipView('resId'),
                                args: i,
                            },
                            a().createElement(
                                'div',
                                { className: tt, style: { backgroundImage: o } },
                                a().createElement(
                                    ut.animated.div,
                                    { style: r, className: nt },
                                    a().createElement('div', { className: at }),
                                ),
                                s(
                                    (e, t) =>
                                        t &&
                                        a().createElement(
                                            ut.animated.div,
                                            { style: e },
                                            a().createElement(
                                                We,
                                                {
                                                    mixClass: rt,
                                                    size: Ue.small,
                                                    type: He.main,
                                                    onClick: () => n.exchangeToken(u),
                                                },
                                                R.strings.battle_matters.mainScreen.exchangeToken(),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    }),
                    it = 'VehicleReward_base_98',
                    lt = 'VehicleReward_mark_ad',
                    ct = ({ icon: e, tooltipArgs: u }) => {
                        return a().createElement(
                            Zu,
                            { tooltipArgs: u },
                            a().createElement(
                                'div',
                                {
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.icons.vehicle.${((t = e), t.replace(/-/g, '_'))}')`,
                                    },
                                    className: it,
                                },
                                a().createElement('div', { className: lt }),
                            ),
                        );
                        var t;
                    },
                    dt = (e) => le({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    Et = (0, W.Pi)(({ reward: e, isReceived: u }) => {
                        switch (e.name) {
                            case 'token':
                                return a().createElement(ot, { isReceived: u, value: e.value, level: Number(e.label) });
                            case 'vehicle':
                                return a().createElement(ct, { icon: e.icon, tooltipArgs: dt(e) });
                            default:
                                return a().createElement(et, {
                                    name: e.name,
                                    image: ie(e),
                                    size: Y.Small,
                                    value: e.value,
                                    valueType: re(e.name),
                                    tooltipArgs: dt(e),
                                });
                        }
                    }),
                    _t = (0, W.Pi)(({ isReceived: e, state: u, questsCount: t, questNumber: n, rewards: r }) =>
                        a().createElement(
                            Hu,
                            {
                                questNumber: n,
                                questsCount: t,
                                state: u,
                                zIndex: ((e) => (-1 !== e.findIndex((e) => 'token' === e.name) ? 2 : 1))(r),
                            },
                            r
                                .filter((e) => e.name)
                                .map((u, t) => a().createElement(Et, { key: t, reward: u, isReceived: e })),
                        ),
                    ),
                    mt = (e, u, t) => (u === t ? Ou.AllCompleted : u >= e ? Ou.CurrentCompleted : Ou.Regular),
                    At = Object.assign({}, Iu, {
                        line: { delay: 0, duration: 800 },
                        delta: { delay: 0, duration: 800 },
                    }),
                    Ft = (0, W.Pi)(({ progressToShow: e }) => {
                        const u = we().model,
                            t = u.progression.countCompleted.get(),
                            r = t - 1,
                            s = u.progression.totalQuests.get(),
                            o = u.computes.getIntermediateQuests(),
                            i = u.computes.getIsQuestSwitchAnimationNeeded(),
                            l = u.isRewardsViewOpen.get(),
                            c = (0, n.useState)(i ? r : void 0),
                            d = c[0],
                            E = c[1],
                            _ = (0, n.useState)(i ? r : t),
                            m = _[0],
                            A = _[1];
                        ((0, n.useEffect)(() => {
                            A(i ? r : t);
                        }, [i, r, t]),
                            (0, n.useEffect)(() => {
                                if (void 0 !== d && d < e) return iu(() => ke(R.sounds.bp_progress_bar_start()), 500);
                            }, [d, e]),
                            (0, n.useEffect)(() => {
                                E(i && !l && m < t ? r : void 0);
                            }, [l, i, r, m, t]));
                        const F = (0, n.useCallback)(() => {
                            A(e);
                        }, [e]);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(ku, {
                                value: e,
                                deltaFrom: d,
                                maxValue: s,
                                onEndAnimation: F,
                                animationSettings: At,
                            }),
                            o.map((e) =>
                                a().createElement(_t, {
                                    key: e.questIdx,
                                    questNumber: e.questIdx,
                                    questsCount: s,
                                    rewards: e.rewards,
                                    state: mt(e.questIdx, m, s),
                                    isReceived: e.questIdx <= m,
                                }),
                            ),
                            a().createElement(Hu, { questNumber: s, questsCount: s, state: mt(s, m, s) }),
                        );
                    }),
                    Dt = 'Footer_base_2b',
                    gt = 'Footer_content_75',
                    Bt = 'Footer_progress_84',
                    Ct = 'Footer_title_51',
                    pt = 'Footer_completedQuests_1f',
                    ht = 'Footer_completedQuests__allCompleted_b3',
                    bt = 'Footer_subTitle_e9',
                    ft = 'Footer_progression_00',
                    vt = R.strings.battle_matters.mainScreen,
                    wt = (0, W.Pi)(() => {
                        const e = we().model,
                            u = e.progression.countCompleted.get(),
                            t = u - 1,
                            r = e.progression.totalQuests.get(),
                            s = e.computes.getIsQuestSwitchAnimationNeeded(),
                            o = e.questSwitchAnimationPhase.get(),
                            i = (0, n.useState)(s ? t : u),
                            l = i[0],
                            c = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                o === he.ToDoneFinished && c(u);
                            }, [u, o]),
                            (0, n.useEffect)(() => {
                                c(s ? t : u);
                            }, [t, u, s]),
                            a().createElement(
                                'div',
                                { className: Dt },
                                a().createElement(
                                    'div',
                                    { className: gt },
                                    a().createElement(
                                        'div',
                                        { className: Bt },
                                        a().createElement(
                                            'div',
                                            { className: Ct },
                                            a().createElement(Ie, {
                                                text: vt.progress(),
                                                binding: {
                                                    completed: a().createElement(
                                                        'span',
                                                        { className: C()(pt, l === r && ht) },
                                                        l,
                                                    ),
                                                    total: r,
                                                },
                                            }),
                                        ),
                                        a().createElement('div', { className: bt }, vt.target()),
                                        a().createElement(
                                            'div',
                                            { className: ft },
                                            a().createElement(Ft, { progressToShow: l }),
                                        ),
                                    ),
                                    a().createElement(Ze, null),
                                ),
                            )
                        );
                    }),
                    St = {
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
                    Pt = [
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
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                class yt extends a().PureComponent {
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
                            n = e.goto,
                            r = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, Pt)),
                            _ = C()(St.base, St[`base__${s}`], St[`base__${r}`], null == o ? void 0 : o.base),
                            m = C()(St.icon, St[`icon__${s}`], St[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = C()(St.glow, null == o ? void 0 : o.glow),
                            F = C()(St.caption, St[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = C()(St.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            xt(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && a().createElement('div', { className: St.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                yt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Rt = 'BootcampButton_base_9e',
                    Tt = 'BootcampButton_borderGradient_fd',
                    Mt = 'BootcampButton_borderGradient__top_40',
                    Nt = 'BootcampButton_borderGradient__bottom_97',
                    It = 'BootcampButton_splash_88',
                    kt = 'BootcampButton_animatedShine_6e',
                    Lt = 'BootcampButton_clip_ea',
                    Ot = 'BootcampButton_back_03',
                    Ht = 'BootcampButton_back__hover_44',
                    Ut = 'BootcampButton_content_ab',
                    Gt = 'BootcampButton_icon_ad',
                    Wt = 'BootcampButton_text_3a',
                    $t = 'BootcampButton_buttonGlow_7c',
                    Qt = 'BootcampButton_buttonGlow__hover_e1',
                    zt = R.strings.battle_matters.mainScreen.bootcampButtonTooltip,
                    qt = ({ onClick: e }) =>
                        a().createElement(
                            Xu,
                            { header: zt.header(), body: zt.body() },
                            a().createElement(
                                'div',
                                {
                                    className: Rt,
                                    onClick: () => {
                                        (Le.playClick(), e());
                                    },
                                    onMouseEnter: () => {
                                        Le.playHighlight();
                                    },
                                },
                                a().createElement('div', { className: Ot }),
                                a().createElement('div', { className: C()(Ot, Ht) }),
                                a().createElement(
                                    'div',
                                    { className: Lt },
                                    a().createElement('div', { className: It }),
                                    a().createElement('div', { className: kt }),
                                ),
                                a().createElement('div', { className: $t }),
                                a().createElement('div', { className: C()($t, Qt) }),
                                a().createElement(
                                    'div',
                                    { className: Ut },
                                    a().createElement('span', { className: Gt }),
                                    a().createElement(
                                        'span',
                                        { className: Wt },
                                        R.strings.battle_matters.mainScreen.bootcampButton(),
                                    ),
                                ),
                                a().createElement('div', { className: C()(Tt, Mt) }),
                                a().createElement('div', { className: C()(Tt, Nt) }),
                            ),
                        ),
                    jt = 'Header_base_5d',
                    Vt = 'Header_infoBtn_1e',
                    Yt = 'Header_infoBtnIcon_51',
                    Xt = 'Header_infoBtnGlow_54',
                    Kt = 'Header_bootcampBtn_bb',
                    Zt = 'Header_title_d2',
                    Jt = R.strings.battle_matters.mainScreen,
                    en = (0, W.Pi)(() => {
                        const e = we(),
                            u = e.model,
                            t = e.controls,
                            n = w().mediaSize;
                        return a().createElement(
                            'div',
                            { className: jt },
                            a().createElement(yt, {
                                caption: n === b.ExtraSmall ? Jt.infoButtonSmall() : Jt.infoButton(),
                                type: 'info',
                                classNames: { base: Vt, icon: Yt, glow: Xt },
                                onClick: t.showManual,
                            }),
                            a().createElement('span', { className: Zt }, Jt.title()),
                            u.bootcampInfo.bootcampIsAvailable.get() &&
                                !u.bootcampInfo.isBootcampCompleted.get() &&
                                a().createElement(
                                    'div',
                                    { className: Kt },
                                    a().createElement(qt, { onClick: t.openBootcamp }),
                                ),
                        );
                    }),
                    un = (e) => {
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
                    tn = [];
                function nn(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), tn)
                    );
                }
                function an(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return rn(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return rn(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rn(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function sn(e, u, t) {
                    const a = (0, n.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    a && clearTimeout(a);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), t.apply(l, i));
                                    }
                                    r ||
                                        (n && !a && d(),
                                        o(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
                let on;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(on || (on = {}));
                const ln = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    cn = (({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return Tu(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? ln : c,
                                E = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                m = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, a = an(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                                })(),
                                A = sn(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, ut.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), m.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                g = F[1],
                                B = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = D.scrollPosition.get(),
                                            r = (null != (n = D.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            g.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [g, d.animationConfig, D.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            a = B(u, e, n);
                                        C(a);
                                    },
                                    [C, B, d.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(a(e)),
                                            E.current && m.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        un(() => {
                                            const e = E.current;
                                            e &&
                                                (C(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                f = nn(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const v = (0, n.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: _,
                                    scrollPosition: g,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    handleIsThumbDragging: v,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, C, p, v, m.off, m.on, f, h, g, d.step.clampedArrowStepTimeout],
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
                        getDirection: (e) => (e.deltaY > 1 ? on.Next : on.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    dn = 'HorizontalBar_base_49',
                    En = 'HorizontalBar_base__nonActive_82',
                    _n = 'HorizontalBar_leftButton_5f',
                    mn = 'HorizontalBar_rightButton_03',
                    An = 'HorizontalBar_track_0d',
                    Fn = 'HorizontalBar_thumb_fd',
                    Dn = 'HorizontalBar_rail_32',
                    gn = 'disable',
                    Bn = { pending: !1, offset: 0 },
                    Cn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    pn = () => {},
                    hn = (e, u) => Math.max(20, e.offsetWidth * u),
                    bn = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Cn, onDrag: r = pn }) => {
                        const s = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            E = (0, n.useState)(Bn),
                            _ = E[0],
                            m = E[1],
                            A = (0, n.useCallback)(
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
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    d = Tu(0, 1, r / (a - n)),
                                    E = (u.offsetWidth - hn(u, s)) * d;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(gn),
                                                    void i.current.classList.remove(gn)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(gn),
                                                    void i.current.classList.add(gn)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(gn), i.current.classList.remove(gn));
                                        }
                                    })(E));
                            },
                            D = nn(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const r = Math.min(1, n / a);
                                    ((u.style.width = `${hn(t, r)}px`),
                                        (u.style.display = 'flex'),
                                        s.current &&
                                            (1 === r ? s.current.classList.add(En) : s.current.classList.remove(En)));
                                })(),
                                    F());
                            });
                        ((0, n.useEffect)(() => un(D)),
                            (0, n.useEffect)(
                                () =>
                                    un(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = pn;
                                        const n = () => {
                                            (t(), (t = un(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!n || !a || !s) return;
                                        const o = u.screenX - _.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(Bn));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, _.offset, _.pending, r, A]));
                        const g = (function (e, u, t = []) {
                                const a = (0, n.useRef)(0),
                                    r = (0, n.useCallback)(() => window.clearInterval(a.current), t || []);
                                (0, n.useEffect)(() => r, [r]);
                                const s = (null != t ? t : []).concat([u]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                                    }, s),
                                    r,
                                ];
                            })((u) => e.applyStepTo(u), d, [e]),
                            B = g[0],
                            p = g[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(gn) || ke('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: C()(dn, u.base), ref: s, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: C()(_n, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (ke('play'), B(on.Next));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: C()(An, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((ke('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? on.Prev : on.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                a().createElement('div', { ref: c, className: C()(Fn, u.thumb) }),
                                a().createElement('div', { className: C()(Dn, u.rail) }),
                            ),
                            a().createElement('div', {
                                className: C()(mn, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (ke('play'), B(on.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    fn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    vn = ({ api: e, className: u, classNames: t, children: r, style: s }) => (
                        (0, n.useEffect)(() => un(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: C()(fn.base, u), style: s },
                            a().createElement(
                                'div',
                                {
                                    className: C()(fn.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: C()(fn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((vn.Bar = bn),
                    (vn.Default = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: s,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(fn.base, e.base) });
                            }, [r]),
                            E = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: C()(fn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: C()(fn.defaultScrollArea, s) },
                                a().createElement(vn, { className: i, api: E, classNames: o }, e),
                            ),
                            a().createElement(bn, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    }),
                    (vn.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => un(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: C()(fn.base, u) },
                            a().createElement(
                                'div',
                                { className: C()(fn.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                a().createElement(
                                    'div',
                                    { className: C()(fn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const wn = { type: 'idle' };
                const Sn = (e, u, t) => {
                    const a = t.contentRef,
                        r = t.clampPosition,
                        s = t.getWrapperSize,
                        o = (0, n.useState)(),
                        i = o[0],
                        l = o[1],
                        c = w(),
                        d = c.remScreenWidth,
                        E = c.remScreenHeight;
                    return (
                        (0, n.useEffect)(
                            () =>
                                un(() => {
                                    const t = u.current,
                                        n = a.current,
                                        o = s();
                                    if (void 0 === e || !t || !n || !o) return l(void 0);
                                    const i = t[e],
                                        c = i.offsetWidth,
                                        d = i.offsetLeft,
                                        E = r(n, d - o / 2 + c / 2);
                                    l(E);
                                }),
                            [r, a, e, u, d, E, s],
                        ),
                        (0, n.useEffect)(() => {
                            l(null);
                        }, [d, E]),
                        i
                    );
                };
                let Pn;
                !(function (e) {
                    ((e[(e.LeftHidden = 0)] = 'LeftHidden'),
                        (e[(e.Visible = 1)] = 'Visible'),
                        (e[(e.RightHidden = 2)] = 'RightHidden'));
                })(Pn || (Pn = {}));
                let xn;
                !(function (e) {
                    ((e[(e.Start = 0)] = 'Start'), (e[(e.Between = 1)] = 'Between'), (e[(e.End = 2)] = 'End'));
                })(xn || (xn = {}));
                const yn = { base: 'Arrow_base_f4', bg: 'Arrow_bg_b9', base__right: 'Arrow_base__right_86' };
                let Rn;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(Rn || (Rn = {}));
                const Tn = R.strings.battle_matters.mainScreen.list,
                    Mn = ({ isVisible: e, direction: u, onClick: t }) => {
                        const n = () => {
                                Le.playHighlight();
                            },
                            r = () => {
                                (Le.playClick(), t());
                            };
                        return (0, ut.useTransition)(e, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 300 },
                        })(
                            (e, t) =>
                                t &&
                                a().createElement(
                                    ut.animated.div,
                                    { style: e },
                                    a().createElement(
                                        Xu,
                                        { body: Tn.arrow() },
                                        a().createElement(
                                            'div',
                                            { className: C()(yn.base, yn[`base__${u}`]), onMouseEnter: n, onClick: r },
                                            a().createElement('div', { className: yn.bg }),
                                        ),
                                    ),
                                ),
                        );
                    },
                    Nn = 'Action_base_e7',
                    In = 'Action_glow_d8',
                    kn = 'Action_glow__wide_14',
                    Ln = 'Action_glow__normal_a6',
                    On = 'Action_base__withGlow_02',
                    Hn = 'Action_button_1d',
                    Un = 'Action_buttonIcon_31',
                    Gn = R.strings.battle_matters.mainScreen.quest,
                    Wn = (0, n.memo)(
                        ({
                            classNames: e,
                            hasGlow: u,
                            onClick: t,
                            onMouseDown: n,
                            onMouseMove: r,
                            onMouseUp: s,
                            onMouseLeave: o,
                        }) => {
                            const i = w().mediaSize >= b.Medium ? Ue.medium : Ue.small;
                            return a().createElement(
                                'div',
                                { className: C()(Nn, u && On, null == e ? void 0 : e.base) },
                                a().createElement('div', { className: C()(In, kn) }),
                                a().createElement('div', { className: C()(In, Ln) }),
                                a().createElement(
                                    We,
                                    {
                                        type: He.ghost,
                                        mixClass: C()(Hn, null == e ? void 0 : e.button),
                                        size: i,
                                        onClick: t,
                                        onMouseMove: r,
                                        onMouseUp: s,
                                        onMouseLeave: o,
                                        onMouseDown: n,
                                    },
                                    a().createElement('div', { className: Un }),
                                    Gn.action(),
                                ),
                            );
                        },
                    ),
                    $n = {
                        base: 'Progress_base_2e',
                        value: 'Progress_value_f1',
                        base__inProgress: 'Progress_base__inProgress_eb',
                        base__done: 'Progress_base__done_29',
                        current: 'Progress_current_ad',
                        timingFunction: 'Progress_timingFunction_7e',
                    },
                    Qn = R.strings.battle_matters.mainScreen.quest,
                    zn = Object.assign({}, Iu, {
                        line: { delay: 0, duration: 2e3 },
                        delta: { className: $n.timingFunction, delay: 0, duration: 2e3 },
                    }),
                    qn = (0, W.Pi)(({ className: e, state: u, maxProgress: t }) => {
                        const r = (0, n.useContext)(ca),
                            s = r.progressToShow,
                            o = r.lastShowedProgress,
                            i = r.setLastShowedProgress,
                            l = r.setIsProgressComplete;
                        (0, n.useEffect)(() => {
                            s > o && ke(R.sounds.dq_screen_progress_bar());
                        }, [o, s]);
                        const c = (0, n.useCallback)(() => {
                                i(s);
                            }, [s, i]),
                            d = (0, n.useCallback)(() => {
                                l(!0);
                            }, [l]);
                        return (
                            (0, n.useEffect)(
                                () => () => {
                                    i(s);
                                },
                                [s, i],
                            ),
                            a().createElement(
                                'div',
                                { className: C()($n.base, $n[`base__${u}`], e) },
                                a().createElement(Ie, {
                                    classMix: $n.value,
                                    text: Qn.progress(),
                                    binding: {
                                        current: a().createElement(
                                            'span',
                                            { className: $n.current },
                                            a().createElement(q, { value: o }),
                                        ),
                                        max: a().createElement(q, { value: t }),
                                    },
                                }),
                                a().createElement(ku, {
                                    size: eu.Small,
                                    value: s,
                                    deltaFrom: o,
                                    maxValue: t,
                                    onEndAnimation: c,
                                    onComplete: d,
                                    animationSettings: zn,
                                }),
                            )
                        );
                    }),
                    jn = {
                        base: 'Content_base_57',
                        condition: 'Content_condition_c8',
                        base__inProgress: 'Content_base__inProgress_8c',
                        base__done: 'Content_base__done_a4',
                        conditionText: 'Content_conditionText_8d',
                        progress: 'Content_progress_da',
                        spacer: 'Content_spacer_02',
                        action: 'Content_action_da',
                        base__dragging: 'Content_base__dragging_0c',
                        actionButton: 'Content_actionButton_89',
                        base__buttonClicked: 'Content_base__buttonClicked_47',
                    },
                    Vn = { base: jn.action, button: jn.actionButton },
                    Yn = (0, W.Pi)(
                        ({
                            index: e,
                            questState: u,
                            isDragging: t,
                            isButtonClicked: n,
                            onMouseDown: r,
                            onMouseMove: s,
                            onMouseUp: o,
                            onMouseLeave: i,
                        }) => {
                            const l = we(),
                                c = l.model,
                                d = l.controls,
                                E = nn(() => {
                                    d.showAnimForQuest(D);
                                }),
                                _ = c.computes.getQuest(e);
                            if (!_) return null;
                            const m = _.condition,
                                A = _.maxProgress,
                                F = _.hasAnimation,
                                D = _.number;
                            return a().createElement(
                                'div',
                                {
                                    className: C()(
                                        jn.base,
                                        jn[`base__${u}`],
                                        t && jn.base__dragging,
                                        n && jn.base__buttonClicked,
                                    ),
                                },
                                a().createElement(
                                    'div',
                                    { className: jn.condition },
                                    a().createElement(Ie, { classMix: jn.conditionText, text: m }),
                                ),
                                A > 0 && a().createElement(qn, { className: jn.progress, state: u, maxProgress: A }),
                                a().createElement('div', { className: jn.spacer }),
                                F &&
                                    a().createElement(Wn, {
                                        hasGlow: u === de.InProgress,
                                        classNames: Vn,
                                        onClick: E,
                                        onMouseDown: r,
                                        onMouseMove: s,
                                        onMouseUp: o,
                                        onMouseLeave: i,
                                    }),
                            );
                        },
                    ),
                    Xn = {
                        base: 'Header_base_2d',
                        card: 'Header_card_8a',
                        base__done: 'Header_base__done_14',
                        base__inProgress: 'Header_base__inProgress_fb',
                        base__unavailable: 'Header_base__unavailable_74',
                        glow: 'Header_glow_5d',
                        glow__visible: 'Header_glow__visible_56',
                        glow__unavailable: 'Header_glow__unavailable_32',
                        glow__inProgress: 'Header_glow__inProgress_c2',
                        glow__done: 'Header_glow__done_7f',
                        bg: 'Header_bg_39',
                        header: 'Header_header_32',
                        body: 'Header_body_14',
                        content: 'Header_content_d3',
                        content__toInProgress: 'Header_content__toInProgress_03',
                        fadeIn: 'Header_fadeIn_7b',
                        stateIcon: 'Header_stateIcon_d1',
                        unavailable: 'Header_unavailable_d0',
                        unavailableTitle: 'Header_unavailableTitle_48',
                        unavailableDescription: 'Header_unavailableDescription_22',
                        rewards: 'Header_rewards_08',
                        base__dragging: 'Header_base__dragging_ae',
                        arrow: 'Header_arrow_98',
                        arrowIcon: 'Header_arrowIcon_a4',
                        arrowIcon__default: 'Header_arrowIcon__default_44',
                        arrowIcon__done: 'Header_arrowIcon__done_48',
                        headerNumber: 'Header_headerNumber_0e',
                        headerNumberGlow: 'Header_headerNumberGlow_5d',
                        headerNumberText: 'Header_headerNumberText_93',
                        headerDivider: 'Header_headerDivider_b4',
                        headerInfo: 'Header_headerInfo_d7',
                        headerTitle: 'Header_headerTitle_c3',
                        headerTitleText: 'Header_headerTitleText_22',
                        headerButton: 'Header_headerButton_eb',
                        headerButton__hidden: 'Header_headerButton__hidden_32',
                        base__buttonClicked: 'Header_base__buttonClicked_53',
                        headerButtonIcon: 'Header_headerButtonIcon_52',
                        headerDescription: 'Header_headerDescription_bf',
                        fadeOut: 'Header_fadeOut_30',
                        fadeInWithScale: 'Header_fadeInWithScale_9f',
                        slideUp: 'Header_slideUp_8c',
                        scale: 'Header_scale_ad',
                        fadeInUp: 'Header_fadeInUp_0b',
                        rotate: 'Header_rotate_00',
                        translatedRotating: 'Header_translatedRotating_02',
                    },
                    Kn = (0, W.Pi)(
                        ({
                            index: e,
                            questState: u,
                            isDragging: t,
                            isButtonClicked: n,
                            onMouseDown: r,
                            onMouseMove: s,
                            onMouseUp: o,
                            onMouseLeave: i,
                        }) => {
                            const l = we(),
                                c = l.model,
                                d = l.controls,
                                E = nn(() => {
                                    d.showManualForQuest(m);
                                }),
                                _ = c.computes.getQuest(e);
                            if (!_) return null;
                            const m = _.number,
                                A = _.description,
                                F = _.title,
                                D = _.hasManualPage;
                            return a().createElement(
                                'div',
                                {
                                    className: C()(
                                        Xn.base,
                                        Xn[`base__${u}`],
                                        t && Xn.base__dragging,
                                        n && Xn.base__buttonClicked,
                                    ),
                                },
                                a().createElement(
                                    'div',
                                    { className: Xn.headerNumber },
                                    a().createElement('div', { className: Xn.headerNumberGlow }),
                                    a().createElement('div', { className: Xn.headerNumberText }, m),
                                ),
                                a().createElement('div', { className: Xn.headerDivider }),
                                a().createElement(
                                    'div',
                                    { className: Xn.headerInfo },
                                    a().createElement(
                                        'div',
                                        { className: Xn.headerTitle },
                                        a().createElement('div', { className: Xn.headerTitleText }, F),
                                        a().createElement(
                                            We,
                                            {
                                                type: He.ghost,
                                                mixClass: C()(Xn.headerButton, !D && Xn.headerButton__hidden),
                                                onClick: E,
                                                onMouseMove: s,
                                                onMouseUp: o,
                                                onMouseLeave: i,
                                                onMouseDown: r,
                                            },
                                            a().createElement('div', { className: Xn.headerButtonIcon }),
                                        ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Xn.headerDescription },
                                        a().createElement(Ie, { text: A }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Zn = {
                        base: 'Quest_base_f9',
                        card: 'Quest_card_f9',
                        base__done: 'Quest_base__done_84',
                        base__inProgress: 'Quest_base__inProgress_ae',
                        base__unavailable: 'Quest_base__unavailable_26',
                        glow: 'Quest_glow_2b',
                        glow__visible: 'Quest_glow__visible_01',
                        glow__unavailable: 'Quest_glow__unavailable_12',
                        glow__inProgress: 'Quest_glow__inProgress_29',
                        glow__done: 'Quest_glow__done_47',
                        bg: 'Quest_bg_9c',
                        header: 'Quest_header_75',
                        body: 'Quest_body_38',
                        content: 'Quest_content_14',
                        content__toInProgress: 'Quest_content__toInProgress_08',
                        fadeIn: 'Quest_fadeIn_78',
                        stateIcon: 'Quest_stateIcon_68',
                        unavailable: 'Quest_unavailable_a7',
                        unavailableTitle: 'Quest_unavailableTitle_4a',
                        unavailableDescription: 'Quest_unavailableDescription_46',
                        rewards: 'Quest_rewards_21',
                        base__dragging: 'Quest_base__dragging_bd',
                        arrow: 'Quest_arrow_10',
                        arrowIcon: 'Quest_arrowIcon_57',
                        arrowIcon__default: 'Quest_arrowIcon__default_8f',
                        arrowIcon__done: 'Quest_arrowIcon__done_98',
                        fadeOut: 'Quest_fadeOut_a2',
                        fadeInWithScale: 'Quest_fadeInWithScale_18',
                        slideUp: 'Quest_slideUp_59',
                        scale: 'Quest_scale_1b',
                        fadeInUp: 'Quest_fadeInUp_93',
                        rotate: 'Quest_rotate_8e',
                        translatedRotating: 'Quest_translatedRotating_ea',
                    },
                    Jn = 'Rewards_base_26',
                    ea = 'Rewards_base__vertical_9f',
                    ua = 'Rewards_reward_7b',
                    ta = 'Rewards_reward__vertical_c6';
                function na() {
                    return (
                        (na =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        na.apply(this, arguments)
                    );
                }
                const aa = a().memo(
                        ({
                            data: e,
                            size: u = Y.Big,
                            isVertical: t = !1,
                            count: r,
                            classMix: s,
                            rewardItemClassMix: o,
                            boxRewardTooltip: i,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        r && r < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : '',
                                    [r, e.length, u],
                                ),
                                d =
                                    l ||
                                    ((E = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (_ = { count: e.length - (r || 0) }),
                                    E.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(_[e.slice(u, -u)]);
                                    }));
                            var E, _;
                            const m = C()(Jn, t && ea, s),
                                A = C()(ua, t && ta, o);
                            return a().createElement(
                                'div',
                                { className: m },
                                c
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          e
                                              .slice(0, r)
                                              .map((e, t) =>
                                                  a().createElement(
                                                      'div',
                                                      { key: t, className: A },
                                                      a().createElement(et, na({ size: u }, e)),
                                                  ),
                                              ),
                                          a().createElement(
                                              'div',
                                              { className: A },
                                              a().createElement(et, {
                                                  name: 'more',
                                                  image: c,
                                                  size: u,
                                                  value: d,
                                                  tooltipArgs: i,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) =>
                                          a().createElement(
                                              'div',
                                              { key: t, className: A },
                                              a().createElement(et, na({ size: u }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    ra = 'Rewards_reward_9e';
                function sa() {
                    return (
                        (sa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        sa.apply(this, arguments)
                    );
                }
                const oa = (0, W.Pi)(({ className: e, index: u }) => {
                        const t = we().model,
                            n = w().mediaSize >= b.Medium ? Y.Big : Y.Small,
                            r = t.computes.getQuestRewardsProps(u, n);
                        return a().createElement(aa, sa({}, r, { classMix: e, rewardItemClassMix: ra, size: n }));
                    }),
                    ia = R.strings.battle_matters.mainScreen.quest,
                    la = (e) => {
                        switch (e) {
                            case de.Done:
                                return de.InProgress;
                            case de.InProgress:
                            default:
                                return de.Unavailable;
                        }
                    },
                    ca = (0, n.createContext)({}),
                    da = (0, W.Pi)(
                        ({
                            index: e,
                            isDragging: u,
                            isVisible: t,
                            state: r,
                            maxProgress: s,
                            lastSeenProgress: o,
                            currentProgress: i,
                            questsRef: l,
                        }) => {
                            const c = we().model,
                                d = c.questSwitchAnimationPhase.get(),
                                E = c.computes.getLastDoneQuestIndex() === e,
                                _ = c.computes.getFirstInProgressQuestIndex() === e,
                                m = e === c.computes.getQuestsLength() - 1,
                                A = c.computes.getIsQuestSwitchAnimationNeeded() && (E || _),
                                F = (0, n.useState)(E || _ ? o : i),
                                D = F[0],
                                g = F[1],
                                B = (0, n.useState)(D),
                                p = B[0],
                                h = B[1],
                                b = (0, n.useState)(A ? la(r) : r),
                                f = b[0],
                                v = b[1],
                                w = (0, n.useState)(f !== de.Unavailable),
                                S = w[0],
                                P = w[1],
                                x = (0, n.useState)(D === s),
                                y = x[0],
                                T = x[1],
                                M = E && d === he.ToDone,
                                N = _ && d === he.ToInProgress;
                            ((0, n.useEffect)(() => {
                                A ? (v(la(r)), P(la(r) !== de.Unavailable)) : (v(r), P(r !== de.Unavailable), h(i));
                            }, [A, r, i]),
                                (0, n.useEffect)(() => {
                                    if (M) {
                                        if (!(s > 0) || y)
                                            return (v(de.Done), iu(() => ke(R.sounds.dq_screen_quest_complete()), 300));
                                        h(i);
                                    }
                                    if (N) return (v(de.InProgress), h(i), iu(() => P(!0), 500));
                                }, [M, N, y, s, i]));
                            const I = (0, n.useState)(!1),
                                k = I[0],
                                L = I[1],
                                O = nn(() => {
                                    L(!0);
                                }),
                                H = nn(() => {
                                    L(!1);
                                }),
                                U = nn(() => {
                                    L(!1);
                                }),
                                G = nn(() => {
                                    L(!1);
                                }),
                                W = (0, n.useMemo)(
                                    () => ({
                                        progressToShow: p,
                                        lastShowedProgress: D,
                                        setLastShowedProgress: g,
                                        setIsProgressComplete: T,
                                    }),
                                    [D, p],
                                );
                            return a().createElement(
                                ca.Provider,
                                { value: W },
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            Zn.base,
                                            Zn[`base__${f}`],
                                            u && Zn.base__dragging,
                                            k && Zn.base__buttonClicked,
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        { className: Zn.card, ref: (u) => (l.current[e] = u) },
                                        t &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                Object.values(de).map((e, u) =>
                                                    a().createElement('div', {
                                                        key: u,
                                                        className: C()(
                                                            Zn.glow,
                                                            Zn[`glow__${e}`],
                                                            f === e && Zn.glow__visible,
                                                        ),
                                                    }),
                                                ),
                                                a().createElement('div', { className: Zn.bg }),
                                                a().createElement(
                                                    'div',
                                                    { className: Zn.header },
                                                    a().createElement(Kn, {
                                                        index: e,
                                                        questState: f,
                                                        isDragging: u,
                                                        isButtonClicked: k,
                                                        onMouseDown: O,
                                                        onMouseMove: H,
                                                        onMouseUp: U,
                                                        onMouseLeave: G,
                                                    }),
                                                ),
                                                a().createElement(
                                                    'div',
                                                    { className: Zn.body },
                                                    S
                                                        ? a().createElement(
                                                              'div',
                                                              {
                                                                  className: C()(
                                                                      Zn.content,
                                                                      N && Zn[`content__${he.ToInProgress}`],
                                                                  ),
                                                              },
                                                              a().createElement(Yn, {
                                                                  index: e,
                                                                  questState: f,
                                                                  isDragging: u,
                                                                  isButtonClicked: k,
                                                                  onMouseDown: O,
                                                                  onMouseMove: H,
                                                                  onMouseUp: U,
                                                                  onMouseLeave: G,
                                                              }),
                                                          )
                                                        : a().createElement(
                                                              'div',
                                                              { className: Zn.unavailable },
                                                              a().createElement(
                                                                  'div',
                                                                  { className: Zn.unavailableTitle },
                                                                  ia.unavailableTitle(),
                                                              ),
                                                              a().createElement(
                                                                  'div',
                                                                  { className: Zn.unavailableDescription },
                                                                  ia.unavailableDescription(),
                                                              ),
                                                          ),
                                                    a().createElement(oa, {
                                                        className: C()(Zn.rewards, u && Zn.rewards__dragging),
                                                        index: e,
                                                    }),
                                                ),
                                                a().createElement('div', { className: Zn.stateIcon }),
                                            ),
                                    ),
                                    !m &&
                                        a().createElement(
                                            'div',
                                            { className: Zn.arrow },
                                            a().createElement('div', {
                                                className: C()(Zn.arrowIcon, Zn.arrowIcon__default),
                                            }),
                                            a().createElement('div', {
                                                className: C()(Zn.arrowIcon, Zn.arrowIcon__done),
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    Ea = 'Quests_base_e7',
                    _a = 'Quests_base__frozen_b7',
                    ma = 'Quests_wrapper_21',
                    Aa = 'Quests_content_a0',
                    Fa = 'Quests_bar_12',
                    Da = 'Quests_barThumb_37',
                    ga = 'Quests_barRail_73',
                    Ba = 'Quests_lip_25',
                    Ca = 'Quests_lip__left_1e',
                    pa = 'Quests_lip__right_63',
                    ha = 'Quests_shadow_1e',
                    ba = 'Quests_shadow__visible_b9',
                    fa = 'Quests_shadow__left_23',
                    va = 'Quests_shadow__right_a6',
                    wa = 'Quests_arrow_c8',
                    Sa = 'Quests_arrow__left_f2',
                    Pa = 'Quests_arrow__right_82';
                function xa() {
                    return (
                        (xa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xa.apply(this, arguments)
                    );
                }
                const ya = (0, W.Pi)(() => {
                        const e = (0, n.useRef)([]),
                            u = cn(),
                            t = we(),
                            r = t.model,
                            o = t.controls,
                            i = r.computes.getQuestsLength(),
                            l = r.computes.getIsQuestSwitchAnimationNeeded(),
                            c = r.computes.getLastDoneQuestIndex(),
                            d = void 0 !== c ? r.computes.getIsProgressionQuest(c) : void 0,
                            E = r.computes.getCurrentQuestIndex(),
                            _ = r.questSwitchAnimationPhase.get(),
                            m = r.isRewardsViewOpen.get(),
                            A = r.lastPlayedToDoneAnimationQuestIndex.get(),
                            F = c === i - 1,
                            D = (function (e, u, t) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    o = e.scrollPosition,
                                    i = e.clampPosition,
                                    l = e.animationScroll,
                                    c = e.events,
                                    d = (0, n.useState)(wn),
                                    E = d[0],
                                    _ = d[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = 'dragging' === E.type ? 'move' : 'grab');
                                    }, [a, E.type]),
                                    (0, n.useEffect)(() => {
                                        if ('dragging' !== E.type) return;
                                        const e = s.O.client.events.mouse.move(([e, t]) => {
                                                const n = a.current,
                                                    s = r.current;
                                                if (!n || !s) return;
                                                if ('inside' === t && e.clientX < 0) return;
                                                const c = 'inside' === t ? e.clientX : e.clientX - s.offsetLeft,
                                                    d = E.positionFrom - c,
                                                    _ = E.previousScrollPosition + d;
                                                o.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: i(n, _),
                                                            from: { scrollPosition: l.scrollPosition.get() },
                                                        },
                                                        u && { config: u },
                                                    ),
                                                );
                                            }),
                                            t = s.O.client.events.mouse.up(function () {
                                                _({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), t());
                                        };
                                    }, [l.scrollPosition, i, a, E, o, r, u]),
                                    (0, n.useEffect)(() => {
                                        if ('scrollingToEnd' !== E.type) return;
                                        const e = () => {
                                            _(wn);
                                        };
                                        return (l.scrollPosition.idle && e(), c.on('rest', e), () => c.off('rest', e));
                                    }, [l.scrollPosition, E.type, c]),
                                    (0, n.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            (t &&
                                                t.allowedButtons &&
                                                -1 === t.allowedButtons.findIndex((u) => e.button === u)) ||
                                                _({
                                                    type: 'dragging',
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: l.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [l.scrollPosition, a, t]),
                                    E
                                );
                            })(u),
                            g = ((e) => {
                                const u = (0, n.useState)(xn.Start),
                                    t = u[0],
                                    a = u[1],
                                    r = e.animationScroll,
                                    s = e.getContainerSize,
                                    o = e.getWrapperSize,
                                    i = e.events;
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            const e = r.scrollPosition.get(),
                                                u = s() - o() - 10;
                                            a(e <= 10 ? xn.Start : e >= u ? xn.End : xn.Between);
                                        };
                                        return (i.on('change', e), () => i.off('change', e));
                                    }, [r.scrollPosition, i, s, o]),
                                    t
                                );
                            })(u),
                            B = Sn(c, e, u),
                            p = Sn(E, e, u),
                            h = ((e, u) => {
                                const t = w(),
                                    a = t.remScreenWidth,
                                    r = t.remScreenHeight,
                                    s = (0, n.useState)([]),
                                    o = s[0],
                                    i = s[1],
                                    l = (0, n.useRef)({ boxes: [], wrapperWidth: 0, scrollPosition: 0 }),
                                    c = u.animationScroll,
                                    d = u.events,
                                    E = u.getWrapperSize,
                                    _ = (0, n.useCallback)(() => {
                                        const e = l.current,
                                            u = e.boxes,
                                            t = e.wrapperWidth,
                                            n = e.scrollPosition;
                                        i(
                                            u.map(([e, u]) =>
                                                u <= n ? Pn.LeftHidden : n + t <= e ? Pn.RightHidden : Pn.Visible,
                                            ),
                                        );
                                    }, []);
                                return (
                                    (0, n.useEffect)(
                                        () =>
                                            un(() => {
                                                const u = e.current,
                                                    t = E();
                                                u &&
                                                    t &&
                                                    ((l.current.boxes = u.map(({ offsetWidth: e, offsetLeft: u }) => [
                                                        u,
                                                        u + e,
                                                    ])),
                                                    (l.current.wrapperWidth = t),
                                                    _());
                                            }),
                                        [a, r, E, _],
                                    ),
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            ((l.current.scrollPosition = c.scrollPosition.get()), _());
                                        };
                                        return (d.on('change', e), () => d.off('change', e));
                                    }, [c.scrollPosition, _, d]),
                                    o
                                );
                            })(e, u),
                            b = void 0 !== E ? h[E] : void 0,
                            f = (0, n.useCallback)(
                                (e) => {
                                    o.setQuestSwitchAnimationPhase(e);
                                },
                                [o],
                            ),
                            v = (0, n.useCallback)(
                                (e, u) =>
                                    iu(() => {
                                        o.setQuestSwitchAnimationPhase(e);
                                    }, u),
                                [o],
                            );
                        ((0, n.useEffect)(() => {
                            if (null !== B && null !== p && !m)
                                return un(() => {
                                    if (l && c !== A)
                                        u.scrollPosition.start({
                                            scrollPosition: B,
                                            onStart: () => {
                                                f(he.Scrolling);
                                            },
                                            onResolve: () => {
                                                f(he.ToDone);
                                            },
                                        });
                                    else {
                                        if (_ !== he.None) return;
                                        u.scrollPosition.start({ scrollPosition: p });
                                    }
                                });
                        }, [f, _, l, m, c, A, u.scrollPosition, p, B]),
                            (0, n.useEffect)(() => {
                                if (null !== B && null !== p)
                                    if (m) f(he.None);
                                    else
                                        switch (_) {
                                            case he.ToDone:
                                                return (
                                                    o.setLastPlayedToDoneAnimationQuestIndex(c),
                                                    v(he.ToDoneFinished, d ? 4900 : 1e3)
                                                );
                                            case he.ToDoneFinished:
                                                return F
                                                    ? void f(he.None)
                                                    : void u.scrollPosition.start({
                                                          scrollPosition: p,
                                                          onStart: () => {
                                                              f(he.Scrolling);
                                                          },
                                                          onResolve: () => {
                                                              f(he.ToInProgress);
                                                          },
                                                      });
                                            case he.ToInProgress:
                                                return v(he.None, 1200);
                                        }
                            }, [o, F, f, v, p, d, m, B, c, _, u.scrollPosition]));
                        const S = () => {
                            null !== p && u.scrollPosition.start({ scrollPosition: p });
                        };
                        return a().createElement(
                            'div',
                            { className: C()(Ea, _ !== he.None && _a) },
                            a().createElement(
                                'div',
                                { className: ma },
                                a().createElement(
                                    vn,
                                    { api: u, classNames: { content: Aa } },
                                    r.computes
                                        .getQuests()
                                        .map((u, t) =>
                                            a().createElement(
                                                da,
                                                xa(
                                                    {
                                                        key: t,
                                                        index: t,
                                                        isVisible: h[t] === Pn.Visible,
                                                        isDragging: 'dragging' === D.type,
                                                        questsRef: e,
                                                    },
                                                    u,
                                                ),
                                            ),
                                        ),
                                ),
                                a().createElement('div', { className: C()(ha, fa, g !== xn.Start && ba) }),
                                a().createElement('div', { className: C()(ha, va, g !== xn.End && ba) }),
                                a().createElement('div', { className: C()(Ba, Ca) }),
                                a().createElement('div', { className: C()(Ba, pa) }),
                                a().createElement(
                                    'div',
                                    { className: C()(wa, Sa) },
                                    a().createElement(Mn, {
                                        direction: Rn.Left,
                                        isVisible: b === Pn.LeftHidden,
                                        onClick: S,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: C()(wa, Pa) },
                                    a().createElement(Mn, {
                                        direction: Rn.Right,
                                        isVisible: b === Pn.RightHidden,
                                        onClick: S,
                                    }),
                                ),
                            ),
                            a().createElement(bn, { api: u, classNames: { base: Fa, thumb: Da, rail: ga } }),
                        );
                    }),
                    Ra = 'App_base_85',
                    Ta = 'App_base__visible_3c',
                    Ma = 'App_content_6d',
                    Na = (0, W.Pi)(() => {
                        const e = we(),
                            u = e.controls,
                            t = e.model,
                            r = t.isLoaded.get();
                        var s;
                        return (
                            (0, n.useEffect)(() => {
                                r && u.showView();
                            }, [r, u]),
                            (s = u.close),
                            G(O.n.ESCAPE, s),
                            a().createElement(
                                'div',
                                { className: C()(Ra, t.isLoaded.get() && Ta) },
                                a().createElement(z, { isBlurred: !0, onLoaded: u.loaded }),
                                a().createElement(
                                    'div',
                                    { className: Ma },
                                    a().createElement(en, null),
                                    a().createElement(ya, null),
                                    a().createElement(wt, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        a().createElement(I, null, a().createElement(ve, null, a().createElement(Na, null))),
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
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 678),
        (() => {
            var e = { 678: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(718));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
