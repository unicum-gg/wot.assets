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
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => l, onResize: () => r }));
                var a = t(2472),
                    i = t(1176);
                const r = (0, a.E)('clientResized'),
                    n = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    l = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, i.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, i.R)(!0);
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
                                : (0, i.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let i = !0;
                                        const r = `mouse${e}`,
                                            l = n[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                i &&
                                                    (l(),
                                                    window.removeEventListener(r, s),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (i = !1));
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
                                u.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, i.R)(!1);
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
                        getSize: () => i,
                        graphicsQuality: () => n,
                    }));
                var a = t(527);
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
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
                t.d(e, { O: () => i });
                var a = t(5959);
                const i = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function i(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => i, getTextureUrl: () => a }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => i });
                var a = t(2472);
                const i = {
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => p,
                        getScale: () => D,
                        getSize: () => c,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => w,
                    }));
                var a = t(3722),
                    i = t(6112),
                    r = t(6538),
                    n = t(8566);
                function l(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function o(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
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
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(i.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === i.W[e]), u),
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
                    w = Promise.all([
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
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        i = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                    return i;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var i;
                    },
                    r = {
                        close(u) {
                            i('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(u) {
                            i(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, i;
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
                    })(i || (i = {})));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
                class i {
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
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, i);
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
                i.__instance = void 0;
                const r = i;
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
                t.d(e, { B0: () => s, ry: () => C });
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
                const i = a;
                var r = t(1358);
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    l = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                var o;
                (((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const D = ['args'];
                function m(u, e, t, a, i, r, n) {
                    try {
                        var l = u[r](n),
                            s = l.value;
                    } catch (u) {
                        return void t(u);
                    }
                    l.done ? e(s) : Promise.resolve(s).then(a, i);
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
                                    return new Promise(function (a, i) {
                                        var r = u.apply(e, t);
                                        function n(u) {
                                            m(r, a, i, n, l, 'next', u);
                                        }
                                        function l(u) {
                                            m(r, a, i, n, l, 'throw', u);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        i = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                    return i;
                                })(e, D);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = i),
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
                    h = () => g(s.CLOSE),
                    b = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var v = t(7572);
                const p = i.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: A,
                        TimeFormatType: c,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, i = R.invalid('resId'), r) => {
                            const n = d.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                o = l.x,
                                E = l.y,
                                A = l.width,
                                c = l.height,
                                F = {
                                    x: d.O.view.pxToRem(o) + n.x,
                                    y: d.O.view.pxToRem(E) + n.y,
                                    width: d.O.view.pxToRem(A),
                                    height: d.O.view.pxToRem(c),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: i,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => b(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            b(u, h);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const i = Object.prototype.toString.call(e[a]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < i.length; e++) t[a].push({ value: u(i[e].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: n,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = y;
            },
            5541: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    i = t.n(a);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var n = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function o(u, e, t) {
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
                        i = (function (u, e) {
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
                        r = Math.min(a, i);
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
                        extraLargeHeight: i === t.extraLarge.weight,
                        largeHeight: i === t.large.weight,
                        mediumHeight: i === t.medium.weight,
                        smallHeight: i === t.small.weight,
                        extraSmallHeight: i === t.extraSmall.weight,
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
                })(s || (s = {}));
                const E = n.O.client.getSize('rem'),
                    A = E.width,
                    c = E.height,
                    F = Object.assign({ width: A, height: c }, o(A, c, l)),
                    _ = (0, a.createContext)(F),
                    d = ['children'],
                    D = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    i = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                return i;
                            })(u, d);
                        const i = (0, a.useContext)(_),
                            n = i.extraLarge,
                            l = i.large,
                            s = i.medium,
                            o = i.small,
                            E = i.extraSmall,
                            A = i.extraLargeWidth,
                            c = i.largeWidth,
                            F = i.mediumWidth,
                            D = i.smallWidth,
                            m = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            C = i.largeHeight,
                            g = i.mediumHeight,
                            h = i.smallHeight,
                            b = i.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && l) return e;
                            if (t.medium && s) return e;
                            if (t.small && o) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && A) return r(e, t, v);
                            if (t.largeWidth && c) return r(e, t, v);
                            if (t.mediumWidth && F) return r(e, t, v);
                            if (t.smallWidth && D) return r(e, t, v);
                            if (t.extraSmallWidth && m) return r(e, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && h) return e;
                                if (t.extraSmallHeight && b) return e;
                            }
                        }
                        return null;
                    };
                ((D.defaultProps = {
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
                    (0, a.memo)(D));
                const m = (0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(_),
                        t = (0, a.useState)(e),
                        r = t[0],
                        s = t[1],
                        E = (0, a.useCallback)((u, e) => {
                            const t = n.O.view.pxToRem(u),
                                a = n.O.view.pxToRem(e);
                            s(Object.assign({ width: t, height: a }, o(t, a, l)));
                        }, []);
                    (((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const A = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return i().createElement(_.Provider, { value: A }, u);
                });
                var B = t(6483),
                    C = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let b, v, p;
                (!(function (u) {
                    ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.width)] = 'Small'),
                            (u[(u.Medium = l.medium.width)] = 'Medium'),
                            (u[(u.Large = l.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const y = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const w = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL_HEIGHT,
                        [p.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [p.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    i = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                return i;
                            })(u, y);
                        const n = (() => {
                                const u = (0, a.useContext)(_),
                                    e = u.width,
                                    t = u.height,
                                    i = ((u) => {
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
                                                return v.ExtraLarge;
                                            case u.largeWidth:
                                                return v.Large;
                                            case u.mediumWidth:
                                                return v.Medium;
                                            case u.smallWidth:
                                                return v.Small;
                                            case u.extraSmallWidth:
                                                return v.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    v.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    n = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeHeight:
                                                return p.ExtraLarge;
                                            case u.largeHeight:
                                                return p.Large;
                                            case u.mediumHeight:
                                                return p.Medium;
                                            case u.smallHeight:
                                                return p.Small;
                                            case u.extraSmallHeight:
                                                return p.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    p.ExtraSmall
                                                );
                                        }
                                    })(u);
                                return {
                                    mediaSize: i,
                                    mediaWidth: r,
                                    mediaHeight: n,
                                    remScreenWidth: e,
                                    remScreenHeight: t,
                                };
                            })(),
                            l = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', f({ className: C()(t, w[l], S[s], k[o]) }, r), e);
                    },
                    x = ['children'],
                    M = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    i = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                return i;
                            })(u, x);
                        return i().createElement(m, null, i().createElement(L, t, e));
                    };
                var N = t(493),
                    T = t.n(N);
                const P = {
                    base: 'AbilityPanel_base_32',
                    ability: 'AbilityPanel_ability_9e',
                    ability_effect: 'AbilityPanel_ability_effect_80',
                    ability__shell: 'AbilityPanel_ability__shell_e8',
                    ability__ready: 'AbilityPanel_ability__ready_fd',
                    ability__wave: 'AbilityPanel_ability__wave_d6',
                    ability__stun_shot: 'AbilityPanel_ability__stun_shot_ef',
                    ability__acceleration: 'AbilityPanel_ability__acceleration_62',
                    ability__shield: 'AbilityPanel_ability__shield_39',
                    ability__black_hole: 'AbilityPanel_ability__black_hole_2f',
                    ability__overcharge: 'AbilityPanel_ability__overcharge_02',
                    ability__power_shot: 'AbilityPanel_ability__power_shot_04',
                    ability__rapid_shelling: 'AbilityPanel_ability__rapid_shelling_6d',
                    flash: 'AbilityPanel_flash_a1',
                    ability_overlay: 'AbilityPanel_ability_overlay_1b',
                    ability_disabledOverlay: 'AbilityPanel_ability_disabledOverlay_41',
                    ability__active: 'AbilityPanel_ability__active_4b',
                    ability__disabled: 'AbilityPanel_ability__disabled_81',
                    ability_border: 'AbilityPanel_ability_border_40',
                    ability_keyBind: 'AbilityPanel_ability_keyBind_40',
                    ability__none: 'AbilityPanel_ability__none_50',
                    ability_icon: 'AbilityPanel_ability_icon_f2',
                    ability_icon_ready: 'AbilityPanel_ability_icon_ready_cb',
                    ability_reloadMask: 'AbilityPanel_ability_reloadMask_3a',
                    ability_reloadMask_icon: 'AbilityPanel_ability_reloadMask_icon_31',
                    ability_reloadMask_background: 'AbilityPanel_ability_reloadMask_background_29',
                    ability_reloadMask_border: 'AbilityPanel_ability_reloadMask_border_20',
                    chargeReset: 'AbilityPanel_chargeReset_c5',
                    ability_reloading: 'AbilityPanel_ability_reloading_af',
                    chargeUp: 'AbilityPanel_chargeUp_3d',
                    chargeUp2: 'AbilityPanel_chargeUp2_eb',
                };
                var O = t(3282);
                function H(u) {
                    return u;
                }
                function I() {
                    return !1;
                }
                console.log;
                var W = t(3915);
                function U(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const V = (u) => (0 === u ? window : window.subViews.get(u));
                function G(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var j = t(6517);
                const $ = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: e, children: r, mocks: l }) {
                                const s = (0, a.useRef)([]),
                                    o = (u, e, t) => {
                                        var a;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = V,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? i.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = i.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const l = (u) => {
                                                    const i = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], i);
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
                                                            o = n.O.view.addModelObserver(s, e, !0);
                                                        return (i.set(o, t), u && t(l(r)), o);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (u, e) => {
                                                        const t = l(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = l(u);
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
                                                                                    return U(u, e);
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
                                                                                          ? U(u, e)
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
                                                                })(i.keys());
                                                            !(u = t()).done;
                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(e),
                                            r =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == t ? void 0 : t.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == t ? void 0 : t.getter(e)) : r.readByPath(e),
                                            o = (u) => s.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = Object.assign(
                                                        {
                                                            root: u.object(),
                                                            reloadTimes: u.primitives(['reloadTimeLeft', 'reloadTime']),
                                                        },
                                                        u.primitives(['selectedVehicleID']),
                                                        {
                                                            abilities: u.array('abilities', []),
                                                            messages: u.array('messages', []),
                                                            aim: u.object('aim'),
                                                        },
                                                    ),
                                                    t = (0, j.computedFn)(() => G(e.abilities.get(), H)),
                                                    a = (0, j.computedFn)(
                                                        (u) =>
                                                            (function (u, e) {
                                                                var t;
                                                                if (!(e >= u.length))
                                                                    return Array.isArray(u)
                                                                        ? u[e]
                                                                        : null == (t = u[e])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(t(), u),
                                                        { equals: I },
                                                    ),
                                                    i = (0, j.computedFn)(() => G(e.messages.get(), H)),
                                                    r = (0, j.computedFn)(() => e.aim.get().killStreak);
                                                return Object.assign({}, e, {
                                                    computes: {
                                                        getAbilities: t,
                                                        getAbility: a,
                                                        getMessages: i,
                                                        getKillStreak: r,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            i = W.observable.box(a, { equals: I });
                                                        return (
                                                            'real' === u &&
                                                                r.subscribe(
                                                                    (0, W.action)((u) => i.set(u)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            i = W.observable.box(a, { equals: I });
                                                        return (
                                                            'real' === u &&
                                                                r.subscribe(
                                                                    (0, W.action)((u) => i.set(u)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = l(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (u, e) => ((u[e] = W.observable.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    r.subscribe(
                                                                        (0, W.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                i[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = e,
                                                                n = Object.entries(i),
                                                                l = n.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = W.observable.box(a[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    r.subscribe(
                                                                        (0, W.action)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                l[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: o,
                                            }),
                                            A = { mode: u, model: E, externalModel: r, cleanup: o };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && t ? t.controls(A) : {},
                                            externalModel: r,
                                            mode: u,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    A = (0, a.useState)(u),
                                    c = A[0],
                                    F = A[1],
                                    _ = (0, a.useState)(() => o(u, e, l)),
                                    d = _[0],
                                    D = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(o(c, e, l)) : (E.current = !0);
                                    }, [l, c, e]),
                                    (0, a.useEffect)(() => {
                                        F(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (d.externalModel.dispose(), s.current.forEach((u) => u()));
                                        },
                                        [d],
                                    ),
                                    i().createElement(t.Provider, { value: d }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(),
                    K = $[0],
                    z = $[1];
                var q = t(4179);
                const Y = [
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
                function X(u) {
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
                const Z = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Q = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            i = u.args,
                            r = u.onMouseEnter,
                            n = u.onMouseLeave,
                            l = u.onMouseDown,
                            s = u.onClick,
                            o = u.ignoreShowDelay,
                            E = void 0 !== o && o,
                            A = u.ignoreMouseClick,
                            c = void 0 !== A && A,
                            F = u.decoratorId,
                            _ = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            D = void 0 === d || d,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    i = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) ((t = r[a]), e.indexOf(t) >= 0 || (i[t] = u[t]));
                                return i;
                            })(u, Y);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
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
                            p = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Z(t, _, { isMouseEvent: !0, on: !0, arguments: X(i) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, _, i, v, C]),
                            y = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        Z(t, _, { on: !1 }, v),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, _, v, g]),
                            f = (0, a.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && y();
                            }, [D, y]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ),
                            D
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(p, E ? 100 : 400)),
                                                          r && r(u),
                                                          w && w(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (y(), null == n || n(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === c && y(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === c && y(), null == l || l(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var w;
                    };
                let J;
                !(function (u) {
                    ((u.NONE = 'none'),
                        (u.SHELL = 'shell'),
                        (u.ACCELERATION = 'acceleration'),
                        (u.SHIELD = 'shield'),
                        (u.BLACK_HOLE = 'black_hole'),
                        (u.OVERCHARGE = 'overcharge'),
                        (u.RAPID_SHELLING = 'rapid_shelling'),
                        (u.POWER_SHOT = 'power_shot'),
                        (u.WAVE = 'wave'),
                        (u.STUN_SHOT = 'stun_shot'));
                })(J || (J = {}));
                const uu = J.NONE,
                    eu = J.SHELL,
                    tu = (J.ACCELERATION, J.SHIELD, J.BLACK_HOLE, J.OVERCHARGE),
                    au = J.RAPID_SHELLING,
                    iu = J.POWER_SHOT,
                    ru = J.STUN_SHOT;
                let nu, lu;
                (!(function (u) {
                    ((u[(u.First = 1)] = 'First'), (u[(u.Second = 2)] = 'Second'));
                })(nu || (nu = {})),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(lu || (lu = {})));
                const su = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    ou = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Eu = (u, e, t = lu.left) => u.split(e).reduce(t === lu.left ? su : ou, []),
                    Au = (() => {
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
                    cu = ['zh_cn', 'zh_sg', 'zh_tw'];
                let Fu;
                var _u;
                (((_u = Fu || (Fu = {})).SHORT_DATE = 'short-date'),
                    (_u.SHORT_TIME = 'short-time'),
                    (_u.SHORT_DATE_TIME = 'short-date-time'),
                    (_u.FULL_DATE = 'full-date'),
                    (_u.FULL_DATE_TIME = 'full-date-time'),
                    (_u.MONTH = 'month'),
                    (_u.MONTH_DATE = 'month-date'),
                    (_u.DATE_MONTH = 'date-month'),
                    (_u.MONTH_YEAR = 'month-year'),
                    (_u.WEEK_DAY = 'week-day'),
                    (_u.WEEK_DAY_TIME = 'week-day-time'),
                    (_u.YEAR = 'year'),
                    (_u.DATE_YEAR = 'date-year'),
                    Date.now());
                const du = (0, O.observer)(({ abilityIndex: u }) => {
                        const e = z().model.computes.getAbility(u),
                            t = null == e ? void 0 : e.reloadTime,
                            r = (null == e ? void 0 : e.reloadTimeLeft) || 0,
                            n = (0, a.useState)(r),
                            l = n[0],
                            s = n[1];
                        if (
                            ((0, a.useEffect)(() => {
                                s(Math.ceil(10 * r) / 10);
                                const u = Date.now(),
                                    e = setInterval(() => {
                                        const t = Date.now() - u,
                                            a = r - t / 1e3;
                                        return a <= 0 ? (clearInterval(e), s(0)) : s(Math.ceil(10 * a) / 10);
                                    }, 100);
                                return () => clearInterval(e);
                            }, [r]),
                            0 === l)
                        )
                            return null;
                        const o = l > 0 ? l : t;
                        return i().createElement('div', { className: P.ability_reloading }, o, 's');
                    }),
                    Du = i().memo(
                        ({
                            isActive: u,
                            keyBind: e,
                            reloadTime: t,
                            reloadTimeLeft: r,
                            ability: n,
                            abilityIndex: l,
                            vehicleOverturned: s,
                        }) => {
                            const o = 0 === r,
                                E = (0, a.useRef)(P.chargeUp),
                                A = (n === eu || n === au) && s;
                            o || (E.current = E.current === P.chargeUp ? P.chargeUp2 : P.chargeUp);
                            const c = E.current,
                                F = o ? {} : { animation: c + ' ' + t + 's linear', animationDelay: -(t - r) + 's' };
                            return i().createElement(
                                Q,
                                {
                                    contentId: R.views.cosmic_event.battle.cosmic_hud.tooltips.AbilityTooltip('resId'),
                                    args: { ability: n },
                                    isEnabled: n !== uu,
                                },
                                i().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            P.ability,
                                            P[`ability__${n}`],
                                            u && P.ability__active,
                                            A && P.ability__disabled,
                                            o && P.ability__ready,
                                        ),
                                    },
                                    n !== eu && i().createElement(du, { abilityIndex: l }),
                                    i().createElement('div', { className: P.ability_effect }),
                                    i().createElement('div', { className: P.ability_keyBind }, e),
                                    i().createElement('div', { className: P.ability_icon }),
                                    i().createElement('div', { className: P.ability_border }),
                                    i().createElement(
                                        'div',
                                        { className: P.ability_reloadMask, style: F },
                                        i().createElement('div', { className: P.ability_reloadMask_background }),
                                        i().createElement('div', { className: P.ability_reloadMask_icon }),
                                        i().createElement('div', { className: P.ability_reloadMask_border }),
                                    ),
                                    i().createElement('div', { className: P.ability_overlay }),
                                    i().createElement('div', { className: P.ability_disabledOverlay }),
                                ),
                            );
                        },
                    );
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const Bu = (0, O.observer)(({ abilityIndex: u, AbilitySlotComponent: e = Du }) => {
                        const t = z().model,
                            a = t.computes.getAbility(u),
                            r = t.root.get().vehicleOverturned;
                        return void 0 !== a && null != a && a.ability
                            ? i().createElement(e, mu({}, a, { abilityIndex: u, vehicleOverturned: r }))
                            : null;
                    }),
                    Cu = ({ className: u }) =>
                        i().createElement(
                            'div',
                            { className: C()(P.base, u) },
                            i().createElement(Bu, { abilityIndex: 0 }),
                            i().createElement(Bu, { abilityIndex: 1 }),
                            i().createElement(Bu, { abilityIndex: 2 }),
                            i().createElement(Bu, { abilityIndex: 3 }),
                        );
                let gu, hu;
                (!(function (u) {
                    ((u.None = 'none'),
                        (u.AwaitingPlayers = 'awaiting_players'),
                        (u.Custom = 'custom'),
                        (u.PreBattle = 'pre_battle'),
                        (u.StartBattle = 'start_battle'),
                        (u.Pickups = 'pickups'),
                        (u.Respawn = 'respawn'),
                        (u.PrepareToScan = 'prepare_to_scan'),
                        (u.ScanAvailable = 'scan_available'),
                        (u.PrepareToScanFinal = 'prepare_to_scan_final'),
                        (u.FinalScanAvailable = 'final_scan_available'),
                        (u.Scanning = 'scanning'),
                        (u.MissionCompleted = 'mission_completed'));
                })(gu || (gu = {})),
                    (function (u) {
                        ((u.PreBattle = 'pre_battle'), (u.Phase1 = 'phase_1'), (u.Phase2 = 'phase_2'));
                    })(hu || (hu = {})));
                const bu = 'Announcement_announcement_7c',
                    vu = 'Announcement_announcement_countdown_decoration_9c',
                    pu = 'Announcement_announcement_title_60',
                    yu = 'Announcement_announcement_subtitle_81',
                    fu = () =>
                        i().createElement(
                            'div',
                            {
                                className: 'ArtefactScanning_base_19',
                                'data-bind-class-toggle':
                                    'ArtefactScanning_base__show_21: {{model.artefactScanning.totalTime}} > 0 && !{{model.isRespawning}}',
                                'data-bind-if':
                                    '{{model.artefactScanning.totalTime}} > 0 && {{model.artefactScanning.timeLeft}} >= 0',
                            },
                            i().createElement(
                                'div',
                                { className: 'ArtefactScanning_progressBar_d0' },
                                i().createElement('div', {
                                    className: 'ArtefactScanning_progressBar_progress_a9',
                                    'data-bind-style-width':
                                        "0+Math.floor({{model.artefactScanning.totalTime}} > 0 && {{model.artefactScanning.timeLeft}}/{{model.artefactScanning.totalTime}}*100)+'%'",
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'ArtefactScanning_progressBar_text_f7' },
                                    R.strings.cosmicEvent.battle.announcement.scanning.time_left(),
                                    i().createElement('span', {
                                        'data-bind-value':
                                            "String(Math.floor({{model.artefactScanning.timeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{model.artefactScanning.timeLeft}}%60)).padStart(2, '0')",
                                    }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: 'ArtefactScanning_label_80' },
                                R.strings.cosmicEvent.battle.announcement.scanning.players_scanning(),
                                i().createElement('span', {
                                    'data-bind-value': '{{model.artefactScanning.activePlayers}}',
                                }),
                            ),
                        ),
                    wu = i().memo(() =>
                        i().createElement(
                            'div',
                            {
                                className: 'Announcement_base_93',
                                'data-bind-class-toggle': `Announcement_base__show_cf: {{model.announcementType}} !== "${gu.None}"`,
                            },
                            i().createElement(
                                'div',
                                { className: bu, 'data-bind-if': `{{model.announcementType}} === "${gu.Custom}"` },
                                i().createElement('div', {
                                    className: pu,
                                    'data-bind-value': '{{model.announcementCustomTitle}}',
                                    'data-bind-if': "{{model.announcementCustomTitle}} !== ''",
                                }),
                                i().createElement('div', {
                                    className: yu,
                                    'data-bind-value': '{{model.announcementCustomSubtitle}}',
                                    'data-bind-if': "{{model.announcementCustomSubtitle}} !== ''",
                                }),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: bu,
                                    'data-bind-if': `{{model.announcementType}} === "${gu.AwaitingPlayers}"`,
                                },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.awaiting_players.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: bu, 'data-bind-if': `{{model.announcementType}} === "${gu.PreBattle}"` },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.pre_battle.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: bu, 'data-bind-if': `{{model.announcementType}} === "${gu.StartBattle}"` },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.start_battle.title(),
                                ),
                                i().createElement(
                                    'div',
                                    { className: yu },
                                    R.strings.cosmicEvent.battle.announcement.start_battle.subtitle(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: bu, 'data-bind-if': `{{model.announcementType}} === "${gu.Pickups}"` },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.pickups.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: bu, 'data-bind-if': `{{model.announcementType}} === "${gu.Respawn}"` },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.respawn.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: bu,
                                    'data-bind-if': `{{model.announcementType}} === "${gu.PrepareToScan}"`,
                                },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.prepare_to_scan.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: bu,
                                    'data-bind-if': `{{model.announcementType}} === "${gu.PrepareToScanFinal}"`,
                                },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.prepare_to_scan_final.title(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: bu,
                                    'data-bind-if': `{{model.announcementType}} === "${gu.MissionCompleted}"`,
                                },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    R.strings.cosmicEvent.battle.announcement.mission_completed.title(),
                                ),
                            ),
                            i().createElement(fu, null),
                            i().createElement(
                                'div',
                                {
                                    className: 'Announcement_announcement_countdown_ef',
                                    'data-bind-if': '{{model.announcementSecondsToEvent}} > 0',
                                },
                                i().createElement('div', {
                                    className: C()(vu, 'Announcement_announcement_countdown_decoration__left_21'),
                                }),
                                i().createElement('div', {
                                    'data-bind-value': '{{model.announcementSecondsToEvent}}',
                                    className: 'Announcement_announcement_countdown_value_fe',
                                }),
                                i().createElement('div', {
                                    className: C()(vu, 'Announcement_announcement_countdown_decoration__right_19'),
                                }),
                            ),
                        ),
                    ),
                    Su = () =>
                        i().createElement(
                            'div',
                            {
                                className: 'ArenaTimer_base_4c',
                                'data-bind-if': '{{model.arenaTimeLeft}} >= 0',
                                'data-bind-class-toggle': `ArenaTimer_base__phase1_b7: {{model.arenaPhase}} === "${hu.Phase1}";ArenaTimer_base__phase2_0b: {{model.arenaPhase}} === "${hu.Phase2}"`,
                            },
                            i().createElement('div', {
                                className: 'ArenaTimer_value_6a',
                                'data-bind-value':
                                    "String(Math.floor({{model.arenaTimeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{model.arenaTimeLeft}}%60)).padStart(2, '0')",
                            }),
                        ),
                    ku = ({ binding: u, text: e = '', classMix: t, alignment: r = lu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, n) =>
                                      i().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${e}-${n}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = lu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return cu.includes(t)
                                                                ? Au(u)
                                                                : ((u, e = lu.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          i = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Eu(i, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Eu(u, a, lu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              i().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    Lu = 'InfoPlate_command_11',
                    xu = 'InfoPlate_command_border_54',
                    Mu = 'InfoPlate_relative_container_83',
                    Nu = (0, O.observer)(({ className: u }) => {
                        const e = z().model.root.get().isRespawning;
                        return i().createElement(
                            'div',
                            { className: C()('InfoPlate_base_b3', u, !e && 'InfoPlate_notDisplayed_6b') },
                            i().createElement(ku, {
                                text: R.strings.cosmicEvent.battle.announcement.infoPlate.title(),
                                classMix: 'InfoPlate_base_text_15',
                                binding: {
                                    command: i().createElement(
                                        'span',
                                        { className: Mu },
                                        i().createElement(
                                            'div',
                                            { className: C()(xu, 'InfoPlate_scaling_container_4f') },
                                            i().createElement(
                                                'div',
                                                { className: Lu },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: C()(xu, Mu) },
                                            i().createElement(
                                                'div',
                                                { className: Lu },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    });
                let Tu;
                !(function (u) {
                    ((u.Scan = 'scan'),
                        (u.Kill = 'kill'),
                        (u.Pickup = 'pickup'),
                        (u.Ram = 'ram'),
                        (u.Shot = 'shot'),
                        (u.AbilityHit = 'abilityHit'),
                        (u.Assist = 'assist'),
                        (u.FirstBlood = 'firstBlood'),
                        (u.KillStreak = 'killStreak'),
                        (u.PickupMaster = 'pickupMaster'),
                        (u.Revenge = 'revenge'),
                        (u.BoostMe = 'boostMe'));
                })(Tu || (Tu = {}));
                const Pu = 'MessageLog_Message_dot_65';
                let Ou, Ru;
                (!(function (u) {
                    ((u.Waiting = 'Waiting'), (u.Displayed = 'Displayed'), (u.Hidden = 'Hidden'));
                })(Ou || (Ou = {})),
                    (function (u) {
                        ((u.Add = 'Add'), (u.Update = 'Update'));
                    })(Ru || (Ru = {})));
                const Hu = { messages: [], isPolling: !1, scrollIndex: -4 },
                    Iu = [Ou.Displayed, Ou.Hidden],
                    Wu = (u) => {
                        const e =
                                u.messages.length -
                                1 -
                                [...u.messages].reverse().findIndex((u) => Iu.includes(u.state)),
                            t = -1 === e ? 0 : e;
                        return Object.assign({}, u, { scrollIndex: -5 + t + 1 });
                    },
                    Uu = (u) => {
                        const e = Date.now();
                        let t = !1,
                            a = 0,
                            i = 0;
                        const r = u.messages.map((u) => {
                            if (u.state === Ou.Displayed)
                                return u.timeOfDisplay && e - u.timeOfDisplay > 2600
                                    ? Object.assign({}, u, { state: Ou.Hidden, timeOfLeave: e })
                                    : (a++, u);
                            if (u.state === Ou.Waiting) {
                                if (a < 4)
                                    return (
                                        a++,
                                        i++,
                                        Object.assign({}, u, {
                                            state: Ou.Displayed,
                                            timeOfDisplay: e,
                                            displayStaggerAmount: i - 1,
                                        })
                                    );
                                t = !0;
                            }
                            return u;
                        });
                        return Object.assign({}, u, { isPolling: t, messages: r });
                    },
                    Vu = (u, e) =>
                        e.type === Ru.Add
                            ? Wu(
                                  Uu(
                                      Object.assign({}, u, {
                                          messages: [
                                              ...u.messages,
                                              ...e.messages
                                                  .slice(u.messages.length)
                                                  .map((u) => Object.assign({}, u, { state: Ou.Waiting })),
                                          ],
                                      }),
                                  ),
                              )
                            : e.type === Ru.Update
                              ? Wu(Uu(u))
                              : u;
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const ju = {
                        [Ou.Waiting]: 'MessageLog_Message__waiting_b9',
                        [Ou.Displayed]: 'MessageLog_Message__displayed_ff',
                        [Ou.Hidden]: 'MessageLog_Message__hidden_15',
                    },
                    $u = ({ type: u, state: e, marsPoints: t, displayStaggerAmount: a }) => {
                        const r = ju[e],
                            n = e === Ou.Displayed && void 0 !== a ? { animationDelay: 200 + 50 * a + 'ms' } : void 0;
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    'MessageLog_Message_b4',
                                    r,
                                    u === Tu.Kill && 'MessageLog_Message__kill_9d',
                                    u === Tu.KillStreak && 'MessageLog_Message__killStreak_50',
                                    u === Tu.FirstBlood && 'MessageLog_Message__firstBlood_4a',
                                    u === Tu.Revenge && 'MessageLog_Message__revenge_1f',
                                ),
                                style: n,
                            },
                            i().createElement('div', { className: Pu }),
                            i().createElement('div', { className: 'MessageLog_Message_marsPoints_8a' }, t),
                            i().createElement('img', {
                                className: 'MessageLog_Message_icon_35',
                                src: R.images.cosmic_event.gui.maps.icons.battle.messages.icons[u](),
                            }),
                            i().createElement(
                                'div',
                                { className: 'MessageLog_Message_type_14' },
                                R.strings.cosmicEvent.artefact.actionList[u](),
                            ),
                            i().createElement('div', { className: Pu }),
                            i().createElement('div', { className: 'MessageLog_Message_effect_f5', style: n }),
                        );
                    },
                    Ku = (0, O.observer)(({ className: u }) => {
                        const e = z().model.computes.getMessages,
                            t = (0, a.useReducer)(Vu, Hu),
                            r = t[0],
                            n = r.messages,
                            l = r.isPolling,
                            s = r.scrollIndex,
                            o = t[1],
                            E = e();
                        return (
                            (0, a.useEffect)(() => {
                                o({ type: Ru.Add, messages: E });
                            }, [E.length]),
                            (0, a.useEffect)(() => {
                                let u;
                                return (
                                    l &&
                                        (u = setInterval(() => {
                                            o({ type: Ru.Update });
                                        }, 100)),
                                    () => clearInterval(u)
                                );
                            }, [l]),
                            i().createElement(
                                'div',
                                { className: C()('MessageLog_base_2f', u), style: { height: '165rem' } },
                                i().createElement(
                                    'div',
                                    { className: 'MessageLog_messages_43', style: { bottom: 32 * -s + 5 + 'rem' } },
                                    n.map((u, e) => i().createElement($u, Gu({ key: e }, u))),
                                ),
                            )
                        );
                    }),
                    zu = {
                        base: 'PickupNotificationSlot_base_2e',
                        base__black_hole: 'PickupNotificationSlot_base__black_hole_6b',
                        base__rapid_shelling: 'PickupNotificationSlot_base__rapid_shelling_fb',
                        base__power_shot: 'PickupNotificationSlot_base__power_shot_41',
                        base__overcharge: 'PickupNotificationSlot_base__overcharge_a5',
                        blink: 'PickupNotificationSlot_blink_3c',
                        effect: 'PickupNotificationSlot_effect_e4',
                        flash: 'PickupNotificationSlot_flash_03',
                        icon: 'PickupNotificationSlot_icon_49',
                    },
                    qu = ({ ability: u }) =>
                        i().createElement(
                            'div',
                            { className: C()(zu.base, zu[`base__${u}`]) },
                            i().createElement('div', { className: zu.icon }),
                            i().createElement('div', { className: zu.effect }),
                        ),
                    Yu = (0, O.observer)(() => {
                        const u = z().model.computes.getAbility(3);
                        return void 0 === u || (null == u ? void 0 : u.ability) === uu
                            ? null
                            : i().createElement(qu, { ability: u.ability });
                    }),
                    Xu = {
                        base: 'PlayerList_base_97',
                        players: 'PlayerList_players_e3',
                        corner: 'PlayerList_corner_a9',
                        corner__top_left: 'PlayerList_corner__top_left_cc',
                        corner__top_right: 'PlayerList_corner__top_right_c0',
                        corner__bottom_right: 'PlayerList_corner__bottom_right_38',
                        corner__bottom_left: 'PlayerList_corner__bottom_left_5a',
                        playerEntry: 'PlayerList_playerEntry_ac',
                        playerEntrySelected: 'PlayerList_playerEntrySelected_37',
                        playerRank: 'PlayerList_playerRank_66',
                        playerContainer: 'PlayerList_playerContainer_65',
                        playerVehicle: 'PlayerList_playerVehicle_1a',
                        playerVehicleNew: 'PlayerList_playerVehicleNew_e3',
                        playerName: 'PlayerList_playerName_a7',
                        playerClan: 'PlayerList_playerClan_d6',
                        playerScore: 'PlayerList_playerScore_d6',
                        playerRevenge: 'PlayerList_playerRevenge_46',
                        playerList: 'PlayerList_playerList_c6',
                    },
                    Zu = () =>
                        i().createElement(
                            'div',
                            { className: Xu.base },
                            i().createElement(
                                'div',
                                { className: Xu.players },
                                i().createElement(
                                    'div',
                                    {
                                        className: Xu.playerEntry,
                                        'data-bind-class-toggle':
                                            Xu.playerEntrySelected + ': {{player.value.name}} === model.playerName',
                                        'data-bind-for': 'index, player: {{model.playerList}}',
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: Xu.playerRank,
                                            'data-bind-class-toggle':
                                                Xu.playerRankSelected + ': {{player.value.name}} === model.playerName',
                                            'data-bind-value': '{{index}} + 1',
                                        },
                                        '1',
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Xu.playerContainer },
                                        i().createElement('div', {
                                            className: Xu.playerVehicle,
                                            'data-bind-class-toggle':
                                                Xu.playerVehicleNew + ': {{player.value.vehicle}} === 2',
                                        }),
                                        i().createElement('div', {
                                            className: Xu.playerName,
                                            'data-bind-value': '{{player.value.name}}',
                                        }),
                                        i().createElement('div', {
                                            className: Xu.playerClan,
                                            'data-bind-value':
                                                "{{player.value.clanAbbrev}} && ('[' + {{player.value.clanAbbrev}} +']')",
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Xu.playerScore, 'data-bind-value': '{{player.value.score}}' },
                                        '0',
                                    ),
                                    i().createElement('div', {
                                        className: Xu.playerRevenge,
                                        'data-bind-if': '{{player.value.revenge}}',
                                    }),
                                ),
                            ),
                            i().createElement('div', { className: C()(Xu.corner, Xu.corner__top_left) }),
                            i().createElement('div', { className: C()(Xu.corner, Xu.corner__top_right) }),
                            i().createElement('div', { className: C()(Xu.corner, Xu.corner__bottom_left) }),
                            i().createElement('div', { className: C()(Xu.corner, Xu.corner__bottom_right) }),
                        ),
                    Qu = ({ className: u }) => {
                        const e = 'Math.max(Math.min(1/{{model.poiMarker.distance}}*100,1), 0.2)';
                        return i().createElement(
                            'div',
                            {
                                className: C()('PoiMarker_base_ee', u),
                                'data-bind-style-left': "parseFloat({{model.poiMarker.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{model.poiMarker.posy}})+'rem'",
                                'data-bind-class-toggle':
                                    'PoiMarker_base__onScreen_c5: {{model.poiMarker.isVisible}};PoiMarker_base__visible_52: {{model.showPoiMarker}} && !{{model.isRespawning}};PoiMarker_base__tooClose_c6: {{model.poiMarker.distance}} < 100',
                            },
                            i().createElement('div', {
                                className: 'PoiMarker_icon_1b',
                                'data-bind-style-transform2d': `${e}+', 0, 0,'+${e}+',0,0'`,
                            }),
                            i().createElement('div', {
                                className: 'PoiMarker_direction_2b',
                                'data-bind-style-transform-rotate': 'Math.round({{model.poiMarker.angle}})',
                            }),
                            i().createElement('div', {
                                className: 'PoiMarker_distance_f5',
                                'data-bind-value': `String({{model.poiMarker.distance}})+"${R.strings.cosmicEvent.battle.distanceUnit()}"`,
                            }),
                        );
                    },
                    Ju = (0, O.observer)(() => {
                        const u = z().model.computes.getAbility(3);
                        return void 0 === u || !u.isActive || (u.ability !== au && u.ability !== tu)
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: 'AbilityHint_base_3e' },
                                  i().createElement(ku, {
                                      classMix: 'AbilityHint_text_48',
                                      text: R.strings.cosmicEvent.battle.abilityHint.$dyn(u.ability),
                                      binding: {
                                          seconds: i().createElement('span', {
                                              className: 'AbilityHint_seconds_41',
                                              'data-bind-value': '{{model.abilityDuration}}',
                                          }),
                                      },
                                  }),
                              );
                    }),
                    ue = () =>
                        i().createElement(
                            'div',
                            { className: 'VehicleMarkers_base_62' },
                            i().createElement(
                                'div',
                                {
                                    className: 'VehicleMarkers_vehicleMarker_26',
                                    'data-bind-style-left': "{{marker.value.posx}}+'rem'",
                                    'data-bind-style-top': "{{marker.value.posy}}+'rem'",
                                    'data-bind-style-transform2d':
                                        "{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0,'+{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0'",
                                    'data-bind-for': 'index, marker: {{model.vehicleMarkers}}',
                                },
                                i().createElement(
                                    'div',
                                    {
                                        className: 'VehicleMarkers_vehicleMarker_text_df',
                                        'data-bind-value': '{{marker.value.playerName}}',
                                        'data-bind-class-toggle':
                                            'VehicleMarkers_vehicleMarker__visible_17: {{marker.value.isVisible}}',
                                    },
                                    ' ',
                                ),
                            ),
                        ),
                    ee = 'Crosshair_reloading_cb',
                    te = 'Crosshair_reloading_bar_9d',
                    ae = 'Crosshair_reloading_effect_b8',
                    ie = 'Crosshair_corner_66',
                    re = (0, O.observer)(() => {
                        const u = z().model,
                            e = u.reloadTimes.reloadTime.get(),
                            t = u.reloadTimes.reloadTimeLeft.get(),
                            r = (0, a.useState)(t),
                            n = r[0],
                            l = r[1],
                            s = 0 === t,
                            o = u.computes.getAbility(3),
                            E = u.computes.getAbility(2),
                            A = null == o ? void 0 : o.isActive,
                            c = null == E ? void 0 : E.isActive,
                            F = u.selectedVehicleID,
                            _ = Number(F) === nu.Second;
                        (0, a.useEffect)(() => {
                            l(t);
                            const u = Date.now(),
                                e = setInterval(() => {
                                    const a = Date.now() - u,
                                        i = t - a / 1e3;
                                    return i <= 0 ? (clearInterval(e), l(0)) : l(Math.ceil(10 * i) / 10);
                                }, 100);
                            return () => clearInterval(e);
                        }, [t]);
                        const d = (e - n) / e,
                            D = 10 * Math.floor(10 * d) + '%',
                            m = (n > 0 ? n : e).toFixed(1);
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    s && 'Crosshair_reloading__ready_9d',
                                    _ && 'Crosshair_reloading__second_6d',
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: C()(ee, 'Crosshair_reloading__left_9d') },
                                i().createElement('div', { className: te, style: { height: D } }),
                                i().createElement('div', { className: ae }),
                            ),
                            i().createElement(
                                'div',
                                { className: C()(ee, 'Crosshair_reloading__right_d9') },
                                i().createElement('div', { className: te, style: { height: D } }),
                                i().createElement('div', { className: ae }),
                            ),
                            _ &&
                                i().createElement(
                                    'div',
                                    { className: C()(ee, 'Crosshair_reloading__bottom_6a') },
                                    i().createElement('div', { className: te, style: { height: D } }),
                                    i().createElement('div', { className: ae }),
                                ),
                            i().createElement(
                                'div',
                                {
                                    className: C()(
                                        'Crosshair_reloading_timeLeft_85',
                                        A &&
                                            (null == o ? void 0 : o.ability) === au &&
                                            'Crosshair_reloading_timeLeft__rapidShelling_4a',
                                        A &&
                                            (null == o ? void 0 : o.ability) === iu &&
                                            'Crosshair_reloading_timeLeft__powerShot_9a',
                                        c &&
                                            (null == E ? void 0 : E.ability) === ru &&
                                            'Crosshair_reloading_timeLeft__stunShot_a9',
                                    ),
                                },
                                m,
                            ),
                        );
                    }),
                    ne = {
                        base: 'Aim_base_d6',
                        base__secondVehicle: 'Aim_base__secondVehicle_6f',
                        centralDot: 'Aim_centralDot_44',
                        base__ready: 'Aim_base__ready_38',
                        corner: 'Aim_corner_9c',
                        corner__top_left: 'Aim_corner__top_left_46',
                        corner__top_right: 'Aim_corner__top_right_37',
                        corner__top_center: 'Aim_corner__top_center_37',
                        corner__bottom_right: 'Aim_corner__bottom_right_a2',
                        corner__bottom_left: 'Aim_corner__bottom_left_d9',
                        killStreakHint: 'Aim_killStreakHint_1e',
                        killStreakHint_text: 'Aim_killStreakHint_text_b5',
                        killStreakHint_text__animStart: 'Aim_killStreakHint_text__animStart_9b',
                        killStreakHint_text__animEnd: 'Aim_killStreakHint_text__animEnd_04',
                        hideFrames: 'Aim_hideFrames_8e',
                        leftFrames: 'Aim_leftFrames_50',
                        killStreakHint_arrow: 'Aim_killStreakHint_arrow_23',
                        killStreakHint_arrow__right: 'Aim_killStreakHint_arrow__right_48',
                        killStreakHint_arrow__animStart: 'Aim_killStreakHint_arrow__animStart_22',
                        killStreakHint_arrow__animEnd: 'Aim_killStreakHint_arrow__animEnd_27',
                        killStreak: 'Aim_killStreak_ec',
                        killStreak_icon: 'Aim_killStreak_icon_f2',
                        killStreak_text: 'Aim_killStreak_text_37',
                        killStreak_text_anim: 'Aim_killStreak_text_anim_9a',
                        killStreak_text_anim__animStart: 'Aim_killStreak_text_anim__animStart_ca',
                        killStreak_text_anim__animEnd: 'Aim_killStreak_text_anim__animEnd_ec',
                    },
                    le = (0, O.observer)(({ className: u }) => {
                        const e = z().model,
                            t = e.computes,
                            r = Number(e.selectedVehicleID) === nu.First,
                            n = (0, a.useState)(0),
                            l = n[0],
                            s = n[1],
                            o = t.getKillStreak(),
                            E = (u) => C()(ne[u], o !== l && ne[`${u}__animStart`], o === l && ne[`${u}__animEnd`]),
                            A = E('killStreak_text_anim'),
                            c = E('killStreakHint_text'),
                            F = E('killStreakHint_arrow'),
                            _ = C()(F, ne.killStreakHint_arrow__right);
                        return (
                            (0, a.useEffect)(() => {
                                o >= 2 &&
                                    ((u) => {
                                        let e,
                                            t = null;
                                        t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null), (e = void s(o)));
                                            });
                                        });
                                    })();
                            }, [o]),
                            i().createElement(
                                'div',
                                {
                                    className: C()(ne.base, !r && ne.base__secondVehicle, u),
                                    'data-bind-style-left': '{{model.aim.posx}}',
                                    'data-bind-style-top': '{{model.aim.posy}}',
                                    'data-bind-class-toggle': ne.base__ready + ': {{model.reloadTimeLeft}} === 0',
                                },
                                i().createElement('div', { className: ne.centralDot }),
                                i().createElement(re, null),
                                r
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement('div', { className: C()(ne.corner, ne.corner__top_left) }),
                                          i().createElement('div', { className: C()(ne.corner, ne.corner__top_right) }),
                                      )
                                    : i().createElement('div', { className: C()(ne.corner, ne.corner__top_center) }),
                                i().createElement('div', { className: C()(ne.corner, ne.corner__bottom_left) }),
                                i().createElement('div', { className: C()(ne.corner, ne.corner__bottom_right) }),
                                o >= 2 &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(
                                            'div',
                                            { className: ne.killStreakHint },
                                            i().createElement('div', { className: F }),
                                            i().createElement(ku, {
                                                text: R.strings.cosmicEvent.battle.crosshair.killStreak(),
                                                classMix: c,
                                                binding: { count: o },
                                            }),
                                            i().createElement('div', { className: _ }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: ne.killStreak },
                                            i().createElement('div', { className: ne.killStreak_icon }),
                                            i().createElement(
                                                'div',
                                                { className: ne.killStreak_text },
                                                'x',
                                                i().createElement('div', { className: A }, o),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    }),
                    se = (0, O.observer)(({ className: u }) => {
                        const e = z().model.selectedVehicleID,
                            t = Number(e) === nu.First;
                        return i().createElement(
                            'div',
                            {
                                className: C()('Crosshair_base_64', !t && 'Crosshair_base__secondVehicle_b6', u),
                                'data-bind-style-left': "parseFloat({{model.crosshair.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{model.crosshair.posy}})+'rem'",
                            },
                            i().createElement('div', { className: 'Crosshair_centralDot_16' }),
                            t
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('div', { className: C()(ie, 'Crosshair_corner__top_left_86') }),
                                      i().createElement('div', {
                                          className: C()(ie, 'Crosshair_corner__top_right_04'),
                                      }),
                                  )
                                : i().createElement('div', { className: C()(ie, 'Crosshair_corner__top_center_31') }),
                            i().createElement('div', { className: C()(ie, 'Crosshair_corner__bottom_left_e3') }),
                            i().createElement('div', { className: C()(ie, 'Crosshair_corner__bottom_right_99') }),
                        );
                    }),
                    oe = 'CosmicReactHudApp_hideWhenRespawning_7f',
                    Ee = 'CosmicReactHudApp_hideWhenTargeting_45',
                    Ae = () =>
                        i().createElement(
                            'div',
                            {
                                className: 'CosmicReactHudApp_base_c3',
                                'data-bind-class-toggle':
                                    'CosmicReactHudApp_base__respawning_50: {{model.isRespawning}} === true;CosmicReactHudApp_base__targeting_03: {{model.isTargeting}} === true;',
                            },
                            i().createElement(Ju, null),
                            i().createElement(Qu, { className: oe }),
                            i().createElement(le, { className: C()(oe, Ee) }),
                            i().createElement(ue, null),
                            i().createElement(se, { className: C()(oe, Ee) }),
                            i().createElement(Zu, null),
                            i().createElement(Su, null),
                            i().createElement(wu, null),
                            i().createElement(Ku, null),
                            i().createElement(Yu, null),
                            i().createElement(Cu, { className: oe }),
                            i().createElement(Nu, null),
                        );
                engine.whenReady.then(() => {
                    (document.documentElement.setAttribute('keep-esc-propagation', ''),
                        T().render(
                            i().createElement(M, null, i().createElement(K, null, i().createElement(Ae, null))),
                            document.getElementById('root'),
                        ));
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
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, a] = deferred[s], r = !0, n = 0; n < e.length; n++)
                        (!1 & a || i >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[n]))
                            ? e.splice(n--, 1)
                            : ((r = !1), a < i && (i = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var l = t();
                        void 0 !== l && (u = l);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, a];
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
            var u = { 775: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        i,
                        [r, n, l] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        ((i = r[s]), __webpack_require__.o(u, i) && u[i] && u[i][0](), (u[i] = 0));
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5541));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
