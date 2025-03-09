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
                t.r(u), t.d(u, { mouse: () => i, onResize: () => n });
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
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
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
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
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
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a });
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
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
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
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
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
                const f = Object.keys(r.W).reduce(
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
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
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
                    })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
                t.d(u, { kH: () => m, B3: () => c, Z5: () => s, lf: () => A, cy: () => i, B0: () => o, ry: () => C });
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
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    d = t(3138);
                const _ = ['args'];
                function D(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, _);
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
                        e.keyCode === F.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(m),
                                on: !0,
                                args: n,
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
                        onBindingsReady: C,
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
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            7042: (e, u, t) => {
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
                })(o || (o = {}));
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    A = c.height,
                    m = Object.assign({ width: E, height: A }, l(E, A, i)),
                    F = (0, a.createContext)(m),
                    d = ['children'],
                    _ = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, d);
                        const r = (0, a.useContext)(F),
                            s = r.extraLarge,
                            i = r.large,
                            o = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            A = r.largeWidth,
                            m = r.mediumWidth,
                            _ = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            C = r.largeHeight,
                            g = r.mediumHeight,
                            p = r.smallHeight,
                            h = r.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && i) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return n(u, t, v);
                            if (t.largeWidth && A) return n(u, t, v);
                            if (t.mediumWidth && m) return n(u, t, v);
                            if (t.smallWidth && _) return n(u, t, v);
                            if (t.extraSmallWidth && D) return n(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (_.defaultProps = {
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
                    (0, a.memo)(_);
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        n = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: a }, l(t, a, i)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]);
                    const E = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(F.Provider, { value: E }, e);
                });
                var B = t(6483),
                    C = t.n(B),
                    g = t(926),
                    p = t.n(g);
                let h, v, b;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(h || (h = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const f = ['children', 'className'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL,
                        [h.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [h.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [h.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, f);
                        const s = (() => {
                                const e = (0, a.useContext)(F),
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
                                                return (
                                                    console.error('Unreachable media context resolution'), h.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    s = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), b.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: n,
                                    mediaHeight: s,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            i = s.mediaWidth,
                            o = s.mediaHeight,
                            l = s.mediaSize;
                        return r().createElement('div', w({ className: C()(t, S[i], y[o], T[l]) }, n), u);
                    },
                    M = ['children'],
                    x = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, M);
                        return r().createElement(D, null, r().createElement(P, t, u));
                    };
                var O = t(493),
                    N = t.n(O);
                function k(e) {
                    engine.call('PlaySound', e);
                }
                const L = {
                        playHighlight() {
                            k('highlight');
                        },
                        playClick() {
                            k('play');
                        },
                        playYes() {
                            k('yes1');
                        },
                    },
                    I = {
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
                    H = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class G extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && k(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && k(this.props.soundClick);
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
                            n = e.side,
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, H)),
                            m = C()(I.base, I[`base__${s}`], I[`base__${n}`], null == i ? void 0 : i.base),
                            F = C()(I.icon, I[`icon__${s}`], I[`icon__${n}`], null == i ? void 0 : i.icon),
                            d = C()(I.glow, null == i ? void 0 : i.glow),
                            _ = C()(I.caption, I[`caption__${s}`], null == i ? void 0 : i.caption),
                            D = C()(I.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            U(
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
                                A,
                            ),
                            'info' !== s && r().createElement('div', { className: I.shine }),
                            r().createElement('div', { className: F }, r().createElement('div', { className: d })),
                            r().createElement('div', { className: _ }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var $ = t(5521),
                    W = t(4179);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = $.n.NONE, u = z, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var j = t(3282);
                function V(e) {
                    return e;
                }
                function q() {
                    return !1;
                }
                console.log;
                var X = t(3915);
                function K(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Q = (e) => (0 === e ? window : window.subViews.get(e));
                function Z(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var J = t(6517);
                const ee = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Q,
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
                                                        return r.set(l, t), e && t(i(n)), l;
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
                                                                                    return K(e, u);
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
                                                                                          ? K(e, u)
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
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        primitives: e.primitives([
                                                            'battleOverTimestamp',
                                                            'totalPoints',
                                                            'killAmount',
                                                            'pickupAmount',
                                                            'killStreak',
                                                            'hasDailyQuests',
                                                        ]),
                                                        currentPlayerEntry: e.object('currentPlayerEntry'),
                                                        currentPlayersScore: e.array('currentPlayerEntry.playersScore'),
                                                        playersList: e.array('playersList', []),
                                                        dailyQuests: e.array('dailyQuests', []),
                                                    },
                                                    t = (0, J.computedFn)(() =>
                                                        Z(u.playersList.get(), (e) =>
                                                            Object.assign({}, e, {
                                                                playersScore: Z(e.playersScore, V),
                                                            }),
                                                        ),
                                                    ),
                                                    a = (0, J.computedFn)(() => Z(u.currentPlayersScore.get(), V)),
                                                    r = (0, J.computedFn)(() => {
                                                        const e = u.currentPlayerEntry.get();
                                                        return Object.assign({}, e, { playersScore: a() });
                                                    }),
                                                    n = (0, J.computedFn)(() =>
                                                        Z(u.dailyQuests.get(), (e) =>
                                                            Object.assign({}, e, { rewards: Z(e.rewards, V) }),
                                                        ),
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getPlayersList: t,
                                                        getCurrentPlayersScore: a,
                                                        getCurrentPlayerEntry: r,
                                                        getDailyMissions: n,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = X.observable.box(a, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, X.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            r = X.observable.box(a, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, X.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = X.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, X.action)((e) => {
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
                                                                    (e, [u, t]) => (
                                                                        (e[t] = X.observable.box(a[u], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, X.action)((e) => {
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
                                            A = { mode: e, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && a ? a.controls(A) : u(A),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    A = (0, a.useState)(e),
                                    m = A[0],
                                    F = A[1],
                                    d = (0, a.useState)(() => c(e, n, o)),
                                    _ = d[0],
                                    D = d[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(m, n, o)) : (E.current = !0);
                                    }, [o, m, n]),
                                    (0, a.useEffect)(() => {
                                        F(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [_],
                                    ),
                                    r().createElement(t.Provider, { value: _ }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({ onClose: e.createCallbackNoArgs('onClose') })),
                    ue = ee[0],
                    te = ee[1];
                let ae;
                !(function (e) {
                    (e.Scan = 'scan'),
                        (e.Kill = 'kill'),
                        (e.Pickup = 'pickup'),
                        (e.Ram = 'ram'),
                        (e.Shot = 'shot'),
                        (e.AbilityHit = 'abilityHit'),
                        (e.Assist = 'assist'),
                        (e.FirstBlood = 'firstBlood'),
                        (e.KillStreak = 'killStreak'),
                        (e.PickupMaster = 'pickupMaster'),
                        (e.Revenge = 'revenge'),
                        (e.BoostMe = 'boostMe');
                })(ae || (ae = {}));
                const re = 'ArenaScore_tableHeader_7c',
                    ne = 'ArenaScore_tableHeader_text_0b',
                    se = 'ArenaScore_tableHeader_marsPoints_1f',
                    ie = 'ArenaScore_tableHeader_marsPoints_icon_fa',
                    oe = 'ArenaScore_textAccent_7e',
                    le = 'ArenaScore_playerTable_marsPoints_6b',
                    ce = R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab;
                function Ee(e, u) {
                    const t = e < 3 ? 'c_1_2' : 'rest';
                    return ce.$dyn(`${t}_place_rover_${u}`);
                }
                const Ae = (0, j.observer)(({ children: e }) => {
                    const u = {
                            players: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.players(),
                            pointsGained: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.pointsGained(),
                            activeActions: R.strings.cosmicEvent.postBattleScreen.arenaScore.activeActions(),
                            battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                            battleInfoBattleOver:
                                R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                            affirmativeButton:
                                R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                            closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                        },
                        t = {
                            [ae.AbilityHit]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.abilityHit(),
                            [ae.Kill]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.enemyKills(),
                            [ae.Pickup]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.abilityPickups(),
                            [ae.Ram]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.ramming(),
                            [ae.Scan]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.artefactScanning(),
                            [ae.Shot]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.shots(),
                            [ae.BoostMe]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.boosterJump(),
                            [ae.Assist]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.assist(),
                            [ae.PickupMaster]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.pickupMaster(),
                            [ae.Revenge]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.revenge(),
                            [ae.KillStreak]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.killStreak(),
                            [ae.FirstBlood]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.firstBlood(),
                        },
                        n = te().model,
                        i = n.computes.getPlayersList(),
                        o = n.computes.getCurrentPlayerEntry(),
                        l = (0, a.useState)(o),
                        c = l[0],
                        E = l[1],
                        A = R.strings.cosmicEvent.postBattleScreen.desertersPoints(),
                        m = ce.$dyn(`rover_${c.vehicle}`),
                        F = (() => {
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
                        })(),
                        d = 2 === F;
                    return r().createElement(
                        'div',
                        { className: 'ArenaScore_base_21' },
                        r().createElement(
                            'div',
                            { className: 'ArenaScore_wrapper_ea' },
                            r().createElement(
                                'div',
                                { className: 'ArenaScore_playersTable_c1' },
                                r().createElement(
                                    'div',
                                    { className: re },
                                    r().createElement('div', { className: ne }, u.players),
                                    r().createElement(
                                        'div',
                                        { className: 'ArenaScore_tableHeader_rover_c3' },
                                        r().createElement('img', {
                                            src: ce.rover(),
                                            className: 'ArenaScore_tableHeader_rover_icon_7b',
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: se },
                                        r().createElement('img', { src: ce.marsPoints_14_14(), className: ie }),
                                    ),
                                ),
                                i &&
                                    i.map((e, u) =>
                                        r().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    'ArenaScore_playersTable_row_60',
                                                    e.playerName === o.playerName &&
                                                        'ArenaScore_playersTable_row__currentPlayer_4e',
                                                ),
                                                key: u,
                                                onClick: () => E(e),
                                            },
                                            e.playerName === c.playerName &&
                                                r().createElement('div', {
                                                    className: 'ArenaScore_playersTable__selected_42',
                                                }),
                                            r().createElement(
                                                'div',
                                                {
                                                    className: C()(
                                                        'ArenaScore_playersTable_row_place_12',
                                                        e.place <= 2 && oe,
                                                    ),
                                                },
                                                e.place,
                                                e.place <= 3 &&
                                                    r().createElement('img', {
                                                        className: C()(
                                                            'ArenaScore_winnerIcon_7f',
                                                            d && 'ArenaScore_winnerIcon_x2Scale_df',
                                                        ),
                                                        src: 3 === e.place ? ce.c_3_place() : ce.c_1_2_place(),
                                                    }),
                                            ),
                                            r().createElement(
                                                'div',
                                                {
                                                    className: C()(
                                                        'ArenaScore_playersTable_row_name_af',
                                                        e.place <= 2 && oe,
                                                    ),
                                                },
                                                e.playerName,
                                                e.playerClan && ' [' + e.playerClan + ']',
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: 'ArenaScore_rover_91' },
                                                r().createElement('img', {
                                                    className: 'ArenaScore_rover_icon_38',
                                                    src: Ee(u + 1, e.vehicle),
                                                }),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: C()('ArenaScore_marsPoints_11', u <= 1 && oe) },
                                                e.isDeserter ? A : e.totalPoints,
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'ArenaScore_playerTable_f2' },
                                r().createElement(
                                    'div',
                                    { className: 'ArenaScore_playerTable_topHeader_d2' },
                                    r().createElement('img', {
                                        className: 'ArenaScore_playerTable_topHeader_img_de',
                                        src: m,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'ArenaScore_playerTable_topHeader_playersName_8d' },
                                        c.playerName,
                                    ),
                                    c.playerClan &&
                                        r().createElement(
                                            'div',
                                            { className: 'ArenaScore_playerTable_topHeader_playerClan_e0' },
                                            '[' + c.playerClan + ']',
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: re },
                                    r().createElement('div', { className: ne }, u.activeActions),
                                    r().createElement(
                                        'div',
                                        { className: se },
                                        r().createElement('img', { src: ce.marsPoints_14_14(), className: ie }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'ArenaScore_playerTable_wrapper_c4' },
                                    r().createElement(
                                        'div',
                                        { className: C()('ArenaScore_playerTable_topRow_f7') },
                                        r().createElement(
                                            'div',
                                            { className: 'ArenaScore_playerTable_topRow_pointsGained_06' },
                                            u.pointsGained,
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: C()(le, oe) },
                                            c.isDeserter ? A : c.totalPoints,
                                        ),
                                    ),
                                    c.playersScore &&
                                        c.playersScore.map((e, u) =>
                                            r().createElement(
                                                'div',
                                                { className: C()('ArenaScore_playerTable_row_0a'), key: u },
                                                r().createElement(
                                                    'div',
                                                    { className: 'ArenaScore_playerTable_row_category_80' },
                                                    t[e.type],
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: C()(le, 0 === e.marsPoints && 'ArenaScore_faded_fd') },
                                                    c.isDeserter ? A : e.marsPoints,
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                        e,
                    );
                });
                let me;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(me || (me = {}));
                const Fe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    de = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    _e = (e, u, t = me.left) => e.split(u).reduce(t === me.left ? Fe : de, []),
                    De = (() => {
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
                    Be = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ce = ({ binding: e, text: u = '', classMix: t, alignment: n = me.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = me.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Be.includes(t)
                                                                ? De(e)
                                                                : ((e, u = me.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          _e(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(_e(e, a, me.left))),
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
                let ge, pe, he, ve, be, fe, we;
                var Se;
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
                        (e.ParagonsUnlocks = 'paragonsUnlocks');
                })(ge || (ge = {})),
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
                    })(pe || (pe = {})),
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
                    })(he || (he = {})),
                    ((Se = ve || (ve = {})).MULTI = 'multi'),
                    (Se.CURRENCY = 'currency'),
                    (Se.PREMIUM_PLUS = 'premium_plus'),
                    (Se.NUMBER = 'number'),
                    (Se.STRING = 'string'),
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
                    })(be || (be = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(fe || (fe = {})),
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
                    })(we || (we = {}));
                class ye extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? W.B3.GOLD : W.B3.INTEGRAL;
                        const u = W.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                (ye.defaultProps = { format: 'integral' }),
                    ge.Items,
                    ge.Equipment,
                    ge.Xp,
                    ge.XpFactor,
                    ge.Blueprints,
                    ge.BlueprintsAny,
                    ge.Goodies,
                    ge.Berths,
                    ge.Slots,
                    ge.Tokens,
                    ge.CrewSkins,
                    ge.CrewBooks,
                    ge.Customizations,
                    ge.CreditsFactor,
                    ge.TankmenXp,
                    ge.TankmenXpFactor,
                    ge.FreeXpFactor,
                    ge.BattleToken,
                    ge.PremiumUniversal,
                    ge.NaturalCover,
                    ge.BpCoin,
                    ge.BattlePassSelectToken,
                    ge.BattlaPassFinalAchievement,
                    ge.BattleBadge,
                    ge.BonusX5,
                    ge.CrewBonusX3,
                    ge.NewYearFillers,
                    ge.NewYearInvoice,
                    ge.EpicSelectToken,
                    ge.Comp7TokenWeeklyReward,
                    ge.Comp7TokenCouponReward,
                    ge.BattleBoosterGift,
                    ge.CosmicLootboxCommon,
                    ge.CosmicLootboxSilver,
                    ge.SelectableBonus,
                    ge.Gold,
                    ge.Credits,
                    ge.Crystal,
                    ge.FreeXp,
                    ge.BattlePassPoints,
                    ge.PremiumPlus,
                    ge.Premium;
                const Re = ['engravings', 'backgrounds'],
                    Te = ['engraving', 'background'],
                    Pe = (e, u = he.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case he.S600x450:
                                        return 'c_600x450';
                                    case he.S400x300:
                                        return 'c_400x300';
                                    case he.S296x222:
                                        return 'c_296x222';
                                    case he.S232x174:
                                        return 'c_232x174';
                                    case he.Big:
                                        return 'c_80x80';
                                    case he.Small:
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
                                        case he.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case he.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Re[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(Te[e])}`;
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
                                return `R.images.gui.maps.icons.achievement.${o}.${n}`;
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
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Me = (e, u, t) => {
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
                    xe = [
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
                function Oe(e) {
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
                const Ne = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ke = (e) => {
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
                            A = void 0 !== E && E,
                            m = e.decoratorId,
                            F = void 0 === m ? 0 : m,
                            d = e.isEnabled,
                            _ = void 0 === d || d,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, xe);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ne(t, F, { isMouseEvent: !0, on: !0, arguments: Oe(r) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, r, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ne(t, F, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, v, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === _ && f();
                            }, [_, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            _
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === A && f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === A && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Le = ['children'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const He = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Le);
                        return r().createElement(
                            ke,
                            Ie(
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
                    Ue = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const $e = R.views.common.tooltip_window.simple_tooltip_content,
                    We = (e) => {
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
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ue);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, s, o]);
                        return r().createElement(
                            ke,
                            Ge(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? $e.SimpleTooltipHtmlContent('resId') : $e.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Ye = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(We, u, a);
                        const n = u.contentId,
                            s = u.args,
                            i = null == s ? void 0 : s.contentId;
                        return n || i
                            ? r().createElement(ke, ze({}, u, { contentId: n || i }), a)
                            : r().createElement(He, u, a);
                    },
                    je = {
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
                    Ve = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = he.Big,
                        special: n,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case be.BATTLE_BOOSTER:
                                    case be.BATTLE_BOOSTER_REPLACE:
                                        return fe.BATTLE_BOOSTER;
                                }
                            })(n),
                            F = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case be.BATTLE_BOOSTER:
                                        return we.BATTLE_BOOSTER;
                                    case be.BATTLE_BOOSTER_REPLACE:
                                        return we.BATTLE_BOOSTER_REPLACE;
                                    case be.BUILT_IN_EQUIPMENT:
                                        return we.BUILT_IN_EQUIPMENT;
                                    case be.EQUIPMENT_PLUS:
                                        return we.EQUIPMENT_PLUS;
                                    case be.EQUIPMENT_TROPHY_BASIC:
                                        return we.EQUIPMENT_TROPHY_BASIC;
                                    case be.EQUIPMENT_TROPHY_UPGRADED:
                                        return we.EQUIPMENT_TROPHY_UPGRADED;
                                    case be.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return we.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case be.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return we.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case be.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return we.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case be.PROGRESSION_STYLE_UPGRADED_1:
                                        return we.PROGRESSION_STYLE_UPGRADED_1;
                                    case be.PROGRESSION_STYLE_UPGRADED_2:
                                        return we.PROGRESSION_STYLE_UPGRADED_2;
                                    case be.PROGRESSION_STYLE_UPGRADED_3:
                                        return we.PROGRESSION_STYLE_UPGRADED_3;
                                    case be.PROGRESSION_STYLE_UPGRADED_4:
                                        return we.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            d = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case ve.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case ve.CURRENCY:
                                    case ve.NUMBER:
                                        return r().createElement(ye, { format: 'integral', value: Number(e) });
                                    case ve.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return r().createElement(
                            'div',
                            { className: C()(je.base, je[`base__${a}`], l), style: o },
                            r().createElement(
                                Ye,
                                { tooltipArgs: E, className: je.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: C()(je.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: C()(je.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: C()(je.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        F &&
                                            r().createElement('div', {
                                                className: C()(je.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    je.info,
                                                    je[`info__${e}`],
                                                    i === ve.MULTI && je.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Ye,
                                    { tooltipArgs: A },
                                    r().createElement('div', {
                                        className: C()(je.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    qe = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Xe, Ke;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ke || (Ke = {}));
                const Qe = ({ size: e = Xe.Default, classMix: u }) =>
                        r().createElement('div', { className: C()(qe.background, qe[`background__${e}`], u) }),
                    Ze = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Je = ({ size: e }) => {
                        const u = C()(Ze.base, Ze[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    eu = {
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
                    uu = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const i = C()(
                                    eu.base,
                                    eu[`base__${e}`],
                                    t && eu.base__disabled,
                                    n && eu.base__finished,
                                    s && eu.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return r().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                r().createElement('div', { className: eu.pattern }),
                                r().createElement('div', { className: eu.gradient }),
                                o && r().createElement(Je, { size: e }),
                            );
                        },
                    ),
                    tu = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            r().createElement(uu, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    au = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let ru, nu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ru || (ru = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(nu || (nu = {}));
                const su = (0, a.memo)(
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
                                E = (0, a.useState)(nu.Idle),
                                A = E[0],
                                m = E[1],
                                F = A === nu.In,
                                d = A === nu.End,
                                _ = A === nu.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (_ && !t)
                                    return au(() => {
                                        D(nu.In);
                                    }, u);
                            }, [D, t, _, u]),
                                (0, a.useEffect)(() => {
                                    if (F)
                                        return au(() => {
                                            o && o(), D(nu.End);
                                        }, e + u);
                                }, [D, F, o, u, e]);
                            const B = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
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
                            return d
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      r().createElement(
                                          'div',
                                          { style: _ ? B : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(Je, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    iu = (0, a.memo)(
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
                                r().createElement(uu, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    r().createElement(su, {
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
                    ou = (e) => (e ? { left: 0 } : { right: 0 }),
                    lu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    cu = (e) => ({ transitionDuration: `${e}ms` }),
                    Eu = (0, a.memo)(
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
                                A = (0, a.useState)(ru.Idle),
                                m = A[0],
                                F = A[1],
                                d = m === ru.End,
                                _ = m === ru.Idle,
                                D = m === ru.Grow,
                                B = m === ru.Shrink,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        F(e), l && l(e);
                                    },
                                    [l],
                                ),
                                p = (0, a.useCallback)(
                                    (e, u) =>
                                        au(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return _
                                        ? p(ru.Grow, u)
                                        : D
                                          ? p(ru.Shrink, e)
                                          : B
                                            ? p(ru.End, e)
                                            : void (d && o && o());
                            }, [p, t, d, D, _, B, o, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, cu(e), ou(E)), [E, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, cu(e), ou(E)), [E, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, lu(E, n), cu(e)), [n, E, e]),
                                f = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, lu(E, n), cu(e)),
                                    [n, E, i, e],
                                );
                            if (d) return null;
                            const w = C()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: _ ? b : f, className: w },
                                r().createElement(
                                    'div',
                                    { style: B ? v : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(Je, { size: s }),
                                ),
                            );
                        },
                    ),
                    Au = (0, a.memo)(
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
                                A = (0, a.useState)(!1),
                                m = A[0],
                                F = A[1],
                                d = (0, a.useCallback)(
                                    (e) => {
                                        e === ru.Shrink && F(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                _ = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(uu, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? D : _,
                                }),
                                t >= 0 &&
                                    r().createElement(Eu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: d,
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
                    mu = ['onComplete', 'onEndAnimation'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const du = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, mu);
                        const s = (0, a.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case Ke.Simple:
                                return r().createElement(iu, Fu({}, n, { onEndAnimation: l, isComplete: i }));
                            case Ke.Growing:
                                return r().createElement(Au, Fu({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    _u = ['onEndAnimation'];
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
                const Bu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, _u);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        r().createElement(du, Du({}, t, { onEndAnimation: s, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const gu = (0, a.memo)(
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
                                return r().createElement(tu, {
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
                                ? r().createElement(Bu, c)
                                : r().createElement(du, Cu({ key: `${n}-${u}` }, c));
                        },
                    ),
                    pu = (e) => ({
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
                    hu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    vu = (e, u, t) => ('number' == typeof t ? (hu(0, u, t) / u) * 100 : e),
                    bu = {
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
                    fu = {
                        freezed: !1,
                        withStack: !1,
                        type: Ke.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    wu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = bu,
                            size: t = Xe.Default,
                            animationSettings: n = fu,
                            disabled: s = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: o,
                            value: l,
                            deltaFrom: c,
                            lineRef: E,
                            onChangeAnimationState: A,
                            onEndAnimation: m,
                            onComplete: F,
                        }) => {
                            const d = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (hu(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: vu(a, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return r().createElement(
                                'div',
                                { className: C()(qe.base, qe[`base__${t}`]), style: pu(u) },
                                !i && r().createElement(Qe, { size: t, classMix: o }),
                                r().createElement(gu, {
                                    size: t,
                                    lineRef: E,
                                    disabled: s,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    ),
                    Su = 'DailyMissionCard_status_de',
                    yu = ({
                        description: e,
                        missionIcon: u = 'cosmic_mars_points',
                        progressBarCurrentValue: t,
                        progressBarMaxValue: a,
                        progressBarEarned: n,
                        isCompleted: s,
                        className: i,
                        rewards: o,
                    }) => {
                        const l = void 0 !== n ? t - n : void 0;
                        return r().createElement(
                            'div',
                            { className: C()('DailyMissionCard_wrapper_e3', i) },
                            s &&
                                r().createElement('img', {
                                    src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.glow(),
                                    className: 'DailyMissionCard_glow_0d',
                                }),
                            r().createElement(
                                'div',
                                { className: 'DailyMissionCard_base_d3' },
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_header_71' },
                                    r().createElement(
                                        'div',
                                        { className: 'DailyMissionCard_heading_dd' },
                                        R.strings.cosmicEvent.postBattleScreen.dailyMission.heading(),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_body_58' },
                                    r().createElement('img', {
                                        className: 'DailyMissionCard_missionIcon_53',
                                        src:
                                            R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.$dyn(
                                                `${u}_gold`,
                                            ) ||
                                            R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.cosmic_mars_points_gold(),
                                    }),
                                    r().createElement('div', { className: 'DailyMissionCard_description_9a' }, e),
                                    r().createElement(
                                        'div',
                                        { className: 'DailyMissionCard_progressBar_ee' },
                                        r().createElement(
                                            'div',
                                            { className: 'DailyMissionCard_progressBar_label_83' },
                                            r().createElement(
                                                'span',
                                                { className: 'DailyMissionCard_progressBar_label_accent_da' },
                                                t,
                                                ' ',
                                            ),
                                            '/ ',
                                            a,
                                        ),
                                        r().createElement(wu, { size: Xe.Small, value: t, deltaFrom: l, maxValue: a }),
                                    ),
                                    r().createElement('div', { className: 'DailyMissionCard_rewards_23' }, o),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_footer_af' },
                                    r().createElement(
                                        'div',
                                        { className: Su },
                                        s
                                            ? r().createElement(
                                                  'div',
                                                  { className: Su },
                                                  r().createElement('img', {
                                                      className: 'DailyMissionCard_status_done_icon_07',
                                                      src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.done_icon(),
                                                  }),
                                                  r().createElement(
                                                      'div',
                                                      { className: 'DailyMissionCard_status_done_bd' },
                                                      R.strings.cosmicEvent.postBattleScreen.dailyMission.status.done(),
                                                  ),
                                              )
                                            : r().createElement(
                                                  'div',
                                                  { className: 'DailyMissionCard_status_active_02' },
                                                  R.strings.cosmicEvent.postBattleScreen.dailyMission.status.active(),
                                              ),
                                    ),
                                ),
                            ),
                        );
                    };
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
                const Tu = (0, j.observer)(({ children: e }) => {
                        const u = te().model,
                            t = u.root.get(),
                            a = u.computes.getDailyMissions(),
                            n = u.computes.getCurrentPlayerEntry(),
                            s = {
                                heading: R.strings.cosmicEvent.postBattleScreen.battleResults.playersPlace(),
                                missionsCompleted:
                                    R.strings.cosmicEvent.postBattleScreen.battleResults.missionsCompleted(),
                                noQuestProgression:
                                    R.strings.cosmicEvent.postBattleScreen.battleResults.noQuestProgression(),
                                battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                                battleInfoBattleOver:
                                    R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                                affirmativeButton:
                                    R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                                closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                            },
                            i = [
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.battleResults.player.marsPoints(),
                                    points: t.totalPoints,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.marsPoints_icon(),
                                },
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.battleResults.player.enemyKills(),
                                    points: t.killAmount,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.enemyKills_icon(),
                                },
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.battleResults.player.abilityPickups(),
                                    points: t.pickupAmount,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.abilityPickup_icon(),
                                },
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.battleResults.player.killStreak(),
                                    points: t.killStreak,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.killStreak_icon(),
                                },
                            ],
                            o = R.strings.cosmicEvent.postBattleScreen.desertersPoints();
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: 'BattleResults_base_d0' },
                                r().createElement(
                                    'div',
                                    { className: 'BattleResults_wrapper_d4' },
                                    r().createElement(Ce, {
                                        text: s.heading,
                                        binding: { place: n.place },
                                        classMix: 'BattleResults_heading_ce',
                                    }),
                                    r().createElement('div', { className: 'BattleResults_divider_4f' }),
                                    r().createElement(
                                        'div',
                                        { className: 'BattleResults_achievements_e0' },
                                        i.map(({ label: e, points: u, icon: t }, a) =>
                                            r().createElement(
                                                'div',
                                                { className: 'BattleResults_achievement_e6', key: a },
                                                r().createElement('img', {
                                                    className: 'BattleResults_achievement_icon_27',
                                                    src: t,
                                                }),
                                                r().createElement(
                                                    'div',
                                                    { className: 'BattleResults_achievement_points_1f' },
                                                    n.isDeserter ? o : u,
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: 'BattleResults_achievement_label_f2' },
                                                    e,
                                                ),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                'BattleResults_dailyMissions_42',
                                                a.length
                                                    ? 'BattleResults_dailyMissions_missions_f5'
                                                    : 'BattleResults_dailyMissions_missionsCompleted_14',
                                            ),
                                        },
                                        a.length
                                            ? a.map((e, u) => {
                                                  return r().createElement(yu, {
                                                      className: 'BattleResults_dailyMission_44',
                                                      description: e.description,
                                                      missionIcon: e.icon,
                                                      progressBarCurrentValue: e.currentProgress,
                                                      progressBarMaxValue: e.totalProgress,
                                                      isCompleted: e.completed,
                                                      key: u,
                                                      rewards: r().createElement(
                                                          r().Fragment,
                                                          null,
                                                          ((t = e.rewards),
                                                          t.map((e) => ({
                                                              name: e.name,
                                                              image: Pe(e, he.Small),
                                                              value: e.value,
                                                              valueType: ve.STRING,
                                                              tooltipArgs: Me({
                                                                  tooltipId: e.tooltipId,
                                                                  tooltipContentId: e.tooltipContentId,
                                                              }),
                                                          }))).map((e, u) =>
                                                              r().createElement(
                                                                  Ve,
                                                                  Ru({ className: 'BattleResults_reward_67' }, e, {
                                                                      key: u,
                                                                      size: he.Small,
                                                                  }),
                                                              ),
                                                          ),
                                                      ),
                                                  });
                                                  var t;
                                              })
                                            : r().createElement(
                                                  'div',
                                                  { className: 'BattleResults_dailyMissions_completed_36' },
                                                  t.hasDailyQuests ? s.noQuestProgression : s.missionsCompleted,
                                              ),
                                    ),
                                ),
                            ),
                            e,
                        );
                    }),
                    Pu = 'CosmicPostBattleApp_tab__inactive_09',
                    Mu = 'CosmicPostBattleApp_tab__selected_f8',
                    xu = 'CosmicPostBattleApp_tab_text_ae',
                    Ou = 'CosmicPostBattleApp_tab_border_93',
                    Nu = 'CosmicPostBattleApp_tab_glow_af';
                let ku;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
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
                        (e.DATE_YEAR = 'date-year');
                })(ku || (ku = {})),
                    Date.now();
                const Lu = (0, a.memo)(({ datetime: e, format: u = ku.SHORT_DATE, localize: t = !0 }) =>
                        ((e, u, t) => {
                            switch (u) {
                                case ku.SHORT_DATE:
                                    return t
                                        ? W.Z5.getDateFormat(e, W.kH.SHORT_FORMAT)
                                        : W.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case ku.SHORT_TIME:
                                    return t
                                        ? W.Z5.getTimeFormat(e, W.lf.SHORT_FORMAT)
                                        : W.cy.getTimeFormat('%I:%M %p', e, !0);
                                case ku.SHORT_DATE_TIME:
                                    return t
                                        ? `${W.Z5.getDateFormat(e, W.kH.SHORT_FORMAT)}, ${W.Z5.getTimeFormat(e, W.lf.SHORT_FORMAT)}`
                                        : W.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case ku.FULL_DATE:
                                    return t
                                        ? W.Z5.getDateFormat(e, W.kH.LONG_FORMAT)
                                        : W.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case ku.FULL_DATE_TIME:
                                    return t
                                        ? `${W.Z5.getDateFormat(e, W.kH.LONG_FORMAT)}, ${W.Z5.getTimeFormat(e, W.lf.SHORT_FORMAT)}`
                                        : W.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case ku.MONTH:
                                    return W.cy.getTimeFormat('%B', e, !0);
                                case ku.MONTH_DATE:
                                    return W.cy.getTimeFormat('%B %e', e, !0);
                                case ku.DATE_MONTH:
                                    return W.cy.getTimeFormat('%e %B', e, !0);
                                case ku.MONTH_YEAR:
                                    return W.cy.getTimeFormat('%B %Y', e, !0);
                                case ku.WEEK_DAY:
                                    return W.cy.getTimeFormat('%A', e, !0);
                                case ku.WEEK_DAY_TIME:
                                    return t
                                        ? `${W.cy.getTimeFormat('%A', e, !0)} ${W.Z5.getTimeFormat(e, W.lf.SHORT_FORMAT)}`
                                        : W.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case ku.YEAR:
                                    return W.cy.getTimeFormat('%Y', e, !0);
                                case ku.DATE_YEAR:
                                    return W.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, u, t),
                    ),
                    Iu = 'Footer_flexWrapper_c4',
                    Hu = 'Footer_battleInfo_heading_8c',
                    Uu = {
                        battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                        battleInfoBattleOver: R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                        affirmativeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                        closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                    },
                    Gu = (0, j.observer)(() => {
                        const e = te(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get();
                        return r().createElement(
                            'div',
                            { className: 'Footer_footer_74' },
                            r().createElement(
                                'div',
                                { className: Iu },
                                r().createElement(
                                    'div',
                                    { className: 'Footer_battleInfo_74' },
                                    r().createElement('div', { className: Hu }, Uu.battleInfoHeading),
                                    r().createElement(Ce, {
                                        classMix: 'Footer_battleInfo_info_3c',
                                        text: Uu.battleInfoBattleOver,
                                        binding: {
                                            date: r().createElement(
                                                'span',
                                                { className: Hu },
                                                r().createElement(Lu, {
                                                    datetime: a.battleOverTimestamp,
                                                    format: ku.SHORT_DATE_TIME,
                                                }),
                                            ),
                                        },
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Footer_affirmativeButton_container_d0' },
                                r().createElement(
                                    'div',
                                    { className: 'Footer_affirmativeButton_wrapper_29' },
                                    r().createElement(
                                        'button',
                                        {
                                            className: 'Footer_affirmativeButton_b3',
                                            onMouseEnter: () => {
                                                L.playHighlight();
                                            },
                                            onClick: () => {
                                                L.playYes(), t.onClose();
                                            },
                                        },
                                        Uu.affirmativeButton,
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: Iu }),
                        );
                    });
                var $u;
                !(function (e) {
                    (e.BattleResults = 'Battle'), (e.ArenaScore = 'ArenaScore');
                })($u || ($u = {}));
                const Wu = { closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close() },
                    zu = (0, j.observer)(() => {
                        const e = (0, a.useState)($u.BattleResults),
                            u = e[0],
                            t = e[1],
                            n = te().controls;
                        var s;
                        return (
                            (s = n.onClose),
                            Y($.n.ESCAPE, s),
                            r().createElement(
                                'div',
                                { className: C()('CosmicPostBattleApp_base_5f') },
                                u === $u.BattleResults
                                    ? r().createElement(Tu, null, r().createElement(Gu, null))
                                    : r().createElement(Ae, null, r().createElement(Gu, null)),
                                r().createElement(
                                    'div',
                                    { className: 'CosmicPostBattleApp_closeButton_1c' },
                                    r().createElement(G, {
                                        caption: Wu.closeButton,
                                        onClick: n.onClose,
                                        side: 'right',
                                        type: 'close',
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'CosmicPostBattleApp_tabs_98' },
                                    r().createElement('img', {
                                        className: 'CosmicPostBattleApp_tabs_patchWorkDecoration_f3',
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.patchwork_decor(),
                                    }),
                                    r().createElement('img', {
                                        className: 'CosmicPostBattleApp_tabs_decoration_27',
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.tabs_decor(),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'CosmicPostBattleApp_tabContainer_1f' },
                                        r().createElement(
                                            'div',
                                            {
                                                className: u === $u.BattleResults ? Mu : Pu,
                                                onClick: () => {
                                                    L.playYes(), u !== $u.BattleResults && t($u.BattleResults);
                                                },
                                                onMouseEnter: () => {
                                                    L.playHighlight();
                                                },
                                            },
                                            u === $u.BattleResults &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement('div', { className: Ou }),
                                                    r().createElement('div', { className: Nu }),
                                                ),
                                            r().createElement(
                                                'div',
                                                { className: xu },
                                                R.strings.cosmicEvent.postBattleScreen.tabs.battleResults(),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            {
                                                className: u === $u.ArenaScore ? Mu : Pu,
                                                onClick: () => {
                                                    L.playYes(), u !== $u.ArenaScore && t($u.ArenaScore);
                                                },
                                                onMouseEnter: () => {
                                                    L.playHighlight();
                                                },
                                            },
                                            u === $u.ArenaScore &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement('div', { className: Ou }),
                                                    r().createElement('div', { className: Nu }),
                                                ),
                                            r().createElement(
                                                'div',
                                                { className: xu },
                                                R.strings.cosmicEvent.postBattleScreen.tabs.arenaScore(),
                                            ),
                                        ),
                                    ),
                                    r().createElement('img', {
                                        className: 'CosmicPostBattleApp_tabs_patchWorkDecoration_right_76',
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.patchwork_decor(),
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(x, null, r().createElement(ue, null, r().createElement(zu, null))),
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
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
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
        (() => {
            var e = { 564: 0 };
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
                        (r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7042));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
