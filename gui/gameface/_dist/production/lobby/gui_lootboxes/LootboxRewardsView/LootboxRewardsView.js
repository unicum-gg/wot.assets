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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => o, onResize: () => i });
                var a = t(2472),
                    n = t(1176);
                const i = (0, a.E)('clientResized'),
                    r = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const i = `mouse${u}`,
                                            o = r[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => r,
                    });
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => A,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => f,
                    });
                var a = t(3722),
                    n = t(6112),
                    i = t(6538),
                    r = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
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
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    f = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => i });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = i),
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
                    i = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var a = t(3138);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, t, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                n.__instance = void 0;
                const i = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => r, B0: () => s, ry: () => B, Sy: () => p });
                class a {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
                            this.removeMouseListener();
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
                var i = t(1358);
                const r = {
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
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(e, u, t, a, n, i, r) {
                    try {
                        var o = e[i](r),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var i = e.apply(u, t);
                                        function r(e) {
                                            D(i, a, n, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(i, a, n, r, o, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => g(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = n.instance,
                    w = {
                        DataTracker: i.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: A,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), i) => {
                            const r = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                m = o.height,
                                A = {
                                    x: d.O.view.pxToRem(l) + r.x,
                                    y: d.O.view.pxToRem(c) + r.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(m),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: C(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: r,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            5242: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var r = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
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
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
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
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(s || (s = {}));
                const c = r.O.client.getSize('rem'),
                    E = c.width,
                    m = c.height,
                    A = Object.assign({ width: E, height: m }, l(E, m, o)),
                    _ = (0, a.createContext)(A),
                    d = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, d);
                        const n = (0, a.useContext)(_),
                            r = n.extraLarge,
                            o = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            m = n.largeWidth,
                            A = n.mediumWidth,
                            F = n.smallWidth,
                            D = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            B = n.largeHeight,
                            g = n.mediumHeight,
                            p = n.smallHeight,
                            h = n.extraSmallHeight,
                            v = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && o) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return i(u, t, v);
                            if (t.largeWidth && m) return i(u, t, v);
                            if (t.mediumWidth && A) return i(u, t, v);
                            if (t.smallWidth && F) return i(u, t, v);
                            if (t.extraSmallWidth && D) return i(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, a.memo)(F);
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(_),
                        t = (0, a.useState)(u),
                        i = t[0],
                        s = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = r.O.view.pxToRem(e),
                                a = r.O.view.pxToRem(u);
                            s(Object.assign({ width: t, height: a }, l(t, a, o)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]);
                    const E = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return n().createElement(_.Provider, { value: E }, e);
                });
                var C = t(6483),
                    B = t.n(C),
                    g = t(926),
                    p = t.n(g);
                let h, v, b;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(h || (h = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const w = () => {
                        const e = (0, a.useContext)(_),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), h.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: r, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL,
                        [h.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [h.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [h.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, x);
                        const i = w(),
                            r = i.mediaWidth,
                            o = i.mediaHeight,
                            s = i.mediaSize;
                        return n().createElement('div', f({ className: B()(t, y[r], T[o], S[s]) }, a), u);
                    },
                    N = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, N);
                        return n().createElement(D, null, n().createElement(I, t, u));
                    };
                var M = t(493),
                    k = t.n(M);
                function P(e) {
                    engine.call('PlaySound', e);
                }
                const L = {
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
                    U = [
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
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                class G extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && P(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && P(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            i = e.side,
                            r = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, U)),
                            A = B()(L.base, L[`base__${r}`], L[`base__${i}`], null == o ? void 0 : o.base),
                            _ = B()(L.icon, L[`icon__${r}`], L[`icon__${i}`], null == o ? void 0 : o.icon),
                            d = B()(L.glow, null == o ? void 0 : o.glow),
                            F = B()(L.caption, L[`caption__${r}`], null == o ? void 0 : o.caption),
                            D = B()(L.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            H(
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
                                m,
                            ),
                            'info' !== r && n().createElement('div', { className: L.shine }),
                            n().createElement('div', { className: _ }, n().createElement('div', { className: d })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var W = t(5521),
                    $ = t(4179);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = W.n.NONE, u = V, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var q = t(3403),
                    j = t(7030);
                let Y, X, K, Q, Z, J, ee;
                !(function (e) {
                    (e.Items = 'items'),
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
                        (e.Entitlements = 'entitlements'),
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
                        (e.NewYearToyFragments = 'nyToyFragments'),
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
                        (e.LootBoxToken = 'lootBoxToken');
                })(Y || (Y = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(X || (X = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(K || (K = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Q || (Q = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Z || (Z = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(J || (J = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(ee || (ee = {}));
                const ue = 900,
                    te = 400,
                    ae = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    ne = [Y.Vehicles, Y.TmanToken, Y.CollectionItem];
                class ie extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? $.B3.GOLD : $.B3.INTEGRAL;
                        const u = $.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ie.defaultProps = { format: 'integral' };
                const re = [
                        Y.Items,
                        Y.Equipment,
                        Y.Xp,
                        Y.XpFactor,
                        Y.Blueprints,
                        Y.BlueprintsAny,
                        Y.Goodies,
                        Y.Berths,
                        Y.Slots,
                        Y.Tokens,
                        Y.CrewSkins,
                        Y.CrewBooks,
                        Y.Customizations,
                        Y.CreditsFactor,
                        Y.TankmenXp,
                        Y.TankmenXpFactor,
                        Y.FreeXpFactor,
                        Y.BattleToken,
                        Y.Entitlements,
                        Y.PremiumUniversal,
                        Y.NaturalCover,
                        Y.BpCoin,
                        Y.BattlePassSelectToken,
                        Y.BattlaPassFinalAchievement,
                        Y.BattleBadge,
                        Y.BonusX5,
                        Y.CrewBonusX3,
                        Y.NewYearFillers,
                        Y.NewYearInvoice,
                        Y.EpicSelectToken,
                        Y.Comp7TokenWeeklyReward,
                        Y.Comp7TokenCouponReward,
                        Y.BattleBoosterGift,
                        Y.NewYearFillers,
                        Y.NewYearInvoice,
                        Y.LootBoxToken,
                        Y.SelectableBonus,
                    ],
                    oe = [Y.Gold, Y.Credits, Y.Crystal, Y.FreeXp, Y.NewYearToyFragments],
                    se = [Y.BattlePassPoints],
                    le = [Y.PremiumPlus, Y.Premium],
                    ce = ['engravings', 'backgrounds'],
                    Ee = ['engraving', 'background'],
                    me = (e, u, t) => {
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
                    Ae = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Q.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Q.CURRENCY:
                            case Q.NUMBER:
                                return n().createElement(ie, { format: 'integral', value: Number(e) });
                            case Q.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
                function _e() {
                    return !1;
                }
                console.log;
                var de = t(9174);
                function Fe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const De = (e) => (0 === e ? window : window.subViews.get(e));
                function Ce(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var Be = t(3946);
                let ge;
                function pe(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ge || (ge = {}));
                const he = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ve = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    be = (e, u, t = ge.left) => e.split(u).reduce(t === ge.left ? he : ve, []),
                    we = (() => {
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
                    xe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fe = (e) => ue + 200 * e,
                    ye = (e) => {
                        return {
                            name: e.name,
                            image: (u) =>
                                ((e, u = K.Small) => {
                                    const t = pe(e.vehicleName || '');
                                    if (e.name === Y.Vehicles)
                                        switch (u) {
                                            case K.Mini:
                                            case K.Small:
                                            case K.S48x48:
                                                return e.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                            case K.Big:
                                            case K.S80x80:
                                                return e.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                            case K.S128x100:
                                            case K.S180x135:
                                                return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                            case K.S232x174:
                                            case K.S296x222:
                                                return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                            case K.S400x300:
                                            case K.S600x450:
                                                return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                            default:
                                                return (
                                                    console.error('Unknown vehicle image size', u, e.vehicleName),
                                                    'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                );
                                        }
                                    if (e.name === Y.TmanToken)
                                        switch (u) {
                                            case K.Mini:
                                            case K.Small:
                                            case K.S48x48:
                                            case K.Big:
                                            case K.S80x80:
                                                return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                            case K.S128x100:
                                            case K.S180x135:
                                            case K.S232x174:
                                                return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                            case K.S296x222:
                                                return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                            case K.S400x300:
                                                return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                            case K.S600x450:
                                                return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                            default:
                                                return (
                                                    console.error('Unknown image size', u),
                                                    'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                );
                                        }
                                    if (e.name === Y.CollectionItem)
                                        switch (u) {
                                            case K.Mini:
                                            case K.Small:
                                            case K.S48x48:
                                                return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                            case K.Big:
                                            case K.S80x80:
                                                return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                            case K.S128x100:
                                            case K.S180x135:
                                            case K.S232x174:
                                                return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                            case K.S296x222:
                                                return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                            case K.S400x300:
                                                return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                            case K.S600x450:
                                                return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                            default:
                                                console.error('Unknown image size', u);
                                        }
                                    return ((e, u = K.Small) => {
                                        const t = e.name,
                                            a = e.type,
                                            n = e.value,
                                            i = e.icon,
                                            r = e.item,
                                            o = e.dogTagType,
                                            s = ((e) => {
                                                switch (e) {
                                                    case K.S600x450:
                                                        return 'c_600x450';
                                                    case K.S400x300:
                                                        return 'c_400x300';
                                                    case K.S296x222:
                                                        return 'c_296x222';
                                                    case K.S232x174:
                                                        return 'c_232x174';
                                                    case K.Big:
                                                        return 'c_80x80';
                                                    case K.Small:
                                                        return 'c_48x48';
                                                    default:
                                                        return e;
                                                }
                                            })(u);
                                        switch (t) {
                                            case 'basic':
                                            case 'plus':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                                            case 'premium':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                                            case 'premium_plus':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                                            case 'items':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                                            case 'blueprints':
                                            case 'blueprintsAny':
                                            case 'finalBlueprints':
                                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${i}`;
                                            case 'tokens':
                                            case 'battleToken':
                                                return ((e, u) => {
                                                    switch (u) {
                                                        case K.Big:
                                                            return e.iconBig.replace('..', 'img://gui');
                                                        case K.Small:
                                                            return e.iconSmall.replace('..', 'img://gui');
                                                        default:
                                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                                    }
                                                })(e, u);
                                            case 'entitlements':
                                                return 'big' === u
                                                    ? e.iconBig.replace('..', 'img://gui')
                                                    : e.iconSmall.replace('..', 'img://gui');
                                            case 'customizations':
                                            case 'styleProgress':
                                            case 'crewSkins':
                                            case 'goodies':
                                            case 'groups':
                                            case 'tmanToken':
                                            case 'battlePassSelectToken':
                                            case 'selectableBonus':
                                            case 'lootBoxToken':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                                            case 'crewBooks':
                                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${i}`;
                                            case 'dogTagComponents':
                                                return ((e, u, t) => {
                                                    const a = ce[e];
                                                    if (a) {
                                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                                            i = n.$dyn(t);
                                                        return i ? `${i}` : `${n.$dyn(Ee[e])}`;
                                                    }
                                                    return (
                                                        console.error(
                                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                        ),
                                                        ''
                                                    );
                                                })(o, u, i);
                                            case 'dossier_badge':
                                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${i}`;
                                            case 'dossier_achievement':
                                                return `R.images.gui.maps.icons.achievement.${s}.${i}`;
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
                                            case 'premiumTank':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                            case 'styleProgressToken':
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                            case 'collectionItem':
                                                return `R.images.gui.maps.icons.collectionItems.${s}.${i}`;
                                            case 'newYearAlbumsAccess':
                                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.albumsAccess`;
                                            case 'nyFillers':
                                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.fillers`;
                                            case 'nyToyFragments':
                                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.shards`;
                                            case 'newYearSlot':
                                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${u}.slot`;
                                            default:
                                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                                        }
                                    })(e, u);
                                })(e, u),
                            value: e.value,
                            valueType:
                                ((u = e.name),
                                re.includes(u)
                                    ? Q.MULTI
                                    : oe.includes(u)
                                      ? Q.CURRENCY
                                      : se.includes(u)
                                        ? Q.NUMBER
                                        : le.includes(u)
                                          ? Q.PREMIUM_PLUS
                                          : Q.STRING),
                            label: e.label,
                            special: e.overlayType,
                            tooltipArgs: me({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            type: e.type,
                            vehicleNation: e.nationTag,
                            vehicleLvl: e.level,
                            vehicleName: e.label,
                            isElite: e.isElite,
                            isRent: e.isRent,
                            rentBattles: e.rentBattles,
                            rentDays: e.rentDays,
                            isCompensation: e.isCompensation,
                            compensatedBonus: e.compensatedBonus,
                            toyID: e.toyID,
                            rankValue: e.rankValue,
                            icon: e.icon,
                            isNew: e.isNew,
                        };
                        var u;
                    },
                    Te = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: o, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = De,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, u = 0) {
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
                                                        i = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            l = r.O.view.addModelObserver(s, u, !0);
                                                        return n.set(l, t), e && t(o(i)), l;
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
                                                                                    return Fe(e, u);
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
                                                                                          ? Fe(e, u)
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
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        mainRewards: e.array('mainRewards'),
                                                        rewards: e.array('rewards'),
                                                    },
                                                    t = (0, Be.Om)(() => Ce(u.mainRewards.get(), (e) => ye(e)), {
                                                        equals: _e,
                                                    }),
                                                    a = (0, Be.Om)(() => Ce(u.rewards.get(), (e) => ye(e)), {
                                                        equals: _e,
                                                    }),
                                                    n = (0, Be.Om)(() => Boolean(t().length % 2), { equals: _e }),
                                                    i = (0, Be.Om)(() => Boolean(t().length), { equals: _e }),
                                                    r = (0, Be.Om)(() => Boolean(a().length), { equals: _e }),
                                                    o = (0, Be.Om)(() => t().some((e) => ne.includes(e.name)), {
                                                        equals: _e,
                                                    }),
                                                    s = (0, Be.Om)(() => t().some((e) => e.name === Y.Vehicles), {
                                                        equals: _e,
                                                    }),
                                                    l = (0, Be.Om)(() => Math.min(a().length, 9), { equals: _e }),
                                                    c = (0, Be.Om)(() => 200 * t().length + te, { equals: _e }),
                                                    E = (0, Be.Om)(
                                                        () => {
                                                            const e = l() > 0 ? te : 0;
                                                            return c() + 200 * l() + e;
                                                        },
                                                        { equals: _e },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getMainRewards: t,
                                                        getRegularRewards: a,
                                                        isCountMainRewardsOdd: n,
                                                        hasMainRewards: i,
                                                        hasRegularRewards: r,
                                                        hasGoldMainRewards: o,
                                                        getVisibleRewardsLength: l,
                                                        getRewardsShowDelay: c,
                                                        getFooterShowDelay: E,
                                                        hasVehicleReward: s,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            n = de.LO.box(a, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, de.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            n = de.LO.box(a, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, de.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = de.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, de.aD)((e) => {
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
                                                                i = Object.entries(n),
                                                                r = i.reduce(
                                                                    (e, [u, t]) => ((e[t] = de.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, de.aD)((e) => {
                                                                            i.forEach(([u, t]) => {
                                                                                r[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && a ? a.controls(m) : u(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(e),
                                    A = m[0],
                                    _ = m[1],
                                    d = (0, a.useState)(() => c(e, i, s)),
                                    F = d[0],
                                    D = d[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(A, i, s)) : (E.current = !0);
                                    }, [s, A, i]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    n().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        showVehicleInHangar: e.createCallbackNoArgs('showVehicleInHangar'),
                    })),
                    Se = Te[0],
                    Re = Te[1];
                function Ie(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (a) => {
                        const n = a % t,
                            i = (n % u.columns) * e.width,
                            r = Math.trunc(n / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / t)), x: i, y: r };
                    };
                }
                const Ne = [
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
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const Me = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            i = e.getImageSource,
                            r = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? 33 : s,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            A = void 0 === m ? r - 1 : m,
                            _ = e.loop,
                            d = void 0 === _ || _,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            C = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            g = e.poster,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ne);
                        const h = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Le(E, A, i),
                                                u = ke(E, A),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        i = e.get(n);
                                                    i
                                                        ? (null == o || o(n, i),
                                                          t(i),
                                                          n === A &&
                                                              (null == B || B(),
                                                              d || (null == C || C(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && g ? { path: g, x: 0, y: 0 } : i(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(Pe(e, u));
                                            return (
                                                u.addEventListener('load', a), () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, i, E, A, d, o, B, C, g, D]),
                            n().createElement('canvas', Oe({}, p, { width: u, height: t, ref: h }))
                        );
                    }),
                    ke = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return (t += 1), t > u && (t = e), a;
                        };
                    },
                    Pe = (e, u) => Object.assign({}, e, { img: u }),
                    Le = (e, u, t) => {
                        const a = new Map(),
                            n = {};
                        for (let i = e; i <= u; i++) {
                            const e = t(i),
                                u = n[e.path];
                            if (u) a.set(i, Pe(e, u));
                            else {
                                const u = new Image();
                                (n[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(i, Pe(e, u));
                            }
                        }
                        return a;
                    },
                    Ue = [
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
                function He(e) {
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
                const Ge = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    We = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            i = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            A = e.decoratorId,
                            _ = void 0 === A ? 0 : A,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ue);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ge(t, _, { isMouseEvent: !0, on: !0, arguments: He(n) }, v),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, v, B]),
                            w = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ge(t, _, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, v, g]),
                            x = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((f = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          i && i(e),
                                                          f && f(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  w(), null == r || r(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && w(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var f;
                    },
                    $e = ['children'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const ze = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, $e);
                        return n().createElement(
                            We,
                            Ve(
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
                    qe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ye = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, qe);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: i, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, i, r, s]);
                        return n().createElement(
                            We,
                            je(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Ye.SimpleTooltipHtmlContent('resId') : Ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                const Qe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(Xe, u, a);
                        const i = u.contentId,
                            r = u.args,
                            o = null == r ? void 0 : r.contentId;
                        return i || o
                            ? n().createElement(We, Ke({}, u, { contentId: i || o }), a)
                            : n().createElement(ze, u, a);
                    },
                    Ze = {
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
                    Je = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = K.Big,
                        special: i,
                        value: r,
                        valueType: o,
                        style: s,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Z.BATTLE_BOOSTER:
                                    case Z.BATTLE_BOOSTER_REPLACE:
                                        return J.BATTLE_BOOSTER;
                                }
                            })(i),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Z.BATTLE_BOOSTER:
                                        return ee.BATTLE_BOOSTER;
                                    case Z.BATTLE_BOOSTER_REPLACE:
                                        return ee.BATTLE_BOOSTER_REPLACE;
                                    case Z.BUILT_IN_EQUIPMENT:
                                        return ee.BUILT_IN_EQUIPMENT;
                                    case Z.EQUIPMENT_PLUS:
                                        return ee.EQUIPMENT_PLUS;
                                    case Z.EQUIPMENT_TROPHY_BASIC:
                                        return ee.EQUIPMENT_TROPHY_BASIC;
                                    case Z.EQUIPMENT_TROPHY_UPGRADED:
                                        return ee.EQUIPMENT_TROPHY_UPGRADED;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Z.PROGRESSION_STYLE_UPGRADED_1:
                                        return ee.PROGRESSION_STYLE_UPGRADED_1;
                                    case Z.PROGRESSION_STYLE_UPGRADED_2:
                                        return ee.PROGRESSION_STYLE_UPGRADED_2;
                                    case Z.PROGRESSION_STYLE_UPGRADED_3:
                                        return ee.PROGRESSION_STYLE_UPGRADED_3;
                                    case Z.PROGRESSION_STYLE_UPGRADED_4:
                                        return ee.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(i),
                            d = Ae(r, o);
                        return n().createElement(
                            'div',
                            { className: B()(Ze.base, Ze[`base__${a}`], l), style: s },
                            n().createElement(
                                Qe,
                                { tooltipArgs: E, className: Ze.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: B()(Ze.image, null == c ? void 0 : c.image) },
                                        A &&
                                            n().createElement('div', {
                                                className: B()(Ze.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: B()(Ze.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            n().createElement('div', {
                                                className: B()(Ze.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    Ze.info,
                                                    Ze[`info__${e}`],
                                                    o === Q.MULTI && Ze.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Qe,
                                    { tooltipArgs: m },
                                    n().createElement('div', {
                                        className: B()(Ze.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    eu = ({ index: e = 0, delay: u = 0, children: t }) => {
                        const a = (0, j.useSpring)({
                            from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                            to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                            delay: u + fe(e),
                            config: { duration: te, easing: ae },
                            onStart: () => {
                                P(R.sounds.gui_random_reward_appear());
                            },
                        });
                        return n().createElement(j.animated.div, { className: 'AnimatedReward_base_58', style: a }, t);
                    },
                    uu = {
                        base: 'CompensationLabel_base_96',
                        icon: 'CompensationLabel_icon_2b',
                        icon__vehicles: 'CompensationLabel_icon__vehicles_be',
                        value: 'CompensationLabel_value_e1',
                        value__credits: 'CompensationLabel_value__credits_d5',
                        value__whiteSpanish: 'CompensationLabel_value__whiteSpanish_c7',
                    },
                    tu = ['nyMandarins'],
                    au = ({ compensatedBonusType: e, compensatedItem: u, value: t, valueType: a }) => {
                        const i = Ae(t, a);
                        return n().createElement(
                            'div',
                            { className: uu.base },
                            n().createElement('div', { className: B()(uu.icon, uu[`icon__${u}`]) }),
                            n().createElement(
                                'div',
                                {
                                    className: B()(
                                        uu.value,
                                        uu[`value__${e}`],
                                        tu.includes(e) && uu.value__whiteSpanish,
                                    ),
                                },
                                i,
                            ),
                        );
                    },
                    nu = ['children', 'tooltipType', 'wrap'],
                    iu = ['contentId'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                function ou(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let su;
                !(function (e) {
                    (e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple');
                })(su || (su = {}));
                const lu = (e) => {
                        let u = e.children,
                            t = e.tooltipType,
                            a = e.wrap,
                            i = void 0 !== a && a,
                            r = ou(e, nu);
                        if (!r) return u;
                        const o = i && (r.isEnabled || void 0 === r.isEnabled) ? n().createElement('div', null, u) : u,
                            s = r.contentId,
                            l = ou(r, iu);
                        switch (t) {
                            case su.Base:
                                return (
                                    !s && console.error('`contentId` field is required for a base Tooltip'),
                                    s ? n().createElement(We, ru({}, l, { contentId: s }), o) : o
                                );
                            case su.Simple:
                                return n().createElement(Xe, l, o);
                            case su.Backport:
                                return n().createElement(ze, l, o);
                            default:
                                return n().createElement(Qe, { tooltipArgs: r }, o);
                        }
                    },
                    cu = ({ image: e, tooltipArgs: u }) =>
                        n().createElement(
                            lu,
                            u,
                            n().createElement(
                                'div',
                                { className: 'NyToyReward_base_59' },
                                n().createElement('div', {
                                    className: 'NyToyReward_image_09',
                                    style: { backgroundImage: `url(${e})` },
                                }),
                            ),
                        ),
                    Eu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    mu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Au = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    _u = {
                        base: 'VehicleName_base_ed',
                        base__white: 'VehicleName_base__white_03',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_60',
                        nation: 'VehicleName_nation_74',
                        nation__china: 'VehicleName_nation__china_3c',
                        nation__czech: 'VehicleName_nation__czech_15',
                        nation__france: 'VehicleName_nation__france_b5',
                        nation__germany: 'VehicleName_nation__germany_e6',
                        nation__italy: 'VehicleName_nation__italy_05',
                        nation__japan: 'VehicleName_nation__japan_23',
                        nation__poland: 'VehicleName_nation__poland_82',
                        nation__sweden: 'VehicleName_nation__sweden_7a',
                        nation__uk: 'VehicleName_nation__uk_f2',
                        nation__usa: 'VehicleName_nation__usa_99',
                        nation__ussr: 'VehicleName_nation__ussr_87',
                        base__colored: 'VehicleName_base__colored_33',
                        level: 'VehicleName_level_b7',
                        type: 'VehicleName_type_fe',
                        type__AT_SPG: 'VehicleName_type__AT_SPG_35',
                        type__elite: 'VehicleName_type__elite_98',
                        type__heavyTank: 'VehicleName_type__heavyTank_cd',
                        type__lightTank: 'VehicleName_type__lightTank_c1',
                        type__mediumTank: 'VehicleName_type__mediumTank_67',
                        type__SPG: 'VehicleName_type__SPG_c9',
                        base__medium: 'VehicleName_base__medium_56',
                        name: 'VehicleName_name_b4',
                    },
                    du = { Small: 'small', Medium: 'medium' },
                    Fu = { Colored: 'colored', White: 'white', WhiteSpanish: 'whiteSpanish' },
                    Du = n().memo(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleShortName: t = u,
                            vehicleNation: a,
                            vehicleType: i,
                            vehicleLvl: r,
                            size: o = du.extraSmall,
                            type: s = Fu.colored,
                        }) => {
                            const l = B()(_u.base, _u[`base__${o}`], _u[`base__${s}`]),
                                c = B()(_u.nation, _u[`nation__${a}`]),
                                E = B()(_u.type, e && _u.type__elite, _u[`type__${pe(i)}`]);
                            return n().createElement(
                                'div',
                                { className: l },
                                n().createElement('div', { className: c }),
                                n().createElement(
                                    'div',
                                    { className: _u.level },
                                    ((m = r),
                                    Au
                                        ? `${m}`
                                        : (function (e) {
                                              let u = '';
                                              for (let t = mu.length - 1; t >= 0; t--)
                                                  for (; e >= mu[t]; ) (u += Eu[t]), (e -= mu[t]);
                                              return u;
                                          })(m)),
                                ),
                                n().createElement('div', { className: E }),
                                n().createElement('div', { className: _u.name }, t),
                            );
                            var m;
                        },
                    ),
                    Cu = ({ binding: e, text: u = '', classMix: t, alignment: i = ge.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      n().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ge.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return xe.includes(t)
                                                                ? we(e)
                                                                : ((e, u = ge.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          be(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(be(e, a, ge.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, i, e).map((e, u) =>
                                              n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Bu = R.strings.gui_lootboxes.rewards.rent,
                    gu = ({ rentBattles: e = 0, rentDays: u = 0 }) => {
                        const t =
                            e > 0
                                ? { text: Bu.battles(e), binding: { battles: e } }
                                : { text: Bu.days(u), binding: { days: u } };
                        return n().createElement(
                            'div',
                            { className: 'VehicleRentTip_base_28' },
                            n().createElement('div', { className: 'VehicleRentTip_icon_f7' }),
                            n().createElement(
                                'div',
                                { className: 'VehicleRentTip_label_71' },
                                n().createElement(Cu, t),
                            ),
                        );
                    },
                    pu = {
                        base: 'MainReward_base_40',
                        base__disabled: 'MainReward_base__disabled_f6',
                        info: 'MainReward_info_29',
                        labelCont: 'MainReward_labelCont_8d',
                        label: 'MainReward_label_d7',
                        labelText: 'MainReward_labelText_92',
                        tip: 'MainReward_tip_22',
                        rentReward: 'MainReward_rentReward_63',
                    };
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const vu = ({ reward: e, index: u = 0, size: t = K.S296x222 }) => {
                        const i = (0, a.useState)(!0),
                            r = i[0],
                            o = i[1],
                            s = 'ny25Toys' === e.name,
                            l = Object.assign({}, e.tooltipArgs, { ignoreShowDelay: !0 });
                        (0, a.useEffect)(() => {
                            setTimeout(() => o(!1), fe(u) - 200);
                        }, []);
                        const c =
                                (s && n().createElement(cu, { image: e.icon, tooltipArgs: l })) ||
                                n().createElement(
                                    Je,
                                    hu({}, e, {
                                        image: e.image(t),
                                        size: t,
                                        classNames: { info: pu.info },
                                        tooltipArgs: l,
                                        value: e.isCompensation ? void 0 : e.value,
                                    }),
                                ),
                            E =
                                ('vehicles' === e.name &&
                                    n().createElement(Du, {
                                        isElite: e.isElite,
                                        vehicleName: e.vehicleName,
                                        vehicleNation: e.vehicleNation,
                                        vehicleType: e.type,
                                        vehicleLvl: e.vehicleLvl,
                                    })) ||
                                (e.isCompensation &&
                                    n().createElement(
                                        Qe,
                                        { tooltipArgs: l },
                                        n().createElement(au, {
                                            value: e.value,
                                            valueType: e.valueType,
                                            compensatedBonusType: e.name,
                                            compensatedItem: e.compensatedBonus,
                                        }),
                                    )) ||
                                n().createElement('div', { className: pu.labelText }, e.label);
                        return n().createElement(
                            'div',
                            { className: B()(pu.base, r && pu.base__disabled) },
                            n().createElement(
                                eu,
                                { index: u },
                                e.isRent && n().createElement('div', { className: pu.rentReward }),
                                c,
                                e.isRent
                                    ? n().createElement(
                                          'div',
                                          { className: pu.labelCont },
                                          n().createElement('div', { className: pu.label }, E),
                                          e.isRent &&
                                              n().createElement(
                                                  'div',
                                                  { className: pu.tip },
                                                  n().createElement(gu, {
                                                      rentDays: e.rentDays,
                                                      rentBattles: e.rentBattles,
                                                  }),
                                              ),
                                      )
                                    : n().createElement('div', { className: B()(pu.label, s && pu.label__nyToy) }, E),
                            ),
                        );
                    },
                    bu = 'RewardList_reward_9d',
                    wu = {
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
                    xu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const yu = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        i = e.fadeInAnimation,
                        r = e.hide,
                        o = e.maximumNumber,
                        s = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, xu);
                    const c = a ? null : t,
                        E = 'string' == typeof c;
                    if ((c && !E && c < 0) || 0 === c) return null;
                    const m = c && !E && c > o,
                        A = B()(
                            wu.base,
                            wu[`base__${u}`],
                            i && wu.base__animated,
                            r && wu.base__hidden,
                            !c && wu.base__pattern,
                            a && wu.base__empty,
                            s,
                        );
                    return n().createElement(
                        'div',
                        fu({ className: A }, l),
                        n().createElement('div', { className: wu.bg }),
                        n().createElement('div', { className: wu.pattern }),
                        n().createElement(
                            'div',
                            { className: B()(wu.value, E && wu.value__text) },
                            m ? o : c,
                            m && n().createElement('span', { className: wu.plus }, '+'),
                        ),
                    );
                };
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                yu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Su = ({ value: e, tooltipArgs: u, isNew: t }) =>
                    n().createElement(
                        lu,
                        Tu({}, u, { ignoreShowDelay: !0 }),
                        n().createElement(
                            'div',
                            { className: 'NyBoxWithToys_base_11' },
                            n().createElement('div', { className: 'NyBoxWithToys_image_18' }),
                            Number(e) > 1 && n().createElement('div', { className: 'NyBoxWithToys_value_00' }, 'x', e),
                            t &&
                                n().createElement(
                                    'div',
                                    { className: 'NyBoxWithToys_bubble_37' },
                                    n().createElement(yu, { size: 'small', isEmpty: !0 }),
                                ),
                        ),
                    );
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Iu = ({
                        index: e,
                        delay: u,
                        size: t,
                        name: i,
                        tooltipArgs: r,
                        className: o,
                        customImage: s,
                        value: l,
                        reward: c,
                    }) => {
                        const E = (0, a.useState)(!0),
                            m = E[0],
                            A = E[1];
                        return (
                            (0, a.useEffect)(() => {
                                setTimeout(() => A(!1), fe(e) + 400);
                            }, []),
                            n().createElement(
                                'div',
                                { className: B()('SmallReward_base_67', m && 'SmallReward_base__disabled_e4') },
                                n().createElement(
                                    eu,
                                    { index: e, delay: u },
                                    c
                                        ? ('boxWithToys' === c.name &&
                                              n().createElement(Su, {
                                                  value: c.value,
                                                  tooltipArgs: r,
                                                  isNew: c.isNew,
                                              })) ||
                                              n().createElement(
                                                  Je,
                                                  Ru({}, c, {
                                                      name: i,
                                                      image: c.image(t),
                                                      size: t,
                                                      className: o,
                                                      tooltipArgs: r,
                                                  }),
                                              )
                                        : n().createElement(Je, {
                                              name: i,
                                              image: s,
                                              size: t,
                                              value: l,
                                              tooltipArgs: r,
                                              className: o,
                                          }),
                                ),
                            )
                        );
                    },
                    Nu = ({ data: e, maxRewards: u = 0, showDelay: t = 0 }) => {
                        const i = w().mediaSize < h.Medium ? K.Small : K.Big,
                            r = Boolean(u) && u < e.length,
                            o = r ? e.slice(0, u - 1) : e,
                            s = (0, a.useMemo)(
                                () => (r ? `R.images.gui.maps.icons.quests.bonuses.${i}.default` : ''),
                                [i, r],
                            ),
                            l = r
                                ? ((c = R.strings.tooltips.quests.awards.additional.bottom()),
                                  (E = { count: e.length - (u - 1) }),
                                  c.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                      const u = 0 === e.indexOf('%') ? 2 : 1;
                                      return String(E[e.slice(u, -u)]);
                                  }))
                                : '';
                        var c, E;
                        const m = (0, a.useMemo)(
                            () =>
                                r
                                    ? me(
                                          { inBoxCount: e.length - (u - 1) },
                                          R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                      )
                                    : void 0,
                            [u, e.length, r],
                        );
                        return n().createElement(
                            'div',
                            { className: 'RewardList_base_50' },
                            o.map((e, u) =>
                                n().createElement(Iu, {
                                    key: u,
                                    index: u,
                                    delay: t,
                                    name: e.name,
                                    size: i,
                                    tooltipArgs: Object.assign({}, e.tooltipArgs, { ignoreShowDelay: !0 }),
                                    reward: e,
                                    className: bu,
                                }),
                            ),
                            r &&
                                n().createElement(Iu, {
                                    name: 'more',
                                    customImage: s,
                                    size: i,
                                    value: l,
                                    tooltipArgs: Object.assign({}, m, { ignoreShowDelay: !0 }),
                                    className: bu,
                                    index: u - 1,
                                    delay: t,
                                }),
                        );
                    },
                    Ou = {
                        width: 200,
                        height: 200,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.gui_lootboxes.gui.maps.openBox.sprite_',
                            (e) => `R.images.gui_lootboxes.gui.maps.openBox.sprite_${e}`),
                    };
                const Mu = {
                        1: {
                            [h.ExtraSmall]: [K.S296x222],
                            [h.Small]: [K.S400x300],
                            [h.Medium]: [K.S400x300],
                            [h.Large]: [K.S600x450],
                            [h.ExtraLarge]: [K.S600x450],
                        },
                        2: {
                            [h.ExtraSmall]: [K.S296x222, K.S296x222],
                            [h.Small]: [K.S296x222, K.S296x222],
                            [h.Medium]: [K.S296x222, K.S296x222],
                            [h.Large]: [K.S400x300, K.S400x300],
                            [h.ExtraLarge]: [K.S400x300, K.S400x300],
                        },
                        3: {
                            [h.ExtraSmall]: [K.S296x222, K.S296x222, K.S296x222],
                            [h.Small]: [K.S296x222, K.S400x300, K.S296x222],
                            [h.Medium]: [K.S296x222, K.S400x300, K.S296x222],
                            [h.Large]: [K.S400x300, K.S600x450, K.S400x300],
                            [h.ExtraLarge]: [K.S400x300, K.S600x450, K.S400x300],
                        },
                    },
                    ku = (0, q.Pi)(() => {
                        const e = Re().model,
                            u = e.computes.getMainRewards(),
                            t = e.computes.getRegularRewards(),
                            a = e.computes.isCountMainRewardsOdd(),
                            i = e.computes.hasMainRewards(),
                            r = e.computes.hasRegularRewards(),
                            o = e.computes.getRewardsShowDelay(),
                            s = e.computes.hasGoldMainRewards(),
                            l = w().mediaSize,
                            c = Mu[u.length][l],
                            E = (0, j.useSpring)({
                                from: { scale: 1.2, opacity: 0, transform: 'translateY(0)' },
                                to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                                delay: ue,
                                config: { duration: te, easing: ae },
                            });
                        return n().createElement(
                            'div',
                            { className: 'Content_base_81' },
                            a &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: 'Content_sunShine_30' },
                                        n().createElement(Me, {
                                            width: Ou.width,
                                            height: Ou.height,
                                            frameCount: Ou.frameCount,
                                            getImageSource: Ie(Ou),
                                            frameTime: 50,
                                            className: 'Content_sunShineCanvas_7b',
                                        }),
                                    ),
                                    n().createElement(
                                        j.animated.div,
                                        { className: 'Content_starsAnimation_a6', style: E },
                                        n().createElement('div', { className: 'Content_stars_45' }),
                                    ),
                                ),
                            n().createElement('div', {
                                className: B()('Content_ribbon_f6', s && 'Content_ribbon__gold_1b'),
                            }),
                            n().createElement('div', { className: 'Content_rays_bd' }),
                            i &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_mainRewards_73' },
                                    u.map((e, u) => n().createElement(vu, { key: u, reward: e, index: u, size: c[u] })),
                                ),
                            r &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_regularRewards_1d' },
                                    n().createElement(Nu, { data: t, maxRewards: 9, showDelay: o }),
                                ),
                        );
                    }),
                    Pu = {
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
                let Lu, Uu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Lu || (Lu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Uu || (Uu = {}));
                const Hu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: r,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: A,
                    onMouseLeave: _,
                    onClick: d,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        g = D[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        v = p[1],
                        b = (0, a.useState)(!1),
                        w = b[0],
                        x = b[1],
                        f = (0, a.useCallback)(() => {
                            r || (F.current && (F.current.focus(), g(!0)));
                        }, [r]),
                        y = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [C],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                r || (d && d(e));
                            },
                            [r, d],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                r || (null !== s && P(s), c && c(e), x(!0));
                            },
                            [r, s, c],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e), v(!1));
                            },
                            [r, A],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && P(l), m && m(e), t && f(), v(!0));
                            },
                            [r, l, m, f, t],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (_ && _(e), v(!1));
                            },
                            [r, _],
                        ),
                        k = B()(
                            Pu.base,
                            Pu[`base__${i}`],
                            {
                                [Pu.base__disabled]: r,
                                [Pu[`base__${u}`]]: u,
                                [Pu.base__focus]: C,
                                [Pu.base__highlightActive]: h,
                                [Pu.base__firstHover]: w,
                            },
                            o,
                        ),
                        L = B()(Pu.state, Pu.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: k,
                                onMouseEnter: S,
                                onMouseMove: I,
                                onMouseUp: N,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: T,
                            },
                            i !== Lu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Pu.back }),
                                    n().createElement('span', { className: Pu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: L },
                                n().createElement('span', { className: Pu.stateDisabled }),
                                n().createElement('span', { className: Pu.stateHighlightHover }),
                                n().createElement('span', { className: Pu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Pu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Hu.defaultProps = { type: Lu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Gu = (0, a.memo)(Hu),
                    Wu = 'Footer_button_eb',
                    $u = R.strings.gui_lootboxes.rewards,
                    Vu = (0, q.Pi)(({ animationDuration: e }) => {
                        const u = Re(),
                            t = u.model,
                            i = u.controls,
                            r = (0, a.useState)(!0),
                            o = r[0],
                            s = r[1];
                        return (
                            setTimeout(() => {
                                s(!1);
                            }, e),
                            n().createElement(
                                'div',
                                { className: 'Footer_base_ff' },
                                n().createElement(
                                    'div',
                                    { className: 'Footer_buttonWrapper_34' },
                                    n().createElement(
                                        'div',
                                        { className: Wu },
                                        n().createElement(
                                            Gu,
                                            { type: Lu.primary, size: Uu.medium, onClick: i.close, disabled: o },
                                            $u.controls.ok(),
                                        ),
                                    ),
                                    t.computes.hasVehicleReward() &&
                                        n().createElement(
                                            'div',
                                            { className: Wu },
                                            n().createElement(
                                                Gu,
                                                {
                                                    type: Lu.primary,
                                                    size: Uu.medium,
                                                    onClick: i.showVehicleInHangar,
                                                    disabled: o,
                                                },
                                                $u.controls.showVehicle(),
                                            ),
                                        ),
                                ),
                            )
                        );
                    }),
                    zu = {
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
                    qu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ju = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Yu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Xu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const i = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, a.useMemo)(() => u || {}, [u]);
                        let o = qu.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = ju.exec(t),
                                c = Yu.exec(t),
                                E = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                (s = s.replace(t, `%(${o})`)),
                                    (r[o] = zu[e]
                                        ? n().createElement(
                                              'span',
                                              { className: zu[e] },
                                              n().createElement(Cu, { text: E, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: i(e) },
                                              n().createElement(Cu, { text: E, binding: u }),
                                          ));
                            }
                            o = qu.exec(e);
                        }
                        return n().createElement(Cu, { text: s, classMix: t, binding: r });
                    });
                let Ku;
                !(function (e) {
                    (e.Simple = 'simpleKey'), (e.Lockpick = 'lockpick');
                })(Ku || (Ku = {}));
                const Qu = R.strings.gui_lootboxes,
                    Zu = (0, q.Pi)(({ lootboxName: e, lootBoxOpenCount: u, keyType: t }) => {
                        const a = t === Ku.Lockpick;
                        return n().createElement(
                            'div',
                            { className: 'Header_base_f3' },
                            n().createElement(
                                'div',
                                { className: 'Header_blinkAnimate1_cf' },
                                n().createElement('div', { className: 'Header_blinkAnimate2_7d' }),
                            ),
                            n().createElement('div', { className: 'Header_title_3a' }, Qu.rewards.header.title()),
                            n().createElement(
                                'div',
                                { className: 'Header_subTitle_1e' },
                                n().createElement(Xu, {
                                    text: Qu.rewards.header.subTitle(),
                                    binding: { lootboxName: e },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Header_glowYellowAnimate1_7c' },
                                n().createElement('div', { className: 'Header_glowYellowAnimate2_57' }),
                            ),
                            a &&
                                n().createElement(Xu, {
                                    classMix: 'Header_count_98',
                                    text: Qu.lootboxesWithKeys.lbOpenCount(u),
                                    binding: { count: u },
                                }),
                        );
                    }),
                    Ju = R.strings.gui_lootboxes.rewards,
                    et = (0, q.Pi)(() => {
                        const e = Re(),
                            u = e.model,
                            t = e.controls,
                            i = u.computes.getFooterShowDelay(),
                            r = u.root.get(),
                            o = r.lootBoxName,
                            s = r.lootBoxIconName,
                            l = r.lootBoxOpenCount,
                            c = r.keyType,
                            E = (0, j.useSpring)({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                                delay: i + ue,
                                config: { duration: te, easing: ae },
                            });
                        (0, a.useEffect)(() => {
                            P(R.sounds.gui_reward_screen_general());
                        }, []);
                        const m = () => {
                            t.close();
                        };
                        var A;
                        (A = m), z(W.n.ESCAPE, A);
                        const _ = `R.images.gui_lootboxes.gui.maps.storage.boxes.${s}_open`;
                        return n().createElement(
                            'div',
                            { className: 'App_base_43' },
                            n().createElement('div', {
                                className: 'App_bgBox_80',
                                style: { backgroundImage: `url(${_})` },
                            }),
                            n().createElement('div', { className: 'App_bg_5d' }),
                            n().createElement(
                                'div',
                                { className: 'App_header_4f' },
                                n().createElement(Zu, { lootboxName: o || '', lootBoxOpenCount: l, keyType: c.value }),
                            ),
                            n().createElement('div', { className: 'App_content_76' }, n().createElement(ku, null)),
                            n().createElement(
                                'div',
                                { className: 'App_close_c2' },
                                n().createElement(G, {
                                    caption: Ju.controls.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: m,
                                }),
                            ),
                            n().createElement(
                                j.animated.div,
                                { className: 'App_footer_46', style: E },
                                n().createElement(Vu, { animationDuration: i + ue }),
                            ),
                        );
                    }),
                    ut = [
                        {
                            index: 0,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '0',
                            tooltipContentId: '25',
                            label: 'Горыныч',
                            item: '',
                            overlayType: '',
                            customizationID: 31013,
                            item: 'style_3d',
                            icon: 'style_3d_31013',
                        },
                        {
                            index: 1,
                            name: 'dogTagComponents',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '25',
                            tooltipContentId: '25',
                            label: 'Очки престижа',
                            icon: 'engraving_600_0',
                        },
                        {
                            index: 1,
                            name: 'gold',
                            value: '9000',
                            isCompensation: !0,
                            tooltipId: '1',
                            tooltipContentId: '520',
                            label: 'Золото',
                            item: '',
                            overlayType: '',
                            compensatedBonus: 'vehicles',
                        },
                        {
                            index: 1,
                            name: 'vehicles',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '2',
                            tooltipContentId: '25',
                            label: 'BZ-176',
                            item: '',
                            overlayType: '',
                            vehicleName: 'Ch47_BZ_176',
                            type: 'heavyTank',
                            level: 8,
                            nationTag: 'china',
                            isElite: !0,
                            isRent: !1,
                            rentDays: 0,
                            rentBattles: 0,
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '3',
                            tooltipContentId: '25',
                            label: 'Живая сталь',
                            item: '',
                            overlayType: '',
                            customizationID: 434,
                            item: 'style_3d',
                            icon: 'style',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '4',
                            tooltipContentId: '25',
                            label: 'Система управления огнём Т2',
                            item: 'modernizedAimDrivesAimingStabilizer',
                            overlayType: 'equipmentModernized_2',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '5',
                            tooltipContentId: '25',
                            label: 'Экспериментальная система заряжания',
                            item: 'rammer',
                            overlayType: 'equipmentPlus',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '6',
                            tooltipContentId: '25',
                            label: 'Трофейная вентиляция',
                            item: 'improvedVentilation',
                            overlayType: 'equipmentTrophyBasic',
                        },
                        {
                            index: 1,
                            name: 'crystal',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '7',
                            tooltipContentId: '25',
                            label: 'Боны',
                        },
                        {
                            index: 1,
                            name: 'gold',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '8',
                            tooltipContentId: '25',
                            label: 'Золото',
                        },
                        {
                            index: 1,
                            name: 'premium_plus',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '9',
                            tooltipContentId: '25',
                            label: 'Дни Танкового премиум аккаунта',
                        },
                        {
                            index: 1,
                            name: 'tmanToken',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '10',
                            tooltipContentId: '25',
                            label: 'Новобранец ',
                            icon: 'tankman',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '11',
                            tooltipContentId: '25',
                            label: 'Советская школа',
                            item: '',
                            overlayType: '',
                            customizationID: 62,
                            item: '',
                            icon: 'style',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '3',
                            isCompensation: !1,
                            tooltipId: '12',
                            tooltipContentId: '25',
                            label: 'Дополнительный опыт за бой',
                            icon: 'booster_xp_premium',
                        },
                        {
                            index: 1,
                            name: 'crewBooks',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '13',
                            tooltipContentId: '25',
                            label: 'Учебная брошюра (Швеция)',
                            icon: 'brochure_sweden',
                        },
                        {
                            index: 1,
                            name: 'crewBooks',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '14',
                            tooltipContentId: '25',
                            label: 'Персональное учебное пособие',
                            icon: 'personalBook',
                        },
                        {
                            index: 1,
                            name: 'credits',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '15',
                            tooltipContentId: '25',
                            label: 'Кредиты',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '16',
                            tooltipContentId: '25',
                            label: 'Средний противоосколочный подбой',
                            item: 'antifragmentationLining',
                            overlayType: '',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '10',
                            isCompensation: !1,
                            tooltipId: '17',
                            tooltipContentId: '25',
                            label: 'Бортовой огнетушитель',
                            item: 'autoExtinguishers',
                            overlayType: '',
                        },
                        {
                            index: 1,
                            name: 'items',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '18',
                            tooltipContentId: '25',
                            label: 'Смазка стабилизаторов',
                            item: 'aimingStabilizer',
                            overlayType: 'battleBooster',
                        },
                        {
                            index: 1,
                            name: 'crewSkins',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '19',
                            tooltipContentId: '25',
                            label: 'Павел Рыбалко',
                            icon: 'crewSkin2',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '20',
                            tooltipContentId: '25',
                            label: 'Тигр 1',
                            item: '',
                            overlayType: '',
                            customizationID: 15574,
                            item: '',
                            icon: 'emblem',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '21',
                            tooltipContentId: '25',
                            label: 'Советский базовый',
                            item: '',
                            overlayType: '',
                            customizationID: 128,
                            item: '',
                            icon: 'paint',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '22',
                            tooltipContentId: '25',
                            label: 'Пощады не будет',
                            item: '',
                            overlayType: '',
                            customizationID: 564,
                            item: '',
                            icon: 'projectionDecal',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '23',
                            tooltipContentId: '25',
                            label: 'Богатыри',
                            item: '',
                            overlayType: '',
                            customizationID: 14580,
                            item: '',
                            icon: 'inscription',
                        },
                        {
                            index: 1,
                            name: 'customizations',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '24',
                            tooltipContentId: '25',
                            label: 'Ранний двухцветный',
                            item: '',
                            overlayType: '',
                            customizationID: 15400,
                            item: '',
                            icon: 'camouflage',
                        },
                        {
                            index: 1,
                            name: 'dogTagComponents',
                            value: '',
                            isCompensation: !1,
                            tooltipId: '25',
                            tooltipContentId: '25',
                            label: 'Очки престижа',
                            icon: 'engraving_600_0',
                        },
                        {
                            index: 1,
                            name: 'dossier_badge',
                            value: '0',
                            isCompensation: !1,
                            tooltipId: '26',
                            tooltipContentId: '25',
                            label: 'Линия фронта 2021: на передовой',
                            icon: 'badge_105',
                        },
                        {
                            index: 1,
                            name: 'slots',
                            value: '5',
                            isCompensation: !1,
                            tooltipId: '27',
                            tooltipContentId: '25',
                            label: 'Слотов в Ангаре',
                        },
                        {
                            index: 1,
                            name: 'blueprints',
                            value: '10',
                            isCompensation: !1,
                            tooltipId: '28',
                            tooltipContentId: '25',
                            label: '',
                            icon: 'intelligence',
                            type: 'BlueprintUniversalFragmentCongrats',
                        },
                        {
                            index: 1,
                            name: 'freeXP',
                            value: '100000',
                            isCompensation: !1,
                            tooltipId: '29',
                            tooltipContentId: '25',
                            label: 'Свободный опыт',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '5',
                            isCompensation: !1,
                            tooltipId: '30',
                            tooltipContentId: '25',
                            label: 'Демонтажный набор',
                            icon: 'common',
                        },
                        {
                            index: 1,
                            name: 'goodies',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '31',
                            tooltipContentId: '25',
                            label: 'Бланк переподготовки',
                            icon: 'recertificationForm',
                        },
                        {
                            index: 1,
                            name: 'battle_bonus_x5',
                            value: '1',
                            isCompensation: !1,
                            tooltipId: '32',
                            tooltipContentId: '25',
                            label: '',
                            userName: '',
                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/bonus_battle_task.png',
                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/bonus_battle_task.png',
                        },
                    ],
                    tt = {
                        lootboxName: 'tanks_birthday_2023_VI',
                        isGreat: !1,
                        mainRewards: ut.slice(0, 3),
                        rewards: ut.slice(0, 99),
                    },
                    at = {
                        getter: ((nt = tt), (e) => (e ? e.split('.').reduce((e, u) => e[u], nt) : nt)),
                        computes: { getMainRewards: () => tt.mainRewards, getRegularRewards: () => tt.rewards },
                        controls: () =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const a = e[t];
                                        u[t] = (0, de.aD)(a);
                                    }
                                return u;
                            })({
                                close: () => {
                                    console.log('Call onClose()'), (0, $.Sy)();
                                },
                                showVehicleInHangar: () => {
                                    console.log('Call showVehicleInHangar()');
                                },
                            }),
                    };
                var nt;
                engine.whenReady.then(() => {
                    k().render(
                        n().createElement(
                            Se,
                            { mode: 'real', mocks: at },
                            n().createElement(O, null, n().createElement(et, null)),
                        ),
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], i = !0, r = 0; r < u.length; r++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 809),
        (() => {
            var e = { 809: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [i, r, o] = t,
                        s = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < i.length; s++)
                        (n = i[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5242));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
