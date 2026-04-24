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
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => n }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            i = s[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            a(),
                                            () => {
                                                r &&
                                                    (i(),
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
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                t.d(u, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
                const r = {
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function A() {
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
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    n = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => n.Z, B3: () => c, Z5: () => s, B0: () => o, ry: () => B, Sy: () => p });
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
                var n = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            D(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
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
                                })(u, F);
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
                    p = () => g(o.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: C(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            6099: (e, u, t) => {
                'use strict';
                var a = t(6179),
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
                var s = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
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
                })(o || (o = {}));
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    m = Object.assign({ width: E, height: d }, l(E, d, i)),
                    _ = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
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
                        const r = (0, a.useContext)(_),
                            s = r.extraLarge,
                            i = r.large,
                            o = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            d = r.largeWidth,
                            m = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            B = r.largeHeight,
                            g = r.mediumHeight,
                            p = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && i) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return n(u, t, b);
                            if (t.largeWidth && d) return n(u, t, b);
                            if (t.mediumWidth && m) return n(u, t, b);
                            if (t.smallWidth && F) return n(u, t, b);
                            if (t.extraSmallWidth && D) return n(u, t, b);
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
                ((F.defaultProps = {
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
                    (0, a.memo)(F));
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(_),
                        t = (0, a.useState)(u),
                        n = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: a }, l(t, a, i)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const E = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(_.Provider, { value: E }, e);
                });
                var C = t(6483),
                    B = t.n(C),
                    g = t(926),
                    p = t.n(g);
                let h, b, f;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(f || (f = {})));
                const v = () => {
                        const e = (0, a.useContext)(_),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
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
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_WIDTH,
                        [b.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [b.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_HEIGHT,
                        [f.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [f.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL,
                        [h.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [h.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [h.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    k = (e) => {
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
                        const n = v(),
                            s = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return r().createElement('div', S({ className: B()(t, x[s], T[i], P[o]) }, a), u);
                    },
                    y = ['children'],
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
                            })(e, y);
                        return r().createElement(D, null, r().createElement(k, t, u));
                    };
                var L = t(493),
                    N = t.n(L);
                function O(e) {
                    engine.call('PlaySound', e);
                }
                const I = {
                        playHighlight() {
                            O('highlight');
                        },
                        playClick() {
                            O('play');
                        },
                        playYes() {
                            O('yes1');
                        },
                    },
                    U = {
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
                    W = [
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class H extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && O(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && O(this.props.soundClick));
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
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
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
                                })(e, W)),
                            m = B()(U.base, U[`base__${s}`], U[`base__${n}`], null == i ? void 0 : i.base),
                            _ = B()(U.icon, U[`icon__${s}`], U[`icon__${n}`], null == i ? void 0 : i.icon),
                            A = B()(U.glow, null == i ? void 0 : i.glow),
                            F = B()(U.caption, U[`caption__${s}`], null == i ? void 0 : i.caption),
                            D = B()(U.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            $(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && r().createElement('div', { className: U.shine }),
                            r().createElement('div', { className: _ }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                H.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const G = (e, u) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(a));
                    };
                };
                var z = t(5521),
                    j = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = z.n.NONE, u = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== z.n.NONE)
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
                var V = t(3403);
                const X = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    K = (e, u) => ('string' == typeof u ? e.$dyn(u) : u.reduce((e, u) => e.$dyn(u), e)),
                    Q = (e, { poFileName: u, assetsPointer: t, isSubMode: a } = {}) => {
                        const r = u ? R.strings.$dyn(u) : R.strings.fun_random;
                        if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
                        const n = a ? 'sub_modes' : 'modes',
                            s = (t ? r.$dyn(n)[t] : r) || r.$dyn(n)[void 0];
                        return e
                            ? { staticTexts: K(r, e), dynamicTexts: K(s, e) }
                            : { staticTexts: r, dynamicTexts: s };
                    };
                class Z extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? j.B3.GOLD : j.B3.INTEGRAL;
                        const u = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let J, ee, ue, te, ae, re, ne;
                ((Z.defaultProps = { format: 'integral' }),
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
                    })(J || (J = {})),
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
                    })(ee || (ee = {})),
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
                    })(ue || (ue = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(te || (te = {})),
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
                    })(ae || (ae = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(re || (re = {})),
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
                    })(ne || (ne = {})));
                const se = [
                        J.Items,
                        J.Equipment,
                        J.Xp,
                        J.XpFactor,
                        J.Blueprints,
                        J.BlueprintsAny,
                        J.Goodies,
                        J.Berths,
                        J.Slots,
                        J.Tokens,
                        J.CrewSkins,
                        J.CrewBooks,
                        J.Customizations,
                        J.CreditsFactor,
                        J.TankmenXp,
                        J.TankmenXpFactor,
                        J.FreeXpFactor,
                        J.BattleToken,
                        J.PremiumUniversal,
                        J.NaturalCover,
                        J.BpCoin,
                        J.BattlePassSelectToken,
                        J.BattlaPassFinalAchievement,
                        J.BattleBadge,
                        J.BonusX5,
                        J.CrewBonusX3,
                        J.NewYearFillers,
                        J.NewYearInvoice,
                        J.EpicSelectToken,
                        J.Comp7TokenWeeklyReward,
                        J.Comp7TokenCouponReward,
                        J.BattleBoosterGift,
                        J.CosmicLootboxCommon,
                        J.CosmicLootboxSilver,
                        J.SelectableBonus,
                        J.GoldenTicket,
                        J.PostStamp,
                        J.PremiumPlusUniversal,
                    ],
                    ie = [J.Gold, J.Credits, J.Crystal, J.FreeXp],
                    oe = [J.BattlePassPoints],
                    le = [J.PremiumPlus, J.Premium];
                let ce;
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
                })(ce || (ce = {}));
                const Ee = ['engravings', 'backgrounds'],
                    de = ['engraving', 'background'],
                    me = (e, u = ue.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case ue.S600x450:
                                        return 'c_600x450';
                                    case ue.S400x300:
                                        return 'c_400x300';
                                    case ue.S296x222:
                                        return 'c_296x222';
                                    case ue.S232x174:
                                        return 'c_232x174';
                                    case ue.Big:
                                        return 'c_80x80';
                                    case ue.Small:
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
                                        case ue.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case ue.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Ee[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(de[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case ue.S600x450:
                                            return 'c_600x450';
                                        case ue.S400x300:
                                            return 'c_400x300';
                                        case ue.S296x222:
                                            return 'c_296x222';
                                        case ue.S232x174:
                                            return 'c_232x174';
                                        case ue.S180x135:
                                            return 'big';
                                        case ue.Big:
                                        case ue.S80x80:
                                            return 'c_80x80';
                                        case ue.Small:
                                        case ue.S48x48:
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
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case ue.Mini:
                                            return ce.s32;
                                        case ue.Small:
                                        case ue.S48x48:
                                            return ce.s48;
                                        case ue.S80x80:
                                        case ue.Big:
                                            return ce.s80;
                                        case ue.S128x100:
                                            return ce.s116;
                                        case ue.S180x135:
                                        case ue.S232x174:
                                        case ue.S296x222:
                                            return ce.s296;
                                        case ue.S400x300:
                                            return ce.s400;
                                        case ue.S600x450:
                                            return ce.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    _e = (e, u, t) => {
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
                    };
                function Ae(e) {
                    return e;
                }
                function Fe() {
                    return !1;
                }
                console.log;
                var De = t(9174);
                function Ce(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                function ge(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var pe = t(3946);
                const he = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Be,
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
                                                const i = (e) => {
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
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (r.set(l, t), e && t(i(n)), l);
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
                                                                                    return Ce(e, u);
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
                                                                                          ? Ce(e, u)
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
                                            })(t),
                                            i =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : i.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e, readByPath: u }) => {
                                                const t = {
                                                        progressionState: e.object('state'),
                                                        condition: e.object('condition'),
                                                        currentStage: e.object('currentStage'),
                                                        cardList: e.array('cardList', []),
                                                        assetsPointer: e.object('assetsPointer'),
                                                    },
                                                    a = (0, pe.Om)(() => ge(t.cardList.get(), Ae), { equals: Fe });
                                                return Object.assign({}, t, {
                                                    computes: { getCards: a },
                                                    read: {
                                                        readRewards: () =>
                                                            ge(u('currentStage.rewards'), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: me(e),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((u = e.name),
                                                                        se.includes(u)
                                                                            ? te.MULTI
                                                                            : ie.includes(u)
                                                                              ? te.CURRENCY
                                                                              : oe.includes(u)
                                                                                ? te.NUMBER
                                                                                : le.includes(u)
                                                                                  ? te.PREMIUM_PLUS
                                                                                  : te.STRING),
                                                                    tooltipArgs: _e(
                                                                        { tooltipId: e.tooltipId },
                                                                        Number(e.tooltipContentId),
                                                                    ),
                                                                };
                                                                var u;
                                                            }),
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = De.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, De.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = De.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, De.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = De.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, De.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = De.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, De.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
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
                                            d = { mode: e, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && a ? a.controls(d) : u(d),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    m = d[0],
                                    _ = d[1],
                                    A = (0, a.useState)(() => c(e, n, o)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(m, n, o)) : (E.current = !0);
                                    }, [o, m, n]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        itemClicked: e.createCallback((e) => ({ subModeId: e }), 'onItemClicked'),
                        infoClicked: e.createCallback((e) => ({ subModeId: e }), 'onInfoClicked'),
                        backBtnClicked: e.createCallbackNoArgs('onBackBtnClicked'),
                        close: e.createCallbackNoArgs('onClosed'),
                    })),
                    be = he[0],
                    fe = he[1];
                let ve;
                !(function (e) {
                    ((e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable'));
                })(ve || (ve = {}));
                const we = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let Se, xe;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Se || (Se = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(xe || (xe = {})));
                const Te = ({ size: e = Se.Default, classMix: u }) =>
                        r().createElement('div', { className: B()(we.background, we[`background__${e}`], u) }),
                    Pe = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    ke = ({ size: e }) => {
                        const u = B()(Pe.base, Pe[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    ye = {
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
                    Re = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const i = B()(
                                    ye.base,
                                    ye[`base__${e}`],
                                    t && ye.base__disabled,
                                    n && ye.base__finished,
                                    s && ye.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return r().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                r().createElement('div', { className: ye.pattern }),
                                r().createElement('div', { className: ye.gradient }),
                                o && r().createElement(ke, { size: e }),
                            );
                        },
                    ),
                    Me = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            r().createElement(Re, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    };
                let Le, Ne;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Le || (Le = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Ne || (Ne = {})));
                const Oe = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                E = (0, a.useState)(Ne.Idle),
                                d = E[0],
                                m = E[1],
                                _ = d === Ne.In,
                                A = d === Ne.End,
                                F = d === Ne.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (F && !t)
                                    return G(() => {
                                        D(Ne.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, a.useEffect)(() => {
                                    if (_)
                                        return G(() => {
                                            (o && o(), D(Ne.End));
                                        }, e + u);
                                }, [D, _, o, u, e]));
                            const C = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      r().createElement(
                                          'div',
                                          { style: F ? C : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(ke, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Ie = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Re, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    r().createElement(Oe, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Ue = (e) => (e ? { left: 0 } : { right: 0 }),
                    We = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    $e = (e) => ({ transitionDuration: `${e}ms` }),
                    He = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = i < n,
                                d = (0, a.useState)(Le.Idle),
                                m = d[0],
                                _ = d[1],
                                A = m === Le.End,
                                F = m === Le.Idle,
                                D = m === Le.Grow,
                                C = m === Le.Shrink,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                p = (0, a.useCallback)(
                                    (e, u) =>
                                        G(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(Le.Grow, u)
                                        : D
                                          ? p(Le.Shrink, e)
                                          : C
                                            ? p(Le.End, e)
                                            : void (A && o && o());
                            }, [p, t, A, D, F, C, o, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, $e(e), Ue(E)), [E, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, $e(e), Ue(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, We(E, n), $e(e)), [n, E, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, We(E, n), $e(e)),
                                    [n, E, i, e],
                                );
                            if (A) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: F ? f : v, className: w },
                                r().createElement(
                                    'div',
                                    { style: C ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(ke, { size: s }),
                                ),
                            );
                        },
                    ),
                    Ge = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                _ = d[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === Le.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Re, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? D : F,
                                }),
                                t >= 0 &&
                                    r().createElement(He, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ze = ['onComplete', 'onEndAnimation'];
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
                const qe = (0, a.memo)((e) => {
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
                            })(e, ze);
                        const s = (0, a.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== i && o(e), e && u && u(), t && t());
                            }, [i, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case xe.Simple:
                                return r().createElement(Ie, je({}, n, { onEndAnimation: l, isComplete: i }));
                            case xe.Growing:
                                return r().createElement(Ge, je({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Ye = ['onEndAnimation'];
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
                const Xe = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Ye);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        r().createElement(qe, Ve({}, t, { onEndAnimation: s, key: `${i}-${t.to}`, from: i }))
                    );
                });
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
                const Qe = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return r().createElement(Me, {
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
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? r().createElement(Xe, c)
                                : r().createElement(qe, Ke({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Ze = (e) => ({
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
                    Je = (e, u, t) => (t < e ? e : t > u ? u : t),
                    eu = (e, u, t) => ('number' == typeof t ? (Je(0, u, t) / u) * 100 : e),
                    uu = {
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
                    tu = {
                        freezed: !1,
                        withStack: !1,
                        type: xe.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    au = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = uu,
                            size: t = Se.Default,
                            animationSettings: n = tu,
                            disabled: s = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: o,
                            value: l,
                            deltaFrom: c,
                            lineRef: E,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (Je(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: eu(a, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return r().createElement(
                                'div',
                                { className: B()(we.base, we[`base__${t}`]), style: Ze(u) },
                                !i && r().createElement(Te, { size: t, classMix: o }),
                                r().createElement(Qe, {
                                    size: t,
                                    lineRef: E,
                                    disabled: s,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                let ru;
                function nu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ru || (ru = {}));
                const su = (e) => e.replace(/&nbsp;/g, ' '),
                    iu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ou = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    lu = (e, u, t = ru.left) => e.split(u).reduce(t === ru.left ? iu : ou, []),
                    cu = (() => {
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
                    Eu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    du = [
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
                const _u = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Au = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, du);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
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
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (_u(t, _, { isMouseEvent: !0, on: !0, arguments: mu(r) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, _, r, b, B]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        _u(t, _, { on: !1 }, b),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, b, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
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
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Fu = ['children'];
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const Cu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Fu);
                        return r().createElement(
                            Au,
                            Du(
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
                    Bu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const pu = R.views.common.tooltip_window.simple_tooltip_content,
                    hu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Bu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, s, o]);
                        return r().createElement(
                            Au,
                            gu(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? pu.SimpleTooltipHtmlContent('resId') : pu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const fu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(hu, u, a);
                        const n = u.contentId,
                            s = u.args,
                            i = null == s ? void 0 : s.contentId;
                        return n || i
                            ? r().createElement(Au, bu({}, u, { contentId: n || i }), a)
                            : r().createElement(Cu, u, a);
                    },
                    vu = {
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
                    wu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = ue.Big,
                        special: n,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ae.BATTLE_BOOSTER:
                                    case ae.BATTLE_BOOSTER_REPLACE:
                                        return re.BATTLE_BOOSTER;
                                }
                            })(n),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ae.BATTLE_BOOSTER:
                                        return ne.BATTLE_BOOSTER;
                                    case ae.BATTLE_BOOSTER_REPLACE:
                                        return ne.BATTLE_BOOSTER_REPLACE;
                                    case ae.BUILT_IN_EQUIPMENT:
                                        return ne.BUILT_IN_EQUIPMENT;
                                    case ae.EQUIPMENT_PLUS:
                                        return ne.EQUIPMENT_PLUS;
                                    case ae.EQUIPMENT_TROPHY_BASIC:
                                        return ne.EQUIPMENT_TROPHY_BASIC;
                                    case ae.EQUIPMENT_TROPHY_UPGRADED:
                                        return ne.EQUIPMENT_TROPHY_UPGRADED;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ne.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ae.PROGRESSION_STYLE_UPGRADED_1:
                                        return ne.PROGRESSION_STYLE_UPGRADED_1;
                                    case ae.PROGRESSION_STYLE_UPGRADED_2:
                                        return ne.PROGRESSION_STYLE_UPGRADED_2;
                                    case ae.PROGRESSION_STYLE_UPGRADED_3:
                                        return ne.PROGRESSION_STYLE_UPGRADED_3;
                                    case ae.PROGRESSION_STYLE_UPGRADED_4:
                                        return ne.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case te.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case te.CURRENCY:
                                    case te.NUMBER:
                                        return r().createElement(Z, { format: 'integral', value: Number(e) });
                                    case te.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return r().createElement(
                            'div',
                            { className: B()(vu.base, vu[`base__${a}`], l), style: o },
                            r().createElement(
                                fu,
                                { tooltipArgs: E, className: vu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: B()(vu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: B()(vu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: B()(vu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            r().createElement('div', {
                                                className: B()(vu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    vu.info,
                                                    vu[`info__${e}`],
                                                    i === te.MULTI && vu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    fu,
                                    { tooltipArgs: d },
                                    r().createElement('div', {
                                        className: B()(vu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const xu = r().memo(
                        ({
                            data: e,
                            size: u = ue.Big,
                            isVertical: t = !1,
                            count: n,
                            classMix: s,
                            rewardItemClassMix: i,
                            boxRewardTooltip: o,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, a.useMemo)(
                                    () =>
                                        n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : '',
                                    [n, e.length, u],
                                ),
                                E =
                                    l ||
                                    ((d = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (m = { count: e.length - (n || 0) }),
                                    d.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(m[e.slice(u, -u)]);
                                    }));
                            var d, m;
                            const _ = B()('Rewards_base_26', t && 'Rewards_base__vertical_9f', s),
                                A = B()('Rewards_reward_7b', t && 'Rewards_reward__vertical_c6', i);
                            return r().createElement(
                                'div',
                                { className: _ },
                                c
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, n)
                                              .map((e, t) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: t, className: A },
                                                      r().createElement(wu, Su({ size: u }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: A },
                                              r().createElement(wu, {
                                                  name: 'more',
                                                  image: c,
                                                  size: u,
                                                  value: E,
                                                  tooltipArgs: o,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) =>
                                          r().createElement(
                                              'div',
                                              { key: t, className: A },
                                              r().createElement(wu, Su({ size: u }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Tu = ({ binding: e, text: u = '', classMix: t, alignment: n = ru.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ru.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Eu.includes(t)
                                                                ? cu(e)
                                                                : ((e, u = ru.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = su(e);
                                                                      return (
                                                                          lu(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(lu(e, a, ru.left))),
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
                              ),
                    Pu = {
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
                    ku = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    yu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ru = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Mu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, a.useMemo)(() => u || {}, [u]);
                        let i = ku.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                a = yu.exec(t),
                                c = Ru.exec(t),
                                E = i[1];
                            if (a && c) {
                                const e = a[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (s[i] = Pu[e]
                                        ? r().createElement(
                                              'span',
                                              { className: Pu[e] },
                                              r().createElement(Tu, { text: E, binding: u }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: n(e) },
                                              r().createElement(Tu, { text: E, binding: u }),
                                          )));
                            }
                            i = ku.exec(e);
                        }
                        return r().createElement(Tu, { text: o, classMix: t, binding: s });
                    });
                var Lu = t(9459),
                    Nu = t(9762),
                    Ou = t(6457);
                let Iu, Uu;
                (!(function (e) {
                    ((e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState'));
                })(Iu || (Iu = {})),
                    (function (e) {
                        ((e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState'));
                    })(Uu || (Uu = {})));
                const Wu = (e) => e === ve.ACTIVE_RESETTABLE || e === ve.ACTIVE_FINAL,
                    $u = (e) => Wu(e.status),
                    Hu = (e) => !Wu(e.status),
                    Gu = (e, u) => e.status !== u.status && zu(e, u),
                    zu = (e, u) =>
                        u.stage === e.stage &&
                        u.currentPoints === e.currentPoints &&
                        u.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    ju = (e, u) =>
                        Wu(u.status) &&
                        ((1 === u.stage && 0 === u.currentPoints) ||
                            (u.stage === e.stage && e.maximumPoints !== u.maximumPoints)),
                    qu = (e, u) =>
                        u.stage === e.stage &&
                        u.currentPoints === e.currentPoints &&
                        u.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Yu = (e, u) =>
                        u.stage === e.stage &&
                        u.currentPoints !== e.currentPoints &&
                        u.maximumPoints === e.maximumPoints,
                    Vu = (e, u) => u.stage > e.stage && e.currentPoints < e.maximumPoints,
                    Xu = (e, u) => u.stage > e.stage && e.currentPoints === e.maximumPoints,
                    Ku = (e, u) => u.stage < e.stage && e.currentPoints > 0,
                    Qu = (e, u) => u.stage < e.stage && 0 === e.currentPoints,
                    Zu = (e, u) => e.status !== u.status && Wu(u.status),
                    Ju = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && O('ev_fep_progress_bar');
                    },
                    et = ({ className: e, isReady: u = !1 }) =>
                        r().createElement('div', {
                            className: B()('ProgressMark_base_f8', u && 'ProgressMark_base__ready_ff', e),
                        }),
                    ut = {
                        freezed: !1,
                        withStack: !1,
                        type: xe.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    tt = (0, V.Pi)(({ onStatusUpdate: e }) => {
                        const u = fe().model,
                            t = u.currentStage.get(),
                            n = t.currentPoints,
                            s = t.maximumPoints,
                            i = u.progressionState.get(),
                            o = i.status,
                            l = i.currentStage,
                            c = u.condition.get().text,
                            E = Q(['modeSubSelector', 'progression'], { assetsPointer: u.assetsPointer }).dynamicTexts,
                            d = (0, a.useState)(u.read.readRewards),
                            m = d[0],
                            _ = d[1],
                            A = () => {
                                _(u.read.readRewards());
                            },
                            F = r().useMemo(() => {
                                return (
                                    'subMode-fsm',
                                    (u = {
                                        status: o,
                                        stage: l,
                                        currentPoints: n,
                                        maximumPoints: s,
                                        earnedPoints: 0,
                                        isSoundEnabled: !0,
                                    }),
                                    300,
                                    (t = e),
                                    (a = A),
                                    (0, Nu.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: 'subMode-fsm',
                                            initial: Iu.Init,
                                            context: u,
                                            states: {
                                                [Iu.Init]: { always: { target: Iu.UpdateState } },
                                                [Iu.UpdateState]: {
                                                    always: [
                                                        { target: Iu.Active, cond: $u },
                                                        { target: Iu.NonActive, cond: Hu },
                                                    ],
                                                },
                                                [Iu.Active]: {
                                                    on: {
                                                        [Uu.CheckDataUpdate]: [
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e, u) => ({
                                                                        type: Uu.SwitchState,
                                                                        status: u.status,
                                                                    })),
                                                                ],
                                                                cond: Gu,
                                                            },
                                                            { target: Iu.Active, cond: zu },
                                                            {
                                                                target: Iu.UpdateState,
                                                                actions: [
                                                                    (0, Ou.f0)({
                                                                        status: (e, u) => u.status,
                                                                        stage: (e, u) => u.stage,
                                                                        currentPoints: (e, u) => u.currentPoints,
                                                                        maximumPoints: (e, u) => u.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                    () => (null == a ? void 0 : a()),
                                                                ],
                                                                cond: ju,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Vu,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e, u) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    () => (null == a ? void 0 : a()),
                                                                    (0, Ou.lW)(
                                                                        (e, u) => ({
                                                                            type: Uu.UpdateStageData,
                                                                            stage: u.stage,
                                                                            currentPoints: u.currentPoints,
                                                                            maximumPoints: u.maximumPoints,
                                                                            earnedPoints: u.currentPoints,
                                                                        }),
                                                                        { delay: 300 },
                                                                    ),
                                                                ],
                                                                cond: Xu,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e, u) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: u.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: u.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Yu,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, Ou.lW)((e, u) => ({
                                                                        type: Uu.SwitchState,
                                                                        status: u.status,
                                                                    })),
                                                                ],
                                                                cond: qu,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Ku,
                                                            },
                                                            {
                                                                target: Iu.Active,
                                                                actions: [
                                                                    (0, Ou.lW)((e, u) => ({
                                                                        type: Uu.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: u.currentPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: u.currentPoints - u.maximumPoints,
                                                                    })),
                                                                    () => (null == a ? void 0 : a()),
                                                                ],
                                                                cond: Qu,
                                                            },
                                                        ],
                                                        [Uu.UpdateStageData]: {
                                                            target: Iu.Active,
                                                            actions: [
                                                                (0, Ou.f0)({
                                                                    stage: (e, u) => u.stage,
                                                                    currentPoints: (e, u) => u.currentPoints,
                                                                    maximumPoints: (e, u) => u.maximumPoints,
                                                                    earnedPoints: (e, u) => u.earnedPoints,
                                                                }),
                                                                Ju,
                                                            ],
                                                        },
                                                        [Uu.SwitchState]: {
                                                            target: Iu.UpdateState,
                                                            actions: [
                                                                (e, u) => t(u.status),
                                                                (0, Ou.f0)({ status: (e, u) => u.status }),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [Iu.NonActive]: {
                                                    on: {
                                                        [Uu.CheckDataUpdate]: {
                                                            target: Iu.UpdateState,
                                                            actions: [
                                                                (0, Ou.f0)({
                                                                    status: (e, u) => u.status,
                                                                    stage: (e, u) => u.stage,
                                                                    currentPoints: (e, u) => u.currentPoints,
                                                                    maximumPoints: (e, u) => u.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                                () => (null == a ? void 0 : a()),
                                                            ],
                                                            cond: Zu,
                                                        },
                                                        [Uu.SwitchState]: {
                                                            target: Iu.UpdateState,
                                                            actions: (0, Ou.f0)({ status: (e, u) => u.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: $u,
                                                hasNonActiveStatus: Hu,
                                                isStatusUpdate: Gu,
                                                isTaskSwitchingUpdate: ju,
                                                isNoUpdate: zu,
                                                isUpdateCurrentStageWithZeroEarnPoints: qu,
                                                isUpdateCurrentStageWithCurrentPoints: Yu,
                                                isUpdateToNextStageWithoutFillMax: Xu,
                                                isUpdateToNextStageWithFillMax: Vu,
                                                isUpdateToPrevStageWithReset: Ku,
                                                isUpdateToPrevStageWithoutReset: Qu,
                                                isUpdateWithActiveSwitch: Zu,
                                            },
                                        },
                                    )
                                );
                                var u, t, a;
                            }, []),
                            D = (0, Lu.eO)(F),
                            C = D[0],
                            g = D[1],
                            p = m.length > 2 ? 1 : 2,
                            h = C.context.currentPoints > 0,
                            b = R.strings.fun_random.progression.$dyn(h ? 'stepsCurrent' : 'stepsNoProgress'),
                            f = (0, a.useMemo)(
                                () =>
                                    Array.from({ length: C.context.maximumPoints + 1 }, (e, u) =>
                                        r().createElement(et, { key: u, isReady: u <= C.context.currentPoints }),
                                    ),
                                [C.context.currentPoints, C.context.maximumPoints],
                            );
                        (0, a.useEffect)(() => {
                            g({ type: Uu.CheckDataUpdate, status: o, stage: l, currentPoints: n, maximumPoints: s });
                        }, [o, n, s, l, g]);
                        const v = (0, a.useCallback)(() => {
                                g({
                                    type: Uu.CheckDataUpdate,
                                    status: o,
                                    stage: l,
                                    currentPoints: n,
                                    maximumPoints: s,
                                });
                            }, [n, s, l, o, g]),
                            w = _e({ showCount: p }, R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'));
                        return r().createElement(
                            'div',
                            { className: 'ActiveState_base_05' },
                            r().createElement(
                                'div',
                                { className: 'ActiveState_condition_f2' },
                                r().createElement(
                                    'div',
                                    { className: 'ActiveState_description_28' },
                                    r().createElement('div', { className: 'ActiveState_title_5e' }, c),
                                    r().createElement(
                                        'div',
                                        { className: 'ActiveState_steps_d9' },
                                        r().createElement(Mu, {
                                            text: b,
                                            binding: { done: C.context.currentPoints, total: C.context.maximumPoints },
                                        }),
                                    ),
                                ),
                                r().createElement(xu, {
                                    classMix: 'ActiveState_rewards_eb',
                                    rewardItemClassMix: 'ActiveState_reward_3b',
                                    size: ue.Small,
                                    data: m,
                                    count: p,
                                    boxRewardTooltip: w,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'ActiveState_progress_51' },
                                r().createElement('div', {
                                    className: B()(
                                        'ActiveState_progressGlow_b5',
                                        !h && 'ActiveState_progressGlow__notStarted_6b',
                                    ),
                                }),
                                r().createElement(au, {
                                    animationSettings: ut,
                                    size: Se.Small,
                                    deltaFrom: C.context.currentPoints - C.context.earnedPoints,
                                    value: C.context.currentPoints,
                                    maxValue: C.context.maximumPoints,
                                    onEndAnimation: v,
                                }),
                                r().createElement('div', { className: 'ActiveState_progressScale_ba' }, f),
                            ),
                            r().createElement(
                                'div',
                                { className: 'ActiveState_info_f5' },
                                r().createElement('div', { className: 'ActiveState_notificationIcon_98' }),
                                r().createElement('div', { className: 'ActiveState_infoDescription_51' }, E.info()),
                            ),
                            r().createElement(
                                Au,
                                {
                                    contentId:
                                        R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                    isEnabled: Wu(C.context.status),
                                },
                                r().createElement('div', {
                                    className: B()(
                                        'ActiveState_tooltipArea_dd',
                                        m.length > 1 && 'ActiveState_tooltipArea__multiple_81',
                                    ),
                                }),
                            ),
                        );
                    }),
                    at = () =>
                        r().createElement(
                            'div',
                            { className: 'CompletedFinalState_base_73' },
                            r().createElement('div', { className: 'CompletedFinalState_glow_d0' }),
                            r().createElement('div', { className: 'CompletedFinalState_completedIcon_49' }),
                            r().createElement(
                                'div',
                                { className: 'CompletedFinalState_title_b9' },
                                R.strings.fun_random.modeSubSelector.progression.header.completedResettable(),
                            ),
                        );
                let rt, nt, st;
                var it;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(rt || (rt = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(nt || (nt = {})),
                    ((it = st || (st = {})).SHORT_DATE = 'short-date'),
                    (it.SHORT_TIME = 'short-time'),
                    (it.SHORT_DATE_TIME = 'short-date-time'),
                    (it.FULL_DATE = 'full-date'),
                    (it.FULL_DATE_TIME = 'full-date-time'),
                    (it.MONTH = 'month'),
                    (it.MONTH_DATE = 'month-date'),
                    (it.DATE_MONTH = 'date-month'),
                    (it.MONTH_YEAR = 'month-year'),
                    (it.WEEK_DAY = 'week-day'),
                    (it.WEEK_DAY_TIME = 'week-day-time'),
                    (it.YEAR = 'year'),
                    (it.DATE_YEAR = 'date-year'));
                const ot = 86400;
                function lt(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / ot);
                    u -= t * ot;
                    const a = Math.trunc(u / 3600);
                    u -= 3600 * a;
                    const r = Math.trunc(u / 60);
                    return ((u -= 60 * r), { days: t, hours: a, minutes: r, seconds: u });
                }
                Date.now();
                const ct = (e, u = !0) =>
                        e.days > 7 && u
                            ? nu(R.strings.common.duration.days(), { days: e.days })
                            : e.days >= 1
                              ? 0 === e.hours
                                  ? nu(R.strings.common.duration.days(), { days: e.days })
                                  : `${nu(R.strings.common.duration.days(), { days: e.days })} ${nu(R.strings.common.duration.hours(), { hours: e.hours })}`
                              : e.hours >= 1
                                ? 0 === e.minutes
                                    ? nu(R.strings.common.duration.hours(), { hours: e.hours })
                                    : `${nu(R.strings.common.duration.hours(), { hours: e.hours })} ${nu(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                : nu(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }),
                    Et = () => {};
                let dt;
                (j.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(dt || (dt = {})),
                    j.Sw.instance);
                const mt = (e = 0, u, t = 0, r = Et) => {
                        const n = (0, a.useState)(e),
                            s = n[0],
                            i = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const a = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (i(t), r && r(), clearInterval(n)) : i(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                                i(0);
                            }, [e, u, t, r]),
                            s
                        );
                    },
                    _t = 'Countdown_description_8d',
                    At = (e) => e.toString().padStart(2, '0'),
                    Ft = R.images.gui.maps.icons.components.countdown,
                    Dt = (e, u) => {
                        const t = 2 === u ? Ft.big : Ft;
                        switch (e) {
                            case rt.Timer:
                                return t.clock();
                            case rt.Countdown:
                                return t.hourglass();
                            case rt.Cooldown:
                                return t.lock();
                        }
                    },
                    Ct = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = rt.Timer,
                            style: t = nt.Description,
                            onTimeReached: n,
                            className: i = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== nt.Description ? 1 : void 0,
                                E = mt(e, c),
                                d = (() => {
                                    const e = (0, a.useState)(s.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(s.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            n && n[E] && n[E]();
                            const m = ((e, u) => {
                                switch (u) {
                                    case nt.Description:
                                        return ct(e);
                                    case nt.Short:
                                        return `${At(e.minutes)}:${At(e.seconds)}`;
                                    case nt.Long:
                                        return `${At(e.hours)}:${At(e.minutes)}:${At(e.seconds)}`;
                                    case nt.Extended:
                                        return `${nu(R.strings.common.duration.days(), { days: e.days })} | ${At(e.hours)}:${At(e.minutes)}:${At(e.seconds)}`;
                                }
                            })(lt(E), t);
                            return r().createElement(
                                'div',
                                { className: B()('Countdown_base_fe', i) },
                                u !== rt.None &&
                                    r().createElement('div', {
                                        className: B()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${Dt(u, d)}')` },
                                    }),
                                l
                                    ? r().createElement(
                                          'div',
                                          { className: B()(_t, o.text) },
                                          r().createElement(Tu, { text: l, binding: { timerText: m } }),
                                      )
                                    : r().createElement('div', { className: B()(_t, o.text) }, m),
                            );
                        },
                    ),
                    Bt = (0, V.Pi)(() => {
                        const e = fe().model,
                            u = e.progressionState.get().resetTimer,
                            t = e.assetsPointer.get(),
                            a = Q(['modeSubSelector', 'progression'], { assetsPointer: t }),
                            n = a.staticTexts,
                            s = a.dynamicTexts;
                        return r().createElement(
                            'div',
                            { className: 'CompletedResettableState_base_12' },
                            r().createElement('div', { className: 'CompletedResettableState_glow_f8' }),
                            r().createElement(
                                'div',
                                { className: 'CompletedResettableState_title_3f' },
                                n.header.completedResettable(),
                            ),
                            r().createElement(
                                'div',
                                { className: 'CompletedResettableState_timer_12' },
                                r().createElement(
                                    'div',
                                    { className: 'CompletedResettableState_countdown_f5' },
                                    r().createElement(Ct, { duration: u, style: nt.Description }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'CompletedResettableState_description_5e' },
                                    s.timer(),
                                ),
                            ),
                        );
                    }),
                    gt = {
                        base: 'Progression_base_69',
                        activeWrapper: 'Progression_activeWrapper_1f',
                        base__completedResettable: 'Progression_base__completedResettable_82',
                        base__completedFinal: 'Progression_base__completedFinal_e1',
                        base__disabled: 'Progression_base__disabled_25',
                        completeWrapper: 'Progression_completeWrapper_82',
                    },
                    pt = (0, V.Pi)(({ className: e }) => {
                        const u = fe().model.progressionState.get().status,
                            t = (0, a.useState)(u),
                            n = t[0],
                            s = t[1];
                        return (
                            (0, a.useEffect)(() => {
                                u !== n && Wu(u) && s(u);
                            }, [u, n]),
                            r().createElement(
                                'div',
                                { className: B()(e, gt.base, gt[`base__${n}`]) },
                                r().createElement(
                                    'div',
                                    { className: gt.activeWrapper },
                                    r().createElement(tt, { onStatusUpdate: (e) => s(e) }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: gt.completeWrapper },
                                    n === ve.COMPLETED_RESETTABLE && r().createElement(Bt, null),
                                    n === ve.COMPLETED_FINAL && r().createElement(at, null),
                                ),
                            )
                        );
                    }),
                    ht = [];
                function bt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ht)
                    );
                }
                const ft = {
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
                    vt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const St = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        s = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, vt);
                    const c = a ? null : t,
                        E = 'string' == typeof c;
                    if ((c && !E && c < 0) || 0 === c) return null;
                    const d = c && !E && c > i,
                        m = B()(
                            ft.base,
                            ft[`base__${u}`],
                            n && ft.base__animated,
                            s && ft.base__hidden,
                            !c && ft.base__pattern,
                            a && ft.base__empty,
                            o,
                        );
                    return r().createElement(
                        'div',
                        wt({ className: m }, l),
                        r().createElement('div', { className: ft.bg }),
                        r().createElement('div', { className: ft.pattern }),
                        r().createElement(
                            'div',
                            { className: B()(ft.value, E && ft.value__text) },
                            d ? i : c,
                            d && r().createElement('span', { className: ft.plus }, '+'),
                        ),
                    );
                };
                let xt, Tt;
                ((St.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 }),
                    (function (e) {
                        ((e.B0 = 'b0'),
                            (e.B1 = 'b1'),
                            (e.B2 = 'b2'),
                            (e.B3 = 'b3'),
                            (e.B4 = 'b4'),
                            (e.B5 = 'b5'),
                            (e.B6 = 'b6'));
                    })(xt || (xt = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'));
                    })(Tt || (Tt = {})));
                const Pt = () => {
                        const e = (0, a.useContext)(_),
                            u = e.extraSmall,
                            t = e.small,
                            r = e.medium;
                        return (0, a.useMemo)(() => {
                            switch (!0) {
                                case t:
                                case u:
                                    return Tt.Small;
                                case r:
                                    return Tt.Medium;
                                default:
                                    return Tt.Big;
                            }
                        }, [u, r, t]);
                    },
                    kt = {
                        base: 'CardWrapper_base_b7',
                        base__disabled: 'CardWrapper_base__disabled_4f',
                        base__locked: 'CardWrapper_base__locked_95',
                        base__isNotStarted: 'CardWrapper_base__isNotStarted_29',
                        mask: 'CardWrapper_mask_f7',
                        border: 'CardWrapper_border_a3',
                        border__locked: 'CardWrapper_border__locked_c0',
                        hover: 'CardWrapper_hover_af',
                        hover__anim: 'CardWrapper_hover__anim_10',
                        animBg: 'CardWrapper_animBg_f3',
                        animBg__wide: 'CardWrapper_animBg__wide_16',
                        selection: 'CardWrapper_selection_35',
                        check: 'CardWrapper_check_c1',
                        check__extraSmall: 'CardWrapper_check__extraSmall_fa',
                        check__small: 'CardWrapper_check__small_33',
                        checkBackground: 'CardWrapper_checkBackground_bd',
                        checkBackground__extraSmall: 'CardWrapper_checkBackground__extraSmall_ff',
                        checkBackground__small: 'CardWrapper_checkBackground__small_d8',
                        disabling: 'CardWrapper_disabling_63',
                        background: 'CardWrapper_background_34',
                        background__anim: 'CardWrapper_background__anim_34',
                        background__empty: 'CardWrapper_background__empty_bb',
                        lockBlock: 'CardWrapper_lockBlock_81',
                        b0: 'CardWrapper_b0_65',
                        b1: 'CardWrapper_b1_10',
                        b2: 'CardWrapper_b2_7a',
                        b3: 'CardWrapper_b3_5e',
                        b4: 'CardWrapper_b4_60',
                        b5: 'CardWrapper_b5_9a',
                        lockBlock__medium: 'CardWrapper_lockBlock__medium_12',
                        lockBlock__big: 'CardWrapper_lockBlock__big_51',
                        lock: 'CardWrapper_lock_31',
                        lock__anim: 'CardWrapper_lock__anim_fd',
                        lock__medium: 'CardWrapper_lock__medium_5f',
                        lock__big: 'CardWrapper_lock__big_8c',
                        lockGlow: 'CardWrapper_lockGlow_f2',
                        lockGlow__medium: 'CardWrapper_lockGlow__medium_36',
                        lockGlow__big: 'CardWrapper_lockGlow__big_b4',
                        lockGlow__anim: 'CardWrapper_lockGlow__anim_de',
                        lockLine: 'CardWrapper_lockLine_7e',
                        lockLine__medium: 'CardWrapper_lockLine__medium_47',
                        lockLine__big: 'CardWrapper_lockLine__big_91',
                        lockLine__leftAnim: 'CardWrapper_lockLine__leftAnim_5b',
                        lockLine__rightAnim: 'CardWrapper_lockLine__rightAnim_77',
                        leftLineBg: 'CardWrapper_leftLineBg_26',
                        rightLineBg: 'CardWrapper_rightLineBg_ee',
                        novelty: 'CardWrapper_novelty_ae',
                        info: 'CardWrapper_info_49',
                        info__anim: 'CardWrapper_info__anim_81',
                        info__extraSmall: 'CardWrapper_info__extraSmall_fc',
                        info__small: 'CardWrapper_info__small_9c',
                        info__medium: 'CardWrapper_info__medium_9f',
                        infoCorner: 'CardWrapper_infoCorner_49',
                        infoCorner__anim: 'CardWrapper_infoCorner__anim_ba',
                        children: 'CardWrapper_children_88',
                    },
                    yt = ({
                        index: e,
                        size: u,
                        isSelected: t,
                        isDisabled: n,
                        isNew: s = !1,
                        isInfoIconVisible: i,
                        resourcesFolderName: l,
                        children: c,
                        onHoverChanged: E,
                        onItemClicked: d,
                        onInfoClicked: m,
                        resourceFolderGetter: A,
                        id: F,
                        modeName: D,
                        isNotStarted: C,
                        isLocked: g,
                    }) => {
                        const p = Pt(),
                            b = v().mediaSize,
                            f = (0, a.useCallback)(() => {
                                (d({ index: e, size: u, cardMediaSize: p }), I.playClick());
                            }, [d, e, u, p]),
                            w = (0, a.useCallback)(
                                (u) => {
                                    (u.stopPropagation(), I.playYes(), m({ index: e }));
                                },
                                [m, e],
                            ),
                            S = ((e) => {
                                const u = (0, a.useState)(!1),
                                    t = u[0],
                                    r = u[1],
                                    n = (0, a.useCallback)(
                                        (u) => {
                                            (r(u), e && e(u));
                                        },
                                        [e],
                                    );
                                return [t, n];
                            })(E),
                            x = S[0],
                            T = S[1],
                            P = (0, a.useCallback)(() => {
                                (O(
                                    [xt.B4, xt.B5, xt.B6].includes(u)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    T(!0));
                            }, [T, u]),
                            k = (0, a.useCallback)(() => {
                                T(!1);
                            }, [T]),
                            y = (function (e, u, t) {
                                const r = (0, a.useContext)(_);
                                let n = Object.entries(r).filter(([e, u]) => !0 === u && e in o);
                                return ['info', 'check', 'checkBackground'].reduce((e, t) => {
                                    const a = n.map((e) =>
                                        B()(
                                            u[((e, u) => e + '__' + u)(t, e[0])],
                                            u[
                                                ((e, u) => {
                                                    return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                    var t;
                                                })(t, e[0])
                                            ],
                                        ),
                                    );
                                    return ((e[t] = B()(u[t], ...a)), e);
                                }, {});
                            })(0, kt),
                            M = p !== Tt.Big,
                            L = g ? '_locked' : '';
                        let N;
                        const U = A(l);
                        if (null !== U) {
                            const e = U.$dyn(`bg_${u}_${p}${L}`);
                            null !== e && (N = { backgroundImage: `url(${e})` });
                            const t = U.$dyn(`bg_${u}${L}`);
                            null !== t && (N = { backgroundImage: `url(${t})`, backgroundSize: 'cover' });
                        }
                        const W = i && (x || t),
                            $ =
                                (b === h.Medium && (u === xt.B1 || u === xt.B2 || u === xt.B3)) ||
                                (b === h.Large && (u === xt.B4 || u === xt.B5 || u === xt.B6)),
                            H = !(
                                (b !== h.Large && b !== h.ExtraLarge) ||
                                (u !== xt.B0 && u !== xt.B1 && u !== xt.B2 && u !== xt.B3)
                            ),
                            G = B()(kt.base, n && kt.base__disabled, g && kt.base__locked, C && kt.base__isNotStarted),
                            z = B()(
                                kt.background,
                                void 0 === N && kt.background__empty,
                                x && !C && !g && kt.background__anim,
                            ),
                            j = B()(kt.lockBlock, { [kt.lockBlock__medium]: $, [kt.lockBlock__big]: H }, kt[u]),
                            q = B()(
                                kt.lockLine,
                                { [kt.lockLine__medium]: $ },
                                { [kt.lockLine__big]: H },
                                kt.leftLineBg,
                                { [kt.lockLine__leftAnim]: x },
                            ),
                            Y = B()(
                                kt.lockLine,
                                { [kt.lockLine__medium]: $ },
                                { [kt.lockLine__big]: H },
                                kt.rightLineBg,
                                { [kt.lockLine__rightAnim]: x },
                            ),
                            V = B()(kt.lock, { [kt.lock__medium]: $, [kt.lock__big]: H, [kt.lock__anim]: x }),
                            X = B()(kt.lockGlow, {
                                [kt.lockGlow__medium]: $,
                                [kt.lockGlow__big]: H,
                                [kt.lockGlow__anim]: x,
                            }),
                            K = r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    'div',
                                    { id: F, className: G, onClick: g ? void 0 : f, onMouseEnter: P, onMouseLeave: k },
                                    r().createElement(
                                        'div',
                                        { className: kt.mask },
                                        r().createElement('div', { className: z, style: N }),
                                    ),
                                    r().createElement('div', { className: B()(kt.border, { [kt.border__locked]: g }) }),
                                    t &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: kt.selection }),
                                            r().createElement('div', {
                                                className: B()(kt.animBg, u === xt.B0 && kt.animBg__wide),
                                            }),
                                            r().createElement('div', { className: y.checkBackground }),
                                            r().createElement('div', { className: y.check }),
                                        ),
                                    r().createElement('div', {
                                        className: B()(kt.hover, x && !g && !C && kt.hover__anim),
                                    }),
                                    r().createElement('div', { className: kt.children }, c),
                                    s &&
                                        !n &&
                                        r().createElement(
                                            'div',
                                            { className: kt.novelty },
                                            r().createElement(St, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: M ? 'small' : 'big',
                                            }),
                                        ),
                                    !g &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', {
                                                className: B()(kt.infoCorner, W && kt.infoCorner__anim),
                                            }),
                                            r().createElement(
                                                hu,
                                                { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: W },
                                                r().createElement('div', {
                                                    className: B()(y.info, W && kt.info__anim),
                                                    onClick: w,
                                                }),
                                            ),
                                        ),
                                    n && r().createElement('div', { className: kt.disabling }),
                                    g &&
                                        r().createElement(
                                            'div',
                                            { className: j },
                                            r().createElement('div', { className: q }),
                                            r().createElement('div', { className: V }),
                                            r().createElement('div', { className: X }),
                                            r().createElement('div', { className: Y }),
                                        ),
                                ),
                            );
                        return g
                            ? r().createElement(
                                  Au,
                                  {
                                      contentId: R.views.lobby.tooltips.LimitedUiUnlockInfoTooltip('resId'),
                                      args: { index: e, modeName: D },
                                      isEnabled: g,
                                      ignoreShowDelay: !0,
                                  },
                                  K,
                              )
                            : r().createElement(
                                  Cu,
                                  { isEnabled: n, args: { index: e, modeName: D, tooltipId: 'disabledTooltip' } },
                                  K,
                              );
                    },
                    Rt = ({ index: e, text: u, isSmall: t = !1, classMix: a, tooltipId: n, modeName: s = '' }) =>
                        r().createElement(
                            Cu,
                            { args: n ? { tooltipId: n, modeName: s } : { tooltipId: 'calendarTooltip', index: e } },
                            r().createElement(
                                'div',
                                { className: B()('TimeLeft_base_cf', t && 'TimeLeft_base__small_7c', a) },
                                r().createElement('div', { className: 'TimeLeft_icon_5d' }),
                                u,
                            ),
                        );
                let Mt;
                !(function (e) {
                    ((e[(e.NOT_STARTED = 0)] = 'NOT_STARTED'),
                        (e[(e.ACTIVE = 1)] = 'ACTIVE'),
                        (e[(e.DISABLED = 2)] = 'DISABLED'),
                        (e[(e.FINISHED = 3)] = 'FINISHED'));
                })(Mt || (Mt = {}));
                const Lt = {
                    base: 'ModifierDomainIcon_base_74',
                    image: 'ModifierDomainIcon_image_62',
                    iconOut: 'ModifierDomainIcon_iconOut_c6',
                    image__big: 'ModifierDomainIcon_image__big_3c',
                    image__large: 'ModifierDomainIcon_image__large_f1',
                    iconHover: 'ModifierDomainIcon_iconHover_69',
                };
                let Nt;
                !(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'));
                })(Nt || (Nt = {}));
                const Ot = (e, u) => {
                        const t = u === Nt.large ? '80x80' : '64x64';
                        return {
                            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${t}`).$dyn(e)})`,
                        };
                    },
                    It = ({ modifiersDomain: e, subModeId: u, className: t, size: a = Nt.small }) => {
                        const n = u ? { modifiersDomain: e, subModeId: u } : { modifiersDomain: e };
                        return r().createElement(
                            'div',
                            { className: Lt.base },
                            r().createElement(
                                Au,
                                {
                                    contentId:
                                        R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                                    args: n,
                                },
                                r().createElement('div', {
                                    className: B()(Lt.image, Lt[`image__${a}`], t),
                                    style: Ot(e, a),
                                }),
                            ),
                        );
                    },
                    Ut = ({ timeToStart: e, state: u, classMix: t }) => {
                        const a = u === Mt.NOT_STARTED && e < ot,
                            n = ct(lt(e)),
                            s = ((e, u) => {
                                switch (e) {
                                    case Mt.NOT_STARTED:
                                        return u
                                            ? R.strings.fun_random.modeSubSelector.subModeCard.startTimer()
                                            : R.strings.fun_random.modeSubSelector.subModeCard.soonWillStart();
                                    case Mt.FINISHED:
                                        return R.strings.fun_random.modeSubSelector.subModeCard.finished();
                                    default:
                                        return '';
                                }
                            })(u, a),
                            i = B()('CardBottomStatus_base_64', t);
                        return r().createElement(
                            'div',
                            { className: i },
                            s,
                            a &&
                                r().createElement(
                                    'div',
                                    { className: 'CardBottomStatus_endDate_a0' },
                                    r().createElement('div', { className: 'CardBottomStatus_timerIcon_72' }),
                                    n,
                                ),
                        );
                    },
                    Wt = {
                        base: 'SubModeCard_base_c0',
                        name: 'SubModeCard_name_1a',
                        name__notStarted: 'SubModeCard_name__notStarted_ee',
                        subtitle: 'SubModeCard_subtitle_45',
                        modifications: 'SubModeCard_modifications_27',
                        modifications__notStarted: 'SubModeCard_modifications__notStarted_38',
                        timeLeft: 'SubModeCard_timeLeft_60',
                        timeLeft__small: 'SubModeCard_timeLeft__small_7f',
                        startTime: 'SubModeCard_startTime_42',
                        notStarted: 'SubModeCard_notStarted_f2',
                    },
                    $t = ['assetsPointer', 'state', 'modifiersDomains'];
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const Gt = (e) => {
                        let u = e;
                        const t = R.images.fun_random.gui.maps.icons.feature.asset_packs.sub_modes;
                        return (null === t.$dyn(e) && (u = 'undefined'), t.$dyn(u).$dyn('sub_modes_selector'));
                    },
                    zt = (e, u) => {
                        let t = e;
                        const a = R.strings.fun_random.sub_modes;
                        return (null === a.$dyn(e) && (t = 'undefined'), a.$dyn(t).$dyn('subModeCard').$dyn(u));
                    },
                    jt = (e) => {
                        let u = e.assetsPointer,
                            t = e.state,
                            a = e.modifiersDomains,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, $t);
                        const s = n.timeLeft,
                            i = n.timeToStart,
                            o = n.subModeId,
                            l = n.conditions,
                            c = fe().controls,
                            E = Pt(),
                            d = t === Mt.NOT_STARTED,
                            m = [Mt.DISABLED, Mt.FINISHED].includes(t),
                            _ = E === Tt.Big,
                            A = [Mt.ACTIVE, Mt.NOT_STARTED].includes(t),
                            F = bt(() => {
                                t === Mt.ACTIVE && c.itemClicked(o);
                            }),
                            D = bt(() => {
                                c.infoClicked(o);
                            });
                        return r().createElement(
                            'div',
                            { className: Wt.base },
                            r().createElement(
                                yt,
                                Ht({}, n, {
                                    resourcesFolderName: u,
                                    resourceFolderGetter: Gt,
                                    onItemClicked: F,
                                    onInfoClicked: D,
                                    isInfoIconVisible: A,
                                    isDisabled: m,
                                    isNotStarted: d,
                                    size: xt.B1,
                                    modeName: u,
                                }),
                                d && r().createElement('div', { className: Wt.notStarted }),
                                r().createElement(
                                    'div',
                                    { className: B()(Wt.name, d && Wt.name__notStarted) },
                                    zt(u, 'title'),
                                    r().createElement(
                                        'div',
                                        { className: B()(Wt.subtitle, d && Wt.subtitle__notStarted) },
                                        zt(u, 'description'),
                                        r().createElement(Mu, { text: su(l) }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: B()(Wt.modifications, d && Wt.modifications__notStarted) },
                                    ge(a, (e, u) =>
                                        r().createElement(It, {
                                            key: u,
                                            modifiersDomain: e,
                                            subModeId: o,
                                            size: _ ? Nt.big : Nt.small,
                                        }),
                                    ),
                                ),
                                s &&
                                    !m &&
                                    r().createElement(Rt, {
                                        index: n.index,
                                        text: s,
                                        classMix: Wt.timeLeft,
                                        tooltipId: 'funRandomModeSelectorCalendarDay',
                                        modeName: u,
                                    }),
                                r().createElement(Ut, { timeToStart: i, state: t, classMix: Wt.startTime }),
                            ),
                        );
                    },
                    qt = 'App_base__show_da',
                    Yt = 'App_flashline_be',
                    Vt = 'App_dot_2d';
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Kt = (0, V.Pi)(() => {
                    const e = fe(),
                        u = e.model,
                        t = e.controls,
                        n = u.computes.getCards(),
                        s = Q(null, { assetsPointer: u.assetsPointer }).dynamicTexts,
                        i = Q('modeSubSelector', { assetsPointer: u.assetsPointer }).staticTexts,
                        o = ((e, u) => {
                            var t;
                            const a = X.$dyn('modes');
                            return null != (t = a.$dyn(e)) ? t : a.$dyn('undefined');
                        })(u.assetsPointer.get()).battle_type;
                    var l;
                    ((l = t.close), Y(z.n.ESCAPE, l));
                    const c = v(),
                        E = (0, a.useMemo)(
                            () =>
                                [h.Large, h.EXTRA_LARGE].includes(c.mediaSize)
                                    ? { backgroundImage: `url(${o.c_110x110.fun_random()})` }
                                    : { backgroundImage: `url(${o.c_96x96.fun_random()})` },
                            [c, o.c_110x110, o.c_96x96],
                        ),
                        d = (0, a.useRef)(null),
                        m = (0, a.useCallback)(
                            () => (
                                t.backBtnClicked(),
                                d.current &&
                                    (d.current.classList.remove(qt), d.current.classList.add('App_base__hide_88')),
                                G(() => {
                                    (0, j.Sy)();
                                }, Number('500'))
                            ),
                            [t],
                        );
                    return (
                        (0, a.useEffect)(
                            () =>
                                ((e) => {
                                    let u,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null),
                                                    (u = void (
                                                        d.current &&
                                                        (d.current.classList.add(qt),
                                                        O('ev_mode_selector_hover_simple'))
                                                    )));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                                        }
                                    );
                                })(),
                            [],
                        ),
                        r().createElement(
                            'div',
                            { className: 'App_base_9d', ref: d },
                            r().createElement(
                                'div',
                                { className: 'App_close_e9' },
                                r().createElement(H, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_back_82' },
                                r().createElement(H, {
                                    caption: R.strings.menu.viewHeader.backBtn.label(),
                                    type: 'back',
                                    side: 'left',
                                    goto: i.backBtn.label(),
                                    onClick: m,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_header_ba' },
                                r().createElement('div', { className: 'App_headerIcon_dc', style: E }),
                                r().createElement('div', { className: 'App_headerText_8c' }, s.capsUserName()),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_subtitle_63' },
                                r().createElement('div', { className: Vt }),
                                r().createElement('div', { className: Yt }),
                                r().createElement('div', { className: Vt }),
                                r().createElement('div', { className: 'App_subtitleText_54' }, i.subtitle()),
                                r().createElement('div', { className: Vt }),
                                r().createElement('div', { className: B()(Yt, 'App_flashline__right_6d') }),
                                r().createElement('div', { className: Vt }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'App_cardsContainer_62' },
                                n.map((e, u) => r().createElement(jt, Xt({}, e, { index: u, key: `item_${u}` }))),
                            ),
                            r().createElement(pt, { className: 'App_progression_c2' }),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(be, null, r().createElement(M, null, r().createElement(Kt, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 454),
        (() => {
            var e = { 454: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6099));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
